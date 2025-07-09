import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "../lib/utils";

import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
    const  { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() =>{
            toast({
                title: "Message Sent",
                description: "Thank you for your message. Ill get back to you soon!",
            });
 setIsSubmitting(false);
        }, 1500);
       
    };
  return (
    <section className="py-24 px-4 relative bg-secondary/30" id="contact">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center tect-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          <div className="space-y-8 ">
            <h2 className="text-2xl font-semibold mb-10 md:relative pl-auto">
              {" "}
              Contact Information
            </h2>

            <div className="space-y-6 justify-center md:relative pl-15 lg:pl-20">
              <div className="flex items-start space-x-4 ">
                <div className="p-3 rounded full bg-primary/10 ">
                  <Mail className="w-6 h-6 text-primary " />
                </div>
                <div>
                  <h4 className="font-medium ">Email</h4>
                  <a
                    href="mailto:giannralph@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    giannralph@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 ">
                <div className="p-3 rounded full bg-primary/10 ">
                  <Phone className="w-6 h-6 text-primary " />
                </div>
                <div>
                  <h4 className="font-medium mx-15">Phone</h4>
                  <a
                    href="mailto:giannralph@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    0123456789
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 ">
                <div className="p-3 rounded full bg-primary/10 ">
                  <MapPin className="w-6 h-6 text-primary " />
                </div>
                <div>
                  <h4 className="font-medium mx-12">Location</h4>
                  <a className="hover:text-primary transition-colors">
                    hijo st.
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-9">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="">
                  <Linkedin />
                </a>
                <a
                  href="https://www.facebook.com/ralphgiann.suquib.5"
                  target="_blank"
                >
                  <Facebook />
                </a>
                <a href="https://www.instagram.com/brrt.brrtt/?__pwa=1" target="_blank">
                  <Instagram />
                </a>
                <a href="" target="_blank">
                  <Twitter />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-l shadow-xs ">
            <h3 className="text-2xl font-semibold mb-6" >Send a Message</h3>

            <form className="space-y-6 mb-5 " >
              <label htmlFor="name" className="block text-sm font-medium mb-4">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                placeholder="Ralph Giann Suquib..."
              />
           
          </form>
            <form className="space-y-6 mb-5">
              <label htmlFor="name" className="block text-sm font-medium mb-4">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                placeholder="abcd@gmail.com"
              />
            </form>
           

            <form className="space-y-6 "  onSubmit={handleSubmit}>
              <label htmlFor="name" 
            disabled={isSubmitting}
              className="block text-sm font-medium mb-4">
                Your Message
              </label>
              <textarea
                type="message"
                id="message"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                placeholder="Hello, I'd like to talk about....."
              />
            
            <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2 mt-6")}>
                { isSubmitting ? "Sending..." : "Send Message" } <Send size={15}/>
            </button>
              </form>
           
          </div>
          
        </div>
      </div>
    </section>
  );
};
