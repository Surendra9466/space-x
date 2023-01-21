import { useState, useEffect } from 'react';
import RocketModal from './RocketModal';
import { Link } from "react-router-dom";
import Search from './Search';

import '../styles/Rocket.scss';
function Rocket() {
    const [rocketData, setRockteData] = useState([]);
    const [filteredRcoketData, setFilteredRockteData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/rockets')
            .then(res => res.json())
            .then(data => {
                setRockteData(data)
                setFilteredRockteData(data);

            })
    }, []);

    const handleFilteredData = () => {
        const filteredData = rocketData.filter((rocket) => {
            return rocket.rocket_name.toLowerCase().includes(searchQuery.toLowerCase());
        });
        setFilteredRockteData(filteredData);
        setSearchQuery('');
    }

    return (
        <section className="rocket-wrapper">
            <div className='search-bar'>
                <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>
                <div className='search-btn cursor-pointer text-white' onClick={handleFilteredData}>Search</div>
            </div>
            <div className='rocket-container flex flex-wrap justify-around gap-6 p-8'>
                {filteredRcoketData.length === 0 ? <h2 className="text-white uppercase">Not found. Please search valid data !!!</h2> : (
                    filteredRcoketData.map((singleRocket) => {
                        return (
                            <div className='rocket' key={singleRocket.id}>
                                <div className='single-rocket p-4 bg-white rounded-2xl uppercase'>
                                    <div className='rocket-image cursor-pointer'>
                                        <Link to={`rocket/${singleRocket.rocket_id}`}>
                                            <img className='h-full w-full rounded-xl' src={singleRocket.flickr_images[0]} alt="rocket" />
                                        </Link>
                                    </div>
                                    <h2 className='text-base mt-1 px-2 font-bold'>Rocket: {singleRocket.rocket_name}</h2>
                                    <p className='wikipedia text-base mt-1 px-2'><a href={singleRocket.wikipedia}>Wikipedia</a></p>
                                    <RocketModal rocketId={singleRocket.rocket_id} />
                                </div>
                            </div>
                        )
                    })
                )}
            </div>
        </section>
    )
}

export default Rocket;