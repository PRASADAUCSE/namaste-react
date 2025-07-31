import {useState} from "react";

const User = ({name, Location}) => {
    const[count1] = useState(1);
    const[count2] = useState(2);
    return(
        
        <div className = "user-card">
            <h2>count1: {count1}</h2>
            <h2>count2: {count2}</h2>
            <h2>Name: {name}</h2>
            <h2>Location: {Location}</h2>
            <h2>Contact: 9347774361</h2>
        </div>
    )
}

export default User;