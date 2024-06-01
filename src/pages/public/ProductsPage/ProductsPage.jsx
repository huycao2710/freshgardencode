import React, { useState, useEffect } from "react";
import { Card, Menu, Dropdown, Space, Typography, Pagination } from "antd";
import { DownOutlined } from "@ant-design/icons";
const { Meta } = Card;
const { Item } = Menu;
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
const dropdownItems = [
  { key: "a", label: "Sản phẩm nổi bật" },
  { key: "b", label: "Giá: Tăng dần" },
  { key: "c", label: "Giá: Giảm dần" },
  { key: "d", label: "Tên: A - Z" },
  { key: "e", label: "Tên: Z - A" },
  { key: "f", label: "Cũ nhất" },
  { key: "g", label: "Mới nhất" },
  { key: "h", label: "Bán chạy nhất" },
  { key: "i", label: "Tồn kho: Giảm dần" },
];

const data = [
  {
    title: "Bánh Kem Flower Of Love",
    description: "320,000đ",
    imgSrc:
      "https://product.hstatic.net/200000411281/product/13-02_77c7c970cfcd4043bd4a5b451adea3bb_grande.png",
  },
  {
    title: "Bánh Kem Lily Garden",
    description: "380,000đ",
    imgSrc:
      "https://product.hstatic.net/200000411281/product/lily_garden_d3608a4d05be411098c5f62202a6cf14_grande.png",
  },
  {
    title: "Bánh Kem Princess",
    description: "380,000đ",
    imgSrc:
      "https://product.hstatic.net/200000411281/product/13-03_eee16cd2465944e9b27b82ac92f2271d_grande.png",
  },
  {
    title: "Bánh kem Endless Love",
    description: "380,000đ",
    imgSrc:
      "https://product.hstatic.net/200000411281/product/13-01_6c0d083ac2cc4497934dd8afed0c7486_grande.png",
  },
  {
    title: "Bánh Kem Rosie Love",
    description: "380,000đ",
    imgSrc:
      "https://product.hstatic.net/200000411281/product/rosie_love_24e1cc3a3aab4b65a82a2d080e4d2785_grande.png",
  },
  {
    title: "Bánh Kem Chocolate Lover",
    description: "380,000đ",
    imgSrc:
      "https://product.hstatic.net/200000411281/product/banh_kem_amazing_chocolate_c89da3fb2deb4060be34f42b054922f7_grande.png",
  },
  {
    title: "Bánh Kem Amazing Chocolate",
    description: "380,000đ",
    imgSrc:
      "https://product.hstatic.net/200000411281/product/banh_kem_amazing_chocolate__1__c6e8edf9331b4ef486135b4aedc7a01d_grande.png",
  },
  {
    title: "Bánh Kem Kiss me more",
    description: "150,000đ",
    imgSrc:
      "https://product.hstatic.net/200000411281/product/a2_a7ae4b3322de4dcb88af04507fc63c9c_grande.png",
  },
  {
    title: "Bánh Kem Love Melody 4",
    description: "150,000đ",
    imgSrc:
      "https://product.hstatic.net/200000411281/product/toooooo-01_34b92d0736824959abea164ab655bba4_grande.png",
  },
  {
    title: "Bánh Kem Tasty Love",
    description: "150,000đ",
    imgSrc:
      "https://product.hstatic.net/200000411281/product/a1__1__2feb5742439f479ab822d4fa9fa6013d_grande.png",
  },
  {
    title: "Bánh Kem Sweet Heart 4",
    description: "150,000đ",
    imgSrc:
      "https://product.hstatic.net/200000411281/product/2-removebg-preview__1__ba51f7d4eaf74031877384148b2a7a9f_grande.png",
  },
  {
    title: "Bánh Mousse Chocolate",
    description: "390,000đ",
    imgSrc:
      "https://product.hstatic.net/200000411281/product/thiet_ke_chua_co_ten_a480f34a8c8d43ab9061b8328fcdb5f4_grande.jpg",
  },
  {
    title: "Bánh Kem Blue Ocean",
    description: "320,000đ",
    imgSrc:
      "https://product.hstatic.net/200000411281/product/3_0ce516afdfce46df8af5780791947af0_grande.png",
  },
  {
    title: "Bánh Kem Romantic",
    description: "320,000đ",
    imgSrc:
      "https://product.hstatic.net/200000411281/product/4_619645dada9b423890c9ae9880900c6c_grande.png",
  },
  {
    title: "Bánh Kem Mousse Hawaii",
    description: "390,000đ",
    imgSrc:
      "https://product.hstatic.net/200000411281/product/1_f00d4d4df0d44f3f9ff3835cc2039490_grande.png",
  },
  {
    title: "Bánh Kem Sweet Love",
    description: "320,000đ",
    imgSrc:
      "https://product.hstatic.net/200000411281/product/6_f25b19d9da7347fbb541604f22d8a22a_grande.png",
  },
  {
    title: "Bánh Kem Chocolate Fruit",
    description: "320,000đ",
    imgSrc:
      "https://product.hstatic.net/200000411281/product/5_2db9405b633c40c294285ddec33a0234_grande.png",
  },
  {
    title: "Bánh Kem Forever Love",
    description: "380,000đ",
    imgSrc:
      "https://product.hstatic.net/200000411281/product/6_9e4ff52581b948ffbbd58d1c1e97d141_grande.png",
  },
  // Add more data here as needed
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


const ProductPage = () => {
  const [stateOpenKeys, setStateOpenKeys] = useState(["10", "23"]);
  const [selectedKey, setSelectedKey] = useState(dropdownItems[0].key);
  const [selectedLabel, setSelectedLabel] = useState("Bộ lọc");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;
  const totalProducts = data.length;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalProducts);

  useEffect(() => {
    if (startIndex >= totalProducts) {
      const lastPage = Math.ceil(totalProducts / pageSize);
      setCurrentPage(lastPage);
    }
  }, [currentPage, pageSize, startIndex, totalProducts]);


  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleChange = (value) => {
    console.log(value);
  };
  const handleMenuClick = (e) => {
    setSelectedKey(e.key);
    setSelectedLabel(e.item.props.children);
    console.log(e.key);
  };

  const menuItems = dropdownItems.map((item) => (
    <Item key={item.key}>{item.label}</Item>
  ));
  const menu = (
    <Menu onClick={handleMenuClick} selectedKeys={[selectedKey]}>
      {menuItems}
    </Menu>
  );
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
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  fontSize: "30px",
                  fontWeight: 600,
                  fontFamily: "Playfair Display, serif",
                  margin: "0 20px 13px 0",
                  lineHeight: 1.2,
                }}
              >
                Bánh sinh nhật
              </div>
              <div style={{ marginLeft: "auto" }}>
                <Dropdown overlay={menu}>
                  <Typography.Link style={{ color: "black" }}>
                    <Space>
                      {selectedLabel}
                      <DownOutlined />
                    </Space>
                  </Typography.Link>
                </Dropdown>
              </div>
              <div style={{ clear: "both" }}></div>
            </div>
            <div
              className="col-4"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                justifyContent: "space-between",
              }}
            >
              {data.slice(startIndex, endIndex).map((item, index) => (
                <Card
                  key={index}
                  hoverable
                  style={{
                    width: "25%",
                    marginBottom: "20px",
                    border: "none",
                  }}
                  cover={<img alt="example" src={item.imgSrc} />}
                >
                  <Meta
                    title={<div style={{ margin: "0 0 5px", fontSize: "14px", minHeight: "18px", fontFamily: "Montserrat, sans-serif" }}>{item.title}</div>} // Thay đổi màu sắc của title thành đỏ
                    description={
                      <div style={{ fontSize: "20px", color: "#b1c23c" }}>{item.description}</div>
                    } // Thay đổi kích thước của description
                  />
                </Card>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <Pagination
                current={currentPage}
                total={totalProducts}
                pageSize={pageSize}
                onChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ProductPage;