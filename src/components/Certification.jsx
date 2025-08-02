import React from "react";

const Certification = () => {
  return (
    <div className="bg-[#0e0e0e] text-white py-10 px-4 flex flex-col items-center">
      <h2 className="text-[32px] sm:text-[42px] font-bold mb-6">
        Certification
      </h2>

      <img
        src="/certifications/sap-abap-cert.png"
        alt="SAP ABAP Certificate"
        className="w-[300px] sm:w-[400px] rounded-xl shadow-xl"
      />

      <a
        href="https://www.credly.com/go/QJKqZMAlA2pgLABm0XzVGQ"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 text-cyan-400 text-[20px] hover:underline font-medium"
      >
        View Verified SAP ABAP Cloud Developer Credential
      </a>
    </div>
  );
};

export default Certification;
