export default function PasswordStatus({
  password,
  confirmPassword,
  username,
  email,
  users,
}) {
  const MIN_PASSWORD_LENGTH = 12;

  const usernameTaken =
    username.trim() !== "" &&
    users.some((u) => u.username === username.trim());

  const emailTaken =
    email.trim() !== "" &&
    users.some((u) => u.email === email.trim());

  const isMissing =
    !username || !email || !password || !confirmPassword;

  const isTooShort =
    password.length > 0 && password.length < MIN_PASSWORD_LENGTH;

  const isMismatch =
    confirmPassword.length > 0 &&
    password !== confirmPassword;

  let status = "idle";
  let message = "";

  // 🟡 prioritetsordning (viktig för UX-flöde)
  if (usernameTaken) {
    status = "error";
    message = "This username is already taken";
  } else if (emailTaken) {
    status = "error";
    message = "This email is already in use";
  } else if (isTooShort) {
    status = "error";
    message = "Password needs at least 12 characters";
  } else if (isMissing) {
    status = "warning";
    message = "Please fill in all fields to continue";
  } else if (isMismatch) {
    status = "error";
    message = "Passwords don’t match yet";
  } else {
    status = "success";
    message = "Looks good — you can create your account";
  }

  const leftIcon = status === "success" ? "✅" : "❌";
  const rightIcon = status === "success" ? "🛫" : "🛬";

  return (
    <div className="message-area">
      <div className={`message ${status}`}>
        <span className="icon">{leftIcon}</span>
        <p className="text">{message}</p>
        <span className="icon">{rightIcon}</span>
      </div>
    </div>
  );
}