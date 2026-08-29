import { Bot, MessageCircle, Send, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { getTranslations } from "../i18n";

const copy = {
  id: {
    title: "Tanya tentang Ricky",
    subtitle: "Asisten portfolio",
    welcome: "Halo! Saya bisa bantu menjawab pertanyaan tentang profil, pengalaman, skill, proyek, dan kontak Ricky.",
    placeholder: "Tanyakan tentang Ricky...",
    send: "Kirim",
    open: "Buka chat portfolio",
    close: "Tutup chat portfolio",
    fallback: "Maaf, saya hanya bisa menjawab pertanyaan berdasarkan informasi yang tersedia di portfolio Ricky.",
    suggestions: ["Pengalaman terbaru", "Apa saja skill Ricky?", "Lihat proyek", "Cara menghubungi Ricky"],
  },
  en: {
    title: "Ask about Ricky",
    subtitle: "Portfolio assistant",
    welcome: "Hi! I can answer questions about Ricky's profile, experience, skills, projects, and contact details.",
    placeholder: "Ask about Ricky...",
    send: "Send",
    open: "Open portfolio chat",
    close: "Close portfolio chat",
    fallback: "Sorry, I can only answer questions using information available in Ricky's portfolio.",
    suggestions: ["Latest experience", "What are Ricky's skills?", "Show projects", "How to contact Ricky"],
  },
  zh: {
    title: "了解 Ricky",
    subtitle: "作品集助手",
    welcome: "你好！我可以回答有关 Ricky 的简介、经历、技能、项目和联系方式的问题。",
    placeholder: "询问有关 Ricky 的信息...",
    send: "发送",
    open: "打开作品集聊天",
    close: "关闭作品集聊天",
    fallback: "抱歉，我只能根据 Ricky 作品集中的信息回答问题。",
    suggestions: ["最新经历", "Ricky 有哪些技能？", "查看项目", "如何联系 Ricky"],
  },
  ar: {
    title: "اسأل عن ريكي",
    subtitle: "مساعد معرض الأعمال",
    welcome: "مرحباً! يمكنني الإجابة عن أسئلة حول ملف ريكي وخبراته ومهاراته ومشاريعه ووسائل التواصل معه.",
    placeholder: "اسأل عن ريكي...",
    send: "إرسال",
    open: "فتح محادثة معرض الأعمال",
    close: "إغلاق محادثة معرض الأعمال",
    fallback: "عذراً، يمكنني الإجابة فقط اعتماداً على المعلومات الموجودة في معرض أعمال ريكي.",
    suggestions: ["أحدث خبرة", "ما مهارات ريكي؟", "عرض المشاريع", "كيفية التواصل مع ريكي"],
  },
};

const aliases = {
  greeting: ["halo", "hai", "hello", "hi", "你好", "您好", "مرحبا", "السلام"],
  hexacode: ["hexacode", "hexa", "web ai", "rag", "fine tuning", "fine-tuning", "llm", "qnb"],
  experience: ["pengalaman", "experience", "kerja", "karier", "company", "经历", "工作", "经验", "خبرة", "الخبرات", "عمل"],
  skills: ["skill", "skills", "kemampuan", "keahlian", "teknologi", "tech stack", "技能", "技术", "مهارات", "تقنيات"],
  projects: ["project", "projects", "proyek", "portfolio", "作品", "项目", "مشروع", "مشاريع"],
  contact: ["kontak", "hubungi", "email", "whatsapp", "nomor", "contact", "联系", "邮箱", "联系方式", "تواصل", "بريد", "واتساب"],
  certificates: ["sertifikat", "certificate", "certification", "证书", "认证", "شهادة", "شهادات"],
  location: ["alamat", "lokasi", "tinggal", "location", "address", "地址", "位置", "عنوان", "موقع"],
  profile: ["siapa", "tentang ricky", "profil", "about ricky", "who is", "profile", "介绍", "谁是", "关于", "من هو", "نبذة", "ريكي"],
};

const normalize = (value) =>
  value.toLocaleLowerCase().normalize("NFKD").replace(/[?!.،。！？]/g, " ").replace(/\s+/g, " ").trim();

function findIntent(question) {
  const normalized = normalize(question);
  let bestMatch = null;
  let bestLength = 0;

  Object.entries(aliases).forEach(([intent, words]) => {
    words.forEach((word) => {
      if (normalized.includes(normalize(word)) && word.length > bestLength) {
        bestMatch = intent;
        bestLength = word.length;
      }
    });
  });

  return bestMatch;
}

function createAnswer(intent, t, language, fallback) {
  const isId = language === "id";
  const isZh = language === "zh";
  const isAr = language === "ar";
  const latest = t.experience.items.at(-1);

  const join = (items) => items.join(isZh ? "、" : isAr ? "، " : ", ");

  switch (intent) {
    case "greeting":
      return copy[language].welcome;
    case "profile":
      return `${t.about.profileText} ${t.about.careerText}`;
    case "hexacode":
      return `${latest.role} — ${latest.company} (${latest.period}). ${latest.desc}`;
    case "experience":
      return t.experience.items
        .map((item) => `${item.role} — ${item.company} (${item.period})`)
        .join("\n");
    case "skills":
      return t.skills.groups.map((group) => `${group.title}: ${join(group.items)}`).join("\n");
    case "projects":
      return t.projects.projects
        .map((project) => `${project.title} — ${project.desc} (${join(project.tech)})`)
        .join("\n");
    case "contact":
      if (isZh) return "您可以通过 rickynugraha1215@gmail.com、WhatsApp 081387613515 或本网站的联系表单联系 Ricky。";
      if (isAr) return "يمكن التواصل مع ريكي عبر البريد rickynugraha1215@gmail.com أو واتساب 081387613515 أو نموذج التواصل في الموقع.";
      return isId
        ? "Kamu bisa menghubungi Ricky melalui email rickynugraha1215@gmail.com, WhatsApp 081387613515, atau form kontak di website ini."
        : "You can contact Ricky at rickynugraha1215@gmail.com, via WhatsApp at 081387613515, or through this website's contact form.";
    case "certificates":
      return t.certificates.items.map((item) => `${item.title} — ${item.issuer} (${item.year})`).join("\n");
    case "location":
      return t.contact.location;
    default:
      return fallback;
  }
}

function PortfolioChat({ language }) {
  const t = getTranslations(language);
  const ui = copy[language] || copy.id;
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{ role: "assistant", text: ui.welcome }]);
  const messagesRef = useRef(null);

  useEffect(() => {
    messagesRef.current?.scrollTo({ top: messagesRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const submitQuestion = (question) => {
    const cleanQuestion = question.trim().slice(0, 240);
    if (!cleanQuestion) return;

    const answer = createAnswer(findIntent(cleanQuestion), t, language, ui.fallback);
    setMessages((current) => [
      ...current,
      { role: "user", text: cleanQuestion },
      { role: "assistant", text: answer },
    ]);
    setInput("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitQuestion(input);
  };

  return (
    <aside className="portfolio-chat">
      {open ? (
        <div className="portfolio-chat__panel" role="dialog" aria-label={ui.title}>
          <div className="portfolio-chat__header">
            <span className="portfolio-chat__avatar"><Bot size={20} /></span>
            <div><strong>{ui.title}</strong><small>{ui.subtitle}</small></div>
            <button type="button" onClick={() => setOpen(false)} aria-label={ui.close}><X size={20} /></button>
          </div>

          <div className="portfolio-chat__messages" ref={messagesRef} aria-live="polite">
            {messages.map((message, index) => (
              <p className={`portfolio-chat__message portfolio-chat__message--${message.role}`} key={`${message.role}-${index}`}>
                {message.text}
              </p>
            ))}
          </div>

          <div className="portfolio-chat__suggestions">
            {ui.suggestions.map((suggestion) => (
              <button type="button" onClick={() => submitQuestion(suggestion)} key={suggestion}>{suggestion}</button>
            ))}
          </div>

          <form className="portfolio-chat__form" onSubmit={handleSubmit}>
            <input value={input} onChange={(event) => setInput(event.target.value)} placeholder={ui.placeholder} maxLength={240} />
            <button type="submit" aria-label={ui.send} disabled={!input.trim()}><Send size={18} /></button>
          </form>
        </div>
      ) : null}

      <button className={`portfolio-chat__toggle${open ? " is-open" : ""}`} type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? ui.close : ui.open}>
        {open ? (
          <X size={22} />
        ) : (
          <>
            <span className="portfolio-chat__toggle-icon">
              <MessageCircle size={23} />
              <Sparkles className="portfolio-chat__toggle-spark" size={12} />
            </span>
            <span className="portfolio-chat__toggle-copy">
              <strong>AI Chat</strong>
              <small>{ui.subtitle}</small>
            </span>
            <i aria-hidden="true" />
          </>
        )}
      </button>
    </aside>
  );
}

export default PortfolioChat;
