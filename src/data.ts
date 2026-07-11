/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Comic, Collaboration, MerchItem, CultureQuestion } from './types';

export const COMICS_DATA: Comic[] = [
  {
    id: 'comic-1',
    title: '台港「上班時間」大對決',
    publishDate: '2026-07-10',
    category: 'culture',
    description: '台灣與香港的社畜，在面對即將遲到的那一分鐘，展現了截然不同的超能力。',
    panels: [
      '【08:59 台北捷運】\n爵爵抓著早餐蛋餅，在手扶梯上以百米衝刺速度狂奔，邊奔跑邊大喊：「借過！早餐冷掉就不美味了啊啊！」\n(下巴拉長至極致，白眼翻到後腦勺)',
      '【08:59 香港地鐵】\n貓叔穿著筆挺西裝，戴著貓耳，神情冷靜。電梯門一開，他化作一道殘影，以光速0.01秒「側身閃避、完美切入」閘口，甚至手上的凍奶茶一滴都沒灑出來。',
      '【09:01 台北辦公室】\n爵爵氣喘吁吁打卡成功。同事：「爵爵你又踩線喔！」\n爵爵：「差點... 差點靈魂就要跟蛋餅一起留在大安站了...」\n(整個人融化成一灘爛泥)',
      '【09:01 香港辦公室】\n貓叔默默坐下，開啟電腦，優雅吸了一口奶茶。\n隔壁同事：「喂阿貓，今朝老細好似心情麻麻喔。」\n貓叔冷哼：「佢邊日心情好過？返工等放工，理得佢死。」\n(毒舌高冷)'
    ]
  },
  {
    id: 'comic-2',
    title: '廣東話「雪櫃」的誤會',
    publishDate: '2026-07-08',
    category: 'culture',
    description: '當台灣人爵爵第一次聽到香港人貓叔要找「雪櫃」時，腦海中浮現了不可思議的畫面。',
    panels: [
      '【客廳裡】\n貓叔嘆氣：「熱到爆，喂阿爵，你屋企部雪櫃喺邊啊？我想拿罐可樂。」\n爵爵一臉震驚：「雪櫃？雪... 雪做的櫃子嗎？！你們香港人也太奢華了吧！」',
      '【爵爵的想像】\n貓叔像冰雪女王一樣坐在一個由萬年寒冰雕刻而成的精緻櫃子旁，手一揮，櫃子噴出冷氣，伴隨著飄雪。\n貓叔：「這就是本座的雪櫃。」',
      '【回到現實】\n爵爵拉著貓叔的手激動問：「融化了怎麼辦？地板會淹水吧！台灣很熱耶！」\n貓叔一巴掌拍在爵爵長下巴上：「融你個大頭鬼！雪櫃就是冰箱啦！雪櫃啊！」',
      '【廚房冰箱前】\n爵爵揉著下巴：「喔... 原來是冰箱。幹嘛叫雪櫃，聽起來超像哈爾濱冰雕節的展品...」\n貓叔拿著可樂冷眼吐槽：「你個下巴才像冰雕，又長又硬。」'
    ]
  },
  {
    id: 'comic-3',
    title: '社畜的「熱情」與「無奈」',
    publishDate: '2026-07-05',
    category: 'office',
    description: '老闆突然在群組發了一句「大家辛苦了，週末我們來辦個凝聚力團建！」，台港社畜的內心世界。',
    panels: [
      '【爵爵的群組回覆】\n爵爵迅速打字：「哇！謝謝老闆！好期待～[愛心][煙火]」\n但實際上爵爵的面部表情：翻白眼、瘋狂捶打尖叫雞，眼眶含淚：「我的假期... 我的特休...」',
      '【貓叔的群組回覆】\n貓叔回覆了一個精準無比、極度敷衍的貼圖：【OK】。\n實際上面部表情：面無表情地盯著螢幕，直接把群組設定為「靜音一年」，繼續寫自己的離職信草稿。',
      '【團建當天：爬山】\n爵爵背著重物，強顏歡笑：「哈哈，爬山好健康喔，芬多精耶...」\n(雙腿抖得像電動按摩椅，人已經半出魂)',
      '【團建當天：貓叔的防禦】\n貓叔戴著墨鏡，全程保持10公尺社交距離，耳機播著重金屬樂。\n老闆：「阿貓你怎麼不合照？」\n貓叔冷淡：「我對鏡頭過敏，會呼吸困難。」\n(老闆直接無言)'
    ]
  }
];

export const COLLABORATIONS_DATA: Collaboration[] = [
  {
    id: 'collab-1',
    brandName: '韋恩咖啡',
    projectTitle: '「撐住你！」熬夜聯名罐',
    year: '2025',
    category: 'food',
    logoPlaceholder: '☕',
    imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80',
    tagline: '台灣超濃黑咖啡 ✕ 港台社畜怨氣！',
    story: '與聯名經典品牌韋恩咖啡深度合作，推出「撐住你！」限定包裝。爵爵以誇張的拉長下巴化身「熬夜神仙」，與貓叔的「毒舌貓仙」一同加持上班族，幫你吸乾怨氣、補滿精力！',
    achievement: '限量 50 萬罐於全台四大超商上架，首週即告售罄，掀起社畜打卡熱潮！'
  },
  {
    id: 'collab-2',
    brandName: '王道銀行 O-Bank',
    projectTitle: '港台聯名簽帳金融卡',
    year: '2024',
    category: 'finance',
    logoPlaceholder: '💳',
    imageUrl: 'https://images.unsplash.com/photo-1589758438368-0ad531db3366?auto=format&fit=crop&w=600&q=80',
    tagline: '刷卡時，連店員都在笑你的卡面！',
    story: '特別授權兩款超人氣卡面！一款是爵爵的「理財失敗崩潰臉」，一款是貓叔的「有錢任性傲嬌臉」。每次掏出卡片消費，都在無聲宣示你的生活態度。',
    achievement: '創下王道銀行聯名卡年度申辦量前三名，並獲「最幽默金融卡面」網友票選第一！'
  },
  {
    id: 'collab-3',
    brandName: 'World Gym ✕ FitZone',
    projectTitle: '「阿猩」公益聯名盲盒',
    year: '2024',
    category: 'lifestyle',
    logoPlaceholder: '🏋️',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
    tagline: '一邊爆汗，一邊爆笑！',
    story: '攜手健身連鎖龍頭 World Gym，將爵爵手下的招牌搞笑角色「阿猩」實體化為健身公仔盲盒。包含「深蹲阿猩」、「仰臥起坐爆青筋猩」、「喝高蛋白狂笑猩」等五款趣味姿態。',
    achievement: '盲盒所得全數捐贈給弱勢團體，既推廣健美運動，也傳遞愛心與歡樂。'
  },
  {
    id: 'collab-4',
    brandName: 'Durex 杜蕾斯',
    projectTitle: '「安全防禦」趣味插畫 campaign',
    year: '2023',
    category: 'fmcg',
    logoPlaceholder: '🛡️',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80',
    tagline: '防小人更要防意外！',
    story: '以「防身、防小人、防意外」為出發點，創作了一系列社群病毒式短篇漫畫。用最幽默、不尷尬的台港日常俚語，宣導安全健康的兩性關係。',
    achievement: '社群單篇觸及突破 200 萬次，互動率高達 12%，榮獲當季數位行銷傑出獎。'
  }
];

export const MERCH_DATA: MerchItem[] = [
  {
    id: 'merch-1',
    title: '「りしれ供お (哩洗咧工喔)」街頭潮流帽T',
    priceTWD: 1280,
    priceHKD: 320,
    imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=400&q=80',
    description: '重磅純棉落肩版型，胸前印有爵爵手繪的憤怒拉長下巴與台式極致問候語「りしれ供お」。穿上它，不用開口，路人都會對你保持敬畏。',
    tags: ['限量', '街頭', '台式霸氣'],
    isHot: true
  },
  {
    id: 'merch-2',
    title: '「死撚開 (死開啦)」極簡吐槽寬鬆潮T',
    priceTWD: 880,
    priceHKD: 220,
    imageUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=400&q=80',
    description: '香港最道地的「社交距離」宣言。背後是大大的貓叔冷眼嘲諷插圖，前面印著清秀的「死撚開」三個字。特別適合上班、坐地鐵、或者不想與人類社交的時刻。',
    tags: ['貓叔推薦', '社恐必備', '純棉'],
    isHot: true
  },
  {
    id: 'merch-3',
    title: '【MADE IN TAIWAN】港台踩小人純棉防滑襪',
    priceTWD: 290,
    priceHKD: 75,
    imageUrl: 'https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=400&q=80',
    description: '台灣彰化優質襪廠在地生產。鞋底織有「小人、八婆、無良老闆、背骨仔」等手繪角色，保證每走一步，都在實行驚天地泣鬼神的打小人儀式。防滑耐穿，社畜開運神器！',
    tags: ['MIT', '防小人', '強烈推薦']
  },
  {
    id: 'merch-4',
    title: '「阿猩健身系列」限量公益盲盒公仔',
    priceTWD: 350,
    priceHKD: 90,
    imageUrl: 'https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?auto=format&fit=crop&w=400&q=80',
    description: '與 World Gym 聯名的限量實體盲盒。精緻樹脂材質，高約 8cm，全套共 5 款 + 1 款隱藏版（金色槓鈴阿猩）。每一隻都散發著濃濃的搞笑汗水味。',
    tags: ['公仔', '盲盒', '公益']
  }
];

export const CULTURE_QUESTIONS: CultureQuestion[] = [
  {
    id: 'q-1',
    phraseTW: '冰箱',
    phraseHK: '雪櫃',
    meaning: '低溫保存食物的家用電器',
    choices: ['冷櫃', '雪櫃', '冰皮箱', '凍肉機'],
    correctAnswerIndex: 1,
    hint: '廣東話中，保存結冰食品的地方叫「雪」東西的「櫃」。',
    jiejieRoast: '什麼雪櫃啦，我一開始還以為是迪士尼冰雪奇緣裡面的魔法冰雕咧！',
    catRoast: '冰箱才奇怪吧？箱什麼箱？難道你的冰箱是用木頭箱子做的嗎？這叫櫃，有門的櫃子，懂？'
  },
  {
    id: 'q-2',
    phraseTW: '冰檸檬紅茶微糖',
    phraseHK: '凍檸茶少甜',
    meaning: '茶餐廳必點的凍檸檬紅茶，減少糖分',
    choices: ['凍茶少蜜', '冷檸紅微甘', '凍檸茶少甜', '冰檸茶低糖'],
    correctAnswerIndex: 2,
    hint: '香港茶餐廳黑話，冰的叫「凍」，檸檬茶叫「檸茶」，糖分減少叫「少甜」。還有「走甜」是無糖喔！',
    jiejieRoast: '香港茶餐廳點餐像在打電報一樣！「凍檸茶，少甜，茶走！」我站在櫃檯前結巴了五秒，後面大叔嘖得超大聲！',
    catRoast: '我們講求效率！「凍檸茶少甜」五個字搞定，你們台灣「冰檸檬紅茶微糖微冰」十個字，等點完茶地鐵都到站了啦！'
  },
  {
    id: 'q-3',
    phraseTW: '哩洗咧工喔 (りしれ供お)',
    phraseHK: '你講乜嘢啊',
    meaning: '「你到底在說什麼啦」的粗口/強烈吐槽語氣',
    choices: ['你講乜嘢啊', '你係咪傻咗', '咪嘈啦你', '收聲啦'],
    correctAnswerIndex: 0,
    hint: '「乜嘢」就是「什麼」，「你講乜嘢啊」就是「你在說什麼啊」。口氣重一點就是「你到底在講三小」。',
    jiejieRoast: '我的日式台語神句「りしれ供お」可是風靡全台！連香港粉絲都拿去當口頭禪了！',
    catRoast: '一開始我以為你在講日文「Rishire-Tomo」，想說這小子去日本留學了嗎？結果翻譯出來笑死我，台語真的很有魔性！'
  },
  {
    id: 'q-4',
    phraseTW: '去上班',
    phraseHK: '返工',
    meaning: '前往工作崗位，開始一天的社畜生活',
    choices: ['開工', '上工', '返工', '打工'],
    correctAnswerIndex: 2,
    hint: '香港人稱上班為「返工」（返回工作的地方），下班稱為「放工」。',
    jiejieRoast: '「返工」聽起來好沉重喔... 有種要把靈魂送回監獄的感覺。',
    catRoast: '不然咧？難道是去遊樂園啊？本來就是送靈魂回監獄，不過香港的監獄冷氣通常開得很足，也算是一點點慰藉啦。'
  },
  {
    id: 'q-5',
    phraseTW: '冰淇淋',
    phraseHK: '雪糕',
    meaning: '乳製品製成的冷凍甜點',
    choices: ['冰淇淋', '雪糕', '霜淇淋', '凍奶冰'],
    correctAnswerIndex: 1,
    hint: '在香港，不管是杯裝、甜筒還是雪糕車賣的，都一律叫作「雪糕」。',
    jiejieRoast: '「雪糕」聽起來好綿密、好高級喔！感覺是古代皇帝冬天才能吃到的甜點。',
    catRoast: '這倒是。不過在香港最感動的，還是在街頭聽到富豪雪糕車的音樂響起！那是所有香港人的童年回憶啊。'
  }
];
