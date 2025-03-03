"use client";

import { useState } from "react";

export default function ContactForm() {
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
        setStatus("The message has been sent. Thank you!");
      } else {
        setError("The message cannot be sent.");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError("Error sending message.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6">
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        className="input"
      />

      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="input"
      />

      <label>Message</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        className="input"
        rows={4}
      />

      <button type="submit" className="btn">
        Send Message
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
