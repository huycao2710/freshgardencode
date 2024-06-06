import React, { useState } from "react";
import { Button, Row, Col, Card, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const Promotion1 = () => {
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
            title: "Ưu đãi 30% cho bánh tươi Fresh Garden",
            description: "22.03.2023",
            image:
                "https://file.hstatic.net/200000411281/article/30_1_71815ec0a70b4bcaab7c6474458277db_large.jpg",
            link: "/blogs/khuyen_mai2"
        },
        {
            title: "Mua 1 tặng 1 - Tặng 01 trà đào/ trà sữa thạch khi mua 1 bánh tươi",
            description: "22.03.2023",
            image:
                "https://file.hstatic.net/200000411281/article/1-1_3167e081756f403284c75f235712fb36_large.jpg",
            link: "/blogs/khuyen_mai3"
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

        a: {
            opacity: 0.8,
            fontStyle: "italic",
            fontSize: "14px",
            color: "#4B494E",
            outLine: "none"
        },
    };

    const menu = (
        <Menu>
            {cards.map((card, index) => (
                <Menu.Item key={index}>
                    <Link to={card.link} style={{ display: "flex", alignItems: "center", width: 300 }}>
                        <img src={card.image} alt="card" style={{ width: 50, height: 50, marginRight: 10 }} />
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
            <Col span={12} style={{ margin: "0 0 0 350px"}}>
                <CardContainer>
                    <div>
                        <img
                            src="https://file.hstatic.net/200000411281/article/317455529_919870362730514_218592754932138591_n_9394a10f56b845a183d7c3c26b7dfda4_1024x1024.jpg"
                            alt=""
                            style={{ width: "100%", height: "900px" }}
                        />
                        <h1 style={styles.h1}>
                        Mua bánh thả ga - Freeship có Fresh Garden lo
                        </h1>
                        <h3 style={styles.h3}>Người viết: CSKH10 lúc 22.03.2023 | Tin khuyến mãi</h3>
                        <p style={styles.p}><b>Mua bánh thả ga - Freeship có Fresh Garden lo🛵</b></p>
                        <p>
                        Bạn muốn đặt bánh nhưng không có thời gian đến cửa hàng lấy bánh?
                        </p>
                        <p>
                        Bạn lo lắng quá trình vận chuyển không đúng cách sẽ làm chiếc bánh kem xinh xắn bị xô lệch?
                        </p>
                        <p>
                        Đừng lo vì Fresh Garden đã có giải pháp giúp bạn với chương trình freeship hấp dẫn: 
                        </p>
                        <p><b>📣 Miễn phí giao hàng</b>với đơn từ 400k trong 3km khi mua hàng qua hotline hoặc mua online trên website/fanpage/instagram (𝘢́𝘱 𝘥𝘶̣𝘯𝘨 𝘷𝘰̛́𝘪 𝘴𝘢̉𝘯 𝘱𝘩𝘢̂̉𝘮 𝘮𝘢𝘯𝘨 𝘵𝘩𝘶̛𝘰̛𝘯𝘨 𝘩𝘪𝘦̣̂𝘶 𝘍𝘳𝘦𝘴𝘩 𝘎𝘢𝘳𝘥𝘦𝘯, 𝘬𝘩𝘰̂𝘯𝘨 𝘢́𝘱 𝘥𝘶̣𝘯𝘨 𝘤𝘩𝘰 𝘩𝘢̀𝘯𝘨 𝘵𝘩𝘶̛𝘰̛𝘯𝘨 𝘮𝘢̣𝘪)</p>
                        <p>
                        Fresh Garden tin tưởng đơn vị giao hàng uy tín với dịch vụ vận chuyển đáp ứng yêu cầu nghiêm ngặt vì thế những chiếc bánh sẽ được giao đến tay bạn một cách an toàn.
                        </p>
                        <p>
                        📞Nhấc máy lên và đặt hàng ngay bạn nhé!
                        </p>
                        <p>---------</p>
                        <ul>
                            <li>🌎 Website: freshgarden.vn</li>
                            <li>☎  Hotline đặt hàng: 024 3856 3856</li>
                            <li>📞Hotline CSKH: 19002075</li>
                        </ul>
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


export default Promotion1
