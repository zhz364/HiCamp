import React from 'react'

class SpotsMap extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        let center = {
            lat: 0,
            lng: 0
        }

    
        const mapOptions = {
            center,
            mapTypeId: 'terrain',
            zoom:13
        };
        // this.map = new google.maps.Map(map, mapOptions);
        // this.map = new google.maps.Map(this.mapNode);
     
        // let point = new google.maps.Circle({
        //     center,
        //     map: this.map,
        //     radius: 1000,
        //     strokeColor: "#40d9ac",
        //     strokeOpacity: 0.8,
        //     strokeWeight: 2,
        //     fillColor: "#40d9ac",
        //     fillOpacity: 0.35,
        
        // })
        // let marker = new google.maps.Marker({
        //     position: center,
        //     map: this.map,
        //     // title: this.props.spot.name,
        //     animation: google.maps.Animation.DROP,
        // })
        // const imgStyle = {
        //     width:"200px",
        //     height: "100px"
        // }
        // const spotInfor = `<div > 
        //                         <div>
        //                            <img style={${imgStyle}} src='${this.props.spot.photoUrl[0].photo}'></img>    
        //                            <h4>${this.props.spot.name}</h4>
        //                         </div> 
        //                   </div>`

        // const infowindow = new google.maps.InfoWindow({
        //     content: spotInfor,
        // });

        // marker.addListener("click", () => {
        //     infowindow.open(map, marker);
        // });
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