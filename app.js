/**
 * МЯСНОЙ БУТИК — ИНТЕРАКТИВНОЕ ПРИЛОЖЕНИЕ
 * Каталог (Меню / Карточки / Подкатегории) + Корзина + WhatsApp/Telegram
 * Соответствует AGENTS.md: решение без лишних библиотек, чистый нативный JS.
 */

// ==========================================================================
// 1. ДАННЫЕ КАТАЛОГА (Все 54 позиции с подкатегориями)
// ==========================================================================
const PRODUCTS = [
  // --- Говядина: свежее мясо и отрубы (19 позиций) ---
  { id: 'b1', name: 'Лопатка', price: 730, unit: '₽ / кг', cat: 'beef', subcat: 'fillet', desc: 'Отборная мраморная говядина, идеальна для запекания и тушения.' },
  { id: 'b2', name: 'Подлопатка', price: 810, unit: '₽ / кг', cat: 'beef', subcat: 'fillet', desc: 'Нежное мясо с тонкой жировой прослойкой для сочных блюд.' },
  { id: 'b3', name: 'Мякоть', price: 960, unit: '₽ / кг', cat: 'beef', subcat: 'fillet', desc: 'Чистое филе без кости и излишков жира, универсальный отруб.' },
  { id: 'b4', name: 'Мякоть (лангет)', price: 1150, unit: '₽ / кг', cat: 'beef', subcat: 'fillet', desc: 'Премиальный срез для приготовления быстрого нежнейшего лангета.' },
  { id: 'b5', name: 'Вырезка (трубочка)', price: 1730, unit: '₽ / кг', cat: 'beef', subcat: 'fillet', desc: 'Самая мягкая и ценная часть говяжьей туши для изысканных блюд.' },
  { id: 'b6', name: 'Вырезка в маринаде', price: 1930, unit: '₽ / кг', cat: 'beef', subcat: 'fillet', desc: 'Вырезка в авторском пряном маринаде из горных трав.' },
  { id: 'b7', name: 'Мякоть зачищенная', price: 1080, unit: '₽ / кг', cat: 'beef', subcat: 'fillet', desc: 'Ювелирная ручная зачистка от жил и пленок.' },
  { id: 'b8', name: 'Гуляш', price: 1200, unit: '₽ / кг', cat: 'beef', subcat: 'fillet', desc: 'Аккуратные кусочки премиальной мякоти для идеального гуляша.' },
  { id: 'b9', name: 'Грудинка', price: 650, unit: '₽ / кг', cat: 'beef', subcat: 'ribs', desc: 'Сочное слоистое мясо на ребрышках для наваристых супов и запекания.' },
  { id: 'b10', name: 'Рёбра', price: 770, unit: '₽ / кг', cat: 'beef', subcat: 'ribs', desc: 'Мясные сахарные ребрышки для барбекю, томления и плова.' },
  { id: 'b11', name: 'Рёбра в маринаде', price: 980, unit: '₽ / кг', cat: 'beef', subcat: 'ribs', desc: 'Ребра в пикантном маринаде с паприкой и чесноком.' },
  { id: 'b12', name: 'Оссобуко', price: 740, unit: '₽ / кг', cat: 'beef', subcat: 'ribs', desc: 'Поперечный срез голяшки с мозговой косточкой для нежного томления.' },
  { id: 'b13', name: 'Фарш (5% жирности)', price: 960, unit: '₽ / кг', cat: 'beef', subcat: 'mince', desc: 'Диетический постный фарш из цельной говяжьей мякоти.' },
  { id: 'b14', name: 'Фарш (20% жирности)', price: 960, unit: '₽ / кг', cat: 'beef', subcat: 'mince', desc: 'Классический сочный фарш идеальной текстуры для котлет и начинок.' },
  { id: 'b15', name: 'Брискит (под заказ)', price: 1430, unit: '₽ / кг', cat: 'beef', subcat: 'ribs', desc: 'Мраморная грудинка для классического техасского смокера и запекания.' },
  { id: 'b16', name: 'Отбивная из говядины', price: 1520, unit: '₽ / кг', cat: 'beef', subcat: 'fillet', desc: 'Порционные нежные отбивные, готовые к обжарке.' },
  { id: 'b17', name: 'Молот говяжий', price: 980, unit: '₽ / кг', cat: 'beef', subcat: 'ribs', desc: 'Массивный отруб на кости для длительного запекания.' },
  { id: 'b18', name: 'Печень говяжья', price: 495, unit: '₽ / кг', cat: 'beef', subcat: 'offal', desc: 'Свежая молодая печень, богатая железом и витаминами.' },
  { id: 'b19', name: 'Язык говяжий', price: 795, unit: '₽ / кг', cat: 'beef', subcat: 'offal', desc: 'Деликатесный свежий говяжий язык высшей категории.' },

  // --- Премиальные стейки и шашлык (14 позиций) ---
  { id: 's1', name: 'Рибай без кости', price: 1980, unit: '₽ / кг', cat: 'steaks', subcat: 'fresh', tag: 'ХИТ', desc: 'Король стейков: максимальная мраморность, насыщенный сочный вкус.' },
  { id: 's2', name: 'Рибай на кости', price: 1100, unit: '₽ / кг', cat: 'steaks', subcat: 'fresh', desc: 'Классический стейк на ребре с глубоким ореховым ароматом кости.' },
  { id: 's3', name: 'Тибон', price: 1100, unit: '₽ / кг', cat: 'steaks', subcat: 'fresh', desc: 'Т-образная кость разделяет нежнейшую вырезку и яркий стриплойн.' },
  { id: 's4', name: 'Стриплойн', price: 1100, unit: '₽ / кг', cat: 'steaks', subcat: 'fresh', desc: 'Стейк Нью-Йорк с плотной текстурой и выраженным мясным вкусом.' },
  { id: 's5', name: 'Томагавк', price: 1480, unit: '₽ / кг', cat: 'steaks', subcat: 'fresh', tag: 'ХИТ', desc: 'Внушительный Рибай на длинной зачищенной реберной кости.' },
  { id: 's6', name: 'Рибай без кости в маринаде', price: 2080, unit: '₽ / кг', cat: 'steaks', subcat: 'marinade', desc: 'Премиальный рибай в авторской заправке шеф-повара бутика.' },
  { id: 's7', name: 'Рибай в маринаде (на кости)', price: 1200, unit: '₽ / кг', cat: 'steaks', subcat: 'marinade', desc: 'Сочный коbone-in рибай в пряных кавказских травах.' },
  { id: 's8', name: 'Тибон в маринаде', price: 1200, unit: '₽ / кг', cat: 'steaks', subcat: 'marinade', desc: 'Маринованный стейк Тибон для быстрого и сочного гриля.' },
  { id: 's9', name: 'Стриплойн в маринаде', price: 1200, unit: '₽ / кг', cat: 'steaks', subcat: 'marinade', desc: 'Стриплойн в маринаде с деликатным балансом специй.' },
  { id: 's10', name: 'Томагавк в маринаде', price: 1580, unit: '₽ / кг', cat: 'steaks', subcat: 'marinade', desc: 'Шоу-стейк Томагавк в специальном маринаде для костра и гриля.' },
  { id: 's11', name: 'Альтернативный стейк «Фланк»', price: 1700, unit: '₽ / кг', cat: 'steaks', subcat: 'alt', desc: 'Яркий мясной вкус из пашины, превосходен при medium прожарке.' },
  { id: 's12', name: 'Альтернативный стейк «Спайдер»', price: 1700, unit: '₽ / кг', cat: 'steaks', subcat: 'alt', desc: 'Редкий деликатесный отруб с паутинообразной мраморностью.' },
  { id: 's13', name: 'Шашлык говяжий', price: 1180, unit: '₽ / кг', cat: 'steaks', subcat: 'shashlik', desc: 'Классический мягкий шашлык из отборной говядины.' },
  { id: 's14', name: 'Шашлык говяжий из Рибая', price: 1880, unit: '₽ / кг', cat: 'steaks', subcat: 'shashlik', tag: 'ХИТ', desc: 'Эксклюзивный шашлык из мраморного толстого края Рибай.' },

  // --- Изделия из теста и национальные блюда (26 позиций) ---
  { id: 'd10', name: 'Манты говядина', price: 790, unit: '₽', cat: 'dough', subcat: 'manti', desc: 'Крупные сочные манты на пару с начинкой из говядины и лука.' },
  { id: 'd11', name: 'Манты из рубленого мяса', price: 820, unit: '₽', cat: 'dough', subcat: 'manti', tag: 'ХИТ', desc: 'Настоящее рубленое вручную мясо с сохраненным мясным соком.' },
  { id: 'd12', name: 'Манты из бараньего фарша', price: 790, unit: '₽', cat: 'dough', subcat: 'manti', desc: 'Ароматные манты из отборной баранины с добавлением зиры.' },
  { id: 'd13', name: 'Манты с тыквой из рубленого мяса', price: 790, unit: '₽', cat: 'dough', subcat: 'manti', desc: 'Идеальный баланс рубленой говядины и сладковатой тыквы.' },
  { id: 'd14', name: 'Манты фарш с тыквой', price: 750, unit: '₽', cat: 'dough', subcat: 'manti', desc: 'Нежные манты с фаршем и сочной осенней тыквой.' },
  { id: 'd15', name: 'Хинкали', price: 790, unit: '₽', cat: 'dough', subcat: 'khinkali', desc: 'Сочные хинкали со складками и ароматным горячим бульоном внутри.' },
  { id: 'd16', name: 'Хинкали из бараньего фарша', price: 850, unit: '₽', cat: 'dough', subcat: 'khinkali', desc: 'Хинкали из горной баранины с кинзой и горным перцем.' },
  { id: 'd17', name: 'Открытые хинкали', price: 790, unit: '₽', cat: 'dough', subcat: 'khinkali', desc: 'Оригинальная открытая форма с аппетитной мясной шапочкой.' },
  { id: 'd7', name: 'Курзе', price: 750, unit: '₽', cat: 'dough', subcat: 'pelmeni', desc: 'Дагестанские пельмени с узорной косичкой и сочной начинкой.' },
  { id: 'd8', name: 'Пельмени', price: 750, unit: '₽', cat: 'dough', subcat: 'pelmeni', desc: 'Классические пельмени ручной лепки из чистой говядины.' },
  { id: 'd9', name: 'Цветные пельмени', price: 790, unit: '₽', cat: 'dough', subcat: 'pelmeni', desc: 'Яркие пельмени на натуральных овощных соках (шпинат, свекла).' },
  { id: 'd1', name: 'Вареники с картошкой', price: 450, unit: '₽', cat: 'dough', subcat: 'vareniki', desc: 'Тонкое тесто, нежное картофельное пюре с жареным лучком.' },
  { id: 'd2', name: 'Вареники с творогом', price: 550, unit: '₽', cat: 'dough', subcat: 'vareniki', desc: 'Домашний натуральный творог в эластичном тесте.' },
  { id: 'd3', name: 'Вареники с черемшой (NEW)', price: 850, unit: '₽', cat: 'dough', subcat: 'vareniki', tag: 'NEW', desc: 'Сезонный кавказский хит с ароматной горной черемшой!' },
  { id: 'd4', name: 'Галушки классические', price: 320, unit: '₽', cat: 'dough', subcat: 'galushki', desc: 'Традиционные чеченские пшеничные галушки к вареному мясу.' },
  { id: 'd5', name: 'Ушки галушки', price: 390, unit: '₽', cat: 'dough', subcat: 'galushki', desc: 'Аккуратные фигурные галушки особой ручной лепки.' },
  { id: 'd6', name: 'Галушки кукурузные', price: 330, unit: '₽', cat: 'dough', subcat: 'galushki', desc: 'Аутентичные кукурузные галушки с насыщенным вкусом.' },
  { id: 'd25', name: 'Сискал', price: 400, unit: '₽', cat: 'dough', subcat: 'galushki', desc: 'Национальный чеченский хлеб из кукурузной муки к то-берам.' },
  { id: 'd22', name: 'ПП галушки', price: 400, unit: '₽', cat: 'dough', subcat: 'pp', desc: 'Диетические галушки из цельнозерновой муки грубого помола.' },
  { id: 'd23', name: 'ПП манты', price: 800, unit: '₽', cat: 'dough', subcat: 'pp', desc: 'Манты из нежирной говядины в цельнозерновом тесте.' },
  { id: 'd24', name: 'ПП пельмени', price: 790, unit: '₽', cat: 'dough', subcat: 'pp', desc: 'Полезные пельмени с высоким содержанием чистого белка.' },
  { id: 'd18', name: 'Ханум', price: 490, unit: '₽', cat: 'dough', subcat: 'other', desc: 'Паровой слоеный рулет с мясной начинкой и картофелем.' },
  { id: 'd19', name: 'Ханум из бараньего фарша', price: 590, unit: '₽', cat: 'dough', subcat: 'other', desc: 'Сытный ароматный ханум из баранины с луком и специями.' },
  { id: 'd20', name: 'Чебуреки', price: 470, unit: '₽', cat: 'dough', subcat: 'other', desc: 'Хрустящее пузырчатое тесто с горячим мясным бульоном.' },
  { id: 'd21', name: 'Чебуреки с ливером', price: 500, unit: '₽', cat: 'dough', subcat: 'other', desc: 'Традиционные сочные чебуреки с пряным ливером.' },
  { id: 'd26', name: 'Сырники', price: 490, unit: '₽', cat: 'dough', subcat: 'other', desc: 'Воздушные творожные сырники с нежной корочкой.' },

  // --- Полуфабрикаты ручной лепки (8 позиций) ---
  { id: 'pf4', name: 'Котлеты говяжьи', price: 750, unit: '₽', cat: 'semifinished', subcat: 'cutlets', desc: 'Сытные рубленые котлеты из чистой говядины без добавок.' },
  { id: 'pf5', name: 'Котлеты по-Киевски', price: 900, unit: '₽', cat: 'semifinished', subcat: 'cutlets', tag: 'ХИТ', desc: 'Хрустящая панировка с ароматным сливочным маслом и зеленью внутри.' },
  { id: 'pf6', name: 'Куриные котлеты', price: 650, unit: '₽', cat: 'semifinished', subcat: 'cutlets', desc: 'Диетические легкие котлеты из филе фермерской птицы.' },
  { id: 'pf8', name: 'Люля ассорти', price: 590, unit: '₽', cat: 'semifinished', subcat: 'cutlets', desc: 'Ассорти из сочного кебаба со специями для быстрого запекания.' },
  { id: 'pf1', name: 'Фрикадельки', price: 750, unit: '₽', cat: 'semifinished', subcat: 'dishes', desc: 'Нежные шарики из отборного фарша для супов и тушения.' },
  { id: 'pf2', name: 'Тефтели', price: 750, unit: '₽', cat: 'semifinished', subcat: 'dishes', desc: 'Домашние тефтели с добавлением риса и специй.' },
  { id: 'pf3', name: 'Голубцы', price: 650, unit: '₽', cat: 'semifinished', subcat: 'dishes', desc: 'Сочная мясная начинка в мягких капустных листьях.' },
  { id: 'pf7', name: 'Фаршированные перцы', price: 750, unit: '₽', cat: 'semifinished', subcat: 'dishes', desc: 'Сладкие перцы с сочной мясной начинкой и рисом.' },

  // --- Фирменные рулеты (4 позиции) ---
  { id: 'r1', name: 'Рулеты куриные', price: 2500, unit: '₽ / шт', cat: 'rolls', subcat: 'rolls', tag: 'ХИТ', desc: 'Банкетный куриный рулет с деликатесной авторской начинкой.' },
  { id: 'r2', name: 'Рулеты мясные', price: 2600, unit: '₽ / шт', cat: 'rolls', subcat: 'rolls', desc: 'Праздничный говяжий рулет с пряными травами и чесноком.' },
  { id: 'r3', name: 'Рулеты бараньи', price: 2800, unit: '₽ / шт', cat: 'rolls', subcat: 'rolls', desc: 'Изысканный рулет из отборной горной баранины.' },
  { id: 'r4', name: 'Мини-рулеты', price: 700, unit: '₽ / шт', cat: 'rolls', subcat: 'rolls', desc: 'Порционные аккуратные рулетики для уютного семейного ужина.' },

  // --- Национальные мясные изделия и бульоны (4 позиции) ---
  { id: 'tr1', name: 'Ба1арш (баранина)', price: 1250, unit: '₽ / кг', cat: 'traditional', subcat: 'trad', tag: 'ХИТ', desc: 'Традиционное чеченское национальное блюдо высочайшего мастерства.' },
  { id: 'tr2', name: 'Йоьхъш (баранина)', price: 1250, unit: '₽ / кг', cat: 'traditional', subcat: 'trad', desc: 'Национальная домашняя колбаса из баранины с чесноком и специями.' },
  { id: 'tr3', name: 'Йоьхъш (говядина)', price: 800, unit: '₽ / кг', cat: 'traditional', subcat: 'trad', desc: 'Национальная говяжья колбаса по традиционному старинному рецепту.' },
  { id: 'tr4', name: 'Костный бульон', price: 350, unit: '₽', cat: 'traditional', subcat: 'trad', desc: 'Концентрированный томленый бульон, богатый природным коллагеном.' }
];

// Категории каталога
const CATEGORIES = [
  { id: 'all', label: 'Все позиции', count: 54 },
  { id: 'beef', label: 'Говядина и отрубы', count: 19 },
  { id: 'steaks', label: 'Стейки и шашлык', count: 14 },
  { id: 'dough', label: 'Изделия из теста', count: 26 },
  { id: 'semifinished', label: 'Полуфабрикаты', count: 8 },
  { id: 'rolls', label: 'Рулеты', count: 4 },
  { id: 'traditional', label: 'Традиции и бульоны', count: 4 }
];

// Подкатегории для быстрой фокусировки
const SUBCATEGORIES = {
  dough: [
    { id: 'all', label: 'Все изделия из теста (26)' },
    { id: 'manti', label: 'Манты (5)' },
    { id: 'khinkali', label: 'Хинкали (3)' },
    { id: 'pelmeni', label: 'Пельмени и Курзе (3)' },
    { id: 'vareniki', label: 'Вареники (3)' },
    { id: 'galushki', label: 'Галушки и Сискал (4)' },
    { id: 'pp', label: 'ПП-меню (3)' },
    { id: 'other', label: 'Чебуреки, Ханум, Сырники (5)' }
  ],
  steaks: [
    { id: 'all', label: 'Все стейки (14)' },
    { id: 'fresh', label: 'Свежие стейки (5)' },
    { id: 'marinade', label: 'В маринаде (5)' },
    { id: 'alt', label: 'Альтернативные (2)' },
    { id: 'shashlik', label: 'Шашлык (2)' }
  ],
  beef: [
    { id: 'all', label: 'Вся говядина (19)' },
    { id: 'fillet', label: 'Мякоть и вырезка (9)' },
    { id: 'ribs', label: 'Рёбра и отрубы (6)' },
    { id: 'mince', label: 'Фарш (2)' },
    { id: 'offal', label: 'Печень и язык (2)' }
  ],
  semifinished: [
    { id: 'all', label: 'Все полуфабрикаты (8)' },
    { id: 'cutlets', label: 'Котлеты и Люля (4)' },
    { id: 'dishes', label: 'Голубцы, Тефтели, Перцы (4)' }
  ]
};

// Метаданные рубрик
const CATEGORY_META = {
  beef: { icon: '🥩', title: 'Свежая говядина и отрубы', subtitle: 'Мраморное мясо свободного выпаса, ручная зачистка' },
  steaks: { icon: '🔥', title: 'Премиальные стейки и шашлык', subtitle: 'Рибай, Томагавк, Стриплойн и авторские маринады' },
  dough: { icon: '🥟', title: 'Традиционные изделия из теста', subtitle: 'Ручная лепка: манты, хинкали, пельмени, галушки, вареники с черемшой' },
  semifinished: { icon: '🥘', title: 'Полуфабрикаты ручной лепки', subtitle: 'Домашние котлеты, тефтели, перцы и люля-кебаб' },
  rolls: { icon: '👑', title: 'Фирменные банкетные рулеты', subtitle: 'Деликатесные праздничные рулеты из птицы, баранины и говядины' },
  traditional: { icon: '🏺', title: 'Национальные деликатесы и бульоны', subtitle: 'Ба1арш, Йоьхъш и концентрированный томленый костный бульон' }
};

// Порядок рубрик при выводе всех позиций
const CATEGORY_ORDER = ['beef', 'steaks', 'dough', 'semifinished', 'rolls', 'traditional'];

// ==========================================================================
// 2. СОСТОЯНИЕ КОРЗИНЫ
// ==========================================================================
let cart = {};
try {
  const saved = localStorage.getItem('meatbutik_cart');
  if (saved) cart = JSON.parse(saved);
} catch (e) {
  cart = {};
}

function saveCart() {
  try {
    localStorage.setItem('meatbutik_cart', JSON.stringify(cart));
  } catch (e) {}
  updateCartUI();
  // Перерисовываем товары, чтобы обновить кнопки (+ / -) на карточках и в строках
  renderProducts();
}

function addToCart(productId, quantity = 1) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;
  if (!cart[productId]) {
    cart[productId] = { ...prod, qty: 0 };
  }
  cart[productId].qty += quantity;
  if (cart[productId].qty <= 0) {
    delete cart[productId];
  }
  saveCart();
  showToast(`«${prod.name}» добавлен в корзину`);
}

function removeFromCart(productId) {
  if (cart[productId]) {
    delete cart[productId];
    saveCart();
  }
}

function updateCartQuantity(productId, delta) {
  if (cart[productId]) {
    cart[productId].qty += delta;
    if (cart[productId].qty <= 0) {
      delete cart[productId];
    }
    saveCart();
  }
}

function updateCartUI() {
  const badge = document.getElementById('cart-badge');
  const itemsContainer = document.getElementById('cart-items-container');
  const totalSumElem = document.getElementById('cart-total-sum');
  
  const entries = Object.values(cart);
  const totalCount = entries.reduce((acc, item) => acc + item.qty, 0);
  const totalSum = entries.reduce((acc, item) => acc + item.price * item.qty, 0);

  if (badge) badge.textContent = totalCount;
  if (totalSumElem) totalSumElem.textContent = `${totalSum.toLocaleString('ru-RU')} ₽`;

  if (!itemsContainer) return;

  if (entries.length === 0) {
    itemsContainer.innerHTML = `
      <div style="text-align: center; padding: 48px 16px; color: var(--color-walnut);">
        <p style="font-family: var(--font-serif); font-size: 20px; margin-bottom: 8px;">Ваша корзина пуста</p>
        <p style="font-size: 13px;">Выберите свежие отрубы, стейки или кулинарию в каталоге выше.</p>
      </div>
    `;
    return;
  }

  itemsContainer.innerHTML = entries.map(item => `
    <div class="cart-item-row" data-id="${item.id}">
      <div>
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-sub">${item.price.toLocaleString('ru-RU')} ${item.unit}</div>
      </div>
      <div class="cart-item-actions">
        <div class="qty-control">
          <button type="button" class="qty-btn" onclick="updateCartQuantity('${item.id}', -1)">−</button>
          <span class="qty-display">${item.qty}</span>
          <button type="button" class="qty-btn" onclick="updateCartQuantity('${item.id}', 1)">+</button>
        </div>
        <button type="button" class="btn btn-sm" style="padding: 4px 8px; border-color: var(--color-warm-stone);" onclick="removeFromCart('${item.id}')" title="Удалить">✕</button>
      </div>
    </div>
  `).join('');
}

function toggleCart(open) {
  const overlay = document.getElementById('cart-overlay');
  const drawer = document.getElementById('cart-drawer');
  if (!overlay || !drawer) return;
  if (open) {
    overlay.classList.add('open');
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  } else {
    overlay.classList.remove('open');
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function checkout(channel) {
  const entries = Object.values(cart);
  if (entries.length === 0) {
    alert('Пожалуйста, добавьте блюда в корзину перед оформлением заказа.');
    return;
  }

  const name = document.getElementById('order-name')?.value.trim() || 'Клиент';
  const phone = document.getElementById('order-phone')?.value.trim() || 'Не указан';
  const address = document.getElementById('order-address')?.value.trim() || 'Самовывоз / Уточнить';

  let totalSum = 0;
  let text = `Здравствуйте! Хочу оформить заказ в «Мясном Бутике»:\n\n`;
  entries.forEach((item, index) => {
    const itemTotal = item.price * item.qty;
    totalSum += itemTotal;
    text += `${index + 1}. ${item.name} — ${item.qty} шт./кг (${item.price} ${item.unit}) = ${itemTotal.toLocaleString('ru-RU')} ₽\n`;
  });

  text += `\nИтого: ${totalSum.toLocaleString('ru-RU')} ₽\n`;
  text += `Имя: ${name}\nТелефон: ${phone}\nАдрес доставки: ${address}\n\nПожалуйста, подтвердите наличие и время доставки.`;

  const waNumber = '79637016060';

  if (channel === 'wa') {
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`, '_blank');
  } else if (channel === 'tg') {
    window.open(`https://t.me/share/url?url=${encodeURIComponent('https://meatbutik.ru')}&text=${encodeURIComponent(text)}`, '_blank');
  }
}

function showToast(message) {
  let toast = document.getElementById('site-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'site-toast';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
}

// ==========================================================================
// 3. УПРАВЛЕНИЕ КАТАЛОГОМ: РЕЖИМ МЕНЮ, ПОДКАТЕГОРИИ И РУБРИКИ
// ==========================================================================
let currentCategory = 'all';
let currentSubcategory = 'all';
let searchQuery = '';
let viewMode = 'menu'; // По умолчанию компактное 'menu' (ресторанная карта) для быстрого обзора

function renderCategories() {
  const container = document.getElementById('category-tabs-container');
  if (!container) return;

  container.innerHTML = CATEGORIES.map(cat => `
    <button type="button" class="category-tab-btn ${cat.id === currentCategory ? 'active' : ''}" data-cat="${cat.id}">
      <span>${cat.label}</span>
      <span class="category-badge-num">(${cat.count})</span>
    </button>
  `).join('');

  container.querySelectorAll('.category-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentCategory = btn.getAttribute('data-cat');
      currentSubcategory = 'all';
      container.querySelectorAll('.category-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSubcategories();
      renderProducts();
    });
  });

  renderSubcategories();
}

function renderSubcategories() {
  const subContainer = document.getElementById('subcat-chips-container');
  if (!subContainer) return;

  const subcats = SUBCATEGORIES[currentCategory];
  if (!subcats || subcats.length === 0 || searchQuery !== '') {
    subContainer.style.display = 'none';
    subContainer.innerHTML = '';
    return;
  }

  subContainer.style.display = 'flex';
  subContainer.innerHTML = subcats.map(sub => `
    <button type="button" class="subcat-chip-btn ${sub.id === currentSubcategory ? 'active' : ''}" data-sub="${sub.id}">
      ${sub.label}
    </button>
  `).join('');

  subContainer.querySelectorAll('.subcat-chip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentSubcategory = btn.getAttribute('data-sub');
      subContainer.querySelectorAll('.subcat-chip-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts();
    });
  });
}

function setViewMode(mode) {
  viewMode = mode;
  const btnMenu = document.getElementById('btn-view-menu');
  const btnGrid = document.getElementById('btn-view-grid');
  if (btnMenu && btnGrid) {
    if (mode === 'menu') {
      btnMenu.classList.add('active');
      btnGrid.classList.remove('active');
    } else {
      btnGrid.classList.add('active');
      btnMenu.classList.remove('active');
    }
  }
  renderProducts();
}

function renderProducts() {
  const container = document.getElementById('catalog-products-container');
  const countBadge = document.getElementById('search-count-badge');
  if (!container) return;

  // Если активен поисковый запрос
  if (searchQuery !== '') {
    const q = searchQuery.toLowerCase();
    const matched = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
    if (countBadge) countBadge.textContent = `${matched.length} найдено`;

    if (matched.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 70px 16px; color: var(--color-espresso);">
          <h3 class="serif-heading" style="font-size: 24px; margin-bottom: 8px;">По запросу «${searchQuery}» ничего не найдено</h3>
          <p style="font-size: 14px;">Попробуйте поискать, например: Рибай, Манты, Черемша, Вырезка или Ба1арш.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div class="catalog-section-group">
        <div class="section-group-header">
          <div>
            <h3 class="serif-heading section-group-title">🔍 Результаты поиска</h3>
            <p class="section-group-subtitle">Найдено позиций: ${matched.length}</p>
          </div>
        </div>
        ${viewMode === 'menu' ? renderMenuList(matched) : renderGridCards(matched)}
      </div>
    `;
    return;
  }

  if (countBadge) countBadge.textContent = '';

  // Если выбрана конкретная категория (например, dough или steaks)
  if (currentCategory !== 'all') {
    let items = PRODUCTS.filter(p => p.cat === currentCategory);
    if (currentSubcategory !== 'all') {
      items = items.filter(p => p.subcat === currentSubcategory);
    }

    const meta = CATEGORY_META[currentCategory] || { icon: '🥩', title: 'Каталог', subtitle: '' };
    container.innerHTML = `
      <div class="catalog-section-group">
        <div class="section-group-header">
          <div>
            <h3 class="serif-heading section-group-title"><span>${meta.icon}</span> ${meta.title}</h3>
            <p class="section-group-subtitle">${meta.subtitle}</p>
          </div>
          <span class="section-group-count">${items.length} позиций</span>
        </div>
        ${viewMode === 'menu' ? renderMenuList(items) : renderGridCards(items)}
      </div>
    `;
    return;
  }

  // Если выбран режим "Все позиции" — группируем по рубрикам!
  let html = '';
  CATEGORY_ORDER.forEach(catKey => {
    const items = PRODUCTS.filter(p => p.cat === catKey);
    const meta = CATEGORY_META[catKey];
    if (!meta || items.length === 0) return;

    html += `
      <div class="catalog-section-group" id="group-${catKey}">
        <div class="section-group-header">
          <div>
            <h3 class="serif-heading section-group-title"><span>${meta.icon}</span> ${meta.title}</h3>
            <p class="section-group-subtitle">${meta.subtitle}</p>
          </div>
          <span class="section-group-count">${items.length} позиций</span>
        </div>
        ${viewMode === 'menu' ? renderMenuList(items) : renderGridCards(items)}
      </div>
    `;
  });

  container.innerHTML = html;
}

// 1. Компактное отображение в виде меню-списка (2 колонки)
function renderMenuList(items) {
  return `
    <div class="menu-list-grid">
      ${items.map(prod => {
        const inCart = cart[prod.id];
        return `
          <div class="menu-list-row ${inCart ? 'in-cart' : ''}" data-id="${prod.id}">
            <div class="menu-row-info">
              <div class="menu-row-title-row">
                <span class="menu-row-name">${prod.name}</span>
                ${prod.tag ? `<span class="product-tag ${prod.tag === 'NEW' ? 'new-tag' : ''}">${prod.tag}</span>` : ''}
              </div>
              <div class="menu-row-desc">${prod.desc}</div>
            </div>
            <div class="menu-row-price-actions">
              <div class="menu-row-price">
                ${prod.price.toLocaleString('ru-RU')} ₽<span class="menu-row-unit">${prod.unit}</span>
              </div>
              ${inCart ? `
                <div class="qty-control">
                  <button type="button" class="qty-btn" onclick="updateCartQuantity('${prod.id}', -1)">−</button>
                  <span class="qty-display">${inCart.qty}</span>
                  <button type="button" class="qty-btn" onclick="updateCartQuantity('${prod.id}', 1)">+</button>
                </div>
              ` : `
                <button type="button" class="btn btn-add-cart btn-sm" onclick="addToCart('${prod.id}', 1)">
                  + В КОРЗИНУ
                </button>
              `}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// 2. Отображение в виде карточек
function renderGridCards(items) {
  return `
    <div class="catalog-grid">
      ${items.map(prod => {
        const inCart = cart[prod.id];
        return `
          <div class="product-card ${inCart ? 'in-cart' : ''}" id="card-${prod.id}">
            <div>
              <div class="product-header">
                <span class="product-tag ${prod.tag === 'NEW' ? 'new-tag' : ''}">${prod.tag || getCategoryLabel(prod.cat)}</span>
                <span class="caption-label">100% ХАЛЯЛЬ</span>
              </div>
              <h3 class="product-name serif-heading">${prod.name}</h3>
              <p class="product-desc">${prod.desc}</p>
            </div>
            <div class="product-footer">
              <div class="product-price-col">
                <span class="product-price">${prod.price.toLocaleString('ru-RU')} ₽</span>
                <span class="product-unit">${prod.unit}</span>
              </div>
              <div class="product-card-controls">
                ${inCart ? `
                  <div class="qty-control">
                    <button type="button" class="qty-btn" onclick="updateCartQuantity('${prod.id}', -1)">−</button>
                    <span class="qty-display">${inCart.qty}</span>
                    <button type="button" class="qty-btn" onclick="updateCartQuantity('${prod.id}', 1)">+</button>
                  </div>
                ` : `
                  <button type="button" class="btn btn-add-cart" onclick="addToCart('${prod.id}', 1)">
                    + В КОРЗИНУ
                  </button>
                `}
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function getCategoryLabel(catId) {
  switch (catId) {
    case 'beef': return 'Говядина';
    case 'steaks': return 'Стейк / Гриль';
    case 'semifinished': return 'Полуфабрикат';
    case 'rolls': return 'Деликатес';
    case 'traditional': return 'Традиция';
    case 'dough': return 'Ручная лепка';
    default: return 'Мясо';
  }
}

// ==========================================================================
// 4. ИНИЦИАЛИЗАЦИЯ И СЛУШАТЕЛИ СОБЫТИЙ
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  if (header) {
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  renderCategories();
  renderProducts();
  updateCartUI();

  // Живой поиск
  const searchInput = document.getElementById('catalog-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      searchQuery = e.target.value.trim();
      renderProducts();
      renderSubcategories();
    });
  }

  // Переключение режимов отображения (Меню-список vs Карточки)
  const btnMenu = document.getElementById('btn-view-menu');
  const btnGrid = document.getElementById('btn-view-grid');
  if (btnMenu) btnMenu.addEventListener('click', () => setViewMode('menu'));
  if (btnGrid) btnGrid.addEventListener('click', () => setViewMode('grid'));

  // Кнопки корзины
  const openCartBtn = document.getElementById('open-cart-btn');
  const closeCartBtn = document.getElementById('close-cart-btn');
  const cartOverlay = document.getElementById('cart-overlay');

  if (openCartBtn) openCartBtn.addEventListener('click', () => toggleCart(true));
  if (closeCartBtn) closeCartBtn.addEventListener('click', () => toggleCart(false));
  if (cartOverlay) cartOverlay.addEventListener('click', () => toggleCart(false));

  // Оформление
  const waBtn = document.getElementById('btn-checkout-wa');
  const tgBtn = document.getElementById('btn-checkout-tg');
  if (waBtn) waBtn.addEventListener('click', () => checkout('wa'));
  if (tgBtn) tgBtn.addEventListener('click', () => checkout('tg'));

  // Мобильное меню
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }

  // Закрытие корзины по клавише Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') toggleCart(false);
  });
});
