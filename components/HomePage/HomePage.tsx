import { motion } from "framer-motion";
import Image from "next/image";
import banner_home from "../../assets/images/banner_home.png";
import { ShimeIcon } from "../../assets/svg";
import CopyAddress from "./components/CopyAddress";
import Feedback from "./components/Feedback";
import { InfoSalonOpen } from "./components/InfoSalonOpen";
import OurServices from "./components/OurServices";
import { useDevice } from "../..//hooks/useDevice";
import { handleWhatsAppOpen } from "../../functions";

const HomePage = () => {
  const isMobile = useDevice() === "mobile";

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
      <div className="flex mb-[18px] flex-col gap-10">
        <div className="flex gap-8 px-3 md:px-[100px] pb-0 items-center justify-center">
          <div className="hidden sm:block">
            <ShimeIcon
              width={isMobile ? 150 : 207}
              height={isMobile ? 120 : 190}
            />
          </div>
          <div className="flex flex-col gap-5 items-center">
            <h1 className="libre-bodoni-semi  text-[32px] lg:text-[56px] md:text-[44px] text-center">
              Shine Like a Star with Our Nails
            </h1>
            <h2 className="text-[12px] lg:text-md text-center text-[#828896] desc-title-home">
              Custom designs · Natural products · Hygienic care
            </h2>
            <div className=" w-[214px] h-[58px] bg-btn p-1 ">
              <button
                onClick={handleWhatsAppOpen}
                className="btn-book-now text-white w-[206px] h-[50px] rounded-xl py-[14px] px-[20px] bg-[#050810]"
              >
                Book now
              </button>
            </div>
          </div>
        </div>
        <div className="relative px-2 sm:px-5">
          <div className=" py-[55px] sm:py-[84px] px-[20px] sm:px-[53px] relative z-[2] pt-0">
            <div className="rounded-2xl p-3 sm:p-5 bg-[#dcd7cc]">
              <Image
                className="img-banner"
                src={banner_home}
                alt="banner home"
              />
            </div>
          </div>
          <div className="w-full h-[240px] md:h-[367px] -mt-[17rem] lg:h-[552px] md:-mt-[25rem] lg:-mt-[36rem] bg-[#FFF4ED] rounded-3xl relative  z-0"></div>
        </div>
      </div>

      {/* Our services */}
      <OurServices />
      <CopyAddress />

      {/* What Our Users Say */}
      <Feedback />

      {/* Info Salon Open */}
      <InfoSalonOpen />
    </motion.div>
  );
};

export default HomePage;
