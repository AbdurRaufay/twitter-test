
import { Inter } from 'next/font/google'
import Twitter from './twitter'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div>
      <div className='flex justify-around'>
      <Link href="/privacypolicy">Privacy Policy</Link>
      <Link href="/termsofservices">TermsOfServices</Link>
      </div>
      <div>
      <Twitter/>
      </div>
    </div>
  )
}
