import React from "react";
import { ColorRing } from "react-loader-spinner";

const Spinner = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{ margin: "auto", zIndex: "50" }}
      wrapperClass="blocks-wrapper"
      colors={["#3b82f6", "#5593f7", "#3b82f6", "#5593f7", "#3b82f6"]}
    />
  );
};

export default Spinner;
