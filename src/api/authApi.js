import Client from "./index.js";
const logIn = async (data) => {
  try {
    let result = await Client.post("/auth/signin", data);
    console.log(result);
    if (!result.data.success) {
      return {
        success: false,
        message: result.data.message,
      };
    }
    localStorage.setItem("access_token", result.data.data.accessToken);
    localStorage.setItem("user", {
      id: result.data.data.id,
      email: result.data.data.email,
      name: result.data.data.username,
    });
    return {
      success: true,
      message: result.data.message,
    };
  } catch (error) {
    console.log(error.message);
  }
};
export { logIn };
