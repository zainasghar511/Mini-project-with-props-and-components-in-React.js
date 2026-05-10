import React from 'react'

function ui(props) {
  return (
    <div>
 <div className="cardui">
 <div className="header">
     <h4>available</h4>
     <h3>{props.hr}$/hr</h3>
 </div>
<div className="center">
    <img src={props.profile} />
    <h2>{props.user}</h2>
    <p>{props.job}</p>
    <h4>{props.work}</h4>
</div>
<div className="tag">
     <h3>{props.tag1} </h3>
     <h3>{props.tag2} </h3>
     <h3>{props.tag3} </h3> 
    <h3 className='h3'>{props.tag} </h3>
 </div>
 <div className="des">
     <p>{props.experience}</p>
</div>
<div className="fotter">
    <h2>VIEW PROFILE</h2>
</div>
</div>
    </div>
  )
}

export default ui
