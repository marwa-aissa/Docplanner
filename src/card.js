import React  from 'react';
import Itemcard from './itemcard'
import flag from'./flag.png'
import visits from'./visits.png'


const Card =(props)=> {
 
        return  <div id='card'>
            <div className="container-fluid ">
             <div className="row">
              <div className=" col-lg-6 py-5">
              
            <h1 className="display-6 "><strong>The world's <br/>biggest healthcare platform</strong></h1>
            <p className='text muted py-1 d-flex justify-content-center'>We work from 6 offices all over the world, 
            bringing Docplanner Group <br/>to life in almost 20 countries.</p>
                
            </div>
           
              <div className="col-lg-6 ">
                <div className='card-organisation'>
                   <Itemcard  
                       image={flag}
                     title={<span>Leader in <br/> 10 countries</span>}
                    description="Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"/>


                     <Itemcard  
                       image={visits}
                       title={<span> 1.5 million appointments </span>}
                    description="booked last month"/>


                      <Itemcard  
                       image={flag}
                       title={<span> 
                        30 million unique patients </span>}
                    description="visit us every month "/>


                     <Itemcard  
                       image={flag}
                       title={<span>  30 million unique patients </span>}
                    description="trust in our solutions "/>



                </div>

              </div>
            </div>
            </div>
            </div>

      
    }


export default Card;