import React, { useState } from 'react'
import { peopleData } from './service';
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react'

const People = () => {
  const [activePage, setNotActivePage] = useState(2);
  return (
    <div className='people'>
      <div className='title-people' data-aos="fade-up">
        Apa kata mereka yang sudah berlangganan GasKita?
      </div>
      <div className='d-flex' data-aos="fade-up">
        {activePage === 1 ? (
          <div className='card-people mx-3  d-none d-md-block' style={{ opacity: 0 }}>
            <div className='d-flex align-items-center'>
              <div className='d-flex flex-column align-items-start'>
                <div className='name-people'></div>
                <div className='location-people '></div>
                <div className='location-people '></div>
              </div>
            </div>
            <div className='desc-people'></div>
          </div>
        ) : ''}
        {peopleData.map((data, idx) => {
          const items = idx + 1
          if ((activePage === items) || (activePage === items - 1) || (activePage === items + 1)) {
            return (
              <div
                className='card-people mx-3 d-none d-md-block'
                key={`data-people-${data.name}-${idx}`}
                style={{ opacity: activePage === idx + 1 ? 1 : 0.5 }}
              >
                <div className='d-flex align-items-center'>
                  <img src={data.img} alt="Profile People" />
                  <div className='d-flex flex-column align-items-start'>
                    <div className='name-people'>{data.name}</div>
                    <div className='location-people '>{data.langanan}</div>
                    <div className='location-people '>{data.locotaion}</div>
                  </div>
                </div>
                <div className='desc-people'>{data.desc} </div>
              </div>
            )
          }
          return ''
        })}
        {peopleData.map((data, idx) => {
          const items = idx + 1
          if ((activePage === items)) {
            return (
              <div
                className='card-people mx-3 d-block d-md-none'
                key={`data-people-${data.name}-${idx}`}
              >
                <div className='d-flex align-items-center'>
                  <img src={data.img} alt="Profile People" />
                  <div className='d-flex flex-column align-items-start'>
                    <div className='name-people'>{data.name}</div>
                    <div className='location-people '>{data.langanan}</div>
                    <div className='location-people '>{data.locotaion}</div>
                  </div>
                </div>
                <div className='desc-people'>{data.desc} </div>
              </div>
            )
          }
          return ''
        })}
        {activePage === peopleData.length ? (
          <div className='card-people mx-3  d-none d-md-block' style={{ opacity: 0 }}>
            <div className='d-flex align-items-center'>
              <div className='d-flex flex-column align-items-start'>
                <div className='name-people'></div>
                <div className='location-people '></div>
                <div className='location-people '></div>
              </div>
            </div>
            <div className='desc-people'></div>
          </div>
        ) : ''}
      </div>

      <div className='d-flex align-items-center content-pagination' data-aos="fade-up">
        <div
          className='paging-people-arraw mx-3'
          onClick={() => {
            if (activePage !== 1) {
              setNotActivePage(activePage - 1)
            }
          }}
        ><ArrowLeft2 />
        </div>
        <div className='paging-number-people'>
          {activePage} / {peopleData.length}
        </div>
        <div
          className='paging-people-arraw mx-3'
          onClick={() => {
            if (activePage < peopleData.length) {
              setNotActivePage(activePage + 1)
            }
          }}>
          <ArrowRight2 />
        </div>
      </div>
    </div>
  )
}

export default People;