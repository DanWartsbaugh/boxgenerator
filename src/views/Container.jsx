import React, {useState} from 'react'
import Display from '../components/Display'
import Form from '../components/Form'

const Container = () => {
    const [boxList, setBoxList]= useState([])

    const addBox = (newBox) => {
        setBoxList([...boxList,newBox])
        // console.log(boxList)
    }

  return (
    <div>
        <Form onCreate={addBox}/>
        <Display
            boxList={boxList}/>
    </div>
  )
}

export default Container