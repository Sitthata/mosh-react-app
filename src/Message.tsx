
function Message() {
    const name = 'First';
    return name ? <h1>Hello {name}</h1> : <h1>Hello World</h1>
}

export default Message;