import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="text-center py-6 text-sm text-white bg-white/10 backdrop-blur-sm mt-10">
      © {year} <span className="font-semibold">vijay.dev</span>. All rights reserved.
    </footer>
  );
};

export default Footer;
