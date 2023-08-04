
import { Inter } from 'next/font/google'
import Twitter from './twitter'
import Link from 'next/link'
import { useRouter } from 'next/router'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router=useRouter()
  const handlePrivacy = () => {
    router.push('/privacypolicy/[id]',);
  };
 const handleTermsOfServices=()=>{
  router.push("/termsofservices/[id]")
 }
  return (
    <div>
      {/* <Link href="pages/privacypolicy/Privacy">Privacy Policy</Link> */}
      <button className='p-8 text-12 ' onClick={handlePrivacy}>Privacy</button>
      <button className='p-8 text-12 ' onClick={handleTermsOfServices}>TermsOfServices</button>
      <div>
      <Twitter/>
      </div>
    </div>
  )
}
