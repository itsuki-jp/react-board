import { LatestThreads } from '../LatestThreads.js';
export function Home() {
    return (
        <div id="threadArea">
            <div id="threadTitle">新着スレッド</div>
            <LatestThreads />
        </div>

    );
}