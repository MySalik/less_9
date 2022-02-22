import { useParams, useNavigate } from "react-router-dom"

import { useState, useContext } from "react"

import { PostsContext, callDeletePosts } from "../../contexts/PostsContext"

import { PostUpdate } from "../PostUpdate/PostUpdate"
import { PostRender } from "../../components/PostRender"


export const PostDetail = () => {
    const [isEdit, setEdit] = useState(false)
    const {posts, setPosts, error, loading} = useContext(PostsContext)
    const {id} = useParams()
    const navigate = useNavigate();

    const getObjectOrNull = () => {
        if (posts)
            return posts.filter((item) => {return item.id == id})[0]
        return null
    }

    const obj = getObjectOrNull()

    const onDelete = () => {
        const answer = callDeletePosts(id)
        setPosts(prevPosts => prevPosts.filter(item => item.id != id))
        navigate('/');
    }

    if (isEdit) return <PostUpdate obj={obj} closeUpdate={()=>{setEdit(false)}}/>

    if (error) return <h2>Ошибка загрузки</h2>

    if (loading) return <h2>Загрузка</h2>

    return (
        <main>
            {obj
            ? <PostRender id={id} content={obj.content} isDetail={true}>
                    <div className="d-flex justify-content-end">
                        <button
                            onClick={()=>setEdit(true)}
                            className="btn btn-primary me-2"
                        >
                            Изменить
                        </button>
                        <button
                            onClick={onDelete}
                            className="btn btn-danger"
                        >
                            Удалить
                        </button>
                    </div>
               </PostRender>
            :  <h2>Запись отсутствует</h2>
            }
        </main>
    )
}