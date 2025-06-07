import { motion } from "framer-motion";
import type { NextPage } from "next";
import Layout from "../layouts/Main";
import { EmailIcon, LocationIcon, PhoneIcon } from "../assets/svg";
import { Form, FormProps, Input } from "antd";

type FieldType = {
  firstName?: string;
  lastName?: string;
  phone?: number;
  email?: string;
  description?: string;
};

const Contact: NextPage = () => {
  const [form] = Form.useForm();

  const onFinish = async (values: FieldType) => {
    console.log("Success:", values);
    const { firstName, lastName, phone, email, description } = values;

    try {
      const subject = encodeURIComponent("Contact");
      const body = encodeURIComponent(
        `First Name: ${firstName || ""}\n` +
          `Last Name: ${lastName || ""}\n` +
          `Phone: ${phone || ""}\n` +
          `Email: ${email || ""}\n` +
          `Description: ${description || ""}`
      );

      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=hongnhungvu.267@gmail.com&su=${subject}&body=${body}`;
      window.open(gmailUrl, "_blank");
    } catch (errorInfo) {
      console.error("Validation Failed:", errorInfo);
    }
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
        <section className="px-3 lg:px-[100px]">
          <h1 className="libre-bodoni-bold py-[60px] text-[32px] lg:text-[56px] md:text-[44px] text-center">
            Contact
          </h1>
          <div className="max-w-6xl mx-auto flex flex-wrap md:grid grid-cols-[2fr_1fr] gap-8">
            <div className="bg-contact-card1 w-full p-6 rounded-[14px] border border-[#E7E7E7]">
              <Form
                form={form}
                className="space-y-6 form-input"
                onFinish={onFinish}
                layout="vertical"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <Form.Item<FieldType>
                    className="m-0"
                    name="firstName"
                    label={
                      <span className="block text-gray-700 font-medium mb-2 plus-sans-light">
                        First Name
                      </span>
                    }
                    rules={[
                      {
                        required: true,
                        message: "Please input your first name!",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      placeholder="Your first name"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 placeholder-gray-400"
                    />
                  </Form.Item>

                  <Form.Item<FieldType>
                    className="m-0"
                    name="lastName"
                    label={
                      <span className="block text-gray-700 font-medium mb-2 plus-sans-light">
                        Last Name
                      </span>
                    }
                    rules={[
                      {
                        required: true,
                        message: "Please input your last name!",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      placeholder="Your last name"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 placeholder-gray-400"
                    />
                  </Form.Item>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Form.Item<FieldType>
                    className="m-0"
                    name="phone"
                    label={
                      <span className="block text-gray-700 font-medium mb-2 plus-sans-light">
                        Phone
                      </span>
                    }
                    rules={[
                      { required: true, message: "Please input your phone!" },
                    ]}
                  >
                    <Input
                      type="tel"
                      placeholder="+44"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 placeholder-gray-400"
                    />
                  </Form.Item>

                  <Form.Item<FieldType>
                    className="m-0"
                    name="email"
                    label={
                      <span className="block text-gray-700 font-medium mb-2 plus-sans-light">
                        Email
                      </span>
                    }
                    rules={[
                      { required: true, message: "Please input your email!" },
                      { type: "email", message: "Please input a valid email!" },
                    ]}
                  >
                    <Input
                      type="email"
                      placeholder="hello@mangcoding.com"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 placeholder-gray-400"
                    />
                  </Form.Item>
                </div>

                <Form.Item<FieldType>
                  className="m-0"
                  name="description"
                  label={
                    <span className="block text-gray-700 font-medium mb-2 plus-sans-light">
                      Description
                    </span>
                  }
                >
                  <Input.TextArea
                    rows={6}
                    placeholder="Description"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 placeholder-gray-400 resize-none"
                  />
                </Form.Item>

                <div className="w-full h-[58px] bg-btn p-1">
                  <button
                    type="submit"
                    className="btn-book-now text-white w-full h-full rounded-xl py-[14px] px-[20px] bg-[#050810]"
                  >
                    Send Now
                  </button>
                </div>
              </Form>
            </div>

            <div className="bg-contact-card2 flex flex-col gap-4 p-6 rounded-[14px] border border-[#E7E7E7] h-fit">
              <div className="flex gap-[6px]">
                <EmailIcon />
                <div className="flex flex-col gap-[6px]">
                  <h3 className="text-[#8B919E] text-sm text-plus-sans">
                    Email
                  </h3>
                  <p className="text-[#050810] text-plus-sans">
                    hongnhungvu.267@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex gap-[6px]">
                <PhoneIcon />
                <div className="flex flex-col gap-[6px]">
                  <h3 className="text-[#8B919E] text-sm text-plus-sans">
                    Phone
                  </h3>
                  <p className="text-[#050810] text-plus-sans">
                    01582 &ensp; 948644
                  </p>
                </div>
              </div>
              <div className="flex gap-[6px]">
                <LocationIcon />
                <div className="flex flex-col gap-[6px]">
                  <h3 className="text-[#8B919E] text-sm text-plus-sans">
                    Address
                  </h3>
                  <p className="text-[#050810] text-plus-sans">
                    53 High street North, Dunstable LUG 1JF
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </Layout>
  );
};

export default Contact;
