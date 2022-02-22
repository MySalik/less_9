import { useNavigate } from 'react-router-dom';

import { useContext, useState } from "react"

import { PostForm } from "../../components/PostForm"

import { PostsContext, callPostPosts } from "../../contexts/PostsContext"


export const PostCreate = () => {
    const navigate = useNavigate();
    const [obj, setObj] = useState({id:0, content:""})
    const {setPosts} = useContext(PostsContext)

    const onCreate = form => {
        const answer = callPostPosts(form)
        setPosts(prevPost => [...prevPost, form])
        navigate('/');
    }

    return (
        <main className="page_form">
            <PostForm 
                obj={obj}
                buttonText={"Опубликовать"}
                onClickSend={onCreate}
            />
        </main>
    )
}