import React from "react";
import Button from "component/Button";

const Seccsion = ({ dataSeccsion, business, id }) => {
  return (
    <div className={`${business ? '' : 'gradient-bg'} seccsion`} id={id}>
      <div className='title-seccsion' data-aos="fade-up">
        {dataSeccsion.title}
      </div>
      <div className="desc-seccsion" data-aos="fade-up">
        {dataSeccsion.desc}
      </div>

      <div className="content-card-seccsion">
        {dataSeccsion.itemSeccsion.map((data, idx) => {
          return (
            <div
              className="card-seccsion mt-3 mt-md-4"
              key={`data-seccsion-${data.title}-${idx}`}
              data-aos="fade-up"
            >
              <div className="d-flex flex-column align-items-center">
                {data.logo}
                <div className='title-card-seccsion'>
                  {data.gift ? <>{data.title}<span>*</span></> : data.title}
                </div>
                <div className="desc-card-seccsion">
                  {data.decs.split(";").length > 1
                    ? data.decs.split(";").map((item) => {
                      return (
                        <div className="d-flex align-items-center">
                          <div className="circle" />
                          {item}
                        </div>
                      );
                    })
                    : data.decs}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {business ? "" : (
        <>
          <div className='syarat-dan-ketentuan'>*Syarat dan ketentuan berlaku</div>
          <Button type='link' href="https://online.pgn.co.id/register/residensial" className='btn-default px-md-5 btn-mobile' isExternal>
            <div className='title'>Daftar Sekarang</div>
          </Button>
        </>
      )}
    </div>
  );
};

export default Seccsion;
