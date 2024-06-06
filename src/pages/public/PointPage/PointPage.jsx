import React, { useState } from "react";
import { Button, Row, Col, Card, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const PointPage = () => {
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
            margin: " 30px 0",
            fontSize: "30px",
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

        ol: {
            listStyleType: "decimal",
            paddingLeft: "20px",
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
                        <h1 style={styles.h1}>
                            Thẻ khách hàng thân thiết Fresh Garden: Mua hàng - Tích điểm
                        </h1>
                        <img
                            src="https://file.hstatic.net/200000411281/file/th-tich-diem_832ddd57071f4c0b8e2addd8cda01a2a_grande.png"
                            alt=""
                            style={{ display: "block", margin: "auto" }}
                        />
                        <p style={styles.p}>
                            <b>
                                I. Điều kiện tham gia chương trình khách hàng thân thiết (sau
                                đây viết tắt là “KHTT”):
                            </b>
                        </p>
                        <ul style={styles.ul}>
                            <li>
                                Đối tượng tham gia chương trình: Tất cả khách hàng mua sản phẩm
                                tại cửa hàng của Fresh Garden.
                            </li>
                            <li>
                                Để tham gia chương trình, khách hàng sẽ đăng ký thông tin (tên,
                                số điện thoai, địa chỉ, ngày sinh, email) tại các cửa hàng của
                                Fresh Garden. Ngay khi hoàn tất đăng ký và trở thành KHTT, khách
                                hàng sẽ được hưởng chính sách tích lũy điểm thưởng nhận ưu đãi.
                            </li>
                            <li>
                                Khách hàng chỉ sử dụng một (01) số điện thoại đã đăng ký cho mỗi
                                lần thanh toán để tích điểm.
                            </li>
                            <li>
                                Trường hợp khách hàng cần thay đổi địa chỉ email/số điện thoại,
                                vui lòng thông báo cho nhân viên cửa hàng..
                            </li>
                            <li>
                                Điều kiện duy trì tài khoản KHTT là: Phát sinh ít nhất một (01)
                                giao dịch trong ba (03) tháng liên tiếp.
                            </li>
                        </ul>
                        <p style={styles.p}>
                            <b>II. Sản phẩm áp dụng:</b>
                        </p>
                        <ul style={styles.ul}>
                            <li>Chỉ áp dụng cho các sản phẩm do Fresh Garden sản xuất.</li>
                            <li>
                                Để tham gia chương trình, khách hàng sẽ đăng ký thông tin (tên,
                                số điện thoai, địa chỉ, ngày sinh, email) tại các cửa hàng của
                                Fresh Garden. Ngay khi hoàn tất đăng ký và trở thành KHTT, khách
                                hàng sẽ được hưởng chính sách tích lũy điểm thưởng nhận ưu đãi.
                            </li>
                            <li>Không áp dụng cho mặt hàng thương mại.</li>
                        </ul>
                        <p style={styles.p}>
                            <b>III. Địa điểm áp dụng:</b>
                        </p>
                        <ul style={styles.ul}>
                            <li>
                                Chương trình áp dụng tại các cửa hàng Fresh Garden (trừ cửa hàng
                                Fresh Garden tại sân bay Nội Bài và cửa hàng Cafeteria tại khối
                                trường học Vinschool).
                            </li>
                        </ul>
                        <p style={styles.p}>
                            <b>IV. Cách thức tính điểm:</b>
                        </p>
                        <ol style={styles.ol}>
                            <li>
                                Trên mỗi hóa đơn giao dịch, cứ 10.000 đồng thanh toán cho sản
                                phẩm áp dụng chương trình sẽ được quy đổi tương ứng với 1 điểm,
                                không tính điểm với số lẻ dưới 10.000 đồng.
                            </li>
                            <li>
                                Điểm được tích lũy theo số tiền thực tế khách hàng thanh toán,
                                và được cộng dồn lũy kế theo mỗi hóa đơn.
                            </li>
                            <li>
                                Khi khách hàng tích lũy đủ 100 điểm sẽ được tặng một (01) phiếu
                                mua hàng điện tử (sau đây viết tắt là “PMHĐT”) có giá trị thanh
                                toán là 50.000đ (hoặc quy đổi thành các hình thức quà tặng khác
                                theo các chính sách chương trình khuyến mại tại thời điểm do
                                Fresh Garden ban hành).
                            </li>
                            <li>
                                Mỗi PMHĐT sẽ được phát hành qua một (01) tin nhắn thông báo mã
                                đến số điện thoại đã đăng ký của khách hàng và sử dụng được ngay
                                sau khi khách hàng nhận được tin nhắn.
                            </li>
                            <li>
                                PMHĐT không được quy đổi thành tiền mặt hoặc trả lại tiền thừa
                                và chỉ áp dụng thanh toán một (01) lần trên một (01) hóa đơn.
                            </li>
                            <li>
                                PMHĐT chỉ có thời hạn sử dụng ba (03) tháng kể từ ngày khách
                                hàng nhận được mã qua tin nhắn, quá thời hạn này sẽ tự động hủy.{" "}
                            </li>
                            <li>
                                Khách hàng có trách nhiệm tự bảo quản thông tin mã của PMHĐT,
                                Fresh Garden chỉ cấp một (01) lần duy nhất.
                            </li>
                        </ol>
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

export default PointPage;