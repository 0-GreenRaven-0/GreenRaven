import { 
  FaFunnelDollar, 
  FaPenFancy, 
  FaFilm, 
  FaSearchDollar, 
  FaUsers, 
  FaEnvelopeOpenText
} from 'react-icons/fa'

const Offer = () => {
  const skills = [
    {
      title: "Sales Funnel Architecture",
      description: "Designing complete customer journeys from awareness to purchase",
      icon: FaFunnelDollar,
      color: {
        border: '#047857',
        glow: '#059669',
        light: '#10b981',
      }
    },
    {
      title: "Conversion Copywriting",
      description: "Writing copy for sales pages, landing pages, and emails that convert",
      icon: FaPenFancy,
      color: {
        border: '#1e3a8a',
        glow: '#1e40af',
        light: '#2563eb',
      }
    },
    {
      title: "Ad & Content Scriptwriting",
      description: "Writing scripts for paid ads and organic engagement content",
      icon: FaFilm,
      color: {
        border: '#6b21a8',
        glow: '#7c3aed',
        light: '#8b5cf6',
      }
    },
    {
      title: "SEO Optimization",
      description: "Optimizing content and pages for search engine visibility",
      icon: FaSearchDollar,
      color: {
        border: '#047857',
        glow: '#059669',
        light: '#10b981',
      }
    },
    {
      title: "Audience & Market Research",
      description: "Analyzing target audiences, competitors, and market positioning across platforms",
      icon: FaUsers,
      color: {
        border: '#1e3a8a',
        glow: '#1e40af',
        light: '#2563eb',
      }
    },
    {
      title: "Email Marketing Funnels",
      description: "Building nurture sequences and automated email campaigns",
      icon: FaEnvelopeOpenText,
      color: {
        border: '#6b21a8',
        glow: '#7c3aed',
        light: '#8b5cf6',
      }
    }
  ]

  return (
    <div className='section relative text-white p-4' id="offer">
      <div className="container mx-auto px-4">
        <h1 className="special text-center mb-10 pt-5">What I can do for your business</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden h-full transition-all duration-300 hover:brightness-150 cursor-pointer"
              style={{
                border: `1px solid ${skill.color.border}`,
                boxShadow: `0 0 15px ${skill.color.glow}30, inset 0 0 30px ${skill.color.glow}10`,
                minHeight: '280px'
              }}
            >
              {/* Icon - Top */}
              <div 
                className="flex items-center justify-center pt-6 pb-4"
                style={{
                  backgroundColor: `${skill.color.glow}15`
                }}
              >
                <div
                  className="p-4 rounded-full"
                  style={{
                    backgroundColor: `${skill.color.glow}20`,
                    boxShadow: `0 0 20px ${skill.color.glow}40`
                  }}
                >
                  <skill.icon 
                    className='text-7xl lg:text-5xl'
                    style={{
                      color: skill.color.light,
                      filter: `drop-shadow(0 0 6px ${skill.color.glow})`
                    }}
                  />
                </div>
              </div>

              {/* Title - Middle */}
              <div className="px-6 py-3">
                <h3 
                  className="font-bold text-xl text-center"
                  style={{
                    color: skill.color.light,
                    textShadow: `0 0 15px ${skill.color.glow}60`
                  }}
                >
                  {skill.title}
                </h3>
              </div>

              {/* Description - Bottom */}
              <div className="px-6 pb-6 flex-1">
                <p className="text-gray-300 text-sm leading-relaxed text-center">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Offer