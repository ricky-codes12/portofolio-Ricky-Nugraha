import { createExtraTranslations } from "./locales-extra";

export const translations = {
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang Saya",
      skills: "Kemampuan",
      projects: "Proyek",
      experience: "Pengalaman",
      certificates: "Sertifikat",
      contact: "Kontak",
      language: "Bahasa",
      toggleLanguage: "Ganti bahasa",
      light: "Terang",
      dark: "Dark",
      openMenu: "Buka menu",
      closeMenu: "Tutup menu",
    },
    hero: {
      label: "Hello",
      role: "Software Engineer",
      description:
        "Software Engineer yang mengembangkan aplikasi web dan AI, dashboard analytics, otomasi data, serta solusi digital untuk kebutuhan bisnis.",
      viewProjects: "Lihat Proyek",
      contact: "Hubungi Saya",
      downloadCV: "Download CV",
      viewCV: "Lihat CV",
      location: "Jakarta Selatan, Indonesia",
      availability: "Software Engineer — Web & AI",
      stats: {
        focusValue: "4+",
        focusLabel: "Fokus proyek",
        techValue: "15",
        techLabel: "Tech stack",
        hybridValue: "Web + AI",
        hybridLabel: "Keahlian hibrid",
      },
      badgeTop: "Web",
      badgeTopDesc: "React, SASS, GSAP",
      badgeBottom: "AI Engineering",
      badgeBottomDesc: "RAG, LLM & AI Agents",
    },
    about: {
      eyebrow: "Tentang Saya",
      title: "Tentang Saya",
      tag: "Fresh Graduate",
      heading: "Siap membantu tim membangun produk digital yang stabil, cepat, dan mudah digunakan.",
      intro:
        "Saya menggabungkan kemampuan frontend, pengelolaan data, dan IT support untuk menyelesaikan masalah teknis dari sisi produk maupun operasional.",
      profileTitle: "Profil Singkat",
      profileText:
        "Saya Ricky Nugraha, lulusan Teknik Informatika dengan pengalaman pengembangan web fullstack, aplikasi AI, dan IT support. Saya mengembangkan website perusahaan, sistem ERP, dashboard data, serta chatbot yang terintegrasi dengan aplikasi web. Pengalaman saya juga mencakup deployment dan setup infrastruktur server berbasis Linux Ubuntu.",
      careerTitle: "Fokus Karier",
      careerText:
        "Saya berfokus pada pengembangan software dan integrasi AI untuk kebutuhan bisnis, dari antarmuka dan backend hingga deployment. Saya terbiasa mengerjakan proyek secara mandiri, berkolaborasi dengan tim, serta memecahkan masalah teknis. Pengalaman di bidang data, administrasi, dan IT support membantu saya memahami kebutuhan pengguna dan operasional.",
      personalTitle: "Info Personal",
      personalDetails: [
        {
          label: "Alamat",
          value: "Jakarta Selatan, Indonesia",
        },
        {
          label: "Hobi",
          value: "Futsal, badminton, dan PlayStation",
        },
        {
          label: "Makanan favorit",
          value: "Ayam serundeng",
        },
        {
          label: "Minuman favorit",
          value: "Air putih dingin",
        },
      ],
    },
    skills: {
      eyebrow: "Kemampuan",
      title: "Skills",
      groups: [
        {
          "title": "Front-End Development",
          "desc": "Membangun antarmuka responsif untuk website perusahaan, dashboard, dan aplikasi web.",
          "items": [
            "React JS",
            "JavaScript",
            "TypeScript",
            "Vue JS",
            "Svelte",
            "SvelteKit",
            "HTML",
            "CSS",
            "Sass",
            "Tailwind CSS",
            "Responsive Web Design",
            "GSAP"
          ]
        },
        {
          "title": "Back-End & Deployment",
          "desc": "Mengembangkan backend, mengintegrasikan API dan database, serta menangani deployment dan pemeliharaan aplikasi.",
          "items": [
            "Go (Golang)",
            "Laravel",
            "Bun",
            "Node.js (Fundamentals)",
            "REST API",
            "API Integration",
            "MySQL",
            "PostgreSQL",
            "PostGIS",
            "SQLite",
            "MQTT",
            "NATS JetStream",
            "IoT Integration",
            "Device Simulation",
            "Supabase",
            "Git",
            "GitHub",
            "Docker",
            "Vercel",
            "Cloud Platforms",
            "Laragon",
            "Ngrok",
            "Debugging",
            "Website Maintenance"
          ]
        },
        {
          "title": "AI Engineering",
          "desc": "Mengembangkan chatbot dan integrasi AI, mengevaluasi respons LLM, serta bereksperimen dengan RAG dan fine-tuning.",
          "items": [
            "Chatbot Development",
            "RAG",
            "LLM Evaluation",
            "Fine-tuning Experiments",
            "AI Data Crawler Prototyping",
            "ChatGPT",
            "Codex",
            "AI Agents",
            "AI-Assisted Development (Vibe Coding)"
          ]
        },
        {
          "title": "Infrastructure & IT Support",
          "desc": "Menyiapkan server Dell PowerEdge R620 dengan iDRAC7 Enterprise dan Ubuntu 22.04.3 LTS, serta menangani dukungan perangkat dan sistem.",
          "items": [
            "Server Setup",
            "Dell PowerEdge R620",
            "iDRAC7 Enterprise",
            "Linux Ubuntu",
            "IT Support",
            "Hardware Installation",
            "Software Installation",
            "Boot Troubleshooting",
            "Printer Maintenance",
            "Basic Networking",
            "Mikrotik",
            "Cisco"
          ]
        },
        {
          "title": "Data & Administration",
          "desc": "Mengolah dan memvisualisasikan data, menggunakan Excel, serta mendukung pencatatan dan administrasi operasional.",
          "items": [
            "Python",
            "Streamlit",
            "Data Visualization",
            "Power BI",
            "Scikit-learn (Fundamentals)",
            "TensorFlow (Fundamentals)",
            "Data Scraping",
            "Data Processing",
            "Microsoft Excel",
            "Data Entry",
            "Microsoft Office",
            "Office 365"
          ]
        },
        {
          "title": "Soft Skills",
          "desc": "Menyelesaikan masalah teknis, mengerjakan proyek secara mandiri, berkolaborasi, dan menjaga ketelitian pekerjaan.",
          "items": [
            "Problem Solving",
            "Analytical Thinking",
            "Independent Project Delivery",
            "Team Collaboration",
            "Technical Communication",
            "Time Management",
            "Adaptability",
            "Continuous Learning",
            "Attention to Detail",
            "Responsibility"
          ]
        }
      ],
    },
    projects: {
      eyebrow: "Portofolio",
      title: "Projects",
      projects: [
        {
          title: "IMS Finance Frontend",
          desc: "Frontend sistem finance untuk mengelola kebutuhan administrasi dan monitoring transaksi.",
          type: "Aplikasi finance",
          metric: "Dashboard operasional",
          contribution: "Mengembangkan frontend secara mandiri, termasuk formulir pembiayaan, daftar kontrak, serta tampilan ringkasan tagihan dan denda.",
          outcome: "Input data klien, OTR, uang muka, tenor, dan tanggal angsuran tersedia dalam satu tampilan bersama daftar kontrak dan ringkasan pembiayaan.",
          tech: ["React", "Vercel", "SASS"],
          demoUrl: "https://ims-finance-frontend.vercel.app/",
        },
        {
          title: "Company Profile Website",
          desc: "Website company profile modern dengan tampilan responsif dan informasi bisnis yang jelas.",
          type: "Company profile",
          metric: "Kehadiran bisnis",
          contribution: "Merancang, mengembangkan, melakukan deployment, dan memelihara website perusahaan secara mandiri, dari penyajian informasi bisnis hingga navigasi layanan.",
          outcome: "Website publik menyajikan profil, layanan, portofolio, karier, dan kontak perusahaan, dengan ajakan konsultasi serta penjadwalan survei.",
          tech: ["React", "CSS", "SASS"],
          demoUrl: "https://company-profile-teal-eta.vercel.app/",
        },
        {
          title: "Bike Sharing Dashboard",
          desc: "Dashboard analisis data bike sharing untuk membaca pola penggunaan dan performa layanan.",
          type: "Data analytics",
          metric: "Dashboard insight",
          contribution: "Mengembangkan dashboard secara mandiri menggunakan Python dan Streamlit, termasuk filter tanggal, ringkasan data, dan visualisasi penyewaan sepeda.",
          outcome: "Total penyewaan, rata-rata per jam, jumlah hari terdata, dan grafik penyewaan menurut cuaca dapat ditinjau dalam satu dashboard.",
          tech: ["Python", "Streamlit", "Data Viz"],
          demoUrl: "https://bike-sharing-dashboard-qjornwxhtakibwxwqpd9ho.streamlit.app/",
        },
        {
          title: "Warisan Nusantara",
          desc: "Platform digital untuk pemajuan budaya Nusantara.",
          type: "Platform konten",
          metric: "Arsip budaya",
          contribution: "Mengembangkan website secara mandiri, termasuk halaman utama, penyajian visual destinasi, dan navigasi kategori konten Nusantara.",
          outcome: "Halaman utama memperkenalkan platform dan menyediakan navigasi menuju pariwisata, lingkungan, hidden gem, serta favorit.",
          tech: ["JavaScript", "React", "Vercel"],
          demoUrl: "https://capstone-warisan-nusantara.vercel.app/#/",
        },
        {
          title: "ERP Management System",
          desc: "Sistem ERP sederhana untuk membantu alur kerja operasional dan manajemen data perusahaan.",
          type: "ERP",
          metric: "Manajemen operasional",
          contribution: "Mengembangkan proyek ERP secara mandiri, termasuk antarmuka masuk dengan identitas perusahaan, kolom kredensial, dan kontrol visibilitas password.",
          outcome: "Halaman masuk menyediakan input email dan password, opsi ingat saya, serta navigasi pendaftaran dan pemulihan password.",
          tech: ["React", "Vercel", "SASS"],
          demoUrl: "https://erp-management-system-five.vercel.app/login",
        },
      ],
      contributionLabel: "Kontribusi Saya",
      outcomeLabel: "Hasil Konkret",
      code: "Kode",
      demo: "Demo",
    },
    education: {
      "eyebrow": "Pendidikan",
      "title": "Pendidikan & Pelatihan",
      "groups": [
        {
          "title": "Pendidikan Formal",
          "items": [
            {
              "institution": "Universitas Indraprasta PGRI (UNINDRA)",
              "period": "2020–2024",
              "detail": "S1 Teknik Informatika · IPK 3,60/4,00"
            },
            {
              "institution": "SMK Kemala Bhayangkari Delog",
              "period": "2017–2020",
              "detail": "Teknik Komputer dan Jaringan (TKJ)"
            }
          ]
        },
        {
          "title": "Pelatihan",
          "items": [
            {
              "institution": "Dicoding Bootcamp Batch 9",
              "period": "Agu 2025–Jan 2026",
              "detail": "Data Science & Machine Learning"
            },
            {
              "institution": "BuildWithAngga",
              "period": "2025",
              "detail": "Data Analysis & Power BI"
            },
            {
              "institution": "Studi Independen MSIB Batch 6",
              "period": "Feb–Jun 2024",
              "detail": "Frontend Web Development"
            }
          ]
        }
      ]
    },
    experience: {
      eyebrow: "Perjalanan",
      title: "Experience",
      items: [
        {
          period: "Jan 2020 - Mar 2020",
          role: "Teknisi Komputer (Magang)",
          company: "Giant Computer",
          desc: "Melakukan instalasi software, perakitan PC, serta pemasangan dan pemeriksaan hardware komputer maupun laptop. Menangani kendala booting, troubleshooting perangkat keras dan perangkat lunak, serta membantu pemulihan akses laptop ketika pengguna lupa password.",
        },
        {
          period: "Jan 2024 - Jun 2024",
          role: "Freelance Data Entry",
          company: "DPRD Jakarta Selatan",
          desc: "Mengelola input dan pengolahan data pemilu serta menyusun visualisasi untuk merangkum informasi dan memudahkan peninjauan data. Menyajikan data dalam bentuk yang lebih mudah dipahami untuk mendukung pelaporan dan kebutuhan administrasi. Mendukung kegiatan sosialisasi serta pemantauan pekerjaan pengaspalan dan saluran air.",
        },
        {
          period: "Mar 2025 - Jan 2026",
          role: "IT Support",
          company: "PT Tigris",
          desc: "Memberikan dukungan teknis harian untuk komputer, software, dan printer guna menunjang operasional perusahaan. Melakukan instalasi software, pemeriksaan perangkat, serta troubleshooting kendala hardware dan software. Menggunakan Linux Ubuntu dalam pekerjaan IT Support, serta menangani perawatan printer dan penggantian cartridge. Turut mendukung pencatatan data transaksi dan produksi untuk kebutuhan administrasi.",
        },
        {
          period: "Feb 2026 - Jun 2026",
          role: "Fullstack Developer",
          company: "PT Resvara Balawan Prakasa",
          desc: "Mengembangkan website company profile dan sistem ERP perusahaan secara mandiri, mulai dari perancangan, pengembangan frontend dan backend, hingga deployment. Membangun antarmuka responsif, mengelola integrasi data, serta membantu pengelolaan database dan sistem internal perusahaan. Melakukan debugging, perbaikan bug, dan maintenance agar aplikasi tetap dapat digunakan dengan baik. Turut memberikan dukungan IT untuk kendala perangkat, software, printer, dan jaringan dasar.",
        },
        {
          period: "Jun 2026 - Dec 2026",
          role: "Junior Software Engineer AI",
          company: "PT Hexacode Teknologi Indonesia",
          desc: "Mengembangkan chatbot Hexa Chat Live secara mandiri menggunakan Svelte, Go, dan PostgreSQL, serta mengintegrasikannya dengan layanan Hexa.AI. Membangun Hexa.Simulator secara mandiri untuk menyimulasikan perangkat GPS dan sensor IoT melalui MQTT, TCP Teltonika, dan HTTP guna mendukung pengujian Hexa.Sensor. Berkontribusi dalam pengembangan Hexa.Sensor, platform IoT untuk pengelolaan perangkat, pengolahan telemetri, pemantauan lokasi, serta aturan dan alarm. Terlibat dalam pengembangan aplikasi Web AI dan ekosistem Hexa menggunakan Go, SvelteKit, TypeScript, serta PostgreSQL/PostGIS. Melakukan eksperimen RAG dan fine-tuning untuk mengevaluasi kualitas respons LLM, mengembangkan prototipe AI Data Crawler, serta menyiapkan infrastruktur server berbasis Linux dan Docker.",
        },
      ],
    },
    certificates: {
      eyebrow: "Sertifikat",
      title: "Certificates",
      items: [
        {
          title: "Belajar Fundamental Front-End Web Development",
          issuer: "Dicoding",
          year: "2026",
          category: "Non-formal / Frontend",
          url: "https://drive.google.com/file/d/1vJw8Cc4UYhUim5iTq_Y2stUdjhYoPyAv/view?usp=sharing",
        },
        {
          title: "Belajar Membuat Aplikasi Back-End untuk Pemula",
          issuer: "Dicoding",
          year: "2026",
          category: "Non-formal / Backend",
          url: "https://drive.google.com/file/d/1uDh4rbPahUI07Pd6XxfK4L9KXWZQqy5u/view?usp=sharing",
        },
        {
          title: "Belajar Membuat Front-End Web untuk Pemula",
          issuer: "Dicoding",
          year: "2026",
          category: "Non-formal / Frontend",
          url: "https://drive.google.com/file/d/1Ht4utUevQPijqvti2TyuzTKbeLn_9IE7/view?usp=sharing",
        },
        {
          title: "Menjadi Front-End Web Developer Expert",
          issuer: "Dicoding",
          year: "2026",
          category: "Non-formal / Frontend",
          url: "https://drive.google.com/file/d/10oybQ2haXfgbpTG4mKR8pnEgESW6-we5/view?usp=sharing",
        },
        {
          title: "MSIB Batch 6 - Non Formal",
          issuer: "MSIB",
          year: "2026",
          category: "Non-formal / MSIB",
          url: "https://drive.google.com/file/d/13HAbU3wFVdiezOHu0pO9EN9PTHzBpdG7/view?usp=sharing",
        },
        {
          title: "MSIB Batch 6 - Additional Certificate",
          issuer: "MSIB",
          year: "2026",
          category: "Non-formal / MSIB",
          url: "https://drive.google.com/file/d/1COObmMnnkXEjke6UaSLwJYfxH4zE65Pb/view?usp=sharing",
        },
      ],
      verified: "Terverifikasi",
    },
    contact: {
      eyebrow: "Hubungi Saya",
      title: "Contact",
      leadBold: "Siap diskusi project atau peluang kerja.",
      leadText:
        "Saya terbuka untuk kebutuhan website, dashboard, otomasi data, dan support teknis harian.",
      defaultName: "Pengunjung portfolio",
      subject: "Pertanyaan dari",
      bodyStart: "Halo Ricky,\n\n",
      bodyMeta: "\n\nNama: ",
      emailMeta: "\nEmail: ",
      placeholderName: "Nama kamu",
      placeholderEmail: "Email kamu",
      placeholderMessage: "Pesan kamu",
      button: "Kirim Pesan",
      sending: "Mengirim...",
      statusSuccess: "Pesan berhasil dikirim. Saya akan membalas melalui email kamu.",
      statusError: "Pesan gagal dikirim. Silakan coba lagi atau hubungi saya melalui email.",
      statusConfig: "Form kontak sedang belum aktif. Silakan hubungi saya melalui email.",
      toastSuccess: "Pesan terkirim",
      toastAttention: "Pengiriman belum berhasil",
      toastClose: "Tutup notifikasi",
      phoneLabel: "081387613515",
      location: "Jakarta Selatan, Indonesia",
    },
    footer: {
      brand: "Ricky Nugraha",
      title: "Software Engineer — Web & AI",
      description:
        "Beralamat di Jakarta Selatan, Indonesia. Tersedia untuk pengembangan web, dashboard, automasi, dan peran IT support.",
      socials: {
        whatsapp: "WhatsApp",
        linkedin: "LinkedIn",
        github: "GitHub",
        instagram: "Instagram",
      },
      bottom: "(c) 2026 Ricky Nugraha. All Rights Reserved.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      certificates: "Certificates",
      contact: "Contact",
      language: "Language",
      toggleLanguage: "Switch language",
      light: "Light",
      dark: "Dark",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      label: "Hello",
      role: "Software Engineer",
      description:
        "A Software Engineer developing web and AI applications, analytics dashboards, data automation, and digital solutions for business needs.",
      viewProjects: "View Projects",
      contact: "Contact Me",
      downloadCV: "Download CV",
      viewCV: "View CV",
      location: "Jakarta Selatan, Indonesia",
      availability: "Software Engineer — Web & AI",
      stats: {
        focusValue: "4+",
        focusLabel: "Project focus",
        techValue: "15",
        techLabel: "Tech stack",
        hybridValue: "Web + AI",
        hybridLabel: "Hybrid skillset",
      },
      badgeTop: "Web",
      badgeTopDesc: "React, SASS, GSAP",
      badgeBottom: "AI Engineering",
      badgeBottomDesc: "RAG, LLM & AI Agents",
    },
    about: {
      eyebrow: "About Me",
      title: "About Me",
      tag: "Fresh Graduate",
      heading: "Ready to help your team ship digital products that are stable, fast, and easy to use.",
      intro:
        "I combine frontend development, data handling, and IT support to solve technical problems from both product and operations sides.",
      profileTitle: "Profile",
      profileText:
        "I’m Ricky Nugraha, an Informatics graduate with experience in fullstack web development, AI applications, and IT support. I develop company websites, ERP systems, data dashboards, and chatbots integrated with web applications. My experience also includes deployment and Linux Ubuntu server infrastructure setup.",
      careerTitle: "Career Focus",
      careerText:
        "I focus on software development and AI integration for business needs, from interfaces and backends to deployment. I work independently on projects, collaborate with teams, and solve technical problems. My background in data, administration, and IT support helps me understand user and operational needs.",
      personalTitle: "Personal Info",
      personalDetails: [
        {
          label: "Address",
          value: "Jakarta Selatan, Indonesia",
        },
        {
          label: "Hobbies",
          value: "Futsal, badminton, and PlayStation",
        },
        {
          label: "Favorite food",
          value: "Ayam serundeng",
        },
        {
          label: "Favorite drink",
          value: "Cold mineral water",
        },
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "Skills",
      groups: [
        {
          "title": "Front-End Development",
          "desc": "Building responsive interfaces for company websites, dashboards, and web applications.",
          "items": [
            "React JS",
            "JavaScript",
            "TypeScript",
            "Vue JS",
            "Svelte",
            "SvelteKit",
            "HTML",
            "CSS",
            "Sass",
            "Tailwind CSS",
            "Responsive Web Design",
            "GSAP"
          ]
        },
        {
          "title": "Back-End & Deployment",
          "desc": "Developing backends, integrating APIs and databases, and handling application deployment and maintenance.",
          "items": [
            "Go (Golang)",
            "Laravel",
            "Bun",
            "Node.js (Fundamentals)",
            "REST API",
            "API Integration",
            "MySQL",
            "PostgreSQL",
            "PostGIS",
            "SQLite",
            "MQTT",
            "NATS JetStream",
            "IoT Integration",
            "Device Simulation",
            "Supabase",
            "Git",
            "GitHub",
            "Docker",
            "Vercel",
            "Cloud Platforms",
            "Laragon",
            "Ngrok",
            "Debugging",
            "Website Maintenance"
          ]
        },
        {
          "title": "AI Engineering",
          "desc": "Building chatbots and AI integrations, evaluating LLM responses, and experimenting with RAG and fine-tuning.",
          "items": [
            "Chatbot Development",
            "RAG",
            "LLM Evaluation",
            "Fine-tuning Experiments",
            "AI Data Crawler Prototyping",
            "ChatGPT",
            "Codex",
            "AI Agents",
            "AI-Assisted Development (Vibe Coding)"
          ]
        },
        {
          "title": "Infrastructure & IT Support",
          "desc": "Setting up Dell PowerEdge R620 servers with iDRAC7 Enterprise and Ubuntu 22.04.3 LTS, and providing device and system support.",
          "items": [
            "Server Setup",
            "Dell PowerEdge R620",
            "iDRAC7 Enterprise",
            "Linux Ubuntu",
            "IT Support",
            "Hardware Installation",
            "Software Installation",
            "Boot Troubleshooting",
            "Printer Maintenance",
            "Basic Networking",
            "Mikrotik",
            "Cisco"
          ]
        },
        {
          "title": "Data & Administration",
          "desc": "Processing and visualizing data, using Excel, and supporting operational records and administration.",
          "items": [
            "Python",
            "Streamlit",
            "Data Visualization",
            "Power BI",
            "Scikit-learn (Fundamentals)",
            "TensorFlow (Fundamentals)",
            "Data Scraping",
            "Data Processing",
            "Microsoft Excel",
            "Data Entry",
            "Microsoft Office",
            "Office 365"
          ]
        },
        {
          "title": "Soft Skills",
          "desc": "Solving technical problems, delivering projects independently, collaborating, and maintaining attention to detail.",
          "items": [
            "Problem Solving",
            "Analytical Thinking",
            "Independent Project Delivery",
            "Team Collaboration",
            "Technical Communication",
            "Time Management",
            "Adaptability",
            "Continuous Learning",
            "Attention to Detail",
            "Responsibility"
          ]
        }
      ],
    },
    projects: {
      eyebrow: "Portfolio",
      title: "Projects",
      projects: [
        {
          title: "IMS Finance Frontend",
          desc: "A finance frontend system for managing administrative processes and transaction monitoring.",
          type: "Finance app",
          metric: "Operational dashboard",
          contribution: "Independently developed the frontend, including financing forms, contract lists, and billing and penalty summaries.",
          outcome: "Brings client details, vehicle price, down payment, loan term, and installment start date together with contract lists and financing summaries.",
          tech: ["React", "Vercel", "SASS"],
          demoUrl: "https://ims-finance-frontend.vercel.app/",
        },
        {
          title: "Company Profile Website",
          desc: "A modern company profile website with a responsive layout and clear business messaging.",
          type: "Company profile",
          metric: "Business presence",
          contribution: "Independently designed, developed, deployed, and maintained the company website, from business content presentation to service navigation.",
          outcome: "Delivered a public website presenting the company profile, services, portfolio, careers, and contact information, with consultation and survey scheduling calls to action.",
          tech: ["React", "CSS", "SASS"],
          demoUrl: "https://company-profile-teal-eta.vercel.app/",
        },
        {
          title: "Bike Sharing Dashboard",
          desc: "A bike sharing analytics dashboard for reading usage patterns and service performance.",
          type: "Data analytics",
          metric: "Insight dashboard",
          contribution: "Independently developed the dashboard with Python and Streamlit, including date filters, data summaries, and bike rental visualizations.",
          outcome: "Displays total rentals, hourly averages, recorded days, and rentals by weather condition in one dashboard.",
          tech: ["Python", "Streamlit", "Data Viz"],
          demoUrl: "https://bike-sharing-dashboard-qjornwxhtakibwxwqpd9ho.streamlit.app/",
        },
        {
          title: "Warisan Nusantara",
          desc: "A digital platform for promoting Nusantara culture.",
          type: "Content platform",
          metric: "Culture archive",
          contribution: "Independently developed the website, including the homepage, destination visuals, and navigation across Nusantara content categories.",
          outcome: "Delivered a homepage introducing the platform with navigation to tourism, environment, hidden gems, and favorites.",
          tech: ["JavaScript", "React", "Vercel"],
          demoUrl: "https://capstone-warisan-nusantara.vercel.app/#/",
        },
        {
          title: "ERP Management System",
          desc: "A simple ERP system to support operational workflows and internal data management.",
          type: "ERP",
          metric: "Operational management",
          contribution: "Independently developed the ERP project, including a company-branded sign-in interface, credential fields, and password visibility controls.",
          outcome: "Delivered a sign-in page with email and password inputs, a remember-me option, and navigation to registration and password recovery.",
          tech: ["React", "Vercel", "SASS"],
          demoUrl: "https://erp-management-system-five.vercel.app/login",
        },
      ],
      contributionLabel: "My Contribution",
      outcomeLabel: "Delivered",
      code: "Code",
      demo: "Demo",
    },
    education: {
      "eyebrow": "Education",
      "title": "Education & Training",
      "groups": [
        {
          "title": "Formal Education",
          "items": [
            {
              "institution": "Universitas Indraprasta PGRI (UNINDRA)",
              "period": "2020–2024",
              "detail": "Bachelor’s degree in Informatics · GPA 3.60/4.00"
            },
            {
              "institution": "SMK Kemala Bhayangkari Delog",
              "period": "2017–2020",
              "detail": "Computer and Network Engineering"
            }
          ]
        },
        {
          "title": "Training",
          "items": [
            {
              "institution": "Dicoding Bootcamp Batch 9",
              "period": "Aug 2025–Jan 2026",
              "detail": "Data Science & Machine Learning"
            },
            {
              "institution": "BuildWithAngga",
              "period": "2025",
              "detail": "Data Analysis & Power BI"
            },
            {
              "institution": "Studi Independen MSIB Batch 6",
              "period": "Feb–Jun 2024",
              "detail": "Frontend Web Development"
            }
          ]
        }
      ]
    },
    experience: {
      eyebrow: "Journey",
      title: "Experience",
      items: [
        {
          period: "Jan 2020 - Mar 2020",
          role: "Computer Technician Intern",
          company: "Giant Computer",
          desc: "Installed software, assembled PCs, and installed and inspected desktop and laptop hardware. Troubleshot boot failures, hardware and software issues, and helped users recover access to laptops after forgetting their passwords.",
        },
        {
          period: "Jan 2024 - Jun 2024",
          role: "Freelance Data Entry",
          company: "DPRD Jakarta Selatan",
          desc: "Managed election data entry and processing, and created visualizations to summarize information and make data easier to review. Presented data in an accessible format to support reporting and administrative needs. Also supported community outreach and monitoring of road paving and drainage work.",
        },
        {
          period: "Mar 2025 - Jan 2026",
          role: "IT Support",
          company: "PT Tigris",
          desc: "Provided day-to-day technical support for computers, software, and printers to support company operations. Installed software, inspected devices, and troubleshot hardware and software issues. Used Linux Ubuntu in IT support work and handled printer maintenance and cartridge replacement. Also supported transaction and production data entry for administrative needs.",
        },
        {
          period: "Feb 2026 - Jun 2026",
          role: "Fullstack Developer",
          company: "PT Resvara Balawan Prakasa",
          desc: "Independently developed the company's profile website and ERP system, from planning and frontend and backend development through deployment. Built responsive interfaces, managed data integration, and supported internal database and system management. Debugged issues, fixed bugs, and maintained the applications to keep them usable. Also provided IT support for device, software, printer, and basic network issues.",
        },
        {
          period: "Jun 2026 - Dec 2026",
          role: "Junior Software Engineer AI",
          company: "PT Hexacode Teknologi Indonesia",
          desc: "Independently developed Hexa Chat Live using Svelte, Go, and PostgreSQL, integrating the chatbot with Hexa.AI services. Independently built Hexa.Simulator to simulate GPS trackers and IoT sensors over MQTT, Teltonika TCP, and HTTP for Hexa.Sensor testing. Contributed to Hexa.Sensor, an IoT platform for device management, telemetry processing, location monitoring, rules, and alarms. Participated in developing Web AI applications and the Hexa ecosystem using Go, SvelteKit, TypeScript, and PostgreSQL/PostGIS. Conducted RAG and fine-tuning experiments to evaluate LLM response quality, developed an AI Data Crawler prototype, and configured Linux and Docker server infrastructure.",
        },
      ],
    },
    certificates: {
      eyebrow: "Certificates",
      title: "Certificates",
      items: [
        {
          title: "Belajar Fundamental Front-End Web Development",
          issuer: "Dicoding",
          year: "2026",
          category: "Non-formal / Frontend",
          url: "https://drive.google.com/file/d/1vJw8Cc4UYhUim5iTq_Y2stUdjhYoPyAv/view?usp=sharing",
        },
        {
          title: "Belajar Membuat Aplikasi Back-End untuk Pemula",
          issuer: "Dicoding",
          year: "2026",
          category: "Non-formal / Backend",
          url: "https://drive.google.com/file/d/1uDh4rbPahUI07Pd6XxfK4L9KXWZQqy5u/view?usp=sharing",
        },
        {
          title: "Belajar Membuat Front-End Web untuk Pemula",
          issuer: "Dicoding",
          year: "2026",
          category: "Non-formal / Frontend",
          url: "https://drive.google.com/file/d/1Ht4utUevQPijqvti2TyuzTKbeLn_9IE7/view?usp=sharing",
        },
        {
          title: "Menjadi Front-End Web Developer Expert",
          issuer: "Dicoding",
          year: "2026",
          category: "Non-formal / Frontend",
          url: "https://drive.google.com/file/d/10oybQ2haXfgbpTG4mKR8pnEgESW6-we5/view?usp=sharing",
        },
        {
          title: "MSIB Batch 6 - Non Formal",
          issuer: "MSIB",
          year: "2026",
          category: "Non-formal / MSIB",
          url: "https://drive.google.com/file/d/13HAbU3wFVdiezOHu0pO9EN9PTHzBpdG7/view?usp=sharing",
        },
        {
          title: "MSIB Batch 6 - Additional Certificate",
          issuer: "MSIB",
          year: "2026",
          category: "Non-formal / MSIB",
          url: "https://drive.google.com/file/d/1COObmMnnkXEjke6UaSLwJYfxH4zE65Pb/view?usp=sharing",
        },
      ],
      verified: "Verified",
    },
    contact: {
      eyebrow: "Contact",
      title: "Contact",
      leadBold: "Open to discussing projects and job opportunities.",
      leadText:
        "I’m available for website projects, dashboards, data automation, and daily technical support.",
      defaultName: "Portfolio visitor",
      subject: "Portfolio inquiry from",
      bodyStart: "Hello Ricky,\n\n",
      bodyMeta: "\n\nName: ",
      emailMeta: "\nEmail: ",
      placeholderName: "Your name",
      placeholderEmail: "Your email",
      placeholderMessage: "Your message",
      button: "Send Message",
      sending: "Sending...",
      statusSuccess: "Your message was sent successfully. I will reply to your email.",
      statusError: "The message could not be sent. Please try again or contact me by email.",
      statusConfig: "The contact form is not active yet. Please contact me by email.",
      toastSuccess: "Message sent",
      toastAttention: "Message not sent",
      toastClose: "Close notification",
      phoneLabel: "081387613515",
      location: "Jakarta Selatan, Indonesia",
    },
    footer: {
      brand: "Ricky Nugraha",
      title: "Software Engineer — Web & AI",
      description:
        "Based at Jakarta Selatan, Indonesia. Available for web development, dashboards, automation, and IT support roles.",
      socials: {
        whatsapp: "WhatsApp",
        linkedin: "LinkedIn",
        github: "GitHub",
        instagram: "Instagram",
      },
      bottom: "(c) 2026 Ricky Nugraha. All Rights Reserved.",
    },
  },
};

Object.assign(translations, createExtraTranslations(translations.en));

export const getTranslations = (language) => translations[language] || translations.id;
