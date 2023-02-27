import Header from '@/components/Header/Header'
import './globals.css';

export const metadata = {
    title: 'My Aimed Movies',
    description: 'The website where you can find your favorite movies and series',
}

export default function RootLayout({children,}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <Header/>
        {children}
        </body>
        </html>
    )
}
