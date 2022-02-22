import { Link } from "react-router-dom"

import { useEffect, useState } from "react"

import photo from '../assets/photo.jpg'


export const PostRender = ({is_comment=false, id, content, children, isDetail=false}) => {
    const [openComment, setOpenComment] = useState(null)

    useEffect(()=>{
        setOpenComment(is_comment)
    },[])

    const commentBlock = (
        <div className="row post_comment">
            <div className="col-1">
                <img src={photo} className="w-100 h-75"/>
            </div>
            <form className="col-11 ps-0">
                <input 
                    type="text" 
                    className="form-control post_comment_input" 
                    placeholder="Напишите комментарий..."
                />
                <div className="post_comment_buttons">
                    <button className="btn material-icons">sentiment_satisfied</button>
                    <button className="btn material-icons">photo_camera</button>
                    <button className="btn material-icons">gif</button>
                </div>
            </form>
        </div>
    )

    const detailLinkBlock = (
        <div>
            <Link 
                className="material-icons text-decoration-none" 
                to={`posts/${id}`}
            >
                expand_more
            </Link>
        </div>
    )

    return  (
        <div className="post_wrapper bg-white p-2">
            <div className="d-flex justify-content-between">
                <div className="d-flex">
                    <img src={photo} />
                    <div className="ms-2 d-flex flex-column">
                        <a href="#" className="text-decoration-none">ilnaz Gilyazov</a>
                        <div className="fs-6">
                            <span>Основатель группы</span>
                            <span className="text-secondary"> · 6 мин.</span>
                        </div>
                    </div>
                </div>
                {!isDetail && detailLinkBlock}
            </div>
            <p className="fs-2">{content}</p>
            <hr className="mb-0" />
            <div className="d-flex justify-content-around">
                <div className="btn">
                    <span className="material-icons">thumb_up_off_alt</span>
                    <span className="icon_text">Нравится</span>
                </div>
                <div 
                    className="btn"
                    onClick={()=>{setOpenComment(!openComment)}}
                >
                    <span className="material-icons">chat_bubble_outline</span>
                    <span className="icon_text">Комментировать</span>
                </div>
            </div>
            <hr className="mt-0" />
            {openComment && commentBlock}
            {children}
        </div>
    )
}