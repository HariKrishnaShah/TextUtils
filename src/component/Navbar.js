import React from 'react'
import PropTypes from 'prop-types'
import './Navbar.css'
import {Link} from 'react-router-dom';

export default function Navbar(props){
  //state variable inside a if condition means the condition will be revaluated whenever the state changed.
  // if(props.colorMode === "white")
  // {
  //   console.log("Yes it is white");
  // }
  // else if(props.colorMode === "purple"){
  //   console.log("It is purple");
  // }
  // else{
  //   console.log("no it is not white");
  // }
  let upperFirstLetter = (word)=>
  {
    return word.replace(word[0], word[0].toUpperCase());
  }
  let showControl = ()=>
  {
    if(props.alert != null)
  {
    return( <div className={`alert alert-${props.alert.type}`} role="alert" style={props.mode}>{upperFirstLetter(props.alert.type) + " : " + props.alert.msg}</div>);
  }
  //This else statement is not neccessary because when props.alert is equal to null, the function returns nothing automatically.
  // else
  // {
  //   return "";
  // }
  }
  


    return(
      <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid" style = {props.mode}>
      <Link to="/" className="navbar-brand"  style = {props.mode}>{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent"  style = {props.mode}>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0"  style = {props.mode}>
          <li className="nav-item">
            <Link to="/about" className="nav-link active" aria-current="page" style = {props.mode}>{props.about}</Link>
          </li>
        </ul>
      </div>
      <button id = "purple" className = "colorPalate" onClick = {props.changeColor} value = "purple" ></button>
      <button id = "orange" className = "colorPalate" onClick = {props.changeColor} value = "orange"></button>
      <button id = "yellow" className = "colorPalate" onClick = {props.changeColor} value = "yellow"></button>
      <button id = "white" className = "colorPalate" onClick = {props.changeColor} value = "white"></button>
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.clickChange} checked = {props.darkMode?true:false} readOnly = {true}/>
  <label htmlFor = "flexSwitchCheckDefault">Enable DarkMode</label>
</div>
    </div>
    </nav>
    <div id="alertbox">{showControl()}</div>
    {/* {props.alert && <div className={`alert alert-${props.alert.type}`} role="alert" style={props.mode}>{upperFirstLetter(props.alert.type) + " : " + props.alert.msg}</div>} */}
    </>
    );
}

// Navbar.propTypes = {title: PropTypes.string.isRequired, home:PropTypes.number};
Navbar.propTypes = {title: PropTypes.string.isRequired, home:PropTypes.string};
Navbar.defaultProps = {title: "Textutils", home: "About Us"}