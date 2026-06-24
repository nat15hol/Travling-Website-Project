import { useState } from "react";

export default function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handleLogin() {
    console.log("Login clicked");
    console.log(username);
    console.log(password);
    setIsLoggedIn(true);
  }

return (
    <div>
      <h1>Login</h1>

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>
        Log in
      </button>
    </div>
  );

}