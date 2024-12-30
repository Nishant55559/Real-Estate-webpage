import './home_body.css';
import first from './first.jpg'
import second from './second.jpg'
import fourth from './fourth.jpeg'
import fifth from './fifth.jpeg'
import sixth from './sixth.jpeg'
import Service from '../service/service';
import Latest_Property from '../../property/latest_pp/latest_prop';
import { properties } from '../../property/latest_pp/latest_prop';


function Home_body() {

    const slicedproperty = properties.slice(0, 3);

    return (
        <div >
            

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

            

            <Service/>
            <div style={{ height: "120px" }}></div>
            <div><h1 style={{textAlign: "center"}}>Exclusive Offer For You</h1></div>
            <Latest_Property propertiesData={slicedproperty}/>
        <div>
      <h2 className="head1">Hilight Rooms</h2>
      <div className="pic2">
        <img src={second} alt="Living Room" className="image-large" />
        <p className="info1">
          The living room has an open concept with a luxury theme, measuring 8m x 6m. Designed to
          create a spacious, elegant, and comfortable<br />
          atmosphere.
        </p>
        
      </div>
      </div>

                                
                                 {/* Gallery*/}
            

            <div>
                <h2 className="head2">
                    Gallery
                </h2>
            </div>

            {/* 3 images side by side in rows*/}

            <div className="imgcon">  
                <div className="imgbox">
                    <img src={fourth} alt="First Room" />
                    <h3>Spacious Living Room</h3>
                </div>

                <div className="imgbox">
                    <img src={fifth} alt="Second Room" />
                    <h3>Elegant Bedroom</h3>
                </div>

                <div className="imgbox">
                    <img src={sixth} alt="Third Room" />
                    <h3>Modern Kitchen</h3>
                </div>
            </div>
      
        </div>
    )


};

export default Home_body;