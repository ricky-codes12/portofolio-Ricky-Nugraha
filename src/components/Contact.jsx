import {
  Send,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";

import { getTranslations } from "../i18n";
import { Button } from "./ui/button";

function Contact({ language }) {
  const t = getTranslations(language);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!serviceId || !templateId || !publicKey) {
      setStatus("config");
      setMessage("EmailJS belum dikonfigurasi. Tambahkan VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, dan VITE_EMAILJS_PUBLIC_KEY di file .env.");
      return;
    }

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") || t.contact.defaultName;
    const email = formData.get("email") || "";
    const userMessage = formData.get("message") || "";

    setStatus("sending");
    setMessage("");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          message: userMessage,
          reply_to: email,
        },
        publicKey,
      );

      setStatus("success");
      setMessage("Pesan berhasil dikirim. Saya akan membalas lewat Gmail kamu.");
      event.currentTarget.reset();
    } catch (error) {
      console.error("EmailJS error", error);
      setStatus("error");
      setMessage("Gagal mengirim pesan. Mohon cek konfigurasi EmailJS atau coba lagi nanti.");
    }
  };

  return (
    <section
      className="section contact"
      id="contact"
    >
      <div className="section__title">
        <p>{t.contact.eyebrow}</p>
        <h2>{t.contact.title}</h2>
      </div>

      <div className="contact__content">
        <div className="contact__info">
          <div className="contact__lead">
            <strong>{t.contact.leadBold}</strong>
            <p>{t.contact.leadText}</p>
          </div>

          <div>
            <Mail size={22} />
            <span>rickynugraha1215@gmail.com</span>
          </div>

          <div>
            <Phone size={22} />
            <span>{t.contact.phoneLabel}</span>
          </div>

          <div>
            <MapPin size={22} />
            <span>{t.contact.location}</span>
          </div>
        </div>

        <form
          className="contact__form"
          onSubmit={handleSubmit}
        >
          <input
            name="name"
            type="text"
            placeholder={t.contact.placeholderName}
            required
          />

          <input
            name="email"
            type="email"
            placeholder={t.contact.placeholderEmail}
            required
          />

          <textarea
            name="message"
            placeholder={t.contact.placeholderMessage}
            required
          ></textarea>

          <Button
            type="submit"
            className="w-full sm:w-auto"
            disabled={status === "sending"}
          >
            <Send size={18} />
            {status === "sending" ? "Mengirim..." : t.contact.button}
          </Button>

          {message ? (
            <p
              role="status"
              className={
                status === "success"
                  ? "text-emerald-600"
                  : status === "config" || status === "error"
                    ? "text-rose-600"
                    : "text-slate-600"
              }
            >
              {message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

export default Contact;
