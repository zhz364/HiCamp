import React from 'react';
import { Link } from 'react-router-dom';
import CampsiteIndexContainer from "../campsites/campsite_index_container";
import SearchContainer from "../search/search_container";
import Footer from "../footer"

class MainBody extends React.Component{
  constructor(props){
    super(props)
  }


  render(){
    return (
      // <body>
          <div className="main-body">
            <div className="search-bar">
              <div className="content-above">
                  <h1>Find yourself outside.</h1>
                  <div className="intro"> 
                    <p>Discover and book tent camping, RV parks, cabins,</p>
                    <p>treehouses, and glamping—everywhere from national</p>
                    <p>parks to blueberry farms.</p>
                  </div>
              </div>
              <SearchContainer campsites={this.props.campsites}/>
            </div>
            
            <div className="campsites-index-div">
              <CampsiteIndexContainer />
            </div>
            {/* <Footer/> */}
          </div>
      // </body>
    )
  }
}

export default MainBody;