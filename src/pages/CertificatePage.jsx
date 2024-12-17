// PageComponent.js
import React from "react";
import Header from "../component/CommonHeader";
import Certificate from "../component/CertificateCom";

const CertificatePage = ({}) => {
  return (
    <div>
      <Header title="Certificates" />
      <Certificate />
    </div>
  );
};

export default CertificatePage;
