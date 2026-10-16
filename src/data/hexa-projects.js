// Add approved photos to public/projects/hexa/ and reference them in photos.
// Each photo uses { src: '/projects/hexa/name.webp', caption: { id: '...', en: '...' } }.
const projects = [
  {
    id: 'sensor', title: 'Hexa.Sensor', tech: ['Go', 'SvelteKit', 'TypeScript', 'PostgreSQL', 'PostGIS', 'IoT'], photos: [
      {
            "src": "/projects/hexa/hexa-sensor-live-map.png",
            "caption": {
                  "id": "Pemantauan lokasi dan status perangkat pada peta Live, dilengkapi filter serta informasi alarm dan geofence.",
                  "en": "Live map for device locations and status, with filters, alarms, and geofence information."
            }
      },
      {
            "src": "/projects/hexa/hexa-sensor-alarms.png",
            "caption": {
                  "id": "Daftar alarm dari aturan pemantauan, beserta kondisi aktif, status penyelesaian, dan pengakuan alarm.",
                  "en": "Monitoring rule alarms showing active or cleared conditions and acknowledgement status."
            }
      },
      {
            "src": "/projects/hexa/hexa-sensor-pipeline.png",
            "caption": {
                  "id": "Visualisasi pipeline telemetri dari sumber perangkat melalui node pemrosesan dan aturan penyimpanan menuju history, Live, dan penerusan data.",
                  "en": "Telemetry pipeline from device sources through processing nodes and storage rules to history, Live, and forwarding outputs."
            }
      },
      {
            "src": "/projects/hexa/hexa-sensor-device-values.png",
            "caption": {
                  "id": "Grafik historis kecepatan GNSS perangkat dengan pilihan rentang waktu dan field telemetri.",
                  "en": "Historical device GNSS speed chart with time range and telemetry field selection."
            }
      },
      {
            "src": "/projects/hexa/hexa-sensor-device-live.png",
            "caption": {
                  "id": "Detail Live perangkat dengan telemetri terbaru, inspeksi payload, keputusan penyimpanan, posisi, dan peristiwa geofence.",
                  "en": "Device Live details with recent telemetry, payload inspection, storage decisions, position, and geofence events."
            }
      },
      {
            "src": "/projects/hexa/hexa-sensor-rejected-records.png",
            "caption": {
                  "id": "Daftar record yang ditolak beserta sumber, identitas perangkat, alasan penolakan, dan tindakan penanganan.",
                  "en": "Rejected records showing sources, device identities, rejection reasons, and follow-up actions."
            }
      }
],
    idContent: { type: 'Platform IoT', role: 'Kontributor pengembangan', desc: 'Platform IoT untuk pengelolaan perangkat, pemrosesan telemetri, pemantauan lokasi, serta aturan dan alarm.', contribution: 'Berkontribusi dalam pengembangan Hexa.Sensor sebagai bagian dari tim pengembang ekosistem Hexa.', evidence: 'Dashboard pemantauan, pengelolaan perangkat, atau tampilan telemetri.' },
    enContent: { type: 'IoT platform', role: 'Development contributor', desc: 'An IoT platform for device management, telemetry processing, location monitoring, rules, and alarms.', contribution: 'Contributed to Hexa.Sensor as part of the Hexa ecosystem development team.', evidence: 'Monitoring dashboard, device management, or telemetry views.' },
  },
  {
    id: 'simulator', title: 'Hexa.Simulator', tech: ['Go', 'Svelte', 'PostgreSQL', 'MQTT', 'Teltonika TCP', 'HTTP'], photos: [
      {
            "src": "/projects/hexa/hexa-simulator-dashboard.png",
            "caption": {
                  "id": "Dashboard ringkasan perangkat virtual, status pelaporan, koneksi protokol, dan riwayat pengiriman data.",
                  "en": "Dashboard summarizing virtual devices, reporting status, protocol connections, and delivery history."
            }
      },
      {
            "src": "/projects/hexa/hexa-simulator-sign-in.png",
            "caption": {
                  "id": "Halaman masuk Hexa.Simulator untuk mengakses workspace simulasi perangkat.",
                  "en": "Hexa.Simulator sign-in screen for accessing the device simulation workspace."
            }
      },
      {
            "src": "/projects/hexa/hexa-simulator-devices.png",
            "caption": {
                  "id": "Inventaris perangkat virtual dengan pencarian serta filter profil, status, dan koneksi.",
                  "en": "Virtual device inventory with search and filters for profile, status, and connection."
            }
      },
      {
            "src": "/projects/hexa/hexa-simulator-device-profiles.png",
            "caption": {
                  "id": "Profil perangkat GPS dan sensor, termasuk template bawaan serta profil sensor kustom.",
                  "en": "GPS tracker and sensor profiles, including built-in templates and custom sensor profiles."
            }
      },
      {
            "src": "/projects/hexa/hexa-simulator-load-testing.png",
            "caption": {
                  "id": "Konfigurasi pengujian beban telemetri dan pembuatan perangkat secara massal.",
                  "en": "Telemetry load test configuration and bulk device creation."
            }
      },
      {
            "src": "/projects/hexa/hexa-simulator-connections.png",
            "caption": {
                  "id": "Pengelolaan profil koneksi MQTT, TCP Teltonika, dan HTTP push untuk integrasi dengan Hexa.Sensor.",
                  "en": "MQTT, Teltonika TCP, and HTTP push connection profiles for integration with Hexa.Sensor."
            }
      },
      {
            "src": "/projects/hexa/hexa-simulator-scenarios.png",
            "caption": {
                  "id": "Pengaturan skenario perangkat, termasuk kecepatan berlebih, kehilangan sinyal, gangguan daya, dan kondisi idle.",
                  "en": "Device scenario controls including overspeed, signal loss, power interruption, and idle behavior."
            }
      },
      {
            "src": "/projects/hexa/hexa-simulator-live-logs.png",
            "caption": {
                  "id": "Log runtime perangkat yang menampilkan pembangkitan telemetri dan hasil pengiriman data.",
                  "en": "Device runtime logs showing telemetry generation and data delivery outcomes."
            }
      },
      {
            "src": "/projects/hexa/hexa-simulator-device-detail.png",
            "caption": {
                  "id": "Detail perangkat dengan status runtime, telemetri terbaru, koneksi, dan lokasi tracker.",
                  "en": "Device details showing runtime status, latest telemetry, connection, and tracker location."
            }
      }
],
    idContent: { type: 'Simulasi IoT', role: 'Pengembangan mandiri', desc: 'Simulator perangkat GPS dan sensor IoT untuk mendukung pengujian integrasi Hexa.Sensor.', contribution: 'Mengembangkan Hexa.Simulator secara mandiri untuk menyimulasikan perangkat dan mengirimkan data melalui MQTT, TCP Teltonika, dan HTTP.', evidence: 'Daftar perangkat simulasi, skenario pengujian, atau data yang diterima Hexa.Sensor.' },
    enContent: { type: 'IoT simulation', role: 'Independent development', desc: 'A GPS tracker and IoT sensor simulator supporting Hexa.Sensor integration testing.', contribution: 'Independently developed Hexa.Simulator to simulate devices and transmit data over MQTT, Teltonika TCP, and HTTP.', evidence: 'Simulated device lists, test scenarios, or data received by Hexa.Sensor.' },
  },
  {
    id: 'chat-live', title: 'Hexa Chat Live', tech: ['Svelte', 'Go', 'PostgreSQL', 'REST API', 'Hexa.AI'],
    photos: [
      {
        src: '/projects/hexa/hexa-chat-workspace.png',
        caption: {
          id: 'Workspace Hexa Chat dengan navigasi percakapan dan status penyiapan koneksi PostgreSQL serta Hexa.AI.',
          en: 'Hexa Chat workspace with conversation navigation and PostgreSQL and Hexa.AI connection setup status.',
          zh: 'Hexa Chat 工作区，包含对话导航以及 PostgreSQL 和 Hexa.AI 连接设置状态。',
          ar: 'مساحة عمل Hexa Chat مع التنقل بين المحادثات وحالة إعداد الاتصال بـ PostgreSQL وHexa.AI.',
        },
      },
      {
        src: '/projects/hexa/hexa-chat-integration.png',
        caption: {
          id: 'Panel konfigurasi integrasi Hexa.AI melalui backend, mencakup alamat runtime, identitas konsumen, API key, dan batas token.',
          en: 'Server-side Hexa.AI integration settings for the runtime address, consumer identity, API key, and token limit.',
          zh: '服务端 Hexa.AI 集成设置，包括运行时地址、使用方身份、API 密钥和令牌限制。',
          ar: 'إعدادات تكامل Hexa.AI عبر الخادم، بما يشمل عنوان التشغيل وهوية المستهلك ومفتاح API وحد الرموز.',
        },
      },
    ],
    idContent: { type: 'Chatbot AI', role: 'Pengembangan mandiri', desc: 'Aplikasi percakapan AI yang terintegrasi dengan layanan Hexa.AI.', contribution: 'Mengembangkan chatbot secara mandiri menggunakan Svelte, Go, dan PostgreSQL, serta mengintegrasikan percakapan dengan layanan Hexa.AI melalui backend.', evidence: 'Antarmuka percakapan, pengelolaan riwayat chat, atau hasil integrasi AI.' },
    enContent: { type: 'AI chatbot', role: 'Independent development', desc: 'An AI conversation application integrated with Hexa.AI services.', contribution: 'Independently developed the chatbot using Svelte, Go, and PostgreSQL, connecting conversations to Hexa.AI services through the backend.', evidence: 'Conversation interface, chat history management, or AI integration results.' },
  },
  {
    id: 'ai', title: 'Hexa.AI v1 & v2', tech: ['AI Integration', 'Go', 'SvelteKit', 'TypeScript', 'Docker'], photos: [
      {
            "src": "/projects/hexa/hexa-ai-overview.png",
            "caption": {
                  "id": "Overview Hexa.AI dengan status workspace, rekomendasi tindakan, serta peta modul platform AI.",
                  "en": "Hexa.AI overview showing workspace status, recommended actions, and platform modules."
            }
      },
      {
            "src": "/projects/hexa/hexa-ai-provider-registry.png",
            "caption": {
                  "id": "Provider Registry untuk mengelola endpoint penyedia layanan inferensi AI, termasuk koneksi Ollama.",
                  "en": "Provider Registry for managing AI inference provider endpoints, including an Ollama connection."
            }
      },
      {
            "src": "/projects/hexa/hexa-ai-model-registry.png",
            "caption": {
                  "id": "Katalog model pada Model Foundry yang menampilkan identitas model, status aktif, dan rilis yang tersedia.",
                  "en": "Model Foundry catalogue showing model identities, active status, and available releases."
            }
      },
      {
            "src": "/projects/hexa/hexa-ai-model-detail.png",
            "caption": {
                  "id": "Detail model dengan alur revisi, pengujian kualitas, rilis, dan metadata model.",
                  "en": "Model details showing revision lifecycle, quality testing, releases, and model metadata."
            }
      },
      {
            "src": "/projects/hexa/hexa-ai-prompt-registry.png",
            "caption": {
                  "id": "Prompt Registry untuk mengelola template prompt, revisi, dan status rilis.",
                  "en": "Prompt Registry for managing prompt templates, revisions, and release status."
            }
      },
      {
            "src": "/projects/hexa/hexa-ai-monitoring.png",
            "caption": {
                  "id": "Monitoring kesehatan komponen Hexa.AI, status dependensi, metrik layanan, dan telemetri node runtime.",
                  "en": "Health monitoring for Hexa.AI components, dependency status, service metrics, and runtime node telemetry."
            }
      }
],
    idContent: { type: 'Platform AI', role: 'Kontribusi pengembangan & integrasi', desc: 'Pengembangan aplikasi Web AI versi 1 dan 2 dalam ekosistem Hexa.', contribution: 'Terlibat dalam pengembangan aplikasi Web AI v1 dan v2, integrasi chatbot dengan Hexa-v2, serta pengujian integrasi Hexa v1 API.', evidence: 'Tampilan aplikasi v1 dan v2, alur integrasi, atau dokumentasi fitur yang dikerjakan.' },
    enContent: { type: 'AI platform', role: 'Development & integration contributor', desc: 'Development of Web AI applications across versions 1 and 2 in the Hexa ecosystem.', contribution: 'Participated in developing Web AI v1 and v2 applications, integrating the chatbot with Hexa-v2, and testing Hexa v1 API integration.', evidence: 'Version 1 and 2 interfaces, integration flows, or documentation of contributed features.' },
  },
  {
    id: 'rag-finetuning', title: 'RAG & Fine-tuning LLM', tech: ['RAG', 'Fine-tuning', 'LLM Evaluation', 'SLIK'], photos: [
      {
            "src": "/projects/hexa/hexa-finetuning-slik-audit.png",
            "caption": {
                  "id": "Halaman SLIK Audit dengan akses ke persiapan audit, fieldwork, laporan, dan analitik.",
                  "en": "SLIK Audit workspace with audit preparation, fieldwork, reporting, and analytics."
            }
      },
      {
            "src": "/projects/hexa/hexa-finetuning-audit-reports.png",
            "caption": {
                  "id": "Daftar proyek Audit Report dengan status hasil laporan yang telah dibuat.",
                  "en": "Audit Report project list showing generated report status."
            }
      },
      {
            "src": "/projects/hexa/hexa-finetuning-audit-report-detail.png",
            "caption": {
                  "id": "Detail proyek laporan SLIK dengan sumber dokumen RHA AI, pilihan workflow, dan instruksi penyusunan laporan.",
                  "en": "SLIK report project details with RHA AI source documents, workflow selection, and report generation instructions."
            }
      }
],
    documents: [{
      title: { id: 'Laporan Hasil Audit SLIK', en: 'SLIK Audit Report' },
      description: { id: 'Dokumen laporan hasil audit sebagai dokumentasi use case SLIK.', en: 'Audit report documenting the SLIK use case.' },
      pdf: '/projects/hexa/documents/laporan-hasil-audit-slik.pdf',
      docx: '/projects/hexa/documents/laporan-hasil-audit-slik.docx',
    }],
    idContent: { type: 'Eksperimen AI', role: 'Eksperimen & evaluasi', desc: 'Eksperimen RAG dan fine-tuning untuk mengevaluasi kualitas respons LLM pada data SLIK.', contribution: 'Melakukan eksperimen menggunakan dataset berukuran 500 hingga 100.000 data untuk mengevaluasi kualitas respons model.', evidence: 'Konfigurasi eksperimen, proses pelatihan, atau perbandingan hasil evaluasi yang telah disamarkan.' },
    enContent: { type: 'AI experiments', role: 'Experimentation & evaluation', desc: 'RAG and fine-tuning experiments evaluating LLM response quality with SLIK data.', contribution: 'Conducted experiments with datasets ranging from 500 to 100,000 records to evaluate model response quality.', evidence: 'Experiment configuration, training progress, or anonymized evaluation comparisons.' },
  },
];

const ui = {
  id: { documents: 'Dokumen Pendukung', viewPDF: 'Baca PDF', downloadDOCX: 'Unduh DOCX', company: 'Proyek Perusahaan · Hexacode', personal: 'Proyek Lainnya', internal: 'Proyek internal perusahaan', details: 'Lihat Detail', role: 'Peran Saya', contribution: 'Kontribusi Saya', technology: 'Teknologi', gallery: 'Dokumentasi Proyek', empty: 'Dokumentasi foto belum tersedia', emptyDesc: 'Galeri akan dilengkapi dengan dokumentasi proyek yang dapat dipublikasikan.', close: 'Tutup detail proyek', back: 'Kembali ke galeri', enlarge: 'Perbesar foto' },
  en: { documents: 'Supporting Documents', viewPDF: 'Read PDF', downloadDOCX: 'Download DOCX', company: 'Company Projects · Hexacode', personal: 'Other Projects', internal: 'Internal company project', details: 'View Details', role: 'My Role', contribution: 'My Contribution', technology: 'Technology', gallery: 'Project Gallery', empty: 'Photos are not available yet', emptyDesc: 'The gallery will be updated with project documentation approved for publication.', close: 'Close project details', back: 'Back to gallery', enlarge: 'Enlarge photo' },
  zh: { documents: '支持文档', viewPDF: '阅读 PDF', downloadDOCX: '下载 DOCX', company: '企业项目 · Hexacode', personal: '其他项目', internal: '企业内部项目', details: '查看详情', role: '我的角色', contribution: '我的贡献', technology: '技术', gallery: '项目图片', empty: '暂无项目图片', emptyDesc: '后续将添加获准公开的项目图片。', close: '关闭项目详情', back: '返回图片列表', enlarge: '放大图片' },
  ar: { documents: 'المستندات الداعمة', viewPDF: 'قراءة PDF', downloadDOCX: 'تنزيل DOCX', company: 'مشاريع الشركة · Hexacode', personal: 'مشاريع أخرى', internal: 'مشروع داخلي للشركة', details: 'عرض التفاصيل', role: 'دوري', contribution: 'مساهمتي', technology: 'التقنيات', gallery: 'صور المشروع', empty: 'صور المشروع غير متوفرة حاليًا', emptyDesc: 'ستتم إضافة صور المشروع المعتمدة للنشر لاحقًا.', close: 'إغلاق تفاصيل المشروع', back: 'العودة إلى الصور', enlarge: 'تكبير الصورة' },
};

export function getHexaProjects(language) {
  return projects.map(({ idContent, enContent, ...project }) => ({ ...project, ...(language === 'id' ? idContent : enContent) }));
}

export function getProjectCopy(language) { return ui[language] || ui.en; }
