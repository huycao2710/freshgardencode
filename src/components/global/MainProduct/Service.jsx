import React from "react";

const Service = () => {
  return (
    <section>
      <div className="section-heading text-center mb-10">
        <h2 className="section-title text-5xl font-playfairDisplay text-gray-500">
          <div className="icon mb-5 flex justify-center items-center">
            <img src="/assets/images/DVNB/DVNBIcon.jpg" alt="icon" />
          </div>
          <span>Dịch vụ nổi bật</span>
        </h2>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="col-span-1 p-4 flex justify-center items-start">
            <div className="text-center" style={{ fontFamily: "sans-serif" }}>
              <img src="/assets/images/DVNB/DVNB1.jpg" alt="icon" />
              <h4 className="text-logo-green my-4 text-2xl tracking-widest">
                Bánh tươi mỗi ngày
              </h4>
              <h4 className="text-sm">
                Sản phẩm được sản xuất trong ngày với nguyên liệu chất lượng và
                tươi mới.
              </h4>
            </div>
          </div>
          <div className="col-span-1 p-4 flex justify-center items-start">
            <div className="text-center" style={{ fontFamily: "sans-serif" }}>
              <img src="/assets/images/DVNB/DVNB2.jpg" alt="icon" />
              <h4 className="text-logo-green my-4 text-2xl tracking-widest">
                Đa dạng chọn lựa
              </h4>
              <h4 className="text-sm">
                Thế giới phong phú của bánh kem tươi, bánh mì, pizza, bánh
                ngọt...
              </h4>
            </div>
          </div>
          <div className="col-span-1 p-4 flex justify-center items-start">
            <div className="text-center" style={{ fontFamily: "sans-serif" }}>
              <img src="/assets/images/DVNB/DVNB3.jpg" alt="icon" />
              <h4 className="text-logo-green my-4 text-2xl tracking-widest">
                Danh sách cửa hàng
              </h4>
              <h4 className="text-sm">
                Gần 100 cửa hàng lớn, phủ khắp các quận huyện nhằm đáp ứng nhu
                cầu mua sắm tiện lợi.
              </h4>
            </div>
          </div>
          <div className="col-span-1 p-4 flex justify-center items-start">
            <div className="text-center" style={{ fontFamily: "sans-serif" }}>
              <img src="/assets/images/DVNB/DVNB4.jpg" alt="icon" />
              <h4 className="text-logo-green my-4 text-2xl tracking-widest">
                Dịch vụ tận tâm
              </h4>
              <h4 className="text-sm">
                Sự tỉ mỉ, tận tâm và chuyên nghiệp luôn là huyết mạch trong phục
                vụ.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
