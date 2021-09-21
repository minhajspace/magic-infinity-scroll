
export const authHeader = () => {
  // return authorization header with basic auth credentials
  const userAccessToken = localStorage.getItem("userAccessToken");
  //  console.log("userAccessToken===",userAccessToken)

  if (userAccessToken) {
    return {
      "Content-Type": "application/json",
      Authorization: "Bearer " + userAccessToken,
    };
  } else {
    return { "Content-Type": "application/json" };
  }
};
