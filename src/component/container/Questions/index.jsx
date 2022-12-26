import React, { useState } from 'react'
import { itemQuest, itemQuestAll } from './service';
import Modal from 'react-modal';
import DropdownQuest from 'component/DropdownQuest';

const customStyles = {
  content: {
    height: window.innerHeight,
    width: window.innerWidth,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
const Questions = () => {
  const [openModal, setOpenModal] = useState(false);
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
          <Modal
            isOpen={openModal}
            style={customStyles}
            className='ModalQuestions'
          >
            <div className='ModalContentQuest' style={{ height: window.innerHeight - 200 }}>
              <div className='ModalHeader'>
                <div className='d-flex justify-content-between'>
                  <div className='ModalQuestTitle'>Frequently Asked Questions</div>
                  <span onClick={() => setOpenModal(!openModal)}>X</span>
                </div>
              </div>
              <div className='ModalBody' style={{ height: window.innerHeight - 310 }}>
                {itemQuestAll.map((data, idx) => {
                  return (
                    <div key={`question-item-${idx}`}>
                      <DropdownQuest itemQuest={itemQuest} title={data.title} desc={data.desc} />
                    </div>
                  )
                })}
              </div>
            </div>
          </Modal>
          <div className='text-look-all-questions' onClick={() => setOpenModal(!openModal)}>Lihat Semua Pertanyaan</div>
        </div>
      </div>
    </div>
  )
}

export default Questions;