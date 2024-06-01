import React, { useState } from "react";
import { Button, Row, Col, Card, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Meta } = Card;
const News2 = () => {
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
                            src="https://file.hstatic.net/200000411281/article/cover_23333-01_584a3e3a11584187bce2822d1b9f0146_1024x1024.jpg"
                            alt=""
                            style={{ width: "100%", height: "500px" }}
                        />
                        <h1 style={styles.h1}>
                            Khám Phá Điều Bí Ẩn Ngọt Ngào Đêm Halloween Tại Fresh Garden
                        </h1>
                        <h3 style={styles.h3}>Người viết: Vân Haravan lúc 27.10.2023 | Tin tức</h3>
                        <p style={styles.p}>
                            Vẫn là bánh kem cốt chiffon bồng bềnh ngọt ngào nhưng được khoác lên diện mạo ma mị và huyền bí hơn, bạn đã sẵn sàng tận hưởng bữa tiệc Halloween ma quái cùng Fresh Garden?
                        </p>
                        <h1 style={styles.h1}>Nguồn gốc ngày Halloween?</h1>
                        <p>
                            Nguồn gốc Halloween được bắt nguồn từ một ngày lễ cổ của người Celtic, là một nhóm các bộ lạc, bộ tộc và dân tộc của thời kỳ đồ sắt và thời kỳ đầu Trung Cổ của Châu Âu. Ngày lễ này có tên gọi là Samhain và là ngày kỷ niệm một năm mới của họ được bắt đầu từ hơn 1900 năm trước ở Ireland, Anh và miền Bắc của nước Pháp.
                        </p>
                        <p style={styles.p}>
                            Người Celtic coi ngày này là ngày tôn vinh vụ mùa thu hoạch, đánh dấu thời điểm chuyển sang mùa đông. Họ tin rằng vào ngày 31 tháng 10 cũng là lúc địa ngục mở cửa, ranh giới giữa cái chết và sự sống rất mờ nhạt. Vì thế, họ thường tắt lửa để cho nhà cửa thật lạnh và tối như không có người sống, sau đó hóa trang thành người chết, ma quỷ đi quanh khu vực sống để xua đuổi các linh hồn đến từ thế giới bên kia.
                        </p>
                        <p style={styles.p}>
                            Cho đến khi thánh Patrick cùng đoàn truyền giáo đến khu vực sinh sống của người Celtic thì ngày lễ này ít được tổ chức hơn. Tuy nhiên, sau đó, các nhà thờ đã thay đổi ngày lễ này thành một lễ hội mang nhiều ảnh hưởng của đạo Kito giáo.
                        </p>
                        <p style={styles.p}>
                            Tới thế kỷ thế 8, Giáo hoàng Gregorius III đã quyết định chuyển ngày lễ Các Thánh Tử đạo (ngày 13 tháng 5) sang ngày 1 tháng 11 và gọi nó là ngày Các Thánh. Vào ngày này, người dân sẽ tổ chức các hoạt động của lễ Samhain và đêm trước ngày Các Thánh được gọi là Halloween.
                        </p>
                        <p style={styles.p}>
                            Vào năm 1840, theo phong trào di cư của người Ireland sang Mỹ, lễ hội Halloween cũng du nhập theo. Dần dà, theo trào lưu hội nhập, Halloween đã thành một lễ hội phổ biến trên toàn thế giới.
                        </p>
                        <h1 style={styles.h1}>Điều bí ẩn ngọt ngào tại Fresh Garden</h1>
                        <img src="https://file.hstatic.net/200000411281/file/baif-01_e90f3a8639a048d49545c7ea099352fe_grande.jpg" alt="" style={{ display: "block", margin: "auto" }} />
                        <p style={{ textAlign: "center", paddingTop: "10px" }}>Bánh kem đặc biệt nhân dịp Halloween tại Fresh Garden</p>
                        <p style={styles.p}>Hòa cùng không khí ma quái của những ngày gần kề Halloween, Fresh Garden đã cho ra mắt 2 mẫu bánh kem độc đáo:</p>
                        <p style={styles.p}>Bánh kem Midnight Sweets: Bánh kem tươi cốt chiffon vani bồng bềnh thơm ngất ngây nhân kem tươi, trang trí kem tươi và sô cô la hình ma chơi ngộ nghĩnh.</p>
                        <p style={styles.p}>Bánh kem Happy Halloween: Lấy cảm hứng từ những trái bí ngô đặc trưng của ngày Hallowen, chiếc bánh kem tươi cốt bánh chiffon sô cô la chip nhân phô mai, trang trí kem tươi, ganat sô cô la và bánh oreo đáng yêu.</p>
                        <p style={styles.p}>Những chiếc bánh độc đáo này sẽ ra mắt các cửa hàng Fresh Garden từ ngày 28/10, nhanh tay đặt hàng qua hotline hoặc nhắn tin qua fanpage để được tư vấn nhé!</p>
                        <p style={styles.p}>
                            Chúc bạn có một bữa tiệc Halloween vui vẻ cùng gia đình!
                        </p>
                        <p>---------</p>
                        <ul>
                            <li>🌎 Website: freshgarden.vn</li>
                            <li>☎  Hotline đặt hàng: 024 3856 3856</li>
                        </ul>
                        <div style={styles.p}>
                            <span>Tags: </span>
                            <a href="" style={styles.a}>Halloween</a>
                            <a href="" style={styles.a}>, Bánh kem Halloween</a>
                            <a href="" style={styles.a}>, bánh kem</a>
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

export default News2;