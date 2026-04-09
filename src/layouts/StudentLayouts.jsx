import ProfileLayout from "./ProfileLayout";

const prospectiveLinks = [
    { to: "/prospective-student", label: "Dashboard" },
    { to: "/prospective-student/programs", label: "Programs" },
    { to: "/prospective-student/programs-roadmap", label: "Programs Roadmap" },
    { to: "/prospective-student/admissions", label: "Admissions" },
    { to: "/prospective-student/financial-aid", label: "Financial Aid" },
];

export function ProspectiveStudentLayout() {
    return <ProfileLayout title="Prospective Student" navLinks={prospectiveLinks} />
}

const newStudentLinks = [
    { to: "/new-student", label: "Dashboard" },
    { to: "/new-student/orientation", label: "Orientation" },
    { to: "/new-student/course-registration", label: "Course Registration" },
    { to: "/new-student/housing", label: "Housing" },
    { to: "/new-student/settings", label: "Settings" },
];

export function NewStudentLayout() {
    return <ProfileLayout title="New Student" navLinks={newStudentLinks} />
}

const currentStudentLinks = [
    { to: "/current-student", label: "Dashboard" },
    { to: "/current-student/my-schedule", label: "My Schedule" },
    { to: "/current-student/courses", label: "Courses" },
    { to: "/current-student/financial-hub", label: "Financial Hub" },
    { to: "/current-student/graduation-tracker", label: "Graduation Tracker" },
    { to: "/current-student/settings", label: "Settings" },
];

export function CurrentStudentLayout() {
    return <ProfileLayout title="Current Student" navLinks={currentStudentLinks} />
}
