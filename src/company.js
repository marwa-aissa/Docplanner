import React, { Component } from 'react';
import image from './logocomp.jpg';
class Company extends Component {
    render() {
        return (
            <div className='container '>  
            <div className='row'>
            <div className='col-lg-4 text-company' >
            <h1 className='introd-company 'style={{'color':'#00ccb1'}}>we are a global company with local culture</h1>
            </div>
             


            <div className="col-lg-2 ">
               <div  className="d-flex">
             <img src={image} alt='logo' className='imgcompany'  />
             <p className='text1'>Znaylekarz</p>
             </div>
             <div className="d-flex">
             <img src={image} alt='logo' className='imgcompany'  />
             <p className='text1'>Znaylekarz</p>
           
             </div>
            
            </div>
            <div className="col-lg-2 d-flex ">
               
               <img src={image} alt='logo' className='imgcompany'  />
               <p className='text1'>Znaylekarz</p>
              
              
              
              </div>
              <div className="col-lg-2 d-flex">
               
               <img src={image} alt='logo' className='imgcompany'  />
               <p className='text1'>Znaylekarz</p>
              
              
              
              </div>
              <div className="col-lg-2 d-flex">
               
               <img src={image} alt='logo' className='imgcompany'  />
               <p className='text1'>Znaylekarz</p>
              
              
              
              </div>
      

                

</div>

            </div>
        );
    }
}

export default Company;