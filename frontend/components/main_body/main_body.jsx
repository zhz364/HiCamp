import React from 'react';

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
                  <h2>Find yourself outside.</h2>
                  <div className="intro"> 
                    <p>Discover and book tent camping, RV parks, cabins, treehouses, and glamping—everywhere from national parks to blueberry farms.</p>
                  </div>
              </div>
              <div className="search-div">
                <form className="search-form">
                  <input className="search-input" type="text" placeholder="Try Yosemite, Napa, Moab...">
                  </input>
                  <input type="date"></input>
                  <select>
                    <option value="ALL LISTINGS">ALL LISTINGS</option>
                    <option value="camping">Camping</option>
                    <option value="glamping">Glamping</option>
                    <option value="RV_sites">RV sites</option>
                  </select>
                  <button>Search</button>
                </form>
              </div>
            </div>
          </div>
      </body>
    )
  }
}

export default MainBody;