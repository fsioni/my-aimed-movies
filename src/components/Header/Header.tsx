"use client"
import Logo from "./Logo";
import {Navbar, Button} from "flowbite-react";
import {usePathname} from "next/navigation";
import {BsGithub} from "react-icons/bs";

export default function Header() {
    interface menuItem {
        title: string,
        urlTo: string,
        isActive: boolean
    }

    const menu: Array<menuItem> = [
        {title: "Home", urlTo: "/", isActive: usePathname() === "/"},
        {title: "Movies", urlTo: "/movies", isActive: usePathname() === "/movies"},
        {title: "Series", urlTo: "/series", isActive: usePathname() === "/series"},
        {title: "Actors", urlTo: "/actors", isActive: usePathname() === "/actors"},
    ]

    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="/">
                <Logo/>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Button href="https://github.com/fsioni/my-aimed-movies" target="_blank" className="bg-gray-800">
                    <BsGithub className="pr-2" size={24}/>
                    GitHub
                </Button>
                <Navbar.Toggle/>
            </div>
            <Navbar.Collapse>
                {menu.map(({title, urlTo, isActive}) => (
                    <Navbar.Link key={title} href={urlTo} active={isActive}>
                        {title}
                    </Navbar.Link>))}
            </Navbar.Collapse>
        </Navbar>
    )
}