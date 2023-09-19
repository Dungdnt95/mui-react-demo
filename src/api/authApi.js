import Client from "./index.js";
const logIn = async (data) => {
  try {
    let result = await Client.post("/auth/signin", data);
    if (!result.data.success) {
      return {
        success: false,
        message: result.data.message,
      };
    }
    let user = {
      id: result.data.data.id,
      email: result.data.data.email,
      name: result.data.data.username,
    };
    localStorage.setItem("access_token", result.data.data.accessToken);
    localStorage.setItem("user", JSON.stringify(user));
    return {
      success: true,
      message: result.data.message,
    };
  } catch (error) {
    console.log(error.message);
  }
};
export { logIn };
