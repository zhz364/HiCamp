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
        let totalLat = 40.3428
        let totalLng = -95.6836
        if (this.props.spots.length > 0){
            totalLat = 0
            totalLng = 0
            this.props.spots.forEach(spot => {
                totalLat += spot.latitude
                totalLng += spot.longitude
            });
            totalLat = totalLat / this.props.spots.length
            totalLng = totalLng / this.props.spots.length
        }

        let center = {
            lat: totalLat,
            lng: totalLng
        }
        let mapOptions={}
        if(totalLat === 40.370922533333335 && totalLng === -105.6369416){
            mapOptions = {
                center,
                mapTypeId: 'terrain',
                zoom:10
            };
        }else{
            mapOptions = {
                center,
                mapTypeId: 'terrain',
                zoom:4
            };
        }
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