export const filters = [
  {
    id: "size",
    name: "Size",
    options: [
      { value: "size 6 - 16cm", label: "Size 6" },
      { value: "size 8 - 21cm", label: "Size 8" },
    ],
  },
];

export const singleFilters = [
  {
    id: "price",
    name: "Giá",
    options: [
      { value: "0-149999", label: "0 -> 149999" },
      { value: "150000-249999", label: "150000 -> 249999" },
      { value: "250000-349999", label: "250000 -> 349999" },
      { value: "350000-499999", label: "350000 -> 499999" },
    ],
  },
  {
    id: "discount",
    name: "% Giảm giá",
    options: [
      { value: "10%", label: "10% Trở lên" },
      { value: "20%", label: "20% Trở lên" },
      { value: "30%", label: "30% Trở lên" },
      { value: "40%", label: "40% Trở lên" },
      { value: "50%", label: "50% Trở lên" },
    ],
  },
  {
    id: "stock",
    name: "Tình trạng hàng",
    options: [
      { value: "in_stock", label: "Còn hàng" },
      { value: "out_of_stock", label: "Hết hàng" },
    ],
  },
];
export const sortOption = [
  { name: "Price: Low To High", query: "price_low", current: false },
  { name: "Price: High To Low", query: "price_high", current: false },
];
