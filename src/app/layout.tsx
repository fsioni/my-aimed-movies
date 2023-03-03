import Header from '@/components/Header/Header'
import {Metadata} from "next";
import FlowbiteContext from "@/context/FlowbiteContext";
import './globals.css';
import {FC, PropsWithChildren} from "react";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
    title: 'My Aimed Movies',
    description: 'The website where you can find your favorite movies and series',
}

const RootLayout: FC<PropsWithChildren> = function ({children}) {
    return (
        <html lang="en">
        <body>
        <FlowbiteContext>
            <div className="h-screen dark:bg-gray-900">
                <Header/>
                {children}
                <Footer/>
            </div>
        </FlowbiteContext>
        </body>
        </html>
    )
}

export default RootLayout;
