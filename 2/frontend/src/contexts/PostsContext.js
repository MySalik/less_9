import{ createContext, useEffect, useState } from'react'

import useFetch from "../hooks/useFetch"


const PostsContext = createContext()


const PostsProvider = ({ children }) => {
    const [{data, error, loading}] = useFetch("http://localhost:7779/posts")
	const [posts, setPosts] = useState(data)

	useEffect(()=>{
		setPosts(data)
	}, [data])
	
    return (
      <PostsContext.Provider value={{ posts, setPosts, error, loading }}>
        {children}
      </PostsContext.Provider>
    );
};


const callPostPosts = async (body) => {
	const requestOptions = {
		method: "POST",
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body)
	};

	const response = await fetch("http://localhost:7779/posts", requestOptions)
	return await response.status
}


const callDeletePosts = async (id) => {
	const requestOptions = {
		method: "DELETE",
		headers: { 'Content-Type': 'application/json' },
	};

	const response = await fetch(`http://localhost:7779/posts/${id}`, requestOptions)
	return await response.status
}


export {PostsContext, callPostPosts, callDeletePosts, PostsProvider};