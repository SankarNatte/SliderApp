import React, { useState } from 'react';
import './index.css';
function App(){
  const msg=["Message-one","Message-Two","Message-Three"];
 const[pg,setpg]=useState(1)
  function clickprevious(){
setpg(pg-1);
  }
  function clicknext(){
setpg(pg+1);
  }
  return(
    <div className='page'>
      <div className='number'>
<div id="p" className={pg===1?" active":" "}>1</div>
<div id="p" className={pg===2?" active":" "}>2</div>
<div id="p" className={pg===3?" active":" "}>3</div>
      </div>
      <div className='message'>
<div>{msg[pg-1]}</div>

      </div>
  
      <div className='buttons'>
<button onClick={clickprevious}>Previous</button>
<button onClick={clicknext}>Next</button>
      </div>
    </div>
    
  );
}
export default App;