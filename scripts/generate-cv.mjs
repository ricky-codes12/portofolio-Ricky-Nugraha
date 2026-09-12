import { writeFile } from 'node:fs/promises';
import { getTranslations } from '../src/i18n.js';

const t = getTranslations('id');
const escape = (value) => String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const list = (items) => `<ul>${items.map((item) => `<li>${escape(item)}</li>`).join('')}</ul>`;
const jobHighlights = {
  'PT Hexacode Teknologi Indonesia': [
    'Mengembangkan Web AI v1/v2 dan chatbot Hexaacode yang terintegrasi dengan Hexa-v2.',
    'Melakukan setup server Dell PowerEdge R620, iDRAC7 Enterprise, dan Ubuntu 22.04.3 LTS.',
    'Melakukan eksperimen SLIK RAG dan fine-tuning pada 500–100.000 data untuk mengevaluasi respons LLM; membuat prototipe AI Data Crawler dengan dummy data.',
    'Mengeksplorasi Hexa.Build / Hexa Chat, Change Proposal, dan integrasi Hexa v1 API untuk QNB; menggunakan ChatGPT, Codex, dan AI agent dalam pengembangan.'
  ],
  'PT Resvara Balawan Prakasa': [
    'Mengembangkan website company profile dan ERP secara mandiri, dari perancangan frontend dan backend hingga deployment.',
    'Membangun UI responsif, mengintegrasikan data, membantu pengelolaan database, serta melakukan debugging dan maintenance.',
    'Memberikan dukungan teknis perangkat, software, printer, dan jaringan dasar.'
  ],
  'PT Tigris': [
    'Memberikan dukungan komputer, software, dan printer; melakukan instalasi, pemeriksaan perangkat, dan troubleshooting hardware/software.',
    'Menggunakan Linux Ubuntu, merawat printer dan mengganti cartridge, serta mendukung input data transaksi dan produksi.'
  ],
  'DPRD Jakarta Selatan': [
    'Mengelola input dan pengolahan data pemilu serta membuat visualisasi untuk mendukung peninjauan data, pelaporan, dan administrasi.',
    'Mendukung sosialisasi dan pemantauan pekerjaan pengaspalan serta saluran air.'
  ],
  'Giant Computer': [
    'Melakukan instalasi software, perakitan PC, pemasangan dan pemeriksaan hardware; menangani kendala booting serta pemulihan akses laptop saat pengguna lupa password.'
  ]
};
const jobs = t.experience.items.slice().reverse().map((job) => `<article class="job"><div class="row"><h3>${escape(job.role)}</h3><span>${escape(job.period)}</span></div><p class="company">${escape(job.company)}</p>${list(jobHighlights[job.company] ?? [job.desc])}</article>`).join('');
const skills = t.skills.groups.map((group) => `<p class="skill"><strong>${escape(group.title)}:</strong> ${group.items.map(escape).join(' · ')}</p>`).join('');
const projects = t.projects.projects.map((project) => `<li><a href="${escape(project.demoUrl)}"><strong>${escape(project.title)}</strong></a> — ${escape(project.desc)}</li>`).join('');
const html = `<!doctype html><html lang="id"><head><meta charset="utf-8"><title>CV Ricky Nugraha</title><style>
@page { size: A4; margin: 14mm 16mm; }
* { box-sizing: border-box; } body { margin:0; color:#172337; font-family:Arial,sans-serif; font-size:9.3pt; line-height:1.4; }
h1 { margin:0; font-size:27pt; letter-spacing:-.7px; } .subtitle { font-size:11pt; color:#146779; margin:3px 0 9px; font-weight:600; }
.contact { font-size:9pt; color:#344256; margin:0 0 14px; line-height:1.6; } a { color:#146779; text-decoration:none; }
h2 { font-size:10.6pt; text-transform:uppercase; letter-spacing:1px; border-bottom:1px solid #c9d9df; padding-bottom:4px; margin:15px 0 8px; color:#146779; }
h3 { font-size:10pt; margin:0; } p { margin:4px 0; } .row { display:flex; justify-content:space-between; align-items:baseline; gap:12px; } .row>span { white-space:nowrap; font-size:8.7pt; color:#4d5868; }
.company { font-weight:600; color:#4d5868; margin:2px 0 4px; } ul { margin:4px 0 0; padding-left:15px; } li { margin:2px 0; } .job { margin-bottom:11px; break-inside:avoid; } .skill { margin:0 0 7px; } .page { break-after:page; } .page:last-child { break-after:auto; } .small {font-size:8.6pt;} .education p {margin:3px 0;} .education {margin-bottom:8px;} .page-heading {font-size:10pt; color:#526170; margin-bottom:8px;} footer {margin-top:12px; color:#667085; font-size:8pt;}
</style></head><body>
<section class="page">
<h1>Ricky Nugraha</h1><p class="subtitle">Fullstack Developer · AI Software Engineer · IT Support</p>
<p class="contact">Jakarta Selatan, Indonesia · <a href="tel:+6281387613515">081387613515</a> · <a href="mailto:rickynugraha1215@gmail.com">rickynugraha1215@gmail.com</a><br><a href="https://github.com/ricky-codes12">github.com/ricky-codes12</a> · <a href="https://www.linkedin.com/in/ricky-nugraha-91929b284/">LinkedIn</a> · <a href="https://portofolio-ricky-nugraha.vercel.app/">Portofolio</a></p>
<h2>Profil</h2><p>${escape(t.about.profileText)}</p>
<h2>Pengalaman Kerja</h2>${jobs}
</section>
<section class="page"><p class="page-heading">Ricky Nugraha · Keahlian, pendidikan & proyek</p>
<h2>Keahlian</h2>${skills}
<h2>Pendidikan</h2>
<div class="education"><div class="row"><h3>Universitas Indraprasta PGRI (UNINDRA)</h3><span>2020–2024</span></div><p>S1 Teknik Informatika · IPK 3,60/4,00</p></div>
<div class="education"><div class="row"><h3>SMK Kemala Bhayangkari Delog</h3><span>2017–2020</span></div><p>Teknik Komputer dan Jaringan (TKJ)</p></div>
<h2>Pelatihan</h2>
<ul><li><strong>Dicoding Bootcamp Batch 9</strong> · Agu 2025–Jan 2026<br>Data Science & Machine Learning: preprocessing, supervised/unsupervised learning, Python, Scikit-learn, TensorFlow, dan proyek model prediksi.</li>
<li><strong>BuildWithAngga</strong> · 2025<br>Data Analysis: pengolahan data, visualisasi interaktif, dan dashboard Power BI.</li>
<li><strong>Studi Independen MSIB Batch 6</strong> · Feb–Jun 2024<br>Frontend: HTML, CSS, JavaScript, dasar Node.js, responsive design, DOM, dan proyek website interaktif.</li></ul>
<h2>Proyek Pilihan</h2><ul class="small">${projects}</ul>
<h2>Sertifikasi & Bahasa</h2><p class="small">Dicoding: Analisis Data dengan Python; Dasar Data Science; Dasar Pemrograman JavaScript; Dasar SQL; Front-End untuk Pemula; Front-End Web Developer Expert. Sertifikat Studi Independen MSIB Batch 6.</p><p>Bahasa Indonesia: aktif · Bahasa Inggris: dasar</p>
<footer>Diperbarui September 2026 · Tautan proyek dan kontak dapat diklik.</footer>
</section></body></html>`;
await writeFile(new URL('../docs/cv-ricky-nugraha.html', import.meta.url), html);
console.log('Generated docs/cv-ricky-nugraha.html');
