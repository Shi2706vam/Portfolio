import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  PhoneCall,
  Send,
} from "lucide-react";
import Swal from 'sweetalert2';
import { cn } from "../lib/utils.js";

const Contact = ({ isDarkMode }) => {

  const Swal = require('sweetalert2');
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f027f4cd-a658-4ff8-8edd-dbbf48d51808");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      event.target.reset();
      Swal.fire({
        title: "Amazing!",
        text: "Message Sent",
        icon: "success",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
    } else {
      console.log("Error", data);
       Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
    }
  };

  return (
    <section id="contact" className="py-24 px-2 relative">
      <div className="container m-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-secondary">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-secondary mb-12 max-w-2xl mx-auto">
          Have a project or want to collaborate ? I'm always open to discussing
          new opportunities
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact</h3>

            <div className="space-y-6 items-center justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4
                    className={`font-medium ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    Email
                  </h4>
                  <a
                    href="mailto:shivam7170540@gmail.com"
                    className="text-secondary hover:text-primary transition-colors"
                  >
                    shivam7170540@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-6 items-center justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <PhoneCall className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4
                    className={`font-medium ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    Phone Number
                  </h4>
                  <a
                    href="tel:+917461837841"
                    className="text-secondary hover:text-primary transition-colors"
                  >
                    +91 7461837841
                  </a>
                </div>
              </div>
            </div>
            <div className={`pt-8 ${isDarkMode ? "text-white" : "text-black"}`}>
              <h4 className="font-semibold mb-4">Contact with Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/shivam-kumar-7a34a81b9"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a href="https://github.com/Shi2706vam" target="_blank">
                  <Github />
                </a>
                <a href="https://instagram.com/shivamroy2706" target="_blank">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
          <div
            className={`bg-card p-8 rounded-lg shadow-xs ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form action="" className="space-y-6" onSubmit={onSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className={`block text-m font-medium mb-2 ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className={`${
                    isDarkMode ? "text-white" : "text-black"
                  } w-full px-4 py-3 rounded-md border border-input bg-background focuse:outline-hidden focuse:ring-2 focus:ring-primary `}
                  required
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className={`block text-m font-medium mb-2 ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={`${
                    isDarkMode ? "text-white" : "text-black"
                  } w-full px-4 py-3 rounded-md border border-input bg-background focuse:outline-hidden focuse:ring-2 focus:ring-primary `}
                  required
                  placeholder="test@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className={`block text-m font-medium mb-2 ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  Your Message
                </label>
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  className={`${
                    isDarkMode ? "text-white" : "text-black"
                  } w-full px-4 py-3 rounded-md border border-input bg-background focuse:outline-hidden focuse:ring-2 focus:ring-primary `}
                  required
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className={`text-white m-auto cursor-pointer text-m flex items-center justify-center gap-1.5 px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shaow-[0_0_10px_rgba(139,93,246,0.5)] hover:scale-1s active:scale-95`}
              >
                SEND
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
