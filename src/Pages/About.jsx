

const About = () => {
  return (
    <div className='pt-15 sm:pt-25'>
     
      <h1 className='text-center name text-shadow-drop-green'>Meet your humble Warrior</h1>
       <br/>
      <div className='flex-responsive relative from-zinc-500  gap-5! p-2'>
          <img 
            loading='lazy' 
            className='w-100 rounded-2xl'
            alt='Matthew Hamdesh' 
            src='https://ik.imagekit.io/greenraven/Green%20Raven/matthew2.jpeg'
          />
          
          <div className='flex-cols special font-light text-white'>
           <h1 className='nav-main text-green-500'>Character Bio</h1>
           <h3>Name: Matthew Hamdesh</h3>
           <h3>Codename: Green Raven</h3>
           <h3>Gender: Male (if you couldn't tell already)</h3>
           <h3>Date of Birth: September 9 2001</h3>
           <h3>Hobbies: Taekwondo, Gym, Playing Dark Fantasy Games, Reading, Coding</h3>
           <h3>Country: Lebanon</h3>
           <h3>Favorite Color: Couldn't you tell already?</h3>
           <p>Story: I'm not your typical usual guy, I love coding, writing and reading, obessesed with the color green, ravens are my spirit animals due to their inteligence and the ability to learn fast. I'm a Taekwondo disciple with red belt and soon will get the black belt, I don't smoke or drink at all because... just why should I?</p>
          </div>
        </div>

        <br/>

       <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 max-w-7xl mx-auto p-5">
  <div>
    <h2 className="font-bold mb-8">Contact Info</h2>
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-[120px_1fr] gap-5">
        <span className="text-green-600">Name</span>
        <span className="italic">Matthew Hamdesh</span>
      </div>
      <div className="grid grid-cols-[120px_1fr] gap-5">
        <span className="text-green-600">Email</span>
        <span className="italic">greenraven1000@gmail.com</span>
      </div>
      <div className="grid grid-cols-[120px_1fr] gap-5">
        <span className="text-green-600">Phone</span>
        <span className="italic">I'm not giving you that </span>
      </div>
    </div>
  </div>

  <div>
    <h2 className="font-bold mb-8">Writing Skills</h2>
    <div className="grid grid-cols-2 gap-4">
      <span>Content Writing</span>
      <span>Email Campaigns</span>
      <span>Social Media Copywriting</span>
      <span>Website Copy</span>
      <span>SEO Optimization</span>
      <span>Blog & Newsletter Content</span>
    </div>
  </div>

  <div>
    <h2 className="font-bold mb-8">Technical & Marketing Skills</h2>
   <div className="grid grid-cols-2 gap-4">
      <span>Analyzing Competitors</span>
      <span>Data & Performance tracking</span>
      <span>Market & Target Audience Research</span>
    </div>
  </div>

  <div>
    <h2 className="font-bold mb-8">Software & Platforms</h2>
    <ul className="flex flex-col gap-2 list-disc pl-5">
      <li>Google Analytics</li>
      <li>Figma</li>
      <li>Converkit</li>
      <li>System.io</li>
    </ul>
  </div>
</div>
    </div>
  )
}

export default About