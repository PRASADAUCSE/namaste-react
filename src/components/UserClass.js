import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);
    
    
    this.state = {
        count1: 0,
        
    }
}

    render(){
        const {count1}= this.state;
        return(
        <div className = "user-card">
            <h2>count1: {count1}</h2>
           <button onClick = {() => {
            this.setState({count1 : this.state.count1 + 1});
           }}>
            Count Increase
            </button>
            <h2>Name: {this.props.name}</h2>
            <h2>Location: {this.props.Location}</h2>
            <h2>Contact: 9347774361</h2>
        </div>
        )
    }  
}

export default UserClass;