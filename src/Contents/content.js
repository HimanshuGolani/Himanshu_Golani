import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";

export const HERO_CONTENT = `
I am a dedicated full stack developer who loves building strong and scalable web applications. I have developed skills in front-end technologies like React, React-Native and back-end technologies like Node.js, MySQL, and MongoDB. My goal is to use my expertise to create innovative solutions that help businesses grow and provide great user experiences.`;

export const ABOUT_TEXT = `I am a final-year student at the Institute of Technical Education and Research (SOA), 
where I am pursuing a Bachelor's degree in Computer Science and Engineering. 
With a strong foundation in programming and web development, my passion for full stack 
development drives me to create solutions for real-world problems. I am dedicated to 
leveraging my skills to develop innovative solutions that enhance user experiences 
and reduce the work done by the users.`;

export const PROJECTS = [
  {
    title: "SwasthyaRaksha, A Health Data Management Platform.",
    image: Project1,
    description:
      "In today's fast-paced world, efficient and secure management of health data is a significant challenge for both patients and healthcare providers. Traditional methods of storing medical records on paper or disparate digital systems lead to issues such as data fragmentation, lack of real-time access, and potential data loss. Patients often face difficulties in keeping track of their medical history, sharing essential health information with multiple doctors, and remembering upcoming appointments. Similarly, doctors struggle with accessing comprehensive patient histories during emergencies and managing patient data seamlessly.SwasthyaRaksha addresses these critical challenges by providing an integrated Health Data Management Platform that ensures efficient, secure, and user-friendly management of health records for both patients and healthcare providers.",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "React-Native",
      "Node.js",
      "MongoDB",
    ],
    projectLink: "https://swasthyaraksha.onrender.com/",
  },
  {
    title: "Mess-Mate, A home cook locater Web Application.",
    image: Project2,
    description:
      "A comprehensive platform developed to help people find home cooks near them, facilitate meal purchases for both parties, and manage their meals.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB", , "Firebase"],
    projectLink: "",
  },
];

export const CONTACT = {
  address: "Shanti Vihar lane-1, Jagmohan Nagar, Bhubaneswar.",
  phoneNo: "+91 9178025899",
  email: "golanihimanshu@gmail.com",
};
