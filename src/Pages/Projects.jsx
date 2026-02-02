

const Projects = () => {
  return (
    <div className='pt-15 sm:pt-25'>
      <h1 className='text-center special2'>Projects I worked on</h1>
      <br/>
     <div className='flex-responsive '>
      <img src='https://ik.imagekit.io/greenraven/Green%20Raven/pr.png' className='lg:w-180'/>
      <div className='flex-2 p-1 sm:p-2'>
        <h3 className='text-white'>Droparabia, the first dropshipping platform in Lebanon & MENA</h3>
        <br/>
        <p className='text-sm sm:text-lg'>Droparabia is a SAAS similar to dropship.io, which allows users from Lebanon & MENA to build their dropshipping business with tiny budgets and little risk possible. It offers automated system for order & shipment fulfillment, Shopify integration and product branding with their laser machine. It eliminates the need of 3rd party services like delivery companies and warehouses as it provides both of them to their users.</p>
        <br/>
        <h3 className="text-white">The work I've done:</h3>
        <ul>
          <li>Building Sales Page</li>
          <li>SEO Optimization</li>
          <li>Ad Scripts for social media content</li>
          <li>Email Marketing Campaign</li>
        </ul>
        <br/>
        <button className="cta-button" onClick={() => {window.open("https://join.droparabia.com")}}>Visit the Sales Page</button>
      </div>
     </div>
    </div>
  )
}

export default Projects