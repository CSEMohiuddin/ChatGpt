import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
// import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chat GPT',
  description: 'Chat GPT clone using Stack API',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white h-screen `}>
        <div className='flex'>
          <div className='hidden md:flex'>
            <Sidebar/>
          </div>
          <div className='flex-1 flex flex-col h-screen bg-[#343541]'>
            <div className='flex-1'>
              {children}
            </div>
            {/* <div className='mb-5 md:mb-10'>
              <Footer />
            </div> */}
          </div>
        </div>
      </body>
    </html>
  )
}
