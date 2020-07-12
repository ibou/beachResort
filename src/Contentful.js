const contentful = require("contentful");

export default contentful.createClient({
    // space: "55dsyjt0tats",
    space: process.env.REACT_APP_API_SPACE,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
  });