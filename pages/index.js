
import { Inter } from 'next/font/google'
import Twitter from './twitter'
import TwitterRegister from './twitter/TwitterRegister'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Twitter/>
      <TwitterRegister/>
    </div>
  )
}
