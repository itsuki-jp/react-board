import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

export function NewThread() {
    const url = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/";
    const [threadName, setThreadName] = useState("");
    const navigate = useNavigate();
    function create() {
        const data = { title: threadName };
        fetch(`${url}/threads`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                setThreadName("");
                // navigate で Rootに戻す
                navigate('/');
            })
            .catch((error) => {
                console.error('Error:', error);

            });

    }
    return (
        <div id="createThreadArea">
            <p>スレッド新規作成</p>
            <input type="text" value={threadName} onChange={(e) => setThreadName(e.target.value)} />
            <button onClick={create}>作成</button>
        </div>
    );
}