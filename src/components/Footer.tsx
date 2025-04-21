import { Github, Linkedin, Mail } from 'lucide-react';
import { CONTACT } from '../content/portfolio-data';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-gradient mb-4">HG</h2>
            <p className="text-neutral-400 max-w-md">
              A passionate full stack developer focused on creating innovative web applications
              and solutions that make a difference.
            </p>
            
            <div className="flex space-x-4 mt-6">
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon hover:bg-white/10"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon hover:bg-primary-700"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="social-icon hover:bg-accent-700"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-neutral-400 hover:text-white transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#about" className="text-neutral-400 hover:text-white transition-colors duration-300">About</a>
              </li>
              <li>
                <a href="#skills" className="text-neutral-400 hover:text-white transition-colors duration-300">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-neutral-400 hover:text-white transition-colors duration-300">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-400 hover:text-white transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-neutral-400">
                {CONTACT.address}
              </li>
              <li className="text-neutral-400">
                {CONTACT.phoneNo}
              </li>
              <li>
                <a 
                  href={`mailto:${CONTACT.email}`}
                  className="text-neutral-400 hover:text-primary-400 transition-colors duration-300"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-neutral-500">
            &copy; {currentYear} Himanshu Golani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;