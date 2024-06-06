import React, { useState } from "react";
import { Button, Row, Col, Card, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Meta } = Card;
const News2 = () => {
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
        ul: {
            listStyleType: "disc",
            paddingLeft: "20px",
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
                            src="https://file.hstatic.net/200000411281/article/bai_post-01_47db187bd342490eaf367a8a664fd763_1024x1024.jpg"
                            alt=""
                            style={{ width: "100%", height: "500px" }}
                        />
                        <h1 style={styles.h1}>
                            Fresh Garden kỷ niệm 12 năm sinh nhật diệu kỳ
                        </h1>
                        <h3 style={styles.h3}>Người viết: Marketing12 lúc 09.12.2022 | Tin tức</h3>
                        <p style={styles.p}>
                            Nhân dịp kỷ niệm sinh nhật năm thứ 12, thương hiệu bánh tươi mỗi ngày - Fresh Garden mang đến chương trình khuyến mại, tặng quà, quay số trúng thưởng cực kỳ hấp dẫn.
                        </p>
                        <p>
                            Ngay từ những ngày đầu tháng 12, không khí tại Fresh Garden đã dần nóng lên với hoạt động chào đón bữa tiệc sinh nhật tuổi 12. Tất cả khách hàng của thương hiệu “bánh tươi mỗi ngày” sẽ có cơ hội săn những món quà giá trị trong chương trình check in nhận quà và “Vòng quay may mắn” được áp dụng tại toàn bộ các hệ thống cửa hàng của Fresh Garden tại miền Bắc.
                        </p>
                        <p style={styles.p}>
                            Ngày 24/12/2022, sự kiện sinh nhật quy mô lớn được tổ chức tại khu đô thị HH Linh Đàm, ước tính thu hút hơn 10.000 người tham gia. Tại big event, khách hàng sẽ được tham gia các minigame, check in nhận quà và trải nghiệm mua sắm tại các gian hàng. Đặc biệt là chương trình “Quay số trúng thưởng” rinh quà 100% cho mọi đơn hàng với tổng giá trị giải thưởng giá trị lên tới hàng trăm triệu đồng. Nhanh tay mua hàng và tham gia siêu sự kiện của Fresh Garden để săn cơ hội trúng các phần quà cực khủng:
                        </p>
                        <ul style={styles.ul}>
                            <li>IPhone 14 promax 512GB</li>
                            <li>Điều hòa Daikin 2 chiều Inverter</li>
                            <li>Lò vi sóng điện tử có nướng 28L thương hiệu Sharp R-G728XVN-BST</li>
                            <li>Voucher mua hàng trị giá 1.000.000 đồng</li>
                        </ul>
                        <img src="https://file.hstatic.net/200000411281/file/bai_post-03_dabbaeeba48d402794e8745e461fd4fa_grande.jpg" alt="" style={{ display: "block", margin: "auto" }} />
                        <p style={styles.p}>
                            Song song với các hoạt động game trúng thưởng, big event sinh nhật 12 tuổi của thương hiệu Fresh Garden còn có những hoạt động giải trí vô cùng hấp dẫn.
                        </p>
                        <img src="https://file.hstatic.net/200000411281/file/bai_post-04_ba9190b8d5b54406a5a12b2b5b3c271a_grande.jpg" alt="" style={{ display: "block", margin: "auto" }} />
                        <p style={styles.p}>
                            Tham dự sự kiện lần này có sự góp mặt của rất nhiều các nhóm nhạc, ca sĩ nổi tiếng, hứa hẹn sẽ mang tới một “bữa tiệc âm nhạc” đặc sắc, hấp dẫn với các tiết mục nhảy hiện đại thiếu nhi, LED dance từ nhóm The RIO và biểu diễn ảo thuật cực sôi động.
                        </p>
                        <p style={styles.p}>
                            Bên cạnh các chương trình ca nhạc giải trí và trò chơi trúng thưởng, Fresh Garden sẽ khiến bữa tiệc thêm phần “nóng” hơn nữa với tiết mục đặc biệt cùng ca sĩ khách mời Khánh Phương viết lời chúc lên bánh kem và thổi nến chúc mừng Fresh Garden 12 tuổi.
                        </p>
                        <img src="https://file.hstatic.net/200000411281/file/bai_post-02_96f3417f2b5d483886b5056729506ca1_grande.jpg" alt="" style={{ display: "block", margin: "auto" }} />
                        <p style={styles.p}>Hòa cùng không khí ma quái của những ngày gần kề Halloween, Fresh Garden đã cho ra mắt 2 mẫu bánh kem độc đáoTưng bừng mừng sinh nhật, săn loạt quà siêu hot, tận hưởng thời gian giải trí sôi động và rất nhiều loại bánh tươi thơm ngon nhất tại Fresh Garden đang chờ đón được phục vụ quý khách hàng vào sự kiện siêu sinh nhật tháng 12 này.</p>
                        <p style={styles.p}>Chỉ duy nhất ngày 24 tháng 12, đến tham gia tại HH Linh Đàm và đón chờ cơn mưa giải thưởng cùng hàng loạt ưu đãi cực hấp dẫn cho các sản phẩm bánh mì tươi, bánh kem,... tại toàn bộ hệ thống Fresh Garden trên toàn quốc.</p>
                        <p style={styles.p}>Nhằm mang đến những trải nghiệm mua sắm tốt nhất, thưởng thức các sản phẩm bánh ngon nhất cho người tiêu dùng trong chương trình sinh nhật tháng 12 này, Fresh Garden phối hợp cùng ban quản lý tại địa điểm HH Linh Đàm, chủ động không gian để xe và giao thông thuận lợi. Cùng với đó là sự nỗ lực chuẩn bị, hoàn thiện hậu cần từ toàn bộ cán bộ, nhân viên, nghệ nhân làm bánh tại Fresh Garden.</p>
                        <img src="https://file.hstatic.net/200000411281/file/z3060408737912_3c34eb932632e728ae89098fe3c724a0_2325987285dd4cbbaa1de7efee3a5cc7_grande.jpg" alt="" style={{ display: "block", margin: "auto" }} />
                        <p style={styles.p}><i>“Mười hai năm là cột mốc vô cùng quan trọng và ý nghĩa đối với Fresh Garden đi cùng rất nhiều thành tựu lẫn thử thách. Sự kiện sinh nhật tuổi thứ 12 của Fresh Garden được tổ chức và khởi động ngay từ đầu tháng nhằm tri ân đến toàn bộ khách hàng, đối tác, nhà cung cấp đã cùng đồng hành và góp phần tạo nên Fresh Garden hôm nay, tạo nên cả Fresh Garden của những ngày sau. Chúng tôi luôn mong muốn đem đến cho thực khách những sản phẩm chất lượng nhất cùng trải nghiệm thật sự bùng nổ. Đây cũng là một trong những dấu ấn tuyệt vời trong chặng đường phát triển của Fresh Garden bây giờ và mai sau.” Đại diện của Fresh Garden chia sẻ.</i></p>
                        <h1 style={styles.h1}>
                            Vài nét về Fresh Garden
                        </h1>
                        <p>
                            Được thành lập vào tháng 12/2010, bên cạnh sự thành công từ dòng bánh cấp đông tiện lợi, Fresh Garden dần chinh phục nhiều loại bánh khác từ dòng bánh truyền thống như bánh kem sinh nhật đến bánh mì dinh dưỡng. Sự nhiệt tâm trong việc truyền tải tình yêu với bánh qua những sản phẩm chất lượng đã giúp Fresh Garden dần trở thành "thế giới bánh thu nhỏ", nơi chiều lòng bất kỳ vị khách nào ghé ngang.
                        </p>
                        <img src="https://file.hstatic.net/200000411281/file/z3740986435992_0e9aaa1e14a8ab845b4113c7c6da2436_3609d0995daa4769a2ecfbbafaa448e3_grande.jpghttps://file.hstatic.net/200000411281/file/z3060408737912_3c34eb932632e728ae89098fe3c724a0_2325987285dd4cbbaa1de7efee3a5cc7_grande.jpg" alt="" style={{ display: "block", margin: "auto" }} />
                        <p style={styles.p}>
                            Với tôn chỉ “bánh tươi mỗi ngày”, Fresh Garden hiện là một trong những chuỗi cửa hàng bánh mì tươi, bánh kem hàng đầu Việt Nam, luôn nỗ lực không ngừng nhằm đem lại trải nghiệm những thức bánh tươi ngon, chất lượng, tiện lợi, an toàn với sức khỏe.</p>
                        <p style={styles.p}>
                            Hiện tại Fresh Garden có hơn 100 cửa hàng và đại lý tại Hà Nội, gần 20 nhà phân phối các tỉnh phía Bắc cùng với các ứng dụng bán hàng online toàn quốc. Fresh Garden luôn giữ vững giá trị chất lượng, không ngừng nỗ lực vươn lên là thương hiệu cửa hàng bánh tươi và cà phê đứng đầu thị trường Việt Nam.
                        </p>
                        <p style={styles.p}>
                            Tận hưởng và săn giải thưởng khủng tại siêu sinh nhật 12 tuổi của Fresh Garden tại:
                        </p>
                        <ul>
                            <li>Fanpage: <a href="" style={{ color: "inherit" }}>https://www.facebook.com/freshgardenbanhvacaphe</a></li>
                            <li>Website: <a href="" style={{ color: "inherit" }}> https://freshgarden.vn/</a></li>
                            <li>Hệ thống cửa hàng: <a href="" style={{ color: "inherit" }}>https://www.freshgarden.vn/pages/danh-sach-cua-hang</a></li>
                            <li>Hotline đặt hàng: 024 3856 3856</li>
                        </ul>
                        <div style={styles.p}>
                            <span>Tags: </span>
                            <a href="" style={styles.a}>sinh nhật</a>
                            <a href="" style={styles.a}>, vòng quay may mắn</a>
                            <a href="" style={styles.a}>, quà sinh nhật</a>
                            <a href="" style={styles.a}>, sinh nhật diệu kì</a>
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

export default News2;