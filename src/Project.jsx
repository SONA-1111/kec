import React from 'react'
import { projects } from './Data'
function Project() {
  return (
    <>
    <section id='ProductSection'>
    <div className="container">
      <div className="content">
        <h2>Workmen Rakhsha - DMRC DE-04 Project Safety Guidelines</h2>
        <section className="product " id="product">
        
         <div className="container-Box">

            {projects.map(({ cover, name, pdf }, i) => {
               return (
                  <>

                     <div key={i} className="project__item project-photo">
                        <img src={cover} alt="DMCR" className='project_imgs'/>
                        <div className="project__data">
                           <h3 className="project__title">{name}</h3>
                           <a href={pdf} target='_blank'>Guidelines</a>
                        </div>
                     </div>
                  </>
               )
            })}
            {/* </div> */}
         </div>
      </section>
      </div>
     
      <p className="copyrightText">Copyright © 2024 KEC International Ltd. All rights reserved.</p>
    </div>
  </section>
  
    </>
  )
}

export default Project