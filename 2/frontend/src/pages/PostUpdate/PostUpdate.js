import { useNavigate } from 'react-router-dom';

import { useContext } from "react"

import { PostForm } from "../../components/PostForm"

import { PostsContext, callPostPosts } from "../../contexts/PostsContext"


const PostButtons = () => {
    const items = [
        {name:"Фото/видео", iconType:"photo_camera"},
        {name:"Чувства/действия", iconType:"emoji_emotions"},
        {name:"GIF", iconType:"gif_box"},
        {name:"Отменить друга", iconType:"group_add"},
        {name:"Отменить посещение", iconType:"location_on"}
    ]

    return (
        <div className='p-2'>
            <hr />
            <div className='row ps-3 pe-3 post_edit_buttons'>
                {items.map((item, id)=>{
                    return (
                        <div key={id} className='col-6'>
                            <button className='btn'>
                                <span className="material-icons">{item.iconType}</span>
                                <span>{item.name}</span>
                            </button>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}


export const PostUpdate = ({obj, closeUpdate}) => {
    const navigate = useNavigate();
    const {setPosts} = useContext(PostsContext)

    const onUpdate = form => {
        const answer = callPostPosts(form)
        setPosts(prevPost => prevPost.map( item => {
            if (item.id == obj.id){
                return {...item, content:form.content}
            }
            return item
        }))
        closeUpdate()
        navigate(`/posts/${obj.id}`)
    }

    return (
        <main className="page_form">
            <div className="d-flex justify-content-between p-2">
                <h6>Редактировать публикацию</h6>
                <button 
                    className="btn material-icons"
                    onClick={closeUpdate}
                >
                    close
                </button>
            </div>
            <PostForm 
                obj={obj}
                buttonText={"Сохранить"}
                onClickSend={onUpdate}
            >
                <PostButtons />
            </PostForm>
        </main>
    )
}