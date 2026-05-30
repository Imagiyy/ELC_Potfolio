// NOTE: Contact details are split into exactly 5 segments. Scrapers searching for email
// patterns or phone numbers will not match them in raw source files. They are dynamically
// re-assembled only when clicked.
const CONFIG = {
  name: "Abrar M.",
  title: "Electrical & Computer Engineering",
  college: "Amrita Vishwa Vidyapeetham",
  resumeUrl: "resume.pdf", // Path to your resume PDF file

  // Segmented contact info (5 parts each)
  emailParts: ["zuw", "iab", "rar", "@gma", "il.com"],
  phoneParts: ["+91", "6379", "5", "613", "89"],
  linkedinParts: ["linkedin", ".com/in", "/abr", "ar-m-33", "6677412"],
  githubParts: ["git", "hub", ".com", "/Imagi", "yy"]
};
