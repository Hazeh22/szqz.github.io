// ============================================================
// 产品数据 + 多语言。改产品只改 products 数组即可。
// category 可选值：usa(美国海外仓) / fba(FBA包邮移除) / canada / germany / uk / other
// images 是图片数组，第一张为封面；detail 支持换行
// ============================================================
const DEFAULT_PRODUCTS = [
  {
    id: "p1",
    category: "usa",
    name: "美式复古牛仔夹克",
    nameEn: "Vintage Denim Jacket",
    quantity: 120,
    price: 89.99,
    images: [
      "https://picsum.photos/seed/usa1a/800/600",
      "https://picsum.photos/seed/usa1b/800/600",
      "https://picsum.photos/seed/usa1c/800/600"
    ],
    info: "美国海外仓现货 · 加州洛杉矶发货",
    infoEn: "US warehouse stock · Ships from Los Angeles, CA",
    detail: "经典美式复古剪裁，100% 纯棉牛仔面料，水洗做旧工艺。\n尺码齐全，支持混批。\n库存充足，下单后 24 小时内出库。",
    detailEn: "Classic American vintage cut, 100% cotton denim, washed finish.\nFull size range, mixed wholesale supported.\nShips within 24 hours."
  },
  {
    id: "p2",
    category: "usa",
    name: "纯银几何项链",
    nameEn: "Sterling Silver Geometric Necklace",
    quantity: 60,
    price: 45.00,
    images: [
      "https://picsum.photos/seed/usa2a/800/600",
      "https://picsum.photos/seed/usa2b/800/600"
    ],
    info: "美国海外仓现货 · 纽约曼哈顿发货",
    infoEn: "US warehouse stock · Ships from Manhattan, NY",
    detail: "925 纯银材质，几何吊坠设计，简约百搭。\n附赠礼盒包装。",
    detailEn: "925 sterling silver, geometric pendant, minimalist style.\nGift box included."
  },
  {
    id: "p3",
    category: "fba",
    name: "北欧风布艺沙发",
    nameEn: "Nordic Fabric Sofa",
    quantity: 15,
    price: 599.00,
    images: [
      "https://picsum.photos/seed/fba1a/800/600",
      "https://picsum.photos/seed/fba1b/800/600",
      "https://picsum.photos/seed/fba1c/800/600"
    ],
    info: "FBA 包邮移除现货 · 德州奥斯汀",
    infoEn: "FBA removal stock · Austin, TX",
    detail: "北欧简约风格，高密度海绵坐垫，可拆洗布套。\n适合客厅、书房。",
    detailEn: "Nordic minimalist style, high-density foam cushion, removable cover.\nSuitable for living room and study."
  },
  {
    id: "p4",
    category: "fba",
    name: "宠物自动喂食器",
    nameEn: "Automatic Pet Feeder",
    quantity: 200,
    price: 79.50,
    images: [
      "https://picsum.photos/seed/fba2a/800/600",
      "https://picsum.photos/seed/fba2b/800/600"
    ],
    info: "FBA 包邮移除现货 · 西雅图",
    infoEn: "FBA removal stock · Seattle, WA",
    detail: "定时定量喂食，支持手机 APP 控制，容量 4L。\n适合猫狗。",
    detailEn: "Scheduled feeding, APP control, 4L capacity.\nSuitable for cats and dogs."
  },
  {
    id: "p5",
    category: "canada",
    name: "加拿大鹅绒羽绒服",
    nameEn: "Canadian Down Jacket",
    quantity: 40,
    price: 219.00,
    images: [
      "https://picsum.photos/seed/ca1a/800/600",
      "https://picsum.photos/seed/ca1b/800/600"
    ],
    info: "加拿大现货 · 多伦多发货",
    infoEn: "Canada stock · Ships from Toronto",
    detail: "90% 白鹅绒填充，防风防水面料，适合极寒天气。",
    detailEn: "90% white goose down, windproof and waterproof fabric, suitable for extreme cold."
  },
  {
    id: "p6",
    category: "germany",
    name: "德式简约风衣",
    nameEn: "German Minimalist Trench Coat",
    quantity: 40,
    price: 129.00,
    images: [
      "https://picsum.photos/seed/de1a/800/600",
      "https://picsum.photos/seed/de1b/800/600"
    ],
    info: "德国现货 · 柏林发货",
    infoEn: "Germany stock · Ships from Berlin",
    detail: "德式简约剪裁，防风面料，适合春秋穿着。",
    detailEn: "German minimalist cut, windproof fabric, suitable for spring and autumn."
  },
  {
    id: "p7",
    category: "uk",
    name: "英伦格纹毛衣",
    nameEn: "British Check Sweater",
    quantity: 90,
    price: 75.00,
    images: [
      "https://picsum.photos/seed/uk1a/800/600",
      "https://picsum.photos/seed/uk1b/800/600"
    ],
    info: "英国现货 · 伦敦发货",
    infoEn: "UK stock · Ships from London",
    detail: "经典英伦格纹，羊毛混纺，柔软保暖。",
    detailEn: "Classic British check, wool blend, soft and warm."
  },
  {
    id: "p8",
    category: "other",
    name: "法式碎花连衣裙",
    nameEn: "French Floral Dress",
    quantity: 65,
    price: 98.00,
    images: [
      "https://picsum.photos/seed/fr1a/800/600",
      "https://picsum.photos/seed/fr1b/800/600"
    ],
    info: "其他国家现货 · 法国巴黎发货",
    infoEn: "Other regions stock · Ships from Paris, France",
    detail: "法式碎花设计，雪纺面料，轻盈透气。",
    detailEn: "French floral design, chiffon fabric, light and breathable."
  }
];

// ---------- 多语言文案 ----------
const I18N = {
  zh: {
    siteName: "跨境现货清仓",
    siteDesc: "1111111111111111111111111111111111111111111111111",
    navHome: "首页",
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
    langBtn: "EN",
    adminTitle: "管理后台（仅自己可见）",
    adminHint: "粘贴表格数据（列：分类,名称,英文名,数量,价格,图片链接(多个用|分隔),信息,描述），一行一个产品",
    adminParse: "解析并保存",
    adminExport: "导出 data.js 代码",
    adminClear: "清空本地数据",
    adminSaved: "已保存到本地浏览器",
    adminExported: "已复制到剪贴板，请粘贴覆盖 data.js 中的 DEFAULT_PRODUCTS"
  },
  en: {
    siteName: "Cross-border Clearance Stock",
    siteDesc: "1111111111111111111111111111111111111111111111111",
    navHome: "Home",
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
    share: "Share this product",
    copyLink: "Copy Link",
    copied: "Link copied",
    back: "Back",
    noProducts: "No products",
    productInfo: "Product Info",
    productDetail: "Description",
    langBtn: "中文",
    adminTitle: "Admin Panel (private)",
    adminHint: "Paste table rows (category,name,nameEn,qty,price,images(separate by |),info,detail), one product per line",
    adminParse: "Parse & Save",
    adminExport: "Export data.js code",
    adminClear: "Clear local data",
    adminSaved: "Saved to local browser",
    adminExported: "Copied. Paste over DEFAULT_PRODUCTS in data.js",
    langBtnAlt: "EN"
  }
};

// ---------- 工具函数 ----------
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
  const map = { usa: "usa", fba: "fba", canada: "canada", germany: "germany", uk: "uk", other: "other" };
  return t(map[cat] || "all");
}
function categoryClass(cat) {
  return { usa: "cat-usa", fba: "cat-fba", canada: "cat-ca", germany: "cat-de", uk: "cat-uk", other: "cat-other" }[cat] || "";
}
function formatPrice(p) { return "¥" + Number(p).toFixed(2); }
function getParam(k) { return new URLSearchParams(location.search).get(k); }

// 语言切换按钮渲染
function renderLangBtn(btn) {
  btn.textContent = getLang() === "zh" ? "EN" : "中文";
  btn.onclick = () => { setLang(getLang() === "zh" ? "en" : "zh"); location.reload(); };
}
