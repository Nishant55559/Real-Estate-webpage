
import Header from './about_header/about_head';
import About_cm from './about_cm/about_cm';
import DreamHome from './dream_house/dream';
import VisionMission from './vision/vision';
import Rating from './rating/rating';
import Footer from '../footer/footer';
import WhyChooseUs from './whyChooseUs/whyChooseUs';
import TeamSection from './team/team';
import AwardsSection from './award/award';


function AboutUs(){
  return (
    <div className="app-container">
      <Header />
      <About_cm />
      <Rating/>
      <DreamHome />
      <VisionMission />
      <WhyChooseUs/>
      <TeamSection/>
      <AwardsSection/>
      <Footer/>
    </div>
  );
}

export default AboutUs;
