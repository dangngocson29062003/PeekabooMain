import axios from "axios";
const API_KEY = "AIzaSyAWuj1Otg1vufdQCFiPp3f-NBBYzYbffZ0";
export function createUser(email, password, displayName) {
  return authenticate("signUp", email, password, displayName);
}
export async function authenticate(mode, email, password, displayName) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email: email,
    password: password,
    displayName: displayName,
    returnSecureToken: true,
  });
  return response.data;
}
export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}
export async function resetPassword(email) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${API_KEY}`,
    {
      email: email,
      requestType: "PASSWORD_RESET",
    }
  );
}
export async function updateDisplayName(idToken, displayName) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`,
    {
      idToken: idToken,
      displayName: displayName,
      returnSecureToken: true,
    }
  );
  return response.data;
}
export async function updatePassword(idToken, password) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`,
    {
      idToken: idToken,
      password: password,
      returnSecureToken: true,
    }
  );
}
