import { React } from "react";
import {  Link } from 'react-router-dom';

export function Header() {
    return (
        <div id="titleArea">
            <Link to="/" id="title">掲示板</Link>
            <br/>
            <Link to="/thread/new" id="createThread">スレッドを立てる</Link>
        </div>
    );
}