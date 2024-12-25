import './menu.css';

function Menu(){

    return(

        <nav class="navbar">
        <div class="casamia">CASA MIA</div>
        <ul class="navitems">
          <li className='about'><a href="#home">Home</a></li>
          <li className='about'><a href="#about">About</a></li>
          <li className='highlight'><a href="#Blog">Blogs</a></li>
          <li className='gallery'><a href="#agents">Agents</a></li>
          <li className='faq'><a href="#properties">Properties</a></li>
        </ul>
        <button className='contact'>Contact</button>
      </nav>


      
    )



};

export default Menu;