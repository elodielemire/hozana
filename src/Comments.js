import React, {useState} from "react";

import {comments} from "./fixtures/comments";

export const Comments = () => {
    const [comment, setComment] = useState("")
    const [commentsStored, setCommentsStored] = useState([])

    const handleForm = e => {
        e.preventDefault();
        const newCommentsState = [...commentsStored]
        newCommentsState.push(comment)
        setCommentsStored(newCommentsState);
        setComment("");
    };

    return (
        <>
            <form onSubmit={handleForm} className="comment-container">
                <input
                    onChange={(e) => setComment(e.target.value)}
                    value={comment}
                    type="text"
                    placeholder="Votre intention de prière"/>
                <button disabled={comment === ""}>Envoyer</button>
            </form>

            {commentsStored.length > 0 &&
                <p>{commentsStored.length} intention(s) de prière </p>
            }

            <ul>
                {commentsStored.map((comment, index) => {
                    return <li key={index}>{comment}</li>
                })}
            </ul>
        </>
    )
}
