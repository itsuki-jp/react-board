export function CreateThread() {
    const url = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/";
    function create() {
        const data = { title: document.getElementById('threadName').value };
        fetch(`${url}/threads`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <div id="createThreadArea">
            <p>スレッド新規作成</p>
            <input type="text" id="threadName" />
            <a href="/">Topに戻る</a>
            <button onClick={create}>作成</button>
        </div>
    );
}