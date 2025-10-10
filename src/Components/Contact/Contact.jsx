import React, { useState } from 'react';
import { Icon } from '@iconify-icon/react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false); // new state

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 letters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty.';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true); // start loading
    setStatus('');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: 'ad0d8623-4ead-496a-8c34-106903d78ef3',
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      const result = await res.json();
      console.log(result); //

      if (result.success) {
        setStatus('✅ Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      } else {
        setStatus('❌ Something went wrong. Try again.');
      }
    } catch (err) {
      setStatus('❌ Something went wrong. Try again.');
    } finally {
      setLoading(false); // stop loading
    }
  };

  return (
   <section className="overflow-hidden bg-slate-50 dark:bg-neutral-900 py-20 text-black dark:text-white" id="contact">
  <div className="w-full max-w-6xl md:px-0 px-4 mx-auto">
    <h1 className="text-4xl md:text-6xl font-medium mb-12">Contact</h1>
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">

          {/* Left Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-5xl font-bold mb-6"
            >
              Let’s Work <span className="text-[#7d2ae8]">Together!</span>
            </motion.h2>
            <p className="text-gray-600 dark:text-gray-400 md:text-base text-sm max-w-md mx-auto md:mx-0 mb-12">
              I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex justify-center md:justify-start gap-6 text-3xl">
              <a href="mailto:romify.dev@gmail.com" target="_blank" rel="noreferrer">
                <Icon icon="mdi:email-outline" className="hover:text-[#7d2ae8] hover:scale-125 active:text-[#7d2ae8] active:scale-125 transition-all duration-500" />
              </a>
              <a href="https://github.com/Rahma-Youssef" target="_blank" rel="noreferrer">
                <Icon icon="mdi:github" className="hover:text-[#7d2ae8] hover:scale-125 active:text-[#7d2ae8] active:scale-125 transition-all duration-500" />
              </a>
              <a href="https://linkedin.com/in/rahmayoussef" target="_blank" rel="noreferrer">
                <Icon icon="mdi:linkedin" className="hover:text-[#7d2ae8] hover:scale-125 active:text-[#7d2ae8] active:scale-125  transition-all duration-500" />
              </a>
              <a href="https://wa.me/201206984428" target="_blank" rel="noreferrer">
                <Icon icon="mdi:whatsapp" className="hover:text-[#7d2ae8] hover:scale-125 active:text-[#7d2ae8] active:scale-125 transition-all duration-500" />
              </a>
            </div>
          </div>

          {/* Right Section - Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 md:w-1/2 w-full bg-white/10 dark:bg-neutral-800/50 md:p-8 p-5 rounded-2xl shadow-lg backdrop-blur-md"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`peer w-full p-3 mb-4 rounded-lg bg-transparent border ${errors.name ? 'border-red-500' : 'border-gray-400 dark:border-gray-600'} focus:border-[#7d2ae8] outline-none text-black dark:text-white transition-all`}
              />
              <label className="absolute left-3 top-3 text-gray-500 dark:text-gray-400 text-sm transition-all duration-500 peer-focus:left-1 peer-focus:-top-6 peer-focus:text-sm peer-focus:font-medium peer-focus:text-[#7d2ae8] peer-valid:-top-6 peer-valid:text-sm peer-valid:text-[#7d2ae8]">
                Your Name
              </label>
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`peer w-full p-3 mb-4 rounded-lg bg-transparent border ${errors.email ? 'border-red-500' : 'border-gray-400 dark:border-gray-600'} focus:border-[#7d2ae8] outline-none text-black dark:text-white transition-all`}
              />
              <label className="absolute left-3 top-3 text-gray-500 dark:text-gray-400 text-sm transition-all duration-500 peer-focus:left-1 peer-focus:-top-6 peer-focus:text-sm peer-focus:font-medium peer-focus:text-[#7d2ae8] peer-valid:-top-6 peer-valid:text-sm peer-valid:text-[#7d2ae8]">
                Your Email
              </label>
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className={`peer w-full p-3 rounded-lg bg-transparent border ${errors.message ? 'border-red-500' : 'border-gray-400 dark:border-gray-600'} focus:border-[#7d2ae8] outline-none text-black dark:text-white transition-all`}
              ></textarea>
              <label className="absolute left-3 top-3 text-gray-500 dark:text-gray-400 text-sm transition-all peer-focus:left-1 peer-focus:-top-6 peer-focus:text-sm peer-focus:font-medium peer-focus:text-[#7d2ae8] peer-valid:-top-6 peer-valid:text-sm peer-valid:text-[#7d2ae8]">
                Your Message
              </label>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            {/* Submit Button with Loading */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className={`bg-gradient-to-r from-[#00c3ff] via-[#7d2ae8] to-[#ff6ec7] text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300 ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>

            {status && <p className="text-center mt-3 text-sm text-[#7d2ae8]">{status}</p>}
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
