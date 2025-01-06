import React, { useState } from "react";

function Login({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handlSubmit = (e) => {
        if (username === "user" & password === "password") {
            onLogin(true);
        } else {
            alert("Invalid credentials");
        }
    };

return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handlSubmit}>
            <input
            type = "text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            />
            <br />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
            <br />
            <button type="submit">Login</button>
        </form>
    </div>
);
}

export default Login;