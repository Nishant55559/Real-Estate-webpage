import './menu.css';

function Menu(){

    return(

        <nav class="navbar">
        <div class="casamia">CASA MIA</div>
        <ul class="navitems">
          <li className='about'><a href="#about">About</a></li>
          <li className='highlight'><a href="#highlight">Hilight</a></li>
          <li className='gallery'><a href="#gallery">Gallery</a></li>
          <li className='faq'><a href="#Faq">FAQ</a></li>
        </ul>
        <button className='contact'>Contact</button>
      </nav>


      
    )



};

export default Menu;