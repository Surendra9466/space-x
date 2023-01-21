import Navbar from "./Navbar";

function Header(){
    return(
        <section className="header banner h-screen">
            <Navbar />
            <div className="uppercase banner-content text-white">
                <h4>Recent Launch</h4>
                <h2>GPS III SPACE VEHICLE 06 MISSION</h2>
                <a className="watch_video" href="https://www.spacex.com/launches/mission/?missionId=GPS-iii-6-pl" target="__blank">Watch Here</a>
            </div>
        </section>
    )
}

export default Header;