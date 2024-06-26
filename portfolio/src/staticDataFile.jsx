import databricks from './images/databricks.svg';
// import spark from './images/apacheSpark.svg';
// import css from './images/CSS.svg';
// import graph from './images/graph.svg';
import hackerrank from './images/hackerrank.svg';
// import java from './images/Java.svg';
// import javascript from './images/javascript.svg';
// import linkedin from './images/linkedin.svg';
import aws from './images/aws.svg';
import mdb from './images/mongodb.svg';
import microsoft from './images/microsoft.svg';
import ps from './images/ProblemSolving.svg';
// import sql from './images/SQL.svg';
import py from './images/Python.svg';
import BillIt from './images/Bill-It.png';
import GS from './images/GoldenShuttle.png';
import GradeIt from './images/GradeIt2.png';
import SplitIt from './images/Split-It.png';
// import Project from './images/project1.png';
import HungryBear from './images/Hungrybear.png';
import DefaultBG from './images/code-bg.jpg';

const skillList = [
  {
    tagLogo: "devicon-apache-plain",
    tagName: "Apache Spark",
  },
  {
    tagLogo: "devicon-apache-plain-wordmark",
    tagName: "Apache Airflow",
  },
  {
    tagLogo: "devicon-amazonwebservices-plain-wordmark",
    tagName: "AWS",
  },
  {
    tagLogo: "devicon-amazonwebservices-plain-wordmark",
    tagName: "AWS Lambda",
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
    tagLogo: "devicon-dynamodb-plain",
    tagName: "DynamoDB",
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
    tagLogo: "devicon-amazonwebservices-plain-wordmark",
    tagName: "IAM",
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
    projURL : "" , 
    projImg : BillIt
  }, 
  {
    pName : "superBatchProcessor" , 
    Description : "Spark process to generate country-wise data of covid affected patients which is automated using airflow and loaded into s3 bucket and also loaded into dynamodb.",
    skillList : ["Spark", "Lambda", "AWS", "S3", "DynamoDB","Python"] ,
    projURL : "https://github.com/kmth-hash/superBatchProcessor" , 
    projImg : DefaultBG
  },
  {
    pName : "Split-it" , 
    Description : "Webpage to split personal expenses with buddies. Manage bills and expenses with users and monitor the monthly/weekly expenses.",
    skillList : ["React.js", "Javascript", "Firebase", "Bootstrap","CI/CD","Heroku","RestAPI"],
    projURL : "",
    projImg : SplitIt

  },
  {
    pName : "I2R" , 
    Description : "Python Image Processing Engine to analyze images of vegetables, and suggest recipes based on the detected veggies. Feature to track user nutrition based on recipe.",
    skillList : ["Django", "PostgreSQL", "HTML", "CSS", "Python","openCV","YOLOv5"],
    projURL : "https://github.com/kmth-hash/I2R_repo",
    projImg : DefaultBG

  },
  {
    pName : "Golden-Shuttle" , 
    Description : "React webpage to maintain student attendance and payment in a sports academy. Track field, user and attendance details daily and maintain records of payments.",
    skillList : ["React.js", "Vite", "Firebase", "CSS", "Bootstrap","Javascript","Heroku","RestAPI"],
    projURL : "",
    projImg : GS 
  },

  {
    pName : "HungryBear",
    Description : "Java program to replicate food ordering system and admin-side page to check orders. Simple program to track to create invoice and maintain orders.",
    skillList : ["Java", "SQL", "Java-FX", "MVC"],
    projURL : "",
    projImg : HungryBear
  },
  {
    pName : "Grade-It" , 
    Description : "Python Django webpage tp scrape data and maintain local DB of university marks for staff use. BeautifulSoup package to scrape marks from webpages or manually add subject marks.",
    skillList : ["Django", "PostgreSQL", "HTML","Python","BeatifulSoup","RestAPI"],
    projURL : "",
    projImg : GradeIt 

  },
];

export const certList = [
  {
    cName : "Databricks Certified Associate Developer",
    companyName : "Databricks",
    credentialURL : "https://credentials.databricks.com/0f7ee283-8f40-47da-acc8-2239b9b1ce9b",
    companyLogo : {databricks},
    bgLogo : "cert-spark" ,
    skillList : ["Apache-Spark", "Bigdata","RDD","SQL"]
  },
  {
    cName : "AWS Partner : Technical Accredited",
    companyName : "AWS",
    credentialURL : "https://www.credly.com/badges/56a76569-6ac1-4fe3-9940-bbe259e40fbc",
    companyLogo : {aws},
    bgLogo : "cert-aws" ,
    skillList : ["Lambda", "DynamoDB","IAM","S3"]
  },
  {
    cName : "SI Certified Associate : MongoDB",
    companyName : "MongoDB",
    credentialURL : "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/4bdcfe69-28cd-46d5-9888-f1b62b89c58d-pranav-kamath-42d1c587-552b-40c6-9aa5-896286e6a11e-certificate.pdf",
    companyLogo : {mdb},
    bgLogo : "cert-mongodb" ,
    skillList : ["Lambda", "DynamoDB","IAM","S3"]
  },
  {
    cName : "Learning Data Analytics: 1 Foundations",
    companyName : "LinkedIn",
    credentialURL : "https://www.linkedin.com/learning/certificates/e49727a747b6d434cd02b4e814ae6e23af9903d71d2342839d874265db428ff1?trk=backfilled_certificate",
    companyLogo : {ps},
    bgLogo : "cert-graph" ,
    skillList : ["Data Analytics", "Python","Numpy"]
  },
  {
    cName : "Python (Basic)",
    companyName : "HackerRank",
    credentialURL : "https://www.hackerrank.com/certificates/0bb61222cffe",
    companyLogo : {py},
    bgLogo : "cert-py" ,
    skillList : ["Python", "Algorithm"]
  },
  {
    cName : "Problem Solving (Basic)",
    companyName : "LinkedIn",
    credentialURL : "https://www.hackerrank.com/certificates/9d66b38bb061",
    companyLogo : {hackerrank},
    bgLogo : "cert-ps" ,
    skillList : ["Python", "Algorithm"]
  },
  {
    cName : "Java (Basic)",
    companyName : "HackerRank",
    credentialURL : "https://www.hackerrank.com/certificates/3964fe857353",
    companyLogo : {hackerrank} ,
    bgLogo : "cert-java" ,
    skillList : ["Java", "Algorithm"]
  },
  {
    cName : "SQL (Basic)",
    companyName : "HackerRank",
    credentialURL : "https://www.hackerrank.com/certificates/7d6d00cfd6e5",
    companyLogo : {hackerrank},
    bgLogo : "cert-sql" ,
    skillList : ["SQL", "Algorithm"]
  },
  {
    cName : "CSS (Basic)",
    companyName : "HackerRank",
    credentialURL : "https://www.hackerrank.com/certificates/599cb10cfc70",
    companyLogo : {hackerrank},
    bgLogo : "cert-css" ,
    skillList : ["CSS", "Algorithm"]
  },
  {
    cName : "MTA: Introduction to JS",
    companyName : "HackerRank",
    credentialURL : "https://www.youracclaim.com/badges/6f5ec689-1b9b-4751-b5e4-43348277a49a/public_url",
    companyLogo : {microsoft},
    bgLogo : "cert-javascript" ,
    skillList : ["Javascript", "HTML"]
  }
  
];

export const skills = skillList;
