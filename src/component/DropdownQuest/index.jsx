import React, { useState } from 'react'
import { ArrowUp2, ArrowDown2 } from 'iconsax-react';

const DropdownQuest = ({ title, desc }) => {
  const [active, setActive] = useState(false)
  return (
    <>
      <div className='d-flex justify-content-between' style={{ cursor: 'pointer' }} onClick={() => setActive(!active)}>
        <div className='title-content-questions'>
          {title}
        </div>
        <div className='arrow-icon-question'>{active ? <ArrowUp2 /> : <ArrowDown2 />}</div>
      </div>
      <div className={active ? 'desc-content-questions' : 'desc-content-questions-close'}>
        {desc}
      </div>
      <hr />
    </>

  )
}

export default DropdownQuest;