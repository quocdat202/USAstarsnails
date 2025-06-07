import { motion } from "framer-motion";
import { LocationIcon, PhoneIcon } from "../../../assets/svg";

const CopyAddress = () => {
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
      <div className="flex gap-[60px] py-[50px] sm:py-[80px] px-3 sm:px-[100px] w-full flex-wrap justify-around">
        <div className="flex flex-col gap-6 text-left sm:flex-shrink-0 sm:min-w-[400px] max-w-[500px]">
          <h3 className="libre-bodoni-semi text-[32px] lg:text-[56px] md:text-[44px]">
            Copy & Address
          </h3>
          <p className="desc-copy-address text-[#8B919E] text-sm">
            Step into the spacious, contemporary studio of USAstarsnails, where
            a team of passionate, highly skilled nail artists is ready to make
            you look and feel your best—no matter the occasion. In our calm,
            relaxing atmosphere, we use only premium products from leading
            brands such as OPI, SNS, DND, and CND. Whether you’re after a
            classic manicure or a bold new set of nails, we’re here to give you
            results you’ll be proud to show off. Book your appointment today and
            let us create the nails of your dreams!
          </p>
          <div className="flex gap-[6px]">
            <LocationIcon />
            <div className="flex flex-col gap-[6px]">
              <h3 className="text-[#8B919E] text-sm text-plus-sans">Address</h3>
              <p className="text-[#050810] text-plus-sans">
                53 High street North, Dunstable LUG 1JF
              </p>
            </div>
          </div>
          <div className="flex gap-[6px]">
            <PhoneIcon />
            <div className="flex flex-col gap-[6px]">
              <h3 className="text-[#8B919E] text-sm text-plus-sans">Phone</h3>
              <p className="text-[#050810] text-plus-sans">01582 948644</p>
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d560.8278140530487!2d-0.5241238255262736!3d51.88767137875415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48764f072e7d5551%3A0x4cba582708ac9f91!2zNTMgSGlnaCBTdCBOLCBEdW5zdGFibGUgTFU2IDFKRiwgVsawxqFuZyBRdeG7kWMgQW5o!5e0!3m2!1svi!2s!4v1749025097794!5m2!1svi!2s"
          height="456"
          style={{ border: "0" }}
          loading="lazy"
          className="flex-grow max-w-[780px]"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default CopyAddress;
