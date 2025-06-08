import { motion } from "framer-motion";
import Image from "next/image";
import service_1 from "../../../assets/images/service1.png";
import service_2 from "../../../assets/images/service2.png";
import { handleWhatsAppOpen } from "../../../functions";

const services = [
  {
    id: 1,
    src: service_1,
    title: "⭐ BIAB",
    title2: "(Builder-in-a-Bottle)",
    desc: " With our unique BIAB Gel technique, your nails are about to look even better for even longer! BIAB is a new and improved type of gel that can create a durable manicure lasting up to 3 weeks when cared for properly, doesn't chip, and, most importantly, protects and leaves your natural nails looking healthy and strong!",
  },
  {
    id: 2,
    src: service_2,
    title: "Acrylic",
    desc: " With our unique BIAB Gel technique",
  },
  {
    id: 3,
    type: "video",
    src: "/videos/service_video.mp4",
    title: "Herbal pedicure",
    desc: " Start with a tranquil soak in warm water with a botanical blast of herbal extracts that are designed to rejuvenate, refresh, relieve stress, and renew your senses. You will love the blends, which are rich in natural ingredients. It also helps soften and hydrate rough skin to help with the removal of resistant calluses. Energize and bring balance to your body, soothes arthritis, joint pain, and relaxes muscles. Followed by an enjoyable hot stone reflexology foot massage <br/>  <br/> Includes your choice of custom made herbal products from our menu of herbs for a relaxing sensory experience. This service includes feet soak, nail and cuticle care, exfoliating, soothing mask, callus treatment, hot stone massage, hot towels, and choice of lacquer or nail strengthener. This Herbal Spa is sure to awaken your senses.",
  },
];

const OurServices = () => {
  return (
    <motion.div
      className="ourServices"
      id="ourServices"
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
        className="flex flex-col gap-10 py-[50px] sm:py-[80px] px-3 sm:px-[100px]"
        id="service"
      >
        <div className="flex items-center justify-between flex-col sm:flex-row">
          <h2 className="our-services-title text-[32px] lg:text-[56px] md:text-[44px]">
            Our services
          </h2>
          <div className=" w-[273px] h-[58px] bg-btn p-1 ">
            <button
              onClick={handleWhatsAppOpen}
              className="btn-book-now text-white w-[265px] h-[50px] rounded-xl py-[14px] px-[20px] bg-[#050810]"
            >
              Book now
            </button>
          </div>
        </div>
        {/* <div className="flex gap-5 flex-wrap justify-around"> */}
        <div className="content-services flex flex-wrap justify-center gap-5 items-start">
          {services.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col p-7 rounded-3xl border w-[32%] min-w-[365px] items-center"
              >
                {item?.type === "video" ? (
                  <video autoPlay muted loop playsInline className="rounded-lg">
                    <source src={item.src} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={item.src}
                    alt="service 1"
                    className="rounded-lg"
                  />
                )}
                <div className="mt-7 text-left w-full text-left">
                  {item.title2 ? (
                    <div>
                      <h3 className="title-service text-2xl">{item.title}</h3>
                      <p className="title-service text-2xl">{item.title2}</p>
                    </div>
                  ) : (
                    <h3 className="title-service text-2xl">{item.title}</h3>
                  )}
                  <div
                    className="m-0 mt-3 poppins-light"
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default OurServices;
