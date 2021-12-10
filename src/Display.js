function Display (props) {
    let display = (props.bounty.name) 
    ? <div>
        <h2>{props.bounty.name}</h2>
        <h3>Wanted For: {props.bounty.wantedFor}</h3>
        <p>Last Seen: {props.bounty.lastSeen? props.bounty.lastSeen : 'Unkown'} </p>
    </div>
    : <p>Click "more" to see more about a bounty</p>
    
    
    return (
        <>{display}</>
    )
}

export default Display