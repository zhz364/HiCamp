import React from 'react'

class SpotsMap extends React.Component{
    constructor(props){
        super(props)
        this.makePin = this.makePin.bind(this)
        this.centerSpot = this.centerSpot.bind(this)
        this.spotInfor = this.spotInfor.bind(this)
        this.createInforWindow = this.createInforWindow.bind(this)
    }   

    makePin(pos){
        const marker = new google.maps.Marker({
            position: pos,
            map: this.map,
            animation: google.maps.Animation.DROP,
        })
        return marker
    }

    centerSpot(){
        this.props.spots.map(spot=>{
            this.createInforWindow(this.spotInfor(spot.photoUrl[0].photo,spot.name),this.makePin({lat: spot.latitude, lng: spot.longitude}))
        })
    }

    spotInfor(photo,name){
        const spotInfor = `<div > 
                                <div>
                                   <img class="infor-img" src='${photo}'></img>    
                                   <h4>${name}</h4>
                                </div> 
                          </div>`
        return spotInfor
    }
    
    createInforWindow(spotInfor,marker){
        const infowindow = new google.maps.InfoWindow({
            content: spotInfor,
        });
        marker.addListener("click", () => {
            infowindow.open(map, marker);
        });
    }

    componentDidMount(){
        let center = {
            lat: 40.3428,
            lng: -95.6836
        }

        const mapOptions = {
            center,
            mapTypeId: 'terrain',
            zoom:3
        };
        this.map = new google.maps.Map(this.mapNode, mapOptions);

        
        this.centerSpot()
    
    }

    render(){ 
        return(
            <div id="map">
                <div id="spots-map-box" ref={map => this.mapNode = map}></div>
            </div>
        )
    }
}

export default SpotsMap;