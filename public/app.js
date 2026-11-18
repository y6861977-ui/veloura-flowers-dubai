const DEFAULT_DB = {
  settings: {
    brandName: "VELOURA",
    brandSubtitle: "Maison de Fleurs • Dubai",
    currency: "AED",
    adminPassword: "dubai2026",
    ownerWhatsapp: "+971500000001",
    floristWhatsapp: "+971500000002",
    paymentGatewayUrl: "",
    greenApiIdInstance: "",
    greenApiTokenInstance: ""
  },
  bouquets: [
    {
      id: "b1",
      titleRu: "Crystal Edition — Шляпная коробка с гортензиями и ранункулюсами",
      titleEn: "Crystal Edition — Hydrangea & Ranunculus Hat Box",
      category: "boxes",
      price: 1250,
      floristCost: 800,
      size: "L (Шляпная коробка со стразами)",
      compositionRu: "Розовые и белые голландские гортензии, сливочные ранункулюсы, кустовые розы, диантусы в премиальной коробке с кристаллами и лентами",
      compositionEn: "Pink & white Dutch hydrangeas, buttercream ranunculus, spray roses in a crystal-embellished luxury hat box",
      badgeRu: "Хит LuxeRose Dubai",
      badgeEn: "Dubai Bestseller",
      image: "./uploads/luxerose_2.jpg",
      paymentLink: "",
      inStock: true
    },
    {
      id: "b2",
      titleRu: "Pink Brabus Box — Розы и сиреневая гортензия",
      titleEn: "Pink Brabus Box — Roses & Lilac Hydrangea",
      category: "hydrangea",
      price: 980,
      floristCost: 620,
      size: "L (Высокий бокс)",
      compositionRu: "Пышная композиция в нежно-розовом боксе: сиреневые и пудровые гортензии, французские розы, ранункулюсы и шелковые ленты",
      compositionEn: "Lush blush hat box with lilac & pink hydrangeas, French garden roses, ranunculus & trailing satin ribbons",
      badgeRu: "Выбор клиентов",
      badgeEn: "Client Favorite",
      image: "./uploads/luxerose_1.jpg",
      paymentLink: "",
      inStock: true
    },
    {
      id: "b3",
      titleRu: "Atlantis Royal — Авторский бокс с лентами",
      titleEn: "Atlantis Royal — Signature Ribbon Hat Box",
      category: "boxes",
      price: 1150,
      floristCost: 740,
      size: "L (55 см)",
      compositionRu: "Лиловые и розовые шапки гортензий, желтые ранункулюсы, пионовидные кустовые розы, фирменная коробка со стразами",
      compositionEn: "Lilac & blush hydrangea heads, yellow ranunculus, peony spray roses in a crystal signature box",
      badgeRu: "Премиум коллекция",
      badgeEn: "Luxury Edition",
      image: "./uploads/luxerose_3.jpg",
      paymentLink: "",
      inStock: true
    },
    {
      id: "b4",
      titleRu: "501 Кустовая роза — Гигантская корзина (130 см)",
      titleEn: "501 Spray Roses — Giant Wicker Basket (130 cm)",
      category: "vip",
      price: 3900,
      floristCost: 2650,
      size: "VIP XXL (Диаметр 130 см)",
      compositionRu: "501 нежно-розовая пионовидная кустовая роза в огромной белой плетеной корзине с атласными лентами",
      compositionEn: "501 powder-pink spray roses arranged in an oversized 130 cm white woven basket with satin ribbons",
      badgeRu: "WOW-эффект",
      badgeEn: "Grand VIP",
      image: "./uploads/luxerose_crop_basket.jpg",
      paymentLink: "",
      inStock: true
    },
    {
      id: "b5",
      titleRu: "Marsa Al Arab — Пудровый бокс с гортензией",
      titleEn: "Marsa Al Arab — Blush Hydrangea & Rose Box",
      category: "peony",
      price: 790,
      floristCost: 490,
      size: "M (45 см)",
      compositionRu: "Розовые и малиновые пионовидные розы, голубая и сиреневая гортензия, белые вывернутые розы в фирменной шляпной коробке",
      compositionEn: "Pink & magenta garden roses, lilac hydrangea, reflexed white roses in a blush hat box",
      badgeRu: "Экспресс 90 мин",
      badgeEn: "Express 90 min",
      image: "./uploads/luxerose_11.jpg",
      paymentLink: "",
      inStock: true
    },
    {
      id: "b6",
      titleRu: "Royal Suite — Гранд бокс для особых случаев",
      titleEn: "Royal Suite — Grand Couture Hat Box",
      category: "hydrangea",
      price: 1390,
      floristCost: 890,
      size: "XL (60 см)",
      compositionRu: "Огромная шапка из отборных голландских гортензий, ранункулюсов и кустовых роз в высокой коробке ручной работы",
      compositionEn: "Oversized dome of Dutch hydrangeas, ranunculus & spray roses in a tall handcrafted crystal box",
      badgeRu: "Эксклюзив",
      badgeEn: "Exclusive",
      image: "./uploads/luxerose_12.jpg",
      paymentLink: "",
      inStock: true
    },
    {
      id: "b7",
      titleRu: "Downtown View — Корзина 501 роза Люкс",
      titleEn: "Downtown View — 501 Roses Luxury Basket",
      category: "roses",
      price: 4200,
      floristCost: 2850,
      size: "VIP XXL (130 см)",
      compositionRu: "Королевская корзина из 501 пудровой розы премиум-сорта для самого незабываемого поздравления в Дубае",
      compositionEn: "Royal basket of 501 blush-pink roses for an unforgettable statement gift in Dubai",
      badgeRu: "VIP 501 роза",
      badgeEn: "VIP 501 Roses",
      image: "./uploads/luxerose_8.jpg",
      paymentLink: "",
      inStock: true
    }
  ],
  orders: []
};

let state = {
  lang: 'ru',
  category: 'all',
  hasBackend: true,
  settings: {},
  bouquets: [],
  orders: [],
  activeBouquet: null,
  selectedPaymentMethod: 'Apple Pay (AED)',
  isAdminAuthenticated: sessionStorage.getItem('veloura_admin') === '1'
};

const i18n = {
  ru: {
    topBarDelivery: '✨ Экспресс-доставка по всему Дубаю за 60–90 минут',
    topBarPhoto: '📸 Фото готового букета в WhatsApp перед отправкой',
    topBarPay: '💳 Оплата онлайн в AED (Apple Pay / Visa / Mastercard)',
    heroTitle: 'Авторские букеты с доставкой по Дубаю за 90 минут',
    heroDesc: 'Выберите готовый букет из свежей поставки. Оплатите онлайн в дирхамах (AED) — наш флорист немедленно приступит к сборке и отправит вам фото перед выездом курьера.',
    perk1: 'Бесплатная открытка к каждому букету',
    perk2: 'Доставка в Marina, Downtown, Palm, JBR, DIFC',
    perk3: '100% свежесть цветов',
    catalogHeading: 'Коллекция готовых букетов',
    catalogSub: 'Фиксированная цена в дирхамах (AED) • Мгновенная передача флористу после оплаты',
    buyBtn: 'Купить и оплатить →',
    freeDeliveryLabel: 'Бесплатная доставка по Дубаю',
    modalTitle: 'Оформление и мгновенная оплата'
  },
  en: {
    topBarDelivery: '✨ Express 60–90 Min Delivery Across All Dubai',
    topBarPhoto: '📸 Real Bouquet Photo on WhatsApp Before Dispatch',
    topBarPay: '💳 Instant Online Payment in AED (Apple Pay / Card)',
    heroTitle: 'Luxury Handcrafted Bouquets Delivered in Dubai in 90 Min',
    heroDesc: 'Choose a ready-to-order bouquet from today’s fresh arrival. Pay online in AED — our master florist immediately crafts your bouquet and sends a photo before delivery.',
    perk1: 'Complimentary Signature Gift Card',
    perk2: 'Delivery to Marina, Downtown, Palm, JBR, DIFC',
    perk3: '100% Freshness Guarantee',
    catalogHeading: 'Signature Bouquet Collection',
    catalogSub: 'All-inclusive pricing in AED • Instant Florist Dispatch upon Checkout',
    buyBtn: 'Buy & Pay Now →',
    freeDeliveryLabel: 'Free Delivery in Dubai',
    modalTitle: 'Express Checkout & Instant Payment'
  }
};

function saveLocalFallback() {
  localStorage.setItem('veloura_db_v2', JSON.stringify({
    settings: state.settings,
    bouquets: state.bouquets,
    orders: state.orders
  }));
}

function loadLocalFallback() {
  try {
    const raw = localStorage.getItem('veloura_db_v2');
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return JSON.parse(JSON.stringify(DEFAULT_DB));
}

function buildWaMeLinkClient(phone, text) {
  const cleanPhone = (phone || '').replace(/[^\d]/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}

function buildOwnerWaTextClient(order, settings) {
  const profit = Number(order.price) - Number(order.floristCost || 0);
  return [
    `💰 *НОВЫЙ ОПЛАЧЕННЫЙ ЗАКАЗ #${order.orderNumber}*`,
    `━━━━━━━━━━━━━━━━━━`,
    `💐 *Букет:* ${order.bouquetTitle} (${order.bouquetSize || 'Стандарт'})`,
    `💳 *Оплачено клиентом:* ${order.price} ${settings.currency}`,
    `🌿 *Себестоимость (флористу):* ${order.floristCost} ${settings.currency}`,
    `📈 *Ваша чистая прибыль:* +${profit} ${settings.currency}`,
    `━━━━━━━━━━━━━━━━━━`,
    `📍 *Район / Адрес (Дубай):* ${order.area} — ${order.address}`,
    `⏰ *Время доставки:* ${order.deliveryDate}, ${order.deliveryTime}`,
    `👤 *Заказчик:* ${order.customerName} (${order.customerPhone})`,
    `🎁 *Получатель:* ${order.recipientName || 'Сам заказчик'} (${order.recipientPhone || order.customerPhone})`,
    `💌 *Текст открытки:* ${order.cardText ? `«${order.cardText}»` : 'Без текста'}`,
    `━━━━━━━━━━━━━━━━━━`,
    `✅ Статус оплаты: *ОПЛАЧЕНО ОНЛАЙН (${order.paymentMethod})*`
  ].join('\n');
}

function buildFloristWaTextClient(order, settings) {
  return [
    `🌸 *ЗАКАЗ В РАБОТУ #${order.orderNumber} (ОПЛАЧЕН)*`,
    `━━━━━━━━━━━━━━━━━━`,
    `💐 *Собрать букет:* ${order.bouquetTitle}`,
    `📏 *Размер:* ${order.bouquetSize || 'По стандарту'}`,
    `🌿 *Состав:* ${order.bouquetComposition || 'По фото каталога'}`,
    `🖼 *Фото образца:* ${order.bouquetImage}`,
    `💵 *К выплате вам за сборку:* ${order.floristCost} ${settings.currency}`,
    `━━━━━━━━━━━━━━━━━━`,
    `📍 *Куда доставить:* ${order.area}, ${order.address}`,
    `⏰ *Дата и время:* ${order.deliveryDate} (${order.deliveryTime})`,
    `🎁 *Получатель:* ${order.recipientName || order.customerName}`,
    `📞 *Телефон получателя:* ${order.recipientPhone || order.customerPhone}`,
    order.askRecipientAddress ? `⚠️ *Важно:* Уточнить точный адрес/локацию у получателя в WhatsApp!` : '',
    `💌 *Подписать открытку:* ${order.cardText ? `«${order.cardText}»` : 'Пустая открытка (без текста)'}`,
    `━━━━━━━━━━━━━━━━━━`,
    `📸 *Пожалуйста, пришлите фото готового букета перед отправкой курьером!*`
  ].filter(Boolean).join('\n');
}

async function initApp() {
  const today = new Date().toISOString().split('T')[0];
  const dateInput = document.getElementById('ordDate');
  if (dateInput) dateInput.value = today;

  try {
    const res = await fetch('/api/bootstrap');
    if (!res.ok) throw new Error('Static mode');
    const data = await res.json();
    state.hasBackend = true;
    state.settings = data.settings || {};
    state.bouquets = data.bouquets || [];
    state.orders = data.orders || [];
  } catch (e) {
    state.hasBackend = false;
    const localData = loadLocalFallback();
    state.settings = localData.settings;
    state.bouquets = localData.bouquets;
    state.orders = localData.orders;
  }

  renderAll();
  if (window.location.pathname.endsWith('/admin')) {
    openAdminWithAuth();
  }
}

async function openAdminWithAuth() {
  if (state.isAdminAuthenticated) {
    return switchView('admin');
  }
  const pass = prompt('Введите пароль владельца магазина (по умолчанию: dubai2026):', 'dubai2026');
  if (!pass) return;

  if (state.hasBackend) {
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: pass })
    });
    const data = await res.json();
    if (data.ok) {
      state.isAdminAuthenticated = true;
      sessionStorage.setItem('veloura_admin', '1');
      switchView('admin');
    } else {
      alert('Неверный пароль!');
    }
  } else {
    if (pass === (state.settings.adminPassword || 'dubai2026')) {
      state.isAdminAuthenticated = true;
      sessionStorage.setItem('veloura_admin', '1');
      switchView('admin');
    } else {
      alert('Неверный пароль!');
    }
  }
}

function renderAll() {
  document.getElementById('headerBrandName').textContent = state.settings.brandName || 'VELOURA';
  document.getElementById('headerBrandSub').textContent = state.settings.brandSubtitle || 'Maison de Fleurs • Dubai';
  document.getElementById('ordersCountBadge').textContent = state.orders.length;

  const cleanWa = (state.settings.ownerWhatsapp || '+971500000001').replace(/[^\d]/g, '');
  const waSupport = document.getElementById('headerWaSupport');
  if (waSupport) {
    waSupport.href = `https://wa.me/${cleanWa}?text=${encodeURIComponent('Здравствуйте! Хочу заказать букет с доставкой в Дубае 🌸')}`;
  }

  const t = i18n[state.lang];
  document.getElementById('topBarDelivery').textContent = t.topBarDelivery;
  document.getElementById('topBarPhoto').textContent = t.topBarPhoto;
  document.getElementById('topBarPay').textContent = t.topBarPay;
  document.getElementById('heroTitle').textContent = t.heroTitle;
  document.getElementById('heroDesc').textContent = t.heroDesc;
  document.getElementById('perk1').textContent = t.perk1;
  document.getElementById('perk2').textContent = t.perk2;
  document.getElementById('perk3').textContent = t.perk3;
  document.getElementById('catalogHeading').textContent = t.catalogHeading;
  document.getElementById('catalogSub').textContent = t.catalogSub;
  document.getElementById('modalTitle').textContent = t.modalTitle;

  renderBouquets();
  renderAdmin();
}

function toggleLang() {
  state.lang = state.lang === 'ru' ? 'en' : 'ru';
  renderAll();
}

function switchView(view) {
  const storeEl = document.getElementById('storeView');
  const adminEl = document.getElementById('adminView');
  const btnStore = document.getElementById('btnStoreView');
  const btnAdmin = document.getElementById('btnAdminView');

  if (view === 'admin') {
    storeEl.style.display = 'none';
    adminEl.classList.add('active');
    btnStore.style.display = 'inline-flex';
    btnAdmin.classList.add('active');
  } else {
    storeEl.style.display = 'block';
    adminEl.classList.remove('active');
    btnStore.style.display = 'none';
    btnAdmin.classList.remove('active');
  }
}

function filterCategory(cat) {
  state.category = cat;
  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === cat);
  });
  renderBouquets();
}

function renderBouquets() {
  const grid = document.getElementById('bouquetGrid');
  const t = i18n[state.lang];
  const currency = state.settings.currency || 'AED';

  const list = state.bouquets.filter(b => {
    if (!b.inStock) return false;
    if (state.category === 'all') return true;
    return b.category === state.category;
  });

  grid.innerHTML = list.map(b => {
    const title = state.lang === 'en' ? (b.titleEn || b.titleRu) : b.titleRu;
    const comp = state.lang === 'en' ? (b.compositionEn || b.compositionRu) : b.compositionRu;
    const badge = state.lang === 'en' ? (b.badgeEn || b.badgeRu) : b.badgeRu;

    return `
      <article class="bouquet-card">
        <div class="card-image-wrap">
          <img src="${b.image}" alt="${title}" loading="lazy" />
          ${badge ? `<span class="card-badge">${badge}</span>` : ''}
          <span class="card-size">${b.size || 'M'}</span>
        </div>
        <div class="card-body">
          <h3 class="card-title">${title}</h3>
          <p class="card-comp">${comp}</p>
          <div class="card-footer">
            <div class="price-tag">
              <span class="price-amount">${b.price} ${currency}</span>
              <span class="price-delivery">🚚 ${t.freeDeliveryLabel}</span>
            </div>
            <button class="buy-btn" onclick="openCheckout('${b.id}')">
              ${t.buyBtn}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function openCheckout(bouquetId) {
  const b = state.bouquets.find(x => x.id === bouquetId);
  if (!b) return;
  state.activeBouquet = b;
  const currency = state.settings.currency || 'AED';
  const title = state.lang === 'en' ? (b.titleEn || b.titleRu) : b.titleRu;

  document.getElementById('checkoutFormContainer').style.display = 'block';
  document.getElementById('orderSuccessContainer').style.display = 'none';

  document.getElementById('selectedBouquetBar').innerHTML = `
    <img src="${b.image}" alt="${title}" />
    <div style="flex:1;">
      <div style="font-weight:700; font-size:16px; color:var(--primary);">${title}</div>
      <div style="font-size:12.5px; color:var(--text-muted);">Размер: ${b.size} • Доставка по Дубаю: 0 ${currency}</div>
    </div>
    <div style="font-weight:800; font-size:19px; color:var(--primary);">${b.price} ${currency}</div>
  `;

  document.getElementById('checkoutTotalBadge').textContent = `${b.price} ${currency}`;
  document.getElementById('payBtnAmount').textContent = `${b.price} ${currency}`;
  document.getElementById('checkoutModal').classList.add('open');
}

function closeCheckout() {
  document.getElementById('checkoutModal').classList.remove('open');
}

function toggleAddressInput() {
  const checked = document.getElementById('ordAskRecipient').checked;
  const addrInput = document.getElementById('ordAddress');
  if (checked) {
    addrInput.required = false;
    addrInput.value = '';
    addrInput.placeholder = 'Уточним у получателя в WhatsApp';
    addrInput.disabled = true;
  } else {
    addrInput.required = true;
    addrInput.disabled = false;
    addrInput.placeholder = 'Address Dubai Marina, apt 1405';
  }
}

function selectPayMethod(el, method) {
  state.selectedPaymentMethod = method;
  document.querySelectorAll('.pay-method-option').forEach(x => x.classList.remove('active'));
  el.classList.add('active');
}

async function submitOrderAndPay(e) {
  e.preventDefault();
  if (!state.activeBouquet) return;

  const btn = document.getElementById('payNowBtn');
  const origHtml = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = '⏳ Обработка оплаты и отправка в WhatsApp...';

  const payload = {
    bouquetId: state.activeBouquet.id,
    bouquetTitle: state.activeBouquet.titleRu,
    bouquetSize: state.activeBouquet.size,
    price: state.activeBouquet.price,
    customerName: document.getElementById('ordCustomerName').value.trim(),
    customerPhone: document.getElementById('ordCustomerPhone').value.trim(),
    recipientName: document.getElementById('ordRecipientName').value.trim(),
    recipientPhone: document.getElementById('ordRecipientPhone').value.trim(),
    askRecipientAddress: document.getElementById('ordAskRecipient').checked,
    area: document.getElementById('ordArea').value,
    address: document.getElementById('ordAddress').value.trim(),
    deliveryDate: document.getElementById('ordDate').value,
    deliveryTime: document.getElementById('ordTime').value,
    cardText: document.getElementById('ordCardText').value.trim(),
    paymentMethod: state.selectedPaymentMethod
  };

  if (state.hasBackend) {
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      btn.disabled = false;
      btn.innerHTML = origHtml;

      if (data.ok && data.order) {
        state.orders.unshift(data.order);
        renderAll();
        if (data.order.redirectPaymentUrl) {
          window.open(data.order.redirectPaymentUrl, '_blank');
        }
        showOrderSuccessModal(data.order);
      }
      return;
    } catch (err) {}
  }

  // Fallback for static hosting (GitHub Pages)
  const b = state.activeBouquet;
  const orderNumber = 1001 + state.orders.length;
  const order = {
    id: 'ord_' + Date.now(),
    orderNumber,
    createdAt: new Date().toISOString(),
    bouquetId: b.id,
    bouquetTitle: b.titleRu,
    bouquetSize: b.size,
    bouquetComposition: b.compositionRu,
    bouquetImage: b.image,
    price: Number(b.price),
    floristCost: Number(b.floristCost),
    profit: Number(b.price) - Number(b.floristCost),
    ...payload,
    address: payload.askRecipientAddress ? 'Уточнить у получателя по телефону/WhatsApp' : payload.address,
    redirectPaymentUrl: b.paymentLink || state.settings.paymentGatewayUrl || ''
  };
  order.ownerWhatsappText = buildOwnerWaTextClient(order, state.settings);
  order.floristWhatsappText = buildFloristWaTextClient(order, state.settings);
  order.ownerWaLink = buildWaMeLinkClient(state.settings.ownerWhatsapp, order.ownerWhatsappText);
  order.floristWaLink = buildWaMeLinkClient(state.settings.floristWhatsapp, order.floristWhatsappText);

  state.orders.unshift(order);
  saveLocalFallback();
  btn.disabled = false;
  btn.innerHTML = origHtml;
  renderAll();
  if (order.redirectPaymentUrl) {
    window.open(order.redirectPaymentUrl, '_blank');
  }
  showOrderSuccessModal(order);
}

function showOrderSuccessModal(order) {
  document.getElementById('checkoutFormContainer').style.display = 'none';
  const box = document.getElementById('orderSuccessContainer');
  box.style.display = 'block';
  const currency = state.settings.currency || 'AED';

  box.innerHTML = `
    <div class="wa-dispatch-box">
      <div style="font-size: 20px; font-weight: 700; color: #166534; margin-bottom: 6px;">
        ✅ Заказ #${order.orderNumber} успешно оплачен (${order.price} ${currency})!
      </div>
      <div style="font-size: 13.5px; color: #14532d;">
        Система автоматически сформировала <b>2 разных уведомления для WhatsApp</b>:
        одно для вас (с расчетом вашей чистой прибыли <b>+${order.profit} ${currency}</b>) и второе — рабочее задание для вашего флориста (без вашей наценки, только себестоимость <b>${order.floristCost} ${currency}</b>, состав и адрес доставки).
      </div>
    </div>

    <div class="wa-preview-grid">
      <div class="wa-card">
        <div>
          <div style="font-weight:700; color:#075E54; font-size:13px;">📲 1. Сообщение ВАМ (${state.settings.ownerWhatsapp})</div>
          <pre>${order.ownerWhatsappText}</pre>
        </div>
        <a href="${order.ownerWaLink}" target="_blank" class="wa-btn">
          Открыть в WhatsApp (Вам) ↗
        </a>
      </div>

      <div class="wa-card">
        <div>
          <div style="font-weight:700; color:#075E54; font-size:13px;">🌸 2. Задание ФЛОРИСТУ (${state.settings.floristWhatsapp})</div>
          <pre>${order.floristWhatsappText}</pre>
        </div>
        <a href="${order.floristWaLink}" target="_blank" class="wa-btn">
          Отправить Флористу в WhatsApp ↗
        </a>
      </div>
    </div>

    <div style="margin-top: 18px; display: flex; gap: 10px; justify-content: flex-end;">
      <button class="lang-btn" onclick="closeCheckout(); openAdminWithAuth();">Посмотреть заказ в Админке</button>
      <button class="buy-btn" onclick="closeCheckout()">Вернуться в магазин</button>
    </div>
  `;
}

function updateMarginPreview() {
  const price = Number(document.getElementById('bPrice').value || 0);
  const cost = Number(document.getElementById('bFloristCost').value || 0);
  const profit = price - cost;
  const currency = state.settings.currency || 'AED';
  const el = document.getElementById('marginPreview');
  el.textContent = `💵 Ваша чистая прибыль с этого букета: ${profit >= 0 ? '+' : ''}${profit} ${currency}`;
  el.style.color = profit >= 0 ? '#166534' : '#C93B3B';
}

function renderAdmin() {
  const currency = state.settings.currency || 'AED';

  document.getElementById('setBrandName').value = state.settings.brandName || '';
  document.getElementById('setBrandSub').value = state.settings.brandSubtitle || '';
  document.getElementById('setOwnerWa').value = state.settings.ownerWhatsapp || '';
  document.getElementById('setFloristWa').value = state.settings.floristWhatsapp || '';
  document.getElementById('setPaymentUrl').value = state.settings.paymentGatewayUrl || '';
  document.getElementById('setAdminPass').value = state.settings.adminPassword || 'dubai2026';
  document.getElementById('setGreenId').value = state.settings.greenApiIdInstance || '';
  document.getElementById('setGreenToken').value = state.settings.greenApiTokenInstance || '';

  const totalOrders = state.orders.length;
  const totalRevenue = state.orders.reduce((acc, o) => acc + Number(o.price || 0), 0);
  const totalFlorist = state.orders.reduce((acc, o) => acc + Number(o.floristCost || 0), 0);
  const totalProfit = totalRevenue - totalFlorist;

  document.getElementById('statTotalOrders').textContent = totalOrders;
  document.getElementById('statRevenue').textContent = `${totalRevenue} ${currency}`;
  document.getElementById('statFloristPayout').textContent = `${totalFlorist} ${currency}`;
  document.getElementById('statNetProfit').textContent = `+${totalProfit} ${currency}`;

  const ordersBody = document.getElementById('adminOrdersBody');
  if (state.orders.length === 0) {
    ordersBody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:var(--text-muted); padding:24px;">Пока нет заказов. Нажмите «Вернуться на витрину» и оформите тестовый заказ, чтобы увидеть, как приходят заявки вам и флористу!</td></tr>`;
  } else {
    ordersBody.innerHTML = state.orders.map(o => `
      <tr>
        <td><b>#${o.orderNumber}</b><br/><span class="badge-paid">ОПЛАЧЕН</span></td>
        <td><b>${o.bouquetTitle}</b><br/><span style="color:var(--text-muted);font-size:12px;">${o.bouquetSize}</span></td>
        <td>
          👤 ${o.customerName} (${o.customerPhone})<br/>
          🎁 Получатель: ${o.recipientName || 'Сам'} ${o.recipientPhone || ''}
        </td>
        <td>
          📍 <b>${o.area}</b><br/>
          ${o.address}<br/>
          ⏰ ${o.deliveryDate}, ${o.deliveryTime}
        </td>
        <td>
          Клиент: <b>${o.price} ${currency}</b><br/>
          Флористу: ${o.floristCost} ${currency}<br/>
          <span style="color:#166534; font-weight:700;">Прибыль: +${o.profit} ${currency}</span>
        </td>
        <td>
          <div style="display:flex; flex-direction:column; gap:6px;">
            <a href="${o.floristWaLink}" target="_blank" class="wa-btn" style="font-size:12px; padding:7px 10px;">
              🌸 Скинуть Флористу в WhatsApp
            </a>
            <a href="${o.ownerWaLink}" target="_blank" class="lang-btn" style="font-size:12px; justify-content:center; text-decoration:none;">
              📲 Копия мне в WhatsApp
            </a>
          </div>
        </td>
      </tr>
    `).join('');
  }

  const bouquetsBody = document.getElementById('adminBouquetsBody');
  bouquetsBody.innerHTML = state.bouquets.map(b => {
    const profit = Number(b.price) - Number(b.floristCost || 0);
    return `
      <tr>
        <td><img src="${b.image}" style="width:52px; height:52px; object-fit:cover; border-radius:8px;" /></td>
        <td><b>${b.titleRu}</b><br/><span style="font-size:12px; color:var(--text-muted);">${b.size}</span></td>
        <td><b>${b.price} ${currency}</b></td>
        <td>${b.floristCost} ${currency}</td>
        <td style="color:#166534; font-weight:700;">+${profit} ${currency}</td>
        <td>
          <div style="display:flex; gap:8px;">
            <button class="lang-btn" onclick="editBouquet('${b.id}')">✏️ Изменить</button>
            <button class="lang-btn" style="color:var(--danger);" onclick="deleteBouquet('${b.id}')">🗑</button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function editBouquet(id) {
  const b = state.bouquets.find(x => x.id === id);
  if (!b) return;
  document.getElementById('bouquetFormTitle').textContent = '✏️ Редактировать букет';
  document.getElementById('editBouquetId').value = b.id;
  document.getElementById('bTitleRu').value = b.titleRu;
  document.getElementById('bTitleEn').value = b.titleEn || '';
  document.getElementById('bPrice').value = b.price;
  document.getElementById('bFloristCost').value = b.floristCost;
  document.getElementById('bCategory').value = b.category || 'roses';
  document.getElementById('bSize').value = b.size || 'M (50 см)';
  document.getElementById('bCompRu').value = b.compositionRu || '';
  document.getElementById('bImageUrl').value = b.image || '';
  document.getElementById('bPaymentLink').value = b.paymentLink || '';
  document.getElementById('cancelEditBtn').style.display = 'inline-flex';
  updateMarginPreview();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetBouquetForm() {
  document.getElementById('bouquetForm').reset();
  document.getElementById('editBouquetId').value = '';
  document.getElementById('bouquetFormTitle').textContent = '➕ Добавить готовый букет на витрину';
  document.getElementById('cancelEditBtn').style.display = 'none';
}

function readFileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function saveBouquet(e) {
  e.preventDefault();
  const fileInput = document.getElementById('bImageFile');
  let imageBase64 = '';
  if (fileInput.files && fileInput.files[0]) {
    imageBase64 = await readFileAsBase64(fileInput.files[0]);
  }

  const payload = {
    id: document.getElementById('editBouquetId').value || undefined,
    titleRu: document.getElementById('bTitleRu').value.trim(),
    titleEn: document.getElementById('bTitleEn').value.trim(),
    price: Number(document.getElementById('bPrice').value),
    floristCost: Number(document.getElementById('bFloristCost').value),
    category: document.getElementById('bCategory').value,
    size: document.getElementById('bSize').value.trim(),
    compositionRu: document.getElementById('bCompRu').value.trim(),
    image: document.getElementById('bImageUrl').value.trim(),
    paymentLink: document.getElementById('bPaymentLink').value.trim(),
    imageBase64
  };

  if (state.hasBackend) {
    const res = await fetch('/api/bouquets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (data.ok) {
      state.bouquets = data.bouquets;
      resetBouquetForm();
      renderAll();
    }
  } else {
    if (payload.id) {
      const idx = state.bouquets.findIndex(b => b.id === payload.id);
      if (idx !== -1) state.bouquets[idx] = { ...state.bouquets[idx], ...payload, image: imageBase64 || payload.image || state.bouquets[idx].image };
    } else {
      state.bouquets.unshift({ ...payload, id: 'b_' + Date.now(), image: imageBase64 || payload.image, inStock: true });
    }
    saveLocalFallback();
    resetBouquetForm();
    renderAll();
  }
}

async function deleteBouquet(id) {
  if (!confirm('Удалить этот букет с витрины?')) return;
  if (state.hasBackend) {
    const res = await fetch(`/api/bouquets/${id}`, { method: 'DELETE' });
    const data = await res.json();
    if (data.ok) {
      state.bouquets = data.bouquets;
      renderAll();
    }
  } else {
    state.bouquets = state.bouquets.filter(b => b.id !== id);
    saveLocalFallback();
    renderAll();
  }
}

async function saveSettings(e) {
  e.preventDefault();
  const payload = {
    brandName: document.getElementById('setBrandName').value.trim(),
    brandSubtitle: document.getElementById('setBrandSub').value.trim(),
    ownerWhatsapp: document.getElementById('setOwnerWa').value.trim(),
    floristWhatsapp: document.getElementById('setFloristWa').value.trim(),
    paymentGatewayUrl: document.getElementById('setPaymentUrl').value.trim(),
    adminPassword: document.getElementById('setAdminPass').value.trim(),
    greenApiIdInstance: document.getElementById('setGreenId').value.trim(),
    greenApiTokenInstance: document.getElementById('setGreenToken').value.trim()
  };

  if (state.hasBackend) {
    const res = await fetch('/api/settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (data.ok) {
      state.settings = data.settings;
      renderAll();
      alert('Настройки магазина, пароль и номера WhatsApp сохранены!');
    }
  } else {
    state.settings = { ...state.settings, ...payload };
    saveLocalFallback();
    renderAll();
    alert('Настройки сохранены!');
  }
}

document.addEventListener('DOMContentLoaded', initApp);
