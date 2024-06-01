import React, { useState } from "react";
import { Button, Row, Col, Card, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Meta } = Card;
const News1 = () => {
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
            title: "[BST QÙA TẾT 2024] Gieo xuân an nhiên cùng Fresh Garden",
            description: "06.01.2024",
            image:
                "https://file.hstatic.net/200000411281/article/fg_1518_712856a8ddf34e04981f0af64bc2c6ca.jpg",
            link: "/tintuc/tintuc1"

        },
        {
            title: "Khám Phá Điều Bí Ẩn Ngọt Ngào Đêm Halloween Tại Fresh Garden",
            description: "27.10.2024",
            image:
                "https://file.hstatic.net/200000411281/article/cover_23333-01_584a3e3a11584187bce2822d1b9f0146.jpg",
            link: "/tintuc/tintuc2"
        },
        {
            title: "BST bánh kem chào mừng ngày Phụ nữ Việt Nam",
            description: "12.10.2023",
            image:
                "https://file.hstatic.net/200000411281/article/bcbcbcvc-01_197f0fec099e485fb95862fee26c6316.jpg",
            link: "/tintuc/tintuc3"
        },
        {
            title: "Bạn đã biết ý nghĩa của ngày Tết Trung thu?",
            description: "22.09.2023",
            image:
                "https://file.hstatic.net/200000411281/article/299849_31-8-den_trung_thu_7a66288cbeee4adc8bc14d4c3c3b985a.jpg",
            link: "/tintuc/tintuc4"
        },
        {
            title: "ĐÓN MÙA TRĂNG 2023 VỚI BST THU AN CỦA FRESH GARDEN",
            description: "24.08.2023",
            image:
                "https://file.hstatic.net/200000411281/article/fresh_garden05010_38fef0f8ff9d4427a1485f6d1d47f323.jpg",
            link: "/tintuc/tintuc5"
        },
        {
            title: "Lớp học làm bánh Fresh Garden tháng 7.2023: Hương mùa hè.",
            description: "19.07.2023",
            image:
                "https://file.hstatic.net/200000411281/article/fresch_garden05596_0eb0ceec52324ae9b0ffec4d871bc54b.jpg",
            link: "/tintuc/tintuc6"
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
            <Col span={12} style={{ margin: "0 auto" }}>
                <CardContainer>
                    <div>
                        <img
                            src="https://file.hstatic.net/200000411281/article/fg_1518_712856a8ddf34e04981f0af64bc2c6ca_1024x1024.jpg"
                            alt=""
                            style={{ width: "100%", height: "500px" }}
                        />
                        <h1 style={styles.h1}>
                            [BST QUÀ TẾT 2024] Gieo xuân an nhiên cùng Fresh Garden
                        </h1>
                        <h3 style={styles.h3}>Người viết: Vân Haravan lúc 06.01.2024 | Tin tức</h3>
                        <p style={styles.p}>
                            Tết và giá trị truyền thống tốt đẹp của Tết luôn thường trực trong
                            tâm thức người Việt. Tết là cành đào phai, câu đối đỏ bên hộp quà
                            thấm đượm yêu thương. Với Fresh Garden, chúng tôi kể câu chuyện
                            Tết bằng những hình ảnh thân quen, màu sắc tươi sáng, lồng ghép
                            tinh tế thông điệp yêu thương trên hành trình kết nối Tết xưa và
                            nay.{" "}
                        </p>
                        <img
                            src="https://file.hstatic.net/200000411281/file/fg_1518_9f86281499054a9d8b77c8a1168089d6_grande.jpg"
                            alt=""
                            style={{ display: "block", margin: "auto" }}
                        />
                        <h1 style={styles.h1}>Giá trị tốt đẹp gửi gắm qua hộp quà Tết</h1>
                        <p>
                            Qua bao mùa xuân, thay vì thay đổi các loại bánh Tết theo xu
                            hướng, Fresh Garden lựa chọn trung thành với dòng bánh quy dinh
                            dưỡng. Đặt trọn đam mê và tình yêu trong từng sản phẩm, giá trị
                            tốt đẹp ấy được chúng tôi giữ gìn qua các chiến dịch từ Trung Thu
                            đến Tết và xuyên suốt hành trình gửi sản phẩm đến tay khách hàng
                            mỗi ngày. Hơn một món quà, hộp quà Tết được Fresh Garden dày công
                            chuẩn bị mang một mùa Tết mạnh khỏe, bình an đến gần hơn với người
                            thân, bạn bè, đồng nghiệp, đối tác... thân yêu của bạn. Những giá
                            trị tốt đẹp được truyền tải trọn vẹn thông qua hộp quà Fresh
                            Garden gửi đến khách hàng trong dịp Tết 2023. Mỗi hộp quà trao đi,
                            hạt giống yêu thương được ươm mầm, đơm hoa và kết trái, mang đến
                            một mùa xuân đong đầy yêu thương và hạnh phúc.
                        </p>
                        <h1 style={styles.h1}>LỜI RU MÙA XUÂN </h1>
                        <ul>
                            <p>
                                Món quà mang hơi thở Tết hiện đại với màu đỏ tươi mới, trang nhã
                                hòa quyện cùng sắc đỏ thắm truyền thống là những hình ảnh, âm
                                thanh rất riêng của mùa xuân tạo nên một sắc Tết mang âm hưởng
                                thời đại mới nhưng vẫn lưu giữ giá trị truyền thống Tết ngàn đời
                                của dân tộc. Vị Tết đậm đà trong LỜI RU MÙA XUÂN tỏa lan cùng
                                hương thơm ngậy bùi của các loại bánh quy hạt dinh dưỡng:
                            </p>
                            <li>🍪 Bánh quy hạt óc chó</li>
                            <li>🍪 Bánh quy hạt macca </li>
                            <li>🍪 Bánh quy hạt dẻ cười </li>
                            <li>🍪 Bánh quy hạnh nhân </li>
                            <li>🍪 Kẹo hương trái cây </li>
                            <li>🍪 Kẹo trứng chim</li>
                        </ul>
                        <img
                            src="https://file.hstatic.net/200000411281/file/fg_1332_6ec4e52cb9da469e96ab6d73c90e7592_grande.jpg"
                            alt=""
                            style={{ display: "block", margin: "auto" }}
                        />
                        <h1 style={styles.h1}>DÒNG CHẢY HẠNH PHÚC</h1>
                        <ul>
                            <p>
                                Những bông hoa ngát hương, rực rỡ của khu vườn mùa xuân được
                                Fresh Garden ươm mầm từ dòng chảy yêu thương. Fresh Garden cùng
                                hộp quà Tết giúp bạn đem dòng nước mát lành từ tình yêu và hạnh
                                phúc nuôi dưỡng khu vườn mùa xuân của riêng mình, lan tỏa yêu
                                thương đến những người thân yêu trong dịp Tết Quý Mão 2023. Với
                                hộp quà, bên cạnh bánh quy ngậy bùi, Fresh Garden điểm xuyết vị
                                chua ngọt dịu dàng từ kẹo dẻo trái cây tự nhiên cho ngày Tết
                                quây quần bên hộp bánh thêm trọn vẹn:
                            </p>
                            <li>🍪 Bánh quy sô cô la chip</li>
                            <li>🍪 Bánh quy hạnh nhân</li>
                            <li>🍪 Bánh quy bơ mứt dâu</li>
                            <li>🍪 Bánh quy dừa</li>
                            <li>🍇Kẹo dẻo trái cây</li>
                        </ul>
                        <img
                            src="https://file.hstatic.net/200000411281/file/fg_1163_71644391a7aa4f30ae9d6aaef1fbc998_grande.jpg"
                            alt=""
                            style={{ display: "block", margin: "auto" }}
                        />
                        <h1 style={styles.h1}>VŨ KHÚC HẠT VÀNG</h1>
                        <ul>
                            <p>
                                Cánh cổng mùa xuân với hương sắc ngập tràn, âm thanh tươi vui
                                trên hộp quà cuối cùng Fresh Garden gửi đến khách hàng được lấy
                                cảm hứng từ những loài hoa đặc trưng của mùa xuân kết hợp cùng
                                biểu tượng may mắn gắn liền bao mùa Tết. Dạo qua cánh cổng mùa
                                xuân, thưởng thức tinh túy của đất trời vào xuân, trao nhau món
                                quà gói trọn một mùa xuân tròn đầy viên mãn thay lời chúc về một
                                năm mới bình an, may mắn và hạnh phúc. Trọn đầy vị Tết cùng Vũ
                                khúc hạt vàng: hương vị thơm thơm thảo của bánh quy hạt dinh
                                dưỡng, chút ngọt chút chua dịu dàng của kẹo dẻo trái cây, giọn
                                rụm của kẹo trứng chim cùng một tách trà thơm:
                            </p>
                            <li>🌻 Bánh quy hạnh nhân </li>
                            <li>🌻 Bánh quy hạt óc chó </li>
                            <li>🌻 Bánh quy hạt macca </li>
                            <li>🌻 Bánh quy hạt dẻ cười </li>
                            <li>🌻 Kẹo trái cây </li>
                            <li>🌻 Kẹo tứng chim</li>
                            <li>🌻 Hồng trà Ceylon</li>
                        </ul>
                        <img
                            src="https://file.hstatic.net/200000411281/file/fg_1490_6f13408f5c594009b5fb9b3472eedf5c_grande.jpg"
                            alt=""
                            style={{ display: "block", margin: "auto" }}
                        />
                        <p>
                            Tết năm nay, đừng quên cùng Fresh Garden sẻ chia những điều tốt
                            đẹp thông qua những hộp quà ý nghĩa nhé!
                        </p>
                        <p>---------</p>
                        <ul>
                            <li>🌎 Website: freshgarden.vn</li>
                            <li>☎  Hotline đặt hàng: 024 3856 3856</li>
                        </ul>
                        <div style={styles.p}>
                            <span>Tags: </span>
                            <a href="" style={styles.a}>hộp quà Tết</a>
                            <a href="" style={styles.a}>, quà doanh nghiệp</a>
                            <a href="" style={styles.a}>, quà tết Fresh Garden</a>
                        </div>
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

export default News1;
