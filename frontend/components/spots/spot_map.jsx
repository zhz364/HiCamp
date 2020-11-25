import React from 'react'

class SpotMap extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        const center = {
            lat: this.props.spot.latitude,
            lng: this.props.spot.longitude
        }
        
        const mapOptions = {
            center,
            mapTypeId: 'terrain',
            zoom:13
        };
        this.map = new google.maps.Map(this.mapNode, mapOptions);
     
        let point = new google.maps.Circle({
            center,
            map: this.map,
            radius: 1000,
            strokeColor: "#40d9ac",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#40d9ac",
            fillOpacity: 0.35,
        
        })
        let marker = new google.maps.Marker({
            position: center,
            map: this.map,
            title: this.props.spot.name,
            animation: google.maps.Animation.DROP,
        })
        
        const spotInfor = `<div > 
                                <div>
                                   <img class="infor-img" src='${this.props.spot.photoUrl[0].photo}'></img>    
                                   <h4>${this.props.spot.name}</h4>
                                </div> 
                          </div>`

        const infowindow = new google.maps.InfoWindow({
            content: spotInfor,
        });

        marker.addListener("click", () => {
            infowindow.open(map, marker);
        });
    }

    render(){ 
        return(
            <div id="map">
                <div id="map-box" ref={map => this.mapNode = map}></div>
            </div>
        )
    }
}

export default SpotMap;