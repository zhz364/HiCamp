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
      id:null,
      address:[],
      text: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    e.preventDefault()
    const value = e.currentTarget.value
    let currAddress = []
    const stateNames = Object.keys(this.allCampsites)
    if(value !== ""){
      stateNames.forEach(name =>{
        if(name.toLowerCase().startsWith(value.toLowerCase())){
          currAddress.push(name)
        }
      })
      stateNames.forEach(name =>{
        if(name.toLowerCase() === value.toLowerCase()){
          this.setState(()=>({
            id: this.allCampsites[name]
          }))
        }
      })
      this.setState(()=>({
        address: currAddress,
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
    Object.keys(this.allCampsites).forEach(name =>{
      if(name.toLowerCase() === value.toLowerCase()){
        this.setState(()=>({
          id: this.allCampsites[name]
        }))
      }
    })
    this.setState(()=>({
      text: value,
      address: []
    }))
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.state.id !== null){
      return <Link to={`/campsites/${this.state.id}`}></Link>
    }
    
  }

  render(){
    if(Object.values(this.props.campsites) != null){
      Object.values(this.props.campsites).forEach(campsite=>{
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
            <Link className="link" to={`/campsites/${this.state.id}`}><button>Search</button></Link>
          </div>
        </form>
      </div>
    )
  }
}
export default Search;