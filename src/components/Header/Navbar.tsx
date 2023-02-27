import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <Link href="/movies">Movies</Link>
                </li>
                <li>
                    <a href="/series">Series</a>
                </li>
                <li>
                    <a href="/actors">Actors</a>
                </li>
            </ul>
        </nav>
    )
}