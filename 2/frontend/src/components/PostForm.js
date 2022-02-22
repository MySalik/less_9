import { useEffect, useState } from "react"

import photo from '../assets/photo.jpg'


export const PostForm = ({obj, onClickSend, buttonText, className, children}) => {
    const [form, setForm] = useState(obj)
    useEffect(()=>setForm(obj),[])

    const handleNameChange = e => {
        const {name, value} = e.target
        setForm(prevForm => ({...prevForm, [name]:value}))
    }

    const handleSend = e => {
        e.preventDefault()
        onClickSend(form)
    }

    return (
        <>
            <div className="post_wrapper bg-white p-2">
                <div className="row">
                    <div className="col-2">
                        <img src={photo} />
                    </div>
                    <div className="col-10 ps-0">
                        <form className={className}>
                            <input 
                                className="post_add_input" 
                                name="content" 
                                value={form.content} 
                                onChange={handleNameChange}
                                placeholder="Напишите Вашу мысль..."
                            />
                            <span></span>
                            <div className="post_add_buttons">
                                <button className="btn material-icons">sentiment_satisfied</button>
                            </div>
                        </form>
                    </div>
                    {children}
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <button
                    onClick={handleSend}
                    className="btn btn-primary mt-2"
                >
                    {buttonText}
                </button>
            </div>
        </>
    )
}