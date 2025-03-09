"use client";
import ContactForm from "@/app/component/ContactForm";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <motion.section
      className="contact-section p-8 bg-gradient-to-t from-white to-yellow-950/10"
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="text-3xl font-bold pl-6 pt-10">Contact Me.</h1>
      <ContactForm />
    </motion.section>
  );
}
