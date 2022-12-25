import React from 'react'
import { itemQuest } from './service';
import DropdownQuest from 'component/DropdownQuest';

const Questions = () => {
  return (
    <div className='questions'>
      <div className='row'>
        <div className='col-12 col-md-6 text-justify' data-aos="fade-right">
          <div className='title-questions'>Frequently Asked Questions</div>
          <div className='desc-questions'>Pertanyaan yang sering ditanyakan</div>
        </div>
        <div className='col-12 col-md-6 text-justify' data-aos="fade-left">
          {itemQuest.map((data, idx) => {
            return (
              <div key={`question-item-${idx}`}>
                <DropdownQuest itemQuest={itemQuest} title={data.title} desc={data.desc} />
              </div>
            )
          })}
          <div className='text-look-all-questions'>Lihat Semua Pertanyaan</div>
        </div>
      </div>
    </div>
  )
}

export default Questions;