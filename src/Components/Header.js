import React, { useEffect, useRef } from 'react'

const Header = (props) => {
  const resultRef=useRef();
  const expressionRef=useRef();
  useEffect((props)=>{
    resultRef.current.scrollIntoView({behavior:"smooth"})
  },[props.history]);
  useEffect(()=>{
    expressionRef.current.scrollLeft=expressionRef.current.scrollWidth;

  },[props.expression]);
  return (
    <div className='header custom-scroll'>
    <div className="history">
    {props.history&& props.history?.map((item)=>(
    <p key={item+""+Math.random()*30}>{item}</p>
    ))
    }
    
    </div>
    <br></br>
    <div className="expression custom-scroll">
      <p ref={expressionRef}>{props.expression}</p>
    </div>
    <div ref={resultRef}className="result">
    <p>{props.result}</p>
    </div>
    <h3 onClick={props.clear}>CLEAR</h3>
    </div>
  )
}

export default Header;
