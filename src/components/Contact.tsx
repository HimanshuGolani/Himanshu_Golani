import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { CONTACT } from '../content/portfolio-data';
import { Mail, Phone, Send, Loader2 } from 'lucide-react';

const SERVICE_ID = 'service_akubvs8';
const TEMPLATE_ID = 'template_5x13xts';
const PUBLIC_KEY = 'stVb0ZiKjPgsTcesy';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.3 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("Sending form data:", formData);
  
    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then((response) => {
        console.log("Success:", response);
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
  
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      })
      .catch((err) => {
        console.error("Failed to send message:", err); // Log error here
        setIsSubmitting(false);
        alert('Failed to send message. Please try again.\n' + err.text);
      });
  };
  

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary-400" />,
      title: 'Email',
      details: CONTACT.email,
      link: `mailto:${CONTACT.email}`,
    },
    {
      icon: <Phone className="w-6 h-6 text-primary-400" />,
      title: 'Phone',
      details: CONTACT.phoneNo,
      link: `tel:${CONTACT.phoneNo}`,
    },
  ];

  return (
    <div className="container mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-title inline-block">Get In Touch</h2>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto mt-6">
          Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        <div className="order-2 lg:order-1">
          <h3 className="text-2xl font-bold mb-6 text-gradient">Send me a message</h3>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 bg-primary-900/20 rounded-lg border border-primary-500/30 text-center"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-500/20 flex items-center justify-center"
              >
                <Send className="w-8 h-8 text-primary-400" />
              </motion.div>
              <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
              <p className="text-neutral-300">Thank you for reaching out. I'll get back to you as soon as possible.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors text-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors text-white resize-none"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        <div className="order-1 lg:order-2">
          <h3 className="text-2xl font-bold mb-6 text-gradient">Contact Information</h3>

          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                className="card hover:border-primary-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary-900/30">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-neutral-400 hover:text-primary-400 transition-colors duration-300"
                      >
                        {item.details}
                      </a>
                    ) : (
                      <p className="text-neutral-400">
                        {item.details}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 p-6 bg-gradient-to-br from-primary-900/20 to-background-dark rounded-lg border border-white/5"
          >
            <h4 className="text-xl font-bold mb-4">Let's Connect</h4>
            <p className="text-neutral-400 mb-6">
              I'm currently open to freelance opportunities and full-time positions. If you're looking for a developer to join your team or help with a project, feel free to reach out!
            </p>
            <div className="flex gap-4">
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-[#0A66C2] hover:bg-[#0A66C2]/80 text-white"
              >
                LinkedIn
              </a>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-neutral-800 hover:bg-neutral-700 text-white"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
