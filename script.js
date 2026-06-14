/* ============================================================
   Art Universe — 艺术家数据 + 切换逻辑
   ============================================================ */

const ARTISTS = [
  {
    id: 'mondrian',
    wiki: 'https://baike.baidu.com/item/%E5%BD%BC%E5%9F%83%C2%B7%E8%92%99%E5%BE%B7%E9%87%8C%E5%AE%89/3392733',
    name: '蒙德里安',
    nameEn: 'Piet Mondrian',
    years: '1872 — 1944 · 荷兰',
    movement: '风格派 / 新造形主义',
    keywords: '直角 · 原色 · 几何 · 秩序',
    work: '《红黄蓝构图》',
    quote: '纯粹的艺术，应当来源于纯粹的几何。',
    about: '蒙德里安把整个世界简化为水平线、垂直线，以及红黄蓝三种原色。在他眼中，这是宇宙最根本的秩序——剔除一切多余的细节，让美回归本质。他的画布像被精密计算的网格，每个色块都恰到好处，少一分则空，多一分则乱。',
    swatch: 'linear-gradient(135deg, #c8102e 50%, #f4c518 50% 75%, #1d4ed8 75%)',
  },
  {
    id: 'vangogh',
    wiki: 'https://baike.baidu.com/item/%E6%96%87%E6%A3%AE%E7%89%B9%C2%B7%E6%A2%B5%E9%AB%98/349237',
    name: '梵高',
    nameEn: 'Vincent van Gogh',
    years: '1853 — 1890 · 荷兰',
    movement: '后印象派',
    keywords: '漩涡 · 笔触 · 星空 · 烈焰',
    work: '《星月夜》',
    quote: '我梦想着绘画，然后我画下我的梦。',
    about: '梵高的笔触像燃烧的火焰，旋转、奔涌、永不平息。他把内心的风暴一笔一笔涂抹在画布上——扭曲的柏树、漩涡般的星空、金黄得几乎要融化的麦田。他生前只卖出一幅画，却用最炽烈的颜色，照亮了整个艺术史。',
    swatch: 'radial-gradient(circle at 30% 40%, #fcb929 0 35%, #1e5b8c 35% 70%, #0d1b3d 70%)',
  },
  {
    id: 'hokusai',
    wiki: 'https://baike.baidu.com/item/%E8%91%9B%E9%A5%B0%E5%8C%97%E6%96%8B/8741955',
    name: '葛饰北斋',
    nameEn: 'Katsushika Hokusai',
    years: '1760 — 1849 · 日本',
    movement: '浮世绘',
    keywords: '巨浪 · 富士 · 线条 · 江户',
    work: '《神奈川冲浪里》',
    quote: '七十岁，我才略微懂得万物之形。',
    about: '葛饰北斋用简洁的线条与平涂的色彩，捕捉了江户时代最动人的瞬间。那一卷卷翻涌的巨浪、远处的富士山、四季流转的市井百态，构成了浮世绘最经典的视觉记忆。他自称"画狂老人"，九十岁仍在追求"画出万物真正的样子"。',
    swatch: 'linear-gradient(180deg, #1e5b8c 0 55%, #c8362d 55% 75%, #efe6d3 75%)',
  },
  {
    id: 'warhol',
    wiki: 'https://baike.baidu.com/item/%E5%AE%89%E8%BF%AA%C2%B7%E6%B2%83%E9%9C%8D%E5%B0%94/1538157',
    name: '沃霍尔',
    nameEn: 'Andy Warhol',
    years: '1928 — 1987 · 美国',
    movement: '波普艺术',
    keywords: '复制 · 霓虹 · 消费 · 名人',
    work: '《玛丽莲·梦露》',
    quote: '在未来，每个人都能成名 15 分钟。',
    about: '沃霍尔把超市里的汤罐头、电影明星的脸、可口可乐瓶搬进了美术馆。他用丝网印刷反复复制同一个图像，再泼上鲜艳到刺眼的撞色——粉、青、黄、品红。波普艺术由此诞生：艺术不再高高在上，它就是消费时代的镜像。',
    swatch: 'conic-gradient(#ff1493 0 25%, #00ced1 0 50%, #ffd700 0 75%, #000000 0)',
  },
  {
    id: 'picasso',
    wiki: 'https://baike.baidu.com/item/%E6%AF%95%E5%8A%A0%E7%B4%A2/63870653',
    name: '毕加索',
    nameEn: 'Pablo Picasso',
    years: '1881 — 1973 · 西班牙',
    movement: '立体主义',
    keywords: '解构 · 多视点 · 几何 · 蓝色时期',
    work: '《亚维农少女》',
    quote: '每个孩子都是艺术家，难的是长大后依然是。',
    about: '毕加索把一张脸拆成碎片，再从不同角度重新拼起来——正面与侧面同时出现在一张画布上。立体主义由此诞生，彻底颠覆了西方几百年的透视法则。他一生风格多变，从蓝色时期的忧郁到立体派的革命，留下五万余件作品。',
    swatch: 'linear-gradient(135deg, #c0392b 33%, #2c5f8a 33% 66%, #d4a574 66%)',
  },
  {
    id: 'zhang',
    wiki: 'https://baike.baidu.com/item/%E5%BC%A0%E5%A4%A7%E5%8D%83/321675',
    name: '张大千',
    nameEn: 'Zhang Daqian',
    years: '1899 — 1983 · 中国',
    movement: '泼墨泼彩 · 国画',
    keywords: '泼墨 · 青绿 · 山水 · 意境',
    work: '《长江万里图》',
    quote: '泼墨易，破墨难。混沌之中如何收拾，始见功夫。',
    about: '张大千晚年独创泼墨泼彩之法，将青绿、石青、石绿倾倒于宣纸之上，任其自然流淌、晕染，山水云气浑然天成。他自题"爰居士破墨，所谓不袭前贤一笔也"——不沿袭前人一笔，全凭自家面貌。他融汇中国传统与西方色彩，笔下长江万里、庐山飞瀑，气象磅礴，被誉为"五百年来一大千"。',
    swatch: 'radial-gradient(ellipse at 30% 40%, #2d4a3e 0 30%, transparent 50%), radial-gradient(ellipse at 70% 70%, #8b3a3a 0 25%, transparent 45%), #c9a961',
  },
  {
    id: 'dali',
    wiki: 'https://baike.baidu.com/item/%E8%90%A8%E5%B0%94%E7%93%A6%E5%A4%9A%C2%B7%E8%BE%BE%E5%88%A9/533606',
    name: '达利',
    nameEn: 'Salvador Dalí',
    years: '1904 — 1989 · 西班牙',
    movement: '超现实主义',
    keywords: '融化 · 梦境 · 潜意识 · 荒诞',
    work: '《记忆的永恒》',
    quote: '我与疯子的唯一区别，是我没疯。',
    about: '达利把梦境画成了现实——融化的钟表挂在枯枝上，长着抽屉的躯体，燃烧的长颈鹿，双重视觉的图像。他用古典主义般精细的笔法，描绘最荒诞不经的潜意识图景。超现实主义在他手中，成了一场清醒的梦。',
    swatch: 'linear-gradient(180deg, #1a2540 0 40%, #e8c547 40% 70%, #d96b4a 70%)',
  },
  {
    id: 'kusama',
    wiki: 'https://baike.baidu.com/item/%E8%8D%89%E9%97%B4%E5%BC%A5%E7%94%9F/740384',
    name: '草间弥生',
    nameEn: 'Yayoi Kusama',
    years: '1929 — 至今 · 日本',
    movement: '当代艺术 · 超现实',
    keywords: '波点 · 镜屋 · 无限 · 南瓜',
    work: '《无限镜屋》',
    quote: '我把波点视为通往无限的途径。',
    about: '草间弥生说，她眼中的世界布满了波点。她把这种幻觉变成了标志性的视觉符号——红色的波点覆盖一切：人体、房间、南瓜、巨大的雕塑。在她的"无限镜屋"里，灯光与镜面延伸出没有尽头的宇宙。她自愿住进精神病院，却创造了当今最炙手可热的艺术。',
    swatch: 'radial-gradient(circle, #ff0000 25%, #000000 26% 60%, #ff0000 61% 65%, #000000 66%)',
  },
  {
    id: 'davinci',
    wiki: 'https://baike.baidu.com/item/%E8%BE%BE%C2%B7%E8%8A%AC%E5%A5%87/75724',
    name: '达芬奇',
    nameEn: 'Leonardo da Vinci',
    years: '1452 — 1519 · 意大利',
    movement: '文艺复兴盛期',
    keywords: '晕涂法 · 镜像笔记 · 黄金比例 · 解剖',
    work: '《蒙娜丽莎》',
    quote: '眼睛是灵魂之窗，是通往心灵最直接的道路。',
    about: '达芬奇是文艺复兴最完美的化身——画家、解剖学家、工程师、发明家。他用"晕涂法"（sfumato）让蒙娜丽莎的嘴角融进阴影，留下永恒的微笑。他的手稿全部用镜像反写，从右向左读，里面藏着飞行器、潜水艇、人体解剖和维特鲁威人的完美比例。他曾说"画家争辩甚于诗人"，因为他坚信绘画是通向真理最精确的路径。',
    swatch: 'linear-gradient(135deg, #ede0c8 0 40%, #8b5a2b 40% 60%, #5c6b3f 60% 80%, #c8a456 80%)',
  },
  {
    id: 'klimt',
    wiki: 'https://baike.baidu.com/item/%E5%8F%A4%E6%96%AF%E5%A1%94%E5%A4%AB%C2%B7%E5%85%8B%E9%87%8C%E5%A7%86%E7%89%B9/8657685',
    name: '克里姆特',
    nameEn: 'Gustav Klimt',
    years: '1862 — 1918 · 奥地利',
    movement: '维也纳分离派 · 象征主义',
    keywords: '黄金 · 装饰 · 拜占庭 · 拥抱',
    work: '《吻》',
    quote: '艺术是一条通往自由的道路。',
    about: '克里姆特把黄金箔片、马赛克与拜占庭装饰引入油画。他的"黄金时期"——《吻》《阿黛尔》——人物沉浸在金色的漩涡纹样中，肉体真实与装饰抽象奇妙并存。他受威尼斯 Ravenna 马赛克启发，用螺旋、矩形、圆形构筑出一座座镀金的爱的圣殿。',
    swatch: 'radial-gradient(circle at 50% 50%, #ffd700 0 30%, #d4a017 30% 60%, #8b3a3a 60% 80%, #1a1208 80%)',
  },
  {
    id: 'monet',
    wiki: 'https://baike.baidu.com/item/%E5%85%8B%E5%8A%B3%E5%BE%B7%C2%B7%E8%8E%AB%E5%A5%88/8741974',
    name: '莫奈',
    nameEn: 'Claude Monet',
    years: '1840 — 1926 · 法国',
    movement: '印象派',
    keywords: '睡莲 · 光斑 · 户外 · 柔焦',
    work: '《睡莲》',
    quote: '光，是绘画中最重要的东西。',
    about: '莫奈是印象派名副其实的旗手。1874 年，评论家路易·勒鲁瓦看到他的《日出·印象》，讥讽地把那场展览称作"印象主义者的展览会"——画家们却欣然接受了这个本意贬低的称呼，"印象派"由此得名。他背着画架走到户外，追逐每一刻变化的光线——干草堆、鲁昂大教堂、睡莲池。晚年他在吉维尼的花园里，几乎失明仍画着水面倒映的天空。他的笔触是细碎颤动的色斑，远处看去才能融成朦胧的真实，这正是"印象"二字的真意。',
    swatch: 'radial-gradient(ellipse at 30% 40%, #c85a8a 0 25%, transparent 45%), radial-gradient(ellipse at 70% 60%, #6ba368 0 30%, transparent 50%), #c8d8e4',
  },
  {
    id: 'miro',
    wiki: 'https://baike.baidu.com/item/%E8%83%A1%E5%AE%89%C2%B7%E7%B1%B3%E7%BD%97/294670',
    name: '米罗',
    nameEn: 'Joan Miró',
    years: '1893 — 1983 · 西班牙',
    movement: '超现实主义 · 抽象',
    keywords: '童趣 · 星辰 · 符号 · 原色',
    work: '《星座》系列',
    quote: '我想像诗人使用文字那样使用色彩。',
    about: '米罗用孩童般的笔触画出整个宇宙——红色的太阳、蓝色的星星、黑色的眼睛、漂浮的阿米巴生物。他拒绝严肃，追求"刺杀绘画"，把绘画还原为最纯粹的符号与色彩。1940 至 1941 年，二战烽火中他流亡诺曼底海滨，创作了由 23 幅水粉画组成的《星座》系列——在战争最黑暗的时刻，用白色背景与明丽色彩传递希望的光。在他笔下，红黄蓝三原色与几条黑线，就能构成一个充满诗意与幽默的星辰世界。',
    swatch: 'radial-gradient(circle at 25% 30%, #d62828 0 8%, transparent 9%), radial-gradient(circle at 75% 70%, #1d4ed8 0 10%, transparent 11%), radial-gradient(circle at 60% 25%, #f4a300 0 7%, transparent 8%), #f4ead5',
  },
];

/* ---------- 12 种风格的"代表作品" CSS 艺术复刻 ---------- */
const ARTWORKS = {
  mondrian: `
    <!-- 第一幅：红黄蓝构图 (1930) —— 右上大红 + 黑粗线不对称网格 -->
    <div class="artwork" style="background:#fff;overflow:hidden;">
      <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;">
        <!-- 红色大块（占右上 2/3） -->
        <rect x="0" y="0" width="200" height="170" fill="#c8102e"/>
        <!-- 左下蓝色块 -->
        <rect x="0" y="170" width="120" height="90" fill="#1d4ed8"/>
        <!-- 右下白色块 -->
        <rect x="120" y="170" width="80" height="90" fill="#f5f1e8"/>
        <!-- 右下黄色细条 -->
        <rect x="120" y="240" width="80" height="20" fill="#f4c518"/>
        <!-- 黑色粗线网格 -->
        <rect x="0" y="166" width="200" height="8" fill="#0a0a0a"/>
        <rect x="116" y="0" width="8" height="260" fill="#0a0a0a"/>
        <rect x="120" y="236" width="80" height="8" fill="#0a0a0a"/>
      </svg>
    </div>
    <!-- 第二幅：百老汇爵士乐 (1942—43) —— 灰底 + 彩色小色块代替黑线（纽约韵律） -->
    <div class="artwork" style="background:#d4cab0;overflow:hidden;">
      <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;">
        <rect width="200" height="260" fill="#e0d4b8"/>
        <!-- 竖向色块（模拟街区的霓虹节奏） -->
        <rect x="20" y="0" width="18" height="260" fill="#e0d4b8"/>
        <rect x="22" y="0" width="3" height="260" fill="#d4502a"/>
        <rect x="30" y="0" width="3" height="260" fill="#e8a040"/>
        <rect x="80" y="0" width="22" height="260" fill="#e0d4b8"/>
        <rect x="82" y="0" width="3" height="260" fill="#3a7ab8"/>
        <rect x="90" y="0" width="3" height="260" fill="#d4502a"/>
        <rect x="96" y="0" width="3" height="260" fill="#e8c840"/>
        <rect x="150" y="0" width="20" height="260" fill="#e0d4b8"/>
        <rect x="152" y="0" width="3" height="260" fill="#e8a040"/>
        <rect x="160" y="0" width="3" height="260" fill="#3a7ab8"/>
        <!-- 横向色块 -->
        <rect x="0" y="40" width="200" height="16" fill="#e0d4b8"/>
        <rect x="0" y="42" width="200" height="3" fill="#d4502a"/>
        <rect x="0" y="48" width="200" height="3" fill="#e8c840"/>
        <rect x="0" y="110" width="200" height="18" fill="#e0d4b8"/>
        <rect x="0" y="112" width="200" height="3" fill="#3a7ab8"/>
        <rect x="0" y="120" width="200" height="3" fill="#d4502a"/>
        <rect x="0" y="180" width="200" height="16" fill="#e0d4b8"/>
        <rect x="0" y="182" width="200" height="3" fill="#e8a040"/>
        <rect x="0" y="188" width="200" height="3" fill="#3a7ab8"/>
        <!-- 色块节点（替代黑线交点的彩色方块，爵士律动） -->
        <rect x="22" y="42" width="14" height="12" fill="#d4502a"/>
        <rect x="90" y="42" width="14" height="12" fill="#e8c840"/>
        <rect x="152" y="42" width="14" height="12" fill="#3a7ab8"/>
        <rect x="22" y="112" width="14" height="14" fill="#3a7ab8"/>
        <rect x="90" y="112" width="14" height="14" fill="#d4502a"/>
        <rect x="152" y="112" width="14" height="14" fill="#e8c840"/>
        <rect x="22" y="182" width="14" height="12" fill="#e8a040"/>
        <rect x="90" y="182" width="14" height="12" fill="#3a7ab8"/>
        <rect x="152" y="182" width="14" height="12" fill="#d4502a"/>
      </svg>
    </div>
    <!-- 第三幅：构图第10号 (1939—42) —— 黑底 + 多色块的不对称网格 -->
    <div class="artwork" style="background:#fff;overflow:hidden;">
      <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;">
        <!-- 色块层 -->
        <rect x="0" y="0" width="120" height="90" fill="#f5f1e8"/>
        <rect x="120" y="0" width="80" height="90" fill="#1d4ed8"/>
        <rect x="0" y="90" width="70" height="100" fill="#c8102e"/>
        <rect x="70" y="90" width="50" height="60" fill="#f5f1e8"/>
        <rect x="120" y="90" width="80" height="60" fill="#f4c518"/>
        <rect x="70" y="150" width="130" height="40" fill="#f5f1e8"/>
        <rect x="0" y="190" width="200" height="70" fill="#f5f1e8"/>
        <rect x="70" y="220" width="50" height="40" fill="#1d4ed8"/>
        <!-- 黑色粗线网格（蒙德里安标志） -->
        <rect x="0" y="86" width="200" height="8" fill="#0a0a0a"/>
        <rect x="0" y="146" width="200" height="8" fill="#0a0a0a"/>
        <rect x="0" y="186" width="200" height="8" fill="#0a0a0a"/>
        <rect x="0" y="216" width="200" height="8" fill="#0a0a0a"/>
        <rect x="66" y="0" width="8" height="260" fill="#0a0a0a"/>
        <rect x="116" y="0" width="8" height="260" fill="#0a0a0a"/>
        <rect x="66" y="216" width="8" height="44" fill="#0a0a0a"/>
        <rect x="148" y="216" width="8" height="44" fill="#0a0a0a"/>
      </svg>
    </div>`,
  vangogh: `
    <div class="artwork" style="background:#0a1f4f;overflow:hidden;">
      <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;">
        <defs>
          <radialGradient id="vg1_moon" cx="50%" cy="50%"><stop offset="0%" stop-color="#fffbeb"/><stop offset="40%" stop-color="#fde68a" stop-opacity="0.9"/><stop offset="100%" stop-color="#fbbf24" stop-opacity="0"/></radialGradient>
          <radialGradient id="vg1_star" cx="50%" cy="50%"><stop offset="0%" stop-color="#fff7cc"/><stop offset="28%" stop-color="#fcd34d" stop-opacity="0.85"/><stop offset="100%" stop-color="#fcd34d" stop-opacity="0"/></radialGradient>
          <linearGradient id="vg1_sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#050f2e"/><stop offset="50%" stop-color="#0e2a6b"/><stop offset="100%" stop-color="#1d4480"/></linearGradient>
        </defs>
        <rect width="200" height="180" fill="url(#vg1_sky)"/>
        <!-- 旋转笔触铺满天空气氛 -->
        <g fill="none" stroke-linecap="round">
          <g stroke="#2a5fa0" stroke-width="2" opacity="0.5"><path d="M5,30 Q40,18 80,32 Q110,42 140,28"/><path d="M5,60 Q40,48 80,62"/><path d="M120,55 Q150,45 180,58"/><path d="M5,150 Q40,138 80,150 Q110,160 150,148"/></g>
          <g stroke="#4a86c8" stroke-width="1.6" opacity="0.55"><path d="M5,90 Q40,78 80,92"/><path d="M120,90 Q150,80 180,92"/><path d="M5,120 Q40,108 80,120"/></g>
        </g>
        <!-- 主漩涡星云（中央偏左，巨型） -->
        <g fill="none" stroke-linecap="round">
          <path d="M55,95 C75,72 115,72 140,98 C158,120 150,150 122,158 C92,164 70,148 68,124" stroke="#6fa8dc" stroke-width="5" opacity="0.75"/>
          <path d="M62,100 C80,82 112,82 132,102 C146,120 140,144 118,150 C94,154 78,140 76,122" stroke="#4a86c8" stroke-width="3" opacity="0.65"/>
          <path d="M70,108 C85,94 108,94 124,110 C134,122 130,138 114,142" stroke="#7fb8e8" stroke-width="2" opacity="0.6"/>
        </g>
        <!-- 次漩涡星云（右上） -->
        <g fill="none" stroke-linecap="round">
          <path d="M130,40 C150,30 172,38 180,58 C186,74 176,88 158,88 C142,88 130,74 132,60" stroke="#7fb8e8" stroke-width="4" opacity="0.7"/>
          <path d="M136,46 C152,38 168,44 174,58 C178,70 170,80 156,80" stroke="#5a9ad8" stroke-width="2.5" opacity="0.6"/>
        </g>
        <!-- 新月（右上角，明亮金黄） -->
        <circle cx="178" cy="32" r="22" fill="url(#vg1_moon)"/>
        <circle cx="178" cy="32" r="10" fill="#fef3c7"/>
        <path d="M172,26 A10,10 0 0,1 184,38 A7.5,7.5 0 1,0 172,26 Z" fill="#fbbf24"/>
        <!-- 星星（带光晕，漩涡间） -->
        <circle cx="30" cy="45" r="13" fill="url(#vg1_star)"/><circle cx="30" cy="45" r="4.5" fill="#fff7cc"/>
        <circle cx="95" cy="30" r="10" fill="url(#vg1_star)"/><circle cx="95" cy="30" r="3.5" fill="#fff7cc"/>
        <circle cx="40" cy="120" r="11" fill="url(#vg1_star)"/><circle cx="40" cy="120" r="4" fill="#fff7cc"/>
        <circle cx="165" cy="130" r="9" fill="url(#vg1_star)"/><circle cx="165" cy="130" r="3" fill="#fff7cc"/>
        <!-- 火焰柏树（左侧前景，直冲云霄） -->
        <path d="M22,260 C14,210 28,170 16,130 C10,108 26,80 18,52 C14,40 24,24 30,14 C22,34 36,56 30,84 C40,112 24,150 34,188 C26,222 38,250 32,260 Z" fill="#0a1f12"/>
        <path d="M24,260 C18,214 30,174 20,134 C16,116 26,92 22,68" fill="none" stroke="#1a3d22" stroke-width="2" opacity="0.7"/>
        <!-- 远方村庄山丘 -->
        <path d="M0,176 Q40,168 80,174 Q120,180 160,170 Q185,166 200,172 L200,200 L0,200 Z" fill="#123366"/>
        <path d="M0,188 Q50,182 100,186 Q150,190 200,184 L200,200 L0,200 Z" fill="#0a2150"/>
        <!-- 教堂尖塔 -->
        <rect x="92" y="158" width="4" height="22" fill="#061438"/>
        <polygon points="94,150 97,160 91,160" fill="#061438"/>
        <!-- 村庄房屋 -->
        <rect x="80" y="172" width="12" height="10" fill="#061438"/>
        <rect x="100" y="170" width="14" height="12" fill="#061438"/>
        <rect x="118" y="174" width="10" height="8" fill="#061438"/>
        <!-- 窗户暖黄灯光 -->
        <rect x="83" y="175" width="2" height="3" fill="#fde68a"/>
        <rect x="86" y="175" width="2" height="3" fill="#fde68a"/>
        <rect x="103" y="173" width="2" height="3" fill="#fde68a"/>
        <rect x="107" y="173" width="2" height="3" fill="#fde68a"/>
        <rect x="120" y="177" width="2" height="3" fill="#fde68a"/>
      </svg>
    </div>
    <!-- 第二幅：麦田群鸦（金黄麦田 + 乌云暴雨 + 黑鸦） -->
    <div class="artwork" style="background:#d4a017;overflow:hidden;">
      <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;">
        <defs>
          <linearGradient id="vg2_sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e89030"/><stop offset="40%" stop-color="#d4a017"/><stop offset="70%" stop-color="#c88838"/><stop offset="100%" stop-color="#8a5a2a"/></linearGradient>
          <linearGradient id="vg2_field" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e8b840"/><stop offset="60%" stop-color="#d4a017"/><stop offset="100%" stop-color="#a87a10"/></linearGradient>
        </defs>
        <!-- 暴风雨天空（厚重乌云笔触） -->
        <rect width="200" height="130" fill="url(#vg2_sky)"/>
        <g fill="none" stroke="#6a4a1a" stroke-width="3" opacity="0.5" stroke-linecap="round">
          <path d="M0,30 Q40,20 80,35 Q120,48 160,30 Q185,22 200,32"/>
          <path d="M0,55 Q45,45 90,58 Q130,68 170,55"/>
          <path d="M0,80 Q50,72 100,82 Q150,90 200,78"/>
        </g>
        <g fill="none" stroke="#8a6a2a" stroke-width="2" opacity="0.4" stroke-linecap="round">
          <path d="M10,42 Q50,32 90,45"/><path d="M110,48 Q150,40 190,50"/>
          <path d="M10,68 Q50,60 95,70"/><path d="M105,72 Q145,64 190,74"/>
        </g>
        <!-- 麦田地平线 -->
        <rect y="130" width="200" height="130" fill="url(#vg2_field)"/>
        <!-- 麦田的短促金色笔触（梵高标志） -->
        <g stroke="#e8c850" stroke-width="1.5" opacity="0.7" stroke-linecap="round">
          <path d="M5,150 L10,148"/><path d="M20,152 L25,150"/><path d="M35,155 L40,153"/>
          <path d="M55,158 L60,156"/><path d="M75,160 L80,158"/><path d="M95,162 L100,160"/>
          <path d="M115,160 L120,158"/><path d="M135,158 L140,156"/><path d="M155,155 L160,153"/>
          <path d="M175,152 L180,150"/>
        </g>
        <g stroke="#a87a10" stroke-width="1.5" opacity="0.6" stroke-linecap="round">
          <path d="M10,180 L15,178"/><path d="M30,183 L35,181"/><path d="M50,186 L55,184"/>
          <path d="M70,189 L75,187"/><path d="M90,192 L95,190"/><path d="M110,190 L115,188"/>
          <path d="M130,188 L135,186"/><path d="M150,185 L155,183"/><path d="M170,182 L175,180"/>
        </g>
        <g stroke="#8a6a2a" stroke-width="1.5" opacity="0.6" stroke-linecap="round">
          <path d="M5,210 L12,208"/><path d="M25,213 L32,211"/><path d="M45,216 L52,214"/>
          <path d="M65,219 L72,217"/><path d="M85,222 L92,220"/><path d="M105,220 L112,218"/>
          <path d="M125,218 L132,216"/><path d="M145,215 L152,213"/><path d="M165,212 L172,210"/>
        </g>
        <!-- 三条小路（中央透视） -->
        <path d="M85,260 L95,165 L105,260 Z" fill="#a87a10" opacity="0.5"/>
        <path d="M88,260 L95,180 L102,260 Z" fill="#8a6a2a" opacity="0.4"/>
        <!-- 黑鸦群（天空中的剪影） -->
        <g fill="#1a1a1a">
          <path d="M40,45 q4,-3 8,0 q-4,1 -8,0"/><path d="M55,40 q4,-3 8,0 q-4,1 -8,0"/>
          <path d="M70,48 q4,-3 8,0 q-4,1 -8,0"/><path d="M125,42 q4,-3 8,0 q-4,1 -8,0"/>
          <path d="M140,50 q4,-3 8,0 q-4,1 -8,0"/><path d="M160,38 q4,-3 8,0 q-4,1 -8,0"/>
          <path d="M30,70 q4,-3 8,0 q-4,1 -8,0"/><path d="M165,72 q4,-3 8,0 q-4,1 -8,0"/>
          <path d="M50,95 q4,-3 8,0 q-4,1 -8,0"/><path d="M150,98 q4,-3 8,0 q-4,1 -8,0"/>
        </g>
      </svg>
    </div>
    <!-- 第三幅：罗纳河上的星夜（深蓝夜空 + 河面倒影 + 河岸灯火） -->
    <div class="artwork" style="background:#0a1f4f;overflow:hidden;">
      <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;">
        <defs>
          <linearGradient id="vg3_sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#050f2e"/><stop offset="60%" stop-color="#0e2a6b"/><stop offset="100%" stop-color="#1d4480"/></linearGradient>
          <linearGradient id="vg3_water" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#13326b"/><stop offset="100%" stop-color="#08152e"/></linearGradient>
          <radialGradient id="vg3_star" cx="50%" cy="50%"><stop offset="0%" stop-color="#fff7cc"/><stop offset="28%" stop-color="#fcd34d" stop-opacity="0.85"/><stop offset="100%" stop-color="#fcd34d" stop-opacity="0"/></radialGradient>
        </defs>
        <!-- 夜空 -->
        <rect width="200" height="140" fill="url(#vg3_sky)"/>
        <!-- 旋转笔触铺满夜空 -->
        <g fill="none" stroke-linecap="round">
          <g stroke="#2a5fa0" stroke-width="2" opacity="0.45"><path d="M5,25 Q40,15 80,28 Q120,40 160,25"/><path d="M5,55 Q40,45 80,58"/><path d="M120,52 Q150,42 180,55"/></g>
          <g stroke="#4a86c8" stroke-width="1.6" opacity="0.5"><path d="M5,85 Q40,75 80,88"/><path d="M120,85 Q150,75 180,88"/></g>
        </g>
        <!-- 大熊座星群（亮星，原作的标志） -->
        <circle cx="35" cy="35" r="14" fill="url(#vg3_star)"/><circle cx="35" cy="35" r="5" fill="#fff7cc"/>
        <circle cx="70" cy="28" r="12" fill="url(#vg3_star)"/><circle cx="70" cy="28" r="4" fill="#fff7cc"/>
        <circle cx="105" cy="40" r="13" fill="url(#vg3_star)"/><circle cx="105" cy="40" r="4.5" fill="#fff7cc"/>
        <circle cx="140" cy="30" r="11" fill="url(#vg3_star)"/><circle cx="140" cy="30" r="4" fill="#fff7cc"/>
        <circle cx="170" cy="55" r="12" fill="url(#vg3_star)"/><circle cx="170" cy="55" r="4" fill="#fff7cc"/>
        <circle cx="55" cy="75" r="10" fill="url(#vg3_star)"/><circle cx="55" cy="75" r="3.5" fill="#fff7cc"/>
        <circle cx="125" cy="80" r="11" fill="url(#vg3_star)"/><circle cx="125" cy="80" r="4" fill="#fff7cc"/>
        <!-- 河岸（远处的阿尔勒城墙剪影） -->
        <path d="M0,140 L200,140 L200,170 L0,170 Z" fill="#1a3050"/>
        <rect x="20" y="135" width="14" height="8" fill="#0a1830"/>
        <rect x="42" y="132" width="18" height="11" fill="#0a1830"/>
        <rect x="68" y="136" width="12" height="7" fill="#0a1830"/>
        <rect x="120" y="134" width="16" height="9" fill="#0a1830"/>
        <rect x="145" y="137" width="12" height="6" fill="#0a1830"/>
        <rect x="170" y="133" width="18" height="10" fill="#0a1830"/>
        <!-- 河岸的煤气灯（暖金黄光晕，原作标志） -->
        <circle cx="30" cy="138" r="6" fill="#fde68a"/>
        <circle cx="30" cy="138" r="3" fill="#fff7cc"/>
        <circle cx="78" cy="138" r="6" fill="#fde68a"/>
        <circle cx="78" cy="138" r="3" fill="#fff7cc"/>
        <circle cx="130" cy="138" r="6" fill="#fde68a"/>
        <circle cx="130" cy="138" r="3" fill="#fff7cc"/>
        <circle cx="175" cy="138" r="6" fill="#fde68a"/>
        <circle cx="175" cy="138" r="3" fill="#fff7cc"/>
        <!-- 罗纳河水面 -->
        <rect y="170" width="200" height="90" fill="url(#vg3_water)"/>
        <!-- 水面波纹笔触 -->
        <g fill="none" stroke="#4a86c8" stroke-width="1.2" opacity="0.4" stroke-linecap="round">
          <path d="M0,185 Q40,182 80,185 Q120,188 160,185 Q185,183 200,185"/>
          <path d="M0,200 Q40,197 80,200 Q120,203 160,200"/>
          <path d="M0,215 Q40,212 80,215 Q120,218 160,215"/>
          <path d="M0,230 Q40,227 80,230 Q120,233 160,230"/>
        </g>
        <!-- 灯光在水面的金色倒影（拉长的笔触） -->
        <g stroke="#fde68a" stroke-width="2.5" opacity="0.75" stroke-linecap="round">
          <path d="M30,172 L30,250"/><path d="M78,172 L78,250"/><path d="M130,172 L130,250"/><path d="M175,172 L175,250"/>
        </g>
        <g stroke="#fff7cc" stroke-width="1.2" opacity="0.5" stroke-linecap="round">
          <path d="M30,175 L30,245"/><path d="M78,175 L78,245"/><path d="M130,175 L130,245"/><path d="M175,175 L175,245"/>
        </g>
        <!-- 河中一对情侣剪影（原作右下角的细节） -->
        <g fill="#0a1830">
          <circle cx="150" cy="248" r="3"/><rect x="148" y="250" width="4" height="8"/>
          <circle cx="158" cy="248" r="3"/><rect x="156" y="250" width="4" height="8"/>
        </g>
      </svg>
    </div>`,
  hokusai: `
    <!-- 第一幅：神奈川冲浪里 (1831) —— 巨浪占据前景 + 爪状浪花 + 远方小富士山 + 三条小船 -->
    <div class="artwork" style="background:#efe6d3;overflow:hidden;">
      <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;">
        <!-- 天空淡米黄 -->
        <rect width="200" height="120" fill="#efe6d3"/>
        <!-- 远方富士山（小而远，白雪顶） -->
        <path d="M118,118 L142,118 L131,78 Z" fill="#2a5a7a"/>
        <path d="M125,92 L138,92 L131,78 Z" fill="#ffffff"/>
        <path d="M127,98 Q131,93 135,98" stroke="#2a5a7a" stroke-width="1.2" fill="none"/>
        <!-- 远处的小浪（背景层） -->
        <path d="M0,118 Q30,108 60,118 Q90,128 120,114" fill="none" stroke="#2a5a7a" stroke-width="2" opacity="0.5"/>
        <!-- 巨浪主体（普鲁士蓝深浅两层，占据前景左下 2/3） -->
        <path d="M0,260 L0,150 Q20,120 50,118 Q60,90 90,95 Q105,70 130,80 Q140,95 135,115 Q150,130 145,155 Q160,160 155,180 Q170,185 165,205 Q180,215 200,210 L200,260 Z" fill="#1e5b8c"/>
        <path d="M0,260 L0,170 Q25,150 55,148 Q70,130 100,132 Q115,115 135,122 Q145,135 142,152 Q155,162 152,180 Q165,188 162,205 Q175,212 200,208 L200,260 Z" fill="#0e3a5c"/>
        <!-- 巨浪顶端的"爪状"白色泡沫（北斋的标志） -->
        <g fill="#ffffff">
          <path d="M95,98 Q102,88 112,95 Q118,102 110,110 Q100,112 95,98"/>
          <path d="M115,88 Q122,78 132,85 Q138,93 130,100 Q120,102 115,88"/>
          <path d="M132,82 Q140,72 150,80 Q156,88 148,95 Q138,96 132,82"/>
        </g>
        <!-- 爪状泡沫下挂的小水珠（细节） -->
        <g fill="#ffffff">
          <circle cx="100" cy="112" r="2"/><circle cx="108" cy="118" r="1.5"/><circle cx="115" cy="122" r="1.8"/>
          <circle cx="122" cy="108" r="2"/><circle cx="128" cy="114" r="1.5"/><circle cx="135" cy="118" r="1.8"/>
          <circle cx="140" cy="100" r="2"/><circle cx="146" cy="106" r="1.5"/><circle cx="152" cy="110" r="1.8"/>
          <circle cx="88" cy="125" r="2"/><circle cx="95" cy="132" r="1.8"/><circle cx="102" cy="138" r="1.5"/>
          <circle cx="110" cy="130" r="2"/><circle cx="118" cy="138" r="1.5"/>
        </g>
        <!-- 巨浪上的横纹（北斋特有的装饰性线条） -->
        <g stroke="#ffffff" stroke-width="0.8" fill="none" opacity="0.6">
          <path d="M20,165 Q40,160 60,165"/><path d="M70,180 Q90,175 110,180"/>
          <path d="M30,195 Q50,190 70,195"/><path d="M80,210 Q100,205 120,210"/>
        </g>
        <!-- 三条小船（被浪托起，原作细节） -->
        <g fill="#8a5a2a">
          <path d="M40,200 Q55,196 70,202 L66,208 L44,208 Z"/>
          <path d="M85,215 Q100,211 115,217 L111,223 L89,223 Z"/>
        </g>
        <g stroke="#3a2a1a" stroke-width="0.8">
          <line x1="48" y1="190" x2="48" y2="200"/><line x1="58" y1="188" x2="58" y2="200"/>
          <line x1="93" y1="205" x2="93" y2="215"/><line x1="103" y1="203" x2="103" y2="215"/>
        </g>
      </svg>
    </div>
    <!-- 第二幅：凯风快晴 (1831) —— 赤红富士山 + 白雪纹路 + 蓝绿底 -->
    <div class="artwork" style="background:#2a6a7a;overflow:hidden;">
      <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;">
        <!-- 天空渐变 -->
        <defs><linearGradient id="hk2_sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1a4a6a"/><stop offset="60%" stop-color="#4a8a9a"/><stop offset="100%" stop-color="#d4a060"/></linearGradient></defs>
        <rect width="200" height="180" fill="url(#hk2_sky)"/>
        <!-- 云层横纹 -->
        <g stroke="#ffffff" stroke-width="1.5" fill="none" opacity="0.5">
          <path d="M0,40 Q40,36 80,40 Q120,44 160,40"/>
          <path d="M0,70 Q40,66 80,70 Q120,74 160,70"/>
        </g>
        <!-- 富士山主体（赤红色，下半深红上半浅红） -->
        <path d="M30,260 L100,90 L170,260 Z" fill="#c8362d"/>
        <path d="M40,260 L100,140 L160,260 Z" fill="#a82820" opacity="0.5"/>
        <!-- 山顶白雪 -->
        <path d="M82,118 L118,118 L100,90 Z" fill="#ffffff"/>
        <!-- 雪顶下的火山口凹陷 -->
        <path d="M88,118 L112,118 L108,124 L92,124 Z" fill="#8a2820"/>
        <!-- 山体的纵向纹理（熔岩流痕迹，北斋特征） -->
        <g stroke="#8a2820" stroke-width="1" fill="none" opacity="0.6">
          <path d="M88,130 Q92,180 88,250"/>
          <path d="M95,135 Q98,190 96,255"/>
          <path d="M105,135 Q108,200 110,255"/>
          <path d="M112,130 Q116,185 114,250"/>
        </g>
        <!-- 山脚树林剪影 -->
        <path d="M0,260 L0,250 Q20,245 40,250 Q60,243 80,250 Q100,240 120,250 Q140,243 160,250 Q180,245 200,250 L200,260 Z" fill="#1a3a2a"/>
      </svg>
    </div>
    <!-- 第三幅：骏州江尻 (1831) —— 大风中的富士山 + 飞舞的落叶 + 被风吹的行人 -->
    <div class="artwork" style="background:#efe6d3;overflow:hidden;">
      <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;">
        <!-- 天空 -->
        <rect width="200" height="180" fill="#efe6d3"/>
        <!-- 风的笔触（横扫天空的线条） -->
        <g stroke="#8c7a5c" stroke-width="1.2" fill="none" opacity="0.5">
          <path d="M0,30 Q60,25 130,32 Q170,35 200,30"/>
          <path d="M0,55 Q70,50 140,57"/>
          <path d="M0,80 Q60,75 130,82"/>
        </g>
        <!-- 远方富士山（小，居中偏右） -->
        <path d="M90,150 L130,150 L110,100 Z" fill="#2a5a7a"/>
        <path d="M100,118 L120,118 L110,100 Z" fill="#ffffff"/>
        <path d="M103,124 Q110,120 117,124" stroke="#2a5a7a" stroke-width="1" fill="none"/>
        <!-- 草地（被风压弯的草） -->
        <path d="M0,180 L200,180 L200,260 L0,260 Z" fill="#c8a060"/>
        <g stroke="#8a6a2a" stroke-width="1.5" fill="none">
          <path d="M10,200 Q15,194 14,180"/><path d="M25,202 Q30,196 28,182"/>
          <path d="M40,200 Q45,194 44,180"/><path d="M55,202 Q60,196 58,182"/>
          <path d="M70,200 Q75,194 74,180"/><path d="M85,202 Q90,196 88,182"/>
          <path d="M100,200 Q105,194 104,180"/><path d="M115,202 Q120,196 118,182"/>
          <path d="M130,200 Q135,194 134,180"/><path d="M145,202 Q150,196 148,182"/>
          <path d="M160,200 Q165,194 164,180"/><path d="M175,202 Q180,196 178,182"/>
          <path d="M190,200 Q195,194 194,180"/>
        </g>
        <!-- 飞舞的落叶/纸片（风中乱舞） -->
        <g fill="#8a5a2a">
          <ellipse cx="40" cy="90" rx="4" ry="2" transform="rotate(30 40 90)"/>
          <ellipse cx="70" cy="110" rx="4" ry="2" transform="rotate(20 70 110)"/>
          <ellipse cx="130" cy="70" rx="4" ry="2" transform="rotate(-15 130 70)"/>
          <ellipse cx="160" cy="120" rx="4" ry="2" transform="rotate(40 160 120)"/>
          <ellipse cx="100" cy="130" rx="4" ry="2" transform="rotate(25 100 130)"/>
          <ellipse cx="55" cy="140" rx="3" ry="1.5" transform="rotate(-20 55 140)"/>
          <ellipse cx="170" cy="95" rx="3" ry="1.5" transform="rotate(35 170 95)"/>
        </g>
        <!-- 被风吹得弯腰的行人（剪影，原作细节） -->
        <g fill="#1a1a1a">
          <path d="M120,220 Q124,210 128,218 Q130,225 126,230 L128,240 L120,240 L122,228 Z"/>
          <circle cx="124" cy="208" r="3"/>
          <!-- 斗笠 -->
          <path d="M116,206 L132,206 L128,202 L120,202 Z"/>
          <!-- 行李被风吹起 -->
          <ellipse cx="134" cy="215" rx="5" ry="3" transform="rotate(-25 134 215)"/>
        </g>
        <g fill="#1a1a1a">
          <path d="M80,230 Q83,222 86,228 Q88,234 85,238 L87,245 L80,245 L82,235 Z"/>
          <circle cx="83" cy="218" r="2.5"/>
          <path d="M77,217 L89,217 L86,213 L80,213 Z"/>
        </g>
      </svg>
    </div>`,
  warhol: `
    <!-- 第一幅：玛丽莲·梦露 (1962) —— 同一张脸的 2×2 撞色重复丝网印刷 -->
    <div class="artwork" style="background:#0a0a0a;overflow:hidden;padding:4px;">
      <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;">
        <defs>
          <!-- 玛丽莲抽象脸（symbol 复用） -->
          <symbol id="wh_face" viewBox="0 0 100 130">
            <!-- 头发 -->
            <path d="M22,52 Q18,18 50,16 Q82,18 78,52 Q70,30 50,28 Q35,30 30,52 L26,80 Z" fill="currentColor"/>
            <!-- 脸 -->
            <ellipse cx="50" cy="60" rx="28" ry="36" fill="#fff"/>
            <!-- 眼影 -->
            <ellipse cx="40" cy="55" rx="8" ry="4" fill="#ff80b0" opacity="0.7"/>
            <ellipse cx="60" cy="55" rx="8" ry="4" fill="#ff80b0" opacity="0.7"/>
            <!-- 眼睛 -->
            <circle cx="40" cy="55" r="3" fill="#0a0a0a"/><circle cx="60" cy="55" r="3" fill="#0a0a0a"/>
            <!-- 眉毛 -->
            <path d="M33,48 Q40,44 47,48" stroke="#0a0a0a" stroke-width="2" fill="none"/>
            <path d="M53,48 Q60,44 67,48" stroke="#0a0a0a" stroke-width="2" fill="none"/>
            <!-- 鼻子 -->
            <path d="M50,62 L46,80 L54,82" stroke="#c89870" stroke-width="1.5" fill="none"/>
            <!-- 红唇 -->
            <path d="M40,92 Q50,84 60,92 Q50,100 40,92 Z" fill="#ff1493"/>
            <!-- 美人痣 -->
            <circle cx="60" cy="95" r="1.2" fill="#0a0a0a"/>
            <!-- 脖子肩膀 -->
            <path d="M40,96 L40,110 L60,110 L60,96" fill="#fff"/>
          </symbol>
        </defs>
        <!-- 第 1 格：粉底金发 -->
        <rect x="0" y="0" width="96" height="124" fill="#ff1493"/>
        <g color="#ffd700"><use href="#wh_face" x="0" y="0" width="96" height="124"/></g>
        <!-- 第 2 格：青底品红发 -->
        <rect x="100" y="0" width="96" height="124" fill="#00ced1"/>
        <g color="#ff1493"><use href="#wh_face" x="100" y="0" width="96" height="124"/></g>
        <!-- 第 3 格：黄底黑发 -->
        <rect x="0" y="128" width="96" height="124" fill="#ffd700"/>
        <g color="#0a0a0a"><use href="#wh_face" x="0" y="128" width="96" height="124"/></g>
        <!-- 第 4 格：黑底青发 -->
        <rect x="100" y="128" width="96" height="124" fill="#0a0a0a"/>
        <g color="#00ced1"><use href="#wh_face" x="100" y="128" width="96" height="124"/></g>
        <!-- 分隔线 -->
        <line x1="98" y1="0" x2="98" y2="252" stroke="#0a0a0a" stroke-width="4"/>
        <line x1="0" y1="126" x2="196" y2="126" stroke="#0a0a0a" stroke-width="4"/>
      </svg>
    </div>
    <!-- 第二幅：坎贝尔汤罐 (1962) —— 重复的罐头（半打 6 罐） -->
    <div class="artwork" style="background:#e8dcc0;overflow:hidden;">
      <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;">
        <rect width="200" height="260" fill="#e8dcc0"/>
        <!-- 6 个汤罐（2 行 × 3 列） -->
        <g>
          <!-- 罐 1 -->
          <g transform="translate(15,40)">
            <rect x="0" y="0" width="50" height="14" fill="#c8c0a8"/>
            <rect x="0" y="14" width="50" height="60" fill="#d4502a"/>
            <rect x="4" y="20" width="42" height="22" fill="#ffffff"/>
            <text x="25" y="33" text-anchor="middle" font-family="serif" font-size="7" fill="#0a0a0a" font-weight="bold">CAMPBELL'S</text>
            <circle cx="25" cy="48" r="6" fill="#ffffff"/><text x="25" y="51" text-anchor="middle" font-size="5" fill="#d4502a">SOUP</text>
          </g>
          <!-- 罐 2 -->
          <g transform="translate(75,40)">
            <rect x="0" y="0" width="50" height="14" fill="#c8c0a8"/>
            <rect x="0" y="14" width="50" height="60" fill="#d4502a"/>
            <rect x="4" y="20" width="42" height="22" fill="#ffffff"/>
            <text x="25" y="33" text-anchor="middle" font-family="serif" font-size="7" fill="#0a0a0a" font-weight="bold">CAMPBELL'S</text>
            <circle cx="25" cy="48" r="6" fill="#ffffff"/><text x="25" y="51" text-anchor="middle" font-size="5" fill="#d4502a">SOUP</text>
          </g>
          <!-- 罐 3 -->
          <g transform="translate(135,40)">
            <rect x="0" y="0" width="50" height="14" fill="#c8c0a8"/>
            <rect x="0" y="14" width="50" height="60" fill="#d4502a"/>
            <rect x="4" y="20" width="42" height="22" fill="#ffffff"/>
            <text x="25" y="33" text-anchor="middle" font-family="serif" font-size="7" fill="#0a0a0a" font-weight="bold">CAMPBELL'S</text>
            <circle cx="25" cy="48" r="6" fill="#ffffff"/><text x="25" y="51" text-anchor="middle" font-size="5" fill="#d4502a">SOUP</text>
          </g>
          <!-- 罐 4 -->
          <g transform="translate(15,140)">
            <rect x="0" y="0" width="50" height="14" fill="#c8c0a8"/>
            <rect x="0" y="14" width="50" height="60" fill="#d4502a"/>
            <rect x="4" y="20" width="42" height="22" fill="#ffffff"/>
            <text x="25" y="33" text-anchor="middle" font-family="serif" font-size="7" fill="#0a0a0a" font-weight="bold">CAMPBELL'S</text>
            <circle cx="25" cy="48" r="6" fill="#ffffff"/><text x="25" y="51" text-anchor="middle" font-size="5" fill="#d4502a">SOUP</text>
          </g>
          <!-- 罐 5 -->
          <g transform="translate(75,140)">
            <rect x="0" y="0" width="50" height="14" fill="#c8c0a8"/>
            <rect x="0" y="14" width="50" height="60" fill="#d4502a"/>
            <rect x="4" y="20" width="42" height="22" fill="#ffffff"/>
            <text x="25" y="33" text-anchor="middle" font-family="serif" font-size="7" fill="#0a0a0a" font-weight="bold">CAMPBELL'S</text>
            <circle cx="25" cy="48" r="6" fill="#ffffff"/><text x="25" y="51" text-anchor="middle" font-size="5" fill="#d4502a">SOUP</text>
          </g>
          <!-- 罐 6 -->
          <g transform="translate(135,140)">
            <rect x="0" y="0" width="50" height="14" fill="#c8c0a8"/>
            <rect x="0" y="14" width="50" height="60" fill="#d4502a"/>
            <rect x="4" y="20" width="42" height="22" fill="#ffffff"/>
            <text x="25" y="33" text-anchor="middle" font-family="serif" font-size="7" fill="#0a0a0a" font-weight="bold">CAMPBELL'S</text>
            <circle cx="25" cy="48" r="6" fill="#ffffff"/><text x="25" y="51" text-anchor="middle" font-size="5" fill="#d4502a">SOUP</text>
          </g>
        </g>
      </svg>
    </div>
    <!-- 第三幅：黄色香蕉 (1967) —— Velvet Underground 专辑封面 -->
    <div class="artwork" style="background:#ffffff;overflow:hidden;display:flex;align-items:center;justify-content:center;">
      <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;">
        <rect width="200" height="260" fill="#ffffff"/>
        <!-- 香蕉主体（黄色弧形） -->
        <path d="M70,50 C50,80 45,140 60,200 C65,215 80,220 95,210 C85,180 75,130 85,90 C90,70 100,55 115,50 C110,40 90,35 70,50 Z" fill="#f4c518" stroke="#c8a010" stroke-width="2"/>
        <!-- 香蕉高光 -->
        <path d="M80,60 C70,90 68,140 78,190" stroke="#fde870" stroke-width="3" fill="none" opacity="0.7"/>
        <!-- 香蕉纹理 -->
        <g stroke="#c8a010" stroke-width="0.5" fill="none" opacity="0.5">
          <path d="M75,70 C68,100 66,140 74,180"/>
          <path d="M85,65 C78,95 76,140 84,185"/>
        </g>
        <!-- 香蕉柄 -->
        <path d="M110,50 L120,42 L125,48 L115,55 Z" fill="#5a4a1a"/>
        <!-- 香蕉底部尖 -->
        <path d="M95,210 L92,222 L97,215 Z" fill="#5a4a1a"/>
        <!-- 撕皮线（原作有可撕开的提示线） -->
        <path d="M115,50 Q118,55 115,60" stroke="#c8a010" stroke-width="1" fill="none" stroke-dasharray="2,2"/>
      </svg>
    </div>`,
  picasso: `
    <!-- 第一幅：亚维农少女 (1907) —— 五个几何化人物，立体主义开端 -->
    <div class="artwork" style="background:#d4b890;overflow:hidden;">
      <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;">
        <rect width="200" height="260" fill="#d4b890"/>
        <!-- 帷幕（粉红与蓝，原作背景） -->
        <path d="M0,0 L40,0 L30,260 L0,260 Z" fill="#c8362d" opacity="0.7"/>
        <path d="M160,0 L200,0 L200,260 L170,260 Z" fill="#2a5a8a" opacity="0.7"/>
        <path d="M30,0 L40,0 L30,260 L20,260 Z" fill="#8a2820" opacity="0.5"/>
        <!-- 人物 1（左，正面几何脸） -->
        <g>
          <polygon points="35,80 55,70 60,100 40,110" fill="#e8c8a0"/>
          <circle cx="42" cy="90" r="2.5" fill="#0a0a0a"/><circle cx="52" cy="90" r="2.5" fill="#0a0a0a"/>
          <path d="M40,100 L55,100" stroke="#0a0a0a" stroke-width="1.5"/>
          <rect x="30" y="110" width="35" height="80" fill="#e8a878"/>
        </g>
        <!-- 人物 2（中左，侧面面具脸，受伊比利亚雕塑影响） -->
        <g>
          <ellipse cx="85" cy="95" rx="15" ry="22" fill="#d8a880"/>
          <ellipse cx="80" cy="90" rx="6" ry="4" fill="#e8dfd0"/>
          <circle cx="80" cy="90" r="2" fill="#0a0a0a"/>
          <path d="M88,100 L92,105" stroke="#8a4a2a" stroke-width="2"/>
          <path d="M78,108 L88,108" stroke="#8a4a2a" stroke-width="1.5"/>
          <rect x="70" y="115" width="30" height="75" fill="#c88860"/>
        </g>
        <!-- 人物 3（中，正面，拉开帷幕） -->
        <g>
          <polygon points="100,75 120,72 125,105 105,108" fill="#e8c8a0"/>
          <circle cx="108" cy="90" r="2.5" fill="#0a0a0a"/><circle cx="118" cy="90" r="2.5" fill="#0a0a0a"/>
          <path d="M105,100 Q113,104 120,100" stroke="#0a0a0a" stroke-width="1.5" fill="none"/>
          <rect x="98" y="108" width="30" height="82" fill="#e8a878"/>
        </g>
        <!-- 人物 4（中右，非洲面具脸，立体主义关键） -->
        <g>
          <polygon points="138,78 158,72 162,108 142,112" fill="#c89870"/>
          <polygon points="142,88 148,85 150,93 144,95" fill="#ffffff"/>
          <polygon points="152,88 158,85 160,93 154,95" fill="#ffffff"/>
          <circle cx="146" cy="90" r="1.5" fill="#0a0a0a"/><circle cx="156" cy="90" r="1.5" fill="#0a0a0a"/>
          <path d="M145,102 L155,102 L150,108 Z" fill="#8a4a2a"/>
          <path d="M135,112 L165,112 L160,200 L140,200 Z" fill="#a87850"/>
        </g>
        <!-- 人物 5（右，非洲面具，蹲坐） -->
        <g>
          <polygon points="170,85 185,82 188,110 173,113" fill="#b88860"/>
          <path d="M173,93 L178,90 L180,98" stroke="#0a0a0a" stroke-width="1.5" fill="none"/>
          <path d="M180,93 L185,90 L187,98" stroke="#0a0a0a" stroke-width="1.5" fill="none"/>
          <path d="M168,113 L190,113 L188,200 L170,200 Z" fill="#9a6840"/>
        </g>
        <!-- 静物（水果，原作底部） -->
        <ellipse cx="60" cy="220" rx="8" ry="4" fill="#d4502a"/>
        <ellipse cx="80" cy="225" rx="7" ry="4" fill="#e8a040"/>
        <ellipse cx="140" cy="222" rx="8" ry="4" fill="#d4502a"/>
      </svg>
    </div>
    <!-- 第二幅：格尔尼卡 (1937) —— 黑白灰反战巨作：牛+马+母亲+灯 -->
    <div class="artwork" style="background:#d8d4cc;overflow:hidden;">
      <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;">
        <rect width="200" height="260" fill="#d8d4cc"/>
        <!-- 左侧：公牛（黑白，原作左端） -->
        <g fill="#1a1a1a">
          <polygon points="10,60 45,55 50,85 15,90"/>
          <polygon points="18,50 25,38 30,55" fill="#2a2a2a"/>
          <polygon points="35,50 42,38 45,55" fill="#2a2a2a"/>
        </g>
        <circle cx="22" cy="70" r="3" fill="#ffffff"/>
        <circle cx="38" cy="70" r="3" fill="#ffffff"/>
        <circle cx="22" cy="70" r="1.5" fill="#1a1a1a"/>
        <circle cx="38" cy="70" r="1.5" fill="#1a1a1a"/>
        <!-- 中央上方：灯（眼睛状的电灯，原作标志） -->
        <g>
          <polygon points="95,20 105,20 110,40 90,40" fill="#ffffff" stroke="#1a1a1a" stroke-width="1.5"/>
          <circle cx="100" cy="32" r="6" fill="#ffffff" stroke="#1a1a1a" stroke-width="1.5"/>
          <circle cx="100" cy="32" r="3" fill="#1a1a1a"/>
          <g stroke="#1a1a1a" stroke-width="1.5"><line x1="100" y1="15" x2="100" y2="20"/><line x1="90" y1="25" x2="85" y2="22"/><line x1="110" y1="25" x2="115" y2="22"/></g>
        </g>
        <!-- 中央：马（痛苦嘶鸣，原作核心） -->
        <g fill="#5a5a5a" stroke="#1a1a1a" stroke-width="1.5">
          <polygon points="75,90 130,85 135,140 80,145"/>
          <polygon points="95,85 105,70 120,75 125,90" fill="#8a8a8a"/>
        </g>
        <!-- 马的痛苦舌头 -->
        <path d="M110,100 L115,115 L108,118 Z" fill="#ffffff" stroke="#1a1a1a" stroke-width="1"/>
        <!-- 马的肋骨（矛刺穿） -->
        <g stroke="#1a1a1a" stroke-width="1" fill="none">
          <line x1="85" y1="110" x2="125" y2="108"/>
          <line x1="85" y1="120" x2="125" y2="118"/>
          <line x1="85" y1="130" x2="125" y2="128"/>
        </g>
        <!-- 矛（从马上方刺下） -->
        <line x1="100" y1="40" x2="108" y2="90" stroke="#1a1a1a" stroke-width="2"/>
        <polygon points="106,88 110,92 108,95" fill="#1a1a1a"/>
        <!-- 左下：抱着死婴的母亲（仰头哀嚎） -->
        <g fill="#1a1a1a">
          <polygon points="20,200 35,195 38,210 25,215"/>
          <path d="M28,195 L22,180 L18,178 L24,200" fill="#2a2a2a"/>
          <ellipse cx="22" cy="178" rx="5" ry="4" fill="#5a5a5a"/>
          <circle cx="20" cy="177" r="1" fill="#ffffff"/><circle cx="24" cy="177" r="1" fill="#ffffff"/>
          <path d="M18,182 L14,195" stroke="#1a1a1a" stroke-width="1.5"/>
        </g>
        <!-- 右下：奔跑的人（举手） -->
        <g fill="#3a3a3a">
          <polygon points="160,180 175,178 178,210 162,212"/>
          <line x1="168" y1="178" x2="160" y2="155" stroke="#1a1a1a" stroke-width="2.5"/>
          <line x1="172" y1="178" x2="182" y2="160" stroke="#1a1a1a" stroke-width="2.5"/>
          <circle cx="168" cy="170" r="6" fill="#5a5a5a"/>
        </g>
        <!-- 底部：倒地的士兵（手举断剑+花） -->
        <g fill="#1a1a1a">
          <polygon points="60,235 140,235 145,255 55,255"/>
          <line x1="90" y1="225" x2="85" y2="200" stroke="#1a1a1a" stroke-width="2"/>
          <line x1="85" y1="200" x2="75" y2="205" stroke="#1a1a1a" stroke-width="1.5"/>
        </g>
        <!-- 断剑 -->
        <line x1="90" y1="235" x2="95" y2="225" stroke="#1a1a1a" stroke-width="2"/>
        <!-- 花（断剑中长出的花，希望） -->
        <circle cx="95" cy="222" r="3" fill="#ffffff" stroke="#1a1a1a" stroke-width="1"/>
      </svg>
    </div>
    <!-- 第三幅：哭泣的女人 (1937) —— 立体派多视点面部 + 手帕 -->
    <div class="artwork" style="background:#8a6a4a;overflow:hidden;">
      <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;">
        <rect width="200" height="260" fill="#8a6a4a"/>
        <!-- 头发（黑色，原作的浓发） -->
        <path d="M50,80 Q40,40 100,30 Q160,40 150,80 L155,160 L145,160 Z" fill="#1a1a1a"/>
        <!-- 脸（多边形切割，立体派核心） -->
        <polygon points="55,90 100,70 145,90 150,140 130,170 70,170 50,140" fill="#e8b890"/>
        <polygon points="55,90 100,70 100,130 70,170 50,140" fill="#d8a880"/>
        <polygon points="100,70 145,90 150,140 130,170 100,130" fill="#c89870"/>
        <!-- 左眼（正面） -->
        <ellipse cx="75" cy="105" rx="8" ry="5" fill="#ffffff"/>
        <circle cx="75" cy="105" r="3" fill="#1a1a1a"/>
        <circle cx="75" cy="105" r="1.5" fill="#ffffff"/>
        <!-- 右眼（侧面错位，立体派多视点） -->
        <polygon points="118,100 135,98 138,112 120,114" fill="#ffffff"/>
        <circle cx="128" cy="106" r="3" fill="#1a1a1a"/>
        <!-- 眉毛（夸张高挑） -->
        <path d="M65,95 Q75,88 85,95" stroke="#1a1a1a" stroke-width="2" fill="none"/>
        <path d="M115,92 Q128,85 140,94" stroke="#1a1a1a" stroke-width="2" fill="none"/>
        <!-- 鼻子（侧面三角，绿色阴影） -->
        <polygon points="98,108 90,135 105,140" fill="#5a7a5a" opacity="0.6"/>
        <path d="M98,108 L92,135 L106,138" stroke="#1a1a1a" stroke-width="1.5" fill="none"/>
        <!-- 嘴（张开哀哭，红色） -->
        <path d="M78,150 Q100,142 122,150 Q118,165 100,168 Q82,165 78,150 Z" fill="#c8362d"/>
        <path d="M82,154 L118,154" stroke="#1a1a1a" stroke-width="1.5"/>
        <!-- 牙齿 -->
        <rect x="88" y="154" width="4" height="6" fill="#ffffff"/>
        <rect x="96" y="154" width="4" height="6" fill="#ffffff"/>
        <rect x="104" y="154" width="4" height="6" fill="#ffffff"/>
        <rect x="112" y="154" width="4" height="6" fill="#ffffff"/>
        <!-- 眼泪（从眼角流下） -->
        <path d="M75,112 L72,130 L78,132 Z" fill="#7ab8d8"/>
        <path d="M128,115 L130,135 L125,137 Z" fill="#7ab8d8"/>
        <!-- 手帕（捂在嘴下，白色几何花纹） -->
        <polygon points="60,175 140,175 150,230 50,230" fill="#f0e8d8"/>
        <g stroke="#1a1a1a" stroke-width="1" fill="none">
          <path d="M70,190 L80,200"/><path d="M90,195 L100,185"/><path d="M110,200 L120,190"/>
          <path d="M75,210 L85,220"/><path d="M105,215 L115,205"/><path d="M125,210 L135,220"/>
        </g>
        <!-- 手帕边的小花 -->
        <circle cx="70" cy="200" r="3" fill="#d4502a"/>
        <circle cx="130" cy="200" r="3" fill="#d4502a"/>
      </svg>
    </div>`,
  zhang: `
    <!-- 第一幅：泼墨泼彩山水 (1965) —— 石青石绿泼洒交融 + 细笔收拾 -->
    <div class="artwork" style="background:#f5ecd6;overflow:hidden;">
      <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;">
        <rect width="200" height="260" fill="#f5ecd6"/>
        <!-- 大面积石青泼彩（左上翻涌，自然流淌感） -->
        <path d="M0,0 C50,40 90,30 130,60 C170,90 160,140 130,160 C90,180 40,160 10,130 C-10,100 -20,40 0,0 Z" fill="#1b5e6e" opacity="0.85"/>
        <!-- 石青内部的深色晕染 -->
        <ellipse cx="50" cy="60" rx="30" ry="20" fill="#0e3e4e" opacity="0.5"/>
        <ellipse cx="100" cy="100" rx="25" ry="15" fill="#2a7a8a" opacity="0.6"/>
        <!-- 石绿泼彩（中下，与青色交融） -->
        <path d="M40,170 C80,150 140,160 180,190 C200,210 190,240 160,245 C120,250 70,240 40,220 C20,200 30,180 40,170 Z" fill="#2d8a4e" opacity="0.78"/>
        <!-- 石绿与青色交界处的金色（泼彩点睛） -->
        <ellipse cx="110" cy="170" rx="20" ry="8" fill="#c9a961" opacity="0.5"/>
        <!-- 浓墨山影（右上） -->
        <path d="M140,0 C170,30 195,40 200,20 L200,80 C185,70 165,75 150,90 C140,70 135,30 140,0 Z" fill="#1a1a1a" opacity="0.7"/>
        <!-- 赭红泼彩（点缀，活跃画面） -->
        <ellipse cx="150" cy="120" rx="25" ry="12" fill="#8b3a3a" opacity="0.55" transform="rotate(-20 150 120)"/>
        <!-- 细笔收拾：山峦轮廓勾勒（泼墨中的"收拾"功夫） -->
        <g stroke="#1a1a1a" stroke-width="1.2" fill="none" opacity="0.6">
          <path d="M40,140 Q70,130 100,140 Q130,150 160,140"/>
          <path d="M60,160 Q90,155 120,165"/>
        </g>
        <!-- 远处的小屋（点景，文人画意） -->
        <rect x="155" y="155" width="6" height="5" fill="#3a2a1a"/>
        <polygon points="154,155 162,155 158,150" fill="#3a2a1a"/>
        <!-- 一叶小舟（江上孤舟，意境） -->
        <path d="M70,200 L90,200 L86,206 L74,206 Z" fill="#1a1a1a" opacity="0.7"/>
        <line x1="80" y1="200" x2="80" y2="190" stroke="#1a1a1a" stroke-width="0.8"/>
        <!-- 题款印章（朱红方印，国画标志） -->
        <rect x="175" y="230" width="10" height="10" fill="#c8362d"/>
      </svg>
    </div>
    <!-- 第二幅：长江万里图 (1968) —— 长卷式江流蜿蜒 + 群山连绵 -->
    <div class="artwork" style="background:#f0e8d0;overflow:hidden;">
      <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;">
        <rect width="200" height="260" fill="#f0e8d0"/>
        <!-- 远山（淡墨青色，层层推远） -->
        <path d="M0,80 Q40,60 80,75 Q120,85 160,70 Q185,62 200,75 L200,110 L0,110 Z" fill="#5a8a8a" opacity="0.4"/>
        <path d="M0,95 Q50,80 100,90 Q150,98 200,88 L200,115 L0,115 Z" fill="#3a6a7a" opacity="0.5"/>
        <!-- 中景山峦（石青泼彩，浓重） -->
        <path d="M0,130 Q30,100 60,115 Q90,130 120,110 Q150,95 180,120 Q195,130 200,125 L200,150 L0,150 Z" fill="#1b5e6e" opacity="0.75"/>
        <path d="M20,125 Q45,110 70,120 Q90,135 110,118" fill="#0e3e4e" opacity="0.5"/>
        <!-- 近景山（石绿 + 赭石） -->
        <path d="M0,170 Q40,150 70,165 Q100,180 130,160 Q160,145 200,170 L200,200 L0,200 Z" fill="#2d8a4e" opacity="0.7"/>
        <path d="M40,180 Q80,170 120,178 Q160,185 200,178" fill="#8b3a3a" opacity="0.4"/>
        <!-- 长江（S 形蜿蜒，留白为水） -->
        <path d="M0,200 Q60,195 100,215 Q140,235 200,225 L200,260 L0,260 Z" fill="#d8d0b8"/>
        <!-- 江水的波纹细线 -->
        <g stroke="#8a8a7a" stroke-width="0.6" fill="none" opacity="0.5">
          <path d="M10,215 Q40,212 70,218"/>
          <path d="M80,228 Q110,225 140,230"/>
          <path d="M150,238 Q175,235 195,240"/>
        </g>
        <!-- 江上的帆船（点景，体现"万里"的辽阔） -->
        <g>
          <path d="M40,212 L48,212 L46,200 L42,200 Z" fill="#5a4a3a"/>
          <line x1="44" y1="200" x2="44" y2="190" stroke="#5a4a3a" stroke-width="0.8"/>
          <path d="M44,190 L50,195 L44,198" fill="#f0e8d0" stroke="#5a4a3a" stroke-width="0.5"/>
        </g>
        <g>
          <path d="M130,228 L138,228 L136,218 L132,218 Z" fill="#5a4a3a"/>
          <line x1="134" y1="218" x2="134" y2="210" stroke="#5a4a3a" stroke-width="0.8"/>
        </g>
        <g>
          <path d="M170,235 L176,235 L174,227 L172,227 Z" fill="#5a4a3a"/>
        </g>
        <!-- 山间小屋（隐逸） -->
        <rect x="75" y="148" width="5" height="4" fill="#3a2a1a"/>
        <polygon points="74,148 81,148 77,144" fill="#3a2a1a"/>
        <rect x="155" y="155" width="5" height="4" fill="#3a2a1a"/>
        <polygon points="154,155 161,155 157,151" fill="#3a2a1a"/>
        <!-- 题款 + 印章 -->
        <text x="20" y="40" font-family="serif" fill="#1a1a1a" font-size="6" opacity="0.5" writing-mode="tb">长江万里</text>
        <rect x="18" y="65" width="8" height="8" fill="#c8362d"/>
      </svg>
    </div>
    <!-- 第三幅：庐山图 (1981—83) —— 晚年绝笔，泼墨泼彩的巅峰 -->
    <div class="artwork" style="background:#ede0c0;overflow:hidden;">
      <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;">
        <rect width="200" height="260" fill="#ede0c0"/>
        <!-- 主峰（中央巨石，泼墨浓黑） -->
        <path d="M60,260 L55,150 Q65,90 100,70 Q135,90 145,150 L140,260 Z" fill="#1a1a1a" opacity="0.85"/>
        <!-- 主峰的石青泼彩覆盖（青黑交融） -->
        <path d="M70,140 Q80,100 100,85 Q120,100 130,140 L128,200 L72,200 Z" fill="#1b5e6e" opacity="0.7"/>
        <path d="M80,120 Q90,95 100,90 Q110,95 120,120" fill="#0e3e4e" opacity="0.6"/>
        <!-- 主峰的石绿 -->
        <path d="M85,160 Q95,140 105,145 Q115,140 125,160 L122,210 L88,210 Z" fill="#2d8a4e" opacity="0.6"/>
        <!-- 次峰（左侧，淡墨） -->
        <path d="M0,260 L0,180 Q20,140 40,160 Q50,200 45,260 Z" fill="#1a1a1a" opacity="0.6"/>
        <path d="M5,200 Q15,170 30,180" fill="#3a6a7a" opacity="0.5"/>
        <!-- 次峰（右侧，赭红泼彩） -->
        <path d="M200,260 L200,170 Q180,140 160,165 Q150,200 155,260 Z" fill="#8b3a3a" opacity="0.55"/>
        <path d="M170,200 Q180,175 190,185" fill="#c9a961" opacity="0.5"/>
        <!-- 庐山瀑布（飞流直下，留白） -->
        <path d="M95,90 L95,200 L105,200 L105,90 Z" fill="#f5ecd6" opacity="0.8"/>
        <g stroke="#d8d0b8" stroke-width="0.8" opacity="0.7" fill="none">
          <line x1="98" y1="100" x2="98" y2="190"/>
          <line x1="102" y1="100" x2="102" y2="190"/>
        </g>
        <!-- 山脚云雾（留白渲染，虚实相生） -->
        <ellipse cx="100" cy="220" rx="100" ry="20" fill="#f5ecd6" opacity="0.8"/>
        <ellipse cx="60" cy="215" rx="40" ry="12" fill="#ffffff" opacity="0.6"/>
        <ellipse cx="140" cy="218" rx="40" ry="12" fill="#ffffff" opacity="0.6"/>
        <!-- 树木（山间苍松，细笔收拾） -->
        <g stroke="#1a1a1a" stroke-width="1" fill="none" opacity="0.7">
          <path d="M50,230 L50,215"/><path d="M48,222 L52,222"/>
          <path d="M150,232 L150,218"/><path d="M148,225 L152,225"/>
          <path d="M30,235 L30,222"/><path d="M170,235 L170,222"/>
        </g>
        <!-- 题款（竖排，晚年书法） -->
        <text x="20" y="50" font-family="serif" fill="#1a1a1a" font-size="8" opacity="0.6">庐</text>
        <text x="20" y="62" font-family="serif" fill="#1a1a1a" font-size="8" opacity="0.6">山</text>
        <text x="20" y="74" font-family="serif" fill="#1a1a1a" font-size="8" opacity="0.6">图</text>
        <!-- 朱红印章 -->
        <rect x="18" y="82" width="8" height="8" fill="#c8362d"/>
        <rect x="180" y="240" width="8" height="8" fill="#c8362d"/>
      </svg>
    </div>`,
  dali: `
    <!-- 第一幅：记忆的永恒 (1931) —— 融化钟表 + 枯枝 + 沙漠 + 远海悬崖 -->
    <div class="artwork" style="background:#3a3a5a;overflow:hidden;">
      <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;">
        <defs><linearGradient id="dl1_sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1a2540"/><stop offset="50%" stop-color="#5a5070"/><stop offset="100%" stop-color="#d8a050"/></linearGradient></defs>
        <rect width="200" height="170" fill="url(#dl1_sky)"/>
        <!-- 远方海面与悬崖（达利故乡 Cap de Creus） -->
        <rect x="0" y="135" width="200" height="35" fill="#2a3a55"/>
        <path d="M0,135 L40,128 L80,134 L120,130 L160,135 L200,132 L200,170 L0,170 Z" fill="#1a2a40"/>
        <!-- 沙漠平原（棕黄荒原） -->
        <rect y="170" width="200" height="90" fill="#c89860"/>
        <rect y="200" width="200" height="60" fill="#b88840"/>
        <!-- 中央巨型方块台座（搭着融化钟表） -->
        <polygon points="50,170 95,170 88,120 55,120" fill="#a87a3a"/>
        <polygon points="55,120 88,120 95,170 50,170" fill="#9a6a30"/>
        <line x1="55" y1="120" x2="50" y2="170" stroke="#5a3a1a" stroke-width="1"/>
        <line x1="88" y1="120" x2="95" y2="170" stroke="#5a3a1a" stroke-width="1"/>
        <!-- 枯树枝（挂着第一只融化钟表） -->
        <path d="M50,170 C45,130 55,100 48,75 C45,60 55,50 60,45" stroke="#5a3a1a" stroke-width="3.5" fill="none"/>
        <path d="M60,45 Q70,40 75,32" stroke="#5a3a1a" stroke-width="2" fill="none"/>
        <path d="M48,75 Q40,70 35,65" stroke="#5a3a1a" stroke-width="2" fill="none"/>
        <!-- 融化钟表 1：挂在枯枝上，向下流淌 -->
        <g transform="translate(58,42)">
          <path d="M0,0 C-8,25 -15,55 0,75 C25,85 45,65 40,40 C30,15 15,-5 0,0 Z" fill="#f0e0a8" stroke="#c8a456" stroke-width="1.5"/>
          <ellipse cx="18" cy="25" rx="22" ry="18" fill="#f8ecc0" stroke="#8a6a2a" stroke-width="1.5"/>
          <g stroke="#5a3a1a" stroke-width="1"><line x1="18" y1="10" x2="18" y2="40"/><line x1="3" y1="25" x2="33" y2="25"/><line x1="18" y1="25" x2="28" y2="18"/></g>
        </g>
        <!-- 融化钟表 2：搭在方块边缘，半垂下 -->
        <g transform="translate(70,160)">
          <path d="M0,0 C-12,12 -18,40 0,55 C25,60 38,38 32,18 C25,5 10,-3 0,0 Z" fill="#e8d090" stroke="#c8a456" stroke-width="1.5"/>
          <ellipse cx="15" cy="20" rx="18" ry="14" fill="#f0e0b0" stroke="#8a6a2a" stroke-width="1.5"/>
          <g stroke="#5a3a1a" stroke-width="1"><line x1="15" y1="8" x2="15" y2="32"/><line x1="3" y1="20" x2="27" y2="20"/><line x1="15" y1="20" x2="23" y2="14"/></g>
        </g>
        <!-- 融化钟表 3：平摊在沙漠，流淌覆盖（最有名的橙色钟） -->
        <g transform="translate(120,190)">
          <path d="M0,0 C-15,8 -28,30 -10,42 C25,50 55,30 45,10 C35,-5 15,-5 0,0 Z" fill="#e8a868" stroke="#b87830" stroke-width="1.5"/>
          <ellipse cx="20" cy="20" rx="24" ry="16" fill="#f0c090" stroke="#8a5a2a" stroke-width="1.5"/>
          <g stroke="#5a3a1a" stroke-width="1"><line x1="20" y1="6" x2="20" y2="34"/><line x1="3" y1="20" x2="37" y2="20"/><line x1="20" y1="20" x2="32" y2="12"/><line x1="20" y1="20" x2="14" y2="6"/></g>
          <!-- 蚂蚁（聚集在钟上，达利的腐朽符号） -->
          <circle cx="10" cy="18" r="1.5" fill="#2a1a0a"/>
          <circle cx="14" cy="22" r="1.5" fill="#2a1a0a"/>
          <circle cx="8" cy="24" r="1.5" fill="#2a1a0a"/>
        </g>
        <!-- 闭眼长睫毛的生物（原作中央怪异自画像） -->
        <g transform="translate(110,200)">
          <ellipse cx="0" cy="0" rx="20" ry="10" fill="#c08858"/>
          <path d="M-15,-3 Q-10,-8 -5,-3" stroke="#1a1a1a" stroke-width="1" fill="none"/>
          <line x1="-10" y1="-3" x2="-10" y2="3" stroke="#1a1a1a" stroke-width="0.5"/>
          <line x1="-7" y1="-4" x2="-7" y2="3" stroke="#1a1a1a" stroke-width="0.5"/>
          <line x1="-4" y1="-4" x2="-4" y2="3" stroke="#1a1a1a" stroke-width="0.5"/>
          <line x1="-12" y1="-3" x2="-14" y2="-6" stroke="#1a1a1a" stroke-width="0.5"/>
          <line x1="-10" y1="-4" x2="-12" y2="-7" stroke="#1a1a1a" stroke-width="0.5"/>
          <line x1="-8" y1="-4" x2="-10" y2="-7" stroke="#1a1a1a" stroke-width="0.5"/>
          <path d="M15,5 L20,25" stroke="#5a3a1a" stroke-width="2" fill="none"/>
          <path d="M20,25 Q25,30 22,35" stroke="#5a3a1a" stroke-width="2" fill="none"/>
        </g>
      </svg>
    </div>
    <!-- 第二幅：内战的预兆 (1936) —— 撕裂的自画像躯体，对抗自身 -->
    <div class="artwork" style="background:#2a3a5a;overflow:hidden;">
      <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;">
        <defs><linearGradient id="dl2_sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1a2540"/><stop offset="60%" stop-color="#8a5070"/><stop offset="100%" stop-color="#e8a050"/></linearGradient></defs>
        <rect width="200" height="180" fill="url(#dl2_sky)"/>
        <!-- 远方地平线 -->
        <rect y="160" width="200" height="20" fill="#4a3050"/>
        <rect y="180" width="200" height="80" fill="#c89860"/>
        <!-- 撕裂的躯体（主体，自相撕扯） -->
        <g>
          <!-- 上半身（畸形肌肉） -->
          <path d="M60,60 Q80,40 110,50 Q140,55 150,80 Q145,110 130,120 L120,140 Q100,150 80,140 L70,120 Q55,100 60,60 Z" fill="#d8a878"/>
          <!-- 肌肉纹理 -->
          <g stroke="#8a5030" stroke-width="1.5" fill="none" opacity="0.7">
            <path d="M70,70 Q90,65 110,72"/>
            <path d="M75,85 Q95,80 120,88"/>
            <path d="M70,100 Q90,95 115,102"/>
            <path d="M80,115 Q100,110 125,118"/>
          </g>
          <!-- 撕裂的右手（举着自己） -->
          <path d="M150,80 Q165,75 170,60 Q175,70 168,85 Q160,95 152,90 Z" fill="#c89868"/>
          <!-- 手指 -->
          <g stroke="#8a5030" stroke-width="1.5" fill="none">
            <path d="M168,60 L172,52"/><path d="M170,62 L176,55"/><path d="M171,65 L178,62"/>
          </g>
          <!-- 撕裂的左手（撑着自己） -->
          <path d="M60,60 Q45,55 40,40 Q35,50 42,65 Q50,75 58,70 Z" fill="#c89868"/>
          <g stroke="#8a5030" stroke-width="1.5" fill="none">
            <path d="M42,40 L38,32"/><path d="M40,42 L34,35"/><path d="M39,45 L32,42"/>
          </g>
          <!-- 变形的脸（达利的自画像特征） -->
          <ellipse cx="105" cy="55" rx="12" ry="8" fill="#e8b890"/>
          <circle cx="102" cy="54" r="1.5" fill="#1a1a1a"/>
          <circle cx="110" cy="54" r="1.5" fill="#1a1a1a"/>
          <!-- 小胡子（达利标志的翘胡子） -->
          <path d="M100,62 Q95,66 90,64" stroke="#1a1a1a" stroke-width="1.5" fill="none"/>
          <path d="M112,62 Q117,66 122,64" stroke="#1a1a1a" stroke-width="1.5" fill="none"/>
          <!-- 下半身（一条腿踩着另一条） -->
          <path d="M85,140 Q80,170 75,200" stroke="#d8a878" stroke-width="14" fill="none" stroke-linecap="round"/>
          <path d="M115,140 Q120,170 125,200" stroke="#c89868" stroke-width="14" fill="none" stroke-linecap="round"/>
          <!-- 脚 -->
          <ellipse cx="73" cy="205" rx="8" ry="4" fill="#d8a878"/>
          <ellipse cx="127" cy="205" rx="8" ry="4" fill="#c89868"/>
        </g>
        <!-- 一个柜子抽屉（从身体打开，达利的潜意识符号） -->
        <rect x="95" y="90" width="20" height="12" fill="#8a5a30" stroke="#5a3a1a" stroke-width="1"/>
        <circle cx="105" cy="96" r="1.5" fill="#5a3a1a"/>
      </svg>
    </div>
    <!-- 第三幅：天鹅映象 (1937) —— 天鹅在水面倒映出大象的双重影像 -->
    <div class="artwork" style="background:#3a4a6a;overflow:hidden;">
      <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;">
        <defs><linearGradient id="dl3_sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1a2540"/><stop offset="70%" stop-color="#6a5a7a"/><stop offset="100%" stop-color="#c8a060"/></linearGradient></defs>
        <rect width="200" height="140" fill="url(#dl3_sky)"/>
        <!-- 远山 -->
        <path d="M0,135 L60,110 L120,130 L180,115 L200,130 L200,140 L0,140 Z" fill="#2a2a40" opacity="0.7"/>
        <!-- 树（左侧枯树） -->
        <path d="M30,140 C28,100 35,70 30,40" stroke="#3a2a1a" stroke-width="3" fill="none"/>
        <path d="M30,60 Q20,55 15,50" stroke="#3a2a1a" stroke-width="2" fill="none"/>
        <path d="M30,80 Q40,75 45,70" stroke="#3a2a1a" stroke-width="2" fill="none"/>
        <!-- 水面分界线 -->
        <rect y="140" width="200" height="120" fill="#5a6a8a"/>
        <line x1="0" y1="140" x2="200" y2="140" stroke="#8a9aba" stroke-width="0.5"/>
        <!-- 水面上的天鹅（白天鹅） -->
        <g>
          <ellipse cx="120" cy="135" rx="22" ry="10" fill="#ffffff"/>
          <path d="M138,135 Q145,128 142,120" stroke="#ffffff" stroke-width="6" fill="none" stroke-linecap="round"/>
          <ellipse cx="142" cy="120" rx="6" ry="5" fill="#ffffff"/>
          <polygon points="146,119 150,118 148,122" fill="#e8a040"/>
          <circle cx="143" cy="119" r="1" fill="#1a1a1a"/>
        </g>
        <!-- 水面下的倒影：大象（达利的双重影像，倒映出大象） -->
        <g opacity="0.85">
          <!-- 大象身体 -->
          <ellipse cx="120" cy="200" rx="28" ry="18" fill="#8a7a6a"/>
          <!-- 大象头 -->
          <ellipse cx="148" cy="195" rx="10" ry="9" fill="#8a7a6a"/>
          <!-- 长鼻（向下延伸，达利式的细长腿感） -->
          <path d="M152,200 Q158,215 155,235" stroke="#8a7a6a" stroke-width="4" fill="none"/>
          <!-- 大象腿（极细长，达利标志） -->
          <line x1="100" y1="215" x2="98" y2="250" stroke="#8a7a6a" stroke-width="2.5"/>
          <line x1="112" y1="218" x2="110" y2="250" stroke="#8a7a6a" stroke-width="2.5"/>
          <line x1="128" y1="218" x2="130" y2="250" stroke="#8a7a6a" stroke-width="2.5"/>
          <line x1="140" y1="215" x2="142" y2="250" stroke="#8a7a6a" stroke-width="2.5"/>
          <!-- 象牙 -->
          <path d="M150,193 Q156,188 160,190" stroke="#e8e0d0" stroke-width="2" fill="none"/>
          <!-- 耳朵 -->
          <ellipse cx="143" cy="190" rx="4" ry="5" fill="#7a6a5a"/>
          <!-- 眼睛 -->
          <circle cx="148" cy="194" r="1" fill="#1a1a1a"/>
        </g>
        <!-- 水面波纹 -->
        <g stroke="#8a9aba" stroke-width="0.8" fill="none" opacity="0.5">
          <path d="M0,150 Q40,148 80,150 Q120,152 160,150 Q185,148 200,150"/>
          <path d="M0,165 Q40,163 80,165 Q120,167 160,165"/>
        </g>
      </svg>
    </div>`,
  kusama: `
    <!-- 第一幅：无限镜屋 (1965) —— 纵深反射的灯光点阵 -->
    <div class="artwork" style="background:#000;overflow:hidden;">
      <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;">
        <rect width="200" height="260" fill="#000000"/>
        <!-- 中央光晕（无限延伸的核心） -->
        <defs>
          <radialGradient id="ks1_glow" cx="50%" cy="50%"><stop offset="0%" stop-color="#ff6060" stop-opacity="0.6"/><stop offset="40%" stop-color="#ff0000" stop-opacity="0.2"/><stop offset="100%" stop-color="#000000" stop-opacity="0"/></radialGradient>
        </defs>
        <rect width="200" height="260" fill="url(#ks1_glow)"/>
        <!-- 远处的密集小点（纵深） -->
        <g fill="#ff4040" opacity="0.5">
          <circle cx="20" cy="25" r="1.5"/><circle cx="40" cy="20" r="1.5"/><circle cx="60" cy="30" r="1.5"/><circle cx="80" cy="22" r="1.5"/><circle cx="100" cy="28" r="1.5"/><circle cx="120" cy="20" r="1.5"/><circle cx="140" cy="30" r="1.5"/><circle cx="160" cy="22" r="1.5"/><circle cx="180" cy="28" r="1.5"/>
          <circle cx="15" cy="50" r="1.5"/><circle cx="35" cy="55" r="1.5"/><circle cx="55" cy="48" r="1.5"/><circle cx="75" cy="52" r="1.5"/><circle cx="95" cy="50" r="1.5"/><circle cx="115" cy="55" r="1.5"/><circle cx="135" cy="48" r="1.5"/><circle cx="155" cy="52" r="1.5"/><circle cx="175" cy="50" r="1.5"/>
          <circle cx="20" cy="220" r="1.5"/><circle cx="40" cy="225" r="1.5"/><circle cx="60" cy="218" r="1.5"/><circle cx="80" cy="222" r="1.5"/><circle cx="100" cy="220" r="1.5"/><circle cx="120" cy="225" r="1.5"/><circle cx="140" cy="218" r="1.5"/><circle cx="160" cy="222" r="1.5"/><circle cx="180" cy="225" r="1.5"/>
          <circle cx="15" cy="240" r="1.5"/><circle cx="35" cy="245" r="1.5"/><circle cx="55" cy="238" r="1.5"/><circle cx="75" cy="242" r="1.5"/><circle cx="95" cy="240" r="1.5"/><circle cx="115" cy="245" r="1.5"/><circle cx="135" cy="238" r="1.5"/><circle cx="155" cy="242" r="1.5"/><circle cx="175" cy="245" r="1.5"/>
        </g>
        <!-- 中层中等波点 -->
        <g fill="#ff6060">
          <circle cx="30" cy="90" r="4"/><circle cx="60" cy="85" r="4"/><circle cx="90" cy="92" r="4"/><circle cx="120" cy="85" r="4"/><circle cx="150" cy="90" r="4"/><circle cx="180" cy="92" r="4"/>
          <circle cx="30" cy="180" r="4"/><circle cx="60" cy="185" r="4"/><circle cx="90" cy="178" r="4"/><circle cx="120" cy="185" r="4"/><circle cx="150" cy="180" r="4"/><circle cx="180" cy="182" r="4"/>
          <circle cx="15" cy="130" r="4"/><circle cx="185" cy="130" r="4"/>
        </g>
        <!-- 近处的大波点（向中央聚集） -->
        <g fill="#ff2020">
          <circle cx="40" cy="115" r="9"/><circle cx="70" cy="120" r="9"/><circle cx="100" cy="112" r="9"/><circle cx="130" cy="120" r="9"/><circle cx="160" cy="115" r="9"/>
          <circle cx="40" cy="150" r="9"/><circle cx="70" cy="145" r="9"/><circle cx="100" cy="155" r="9"/><circle cx="130" cy="148" r="9"/><circle cx="160" cy="152" r="9"/>
        </g>
        <!-- 中央核心大波点 -->
        <circle cx="100" cy="132" r="22" fill="#ff0000"/>
        <circle cx="100" cy="132" r="22" fill="none" stroke="#ffffff" stroke-width="1" opacity="0.3"/>
      </svg>
    </div>
    <!-- 第二幅：波点南瓜 (1994) —— 黄色南瓜 + 黑色波点 -->
    <div class="artwork" style="background:#f5e8c0;overflow:hidden;">
      <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;">
        <rect width="200" height="260" fill="#f5e8c0"/>
        <!-- 背景黑点 -->
        <g fill="#1a1a1a" opacity="0.3">
          <circle cx="20" cy="30" r="2"/><circle cx="50" cy="25" r="2"/><circle cx="80" cy="35" r="2"/><circle cx="110" cy="28" r="2"/><circle cx="140" cy="32" r="2"/><circle cx="170" cy="26" r="2"/>
          <circle cx="30" cy="240" r="2"/><circle cx="60" cy="235" r="2"/><circle cx="90" cy="245" r="2"/><circle cx="120" cy="238" r="2"/><circle cx="150" cy="242" r="2"/><circle cx="180" cy="236" r="2"/>
        </g>
        <!-- 南瓜柄 -->
        <path d="M100,80 L98,60 L104,58 L106,80 Z" fill="#5a4a1a"/>
        <!-- 南瓜主体（多瓣结构） -->
        <ellipse cx="100" cy="170" rx="80" ry="65" fill="#f4c518"/>
        <path d="M40,170 Q60,120 75,170" fill="#e8a810" opacity="0.5"/>
        <path d="M75,170 Q85,115 100,170" fill="#e8a810" opacity="0.5"/>
        <path d="M100,170 Q115,115 125,170" fill="#e8a810" opacity="0.5"/>
        <path d="M125,170 Q140,120 160,170" fill="#e8a810" opacity="0.5"/>
        <!-- 瓣纹分隔线 -->
        <g stroke="#c88810" stroke-width="2" fill="none">
          <path d="M40,170 Q60,130 75,165"/><path d="M75,170 Q85,128 100,165"/><path d="M100,170 Q115,128 125,165"/><path d="M125,170 Q140,130 160,165"/>
        </g>
        <!-- 南瓜上的黑色波点（大小不一，草间标志） -->
        <g fill="#1a1a1a">
          <circle cx="55" cy="160" r="6"/><circle cx="68" cy="180" r="5"/><circle cx="60" cy="200" r="7"/>
          <circle cx="82" cy="150" r="5"/><circle cx="90" cy="170" r="6"/><circle cx="85" cy="195" r="5"/>
          <circle cx="108" cy="155" r="6"/><circle cx="115" cy="175" r="5"/><circle cx="110" cy="200" r="6"/>
          <circle cx="135" cy="160" r="7"/><circle cx="142" cy="185" r="5"/><circle cx="130" cy="205" r="6"/>
        </g>
      </svg>
    </div>
    <!-- 第三幅：波点宇宙 —— 红黑波点的无限增殖 -->
    <div class="artwork" style="background:#ff0000;overflow:hidden;">
      <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;">
        <rect width="200" height="260" fill="#ff0000"/>
        <!-- 大黑点（前景） -->
        <g fill="#000000">
          <circle cx="30" cy="40" r="14"/><circle cx="100" cy="30" r="16"/><circle cx="170" cy="45" r="14"/>
          <circle cx="40" cy="130" r="15"/><circle cx="160" cy="135" r="14"/>
          <circle cx="30" cy="225" r="14"/><circle cx="100" cy="235" r="15"/><circle cx="170" cy="220" r="14"/>
        </g>
        <!-- 中黑点 -->
        <g fill="#000000">
          <circle cx="65" cy="75" r="8"/><circle cx="135" cy="80" r="8"/><circle cx="100" cy="90" r="9"/>
          <circle cx="75" cy="160" r="8"/><circle cx="125" cy="165" r="8"/>
          <circle cx="65" cy="195" r="8"/><circle cx="135" cy="190" r="8"/>
          <circle cx="100" cy="170" r="9"/>
        </g>
        <!-- 小黑点（密集填充） -->
        <g fill="#000000">
          <circle cx="20" cy="95" r="4"/><circle cx="50" cy="100" r="4"/><circle cx="80" cy="105" r="4"/><circle cx="120" cy="110" r="4"/><circle cx="150" cy="100" r="4"/><circle cx="180" cy="95" r="4"/>
          <circle cx="15" cy="175" r="4"/><circle cx="45" cy="180" r="4"/><circle cx="85" cy="185" r="4"/><circle cx="115" cy="190" r="4"/><circle cx="145" cy="180" r="4"/><circle cx="185" cy="175" r="4"/>
          <circle cx="20" cy="120" r="3"/><circle cx="180" cy="120" r="3"/>
        </g>
        <!-- 白色高亮点（少量，增加层次） -->
        <g fill="#ffffff">
          <circle cx="26" cy="34" r="2"/><circle cx="96" cy="24" r="2"/><circle cx="166" cy="39" r="2"/>
          <circle cx="36" cy="124" r="2"/><circle cx="156" cy="129" r="2"/>
        </g>
      </svg>
    </div>`,
  davinci: `
    <!-- 第一幅：蒙娜丽莎 (1503—19) —— 晕涂法微笑 + 飘渺风景背景 -->
    <div class="artwork" style="background:#8a6a4a;overflow:hidden;">
      <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;">
        <defs>
          <radialGradient id="dv1_bg" cx="50%" cy="40%"><stop offset="0%" stop-color="#c8a878"/><stop offset="100%" stop-color="#5a4530"/></radialGradient>
          <radialGradient id="dv1_face" cx="50%" cy="40%"><stop offset="0%" stop-color="#f0dab0"/><stop offset="100%" stop-color="#8a6840" stop-opacity="0"/></radialGradient>
        </defs>
        <rect width="200" height="260" fill="url(#dv1_bg)"/>
        <!-- 远景山脉（朦胧晕涂） -->
        <path d="M0,100 L40,80 L80,95 L120,75 L160,90 L200,85 L200,140 L0,140 Z" fill="#3a4a3a" opacity="0.5"/>
        <path d="M0,115 L50,105 L100,115 L150,100 L200,110 L200,140 L0,140 Z" fill="#2a3a2a" opacity="0.6"/>
        <!-- 蜿蜒河流 -->
        <path d="M80,140 Q90,130 100,135 Q110,140 120,130" stroke="#6a8aa8" stroke-width="3" fill="none" opacity="0.7"/>
        <path d="M75,150 Q95,142 110,148 Q125,155 135,145" stroke="#6a8aa8" stroke-width="2" fill="none" opacity="0.5"/>
        <!-- 阳台立柱（左右暗色立柱，原作标志） -->
        <rect x="5" y="60" width="14" height="200" fill="#3a2818"/>
        <rect x="181" y="60" width="14" height="200" fill="#3a2818"/>
        <!-- 头发（深棕，柔和晕涂） -->
        <path d="M65,95 Q55,60 100,55 Q145,60 135,95 Q140,130 130,150 L120,170 L80,170 L70,150 Q60,130 65,95 Z" fill="#5a3a1a"/>
        <!-- 头发亮部高光 -->
        <path d="M70,80 Q75,70 85,75" stroke="#8a6a3a" stroke-width="2" fill="none" opacity="0.6"/>
        <path d="M125,80 Q120,72 115,76" stroke="#8a6a3a" stroke-width="2" fill="none" opacity="0.6"/>
        <!-- 脸（晕涂法，柔和过渡） -->
        <ellipse cx="100" cy="110" rx="28" ry="36" fill="url(#dv1_face)"/>
        <!-- 额头高光 -->
        <ellipse cx="100" cy="92" rx="16" ry="10" fill="#f5e2c0" opacity="0.5"/>
        <!-- 眼睛（半闭，神秘） -->
        <ellipse cx="88" cy="108" rx="5" ry="3" fill="#ffffff"/>
        <ellipse cx="112" cy="108" rx="5" ry="3" fill="#ffffff"/>
        <circle cx="88" cy="108" r="2" fill="#3a2818"/>
        <circle cx="112" cy="108" r="2" fill="#3a2818"/>
        <!-- 眼睑阴影 -->
        <path d="M82,106 Q88,103 94,106" stroke="#8a6840" stroke-width="1" fill="none"/>
        <path d="M106,106 Q112,103 118,106" stroke="#8a6840" stroke-width="1" fill="none"/>
        <!-- 眉毛（极淡，原作眉毛已褪） -->
        <path d="M83,102 Q88,100 93,102" stroke="#5a3a1a" stroke-width="0.6" fill="none" opacity="0.5"/>
        <path d="M107,102 Q112,100 117,102" stroke="#5a3a1a" stroke-width="0.6" fill="none" opacity="0.5"/>
        <!-- 鼻子（晕涂阴影） -->
        <path d="M100,114 L96,130 L102,132" stroke="#8a6840" stroke-width="1" fill="none" opacity="0.7"/>
        <ellipse cx="98" cy="132" rx="2" ry="1.5" fill="#8a6840" opacity="0.4"/>
        <ellipse cx="103" cy="132" rx="2" ry="1.5" fill="#8a6840" opacity="0.4"/>
        <!-- 嘴角（神秘的微笑，晕涂法核心） -->
        <path d="M90,138 Q100,140 110,138" stroke="#6a4028" stroke-width="1.2" fill="none"/>
        <path d="M92,142 Q100,144 108,142" stroke="#8a5040" stroke-width="0.8" fill="none" opacity="0.6"/>
        <!-- 下巴柔和阴影 -->
        <ellipse cx="100" cy="142" rx="10" ry="4" fill="#8a6840" opacity="0.3"/>
        <!-- 脸颊红晕 -->
        <ellipse cx="82" cy="125" rx="6" ry="4" fill="#d89878" opacity="0.3"/>
        <ellipse cx="118" cy="125" rx="6" ry="4" fill="#d89878" opacity="0.3"/>
        <!-- 颈部 -->
        <path d="M88,142 L86,160 L114,160 L112,142" fill="#d4b890"/>
        <!-- 衣服（深色，晕涂） -->
        <path d="M55,170 Q70,160 100,165 Q130,160 145,170 L160,260 L40,260 Z" fill="#3a2818"/>
        <!-- 衣服褶皱 -->
        <path d="M70,180 Q75,200 72,230" stroke="#5a3a1a" stroke-width="1.5" fill="none" opacity="0.6"/>
        <path d="M100,170 L100,240" stroke="#5a3a1a" stroke-width="1.5" fill="none" opacity="0.6"/>
        <path d="M130,180 Q128,210 132,235" stroke="#5a3a1a" stroke-width="1.5" fill="none" opacity="0.6"/>
        <!-- 手（交叠在胸前，原作标志） -->
        <ellipse cx="85" cy="200" rx="14" ry="8" fill="#d4b890"/>
        <ellipse cx="115" cy="200" rx="14" ry="8" fill="#c8a880"/>
        <path d="M78,200 Q75,205 80,210" stroke="#8a6840" stroke-width="1" fill="none"/>
        <path d="M122,200 Q125,205 120,210" stroke="#8a6840" stroke-width="1" fill="none"/>
      </svg>
    </div>
    <!-- 第二幅：维特鲁威人 (1490) —— 圆方内的完美人体比例 -->
    <div class="artwork" style="background:#ede0c8;overflow:hidden;">
      <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;">
        <rect width="200" height="260" fill="#ede0c8"/>
        <!-- 羊皮纸纹理 -->
        <g fill="#d8c8a0" opacity="0.3">
          <circle cx="30" cy="40" r="3"/><circle cx="170" cy="50" r="2"/><circle cx="40" cy="220" r="2.5"/>
        </g>
        <!-- 圆 -->
        <circle cx="100" cy="130" r="75" fill="none" stroke="#5a3a1a" stroke-width="1.5"/>
        <!-- 方 -->
        <rect x="35" y="65" width="130" height="130" fill="none" stroke="#5a3a1a" stroke-width="1.5"/>
        <!-- 人体（双姿态合一） -->
        <g stroke="#5a3a1a" stroke-width="1.5" fill="none">
          <!-- 头 -->
          <circle cx="100" cy="85" r="9"/>
          <!-- 第一姿态（水平展开 V 形） -->
          <line x1="100" y1="94" x2="100" y2="170"/>
          <line x1="100" y1="110" x2="45" y2="95"/>
          <line x1="100" y1="110" x2="155" y2="95"/>
          <line x1="100" y1="170" x2="75" y2="200"/>
          <line x1="100" y1="170" x2="125" y2="200"/>
          <!-- 第二姿态（斜举 V 形，碰圆周） -->
          <line x1="100" y1="110" x2="40" y2="125"/>
          <line x1="100" y1="110" x2="160" y2="125"/>
          <line x1="100" y1="170" x2="62" y2="205"/>
          <line x1="100" y1="170" x2="138" y2="205"/>
        </g>
        <!-- 身体轮廓（双姿态重叠的身体填充） -->
        <ellipse cx="100" cy="120" rx="12" ry="20" fill="#8a6840" opacity="0.3"/>
        <!-- 中心点 -->
        <circle cx="100" cy="130" r="2.5" fill="#5a3a1a"/>
        <!-- 测量线 -->
        <line x1="100" y1="65" x2="100" y2="205" stroke="#5a3a1a" stroke-width="0.5" stroke-dasharray="2,2" opacity="0.5"/>
        <line x1="35" y1="130" x2="165" y2="130" stroke="#5a3a1a" stroke-width="0.5" stroke-dasharray="2,2" opacity="0.5"/>
        <!-- 镜像手写文字（达芬奇标志） -->
        <text x="100" y="240" text-anchor="middle" font-family="serif" font-style="italic" fill="#5a3a1a" font-size="8" opacity="0.6" transform="scale(-1,1) translate(-200,0)">Homo ad circulum</text>
      </svg>
    </div>
    <!-- 第三幅：岩间圣母 (1483—86) —— 圣母+圣婴+幽暗岩石洞穴 -->
    <div class="artwork" style="background:#4a3a2a;overflow:hidden;">
      <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;">
        <defs>
          <radialGradient id="dv3_cave" cx="50%" cy="40%"><stop offset="0%" stop-color="#6a5840"/><stop offset="100%" stop-color="#2a1f15"/></radialGradient>
        </defs>
        <rect width="200" height="260" fill="url(#dv3_cave)"/>
        <!-- 岩石洞穴轮廓（左右） -->
        <path d="M0,0 L0,260 L50,260 Q40,180 30,120 Q20,60 0,0 Z" fill="#3a2a1a"/>
        <path d="M200,0 L200,260 L150,260 Q160,180 170,120 Q180,60 200,0 Z" fill="#3a2a1a"/>
        <!-- 岩石纹理 -->
        <g stroke="#2a1a0a" stroke-width="1" fill="none" opacity="0.6">
          <path d="M10,80 Q20,90 15,100"/><path d="M15,140 Q25,150 20,160"/>
          <path d="M185,80 Q175,90 180,100"/><path d="M180,140 Q170,150 175,160"/>
        </g>
        <!-- 远景天空（洞穴缝隙） -->
        <path d="M50,40 Q100,30 150,40 L150,80 Q100,70 50,80 Z" fill="#5a6a7a" opacity="0.5"/>
        <!-- 远景山脉 -->
        <path d="M50,80 Q100,70 150,80 L150,100 Q100,90 50,100 Z" fill="#3a4a3a" opacity="0.6"/>
        <!-- 圣母（中央，蓝色长袍） -->
        <g>
          <!-- 长袍 -->
          <path d="M70,100 Q80,90 100,95 Q120,90 130,100 L140,220 Q120,230 100,228 Q80,230 60,220 Z" fill="#2a3a6a"/>
          <!-- 长袍褶皱 -->
          <path d="M75,130 Q80,170 78,215" stroke="#1a2a4a" stroke-width="1.5" fill="none"/>
          <path d="M100,100 L100,225" stroke="#1a2a4a" stroke-width="1.5" fill="none"/>
          <path d="M125,130 Q122,170 124,215" stroke="#1a2a4a" stroke-width="1.5" fill="none"/>
          <!-- 头部 -->
          <ellipse cx="100" cy="75" rx="14" ry="18" fill="#e8c8a0"/>
          <!-- 头发 -->
          <path d="M86,68 Q88,55 100,53 Q112,55 114,68 L116,90 L84,90 Z" fill="#6a4a2a"/>
          <!-- 头纱（半透明白） -->
          <path d="M82,60 Q70,55 68,70 Q72,80 82,78" fill="#d8d0c0" opacity="0.7"/>
          <!-- 眼睛低垂 -->
          <path d="M93,75 Q96,77 99,75" stroke="#3a2818" stroke-width="0.8" fill="none"/>
          <path d="M101,75 Q104,77 107,75" stroke="#3a2818" stroke-width="0.8" fill="none"/>
          <!-- 鼻子嘴 -->
          <path d="M100,78 L98,86 L102,87" stroke="#8a6840" stroke-width="0.8" fill="none"/>
          <path d="M95,90 Q100,91 105,90" stroke="#6a4028" stroke-width="0.8" fill="none"/>
          <!-- 手（伸向圣婴） -->
          <ellipse cx="78" cy="140" rx="8" ry="4" fill="#e8c8a0"/>
        </g>
        <!-- 圣婴耶稣（左下，坐地上） -->
        <g>
          <ellipse cx="75" cy="195" rx="16" ry="10" fill="#d4b890"/>
          <circle cx="68" cy="180" r="8" fill="#e8c8a0"/>
          <path d="M62,178 Q66,176 70,178" stroke="#3a2818" stroke-width="0.6" fill="none"/>
          <path d="M70,178 Q72,176 76,178" stroke="#3a2818" stroke-width="0.6" fill="none"/>
          <!-- 金色卷发 -->
          <path d="M62,172 Q60,166 68,164 Q76,166 74,172" fill="#c8a050"/>
          <!-- 手（祝福手势） -->
          <line x1="80" y1="192" x2="86" y2="185" stroke="#d4b890" stroke-width="3"/>
        </g>
        <!-- 小约翰（右下） -->
        <g>
          <ellipse cx="130" cy="200" rx="15" ry="9" fill="#a08868"/>
          <circle cx="138" cy="188" r="7" fill="#d4b890"/>
          <path d="M132,188 Q136,186 140,188" stroke="#3a2818" stroke-width="0.6" fill="none"/>
          <path d="M140,188 Q142,186 146,188" stroke="#3a2818" stroke-width="0.6" fill="none"/>
          <!-- 骆驼皮（小约翰标志） -->
          <path d="M120,195 Q130,192 140,195" stroke="#6a4a2a" stroke-width="1" fill="none"/>
        </g>
        <!-- 植物前景 -->
        <g fill="#3a5a3a">
          <ellipse cx="40" cy="250" rx="20" ry="8"/>
          <ellipse cx="160" cy="250" rx="20" ry="8"/>
          <path d="M30,245 L32,235"/><path d="M45,248 L48,238"/>
          <path d="M150,245 L152,235"/><path d="M165,248 L168,238"/>
        </g>
      </svg>
    </div>`,
  klimt: `
    <!-- 第一幅：吻 (1907—08) —— 金色长袍 + 螺旋马赛克 + 拥抱的恋人 -->
    <div class="artwork" style="background:#d4a017;overflow:hidden;">
      <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;">
        <defs>
          <linearGradient id="kl1_bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e8c44a"/><stop offset="60%" stop-color="#d4a017"/><stop offset="100%" stop-color="#8a6810"/></linearGradient>
          <pattern id="kl1_male" width="14" height="14" patternUnits="userSpaceOnUse">
            <rect width="14" height="14" fill="#1a1208"/>
            <rect x="2" y="2" width="4" height="6" fill="#8a8a8a"/>
            <rect x="8" y="3" width="4" height="5" fill="#6a6a6a"/>
            <rect x="3" y="9" width="5" height="4" fill="#5a5a5a"/>
          </pattern>
          <pattern id="kl1_female" width="16" height="16" patternUnits="userSpaceOnUse">
            <rect width="16" height="16" fill="#e8c44a"/>
            <circle cx="5" cy="5" r="2.5" fill="none" stroke="#8b3a3a" stroke-width="1"/>
            <circle cx="11" cy="11" r="2.5" fill="none" stroke="#8b3a3a" stroke-width="1"/>
            <circle cx="11" cy="5" r="1.5" fill="#8b3a3a"/>
            <circle cx="5" cy="11" r="1.5" fill="#8b3a3a"/>
          </pattern>
        </defs>
        <rect width="200" height="260" fill="url(#kl1_bg)"/>
        <!-- 背景金箔碎点 -->
        <g fill="#ffd700" opacity="0.6">
          <rect x="20" y="20" width="2" height="2"/><rect x="50" y="30" width="2" height="2"/><rect x="170" y="25" width="2" height="2"/>
          <rect x="180" y="60" width="2" height="2"/><rect x="15" y="80" width="2" height="2"/><rect x="40" y="200" width="2" height="2"/>
          <rect x="160" y="220" width="2" height="2"/><rect x="180" y="180" width="2" height="2"/>
        </g>
        <!-- 草地（盛开的小花） -->
        <g fill="#3a5a2a">
          <ellipse cx="30" cy="250" rx="20" ry="6"/><ellipse cx="100" cy="252" rx="30" ry="7"/><ellipse cx="170" cy="250" rx="20" ry="6"/>
        </g>
        <g fill="#8b3a3a"><circle cx="40" cy="248" r="2"/><circle cx="90" cy="250" r="2"/><circle cx="130" cy="248" r="2"/><circle cx="170" cy="250" r="2"/></g>
        <g fill="#ffd700"><circle cx="60" cy="246" r="1.5"/><circle cx="110" cy="248" r="1.5"/><circle cx="150" cy="246" r="1.5"/></g>
        <!-- 男方（站立，黑底白灰矩形长袍） -->
        <path d="M85,90 L115,90 L120,240 L80,240 Z" fill="url(#kl1_male)"/>
        <!-- 男方头（金色光环式发，侧脸朝女） -->
        <circle cx="100" cy="80" r="16" fill="#3a2818"/>
        <path d="M88,72 Q100,64 112,72 Q110,80 100,82 Q90,80 88,72" fill="#5a3a1a"/>
        <!-- 女方（跪坐，金底彩色椭圆花卉长袍） -->
        <path d="M95,110 L150,110 Q160,150 155,200 Q140,235 110,235 Q90,235 85,200 Z" fill="url(#kl1_female)"/>
        <!-- 女方头（金色光环发，朝男） -->
        <circle cx="125" cy="95" r="14" fill="#3a2818"/>
        <!-- 长发流瀑 -->
        <path d="M118,105 Q120,140 130,170 Q135,200 130,220" stroke="#3a2818" stroke-width="6" fill="none"/>
        <!-- 拥抱的胳膊（男方环抱女方） -->
        <path d="M95,120 Q110,140 130,135" stroke="url(#kl1_male)" stroke-width="10" fill="none"/>
        <path d="M115,130 Q130,150 145,140" stroke="url(#kl1_male)" stroke-width="8" fill="none"/>
        <!-- 女方手（轻抚男方面颊） -->
        <ellipse cx="108" cy="88" rx="6" ry="3" fill="#e8c8a0"/>
        <!-- 螺旋漩涡装饰（四周） -->
        <g fill="none" stroke="#1a1208" stroke-width="1.5" opacity="0.5">
          <path d="M20,40 Q30,30 40,40 Q50,50 40,60 Q30,70 20,60 Q10,50 20,40"/>
          <path d="M160,40 Q170,30 180,40 Q190,50 180,60 Q170,70 160,60"/>
        </g>
        <!-- 顶部金色光晕（神圣感） -->
        <ellipse cx="100" cy="75" rx="40" ry="20" fill="#fff4a0" opacity="0.3"/>
      </svg>
    </div>
    <!-- 第二幅：阿黛尔肖像 (1907) —— 金色装饰 + 黑发 + 凝视的眼睛 -->
    <div class="artwork" style="background:#8b6810;overflow:hidden;">
      <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;">
        <defs>
          <linearGradient id="kl2_bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a87a10"/><stop offset="100%" stop-color="#6a4810"/></linearGradient>
        </defs>
        <rect width="200" height="260" fill="url(#kl2_bg)"/>
        <!-- 背景螺旋装饰 -->
        <g fill="none" stroke="#1a1208" stroke-width="1" opacity="0.4">
          <path d="M20,30 Q30,20 40,30 Q50,40 40,50 Q30,60 20,50"/>
          <path d="M160,30 Q170,20 180,30 Q190,40 180,50 Q170,60 160,50"/>
          <path d="M20,200 Q30,190 40,200 Q50,210 40,220"/>
          <path d="M160,200 Q170,190 180,200 Q190,210 180,220"/>
        </g>
        <!-- 长袍（金色 + 阿黛尔标志的眼睛图案） -->
        <path d="M65,130 L135,130 L145,260 L55,260 Z" fill="#d4a017"/>
        <!-- 长袍装饰：眼睛 + 椭圆（阿黛尔长袍上的标志性图案） -->
        <g>
          <ellipse cx="80" cy="170" rx="8" ry="5" fill="#1a1208"/>
          <ellipse cx="80" cy="170" rx="4" ry="2.5" fill="#e8c44a"/>
          <ellipse cx="100" cy="180" rx="8" ry="5" fill="#1a1208"/>
          <ellipse cx="100" cy="180" rx="4" ry="2.5" fill="#e8c44a"/>
          <ellipse cx="120" cy="170" rx="8" ry="5" fill="#1a1208"/>
          <ellipse cx="120" cy="170" rx="4" ry="2.5" fill="#e8c44a"/>
          <ellipse cx="90" cy="210" rx="7" ry="4" fill="#1a1208"/>
          <ellipse cx="110" cy="210" rx="7" ry="4" fill="#1a1208"/>
          <!-- 矩形装饰 -->
          <rect x="78" y="230" width="6" height="8" fill="#1a1208"/>
          <rect x="116" y="230" width="6" height="8" fill="#1a1208"/>
        </g>
        <!-- 脖子肩膀（苍白肌肤） -->
        <path d="M85,118 L85,135 L115,135 L115,118" fill="#e8d8b8"/>
        <path d="M65,135 Q85,128 100,132 Q115,128 135,135 L145,150 L55,150 Z" fill="#e8d8b8"/>
        <!-- 头部（椭圆，苍白） -->
        <ellipse cx="100" cy="95" rx="22" ry="26" fill="#f0e0c0"/>
        <!-- 浓密黑发（阿黛尔标志的黑色高发髻） -->
        <path d="M78,80 Q75,55 100,50 Q125,55 122,80 L128,100 Q120,108 100,108 Q80,108 72,100 Z" fill="#1a1208"/>
        <!-- 发髻（高高耸起） -->
        <ellipse cx="100" cy="55" rx="20" ry="14" fill="#1a1208"/>
        <path d="M85,50 Q100,42 115,50" stroke="#3a2818" stroke-width="1" fill="none"/>
        <!-- 凝视的眼睛（半闭，神秘） -->
        <ellipse cx="92" cy="95" rx="5" ry="3" fill="#ffffff"/>
        <ellipse cx="108" cy="95" rx="5" ry="3" fill="#ffffff"/>
        <circle cx="92" cy="95" r="2.5" fill="#3a5a3a"/>
        <circle cx="108" cy="95" r="2.5" fill="#3a5a3a"/>
        <!-- 浓眉 -->
        <path d="M86,89 Q92,86 98,89" stroke="#1a1208" stroke-width="2" fill="none"/>
        <path d="M102,89 Q108,86 114,89" stroke="#1a1208" stroke-width="2" fill="none"/>
        <!-- 红唇 -->
        <path d="M93,110 Q100,107 107,110 Q100,114 93,110 Z" fill="#8b3a3a"/>
        <!-- 红润脸颊 -->
        <ellipse cx="84" cy="105" rx="4" ry="3" fill="#d88888" opacity="0.4"/>
        <ellipse cx="116" cy="105" rx="4" ry="3" fill="#d88888" opacity="0.4"/>
      </svg>
    </div>
    <!-- 第三幅：生命之树 (1909) —— 螺旋枝桠 + 金色背景 -->
    <div class="artwork" style="background:#8b6810;overflow:hidden;">
      <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;">
        <defs>
          <linearGradient id="kl3_bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#c89830"/><stop offset="100%" stop-color="#6a4810"/></linearGradient>
        </defs>
        <rect width="200" height="260" fill="url(#kl3_bg)"/>
        <!-- 背景金箔 -->
        <g fill="#ffd700" opacity="0.4">
          <rect x="20" y="30" width="2" height="2"/><rect x="60" y="20" width="2" height="2"/><rect x="150" y="25" width="2" height="2"/><rect x="180" y="40" width="2" height="2"/>
        </g>
        <!-- 树干（粗壮棕色） -->
        <path d="M95,260 L92,180 Q95,150 100,140 Q105,150 108,180 L105,260 Z" fill="#3a2818"/>
        <path d="M97,200 L97,250" stroke="#1a1208" stroke-width="1"/>
        <!-- 主枝（左右分叉，螺旋延伸） -->
        <g fill="none" stroke="#3a2818" stroke-width="4">
          <path d="M100,140 Q80,110 60,90 Q40,80 25,75"/>
          <path d="M100,140 Q120,110 140,90 Q160,80 175,75"/>
          <path d="M100,140 Q90,100 80,70 Q75,50 70,35"/>
          <path d="M100,140 Q110,100 120,70 Q125,50 130,35"/>
          <path d="M100,140 Q100,100 100,50"/>
        </g>
        <!-- 螺旋枝头（克里姆特标志的漩涡） -->
        <g fill="none" stroke="#ffd700" stroke-width="2.5">
          <!-- 左上螺旋 -->
          <path d="M25,75 Q15,70 18,60 Q25,55 30,62 Q32,70 25,75"/>
          <!-- 右上螺旋 -->
          <path d="M175,75 Q185,70 182,60 Q175,55 170,62 Q168,70 175,75"/>
          <!-- 中上左螺旋 -->
          <path d="M70,35 Q60,28 64,20 Q72,18 75,25 Q75,32 70,35"/>
          <!-- 中上右螺旋 -->
          <path d="M130,35 Q140,28 136,20 Q128,18 125,25 Q125,32 130,35"/>
          <!-- 中央顶螺旋 -->
          <path d="M100,50 Q92,42 96,34 Q104,32 106,40 Q104,46 100,50"/>
          <!-- 中间小螺旋 -->
          <path d="M50,110 Q42,104 46,98 Q52,98 53,104 Q52,108 50,110"/>
          <path d="M150,110 Q158,104 154,98 Q148,98 147,104 Q148,108 150,110"/>
        </g>
        <!-- 树上的小鸟/眼睛符号 -->
        <g>
          <ellipse cx="100" cy="90" rx="4" ry="3" fill="#1a1208"/>
          <circle cx="100" cy="90" r="1" fill="#ffd700"/>
          <ellipse cx="75" cy="115" rx="3" ry="2" fill="#1a1208"/>
          <ellipse cx="125" cy="115" rx="3" ry="2" fill="#1a1208"/>
        </g>
        <!-- 底部花朵（大地） -->
        <g fill="#8b3a3a"><circle cx="60" cy="255" r="3"/><circle cx="140" cy="255" r="3"/></g>
        <g fill="#ffd700"><circle cx="80" cy="255" r="2"/><circle cx="120" cy="255" r="2"/></g>
      </svg>
    </div>`,
  monet: `
    <!-- 第一幅：睡莲 (1916—19) —— 水面 + 睡莲 + 倒影的碎色光斑 -->
    <div class="artwork" style="background:#5a8a9e;overflow:hidden;">
      <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;">
        <defs><linearGradient id="mn1_water" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#6ba0b8"/><stop offset="50%" stop-color="#5a8a8e"/><stop offset="100%" stop-color="#3a6a6a"/></linearGradient></defs>
        <rect width="200" height="260" fill="url(#mn1_water)"/>
        <!-- 树丛倒影（顶部，碎色笔触） -->
        <g opacity="0.6">
          <rect x="10" y="20" width="40" height="18" fill="#6ba368"/>
          <rect x="70" y="15" width="50" height="20" fill="#5a8a4f"/>
          <rect x="140" y="22" width="45" height="16" fill="#6ba368"/>
        </g>
        <!-- 短斜向碎色笔触（印象派标志，多层堆叠） -->
        <g stroke-width="4" stroke-linecap="round">
          <g stroke="#c85a8a" opacity="0.6"><line x1="20" y1="80" x2="40" y2="72"/><line x1="80" y1="90" x2="100" y2="82"/><line x1="140" y1="85" x2="160" y2="77"/></g>
          <g stroke="#f5c8d8" opacity="0.65"><line x1="40" y1="110" x2="60" y2="102"/><line x1="110" y1="115" x2="130" y2="107"/><line x1="160" y1="120" x2="180" y2="112"/></g>
          <g stroke="#8aa8c8" opacity="0.5"><line x1="20" y1="140" x2="40" y2="132"/><line x1="100" y1="145" x2="120" y2="137"/></g>
          <g stroke="#6ba368" opacity="0.5"><line x1="60" y1="170" x2="80" y2="162"/><line x1="140" y1="175" x2="160" y2="167"/></g>
          <g stroke="#c85a8a" opacity="0.6"><line x1="30" y1="200" x2="50" y2="192"/><line x1="120" y1="210" x2="140" y2="202"/></g>
        </g>
        <!-- 睡莲叶片（圆形椭圆，散布水面） -->
        <g>
          <ellipse cx="35" cy="100" rx="16" ry="6" fill="#3a6a3a" opacity="0.8"/>
          <ellipse cx="90" cy="130" rx="18" ry="7" fill="#4a7a4a" opacity="0.8"/>
          <ellipse cx="155" cy="105" rx="16" ry="6" fill="#3a6a3a" opacity="0.8"/>
          <ellipse cx="55" cy="180" rx="17" ry="6" fill="#4a7a4a" opacity="0.8"/>
          <ellipse cx="130" cy="200" rx="18" ry="7" fill="#3a6a3a" opacity="0.8"/>
          <ellipse cx="170" cy="160" rx="15" ry="5" fill="#4a7a4a" opacity="0.7"/>
        </g>
        <!-- 睡莲花（粉色/白色花瓣） -->
        <g>
          <ellipse cx="35" cy="98" rx="7" ry="3" fill="#f5c8d8"/>
          <ellipse cx="35" cy="98" rx="3" ry="1.5" fill="#c85a8a"/>
          <ellipse cx="90" cy="128" rx="8" ry="3" fill="#ffffff"/>
          <ellipse cx="90" cy="128" rx="3.5" ry="1.5" fill="#f5c8d8"/>
          <ellipse cx="155" cy="103" rx="7" ry="3" fill="#f5c8d8"/>
          <ellipse cx="155" cy="103" rx="3" ry="1.5" fill="#c85a8a"/>
          <ellipse cx="130" cy="198" rx="8" ry="3" fill="#ffffff"/>
          <ellipse cx="130" cy="198" rx="3.5" ry="1.5" fill="#f5c8d8"/>
        </g>
        <!-- 水面反光（白色细笔触） -->
        <g stroke="#ffffff" stroke-width="1.5" opacity="0.4" stroke-linecap="round">
          <line x1="10" y1="60" x2="30" y2="58"/><line x1="70" y1="65" x2="90" y2="63"/>
          <line x1="130" y1="55" x2="150" y2="53"/><line x1="40" y1="155" x2="55" y2="153"/>
        </g>
      </svg>
    </div>
    <!-- 第二幅：日出·印象 (1872) —— 雾蒙蒙的勒阿弗尔港口 + 橙色太阳 -->
    <div class="artwork" style="background:#7a8a98;overflow:hidden;">
      <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;">
        <defs><linearGradient id="mn2_sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8a98a0"/><stop offset="50%" stop-color="#a8b0b8"/><stop offset="100%" stop-color="#6a8090"/></linearGradient></defs>
        <rect width="200" height="160" fill="url(#mn2_sky)"/>
        <!-- 雾气（朦胧笔触） -->
        <g stroke="#ffffff" stroke-width="3" opacity="0.3" stroke-linecap="round">
          <line x1="10" y1="30" x2="40" y2="28"/><line x1="60" y1="40" x2="100" y2="38"/>
          <line x1="130" y1="25" x2="170" y2="27"/><line x1="20" y1="70" x2="60" y2="68"/>
        </g>
        <!-- 太阳（橙色，原作核心，半隐雾中） -->
        <circle cx="140" cy="80" r="14" fill="#e87038" opacity="0.9"/>
        <circle cx="140" cy="80" r="14" fill="none" stroke="#f8a868" stroke-width="2" opacity="0.5"/>
        <!-- 太阳在水面的倒影（拉长的橙色笔触） -->
        <g stroke="#e87038" stroke-width="3" stroke-linecap="round" opacity="0.7">
          <line x1="135" y1="160" x2="135" y2="200"/>
          <line x1="140" y1="160" x2="140" y2="210"/>
          <line x1="145" y1="160" x2="145" y2="200"/>
        </g>
        <g stroke="#f8a868" stroke-width="1.5" stroke-linecap="round" opacity="0.5">
          <line x1="132" y1="165" x2="132" y2="195"/>
          <line x1="148" y1="165" x2="148" y2="195"/>
        </g>
        <!-- 远方港口烟囱（剪影，碎笔触） -->
        <g fill="#3a4a5a" opacity="0.6">
          <rect x="20" y="100" width="6" height="40"/>
          <rect x="40" y="110" width="4" height="30"/>
          <rect x="60" y="95" width="8" height="45"/>
          <rect x="78" y="115" width="5" height="25"/>
        </g>
        <!-- 烟囱烟雾 -->
        <g stroke="#d0d8d8" stroke-width="4" opacity="0.4" stroke-linecap="round" fill="none">
          <path d="M25,100 Q22,90 28,82 Q32,75 26,68"/>
          <path d="M64,95 Q60,85 66,78 Q70,70 64,64"/>
        </g>
        <!-- 水面（灰蓝色） -->
        <rect y="160" width="200" height="100" fill="#5a7080"/>
        <!-- 水面波纹笔触（碎色） -->
        <g stroke="#7a90a0" stroke-width="2" opacity="0.5" stroke-linecap="round">
          <line x1="10" y1="175" x2="40" y2="173"/><line x1="60" y1="180" x2="90" y2="178"/>
          <line x1="100" y1="185" x2="125" y2="183"/><line x1="155" y1="178" x2="180" y2="176"/>
          <line x1="20" y1="200" x2="50" y2="198"/><line x1="70" y1="205" x2="100" y2="203"/>
          <line x1="115" y1="210" x2="145" y2="208"/>
        </g>
        <g stroke="#6a8090" stroke-width="1.5" opacity="0.4" stroke-linecap="round">
          <line x1="15" y1="220" x2="45" y2="218"/><line x1="65" y1="225" x2="95" y2="223"/>
          <line x1="110" y1="230" x2="140" y2="228"/>
        </g>
        <!-- 前景小船（黑色剪影，划船人） -->
        <g fill="#2a2a2a">
          <path d="M20,180 Q40,175 60,180 L55,190 L25,190 Z"/>
          <line x1="40" y1="170" x2="40" y2="180" stroke="#2a2a2a" stroke-width="2"/>
          <circle cx="40" cy="168" r="2.5"/>
        </g>
      </svg>
    </div>
    <!-- 第三幅：鲁昂大教堂 (1892—94) —— 哥特教堂正面 + 不同时刻的光色 -->
    <div class="artwork" style="background:#e8c8a0;overflow:hidden;">
      <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;">
        <defs><linearGradient id="mn3_bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f0d8a8"/><stop offset="100%" stop-color="#c8a878"/></linearGradient></defs>
        <rect width="200" height="260" fill="url(#mn3_bg)"/>
        <!-- 教堂主体（暖光下的米色石材） -->
        <path d="M40,260 L40,80 Q60,60 100,55 Q140,60 160,80 L160,260 Z" fill="#e8d0a0"/>
        <!-- 教堂阴影（侧光） -->
        <path d="M100,55 Q140,60 160,80 L160,260 L150,260 L150,85 Q130,68 100,62 Z" fill="#c8a878" opacity="0.6"/>
        <!-- 教堂高光（朝阳面） -->
        <path d="M40,80 Q60,60 100,55 L100,62 Q70,68 50,85 Z" fill="#f5e2c0" opacity="0.7"/>
        <!-- 主塔尖（双塔立面） -->
        <rect x="50" y="30" width="25" height="50" fill="#e8d0a0"/>
        <polygon points="50,30 62,10 75,30" fill="#d8c088"/>
        <rect x="125" y="30" width="25" height="50" fill="#d8c088"/>
        <polygon points="125,30 137,10 150,30" fill="#c8a878"/>
        <!-- 中央玫瑰窗 -->
        <circle cx="100" cy="100" r="14" fill="#a88858"/>
        <circle cx="100" cy="100" r="14" fill="none" stroke="#6a4828" stroke-width="1.5"/>
        <g stroke="#6a4828" stroke-width="1" fill="none">
          <line x1="86" y1="100" x2="114" y2="100"/>
          <line x1="100" y1="86" x2="100" y2="114"/>
          <line x1="90" y1="90" x2="110" y2="110"/>
          <line x1="90" y1="110" x2="110" y2="90"/>
        </g>
        <!-- 拱门入口（三层内凹） -->
        <path d="M85,260 L85,160 Q100,145 115,160 L115,260 Z" fill="#6a4828"/>
        <path d="M90,260 L90,165 Q100,152 110,165 L110,260 Z" fill="#5a3818"/>
        <path d="M95,260 L95,170 Q100,160 105,170 L105,260 Z" fill="#3a2810"/>
        <!-- 拱门装饰线 -->
        <g stroke="#6a4828" stroke-width="1" fill="none">
          <path d="M82,160 Q100,142 118,160"/>
          <path d="M87,165 Q100,150 113,165"/>
        </g>
        <!-- 立柱（垂直线条强化哥特感） -->
        <g stroke="#c8a878" stroke-width="2" fill="none" opacity="0.6">
          <line x1="55" y1="130" x2="55" y2="250"/>
          <line x1="145" y1="130" x2="145" y2="250"/>
          <line x1="70" y1="200" x2="70" y2="250"/>
          <line x1="130" y1="200" x2="130" y2="250"/>
        </g>
        <!-- 拱廊细窗 -->
        <g fill="#6a4828">
          <rect x="60" y="120" width="3" height="20"/>
          <rect x="68" y="120" width="3" height="20"/>
          <rect x="129" y="120" width="3" height="20"/>
          <rect x="137" y="120" width="3" height="20"/>
        </g>
        <!-- 印象派碎色光斑（覆盖整个画面，表现光的变化） -->
        <g stroke-width="2.5" stroke-linecap="round" opacity="0.4">
          <g stroke="#f5e2c0"><line x1="20" y1="50" x2="35" y2="48"/><line x1="170" y1="55" x2="185" y2="53"/></g>
          <g stroke="#d8a868"><line x1="15" y1="120" x2="30" y2="118"/><line x1="175" y1="125" x2="190" y2="123"/></g>
          <g stroke="#c88858"><line x1="20" y1="200" x2="35" y2="198"/><line x1="170" y1="205" x2="185" y2="203"/></g>
        </g>
      </svg>
    </div>`,
  miro: `
    <!-- 第一幅：星座系列 (1940—41) —— 星月鸟女人符号，密集诗意 -->
    <div class="artwork" style="background:#f4ead5;overflow:hidden;">
      <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;">
        <rect width="200" height="260" fill="#f4ead5"/>
        <!-- 蜿蜒连接线（米罗式的随意黑线） -->
        <g stroke="#0a0a0a" stroke-width="1.8" fill="none" stroke-linecap="round" opacity="0.85">
          <path d="M30,40 Q60,30 90,45 Q120,55 150,40 Q170,32 185,45"/>
          <path d="M40,90 Q70,80 100,95 Q130,105 165,90"/>
          <path d="M20,150 Q50,140 85,155 Q115,165 150,150"/>
          <path d="M50,210 Q80,200 110,215 Q140,225 175,210"/>
        </g>
        <!-- 星星（米罗的放射星） -->
        <g stroke="#0a0a0a" stroke-width="2" stroke-linecap="round" fill="none">
          <g transform="translate(35,35)"><line x1="0" y1="-10" x2="0" y2="10"/><line x1="-10" y1="0" x2="10" y2="0"/><line x1="-7" y1="-7" x2="7" y2="7"/><line x1="-7" y1="7" x2="7" y2="-7"/></g>
          <g transform="translate(160,55)"><line x1="0" y1="-8" x2="0" y2="8"/><line x1="-8" y1="0" x2="8" y2="0"/></g>
          <g transform="translate(110,130)"><line x1="0" y1="-9" x2="0" y2="9"/><line x1="-9" y1="0" x2="9" y2="0"/><line x1="-6" y1="-6" x2="6" y2="6"/></g>
        </g>
        <!-- 红色圆点（太阳/血） -->
        <circle cx="60" cy="115" r="11" fill="#d62828"/>
        <circle cx="155" cy="180" r="9" fill="#d62828"/>
        <!-- 蓝色弯月 -->
        <path d="M165,120 A14,14 0 1,1 165,148 A11,11 0 1,0 165,120 Z" fill="#1d4ed8"/>
        <!-- 黄色三角 -->
        <polygon points="90,180 105,160 120,180" fill="#f4a300"/>
        <!-- 米罗式眼睛生物（阿米巴） -->
        <g stroke="#0a0a0a" stroke-width="2" fill="none" stroke-linecap="round">
          <ellipse cx="40" cy="195" rx="18" ry="12" fill="#f4ead5"/>
          <circle cx="35" cy="193" r="3" fill="#0a0a0a"/>
          <circle cx="46" cy="196" r="3" fill="#0a0a0a"/>
          <path d="M30,202 Q40,208 50,202"/>
        </g>
        <!-- 小色点散布 -->
        <circle cx="80" cy="60" r="4" fill="#1d4ed8"/>
        <circle cx="130" cy="95" r="3" fill="#d62828"/>
        <circle cx="25" cy="100" r="3" fill="#f4a300"/>
        <circle cx="180" cy="135" r="3" fill="#1d4ed8"/>
        <circle cx="75" cy="235" r="3" fill="#f4a300"/>
      </svg>
    </div>
    <!-- 第二幅：哈里昆的狂欢 (1924—25) —— 密集的小生物跳舞 -->
    <div class="artwork" style="background:#d4c8a8;overflow:hidden;">
      <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;">
        <rect width="200" height="260" fill="#d4c8a8"/>
        <g stroke="#0a0a0a" stroke-width="1.6" fill="none" stroke-linecap="round">
          <!-- 梯子（米罗标志，居中） -->
          <line x1="95" y1="60" x2="95" y2="200"/>
          <line x1="108" y1="60" x2="108" y2="200"/>
          <line x1="93" y1="85" x2="110" y2="88"/>
          <line x1="93" y1="115" x2="110" y2="118"/>
          <line x1="93" y1="145" x2="110" y2="148"/>
          <line x1="93" y1="175" x2="110" y2="178"/>
        </g>
        <!-- 小生物群（各种符号化形象） -->
        <g stroke="#0a0a0a" stroke-width="1.6" fill="none" stroke-linecap="round">
          <!-- 左上：三角头生物 -->
          <polygon points="40,40 55,30 55,50" fill="#d62828"/>
          <line x1="45" y1="55" x2="40" y2="80"/><line x1="50" y1="55" x2="55" y2="80"/>
          <!-- 右上：圆头蛇形 -->
          <circle cx="160" cy="45" r="8" fill="#f4a300"/>
          <path d="M160,53 Q165,70 155,85 Q150,95 160,100"/>
          <!-- 左中：眼睛球 -->
          <circle cx="35" cy="120" r="10" fill="#f4ead5"/>
          <circle cx="35" cy="120" r="4" fill="#0a0a0a"/>
          <!-- 右中：鱼形 -->
          <ellipse cx="160" cy="125" rx="14" ry="6" fill="#1d4ed8"/>
          <polygon points="174,125 184,118 184,132" fill="#1d4ed8"/>
          <!-- 左下：跳舞的人 -->
          <circle cx="40" cy="200" r="6" fill="#d62828"/>
          <line x1="40" y1="206" x2="40" y2="225"/>
          <line x1="40" y1="210" x2="30" y2="220"/><line x1="40" y1="210" x2="50" y2="220"/>
          <line x1="40" y1="225" x2="32" y2="240"/><line x1="40" y1="225" x2="48" y2="240"/>
          <!-- 右下：黑色块生物 -->
          <rect x="150" y="200" width="18" height="14" fill="#0a0a0a"/>
          <line x1="155" y1="214" x2="152" y2="235"/><line x1="163" y1="214" x2="166" y2="235"/>
        </g>
        <!-- 散落色点 -->
        <circle cx="75" cy="55" r="4" fill="#1d4ed8"/>
        <circle cx="125" cy="70" r="4" fill="#d62828"/>
        <circle cx="70" cy="160" r="3" fill="#f4a300"/>
        <circle cx="130" cy="180" r="3" fill="#d62828"/>
      </svg>
    </div>
    <!-- 第三幅：蓝色之二 —— 大面积蓝 + 一抹红 -->
    <div class="artwork" style="background:#1d4ed8;overflow:hidden;">
      <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;">
        <rect width="200" height="260" fill="#1d4ed8"/>
        <!-- 红色圆球（画面焦点） -->
        <circle cx="100" cy="130" r="22" fill="#d62828"/>
        <circle cx="100" cy="130" r="22" fill="none" stroke="#0a0a0a" stroke-width="2"/>
        <!-- 黑色蜿蜒线（米罗标志） -->
        <g stroke="#0a0a0a" stroke-width="2" fill="none" stroke-linecap="round">
          <path d="M100,152 Q90,180 110,200 Q130,215 110,235"/>
          <path d="M122,130 Q150,135 165,150"/>
          <path d="M78,130 Q55,140 45,160"/>
        </g>
        <!-- 米罗小符号（飞鸟） -->
        <g stroke="#f4a300" stroke-width="2.5" fill="none" stroke-linecap="round">
          <path d="M30,50 Q40,42 50,50 Q60,42 70,50"/>
          <path d="M140,60 Q150,52 160,60"/>
        </g>
        <!-- 黑点 -->
        <circle cx="40" cy="90" r="4" fill="#0a0a0a"/>
        <circle cx="165" cy="100" r="5" fill="#0a0a0a"/>
        <circle cx="55" cy="200" r="4" fill="#0a0a0a"/>
        <circle cx="150" cy="210" r="4" fill="#0a0a0a"/>
      </svg>
    </div>`,
};

/* ============================================================
   渲染艺术家选择器
   ============================================================ */
const grid = document.getElementById('artistGrid');
ARTISTS.forEach((a, i) => {
  const chip = document.createElement('button');
  chip.className = 'artist-chip';
  chip.dataset.id = a.id;
  chip.type = 'button';
  chip.setAttribute('aria-label', `${a.name} · ${a.movement}（按键盘 ${i + 1} 切换）`);
  chip.innerHTML = `<span class="swatch" style="background:${a.swatch}"></span><span class="chip-name">${a.name}</span><span class="chip-num">${i + 1}</span>`;
  chip.addEventListener('click', () => applyTheme(a.id));
  grid.appendChild(chip);
});

/* ---------- 作品标题 + 创作年份 ---------- */
const ARTWORK_TITLES = {
  mondrian: [
    {t:'红黄蓝构图', y:'1930', d:'蒙德里安几何抽象的巅峰，红黄蓝三原色与黑色直线的纯粹秩序。'},
    {t:'百老汇爵士乐', y:'1942—43', d:'流亡纽约后所作，彩色色块代替黑线，律动如爵士乐节拍。'},
    {t:'构图第10号', y:'1939—42', d:'晚期作品，黑线网格分割出更复杂的不对称色块布局。'},
  ],
  vangogh: [
    {t:'星月夜', y:'1889', d:'圣雷米精神病院窗前所作，旋转的星云与火焰般的柏树。'},
    {t:'麦田群鸦', y:'1890', d:'生命最后岁月的作品，金黄麦田上翻涌着不祥的乌云与黑鸦。'},
    {t:'罗纳河上的星夜', y:'1888', d:'阿尔勒时期的夜景，煤气灯的金光在河面拉成倒影。'},
  ],
  hokusai: [
    {t:'神奈川冲浪里', y:'1831', d:'《富岳三十六景》之首，巨浪的爪状泡沫与小富士山永恒对峙。'},
    {t:'凯风快晴', y:'1831', d:'又称"红富士"，晨曦中山体染成赤红，庄严肃穆。'},
    {t:'骏州江尻', y:'1831', d:'大风中落叶纷飞，行人弯腰前行，富士山静卧远方。'},
  ],
  warhol: [
    {t:'玛丽莲·梦露', y:'1962', d:'梦露逝世后所作，同一张脸用不同撞色反复丝网印刷。'},
    {t:'坎贝尔汤罐', y:'1962', d:'把超市货架搬进美术馆，质疑艺术与商品的边界。'},
    {t:'黄色香蕉', y:'1967', d:'为地下丝绒乐队设计的专辑封面，波普艺术的经典符号。'},
  ],
  picasso: [
    {t:'亚维农少女', y:'1907', d:'立体主义的开端，五位几何化人物，融入非洲面具的原始力量。'},
    {t:'格尔尼卡', y:'1937', d:'抗议纳粹轰炸的反战巨作，黑白灰中牛马人皆在哀嚎。'},
    {t:'哭泣的女人', y:'1937', d:'多视点切割的痛苦面庞，立体派肖像的情感巅峰。'},
  ],
  zhang: [
    {t:'泼墨山水', y:'1965', d:'晚年独创泼墨泼彩，石青石绿在宣纸上自然流淌交融。'},
    {t:'长江万里图', y:'1968', d:'长卷巨制，长江蜿蜒群山间，气象磅礴。'},
    {t:'庐山图', y:'1981—83', d:'绝笔之作，泼墨泼彩的巅峰，未完成而更显磅礴。'},
  ],
  dali: [
    {t:'记忆的永恒', y:'1931', d:'融化的钟表搭在枯枝与方块上，时间是柔软的。'},
    {t:'内战的预兆', y:'1936', d:'自相撕扯的畸形躯体，预兆西班牙内战的残酷。'},
    {t:'天鹅映象', y:'1937', d:'天鹅在水面的倒影是大象，双重影像的超现实魔术。'},
  ],
  kusama: [
    {t:'无限镜屋', y:'1965', d:'灯光与镜面延伸出没有尽头的宇宙，通往无限。'},
    {t:'南瓜', y:'1994', d:'黄色南瓜布满黑色波点，童年的幻象成为永恒符号。'},
    {t:'波点宇宙', y:'2000s', d:'红黑波点无限增殖，自我消融于无尽的图案之中。'},
  ],
  davinci: [
    {t:'蒙娜丽莎', y:'1503—19', d:'晕涂法让嘴角融进阴影，留下永恒的神秘微笑。'},
    {t:'维特鲁威人', y:'1490', d:'圆方之内的人体，完美比例的几何与解剖学研究。'},
    {t:'岩间圣母', y:'1483—86', d:'幽暗岩石洞穴中，圣母与圣婴笼罩在金字塔构图的柔光里。'},
  ],
  klimt: [
    {t:'吻', y:'1907—08', d:'黄金时期的巅峰，恋人在金色马赛克漩涡中相拥。'},
    {t:'阿黛尔肖像', y:'1907', d:'又称"金色女人"，眼睛图案的金色长袍奢华而神秘。'},
    {t:'生命之树', y:'1909', d:'金色螺旋枝桠向上蔓延，象征生命与宇宙的联结。'},
  ],
  monet: [
    {t:'睡莲', y:'1916—19', d:'吉维尼花园的水池，几乎失明仍画着水面倒映的天空。'},
    {t:'日出·印象', y:'1872', d:'勒阿弗尔港口的晨雾，印象派由此得名。'},
    {t:'鲁昂大教堂', y:'1892—94', d:'同一教堂画了三十余幅，捕捉不同时刻光色的变化。'},
  ],
  miro: [
    {t:'星座系列', y:'1940—41', d:'二战流亡期间所作，23幅水粉画，黑夜中的星光与希望。'},
    {t:'哈里昆的狂欢', y:'1924—25', d:'众多小生物在梯子周围起舞，童趣而充满诗意。'},
    {t:'蓝色之二', y:'1925', d:'大面积蓝色中的一抹红，极简符号里的宇宙感。'},
  ],
};

/* ============================================================
   应用主题
   ============================================================ */
function applyTheme(id) {
  const artist = ARTISTS.find(a => a.id === id);
  if (!artist) return;

  document.body.dataset.theme = id;

  // 更新选择器高亮
  document.querySelectorAll('.artist-chip').forEach(c => {
    c.classList.toggle('active', c.dataset.id === id);
  });

  // 更新文案
  document.getElementById('heroTitle').textContent = artist.name;
  document.getElementById('heroSub').textContent = `${artist.nameEn} · ${artist.years}`;
  document.getElementById('heroWiki').href = artist.wiki;
  // 徽章：从 years 提取生卒年（· 之前的部分），如 "1872 — 1944"
  document.getElementById('heroLifespan').textContent = (artist.years.split('·')[0] || '').trim();
  document.getElementById('heroQuote').textContent = `"${artist.quote}"`;
  document.getElementById('aboutBody').textContent = artist.about;
  document.getElementById('aboutTitle').textContent = artist.movement;
  document.getElementById('aboutKicker').textContent = artist.nameEn;
  document.getElementById('metaMovement').textContent = artist.movement;
  document.getElementById('metaKeywords').textContent = artist.keywords;
  document.getElementById('metaWork').innerHTML = `<a class="meta-link" href="${artist.wiki}" target="_blank" rel="noopener noreferrer">${artist.work} ↗</a>`;

  // 更新 Logo
  const logoMap = {
    mondrian: 'ART · UNIVERSE', vangogh: '✦ ART UNIVERSE ✦',
    hokusai: '浮世 · UNIVERSE', warhol: '★ POP UNIVERSE ★',
    picasso: 'ART UNIVERSE', zhang: '艺境 · UNIVERSE',
    dali: '✧ Dream · Universe ✧', kusama: '● ART UNIVERSE ●',
    davinci: '✎ Codex · Universe', klimt: '✦ Golden Universe ✦',
    monet: '❀ Impression ❀', miro: '★ MIRÓ UNIVERSE ★',
  };
  document.getElementById('logo').textContent = logoMap[id];
  document.getElementById('heroEyebrow').textContent = artist.movement.toUpperCase();

  // 更新画廊：纯 SVG 复刻渲染。用 DOM 解析避免注释/正则错位，
  // 把每个 .artwork 内的画面包进 .art-canvas，再附加双行铭牌（标题 + 年份）
  const gallery = document.getElementById('galleryGrid');
  const captions = ARTWORK_TITLES[id] || [];
  // 先用 innerHTML 让浏览器解析出 .artwork 节点（注释自动忽略）
  gallery.innerHTML = ARTWORKS[id] || '';
  const works = gallery.querySelectorAll('.artwork');
  works.forEach((el, i) => {
    const cap = captions[i] || {};
    // 把画面原有的所有子节点（svg 等）包进 .art-canvas
    const canvas = document.createElement('div');
    canvas.className = 'art-canvas';
    while (el.firstChild) canvas.appendChild(el.firstChild);
    el.appendChild(canvas);
    // 附加铭牌：标题 + 年份（常态）+ 简介（hover 展开）
    const capEl = document.createElement('div');
    capEl.className = 'artwork-cap';
    capEl.innerHTML = `<span class="cap-title">${cap.t || ''}</span><span class="cap-year">${cap.y || ''}</span><span class="cap-desc">${cap.d || ''}</span>`;
    el.appendChild(capEl);
  });

  // 触发画廊作品的滚动渐入观察（带错峰延迟）
  if (window.__revealGallery) window.__revealGallery();

  // 切换动画重置：让 hero 各元素重新播放入场动画（eyebrow→title→sub→quote 级联）
  ['heroBadge', 'heroEyebrow', 'heroTitle', 'heroSub', 'heroQuote'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.animation = 'none';
    void el.offsetWidth;
    el.style.animation = '';
  });

  // 更新文档标题
  document.title = `${artist.name} · ${artist.nameEn} — Art Universe`;
}

/* 初始化：若 URL hash 指定了艺术家 id（如 #vangogh）则应用之，否则默认蒙德里安 */
const initialId = ARTISTS.some(a => a.id === location.hash.slice(1)) ? location.hash.slice(1) : 'mondrian';
applyTheme(initialId);

/* 键盘快捷键: 数字键 1-9 切换（与艺术家头像上的序号一一对应） */
document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  const n = parseInt(e.key);
  if (!isNaN(n) && n >= 1 && n <= 9 && n <= ARTISTS.length) {
    applyTheme(ARTISTS[n - 1].id);
  }
});

/* ============================================================
   滚动渐入动画（Intersection Observer）
   ============================================================ */
// 静态元素（about 区、gallery 标题）：页面加载时一次性绑定
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

function observeReveals() {
  document.querySelectorAll('.reveal:not(.revealed)').forEach(el => revealObserver.observe(el));
}

// 给静态区块打 reveal 类
document.getElementById('about')?.classList.add('reveal');
document.querySelector('.gallery h2')?.classList.add('reveal');
observeReveals();

// 动态画廊作品：每次切换主题后重新观察（带错峰延迟，瀑布式渐入）
function revealGallery() {
  const works = document.querySelectorAll('#galleryGrid .artwork');
  works.forEach((el, i) => {
    el.classList.remove('revealed');
    el.style.transitionDelay = `${i * 0.1}s`;
    revealObserver.observe(el);
  });
}
// 暴露给 applyTheme 调用（applyTheme 渲染画廊后调用）
window.__revealGallery = revealGallery;
