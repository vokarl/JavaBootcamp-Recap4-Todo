import {Link} from "react-router-dom";

export default function Nav (){
    return(
        <nav>

            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/components/Open"}>Open</Link></li>
                <li><Link to={"/components/Done"}>Done</Link></li>
                <li><Link to={"/components/New"}>New</Link></li>
            </ul>

        </nav>
    )
}