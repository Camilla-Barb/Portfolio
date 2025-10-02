"use client";
import ContactForm from "@/app/component/ContactForm";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function ContactPage() {
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <motion.section
      className="contact-section p-8 bg-yellow-900/10"
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      id="contact"
    >
      <h2 className="text-3xl font-bold text-center">{t("contact.title")}</h2>
      <ContactForm />
    </motion.section>
  );
}
