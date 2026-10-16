const localizeProjects = (projects, content) =>
  projects.map((project, index) => ({ ...project, ...content[index] }));

const localizeExperience = (items, content) =>
  items.map((item, index) => ({ ...item, ...content[index] }));

export function createExtraTranslations(en) {
  const zh = {
    ...en,
    nav: {
      ...en.nav,
      home: "首页",
      about: "关于我",
      skills: "技能",
      projects: "项目",
      experience: "经历",
      certificates: "证书",
      contact: "联系",
      language: "语言",
      toggleLanguage: "切换语言",
      light: "浅色",
      dark: "深色",
      openMenu: "打开菜单",
      closeMenu: "关闭菜单",
    },
    hero: {
      ...en.hero,
      label: "你好",
      role: "软件工程师",
      description: "专注于 Web 与 AI 应用、数据分析仪表板、数据自动化及企业数字化解决方案的软件工程师。",
      viewProjects: "查看项目",
      contact: "联系我",
      downloadCV: "下载简历",
      viewCV: "查看简历",
      availability: "软件工程师 — Web 与 AI",
      stats: {
        ...en.hero.stats,
        focusLabel: "项目方向",
        techLabel: "技术栈",
        hybridLabel: "综合技能",
      },
      badgeTop: "Web 开发",
      badgeBottom: "AI 工程",
    },
    about: {
      ...en.about,
      eyebrow: "关于我",
      title: "关于我",
      tag: "信息工程毕业生",
      heading: "帮助团队打造稳定、高效且易用的数字产品。",
      intro: "我结合前端开发、数据处理、AI 工程与 IT 支持能力，从产品和运营角度解决技术问题。",
      profileTitle: "个人简介",
      profileText: "我是 Ricky Nugraha，信息工程专业毕业生，拥有全栈 Web 开发、AI 应用和 IT 支持经验。我开发企业网站、ERP 系统、数据仪表板及与 Web 应用集成的聊天机器人，也参与部署和 Linux Ubuntu 服务器基础设施配置。",
      careerTitle: "职业方向",
      careerText: "我专注于面向业务需求的软件开发和 AI 集成，涵盖界面、后端及部署。我能够独立完成项目、与团队协作并解决技术问题。数据、行政工作和 IT 支持经验帮助我理解用户与运营需求。",
      personalTitle: "个人信息",
      personalDetails: [
        { label: "地址", value: en.about.personalDetails[0].value },
        { label: "爱好", value: "五人制足球、羽毛球和 PlayStation" },
        { label: "喜欢的食物", value: "香酥椰丝鸡" },
        { label: "喜欢的饮料", value: "冰水" },
      ],
    },
    skills: {
      eyebrow: "能力",
      title: "技能",
      groups: en.skills.groups.map((group, index) => ({
        ...group,
        title: ["前端开发", "后端与部署", "AI 工程", "基础设施与 IT 支持", "数据与行政工作", "软技能"][index],
        desc: ["为企业网站、仪表板和 Web 应用构建响应式界面。", "开发后端、集成 API 和数据库，并部署和维护应用。", "开发聊天机器人和 AI 集成，评估 LLM 回答并开展 RAG 和微调实验。", "配置 Dell PowerEdge R620、iDRAC7 Enterprise 和 Ubuntu 22.04.3 LTS，提供设备及系统支持。", "处理和可视化数据，使用 Excel，支持运营记录及行政工作。", "解决技术问题，独立交付项目，协作并保持工作细致。"][index],
      })),
    },
    projects: {
      ...en.projects,
      eyebrow: "作品集",
      title: "项目",
      projects: localizeProjects(en.projects.projects, [
        { desc: "用于管理行政流程和交易监控的财务前端系统。", type: "财务应用", metric: "运营仪表板", contribution: "独立开发财务前端，包括融资表单、合同列表及账单和罚金摘要。", outcome: "在同一界面展示客户资料、车辆价格、首付、期限、分期开始日期和合同摘要。" },
        { desc: "具有响应式界面和清晰业务信息的现代企业官网。", type: "企业官网", metric: "企业展示", contribution: "独立设计、开发、部署和维护企业网站，完成业务信息展示及服务导航。", outcome: "提供企业简介、服务、作品、招聘和联系信息，并展示咨询及预约勘察入口。" },
        { desc: "用于分析共享单车使用模式和服务表现的数据仪表板。", type: "数据分析", metric: "洞察仪表板", contribution: "独立使用 Python 和 Streamlit 开发仪表板，实现日期筛选、数据汇总及租赁可视化。", outcome: "在一个仪表板中展示租赁总量、每小时平均值、记录天数和按天气分类的租赁图表。" },
        { desc: "推动和保存印度尼西亚文化遗产的数字平台。", type: "内容平台", metric: "文化档案", contribution: "独立开发网站，包括首页、目的地图片展示及内容分类导航。", outcome: "提供平台介绍及旅游、环境、小众景点和收藏页面的导航入口。" },
        { desc: "用于支持企业运营流程和数据管理的简易 ERP 系统。", type: "ERP 系统", metric: "运营管理", contribution: "独立开发 ERP 项目，包括企业品牌登录界面、凭据输入和密码可见性控制。", outcome: "提供邮箱和密码输入、记住我选项，以及注册和密码恢复导航。" },
      ]),
      contributionLabel: "我的贡献",
      outcomeLabel: "交付成果",
      code: "代码",
      demo: "演示",
    },
    education: {
      "eyebrow": "教育",
      "title": "教育与培训",
      "groups": [
        {
          "title": "学历教育",
          "items": [
            {
              "institution": "Universitas Indraprasta PGRI (UNINDRA)",
              "period": "2020–2024",
              "detail": "信息工程学士 · GPA 3.60/4.00"
            },
            {
              "institution": "SMK Kemala Bhayangkari Delog",
              "period": "2017–2020",
              "detail": "计算机与网络工程"
            }
          ]
        },
        {
          "title": "专业培训",
          "items": [
            {
              "institution": "Dicoding Bootcamp Batch 9",
              "period": "Aug 2025–Jan 2026",
              "detail": "数据科学与机器学习"
            },
            {
              "institution": "BuildWithAngga",
              "period": "2025",
              "detail": "数据分析与 Power BI"
            },
            {
              "institution": "Studi Independen MSIB Batch 6",
              "period": "Feb–Jun 2024",
              "detail": "前端 Web 开发"
            }
          ]
        }
      ]
    },
    experience: {
      eyebrow: "职业历程",
      title: "工作经历",
      items: localizeExperience(en.experience.items, [
        { period: "2020年1月 - 2020年3月", role: "电脑技术员（实习）", desc: "安装软件、组装电脑，并安装和检查台式机及笔记本电脑硬件。排查启动故障和软硬件问题，协助忘记密码的用户恢复笔记本电脑访问权限。" },
        { period: "2024年1月 - 2024年6月", role: "自由职业数据录入", desc: "负责选举数据录入与处理，制作可视化图表以汇总信息并便于数据审阅。以易于理解的形式呈现数据，支持报告编制和行政工作，同时协助社区宣传及道路铺设和排水工程监督。" },
        { period: "2025年3月 - 2026年1月", desc: "为电脑、软件和打印机提供日常技术支持，保障公司运营。安装软件、检查设备并排查软硬件问题。在 IT 支持工作中使用 Linux Ubuntu，负责打印机维护和墨盒更换，同时协助录入交易和生产数据。" },
        { period: "2026年2月 - 2026年6月", role: "全栈开发工程师", desc: "独立开发企业官网和 ERP 系统，涵盖规划、前后端开发及部署。构建响应式界面、管理数据集成，并协助管理内部数据库和系统。排查问题、修复错误并维护应用，同时为设备、软件、打印机和基础网络提供技术支持。" },
        { period: "2026年6月 - 2026年12月", role: "初级 AI 软件工程师", desc: "独立使用 Svelte、Go 和 PostgreSQL 开发 Hexa Chat Live，并集成 Hexa.AI 服务。独立开发 Hexa.Simulator，通过 MQTT、Teltonika TCP 和 HTTP 模拟 GPS 追踪器与 IoT 传感器，为 Hexa.Sensor 提供测试支持。参与 Hexa.Sensor 的开发，支持设备管理、遥测处理、位置监控、规则与告警。使用 Go、SvelteKit、TypeScript 和 PostgreSQL/PostGIS 参与 Web AI 应用及 Hexa 生态系统开发。开展 RAG 和微调实验，评估 LLM 回答质量，开发 AI Data Crawler 原型，并配置 Linux 与 Docker 服务器基础设施。" },
      ]),
    },
    certificates: { ...en.certificates, eyebrow: "资质", title: "证书", verified: "已验证" },
    contact: {
      ...en.contact,
      eyebrow: "联系我",
      title: "联系",
      leadBold: "欢迎讨论项目或工作机会。",
      leadText: "我可以参与网站、AI 应用、数据仪表板、自动化和技术支持工作。",
      placeholderName: "您的姓名",
      placeholderEmail: "您的邮箱",
      placeholderMessage: "您的留言",
      button: "发送消息",
      sending: "发送中...",
      statusSuccess: "消息已成功发送，我会通过邮件回复。",
      statusError: "消息发送失败，请重试或直接通过邮件联系我。",
      statusConfig: "联系表单尚未启用，请通过邮件联系我。",
      toastSuccess: "消息已发送",
      toastAttention: "消息尚未发送",
      toastClose: "关闭通知",
    },
    footer: {
      ...en.footer,
      title: "软件工程师 — Web 与 AI",
      description: "常驻雅加达南部，可参与 Web 开发、AI 应用、数据仪表板、自动化与 IT 支持工作。",
    },
  };

  const ar = {
    ...en,
    nav: {
      ...en.nav,
      home: "الرئيسية",
      about: "نبذة عني",
      skills: "المهارات",
      projects: "المشاريع",
      experience: "الخبرات",
      certificates: "الشهادات",
      contact: "التواصل",
      language: "اللغة",
      toggleLanguage: "تغيير اللغة",
      light: "فاتح",
      dark: "داكن",
      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة",
    },
    hero: {
      ...en.hero,
      label: "مرحباً",
      role: "مهندس برمجيات",
      description: "مهندس برمجيات يطوّر تطبيقات الويب والذكاء الاصطناعي ولوحات تحليل البيانات وحلول الأتمتة الرقمية للأعمال.",
      viewProjects: "عرض المشاريع",
      contact: "تواصل معي",
      downloadCV: "تحميل السيرة الذاتية",
      viewCV: "عرض السيرة الذاتية",
      availability: "مهندس برمجيات — الويب والذكاء الاصطناعي",
      stats: { ...en.hero.stats, focusLabel: "مجالات المشاريع", techLabel: "التقنيات", hybridLabel: "مهارات متكاملة" },
      badgeTop: "تطوير الويب",
      badgeBottom: "هندسة الذكاء الاصطناعي",
    },
    about: {
      ...en.about,
      eyebrow: "نبذة عني",
      title: "نبذة عني",
      tag: "خريج هندسة معلوماتية",
      heading: "مستعد لمساعدة الفرق على بناء منتجات رقمية مستقرة وسريعة وسهلة الاستخدام.",
      intro: "أجمع بين تطوير الواجهات ومعالجة البيانات وهندسة الذكاء الاصطناعي والدعم التقني لحل المشكلات من جانبي المنتج والعمليات.",
      profileTitle: "الملف الشخصي",
      profileText: "أنا ريكي نوغراها، خريج هندسة معلوماتية لدي خبرة في تطوير الويب المتكامل وتطبيقات الذكاء الاصطناعي والدعم التقني. أطوّر مواقع الشركات وأنظمة ERP ولوحات البيانات وروبوتات المحادثة المتكاملة مع تطبيقات الويب. تشمل خبرتي أيضًا النشر وإعداد البنية التحتية للخوادم باستخدام Linux Ubuntu.",
      careerTitle: "المسار المهني",
      careerText: "أركز على تطوير البرمجيات وتكامل الذكاء الاصطناعي لاحتياجات الأعمال، من الواجهات والخلفية إلى النشر. أعمل على المشاريع باستقلالية وأتعاون مع الفرق وأحل المشكلات التقنية. تساعدني خبرتي في البيانات والإدارة والدعم التقني على فهم احتياجات المستخدمين والعمليات.",
      personalTitle: "معلومات شخصية",
      personalDetails: [
        { label: "العنوان", value: en.about.personalDetails[0].value },
        { label: "الهوايات", value: "كرة القدم الخماسية والريشة الطائرة وPlayStation" },
        { label: "الطعام المفضل", value: "دجاج أيّام سيروندينغ" },
        { label: "المشروب المفضل", value: "الماء البارد" },
      ],
    },
    skills: {
      eyebrow: "القدرات",
      title: "المهارات",
      groups: en.skills.groups.map((group, index) => ({
        ...group,
        title: ["تطوير الواجهات", "الخلفية والنشر", "هندسة الذكاء الاصطناعي", "البنية التحتية والدعم التقني", "البيانات والإدارة", "المهارات الشخصية"][index],
        desc: ["بناء واجهات متجاوبة لمواقع الشركات ولوحات البيانات وتطبيقات الويب.", "تطوير الخلفية وتكامل API وقواعد البيانات ونشر التطبيقات وصيانتها.", "تطوير روبوتات المحادثة وتكامل الذكاء الاصطناعي وتقييم LLM وتجارب RAG والضبط الدقيق.", "إعداد Dell PowerEdge R620 وiDRAC7 Enterprise وUbuntu 22.04.3 LTS وتقديم دعم الأجهزة والأنظمة.", "معالجة البيانات وعرضها واستخدام Excel ودعم السجلات التشغيلية والإدارة.", "حل المشكلات التقنية وإنجاز المشاريع باستقلالية والتعاون والاهتمام بالتفاصيل."][index],
      })),
    },
    projects: {
      ...en.projects,
      eyebrow: "معرض الأعمال",
      title: "المشاريع",
      projects: localizeProjects(en.projects.projects, [
        { desc: "نظام واجهة مالية لإدارة العمليات الإدارية ومراقبة المعاملات.", type: "تطبيق مالي", metric: "لوحة تشغيلية", contribution: "طورت الواجهة المالية بشكل مستقل، بما يشمل نماذج التمويل وقائمة العقود وملخصات الفواتير والغرامات.", outcome: "تجمع الواجهة بيانات العميل وسعر المركبة والدفعة الأولى والمدة وتاريخ بدء الأقساط مع قائمة العقود وملخص التمويل." },
        { desc: "موقع شركة حديث ومتجاوب يعرض معلومات الأعمال بوضوح.", type: "موقع شركة", metric: "حضور رقمي", contribution: "صممت وطورت ونشرت وصنت موقع الشركة بشكل مستقل، بما يشمل عرض معلومات الأعمال والتنقل بين الخدمات.", outcome: "يوفر الموقع معلومات الشركة والخدمات والأعمال والوظائف والتواصل، مع دعوات للاستشارة وحجز المعاينة." },
        { desc: "لوحة تحليل بيانات لدراسة أنماط استخدام الدراجات وأداء الخدمة.", type: "تحليل البيانات", metric: "لوحة رؤى", contribution: "طورت لوحة البيانات بشكل مستقل باستخدام Python وStreamlit، مع تصفية التاريخ وملخصات البيانات ورسوم تأجير الدراجات.", outcome: "تعرض اللوحة إجمالي التأجير والمتوسط بالساعة والأيام المسجلة ورسوم التأجير حسب الطقس." },
        { desc: "منصة رقمية لدعم وحفظ التراث الثقافي الإندونيسي.", type: "منصة محتوى", metric: "أرشيف ثقافي", contribution: "طورت الموقع بشكل مستقل، بما يشمل الصفحة الرئيسية وصور الوجهات والتنقل بين فئات المحتوى.", outcome: "تقدم الصفحة الرئيسية المنصة وتوفر روابط للسياحة والبيئة والوجهات المميزة والمفضلة." },
        { desc: "نظام ERP مبسط لدعم العمليات وإدارة بيانات الشركة.", type: "نظام ERP", metric: "إدارة العمليات", contribution: "طورت مشروع ERP بشكل مستقل، بما يشمل واجهة دخول بهوية الشركة وحقول بيانات الدخول والتحكم في ظهور كلمة المرور.", outcome: "توفر صفحة الدخول حقول البريد وكلمة المرور وخيار تذكر المستخدم وروابط التسجيل واستعادة كلمة المرور." },
      ]),
      contributionLabel: "مساهمتي",
      outcomeLabel: "النتائج",
      code: "الكود",
      demo: "عرض",
    },
    education: {
      "eyebrow": "التعليم",
      "title": "التعليم والتدريب",
      "groups": [
        {
          "title": "التعليم الأكاديمي",
          "items": [
            {
              "institution": "Universitas Indraprasta PGRI (UNINDRA)",
              "period": "2020–2024",
              "detail": "بكالوريوس المعلوماتية · المعدل 3.60/4.00"
            },
            {
              "institution": "SMK Kemala Bhayangkari Delog",
              "period": "2017–2020",
              "detail": "هندسة الحاسوب والشبكات"
            }
          ]
        },
        {
          "title": "التدريب",
          "items": [
            {
              "institution": "Dicoding Bootcamp Batch 9",
              "period": "Aug 2025–Jan 2026",
              "detail": "علوم البيانات والتعلم الآلي"
            },
            {
              "institution": "BuildWithAngga",
              "period": "2025",
              "detail": "تحليل البيانات وPower BI"
            },
            {
              "institution": "Studi Independen MSIB Batch 6",
              "period": "Feb–Jun 2024",
              "detail": "تطوير واجهات الويب"
            }
          ]
        }
      ]
    },
    experience: {
      eyebrow: "المسيرة",
      title: "الخبرات",
      items: localizeExperience(en.experience.items, [
        { period: "يناير 2020 - مارس 2020", role: "فني حاسوب متدرب", desc: "تثبيت البرامج وتجميع الحواسيب وتركيب وفحص مكونات الحواسيب المكتبية والمحمولة. معالجة أعطال الإقلاع ومشكلات الأجهزة والبرمجيات، ومساعدة المستخدمين على استعادة الوصول إلى الحواسيب المحمولة عند نسيان كلمات المرور." },
        { period: "يناير 2024 - يونيو 2024", role: "إدخال بيانات مستقل", desc: "إدارة إدخال بيانات الانتخابات ومعالجتها وإعداد تصورات لتلخيص المعلومات وتسهيل مراجعتها. عرض البيانات بصورة واضحة لدعم التقارير والاحتياجات الإدارية، إلى جانب دعم التوعية المجتمعية ومتابعة أعمال رصف الطرق وتصريف المياه." },
        { period: "مارس 2025 - يناير 2026", desc: "تقديم الدعم التقني اليومي للحواسيب والبرامج والطابعات لدعم عمليات الشركة. تثبيت البرامج وفحص الأجهزة ومعالجة مشكلات الأجهزة والبرمجيات. استخدام Linux Ubuntu في أعمال الدعم التقني وصيانة الطابعات واستبدال خراطيش الحبر، مع المساهمة في إدخال بيانات المعاملات والإنتاج للأغراض الإدارية." },
        { period: "فبراير 2026 - يونيو 2026", role: "مطوّر ويب متكامل", desc: "تطوير موقع الشركة ونظام ERP بشكل مستقل، من التخطيط وتطوير الواجهات الأمامية والخلفية إلى النشر. بناء واجهات متجاوبة وإدارة تكامل البيانات والمساهمة في إدارة قواعد البيانات والأنظمة الداخلية. تشخيص المشكلات وإصلاح الأخطاء وصيانة التطبيقات، مع تقديم الدعم للأجهزة والبرامج والطابعات والشبكات الأساسية." },
        { period: "يونيو 2026 - ديسمبر 2026", role: "مهندس برمجيات ذكاء اصطناعي مبتدئ", desc: "طوّرت بشكل مستقل Hexa Chat Live باستخدام Svelte وGo وPostgreSQL، مع دمجه بخدمات Hexa.AI. كما طوّرت بشكل مستقل Hexa.Simulator لمحاكاة أجهزة تتبع GPS ومستشعرات إنترنت الأشياء عبر MQTT وTeltonika TCP وHTTP لدعم اختبار Hexa.Sensor. ساهمت في تطوير Hexa.Sensor لإدارة الأجهزة ومعالجة بيانات القياس ومراقبة المواقع والقواعد والتنبيهات. شاركت في تطوير تطبيقات Web AI ومنظومة Hexa باستخدام Go وSvelteKit وTypeScript وPostgreSQL/PostGIS. أجريت تجارب RAG والضبط الدقيق لتقييم جودة استجابات LLM، وطوّرت نموذجًا أوليًا لجمع بيانات الذكاء الاصطناعي، وأعددت بنية الخوادم باستخدام Linux وDocker." },
      ]),
    },
    certificates: { ...en.certificates, eyebrow: "المؤهلات", title: "الشهادات", verified: "موثّق" },
    contact: {
      ...en.contact,
      eyebrow: "تواصل معي",
      title: "التواصل",
      leadBold: "متاح لمناقشة المشاريع وفرص العمل.",
      leadText: "متاح لمشاريع الويب والذكاء الاصطناعي ولوحات البيانات والأتمتة والدعم التقني.",
      placeholderName: "اسمك",
      placeholderEmail: "بريدك الإلكتروني",
      placeholderMessage: "رسالتك",
      button: "إرسال الرسالة",
      sending: "جارٍ الإرسال...",
      statusSuccess: "تم إرسال الرسالة بنجاح وسأرد عبر البريد الإلكتروني.",
      statusError: "تعذر إرسال الرسالة. حاول مرة أخرى أو تواصل عبر البريد.",
      statusConfig: "نموذج التواصل غير مفعّل حالياً. يرجى التواصل عبر البريد.",
      toastSuccess: "تم إرسال الرسالة",
      toastAttention: "لم يتم إرسال الرسالة",
      toastClose: "إغلاق الإشعار",
    },
    footer: {
      ...en.footer,
      title: "مهندس برمجيات — الويب والذكاء الاصطناعي",
      description: "مقيم في جنوب جاكرتا ومتاح لتطوير الويب وتطبيقات الذكاء الاصطناعي ولوحات البيانات والأتمتة والدعم التقني.",
    },
  };

  return { zh, ar };
}
