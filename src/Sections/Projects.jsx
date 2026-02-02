const Projects = () => {
  const projects = [
    {
      title: "DropArabia, the first Dropshipping Platform in Lebanon",
      image: "https://ik.imagekit.io/greenraven/Green%20Raven/project1.png",
      link: "https://join.droparabia.com"
    },
  ]

  return (
    <div className="section text-white relative bg-light-bg" id="projects">
      <div className="container mx-auto px-4">
        <h1 className="text-center py-5 special">Projects I worked on</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} onClick={() =>{window.open(project.link)}} className="rounded-xl overflow-hidden bg-black/40 border border-gray-700 cursor-pointer hover:scale-103 transition-all duration-200">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-center">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects