import React from 'react';
import {useSelector} from "react-redux";
import {GOOGLE_MAP_API as location} from "../../config";

const Map = () => {
    const data = useSelector(state=>state.weather)
    return (
            <div style={{position:"relative",}}>
                <iframe style={{width: '100%', height: '80vh', position: 'absolute', top: '0', right: '0'}}
                        src={location + data?.coord?.lat + ',' + data?.coord?.lon}
                        frameBorder="0"></iframe>
            </div>

    );
};

export default Map;