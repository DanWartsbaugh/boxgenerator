import React from 'react'

const Display = (props) => {
  return (
    <div style={{display:'flex',flexWrap:'wrap'}}>
    {props.boxList.map((eachBox, idx) => (
    <div key={idx} style={{backgroundColor:eachBox.boxColor,width:`${eachBox.boxWidth}px`,height:`${eachBox.boxWidth}px`,margin:'5px'}}></div>
    )
  )}
  </div>
  )
}

export default Display