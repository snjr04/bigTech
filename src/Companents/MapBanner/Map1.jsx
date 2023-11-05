import React from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css'


const Map1 = () => {

    const position = [42.8711325,74.6102637];

    const markerPosition = [42.8792966, 74.5828094]
    const markerPosition1 = [42.857753, 74.587537]
    const markerPosition2 = [42.8711325,74.6102637]

    const talasMarker = [42.5177076, 72.2744406, 13.12]


    return (
        <section className="map1">
            <div className='container'>
                <div className="map1__list">
                    <MapContainer className="map1__map" center={position} zoom={11.5} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={markerPosition}>
                            <Popup>
                                A pretty CSS3 popup. <br/> Easily customizable.
                            </Popup>
                        </Marker>
                        <Marker position={talasMarker}>
                            <Popup>
                                Talas
                            </Popup>
                        </Marker>
                        <Marker position={markerPosition1}>
                            <Popup>
                                Bishkek
                            </Popup>
                        </Marker>
                        <Marker position={markerPosition2}>
                            <Popup>
                                Bishkek
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </section>
    );
};

export default Map1;