import React, { useState } from "react";
import { Button, Row, Col, Card, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Meta } = Card;
const NewsPage = () => {
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
            <Col span={9} style={{ margin: "0 auto" }}>
                <CardContainer>
                    <div
                        style={{
                            fontSize: "30px",
                            fontWeight: "700",
                            marginBottom: "30px",
                            fontFamily: "Montserrat, sans-serif",
                        }}
                    >
                        Tin tức
                    </div>
                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                            <Link to="/tintuc/tintuc1">
                                <Card
                                    hoverable
                                    style={{
                                        width: "120%",
                                    }}
                                    cover={
                                        <img
                                            alt="example"
                                            src="https://file.hstatic.net/200000411281/article/fg_1518_712856a8ddf34e04981f0af64bc2c6ca.jpg"
                                        />
                                    }
                                >
                                    <Meta
                                        title="[BST QÙA TẾT 2024] Gieo xuân an nhiên cùng Fresh Garden"
                                        description="Tết và giá trị truyền thống tốt đẹp của Tết luôn thường trực trong tâm thức người Việt. Tết là cành đào phai, câu đối đỏ bên hộp quà thấm đượm yêu thương."
                                    />
                                </Card>
                            </Link>
                        </Col>
                        <Col span={12}>
                            <Link to="/new/tin2">
                                <Card
                                    hoverable
                                    style={{
                                        width: "120%",
                                        marginLeft: "100px",
                                    }}
                                    cover={
                                        <img
                                            alt="example"
                                            src="https://file.hstatic.net/200000411281/article/cover_23333-01_584a3e3a11584187bce2822d1b9f0146.jpg"
                                        />
                                    }
                                >
                                    <Meta
                                        title="Khám Phá Điều Bí Ẩn Ngọt Ngào Đêm Halloween Tại Fresh Garden"
                                        description="Vẫn là bánh kem cốt chiffon bồng bềnh ngọt ngào nhưng được khoác lên diện mạo ma mị và huyền bí hơn, bạn đã sẵn sàng tận hưởng bữa tiệc Halloween ma quái cùng Fresh Garden?"
                                    />
                                </Card>
                            </Link>
                        </Col>
                        <Col span={12}>
                            <Link to="/new/tin3">
                                <Card
                                    hoverable
                                    style={{
                                        width: "120%",
                                    }}
                                    cover={
                                        <img
                                            alt="example"
                                            src="https://file.hstatic.net/200000411281/article/bcbcbcvc-01_197f0fec099e485fb95862fee26c6316.jpg"
                                        />
                                    }
                                >
                                    <Meta
                                        title="BST bánh kem chào mừng ngày Phụ nữ Việt Nam"
                                        description="Nếu một ngày bạn cảm thấy thật khó để nói ra lời yêu thương dành cho người phụ nữ bên cạnh, hãy để những đóa hoa trong khu vườn bánh kem ngọt ngào của Fresh Garden thay lời muốn nói."
                                    />
                                </Card>
                            </Link>
                        </Col>
                        <Col span={12}>
                            <Link to="/new/tin4">
                                <Card
                                    hoverable
                                    style={{
                                        width: "120%",
                                        marginLeft: "100px",
                                    }}
                                    cover={
                                        <img
                                            alt="example"
                                            src="https://file.hstatic.net/200000411281/article/299849_31-8-den_trung_thu_7a66288cbeee4adc8bc14d4c3c3b985a.jpg"
                                        />
                                    }
                                >
                                    <Meta
                                        title="Bạn đã biết ý nghĩa của ngày Tết Trung thu?"
                                        description="Tết Trung thu theo Âm lịch là ngày rằm tháng 8 hằng năm. Đây là ngày lễ được các em nhỏ vô cùng yêu thích và còn được biết đến với tên gọi khác là Tết trông trăng,"
                                    />
                                </Card>
                            </Link>
                        </Col>
                        <Col span={12}>
                            <Link to="/new/tin5">
                                <Card
                                    hoverable
                                    style={{
                                        width: "120%",
                                    }}
                                    cover={
                                        <img
                                            alt="example"
                                            src="https://file.hstatic.net/200000411281/article/fresh_garden05010_38fef0f8ff9d4427a1485f6d1d47f323.jpg"
                                        />
                                    }
                                >
                                    <Meta
                                        title="Top 5 lý do khiến BST Bánh Trung thu cao cấp ít đường của Fresh Garden được yêu thích mùa Trăng này"
                                        description="Trung thu được coi là Tết thứ 2 của những người con đất Việt, là giây phút sum vầy với những trông đợi và yêu thương. Cái hồn cái cốt của mùa trăng tròn chính là những chiếc bánh trung thu dẻo thơm"
                                    />
                                </Card>
                            </Link>
                        </Col>
                        <Col span={12}>
                            <Link to="/new/tin6">
                                <Card
                                    hoverable
                                    style={{
                                        width: "120%",
                                        marginLeft: "100px",
                                    }}
                                    cover={
                                        <img
                                            alt="example"
                                            src="https://file.hstatic.net/200000411281/article/fresch_garden05596_0eb0ceec52324ae9b0ffec4d871bc54b.jpg"
                                        />
                                    }
                                >
                                    <Meta
                                        title="ĐÓN MÙA TRĂNG 2023 VỚI BST THU AN CỦA FRESH GARDEN"
                                        description="Lấy cảm hứng từ những giá trị truyền thống của Việt Nam kết hợp cùng nghệ thuật kiến trúc lâu đời,"
                                    />
                                </Card>
                            </Link>
                        </Col>
                    </Row>
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

export default NewsPage;