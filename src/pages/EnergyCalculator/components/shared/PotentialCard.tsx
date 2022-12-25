import React from 'react'

type PotentialCardProps = {
    leftValue: string;
    leftDescription: string;
    rightValue: string;
    rightDescription: string;
}
const PotentialCard: React.FC<PotentialCardProps> = ({
    leftValue,
    leftDescription,
    rightValue,
    rightDescription
}) => {
    return (
        <div className='potential-card d-flex flex-column flex-lg-row py-4'>
            <div>
                <h5 className='title-m text-success text-center'>{leftValue}</h5>
                <p className='body-s text-center mb-0'>{leftDescription}</p>
            </div>
            <p className='body-s darker align-self-center my-4 my-lg-0 mb-0'>or equal to</p>
            <div>
                <h5 className='title-m text-black text-center text-lg-left'>{rightValue}</h5>
                <p className='body-s text-center text-lg-left mb-0'>{rightDescription}</p>
            </div>
        </div>
    )
}

export default PotentialCard