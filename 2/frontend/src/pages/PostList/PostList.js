import { Link } from "react-router-dom"

import { useContext } from "react"

import { PostsContext } from "../../contexts/PostsContext"

import { PostRender } from "../../components/PostRender"


export const PostList = () => {
    const {posts, setPosts, error, loading} = useContext(PostsContext)

    if (error) return <h2>Ошибка загрузки</h2>

    if (loading) return <h2>Загрузка</h2>

    return (
        <main>
            <div className="post_wrapper bg-white p-2 d-flex justify-content-end mb-3">
                <Link 
                    className="btn btn-primary"
                    to="posts/new"
                >
                    Создать пост
                </Link>
            </div>

            <div className="posts_list">
                {!posts || posts.length == 0 
                ? <h2>Записи отсутствуют</h2>
                : posts.map(item=>{
                    return (
                        <PostRender 
                            key={item.id} 
                            content={item.content} 
                            id={item.id} 
                            is_comment={true}
                        />
                    )
                })}
            </div> 
        </main>
    )
}