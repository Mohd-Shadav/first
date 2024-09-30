import React, { useState } from 'react'

function TextArea(props) {

    const[text,setText] = useState("");
    const[decode,setDecode] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [isDecodeButtonDisabled, setIsDecodeButtonDisabled] = useState(false);

    const handleText = (e)=>{
        setText(e.target.value);
        // console.log(text);
    }

    const handleUpper = (e)=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('converted to Uppercase',"success");
    }

    const handleLower=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('converted to Lowercase',"success");
    }
    const handleClear = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert('clear all the text',"danger");
        setIsButtonDisabled(false);    
    }

    const handleSpeak = ()=>{
        let speech= new SpeechSynthesisUtterance();
        speech.text = text;
        window.speechSynthesis.speak(speech);
        props.showAlert('Listening....',"success");
    

    }

    const handleCapitalize = ()=>{
        let newText = text.split(' ').map(word=>
              word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ).join(' ');
        setText(newText);
        props.showAlert('Capitalized all the text',"warning");
    
    }

    const handleSentence = ()=>{
          let newText = text.split(' ').map((word,idx)=>
          {
            if(idx===0)
            {
               word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }

           if(word.includes('.'))
            {
               let t = word.indexOf('.');
               word = word.slice(0,t+1) + word.charAt(t+1).toUpperCase() + word.slice(t+2);
            }
            props.showAlert('All text has been Sentenced ',"primary");
            return word;
     
    })

    setText(newText.join(' '));
    }

    let arrayEncodes= ['ghh57687','guiuio65','67856hbg','hb67n','uj767gb','juku8570','$#@$bhuhj','jhujuo8#$#','%^$65bhjh*/--','>>jyuhjbv']


    const handleEncode = ()=>{
          setDecode(text);
        let newText = text.split('').map((item)=>
        {
           item = item + arrayEncodes[Math.floor(Math.random()*9)]
            return item;
        }
        )
        setText(newText.join(' '));

        if(text!=='')
        {
            setIsButtonDisabled(true);
        }

        props.showAlert('Text has been Encoded.',"danger");
  
    }
    const handleDecode = ()=>{
       setText(decode);
       props.showAlert('Text has been Decoded.',"warning");
    }


  return (
    <>
    <div className='container'>
        
        <div className="mb-3">
        <h1 className='my-5'>{props.heading}</h1>
        <textarea className="form-control my-2" style={{resize:'none'}} value={text}  onChange={handleText} id="exampleFormControlTextarea1" rows="8" placeholder='Enter text here...'></textarea>
        <button className="btn btn-primary my-3 " onClick={handleUpper}>Convert to UPPERCASE</button>
        <button className="btn btn-success my-3 mx-1" onClick={handleLower}>Convert to lowercase</button>
        <button className="btn btn-danger my-3 mx-1" onClick={handleClear}>Clear text</button>
        <button className="btn btn-secondary my-3 mx-1" onClick={handleSpeak}>Listen Text</button>
        <button className="btn btn-info my-3 mx-1" onClick={handleCapitalize}>Capitalize Text</button>
        <button className="btn btn-warning my-3 mx-1" onClick={handleSentence}>Sentence Text</button>
        <button className="btn btn-dark my-3 mx-1" onClick={handleEncode}
        disabled = {isButtonDisabled}>Encoded Text</button>
        <button className="btn btn-outline-danger rounded-pill my-3 mx-1" onClick={handleDecode}
        disabled = {isDecodeButtonDisabled}>Decoded Text</button>
        </div>
        </div>

        <div className="container">
            <h2>Your summary</h2>
            <p>{text===''?0:text.split(' ').length} words and {text.length} character</p>
            <p>it can read by {.008 * text.split(' ').length} minutes</p>
             
             <h2>Preview</h2>
             <p style={{height:'55px'}}>{text.length>0?text:'Enter something in the textarea to preview it here...'}</p>
        </div>
    </>
  )
}

export default TextArea