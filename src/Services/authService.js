const USERS_KEY = "users";
const CURRENT_USER_KEY = "currentUser";
export function getUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
}

export function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function findUserByUsername(username) {
  return getUsers().find(u => u.username === username);
}
function isMissing(user) {
  return (
    !user.firstName ||
    !user.lastName ||
    !user.username ||
    !user.email ||
    !user.password ||
    !user.confirmPassword
  );
}





export function validateSignup(user, users) {
  // 1. missing fields först
  if (isMissing(user)) {
    return { ok: false, error: "Please fill in all required fields" };
  }

  // 2. uniqueness
  const usernameTaken = users.some(u => u.username === user.username);
  if (usernameTaken) {
    return { ok: false, error: "Username is already taken" };
  }

  const emailTaken = users.some(u => u.email === user.email);
  if (emailTaken) {
    return { ok: false, error: "Email is already in use" };
  }

  // 3. password rules
  if (user.password.length < 12) {
    return { ok: false, error: "Password must be at least 12 characters" };
  }

  if (user.password !== user.confirmPassword) {
    return { ok: false, error: "Passwords don’t match" };
  }

  // 4. success
  return { ok: true };
}

export function signup(user) {
  const users = getUsers();

  const validation = validateSignup(user, users);
  if (!validation.ok) return validation;

  const newUser = {
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
    email: user.email,
    password: user.password,
  };

  users.push(newUser);
  saveUsers(users);

  return { ok: true };
}


export function login(username, password) {
  const users = getUsers();

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) return null;

  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  return user;
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
}

export function logout() {
  localStorage.removeItem(CURRENT_USER_KEY);
}