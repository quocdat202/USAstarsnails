import { motion } from "framer-motion";
import Image from "next/image";
import nail_left from "../../../assets/images/nail_left.png";
import fb_1 from "../../../assets/images/fb_1.png";
import fb_2 from "../../../assets/images/fb_2.png";
import fb_3 from "../../../assets/images/fb_3.png";
import nail_right from "../../../assets/images/nail_right.png";

const Feedback = () => {
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
      <div
        className="bg-[#FFFBEB] w-full pb-20  flex flex-col gap-10"
        id="feedback"
      >
        <div className="flex justify-between items-end p-3 sm:p-0">
          <div className="hidden sm:block">
            <Image src={nail_left} alt="nail left" />
          </div>
          <section className="flex flex-col gap-6 text-center">
            <h2 className="libre-bodoni-semi text-[32px] lg:text-[56px] md:text-[44px]">
              What Our Users Say
            </h2>
            <p className="text-[#8B919E] text-sm helvetica-neue">
              Real stories of how Flutter Builder empowers creators and delivers
              results—showcasing our commitment to excellence
            </p>
          </section>
          <div className="hidden sm:block">
            <Image src={nail_right} alt="nail left" />
          </div>
        </div>
        <div className="slider-container ">
          <div className="slider-track">
            <Image src={fb_1} alt="feedback 1" />
            <Image src={fb_2} alt="feedback 2" />
            <Image src={fb_3} alt="feedback 3" />
            <Image src={fb_1} alt="feedback 1" />
            <Image src={fb_2} alt="feedback 2" />
            <Image src={fb_3} alt="feedback 3" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Feedback;
