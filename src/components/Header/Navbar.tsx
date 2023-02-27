"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Navbar() {
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
        <nav>
            <ul className="flex flex-row gap-4">
                {menu.map(({title, urlTo, isActive}) => (
                    <li key={title}>
                        <Link href={urlTo}
                              className={`${isActive ? "text-gray-700 font-bold underline" : "text-gray-600 font-semibold hover:underline"}`}>{title}</Link>
                    </li>))}
            </ul>
        </nav>
    )
}