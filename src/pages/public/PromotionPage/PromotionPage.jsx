import React, { useState } from "react";
import { Button, Row, Col, Card, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Meta } = Card;
const PromotionPage = () => {
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
                        Tin khuyến mãi
                    </div>
                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                            <Link to="/blogs/khuyen_mai1">
                                <Card
                                    hoverable
                                    style={{
                                        width: "120%",
                                    }}
                                    cover={
                                        <img
                                            alt="example"
                                            src="https://file.hstatic.net/200000411281/article/317455529_919870362730514_218592754932138591_n_9394a10f56b845a183d7c3c26b7dfda4.jpg"
                                        />
                                    }
                                >
                                    <Meta
                                        title="Mua bánh thả ga - Freeship có Fresh Garden lo"
                                        description="Mua bánh thả ga - Freeship có Fresh Garden lo🛵"
                                    />
                                </Card>
                            </Link>
                        </Col>
                        <Col span={12}>
                            <Link to="/blogs/khuyen_mai2">
                                <Card
                                    hoverable
                                    style={{
                                        width: "120%",
                                        marginLeft: "100px",
                                    }}
                                    cover={
                                        <img
                                            alt="example"
                                            src="https://file.hstatic.net/200000411281/article/30_1_71815ec0a70b4bcaab7c6474458277db.jpg"
                                        />
                                    }
                                >
                                    <Meta
                                        title="Ưu đãi 30% cho bánh tươi Fresh Garden"
                                        description="⚡️𝗧𝗶𝗻𝗴 𝗧𝗶𝗻𝗴 ⚡️Ưu đãi 30% cho bánh tươi Fresh Garden"
                                    />
                                </Card>
                            </Link>
                        </Col>
                        <Col span={12}>
                            <Link to="/blogs/khuyen_mai3">
                                <Card
                                    hoverable
                                    style={{
                                        width: "120%",
                                    }}
                                    cover={
                                        <img
                                            alt="example"
                                            src="https://file.hstatic.net/200000411281/article/1-1_3167e081756f403284c75f235712fb36.jpg"
                                        />
                                    }
                                >
                                    <Meta
                                        title="Mua 1 tặng 1 - Tặng 01 trà đào/ trà sữa thạch khi mua 1 bánh tươi"
                                        description="Mua 1 tặng 1 - Tặng 01 trà đào/ trà sữa thạch khi mua 1 bánh tươi."
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

export default PromotionPage