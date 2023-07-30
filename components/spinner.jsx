import React from "react";
import spinner from "../public/spinner.gif";

const Spinner = ({ data }) => {
  return (
    <>
      <Image
        src={spinner}
        classname="block width-[200px] m-auto"
        alt="loading"
      />
    </>
  );
};

export default Spinner;
