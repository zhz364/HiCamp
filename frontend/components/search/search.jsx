import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component{
  constructor(props){
    super(props)
    this.allCampsites = {}
    // this.result = "";
    // this.address = [];
    this.state = {
      campsite:"/spots",
      type:"",
      date:null,
      dropdown: false,
      result:"",
      address:[],
      text: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e){
    e.preventDefault()
    const value = e.currentTarget.value
    let results = []
    let currAddress = []
    const stateNames = Object.keys(this.allCampsites)
    if(value !== ""){
      stateNames.map(name =>{
        if(name.toLowerCase().startsWith(value.toLowerCase())){
          results.push(this.allCampsites[name]);
          currAddress.push(name)
        }
      })
      this.setState(()=>({
        address: currAddress,
        result: results[0],
        text: value,
        dropdown:true
      }))
    }else{
      this.setState(()=>({
        dropdown:false,
        text:""
    }))}
    
  }

  handleClick(value){
    this.setState(()=>({
      text: value,
      address: []
    }))
  }

  render(){
    if(Object.values(this.props.campsites) != null){
      Object.values(this.props.campsites).map(campsite=>{
        this.allCampsites[campsite.address] = campsite.id
      })
    }
      return(
      <div className="search-div">
        <form >
          <div className="search-form">
            <div className="search-input">
              <input type="text" value={this.state.text} onChange={this.handleChange} placeholder="Try California, New York, Texas..."></input>
                {this.state.dropdown ? <ul>
                  {this.state.address.map((item,idx)=>
                    <li key={idx} onClick={()=> this.handleClick(item)}>{item}</li>
                    )}
                </ul> : null}
            </div>
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