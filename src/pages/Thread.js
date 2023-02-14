import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
const url = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/";

export function Threads() {
    const params = useParams();
    const offSet = 0;
    const [replies, setReplies] = useState([]);
    const [replyContent, setReplyContent] = useState("");
    function getReply() {
        // postされた順番にならない
        fetch(`${url}/threads/${params.thread_id}/posts?offset=${offSet}`)
            .then(res => res.json())
            .then(res => setReplies(res.posts));
    }
    function postReply() {
        const data = { "post": replyContent }
        fetch(`${url}/threads/${params.thread_id}/posts`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(()=>setReplyContent(""))
            .then(() => getReply());
    }
    useEffect(() => {
        getReply();
    }, []);
    return (
        <div>
            <button onClick={getReply}>Refresh</button>
            <input value={replyContent} onChange={(e) => { setReplyContent(e.target.value) }} ></input>
            <button onClick={postReply}>Post Reply</button>
            {replies.map(val => {
                return <div key={val.id}>{val.post}</div>
            })}
        </div>
    );
} 