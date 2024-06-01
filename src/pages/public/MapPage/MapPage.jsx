import React, { useRef, useState } from 'react'

const stores = [
    {
        id: 1,
        name: "CH 92 Tô Hiệu, Hà Đông",
        address: "92 Tô Hiệu, Hà Đông, Hà Nội",
        phone: "(024) 3856 3856 - số máy lẻ 335",
        mapSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d931.4058259856907!2d105.77813755426276!3d20.96763754171117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313452d58f4d46e1%3A0x38774a82f4d27789!2zOTIgxJAuIFTDtCBIaeG7h3UsIFAuIE5ndXnhu4VuIFRyw6NpLCBIw6AgxJDDtG5nLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1716950667006!5m2!1svi!2s",
    },
    {
        id: 2,
        name: "CH Đh Kinh Tế Quốc Dân",
        address: "tầng 1 tòa nhà A2 - ĐH Kinh Tế Quốc Dân",
        phone: "(024) 3856 3856 - số máy lẻ 319",
        mapSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.8138138793665!2d105.839924275998!3d21.00009918876094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac71752d8f79%3A0xd2ec575c01017afa!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBLaW5oIFThur8gUXXhu5FjIETDom4gKE5FVSk!5e0!3m2!1svi!2s!4v1717059212481!5m2!1svi!2s",
    },
    {
        id: 3,
        name: "CH 66 Trần Cung",
        address: " 66 Trần Cung, Bắc Từ Liêm, Hà Nội",
        phone: "(024) 3856 3856 - số máy lẻ 318",
        mapSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.611114442757!2d105.78772377599893!3d21.048240787107833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab2e28bf92e5%3A0x16d85cf8e2fdd1d1!2zNjYgxJAuIFRy4bqnbiBDdW5nLCBOZ2jEqWEgVMOibiwgQuG6r2MgVOG7qyBMacOqbSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1717059305159!5m2!1svi!2s",
    },
    {
        id: 4,
        name: "CH Vinmec Times City",
        address:
            "Tầng 1 Bệnh viện Vinmec Times City, số 458 Minh Khai, Hai Bà Trưng, Hà Nội",
        phone: "(024) 3856 3856 - số máy lẻ: 312",
        mapSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.9106066838317!2d105.86433947599797!3d20.99622018889408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac04daecb877%3A0xef1e1e02b64fcb4c!2zQuG7h25oIHZp4buHbiDEkGEga2hvYSBRdeG7kWMgdOG6vyBWaW5tZWMgVGltZXMgQ2l0eQ!5e0!3m2!1svi!2s!4v1717059359280!5m2!1svi!2s",
    },
    {
        id: 5,
        name: "CH 106 Chùa Láng",
        address: "106 Chùa Láng, Đống Đa, Hà Nội",
        phone: "(024) 3856 3856 - số máy lẻ 333",
        mapSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.230557613774!2d105.80192687599845!3d21.023458887959208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abadcd9715eb%3A0xd1c7ef038b29ec85!2zMTA2IGNow7lhIGzDoW5n!5e0!3m2!1svi!2s!4v1717059405502!5m2!1svi!2s",
    },
    {
        id: 6,
        name: "CH 50 Nguyễn Chí Thanh",
        address: "Số 50 Nguyễn Chí Thanh, Ba Đình, HN.",
        phone: "(024) 3856 3856 - số máy lẻ 324",
        mapSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.191277431473!2d105.80829887599847!3d21.025031187905157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab7cee07ec3b%3A0xa6b772fa082a1c0c!2zNTAgxJAuIE5ndXnhu4VuIENow60gVGhhbmgsIE5n4buNYyBLaMOhbmgsIEJhIMSQw6xuaCwgSMOgIE7hu5lpIDExMTA5LCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1717059441517!5m2!1svi!2s",
    },
    {
        id: 7,
        name: "CH 140 Lê Trọng Tấn",
        address:
            "Số 140 Lê Trọng Tấn, Thanh Xuân, Hà Nội",
        phone: "(024) 3856 3856 - số máy lẻ: 347",
        mapSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.9092892784524!2d105.82732407599792!3d20.996272988892045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac6297b9d051%3A0xae5e699c9393a0aa!2zMTQwIFAuIEzDqiBUcuG7jW5nIFThuqVuLCBLaMawxqFuZyBNYWksIFRoYW5oIFh1w6JuLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1717261652539!5m2!1svi!2s",
    },
    {
        id: 8,
        name: "CH 42W Lý Thường Kiệt",
        address: "Số 42W Lý Thường Kiệt, Hoàn Kiếm, HN.",
        phone: "(024) 3856 3856 - số máy lẻ 320",
        mapSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.2241097904953!2d105.84684707599858!3d21.023716987950397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab939e50c583%3A0x3f19d69d18a26505!2zNDJXIFAuIEzDvSBUaMaw4budbmcgS2nhu4d0LCBUcsOgbmcgVGnhu4FuLCBIb8OgbiBLaeG6v20sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1717059503625!5m2!1svi!2s",
    },
    {
        id: 9,
        name: "CH 386 Mỹ Đình",
        address: "Số 386 Mỹ Đình, Nam Từ Liêm, HN.",
        phone: "(024) 3856 3856 - số máy lẻ 368",
        mapSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.273810534684!2d105.76996938619234!3d21.0217274380801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454aebfa39779%3A0x2fb18a52994f2e40!2zMzg2IMSQLiBN4bu5IMSQw6xuaCwgTeG7uSDEkMOsbmgsIE5hbSBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1717059665263!5m2!1svi!2s",
    },
    {
        id: 10,
        name: "CH 220 Định Công Thượng",
        address: "Số 220 Định Công Thượng, quận Hoàng Mai, HN.",
        phone: "(024) 3856 3856 - số máy lẻ 377",
        mapSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.216366209968!2d105.82061827599777!3d20.98396228931432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acf47ffdc371%3A0x719d7a06b28986a2!2zMjIwIMSQ4buLbmggQ8O0bmcgVGjGsOG7o25nLCDEkOG7i25oIEPDtG5nLCBIb8OgbmcgTWFpLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1717059692453!5m2!1svi!2s",
    },
    {
        id: 11,
        name: "CH 361 Ngọc Lâm",
        address: "Số 361 Ngọc Lâm,Long Biên, HN.",
        phone: "(024) 3856 3856 - số máy lẻ 376",
        mapSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.619370131009!2d105.87087417599888!3d21.047910687119224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abcc6da44c35%3A0xb514d8e915e089b!2sFresh%20Garden!5e0!3m2!1svi!2s!4v1717059734028!5m2!1svi!2s",
    },
    {
        id: 12,
        name: "CH 72 Nguyễn Tuân",
        address: "Số 72 Nguyễn Tuân, quận Thanh Xuân, HN.",
        phone: "(024) 3856 3856 - số máy lẻ 375",
        mapSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.932557984574!2d105.8032635759979!3d20.995340388924152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac961e33ed53%3A0x187a91aed14af1b3!2zNzIgxJAuIE5ndXnhu4VuIFR1w6JuLCBUaGFuaCBYdcOibiBUcnVuZywgVGhhbmggWHXDom4sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1717059815198!5m2!1svi!2s",
    },
    {
        id: 13,
        name: "CH 106 Thành Công",
        address: "Số 106 Thành Công, Ba Đình, HN.",
        phone: "(024) 3856 3856 - số máy lẻ 374",
        mapSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1862.115472435527!2d105.81206454858437!3d21.023443386336854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab6f9db7238b%3A0x20f2e4cf19d23644!2zMTA2IFAuIFRow6BuaCBDw7RuZywgVGjDoG5oIEPDtG5nLCBCYSDEkMOsbmgsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1717059852671!5m2!1svi!2s",
    },
    {
        id: 14,
        name: "CH 136 Xuân Thủy",
        address: "Số 136 Xuân Thủy, quận Cầu Giấy, HN.",
        phone: "(024) 3856 3856 - số máy lẻ 367",
        mapSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.892613401636!2d105.78264517599865!3d21.03698238749475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab3580fbb661%3A0xb91f76615f81a2aa!2zMTM2IFh1w6JuIFRo4buneSwgROG7i2NoIFbhu41uZyBI4bqtdSwgQ-G6p3UgR2nhuqV5LCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1717059878612!5m2!1svi!2s",
    },
    {
        id: 15,
        name: "CH 179 Trâu Quỳ",
        address: "179 Trâu Quỳ, Gia Lâm, Hà Nội",
        phone: "(024) 3856 3856 - số máy lẻ: 373",
        mapSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.733307392009!2d105.9349828759981!3d21.003324988650302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a9e1e7a77131%3A0xe9766fde78f20bf3!2sFresh%20Garden!5e0!3m2!1svi!2s!4v1717059969413!5m2!1svi!2s",
    },
    {
        id: 16,
        name: "CH La Casta Văn Phú",
        address: "SH03-04 CC  La Casta Văn Phú, Hà Đông, Hà Nội",
        phone: "(024) 3856 3856 - số máy lẻ: 338",
        mapSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2215.36541163143!2d105.76480406464249!3d20.96112081425329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345370ca796445%3A0xb0d6815e88655ab6!2zQ8O0bmcgdHk!5e0!3m2!1svi!2s!4v1717060038135!5m2!1svi!2s",
    },
    {
        id: 17,
        name: "CH 93 Xuân La",
        address: "93 Xuân La, Tây Hồ, Hà Nội",
        phone: "(024) 3856 3856 - số máy lẻ: 360",
        mapSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.22055754453!2d105.80391317599918!3d21.06385138657096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aae74cc36d1d%3A0x433fb87828748fba!2zOTMgxJAuIFh1w6JuIExhLCBYdcOibiBMYSwgVMOieSBI4buTLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1717060094821!5m2!1svi!2s",
    },
    {
        id: 18,
        name: "CH One Mount Times City",
        address: "One Mount Times City, Hai Bà Trưng, Hà Nội",
        phone: "(024) 3856 3856",
        mapSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.654142412266!2d105.84832721501653!3d21.028511485998467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abc5c4874e0d%3A0x24e93d6b1f6341c1!2s123%20H%C3%A0ng%20B%C3%B4ng%2C%20C%E1%BB%ADa%20%C4%90%C3%B4ng%2C%20Ho%C3%A0n%20Ki%E1%BA%BFm%2C%20H%C3%A0%20N%E1%BB%99i%2C%20Vietnam!5e0!3m2!1sen!2sus!4v1582109014092!5m2!1sen!2sus",
    },
    {
        id: 19,
        name: "CH 130 Lạc Trung",
        address: "130 Lạc Trung, Hai Bà Trưng, Hà Nội",
        phone: "(024) 3856 3856 - số máy lẻ: 370",
        mapSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.738099478173!2d105.86174997599812!3d21.00313298865695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac062a914f95%3A0xd23c58e4a5d182b1!2zMTMwIFAuIEzhuqFjIFRydW5nLCBUaGFuaCBMxrDGoW5nLCBIYWkgQsOgIFRyxrBuZywgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1717060127036!5m2!1svi!2s",
    },
    {
        id: 20,
        name: "CH Cánh đông T2 Nội bài",
        address: "Tầng 3, cánh Đông, ga đi Quốc Tế T2, sân bay Nội Bài",
        phone: " (024) 3856 3856 - số máy lẻ: 313",
        mapSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.3712525504043!2d105.79167507600191!3d21.217121981280865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31350212734b30dd%3A0x58f8644f56cd22d6!2zU8OibiBCYXkgTuG7mWkgQsOgaSAoTmjDoCBHYSBUMik!5e0!3m2!1svi!2s!4v1717060176693!5m2!1svi!2s",
    },
];

const MapPage = () => {

    const [selectedStore, setSelectedStore] = useState(stores[0]);
    const liRef = useRef(null);

    const handleStoreClick = (store) => {
        setSelectedStore(store);
    };

    const handleHover = (isHovered) => {
        if (liRef.current) {
            liRef.current.style.background = isHovered ? "#ddd" : "#f4f4f4";
        }
    };
    const styles = {
        appHeader: {
            padding: "20px",
            color: "black",
            textAlign: "center",
            fontSize: "36px",
            fontFamily: "Playfair Display, serif",
            fontWeight: "500",
            lineHeight: "1.2",
        },
        storeListContainer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "20px",
            margin: "0 auto",
            maxWidth: "1200px",
        },
        storeList: {
            width: "300px",
            marginRight: "20px",
            height: "100%",
            overflowY: "auto",
            fontSize: "15px",
            fontWeight: "bold",
            cursor: "pointer",
            fontFamily: "Montserrat , sans-serif",
        },
        ul: {
            listStyleType: "none",
            padding: 0,
        },
        li: {
            margin: "10px 0",
            borderRadius: "5px",
            textAlign: "left",
            cursor: "pointer",
            transition: "background 0.3s",
        },
        liHover: {
            background: "#fff",
        },
        storeMap: {
            flex: 1,
            marginLeft: "20px",
            paddingTop: "8px",
            // Đặt chiều cao cho ô bản đồ
        },
        iframe: {
            border: 0,
            width: "800px",
            height: "650px",
        },
        link: {
            textDecoration: "none",
            color: "black",
        },
        storeInfo: {
            marginBottom: "20px",
        },
    };
    return (
        <div>
            <header style={styles.appHeader}>
                <h1>Danh sách cửa hàng</h1>
            </header>
            <div style={styles.storeListContainer}>
                <div style={styles.storeList}>
                    <ul style={styles.ul}>
                        {stores.map((store, index) => (
                            <li
                                key={store.id}
                                onClick={() => handleStoreClick(store)}
                                style={{
                                    ...styles.li,
                                    ...(selectedStore === store ? styles.liHover : null),
                                }}
                            >
                                <span
                                    style={{
                                        display: "block",
                                        padding: "5px 0",
                                        transition: "color 0.3s",
                                    }}
                                >
                                    <a
                                        href="#"
                                        style={styles.link}
                                        onMouseOver={(e) => {
                                            e.target.style.color = "#b1c23c";
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.color = "black";
                                        }}
                                    >
                                        <p>
                                            {index + 1}. {store.name}
                                        </p>
                                    </a>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div style={styles.storeMap}>
                    <div style={styles.storeInfo}>
                        <p>
                            <b>Địa chỉ:</b> {selectedStore.address}
                        </p>
                        <p>Số điện thoại: {selectedStore.phone}</p>
                    </div>
                    <iframe
                        src={selectedStore.mapSrc}
                        style={styles.iframe}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title="Google Maps"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default MapPage