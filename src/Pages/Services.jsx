import { 
  FaFunnelDollar, 
  FaPenFancy, 
  FaFilm, 
  FaSearchDollar, 
  FaUsers, 
  FaEnvelopeOpenText
} from 'react-icons/fa';

import AppearOnScroll from '../utility/Appearonscroll';

const Services = () => {
const skills = [
  {
    title: "Sales Funnel Architecture",
    description: "I design complete customer journeys from discovery to purchase: ads, landing pages, email sequences, sales pages. I architect the entire funnel, track performance, and optimize based on what the data reveals.",
    icon: FaFunnelDollar,
    color: '#10b981',
  },
  {
    title: "Conversion Copywriting",
    description: "I don't just write. I study your offer and your audience to understand what earns their trust, answers their objections, and nurtures them into warm, qualified leads ready to buy.",
    icon: FaPenFancy,
    color: '#3b82f6',
  },
  {
    title: "Ad & Content Scriptwriting",
    description: "Before presenting your offer, we need attention. I write scroll-stopping scripts with different creatives and angles tailored to what your audience actually needs and responds to.",
    icon: FaFilm,
    color: '#8b5cf6',
  },
  {
    title: "SEO Optimization",
    description: "I optimize websites to rank higher in search engines for organic growth. This makes your offer visible in search results and accessible to AI tools that recommend solutions to users.",
    icon: FaSearchDollar,
    color: '#10b981',
  },
  {
    title: "Audience & Market Research",
    description: "This is where every project starts. After studying your offer, I research across platforms to find your ideal audience, their pain points, and past experiences, then craft the fitting strategy.",
    icon: FaUsers,
    color: '#3b82f6',
  },
  {
    title: "Email Marketing Funnels",
    description: "Capturing emails isn't just for warming leads. It's for follow-ups, abandoned carts, and behavioral triggers. I build email systems, write sequences for specific actions, and manage lists to keep engagement high.",
    icon: FaEnvelopeOpenText,
    color: '#8b5cf6',
  }
];

  return (
    <div className='pt-15 sm:pt-25'>
      <h1 className='text-center special2 mb-12'>My Services</h1>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
      
      <div className="container mx-auto py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex-responsive gap-10 items-start h-full p-2">
              {/* Left side - Stone with floating icon */}
              <div className="relative flex-shrink-0">
                <img 
                  src="https://ik.imagekit.io/greenraven/Green%20Raven/stone-removebg-preview.png"
                  alt="Stone"
                  className="w-48 h-48 pt-20 object-contain"
                />
                <div className="absolute top-4 left-1/2 -translate-x-1/2 float-animation">
                  <skill.icon 
                    size={65} 
                    style={{
                      color: skill.color,
                      filter: `drop-shadow(0 0 15px ${skill.color}) brightness(1.5)`
                    }}
                  />
                </div>
              </div>

              {/* Right side - Title and description */}
              <div className="flex-1">
                <h3 className=" font-bold text-white mb-2 special2 text-center lg:text-left">{skill.title}</h3>
                <p className="text-gray-300">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services