// PageComponent.js
import React from "react";
import Header from "../component/CommonHeader";
import Resume from "../component/ResumeCom";

const ResumePage = ({}) => {
  return (
    <div>
      <Header title="Resume" />
      <Resume />
    </div>
  );
};

export default ResumePage;
