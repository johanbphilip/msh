export const initialSchedule = [
  {
    day: "Monday",
    courses: [
      { name: "CPS 616 - 091 LEC", time: "8AM - 10AM", location: "DCC208" },
      { name: "MTH 108 - 011 TUT", time: "12PM - 1PM", location: "KHE118" },
    ]
  },
  {
    day: "Tuesday",
    courses: [
      { name: "CPS 506 - 021 LEC", time: "10AM - 12PM", location: "ENG103" },
      { name: "ENG 100 - 041 LEC", time: "2PM - 4PM", location: "VIC104" },
    ]
  },
  {
    day: "Wednesday",
    courses: [
      { name: "CPS 616 - 091 LEC", time: "8AM - 9AM", location: "DCC208" },
    ]
  },
  {
    day: "Thursday",
    courses: [
      { name: "CPS 506 - 021 LAB", time: "10AM - 11AM", location: "ENG103" },
      { name: "MTH 108 - 011 LEC", time: "1PM - 3PM", location: "KHE118" },
    ]
  },
  {
    day: "Friday",
    courses: [
      { name: "PHY 101 - 011 LEC", time: "9AM - 12PM", location: "KHS239" },
    ]
  }
];

export const mockCourseCatalog = [
  { name: "CPS 109 - 011 LEC", time: "10AM - 12PM", location: "KHS 239" },
  { name: "CPS 209 - 021 LAB", time: "2PM - 4PM", location: "ENG 103" },
  { name: "MTH 108 - 011 TUT", time: "12PM - 1PM", location: "KHE 118" },
  { name: "MTH 207 - 041 LEC", time: "8AM - 10AM", location: "DCC 208" },
  { name: "ENG 100 - 041 LEC", time: "2PM - 4PM", location: "VIC 104" },
  { name: "PHY 101 - 011 LEC", time: "9AM - 12PM", location: "KHS 239" },
  { name: "CHY 103 - 031 LAB", time: "1PM - 4PM", location: "KHE 231" },
  { name: "CPS 616 - 091 LEC", time: "8AM - 10AM", location: "DCC 208" },
  { name: "CPS 506 - 021 LEC", time: "10AM - 12PM", location: "ENG 103" },
];

export const facultiesAndProgramData = [
  {
    faculty: "Faculty of Science",
    programs: [
      { name: "Computer Science", degree: "BSc (Hons)", type: "Undergraduate" },
      { name: "Biology", degree: "BSc (Hons)", type: "Undergraduate" },
      { name: "Mathematics and its Applications", degree: "BSc (Hons)", type: "Undergraduate" },
      { name: "Financial Mathematics", degree: "BSc (Hons)", type: "Undergraduate" },
      { name: "Medical Physics", degree: "BSc (Hons)", type: "Undergraduate" },
      { name: "Chemistry", degree: "BSc (Hons)", type: "Undergraduate" },
      { name: "Biomedical Sciences", degree: "BSc (Hons)", type: "Undergraduate" }
    ]
  },
  {
    faculty: "Faculty of Arts",
    programs: [
      { name: "Criminology", degree: "BA (Hons)", type: "Undergraduate" },
      { name: "Psychology", degree: "BA (Hons)", type: "Undergraduate" },
      { name: "Sociology", degree: "BA (Hons)", type: "Undergraduate" },
      { name: "Politics and Governance", degree: "BA (Hons)", type: "Undergraduate" },
      { name: "English", degree: "BA (Hons)", type: "Undergraduate" },
      { name: "History", degree: "BA (Hons)", type: "Undergraduate" },
      { name: "Philosophy", degree: "BA (Hons)", type: "Undergraduate" },
      { name: "Economics and Finance", degree: "BA (Hons)", type: "Undergraduate" }
    ]
  },
  {
    faculty: "Faculty of Engineering and Architectural Science",
    programs: [
      { name: "Aerospace Engineering", degree: "BEng", type: "Undergraduate" },
      { name: "Biomedical Engineering", degree: "BEng", type: "Undergraduate" },
      { name: "Civil Engineering", degree: "BEng", type: "Undergraduate" },
      { name: "Computer Engineering", degree: "BEng", type: "Undergraduate" },
      { name: "Electrical Engineering", degree: "BEng", type: "Undergraduate" },
      { name: "Mechanical Engineering", degree: "BEng", type: "Undergraduate" },
      { name: "Architectural Science", degree: "BArchSc", type: "Undergraduate" }
    ]
  },
  {
    faculty: "Ted Rogers School of Management",
    programs: [
      { name: "Accounting and Finance", degree: "BComm (Hons)", type: "Undergraduate" },
      { name: "Business Management", degree: "BComm (Hons)", type: "Undergraduate" },
      { name: "Business Technology Management", degree: "BComm (Hons)", type: "Undergraduate" },
      { name: "Hospitality and Tourism Management", degree: "BComm (Hons)", type: "Undergraduate" },
      { name: "Retail Management", degree: "BComm (Hons)", type: "Undergraduate" },
      { name: "Health Services Management", degree: "BHA", type: "Undergraduate" }
    ]
  },
  {
    faculty: "The Creative School",
    programs: [
      { name: "Journalism", degree: "BJourn (Hons)", type: "Undergraduate" },
      { name: "Image Arts (Film or Photography)", degree: "BFA", type: "Undergraduate" },
      { name: "Interior Design", degree: "BID", type: "Undergraduate" },
      { name: "Fashion", degree: "BDes", type: "Undergraduate" },
      { name: "RTA School of Media", degree: "BA", type: "Undergraduate" },
      { name: "Performance (Acting, Dance, or Production)", degree: "BFA", type: "Undergraduate" },
      { name: "Professional Communication", degree: "BA (Hons)", type: "Undergraduate" }
    ]
  },
  {
    faculty: "Faculty of Community Services",
    programs: [
      { name: "Nursing", degree: "BScN", type: "Undergraduate" },
      { name: "Social Work", degree: "BSW", type: "Undergraduate" },
      { name: "Early Childhood Studies", degree: "BA", type: "Undergraduate" },
      { name: "Urban and Regional Planning", degree: "BURPl", type: "Undergraduate" },
      { name: "Nutrition and Food", degree: "BASc", type: "Undergraduate" },
      { name: "Occupational and Public Health", degree: "BASc", type: "Undergraduate" }
    ]
  }
];

export const programRoadmaps = {
  // ==========================================
  // FACULTY OF SCIENCE
  // ==========================================
  "Computer Science": {
    title: "Bachelor of Computer Science",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "CPS109", name: "Computer Science I", roadmap: ["Variables", "Control Structures", "Functions", "Intro to OOP"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "CPS305", name: "Data Structures", roadmap: ["Arrays & Lists", "Stacks & Queues", "Trees", "Big-O Analysis"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "CPS506", name: "Comparative Languages", roadmap: ["Paradigms", "Functional", "Logic", "Concurrency"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "CPS40A", name: "Thesis Project", roadmap: ["Proposal", "Literature Review", "Implementation", "Defense"] }] }
    ]
  },
  "Biology": {
    title: "Bachelor of Science (Biology)",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "BLG143", name: "Biology I", roadmap: ["Cell Structure", "Genetics Basics", "Evolution", "Ecology Intro"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "BLG311", name: "Cell Biology", roadmap: ["Membrane Dynamics", "Transport", "Signaling", "Cell Cycle"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "BLG400", name: "Genetics", roadmap: ["Mendelian", "DNA Replication", "Gene Expression", "Population Genetics"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "BLG888", name: "Molecular Biology", roadmap: ["Protein Synthesis", "CRISPR", "Genomics", "Bioinformatics"] }] }
    ]
  },
  "Mathematics and its Applications": {
    title: "Bachelor of Science (Mathematics)",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "MTH110", name: "Discrete Math I", roadmap: ["Logic", "Set Theory", "Relations", "Boolean Algebra"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "MTH330", name: "Calculus and Geometry", roadmap: ["Multivariable", "Vector Fields", "Integration", "Stokes' Theorem"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "MTH501", name: "Numerical Analysis", roadmap: ["Error Analysis", "Root Finding", "Interpolation", "Numerical Integration"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "MTH820", name: "Abstract Algebra", roadmap: ["Groups", "Rings", "Fields", "Galois Theory"] }] }
    ]
  },
  "Financial Mathematics": {
    title: "Bachelor of Science (Financial Math)",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "MTH140", name: "Calculus I", roadmap: ["Limits", "Derivatives", "Integrals", "Applications"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "MTH480", name: "Probability", roadmap: ["Combinatorics", "Random Variables", "Distributions", "Expectation"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "MTH600", name: "Computational Finance", roadmap: ["Binomial Models", "Black-Scholes", "Monte Carlo", "Option Pricing"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "MTH800", name: "Risk Management", roadmap: ["Value at Risk", "Hedging", "Portfolio Theory", "Credit Risk"] }] }
    ]
  },
  "Medical Physics": {
    title: "Bachelor of Science (Medical Physics)",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "PCS120", name: "Physics I", roadmap: ["Kinematics", "Dynamics", "Energy", "Momentum"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "PCS300", name: "Modern Physics", roadmap: ["Relativity", "Quantum Mechanics", "Atomic Models", "Nuclear Physics"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "PCS40A", name: "Radiation Physics", roadmap: ["Dosimetry", "Radiobiology", "Radiation Protection", "Detectors"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "PCS800", name: "Medical Imaging", roadmap: ["X-Rays", "CT Scans", "MRI Principles", "Ultrasound"] }] }
    ]
  },
  "Chemistry": {
    title: "Bachelor of Science (Chemistry)",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "CHY103", name: "General Chemistry I", roadmap: ["Stoichiometry", "Atomic Structure", "Bonding", "Gases"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "CHY200", name: "Organic Chemistry I", roadmap: ["Nomenclature", "Stereochemistry", "Substitution", "Elimination"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "CHY330", name: "Physical Chemistry", roadmap: ["Thermodynamics", "Kinetics", "Quantum Chemistry", "Spectroscopy"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "CHY40A", name: "Analytical Chemistry", roadmap: ["Chromatography", "Mass Spec", "Electrochemistry", "Lab Project"] }] }
    ]
  },
  "Biomedical Sciences": {
    title: "Bachelor of Science (Biomedical)",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "BMS100", name: "Anatomy & Physiology I", roadmap: ["Skeletal", "Muscular", "Nervous", "Endocrine"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "BMS200", name: "Biochemistry", roadmap: ["Proteins", "Enzymes", "Metabolism", "Nucleic Acids"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "BMS300", name: "Immunology", roadmap: ["Innate Immunity", "Adaptive Immunity", "Antibodies", "Vaccines"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "BMS400", name: "Pathophysiology", roadmap: ["Disease Mechanisms", "Inflammation", "Neoplasia", "Systemic Diseases"] }] }
    ]
  },

  // ==========================================
  // FACULTY OF ARTS
  // ==========================================
  "Criminology": {
    title: "Bachelor of Arts (Criminology)",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "CRM100", name: "Intro to Criminal Justice", roadmap: ["Courts", "Policing", "Corrections", "Criminal Law"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "CRM200", name: "Criminal Law", roadmap: ["Actus Reus", "Homicide", "Property Crimes", "Defenses"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "CRM300", name: "Criminological Theories", roadmap: ["Classical", "Biological", "Sociological", "Critical"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "CRM400", name: "Youth Justice", roadmap: ["Youth Crime", "YCJA", "Gangs", "Rehabilitation"] }] }
    ]
  },
  "Psychology": {
    title: "Bachelor of Arts (Psychology)",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "PSY102", name: "Intro to Psychology", roadmap: ["History", "Brain & Behavior", "Perception", "Learning"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "PSY325", name: "Psychological Disorders", roadmap: ["Anxiety", "Mood Disorders", "Schizophrenia", "Treatment"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "PSY600", name: "Cognitive Psychology", roadmap: ["Attention", "Memory", "Language", "Decision Making"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "PSY900", name: "Advanced Research", roadmap: ["Exp. Design", "Data Collection", "Stats", "Final Paper"] }] }
    ]
  },
  "Sociology": {
    title: "Bachelor of Arts (Sociology)",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "SOC103", name: "How Society Works", roadmap: ["Socialization", "Culture", "Inequality", "Institutions"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "SOC202", name: "Popular Culture", roadmap: ["Media Theory", "Consumerism", "Subcultures", "Digital Age"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "SOC300", name: "Sociological Theory", roadmap: ["Marx", "Durkheim", "Weber", "Modern Theories"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "SOC400", name: "Social Movements", roadmap: ["Activism", "Civil Rights", "Environmentalism", "Global Justice"] }] }
    ]
  },
  "Politics and Governance": {
    title: "Bachelor of Arts (Politics)",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "POG100", name: "People, Power, Politics", roadmap: ["Ideologies", "State & Nation", "Democracy", "Elections"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "POG210", name: "Canadian Politics", roadmap: ["Constitution", "Parliament", "Federalism", "Charter of Rights"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "POG315", name: "Global Governance", roadmap: ["UN", "International Law", "Human Rights", "Global Economy"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "POG490", name: "Public Policy", roadmap: ["Policy Cycle", "Agenda Setting", "Implementation", "Evaluation"] }] }
    ]
  },
  "English": {
    title: "Bachelor of Arts (English)",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "ENG108", name: "The Nature of Narrative", roadmap: ["Plot Structure", "Character", "Setting", "Theme Analysis"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "ENG200", name: "Shakespeare", roadmap: ["Comedies", "Tragedies", "Histories", "Performance Context"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "ENG300", name: "Modernist Literature", roadmap: ["Eliot", "Joyce", "Woolf", "Literary Theory"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "ENG400", name: "Postcolonial Literature", roadmap: ["Empire", "Identity", "Diaspora", "Contemporary Voices"] }] }
    ]
  },
  "History": {
    title: "Bachelor of Arts (History)",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "HST111", name: "World History to 1500", roadmap: ["Ancient Civs", "Empires", "Religion", "Trade Routes"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "HST200", name: "Modern Europe", roadmap: ["French Revolution", "Industrialization", "WWI", "Cold War"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "HST300", name: "History of Canada", roadmap: ["Pre-Contact", "Confederation", "World Wars", "Modern Era"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "HST400", name: "Historical Methodology", roadmap: ["Archives", "Historiography", "Primary Sources", "Major Essay"] }] }
    ]
  },
  "Philosophy": {
    title: "Bachelor of Arts (Philosophy)",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "PHL101", name: "Plato and the Roots of Western Phil", roadmap: ["Socrates", "The Republic", "Forms", "Ethics"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "PHL200", name: "Existentialism", roadmap: ["Kierkegaard", "Nietzsche", "Sartre", "Camus"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "PHL300", name: "Bioethics", roadmap: ["Autonomy", "Euthanasia", "Genetic Engineering", "Healthcare Allocation"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "PHL400", name: "Philosophy of Mind", roadmap: ["Dualism", "Consciousness", "AI & Mind", "Free Will"] }] }
    ]
  },
  "Economics and Finance": {
    title: "Bachelor of Arts (Economics)",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "ECN104", name: "Introductory Microeconomics", roadmap: ["Supply & Demand", "Elasticity", "Market Structures", "Welfare"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "ECN204", name: "Introductory Macroeconomics", roadmap: ["GDP", "Inflation", "Fiscal Policy", "Monetary Policy"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "ECN300", name: "Econometrics", roadmap: ["Linear Regression", "Hypothesis Testing", "Forecasting", "Data Analysis"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "ECN400", name: "International Finance", roadmap: ["Exchange Rates", "Balance of Payments", "Global Markets", "Financial Crises"] }] }
    ]
  },

  // ==========================================
  // FACULTY OF ENGINEERING & ARCHITECTURAL SCIENCE
  // ==========================================
  "Aerospace Engineering": {
    title: "Bachelor of Engineering (Aerospace)",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "AER222", name: "Engineering Mechanics", roadmap: ["Statics", "Dynamics", "Kinematics", "Force Vectors"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "AER309", name: "Aerodynamics", roadmap: ["Fluid Dynamics", "Airfoil Theory", "Lift & Drag", "Compressible Flow"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "AER504", name: "Flight Mechanics", roadmap: ["Aircraft Performance", "Stability", "Control Systems", "Flight Sim"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "AER800", name: "Aerospace Design", roadmap: ["Conceptual Design", "Preliminary Design", "Detailed Analysis", "Presentation"] }] }
    ]
  },
  "Civil Engineering": {
    title: "Bachelor of Engineering (Civil)",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "CVL100", name: "Intro to Civil Engineering", roadmap: ["Surveying", "Materials", "Ethics", "Project Mgmt"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "CVL200", name: "Structural Analysis", roadmap: ["Trusses", "Shear & Moment", "Deflection", "Matrix Analysis"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "CVL300", name: "Geotechnical Engineering", roadmap: ["Soil Mechanics", "Foundations", "Slope Stability", "Retaining Walls"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "CVL400", name: "Transportation Engineering", roadmap: ["Traffic Flow", "Highway Design", "Public Transit", "Pavements"] }] }
    ]
  },
  "Biomedical Engineering": {
    title: "Bachelor of Engineering (Biomedical)",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "BME100", name: "Intro to Biomechanics", roadmap: ["Human Kinematics", "Bone Mechanics", "Tissue Properties", "Gait Analysis"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "BME200", name: "Biomaterials", roadmap: ["Metals & Polymers", "Biocompatibility", "Implants", "Tissue Engineering"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "BME300", name: "Medical Devices", roadmap: ["Sensors", "Pacemakers", "Prosthetics", "Regulatory Approvals"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "BME400", name: "Capstone Project", roadmap: ["Needs Finding", "Prototyping", "Clinical Testing", "Final Report"] }] }
    ]
  },
  "Computer Engineering": {
    title: "Bachelor of Engineering (Computer)",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "COE100", name: "Digital Systems", roadmap: ["Logic Gates", "Boolean Algebra", "Combinational Logic", "Sequential Circuits"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "COE200", name: "Microprocessors", roadmap: ["Assembly Language", "CPU Architecture", "Memory Interfacing", "Interrupts"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "COE300", name: "Operating Systems", roadmap: ["Processes", "Threads", "Memory Management", "File Systems"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "COE400", name: "Embedded Systems", roadmap: ["Microcontrollers", "RTOS", "IoT Devices", "System Integration"] }] }
    ]
  },
  "Electrical Engineering": {
    title: "Bachelor of Engineering (Electrical)",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "ELE100", name: "Electric Circuits", roadmap: ["Ohm's Law", "Kirchhoff's Laws", "Nodal Analysis", "Op-Amps"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "ELE200", name: "Signals and Systems", roadmap: ["Continuous Signals", "Fourier Transforms", "Laplace", "Filters"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "ELE300", name: "Power Systems", roadmap: ["AC Power", "Transformers", "Transmission Lines", "Smart Grids"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "ELE400", name: "Control Systems", roadmap: ["Feedback", "PID Controllers", "Root Locus", "State Space"] }] }
    ]
  },
  "Mechanical Engineering": {
    title: "Bachelor of Engineering (Mechanical)",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "MEC100", name: "Engineering Graphics", roadmap: ["CAD Basics", "Orthographic Projection", "Tolerancing", "3D Modeling"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "MEC200", name: "Thermodynamics", roadmap: ["Laws of Thermo", "Heat Engines", "Refrigeration", "Power Cycles"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "MEC300", name: "Fluid Mechanics", roadmap: ["Fluid Properties", "Navier-Stokes", "Pipe Flow", "Pumps & Turbines"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "MEC400", name: "Machine Design", roadmap: ["Stress Analysis", "Fatigue", "Gears & Bearings", "System Design"] }] }
    ]
  },
  "Architectural Science": {
    title: "Bachelor of Architectural Science",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "ARC100", name: "Architecture Studio I", roadmap: ["Form & Space", "Drafting", "Model Making", "Site Analysis"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "ARC200", name: "Building Science", roadmap: ["Heat Transfer", "Moisture Control", "Acoustics", "Lighting"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "ARC300", name: "Sustainable Design", roadmap: ["Passive Solar", "Green Materials", "LEED Certification", "Energy Modeling"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "ARC400", name: "Comprehensive Studio", roadmap: ["Urban Context", "Structural Integration", "Code Compliance", "Final Review"] }] }
    ]
  },

  // ==========================================
  // TED ROGERS SCHOOL OF MANAGEMENT
  // ==========================================
  "Business Management": {
    title: "Bachelor of Commerce (Business Management)",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "MKT100", name: "Principles of Marketing", roadmap: ["Consumer Behavior", "Market Segmentation", "The 4 Ps", "Digital Marketing"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "FIN300", name: "Managerial Finance", roadmap: ["Time Value", "Bond Valuation", "Stock Valuation", "Capital Budgeting"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "LAW122", name: "Business Law", roadmap: ["Contracts", "Tort Law", "Corporate Governance", "Employment Law"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "BUS800", name: "Strategic Management", roadmap: ["Industry Analysis", "Competitive Advantage", "Strategy", "Global Business"] }] }
    ]
  },
  "Accounting and Finance": {
    title: "Bachelor of Commerce (Accounting)",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "ACC100", name: "Financial Accounting", roadmap: ["Accounting Cycle", "Balance Sheets", "Income Statements", "Cash Flow"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "ACC406", name: "Management Accounting", roadmap: ["Cost Behavior", "Job Costing", "CVP Analysis", "Budgeting"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "ACC514", name: "Intermediate Accounting", roadmap: ["Revenue", "Inventory", "Long-term Assets", "Liabilities"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "ACC842", name: "Auditing", roadmap: ["Audit Planning", "Internal Controls", "Testing", "Audit Reports"] }] }
    ]
  },
  "Business Technology Management": {
    title: "Bachelor of Commerce (BTM)",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "ITM100", name: "Foundations of Info Systems", roadmap: ["Hardware/Software", "Databases Intro", "Networking", "IT Ethics"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "ITM200", name: "Systems Analysis", roadmap: ["SDLC", "Agile", "UML Diagrams", "Requirements Gathering"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "ITM300", name: "Database Administration", roadmap: ["SQL", "Data Modeling", "Normalization", "Data Warehousing"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "ITM400", name: "IT Project Management", roadmap: ["Scope Management", "Risk Assessment", "Resource Allocation", "Project Delivery"] }] }
    ]
  },
  "Hospitality and Tourism Management": {
    title: "Bachelor of Commerce (Hospitality)",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "HTM100", name: "Intro to Hospitality", roadmap: ["Hotels", "Food & Beverage", "Events", "Guest Experience"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "HTM200", name: "Hotel Operations", roadmap: ["Front Desk", "Housekeeping", "Revenue Management", "Facilities"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "HTM300", name: "Event Planning", roadmap: ["Conferences", "Catering", "Logistics", "Event Marketing"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "HTM400", name: "Destination Management", roadmap: ["Tourism Economics", "Sustainable Tourism", "Global Trends", "Policy"] }] }
    ]
  },
  "Retail Management": {
    title: "Bachelor of Commerce (Retail)",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "RMG100", name: "Intro to Retail", roadmap: ["Store Formats", "Omnichannel", "Consumer Trends", "Retail Math"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "RMG200", name: "Merchandise Buying", roadmap: ["Assortment Planning", "Vendor Relations", "Pricing Strategies", "Inventory"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "RMG300", name: "Store Design", roadmap: ["Visual Merchandising", "Layouts", "Fixtures", "In-store Experience"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "RMG400", name: "E-Commerce Strategy", roadmap: ["Platform Management", "Digital Marketing", "Fulfillment", "Analytics"] }] }
    ]
  },
  "Health Services Management": {
    title: "Bachelor of Health Administration",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "HSM100", name: "Canadian Health Care", roadmap: ["Medicare", "Provincial Systems", "Public Health", "Funding"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "HSM200", name: "Health Informatics", roadmap: ["EHRs", "Telehealth", "Data Security", "Health Tech"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "HSM300", name: "Health Law & Ethics", roadmap: ["Patient Rights", "Consent", "Malpractice", "Bioethics"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "HSM400", name: "Healthcare Quality", roadmap: ["Patient Safety", "Lean Six Sigma", "Accreditation", "Performance Metrics"] }] }
    ]
  },

  // ==========================================
  // THE CREATIVE SCHOOL
  // ==========================================
  "Journalism": {
    title: "Bachelor of Journalism",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "JRN103", name: "Intro to Journalism", roadmap: ["News Values", "Interviewing", "Leads", "Media Ethics"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "JRN270", name: "Multimedia Journalism", roadmap: ["Audio", "Video Production", "Web Publishing", "Social Media"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "JRN800", name: "Feature Writing", roadmap: ["Pitching", "Narrative", "Long-form", "Editing"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "JRN900", name: "Investigative Journalism", roadmap: ["Public Records", "Data Journalism", "Undercover", "Legal Risks"] }] }
    ]
  },
  "Fashion": {
    title: "Bachelor of Design (Fashion)",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "FSN100", name: "Fashion Design Fundamentals", roadmap: ["Sketching", "Color Theory", "Textiles", "Sewing"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "FSN200", name: "Pattern Drafting", roadmap: ["Bodice Slopers", "Skirt Blocks", "Draping", "Fitting"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "FSN300", name: "Fashion History", roadmap: ["Ancient Dress", "19th Century", "20th Century", "Contemporary"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "FSN400", name: "Final Collection", roadmap: ["Concept", "Fabric Sourcing", "Construction", "Runway"] }] }
    ]
  },
  "Image Arts (Film or Photography)": {
    title: "Bachelor of Fine Arts (Image Arts)",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "IMA100", name: "Visual Studies", roadmap: ["Composition", "Lighting Basics", "Camera Mechanics", "Visual Storytelling"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "IMA200", name: "Cinematography", roadmap: ["Lenses", "Lighting Setups", "Camera Movement", "Color Grading"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "IMA300", name: "Directing", roadmap: ["Script Breakdown", "Working with Actors", "Blocking", "Set Protocol"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "IMA400", name: "Thesis Film", roadmap: ["Pre-production", "Principal Photography", "Post-production", "Screening"] }] }
    ]
  },
  "Interior Design": {
    title: "Bachelor of Interior Design",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "IDE100", name: "Design Studio I", roadmap: ["Spatial Reasoning", "Hand Drafting", "Ergonomics", "Materials"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "IDE200", name: "Digital Communication", roadmap: ["AutoCAD", "Revit", "3D Rendering", "Digital Portfolios"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "IDE300", name: "Commercial Design", roadmap: ["Office Spaces", "Retail", "Wayfinding", "Building Codes"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "IDE400", name: "Advanced Studio", roadmap: ["Client Brief", "Concept Phase", "Construction Docs", "Final Pitch"] }] }
    ]
  },
  "RTA School of Media": {
    title: "Bachelor of Arts (Media Production)",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "RTA100", name: "Media Aesthetics", roadmap: ["Sound Design", "Video Editing", "Graphic Layout", "Studio Ops"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "RTA200", name: "Writing for Media", roadmap: ["Screenwriting", "Copywriting", "Transmedia", "Pitching"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "RTA300", name: "Live Production", roadmap: ["Multi-cam", "Control Room", "Live Streaming", "Technical Directing"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "RTA400", name: "Media Entrepreneurship", roadmap: ["Business Models", "Funding", "Marketing", "Startup Launch"] }] }
    ]
  },
  "Performance (Acting, Dance, or Production)": {
    title: "Bachelor of Fine Arts (Performance)",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "PER100", name: "Foundations of Performance", roadmap: ["Voice", "Movement", "Improv", "Script Analysis"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "PER200", name: "Scene Study", roadmap: ["Character Arc", "Partner Work", "Classical Texts", "Contemporary"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "PER300", name: "Stagecraft", roadmap: ["Lighting Design", "Set Construction", "Costuming", "Stage Management"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "PER400", name: "Mainstage Production", roadmap: ["Auditions", "Rehearsals", "Tech Week", "Opening Night"] }] }
    ]
  },
  "Professional Communication": {
    title: "Bachelor of Arts (ProCom)",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "CMN100", name: "Intro to ProCom", roadmap: ["Audience Analysis", "Rhetoric", "Business Writing", "Presentations"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "CMN200", name: "Visual Communication", roadmap: ["Information Design", "Typography", "Data Viz", "Brand Guidelines"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "CMN300", name: "Crisis Communication", roadmap: ["Risk Assessment", "PR Strategy", "Media Relations", "Press Releases"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "CMN400", name: "Organizational Comms", roadmap: ["Internal Comms", "Change Management", "Leadership", "Consulting Project"] }] }
    ]
  },

  // ==========================================
  // FACULTY OF COMMUNITY SERVICES
  // ==========================================
  "Nursing": {
    title: "Bachelor of Science in Nursing",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "NSE111", name: "Nursing Practice I", roadmap: ["Health Assessment", "Vital Signs", "Communication", "Infection Control"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "NSE211", name: "Nursing Practice II", roadmap: ["Medications", "Wound Care", "IV Therapy", "Clinical Placement"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "NSE311", name: "Pediatric & Maternal", roadmap: ["Prenatal", "Labor & Delivery", "Pediatrics", "Childhood Illnesses"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "NSE411", name: "Advanced Clinical", roadmap: ["Critical Care", "Emergency", "Leadership", "Preceptorship"] }] }
    ]
  },
  "Social Work": {
    title: "Bachelor of Social Work",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "SWP132", name: "Intro to Social Work", roadmap: ["History", "Ethics", "Anti-oppression", "Social Policy"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "SWP302", name: "Social Inclusion", roadmap: ["Poverty", "Housing", "Healthcare Access", "Indigenous Rights"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "SWP50A", name: "Field Practicum I", roadmap: ["Orientation", "Intake", "Case Management", "Reflection"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "SWP50B", name: "Field Practicum II", roadmap: ["Counseling", "Crisis Intervention", "Community Org", "Evaluation"] }] }
    ]
  },
  "Early Childhood Studies": {
    title: "Bachelor of Arts (ECS)",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "ECS100", name: "Child Development I", roadmap: ["Cognitive", "Physical", "Social-Emotional", "Language"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "ECS200", name: "Curriculum Design", roadmap: ["Play-based Learning", "Inclusivity", "Assessment", "Lesson Planning"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "ECS300", name: "Family & Community", roadmap: ["Parent Partnerships", "Diverse Families", "Advocacy", "Community Resources"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "ECS400", name: "ECS Practicum", roadmap: ["Classroom Observation", "Lead Teaching", "Behavior Mgmt", "Portfolio"] }] }
    ]
  },
  "Urban and Regional Planning": {
    title: "Bachelor of Urban and Regional Planning",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "PLG100", name: "Planning Principles", roadmap: ["History of Cities", "Zoning Basics", "Land Use", "Public Interest"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "PLG200", name: "GIS for Planners", roadmap: ["Spatial Data", "Mapping", "Spatial Analysis", "Cartography"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "PLG300", name: "Urban Design", roadmap: ["Streetscapes", "Public Realms", "Placemaking", "Site Planning"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "PLG400", name: "Studio Project", roadmap: ["Community Consult", "Master Planning", "Policy Drafting", "Final Presentation"] }] }
    ]
  },
  "Nutrition and Food": {
    title: "Bachelor of Applied Science (Nutrition)",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "NUT100", name: "Intro to Nutrition", roadmap: ["Macronutrients", "Micronutrients", "Digestion", "Dietary Guidelines"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "NUT200", name: "Food Science", roadmap: ["Food Chemistry", "Preservation", "Sensory Eval", "Food Safety"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "NUT300", name: "Clinical Nutrition", roadmap: ["Diet Assessment", "Enteral Feeding", "Disease Specific Diets", "Counseling"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "NUT400", name: "Public Health Nutrition", roadmap: ["Epidemiology", "Food Security", "Health Promotion", "Policy"] }] }
    ]
  },
  "Occupational and Public Health": {
    title: "Bachelor of Applied Science (Public Health)",
    years: [
      { id: 1, label: "Year 1", courses: [{ id: "OPH100", name: "Intro to Public Health", roadmap: ["Health Determinants", "Disease Prevention", "Health Systems", "Global Health"] }] },
      { id: 2, label: "Year 2", courses: [{ id: "OPH200", name: "Occupational Safety", roadmap: ["Hazards", "Risk Assessment", "Ergonomics", "Safety Regulations"] }] },
      { id: 3, label: "Year 3", courses: [{ id: "OPH300", name: "Environmental Health", roadmap: ["Water Quality", "Air Pollution", "Toxicology", "Waste Management"] }] },
      { id: 4, label: "Year 4", courses: [{ id: "OPH400", name: "Epidemiology", roadmap: ["Outbreak Investigation", "Study Design", "Biostatistics", "Data Surveillance"] }] }
    ]
  }
};

export const courseData = {
  id: "CPS 123",
  name: "Introduction to Programming",
  description: "An intensive introduction to computer programming, algorithms, and data structures. This course covers fundamental concepts including variables, control flow, functions, and object-oriented design. Students will complete hands-on projects to build problem-solving skills.",
  rating: {
    average: 4.0,
    total: 100,
    distribution: { 5: 55, 4: 25, 3: 15, 2: 3, 1: 2 }
  },
  reviews: [
    { 
      id: 1, 
      author: "Johan Philip", 
      program: "Computer Science", 
      rating: 4, 
      date: "2 months ago", 
      text: "Great introductory course! The assignments are challenging but you learn a lot. Make sure to start them early and use the lab hours." 
    },
    { 
      id: 2, 
      author: "Sarah Jenkins", 
      program: "Mathematics", 
      rating: 5, 
      date: "Last semester", 
      text: "The professor was amazing. They really broke down complex concepts well for someone who has never coded before. Highly recommend." 
    },
    { 
      id: 3, 
      author: "Michael Chang", 
      program: "Engineering", 
      rating: 3, 
      date: "1 year ago", 
      text: "Pacing was a bit fast in the second half of the semester. Overall okay, but you need to self-study heavily to keep up with the projects." 
    },
    { 
      id: 4, 
      author: "Emily Chen", 
      program: "Biology", 
      rating: 4, 
      date: "3 weeks ago", 
      text: "Took this as an elective. Harder than I expected, but the grading was fair. The midterm is tricky so study the past papers." 
    }
  ]
};
