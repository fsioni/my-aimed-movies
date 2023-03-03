import Header from '@/components/Header/Header'
import {Metadata} from "next";
import FlowbiteContext from "@/context/FlowbiteContext";
import './globals.css';

export const metadata: Metadata = {
    title: 'My Aimed Movies',
    description: 'The website where you can find your favorite movies and series',
}

export default function RootLayout({children,}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <FlowbiteContext>
            <Header/>
            {children}
        </FlowbiteContext>
        </body>
        </html>
    )
}
