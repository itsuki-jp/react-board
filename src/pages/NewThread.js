import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

export function NewThread() {
    const url = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/";
    // ReactでDOMを直接取得しないほうが良い
    const [threadName, setThreadName] = useState("");
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
                // Navigate で Rootに戻す
                // React Router でページ遷移できる, 調べてみる
            })
            .catch((error) => {
                console.error('Error:', error);

            });

    }
    return (
        <div id="createThreadArea">
            <p>スレッド新規作成</p>
            <input type="text" value={threadName} onChange={(e) => setThreadName(e.target.value)} />
            <Link to="/">Topに戻る</Link>
            <button onClick={create}>作成</button>
        </div>
    );
}