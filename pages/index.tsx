import Image from 'next/image'
import { Inter } from 'next/font/google'

import LoginCard from '../components/LoginCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-row flex-wrap py-4  justify-center">
          {/* <aside className="w-full sm:w-1/3 md:w-1/4 px-2">
            <div className="sticky top-0 p-4 w-full">
              <ul className="flex flex-col overflow-hidden">...</ul>
            </div>
          </aside> */}
          <main role="main" className="w-full sm:w-2/3 md:w-3/4 mt-10  flex content-center justify-center">
            <LoginCard />
          </main>
        </div>
      </div>
      <footer className="mt-auto flex justify-center ">Buit with ❤️ in India</footer>
    </>
  )
}
