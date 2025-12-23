import AudioPanel from "../Utility/AudioPanel"

const Intro = ({button}) => {
  return (
    <div className='bg-black h-screen w-screen text-white flex flex-col items-center justify-center pt-15 md:pt-40 xl:pt-0 gap-1 relative overflow-hidden'>


    <div className="hidden md:block absolute bottom-0 left-15">
        <div className="relative">
         <video 
            className="absolute -top-55 left-1/2 -translate-x-1/2 w-53 overflow-hidden! z-100"
          src="https://ik.imagekit.io/greenraven/Green%20Raven/PixVerse_V5.5_Image_Text_360P_Seamless_looping%20(online-video-cutter.com)%20(1).mp4" 
           style={{ pointerEvents: 'none', userSelect: 'none' }}
          autoPlay 
          muted // ← REQUIRED for autoplay
          loop 
          playsInline // ← Important for mobile
          
        />
            <img className="w-60 z-50 relative" src="https://ik.imagekit.io/greenraven/Green%20Raven/ChatGPT%20Image%20Dec%2016,%202025,%2005_17_32%20PM.png"/>
        </div>
  
    </div>

    <div className=" absolute bottom-0 md:right-15">
        <div className="relative">
         <video 
            className=" absolute -top-40 md:-top-55 left-1/2 -translate-x-1/2 w-40 md:w-53 overflow-hidden! z-100"
          src="https://ik.imagekit.io/greenraven/Green%20Raven/PixVerse_V5.5_Image_Text_360P_Seamless_looping%20(online-video-cutter.com)%20(1).mp4" 
           style={{ pointerEvents: 'none', userSelect: 'none' }}
          autoPlay 
          muted // ← REQUIRED for autoplay
          loop 
          playsInline // ← Important for mobile
          
        />
            <img className="w-45 md:w-60 z-50 relative" src="https://ik.imagekit.io/greenraven/Green%20Raven/ChatGPT%20Image%20Dec%2016,%202025,%2005_17_32%20PM.png"/>
        </div>
  
    </div>

      <h2>Thy Humble</h2>
      <h1 className='name text-shadow-drop-center'>Green Raven</h1>
      <h2 className="relative z-150 px-1 text-center">Welcomes you into his portfolio realm</h2>
       <div className="pb-55 md:pt-0 block xl:hidden"/>
       <AudioPanel/>

      {button}
    </div>
  )
}

export default Intro
