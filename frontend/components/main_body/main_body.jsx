import React from 'react';
import SpotIndexContainer from "../spots/spot_index_container"

class MainBody extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <body>
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
              <div className="search-div">
                <form >
                  <div className="search-form">
                    <span className="search-input">
                      <input type="text" placeholder="Try Yosemite, Napa, Moab...">
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
                    <button>Search</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="spotindex">
              <SpotIndexContainer />
            </div>
          </div>
      </body>
    )
  }
}

export default MainBody;