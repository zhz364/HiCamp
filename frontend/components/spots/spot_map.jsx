import React from 'react'

class SpotMap extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        const center = {
            lat: 44.2643,
            lng: -109.7870
        }

        // const map = this.refs.map;
        const mapOptions = {
            center,
            mapTypeId: 'terrain',
            zoom:13
        };
        // this.map = new google.maps.Map(map, mapOptions);
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        debugger
        let point = new google.maps.Circle({
            center,
            map: this.map,
            radius: 1000,
        
        })
    }

    render(){
        // debugger
        return(
            <div id="map">
                <div id="map-box" ref={map => this.mapNode = map}></div>
            </div>
        )
    }
}

export default SpotMap;