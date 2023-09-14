import {Link} from "react-router-dom";
import style from "./landing.module.css";

const Landing = () => {

    return (
    <div>
        <h3>Welcome to:</h3>
        <h1>Countries Web</h1>
        <p>by Franco</p>
        <Link  to="/home">
            <button>Enter</button>
        </Link>
    </div>)
}

export default Landing;