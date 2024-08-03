import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaInstagram, FaLinkedin, FaGithub, FaSpotify } from 'react-icons/fa'; 


import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_epwrtko', 
      'template_2deulhn',
      {
        from_name: form.name,
        to_name: "Arya",
        from_email: form.email,
        to_email: "aryaagrawal414@gmail.com",
        message: form.message,
      },
      'JQT5VV5mlhLK9n_Co'
    )
    .then(() => {
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    },
    (error) => {
      setLoading(false);
      console.error(error);

      alert("Ahh, something went wrong. Please try again.");
    });
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>

        <div className='flex gap-4 mt-5'>
          <a href='https://www.instagram.com/arya._.02/' target='_blank' rel='noopener noreferrer'>
            <FaInstagram size={40} color='#d62976' />
          </a>
          <a href='https://www.linkedin.com/in/arya-agrawal-216621220/' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin size={40} color='#0072b1' />
          </a>
          <a href='https://github.com/Arya4141' target='_blank' rel='noopener noreferrer'>
            <FaGithub size={40} color='grey' />
          </a>
          <a href='https://open.spotify.com/?flow_ctx=11212bfa-8240-4166-9559-cecdf558a89b%3A1698194642' target='_blank' rel='noopener noreferrer'>
          <FaSpotify size={40} color='#1ED760' />
        </a>
        </div>

        <br />
        
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        {/* Social Media Icons */}
        {/* <div className='flex gap-4 mt-5'>
          <a href='https://www.instagram.com/arya._.02/' target='_blank' rel='noopener noreferrer'>
            <FaInstagram size={35} color='white' />
          </a>
          <a href='https://www.linkedin.com/in/arya-agrawal-216621220/' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin size={35} color='white' />
          </a>
          <a href='https://github.com/Arya4141' target='_blank' rel='noopener noreferrer'>
            <FaGithub size={35} color='white' />
          </a>
        </div> */}
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
