import React from "react";
import { styles } from "../styles";

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <>
      <footer className={`${styles.paddingX} flex-col`}>
        <div className="w-full flex justify-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
          <p className="font-poppins font-normal text-[18px] leading-[27px] text-white mb-5">
            Copyright &copy; {year}. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;