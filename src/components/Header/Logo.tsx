import Image from "next/image";

export default function Logo() {
    return (
        <Image priority src="/logo.png" alt="Logo My Aimed Movies" width={200} height={200}
               className="mr-3 h-6 sm:h-9"/>
    )
}