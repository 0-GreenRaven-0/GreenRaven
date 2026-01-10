const Hero = () => {
  return (
    <div className='bg-[#050500] relative section flex-center-main justify-start! pt-5 sm:pt-70 lg:pt-55 overflow-hidden animate-fadeIn'>
      <h3 className="special relative z-100">Your Humble</h3>
     <h1 className='name text-shadow-drop-center relative z-100'>Green Raven</h1>
      <h3 className="special relative z-100">
      At your service!
      </h3>
<p className="lg:w-[50%] text-center text-white special">I write conversion-focused copy and build interactive experiences that turn cold prospects into paying customers</p>

       <div className="hidden md:block absolute bottom-0 left-15">
        <div className="relative">
         <video 
            className="absolute -top-55 left-1/2 -translate-x-1/2 fire overflow-hidden! z-100"
          src="https://ik.imagekit.io/greenraven/Green%20Raven/PixVerse_V5.5_Image_Text_360P_Seamless_looping%20(online-video-cutter.com)%20(1).mp4" 
           style={{ pointerEvents: 'none', userSelect: 'none' }}
          autoPlay 
          muted
          loop 
          playsInline
          
        />
            <img className="goblet z-50 relative" src="https://ik.imagekit.io/greenraven/Green%20Raven/ChatGPT%20Image%20Dec%2016,%202025,%2005_17_32%20PM.png"/>


        </div>
  
    </div>

    <div className="absolute -bottom-4 md:right-15">
        <div className="relative">
         <video 
            className="absolute -top-38 md:-top-55 left-1/2 -translate-x-1/2 fire overflow-hidden! z-100"
          src="https://ik.imagekit.io/greenraven/Green%20Raven/PixVerse_V5.5_Image_Text_360P_Seamless_looping%20(online-video-cutter.com)%20(1).mp4" 
           style={{ pointerEvents: 'none', userSelect: 'none' }}
          autoPlay 
          muted
          loop 
          playsInline
          
        />
            <img className="goblet z-50 relative" src="https://ik.imagekit.io/greenraven/Green%20Raven/ChatGPT%20Image%20Dec%2016,%202025,%2005_17_32%20PM.png"/>
         
        </div>
  
    </div>

    </div>
  )
}

export default Hero