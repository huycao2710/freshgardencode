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
                            src="https://file.hstatic.net/200000411281/article/untitled-2-01_9a2c857598044033aae0c06c6f059d36_1024x1024.jpg"
                            alt=""
                            style={{ width: "100%", height: "500px" }}
                        />
                        <h1 style={styles.h1}>
                            Thị trường quà tết 2023: Đột phá sản phẩm thương hiệu Việt
                        </h1>
                        <h3 style={styles.h3}>Người viết: Online10 lúc 16.12.2022 | Tin tức</h3>
                        <p style={{ paddingTop: " 10px", lineHeight: "21px", fontSize: "14px" }}>
                            Năm 2023 được nhận định là một năm có nhiều sự thay đổi trong thị trường quà tết. Vị thế của thương hiệu Việt đáp ứng tiêu chí của người tiêu dùng về Dinh dưỡng - Chất lượng - An toàn ngày càng được nâng cao.
                        </p>
                        <h1 style={styles.h1}>Tổng quan thị trường quà tết 2023</h1>
                        <p>
                            2022 là một năm biến động dù tác động của đại dịch Covid-19 đã giảm bớt, song người tiêu dùng vẫn khá thắt chặt trong chi tiêu. Nhu cầu mua sắm của người dân giảm mạnh, tác động lớn đến sức mua của thị trường quà tết so với cùng kỳ năm trước.
                        </p>
                        <p style={styles.p}>
                            Nếu mọi năm người tiêu dùng có xu hướng lựa chọn quà tết theo sở thích và nhu cầu, thì năm nay yếu tố quyết định lại  tập trung ở giá thành. Theo Brands Việt Nam, mức độ ưu tiên của người tiêu dùng về hộp quà tết năm nay được xếp theo thứ tự sẽ là giá thành, giá trị sử dụng và mẫu mã, bao bì.
                        </p>
                        <p style={styles.p}>
                            Trải qua sự thay đổi về thị trường và nhận thức, thay vì lựa chọn các sản phẩm quà tết nhập ngoại, giá trị cao như các năm, thì trong dịp tết 2023, người tiêu dùng lại ưa chuộng các sản phẩm bánh, hộp quà tết được sản xuất trong nước với mức giá tầm trung, bao bì sang trọng.
                        </p>
                        <h1 style={styles.h1}>Flower of love - Đóa hoa được chăm chút từ yêu thương</h1>
                        <img
                            src="https://file.hstatic.net/200000411281/file/z3956563394889_e956526f36f44e7504ca37a01ed496f0_428caef311d84675a483d042d9a8a4a8_grande.jpg"
                            alt=""
                            style={{ display: "block", margin: "auto" }}
                        />
                        <p style={{ textAlign: "center", paddingTop: "10px", fontStyle: "italic" }}>Thị trường quà tết 2023 có nhiều biến động</p>
                        <p style={styles.p}>
                            Sau hơn 2 năm trầm lắng do ảnh hưởng từ đại dịch, tết Quý Mão 2023 được kỳ vọng sẽ là một mùa tết vui tươi, lạc quan và tốt đẹp đối với cả doanh nghiệp và người tiêu dùng với sự chuyển mình mạnh mẽ trong kinh tế.
                        </p>
                        <h1 style={styles.h1}>Trước tiên là sự chuyển hướng của dòng sản phẩm quà tết thương hiệu Việt</h1>
                        <p>
                            Một trong những nguyên nhân khiến người tiêu dùng dần chuyển sang dùng các sản phẩm mang thương hiệu Việt đó là thời kỳ nở rộ của các sản phẩm gắn mác “hàng nhập khẩu chính hãng” từ những năm trước đây kéo theo hệ lụy hàng giả, hàng nhái tràn lan. Người tiêu dùng cũng dần e ngại trước các sản phẩm hàng ngoại.
                        </p>
                        <p style={styles.p}>
                            Trong hoàn cảnh đó, ý thức về sức khỏe và sự thay đổi về kinh tế tạo ra một xu thế thị trường hoàn toàn mới, ảnh hưởng trực tiếp đến hành vi mua sắm và xu hướng dòng quà tết Quý Mão 2023. Đó là những món quà tết thương hiệu Việt thiên hướng quan tâm đến sức khỏe, và “tiêu dùng xanh”.
                        </p>
                        <p style={styles.p}>
                            Thấu hiểu nhu cầu này, Fresh Garden cung cấp các sản phẩm bánh, hộp quà tết chuẩn thương hiệu Việt. Hộp quà tết tại Fresh Garden đảm bảo các tiêu chí về dinh dưỡng, nguồn gốc và quy trình sản xuất khép kín, đạt chuẩn kiểm định an toàn vệ sinh thực phẩm.
                        </p>
                        <img
                            src="https://file.hstatic.net/200000411281/file/z3956563401639_119849202fbaf26fcdd7d087bd83e74a_617e6306fbe140f5a6d9824603bd3ab0_grande.jpg"
                            alt=""
                            style={{ display: "block", margin: "auto" }}
                        />
                        <p style={{ textAlign: "center", paddingTop: "10px", fontStyle: "italic" }}>Người tiêu dùng đang có xu hướng lựa chọn các sản phẩm tốt cho sức khỏe</p>
                        <p style={styles.p}>
                            Nguyên liệu làm nên các loại bánh hoàn toàn là nguyên liệu sạch, nhập khẩu có đầy đủ nguồn gốc xuất xứ. Thành phần thiên nhiên được Fresh Garden sử dụng chủ yếu là các loại hạt óc chó, hạnh nhân, macca, hạt dẻ cười, dừa hoặc những nguyên liệu được nhập khẩu từ nước ngoài như nam việt quất khô, nho khô,...
                        </p>
                        <p style={styles.p}>
                            Bên cạnh đó, hộp quà tết thương hiệu Fresh Garden cũng đáp ứng được nhu cầu biếu tặng cho đối tác, người thân của bạn với chi phí phù hợp cho nhiều phân khúc sản phẩm. Mức giá hộp quà trung cao cấp chỉ từ 290.000 - 590.000 đồng với mỗi set quà tết.
                        </p>
                        <p style={styles.p}>
                            Bao bì hộp quà được thiết kế độc quyền, bắt mắt, hiện đại, trọn vẹn không khí tết. Sự kết hợp màu sắc tạo nên nét hài hòa, thu hút nhưng cũng không kém phần lịch sự và sang trọng, gửi gắm theo đó là thông điệp về sức khỏe, bình an, niềm tin và hy vọng vào một năm đại phát, rực rỡ.
                        </p>
                        <p style={styles.p}>
                            Đặc biệt các sản phẩm trong hộp quà tết của Fresh Garden có thể sử dụng được với trà để làm tăng hương vị khi thưởng thức. Các loại bánh quy hạt có lượng đường được điều chỉnh phù hợp dùng với cả người cao tuổi và trẻ em bởi sự đổi mới trong hương vị.
                        </p>
                        <h1 style={styles.h1}>Hộp quà tết Fresh Garden đảm bảo Dinh dưỡng – Chất lượng – An toàn</h1>
                        <p>
                            Nắm bắt được thị hiếu lựa chọn quà tết Quý Mão 2023, cùng với mong muốn mang đến người tiêu dùng Việt những sản phẩm cao cấp, tốt cho sức khỏe, thân thiện với môi trường và mức giá phải chăng, Fresh Garden cho ra mắt bộ quà tết cao cấp với các tiêu chí: Dinh dưỡng - Chất lượng - An toàn lên hàng đầu.
                        </p>
                        <p style={styles.p}>
                            Bạn có thể tham khảo bộ quà tết “Lời ru mùa xuân” với sự kết hợp của 4 loại bánh từ hạnh nhân, hạt dẻ cười, macca và hạt óc chó. Màu đỏ cam sang trọng, kết hợp với màu xanh và nâu của hộp bánh trong set quà thể hiện sự lạc quan chào đón năm mới, khởi đầu mới nhiều may mắn.
                        </p>
                        <img
                            src="https://file.hstatic.net/200000411281/file/317338856_919023392815211_5886429705175850146_n_62ed86b53247434586ebb29784500eb5_grande.jpg"
                            alt=""
                            style={{ display: "block", margin: "auto" }}
                        />
                        <p style={{ textAlign: "center", paddingTop: "10px", fontStyle: "italic" }}>Sắc màu rực rỡ trên hộp quà Lời ru mua xuân của Fresh Garden</p>
                        <p style={styles.p}>
                            “Dòng chảy hạnh phúc” là set quà tết nhẹ nhàng với sắc vàng rực rỡ của bìa hộp. Với ý nghĩa năm mới suôn sẻ, may mắn và hạnh phúc ngập tràn được gói trọn trong những chiếc bánh quy sô cô la chip, bánh quy hạnh nhân, ...
                        </p>
                        <img
                            src="https://file.hstatic.net/200000411281/file/untitled-2-02_9bc12391865144f78d36fa9df24df619_grande.jpg"
                            alt=""
                            style={{ display: "block", margin: "auto" }}
                        />
                        <p style={{ textAlign: "center", paddingTop: "10px", fontStyle: "italic" }}>Sắc màu rực rỡ trên hộp quà Lời ru mua xuân của Fresh Garden</p>
                        <p style={styles.p}>
                            Trải qua hơn 10 năm hoạt động, Fresh Garden tự hào khi được nhiều khách hàng doanh nghiệp như TPbank, Techcombank, L's Place – L's Place Food Mart, Tiệc cưới Hoàng gia, Vinschool, Ken logistics,... tin tưởng lựa chọn.
                        </p>
                        <p style={styles.p}>
                            Là sản phẩm đến từ thương hiệu Việt vì sức khỏe người tiêu dùng, các sản phẩm trong hộp quà tết của Fresh Garden là lựa chọn hoàn hảo để gửi tặng cho đối tác, cán bộ công nhân viên nội bộ, người thân và bạn bè trong dịp tết Quý Mão 2023 và những dịp đặc biệt khác nữa.
                        </p>
                        <p style={styles.p}>
                            Bạn cần đặt set quà tết hãy liên hệ Fresh Garden tại:
                        </p>
                        <ul>
                            <li>Website: <a href="" style={{ color: "inherit" }}>hopquatetcaocap.freshgarden.vn</a></li>
                            <li>Danh sách cửa hàng: <a href="" style={{ color: "inherit" }}>https://www.freshgarden.vn/pages/danh-sach-cua-hang</a></li>
                            <li>Tiki Mall: <a href="" style={{ color: "inherit" }}>https://tiki.vn/cua-hang/fresh-garden-banh-tuoi-moi-ngay</a></li>
                            <li>Shopee Mall: <a href="" style={{ color: "inherit" }}>https://shopee.vn/freshgarden_official_store</a></li>
                            <li>Hotline đặt hàng: 024 3856 3856</li>
                        </ul>
                        <div style={styles.p}>
                            <span>Tags: </span>
                            <a href="" style={styles.a}>hộp quà Tết</a>
                            <a href="" style={styles.a}>, Bánh quy Tết</a>
                            <a href="" style={styles.a}>, quà Tết 2023</a>
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