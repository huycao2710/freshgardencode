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
            title: "Fresh Garden kỷ niệm 12 năm sinh nhật diệu kỳ",
            description: "09.12.2022",
            image:
                "https://file.hstatic.net/200000411281/article/bai_post-01_47db187bd342490eaf367a8a664fd763.jpg",
            link: "/tintuc/tintuc2"
        },
        {
            title: "Thị trường quà tết 2023: Đột phá sản phẩm thương hiệu Việt",
            description: "16.12.2022",
            image:
                "https://file.hstatic.net/200000411281/article/untitled-2-01_9a2c857598044033aae0c06c6f059d36.jpg",
            link: "/tintuc/tintuc3"
        },
        {
            title: "Bánh mì kẹp Fresh Garden - Bữa ăn nhanh, dinh dưỡng, tiện lợi",
            description: "13.04.2023",
            image:
                "https://file.hstatic.net/200000411281/article/z4260566825059_c35a2d4218b898819746af5588e2907f_1b1cbab703054ce294efeaa12484e987.jpg",
            link: "/tintuc/tintuc4"
        },
        {
            title: "Top 5 lý do khiến BST Bánh Trung thu cao cấp ít đường",
            description: "15.09.2023",
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
                                        description="Tết và giá trị truyền thống tốt đẹp của Tết luôn thường trực trong tâm thức người Việt. Tết là cành đào phai, câu đối đỏ bên hộp quà thấm đượm..."
                                    />
                                </Card>
                            </Link>
                        </Col>
                        <Col span={12}>
                            <Link to="/tintuc/tintuc2">
                                <Card
                                    hoverable
                                    style={{
                                        width: "120%",
                                        marginLeft: "100px",
                                    }}
                                    cover={
                                        <img
                                            alt="example"
                                            src="https://file.hstatic.net/200000411281/article/bai_post-01_47db187bd342490eaf367a8a664fd763.jpg"
                                        />
                                    }
                                >
                                    <Meta
                                        title="Fresh Garden kỷ niệm 12 năm sinh nhật diệu kỳ"
                                        description="Nhân dịp kỷ niệm sinh nhật năm thứ 12, thương hiệu bánh tươi mỗi ngày - Fresh Garden mang đến chương trình khuyến mại"
                                    />
                                </Card>
                            </Link>
                        </Col>
                        <Col span={12}>
                            <Link to="/tintuc/tintuc3">
                                <Card
                                    hoverable
                                    style={{
                                        width: "120%",
                                    }}
                                    cover={
                                        <img
                                            alt="example"
                                            src="https://file.hstatic.net/200000411281/article/untitled-2-01_9a2c857598044033aae0c06c6f059d36.jpg"
                                        />
                                    }
                                >
                                    <Meta
                                        title="Thị trường quà tết 2023: Đột phá sản phẩm thương hiệu Việt"
                                        description="Năm 2023 được nhận định là một năm có nhiều sự thay đổi trong thị trường quà tết. "
                                    />
                                </Card>
                            </Link>
                        </Col>
                        <Col span={12}>
                            <Link to="/tintuc/tintuc4">
                                <Card
                                    hoverable
                                    style={{
                                        width: "120%",
                                        marginLeft: "100px",
                                    }}
                                    cover={
                                        <img
                                            alt="example"
                                            src="https://file.hstatic.net/200000411281/article/z4260566825059_c35a2d4218b898819746af5588e2907f_1b1cbab703054ce294efeaa12484e987.jpg"
                                        />
                                    }
                                >
                                    <Meta
                                        title="Bánh mì kẹp Fresh Garden - Bữa ăn nhanh, dinh dưỡng, tiện lợi"
                                        description="Fresh Garden là một trong những thương hiệu bánh ngon đã đốn tim hàng triệu thực khách. "
                                    />
                                </Card>
                            </Link>
                        </Col>
                        <Col span={12}>
                            <Link to="/tintuc/tintuc5">
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
                                        description="Trung thu được coi là Tết thứ 2 của những người con đất Việt, là giây phút sum vầy với những trông đợi..."
                                    />
                                </Card>
                            </Link>
                        </Col>
                        <Col span={12}>
                            <Link to="/tintuc/tintuc6">
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