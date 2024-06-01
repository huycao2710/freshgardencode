import React, { useState } from "react";
import { Button, Row, Col, Card, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Meta } = Card;
const News6 = () => {
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
                            src="https://file.hstatic.net/200000411281/article/fresch_garden05596_0eb0ceec52324ae9b0ffec4d871bc54b_1024x1024.jpg"
                            alt=""
                            style={{ width: "100%", height: "500px" }}
                        />
                        <h1 style={styles.h1}>
                            ĐÓN MÙA TRĂNG 2023 VỚI BST "THU AN" CỦA FRESH GARDEN
                        </h1>
                        <h3 style={styles.h3}>Người viết: Vân Haravan lúc 24.08.2023 | Tin tức</h3>
                        <p style={styles.p}>
                            Lấy cảm hứng từ những giá trị truyền thống của Việt Nam kết hợp cùng nghệ thuật kiến trúc lâu đời, Fresh Garden đã cho ra mắt bộ sưu tập gồm 02 dòng bánh trung thu Truyền Thống và Tuyết Hoa 2023 vô cùng sang trọng, thể hiện sự an lành và hạnh phúc.
                        </p>
                        <p style={styles.p}>
                            Bộ sưu tập năm nay không chỉ tái hiện lại nguyên vẹn những hương vị bánh truyền thống quen thuộc mà còn tạo ra điểm nhấn mới bằng những hương vị hiện đại, theo kịp xu hướng lối sống lành mạnh của khách hàng.
                        </p>
                        <h1 style={styles.h1}>Mùa trăng 2023 cùng Fresh Garden</h1>
                        <p>
                            Nhớ về Tết Đoàn Viên, người ta nhớ về những giây phút sum họp, về những tiếng cười trẻ thơ và hương vị bánh trung thu truyền thống - "thức quà chở hồn văn hóa Việt"
                        </p>
                        <p style={styles.p}>
                            Trong khi lớp vỏ bánh nướng được làm từ bột mì kết hợp với trứng gà để tạo ra màu sắc óng ánh và độ bóng cho bánh thì bánh dẻo sử dụng lớp vỏ làm từ bột nếp trắng tinh, giúp bánh có độ dẻo và mịn màng. Những chiếc bánh này không chỉ đơn thuần là món ăn mà còn mang trong mình giá trị văn hóa sâu sắc. Chúng được gói ghém bằng lòng yêu thương, là biểu tượng cho sự mộc mạc và đậm đà của quê hương. Đã từ lâu, bánh nướng và bánh dẻo đã trở thành một phần không thể thiếu trong nếp sống và văn hóa của người Việt Nam, mang đến niềm vui và sự tự hào cho biết bao thế hệ người Việt.
                        </p>
                        <p style={styles.p}>
                            Trong khi lớp vỏ bánh nướng được làm từ bột mì kết hợp với trứng gà để tạo ra màu sắc óng ánh và độ bóng cho bánh thì bánh dẻo sử dụng lớp vỏ làm từ bột nếp trắng tinh, giúp bánh có độ dẻo và mịn màng. Những chiếc bánh này không chỉ đơn thuần là món ăn mà còn mang trong mình giá trị văn hóa sâu sắc. Chúng được gói ghém bằng lòng yêu thương, là biểu tượng cho sự mộc mạc và đậm đà của quê hương. Đã từ lâu, bánh nướng và bánh dẻo đã trở thành một phần không thể thiếu trong nếp sống và văn hóa của người Việt Nam, mang đến niềm vui và sự tự hào cho biết bao thế hệ người Việt.
                        </p>
                        <img
                            src="https://file.hstatic.net/200000411281/file/fresh_garden04916__1__e6b282e9f98a4ba6840f4296598c8db2_grande.jpg"
                            alt=""
                            style={{ display: "block", margin: "auto" }}
                        />
                        <p style={{ textAlign: "center", paddingTop: "10px", fontStyle: "italic" }}>Hình ảnh bánh trung thu truyền thống 2023 Fresh Garden gửi đến khách hàng</p>
                        <p style={styles.p}>
                            Cầu kỳ trong tất cả các khâu, từ chọn nguyên liệu, làm nhân, đúc vỏ,...để đảm bảo nhân bánh có hương vị tinh tế đồng nhất. Một mặt tạo ra những hương vị truyền thống đặc trưng, mặt khác mang lại những hình dáng thu hút, đẹp mắt. Mỗi chiếc bánh là một thông điệp, một lời chúc ý nhị.
                        </p>
                        <p style={styles.p}>
                            Mùa trăng năm nay, những chiếc bánh truyền thống thơm thảo của Fresh Garden thực sự xứng đáng là thức quà giao hảo, gửi gắm mong ước một Thu như ý, phúc lộc vẹn toàn đến tất cả quý khách hàng.
                        </p>
                        <h1 style={styles.h1}>BST Tuyết Hoa - Hương vị hiện đại giữa giá trị truyền thống</h1>
                        <ul>
                            <p>
                                Điểm nhấn trong BST Thu An năm nay tại Fresh Garden đến từ sự sáng tạo của người nghệ nhân khi kết hợp lớp vỏ bánh làm từ đậu trắng cùng với các nguyên liệu nhân như phô mai; sen trắng; bột cacao cao cấp; hồng trà; muối hồng;... để cho ra đời dòng bánh Tuyết hoa với 6 vị bánh đặc trưng.
                            </p>
                            <p style={styles.p}>
                                Với hàm lượng đường thấp và sử dụng đường rượu Mantitol giúp hương vị của bánh ngọt dịu và phù hợp với những vị khách yêu thích bánh trung thu nhưng vẫn hướng đến lối sống lành mạnh, giữ dáng đẹp da và tốt cho sức khỏe:
                            </p>
                            <li>🥮Bánh Tuyết hoa sen trắng phô mai (ít đường)</li>
                            <li>🥮Bánh Tuyết hoa latte phong lan</li>
                            <li>🥮Bánh Tuyết hoa sen trắng (ít đường)</li>
                            <li>🥮Bánh Tuyết hoa phô mai muối hồng (ít đường)</li>
                            <li>🥮Bánh Tuyết hoa ô long đào trắng (ít đường)</li>
                            <li>🥮Bánh Tuyết hoa khoai môn trứng muối (ít đường)</li>
                        </ul>
                        <img
                            src="https://file.hstatic.net/200000411281/file/fresh_garden05010_744272d534444c9ea280fc971fe7f1ca_grande.jpg"
                            alt=""
                            style={{ display: "block", margin: "auto" }}
                        />
                        <p style={{ textAlign: "center", paddingTop: "10px", fontStyle: "italic" }}>Bánh trung thu trong bộ Tuyết hoa mới ra mắt 2023</p>
                        <p style={styles.p}>
                            Mùa Trung Thu này hãy để Fresh Garden tiếp tục đồng hành cùng bạn trao gửi những món quà thơm thảo, ý nghĩa nhất dành tặng cho người thân yêu nhé!
                        </p>
                        <p>---------</p>
                        <ul>
                            <li>🌎 Website: freshgarden.vn</li>
                            <li>☎  Hotline đặt hàng: 024 3856 3856</li>
                        </ul>
                        <div style={styles.p}>
                            <span>Tags: </span>
                            <a href="" style={styles.a}>bánh trung thu 2023</a>
                            <a href="" style={styles.a}>, bánh trung thu truyền thống</a>
                            <a href="" style={styles.a}>, bánh trung thu hiện đại</a>
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

export default News6;