import { useRef, useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaBehance,
  FaGithub,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState("success"); // "success" or "error"

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setModalMessage("Message sent successfully!");
          setModalType("success");
          setModalOpen(true);
        },
        (error) => {
          setModalMessage("Failed to send the message, please try again.");
          setModalType("error");
          setModalOpen(true);
          console.log(error.text);
        }
      );
  };

  const handleOk = () => {
    setModalOpen(false);
  };

  const handleSendAgain = () => {
    setModalOpen(false);
    form.current.reset();
  };

  return (
    <>
      <div className="-mb-30 text-white flex items-center justify-center px-4 sm:px-6 md:px-12 py-12 font-poppins">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Side */}
          <motion.div
            className="flex flex-col justify-between h-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.h2
                className="text-4xl md:text-5xl sm:pt-25 font-poppins font-semibold text-white"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                Let’s Work <br />
                <span className="text-[#59ff89]">Together</span>
              </motion.h2>
              <motion.p
                className="text-md md:text-medium font-poppins text-white mt-2 max-w-3xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Feel free to reach out for collaborations, freelance work, or
                just a friendly chat. I’m here to help bring your vision to
                life.
              </motion.p>
            </div>

            {/* Contact Cards */}
            <motion.div
              className="space-y-5 mt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              viewport={{ once: true }}
            >
              {/* Social Links */}
              <div className="flex flex-wrap justify-start gap-3 z-10">
                {[
                  {
                    icon: <FaLinkedin />,
                    link: "https://www.linkedin.com/in/theekshanadulanjana/",
                  },
                  {
                    icon: <FaBehance />,
                    link: "https://www.behance.net/dulanjana",
                  },
                  {
                    icon: <FaGithub />,
                    link: "https://github.com/TheekshanaDulanjana",
                  },
                  {
                    icon: <FaFacebookF />,
                    link: "https://www.facebook.com/theekshana.dulanjana",
                  },
                  {
                    icon: <FaInstagram />,
                    link: "https://www.instagram.com/dulan_jana_/",
                  },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center bg-transparent backdrop-blur-sm text-white justify-center border border-white rounded-md transition"
                    whileHover={{
                      scale: 1.2,
                      backgroundColor: "#59ff89",
                      color: "#000",
                    }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>

              {/* Email */}
              <motion.a
                href="mailto:theekshanadulanjana35@gmail.com"
                className="bg-transparent transition p-4 rounded-xl flex items-center justify-between backdrop-blur-lg shadow-lg outline-1 outline-white flex-row relative overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-[#59ff89] text-xl" />
                  <span className="break-words max-w-[200px] sm:max-w-none">
                    theekshanadulanjana35@gmail.com
                  </span>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                href="tel:+94715526761"
                className="bg-transparent transition p-4 rounded-xl flex items-center justify-between backdrop-blur-lg shadow-lg outline-1 outline-white flex-row relative overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="flex items-center gap-4">
                  <FaPhoneAlt className="text-[#59ff89] text-xl" />
                  <span>+9471 552 6761</span>
                </div>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="bg-transparent backdrop-blur-xs p-6 sm:p-8 shadow-lg space-y-6 border border-white/10 outline-2 outline-white rounded-xl h-full justify-between relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-2xl font-semibold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Your Detail
            </motion.h3>

            {/* Row 1 - Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm text-white mb-1">
                  Name <span className="text-[#59ff89]">*</span>
                </label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  className="w-full text-sm bg-transparent border-b border-gray-600 focus:border-[#59ff89] focus:outline-none text-white py-2 placeholder-gray-500"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm text-white mb-1">
                  Email Address <span className="text-[#59ff89]">*</span>
                </label>
                <input
                  type="email"
                  name="reply_to"
                  placeholder="Your Email"
                  required
                  className="w-full text-sm bg-transparent border-b border-gray-600 focus:border-[#59ff89] focus:outline-none text-white py-2 placeholder-gray-500"
                />
              </motion.div>
            </div>

            {/* Subject */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm text-white mb-1">
                Subject <span className="text-[#59ff89]">*</span>
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Message Subject"
                required
                className="w-full text-sm bg-transparent border-b border-gray-600 focus:border-[#59ff89] focus:outline-none text-white py-2 placeholder-gray-500"
              />
            </motion.div>

            {/* Comments */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm text-white mb-1">
                Comments / Questions <span className="text-[#59ff89]">*</span>
              </label>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                className="w-full bg-transparent border-b text-sm border-gray-600 focus:border-[#59ff89] focus:outline-none text-white py-2 placeholder-gray-500 resize-none"
              ></textarea>
            </motion.div>

            {/* Button */}
            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2 border-b border-gray-600 hover:border-[#59ff89] hover:text-[#59ff89] text-white font-medium hover:opacity-80 transition"
              >
                Send Message
              </button>
            </motion.div>
          </motion.form>
        </div>
      </div>

      {/* Modal Popup */}
      {modalOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur-md bg-opacity-50 z-50"
          onClick={handleOk}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-black/90 outline-1 text-white rounded-lg p-6 max-w-sm"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <p className="mb-6 text-center text-lg">{modalMessage}</p>

            {modalType === "success" ? (
              <div className="flex justify-between">
                <button
                  onClick={handleOk}
                  className="flex-1 hover:bg-[#59ff89] bg-gray-800 hover:text-gray-800 rounded px-2 py-2 font-medium"
                >
                  OK
                </button>
              </div>
            ) : (
              <div className="text-center">
                <button
                  onClick={handleOk}
                  className="bg-red-600 hover:bg-red-700 rounded px-4 py-2 font-semibold"
                >
                  OK
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
