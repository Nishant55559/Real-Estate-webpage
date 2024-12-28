import Menu from "../menu bar/menu";
import Home_body from "./home_body/home_body";
import Footer from "../footer/footer";
import WorkFlow from "./work_flow/work_flow";
import People from "./People/people";
import Rating from "../about/rating/rating";
import HappyClient from "./happy_client/happyc";
import Pagination from "../property/Pagination/Pagination";
import Blog_body from "../blogs/blog_body/blog_body";
import Agents_body from "../agents/agent-body/agents_body";
import { agents } from "../agents/agent-body/agents_body";
import { blogs } from "../blogs/blog_body/blog_body";


function Home() {

    const slicedAgents = agents.slice(0, 4);
    const slicedBlogs = blogs.slice(0, 3);


    return (
        <div>
            <Menu />

            <Home_body />
            
            <div style={{ height: "120px" }}></div>

            <WorkFlow />

            <div style={{ height: "120px" }}> </div>

            <People />

            <Rating />

            <HappyClient />

            <Pagination totalPages={2} />

            <div style={{ height: "120px" }}></div>

            <div><h1 style={{textAlign: "center" }}>Ours Agents</h1></div>

            <Agents_body agentsData={slicedAgents} />

            <div style={{ height: "120px" }}></div>

            <div><h1 style={{textAlign: "center"}}>Recent Blogs</h1></div>

            <Blog_body blogsData={slicedBlogs} />

            <Footer blogsData={slicedBlogs} />
        </div>
    )
};

export default Home;