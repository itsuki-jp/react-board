import { React } from "react";

export function Header() {
    return (
        <div id="titleArea">
        <div id="title">掲示板</div>
        <a href="/create" id="createThread">スレッドを立てる</a>
        </div>
    );
}