export const yearData = [
    {
        year: 1,
        courses: [
            { id: "y1c1", name: "CPS 109 Computer Science I", completed: true },
            { id: "y1c2", name: "CPS 213 Computer Organization I", completed: true },
            {
                id: "y1c3",
                name: "Science Course",
                completed: false,
                options: [
                    "BLG 143 Biology I",
                    "CHY 103 General Chemistry I",
                    "PCS 110 Physics"
                ]
            },
            {
                id: "y1c4",
                name: "Liberal Studies Elective",
                completed: false,
                options: [
                    "Introduction to Psychology",
                    "Introduction to Sociology",
                    "Philosophy and Ethics",
                    "World History"
                ]
            },
            {
                id: "y1c5",
                name: "Mathematics Requirement",
                completed: true,
                options: [
                    "MTH 108 - Calculus I",
                    "MTH 110 - Discrete Mathematics I"
                ],
                selectedOption: "MTH 108 - Calculus I"
            }
        ]
    },
    {
        year: 2,
        courses: [
            { id: "y2c1", name: "Data Structures and Algorithms", completed: true },
            {
                id: "y2c2",
                name: "Science Elective",
                completed: false,
                options: [
                    "BLG 144 - General Biology II",
                    "CHY 104 - General Chemistry II",
                    "PCS 120 - Principles of Physics II",
                    "ENV 200 - Environmental Science"
                ]
            },
            { id: "y2c3", name: "Discrete Mathematics", completed: true },
            {
                id: "y2c4",
                name: "Communication Elective",
                completed: false,
                options: [
                    "Technical Writing",
                    "Business Communication",
                    "Professional Communication"
                ]
            },
            { id: "y2c5", name: "Linear Algebra", completed: false },
            { id: "y2c6", name: "Computer Organization II", completed: false }
        ]
    },
    {
        year: 3,
        courses: [
            { id: "y3c1", name: "Operating Systems", completed: false },
            { id: "y3c2", name: "Database Management Systems", completed: false },
            { id: "y3c3", name: "Software Engineering", completed: false },
            {
                id: "y3c4",
                name: "Technical Elective I",
                completed: false,
                options: [
                    "Computer Networks",
                    "Web Development",
                    "Mobile App Development",
                    "Cloud Computing"
                ]
            },
            { id: "y3c5", name: "Statistics for Engineers", completed: false },
            {
                id: "y3c6",
                name: "Professional Development",
                completed: false,
                options: [
                    "Co-op Work Term",
                    "Industry Project",
                    "Research Project"
                ]
            }
        ]
    },
    {
        year: 4,
        courses: [
            {
                id: "y4c1",
                name: "Technical Elective II",
                completed: false,
                options: [
                    "Artificial Intelligence",
                    "Machine Learning",
                    "Computer Vision",
                    "Natural Language Processing"
                ]
            },
            {
                id: "y4c2",
                name: "Technical Elective III",
                completed: false,
                options: [
                    "Cybersecurity",
                    "Blockchain Technology",
                    "Internet of Things",
                    "Game Development"
                ]
            },
            { id: "y4c3", name: "Senior Capstone Project", completed: false },
            { id: "y4c4", name: "Ethics in Technology", completed: false },
            {
                id: "y4c5",
                name: "Advanced Topics",
                completed: false,
                options: [
                    "Quantum Computing",
                    "Distributed Systems",
                    "High Performance Computing",
                    "Bioinformatics"
                ]
            },
            { id: "y4c6", name: "Career Preparation Seminar", completed: false }
        ]
    }
];
