"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        setStatus(t("contact.sent"));
      } else {
        setError(t("contact.notSent"));
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError(t("contact.genericError"));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6">
      <label>{t("contact.name")}</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        className="input"
      />

      <label>{t("contact.email")}</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="input"
      />

      <label>{t("contact.message")}</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        className="input"
        rows={4}
      />

      <button type="submit" className="btn">
        {t("contact.sendMessage")}
      </button>

      {error && (
        <p className="pt-2 text-red-700 font-bold" role="alert">
          {error}
        </p>
      )}
      {status && (
        <p className="pt-2 font-bold" role="alert">
          {status}
        </p>
      )}
    </form>
  );
}
