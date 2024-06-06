import React, { useState } from "react";
import { Button, Row, Col, Card, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Meta } = Card;
const News4 = () => {
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
            <Col span={12} style={{ margin: "0 0 0 200px" }}>
                <CardContainer>
                    <div>
                        <img
                            src="https://file.hstatic.net/200000411281/article/z4260566825059_c35a2d4218b898819746af5588e2907f_1b1cbab703054ce294efeaa12484e987_1024x1024.jpg"
                            alt=""
                            style={{ width: "100%", height: "500px" }}
                        />
                        <h1 style={styles.h1}>
                            Bánh mì kẹp Fresh Garden - Bữa ăn nhanh, dinh dưỡng, tiện lợi
                        </h1>
                        <h3 style={styles.h3}>Người viết: CSKH10 lúc 13.04.2023  Tin tức</h3>
                        <p style={styles.p}>
                            Fresh Garden là một trong những thương hiệu bánh ngon đã đốn tim hàng triệu thực khách. Trong đó, bánh mì kẹp được hầu hết mọi người ưa thích bởi dinh dưỡng và sự tiện dụng nhanh chóng cho bữa ăn. Với những loại bánh mì kẹp đa dạng và phong phú như bánh mì kẹp như pate, thập cẩm, chả, gà Teriyaki và xá xíu, hãy cùng chúng mình tìm hiểu nét đặc trưng của từng món bánh này nhé!
                        </p>
                        <img
                            src="https://lh4.googleusercontent.com/Mcq6jzB8uNPUiyApk9TIpVVK8FgWqSnkC3xDmXq8XBICFadi92KUPw1QRF3KKzMhWV_0PTvesCaiFM9LYW_7SyZESwLO8kAT1ZZi1zA5d_nauZyV74WaHqVWGi3bnDeIAJTD_5m18LsJPqeih_T1N7s"
                            alt=""
                            style={{ display: "block", margin: "auto" }}
                        />
                        <p style={{ textAlign: "center", paddingTop: "10px", fontStyle: "italic" }}>Bánh mì kẹp Fresh Garden là lựa chọn của nhiều khách hàng</p>
                        <h1 style={styles.h1}>Fresh Garden: Bánh tươi mỗi ngày</h1>
                        <p>
                            Với tiêu chí đặt chất lượng sản phẩm lên hàng đầu, Fresh Garden sử dụng nguyên liệu tươi ngon, đảm bảo quy trình sản xuất và chế biến đúng tiêu chuẩn, để tạo ra những sản phẩm bánh mì kẹp thơm ngon, bổ dưỡng và an toàn cho sức khỏe của khách hàng.
                        </p>
                        <img
                            src="https://lh3.googleusercontent.com/XNlr1HcxN-fAW44y1oOzyhZjXg1O9w8JAgwNeO7UoK2mqe45Z0LI9g-VBghY7sQrf3Ol0N7hKTfVjFHZzuD6Ci_SQssGtJs6eR-yNnrMUsaubymwx_muIWDOGCMaWoJeDnFcPLiODGdvgPnOsayBepA"
                            alt=""
                            style={{ display: "block", margin: "auto" }}
                        />
                        <p style={{ textAlign: "center", paddingTop: "10px", fontStyle: "italic" }}>Không chỉ nổi tiếng với các sản phẩm bánh kem, Fresh Garden còn có thực đơn bánh mì kẹp hấp dẫn</p>
                        <p style={styles.p}>
                            Đội ngũ nhân viên nhiệt tình và chuyên nghiệp, Fresh Garden cam kết mang đến cho khách hàng những trải nghiệm ẩm thực tuyệt vời, cùng với dịch vụ khách hàng chất lượng cao. Cùng chúng mình tìm hiểu kĩ hơn về các món bánh mì nhanh tiện dụng tại Fresh Garden nhé!
                        </p>
                        <h1 style={styles.h1}>Bánh mì kẹp pate</h1>
                        <p>
                            Bánh mì kẹp pate của Fresh Garden là sự kết hợp tuyệt vời giữa bánh mì nóng giòn và lớp pate mềm mịn, thơm ngon bên trong. Những thành phần chính của bánh mì kẹp pate tại Fresh Garden là bánh mì, pate và nộm chua ngọt, được chế biến và trang trí tinh tế để tạo nên một sản phẩm bánh mì kẹp đẹp mắt, hấp dẫn và đầy hương vị.
                        </p>
                        <img
                            src="https://lh6.googleusercontent.com/DitIoEBcTViZ5JVbxltLGnSyZwYsDmttZEaj7mcvqyjvg3WvamwPIoHmrRLiJrFE4VVHZq7APor7RVxL6LPJ63Gtrsk8ozdZkrzZWmgVUactCvth6jc2-GgFn_8tIvCw-s45u4LKWeoEx6eIKP9iRi8"
                            alt=""
                            style={{ display: "block", margin: "auto" }}
                        />
                        <p style={{ textAlign: "center", paddingTop: "10px", fontStyle: "italic" }}>Pate là vị bánh mì kẹp được nhiều khách hàng yêu thích tại Fresh Garden</p>
                        <p style={styles.p}>
                            Bên cạnh đó, bánh mì kẹp pate của Fresh Garden còn được chế biến với bánh mì nóng giòn được làm từ bột mì, muối và nước. Bánh mì được nướng giòn, thơm mang lại cảm giác ngon miệng cho người thưởng thức.
                        </p>
                        <p style={styles.p}>
                            Ngoài ra, bánh mì kẹp pate của Fresh Garden còn được trang trí với rau sống như rau xà lách, cà chua, hành tây... Rau sống không chỉ làm tăng hương vị cho bánh mì kẹp pate mà còn cung cấp thêm dinh dưỡng và chất xơ cho cơ thể.
                        </p>
                        <p style={styles.p}>
                            Tất cả các thành phần của bánh mì kẹp pate tại Fresh Garden đều được chọn lựa kĩ càng và chế biến đúng tiêu chuẩn. Điều này đảm bảo rằng mỗi chiếc bánh mì kẹp pate mà bạn thưởng thức đều là sản phẩm tươi ngon, bổ dưỡng và an toàn cho sức khỏe.
                        </p>
                        <h1 style={styles.h1}>Bánh mì kẹp thập cẩm</h1>
                        <p>
                            Thêm một lựa chọn dinh dưỡng cho các tín đồ của bánh mì là bánh mì kẹp thập cẩm. Với nguyên liệu sạch, giàu dinh dưỡng, bánh mì kẹp thập cẩm của Fresh Garden cũng là một sản phẩm được yêu thích bởi sự đa dạng của các thành phần bên trong, bao gồm pate, chả kẹp,  thịt xá xíu. Tất cả các thành phần này được kết hợp với nhau để tạo nên một bánh mì kẹp thơm ngon, bổ dưỡng và đầy đủ dinh dưỡng cho bữa sáng.
                        </p>
                        <h1 style={styles.h1}>Bánh mì kẹp chả</h1>
                        <p>
                            Bánh mì kẹp chả của Fresh Garden lại mang đến cho khách hàng một trải nghiệm ẩm thực đậm đà, với chả lụa thơm ngon được đặt trong bánh mì nóng giòn, kết hợp với phần nộm được nêm nếm vừa phải và nước sốt tuyệt vời. Chả thơm, mềm, được cắt thành các lát vừa ăn, mỗi miếng bánh bạn sẽ cảm nhận được lớp vỏ giòn, lớp chả đậm vị cùng nộm giải ngán, ăn một miếng lại muốn ăn thêm một miếng.
                        </p>
                        <h1 style={styles.h1}>Bánh mì kẹp gà Teriyaki</h1>
                        <p>
                            Bánh mì kẹp gà Teriyaki của Fresh Garden lại mang đến cho khách hàng một hương vị Á Đông đặc trưng, với gà được ướp gia vị đều tay, kết hợp cùng bánh mì nóng giòn và phần sốt mang công thức độc quyền của Fresh Garden.
                        </p>
                        <img
                            src="https://lh5.googleusercontent.com/0PzrbjW8zYNz7445QUiYIa1h70L33cZFubDREVPGvB2iyBn5MLBzkP2aV7TPqfjKrpqoFDs4yZtNbJFV4SH2FO9-V_id0j3Xh6IhaA53wK1kM6-FFQlOnktwZxeUECrhz7wZIe4qxbexMfuVTCMVRls"
                            alt=""
                            style={{ display: "block", margin: "auto" }}
                        />
                        <p style={{ textAlign: "center", paddingTop: "10px", fontStyle: "italic" }}>Với những khách hàng yêu thích hương vị đặc trưng của gà Teriyaki chắc chắn không thể bỏ qua vị bánh mì kẹp này</p>
                        <h1 style={styles.h1}>Bánh mì kẹp xá xíu</h1>
                        <p>
                            Cuối cùng, bánh mì kẹp xá xíu của Fresh Garden là một sản phẩm đặc trưng của ẩm thực Châu Á, với xá xíu thơm ngon được đặt trong bánh mì nóng giòn, kết hợp với nộm được nêm nếm vừa phải và sốt ngon.
                        </p>
                        <img
                            src="https://lh3.googleusercontent.com/I1Hg5wi4_Bt4Wl8PC6sW8wHE7QjSvSVOyJZFDg0v3o4UAD81t7R1Hre3I_lp7WCtHACumNd4_oDriiUxCk28UTjtbps8hfkOtQqIcJFWHz1GY4bIyMRMx2nxZ05l3RkM-je_5neawXcAWSIRsbLWoEA"
                            alt=""
                            style={{ display: "block", margin: "auto" }}
                        />
                        <p style={{ textAlign: "center", paddingTop: "10px", fontStyle: "italic" }}>Bánh mì kẹp xá xíu cũng là bánh mì kẹp được khách hàng đánh giá cao tại Fresh Garden</p>
                        <p style={styles.p}>
                            Không chỉ đánh thức vị giác bằng sự hòa quyện giữa lớp xá xíu được ướp tẩm đặc biệt vị thơm của rau mùi, bánh mì xá xíu còn gây ấn tượng với thực khách bởi công thức sốt đặc biệt của quyện trong lớp vỏ nóng giòn của bánh.
                        </p>
                        <h1 style={styles.h1}>Lời kết</h1>
                        <p>
                            Với những loại bánh mì kẹp đa dạng và phong phú, Fresh Garden chắc chắn sẽ đáp ứng được sở thích của nhiều khách hàng khác nhau. Hãy đến thưởng thức và trải nghiệm những sản phẩm bánh mì kẹp của Fresh Garden để tận hưởng một bữa ăn ngon miệng và đầy đủ dinh dưỡng. Bữa sáng, bữa trưa, bữa xế của bạn và gia đình hãy để bánh mì kẹp Fresh Garden lo bạn nhé!
                        </p>
                        <div style={styles.p}>
                            <span>Tags: </span>
                            <a href="" style={styles.a}>bánh mì kẹp</a>
                            <a href="" style={styles.a}>, bánh mì kẹp FreshGarden</a>
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

export default News4;