import { FaInstagram, FaLinkedin, FaAt } from "react-icons/fa";
import { FaThreads } from 'react-icons/fa6';

const Contact = () => {
  return (
    <div className='py-10 flex-cols gap-5! text-center text-white'>
      <h2 className="text-shadow-drop-center special ">
        Let's build your conquest campaign
      </h2>
      <p>Feel Free to reach out to me and let's discuss how we can get started</p>
      <div className="flex justify-center gap-5">
       <FaInstagram color="lime" className="contact-icon" onClick={() => {window.open("https://www.instagram.com/matthew_hamdesh?igsh=bTRzb29oaTN2aXNw")}}/>
       <FaLinkedin color="lime" className="contact-icon" onClick={() => {window.open("https://www.linkedin.com/in/matthew-hamdesh-a98584378")}}/>
       <FaThreads color="lime" className="contact-icon" onClick={() => {window.open("https://www.threads.com/@matthew_hamdesh")}}/>
      </div>
    
    </div>
  )
}

export default Contact
