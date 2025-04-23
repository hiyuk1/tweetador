interface TweetProps {
    content: string
}

function Tweet ({ content }: TweetProps) {
    return <li style={{marginTop: '8px'}}>{content}</li>
}

export default Tweet