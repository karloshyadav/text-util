import React, { useState } from 'react'

export default function Mainbody(props) {
    
    const handleCapital =()=>{
        props.setNextext(props.text.toUpperCase())
        props.setText('')
    }
    const handleLower =()=>{
        props.setText(props.text.toLowerCase())
    }
    const handleClear =()=>{
        props.setText("")
    }

    return (
        <>
        <div className='container mt-5 col-sm-6'>
        
            <div class="mb-3">
                <label  class="form-label">Example textarea</label>
                <textarea class="form-control" rows="3" value={props.text} onChange={(e)=>props.setText(e.target.value)}></textarea>
            </div>
            <div class="mb-3">
                <label  class="form-label">Example textarea</label>
                <textarea class="form-control" rows="3" value={props.nexttext}></textarea>
            </div>
            <button className='btn btn-success me-4' onClick={handleCapital}>CHANGE TO UPPER</button>
            <button className='btn btn-success me-4' onClick={handleLower}>CHANGE TO lower</button>
            <button className='btn btn-success' onClick={handleClear}>Clr</button>
        </div>
            
        </>
    )
}
