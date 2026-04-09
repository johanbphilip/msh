export const currentStudentData = {
  id: "st_1049281",
  personalInfo: {
    firstName: "Johan",
    lastName: "Philip",
    preferredName: "Johan",
    email: "johan.philip@torontomu.ca",
    studentNumber: "123456789",
    dateOfBirth: "2003-05-14",
    phone: "+1 (416) 555-0198",
    address: {
      street: "350 Victoria St",
      city: "Toronto",
      province: "ON",
      postalCode: "M5B 2K3",
      country: "Canada",
    },
  },
  academicInfo: {
    faculty: "Faculty of Science",
    program: "Computer Science",
    degree: "Bachelor of Science (Hons)",
    yearOfStudy: 4,
    enrollmentStatus: "Full-Time",
    academicStanding: "Clear",
    expectedGraduation: "Spring 2026",
    cgpa: 3.84, // Out of 4.33 (TMU standard)
    totalCreditsEarned: 32,
    totalCreditsRequired: 40,
  },
  financialInfo: {
    accountBalance: 0.00,
    lastPaymentAmount: 4250.00,
    lastPaymentDate: "2025-08-15",
    scholarships: [
      { name: "Dean's List Scholarship", amount: 1500, year: "2024" },
      { name: "Entrance Scholarship", amount: 2000, year: "2022" }
    ]
  },
  gpaTrend: [
    { term: "Fall 2022", gpa: 3.67, cgpa: 3.67, creditsEarned: 5 },
    { term: "Winter 2023", gpa: 3.50, cgpa: 3.58, creditsEarned: 5 },
    { term: "Fall 2023", gpa: 3.83, cgpa: 3.66, creditsEarned: 5 },
    { term: "Winter 2024", gpa: 4.00, cgpa: 3.75, creditsEarned: 5 },
    { term: "Fall 2024", gpa: 4.15, cgpa: 3.83, creditsEarned: 5 },
    { term: "Winter 2025", gpa: 3.90, cgpa: 3.84, creditsEarned: 5 },
    { term: "Fall 2025", gpa: 3.85, cgpa: 3.84, creditsEarned: 2 }, // Partial (Summer courses)
  ],
  courseHistory: [
    // Year 1 (2022-2023)
    { courseCode: "CPS 109", courseName: "Computer Science I", term: "Fall 2022", grade: "A-", gradePoint: 3.67, credits: 1, type: "Core" },
    { courseCode: "MTH 110", courseName: "Discrete Mathematics I", term: "Fall 2022", grade: "B+", gradePoint: 3.33, credits: 1, type: "Core" },
    { courseCode: "PCS 110", courseName: "Physics", term: "Fall 2022", grade: "A", gradePoint: 4.00, credits: 1, type: "Science" },
    { courseCode: "SSH 105", courseName: "Critical Thinking", term: "Fall 2022", grade: "A-", gradePoint: 3.67, credits: 1, type: "Liberal" },
    { courseCode: "CPS 213", courseName: "Computer Organization I", term: "Fall 2022", grade: "B+", gradePoint: 3.33, credits: 1, type: "Core" },

    { courseCode: "CPS 209", courseName: "Computer Science II", term: "Winter 2023", grade: "B", gradePoint: 3.00, credits: 1, type: "Core" },
    { courseCode: "MTH 207", courseName: "Calculus and Computational Methods I", term: "Winter 2023", grade: "B+", gradePoint: 3.33, credits: 1, type: "Core" },
    { courseCode: "CMN 300", courseName: "Communication in the Computer Industry", term: "Winter 2023", grade: "A-", gradePoint: 3.67, credits: 1, type: "Core" },
    { courseCode: "BLG 143", courseName: "Biology I", term: "Winter 2023", grade: "A", gradePoint: 4.00, credits: 1, type: "Science" },
    { courseCode: "GEO 110", courseName: "The Physical Environment", term: "Winter 2023", grade: "A-", gradePoint: 3.67, credits: 1, type: "Liberal" },

    // Year 2 (2023-2024)
    { courseCode: "CPS 305", courseName: "Data Structures", term: "Fall 2023", grade: "A", gradePoint: 4.00, credits: 1, type: "Core" },
    { courseCode: "CPS 310", courseName: "Computer Organization II", term: "Fall 2023", grade: "B+", gradePoint: 3.33, credits: 1, type: "Core" },
    { courseCode: "CPS 393", courseName: "Introduction to C and UNIX", term: "Fall 2023", grade: "A+", gradePoint: 4.33, credits: 1, type: "Core" },
    { courseCode: "MTH 108", courseName: "Linear Algebra", term: "Fall 2023", grade: "B+", gradePoint: 3.33, credits: 1, type: "Core" },
    { courseCode: "PHL 214", courseName: "Critical Thinking II", term: "Fall 2023", grade: "A+", gradePoint: 4.33, credits: 1, type: "Liberal" },

    { courseCode: "CPS 420", courseName: "Discrete Structures", term: "Winter 2024", grade: "A", gradePoint: 4.00, credits: 1, type: "Core" },
    { courseCode: "CPS 406", courseName: "Introduction to Software Engineering", term: "Winter 2024", grade: "A", gradePoint: 4.00, credits: 1, type: "Core" },
    { courseCode: "CPS 590", courseName: "Operating Systems I", term: "Winter 2024", grade: "A-", gradePoint: 3.67, credits: 1, type: "Core" },
    { courseCode: "ENT 500", courseName: "New Venture Startup", term: "Winter 2024", grade: "A+", gradePoint: 4.33, credits: 1, type: "Open Elective" },
    { courseCode: "SOC 103", courseName: "How Society Works", term: "Winter 2024", grade: "A", gradePoint: 4.00, credits: 1, type: "Liberal" },

    // Year 3 (2024-2025)
    { courseCode: "CPS 506", courseName: "Comparative Programming Languages", term: "Fall 2024", grade: "A+", gradePoint: 4.33, credits: 1, type: "Core" },
    { courseCode: "CPS 510", courseName: "Database Systems I", term: "Fall 2024", grade: "A", gradePoint: 4.00, credits: 1, type: "Core" },
    { courseCode: "CPS 530", courseName: "Web Systems Development", term: "Fall 2024", grade: "A+", gradePoint: 4.33, credits: 1, type: "Professional" },
    { courseCode: "CPS 616", courseName: "Algorithms", term: "Fall 2024", grade: "A-", gradePoint: 3.67, credits: 1, type: "Core" },
    { courseCode: "MKT 100", courseName: "Principles of Marketing", term: "Fall 2024", grade: "A+", gradePoint: 4.33, credits: 1, type: "Open Elective" },

    { courseCode: "CPS 633", courseName: "Computer Security", term: "Winter 2025", grade: "A", gradePoint: 4.00, credits: 1, type: "Professional" },
    { courseCode: "CPS 706", courseName: "Computer Networks I", term: "Winter 2025", grade: "B+", gradePoint: 3.33, credits: 1, type: "Core" },
    { courseCode: "CPS 615", courseName: "Software Mechanics", term: "Winter 2025", grade: "A", gradePoint: 4.00, credits: 1, type: "Professional" },
    { courseCode: "CRM 101", courseName: "Understanding Crime", term: "Winter 2025", grade: "A", gradePoint: 4.00, credits: 1, type: "Liberal" },
    { courseCode: "CPS 714", courseName: "Software Project Management", term: "Winter 2025", grade: "A-", gradePoint: 3.67, credits: 1, type: "Professional" },

    // Summer 2025 (Optional)
    { courseCode: "CPS 842", courseName: "Information Retrieval", term: "Summer 2025", grade: "A-", gradePoint: 3.67, credits: 1, type: "Professional" },
    { courseCode: "HST 111", courseName: "World History", term: "Summer 2025", grade: "A", gradePoint: 4.00, credits: 1, type: "Liberal" },
  ],
  currentlyEnrolled: [
    { courseCode: "CPS 40A", courseName: "Thesis Project", term: "Fall 2025", status: "In Progress", type: "Core" },
    { courseCode: "CPS 803", courseName: "Machine Learning", term: "Fall 2025", status: "In Progress", type: "Professional" },
    { courseCode: "CPS 843", courseName: "Introduction to Computer Vision", term: "Fall 2025", status: "In Progress", type: "Professional" },
    { courseCode: "FIN 300", courseName: "Managerial Finance", term: "Fall 2025", status: "In Progress", type: "Open Elective" }
  ],
  skills: [
    "Java", "C", "C++", "Python", "JavaScript", "React", "Node.js", "SQL", "Git", "UNIX/Linux", "Data Structures", "Algorithms"
  ],
  creditsDistribution: {
    core: { earned: 19, required: 22 },
    professionalTable: { earned: 5, required: 8 },
    openElectives: { earned: 2, required: 4 },
    liberalArts: { earned: 6, required: 6 }
  }
};
