export interface Project {
  id: string;
  title: string;
  studentName: string;
  grade: number;
  description: string;
  type: 'website' | 'animation' | 'data-viz' | 'game';
  mediaUrl: string;
  mediaType?: 'image' | 'video';
  techStack: string[];
}

export const PROJECTS: Project[]  = [
  {
    id: '2024-001',
    title: 'Матрицалық трансформация',
    studentName: 'Еркін Едіге & Омар Ихсан',
    grade: 7,
    description: 'Сызықтық алгебра заңдылықтарын SFML арқылы визуалды бейнелеу. Фигуралардың координаталарын матрицалық есептеулер арқылы бұру және масштабтау функцияларын қамтиды.',
    type: 'data-viz',
    mediaUrl: 'edige.PNG',
    mediaType: 'image',
    techStack: ['C++', 'SFML', 'Math', 'Linear Algebra']
  },
  {
    id: '2024-002',
    title: 'Cyberpunk Neon Rain Simulation',
    studentName: 'Жұбатқан Ибраһим & Барат Мұхаметали',
    grade: 7,
    description: 'Киберпанк стиліндегі визуалды симуляция. Бөлшектер жүйесі (Particles) арқылы жаңбырдың түсуі және неонды жарықтардың шағылысуы модельденген.',
    type: 'animation',
    mediaUrl: 'ali.PNG',
    mediaType: 'image',
    techStack: ['C++', 'SFML', 'Particles', 'Visual Effects']
  },
  {
    id: '2024-003',
    title: 'ДНҚ спиралінің моделі',
    studentName: 'Бейбітова Еркежан & Асылхан Зере',
    grade: 7,
    description: 'Биологиялық ДНҚ спиралінің екі өлшемді моделі. Анимация арқылы спиральдың айналуын және оның құрылымдық өзгеру процестерін бейнелейді.',
    type: 'animation',
    mediaUrl: 'zere.PNG',
    mediaType: 'image',
    techStack: ['C++', 'SFML', 'Biology', 'Animation']
  },
  {
    id: '2024-004',
    title: 'Falling Sand Physics Sandbox',
    studentName: 'Әліпұлы Бек & Айсаджанов Амаль',
    grade: 7,
    description: 'Пиксельдік физика негізінде жасалған интерактивті симулятор. Құм, су және тас бөлшектерінің гравитация әсерінен өзара әрекеттесуін модельдейді.',
    type: 'game',
    mediaUrl: 'bek.PNG',
    mediaType: 'image',
    techStack: ['C++', 'SFML', 'Physics Engine', 'Interaction']
  },
  {
    id: '2024-005',
    title: 'Нейрондық желі архитектурасы',
    studentName: 'Рамазан Даниал & Әлібиұлы Мейірлан',
    grade: 7,
    description: 'Нейрондық желідегі қабаттар мен нейрондарды графикалық бейнелеп, деректердің өңделуі мен сигналдың өтуін анимация арқылы көрсетеді.',
    type: 'data-viz',
    mediaUrl: 'danial.PNG',
    mediaType: 'image',
    techStack: ['C++', 'SFML', 'AI Basics', 'Logic']
  },
  {
    id: '2024-007',
    title: 'Кристалдық тордың деформациясы',
    studentName: 'Смагулов Немат & Евдименова Зульфия',
    grade: 7,
    description: 'Кристалдық торлардың құрылымын зерттеу және атомдар арасындағы байланыстардың сыртқы күш түскендегі деформациясын модельдеу.',
    type: 'data-viz',
    mediaUrl: 'nemat.PNG',
    mediaType: 'image',
    techStack: ['C++', 'SFML', 'Physics', 'Materials Science']
  },
  {
    id: '2024-009',
    title: 'Лоренц аттракторы',
    studentName: 'Досымхан Айша & Байтуманова Ясмин',
    grade: 7,
    description: 'Хаос теориясының негізгі элементі Лоренц аттракторын визуалдау. Бөлшектердің траекториясын есептеп, "Көбелек эффектісін" графикалық түрде көрсетеді.',
    type: 'data-viz',
    mediaUrl: 'yasmin.PNG',
    mediaType: 'image',
    techStack: ['C++', 'SFML', 'Math', 'Chaos Theory']
  },
  {
    id: '2024-012',
    title: 'Фурье түрлендіруі',
    studentName: 'Ербол Әмина & Абжат Мөлдір',
    grade: 7,
    description: 'Математикалық Фурье түрлендіруін графикалық бейнелеу. Күрделі тербелістердің жеке синусоидаларға ыдырау процесін көрсетеді.',
    type: 'data-viz',
    mediaUrl: 'moldir.PNG', // Молдирмен біріктірілді, Аминаның файлы негіз ретінде қалды
    mediaType: 'image',
    techStack: ['C++', 'SFML', 'Math', 'Wave Analysis']
  },
  {
    id: '2024-016',
    title: 'Қара құрдым',
    studentName: 'Мырзағұл Дәулет & Болат Рабат',
    grade: 7,
    description: 'Ғарыштағы қара құрдымның гравитациялық тартылысын модельдеу. Нысандардың орталыққа тартылу траекториясын және жойылуын бейнелейді.',
    type: 'animation',
    mediaUrl: 'daulet.PNG',
    mediaType: 'image',
    techStack: ['C++', 'SFML', 'Astrophysics', 'Space']
  },
  {
    id: '2024-019',
    title: 'Event Horizon Simulator',
    studentName: 'Сейтжан Ибрагим & Советжан Амиржан',
    grade: 7,
    description: 'Нысандардың қара құрдымға қарай спираль бойымен қозғалуын және оқиғалар көжиегіндегі визуалды эффектілерді модельдейтін симулятор.',
    type: 'animation',
    mediaUrl: 'amirzhan.PNG',
    mediaType: 'image',
    techStack: ['C++', 'SFML', 'Space Physics', 'Logic']
  },
  {
    id: "2024-901",
    title: "Cosmos & Physics AI",
    studentName: "Ербосын Альтаир Жайдарұлы",
    grade: 9,
    description: "Ғарыш пен физика заңдарын AI көмегімен түсіндіретін интерактивті платформа. Күрделі теорияларды қарапайым тілге айналдырады.",
    type: "website",
    mediaUrl: "14.png",
    mediaType: "image",
    techStack: ["HTML", "CSS", "JavaScript", "Google AI Studio"]
  },
  {
    id: "2024-902",
    title: "Интеллектуалды Сапер",
    studentName: "Оралбек Арсен Досжанұлы",
    grade: 9,
    description: "AI кеңесшісі интеграцияланған классикалық ойын. Жасанды интеллект ойыншының стратегиясын талдап, қадамдар бойынша нұсқаулық береді.",
    type: "game",
    mediaUrl: "15.png",
    mediaType: "image",
    techStack: ["JavaScript", "HTML/CSS", "AI Analysis"]
  },
  {
    id: "2024-903",
    title: "GlobalPath Platform",
    studentName: "Бекетай Дилара Ермекқызы",
    grade: 9,
    description: "Халықаралық университеттер мен гранттарды іздеуге арналған платформа. AI оқушының көрсеткіштеріне қарай жеке ұсыныстар дайындайды.",
    type: "data-viz",
    mediaUrl: "10.png",
    mediaType: "image",
    techStack: ["JS Objects", "JSON", "Web API"]
  },
  {
    id: "2024-904",
    title: "VoyageAI Planner",
    studentName: "Азаматқызы Адема",
    grade: 9,
    description: "Бюджет пен қалауларға негізделген жеке саяхат жоспарлаушысы. Билеттер мен баратын жерлерді автоматты түрде іріктейді.",
    type: "website",
    mediaUrl: "9.png",
    mediaType: "image",
    techStack: ["CSS Grid", "JS Logic", "AI Integration"]
  },
  {
    id: "2024-906",
    title: "OKO — Vision Health",
    studentName: "Абылғазы Рамазан Русланұлы",
    grade: 9,
    description: "Көру қабілетін диагностикалауға арналған AI жүйесі. Көз шаршауын басу үшін дербес жаттығулар жинағын ұсынады.",
    type: "website",
    mediaUrl: "12.png",
    mediaType: "image",
    techStack: ["HTML5", "JavaScript", "AI Advisor"]
  },
  {
    id: "2024-908",
    title: "MomSphere MBTI",
    studentName: "Бекберген Ажар Ұланқызы",
    grade: 9,
    description: "Аналар мен балалардың психологиялық типін (MBTI) анықтап, қарым-қатынасты жақсарту бойынша AI кеңестерін беретін сервис.",
    type: "data-viz",
    mediaUrl: "21.png",
    mediaType: "image",
    techStack: ["Arrays", "JS Logic", "Psychology Data"]
  },
  {
    id: "2024-910",
    title: "Ijodiy Studio 3D",
    studentName: "Нұрқадыр Бақберген Айтжанұлы",
    grade: 9,
    description: "3D модельдеу негіздерін үйрететін веб-платформа. Пайдаланушы жұмыстарын AI арқылы талдап, жақсарту жолдарын көрсетеді.",
    type: "animation",
    mediaUrl: "16.png",
    mediaType: "image",
    techStack: ["Three.js", "JavaScript", "3D Logic"]
  },
  {
    id: "2024-913",
    title: "Kitap.kz Marketplace",
    studentName: "Қазақстан Таңнұр Қозыбекқызы",
    grade: 9,
    description: "Қазақ әдебиетін насихаттайтын онлайн дүкен. Оқырман талғамына қарай AI кітаптарды іріктеп береді.",
    type: "website",
    mediaUrl: "20.png",
    mediaType: "image",
    techStack: ["E-commerce", "JS Lists", "AI Recommendations"]
  },
  {
    id: "2024-1001",
    title: "AuraStream",
    studentName: "Білімнұр Елназ",
    grade: 10,
    description: "Пайдаланушының көңіл-күйін талдап, сәйкес музыкалық тректерді ұсынатын инновациялық веб-қосымша.",
    type: "website",
    mediaUrl: "22.png",
    mediaType: "image",
    techStack: ["JavaScript Functions", "AI Algorithms", "UI/UX Design"]
  },
  {
    id: "2024-1004",
    title: "EduAI",
    studentName: "Нұрқадыр Айғаным Айтжанқызы",
    grade: 10,
    description: "Оқу материалдарын түсіндіретін және тапсырмаларды орындауға көмектесетін жасанды интеллект негізіндегі көмекші.",
    type: "website",
    mediaUrl: "22.png",
    mediaType: "image",
    techStack: ["Prompt Engineering", "JS Integration", "HTML/CSS"]
  },
  {
    id: "2024-1007",
    title: "Өсімдіктер Әлемi",
    studentName: "Дәуренбек Әлия",
    grade: 10,
    description: "API арқылы өсімдік түрін анықтап, күтім бойынша дербес нұсқаулықтар беретін экологиялық жоба.",
    type: "data-viz",
    mediaUrl: "5.png",
    mediaType: "image",
    techStack: ["External API", "JS Objects", "Responsive Design"]
  },
  {
    id: "2024-1009",
    title: "ZerdeAI — Digital Mentor",
    studentName: "Ғұзыхан Хақназар Берденұлы",
    grade: 10,
    description: "Оқушылардың академиялық дамуы мен уақытын жоспарлауға арналған интеллектуалды тәлімгер.",
    type: "website",
    mediaUrl: "7.png",
    mediaType: "image",
    techStack: ["Array Methods", "Time Management Logic", "Chatbot UI"]
  },
{
    id: "2024-1010",
    title: "QazaqMind",
    studentName: "Маратұлы Азамат",
    grade: 10,
    description: "Оқушылардың академиялық дамуы мен уақытын жоспарлауға арналған интеллектуалды тәлімгер.",
    type: "website",
    mediaUrl: "24.png",
    mediaType: "image",
    techStack: ["Array Methods", "Time Management Logic", "Chatbot UI"]
  },
  {
    id: "2024-1011",
    title: "Kazakh Voice",
    studentName: "Айдынқызы Аяулым",
    grade: 10,
    description: "Пайдаланушының эмоционалды жағдайына қарай қазақша әндерді сұрыптайтын музыкалық платформа.",
    type: "website",
    mediaUrl: "6.png",
    mediaType: "image",
    techStack: ["Sorting Algorithms", "JS Events", "Audio API"]
  },
  {
    id: "2024-1012",
    title: "Туристік Академия",
    studentName: "Жомарт Еркенұр Сакенқызы",
    grade: 10,
    description: "Отандық туризмді насихаттайтын және интеллектуалды чат-бот арқылы кеңес беретін ақпараттық сайт.",
    type: "website",
    mediaUrl: "8.png",
    mediaType: "image",
    techStack: ["HTML structure", "Basic JS Bot", "CSS"]
  },
  {
    id: "2024-1017",
    title: "Gym Pro — AI Fitness",
    studentName: "Берікболұлы Мырза",
    grade: 10,
    description: "Жаттығу залын басқаруға арналған және AI-көмекші арқылы жеке жаттығу жоспарын құратын платформа.",
    type: "website",
    mediaUrl: "25.png",
    mediaType: "image",
    techStack: ["JS Optimization", "AI Integration", "HTML/CSS"]
  },
  {
    id: "2024-1019",
    title: "DalaRecipes",
    studentName: "Ерлан Ернар",
    grade: 10,
    description: "Қазақстан мен Таяу Шығыс тағамдарының ерекше рецепттерін жинақтаған интеллектуалды аспаздық портал.",
    type: "website",
    mediaUrl: "2.png",
    mediaType: "image",
    techStack: ["Responsive Design", "Data Filtering", "UI/UX"]
  },
  {
    id: "2024-1020",
    title: "Zombie Arena — 2D Survival",
    studentName: "Есенғали Бақытжан Думанұлы",
    grade: 10,
    description: "JS Canvas және анимациялар негізінде жасалған, рөлдік жүйесі бар аман қалу ойыны.",
    type: "game",
    mediaUrl: "4.png",
    mediaType: "image",
    techStack: ["JS Canvas", "Collision Physics", "Animation"]
  },
  {
    id: "2024-1022",
    title: "Тоғызқұмалақ Digital",
    studentName: "Қабдылғазинов Дарын Серікұлы",
    grade: 10,
    description: "Ұлттық ойынның PvP және PvE (AI-ге қарсы) режимдері бар заманауи веб-интерпретациясы.",
    type: "game",
    mediaUrl: "3.png",
    mediaType: "image",
    techStack: ["Game Logic", "AI Opponent", "National Design"]
  },
  {
    id: "2024-1024",
    title: "Елес үй — Platformer Game",
    studentName: "Тұрсынғазыұлы Еларыс",
    grade: 10,
    description: "Кедергілер мен сиқырлы элементтерге толы, физикалық заңдылықтарға негізделген 2D шытырман оқиға.",
    type: "game",
    mediaUrl: "1.png",
    mediaType: "image",
    techStack: ["Physics Engine", "Level Design", "Event Handling"]
  }
];
