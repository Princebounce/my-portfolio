import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsDiamondHalf } from "react-icons/bs";

export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-800 px-10 py-4">
      <div className="flex items-center gap-4 text-white">
        <div className="size-6 text-[#12d5e7]">
          <BsDiamondHalf className="w-full h-full" />
        </div>
        <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">
          Alex's Portfolio
        </h2>
      </div>
      
      <nav className="flex items-center gap-9">
        <Link 
          href="#about" 
          className="text-base font-medium text-[#A0A0A0] hover:text-[#E0E0E0] transition-colors"
        >
          About
        </Link>
        <Link 
          href="#projects" 
          className="text-base font-medium text-[#A0A0A0] hover:text-[#E0E0E0] transition-colors"
        >
          Projects
        </Link>
        <Link 
          href="#contact" 
          className="text-base font-medium text-[#A0A0A0] hover:text-[#E0E0E0] transition-colors"
        >
          Contact
        </Link>
      </nav>
      
      <div className="flex items-center gap-4">
        <Link 
          href="#" 
          className="text-[#A0A0A0] hover:text-[#12d5e7] transition-colors"
          aria-label="GitHub"
        >
          <FaGithub className="w-6 h-6" />
        </Link>
        <Link 
          href="#" 
          className="text-[#A0A0A0] hover:text-[#12d5e7] transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="w-6 h-6" />
        </Link>
      </div>
    </header>
  )
}