import React from 'react'
import SearchImage from './SearchImage'
const Header = () => {
    return (
        <div>
            
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
           <a class="navbar-brand" href="#">Image Gallery</a>
        </nav>
        <div class="hero-image">
  <div class="hero-text">
    <h5>Stunning free images for your next project</h5>
    <SearchImage/>
  </div>
</div> 
      </div>
      
    );
}

export default Header
