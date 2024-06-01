import React, { useState } from "react";
import { Button, Row, Col, Card, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Meta } = Card;
const News3 = () => {
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
                            src="https://file.hstatic.net/200000411281/article/bcbcbcvc-01_197f0fec099e485fb95862fee26c6316_1024x1024.jpg"
                            alt=""
                            style={{ width: "100%", height: "500px" }}
                        />
                        <h1 style={styles.h1}>
                            BST bánh kem chào mừng ngày Phụ nữ Việt Nam
                        </h1>
                        <h3 style={styles.h3}>Người viết: THÂN HOÀI NGHIÊM lúc 12.10.2023 | Tin tức</h3>
                        <p style={{ paddingTop: " 10px", lineHeight: "21px", fontSize: "14px", fontStyle: "italic" }}>
                            Nếu một ngày bạn cảm thấy thật khó để nói ra lời yêu thương dành cho người phụ nữ bên cạnh, hãy để những đóa hoa trong khu vườn bánh kem ngọt ngào của Fresh Garden thay lời muốn nói.
                        </p>
                        <p style={styles.p}>
                            Bạn biết không, ẩn sâu phía sau những tâm hồn đầy gai góc, những vất vả hi sinh, mỗi người phụ nữ xung quanh chúng ta đều là một bông hoa rực rỡ yêu kiều. Bộ sưu tập bánh kem Fresh Garden gửi tặng các nàng nhân dịp Phụ nữ Việt Nam mang vẻ đẹp từ những đóa hoa ngọt ngào hứa hẹn là món quà làm "siêu lòng" mọi cô gái.
                        </p>
                        <h1 style={styles.h1}>Flower of love - Đóa hoa được chăm chút từ yêu thương</h1>
                        <img
                            src="https://file.hstatic.net/200000411281/file/dsc02666_5f9c4ef01f7c494892926d64378a8553_grande.jpg"
                            alt=""
                            style={{ display: "block", margin: "auto" }}
                        />
                        <p style={{ textAlign: "center", paddingTop: "10px", fontStyle: "italic" }}>Hình ảnh bánh kem Flower of love</p>
                        <p style={styles.p}>
                            Một bông hoa đẹp là khi được quan tâm và chăm chút mỗi ngày, người phụ nữ bên cạnh chúng ta cũng vậy. Đôi khi vì vẻ ngoài gai góc, những cá tính mạnh mẽ và việc quá quen với hình ảnh người phụ nữ dịu dàng luôn ở bên cạnh mà chúng ta quên mất người phụ nữ ấy cũng cần được yêu thương, trân trọng.
                        </p>
                        <p style={styles.p}>
                            Flower of love lấy ý tưởng từ những đóa hoa yêu thương với lớp cốt chiffon hoa quả khô hỗn hợp nhân kem tươi bắt lưỡi, nhẹ nhàng trang trí hoa kem tươi. Không cầu kỳ, chiếc bánh như một đóa hoa nở rộ dưới nắng thu dịu dàng giống như vẻ đẹp của người phụ nữ dù trong hoàn cảnh nào cũng hiền dịu, yêu thương.
                        </p>
                        <h1 style={styles.h1}>Princess - Nàng công chúa của tôi</h1>
                        <img
                            src="https://file.hstatic.net/200000411281/file/2010-02_12251190a7bb4957a19d91aedd3f5d7b_grande.jpg"
                            alt=""
                            style={{ display: "block", margin: "auto" }}
                        />
                        <p style={{ textAlign: "center", paddingTop: "10px", fontStyle: "italic" }}>Hình ảnh bánh kem Princess</p>
                        <p style={styles.p}>
                            Khi được chăm chút và yêu thương, người phụ nữ của chúng ta sẽ tỏa sáng như một nàng công chúa. Nàng công chúa ấy có lúc vui cười tinh nghịch, cũng có lúc lắng đọng suy tư. Nhưng dù thế nào, cô gái ấy vẫn thật sự xinh đẹp. Mỗi một bông hoa trên chiếc bánh Princess cốt chiffon vani như thể hiện một khía cạnh cảm xúc của người phụ nữ, nhưng bạn nhìn xem, chẳng phải chúng vẫn thật xinh đẹp hay sao.
                        </p>
                        <h1 style={styles.h1}>Endless love - Tình yêu vĩnh cửu</h1>
                        <img
                            src="https://file.hstatic.net/200000411281/file/4_79ae5e56ca0e477091777d63f95d6083_grande.jpg"
                            alt=""
                            style={{ display: "block", margin: "auto" }}
                        />
                        <p style={{ textAlign: "center", paddingTop: "10px", fontStyle: "italic" }}>Hình ảnh bánh kem Endless love</p>
                        <p style={styles.p}>
                            Trong khu vườn yêu thương Fresh Garden chăm chút, có một Endless love tượng trưng cho tình yêu vĩnh cửu. Nhẹ nhàng với lớp hoa kem trang trí màu sắc trang nhã, lớp cốt chiffon vani nhân cocktail hoa quả ngon ngọt dễ chịu, Endless love sẽ là món quà mang đến niềm vui và hạnh phúc bất ngờ cho mọi cô gái.
                        </p>
                        <h1 style={styles.h1}>Lời kết</h1>
                        <p style={styles.p}>
                            BST bánh kem mới của Fresh Garden ra mắt chính là món quà tuyệt vời để bày tỏ tình cảm của bạn đối với người phụ nữ quan trọng trong cuộc đời. Mang diện mạo mới, "thơ" hơn, ngọt ngào hơn, lớp cốt chiffon bồng bềnh cùng lớp kem tươi dịu ngọt sẵn sàng chiều lòng những thực khách xinh đẹp trong dịp đặc biệt - ngày Phụ nữ Việt Nam sắp tới. Fresh Garden hy vọng người bà, người mẹ, người vợ, người chị/ em gái tuyệt vời của bạn sẽ tạm gác những bộn bề lo lắng, những hy sinh thầm lặng để rạng rỡ đầy sức sống như đóa phù dung khoe sắc dưới nắng thu dịu dàng. Mùa yêu thương năm nay cùng Fresh Garden bày tỏ tình yêu đến những đóa hoa bên cạnh bạn nhé!
                        </p>
                        <p>---------</p>
                        <ul>
                            <li>🌎 Website: freshgarden.vn</li>
                            <li>☎  Hotline đặt hàng: 024 3856 3856</li>
                        </ul>
                        <div style={styles.p}>
                            <span>Tags: </span>
                            <a href="" style={styles.a}>bánh kem</a>
                            <a href="" style={styles.a}>, quà tặng 20/10</a>
                            <a href="" style={styles.a}>, ngày Phụ nữ Việt Nam</a>
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

export default News3;