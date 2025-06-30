import React from 'react'

const RangeSlider = ({max, value, onChange}) => {
  return (
    <div className='slider-wrapper w-full flex '>
        <input type='range'
        min={0} max={max} value={value} onChange={onChange} 
        style={{
                background: `linear-gradient(to right, #fafafa ${(100*value) / max}%, #0220374d ${(100*value) / max}%)`

        }}
        className='slider cursor-pointer appearance-none h-1 w-full   ' />
    </div>
  )
}

export default RangeSlider