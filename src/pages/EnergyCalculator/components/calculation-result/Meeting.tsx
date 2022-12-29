import { CalendarSearch, ClipboardText, ReceiptDisscount, TruckFast, WalletSearch } from 'iconsax-react'
import React from 'react'
import { BOOK_MEETING_URL } from 'constants/meeting'


export const meetingObtains = [
    {
        icon: <ReceiptDisscount />,
        title: 'Optimization of savings according to the details of your gas usage',
    },
    {
        icon: <CalendarSearch />,
        title: 'Planning the fastest gas delivery time to your location',
    },
    {
        icon: <ClipboardText />,
        title: 'Other technical and operational arrangements',
    },
    {
        icon: <TruckFast />,
        title: 'The best mode of gas delivery to your location',
    },
    {
        icon: <WalletSearch />,
        title: 'Finding the most accommodating financial scheme',
    },
]

const Meeting = () => {
    return (
        <div>
            <hr />
            <h5 className='title-s text-center mt-4 mt-lg-5 mb-2'>Interested? Let’s have a meeting with us!</h5>
            <p className='body-s text-center mb-3 mb-md-4'>
                Our gas expert will help you find the best technical and operational solutions for your business. <br />
                You will get your efficiency exactly the way you need.
            </p>
            <div className="row mb-3 mb-md-5">
                {meetingObtains.map((item, i) => (
                    <div key={i} className="col-6 col-lg mb-3 mb-lg-0">
                        <div className='meeting-card'>
                            <div className='icon-wrapper mb-3'>
                                {item.icon}
                            </div>
                            <p className='body-s darker mb-0'>{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="d-flex align-items-center justify-content-center">
                <a href={BOOK_MEETING_URL} className='pgn-button'>Book an Online Meeting</a>
            </div>
        </div>
    )
}

export default Meeting