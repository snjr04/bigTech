import React, {useState} from 'react';
import GoogleMapReact from 'google-map-react';

const Map1 = () => {


    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };
    const [activeMarker,setActiveMarker] = useState(null)

    const handleActiveMarker = (marker) =>{
        if (marker === activeMarker){
            return;
        }
        setActiveMarker(marker);
    }

    return (
        <div>
            <GoogleMapReact
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >

            </GoogleMapReact>


        </div>
    );
};

export default Map1;