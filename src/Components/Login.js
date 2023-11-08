import React from "react"
import { useNavigate } from "react-router-dom";


export default function Login() {

    let navigate = useNavigate();

    const [textboxval, setTextboxval] = React.useState({
        username: "",
        password: ""
    })

    const [display, setDisplay] = React.useState("");

    function handleChange(event) {
        setTextboxval(preVal => {
            return {
                ...preVal,
                [event.target.name]: event.target.value
            }
        })
    }




    function submitFn() {
        let x = "";

        if (textboxval.username !== "admin" && textboxval.password !== "abc123") {
            x = "Wrong password &username";
            setDisplay(x);
        } else {

            navigate(`/teacherslist`);

        }
        setTextboxval({
            username: "",
            password: ""
        })
    }

    return (
        <div>
            Username  <input type="text" onChange={handleChange} value={textboxval.username} name="username" />
            <div>
                Password <input type="text" onChange={handleChange} value={textboxval.password} name="password" />
            </div>
            <div>
                <button onClick={submitFn}>Submit</button>
            </div>
            <div>
                {display}
            </div>
        </div>
    )
}