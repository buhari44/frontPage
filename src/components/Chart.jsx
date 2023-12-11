import React from 'react'
import "./Chart.css"

const Chat = () => {
   

  return (
    <div className='date_chart'>
<div className="texts">
<h3>iDAN NLA</h3>


</div>
<div>

  <h5>Check your monthly budget using the date below</h5>
<div className="from_To">
<div className="from">
    <h4>FROM</h4>
<input type="date"  min="2012-01-01" max="2023-12-13"/> 
</div>
                <div className="to"> 
                <h4>TO</h4>
                <input type="date"  min="2012-01-01" max="2023-12-13"/>    
                        
</div>
</div>
</div>

<div>
    <h1>CHAT</h1>
</div>
</div>
   
  )
}

export default Chat