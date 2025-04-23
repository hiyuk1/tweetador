import Tweet from './Tweet'

interface TweetListProps {
    tweets: string[]
}

function TweetList ({ tweets }: TweetListProps) {
    if (tweets.length == 0) return <p>Nenhum tweet ainda :(</p>
    
    return  (
        <ul>
            {tweets.map((t, i) => (
                <Tweet key={i} content={t} />
            ))}
        </ul>
    )    
}

export default TweetList