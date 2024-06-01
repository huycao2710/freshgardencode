import React, { useState, useEffect } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, Menu, Select, Typography } from "antd";
const { Title } = Typography;
const SubMenu = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };
};
const items = [
  {
    key: "0",
    label: "DANH MỤC",
  },

  {
    key: "1",
  },

  {
    key: "2",

    label: "Bánh kem",
    children: [
      {
        key: "21",
        label: "Bánh sinh nhật",
      },
      {
        key: "22",
        label: "Bánh Kem Noel",
      },
      {
        key: "23",
        label: "Bánh cho trẻ em",
      },
      {
        key: "24",
        label: "Bánh kem đặt trước",
      },
      {
        key: "25",
        label: "Phụ kiện",
      },
    ],
  },
  {
    key: "3",
    label: "Bánh mì",
    children: [
      {
        key: "31",
        label: "Bánh mì kẹp",
      },
      {
        key: "32",
        label: "Bánh cán lớp",
      },
      {
        key: "33",
        label: "Bánh mì gối",
      },
      {
        key: "34",
        label: "Bánh mì baguette",
      },
      {
        key: "35",
        label: "Bánh mì mặn",
      },
      {
        key: "36",
        label: "Bánh mì ngọt",
      },
    ],
  },
  {
    key: "4",
    label: "Bánh ngọt",
    children: [
      {
        key: "41",
        label: "Bánh bông lan",
      },
      {
        key: "42",
        label: "Bánh Chiffon",
      },
      {
        key: "43",
        label: "Bánh cuộn",
      },
      {
        key: "44",
        label: "Bánh ngọt",
      },
      {
        key: "45",
        label: "Bánh su kem",
      },
    ],
  },
  {
    key: "5",
    label: "Bánh tráng miệng",
    children: [
      {
        key: "51",
        label: "Bánh miếng",
      },
      {
        key: "52",
        label: "Bánh mousse",
      },
      {
        key: "53",
        label: "Tiramisu/Caramel/Sữa chua",
      },
      {
        key: "54",
        label: "Panna cotta & Pudding",
      },
    ],
  },
  {
    key: "6",
    label: "Bánh khô",
    children: [
      {
        key: "61",
        label: "Bánh quy",
      },
      {
        key: "62",
        label: "Bánh mì nướng",
      },
      {
        key: "63",
        label: "Bánh sừng bò mini",
      },
      {
        key: "64",
        label: "Bánh Macaron",
      },
    ],
  },
  {
    key: "7",
    label: "Bánh đông lạnh",
    children: [
      {
        key: "71",
        label: "Bánh bao",
      },
      {
        key: "72",
        label: "Bánh pizza",
      },
      {
        key: "73",
        label: "Bánh Tarte Táo",
      },
      {
        key: "74",
        label: "Bánh sừng bò",
      },
    ],
  },
  {
    key: "8",
    label: "Đồ uống",
  },
  {
    key: "9",
    label: "Machi by Fresh Garden",
    children: [
      {
        key: "91",
        label: "Bánh Cracker",
      },
      {
        key: "92",
        label: "Bánh mì nướng Macchi",
      },
      {
        key: "93",
        label: "Bánh Cookies Macchi",
      },
      {
        key: "94",
        label: "Bánh Nougat",
      },
    ],
  },
];

const newItems = [
  {
    key: "0",
    label: "Thông tin sản phẩm",
    children: [
      {
        key: "01",
        label: "Thông tin sản phẩm",
      },
    ],
  },

  {
    key: "1",
    label: "Hướng dẫn mua hàng online",
    children: [
      {
        key: "11",
        label: "Hướng dẫn mua hàng online",
      },
    ],
  },
];
const getLevelKeys = (items1) => {
  const key = {};
  const func = (items2, level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};
const levelKeys = getLevelKeys(items);
const handleChange = (value) => {
  console.log(value);
};

const ProductDetailPage = () => {
  const [stateOpenKeys, setStateOpenKeys] = useState(["10", "23"]);
  const [quantity, setQuantity] = useState(1); // State để lưu trữ số lượng sản phẩm
  const [selectedImage, setSelectedImage] = useState(null);
  const [defaultImage, setDefaultImage] = useState(null);
  const images = [
    "https://product.hstatic.net/200000411281/product/4_0148f2f37bcb494a84c4d0521bb682ae_master.png",
    "https://product.hstatic.net/200000411281/product/1_3b294837bff845be99db6cc968d42f78_compact.png",
    "https://product.hstatic.net/200000411281/product/2_1e46b39b920f454fa0d620da8125a9db_compact.png",
    "https://product.hstatic.net/200000411281/product/3_587ac78ab37c41c38fa5ab8119ff0a85_compact.png",
    // Thêm các URL của ảnh khác ở đây
  ];
  useEffect(() => {
    // Thiết lập ảnh đầu tiên khi trang hiện ra
    if (defaultImage === null && images.length > 0) {
      setDefaultImage(images[0]);
      setSelectedImage(images[0]);
    }
  }, [defaultImage, images]);
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleChange = (value) => {
    console.log(value);
  };
  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };
  return (
    <div class="product-detail-wrapper py-5">
      <div class="container ml-auto mr-auto">
        <div
          class="row"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <div class="col" style={{ minWidth: "20%" }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["231"]}
              openKeys={stateOpenKeys}
              onOpenChange={onOpenChange}
              style={{
                width: "80%",
                border: "none",
                backgroundColor: "transparent",
              }}
              items={items}
            />
          </div>
          <div class="col-4">
            <div class="row product-detail-main mb-5">
              <div class="col-6 product-content-img">
                <div
                  className="big-pic pl-3"
                  style={{ width: "400px", height: "400px" }}
                >
                  {selectedImage && (
                    <img
                      src={selectedImage}
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                    />
                  )}
                </div>
                <div
                  className="small-pic pl-3"
                  style={{ display: "flex", flexWrap: "wrap" }}
                >
                  {images.map((imageUrl, index) => (
                    <img
                      key={index}
                      src={imageUrl}
                      alt=""
                      onClick={() => handleImageClick(imageUrl)}
                      style={{
                        width: "100px",
                        height: "100px",
                        margin: "8px",
                        cursor: "pointer",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div class="col-7 pl-5" style={{ minWidth: "400px" }}>
            <div
              class="col product-content-desc"
              id="detail-product"
              style={{ lineHeight: "1.4", fontFamily: "Montserrat" }}
            >
              <p
                class="product-type"
                style={{
                  color: "#222",
                  fontWeight: "600",
                  fontSize: "18px",
                  margin: "0 0 10px 0",
                  lineHeight: "18px",
                }}
              >
                Bánh kem
              </p>
              <div
                class="product-title"
                style={{
                  color: "#000",
                  fontWeight: "700",
                  fontSize: "26px",
                  margin: "0 0 10px",
                  lineHeight: "initial",
                }}
              >
                <h1>Bánh Kem Sweet Cream</h1>
              </div>
              <div
                class="product-code"
                style={{
                  color: "#a3a5a7",
                  fontSize: "12px",
                  marginBottom: "8px",
                  display: "block",
                }}
              >
                <span id="pro_sku">
                  <strong>SKU:</strong>1040050321
                </span>
              </div>
              <div
                class="product-price"
                id="price-preview"
                style={{ color: "#b1c23c", fontSize: "24px", opacity: ".92" }}
              >
                <span class="pro-price">380,000₫</span>
              </div>
              <div class="product-selector">
                <label style={{ marginBottom: ".5rem", display: "block" }}>
                  Kích thước
                </label>
                <Select
                  labelInValue
                  defaultValue={{
                    value: "size 8 inch",
                    label: "size 8 inch",
                  }}
                  style={{
                    width: "100%",
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: "size 8 inch",
                      label: "size 8 inch",
                    },
                  ]}
                />
              </div>
              <div class="input-product">
                <div style={{ marginTop: "1rem" }}>
                  <Button onClick={decrementQuantity}>-</Button>
                  <span style={{ margin: "0 0.5rem" }}>{quantity}</span>
                  <Button onClick={incrementQuantity}>+</Button>
                </div>
              </div>
              <div
                className="button-product"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div style={{ margin: "1rem 0", width: "50%" }}>
                  <Button
                    block
                    style={{
                      color: "#fff",
                      backgroundColor: "#b1c23c",
                      borderColor: "#b1c23c",
                      fontSize: "12px",
                      fontWeight: "bold",
                      lineHeight: "22px",
                      width: "100%",
                      marginBottom: "10px",
                    }}
                  >
                    THÊM VÀO GIỎ
                  </Button>
                </div>
                <span style={{ margin: "0 0.5rem" }}></span>
                <div style={{ margin: "1rem 0", width: "50%" }}>
                  <Button
                    block
                    style={{
                      color: "#fff",
                      backgroundColor: "#343a40",
                      borderColor: "#343a40",
                      fontSize: "12px",
                      fontWeight: "bold",
                      lineHeight: "22px",
                      width: "100%",
                      marginBottom: "10px",
                    }}
                  >
                    MUA NGAY
                  </Button>
                </div>
              </div>
              <div>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={["231"]}
                  openKeys={stateOpenKeys}
                  onOpenChange={onOpenChange}
                  style={{
                    width: "80%",
                    border: "none",
                    backgroundColor: "transparent",
                  }}
                  items={newItems}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetailPage;