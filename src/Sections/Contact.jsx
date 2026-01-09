import { FaInstagram, FaEnvelope, FaLinkedin } from "react-icons/fa"

const Contact = () => {
  return (
    <div className='py-10 flex-cols gap-5! text-center text-white'>
      <h1 className="text-shadow-drop-center special ">Your Call, Sire</h1>
      <p>Feel Free to reach out to me and let's discuss if I am fit to help you</p>
      <div className="flex justify-center gap-5">
       <FaInstagram color="lime" className="contact-icon"/>
       <FaEnvelope color="lime" className="contact-icon"/>
       <FaLinkedin color="lime" className="contact-icon"/>
      </div>
    



    </div>
  )
}

export default Contact
