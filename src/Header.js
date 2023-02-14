import { React } from "react";
import {  Link } from 'react-router-dom';

export function Header() {
    return (
        <div id="titleArea">
            <div id="title">掲示板</div>
            <Link to="/thread/new" id="createThread">スレッドを立てる</Link>
        </div>
    );
}