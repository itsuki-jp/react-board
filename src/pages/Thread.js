import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
const url = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/";


export function Threads() {
    const params = useParams();
    const offSet = 0;
    const location = useLocation();
    const { title } = location.state;
    const [replies, setReplies] = useState([]);
    const [replyContent, setReplyContent] = useState("");
    function getReply() {
        fetch(`${url}/threads/${params.thread_id}/posts?offset=${offSet}`)
            .then(res => res.json())
            .then(res => {
                console.log(res.posts);
                if (res.posts != null) setReplies(res.posts);
            });
    }
    function postReply() {
        if (replyContent === "") return;
        const data = { "post": replyContent }
        console.log(data);
        fetch(`${url}/threads/${params.thread_id}/posts`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(() => setReplyContent(""))
            .then(() => getReply());
    }
    useEffect(() => {
        getReply();
    }, []);
    return (
        <div>
            {/* Todo:タイトルを表示させたい => useLocationがBest*/}
            {/* https://zenn.dev/lilac/articles/c40b35fe3184da */}
            <h1>{title}</h1>
            <button onClick={getReply}>Refresh</button>
            <input  value={replyContent} onChange={(e) => { setReplyContent(e.target.value) }} ></input>
            <button onClick={postReply}>Post Reply</button>
            {replies.map(val => {
                return <div key={val.id} className="reply">{val.post}</div>
            })}
        </div>
    );
} 