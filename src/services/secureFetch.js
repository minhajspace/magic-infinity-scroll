export const secureFetch = (url, requestOptions) => {
  return new Promise((resolve, reject) => {
    fetch(url, requestOptions)
      .then((response) => {
        // response only can be ok in range of 2XX
        if (response.ok) {
          // you can call response.json() here too if you want to return json
          resolve(response);
        } else {
          //handle errors in the way you want to
          switch (response.status) {
            case 404:
              console.log("Object not found");
              break;
            case 400:
              console.log("Bad Request error");
              break;
            case 500:
              console.log("Internal server error");
              break;
            default:
              console.log("Some error occurred");
              break;
          }

          //here you also can throw custom error too
          reject(response);
          //store.dispatch(addUIError(response));
        }
      })
      .catch((error) => {
        //it will be invoked mostly for network errors
        reject(error);
      });
  });
};
