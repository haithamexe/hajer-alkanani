import React from "react";

const Footer = () => {
  return (
    <div className="bg-body px-2 pb-2">
      <section className="text-center border-4 border-t-0 border-accent rounded-xl">
        <h1 className="text-accent text-md p-4 font-mono 1">
          Powered by ©
          <a
            href="https://www.haithamexe.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline ml-2"
          >
            Haitham Jalal
          </a>
        </h1>
      </section>
    </div>
  );
};

export default Footer;
