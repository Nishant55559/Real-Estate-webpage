
import Header from './about_header/about_head';
import About_cm from './about_cm/about_cm';
import DreamHome from './dream_house/dream';
import VisionMission from './vision/vision';


function AboutUs(){
  return (
    <div className="app-container">
      <Header />
      <About_cm />
      <DreamHome />
      <VisionMission />
    </div>
  );
}

export default AboutUs;
