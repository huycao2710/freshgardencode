import React, { useState } from "react";
import { Button, Row, Col, Card, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const AboutUsPage = () => {
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

    const styles = {
        h1: {
            margin: "0 0 13px 0",
            fontSize: "30px",
            fontFamily: "Playfair Display",
            fontWeight: "700",
            marginBottom: "30px",
            lineHeight: "1.2",
        },

        h3: {
            fontFamily: "Arial",
            fontWeight: "bold",
            lineHeight: "21px",
            fontSize: "14px",
            margin: "10px 0",
        },

        p: {
            margin: "0 0 10px 0",
            lineHeight: "21px",
            fontSize: "14px",
            fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
            color: "#4B494E",
            margin: "10px 0",

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
                        <h1 style={styles.h1}>
                            Giới thiệu
                        </h1>
                        <h3 style={styles.h3}>Câu chuyện thương hiệu</h3>
                        <p style={styles.p}>
                            Thành lập vào tháng 12/2010 từ tình yêu với những chiếc bánh, Fresh Garden khởi nguồn cùng slogan “Bánh tươi mỗi ngày” và sứ mệnh xuyên suốt về mang tới những sản phẩm thơm ngon nhất. Những năm đầu, sản phẩm chủ lực của Fresh Garden là bánh kem và bánh mì tươi. Trong mỗi dịp lễ hay sinh nhật, bánh kem của Fresh Garden luôn là một trong những lựa chọn hàng đầu, bởi độ ngọt vừa phải, mẫu bánh đẹp, giá thành hợp lý. Bên cạnh đó, đồng hành mỗi ngày của khách hàng là các sản phẩm bánh mì tươi dinh dưỡng, thơm ngon.
                        </p>
                        <img
                            src="https://file.hstatic.net/200000411281/file/fresh-garden-toii-min_134715d24cff47a8ac17406f87b7b3da_grande.jpg"
                            alt=""
                            style={{ display: "block", margin: "auto" }}
                        />
                        <h3 style={styles.h3}>Dấu ấn hành trình</h3>
                        <p style={styles.p}>
                            Với hơn 100 cửa hàng và đại lý phân phối phủ khắp các tỉnh phía Bắc, Fresh Garden tự hào là thương hiệu bánh tươi uy tín bậc nhất với dây chuyền sản xuất tiên tiến hiện đại cùng gần 1000 nhân sự làm việc chăm chỉ không ngừng sáng tạo. Với tín đồ của bánh ngọt, mặn, bánh kem thì thật sự Fresh Garden chính là một "thế giới thu nhỏ" của bánh trái, chiều lòng bất kì vị khách nào ghé ngang. Trải qua một thập kỷ với những cung bậc sáng tạo, Fresh Garden không chỉ ghi dấu bởi chất lượng mà còn vì sự tinh tế trong từng nấc hương vị, đa dạng bánh Âu, Á và dần trở thành thói quen trong văn hóa tiêu dùng của những tín đồ yêu bánh.
                        </p>
                        <p style={styles.p}>
                            Thế mạnh của Fresh Garden nằm ở những dòng bánh kem tươi mềm mịn ngọt dịu tươi mới, bánh mì nướng đặc biệt giòn thơm, bánh cuộn chuẩn Nhật với lớp kem sữa Hokkaido… rất được ưa chuộng. Trong mỗi dịp lễ hay sinh nhật, bánh kem của Fresh Garden luôn là một lựa chọn hàng đầu, bởi độ ngọt vừa phải, mẫu bánh đẹp, giá thành hợp lý. Bên cạnh đó, đồng hành với khách hàng mỗi ngày là các sản phẩm bánh mì tươi – bánh mỳ kẹp tiện lợi, dinh dưỡng.
                        </p>
                        <img
                            src="https://file.hstatic.net/200000411281/file/banh-gato-fresh-garden-min_24ddfc8a20c84fc48d6413b8b2e0b370_grande.jpg"
                            alt=""
                            style={{ display: "block", margin: "auto" }}
                        />
                        <h3 style={styles.h3}>Sứ mệnh và tầm nhìn</h3>
                        <p style={styles.p}>
                            Đằng sau Fresh Garden là đội ngũ nhân viên, chuyên gia đầu bếp luôn nỗ lực sáng tạo, không ngừng đam mê để có thể đưa ra những sản phẩm ngon, chất lượng, đẹp mắt và an toàn cho sức khỏe khách hàng. Đi cùng quy trình làm bánh nghiêm ngặt, khép kín, đòi hỏi nhân viên phải cẩn thận, tỉ mỉ và chăm chút trong từng công đoạn nhỏ nhất. Fresh Garden cam kết mang đến những sản phẩm đạt chất lượng cao nhất như một lời tri ân đối với sự yêu mến và tin dùng.
                        </p>
                        <img
                            src="https://file.hstatic.net/200000411281/file/banh-my-tuoi-fresh-garden-min_aa5a4a7dbb9246f2a277f13ee2213858_grande.jpg"
                            alt=""
                            style={{ display: "block", margin: "auto" }}
                        />
                        <h3 style={styles.h3}>Những giá trị tạo nên Fresh Garden</h3>
                        <p style={styles.p}>
                            Từng sản phẩm Fresh Garden được đầu tư rất kỹ ngay từ khâu chọn nguyên liệu, đó là những thành phần tươi mới nhất và chủ yếu đang sử dụng đều đến từ những nhãn hiệu có uy tín như Anchor, Vivo, Meiji, Komplet… Một số dòng sốt của Ý như sốt pizza, sốt mayonaise cũng được nhập trực tiếp từ Ý.
                        </p>
                        <p style={styles.p}>
                            Đến với Fresh Garden là đến với hàng trăm hương, vị bánh đa chủng loại Á – Âu: bánh ngọt, bánh mì tươi, các dòng bánh kem sinh nhật, sự kiện, theo mùa… Các loại bánh luôn được chú trọng sản xuất sao cho đảm bảo hương vị thơm ngon tuyệt vời mà còn an toàn, đảm bảo cho sức khoẻ. Mỗi chiếc bánh ra đời là đam mê của một tập thể tâm huyết với nghề, mỗi sẩn phẩm trao tay là tận tâm của đội ngũ nhân viên với khách hàng.Tất cả những điều đó, bạn sẽ cảm nhận được khi thưởng thức từng dòng bánh tuyệt hảo – ý nghĩa – tiện lợi mà Fresh Garden đặc biệt tạo nên.
                        </p>
                        <img
                            src="https://file.hstatic.net/200000411281/file/fresh-garden-gioi-thieu-5_a67fbdaab671461a8be4bdd6dc0e281b_grande.png"
                            alt=""
                            style={{ display: "block", margin: "auto" }}
                        />
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


export default AboutUsPage