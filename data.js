// ============================================================
// 产品数据 + 多语言。改产品只改 products 数组即可。
// category: usa / fba / canada / germany / uk / other
// state: 仅美国产品需要填州简称，如 NY / CA / TX
// images: 图片数组，第一张为封面
// ============================================================
const DEFAULT_PRODUCTS = [
  {
    id: "p1", category: "usa", state: "CA",
    name: "美式复古牛仔夹克", nameEn: "Vintage Denim Jacket",
    quantity: 120, price: 89.99,
    images: [
      "https://picsum.photos/seed/usa1a/900/700",
      "https://picsum.photos/seed/usa1b/900/700",
      "https://picsum.photos/seed/usa1c/900/700"
    ],
    info: "美国海外仓现货 · 加州洛杉矶发货", infoEn: "US warehouse stock · Ships from Los Angeles, CA",
    detail: "经典美式复古剪裁，100% 纯棉牛仔面料，水洗做旧工艺。\n尺码齐全，支持混批。\n库存充足，下单后 24 小时内出库。",
    detailEn: "Classic American vintage cut, 100% cotton denim, washed finish.\nFull size range, mixed wholesale supported.\nShips within 24 hours."
  },
  {
    id: "p2", category: "usa", state: "NY",
    name: "纯银几何项链", nameEn: "Sterling Silver Geometric Necklace",
    quantity: 60, price: 45.00,
    images: ["https://picsum.photos/seed/usa2a/900/700", "https://picsum.photos/seed/usa2b/900/700"],
    info: "美国海外仓现货 · 纽约曼哈顿发货", infoEn: "US warehouse stock · Ships from Manhattan, NY",
    detail: "925 纯银材质，几何吊坠设计，简约百搭。\n附赠礼盒包装。",
    detailEn: "925 sterling silver, geometric pendant, minimalist style.\nGift box included."
  },
  {
    id: "p3", category: "usa", state: "TX",
    name: "北欧风布艺沙发", nameEn: "Nordic Fabric Sofa",
    quantity: 15, price: 599.00,
    images: ["https://picsum.photos/seed/usa3a/900/700", "https://picsum.photos/seed/usa3b/900/700", "https://picsum.photos/seed/usa3c/900/700"],
    info: "美国海外仓现货 · 德州奥斯汀发货", infoEn: "US warehouse stock · Ships from Austin, TX",
    detail: "北欧简约风格，高密度海绵坐垫，可拆洗布套。\n适合客厅、书房。",
    detailEn: "Nordic minimalist style, high-density foam cushion, removable cover.\nSuitable for living room and study."
  },
  {
    id: "p4", category: "fba", state: "",
    name: "宠物自动喂食器", nameEn: "Automatic Pet Feeder",
    quantity: 200, price: 79.50,
    images: ["https://picsum.photos/seed/fba1a/900/700", "https://picsum.photos/seed/fba1b/900/700"],
    info: "FBA 包邮移除现货 · 西雅图", infoEn: "FBA removal stock · Seattle, WA",
    detail: "定时定量喂食，支持手机 APP 控制，容量 4L。\n适合猫狗。",
    detailEn: "Scheduled feeding, APP control, 4L capacity.\nSuitable for cats and dogs."
  },
  {
    id: "p5", category: "fba", state: "",
    name: "折叠露营椅", nameEn: "Folding Camping Chair",
    quantity: 80, price: 35.00,
    images: ["https://picsum.photos/seed/fba2a/900/700", "https://picsum.photos/seed/fba2b/900/700"],
    info: "FBA 包邮移除现货 · 芝加哥", infoEn: "FBA removal stock · Chicago, IL",
    detail: "轻便折叠，承重 150kg，附收纳袋。",
    detailEn: "Lightweight folding, 150kg load capacity, storage bag included."
  },
  {
    id: "p6", category: "canada", state: "",
    name: "加拿大鹅绒羽绒服", nameEn: "Canadian Down Jacket",
    quantity: 40, price: 219.00,
    images: ["https://picsum.photos/seed/ca1a/900/700", "https://picsum.photos/seed/ca1b/900/700"],
    info: "加拿大现货 · 多伦多发货", infoEn: "Canada stock · Ships from Toronto",
    detail: "90% 白鹅绒填充，防风防水面料，适合极寒天气。",
    detailEn: "90% white goose down, windproof and waterproof fabric, suitable for extreme cold."
  },
  {
    id: "p7", category: "germany", state: "",
    name: "德式简约风衣", nameEn: "German Minimalist Trench Coat",
    quantity: 40, price: 129.00,
    images: ["https://picsum.photos/seed/de1a/900/700", "https://picsum.photos/seed/de1b/900/700"],
    info: "德国现货 · 柏林发货", infoEn: "Germany stock · Ships from Berlin",
    detail: "德式简约剪裁，防风面料，适合春秋穿着。",
    detailEn: "German minimalist cut, windproof fabric, suitable for spring and autumn."
  },
  {
    id: "p8", category: "uk", state: "",
    name: "英伦格纹毛衣", nameEn: "British Check Sweater",
    quantity: 90, price: 75.00,
    images: ["https://picsum.photos/seed/uk1a/900/700", "https://picsum.photos/seed/uk1b/900/700"],
    info: "英国现货 · 伦敦发货", infoEn: "UK stock · Ships from London",
    detail: "经典英伦格纹，羊毛混纺，柔软保暖。",
    detailEn: "Classic British check, wool blend, soft and warm."
  },
  {
    id: "p9", category: "other", state: "",
    name: "法式碎花连衣裙", nameEn: "French Floral Dress",
    quantity: 65, price: 98.00,
    images: ["https://picsum.photos/seed/fr1a/900/700", "https://picsum.photos/seed/fr1b/900/700"],
    info: "其他国家现货 · 法国巴黎发货", infoEn: "Other regions stock · Ships from Paris, France",
    detail: "法式碎花设计，雪纺面料，轻盈透气。",
    detailEn: "French floral design, chiffon fabric, light and breathable."
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
