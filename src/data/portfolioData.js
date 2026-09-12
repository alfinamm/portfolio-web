import thesisSchema from "../assets/projects/thesis-schema.png";
import thesisOverview from "../assets/projects/thesis-overview.jpeg";
import thesisSKPM from "../assets/projects/thesis-skpm.jpeg";
import thesisEPT from "../assets/projects/thesis-ept.jpeg";
import thesisOLAP from "../assets/projects/thesis-olap.jpeg";
import complaintDashboard from "../assets/projects/complaint-dashboard.png";
import northwindDashboard from "../assets/projects/northwind-dashboard.png";
import dvdRentalDashboard from "../assets/projects/dvd-rental-dashboard.png";
import ncaaDashboard from "../assets/projects/ncaa-dashboard.png";
import creditCardCluster from "../assets/projects/cluster_visualization.png";
import content_uix from "../assets/projects/uiux.png";
import bnspCertificate from "../assets/SertifikatBNSP_JuniorWeb.pdf";

export const portfolioData = {
  personal: {
    name: "Alfina Mazidatul Mufidah",
    shortName: "Alfina",
    smallLabel: "INFORMATION SYSTEMS GRADUATE",
    role: "Data Analyst & Business Intelligence Enthusiast",
    headline: "Hi, I'm Alfina Mazidatul Mufidah",
    shortBio:
      "Lulusan Sistem Informasi yang memiliki ketertarikan pada Data Analytics dan Business Intelligence, dengan pengalaman melalui proyek akademik dan Studi Independen dalam analisis data, data visualization, ETL, dan data warehouse development.",
    aboutBio: [
      "Saya merupakan lulusan Sarjana Sistem Informasi yang memiliki ketertarikan untuk berkarier di bidang Data Analytics dan Business Intelligence.",
      "Memiliki pengalaman melalui proyek akademik dan Studi Independen Bersertifikat dalam pengolahan dan analisis data, data visualization, proses ETL, serta perancangan data warehouse.",
      "Saya tertarik untuk mengembangkan kemampuan dalam mengolah data menjadi informasi yang lebih mudah dipahami dan dapat mendukung pengambilan keputusan."
    ],
    highlights: [
      {
        label: "Education",
        value: "Bachelor of Information Systems",
        desc: 'UPN "Veteran" Jawa Timur   •   IPK 3.82'
      },
      {
        label: "Interest",
        value: "Data Analytics & Business Intelligence",
        desc: "Data Visualization, ETL & Data Warehouse"
      },
      {
        label: "Focus",
        value: "Decision Support & Insights",
        desc: "Mengolah data menjadi informasi yang terstruktur & mudah dipahami"
      }
    ],
    social: {
      whatsapp:
        "https://api.whatsapp.com/send/?phone=081215754496&text&type=phone_number&app_absent=0",
      whatsappDisplay: "+62 812-1575-4496",
      email: "mailto:alfinamazida70@gmail.com",
      emailDisplay: "alfinamazida70@gmail.com",
      github: "https://github.com/alfinamm",
      githubDisplay: "github.com/alfinamm"
    }
  },

  navigation: [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ],

  experience: [
    {
      role: "Data Engineer / Data Warehouse Intern",
      company: "UPA TIK - UPNVJT",
      programType: "Internship",
      period: "November 2025 – July 2026",
      description:
        "Berkontribusi dalam pengembangan dan implementasi Data Warehouse untuk mendukung pengelolaan dan analisis data. Mengembangkan proses ETL serta integrasi data dari berbagai sumber ke dalam Data Warehouse dan mendukung pengembangan Dashboard Application sebagai bagian dari solusi Business Intelligence.",
      topicsTitle: "Key Contributions",
      topics: [
        "Data Warehouse",
        "ETL Process",
        "Data Integration",
        "Dashboard Development",
        "Business Intelligence"
      ],
      highlightTitle: "Dashboard Application:",
      highlight:
        "Mengembangkan Dashboard Application menggunakan Metabase dengan tiga skenario analisis: Overview, Aktivitas Mahasiswa (SKPM), dan Hasil English Proficiency Test (EPT) Mahasiswa."
    },

    {
      role: "Data Analyst & Business Intelligence",
      company: "Celerates Acceleration Program",
      programType: "Certified Independent Study Program",
      period: "September – December 2024",
      description:
        "Mengikuti program Studi Independen Bersertifikat yang berfokus pada pembelajaran Data Analytics dan Business Intelligence.",
      topicsTitle: "Selama program, mempelajari dan mempraktikkan:",
      topics: [
        "SQL",
        "Data Warehouse",
        "ETL",
        "Data Visualization",
        "Data Governance",
        "Business Acumen"
      ],
      highlightTitle: "Final Project:",
      highlight:
        "Menggunakan PostgreSQL dan Pentaho Data Integration untuk pengolahan data serta membuat dashboard menggunakan Tableau dan Power BI."
    }
  ],

  skillCategories: [
    {
      category: "DATA ANALYSIS",
      description:
        "Fondasi pengolahan, pembersihan, dan analisis data eksploratif",
      skills: [
        "SQL",
        "PostgreSQL",
        "Microsoft Excel",
        "Data Cleaning",
        "Data Validation",
        "Exploratory Data Analysis"
      ]
    },
    {
      category: "DATA ENGINEERING & ETL",
      description:
        "Ekstraksi, transformasi data, dan perancangan data warehouse",
      skills: [
        "Pentaho Data Integration",
        "ETL",
        "Data Warehouse",
        "Dimensional Modeling",
        "Kimball Method"
      ]
    },
    {
      category: "DATA VISUALIZATION & BI",
      description:
        "Perancangan dashboard bisnis dan visualisasi data interaktif",
      skills: [
        "Power BI",
        "Tableau",
        "Looker Studio",
        "Metabase"
      ]
    },
    {
      category: "OTHER TOOLS",
      description:
        "Tools penunjang analisis data, kolaborasi, dan perancangan",
      skills: [
        "Python (Basic)",
        "DBeaver",
        "GitHub",
        "Figma",
        "Microsoft Office"
      ]
    }
  ],

  projects: [
    // =========================================================
    // PROJECT 1 — THESIS
    // =========================================================
    {
      id: "project-thesis",
      category: "BUSINESS INTELLIGENCE & DATA WAREHOUSE",
      title:
        "Business Intelligence Dashboard for Student Non-Academic Activities",
      description:
        "Merancang dan membangun aplikasi Business Intelligence untuk mendukung analisis aktivitas non-akademik mahasiswa berbasis Data Warehouse. Proyek mencakup proses integrasi data, pengolahan data, penyusunan Data Warehouse, dashboard interaktif, serta analisis multidimensi menggunakan OLAP.",
      cardImage: thesisSchema,
        tools: [
        "PostgreSQL",
        "Data Warehouse",
        "ETL",
        "Metabase",
        "Mondrian",
        "JPivot"
      ],
      buttonText: "View Details",
      link: "#",

      overview:
        "Proyek skripsi ini berfokus pada perancangan dan pembangunan aplikasi Business Intelligence untuk mendukung pengelolaan serta analisis aktivitas non-akademik mahasiswa. Data dari beberapa sumber diintegrasikan dan diolah ke dalam Data Warehouse agar dapat digunakan untuk analisis secara multidimensi.",

      projectFocus:
        "Mengintegrasikan data aktivitas non-akademik mahasiswa dan hasil English Proficiency Test (EPT) ke dalam Data Warehouse, kemudian menyajikannya melalui dashboard interaktif dan analisis OLAP untuk membantu pengguna memperoleh informasi yang lebih terstruktur dan mudah dieksplorasi.",

      methodology:
        "Pengembangan sistem menggunakan metode Waterfall, sedangkan perancangan Data Warehouse mengacu pada Kimball Nine-Step Methodology.",

      scope: [
        "Data Source Integration",
        "ETL Process",
        "Data Warehouse Development",
        "Dimensional Modeling",
        "Business Intelligence Dashboard",
        "Multidimensional OLAP Analysis"
      ],

      privacy:
        "Dashboard tidak menyediakan akses publik karena menggunakan data real dari lingkungan UPN yang bersifat sensitif. Dokumentasi hasil implementasi ditampilkan melalui screenshot pada portfolio ini tanpa membuka akses terhadap data maupun dashboard secara langsung.",

      images: [
        {
          src: thesisSchema,
          title: "Data Warehouse Fact Constellation Schema",
          description:
            "Rancangan Data Warehouse yang digunakan untuk mengintegrasikan dan menyimpan data agar dapat mendukung kebutuhan analisis multidimensi."
        },
        {
          src: thesisOverview,
          title: "Dashboard Overview",
          description:
            "Halaman Overview yang menyajikan ringkasan informasi utama untuk memberikan gambaran umum mengenai data aktivitas non-akademik mahasiswa."
        },
        {
          src: thesisSKPM,
          title: "Student Activity Dashboard",
          description:
            "Halaman analisis aktivitas mahasiswa berdasarkan data SKPM yang digunakan untuk mengeksplorasi informasi aktivitas non-akademik."
        },
        {
          src: thesisEPT,
          title: "EPT Result Dashboard",
          description:
            "Halaman analisis hasil English Proficiency Test (EPT) mahasiswa untuk melihat informasi hasil pengujian berdasarkan dimensi yang tersedia."
        },
        {
          src: thesisOLAP,
          title: "OLAP Analysis",
          description:
            "Tampilan analisis OLAP untuk melakukan eksplorasi data secara multidimensi melalui proses analisis dan pemilihan dimensi yang tersedia."
        }
      ]
    },

    // =========================================================
    // PROJECT 2
    // =========================================================
    {
      id: "project-1",
      category: "DATA VISUALIZATION",
      title: "Customer Complaint Analysis Dashboard",
      description:
        "Mengembangkan dashboard interaktif menggunakan Tableau untuk menampilkan analisis keluhan pelanggan. Dashboard digunakan untuk mengeksplorasi data keluhan dan membantu melihat pola serta informasi penting dari data yang tersedia.",
      
      cardImage: complaintDashboard,

      tools: ["Tableau"],
      buttonText: "View Dashboard",
      link: "https://public.tableau.com/views/Task2_AlfinaMazidatulM_22082010002_ComplaintCustomerA/Home?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
      overview:
        "Dashboard interaktif yang dikembangkan menggunakan Tableau untuk menyajikan visualisasi analisis keluhan pelanggan secara terstruktur.",
      projectFocus:
        "Mengeksplorasi data keluhan pelanggan serta membantu melihat pola dan informasi penting dari data yang tersedia guna evaluasi pelayanan."
    },

    // =========================================================
    // PROJECT 3
    // =========================================================
    {
      id: "project-2",
      category: "DATA VISUALIZATION",
      title: "Northwind Executive Summary",
      description:
        "Membuat executive summary menggunakan Tableau berdasarkan Northwind Sample Database. Dashboard menyajikan ringkasan informasi bisnis dalam bentuk visualisasi yang membantu pengguna memahami kondisi data secara lebih ringkas.",
      cardImage: northwindDashboard,
      tools: ["Tableau"],
      buttonText: "View Dashboard",
      link: "https://public.tableau.com/views/practice2_17326352069670/NorthwindExecutiveSummary?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
      overview:
        "Dashboard ringkasan eksekutif berbasis Northwind Sample Database untuk menyajikan informasi bisnis dalam format visual yang ringkas.",
      projectFocus:
        "Penyusunan visualisasi ringkasan metrik bisnis yang memudahkan pengguna memahami gambaran performa operasional."
    },

    // =========================================================
    // PROJECT 4
    // =========================================================
    {
      id: "project-3",
      category: "BUSINESS INTELLIGENCE",
      title: "DVD Rental Dashboard",
      description:
        "Mengembangkan dashboard interaktif menggunakan Power BI untuk menganalisis data DVD Rental. Dashboard terdiri dari satu halaman Overview dan dua halaman Detail. Analisis difokuskan pada beberapa aspek bisnis, seperti pendapatan dan kategori atau genre film, sehingga pengguna dapat memperoleh gambaran mengenai performa bisnis berdasarkan data yang tersedia.",
      cardImage: dvdRentalDashboard,
      tools: ["Power BI", "GitHub"],
      buttonText: "View Project",
      link: "https://github.com/alfinamm/DVD-Rental-Dashboard",
      overview:
        "Dashboard Business Intelligence interaktif di Power BI yang terdiri dari satu halaman Overview dan dua halaman Detail untuk analisis data DVD rental.",
      projectFocus:
        "Fokus pada aspek pendapatan serta performa kategori/genre film untuk memberikan gambaran performa bisnis secara komprehensif."
    },

    // =========================================================
    // PROJECT 5
    // =========================================================
    {
      id: "project-4",
      category: "DATA ANALYTICS & DATA VISUALIZATION",
      title: "NCAA Basketball Data Analysis Dashboard",
      description:
        "Menganalisis dataset NCAA Basketball menggunakan Google BigQuery dan mengembangkan dashboard interaktif menggunakan Google Data Studio untuk menyajikan dan mengeksplorasi data pertandingan serta performa tim.",
      cardImage: ncaaDashboard,
      tools: ["BigQuery", "Google Data Studio"],
      buttonText: "View Project",
      link: "https://datastudio.google.com/s/koyaZfL1H0E",
      overview:
        "Dashboard interaktif menggunakan Google Data Studio yang terdiri dari satu halaman Overview dan dua halaman Detail untuk analisis data NCAA Basketball.",
      projectFocus:
        "Menyajikan data dalam bentuk visualisasi yang lebih mudah dipahami dan memungkinkan pengguna mengeksplorasi informasi melalui berbagai visualisasi dan filter yang tersedia."
    },

    // =========================================================
    // PROJECT 6
    // =========================================================
    {
      id: "project-5",
      category: "DATA ANALYTICS & DATA MINING",
      title: "Credit Card Customer Segmentation",
      description:
        "Menganalisis perilaku penggunaan kartu kredit dari 8.950 pelanggan menggunakan Python dan K-Means Clustering untuk mengidentifikasi karakteristik serta segmentasi pelanggan berdasarkan pola transaksi, penggunaan kredit, dan pembayaran.",
      cardImage: creditCardCluster,
      tools: ["Python", "Pandas", "Scikit-learn", "K-Means"],
      buttonText: "View Project",
      link: "https://github.com/alfinamm/credit-card-customer-segmentation",
      overview:
        "Project analisis dan segmentasi pelanggan menggunakan metode K-Means Clustering yang mencakup data cleaning, exploratory data analysis, feature engineering, feature scaling, hingga evaluasi dan profiling hasil cluster.",
      projectFocus:
        "Mengidentifikasi pola perilaku pelanggan dan membentuk empat segmentasi berdasarkan aktivitas pembelian, cash advance, frekuensi transaksi, credit limit, serta pola pembayaran."
    },

    // =========================================================
    // PROJECT 7
    // =========================================================
    {
      id: "project-6",
      category: "UI/UX DESIGN",
      title: "UI/UX Design",
      description:
        "Proyek desain antarmuka dan pengalaman pengguna (UI/UX) menggunakan Figma yang mencakup perancangan tampilan aplikasi mobile dan website.",
      cardImage: content_uix,
      tools: ["Figma"],
      buttonText: "View Details",
      link: "#",
      isPendingAsset: true,
      overview:
        "Proyek perancangan UI/UX menggunakan Figma yang berfokus pada kemudahan alur interaksi dan estetika antarmuka.",
      projectFocus:
        "Perancangan tata letak visual, konsistensi elemen antarmuka, dan eksplorasi alur pengguna (user flow)."
    }
  ],

      certifications: [
      {
        name: "Google Analytics Certification",
        issuer: "Google",
        organization: "Google Skillshop",
        url: "LINK_SERTIFIKAT_GOOGLE"
      },
      {
        name: "Junior Web Programmer",
        issuer: "BNSP",
        organization: "Badan Nasional Sertifikasi Profesi",
        url: bnspCertificate
      }
    ],
};