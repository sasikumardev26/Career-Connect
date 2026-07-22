import React from "react";
import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[70vh]">
      <ClipLoader
        color="#2563eb"
        size={70}
      />
    </div>
  );
};

export default Loading;