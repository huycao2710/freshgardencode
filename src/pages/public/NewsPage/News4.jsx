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
                            src="https://file.hstatic.net/200000411281/article/299849_31-8-den_trung_thu_7a66288cbeee4adc8bc14d4c3c3b985a_1024x1024.jpg"
                            alt=""
                            style={{ width: "100%", height: "500px" }}
                        />
                        <h1 style={styles.h1}>
                            Bạn đã biết ý nghĩa của ngày Tết Trung thu?
                        </h1>
                        <h3 style={styles.h3}>Người viết: Vân Haravan lúc 22.09.2023 | Tin tức</h3>
                        <p style={styles.p}>
                            Tết Trung thu theo Âm lịch là ngày rằm tháng 8 hằng năm. Đây là ngày lễ được các em nhỏ vô cùng yêu thích và còn được biết đến với tên gọi khác là Tết trông trăng, Tết đoàn viên. Gần đến ngày tết Trung thu, trẻ em vô cùng háo hức, chờ đợi được đi chơi, sắm các món đồ đặc trưng để phá cỗ như đèn ông sao, mặt nạ, đèn kéo quân...
                        </p>
                        <h1 style={styles.h1}>Ý nghĩa ngày Tết Trung thu</h1>
                        <p>
                            Theo nhiều tài liệu ghi chép lại, người Việt đã có lễ hội trăng tròn mùa thu từ thời cổ đại, được khắc họa trên mặt trống đồng Ngọc Lũ. Trung thu là lúc thời tiết mát mẻ, nhà nông hoàn thành việc thu hoạch vụ mùa nên tổ chức vui chơi, ăn mừng và cúng lễ cầu nguyện cho mùa sau mưa gió thuận hoà, mùa màng bội thu.
                        </p>
                        <p style={styles.p}>
                            Ý nghĩa ngày Tết Trung thu thời xa xưa là sự tri ân đối với thiên nhiên, với tổ tiên đã phù hộ cho mọi người được no ấm, là niềm mong ước sẽ được bội thu trong mùa sau, và cũng là sự tự thưởng cho mình sau những ngày lao động vất vả, tận hưởng niềm vui khi nhìn thấy thành quả lao động.
                        </p>
                        <p style={styles.p}>
                            Sự đoàn viên, sum họp cũng là ý nghĩa quan trọng của ngày Tết Trung thu. Vào ngày này, người người nhà nhà sửa biện mâm cỗ để cúng gia tiên, mọi người quây quần cùng vui chơi và hàn huyên.
                        </p>
                        <p style={styles.p}>
                            Nhà văn hóa Phan Kế Bính viết trong cuốn Việt Nam phong tục: <p style={{ fontStyle: "italic" }}>"Dân ta thế kỷ 19, ban ngày làm cỗ cúng gia tiên, tối đến bày cỗ thưởng trăng. Đầu cỗ là bánh mặt trăng và dùng nhiều thứ bánh trái hoa quả, nhuộm các màu sặc sỡ, xanh đỏ, trắng và vàng. Con gái ở phố thi nhau tài khéo, gọt đu đủ thành các thứ hoa, nặn bột làm con tôm, con cá voi...".</p>
                        </p>
                        <img
                            src="https://file.hstatic.net/200000411281/file/o-trung-thu-gom-nhung-gi-bay-mam-co-the-nao-cho-dep-202208160648138400_2f4d942e86674ec39620d4d533622738_grande.jpg"
                            alt=""
                            style={{ display: "block", margin: "auto" }}
                        />
                        <p style={{ textAlign: "center", paddingTop: "10px", fontStyle: "italic" }}>Mâm cỗ trông trăng với các loại bánh trung thu ngộ nghĩnh và hoa quả trang trí đáng yêu</p>
                        <p style={styles.p}>
                            Ngày xưa trong dịp Tết Trung thu, trẻ con được người lớn mua hoặc làm cho những món đồ chơi như đèn lồng, đồ chơi bồi bằng giấy hình voi, ngựa, kỳ lân, sư tử, rồng, hươu, tôm cá, bươm bướm, bọ ngựa, hoặc làm đèn cù, ông nghè đất…
                        </p>
                        <p style={styles.p}>
                            Khi trăng lên, người lớn sẽ ngồi ăn bánh, uống trà, ngắm trăng. Người trẻ tuổi thì cùng nhau hát điệu Trống quân. Trẻ em thì dắt nhau thành từng nhóm rước đèn, múa sư tử, đánh trống, đám thì nhảy ô, đám thì kéo co, đám thì rước đèn, tiếng reo hò, tiếng đùa vang khắp cả đường.
                        </p>
                        <p style={styles.p}>
                            Tết Trung thu là dịp để mọi người sắp xếp công việc để trở về quê, sum họp với gia đình và quây quần bên mâm cỗ đoàn viên. Sau đó, cả nhà sẽ cùng uống trà, ăn bánh, ngắm trăng, trò chuyện và ôn lại những kỷ niệm đẹp.
                        </p>
                        <p style={styles.p}>
                            Nhiều quốc gia ở Đông Á và Đông Nam Á thường tổ chức các lễ hội vào dịp này như Trung Quốc, Việt Nam, Nhật Bản, Triều Tiên, Đài Loan, Singapore. Đặc biệt với Hàn Quốc, đây là một trong những ngày lễ cổ truyền lớn nhất.
                        </p>
                        <h1 style={styles.h1}>Fresh Garden chào đón mùa trăng 2023</h1>
                        <p>
                            Hơn ai hết, Fresh Garden hiểu rằng mỗi mùa trăng đến, bánh trung thu là nhân vật không thể thiếu trong mâm cỗ của các em nhỏ, trong bữa tiệc gia đình ấm cúng bên tách trà thơm. Ý nghĩa của ngày tết đặc biệt này sẽ không bao giờ phai nhạt khi chúng ta vẫn lưu giữ những nét đẹp truyền thống qua các thế hệ.
                        </p>
                        <img
                            src="https://file.hstatic.net/200000411281/file/ghep_truyen_thong-01_ae7c41efa3d249019a7eeb14eac97b2e_grande.jpg"
                            alt=""
                            style={{ display: "block", margin: "auto" }}
                        />
                        <p style={{ textAlign: "center", paddingTop: "10px", fontStyle: "italic" }}>Hình ảnh thực tế bánh trung thu Fresh Garden 2023</p>
                        <p style={styles.p}>
                            Trung thu được coi là Tết thứ 2 của những người con đất Việt, là giây phút sum vầy với những trông đợi và yêu thương. Cái hồn cái cốt của mùa trăng tròn chính là những chiếc bánh trung thu dẻo thơm, nồng đượm biết bao sự khéo léo, tỉ mỉ của người nghệ nhân làm ra chúng. Mùa Trung Thu này hãy để Fresh Garden tiếp tục đồng hành cùng bạn trao gửi những món quà thơm thảo, ý nghĩa nhất dành tặng cho người thân yêu nhé!
                        </p>
                        <div style={styles.p}>
                            <span>Tags: </span>
                            <a href="" style={styles.a}>hộp quà Tết</a>
                            <a href="" style={styles.a}>, quà doanh nghiệp</a>
                            <a href="" style={styles.a}>, quà tết Fresh Garden</a>
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