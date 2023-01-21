import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import '../styles/RocketDetail.scss';

export default function RocketDetail() {
    const [rocketData, setRocketData] = useState({});
    const { id } = useParams();
    useEffect(() => {
        window.scrollTo(0, 0);
        fetch(`https://api.spacexdata.com/v3/rockets/${id}`)
            .then(res => res.json())
            .then(data => setRocketData(data))
    }, [id])
    return (
        <section>
            <div className="singleRocket h-screen text-white uppercase">
                <Navbar />
                <div className="featured text-center">
                    <h1 className="featured-title">{rocketData.rocket_name}</h1>
                    <h3 className="featured-tagline text-xl">To The Moon</h3>
                </div>
            </div>

            <div className="description h-screen relative">
                <div className="info uppercase text-white pt-5">
                    <div className="text-center mb-10">
                        <p className="text-2xl mb-1">{rocketData.active ? 'Active' : 'Not Active'}</p>
                        <p>Status</p>
                    </div>
                    <div className="text-center mb-10">
                        <p className="text-2xl mb-1">{rocketData.cost_per_launch}</p>
                        <p>Cost Per Launch</p>
                    </div>
                    <div className="text-center mb-10">
                        <p className="text-2xl mb-1">{rocketData.country}</p>
                        <p>Country</p>
                    </div>
                </div>
                <p className="description_info text-white absolute">{rocketData.description}</p>
            </div>
            <div className="overview-wrapper h-screen uppercase text-white relative">
                <div className="overview absolute">
                    <div className="engine-data">
                        <p>Engine</p>
                        <p>{rocketData.engines?.type}</p>
                    </div>
                    <div className="engine-data">
                        <p>mass (kg)</p>
                        <p>{rocketData.mass?.kg}</p>
                    </div>
                    <div className="engine-data">
                        <p>Height (m)</p>
                        <p>{rocketData.height?.meters}</p>
                    </div>
                    <div className="engine-data">
                        <p>rocket name</p>
                        <p>{rocketData.rocket_name}</p>
                    </div>
                    <div className="engine-data">
                        <p>first flight</p>
                        <p>{rocketData.first_flight}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}