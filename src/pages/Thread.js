import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
const url = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/";


export function Threads() {
    const params = useParams();
    const offSet = 0;
    const [replies, setReplies] = useState([]);
    const [replyContent, setReplyContent] = useState("");
    // const location = useLocation();
    // console.log(location);
    function getReply() {
        // postされた順番にならない
        // reply はどうやって判断？
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
            {/* Todo:タイトルを表示させたい */}
            <button onClick={getReply}>Refresh</button>
            <input value={replyContent} onChange={(e) => { setReplyContent(e.target.value) }} ></input>
            <button onClick={postReply}>Post Reply</button>
            {/* 最初はrepliesが空だから，エラー出る */}
            {replies.map(val => {
                return <div key={val.id} className ="reply">{val.post}</div>
            })}
        </div>
    );
} 