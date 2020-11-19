import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component{
    constructor(props){
      super(props)
      this.allCampsites = {}
      this.state = {
        campsite:"/spots",
        type:"",
        date:null,
        dropdown:false
      }
    }


    render(){
      if(Object.values(this.props.campsites) != null){
        Object.values(this.props.campsites).map(campsite=>{
          this.allCampsites[campsite.address] = campsite.id
        })
      }
      console.log(this.allCampsites)
      // debugger
        return(
        <div className="search-div">
          <form >
            <div className="search-form">
              <span className="search-input">
                <input type="text" placeholder="Try California, New York, Texas...">
                </input>
              </span>
              <div className="date-div">
                <input type="date" placeholder="Enter dates"></input>
              </div>
              <div className="type-div"> 
                <select>
                  <option value="ALL LISTINGS">ALL LISTINGS</option>
                  <option value="camping">Camping</option>
                  <option value="glamping">Glamping</option>
                  <option value="RV_sites">RV sites</option>
                </select>
              </div>
              <Link to="/spots" className="link"><button>Search</button></Link>
            </div>
          </form>
        </div>
      )
    }
}
export default Search;