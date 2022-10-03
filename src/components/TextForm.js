import React ,{useState} from 'react'


export default function TextForm(props) {
 
  const handleUpClick=()=>{
    
    let newtext=text.toUpperCase();
    setText(newtext);
  }
  const handleDownClick=()=>{
    
    let newtext=text.toLowerCase();
    setText(newtext);
  }

  const handleClear=()=>{
    
    let newtext='';
    setText(newtext);
  }

  const handleOnChange=(event)=>{

    setText(event.target.value)
  }
  const handleCopy=()=>{
    console.log('i am copy');

    var text=document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpace=()=>{
     let newtext=text.split(/[ ]+/);
     setText(newtext.join(" "));
  }

  const [text, setText] = useState('');

  return (
    <>
 <div className='container'> 
    <h2>{props.heading}</h2> 
        
     <div className="mb-3">
      <textarea className="form-control" placeholder='Enter text here' value={text} onChange={handleOnChange} id="mybox" rows="7" ></textarea>
     </div>
       <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to UpperCase</button>
       <button className='btn btn-primary mx-1' onClick={handleDownClick}>Convert to LowerCase</button>
       <button className='btn btn-danger mx-1' onClick={handleClear}>Clear</button>
       <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
       <button className='btn btn-primary mx-1' onClick={handleExtraSpace}>Extra Space</button>
     </div>
<div className='container my-2'>
    <h2>Your text summary</h2>
    <p>{text.split(' ').length} words AND {text.length} characters</p>
    <h2>Preview</h2><script>console.log(text)</script>
    <p>{text}</p>
</div>

</>
  )
}
