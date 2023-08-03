
import { Inter } from 'next/font/google'
import Twitter from './twitter'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Twitter/>
    </div>
  )
}
