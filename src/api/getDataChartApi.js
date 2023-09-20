import Client from "./index.js";
const getDataExecl = async () => {
  try {
    let result = await Client.get("/test-execl");
    if (!result.data.success) {
      return {
        success: false,
      };
    }
    return {
      success: true,
      data: result.data.data,
    };
  } catch (error) {
    console.log(error.message);
  }
};
export { getDataExecl };