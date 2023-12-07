const skillList = [
  {
    tagLogo: "devicon-apache-plain",
    tagName: "Apache Spark",
  },
  {
    tagLogo: "devicon-bootstrap-plain",
    tagName: "Bootstrap",
  },
  {
    tagLogo: "devicon-c-plain",
    tagName: "C",
  },
  {
    tagLogo: "devicon-cplusplus-plain",
    tagName: "C++",
  },
  {
    tagLogo: "devicon-django-plain",
    tagName: "Django",
  },
  {
    tagLogo: "devicon-firebase-plain",
    tagName: "Firebase",
  },
  {
    tagLogo: "devicon-html5-plain",
    tagName: "HTML",
  },  
  {
    tagLogo: "devicon-java-plain",
    tagName: "Java",
  },
  {
    tagLogo: "devicon-javascript-plain",
    tagName: "Javascript",
  },
  
  {
    tagLogo: "devicon-mongodb-plain",
    tagName: "MongoDB",
  },
  {
    tagLogo: "devicon-nodejs-plain",
    tagName: "NodeJS",
  },
  
  {
    tagLogo: "devicon-php-plain",
    tagName: "PHP",
  },
  {
    tagLogo: "devicon-postgresql-plain",
    tagName: "PostgreSQL",
  },
  {
    tagLogo: "devicon-python-plain",
    tagName: "Python",
  },
  
  {
    tagLogo: "devicon-react-plain",
    tagName: "React.JS",
  },
  

];

export const tools = [
  {
    tagLogo: "devicon-heroku-plain",
    tagName: "Heroku",
  },
  {
    tagLogo: "devicon-illustrator-plain",
    tagName: "Illustrator",
  },
  {
    tagLogo: "devicon-jenkins-plain",
    tagName: "Jenkins",
  },
  {
    tagLogo: "devicon-linux-plain",
    tagName: "Linux",
  },
  {
    tagLogo: "devicon-npm-original-wordmark",
    tagName: "NPM",
  },
  {
    tagLogo: "devicon-numpy-plain",
    tagName: "NumPY",
  },

  
  {
    tagLogo: "devicon-selenium-plain",
    tagName: "Selenium",
  },
  {
    tagLogo: "devicon-vscode-plain",
    tagName: "VSCode",
  }
];

export const colorPalette = [
  "#363062" , 
  "#435585",
  "#818FB4",
  "#F5E8C7"
] ; 

export const textcolorPalette = [
  "#FFFFFF" , 
  "#FFFFFF" ,
  "#FFFFFF" ,
  "#000000" ,

];

export const colorPalette2 = [
  "#0F0F0F" , 
  "#AED2FF",
  "#005B41",
  "#6499E9"
]

export const projectData = [
  {
    pName : "Bill-It" , 
    Description : "Webpage to maintain business expenses and client details. Build to run locally to keep a ledger of client details , invoices and companies. Using FPDF packge , users can print invoices as preferred.",
    skillList : ["PHP", "MySQL", "HTML", "CSS", "Bootstrap","Javascript"] ,
    projURL : ""
  }, 
  {
    pName : "Split-it" , 
    Description : "Webpage to split personal expenses with buddies.",
    skillList : ["React.js", "Javascript", "Firebase", "Bootstrap","CI/CD","Heroku","RestAPI"],
    projURL : ""

  },
  {
    pName : "I2R" , 
    Description : "Python Image Processing Engine to analyze images of dishes and maintain nutirtion intake.",
    skillList : ["Django", "PostgreSQL", "HTML", "CSS", "Python","openCV","YOLOv5"],
    projURL : "https://github.com/kmth-hash/I2R_repo"

  },
  {
    pName : "Golden-Shuttle" , 
    Description : "React webpage to maintain student attendance and payment in a shuttle academy.",
    skillList : ["React.js", "Vite", "Firebase", "CSS", "Bootstrap","Javascript","Heroku","RestAPI"],
    projURL : ""

  },

  {
    pName : "HungryBear",
    Description : "Java program to replicate food ordering system and admin-side page to check orders.",
    skillList : ["Java", "SQL", "Java-FX", "MVC"],
    projURL : ""
  },
  {
    pName : "Grade-It" , 
    Description : "Python Django webpage tp scrape data and maintain local DB of university marks for staff use.",
    skillList : ["Django", "PostgreSQL", "HTML","Python","BeatifulSoup","RestAPI"],
    projURL : ""

  },
];

export const certList = [
  {
    cName : "Databricks Certified Associate Developer",
    companyName : "Databricks",
    credentialURL : "https://credentials.databricks.com/0f7ee283-8f40-47da-acc8-2239b9b1ce9b",
    companyLogo : "./src/assets/databricks.svg",
    bgLogo : "cert-spark" ,
    skillList : ["Apache-Spark", "Bigdata","RDD","SQL"]
  },
  {
    cName : "Learning Data Analytics: 1 Foundations",
    companyName : "LinkedIn",
    credentialURL : "https://www.linkedin.com/learning/certificates/e49727a747b6d434cd02b4e814ae6e23af9903d71d2342839d874265db428ff1?trk=backfilled_certificate",
    companyLogo : "./src/assets/linkedin.svg",
    bgLogo : "cert-graph" ,
    skillList : ["Data Analytics", "Python","Numpy"]
  },
  {
    cName : "Python (Basic)",
    companyName : "HackerRank",
    credentialURL : "https://www.hackerrank.com/certificates/0bb61222cffe",
    companyLogo : "./src/assets/hackerrank.svg",
    bgLogo : "cert-py" ,
    skillList : ["Python", "Algorithm"]
  },
  {
    cName : "Problem Solving (Basic)",
    companyName : "LinkedIn",
    credentialURL : "https://www.hackerrank.com/certificates/9d66b38bb061",
    companyLogo : "./src/assets/hackerrank.svg",
    bgLogo : "cert-ps" ,
    skillList : ["Python", "Algorithm"]
  },
  {
    cName : "Java (Basic)",
    companyName : "HackerRank",
    credentialURL : "https://www.hackerrank.com/certificates/3964fe857353",
    companyLogo : "./src/assets/hackerrank.svg",
    bgLogo : "cert-java" ,
    skillList : ["Java", "Algorithm"]
  },
  {
    cName : "SQL (Basic)",
    companyName : "HackerRank",
    credentialURL : "https://www.hackerrank.com/certificates/7d6d00cfd6e5",
    companyLogo : "./src/assets/hackerrank.svg",
    bgLogo : "cert-sql" ,
    skillList : ["SQL", "Algorithm"]
  },
  {
    cName : "CSS (Basic)",
    companyName : "HackerRank",
    credentialURL : "https://www.hackerrank.com/certificates/599cb10cfc70",
    companyLogo : "./src/assets/hackerrank.svg",
    bgLogo : "cert-css" ,
    skillList : ["CSS", "Algorithm"]
  },
  {
    cName : "MTA: Introduction to JS",
    companyName : "HackerRank",
    credentialURL : "https://www.youracclaim.com/badges/6f5ec689-1b9b-4751-b5e4-43348277a49a/public_url",
    companyLogo : "./src/assets/microsoft.svg",
    bgLogo : "cert-javascript" ,
    skillList : ["Javascript", "HTML"]
  }
  
];

export const skills = skillList;
