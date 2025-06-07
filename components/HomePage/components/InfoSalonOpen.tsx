import { CheckedIcon } from "../../../assets/svg";
import info_salon from "../../../assets/svg/info_salon.svg";
import salon_opening from "../../../assets/svg/salon_opening.svg";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

export const InfoSalonOpen = () => {
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-3 md:px-[100px] py-[80px] w-full pb-0">
        <div className="flex flex-col gap-8 rounded-[14px] border border-[#E7E7E7] bg-plan-card">
          <h2 className="helvetica-neue-500 text-[32px] lg:text-[40px]  font-[500] p-4 pl-[24px]">
            Salon Information
          </h2>
          <div className="flex flex-col gap-5 pt-0 px-6 pb-8">
            <div className="flex gap-[10px] items-center p">
              <CheckedIcon />
              <p className="text-base plus-sans-light">
                Access to basic design tools
              </p>
            </div>
            <div className="flex gap-[10px] items-center">
              <CheckedIcon />
              <p className="text-base plus-sans-light">5 projects per month</p>
            </div>
            <div className="flex gap-[10px] items-center">
              <CheckedIcon />
              <p className="text-base plus-sans-light">
                Standard templates library
              </p>
            </div>
            <div className="flex gap-[10px] items-center">
              <CheckedIcon />
              <p className="text-base plus-sans-light">Email support</p>
            </div>
          </div>
          <Image src={info_salon} alt="info_salon" />
        </div>
        <div className="flex flex-col gap-8 rounded-[14px] border border-[#E7E7E7] bg-plan-card">
          <h2 className="helvetica-neue-500 text-[32px] lg:text-[40px] font-[500] p-4 pl-[24px] flex-shrink-0">
            Salon Opening
          </h2>
          <div className="flex flex-col gap-5 pt-0 px-6 pb-8">
            <p className="text-base plus-sans-light">Monday 9:00 AM–7:00 PM</p>
            <p className="text-base plus-sans-light">Tuesday 9:00 AM–7:00 PM</p>
            <p className="text-base plus-sans-light">
              Wednesday 9:00 AM–7:00 PM
            </p>
            <p className="text-base plus-sans-light">
              Thursday 9:00 AM–7:00 PM
            </p>
            <p className="text-base plus-sans-light">Friday 9:00 AM–7:00 PM</p>
            <p className="text-base plus-sans-light">
              Saturday 9:00 AM–7:00 PM
            </p>
          </div>
          <Image src={salon_opening} alt="salon_opening" />
        </div>
      </div>
    </motion.div>
  );
};
