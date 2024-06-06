import React, { useState } from "react";
import { Button, Row, Col, Card, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const Promotion3 = () => {
  const [openDropdown1, setOpenDropdown1] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const handleButtonClick = () => {
    setIsSelected(!isSelected);
  };

  const handleMenuClick = (e) => {
    console.log("click", e);
  };

  const toggleDropdown1 = () => {
    setOpenDropdown1(!openDropdown1);
  };

  const cards = [
    {
      title: "Mua bánh thả ga - Freeship có Fresh Garden lo",
      description: "22.03.2023",
      image:
        "https://file.hstatic.net/200000411281/article/317455529_919870362730514_218592754932138591_n_9394a10f56b845a183d7c3c26b7dfda4_large.jpg",
      link: "/blogs/khuyen_mai1",
    },
    {
      title: "Ưu đãi 30% cho bánh tươi Fresh Garden",
      description: "22.03.2023",
      image:
        "https://file.hstatic.net/200000411281/article/30_1_71815ec0a70b4bcaab7c6474458277db_large.jpg",
      link: "/blogs/khuyen_mai2",
    },
  ];

  const styles = {
    h1: {
      margin: " 20px 0",
      fontSize: "24px",
      fontFamily: "Playfair Display, serif",
      fontWeight: "bold",
      lineHeight: "1.2",
    },

    h3: {
      opacity: 0.85,
      display: "inline-block",
      marginRight: "10px",
      fontSize: "13px",
      fontWeight: "600",
    },

    p: {
      paddingTop: " 10px",
      lineHeight: "21px",
      fontSize: "14px",
    },

    ul: {
      lineHeight: "2.4",
    },

    a: {
      opacity: 0.8,
      fontStyle: "italic",
      fontSize: "14px",
      color: "#4B494E",
      outLine: "none",
    },
  };

  const menu = (
    <Menu>
      {cards.map((card, index) => (
        <Menu.Item key={index}>
          <Link
            to={card.link}
            style={{ display: "flex", alignItems: "center", width: 300 }}
          >
            <img
              src={card.image}
              alt="card"
              style={{ width: 50, height: 50, marginRight: 10 }}
            />
            <div>
              <h3>
                <b>{card.title}</b>
              </h3>
              <p>{card.description}</p>
            </div>
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Row gutter={[16, 16]}>
      <Col span={12} style={{ margin: "0 0 0 350px" }}>
        <CardContainer>
          <div>
            <img
              src="https://file.hstatic.net/200000411281/article/1-1_3167e081756f403284c75f235712fb36_1024x1024.jpg"
              alt=""
              style={{ width: "100%", height: "900px" }}
            />
            <h1 style={styles.h1}>
              Mua 1 tặng 1 - Tặng 01 trà đào/ trà sữa thạch khi mua 1 bánh tươi
            </h1>
            <h3 style={styles.h3}>
              Người viết: CSKH10 lúc 22.03.2023 | Tin khuyến mãi
            </h3>
            <p style={styles.p}>
              <b>
                Mua 1 tặng 1 - Tặng 01 trà đào/ trà sữa thạch khi mua 1 bánh
                tươi.
              </b>
            </p>
            <p style={styles.p}>
              <b>Áp dụng từ 01/03 - 31/03 trong khung giờ 06h00 đến 12h00.</b>
            </p>
            <p style={styles.p}>
              Gen Z đi học, bản lĩnh thì có nhưng đói thì thì khum chịu được.
            </p>
            <p style={styles.p}>
              👉Đến ngay Fresh Garden để nạp ngay năng lượng với menu bánh tươi
              thơm ngon hấp dẫn để sẵn sàng học tập, thỏa sức làm điều mình
              thích nha các bạn yêu.
            </p>
            <p style={styles.p}>
              Đặc biệt, Fresh Garden tặng bạn deal HOT không thể bỏ lỡ: TẶNG 1
              nước trà đào hoặc trà sữa thạch khi mua một trong số các loại bánh
              tươi dưới đây:
            </p>
            <ul style={styles.ul}>
              <li>🥯 Bánh mì gà sốt teriyaki</li>
              <li>🥯 Bánh mì cuộn ruốc rong biển</li>
              <li>🥯 Bánh mì cuộn xúc xích</li>
              <li>🥯 Bánh pizza xúc xích ngô</li>
              <li>🥯 Bánh mì hạt óc chó sốt kem</li>
              <li>🥯 Bánh pizza dăm bông nấm</li>
              <li>🥯 Bánh sừng bò ba rọi xông khói phomai</li>
              <li>🥯 Bánh sừng bò hạnh nhân bơ sữa</li>
            </ul>
            <p style={styles.p}>
              🔔 Thời gian áp dụng: 01/03/2023 - 31/03/2023
            </p>
            <p style={styles.p}>⏰ Khung giờ áp dụng: từ 06h00 đến 12h00</p>
            <p style={styles.p}>
              Đối tượng áp dụng: Khách hàng mua hàng trực tiếp tại cửa hàng.
            </p>
            <p style={styles.p}>
              👉 Chương trình khuyến mãi áp dụng tại các cửa hàng Fresh Garden
              có địa chỉ sau:
            </p>
            <ul style={styles.ul}>
              <li>Cửa hàng 147 Khương Trung</li>
              <li>Cửa hàng 170 Ngô Xuân Quảng</li>
              <li>Cửa hàng 287 Trần Đăng Ninh</li>
              <li>Cửa hàng 300B Cầu Giấy</li>
              <li>Cửa hàng La Casta Văn Khê</li>
              <li>Cửa hàng 130 Lạc Trung</li>
              <li>Cửa hàng 65 Nguyễn Chí Thanh</li>
              <li>Cửa hàng 14 Ngô Thì Nhậm</li>
              <li>Cửa hàng Trường đại học Sư phạm Hà Nội</li>
              <li>Cửa hàng 113 Tô Hiệu Hà Đông</li>
              <li>Cửa hàng 174 Hoàng Văn Thái</li>
              <li>Cửa hàng 324 - 326 Xã Đàn</li>
            </ul>
            <p>---------</p>
            <p style={styles.p}>
              <b>(🎁) 𝗠𝗶𝗲̂̃𝗻 𝗽𝗵𝗶́ 𝗴𝗶𝗮𝗼 𝗵𝗮̀𝗻𝗴 </b>với đơn từ 400k trong 3km khi mua
              hàng qua hotline hoặc mua online trên website/fanpage/instagram
              (𝘢́𝘱 𝘥𝘶̣𝘯𝘨 𝘷𝘰̛́𝘪 𝘴𝘢̉𝘯 𝘱𝘩𝘢̂̉𝘮 𝘮𝘢𝘯𝘨 𝘵𝘩𝘶̛𝘰̛𝘯𝘨 𝘩𝘪𝘦̣̂𝘶 𝘍𝘳𝘦𝘴𝘩 𝘎𝘢𝘳𝘥𝘦𝘯, 𝘬𝘩𝘰̂𝘯𝘨 𝘢́𝘱 𝘥𝘶̣𝘯𝘨
              𝘤𝘩𝘰 𝘩𝘢̀𝘯𝘨 𝘵𝘩𝘶̛𝘰̛𝘯𝘨 𝘮𝘢̣𝘪)
            </p>
            <ul>
              <li>🌎 Website: freshgarden.vn</li>
              <li>☎ Hotline đặt hàng: 024 3856 3856</li>
              <li>📞Hotline CSKH: 19002075</li>
            </ul>
            <img
              src="https://file.hstatic.net/200000411281/file/334029675_771226417893828_844310876439316958_n_2d4f692fd5454519a29fa873322bf4f5_grande.jpg"
              alt=""
              style={{ display: "block", margin: "auto" }}
            />
          </div>
        </CardContainer>
      </Col>
      <Col span={5} style={{ marginRight: "auto" }}>
        <CardContainer>
          <Dropdown
            overlay={menu}
            trigger={["click"]}
            visible={openDropdown1}
            onVisibleChange={toggleDropdown1}
            getPopupContainer={(triggerNode) => triggerNode.parentNode}
          >
            <Button
              onClick={handleButtonClick}
              style={{
                border: "none",
                padding: "0 85px",
                fontSize: "20px",
                color: isSelected ? "red" : "initial",
              }}
            >
              <b>BÀI VIẾT MỚI NHẤT</b>
            </Button>
          </Dropdown>
          <hr
            style={{
              color: "green",
              backgroundColor: "#b1c23c",
              height: 3,
              border: "none",
              marginLeft: "15px",
            }}
          />
        </CardContainer>
      </Col>
    </Row>
  );
};

const CardContainer = ({ children }) => (
  <Card style={{ marginBottom: "16px", border: "none" }}>{children}</Card>
);

export default Promotion3;