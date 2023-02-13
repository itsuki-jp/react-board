import React, { useState } from "react";

export function Threads(props) {
    console.log(props)
    return (
        props.thread.map((val) =>
            <div id={val.id} class="thread" >{val.title}</div>
        )
    );
}