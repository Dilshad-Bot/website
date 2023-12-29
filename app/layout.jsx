import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dilshad Hossain',
  description: "I'm a Full Stack Web Developer and a Designer with a passion for trying new things.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='navbar grid'>
          
        </div>
        {children}</body>
    </html>
  )
}
