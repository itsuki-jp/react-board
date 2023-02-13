import React, { useState, useEffect } from "react";

export function Threads() {
    const [thread, setThread] = useState([]);
    const [offset, setOffset] = useState(0);

    const url = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/";
    useEffect(() => {
        fetch(`${url}/threads?offset=${offset}`)
            .then(res => res.json())
            .then(res => setThread(res));
    }, []);

    return (
        thread.map((val) =>
            <div id={val.id} class="thread" >{val.title}</div>
        )
    );
}