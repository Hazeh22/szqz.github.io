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
  },{
 'id'： 'p_1794384764647_0'，
 “类别”：“美国”，
 “名称”：“宠物蘑菇型碗”，
 “nameEn”：“宠物碗”，
 “数量”：322，
 “价格”：19.99，
 “图像”： [
 “数据：图像/jpeg;base64”
 ],
 “信息”： “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。 SpSSdM+p9DTUVNYOtdTElFSQwAXKyQVpnlTjykmfkjtzw2QGU+4YII7k+0Nu7ks1slpt17t/4iq3nMi1X0EdJwQqo9PghIIDBiCe+GAOcZJiyLjxrG0Y8AaVKoo0i5PbVppFHxqSaIasMffxpUq//9k=“，
 “infoEn”： “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 yaz SpSSdM+p9DTUVNYOtdTElFSQwAXKyQVpnlTjykmfkjtzw2QGU+4YII7k+0Nu7ks1slpt17t/4iq3nMi1X0EdJwQqo9PghIIDBiCe+GAOcZJiyLjxrG0Y8AaVKoo0i5PbVppFHxqSaIasMffxpUq//9k=“，
 “detail”：“纽约发货，共十个品”，
 “detailEn”： “纽约发货，共十个品”
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
