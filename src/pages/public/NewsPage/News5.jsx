import React, { useState } from "react";
import { Button, Row, Col, Card, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Meta } = Card;
const News5 = () => {
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
                            src="https://file.hstatic.net/200000411281/article/fresh_garden05010_38fef0f8ff9d4427a1485f6d1d47f323_1024x1024.jpg"
                            alt=""
                            style={{ width: "100%", height: "500px" }}
                        />
                        <h1 style={styles.h1}>
                            Top 5 lý do khiến BST Bánh Trung thu cao cấp ít đường của Fresh Garden được yêu thích mùa Trăng này
                        </h1>
                        <h3 style={styles.h3}>Người viết: Vân Haravan lúc 15.09.2023 | Tin tức</h3>
                        <p style={styles.p}>
                            Trung thu được coi là Tết thứ 2 của những người con đất Việt, là giây phút sum vầy với những trông đợi và yêu thương. Cái hồn cái cốt của mùa trăng tròn chính là những chiếc bánh trung thu dẻo thơm, nồng đượm biết bao sự khéo léo, tỉ mỉ của người nghệ nhân làm ra chúng. Khi xã hội ngày càng phát triển, để bắt kịp với xu hướng ẩm thực lành mạnh của khách hàng nhưng vẫn khéo léo gìn giữ những giá trị văn hóa truyền thống, người nghệ nhân của Fresh Garden đã dày công, tỉ mỉ kết hợp hài những nguyên liệu xưa và nay để cho ra mắt dòng Bánh Trung Thu Hiện Đại Ít Đường "Tuyết Hoa".
                        </p>
                        <img
                            src="https://file.hstatic.net/200000411281/file/1_23-01_5bbace20f7f84caa82973014eb57cecf_grande.jpg"
                            alt=""
                            style={{ display: "block", margin: "auto" }}
                        />
                        <p style={{ textAlign: "center", paddingTop: "10px", fontStyle: "italic" }}>Fresh Garden ra mắt bộ sưu tập Tuyết hoa 2023</p>
                        <h1 style={styles.h1}>Mùa Trăng 2023 Fresh Garden có những loại bánh trung thu nào?</h1>
                        <ul>
                            <p>
                                Dòng bánh Trung thu Truyền thống của Fresh Garden bao gồm "Set 02 Bánh Phượng Viên" và "Set 04 Bánh Nguyệt Anh với 21 mã bánh khác nhau:
                            </p>
                            <li>🥮 Bánh nướng nhân kim sa trứng chảy </li>
                            <li>🥮 Bánh nướng nhân hạt sen trắng  </li>
                            <li>🥮 Bánh nướng cao cấp hạt sen táo đỏ  </li>
                            <li>🥮 Bánh nướng nhân khoai môn  </li>
                            <li>🥮 Bánh nướng nhân sữa dừa  </li>
                            <li>🥮 Bánh nướng nhân thập cẩm hạt ngũ vị </li>
                            <li>🥮 Bánh nướng nhân đậu xanh  </li>
                            <li>🥮 Bánh nướng nhân sen nhuyễn hạt chia  </li>
                            <li>🥮 Bánh nướng nhân đậu xanh hạt chia  </li>
                            <li>🥮 Bánh nướng nhân hạt sen 1 trứng  </li>
                            <li>🥮 Bánh nướng nhân khoai môn 1 trứng  </li>
                            <li>🥮 Bánh nướng nhân thập cẩm 1 trứng  </li>
                            <li>🥮 Bánh nướng nhân đậu xanh 1 trứng  </li>
                            <li>🥮 Bánh dẻo nhân đậu xanh lá dứa  </li>
                            <li>🥮 Bánh dẻo nhân hạt sen trắng  </li>
                            <li>🥮 Bánh dẻo nhân khoai môn  </li>
                            <li>🥮 Bánh dẻo nhân đậu xanh  </li>
                            <li>🥮 Bánh dẻo nhân thập cẩm  </li>
                            <li>🥮 Bánh dẻo nhân khoai môn 1 trứng </li>
                        </ul>
                        <img
                            src="https://file.hstatic.net/200000411281/file/ghep_truyen_thong-01_774d8f0656a2478f88a754a348953522_grande.jpg"
                            alt=""
                            style={{ display: "block", margin: "auto" }}
                        />
                        <p style={{ textAlign: "center", paddingTop: "10px", fontStyle: "italic" }}>Hình ảnh thực tế của bánh nướng và bánh dẻo Fresh Garden 2023</p>
                        <ul>
                            <p>
                                Hình ảnh thực tế của bánh nướng và bánh dẻo Fresh Garden 2023
                            </p>
                            <li>🥮Bánh hoa tuyết sen trắng phô mai </li>
                            <li>🥮Bánh hoa tuyết latte phong lan </li>
                            <li>🥮Bánh hoa tuyết sen trắng </li>
                            <li>🥮Bánh hoa tuyết nhan phô mai muối hồng </li>
                            <li>🥮Bánh hoa tuyết ô long đào trắng </li>
                            <li>🥮Bánh hoa tuyết nhân khoai môn trứng muối</li>
                        </ul>
                        <h1 style={styles.h1}>5 lý do không thể bỏ qua bộ sưu tập Bánh Trung thu 2023 của Fresh Garden</h1>
                        <p>
                            1. Sức khỏe tốt hơn: Bánh Trung thu ít đường giúp giảm lượng đường tiêu thụ, là một lựa chọn tốt cho những người muốn kiểm soát cân nặng hoặc người mắc các vấn đề liên quan đến tiểu đường.
                        </p>
                        <p>
                            2. Giảm rủi ro bệnh tim mạch: Việc giảm tiêu thụ đường có thể giúp hạn chế nguy cơ mắc các vấn đề tim mạch như cao huyết áp và bệnh tim.
                        </p>
                        <p>
                            3. Kiểm soát năng lượng: Bánh Trung thu ít đường thường có chỉ số glycemic (GI) thấp hơn, điều này có nghĩa là chúng được phân giải và hấp thụ chậm hơn trong cơ thể, giúp duy trì sự ổn định của nồng độ glucose máu và cung cấp năng lượng kéo dài.
                        </p>
                        <p>
                            4. Hỗ trợ cho việc kiểm soát calo: Bánh Trung thu ít đường thông thường có số calo tổng quan ít hơn so với phiên bản thông thường, điều này có ý nghĩa trong việc duy trì cân nặng và quản lý calo hàng ngày.
                        </p>
                        <p>
                            5. Lựa chọn phù hợp cho người có chế độ ăn đặc biệt: Bánh Trung thu ít đường thường được làm từ các thành phần thay thế như đường thay bằng các loại tinh bột tự nhiên hoặc các loại đường không calo, là một sự lựa chọn tốt cho những người tuân theo chế độ ăn kiêng hoặc có yêu cầu dinh dưỡng riêng.
                        </p>
                        <img
                            src="https://file.hstatic.net/200000411281/file/ghep_tuyet_hoa_1_c7b74a7aefd44b04a4e79aa50a09aec2_grande.jpg"
                            alt=""
                            style={{ display: "block", margin: "auto" }}
                        />
                        <p style={{ textAlign: "center", paddingTop: "10px", fontStyle: "italic" }}>Bánh Tuyết hoa ít đường Fresh Garden 2023</p>
                        <h1 style={styles.h1}>VŨ KHÚC HẠT VÀNG</h1>
                        <p>
                            Với những lợi ích tuyệt vời này, bánh trung thu ít đường của Fresh Garden đã chinh phục được trái tim của khách hàng ngay từ ngày đầu ra mắt. Để nhận tư vấn về sản phẩm, hãy liên hệ qua fanpage hoặc hotline thương hiệu.
                        </p>
                        <div>
                            <span>Đừng quên đặt bánh tại: </span>
                            <a href="" style={styles.a}>https://banhtrungthu.freshgarden.vn/</a>
                        </div>
                        <p>---------</p>
                        <ul>
                            <li>🌎 Website: freshgarden.vn</li>
                            <li>☎  Hotline đặt hàng: 024 3856 3856</li>
                        </ul>
                        <div style={styles.p}>
                            <span>Tags: </span>
                            <a href="" style={styles.a}>bánh trung thu 2023</a>
                            <a href="" style={styles.a}>, bánh trung thu hiện đại</a>
                            <a href="" style={styles.a}>, bánh trung thu truyền thống</a>
                            <a href="" style={styles.a}>, bánh trung thu</a>
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

export default News5;