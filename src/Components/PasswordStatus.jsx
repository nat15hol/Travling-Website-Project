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

  let status = "idle";
  let message = "";

  const isMissing =
    !username || !email || !password || !confirmPassword;

  const isTooShort =
    password.length > 0 && password.length < MIN_PASSWORD_LENGTH;

  const isMismatch =
    confirmPassword.length > 0 &&
    password !== confirmPassword;

  const isSuccess =
    !isMissing &&
    !isTooShort &&
    !isMismatch &&
    !usernameTaken &&
    !emailTaken;

  if (usernameTaken) {
    status = "error";
    message = "Username is already taken";
  } else if (emailTaken) {
    status = "error";
    message = "Email is already in use";
  } else if (isTooShort) {
    status = "error";
    message = "Password must be at least 12 characters";
  } else if (isMissing) {
    status = "warning";
    message = "Please complete all fields";
  } else if (isMismatch) {
    status = "error";
    message = "Passwords don’t match";
  } else if (isSuccess) {
    status = "success";
    message = "Create account to begin your adventure!";
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