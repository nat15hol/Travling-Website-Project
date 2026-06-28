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

  const hasAllFields =
    username && email && password && confirmPassword;

  let status = "idle";
  let message = "";
  let leftIcon = "";
  let rightIcon = "";

const isPrefix =
  password.startsWith(confirmPassword) &&
  confirmPassword.length > 0;

const isExactMatch =
  password === confirmPassword && confirmPassword.length > 0;

if (usernameTaken) {
  status = "error";
  message = "Username is already taken";

} else if (emailTaken) {
  status = "error";
  message = "Email is already in use";

// PASSWORD först (viktigare än "allt ifyllt")
} else if (password.length > 0 && password.length < MIN_PASSWORD_LENGTH) {
  status = "error";
  message = "Password must be at least 12 characters";

} else if (!username || !email || !password || !confirmPassword) {
  status = "warning";
  message = "Please complete all fields";

} else if (isPrefix && !isExactMatch) {
  status = "warning";
  message = "So far correct — please confirm the password that you've";

} else if (confirmPassword && !isExactMatch) {
  status = "error";
  message = "Passwords don’t match";

} else {
  status = "success";
  message = "Create account to begin your adventure!";
}

  leftIcon = status === "success" ? "✅" : "❌";
  rightIcon = status === "success" ? "🛫" : "🛬";

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