import React from "react";

const ImageDesc = () => {
  return (
    <div className="ImageDesc">
      <div className="row mx-0">
        <div className="col-12 col-md-6 imageFirst">
          <div className="content-image">
            <div className="number-content">{`>740.000`}</div>
            <div className="decs-content">
              <div>Rumah tangga telah mempercayai kami</div>
              <div className="update-content">*Data diperbarui per-bulan</div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 imageSeccond">
          <div className="content-image">
            <div className="number-content">{`>1.800`}</div>
            <div className="decs-content">
              <div>UMKM telah mempercayai kami</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDesc;
