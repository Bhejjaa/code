import React, { useEffect } from "react";
import { testApi } from "../../apis/api";

const Homepage = () => {
  // print Hello after page load Automatic
  useEffect(() => {
    console.log("Hello");

    testApi().then((res) => {
      console.log(res);
    });
  });

  return (
    <div>
      <h1>Its Homepage</h1>
    </div>
  );
};

export default Homepage;
