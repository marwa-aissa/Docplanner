import React  from 'react';



const Itemcard =({image,title,description})=> {
    
        return (
            <div className='itemcard'>
                <img src={image} alt='' className='logo-card'/>
                <h4 className='text1' style={{'color':'#00b39b'}}>{title}</h4>
                <p className='text2' style={{'color':'#6f7977'} }>
                    {description}
                </p>
                
            </div>
        );
    
}

export default Itemcard;