import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export function LatestThreads() {
    const [thread, setThread] = useState([]);
    const [offset, setOffset] = useState(0);

    const url = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/";
    useEffect(() => {
        fetch(`${url}/threads?offset=${offset}`)
            .then(res => res.json())
            .then(res => setThread(res))
    }, []);

    return (
        thread.map((val, idx) =>
            <Link id={val.id} key={val.id} className="thread" to={`/thread/${val.id}`} state={{ title: val.title }}>{val.title}</Link>
        )
    );
}