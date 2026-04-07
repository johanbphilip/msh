import { Link } from "react-router";
import Navigation from "./Navigation";

export default function Header({title, navLinks = []}) {
    return (
        <header className="flex justify-between items-center p-3 fixed top-0 left-0 right-0 z-50 bg-background border-b shadow-sm h-[60px]">
            <Link to={`/${title.toLowerCase().replace(/ /g, '-')}`} className="font-bold text-lg px-2">
                {title}
            </Link>
            <Navigation navLinks={navLinks} />
        </header>
    )
}