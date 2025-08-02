import React from 'react';

const locations = {
    "North America": [
        { name: "New York City", type: "Campus" },
        { name: "Los Angeles", type: "Campus" },
        { name: "Harvard University", type: "Location" },
    ],
    "Europe": [
        { name: "Florence, Italy", type: "Campus" },
        { name: "Paris, France", type: "Location" },
    ],
    "Asia-Pacific": [
        { name: "Beijing, China", type: "Location" },
    ],
};

const LocationItem = ({ name, type }) => (
    <div className="flex justify-between items-center border-b border-gray-300 pb-4 ">
        <p className="text-base font-normal">{name}</p>
        <p className="text-sm font-light text-gray-400 pl-8">{type}</p>
    </div>
);

const LocationRegion = ({ region, places }) => (
    <div className="flex flex-col gap-y-5  max-w-xs">
        <h2 className="text-xl font-bold tracking-wide uppercase text-purple-700 mb-4">{region}</h2>
        {places.map((place) => (
            <LocationItem
                key={place.name}
                name={place.name}
                type={place.type}
            />
        ))}
    </div>
);

const Location = () => {
    return (
        <div className="LocationFont bg-location text-black">
            <div className="flex flex-col justify-center items-center gap-2 max-w-xs">
                <div className="inline-block border-l-4 border-purple-700 pl-2">
                    <h1 className="text-4xl font-normal leading-tight mb-5 text-start">
                        CAMPUSES &<br /> LOCATIONS
                    </h1>
                </div>
            </div>
            <div className="max-w-7xl flex flex-wrap justify-start gap-20 mt-10 ml-10 ">
                {Object.entries(locations).map(([region, places]) => (
                    <LocationRegion
                        key={region}
                        region={region}
                        places={places}
                    />
                ))}
            </div>
        </div>
    );
};

export default Location;
