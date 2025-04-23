import { useEffect, useRef, useState } from "react";
import TweetList from './components/TweetList'

function App() {
    const [tweets, setTweets] = useState<string[]>([])
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        console.log('Tweets atualizados:', tweets)
    }, [tweets])

    function addTweet() {
        const value = inputRef.current?.value
        if (value) {
            setTweets([...tweets, value])
            if (inputRef.current) {
                inputRef.current.value = '';
            }
        }
    }

    return (
        <div style = {{ padding: '20px'}}>
            <h1>Tweetador</h1>
            <input ref={inputRef} placeholder="Digite um tweet..." />
            <button onClick={addTweet}>Adicionar</button>
            <TweetList tweets={tweets} />
        </div>
    )
}

export default App