import React, {useState} from 'react'

const Form = (props) => {
    const [boxColor,setBoxColor]= useState("null");
    const [boxWidth,setBoxWidth]= useState(0);

const handleSubmit= (e) => {
    e.preventDefault();
    const newBox = {boxColor, boxWidth}
    props.onCreate(newBox)
}

  return (
    <div>
        <form onSubmit={(handleSubmit)}>
            <div>
                <label>Color: </label> 
                <input type="text" onChange={ (e) => setBoxColor(e.target.value) } />
            </div>
            <div>
                <label>Width: </label> 
                <input type="number" onChange={ (e) => setBoxWidth(e.target.value) } />
            </div>
            <button type="submit">Add</button>
            </form>
    </div>
    
  )
}

export default Form