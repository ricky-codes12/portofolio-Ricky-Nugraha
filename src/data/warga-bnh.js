const content = {
  id: {
    type: "Proyek pribadi",
    desc: "Aplikasi pendataan warga untuk mengelola KTP, struktur wilayah, dan persebaran warga dalam satu tempat.",
    contribution: "Mengembangkan aplikasi full-stack secara mandiri: OCR KTP lokal dengan pemeriksaan manual, pengelolaan data warga, hak akses berbasis role, TOTP MFA, dan audit log.",
    outcome: "Pendataan warga terhubung dengan dashboard, laporan, dan peta untuk membantu pengelolaan serta pemantauan wilayah.",
  },
  en: {
    type: "Personal project",
    desc: "A resident management application bringing ID-card records, regional structures, and resident locations into one place.",
    contribution: "Independently developed the full-stack application with local ID-card OCR and manual review, resident records, role-based access, TOTP MFA, and audit logs.",
    outcome: "Resident records connect to dashboards, reports, and maps to support regional administration and monitoring.",
  },
  zh: {
    type: "个人项目",
    desc: "居民信息管理应用，在一个平台中管理身份证信息、区域结构和居民位置。",
    contribution: "独立开发全栈应用，包括本地身份证 OCR 与人工核对、居民档案、基于角色的访问控制、TOTP 多因素认证和审计日志。",
    outcome: "居民档案与仪表盘、报表和地图相连，支持区域管理与监测。",
  },
  ar: {
    type: "مشروع شخصي",
    desc: "تطبيق لإدارة بيانات السكان وبطاقات الهوية والهيكل الجغرافي ومواقع السكان في مكان واحد.",
    contribution: "طوّرت التطبيق بشكل مستقل، مع قراءة محلية لبطاقات الهوية ومراجعة يدوية وسجلات السكان وصلاحيات حسب الدور ومصادقة TOTP وسجلات التدقيق.",
    outcome: "ربط بيانات السكان بلوحات المعلومات والتقارير والخرائط لدعم إدارة المناطق ومتابعتها.",
  },
};

export function getWargaBNHProject(language) {
  return {
    title: "Warga BNH",
    image: "/projects/warga-bnh.webp",
    tech: ["TypeScript", "JavaScript", "Next.js", "React", "Node.js", "PostgreSQL", "Tailwind CSS", "Tesseract.js", "Docker"],
    ...(content[language] ?? content.en),
  };
}
