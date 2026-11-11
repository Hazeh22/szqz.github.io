// ============================================================
// 产品数据 + 多语言。改产品只改 products 数组即可。
// category: usa / fba / canada / germany / uk / other
// state: 仅美国产品需要填州简称，如 NY / CA / TX
// images: 图片数组，第一张为封面
// ============================================================
const DEFAULT_PRODUCTS = [
 {
    "id": "p_1794385617859_0",
    "category": "usa",
    "name": "宠物蘑菇型碗",
    "nameEn": "Pet Bowl",
    "quantity": 322,
    "price": 19.99,
    "images": [
      "https://beeimg.us.ci/temp/6af4201a0aad5.jpeg"
    ],
    "info": "纽约发货，共十个品",
    "infoEn": "纽约发货，共十个品",
    "detail": "滞销",
    "detailEn": "滞销"
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
