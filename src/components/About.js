import User from "./User";
import UserClass from "./UserClass"
const About = () => {
    return(
        <div>
            <h1>About</h1>
            <h2>This is namaste react About section</h2>
            <User name = {"prasad (function)"} Location={"Tuni(Function)"}/> 

            <UserClass name = {"prasad (class)"} Location={"Tuni(class)"}/> 
        </div>
        
    )
}

export default About;