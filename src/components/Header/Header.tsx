import Logo from "./Logo";
import Navbar from "@/components/Header/Navbar";

export default function Header() {
    return (
        <header className="flex items-center border-2">
            <Logo/>
            <Navbar/>
        </header>
    )
}