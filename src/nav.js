import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
<nav class="nav  py-5 d-flex">
  
<div className="navv d-flex ">
<h1 className='text1' style={{'color':'#00b39b'}}>Docplanner</h1> 
<h1 className='text2' style={{'color':'#6f7977'}}>Group</h1> 
</div>
<div className='organisation-nav d-flex py-1 '>
  <a class="nav-link active" href="#">About us</a>
  <a class="nav-link" href="#">Career</a>
  <a class="nav-link" href="#">Departements</a>
  </div>

</nav>
        );
    }
}

export default Nav;