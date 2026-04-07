import { Outlet } from "react-router";
import Header from "../components/Header";

export default function ProfileLayout({ title, navLinks }) {
    return (
        <div className="flex flex-col min-h-screen w-full bg-background text-foreground">
            <Header title={title} navLinks={navLinks} />
            <main className="flex-1 mt-[60px] p-4 flex flex-col">
                <Outlet />
            </main>
        </div>
    )
}
