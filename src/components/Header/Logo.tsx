import Image from "next/image";

export default function Logo() {
    return (
        <Image priority src="/logo.png" alt="Logo My Aimed Movies" width={500} height={500}/>
    )
}