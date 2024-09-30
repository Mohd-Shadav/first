import React, { useState} from 'react'
import PropTypes from 'prop-types'
import Darkmode from './Darkmode';
// import { Link } from 'react-router-dom';

function Navbar(props) {
  const [navBack,setNavBack] = useState('dark');
  const[themeNavbar,setThemeNavbar] = useState('');
  

  const handleNavbar = ()=>{
    if(props.styling.color === 'white')
      {
          setNavBack('dark');
        
      }
      else{
        setNavBack('primary');
      }
  }
   const handleTheme1 = ()=>{
     props.stylin({
         color:'#F5F5DC',
         backgroundColor:'#c7923bd3'
     })
      // setNavBack('warning');
      setThemeNavbar('#c7923bd8');
       document.body.style.color = '#F5F5DC';
       document.body.style.backgroundColor = '#c7923bd3'
   }
   const handleTheme2 = ()=>{
    props.stylin({
        color:'#252525',
        backgroundColor:'#be383c'
    })
    // setNavBack('danger');
    setThemeNavbar('#be383cd8');
    
      document.body.style.color = '#252525';
      document.body.style.backgroundColor = '#be383c'
  }

  const handleTheme3 = ()=>{
    props.stylin({
        color:'#D3D3D3',
        backgroundColor:'#d84099'
    })
    // setNavBack('info');
    setThemeNavbar('#d84099d8')
      document.body.style.color = '#D3D3D3';
      document.body.style.backgroundColor = '#d84099'
  }



  return (
    <>
   
        <nav className={`navbar navbar-expand-lg bg-${navBack} text-dark`} data-bs-theme='dark' style={{backgroundColor:`${themeNavbar}`}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Link">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>

      <div className="themeBox mx-5">
        <input type="radio" name="theme" id="" onClick={handleTheme1}  className='mx-2 custom-radio bg-1'/>
        <input type="radio" name="theme" id=""  onClick={handleTheme2}  className='mx-2 custom-radio bg-2'/>
        <input type="radio" name="theme" id="" onClick={handleTheme3}  className='mx-2 custom-radio bg-3' />
      </div>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
       
      </form>
      <Darkmode styling = {props.stylin} handleNavbar={handleNavbar} />
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar

Navbar.propTypes = {
    title : PropTypes.string,
    home : PropTypes.string

}
Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    home : PropTypes.string.isRequired

}


// Navbar.defaultProps = {
//     title : "pehle se hun",
//     home : "main v pehle se hun"

// }


