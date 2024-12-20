import './home.css';
import first from './first.jpg'
import second from './second.jpeg'
import third from './third.jpeg'
import fourth from './fourth.jpeg'
import fifth from './fifth.jpeg'
import sixth from './sixth.jpeg'
import Menu from '../menu bar/menu';
import FAQ from '../faq/faq';
import Footer from '../footer/footer';

function Home() {

    return (
        <div >
            <Menu/>

            <div className='pic1'>
                <img src={first} alt="Home" />
            </div>

            <div className='elehome'>
                <h10>Elevate Home</h10>
            </div>

            <div className='detail'><p>Dream House, Land area 150m sq,
                length 100m,
                and price Rs 2.1 M, comfortable, elegant , and
                perfect for morden family</p>
            </div>

            <div>
                <button className='button1'>Contact</button>
            </div>

            <div>
                <p className="modern">
                    <b>A modern house with elegant design, land area 150m sq,<br />
                        length 100m.</b> Has 6 bedrooms, 3 bathrooms, and a<br />
                    luxurious swimming pool.
                </p>
            </div>


            <div>
                <h2 className="head1">
                    Hilight Rooms
                </h2>
            </div>

            <div className='pic2'>
                <img src={second} alt="Home1" />
                <p className='info1'>The living room has open concept with
                    a luxury theme, measuring 8m X 6m. Designed to
                    create a spacious, elegant and comfortable<br />
                    atmosphere.</p>

                <p className='info2'>Minimalist open space and elegant design.</p>

                <img src={third} alt="Home2" style={{ height: "30vh", width: "20vw", display: "flex" }} />

                                 {/* Gallery*/}
            </div>

            <div>
                <h2 className="head2">
                    Gallery
                </h2>
            </div>

            {/* 3 images side by side in rows*/}

            <div className="image-container">  
                <div className="image-box">
                    <img src={fourth} alt="First Room" />
                    <h3>Spacious Living Room</h3>
                </div>

                <div className="image-box">
                    <img src={fifth} alt="Second Room" />
                    <h3>Elegant Bedroom</h3>
                </div>

                <div className="image-box">
                    <img src={sixth} alt="Third Room" />
                    <h3>Modern Kitchen</h3>
                </div>
            </div>

            
     
      <FAQ/>
      <Footer/>
      
      


        </div>
    )


};

export default Home;