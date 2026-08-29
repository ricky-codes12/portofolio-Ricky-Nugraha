# Portfolio Ricky Nugraha

Portfolio website pribadi menggunakan React + Vite + Tailwind CSS.

## Tech Stack
- React
- Vite
- Tailwind CSS
- JavaScript

## Features
- Responsive Design
- Modern UI
- Smooth Animation
- Project Showcase

## Contact form (EmailJS)

1. Hubungkan Gmail ke EmailJS dan buat email template.
2. Pastikan template menggunakan `{{from_name}}`, `{{from_email}}`, `{{message}}`, `{{reply_to}}`, dan `{{to_email}}`.
3. Salin `.env.example` menjadi `.env.local`, lalu isi Service ID, Template ID, dan Public Key dari dashboard EmailJS.
4. Restart development server setelah mengubah environment variable.

Variabel `VITE_*` tersedia di browser, jadi jangan simpan private key atau password Gmail di dalamnya.

Template HTML siap pakai tersedia di `docs/emailjs-template.html`. Pada pengaturan template EmailJS gunakan:

- **To Email:** `rickynugraha1215@gmail.com` (lebih aman daripada menerima tujuan dari browser)
- **From Name:** `Portfolio Ricky Nugraha`
- **Reply To:** `{{reply_to}}`
- **Subject:** `Pesan portfolio baru dari {{from_name}}`
