// ============================================================
// 产品数据 + 多语言
// category: usa / fba / canada / germany / uk / other
// state: 美国仓州简称，如 NY / CA
// zip: 邮编
// ============================================================
const DEFAULT_PRODUCTS = [
  {
    id: "p1", category: "usa", state: "CA", zip: "90001",
    name: "美式复古牛仔夹克", nameEn: "Vintage Denim Jacket",
    quantity: 120, price: 89.99,
    images: ["https://picsum.photos/seed/usa1a/900/700", "https://picsum.photos/seed/usa1b/900/700"],
    info: "CA 90001 · 现货", infoEn: "CA 90001 · In stock",
    detail: "经典美式复古剪裁，100% 纯棉牛仔面料。", detailEn: "Classic American vintage cut."
  },
  {
    id: "p2", category: "usa", state: "NY", zip: "10001",
    name: "纯银几何项链", nameEn: "Sterling Silver Necklace",
    quantity: 60, price: 45.00,
    images: ["https://picsum.photos/seed/usa2a/900/700"],
    info: "NY 10001 · 现货", infoEn: "NY 10001 · In stock",
    detail: "925 纯银材质，简约百搭。", detailEn: "925 sterling silver."
  },
  {
    id: "p3", category: "fba", state: "", zip: "",
    name: "宠物自动喂食器", nameEn: "Automatic Pet Feeder",
    quantity: 200, price: 79.50,
    images: ["https://picsum.photos/seed/fba1a/900/700"],
    info: "FBA 现货", infoEn: "FBA In stock",
    detail: "定时定量喂食，容量 4L。", detailEn: "Scheduled feeding, 4L capacity."
  },
  {
    id: "p4", category: "canada", state: "", zip: "",
    name: "加拿大鹅绒羽绒服", nameEn: "Canadian Down Jacket",
    quantity: 40, price: 219.00,
    images: ["https://picsum.photos/seed/ca1a/900/700"],
    info: "加拿大现货", infoEn: "Canada In stock",
    detail: "90% 白鹅绒填充。", detailEn: "90% white goose down."
  },
  {
    id: "p5", category: "germany", state: "", zip: "",
    name: "德式简约风衣", nameEn: "German Trench Coat",
    quantity: 40, price: 129.00,
    images: ["https://picsum.photos/seed/de1a/900/700"],
    info: "德国现货", infoEn: "Germany In stock",
    detail: "德式简约剪裁。", detailEn: "German minimalist cut."
  },
  {
    id: "p6", category: "uk", state: "", zip: "",
    name: "英伦格纹毛衣", nameEn: "British Check Sweater",
    quantity: 90, price: 75.00,
    images: ["https://picsum.photos/seed/uk1a/900/700"],
    info: "英国现货", infoEn: "UK In stock",
    detail: "经典英伦格纹。", detailEn: "Classic British check."
  },
  {
    id: "p7", category: "other", state: "", zip: "",
    name: "法式碎花连衣裙", nameEn: "French Floral Dress",
    quantity: 65, price: 98.00,
    images: ["https://picsum.photos/seed/fr1a/900/700"],
    info: "其他国家现货", infoEn: "Other regions In stock",
    detail: "法式碎花设计。", detailEn: "French floral design."
  }
];

const I18N = {
  zh: {
    siteName: "跨境现货清仓",
    siteDesc: "1111111111111111111111111111111111111111111111111",
    navProducts: "产品展示",
    featured: "新上架推荐",
    categories: "商品分类",
    usa: "美国海外仓现货",
    fba: "FBA包邮移除现货",
    canada: "加拿大",
    germany: "德国",
    uk: "英国",
    other: "其他国家",
    all: "全部",
    filterCategory: "筛选类别",
    quantity: "数量",
    price: "价格",
    contact: "咨询联系",
    wechat: "微信：2222222222",
    phone: "电话：3333333333",
    tipTitle: "温馨提示",
    tip: "88888888888888888888888888888888888888888888888888888888888888888888",
    share: "分享此产品",
    copyLink: "复制链接",
    copied: "链接已复制",
    back: "返回",
    noProducts: "暂无产品",
    productInfo: "商品信息",
    productDetail: "商品描述",
    allProducts: "全部产品",
    state: "州",
    langBtn: "EN"
  },
  en: {
    siteName: "Cross-border Clearance Stock",
    siteDesc: "1111111111111111111111111111111111111111111111111",
    navProducts: "Products",
    featured: "New Arrivals",
    categories: "Categories",
    usa: "US Overseas Warehouse",
    fba: "FBA Removal Stock",
    canada: "Canada",
    germany: "Germany",
    uk: "UK",
    other: "Other Regions",
    all: "All",
    filterCategory: "Filter Category",
    quantity: "Qty",
    price: "Price",
    contact: "Contact Us",
    wechat: "WeChat: 2222222222",
    phone: "Phone: 3333333333",
    tipTitle: "Warm Tip",
    tip: "88888888888888888888888888888888888888888888888888888888888888888888",
    share: "Share",
    copyLink: "Copy Link",
    copied: "Link copied",
    back: "Back",
    noProducts: "No products",
    productInfo: "Product Info",
    productDetail: "Description",
    allProducts: "All Products",
    state: "State",
    langBtn: "中文"
  }
};

function getLang() { return localStorage.getItem("lang") || "zh"; }
function setLang(l) { localStorage.setItem("lang", l); }
function t(key) { return (I18N[getLang()] && I18N[getLang()][key]) || key; }

function getProducts() {
  const local = localStorage.getItem("products_data");
  if (local) { try { return JSON.parse(local); } catch (e) {} }
  return DEFAULT_PRODUCTS;
}
function saveProducts(list) { localStorage.setItem("products_data", JSON.stringify(list)); }
function clearProducts() { localStorage.removeItem("products_data"); }

function categoryLabel(cat) {
  return t(cat === "usa" ? "usa" : cat === "fba" ? "fba" : cat === "canada" ? "canada" : cat === "germany" ? "germany" : cat === "uk" ? "uk" : "other");
}
function formatPrice(p) { return "$" + Number(p).toFixed(2); }
function getParam(k) { return new URLSearchParams(location.search).get(k); }
function renderLangBtn(btn) {
  btn.textContent = getLang() === "zh" ? "EN" : "中文";
  btn.onclick = () => { setLang(getLang() === "zh" ? "en" : "zh"); location.reload(); };
}
