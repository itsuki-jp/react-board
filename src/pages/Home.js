import { Threads } from '../Threads.js';
export function Home(props) {
    return (
        <div id="threadArea">
            <div id="threadTitle">新着スレッド</div>
            <Threads thread={props.thread} />
        </div>

    );
}