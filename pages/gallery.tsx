import { motion } from "framer-motion";
import type { NextPage } from "next";

import Masonry from "react-masonry-css";
import { galleryImage } from "../data/service";
import Layout from "../layouts/Main";
import { Image } from "antd";

const Gallery: NextPage = () => {
  const breakpointColumnsObj = {
    default: 4,
    1280: 3,
    1024: 2,
    640: 1,
  };

  return (
    <Layout>
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
        <section className="px-3 lg:px-[100px] flex flex-col items-center">
          <div className="w-full max-w-[608px] py-[40px] flex flex-col gap-5 text-center">
            <h1 className="libre-bodoni-bold text-[32px] lg:text-[56px] md:text-[44px]">
              Gallery
            </h1>
            <p className="poppins-light text-lg">
              Total: {galleryImage.length} image
            </p>
            <h2 className="plus-sans-light text-[#828896] text-sm">
              Follow us to update new design
            </h2>
            <div className="flex justify-center gap-6 flex-wrap">
              <div className="w-[214px] h-[58px] bg-btn p-1">
                <a
                  href="https://www.facebook.com/share/1557oUy1eS7/?mibextid=wwXIfr"
                  target="_blank"
                >
                  <button className="btn-book-now text-white w-full h-full rounded-xl py-[14px] px-[20px] bg-[#050810]">
                    Facebook
                  </button>
                </a>
              </div>
              <div className="w-[214px] h-[58px] bg-btn p-1">
                <a
                  href="https://www.instagram.com/usastarsnails.dunstable?igsh=aDRwM3YzazFyNnpm&utm_source=qr"
                  target="_blank"
                >
                  <button className="btn-book-now text-white w-full h-full rounded-xl py-[14px] px-[20px] bg-[#050810]">
                    Instagram
                  </button>
                </a>
              </div>
            </div>
          </div>
          <Image.PreviewGroup>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid w-full"
              columnClassName="my-masonry-grid_column"
            >
              {galleryImage.map((item, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl item-image-gallery"
                >
                  <Image
                    src={item}
                    alt={`Gallery ${index}`}
                    className="rounded-xl"
                  />
                </div>
              ))}
            </Masonry>
          </Image.PreviewGroup>
        </section>
      </motion.div>
    </Layout>
  );
};

export default Gallery;
