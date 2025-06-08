import { motion } from "framer-motion";
import type { NextPage } from "next";
import Table from "../components/ui/Table";
import { serviceData } from "../data/service";
import Layout from "../layouts/Main";
import Image from "next/image";

const Service: NextPage = () => {
  return (
    <Layout>
      <motion.div
        className="service"
        id="service"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
      >
        <section className="px-3 lg:px-[100px]">
          <h1 className="libre-bodoni-bold  py-10 text-[32px] lg:text-[56px] md:text-[44px] text-center">
            Our Services & Prices
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
            {serviceData.map((item, index) => {
              return (
                <div className="flex flex-col gap-5 items-center" key={item.id}>
                  <Image
                    src={item.image}
                    width={610}
                    height={396}
                    className="rounded-xl"
                    alt={`service ${index}`}
                  />
                  <div className="w-full text-left">
                    <h2 className="libre-bodoni-bold text-[32px] lg:text-[40px]">
                      {item.title}
                    </h2>
                    <h2 className="libre-bodoni-bold text-[32px] lg:text-[40px]">
                      {item.desc}
                    </h2>
                  </div>
                  <Table columns={item.columns} data={item.data} />
                </div>
              );
            })}
          </div>
        </section>
      </motion.div>
    </Layout>
  );
};

export default Service;
