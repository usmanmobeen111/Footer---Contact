import React from "react";
import { motion } from "framer-motion";

const inputVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

const FooterContact = () => {
  return (
    <motion.div
      className="w-full md:w-[45vw] bg-transparent backdrop-blur-3xl p-6 md:p-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <form action="" className="flex flex-col gap-4">
        {/* Name Fields */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 w-full md:max-w-[500px] lg:max-w-[45vw]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.input
            type="text"
            placeholder="First Name"
            custom={0}
            variants={inputVariants}
            className="min-w-0 flex-1 rounded-lg bg-gray-100 placeholder:text-gray-500 px-4 py-3 outline-none focus:ring-2 focus:ring-primary/60 transition duration-200"
          />
          <motion.input
            type="text"
            placeholder="Last Name"
            custom={1}
            variants={inputVariants}
            className="min-w-0 flex-1 rounded-lg bg-gray-100 placeholder:text-gray-500 px-4 py-3 outline-none focus:ring-2 focus:ring-primary/60 transition duration-200"
          />
        </motion.div>

        {/* Email */}
        <motion.input
          type="email"
          placeholder="Email Address"
          custom={2}
          variants={inputVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-lg bg-gray-100 placeholder:text-gray-500 px-4 py-3 outline-none focus:ring-2 focus:ring-primary/60 transition duration-200"
        />

        {/* Message */}
        <motion.textarea
          name="message"
          rows="5"
          placeholder="Enter Your Message"
          custom={3}
          variants={inputVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-lg bg-gray-100 placeholder:text-gray-500 px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-primary/60 transition duration-200"
        ></motion.textarea>

        {/* Button */}
        <motion.button
          type="submit"
          custom={4}
          variants={inputVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-3 shadow-md hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-500 transition duration-200 cursor-pointer"
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
};

export default FooterContact;
