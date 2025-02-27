import ContactForm from "@/app/component/ContactForm";

export default function ContactPage() {
  return (
    <section className="contact-section p-8 bg-gradient-to-t from-white to-yellow-950/10">
      <h1 className="text-3xl font-bold pl-6 pt-10">Contact Me.</h1>
      <ContactForm />
    </section>
  );
}
