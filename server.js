const http = require('http');
const fs = require('fs');
const path = require('path');
const https = require('https');

const PORT = process.env.PORT || 3040;
const DATA_DIR = path.join(__dirname, 'data');
const UPLOADS_DIR = path.join(__dirname, 'public', 'uploads');

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR, { recursive: true });

const DB_FILE = path.join(DATA_DIR, 'db.json');

const initialData = {
  settings: {
    brandName: "VELOURA",
    brandSubtitle: "Maison de Fleurs • Dubai",
    currency: "AED",
    adminPassword: process.env.ADMIN_PASSWORD || "dubai2026",
    ownerWhatsapp: "+971500000001",
    floristWhatsapp: "+971500000002",
    deliveryFee: 0,
    freeDeliveryThreshold: 300,
    paymentMode: "integrated", // "integrated" | "payment_link"
    paymentGatewayUrl: "", // e.g. https://pay.ziina.com/... or Stripe link
    greenApiIdInstance: "",
    greenApiTokenInstance: ""
  },
  bouquets: [
    {
      id: "b1",
      titleRu: "Royal Velvet — 51 Эквадорская роза",
      titleEn: "Royal Velvet — 51 Ecuadorian Roses",
      category: "roses",
      price: 690,
      floristCost: 440,
      size: "L (60 см)",
      compositionRu: "51 премиальная роза сорта Explorer / Freedom, дизайнерская матовая упаковка, атласная лента, кризал и фирменная открытка",
      compositionEn: "51 premium Explorer/Freedom roses, luxury matte wrapping, satin ribbon, flower food & signature card",
      badgeRu: "Хит в Дубае",
      badgeEn: "Dubai Bestseller",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=85",
      paymentLink: "",
      inStock: true
    },
    {
      id: "b2",
      titleRu: "White Mirage — Облако из гортензий и роз",
      titleEn: "White Mirage — Hydrangea & Rose Cloud",
      category: "hydrangea",
      price: 550,
      floristCost: 350,
      size: "M (50 см)",
      compositionRu: "3 пышные голландские белые гортензии, 15 белых роз Playa Blanca, эвкалипт Синерея",
      compositionEn: "3 lush Dutch white hydrangeas, 15 Playa Blanca white roses, Cinerea eucalyptus",
      badgeRu: "Нежность",
      badgeEn: "Pure Elegance",
      image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=85",
      paymentLink: "",
      inStock: true
    },
    {
      id: "b3",
      titleRu: "Pink Desert — Пионовидные розы O'Hara",
      titleEn: "Pink Desert — Peony Roses O'Hara",
      category: "peony",
      price: 620,
      floristCost: 390,
      size: "M (50 см)",
      compositionRu: "25 ароматных французских пионовидных роз Pink O'Hara, кустовая роза Бомбастик, пудровая упаковка",
      compositionEn: "25 fragrant French Pink O'Hara garden roses, Bombastic spray roses, blush wrap",
      badgeRu: "Ароматный",
      badgeEn: "Fragrant",
      image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=900&q=85",
      paymentLink: "",
      inStock: true
    },
    {
      id: "b4",
      titleRu: "Marina Sunset — Шляпная коробка Люкс",
      titleEn: "Marina Sunset — Luxury Hat Box",
      category: "boxes",
      price: 780,
      floristCost: 490,
      size: "L (Коробка 35 см)",
      compositionRu: "Пионовидные розы Kahala, ранункулюсы, орхидеи Цимбидиум, велюровая шляпная коробка с оазисом",
      compositionEn: "Kahala roses, ranunculus, Cymbidium orchids in a velvet hat box with floral foam",
      badgeRu: "В шляпной коробке",
      badgeEn: "Hat Box",
      image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=900&q=85",
      paymentLink: "",
      inStock: true
    },
    {
      id: "b5",
      titleRu: "Blush Harmony — Нежный комплимент",
      titleEn: "Blush Harmony — Delicate Bouquet",
      category: "peony",
      price: 390,
      floristCost: 240,
      size: "S (40 см)",
      compositionRu: "15 роз сорта Quicksand и Sweet Avalanche, лизиантус, матовая калька",
      compositionEn: "15 Quicksand & Sweet Avalanche roses, eustoma, signature wrapping",
      badgeRu: "Быстрая доставка",
      badgeEn: "Express 90 min",
      image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=900&q=85",
      paymentLink: "",
      inStock: true
    },
    {
      id: "b6",
      titleRu: "Palm Imperial — 101 Премиум роза",
      titleEn: "Palm Imperial — 101 Premium Roses",
      category: "vip",
      price: 1350,
      floristCost: 850,
      size: "VIP XL (70 см)",
      compositionRu: "101 отборная эквадорская роза (красные, белые или нежно-розовые на выбор), премиум оформление",
      compositionEn: "101 hand-picked Ecuadorian roses (red, white, or blush pink), couture wrapping",
      badgeRu: "VIP коллекция",
      badgeEn: "VIP Edition",
      image: "https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?auto=format&fit=crop&w=900&q=85",
      paymentLink: "",
      inStock: true
    }
  ],
  orders: []
};

function loadDb() {
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify(initialData, null, 2), 'utf8');
    return JSON.parse(JSON.stringify(initialData));
  }
  try {
    const db = JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
    if (!db.settings.adminPassword) db.settings.adminPassword = "dubai2026";
    return db;
  } catch (e) {
    return JSON.parse(JSON.stringify(initialData));
  }
}

function saveDb(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
}

function formatOwnerWhatsAppMessage(order, settings) {
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
    order.comment ? `📝 *Комментарий:* ${order.comment}` : '',
    `━━━━━━━━━━━━━━━━━━`,
    `✅ Статус оплаты: *ОПЛАЧЕНО ОНЛАЙН (${order.paymentMethod})*`
  ].filter(Boolean).join('\n');
}

function formatFloristWhatsAppMessage(order, settings) {
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
    order.comment ? `📝 *Пожелание к заказу:* ${order.comment}` : '',
    `━━━━━━━━━━━━━━━━━━`,
    `📸 *Пожалуйста, пришлите фото готового букета перед отправкой курьером!*`
  ].filter(Boolean).join('\n');
}

function sendGreenApiMessage(idInstance, apiTokenInstance, phone, message) {
  return new Promise((resolve) => {
    if (!idInstance || !apiTokenInstance || !phone) {
      return resolve({ sent: false, reason: 'not_configured' });
    }
    const cleanPhone = phone.replace(/[^\d]/g, '');
    if (!cleanPhone) return resolve({ sent: false, reason: 'invalid_phone' });

    const payload = JSON.stringify({
      chatId: `${cleanPhone}@c.us`,
      message: message
    });

    const urlPath = `/waInstance${idInstance}/sendMessage/${apiTokenInstance}`;
    const req = https.request({
      hostname: 'api.green-api.com',
      path: urlPath,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        resolve({ sent: res.statusCode >= 200 && res.statusCode < 300, statusCode: res.statusCode, response: body });
      });
    });

    req.on('error', (err) => {
      resolve({ sent: false, reason: err.message });
    });
    req.write(payload);
    req.end();
  });
}

function buildWaMeLink(phone, text) {
  const cleanPhone = (phone || '').replace(/[^\d]/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
      if (body.length > 15 * 1024 * 1024) {
        reject(new Error('Payload too large'));
      }
    });
    req.on('end', () => {
      if (!body) return resolve({});
      try {
        resolve(JSON.parse(body));
      } catch (e) {
        reject(e);
      }
    });
    req.on('error', reject);
  });
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer(async (req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;

  // API routes
  if (pathname === '/api/bootstrap' && req.method === 'GET') {
    const db = loadDb();
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    return res.end(JSON.stringify(db));
  }

  if (pathname === '/api/admin/login' && req.method === 'POST') {
    try {
      const body = await parseBody(req);
      const db = loadDb();
      if (body.password === db.settings.adminPassword) {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        return res.end(JSON.stringify({ ok: true }));
      }
      res.writeHead(401, { 'Content-Type': 'application/json; charset=utf-8' });
      return res.end(JSON.stringify({ ok: false, error: 'Неверный пароль' }));
    } catch (e) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: e.message }));
    }
  }

  if (pathname === '/api/settings' && req.method === 'POST') {
    try {
      const body = await parseBody(req);
      const db = loadDb();
      db.settings = { ...db.settings, ...body };
      saveDb(db);
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      return res.end(JSON.stringify({ ok: true, settings: db.settings }));
    } catch (e) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: e.message }));
    }
  }

  if (pathname === '/api/bouquets' && req.method === 'POST') {
    try {
      const body = await parseBody(req);
      const db = loadDb();

      let imageUrl = body.image || '';
      if (body.imageBase64 && body.imageBase64.startsWith('data:image/')) {
        const matches = body.imageBase64.match(/^data:image\/([a-zA-Z0-9+]+);base64,(.+)$/);
        if (matches) {
          const ext = matches[1] === 'jpeg' ? 'jpg' : matches[1];
          const buffer = Buffer.from(matches[2], 'base64');
          const fileName = `bouquet_${Date.now()}.${ext}`;
          fs.writeFileSync(path.join(UPLOADS_DIR, fileName), buffer);
          imageUrl = `/uploads/${fileName}`;
        }
      }

      if (body.id) {
        const idx = db.bouquets.findIndex(b => b.id === body.id);
        if (idx !== -1) {
          db.bouquets[idx] = {
            ...db.bouquets[idx],
            ...body,
            image: imageUrl || db.bouquets[idx].image,
            price: Number(body.price),
            floristCost: Number(body.floristCost || 0)
          };
          delete db.bouquets[idx].imageBase64;
        }
      } else {
        const newBouquet = {
          id: 'b_' + Date.now(),
          titleRu: body.titleRu || 'Новый букет',
          titleEn: body.titleEn || body.titleRu || 'New Bouquet',
          category: body.category || 'roses',
          price: Number(body.price || 450),
          floristCost: Number(body.floristCost || 280),
          size: body.size || 'M (50 см)',
          compositionRu: body.compositionRu || '',
          compositionEn: body.compositionEn || body.compositionRu || '',
          badgeRu: body.badgeRu || 'Новинка',
          badgeEn: body.badgeEn || 'New',
          image: imageUrl || 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=85',
          paymentLink: body.paymentLink || '',
          inStock: body.inStock !== false
        };
        db.bouquets.unshift(newBouquet);
      }

      saveDb(db);
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      return res.end(JSON.stringify({ ok: true, bouquets: db.bouquets }));
    } catch (e) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: e.message }));
    }
  }

  if (pathname.startsWith('/api/bouquets/') && req.method === 'DELETE') {
    const id = pathname.split('/').pop();
    const db = loadDb();
    db.bouquets = db.bouquets.filter(b => b.id !== id);
    saveDb(db);
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    return res.end(JSON.stringify({ ok: true, bouquets: db.bouquets }));
  }

  if (pathname === '/api/orders' && req.method === 'POST') {
    try {
      const body = await parseBody(req);
      const db = loadDb();
      const bouquet = db.bouquets.find(b => b.id === body.bouquetId) || {};

      const orderNumber = 1001 + db.orders.length;
      const order = {
        id: 'ord_' + Date.now(),
        orderNumber,
        createdAt: new Date().toISOString(),
        bouquetId: body.bouquetId,
        bouquetTitle: body.bouquetTitle || bouquet.titleRu || 'Букет',
        bouquetSize: body.bouquetSize || bouquet.size || 'M',
        bouquetComposition: bouquet.compositionRu || '',
        bouquetImage: bouquet.image || '',
        price: Number(body.price || bouquet.price || 0),
        floristCost: Number(bouquet.floristCost || Math.round((body.price || 0) * 0.65)),
        profit: Number(body.price || bouquet.price || 0) - Number(bouquet.floristCost || Math.round((body.price || 0) * 0.65)),
        customerName: body.customerName || 'Клиент',
        customerPhone: body.customerPhone || '',
        recipientName: body.recipientName || '',
        recipientPhone: body.recipientPhone || '',
        askRecipientAddress: Boolean(body.askRecipientAddress),
        area: body.area || 'Dubai Marina',
        address: body.askRecipientAddress ? 'Уточнить у получателя по телефону/WhatsApp' : (body.address || ''),
        deliveryDate: body.deliveryDate || 'Сегодня',
        deliveryTime: body.deliveryTime || 'Ближайшее (90 мин)',
        cardText: body.cardText || '',
        comment: body.comment || '',
        paymentMethod: body.paymentMethod || 'Apple Pay / Card (AED)',
        paymentStatus: 'PAID',
        orderStatus: 'sent_to_florist',
        redirectPaymentUrl: bouquet.paymentLink || db.settings.paymentGatewayUrl || ''
      };

      const ownerMsg = formatOwnerWhatsAppMessage(order, db.settings);
      const floristMsg = formatFloristWhatsAppMessage(order, db.settings);

      order.ownerWhatsappText = ownerMsg;
      order.floristWhatsappText = floristMsg;
      order.ownerWaLink = buildWaMeLink(db.settings.ownerWhatsapp, ownerMsg);
      order.floristWaLink = buildWaMeLink(db.settings.floristWhatsapp, floristMsg);

      const [ownerApiRes, floristApiRes] = await Promise.all([
        sendGreenApiMessage(
          db.settings.greenApiIdInstance,
          db.settings.greenApiTokenInstance,
          db.settings.ownerWhatsapp,
          ownerMsg
        ),
        sendGreenApiMessage(
          db.settings.greenApiIdInstance,
          db.settings.greenApiTokenInstance,
          db.settings.floristWhatsapp,
          floristMsg
        )
      ]);

      order.autoDispatch = {
        ownerSent: ownerApiRes.sent,
        floristSent: floristApiRes.sent
      };

      db.orders.unshift(order);
      saveDb(db);

      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      return res.end(JSON.stringify({ ok: true, order }));
    } catch (e) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: e.message }));
    }
  }

  // Serve static files from /public
  let filePath = pathname === '/' ? '/index.html' : pathname;
  if (pathname === '/admin') filePath = '/index.html';

  const fullPath = path.join(__dirname, 'public', filePath);
  if (fullPath.startsWith(path.join(__dirname, 'public')) && fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
    const ext = path.extname(fullPath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
    return fs.createReadStream(fullPath).pipe(res);
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Not found');
});

server.listen(PORT, () => {
  console.log(`VELOURA Flowers Dubai server running at http://localhost:${PORT}`);
});
