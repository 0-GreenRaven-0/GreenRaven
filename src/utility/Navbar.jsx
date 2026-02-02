import { useState, useEffect } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaThreads } from 'react-icons/fa6' 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
  ];

  const handleLogoClick = () => {
    navigate('/')
    window.scrollTo(0, 0)
  }

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 w-full p-2 sm:px-5 flex items-center justify-between z-[200] special text-left!
        transition-all duration-700
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
        ${isScrolled ? 'bg-green-500/10 backdrop-blur-lg' : 'bg-transparent'}
      `}
    >
<style>{`
  .logo-fill {
    background: linear-gradient(to right, #10b981 0%, #089e00 50%, #ffffff 50%);
    background-size: 200% 100%;
    background-position: 100%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: background-position 0.5s ease;
  }
  
  .logo-fill:hover {
    background-position: 0%;
  }
`}</style>

      <span 
        onClick={handleLogoClick}
        className='nav-main font-semibold cursor-pointer relative z-[300]'
      >
        <span className="logo-fill ">Green Raven</span>
      </span>
      
      {/* Desktop Nav - lg and up */}
      <nav className='hidden lg:flex gap-6 nav-button items-center'>
        {navLinks.map((link) => (
          <a 
            key={link.name}
            onClick={() => {navigate(link.href)}}
            className='hover:text-green-400 transition-colors cursor-pointer'
          >
            {link.name}
          </a>
        ))}
        <FaInstagram  className="text-green-200 hover:text-green-400 transition-all duration-200 text-2xl cursor-pointer" onClick={() => {window.open("https://www.instagram.com/matthew_hamdesh?igsh=bTRzb29oaTN2aXNw")}}/>
       <FaLinkedin  className="text-green-200 hover:text-green-400 transition-all duration-200 text-2xl cursor-pointer" onClick={() => {window.open("https://www.linkedin.com/in/matthew-hamdesh-a98584378")}}/>
       <FaThreads  className="text-green-200 hover:text-green-400 transition-all duration-200 text-2xl cursor-pointer" onClick={() => {window.open("https://www.threads.com/@matthew_hamdesh")}}/>
      </nav>
      
      {/* Mobile Menu Button - below lg */}
      <button 
        onClick={() => setIsMenuOpen(true)}
        className='lg:hidden'
        aria-label="Open menu"
      >
        <HiMenuAlt3 className='text-4xl sm:text-6xl' />
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className='fixed inset-0 bg-black/50 lg:hidden z-[199]'
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu - slides from right */}
      <div 
        className={`
          fixed top-0 right-0 h-screen w-72 
          bg-green-950/90 backdrop-blur-lg
          transform transition-transform duration-300 ease-in-out
          lg:hidden z-[200]
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Close Button */}
        <button 
          onClick={() => setIsMenuOpen(false)}
          className='absolute top-4 right-4'
          aria-label="Close menu"
        >
          <IoClose size={40} />
        </button>

        {/* Menu Links */}
        <nav className='flex flex-col gap-6 p-5 mt-16'>
          {navLinks.map((link) => (
            <a 
              key={link.name}
              onClick={() => {
                navigate(link.href)
                setIsMenuOpen(false)
              }}
              className='hover:text-green-400 transition-colors nav-button cursor-pointer'
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className='flex p-5 gap-5 '>
        <FaInstagram  className="text-green-200 hover:text-green-400 transition-all duration-200 text-4xl sm:text-2xl cursor-pointer" onClick={() => {window.open("https://www.instagram.com/matthew_hamdesh?igsh=bTRzb29oaTN2aXNw")}}/>
       <FaLinkedin  className="text-green-200 hover:text-green-400 transition-all duration-200 text-4xl sm:text-2xl cursor-pointer" onClick={() => {window.open("https://www.linkedin.com/in/matthew-hamdesh-a98584378")}}/>
       <FaThreads  className="text-green-200 hover:text-green-400 transition-all duration-200 text-4xl sm:text-2xl cursor-pointer" onClick={() => {window.open("https://www.threads.com/@matthew_hamdesh")}}/>
        </div>
      </div>
    </header>
  )
}

export default Navbar