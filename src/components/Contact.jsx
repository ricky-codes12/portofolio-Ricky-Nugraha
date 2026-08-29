import {
  AlertCircle,
  CheckCircle2,
  Send,
  Mail,
  MapPin,
  Phone,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
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
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || "rickynugraha1215@gmail.com";

  useEffect(() => {
    if (!message || status === "sending") return undefined;

    const timeout = window.setTimeout(() => {
      setMessage("");
      setStatus("idle");
    }, 6000);

    return () => window.clearTimeout(timeout);
  }, [message, status]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("config");
      setMessage(t.contact.statusConfig);
      return;
    }

    const formData = new FormData(form);
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
          to_email: contactEmail,
        },
        publicKey,
      );

      setStatus("success");
      setMessage(t.contact.statusSuccess);
      form.reset();
    } catch (error) {
      console.error("EmailJS error", error);
      setStatus("error");
      setMessage(t.contact.statusError);
    }
  };

  return (
    <section
      className="section contact"
      id="contact"
    >
      {message ? (
        <div
          className={`contact-toast contact-toast--${status}`}
          role={status === "error" || status === "config" ? "alert" : "status"}
        >
          <span className="contact-toast__icon">
            {status === "success" ? <CheckCircle2 size={22} /> : <AlertCircle size={22} />}
          </span>
          <div>
            <strong>{status === "success" ? t.contact.toastSuccess : t.contact.toastAttention}</strong>
            <p>{message}</p>
          </div>
          <button type="button" onClick={() => setMessage("")} aria-label={t.contact.toastClose}>
            <X size={18} />
          </button>
        </div>
      ) : null}

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
            {status === "sending" ? t.contact.sending : t.contact.button}
          </Button>

        </form>
      </div>
    </section>
  );
}

export default Contact;
