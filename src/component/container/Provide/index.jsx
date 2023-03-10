import React from 'react'
import { itemProvide } from './service';
import { BOOK_MEETING_URL } from 'constants/meeting'

const Provide = ({ id }) => {
  return (
    <div className='provide' id={id}>
      <div className='title-provide' data-aos="fade-up">
        We're ready to provide the best natural gas for your company!
      </div>
      <div className='desc-provide' data-aos="fade-up">
        Allow us to bring you the lower-emission gas without any hassle!
      </div>

      <div className='card-provide-content'>
        {itemProvide.map((data, idx) => {
          return (
            <div className='px-3 card-margin-provide' key={`data-provide-${data.title}-${idx}`} data-aos="fade-up">
              <div className='d-flex flex-column'>
                <div className='card-number-provide'>{idx + 1}</div>
                <div className='field-card-provide'>
                  <div className='title-card-provide'>
                    {data.title}
                  </div>
                  <div className='desc-card-provide'>
                    {data.decs}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className='text-content-provide '>We're always ready for your questions!</div>
      <a target="_blank" href={BOOK_MEETING_URL} className='btn-default px-md-5 btn-mobile' rel="noreferrer" >
        <div className='title'>Book an Online Meeting</div>
      </a>
    </div>
  )
}

export default Provide;