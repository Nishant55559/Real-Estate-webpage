import './pp_head.css';
import property from './property.jpg'

function Property_head(){
    return(
    <div className="header-container">
      <div className="header-content">
        <h1>Choose<br/>
        Your Desired Home</h1>
        <nav className="breadcrumb">
          <a href="/">Home</a> <span>&gt;</span> <span> Contact</span>
        </nav>
      </div>
    </div>
  );
}



export default Property_head;