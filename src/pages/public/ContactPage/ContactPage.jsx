import React, { useState } from "react";
import { Button, Row, Col, Card, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const ContactPage = () => {
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
            link: "/blogs/khuyen_mai1",
        },
        {
            title: "Ưu đãi 30% cho bánh tươi Fresh Garden",
            description: "22.03.2023",
            image:
                "https://file.hstatic.net/200000411281/article/30_1_71815ec0a70b4bcaab7c6474458277db_large.jpg",
            link: "/blogs/khuyen_mai2",
        },
        {
            title:
                "Mua 1 tặng 1 - Tặng 01 trà đào/ trà sữa thạch khi mua 1 bánh tươi",
            description: "22.03.2023",
            image:
                "https://file.hstatic.net/200000411281/article/1-1_3167e081756f403284c75f235712fb36_large.jpg",
            link: "/blogs/khuyen_mai3",
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
            paddingTop: " 10px",
            lineHeight: "21px",
            fontSize: "14px",
        },

        p: {
            paddingTop: " 10px",
            lineHeight: "21px",
            fontSize: "14px",
        },
        ul: {
            listStyleType: "disc",
            paddingLeft: "20px",
            paddingTop: "10px",
            lineHeight: "1.8",
            fontSize: "14px",
        },

        a: {
            opacity: 0.8,
            fontStyle: "italic",
            fontSize: "14px",
            color: "#4B494E",
            outLine: "none",
        },
    };

    const menu = (
        <Menu>
            {cards.map((card, index) => (
                <Menu.Item key={index}>
                    <Link
                        to={card.link}
                        style={{ display: "flex", alignItems: "center", width: 300 }}
                    >
                        <img
                            src={card.image}
                            alt="card"
                            style={{ width: 50, height: 50, marginRight: 10 }}
                        />
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
                        <h1 style={styles.h1}>Liên hệ</h1>
                        <h3>
                            <b>CÔNG TY TNHH PHD</b>
                        </h3>
                        <p style={styles.p}>
                            Địa chỉ: 46 An Dương, Yên Phụ, Tây Hồ, Hà Nội
                        </p>
                        <p style={styles.p}>Email: cskh@freshgarden.vn</p>
                        <p style={styles.p}>Website: www.freshgarden.vn</p>
                        <h3 style={styles.h3}>
                            <b>HOTLINE</b>
                        </h3>
                        <p style={styles.p}>Hotline đặt hàng miền Bắc: 024 3856 3856</p>
                        <p style={styles.p}>Hotline đặt hàng miền Nam: 028 3950 0856</p>
                        <p style={styles.p}>Hotline CSKH: 19002075</p>
                        <h3 style={styles.h3}>
                            <b>HỆ THỐNG CỬA HÀNG</b>
                        </h3>
                        <ul style={styles.ul}>
                            <li>
                                CH 71 Nguyễn An Ninh - Số 71 Nguyễn An Ninh, Tương Mai, Hoàng
                                Mai, Hà Nội - (024) 3856 3856 (361)
                            </li>
                            <li>
                                CH Vinhomes Symphony - 1S03 Tầng 1, Tòa S2 Khu đô thị Vinhomes
                                Symphony, Sài Đồng, Long Biên, Hà Nội - (024) 3856 3856(352)
                            </li>
                            <li>
                                CH 58 Nguyễn Khuyến - Số 58 Nguyễn Khuyến, Văn Quán, Hà Đông, Hà
                                Nội - (024) 3856 3856(359)
                            </li>
                            <li>
                                CH 53 Kim Đồng - Sô 53 Kim Đồng, Hoàng Mai, Hà Nội - (024) 3856
                                3856(358)
                            </li>
                            <li>
                                CH 7 Ngã tư Trôi - Sô 4 khu 7 Ngã tư Trôi, Hoài Đức, Hà Nội -
                                (024) 3856 3856(357)
                            </li>
                            <li>
                                CH 34 Hoàng Cầu - 34 Hoàng Cầu, Ô Chợ Dừa, quận Đống Đa, Hà Nội
                                - (024) 3856 3856(356)
                            </li>
                            <li>
                                CH 247 Xã Đàn - 324 Xã Đàn, quận Đống Đa, Hà Nội - (024) 3856
                                3856(329)
                            </li>
                            <li>
                                CH 102 Chiến Thắng - Số 102 đường Chiến Thắng, Hà Đông, Hà Nội -
                                (024) 3856 3856(355)
                            </li>
                            <li>
                                CH 6 Tông Đản - Số 6 Tông Đản, Hoàn Kiếm Hà Nội - (024) 3856
                                3856(304)
                            </li>
                            <li>
                                CH 6 Times City - Tòa nhà T6 Times City, số 458 Minh Khai, Hai
                                Bà Trưng, Hà Nội - (024) 3856 3856(309)
                            </li>
                            <li>
                                CH 46 An Dương - Số 46 An Dương, Tây Hồ, Hà Nội - (024) 3856
                                3856(351)
                            </li>
                            <li>
                                CH 4 Nguyễn Văn Lộc - Số nhà 19-16B4 Nguyễn Văn Lộc, Mỗ Lao, Hà
                                Đông, Hà Nội - (024) 3856 3856(353)
                            </li>
                            <li>
                                CH 4 Tôn Thất Tùng - Số 112 B4 Tông Thất Tùng, Đống Đa, Hà Nội -
                                (024) 3856 3856(327)
                            </li>
                            <li>
                                CH Green Bay - Tầng 1, tòa G2, KĐT Vinhomes Green Bay Mễ Trì,
                                Nam Từ Liên, Hà Nội - (024) 3856 3856(303)
                            </li>
                            <li>
                                CH Vinmec Times City - Tầng 1 Bệnh viện Vinmec Times City, số
                                458 Minh Khai, Hai Bà Trưng, Hà Nội - (024) 3856 3856(312)
                            </li>
                            <li>
                                CH 44 Nguyễn Khánh Toàn - Số 44 Nguyễn Khánh Toàn, Dịch Vọng,
                                Cầu Giấy, Hà Nội - (024) 3856 3856(323)
                            </li>
                            <li>
                                CH 110 Thái Thịnh - Số 110 Thái Thịnh, Đống Đa, Hà Nội - (024)
                                3856 3856(346)
                            </li>
                            <li>
                                CH Vinuni Oceanpark - Trường đại học VinUni Ocean Park, Gia Lâm,
                                Hà Nội - (024) 3856 3856(348)
                            </li>
                            <li>
                                CH 140 Lê Trọng Tấn - Số 140 Lê Trọng Tấn, Thanh Xuân, Hà Nội -
                                (024) 3856 3856(347)
                            </li>
                            <li>
                                CH 183 Tô Hiệu - Số 183 Tô Hiệu, Cầu Giấy, Hà Nội - (024) 3856
                                3856(315)
                            </li>
                            <li>
                                CH 47 Lò Đúc - Số 47 Lò Đúc, Hai Bà Trưng, Hà Nội - (024) 3856
                                3856(305)
                            </li>
                            <li>
                                CH Vinschool tiểu học Times City - Trường tiểu học Vinschool,
                                KĐT Times City, 458 Minh Khai, Hai Bà Trưng, Hà Nội - (024) 3856
                                3856(310/311)
                            </li>
                            <li>
                                CH 103 Kim Đồng - Số 103 Kim Đồng, Hoàng Mai, Hà Nội - (024)
                                3856 3856(358)
                            </li>
                            <li>
                                CH 20C Trần Duy Hưng - 20C Trần Duy Hưng, Cầu Giấy, Hà Nội -
                                (024) 3856 3856(340)
                            </li>
                            <li>
                                CH 1B Linh Đàm - Kiốt 4 HH1B, khu đô thị Linh Đàm, Hoàng Mai, Hà
                                Nội - (024) 3856 3856(334)
                            </li>
                            <li>
                                CH 41 Âu Cơ - Số 41 Âu Cơ, Tây Hồ, Hà Nội -(024) 3856 3856(336)
                            </li>
                            <li>
                                CH Ki ốt Bệnh viện E Trần Cung - Bệnh viện E, 89 Trần Cung, Cầu
                                Giấy, Hà Nội - (024) 3856 3856(318)
                            </li>
                            <li>
                                CH 111 Núi Trúc - Số 109 Núi Trúc, Ba Đình, Hà Nội - (024) 3856
                                3856(321)
                            </li>
                            <li>
                                CH 12A Kim Văn Kim Lũ - Tầng 1, tòa CT12A khu đô thị Kim Văn Kim
                                Lũ, Hoàng Mai, Hà Nội - (024) 3856 3856(345)
                            </li>
                            <li>
                                CH 2 Nội bài (Westwing) - Tầng 3, cánh Tây, ga đi Quốc Tế T2,
                                sân bay Nội Bài - (024) 3856 3856(314)
                            </li>
                            <li>
                                CH 2 Nội bài (Eastwing) - Tầng 3, cánh Đông, ga đi Quốc Tế T2,
                                sân bay Nội Bài - (024) 3856 3856(313)
                            </li>
                            <li>
                                CH 9 Doãn Kế Thiện - Số 9 Doãn Kế Thiện, Cầu Giấy, Hà Nội -
                                (024) 3856 3856(316)
                            </li>
                            <li>
                                CH Vinschool liên cấp Times City - Trường liên cấp Vinschool,
                                KĐT Times City, 458 Minh Khai, Hai Bà Trưng, Hà Nội - (024) 3856
                                3856(211)
                            </li>
                            <li>
                                CH 440 Bạch Mai - Số 440 Bạch Mai, Hai Bà Trưng, Hà Nội - (024)
                                3856 3856(308)
                            </li>
                            <li>
                                CH Nguyễn Hoàng - Số 36 Nguyễn Hoàng, Mỹ Đình, Hà Nội - (024)
                                3856 3856(354)
                            </li>
                            <li>
                                CH 65 Nguyễn Chí Thanh - Số 65 Nguyễn Chí Thanh, Đống Đa, Hà Nội
                                - (024) 3856 3856(324)
                            </li>
                            <li>
                                CH 65 Lạc Long Quân - Số 65 Lạc Long Quân, Tây Hồ, Hà Nội -
                                (024) 3856 3856(326)
                            </li>
                            <li>
                                CH 1 Nội Bài - Tầng 1, cánh B, ga đi Nội địa T1, sân bay quốc tế
                                Nội Bài - (024) 3856 3856(337)
                            </li>
                            <li>
                                CH 76 Kim Ngưu - Số 76 Kim Ngưu, Hai Bà Trưng, Hà Nội - (024)
                                3856 3856(306)
                            </li>
                            <li>
                                CH 32 Trần Thái Tông - Số 32 Trần Thái Tông, Cầu Giấy, Hà Nội -
                                (024) 3856 3856(341)
                            </li>
                            <li>
                                CH Vinschool Metropolis - Trường liên cấp Vinschool Metropolis,
                                29 Liễu Giai, Ba Đình, Hà Nội - (024) 3856 3856()
                            </li>
                            <li>
                                CH 36 Time City - KĐT Time City - Hai Bà Trưng - Hà Nội - (024)
                                3856 3856(310)
                            </li>
                            <li>
                                CH Vinschool liên cấp Sài Đồng - Trường liên cấp Vinschool
                                Harmony, đường Chu Huy Mân, Long Biên, Hà Nội - (024) 3856
                                3856(343)
                            </li>
                            <li>
                                CH 42 Nguyễn Sơn - Số 42 Nguyễn Sơn, Long Biên, Hà Nội - (024)
                                3856 3856(350)
                            </li>
                            <li>
                                CH Hàng Cót - Số 16 Hàng Cót, Hoàn Kiếm, Hà Nội - (024) 3856
                                3856(301)
                            </li>
                            <li>
                                CH 430 Vạn Phúc - Tầng 1, tòa nhà Goldsilk Vạn Phúc, 340 Cầu Am,
                                Hà Đông, Hà Nội -(024) 3856 3856(344)
                            </li>
                            <li>
                                CH 11 Xa La - Số 18 Biệt thự 11 khu đô thị Xa La, Hà Đông, Hà
                                Nội - (024) 3856 3856(339)
                            </li>
                            <li>
                                CH 2 Phạm Ngọc Thạch - Số 112 C2 Phạm Ngọc Thạch, Đống Đa, Hà
                                Nội - (024) 3856 3856(328)
                            </li>
                            <li>
                                CH Bệnh viện E - Cafe - Bệnh viện E, 89 Trần Cung, Cầu Giấy, Hà
                                Nội - (024) 3856 3856(319)
                            </li>
                            <li>
                                CH 20 Láng Hạ - Số 20 Láng Hạ, Đống Đa, Hà Nội - (024) 3856
                                3856(322)
                            </li>
                            <li>
                                CH Vinschool Tiểu học Sài Đồng - Trường tiểu học Vinschool
                                Harmony, đường Chu Huy Mân, Long Biên, Hà Nội - (024) 3856
                                3856(349)
                            </li>
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

export default ContactPage;