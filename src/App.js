import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import { useState } from 'react';
import Alert from './components/Alert';
// import {BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import Linking from './components/Linking';
function App() {

  const [myStyle,setMyStyle] = useState({
    color:'black',
    backgroundColor:'white'
  })

   const[alert,setAlert] = useState(null);

   const showAlert = (message,type)=>
   {
    setAlert({
      msg:message,
      typ:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
   }


  return (
    <>
     
     {/* bootstrap addition */}
     {/* <Router> */}

     <Navbar title={"titleUtils"} home = {"Ghar"} styling={myStyle}  stylin ={setMyStyle}/>

  
        <Alert alert={alert}/>
         <TextArea heading={"Converter"} showAlert={showAlert}/>
    
    
   
   
  
  
   
     


     {/* </Router> */}

 
      {/* <div className="app">
          <div className="app2">
            <div className="app3">
              <div className="app4">
                <div className="app5">

                </div>
              </div>
            </div>
          </div>
      </div> */}
    </>

  );
   
  
}

export default App;
