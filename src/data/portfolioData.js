export const portfolioData = {
  personal: {
    name: "Alfina Mazidatul Mufidah",
    shortName: "Alfina",
    smallLabel: "INFORMATION SYSTEMS GRADUATE",
    role: "Data Analyst & Business Intelligence Enthusiast",
    headline: "Hi, I'm Alfina Mazidatul Mufidah",
    shortBio: "Information Systems graduate with an interest in Data Analytics and Business Intelligence. Experienced through academic projects and independent study in data analysis, data visualization, ETL, and data warehouse development.",
    aboutBio: [
      "Saya merupakan lulusan Sarjana Sistem Informasi yang memiliki ketertarikan untuk berkarier di bidang Data Analytics dan Business Intelligence.",
      "Memiliki pengalaman melalui proyek akademik dan Studi Independen Bersertifikat dalam pengolahan dan analisis data, data visualization, proses ETL, serta perancangan data warehouse.",
      "Saya tertarik untuk mengembangkan kemampuan dalam mengolah data menjadi informasi yang lebih mudah dipahami dan dapat mendukung pengambilan keputusan."
    ],
    highlights: [
      {
        label: "Education",
        value: "Bachelor of Information Systems",
        desc: "UPN \"Veteran\" Jawa Timur   •   IPK 3.82"
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
      whatsapp: "https://api.whatsapp.com/send/?phone=081215754496&text&type=phone_number&app_absent=0",
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

    topicsTitle:
      "Selama program, mempelajari dan mempraktikkan:",

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
      description: "Fondasi pengolahan, pembersihan, dan analisis data eksploratif",
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
      description: "Ekstraksi, transformasi data, dan perancangan data warehouse",
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
      description: "Perancangan dashboard bisnis dan visualisasi data interaktif",
      skills: [
        "Power BI",
        "Tableau",
        "Looker Studio",
        "Metabase"
      ]
    },
    {
      category: "OTHER TOOLS",
      description: "Tools penunjang analisis data, kolaborasi, dan perancangan",
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
    {
      id: "project-1",
      category: "DATA VISUALIZATION",
      title: "Customer Complaint Analysis Dashboard",
      description: "Mengembangkan dashboard interaktif menggunakan Tableau untuk menampilkan analisis keluhan pelanggan. Dashboard digunakan untuk mengeksplorasi data keluhan dan membantu melihat pola serta informasi penting dari data yang tersedia.",
      tools: ["Tableau"],
      buttonText: "View Dashboard",
      link: "https://public.tableau.com/views/Task2_AlfinaMazidatulM_22082010002_ComplaintCustomerA/Home?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
      overview: "Dashboard interaktif yang dikembangkan menggunakan Tableau untuk menyajikan visualisasi analisis keluhan pelanggan secara terstruktur.",
      projectFocus: "Mengeksplorasi data keluhan pelanggan serta membantu melihat pola dan informasi penting dari data yang tersedia guna evaluasi pelayanan."
    },
    {
      id: "project-2",
      category: "DATA VISUALIZATION",
      title: "Northwind Executive Summary",
      description: "Membuat executive summary menggunakan Tableau berdasarkan Northwind Sample Database. Dashboard menyajikan ringkasan informasi bisnis dalam bentuk visualisasi yang membantu pengguna memahami kondisi data secara lebih ringkas.",
      tools: ["Tableau"],
      buttonText: "View Dashboard",
      link: "https://public.tableau.com/views/practice2_17326352069670/NorthwindExecutiveSummary?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
      overview: "Dashboard ringkasan eksekutif berbasis Northwind Sample Database untuk menyajikan informasi bisnis dalam format visual yang ringkas.",
      projectFocus: "Penyusunan visualisasi ringkasan metrik bisnis yang memudahkan pengguna memahami gambaran performa operasional."
    },
    {
      id: "project-3",
      category: "BUSINESS INTELLIGENCE",
      title: "DVD Rental Dashboard",
      description: "Mengembangkan dashboard interaktif menggunakan Power BI untuk menganalisis data DVD Rental. Dashboard terdiri dari satu halaman Overview dan dua halaman Detail. Analisis difokuskan pada beberapa aspek bisnis, seperti pendapatan dan kategori atau genre film, sehingga pengguna dapat memperoleh gambaran mengenai performa bisnis berdasarkan data yang tersedia.",
      tools: ["Power BI", "GitHub"],
      buttonText: "View Project",
      link: "https://github.com/alfinamm/DVD-Rental-Dashboard",
      overview: "Dashboard Business Intelligence interaktif di Power BI yang terdiri dari satu halaman Overview dan dua halaman Detail untuk analisis data DVD rental.",
      projectFocus: "Fokus pada aspek pendapatan serta performa kategori/genre film untuk memberikan gambaran performa bisnis secara komprehensif."
    },
    {
      id: "project-4",
      category: "DATA ANALYTICS & DATA VISUALIZATION",
      title: "NCAA Basketball Data Analysis Dashboard",
      description: "Menganalisis dataset NCAA Basketball menggunakan Google BigQuery dan mengembangkan dashboard interaktif menggunakan Google Data Studio untuk menyajikan dan mengeksplorasi data pertandingan serta performa tim.",
      tools: ["BigQuery", "Google Data Studio"],
      buttonText: "View Project",
      link: "https://datastudio.google.com/s/koyaZfL1H0E",
      overview: "Dashboard interaktif menggunakan Google Data Studio yang terdiri dari satu halaman Overview dan dua halaman Detail untuk analisis data NCAA Basketball.",
      projectFocus: "Menyajikan data dalam bentuk visualisasi yang lebih mudah dipahami dan memungkinkan pengguna mengeksplorasi informasi melalui berbagai visualisasi dan filter yang tersedia"
    },
    {
      id: "project-5",
      category: "UI/UX DESIGN",
      title: "UI/UX Design",
      description: "Proyek desain antarmuka dan pengalaman pengguna (UI/UX). Detail deskripsi dan aset visual tampilan akan diperbarui.",
      tools: ["Figma"],
      buttonText: "View Details",
      link: "#",
      isPendingAsset: true,
      overview: "Proyek perancangan UI/UX menggunakan Figma yang berfokus pada kemudahan alur interaksi dan estetika antarmuka.",
      projectFocus: "Perancangan tata letak visual, konsistensi elemen antarmuka, dan eksplorasi alur pengguna (user flow)."
    }
  ],

  certifications: [
    {
      name: "Google Analytics Certification (2026)",
      issuer: "Google Skillshop",
      year: "Certified",
      credentialId: "Credential Available",
      url: "https://skillshop.credential.net/2f015a5b-5820-4de0-bf7d-eefe550b635f#acc.p8wWRoSv"
    }
  ]
};
