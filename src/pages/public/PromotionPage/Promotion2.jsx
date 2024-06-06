import React, { useState } from "react";
import { Button, Row, Col, Card, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const Promotion2 = () => {
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
            link: "/blogs/khuyen_mai1"

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
            <Col span={12} style={{ margin: "0 0 0 350px" }}>
                <CardContainer>
                    <div>
                        <img
                            src="https://file.hstatic.net/200000411281/article/30_1_71815ec0a70b4bcaab7c6474458277db_1024x1024.jpg"
                            alt=""
                            style={{ width: "100%", height: "900px" }}
                        />
                        <h1 style={styles.h1}>
                        Ưu đãi 30% cho bánh tươi Fresh Garden
                        </h1>
                        <h3 style={styles.h3}>Người viết: CSKH10 lúc 22.03.2023 | Tin khuyến mãi</h3>
                        <p style={styles.p}><b>⚡️𝗧𝗶𝗻𝗴 𝗧𝗶𝗻𝗴 ⚡️Ưu đãi 30% cho bánh tươi Fresh Garden đến đây </b></p>
                        <p>
                        Cơ hội thưởng thức bộ sưu tập bánh tươi tại #FreshGarden với ưu đãi lên tới 30% bánh tươi thơm ngon và đủ vị hấp dẫn cho bạn mỗi ngày bạn ơi!
                        </p>
                        <p>
                        Hàng ngày, sau 20h toàn bộ danh mục bánh tươi trong ngày của Fresh Garden sẽ đồng loạt giảm 30%, cơ hội tận hưởng mỗi ngày một hương vị bánh lôi cuốn đã đến.
                        </p>
                        <p>
                        📌 Check ngay bạn nhé:
                        </p>
                        <ul>
                            <li>» Bánh sừng bò 3 rọi xông khói phô mai</li>
                            <li>» Bánh sừng bò giăm bông phô mai</li>
                            <li>» Bánh mì nhân thịt heo</li>
                            <li>» Bánh mì gà sốt teriyaki</li>
                            <li>» Bánh mì hạt óc chó sốt kem</li>
                            <li>» Bánh mì cuộn ruốc rong biển</li>
                            <li>» Bánh mì nhân kem mousseline</li>
                            <li>» Bánh mì cuộn xúc xích</li>
                            <li>» Bánh mì dừa hạt quinoa</li>
                            <li>» Bánh mì nho sốt kem sữa</li>
                            <li>» Bánh mì xúc xích ruốc</li>
                            <li>» Bánh mì cá ngừ phô mai</li>
                            <li>» Bánh tươi xúc xích phô mai</li>
                            <li>» Bánh mì tươi cuộn xúc xích</li>
                            <li>» Bánh tươi phô mai ruốc gà cay</li>
                            <li>» Bánh pizza xúc xích ngô</li>
                            <li>» Bánh tươi dừa</li>
                        </ul>
                        <p>
                        Bánh tươi thơm ngon đang chờ bạn tại các cơ sở bánh của Fresh Garden. Nhanh tay liên hệ, mua ngay kẻo lỡ bạn nhé!
                        </p>
                        <p>
                        (--) Ưu đãi chỉ áp dụng cho các sản phẩm bánh mì tươi sử dụng trong 24h và không áp dụng đồng thời cũng các chương trình khuyến mãi khác từ Fresh Garden.
                        </p>
                        <p>---------</p>
                        <p><b>(🎁) 𝗠𝗶𝗲̂̃𝗻 𝗽𝗵𝗶́ 𝗴𝗶𝗮𝗼 𝗵𝗮̀𝗻𝗴 </b>với đơn từ 400k trong 3km khi mua hàng qua hotline hoặc mua online trên website/fanpage/instagram (𝘢́𝘱 𝘥𝘶̣𝘯𝘨 𝘷𝘰̛́𝘪 𝘴𝘢̉𝘯 𝘱𝘩𝘢̂̉𝘮 𝘮𝘢𝘯𝘨 𝘵𝘩𝘶̛𝘰̛𝘯𝘨 𝘩𝘪𝘦̣̂𝘶 𝘍𝘳𝘦𝘴𝘩 𝘎𝘢𝘳𝘥𝘦𝘯, 𝘬𝘩𝘰̂𝘯𝘨 𝘢́𝘱 𝘥𝘶̣𝘯𝘨 𝘤𝘩𝘰 𝘩𝘢̀𝘯𝘨 𝘵𝘩𝘶̛𝘰̛𝘯𝘨 𝘮𝘢̣𝘪)</p>
                        <ul>
                            <li>🌎 Website: freshgarden.vn</li>
                            <li>☎  Hotline đặt hàng: 024 3856 3856</li>
                            <li>📞Hotline CSKH: 19002075</li>
                        </ul>
                        <img src="https://file.hstatic.net/200000411281/file/30__e8edd7e67fde401f96947711e0cfd01a_grande.jpg" alt="" style={{ display: "block", margin: "auto" }} />

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



export default Promotion2