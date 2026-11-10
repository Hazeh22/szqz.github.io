<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>商品展示</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: -apple-system, "Segoe UI", "Microsoft YaHei", sans-serif; background: #f5f6f8; color: #222; padding: 24px; }
  h1 { font-size: 22px; margin-bottom: 16px; }
  .filters { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 20px; }
  .filters select { padding: 8px 12px; border: 1px solid #ccc; border-radius: 6px; background: #fff; font-size: 14px; }
  .count { font-size: 13px; color: #666; margin-bottom: 12px; }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 16px; }
  .card { background: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,.08); display: flex; flex-direction: column; }
  .card img { width: 100%; height: 160px; object-fit: cover; background: #eee; }
  .card .info { padding: 12px; display: flex; flex-direction: column; gap: 6px; flex: 1; }
  .card .name { font-weight: 600; font-size: 15px; }
  .card .meta { font-size: 13px; color: #666; }
  .card .addr { font-size: 12px; color: #888; line-height: 1.4; }
  .empty { padding: 40px; text-align: center; color: #999; }
</style>
</head>
<body>

<h1>商品展示</h1>

<div class="filters">
  <select id="filterCountry"><option value="">全部国家</option></select>
  <select id="filterCategory"><option value="">全部品类</option></select>
</div>

<div class="count" id="count"></div>
<div class="grid" id="grid"></div>

<script>
// ===== 这里改成你自己的商品数据 =====
const products = [
  {
    name: "示例商品 A",
    image: "https://picsum.photos/seed/a/400/300",
    quantity: 120,
    address: "中国 · 深圳 · 南山区科技园",
    country: "中国",
    category: "电子产品"
  },
  {
    name: "示例商品 B",
    image: "https://picsum.photos/seed/b/400/300",
    quantity: 45,
    address: "美国 · 加州 · 旧金山",
    country: "美国",
    category: "家居用品"
  },
  {
    name: "示例商品 C",
    image: "https://picsum.photos/seed/c/400/300",
    quantity: 8,
    address: "日本 · 东京 · 涩谷区",
    country: "日本",
    category: "电子产品"
  },
  {
    name: "示例商品 D",
    image: "https://picsum.photos/seed/d/400/300",
    quantity: 300,
    address: "德国 · 柏林 · 米特区",
    country: "德国",
    category: "服装"
  }
];
// ====================================

const grid = document.getElementById("grid");
const countEl = document.getElementById("count");
const countrySel = document.getElementById("filterCountry");
const categorySel = document.getElementById("filterCategory");

// 生成筛选项
const countries = [...new Set(products.map(p => p.country))];
const categories = [...new Set(products.map(p => p.category))];
countries.forEach(c => countrySel.insertAdjacentHTML("beforeend", `<option value="${c}">${c}</option>`));
categories.forEach(c => categorySel.insertAdjacentHTML("beforeend", `<option value="${c}">${c}</option>`));

function render() {
  const fc = countrySel.value;
  const fg = categorySel.value;
  const list = products.filter(p => (!fc || p.country === fc) && (!fg || p.category === fg));

  countEl.textContent = `共 ${list.length} 件商品`;

  if (!list.length) {
    grid.innerHTML = '<div class="empty">没有符合条件的商品</div>';
    return;
  }

  grid.innerHTML = list.map(p => `
    <div class="card">
      <img src="${p.image}" alt="${p.name}" loading="lazy">
      <div class="info">
        <div class="name">${p.name}</div>
        <div class="meta">数量：${p.quantity}</div>
        <div class="meta">品类：${p.category}</div>
        <div class="addr">地址：${p.address}</div>
      </div>
    </div>
  `).join("");
}

countrySel.addEventListener("change", render);
categorySel.addEventListener("change", render);
render();
</script>

</body>
</html>
