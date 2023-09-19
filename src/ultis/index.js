const checkUserToken = () => {
  const userToken = localStorage.getItem("access_token");
  return !userToken || userToken === "undefined" ? false : true;
};
export { checkUserToken };
