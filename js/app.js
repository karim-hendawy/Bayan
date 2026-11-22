const KEY = "bayan-app-v1";
const SESSION = "bayan-session-v1";

const STAGE = [
  { ar: "البراعم", en: "Sprouts", age: "4–6", c: "#6cc551", bg: "#eef9e8", mins: 10, L: [["الحروف وأصواتها", "Letters & sounds"], ["الحركات القصيرة", "Short vowels"], ["كلمات من ثلاثة حروف", "Three-letter words"]] },
  { ar: "الزهور", en: "Flowers", age: "7–9", c: "#f06292", bg: "#fdeef4", mins: 15, L: [["المدود والتنوين", "Long vowels & tanween"], ["جمل قصيرة", "Short sentences"], ["قصص قصيرة بحوار", "Short dialogue stories"]] },
  { ar: "الفرسان", en: "Knights", age: "10–12", c: "#29a9e8", bg: "#e8f6fd", mins: 20, L: [["قصص بفصول", "Chapter stories"], ["آيات وأحاديث بمعانيها", "Verses & hadith with meanings"], ["فهم واستنتاج", "Comprehension & reasoning"]] },
  { ar: "القادة", en: "Leaders", age: "13–15", c: "#f5a000", bg: "#fff6dc", mins: 25, L: [["سير الصحابة", "Companions’ biographies"], ["نصوص معلوماتية", "Informational texts"], ["تلخيص وكتابة", "Summarizing & writing"]] }
];

const BOOKS = [
  { id: "wahid", ar: "الله الواحد الأحد", en: "Allah, The One", s: "rabbi", l: 2, color: "linear-gradient(160deg,#4fc3f7,#1e88d6)" },
  { id: "circle", ar: "الحلقة الصغيرة", en: "The Little Circle", s: "rabbi", l: 3, color: "linear-gradient(160deg,#f06292,#c2185b)" },
  { id: "rahim", ar: "الرحيم الخبير", en: "The Most Merciful, The All-Aware", s: "rabbi", l: 4, color: "linear-gradient(160deg,#6cc551,#2e7d32)" },
  { id: "word", ar: "الكلمة الطيبة صدقة", en: "A Good Word Is Charity", s: "akhlaq", l: 6, color: "linear-gradient(160deg,#ffc107,#ef6c00)" },
  { id: "adhkar", ar: "مسابقة الأذكار", en: "The Adhkar Competition", s: "adhkar", l: 5, color: "linear-gradient(160deg,#7e57c2,#5e35b1)" },
  { id: "bibo", ar: "بيبو وبنبونة", en: "Bibo & Bonbona", s: "akhlaq", l: 1, color: "linear-gradient(160deg,#29a9e8,#0277bd)" }
];

const OUTFITS = [
  { id: "starter", ar: "الزي الأساسي", en: "Starter outfit", color: "#6cc551", price: 0, style: "hoodie" },
  { id: "reader", ar: "زي القارئ", en: "Reader outfit", color: "#29a9e8", price: 10, style: "overall" },
  { id: "stars", ar: "سترة النجوم", en: "Star jacket", color: "#f06292", price: 15, style: "blazerAndSweater" },
  { id: "adventurer", ar: "عباءة المغامر", en: "Adventurer cape", color: "#7e57c2", price: 20, style: "hoodie" },
  { id: "hero", ar: "زي البطل", en: "Hero outfit", color: "#f5a000", price: 25, style: "shirtCrewNeck" }
];
const AVATAR_GLASSES = [
  { id: "reader-round", ar: "نظارة القارئ", en: "Reader glasses", price: 12, style: "round", color: "#385d86" },
  { id: "reader-blue", ar: "إطار أزرق", en: "Blue frames", price: 18, style: "prescription01", color: "#29a9e8" },
  { id: "reader-plum", ar: "إطار بنفسجي", en: "Plum frames", price: 18, style: "prescription02", color: "#80558f" },
  { id: "sunny", ar: "نظارة الشمس", en: "Sunny shades", price: 22, style: "sunglasses", color: "#f5a000" }
];
const AVATAR_HATS = [
  { id: "cap-blue", ar: "قبعة المغامر", en: "Explorer cap", price: 15, style: "hat", color: "#29a9e8" },
  { id: "beanie-rose", ar: "قبعة الشتاء", en: "Cozy beanie", price: 20, style: "winterHat1", color: "#d96f8c" },
  { id: "turban-teal", ar: "عمامة الفارس", en: "Knight's turban", price: 22, style: "turban", color: "#278c89" },
  { id: "beanie-gold", ar: "قبعة النجوم", en: "Star beanie", price: 25, style: "winterHat03", color: "#a86b00" }
];
const WORD_HUNT_ROUNDS = {
  ar: [
    { word: "قمر", choices: ["moon", "sun", "book"], answer: 0 },
    { word: "شمس", choices: ["house", "sun", "fish"], answer: 1 },
    { word: "كتاب", choices: ["flower", "book", "moon"], answer: 1 },
    { word: "بيت", choices: ["house", "fish", "sun"], answer: 0 },
    { word: "سمكة", choices: ["book", "flower", "fish"], answer: 2 }
  ],
  en: [
    { word: "moon", choices: ["moon", "sun", "book"], answer: 0 },
    { word: "sun", choices: ["house", "sun", "fish"], answer: 1 },
    { word: "book", choices: ["flower", "book", "moon"], answer: 1 },
    { word: "house", choices: ["house", "fish", "sun"], answer: 0 },
    { word: "fish", choices: ["book", "flower", "fish"], answer: 2 }
  ]
};
const WORD_BUILDER_ROUNDS = {
  ar: [
    { word: "قمر", hint: "moon", letters: ["ر", "ق", "م"] },
    { word: "بيت", hint: "house", letters: ["ي", "ب", "ت"] },
    { word: "شمس", hint: "sun", letters: ["م", "س", "ش"] },
    { word: "باب", hint: "door", letters: ["ب", "ب", "ا"] },
    { word: "كتاب", hint: "book", letters: ["ا", "ك", "ت", "ب"] }
  ],
  en: [
    { word: "sun", hint: "sun", letters: ["n", "s", "u"] },
    { word: "cat", hint: "cat", letters: ["t", "c", "a"] },
    { word: "moon", hint: "moon", letters: ["o", "m", "n", "o"] },
    { word: "book", hint: "book", letters: ["o", "b", "k", "o"] },
    { word: "star", hint: "star", letters: ["r", "s", "a", "t"] }
  ]
};
const AVATAR_SKIN_TONES = [
  { id: "light", color: "#f3c9a5", ar: "فاتحة", en: "Light" },
  { id: "warm", color: "#d99b70", ar: "دافئة", en: "Warm" },
  { id: "tan", color: "#a96f4d", ar: "سمراء", en: "Tan" },
  { id: "deep", color: "#704632", ar: "داكنة", en: "Deep" }
];
const AVATAR_HAIR_COLORS = [
  { id: "black", color: "#352b37", ar: "أسود", en: "Black" },
  { id: "brown", color: "#70452f", ar: "بني", en: "Brown" },
  { id: "gold", color: "#d79a2b", ar: "ذهبي", en: "Golden" },
  { id: "auburn", color: "#a84335", ar: "أحمر", en: "Auburn" }
];
const AVATAR_HIJAB_COLORS = [
  { id: "teal", color: "#278c89", ar: "فيروزي", en: "Teal" },
  { id: "plum", color: "#80558f", ar: "بنفسجي", en: "Plum" },
  { id: "rose", color: "#d96f8c", ar: "وردي", en: "Rose" },
  { id: "navy", color: "#385d86", ar: "كحلي", en: "Navy" }
];
const AVATAR_HAIR_STYLES = [
  { id: "shortCurly", ar: "مجعد", en: "Curly" },
  { id: "shortWaved", ar: "مموج", en: "Wavy" },
  { id: "shortFlat", ar: "قصير", en: "Short" },
  { id: "theCaesar", ar: "كلاسيكي", en: "Classic" }
];

const PAGES = [
  { img: "assets/hero.jpg", ar: ["جاء يوم الحلقة الأولى.", "جلس الأولاد حول الشيخ، وجلست البنات في مكانهن.", "وكان الجميع ينتظر الدرس الأول بشوق."], en: ["The day of the first circle arrived.", "The boys sat around the sheikh, and the girls sat in their own place.", "Everyone was excited for the first lesson."] },
  { img: "assets/about.jpg", ar: ["قال الشيخ: «اليوم نبدأ بأعظم ما نتعلمه:", "الله الواحد الأحد.", "من يقرأ لنا سورة الإخلاص؟»"], en: ["The sheikh said: “Today we begin with the greatest thing we can learn:", "Allah is The One.", "Who will recite Surat al-Ikhlas for us?”"] },
  { img: "assets/book-continue.jpg", ar: ["رفعت سارة يدها، وقرأت بصوت جميل:", "﴿قُلْ هُوَ اللَّهُ أَحَدٌ﴾", "﴿اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ﴾"], en: ["Sara raised her hand and recited in a beautiful voice:", "“Say: He is Allah, the One.", "Allah, the Eternal Refuge. He neither begets nor is born.”"] }
];

const T = {
  ar: {
    brand: "درب البيان", brandSub: "لتعلّم القراءة", home: "الرئيسية", kid: "رحلتي", library: "المكتبة", game: "ألعاب الحروف",
    parents: "ركن الآباء", teacher: "ركن المعلم", teachersDirectory: "معلمينا", about: "من نحن", contact: "تواصل معنا", otherLang: "English",
    teachersDirectoryTitle: "تعرّف على معلمينا",
    teachersDirectoryIntro: "معلمونا شركاء في رحلة القراءة. تعرّف على خبراتهم وطريقتهم في التعليم.",
    teachersDirectoryCount: "معلم نشط",
    teacherProfileOpen: "اكتشف ملف المعلم",
    teacherProfileBack: "كل المعلمين",
    teacherProfessionalProfile: "الملف المهني",
    teacherProfileProvidedBy: "المعلومات المهنية يضيفها المعلم بنفسه.",
    teacherBioLabel: "نبذة شخصية",
    teacherBioPlaceholder: "لم يضف المعلم نبذته بعد.",
    teacherSpecialtiesLabel: "التخصصات",
    teacherSpecialtiesPlaceholder: "لم تُضف التخصصات بعد.",
    teacherExperienceLabel: "سنوات الخبرة",
    teacherExperiencePlaceholder: "لم تُذكر سنوات الخبرة.",
    teacherQualificationsLabel: "المؤهلات",
    teacherQualificationsPlaceholder: "لم تُضف المؤهلات بعد.",
    teacherApproachLabel: "أسلوب التدريس",
    teacherApproachPlaceholder: "لم يضف المعلم تفاصيل عن أسلوبه بعد.",
    teacherProfileNotice: "النبذة والتخصصات والخبرة والمؤهلات وأسلوب التدريس ستظهر للعامة في صفحة «معلمينا». لا تكتب معلومات خاصة أو بيانات تواصل.",
    teacherYearsExperience: "سنوات خبرة",
    noTeachersAvailable: "لا يوجد معلمون نشطون للعرض حالياً.",
    featuredTeachersTitle: "أشهر المعلمين لدينا",
    featuredTeachersIntro: "تعرّف على المعلمين المميزين في رحلة طفلك داخل درب البيان.",
    featuredTeachersSearch: "ابحث عن معلم بالاسم أو التخصص",
    featuredTeachersSearchEmpty: "لا توجد نتائج مطابقة لبحثك.",
    featuredTeachersViewAll: "عرض كل المعلمين",
    startFree: "أنشئ حساباً", login: "تسجيل الدخول", logout: "خروج",
    heroTag: "عربي وإنجليزي", heroTitle1: "نتعلم القراءة…", heroTitle2: "ونكبر على القيم",
    heroText: "قصص مصورة مشكولة ومسموعة، بأبطال يحبهم الأطفال، تعلّم القراءة والأخلاق ومعرفة الله.",
    ctaKid: "ابدأ كطالب", ctaParent: "للآباء", ctaTeacher: "للمعلمين",
    heroAlt: "يوسف وعمر وسارة في طريق الربيع", floatStars: "+3 نجوم", floatAyah: "﴿وَقُل رَّبِّ زِدْنِي عِلْمًا﴾",
    levelsTitle: "12 مستوى تنمو مع طفلك", levelsSub: "4 مراحل، وفي كل مرحلة 3 مستويات. اضغط على أي مستوى لترى كتبه.",
    newBooks: "أحدث الكتب", seeAll: "كل الكتب", pricingTitle: "اشتراك واحد… لكل العائلة",
    planMonthly: "شهري", planMonthlyNote: "كل الكتب باللغتين، حتى 3 أطفال", planYearly: "سنوي",
    planYearlyNote: "كل ما في الشهري + الكتب الجديدة أولاً", best: "الأفضل", choose: "اختر", priceM: "49 ر.س", priceY: "390 ر.س",
    signupTitle: "ابدأ رحلتك مع درب البيان", signupSide: "خطوات بسيطة وتبدأ رحلتكم",
    who: "أنا:", student: "طالب", teacherRole: "معلم", parentRole: "ولي أمر",
    studentRoleHint: "حساب مستقل للطالب",
    teacherRoleHint: "تابع جميع الطلاب",
    parentRoleHint: "أنشئ حسابك ثم أضف أبناءك",
    accountBasics: "بيانات حسابك",
    parentNextStep: "بعد إنشاء الحساب، أضف حساب طفلك أو اربط حساباً موجوداً. لن تحتاج لإدخال بياناته الآن.",
    linkChildHint: "لربط طالب لديه حساب بالفعل، اكتب البريد الإلكتروني المسجل به.",
    studentLevelHint: "كل الطلاب يبدأون من المستوى الأول، مهما كان العمر.",
    ageOptional: "اختياري",
    childLoginHint: "سننشئ للطفل اسم دخول ورمزاً سرياً تلقائياً؛ يمكنك رؤيتهما في حسابك.",
    childAgeHint: "اختياري — يساعدنا في تخصيص التجربة فقط.",
    studentLoginDetails: "بيانات دخول الطالب: {email} · الرمز السري: {pin}",
    childCredentials: "بيانات دخول الطفل",
    showPassword: "إظهار",
    hidePassword: "إخفاء",
    passwordHint: "6 أحرف على الأقل",
    fillDemo: "استخدم الحساب",
    demoChild: "الطالبة",
    chooseRole: "اختار نوع حسابك",
    setupSteps: ["اختار دورك", "أدخل بياناتك", "ابدأ رحلتك"],
    name: "الاسم", email: "البريد الإلكتروني", password: "كلمة المرور",
    childInfo: "بيانات الطفل", childName: "اسم الطفل", childAge: "العمر", childBoyGirl: "الطفل:", boy: "ولد", girl: "بنت",
    createAccount: "إنشاء الحساب", haveAccount: "لديك حساب؟", noAccount: "ليس لديك حساب؟", signup: "سجّل الآن",
    loginTitle: "أهلاً بك في درب البيان", loginSub: "ادخل بحسابك ليظهر لك ما يخصك فقط.",
    demo: "حسابات التجربة (كلمة المرور 1234)",
    demoAdmin: "مدير بيان",
    adminRole: "مدير النظام",
    adminDashboard: "لوحة الإدارة",
    adminAccounts: "الحسابات والربط",
    adminContent: "الكتب والقصص",
    adminSubscriptions: "الاشتراكات",
    adminInbox: "رسائل الدعم",
    studentProfile: "ملفي",
    accountProfileTitle: "ملفي الشخصي",
    accountProfileIntro: "حدّث بيانات حسابك وصورتك الشخصية.",
    profileChildrenCount: "الأطفال المرتبطون",
    profileFamilyGoal: "هدف قراءة الأسرة بالدقائق",
    profileStudentsCount: "الطلاب المرتبطون",
    profileAssignmentsCount: "واجبات القراءة",
    profileRecordingsCount: "تسجيلات القراءة",
    supportMessages: "رسائل التواصل",
    newMessages: "رسائل جديدة",
    noMessages: "لا توجد رسائل.",
    markRead: "تحديد كمقروءة",
    messageRead: "تم تحديد الرسالة كمقروءة.",
    searchMessages: "ابحث بالاسم أو البريد أو نص الرسالة",
    messageStatusFilter: "كل الرسائل",
    unreadMessagesFilter: "غير مقروءة",
    readMessagesFilter: "مقروءة",
    newMessageLabel: "جديدة",
    adminStorageNotice: "نسخة تجريبية محلية: البيانات محفوظة في هذا المتصفح فقط، ولا يوجد دفع إلكتروني أو مزامنة بين الأجهزة.",
    totalAccounts: "كل الحسابات",
    totalStudents: "الطلاب",
    totalParents: "أولياء الأمور",
    totalTeachers: "المعلمون",
    createAccountAdmin: "إنشاء حساب",
    deleteAccount: "حذف الحساب",
    confirmDeleteAccount: "هل أنت متأكد من حذف هذا الحساب؟ ستُزال ارتباطاته وتسجيلاته.",
    accountDeleted: "تم حذف الحساب وإزالة ارتباطاته.",
    accountStatus: "حالة الحساب",
    enabled: "نشط",
    disabled: "موقوف",
    role: "نوع الحساب",
    parentAccount: "ولي الأمر المرتبط",
    teacherAccounts: "المعلمون المرتبطون",
    noParent: "بدون ولي أمر",
    noTeachers: "بدون معلم",
    parentEmailHint: "اكتب البريد الإلكتروني المسجل لحساب ولي الأمر.",
    teacherEmailsHint: "اكتب بريد كل معلم، وافصل بينهم بفاصلة.",
    invalidLinkedEmail: "لم يتم العثور على حساب ولي أمر أو معلم مطابق للبريد المدخل.",
    searchAccounts: "ابحث بالاسم أو البريد",
    filterRole: "كل أنواع الحسابات",
    filterStatus: "كل الحالات",
    linkedFilter: "كل الطلاب",
    linkedOnly: "مرتبطون",
    unlinkedOnly: "غير مرتبطين بمعلم",
    applyFilters: "بحث وتصفية",
    clearFilters: "مسح",
    pageLabel: "صفحة",
    previousPage: "السابق",
    nextPage: "التالي",
    showing: "عرض",
    of: "من",
    perPage: "لكل صفحة",
    exportCsv: "تصدير النتائج CSV",
    noMatchingAccounts: "لا توجد حسابات مطابقة.",
    showAccountDetails: "تعديل بيانات الحساب",
    editSubscription: "تعديل الاشتراك أو تسجيل دفعة",
    accountDetailsHint: "الاسم والبريد الإلكتروني",
    showCreateAccount: "إضافة حساب جديد",
    quickSearchAccounts: "بحث سريع بالاسم أو البريد",
    showAdvancedFilters: "فلاتر إضافية",
    showContentDetails: "إدارة تفاصيل المحتوى",
    showChartsDetails: "عرض الرسوم البيانية",
    showMoreDashboard: "متابعة التنبيهات والحسابات الحديثة",
    subscriptionSearch: "ابحث في اشتراكات ولي الأمر أو الطالب",
    subscriptionPlanFilter: "كل الخطط",
    searchLibrary: "ابحث باسم الكتاب أو رقم المحتوى",
    libraryLevelFilter: "كل المستويات",
    librarySeriesFilter: "كل السلاسل",
    libraryAccessFilter: "كل أنواع الإتاحة",
    libraryStatusFilter: "كل حالات النشر",
    noMatchingContent: "لا توجد كتب أو قصص مطابقة.",
    accountCount: "حساب",
    noTeachersAssigned: "لا يوجد معلمون مرتبطون",
    atRiskAccounts: "حسابات تحتاج متابعة",
    unlinkedStudents: "طلاب بلا معلم",
    suspendedAccounts: "حسابات موقوفة",
    expiringSubscriptions: "اشتراكات تنتهي خلال 30 يومًا",
    weeklyReading: "دقائق القراءة هذا الأسبوع",
    weeklyActiveStudents: "طلاب قرأوا هذا الأسبوع",
    weeklyActivity: "نشاط القراءة خلال آخر 7 أيام",
    activeThisWeek: "نشطون خلال آخر 7 أيام",
    newAccounts: "حسابات جديدة خلال الأسبوع",
    accountsByRole: "توزيع الحسابات",
    recentAccounts: "أحدث الحسابات",
    attentionTitle: "تحتاج انتباهك",
    noAttention: "لا توجد أمور عاجلة لمتابعتها.",
    contactAdminHint: "الحسابات القديمة قد لا تحتوي بيانات تاريخ التسجيل.",
    saveChanges: "حفظ التعديلات",
    accountSaved: "تم حفظ بيانات الحساب والارتباطات.",
    accountCreated: "تم إنشاء الحساب.",
    accountEmailExists: "البريد الإلكتروني مستخدم بالفعل.",
    cannotDisableSelf: "لا يمكن إيقاف حساب الأدمن الحالي أو تغيير دوره.",
    accountList: "إدارة الحسابات والروابط",
    subscriptionState: "حالة الاشتراك",
    subscriptionPlan: "الخطة",
    subscriptionExpiry: "تاريخ الانتهاء",
    subscriptionActive: "فعال",
    subscriptionInactive: "غير مشترك",
    subscriptionExpired: "منتهي",
    monthlyPlan: "شهري",
    yearlyPlan: "سنوي",
    saveSubscription: "حفظ الاشتراك",
    subscriptionSaved: "تم تحديث الاشتراك.",
    revenueTitle: "الإيرادات المسجلة",
    revenueTotal: "إجمالي المبالغ المسجلة",
    revenueThisMonth: "المبالغ المسجلة هذا الشهر",
    revenuePaymentsCount: "عدد الدفعات المسجلة",
    revenueRecordingNote: "تُحسب هنا الدفعات التي تسجلها يدويًا فقط؛ الاشتراك الفعال لا يعني بالضرورة أن قيمته دُفعت.",
    paymentAmount: "المبلغ المستلم (اختياري)",
    paymentDate: "تاريخ استلام الدفعة",
    paymentAmountHint: "اتركه فارغًا إذا لم تستلم دفعة الآن.",
    paymentInvalid: "أدخل مبلغًا صحيحًا أكبر من صفر وتاريخ استلام الدفعة.",
    paymentRecorded: "تم تحديث الاشتراك وتسجيل الدفعة.",
    recentPayments: "أحدث الدفعات المسجلة",
    noPayments: "لا توجد دفعات مسجلة حتى الآن.",
    paidAccess: "المحتوى المدفوع متاح للطالب عند تفعيل اشتراكه أو اشتراك ولي أمره.",
    contentAccess: "إتاحة المحتوى",
    freeContent: "مجاني",
    premiumContent: "للمشتركين",
    saveAccess: "حفظ الإتاحة",
    accessSaved: "تم تحديث إتاحة القصة.",
    addStory: "إضافة قصة أو كتاب",
    storyTitleAr: "عنوان القصة بالعربية",
    storyTitleEn: "عنوان القصة بالإنجليزية",
    storyPagesAr: "صفحات القصة بالعربية",
    storyPagesEn: "صفحات القصة بالإنجليزية",
    storyPagesHint: "افصل بين الصفحات بسطر فارغ. يلزم تساوي عدد الصفحات باللغتين.",
    storyQuestionAr: "سؤال القصة بالعربية",
    storyQuestionEn: "سؤال القصة بالإنجليزية",
    storyOptionsAr: "اختيارات الإجابة بالعربية (اختيار في كل سطر)",
    storyOptionsEn: "اختيارات الإجابة بالإنجليزية (اختيار في كل سطر)",
    storyCorrect: "رقم الإجابة الصحيحة",
    storyCreated: "تمت إضافة القصة إلى المكتبة.",
    storyDeleted: "تم إخفاء القصة من المكتبة.",
    restoreStory: "إعادة نشر القصة",
    storyInvalid: "أكمل بيانات القصة، وتأكد من تساوي عدد الصفحات والاختيارات باللغتين.",
    catalog: "محتوى المكتبة",
    deleteStory: "إخفاء القصة",
    subscriptionsOverview: "متابعة الخطط يدويًا",
    noSubscription: "لا يوجد اشتراك فعال",
    subscriptionManagedManually: "هذه الحالة إدارية فقط حتى ربط الدفع والـ Backend.",
    lockedForSubscription: "يتطلب اشتراكًا",
    paidContent: "كتاب مدفوع",
    buyBook: "شراء الكتاب",
    bookPurchased: "تم شراء الكتاب وفتحه لك.",
    purchaseCheckout: "إتمام شراء الكتاب",
    purchaseDemoHint: "شراء تجريبي — لن يتم خصم أي مبلغ حقيقي.",
    protectionNotice: "عرض القراءة محميّ بصريًا ولا يُسمح بتنزيل صفحات الكتاب أو نسخ نصه.",
    securityLimitNotice: "يمكن إخفاء الصفحة عند تبديل التطبيقات؛ الحماية الكاملة ضد تصوير الجهاز تتطلب DRM وخادمًا مؤمّنًا.",
    freeLabel: "مجاني",
    hello: "أهلاً", helloSub: "هيا نكمل رحلتنا اليوم", continueReading: "أكمل القراءة", read: "اقرأ",
    journeyTitle: "رحلتي التعليمية — 12 مستوى", stars: "نجوم", streak: "أيام متتالية", booksRead: "كتب", minutes: "دقيقة",
    dailyGoal: "هدف اليوم", timerTitle: "وقت القراءة", goalDone: "أحسنت! أكملت هدف اليوم",
    dhikrTitle: "ذكر اليوم", dhikr: "سبحان الله وبحمده", gameCardTitle: "ألعاب نتعلم بها", gameCardText: "اختر لعبة وتعلّم كلمات وحروفاً جديدة",
    level: "المستوى", series: "السلسلة", all: "الكل", sRabbi: "أتعرّف على ربي", sAdhkar: "أذكاري", sAkhlaq: "أخلاقي",
    bothLangs: "عربي + English", comingSoon: "كتب هذا المستوى قادمة قريباً إن شاء الله.",
    back: "رجوع", prev: "السابق", next: "التالي", listen: "استمع", recStart: "سجّل قراءتي", recStop: "إيقاف التسجيل", recDone: "سجّل من جديد",
    recStarting: "جارٍ تشغيل الميكروفون…", recSaving: "جارٍ تجهيز التسجيل…", recSending: "جارٍ إرسال التسجيل…",
    recReviewTitle: "استمع لتسجيلك قبل إرساله", recSentTitle: "تم إرسال تسجيلك", recReviewHint: "لو مش عاجبك، سجّل مرة تانية قبل الإرسال.",
    recRetake: "إعادة التسجيل", recSend: "إرسال التسجيل",
    recSavedMsg: "تم إرسال التسجيل وحفظه! يستطيع والدك ومعلمك سماعه.",
    recPlay: "تشغيل التسجيل", recPause: "إيقاف التسجيل مؤقتاً", recSeek: "موضع التسجيل",
    recordingPermissionHint: "أول مرة، اسمح باستخدام الميكروفون عندما يطلب المتصفح ذلك. التسجيل يُحفظ على هذا المتصفح بعد إرساله.",
    recordingNotSupported: "التسجيل الصوتي غير متاح هنا. افتح الموقع عبر localhost أو HTTPS واستخدم متصفحاً حديثاً.",
    recordingMicDenied: "لم يُسمح باستخدام الميكروفون. وافق على الإذن من المتصفح ثم جرّب مجدداً.",
    recordingMicMissing: "لم نعثر على ميكروفون متصل بهذا الجهاز.",
    recordingSaveFailed: "تعذر حفظ التسجيل. تحقق من مساحة المتصفح ثم أعد المحاولة.",
    recordingPlaybackFailed: "تعذر تشغيل التسجيل. حاول مرة أخرى.",
    toQuiz: "إلى الأسئلة",
    quizTag: "سؤال القصة", quizQ: "سورة الإخلاص تعدل…", right: "أحسنت! +3 نجوم", wrong: "حاول مرة أخرى، أنت قادر!", toGame: "إلى لعبة الحروف",
    gameTag: "لعبة الحروف", gameTitle: "أي حرف ينقص الكلمة؟", gameHelp: "اضغط على الحرف ثم على المربع الفارغ.",
    good: "أحسنت!", tryAgain: "جرّب حرفاً آخر", gameWin: "رائع! أكملت كل الكلمات", playAgain: "العب مرة أخرى",
    learningGames: "ألعاب نتعلم بها",
    gamesTitle: "الألعاب التعليمية",
    gamesIntro: "اختار لعبتك المفضلة، وتعلّم في كل جولة بطريقة ممتعة.",
    gamesCount: "٤ ألعاب تعليمية",
    avatarGameTitle: "ابني أفتارك",
    avatarGameDescription: "صمّم شخصيتك واختر ملابسك وإكسسواراتك.",
    gamesPlay: "العب الآن",
    gamesBack: "العودة للألعاب",
    letterGameName: "أكمل الحروف",
    letterGameDescription: "اختر الحرف الناقص واكتشف كلمات بسيطة.",
    gamePickLetter: "اختر الحرف المناسب",
    gameSelectedLetter: "الحرف المختار",
    gameSlotHint: "المس المربع لإكمال الكلمة",
    wordHuntCardTitle: "صيّاد الكلمات",
    wordHuntCardText: "طابق الكلمة مع الصورة الصحيحة",
    wordHuntTitle: "صيّاد الكلمات",
    wordHuntHelp: "اقرأ الكلمة، ثم اختر الصورة التي تعبّر عنها.",
    wordHuntRound: "الجولة",
    wordHuntCorrect: "إجابة صحيحة! أحسنت",
    wordHuntWrong: "ليست هذه الصورة، حاول مرة أخرى!",
    wordHuntNext: "الكلمة التالية",
    wordHuntComplete: "يا بطل! اصطدت كل الكلمات!",
    wordHuntReward: "حصلت على 3 نجوم!",
    wordHuntRewardClaimed: "جميل! مكافأة اليوم حصلت عليها بالفعل.",
    wordBuilderCardTitle: "بنّاء الكلمات",
    wordBuilderCardText: "رتّب الحروف لتبني الكلمة",
    wordBuilderTitle: "بنّاء الكلمات",
    wordBuilderHelp: "رتّب الحروف لتكتب اسم الصورة، ثم اضغط «تحقق».",
    wordBuilderCheck: "تحقق",
    wordBuilderClear: "امسح الحروف",
    wordBuilderCorrect: "بنيتها صح! أحسنت!",
    wordBuilderWrong: "قريب! بدّل ترتيب الحروف وحاول مرة أخرى.",
    wordBuilderComplete: "ممتاز! بنيت كل الكلمات!",
    wordBuilderReward: "كسبت 4 نجوم!",
    wordBuilderRewardClaimed: "رائع! مكافأة اليوم حصلت عليها بالفعل.",
    gameRoundProgress: "الكلمة",
    gameRewardEarned: "مكافأة اللعبة وصلت إلى رصيدك!",
    gameRewardAlreadyEarned: "لقد حصلت على مكافأة هذه اللعبة اليوم. يمكنك اللعب مجدداً!",
    addChild: "+ إضافة طفل", recordingsTitle: "تسجيلات أطفالك", recordingsSub: "اسمع قراءة طفلك، وأرسل له نجمة تشجيعاً.",
    sendStar: "أرسل نجمة", play: "تشغيل", weekTitle: "دقائق القراءة هذا الأسبوع", subTitle: "الاشتراك",
    subPlan: "الخطة السنوية — تتجدد بعد 11 شهراً", reminder: "تذكير يومي بالقراءة", manage: "إدارة الاشتراك",
    aboutTitle: "من نحن", aboutP1: "«درب البيان» منصة لتعليم الأطفال القراءة بالعربية والإنجليزية، بقصص مصورة تغرس حب الله وحسن الخلق.",
    aboutP2: "كل قصة مشكولة ومسموعة، وكل آية وحديث مذكور مصدره، ويراجع المحتوى مختص شرعي قبل النشر.",
    contactTitle: "تواصل معنا", emailLabel: "البريد", whatsapp: "واتساب", hours: "أوقات الرد", hoursText: "من الأحد إلى الخميس",
    yourName: "اسمك", message: "رسالتك", send: "إرسال", sentMsg: "وصلتنا رسالتك، جزاك الله خيراً!", slogan: "مكان لكل قارئ.. في كل عمر",
    checks: ["نص مشكول كامل", "أسئلة بعد كل قصة", "يسجّل قراءته وتسمعها", "آمن للأطفال"],
    loginErr: "البريد أو كلمة المرور غير صحيحة.", fillErr: "أكمل الحقول المطلوبة.", existsErr: "هذا البريد مسجّل مسبقاً.",
    myClass: "إدارة الطلاب", students: "الطلاب", tasks: "المهام", reports: "التقارير", assign: "تعيين كتاب",
    teacherHello: "أهلاً أستاذ/ة", classProgress: "متوسط تقدم الطلاب", pendingRec: "تسجيلات بانتظار المراجعة",
    assignHint: "اختر كتاباً وعيّنه لطالب واحد أو لجميع الطلاب.", assigned: "تم تعيين الكتاب.",
    assignedTo: "المكلّفون", homeworkProgress: "إنجاز الواجب", homeworkDone: "مكتمل",
    homeworkPending: "لم يكتمل بعد", homeworkLocked: "سيُفتح عند وصولك لهذا المستوى",
    myHomework: "واجباتي", noHomework: "لا توجد واجبات قراءة حالياً.",
    homeworkSaved: "أحسنت! تم إبلاغ معلمك وولي أمرك بإكمال الواجب.",
    homeworkSummary: "واجبات القراءة",
    readingComplete: "أحسنت! واصل القراءة لاكتشاف المزيد.",
    noRecipients: "لا يوجد طلاب مسجلون بعد.",
    note: "ملاحظة للمعلم", saveNote: "حفظ الملاحظة", noteSaved: "حُفظت الملاحظة.",
    lastBook: "آخر كتاب", quizScore: "درجة السؤال", status: "الحالة", action: "إجراء",
    view: "عرض",     allClass: "كل طلابي المرتبطين", homework: "واجب القراءة",
    parentDash: "متابعة الأبناء", teacherDash: "إدارة الطلاب", studentDash: "رحلة الطالب",
    welcomeRole: "تم تسجيل الدخول. هذه صفحتك حسب دورك.",
    addChildOk: "أُضيف الطفل. احفظ بيانات الدخول الظاهرة في حسابك.",
    linkChild: "ربط حساب طالب موجود",
    linkByEmail: "البريد الإلكتروني للطالب",
    linkChildOk: "تم ربط حساب الطالب بك.",
    studentNotFound: "لم يتم العثور على حساب طالب بهذا البريد.",
    alreadyLinked: "هذا الحساب مرتبط بك بالفعل.",
    linkedElsewhere: "هذا الحساب مرتبط بولي أمر أو معلم آخر.",
    nextLevel: "أكملت المستوى! فُتح لك المستوى التالي.",
    allLevelsDone: "أحسنت! أكملت جميع المستويات.",
    bookLocked: "أكمل المستوى الحالي أولاً لفتح هذا الكتاب.",
    finishQuizFirst: "أكمل القراءة وأجب عن السؤال أولاً لفتح المستوى التالي.",
    currentLesson: "درسك الحالي",
    completed: "مكتمل",
    dailyMission: "مهمة اليوم",
    dailyMissions: [
      [
        { prompt: "أي حرف تبدأ به كلمة «قمر»؟", options: ["ش", "ق", "ك"], correct: 1 },
        { prompt: "أي حرف تبدأ به كلمة «شمس»؟", options: ["ش", "ب", "ق"], correct: 0 },
        { prompt: "أي حرف تبدأ به كلمة «كتاب»؟", options: ["ت", "ك", "ب"], correct: 1 },
        { prompt: "أي حرف تبدأ به كلمة «باب»؟", options: ["م", "ب", "س"], correct: 1 },
        { prompt: "أي حرف تبدأ به كلمة «تفاحة»؟", options: ["ف", "ت", "ح"], correct: 1 }
      ],
      [
        { prompt: "أي كلمة فيها مد بالألف؟", options: ["قمر", "باب", "شمس"], correct: 1 },
        { prompt: "أي كلمة تنتهي بحرف الباء؟", options: ["كتاب", "قمر", "شمس"], correct: 0 },
        { prompt: "أي كلمة تبدأ بنفس حرف «شمس»؟", options: ["قمر", "شجرة", "كتاب"], correct: 1 },
        { prompt: "اختر الكلمة التي تكمل: «قرأَت سارة بصوت…»", options: ["جميل", "بعيد", "سريعاً"], correct: 0 },
        { prompt: "أي كلمة تتكوّن من ثلاثة أحرف؟", options: ["مدرسة", "قمر", "كتاب"], correct: 1 }
      ],
      [
        { prompt: "من قرأت سورة الإخلاص؟", options: ["الشيخ", "سارة", "يوسف"], correct: 1 },
        { prompt: "بماذا بدأ الشيخ الدرس؟", options: ["الله الواحد الأحد", "أسماء الألوان", "لعبة الحروف"], correct: 0 },
        { prompt: "كيف كان شعور الجميع قبل الدرس؟", options: ["كانوا ينتظرونه بشوق", "كانوا نائمين", "كانوا يريدون المغادرة"], correct: 0 },
        { prompt: "ماذا فعلت سارة عندما سأل الشيخ؟", options: ["رفعت يدها وقرأت", "خرجت من الحلقة", "بدأت لعبة"], correct: 0 },
        { prompt: "أين جلس الأولاد؟", options: ["حول الشيخ", "في المكتبة", "في الحديقة"], correct: 0 }
      ],
      [
        { prompt: "ما الدليل على حماس سارة للتعلم؟", options: ["رفعت يدها وقرأت", "غادرت مبكراً", "لم تسمع السؤال"], correct: 0 },
        { prompt: "ما الفكرة الأساسية في بداية القصة؟", options: ["بداية درس جديد بحماس", "رحلة إلى البحر", "مسابقة رياضية"], correct: 0 },
        { prompt: "أي وصف يناسب سارة؟", options: ["مبادرة ومشاركة", "غير مهتمة", "مترددة دائماً"], correct: 0 },
        { prompt: "لماذا اجتمع الأطفال حول الشيخ؟", options: ["ليتعلموا في الحلقة", "ليتناولوا الطعام", "ليذهبوا إلى البيت"], correct: 0 },
        { prompt: "أي عنوان يلخص أحداث القصة؟", options: ["الدرس الأول", "يوم في السوق", "رحلة القطار"], correct: 0 }
      ]
    ],
    missionReviewHint: "اخترنا لك تدريب مراجعة أبسط لتثبيت المهارة.",
    missionComplete: "مهمة اليوم اكتملت! +2 نجمة",
    missionTryAgain: "قريب! جرّب حرفاً آخر.",
    alreadyMissionDone: "أكملت مهمة اليوم، نراك غداً!",
    badges: "أوسمتي",
    firstBookBadge: "أول كتاب",
    fiveStarsBadge: "قارئ لامع",
    threeLevelsBadge: "بطل التدرج",
    sevenDayBadge: "أسبوع من القراءة",
    cheerReceived: "رسالة تشجيع من ولي أمرك",
    classChallenge: "تحدي القراءة",
    readingLeague: "أبطال القراءة هذا الأسبوع",
    readingLeagueHint: "تنافسوا بلطف على دقائق القراءة مع زملائك المرتبطين بك. كل دقيقة تقرّبك من هدفك!",
    readingMinutesThisWeek: "دقيقة قراءة هذا الأسبوع",
    readingGoal: "هدفك الأسبوعي",
    leagueRank: "مركزك",
    leagueStartRanking: "ابدأ القراءة لتحصل على مركزك!",
    leagueNoPeers: "أنت أول بطل في مجموعتك! واصل القراءة، وسينضم زملاؤك عند ربطهم بحساب معلمك أو أسرتك.",
    leagueYou: "أنت",
    weeklyChampion: "بطل القراءة",
    avatarGlasses: "النظارات",
    avatarHats: "القبعات",
    avatarNoAccessory: "بدون",
    avatarWearAccessory: "ارتدِ",
    avatarBuyAccessory: "اشترِ",
    avatarAccessoryEquipped: "ترتديها",
    avatarAccessoryPurchased: "رائع! أضفت قطعة جديدة لأفتارك.",
    challengeJoin: "أنجز التحدي",
    challengeDone: "أنجزت التحدي! +5 نجوم",
    challengeComplete: "أنجزت التحدي",
    challengeTarget: "هدف التحدي",
    noChallenge: "لا يوجد تحدٍ جديد الآن. تابع القراءة!",
    challengeNeedRead: "اقرأ دقائق التحدي أولاً ثم أكمله!",
    challengeTitle: "عنوان التحدي",
    challengeMinutes: "دقائق القراءة المطلوبة",
    publishChallenge: "نشر التحدي",
    challengePublished: "تم نشر التحدي للطلاب.",
    participation: "المشاركة",
    classPulse: "نشاط الطلاب هذا الأسبوع",
    learnerSpotlight: "إنجازات تستحق الاحتفال",
    studentOverview: "ملف الطالب التفصيلي",
    studentOverviewHint: "ملخص القراءة والواجبات والأنشطة المسجلة لهذا الطالب.",
    studentReadingWeek: "قراءة هذا الأسبوع",
    currentBookProgress: "تقدم الكتاب الحالي",
    lessonsCompleted: "مستويات أتمها",
    quizzesPassed: "اختبارات اجتازها",
    studentHomework: "واجبات الطالب",
    homeworkCompletedStatus: "مكتمل",
    homeworkPendingStatus: "لم يكتمل بعد",
    completedOn: "تاريخ الإكمال",
    studentRecordings: "تسجيلات القراءة",
    noStudentRecordings: "لا توجد تسجيلات قراءة لهذا الطالب حتى الآن.",
    recordingAudioUnavailable: "بيانات التسجيل موجودة، لكن الملف الصوتي غير متاح.",
    readingActivity: "أنشطة القراءة",
    todayMissionStatus: "مهمة اليوم",
    missionCompletedStatus: "مكتملة",
    missionPendingStatus: "لم تكتمل",
    passedLevels: "مستويات اجتاز اختبارها",
    challengesCompleted: "تحديات أنجزها",
    gameRewardsToday: "مكافآت الألعاب اليوم",
    noTrackedActivity: "لا توجد أنشطة مسجلة بعد.",
    studentChallenges: "تحديات الطالب",
    challengeCompletedStatus: "أنجز التحدي",
    challengePendingStatus: "لم ينجز التحدي بعد",
    recordingPage: "صفحة",
    recordingDateToday: "اليوم",
    recordingDateYesterday: "أمس",
    recordingDateUnknown: "تاريخ غير مسجل",
    readingTogether: "هدف القراءة العائلي",
    familyGoalHint: "اجمعوا دقائق قراءة هذا الأسبوع واحتفلوا بالإنجاز معاً.",
    saveGoal: "حفظ الهدف",
    goalSaved: "تم حفظ هدف الأسرة.",
    encouragement: "رسالة تشجيع",
    encouragementOptions: ["فخور بك!", "قراءة رائعة!", "واصل التقدم!"],
    encouragementReceived: "وصلت رسالة التشجيع.",
    profileTitle: "ملفي وإنجازاتي",
    profileIntro: "هنا تتابع نجومك وكتبك وأوسمتك ورسائل التشجيع.",
    editMyDetails: "بياناتي",
    profileSaved: "تم حفظ بياناتك بنجاح.",
    profileInvalid: "تحقق من الاسم والبريد والعمر، وتأكد أن البريد غير مستخدم.",
    profileEmailHint: "يُستخدم هذا البريد لتسجيل الدخول.",
    profileEmailReadOnlyHint: "لا يمكن تغيير البريد الإلكتروني من هذه الصفحة.",
    profileReadingLanguage: "لغة القراءة المفضلة",
    profilePhoto: "صورتي الشخصية",
    profilePhotoHint: "اختر صورة واضحة؛ سيتم تصغيرها تلقائيًا لتناسب حسابك.",
    newPasswordOptional: "كلمة مرور جديدة (اختياري)",
    avatarMaker: "أفتاري وملابسي",
    avatarIntro: "اختار شخصيتك، نسّق ألوانها، واجمع أزياء محتشمة بنجوم القراءة.",
    avatarGender: "الشخصية",
    avatarBoy: "ولد",
    avatarGirl: "بنت",
    avatarSkinTone: "لون البشرة",
    avatarHairColor: "لون الشعر",
    avatarHairStyle: "تسريحة الشعر",
    avatarHijabColor: "لون الحجاب",
    avatarShop: "متجر الملابس",
    avatarOutfits: "الملابس",
    avatarCurrentStars: "نجومك",
    avatarWearing: "ترتدي الآن",
    avatarBuy: "اشترِ",
    avatarWear: "ارتدِ",
    avatarEquipped: "ترتديه الآن",
    avatarFree: "مجاني",
    avatarNeedStars: "نجومك لا تكفي لهذا الزي. واصل القراءة واجمع المزيد!",
    avatarPurchased: "مبروك! اشتريت الزي وارتديته.",
    avatarChanged: "تم تحديث أفتارك.",
    profilePhotoInvalid: "اختر صورة بصيغة مدعومة، وحجمها أقل من 8 ميجابايت.",
    profilePhotoError: "تعذر تجهيز الصورة. جرّب صورة أخرى.",
    profileSaveError: "تعذر حفظ التعديلات. مساحة التخزين في هذا المتصفح قد تكون ممتلئة.",
    myRewards: "مكافآتي",
    nextStarReward: "المكافأة القادمة عند",
    starsRemaining: "نجمة متبقية",
    rewardMilestone: "وسام جامع النجوم",
    allRewardsEarned: "رائع! وصلت إلى أعلى مكافأة نجوم.",
    encouragementMessages: "رسائل التشجيع",
    messageFromParent: "ولي الأمر",
    messageFromTeacher: "المعلم",
    messageFromSupporter: "شخص يشجعك",
    noEncouragementMessages: "لا توجد رسائل بعد. واصل رحلتك وستصلك رسائل جميلة!",
    sendCheerMessage: "إرسال رسالة تشجيع",
    recentEncouragement: "آخر رسالة",
    noReadingYet: "لم يبدأ طفلك القراءة هذا الأسبوع بعد. شجّعه بقلب!",
    familyChildWeek: "قراءة هذا الأسبوع",
    noBadges: "ابدأ القراءة لتجمع أوسمتك!",
    starSent: "أُرسلت نجمة تشجيع!",
    noAccess: "هذه الصفحة ليست لحسابك.",
    feat: [
      ["كتب مشكولة ومسموعة", "كل حرف بتشكيله، وزر استماع في كل صفحة."],
      ["يسجّل قراءته", "يقرأ الطفل ويسجّل، وتسمع قراءته من ركن الآباء والمعلم."],
      ["ألعاب ونجوم", "أسئلة ولعبة سحب الحروف بعد كل قصة."],
      ["متابعة للآباء والمعلمين", "تقارير بما قرأه كل طفل."]
    ],
    values: [
      ["قراءة صحيحة", "نص مشكول وصوت واضح."],
      ["قيم إسلامية", "قصص تعلّم التوحيد والأخلاق."],
      ["مصادر موثوقة", "كل آية وحديث بمصدره."],
      ["آمن للأطفال", "بلا إعلانات ولا محادثات."]
    ]
  },
  en: {
    brand: "Darb Al-Bayan", brandSub: "Learn to Read", home: "Home", kid: "My Journey", library: "Library", game: "Letter Games",
    parents: "Parents", teacher: "Teacher", teachersDirectory: "Our teachers", about: "About us", contact: "Contact us", otherLang: "العربية",
    teachersDirectoryTitle: "Meet our teachers",
    teachersDirectoryIntro: "Our teachers are partners in every reading journey. Explore their experience and teaching approach.",
    teachersDirectoryCount: "active teacher",
    teacherProfileOpen: "View teacher profile",
    teacherProfileBack: "All teachers",
    teacherProfessionalProfile: "Professional profile",
    teacherProfileProvidedBy: "Professional information is provided by each teacher.",
    teacherBioLabel: "About the teacher",
    teacherBioPlaceholder: "This teacher has not added a bio yet.",
    teacherSpecialtiesLabel: "Specialties",
    teacherSpecialtiesPlaceholder: "Specialties have not been added yet.",
    teacherExperienceLabel: "Years of experience",
    teacherExperiencePlaceholder: "Experience has not been specified.",
    teacherQualificationsLabel: "Qualifications",
    teacherQualificationsPlaceholder: "Qualifications have not been added yet.",
    teacherApproachLabel: "Teaching approach",
    teacherApproachPlaceholder: "This teacher has not added details about their approach yet.",
    teacherProfileNotice: "Your bio, specialties, experience, qualifications and teaching approach will appear publicly in Our teachers. Do not include private or contact information.",
    teacherYearsExperience: "years experience",
    noTeachersAvailable: "There are no active teachers to display right now.",
    featuredTeachersTitle: "Our featured teachers",
    featuredTeachersIntro: "Meet the teachers helping children grow through Darb Al-Bayan.",
    featuredTeachersSearch: "Search by teacher name or specialty",
    featuredTeachersSearchEmpty: "No teachers match your search.",
    featuredTeachersViewAll: "View all teachers",
    startFree: "Create account", login: "Log in", logout: "Log out",
    heroTag: "Arabic & English", heroTitle1: "Learning to read…", heroTitle2: "growing up with values",
    heroText: "Illustrated stories with audio, starring heroes kids love, that teach reading, good manners and knowing Allah.",
    ctaKid: "Start as a student", ctaParent: "For parents", ctaTeacher: "For teachers",
    heroAlt: "Yusuf, Omar and Sara on a spring path", floatStars: "+3 stars", floatAyah: "“My Lord, increase me in knowledge”",
    levelsTitle: "12 levels that grow with your child", levelsSub: "4 stages, each with 3 levels. Tap any level to see its books.",
    newBooks: "Newest books", seeAll: "All books", pricingTitle: "One plan… for the whole family",
    planMonthly: "Monthly", planMonthlyNote: "All books in both languages, up to 3 children", planYearly: "Yearly",
    planYearlyNote: "Everything in monthly + new books first", best: "Best value", choose: "Choose", priceM: "SAR 49", priceY: "SAR 390",
    signupTitle: "Start your Darb Al-Bayan journey", signupSide: "A few simple steps to get started",
    who: "I am a:", student: "Student", teacherRole: "Teacher", parentRole: "Parent",
    studentRoleHint: "A student’s own account",
    teacherRoleHint: "Track all students",
    parentRoleHint: "Create your account, then add your children",
    accountBasics: "Your account details",
    parentNextStep: "After signup, add your child’s account or link an existing one. No child details are needed now.",
    linkChildHint: "To link a student who already has an account, enter the email they signed up with.",
    studentLevelHint: "Every student starts at level 1, whatever their age.",
    ageOptional: "Optional",
    childLoginHint: "We’ll create a student login and PIN for you automatically. Find them in your parent account.",
    childAgeHint: "Optional — only helps us tailor the experience.",
    studentLoginDetails: "Student login: {email} · PIN: {pin}",
    childCredentials: "Child login details",
    showPassword: "Show",
    hidePassword: "Hide",
    passwordHint: "At least 6 characters",
    fillDemo: "Use account",
    demoChild: "Student",
    chooseRole: "Choose your account type",
    setupSteps: ["Choose a role", "Add your details", "Start learning"],
    name: "Name", email: "Email", password: "Password",
    childInfo: "Child details", childName: "Child name", childAge: "Age", childBoyGirl: "Child:", boy: "Boy", girl: "Girl",
    createAccount: "Create account", haveAccount: "Already have an account?", noAccount: "No account yet?", signup: "Sign up",
    loginTitle: "Welcome to Darb Al-Bayan", loginSub: "Sign in and we take you to your own page.",
    demo: "Demo accounts (password 1234)",
    demoAdmin: "Bayan Admin",
    adminRole: "Administrator",
    adminDashboard: "Admin dashboard",
    adminAccounts: "Accounts & links",
    adminContent: "Books & stories",
    adminSubscriptions: "Subscriptions",
    adminInbox: "Support inbox",
    studentProfile: "My profile",
    accountProfileTitle: "My profile",
    accountProfileIntro: "Update your account details and profile photo.",
    profileChildrenCount: "Linked children",
    profileFamilyGoal: "Family reading goal (minutes)",
    profileStudentsCount: "Linked students",
    profileAssignmentsCount: "Reading assignments",
    profileRecordingsCount: "Reading recordings",
    supportMessages: "Contact messages",
    newMessages: "New messages",
    noMessages: "No messages.",
    markRead: "Mark as read",
    messageRead: "Message marked as read.",
    searchMessages: "Search name, email or message",
    messageStatusFilter: "All messages",
    unreadMessagesFilter: "Unread",
    readMessagesFilter: "Read",
    newMessageLabel: "New",
    adminStorageNotice: "Local demo: data is stored in this browser only. There is no online payment or cross-device sync.",
    totalAccounts: "All accounts",
    totalStudents: "Students",
    totalParents: "Parents",
    totalTeachers: "Teachers",
    createAccountAdmin: "Create account",
    deleteAccount: "Delete account",
    confirmDeleteAccount: "Delete this account? Its links and recordings will be removed.",
    accountDeleted: "Account deleted and links removed.",
    accountStatus: "Account status",
    enabled: "Active",
    disabled: "Suspended",
    role: "Account type",
    parentAccount: "Linked parent",
    teacherAccounts: "Linked teachers",
    noParent: "No parent",
    noTeachers: "No teacher",
    parentEmailHint: "Enter the email address of the parent account.",
    teacherEmailsHint: "Enter each teacher email, separated by commas.",
    invalidLinkedEmail: "No parent or teacher account matches one of the entered email addresses.",
    searchAccounts: "Search by name or email",
    filterRole: "All account types",
    filterStatus: "All statuses",
    linkedFilter: "All students",
    linkedOnly: "Linked",
    unlinkedOnly: "No linked teacher",
    applyFilters: "Search & filter",
    clearFilters: "Clear",
    pageLabel: "Page",
    previousPage: "Previous",
    nextPage: "Next",
    showing: "Showing",
    of: "of",
    perPage: "per page",
    exportCsv: "Export results CSV",
    noMatchingAccounts: "No matching accounts.",
    showAccountDetails: "Edit account details",
    editSubscription: "Edit subscription or record payment",
    accountDetailsHint: "Name and email",
    showCreateAccount: "Add a new account",
    quickSearchAccounts: "Quick search by name or email",
    showAdvancedFilters: "More filters",
    showContentDetails: "Manage content details",
    showChartsDetails: "View charts",
    showMoreDashboard: "Review alerts and recent accounts",
    subscriptionSearch: "Search parent or student subscriptions",
    subscriptionPlanFilter: "All plans",
    searchLibrary: "Search by title or content ID",
    libraryLevelFilter: "All levels",
    librarySeriesFilter: "All series",
    libraryAccessFilter: "All access types",
    libraryStatusFilter: "All publishing states",
    noMatchingContent: "No matching books or stories.",
    accountCount: "accounts",
    noTeachersAssigned: "No teachers linked",
    atRiskAccounts: "Accounts needing attention",
    unlinkedStudents: "Students without a teacher",
    suspendedAccounts: "Suspended accounts",
    expiringSubscriptions: "Subscriptions expiring in 30 days",
    weeklyReading: "Reading minutes this week",
    weeklyActiveStudents: "Students active this week",
    weeklyActivity: "Reading activity in the last 7 days",
    activeThisWeek: "Active in the last 7 days",
    newAccounts: "New accounts this week",
    accountsByRole: "Accounts by role",
    recentAccounts: "Recently created accounts",
    attentionTitle: "Needs your attention",
    noAttention: "Nothing urgent needs your attention.",
    contactAdminHint: "Older accounts may not have a creation date.",
    saveChanges: "Save changes",
    accountSaved: "Account details and links saved.",
    accountCreated: "Account created.",
    accountEmailExists: "This email address is already in use.",
    cannotDisableSelf: "You cannot suspend or change the role of the current admin account.",
    accountList: "Manage accounts and links",
    subscriptionState: "Subscription status",
    subscriptionPlan: "Plan",
    subscriptionExpiry: "Expiry date",
    subscriptionActive: "Active",
    subscriptionInactive: "Not subscribed",
    subscriptionExpired: "Expired",
    monthlyPlan: "Monthly",
    yearlyPlan: "Yearly",
    saveSubscription: "Save subscription",
    subscriptionSaved: "Subscription updated.",
    revenueTitle: "Recorded revenue",
    revenueTotal: "Total recorded payments",
    revenueThisMonth: "Recorded this month",
    revenuePaymentsCount: "Recorded payments",
    revenueRecordingNote: "Only payments you record manually are counted; an active subscription does not necessarily mean it was paid.",
    paymentAmount: "Amount received (optional)",
    paymentDate: "Payment received date",
    paymentAmountHint: "Leave blank if no payment was received now.",
    paymentInvalid: "Enter a valid amount greater than zero and the payment date.",
    paymentRecorded: "Subscription updated and payment recorded.",
    recentPayments: "Recent recorded payments",
    noPayments: "No payments have been recorded yet.",
    paidAccess: "Students can access premium content when their own or their parent’s subscription is active.",
    contentAccess: "Content access",
    freeContent: "Free",
    premiumContent: "Subscribers",
    saveAccess: "Save access",
    accessSaved: "Story access updated.",
    addStory: "Add a book or story",
    storyTitleAr: "Story title in Arabic",
    storyTitleEn: "Story title in English",
    storyPagesAr: "Story pages in Arabic",
    storyPagesEn: "Story pages in English",
    storyPagesHint: "Separate pages with a blank line. Both languages must have the same number of pages.",
    storyQuestionAr: "Story question in Arabic",
    storyQuestionEn: "Story question in English",
    storyOptionsAr: "Answer choices in Arabic (one per line)",
    storyOptionsEn: "Answer choices in English (one per line)",
    storyCorrect: "Correct answer number",
    storyCreated: "Story added to the library.",
    storyDeleted: "Story hidden from the library.",
    restoreStory: "Restore story",
    storyInvalid: "Complete the story details and ensure both languages have the same page and choice counts.",
    catalog: "Library catalog",
    deleteStory: "Archive story",
    subscriptionsOverview: "Manage plans manually",
    noSubscription: "No active subscription",
    subscriptionManagedManually: "This is an administrative status only until payment and a backend are connected.",
    lockedForSubscription: "Subscription required",
    paidContent: "Paid book",
    buyBook: "Buy book",
    bookPurchased: "The book was purchased and unlocked for you.",
    purchaseCheckout: "Complete book purchase",
    purchaseDemoHint: "Demo purchase — no real amount will be charged.",
    protectionNotice: "The reader is visually protected and prevents downloading or copying book pages.",
    securityLimitNotice: "The page can be hidden when apps switch; complete screenshot and screen-recording protection requires DRM and a secure backend.",
    freeLabel: "Free",
    hello: "Hi", helloSub: "Let’s continue our journey today", continueReading: "Continue reading", read: "Read",
    journeyTitle: "My learning path — 12 levels", stars: "Stars", streak: "Day streak", booksRead: "Books", minutes: "Minutes",
    dailyGoal: "Today’s goal", timerTitle: "Reading time", goalDone: "Well done! You reached today’s goal",
    dhikrTitle: "Dhikr of the day", dhikr: "SubhanAllahi wa bihamdihi", gameCardTitle: "Learn through play", gameCardText: "Choose a game and discover new words and letters",
    level: "Level", series: "Series", all: "All", sRabbi: "Know My Lord", sAdhkar: "My Adhkar", sAkhlaq: "My Manners",
    bothLangs: "English + عربي", comingSoon: "Books for this level are coming soon, insha’Allah.",
    back: "Back", prev: "Previous", next: "Next", listen: "Listen", recStart: "Record my reading", recStop: "Stop recording", recDone: "Record again",
    recStarting: "Starting microphone…", recSaving: "Preparing recording…", recSending: "Sending recording…",
    recReviewTitle: "Listen to your recording before sending", recSentTitle: "Your recording was sent", recReviewHint: "Not happy with it? Record again before sending.",
    recRetake: "Record again", recSend: "Send recording",
    recSavedMsg: "Your recording was sent and saved. Your parent and teacher can listen to it.",
    recPlay: "Play recording", recPause: "Pause recording", recSeek: "Recording position",
    recordingPermissionHint: "Allow microphone access when your browser asks. Recordings are saved in this browser after you send them.",
    recordingNotSupported: "Audio recording is unavailable here. Open the site over localhost or HTTPS in a modern browser.",
    recordingMicDenied: "Microphone access was not allowed. Grant permission in your browser and try again.",
    recordingMicMissing: "No microphone was found on this device.",
    recordingSaveFailed: "The recording could not be saved. Check your browser storage and try again.",
    recordingPlaybackFailed: "The recording could not be played. Please try again.",
    toQuiz: "To the questions",
    quizTag: "Story question", quizQ: "Surat al-Ikhlas is equal to…", right: "Well done! +3 stars", wrong: "Try again, you can do it!", toGame: "To the letter game",
    gameTag: "Letter game", gameTitle: "Which letter is missing?", gameHelp: "Tap a letter, then the empty box.",
    good: "Well done!", tryAgain: "Try another letter", gameWin: "Amazing! You finished every word", playAgain: "Play again",
    learningGames: "Games that help you learn",
    gamesTitle: "Learning games",
    gamesIntro: "Pick a game you like and learn something new with every round.",
    gamesCount: "4 learning games",
    avatarGameTitle: "Build your avatar",
    avatarGameDescription: "Create your character and choose its outfits and accessories.",
    gamesPlay: "Play now",
    gamesBack: "Back to games",
    letterGameName: "Finish the letters",
    letterGameDescription: "Choose the missing letter and discover simple words.",
    gamePickLetter: "Choose the missing letter",
    gameSelectedLetter: "Selected letter",
    gameSlotHint: "Tap a box to complete the word",
    wordHuntCardTitle: "Word Explorer",
    wordHuntCardText: "Match each word to its picture",
    wordHuntTitle: "Word Explorer",
    wordHuntHelp: "Read the word, then choose the picture that matches it.",
    wordHuntRound: "Round",
    wordHuntCorrect: "That's right! Well done!",
    wordHuntWrong: "Not this picture. Try again!",
    wordHuntNext: "Next word",
    wordHuntComplete: "Amazing! You found every word!",
    wordHuntReward: "You earned 3 stars!",
    wordHuntRewardClaimed: "Great! You already earned today's reward.",
    wordBuilderCardTitle: "Word Builder",
    wordBuilderCardText: "Put the letters in order to build the word",
    wordBuilderTitle: "Word Builder",
    wordBuilderHelp: "Arrange the letters to name the picture, then tap Check.",
    wordBuilderCheck: "Check",
    wordBuilderClear: "Clear letters",
    wordBuilderCorrect: "You built it correctly! Well done!",
    wordBuilderWrong: "Almost! Change the letter order and try again.",
    wordBuilderComplete: "Brilliant! You built every word!",
    wordBuilderReward: "You earned 4 stars!",
    wordBuilderRewardClaimed: "Great! You already earned today's reward.",
    gameRoundProgress: "Word",
    gameRewardEarned: "Your game reward has been added to your stars!",
    gameRewardAlreadyEarned: "You already earned this game's reward today. Keep playing!",
    addChild: "+ Add a child", recordingsTitle: "Your children’s recordings", recordingsSub: "Listen, then send a star.",
    sendStar: "Send a star", play: "Play", weekTitle: "Reading minutes this week", subTitle: "Subscription",
    subPlan: "Yearly plan — renews in 11 months", reminder: "Daily reading reminder", manage: "Manage subscription",
    aboutTitle: "About us", aboutP1: "Darb Al-Bayan is an educational platform that teaches children to read in Arabic and English through illustrated stories that nurture love of Allah and good character.",
    aboutP2: "Every story is voweled and narrated, every verse and hadith has its source, and a qualified scholar reviews the content before it is published.",
    contactTitle: "Contact us", emailLabel: "Email", whatsapp: "WhatsApp", hours: "Reply hours", hoursText: "Sunday to Thursday",
    yourName: "Your name", message: "Your message", send: "Send", sentMsg: "We received your message, may Allah reward you!", slogan: "A place for every reader… at every age",
    checks: ["Fully voweled Arabic", "Questions after every story", "Kids record, parents listen", "Safe for kids"],
    loginErr: "Email or password is incorrect.", fillErr: "Please fill the required fields.", existsErr: "This email is already registered.",
    myClass: "Manage students", students: "Students", tasks: "Tasks", reports: "Reports", assign: "Assign a book",
    teacherHello: "Hello teacher", classProgress: "Average student progress", pendingRec: "Recordings to review",
    assignHint: "Choose a book and assign it to one student or all students.", assigned: "Book assigned.",
    assignedTo: "Assigned", homeworkProgress: "Homework progress", homeworkDone: "Completed",
    homeworkPending: "Not completed yet", homeworkLocked: "Unlocks when you reach this level",
    myHomework: "My reading tasks", noHomework: "No reading tasks right now.",
    homeworkSaved: "Well done! Your teacher and parent can now see this task is complete.",
    homeworkSummary: "Reading homework",
    readingComplete: "Great reading! Keep going to discover more.",
    noRecipients: "There are no registered students yet.",
    note: "Teacher note", saveNote: "Save note", noteSaved: "Note saved.",
    lastBook: "Last book", quizScore: "Quiz", status: "Status", action: "Action",
    view: "View",     allClass: "All my linked students", homework: "Reading homework",
    parentDash: "Follow your children", teacherDash: "Manage students", studentDash: "Student journey",
    welcomeRole: "You are signed in. This page is for your role only.",
    addChildOk: "Child added. Save the login details shown in your account.",
    linkChild: "Link an existing student account",
    linkByEmail: "Student email",
    linkChildOk: "Student account linked to you.",
    studentNotFound: "No student account was found with that email.",
    alreadyLinked: "This account is already linked to you.",
    linkedElsewhere: "This account is already linked to another parent or teacher.",
    nextLevel: "Level completed! The next level is now unlocked.",
    allLevelsDone: "Well done! You completed all levels.",
    bookLocked: "Complete your current level first to unlock this book.",
    finishQuizFirst: "Finish the reading and answer its question before unlocking the next level.",
    currentLesson: "Your current lesson",
    completed: "Completed",
    dailyMission: "Mission of the day",
    dailyMissions: [
      [
        { prompt: "Which letter starts “moon”?", options: ["S", "M", "B"], correct: 1 },
        { prompt: "Which letter starts “sun”?", options: ["S", "B", "M"], correct: 0 },
        { prompt: "Which letter starts “book”?", options: ["T", "B", "S"], correct: 1 },
        { prompt: "Which letter starts “tree”?", options: ["T", "M", "B"], correct: 0 },
        { prompt: "Which letter starts “fish”?", options: ["S", "F", "T"], correct: 1 }
      ],
      [
        { prompt: "Which word has the long “a” sound?", options: ["sun", "cake", "fish"], correct: 1 },
        { prompt: "Which word ends with “t”?", options: ["cat", "moon", "book"], correct: 0 },
        { prompt: "Which word starts like “ship”?", options: ["moon", "shoe", "book"], correct: 1 },
        { prompt: "Complete: “Sara read in a … voice.”", options: ["beautiful", "distant", "sleepy"], correct: 0 },
        { prompt: "Which word has three letters?", options: ["school", "sun", "book"], correct: 1 }
      ],
      [
        { prompt: "Who recited Surat Al-Ikhlas?", options: ["The sheikh", "Sara", "Yusuf"], correct: 1 },
        { prompt: "How did the lesson begin?", options: ["Allah is The One", "A color lesson", "A letter game"], correct: 0 },
        { prompt: "How did everyone feel before the lesson?", options: ["Excited and eager", "Sleepy", "Ready to leave"], correct: 0 },
        { prompt: "What did Sara do when the sheikh asked?", options: ["Raised her hand and read", "Left the circle", "Started a game"], correct: 0 },
        { prompt: "Where did the boys sit?", options: ["Around the sheikh", "In the library", "In the garden"], correct: 0 }
      ],
      [
        { prompt: "What shows Sara was eager to learn?", options: ["She raised her hand and read", "She left early", "She ignored the question"], correct: 0 },
        { prompt: "What is the main idea of the story opening?", options: ["An eager start to a new lesson", "A trip to the sea", "A sports contest"], correct: 0 },
        { prompt: "Which word best describes Sara?", options: ["Confident and engaged", "Uninterested", "Always hesitant"], correct: 0 },
        { prompt: "Why did the children gather around the sheikh?", options: ["To learn together", "To eat", "To go home"], correct: 0 },
        { prompt: "Which title best sums up the story?", options: ["The First Lesson", "A Day at the Market", "The Train Trip"], correct: 0 }
      ]
    ],
    missionReviewHint: "We chose a simpler review to help strengthen this skill.",
    missionComplete: "Daily mission complete! +2 stars",
    missionTryAgain: "Close! Try another letter.",
    alreadyMissionDone: "You finished today’s mission. See you tomorrow!",
    badges: "My badges",
    firstBookBadge: "First book",
    fiveStarsBadge: "Bright reader",
    threeLevelsBadge: "Level climber",
    sevenDayBadge: "7-day reader",
    cheerReceived: "A message from your parent",
    classChallenge: "Reading challenge",
    readingLeague: "Reading champions this week",
    readingLeagueHint: "Enjoy a friendly reading-minute challenge with your linked classmates. Every minute brings you closer to your goal!",
    readingMinutesThisWeek: "reading minutes this week",
    readingGoal: "Your weekly goal",
    leagueRank: "Your place",
    leagueStartRanking: "Start reading to earn your place!",
    leagueNoPeers: "You are the first reading champion in your circle! Keep reading and your linked classmates can join.",
    leagueYou: "You",
    weeklyChampion: "Reading champion",
    avatarGlasses: "Glasses",
    avatarHats: "Hats",
    avatarNoAccessory: "None",
    avatarWearAccessory: "Wear",
    avatarBuyAccessory: "Buy",
    avatarAccessoryEquipped: "Wearing",
    avatarAccessoryPurchased: "Great! You added a new item to your avatar.",
    challengeJoin: "Complete challenge",
    challengeDone: "Challenge complete! +5 stars",
    challengeComplete: "Challenge complete",
    challengeTarget: "Challenge goal",
    noChallenge: "No new challenge right now. Keep reading!",
    challengeNeedRead: "Read the challenge minutes first, then complete it!",
    challengeTitle: "Challenge title",
    challengeMinutes: "Reading minutes needed",
    publishChallenge: "Publish challenge",
    challengePublished: "Challenge published to your students.",
    participation: "Participation",
    classPulse: "Student activity this week",
    learnerSpotlight: "Learners to celebrate",
    studentOverview: "Student progress report",
    studentOverviewHint: "Reading, homework and recorded activity for this student.",
    studentReadingWeek: "Reading this week",
    currentBookProgress: "Current book progress",
    lessonsCompleted: "Levels completed",
    quizzesPassed: "Quizzes passed",
    studentHomework: "Student homework",
    homeworkCompletedStatus: "Completed",
    homeworkPendingStatus: "Not completed yet",
    completedOn: "Completed on",
    studentRecordings: "Reading recordings",
    noStudentRecordings: "This student has no reading recordings yet.",
    recordingAudioUnavailable: "Recording details are available, but its audio file is not.",
    readingActivity: "Reading activity",
    todayMissionStatus: "Today's mission",
    missionCompletedStatus: "Completed",
    missionPendingStatus: "Not completed",
    passedLevels: "Levels with a passed quiz",
    challengesCompleted: "Challenges completed",
    gameRewardsToday: "Game rewards today",
    noTrackedActivity: "No activity has been recorded yet.",
    studentChallenges: "Student challenges",
    challengeCompletedStatus: "Challenge completed",
    challengePendingStatus: "Challenge not completed yet",
    recordingPage: "Page",
    recordingDateToday: "Today",
    recordingDateYesterday: "Yesterday",
    recordingDateUnknown: "Date not recorded",
    readingTogether: "Family reading goal",
    familyGoalHint: "Add up your family’s reading minutes this week and celebrate together.",
    saveGoal: "Save goal",
    goalSaved: "Family goal saved.",
    encouragement: "Encouragement",
    encouragementOptions: ["Proud of you!", "Lovely reading!", "Keep it up!"],
    encouragementReceived: "Your encouragement was sent.",
    profileTitle: "My profile & achievements",
    profileIntro: "Track your stars, books, badges and encouragement here.",
    editMyDetails: "My details",
    profileSaved: "Your details were saved.",
    profileInvalid: "Check your name, email and age, and make sure the email is not already in use.",
    profileEmailHint: "This email is used to sign in.",
    profileEmailReadOnlyHint: "The email address cannot be changed here.",
    profileReadingLanguage: "Preferred reading language",
    profilePhoto: "Profile photo",
    profilePhotoHint: "Choose a clear photo; it will be resized to fit your account.",
    newPasswordOptional: "New password (optional)",
    avatarMaker: "My avatar & outfits",
    avatarIntro: "Choose your character, customize its colors, and collect modest outfits with reading stars.",
    avatarGender: "Character",
    avatarBoy: "Boy",
    avatarGirl: "Girl",
    avatarSkinTone: "Skin tone",
    avatarHairColor: "Hair color",
    avatarHairStyle: "Hairstyle",
    avatarHijabColor: "Hijab color",
    avatarShop: "Outfit shop",
    avatarOutfits: "Outfits",
    avatarCurrentStars: "Your stars",
    avatarWearing: "Wearing now",
    avatarBuy: "Buy",
    avatarWear: "Wear",
    avatarEquipped: "Wearing now",
    avatarFree: "Free",
    avatarNeedStars: "You need more stars for this outfit. Keep reading and collect more!",
    avatarPurchased: "Great! You bought and are wearing the outfit.",
    avatarChanged: "Your avatar has been updated.",
    profilePhotoInvalid: "Choose a supported image smaller than 8 MB.",
    profilePhotoError: "The image could not be processed. Try another image.",
    profileSaveError: "Changes could not be saved. This browser may be out of storage space.",
    myRewards: "My rewards",
    nextStarReward: "Next reward at",
    starsRemaining: "stars to go",
    rewardMilestone: "Star collector badge",
    allRewardsEarned: "Amazing! You reached the highest star reward.",
    encouragementMessages: "Encouragement messages",
    messageFromParent: "Parent",
    messageFromTeacher: "Teacher",
    messageFromSupporter: "Your supporter",
    noEncouragementMessages: "No messages yet. Keep learning and lovely messages will come!",
    sendCheerMessage: "Send encouragement",
    recentEncouragement: "Latest message",
    noReadingYet: "Your child hasn’t read this week yet. Send them some love!",
    familyChildWeek: "Reading this week",
    noBadges: "Start reading to collect your badges!",
    starSent: "A star was sent!",
    noAccess: "This page is not for your account.",
    feat: [
      ["Voweled, narrated books", "Every letter has its vowels, with a listen button on every page."],
      ["Record their reading", "Children read and record; parents and teachers listen."],
      ["Games and stars", "Questions and a letter game after every story."],
      ["Parent & teacher tracking", "Reports of what each child has read."]
    ],
    values: [
      ["Correct reading", "Voweled text and clear audio."],
      ["Islamic values", "Stories that teach tawhid and manners."],
      ["Trusted sources", "Every verse and hadith with its source."],
      ["Safe for kids", "No ads and no chats."]
    ]
  }
};

const ICONS = {
  book: "M4 5.5C6.5 4 9.5 4 12 6c2.5-2 5.5-2 8-.5v13c-2.5-1.5-5.5-1.5-8 .5-2.5-2-5.5-2-8-.5z M12 6v13",
  mic: "M12 3a3 3 0 013 3v6a3 3 0 01-6 0V6a3 3 0 013-3zM5 11a7 7 0 0014 0M12 18v3",
  play: "M8 5v14l11-7z",
  pause: "M8 5v14M16 5v14",
  star: "M12 3l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.8z",
  chart: "M4 20V10M10 20V4M16 20v-7M22 20H2",
  bell: "M18 16v-5a6 6 0 00-12 0v5l-2 2h16zM10 21h4",
  check: "M6 12.5l4 4L18 8",
  lock: "M7 11V8a5 5 0 0110 0v3M6 11h12v9H6z"
};

function uid(p) { return p + "-" + Math.random().toString(36).slice(2, 8); }
function stageOf(n) { return STAGE[Math.floor((Math.max(1, n) - 1) / 3)] || STAGE[0]; }
function load() { try { return JSON.parse(localStorage.getItem(KEY)); } catch { return null; } }
function save(db) { localStorage.setItem(KEY, JSON.stringify(db)); }

const RECORDING_DB_NAME = "bayan-recording-audio";
const RECORDING_STORE_NAME = "audio";
let recordingAudioDatabase;
let activeMediaRecorder;
let activeRecordingStream;
let activeRecordingStartedAt = 0;
let activeRecordingDetails;
let pendingReadingRecording;
const recordingAudioUrls = new Map();

function clearPendingReadingRecording() {
  if (pendingReadingRecording?.url) URL.revokeObjectURL(pendingReadingRecording.url);
  pendingReadingRecording = null;
}

function recordingDurationLabel(seconds) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}

function recordingWaveformBars() {
  return Array.from({ length: 44 }, (_, index) => {
    const envelope = 0.25 + 0.75 * Math.sin((index + 1) / 45 * Math.PI);
    const detail = 0.2 + 0.8 * Math.abs(Math.sin(index * 1.71 + 0.4));
    const height = Math.round(14 + envelope * detail * 82);
    return `<i style="--wave-height:${height}%"></i>`;
  }).join("");
}

function bindRecordingPreviewPlayer() {
  const player = document.querySelector(".recording-audio-player");
  if (!player) return;
  const audio = player.querySelector("audio");
  const button = player.querySelector("[data-recording-toggle]");
  const waveform = player.querySelector(".recording-waveform-track");
  const seek = player.querySelector("[data-recording-seek]");
  const currentLabel = player.querySelector("[data-recording-current]");
  const durationLabel = player.querySelector("[data-recording-duration]");
  if (!audio || !button || !waveform || !seek || !currentLabel || !durationLabel) return;

  const fallbackDuration = Number(player.dataset.duration) || 0;
  const actualDuration = () => Number.isFinite(audio.duration) && audio.duration > 0 ? audio.duration : 0;
  const update = () => {
    const duration = actualDuration();
    const displayedDuration = duration || fallbackDuration;
    const current = Math.floor(audio.currentTime || 0);
    const progress = duration ? Math.min(1, Math.max(0, audio.currentTime / duration)) : 0;
    const isPlaying = !audio.paused && !audio.ended;
    currentLabel.textContent = recordingDurationLabel(current);
    durationLabel.textContent = recordingDurationLabel(Math.floor(displayedDuration));
    seek.disabled = !duration;
    seek.value = String(Math.round(progress * 1000));
    seek.setAttribute("aria-valuetext", `${recordingDurationLabel(current)} / ${recordingDurationLabel(Math.floor(displayedDuration))}`);
    waveform.style.setProperty("--recording-progress", `${progress * 100}%`);
    button.setAttribute("aria-label", isPlaying ? t().recPause : t().recPlay);
    button.setAttribute("aria-pressed", String(isPlaying));
    button.innerHTML = svg(
      isPlaying ? ICONS.pause : ICONS.play,
      22,
      22,
      "currentColor",
      isPlaying ? "none" : "currentColor"
    );
  };

  ["loadedmetadata", "durationchange", "timeupdate", "play", "pause", "ended"].forEach((event) => {
    audio.addEventListener(event, update);
  });
  button.addEventListener("click", async () => {
    if (!audio.paused && !audio.ended) {
      audio.pause();
      return;
    }
    if (audio.ended) audio.currentTime = 0;
    try {
      await audio.play();
    } catch (error) {
      state.flash = t().recordingPlaybackFailed;
      render();
    }
  });
  seek.addEventListener("input", () => {
    const duration = actualDuration();
    if (!duration) return;
    audio.currentTime = duration * Number(seek.value) / 1000;
    update();
  });
  update();
}

function openRecordingAudioDatabase() {
  if (recordingAudioDatabase) return Promise.resolve(recordingAudioDatabase);
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(RECORDING_DB_NAME, 1);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(RECORDING_STORE_NAME)) {
        request.result.createObjectStore(RECORDING_STORE_NAME, { keyPath: "id" });
      }
    };
    request.onsuccess = () => {
      recordingAudioDatabase = request.result;
      recordingAudioDatabase.onversionchange = () => {
        recordingAudioDatabase.close();
        recordingAudioDatabase = null;
      };
      resolve(recordingAudioDatabase);
    };
    request.onerror = () => reject(request.error || new Error("Unable to open recording storage"));
  });
}

function storeRecordingAudio(id, blob) {
  return openRecordingAudioDatabase().then((database) => new Promise((resolve, reject) => {
    const transaction = database.transaction(RECORDING_STORE_NAME, "readwrite");
    transaction.objectStore(RECORDING_STORE_NAME).put({ id, blob });
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error || new Error("Unable to save recording"));
    transaction.onabort = () => reject(transaction.error || new Error("Recording save was cancelled"));
  }));
}

function loadRecordingAudio(id) {
  return openRecordingAudioDatabase().then((database) => new Promise((resolve, reject) => {
    const transaction = database.transaction(RECORDING_STORE_NAME, "readonly");
    const request = transaction.objectStore(RECORDING_STORE_NAME).get(id);
    request.onsuccess = () => resolve(request.result?.blob || null);
    request.onerror = () => reject(request.error || new Error("Unable to load recording"));
  }));
}

function deleteRecordingAudio(id) {
  const url = recordingAudioUrls.get(id);
  if (url) {
    URL.revokeObjectURL(url);
    recordingAudioUrls.delete(id);
  }
  return openRecordingAudioDatabase().then((database) => new Promise((resolve, reject) => {
    const transaction = database.transaction(RECORDING_STORE_NAME, "readwrite");
    transaction.objectStore(RECORDING_STORE_NAME).delete(id);
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error || new Error("Unable to delete recording audio"));
    transaction.onabort = () => reject(transaction.error || new Error("Recording deletion was cancelled"));
  }));
}

function recordingAudioPlayer(recording, className = "") {
  const classAttribute = className ? ` class="${className}"` : "";
  if (typeof recording.audioData === "string" && recording.audioData.startsWith("data:audio/")) {
    return `<audio${classAttribute} controls preload="none" src="${escapeHtml(recording.audioData)}"></audio>`;
  }
  const id = escapeHtml(recording.id);
  return `<audio${classAttribute} controls preload="none" data-audio-id="${id}" hidden></audio>
    <span class="muted" data-audio-fallback="${id}">${t().recordingAudioUnavailable}</span>`;
}

async function hydrateRecordingAudio() {
  const players = [...document.querySelectorAll("audio[data-audio-id]")];
  await Promise.all(players.map(async (player) => {
    try {
      if (!player.isConnected || player.src) return;
      const id = player.dataset.audioId;
      let url = recordingAudioUrls.get(id);
      if (!url) {
        const blob = await loadRecordingAudio(id);
        if (!blob) throw new Error("Recording audio is missing");
        url = URL.createObjectURL(blob);
        recordingAudioUrls.set(id, url);
      }
      if (!player.isConnected) return;
      player.src = url;
      player.hidden = false;
      player.load();
      const fallback = [...document.querySelectorAll("[data-audio-fallback]")]
        .find((element) => element.dataset.audioFallback === id);
      if (fallback) fallback.hidden = true;
    } catch (error) {
      if (!player.isConnected) return;
      player.hidden = true;
      const fallback = [...document.querySelectorAll("[data-audio-fallback]")]
        .find((element) => element.dataset.audioFallback === player.dataset.audioId);
      if (fallback) fallback.hidden = false;
    }
  }));
}

function releaseActiveRecordingStream() {
  if (activeRecordingStream) {
    activeRecordingStream.getTracks().forEach((track) => track.stop());
    activeRecordingStream = null;
  }
}

function stopReadingRecording() {
  if (activeMediaRecorder && activeMediaRecorder.state !== "inactive") {
    state.rec = "saving";
    activeMediaRecorder.stop();
    render();
  }
}

async function startReadingRecording() {
  if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined" || !window.indexedDB) {
    state.flash = t().recordingNotSupported;
    render();
    return;
  }
  if (pendingReadingRecording && !pendingReadingRecording.sent) return;
  clearPendingReadingRecording();
  state.rec = "starting";
  render();
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    if (state.screen !== "reader" || sessionUser()?.role !== "student") {
      stream.getTracks().forEach((track) => track.stop());
      state.rec = "idle";
      return;
    }
    activeRecordingStream = stream;
    const supportedType = [
      "audio/webm;codecs=opus", "audio/webm", "audio/mp4", "audio/ogg;codecs=opus"
    ].find((type) => MediaRecorder.isTypeSupported?.(type));
    const recorder = supportedType ? new MediaRecorder(stream, { mimeType: supportedType }) : new MediaRecorder(stream);
    const chunks = [];
    activeMediaRecorder = recorder;
    activeRecordingStream = stream;
    activeRecordingStartedAt = Date.now();
    const user = sessionUser();
    activeRecordingDetails = {
      id: uid("r"),
      studentId: user.id,
      bookId: user.currentBook,
      page: state.page + 1,
      createdAt: activeRecordingStartedAt
    };
    recorder.addEventListener("dataavailable", (event) => {
      if (event.data?.size) chunks.push(event.data);
    });
    recorder.addEventListener("error", () => {
      releaseActiveRecordingStream();
      activeMediaRecorder = null;
      activeRecordingDetails = null;
      state.rec = "idle";
      state.flash = t().recordingSaveFailed;
      render();
    }, { once: true });
    recorder.addEventListener("stop", () => {
      const details = activeRecordingDetails;
      const blob = new Blob(chunks, { type: recorder.mimeType || chunks[0]?.type || "audio/webm" });
      const duration = Math.max(1, Math.round((Date.now() - activeRecordingStartedAt) / 1000));
      releaseActiveRecordingStream();
      activeMediaRecorder = null;
      activeRecordingDetails = null;
      if (!details || !blob.size) {
        state.rec = "idle";
        state.flash = t().recordingSaveFailed;
        render();
        return;
      }
      if (state.screen !== "reader" || sessionUser()?.id !== details.studentId) {
        state.rec = "idle";
        return;
      }
      try {
        pendingReadingRecording = {
          details,
          blob,
          duration,
          url: URL.createObjectURL(blob),
          sent: false
        };
        state.rec = "preview";
      } catch (error) {
        state.rec = "idle";
        state.flash = t().recordingSaveFailed;
      }
      render();
    }, { once: true });
    recorder.start(250);
    state.rec = "rec";
    render();
  } catch (error) {
    releaseActiveRecordingStream();
    activeMediaRecorder = null;
    activeRecordingDetails = null;
    state.rec = "idle";
    state.flash = error.name === "NotAllowedError" || error.name === "SecurityError"
      ? t().recordingMicDenied
      : error.name === "NotFoundError" ? t().recordingMicMissing : t().recordingSaveFailed;
    render();
  }
}

async function sendReadingRecording() {
  const pending = pendingReadingRecording;
  if (!pending || pending.sent || state.rec === "sending") return;
  state.rec = "sending";
  render();
  try {
    await storeRecordingAudio(pending.details.id, pending.blob);
    const data = db();
    data.recordings.unshift({
      ...pending.details,
      when: "today",
      dur: recordingDurationLabel(pending.duration)
    });
    save(data);
    pending.sent = true;
    state.rec = "saved";
    state.flash = "";
  } catch (error) {
    state.rec = "preview";
    state.flash = t().recordingSaveFailed;
  }
  render();
}

function seed() {
  let db = load();
  if (db && Array.isArray(db.users)) {
    let changed = false;
    db.assignments = Array.isArray(db.assignments) ? db.assignments : [];
    db.recordings = Array.isArray(db.recordings) ? db.recordings : [];
    db.contacts = Array.isArray(db.contacts) ? db.contacts : [];
    db.books = Array.isArray(db.books) ? db.books : [];
    if (!Array.isArray(db.payments)) {
      db.payments = [];
      changed = true;
    }
    db.bookAccess = db.bookAccess && typeof db.bookAccess === "object" ? db.bookAccess : {};
    if ((Number(db.freeBiboMigrationVersion) || 0) < 1) {
      db.bookAccess.bibo = false;
      db.freeBiboMigrationVersion = 1;
      changed = true;
    }
    db.adminMigrationVersion = Number(db.adminMigrationVersion) || 0;
    if (!db.users.some((user) => user.role === "admin")) {
      db.users.push({
        id: "u-admin", role: "admin", name: "مدير بيان", nameEn: "Bayan Admin",
        email: "admin@bayan.test", password: "1234", active: true
      });
      changed = true;
    }
    if (!Array.isArray(db.challenges)) {
      db.challenges = [];
      changed = true;
    }
    db.week = Array.isArray(db.week) ? db.week : [0, 0, 0, 0, 0, 0, 0];
    db.users.forEach((user) => {
      if (["u-admin", "u-parent", "u-teacher", "u-sara", "u-yusuf", "u-omar"].includes(user.id)) {
        if (user.isDemo !== true) {
          user.isDemo = true;
          changed = true;
        }
      } else if (typeof user.isDemo !== "boolean") {
        user.isDemo = false;
        changed = true;
      }
      if (user.role === "parent" && !Array.isArray(user.childIds)) {
        user.childIds = [];
        changed = true;
      }
      if (user.role === "parent" && !Number.isFinite(user.familyGoalMins)) {
        user.familyGoalMins = 60;
        changed = true;
      }
      if (typeof user.active !== "boolean") {
        user.active = true;
        changed = true;
      }
      if (user.role === "parent" && user.id === "u-parent" && !user.subscriptionStatus) {
        user.subscriptionStatus = "active";
        user.subscriptionPlan = "yearly";
        changed = true;
      }
      if (user.role === "student" && !Array.isArray(user.teacherIds)) {
        user.teacherIds = [];
        changed = true;
      }
      if (user.role === "student") {
        if (!Array.isArray(user.ownedBooks)) {
          user.ownedBooks = [];
          changed = true;
        }
        const validOutfits = new Set(OUTFITS.map((outfit) => outfit.id));
        const ownedOutfits = Array.isArray(user.ownedOutfits)
          ? user.ownedOutfits.filter((id) => validOutfits.has(id)) : ["starter"];
        if (!ownedOutfits.includes("starter")) ownedOutfits.unshift("starter");
        if (!Array.isArray(user.ownedOutfits) ||
          JSON.stringify(user.ownedOutfits) !== JSON.stringify(ownedOutfits)) {
          user.ownedOutfits = ownedOutfits;
          changed = true;
        }
        if (!validOutfits.has(user.equippedOutfit) || !ownedOutfits.includes(user.equippedOutfit)) {
          user.equippedOutfit = "starter";
          changed = true;
        }
        const validGlasses = new Set(AVATAR_GLASSES.map((item) => item.id));
        const ownedGlasses = Array.isArray(user.ownedAvatarGlasses)
          ? user.ownedAvatarGlasses.filter((id) => validGlasses.has(id)) : [];
        if (!Array.isArray(user.ownedAvatarGlasses) ||
          JSON.stringify(user.ownedAvatarGlasses) !== JSON.stringify(ownedGlasses)) {
          user.ownedAvatarGlasses = ownedGlasses;
          changed = true;
        }
        if (!validGlasses.has(user.equippedAvatarGlasses) ||
          !ownedGlasses.includes(user.equippedAvatarGlasses)) {
          if (user.equippedAvatarGlasses) changed = true;
          user.equippedAvatarGlasses = "";
        }
        const validHats = new Set(AVATAR_HATS.map((item) => item.id));
        const ownedHats = Array.isArray(user.ownedAvatarHats)
          ? user.ownedAvatarHats.filter((id) => validHats.has(id)) : [];
        if (!Array.isArray(user.ownedAvatarHats) ||
          JSON.stringify(user.ownedAvatarHats) !== JSON.stringify(ownedHats)) {
          user.ownedAvatarHats = ownedHats;
          changed = true;
        }
        if (!validHats.has(user.equippedAvatarHat) || !ownedHats.includes(user.equippedAvatarHat)) {
          if (user.equippedAvatarHat) changed = true;
          user.equippedAvatarHat = "";
        }
        if (!AVATAR_SKIN_TONES.some((tone) => tone.id === user.avatarSkinTone)) {
          user.avatarSkinTone = "warm";
          changed = true;
        }
        if (!AVATAR_HAIR_COLORS.some((color) => color.id === user.avatarHairColor)) {
          user.avatarHairColor = "brown";
          changed = true;
        }
        if (!AVATAR_HAIR_STYLES.some((style) => style.id === user.avatarHairStyle)) {
          user.avatarHairStyle = "shortCurly";
          changed = true;
        }
        if (!["boy", "girl"].includes(user.avatarGender)) {
          user.avatarGender = ["boy", "girl"].includes(user.gender) ? user.gender : "boy";
          changed = true;
        }
        if (!AVATAR_HIJAB_COLORS.some((color) => color.id === user.avatarHijabColor)) {
          user.avatarHijabColor = "teal";
          changed = true;
        }
        if (!Number.isInteger(user.level) || user.level < 1 || user.level > 12) {
          user.level = 1;
          changed = true;
        }
        if (!Array.isArray(user.completedLevels)) {
          user.completedLevels = [];
          changed = true;
        }
        if (typeof user.readingSeconds !== "number") {
          user.readingSeconds = (Number(user.minutes) || 0) * 60;
          changed = true;
        }
        if (!user.readingHistory || typeof user.readingHistory !== "object") {
          user.readingHistory = {};
          changed = true;
        }
        if (!Array.isArray(user.quizLevels)) {
          user.quizLevels = [];
          changed = true;
        }
        if (!Array.isArray(user.challengeCompletions)) {
          user.challengeCompletions = [];
          changed = true;
        }
        if (!Array.isArray(user.encouragements)) {
          user.encouragements = [];
          changed = true;
        }
        if (typeof user.progress !== "number") {
          user.progress = 0;
          changed = true;
        }
        if (user.parentId) {
          const parent = db.users.find((candidate) => candidate.id === user.parentId && candidate.role === "parent");
          if (parent && !parent.childIds.includes(user.id)) {
            parent.childIds.push(user.id);
            changed = true;
          }
        }
      }
    });
    const allStudentIds = db.users.filter((user) => user.role === "student").map((user) => user.id);
    db.assignments.forEach((assignment) => {
      if (!Array.isArray(assignment.recipientIds)) {
        assignment.recipientIds = assignment.studentId
          ? [assignment.studentId]
          : allStudentIds;
        changed = true;
      }
      if (!Array.isArray(assignment.completedBy)) {
        assignment.completedBy = [];
        changed = true;
      }
      if (Object.hasOwn(assignment, "classId")) {
        delete assignment.classId;
        changed = true;
      }
    });
    db.users.forEach((user) => {
      if (Object.hasOwn(user, "classId")) {
        delete user.classId;
        changed = true;
      }
    });
    if (db.adminMigrationVersion < 1) {
      const teacherIds = db.users.filter((user) => user.role === "teacher").map((user) => user.id);
      db.users.filter((user) => user.role === "student").forEach((student) => {
        student.teacherIds = [...new Set([...(student.teacherIds || []), ...teacherIds])];
      });
      db.adminMigrationVersion = 1;
      changed = true;
    }
    if (!db.bookAccess || typeof db.bookAccess !== "object") {
      db.bookAccess = {};
      changed = true;
    }
    if (!Array.isArray(db.classes)) {
      db.classes = [];
      changed = true;
    }
    if (changed) save(db);
    return db;
  }
  db = {
    users: [
      { id: "u-admin", role: "admin", name: "مدير بيان", nameEn: "Bayan Admin", email: "admin@bayan.test", password: "1234", active: true, isDemo: true },
      { id: "u-parent", role: "parent", name: "أم سارة", nameEn: "Sara’s mom", email: "parent@bayan.test", password: "1234", childIds: ["u-sara", "u-yusuf", "u-omar"], reminder: true, subscriptionStatus: "active", subscriptionPlan: "yearly", isDemo: true },
      { id: "u-teacher", role: "teacher", name: "الأستاذة نورة", nameEn: "Ms. Noura", email: "teacher@bayan.test", password: "1234", isDemo: true },
      { id: "u-sara", role: "student", name: "سارة", nameEn: "Sara", email: "sara@bayan.test", password: "1234", parentId: "u-parent", teacherIds: ["u-teacher"], gender: "girl", age: 8, level: 6, stars: 34, streak: 5, books: 6, minutes: 74, currentBook: "wahid", progress: 35, quiz: "right", note: "", isDemo: true },
      { id: "u-yusuf", role: "student", name: "يوسف", nameEn: "Yusuf", email: "yusuf@bayan.test", password: "1234", parentId: "u-parent", teacherIds: ["u-teacher"], gender: "boy", age: 10, level: 9, stars: 41, streak: 3, books: 8, minutes: 95, currentBook: "word", progress: 80, quiz: "pending", note: "", isDemo: true },
      { id: "u-omar", role: "student", name: "عمر", nameEn: "Omar", email: "omar@bayan.test", password: "1234", parentId: "u-parent", teacherIds: ["u-teacher"], gender: "boy", age: 7, level: 5, stars: 27, streak: 4, books: 5, minutes: 52, currentBook: "circle", progress: 45, quiz: "wrong", note: "", isDemo: true }
    ],
    assignments: [
      { id: "a1", teacherId: "u-teacher", recipientIds: ["u-sara", "u-yusuf", "u-omar"], completedBy: [], bookId: "wahid", title: "اقرأ «الله الواحد الأحد»" }
    ],
    recordings: [
      { id: "r1", studentId: "u-sara", bookId: "wahid", page: 3, when: "today", dur: "0:42" },
      { id: "r2", studentId: "u-yusuf", bookId: "word", page: 5, when: "yesterday", dur: "1:10" },
      { id: "r3", studentId: "u-omar", bookId: "circle", page: 2, when: "2days", dur: "0:35" }
    ],
    week: [12, 18, 9, 22, 15, 26, 10],
    contacts: [],
    payments: [],
    challenges: [],
    classes: [],
    books: [],
    bookAccess: {},
    freeBiboMigrationVersion: 1,
    adminMigrationVersion: 1
  };
  save(db);
  return db;
}

const state = {
  lang: localStorage.getItem("bayan-lang") || "ar",
  screen: "home",
  filter: "all",
  lvl: 0,
  page: 0,
  answer: null,
  rec: "idle",
  placed: [null, null, null],
  sel: null,
  letterGameRewardStatus: "",
  gender: "girl",
  signupRole: "parent",
  signupDraft: {},
  parentChildCount: 1,
  contactSent: false,
  flash: "",
  wordHuntRound: 0,
  wordHuntChoice: null,
  wordHuntAnswers: {},
  wordHuntRewardStatus: "",
  wordBuilderRound: 0,
  wordBuilderLetters: [],
  wordBuilderHistory: {},
  wordBuilderFeedback: "",
  wordBuilderRewardStatus: "",
  accMs: 0,
  segStart: null,
  now: Date.now(),
  assignBook: "wahid",
  assignWho: "all",
  viewStudent: null,
  adminAccountQuery: "",
  adminAccountRole: "all",
  adminAccountStatus: "all",
  adminAccountLinked: "all",
  adminAccountPage: 1,
  adminSubscriptionQuery: "",
  adminSubscriptionStatus: "all",
  adminSubscriptionPlan: "all",
  adminSubscriptionPage: 1,
  adminInboxQuery: "",
  adminInboxStatus: "all",
  adminInboxPage: 1,
  adminContentQuery: "",
  adminContentLevel: "all",
  adminContentSeries: "all",
  adminContentAccess: "all",
  adminContentStatus: "all",
  adminContentPage: 1,
  checkoutPlan: "yearly",
  checkoutBook: null,
  notificationsOpen: false,
  onboardingStep: 0,
  onboardingInterests: [],
  onboardingAge: null,
  onboardingGoalMins: null,
  screenHistory: [],
  editChildId: null,
  classroomDraft: "",
  viewClass: null,
  accessibilityMode: localStorage.getItem("bayan-accessibility") || "standard",
  fontSize: ["small", "standard", "large"].includes(localStorage.getItem("bayan-font-size"))
    ? localStorage.getItem("bayan-font-size") : "standard",
  visualMode: localStorage.getItem("bayan-visual-mode") === "dark" ? "dark" : "standard"
};

function db() { return seed(); }
function sessionUser() {
  const id = localStorage.getItem(SESSION);
  const user = db().users.find((u) => u.id === id) || null;
  if (user?.active === false) {
    localStorage.removeItem(SESSION);
    return null;
  }
  return user;
}
function setSession(id) {
  if (id) localStorage.setItem(SESSION, id);
  else localStorage.removeItem(SESSION);
}
function t() { return T[state.lang]; }
function ar() { return state.lang === "ar"; }
function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}
function displayName(u) { return escapeHtml(ar() ? u.name : (u.nameEn || u.name)); }
function bookTitle(b) { return b ? escapeHtml(ar() ? b.ar : b.en) : ""; }
function studentAvatarMarkup(student, className = "student-avatar-art") {
  const outfit = OUTFITS.find((item) => item.id === student.equippedOutfit) || OUTFITS[0];
  const glasses = AVATAR_GLASSES.find((item) => item.id === student.equippedAvatarGlasses);
  const hat = AVATAR_HATS.find((item) => item.id === student.equippedAvatarHat);
  const skin = AVATAR_SKIN_TONES.find((tone) => tone.id === student.avatarSkinTone) || AVATAR_SKIN_TONES[1];
  const hair = AVATAR_HAIR_COLORS.find((color) => color.id === student.avatarHairColor) || AVATAR_HAIR_COLORS[1];
  const hijab = AVATAR_HIJAB_COLORS.find((color) => color.id === student.avatarHijabColor) || AVATAR_HIJAB_COLORS[0];
  const isGirl = (student.avatarGender || student.gender) === "girl";
  const hairStyle = AVATAR_HAIR_STYLES.some((style) => style.id === student.avatarHairStyle)
    ? student.avatarHairStyle : "shortCurly";
  const avatarOptions = {
    seed: student.id,
    backgroundColor: ["fff5da"],
    skinColor: [skin.color.replace("#", "")],
    clothing: [outfit.style],
    clothesColor: [outfit.color.replace("#", "")],
    eyes: ["happy"],
    mouth: ["smile"],
    eyebrows: ["defaultNatural"],
    accessories: glasses ? [glasses.style] : [],
    accessoriesColor: glasses ? [glasses.color.replace("#", "")] : ["385d86"],
    accessoriesProbability: glasses ? 100 : 0,
    facialHairProbability: 0,
    top: [isGirl ? "hijab" : hat?.style || hairStyle],
    topProbability: 100,
    ...(isGirl
      ? { hatColor: [hijab.color.replace("#", "")] }
      : { hatColor: [hat?.color.replace("#", "") || hijab.color.replace("#", "")], hairColor: [hair.color.replace("#", "")] })
  };
  const avatar = window.BayanAvatar.render(avatarOptions, isGirl && hat
    ? { top: [hat.style], hatColor: [hat.color.replace("#", "")] } : null)
    .replace("<svg ", '<svg aria-hidden="true" ');
  const name = escapeHtml(ar() ? student.name : (student.nameEn || student.name));
  return `<div class="${className}" role="img" aria-label="${name}">${avatar}</div>`;
}
function avatarShopIcon(type, item) {
  const color = item.color;
  const apparelDetail = item.id === "reader" ? `<path d="M36 28v30m-7-15h14" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`
    : item.id === "stars" ? `<path d="m36 33 2 5 6 1-4 4 1 6-5-3-5 3 1-6-4-4 6-1 2-5Z" fill="#fff5c8"/>`
      : item.id === "adventurer" ? `<path d="m24 34-8 26 20-9 20 9-8-26-12 8-12-8Z" fill="${color}" opacity=".72"/>`
        : item.id === "hero" ? `<path d="M36 30v28m-8-19h16m-8 9h8" stroke="#fff5c8" stroke-width="3" stroke-linecap="round"/>`
          : `<path d="M30 33h12" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`;
  const glassesDetail = item.id === "sunny"
    ? `<path d="M17 29h15l-2 14h-8l-5-14Zm23 0h15l-5 14h-8l-2-14Z" fill="${color}" stroke="#35435c" stroke-width="3" stroke-linejoin="round"/><path d="M32 33h8m-23-4-5-2m43 2 5-2" stroke="#35435c" stroke-width="3" stroke-linecap="round"/>`
    : `<circle cx="25" cy="36" r="10" fill="#fff" stroke="${color}" stroke-width="4"/><circle cx="47" cy="36" r="10" fill="#fff" stroke="${color}" stroke-width="4"/><path d="M35 35h2m-22-3-5-2m49 2 5-2" stroke="${color}" stroke-width="4" stroke-linecap="round"/>`;
  const hatDetail = item.id === "beanie-rose" || item.id === "beanie-gold"
    ? `<path d="M18 42c0-13 8-22 18-22s18 9 18 22v5H18v-5Z" fill="${color}" stroke="#514761" stroke-width="3" stroke-linejoin="round"/><path d="M18 43h36v9H18z" fill="#fff" stroke="#514761" stroke-width="3"/><circle cx="36" cy="17" r="4" fill="#ffd451"/>`
    : item.id === "turban-teal"
      ? `<path d="M16 43c0-15 9-25 20-25 10 0 20 9 20 25H16Z" fill="${color}" stroke="#514761" stroke-width="3"/><path d="M18 35c10 6 26 6 36 0M20 43h32" stroke="#d7fff4" stroke-width="3" stroke-linecap="round"/>`
      : `<path d="M19 43c1-15 8-24 19-24 9 0 15 8 16 24H19Z" fill="${color}" stroke="#514761" stroke-width="3" stroke-linejoin="round"/><path d="M12 43h48c-1 7-9 10-24 10S13 50 12 43Z" fill="#fff" stroke="#514761" stroke-width="3" stroke-linejoin="round"/><path d="m38 24 2 4 5 1-4 3 1 5-4-3-4 3 1-5-4-3 5-1 2-4Z" fill="#ffe38b"/>`;
  const artwork = type === "outfit"
    ? `<path d="m26 20 10-5 10 5 13 9-7 11-7-4v24H27V36l-7 4-7-11 13-9Z" fill="${color}" stroke="#514761" stroke-width="3" stroke-linejoin="round"/>${apparelDetail}`
    : type === "glasses" ? glassesDetail : hatDetail;
  return `<svg viewBox="0 0 72 72" aria-hidden="true" focusable="false">${artwork}</svg>`;
}
function avatarStarIcon() {
  return `<svg class="avatar-star-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m12 2.5 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3.1-5.8 3.1 1.1-6.5-4.7-4.6 6.5-.9L12 2.5Z" fill="currentColor" stroke="#d69c0b" stroke-width="1.2" stroke-linejoin="round"/></svg>`;
}
function imageDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const image = new Image();
      image.addEventListener("load", () => {
        const scale = Math.min(1, 512 / Math.max(image.naturalWidth, image.naturalHeight));
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
        canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
        const context = canvas.getContext("2d");
        if (!context) {
          reject(new Error("Image canvas is unavailable."));
          return;
        }
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/webp", 0.82));
      }, { once: true });
      image.addEventListener("error", () => reject(new Error("Image file could not be decoded.")), { once: true });
      image.src = String(reader.result);
    }, { once: true });
    reader.addEventListener("error", () => reject(new Error("Image file could not be read.")), { once: true });
    reader.readAsDataURL(file);
  });
}
function allBooks() {
  const data = db();
  return [
    ...BOOKS.map((book) => {
      const configured = data.bookAccess?.[book.id];
      if (configured && typeof configured === "object") {
        return {
          ...book,
          premium: configured.accessMode !== "free",
          accessMode: configured.accessMode || "subscription",
          purchasePrice: Number(configured.purchasePrice) || 0
        };
      }
      return {
        ...book,
        premium: Object.hasOwn(data.bookAccess || {}, book.id)
          ? Boolean(configured) : book.id !== "bibo",
        accessMode: "subscription",
        purchasePrice: 0
      };
    }),
    ...(data.books || []).map((book) => ({ ...book, custom: true, active: book.active !== false }))
  ];
}
function catalogBooks() { return allBooks().filter((book) => book.active !== false); }
function findBook(id) { return allBooks().find((book) => book.id === id); }
function bookPages(book) { return Array.isArray(book?.pages) && book.pages.length ? book.pages : PAGES; }
function hasActiveSubscription(user, data = db()) {
  const active = (account) => {
    if (!account || account.active === false || account.subscriptionStatus !== "active") return false;
    if (!account.subscriptionExpiresAt) return true;
    const expiresAt = new Date(`${account.subscriptionExpiresAt}T23:59:59`).getTime();
    return Number.isFinite(expiresAt) && expiresAt >= Date.now();
  };
  if (active(user)) return true;
  if (user?.role === "student" && user.parentId) {
    return active(data.users.find((candidate) => candidate.id === user.parentId));
  }
  return false;
}
function subscriptionStatus(user) {
  if (user.subscriptionStatus !== "active") return "inactive";
  if (!user.subscriptionExpiresAt) return "active";
  const expiresAt = new Date(`${user.subscriptionExpiresAt}T23:59:59`).getTime();
  return Number.isFinite(expiresAt) && expiresAt >= Date.now() ? "active" : "expired";
}
function bookAccessMode(book) {
  return book?.accessMode || (book?.premium ? "subscription" : "free");
}
function hasPurchasedBook(user, book) {
  return Boolean(user?.ownedBooks?.includes(book?.id));
}
function bookLockedForUser(book, user, data = db()) {
  if (bookAccessMode(book) === "free") return false;
  if (bookAccessMode(book) === "paid") return !hasPurchasedBook(user, book);
  return Boolean(book?.premium && user?.role === "student" && !hasActiveSubscription(user, data));
}
function paginate(items, page, pageSize = 25) {
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = (currentPage - 1) * pageSize;
  return {
    items: items.slice(start, start + pageSize), currentPage, totalPages,
    start, end: Math.min(start + pageSize, items.length), totalItems: items.length
  };
}
function adminPagination(result, pageKey) {
  const tt = t();
  const disabled = "btn btn-muted";
  return `<div class="admin-pagination">
    <span class="muted">${tt.showing} ${result.items.length ? result.start + 1 : 0}–${result.end} ${tt.of} ${result.totalItems} · ${tt.pageLabel} ${result.currentPage} ${tt.of} ${result.totalPages}</span>
    <div class="row">
      <button class="${disabled}" type="button" data-admin-page="${pageKey}" data-page="${result.currentPage - 1}" ${result.currentPage <= 1 ? "disabled" : ""}>${tt.previousPage}</button>
      <button class="${disabled}" type="button" data-admin-page="${pageKey}" data-page="${result.currentPage + 1}" ${result.currentPage >= result.totalPages ? "disabled" : ""}>${tt.nextPage}</button>
    </div>
  </div>`;
}
function csvCell(value) { return `"${String(value ?? "").replace(/"/g, '""')}"`; }
function lvName(n) { return (ar() ? "المستوى " : "Level ") + n; }
function homeFor(role) {
  return role === "admin" ? "admin" : role === "teacher" ? "teacher" : role === "parent" ? "parent" : "kid";
}
function studentsForTeacher(data, teacher = sessionUser()) {
  return data.users.filter((user) => user.role === "student" &&
    (!teacher || teacher.role !== "teacher" || user.teacherIds?.includes(teacher.id)));
}
function studentProgress(user) {
  if (!user.completedLevels?.length) return Number(user.progress) || 0;
  return Math.round(user.completedLevels.length /
    STAGE.reduce((count, stage) => count + stage.L.length, 0) * 100);
}
function assignmentIsForStudent(assignment, student) {
  if (Array.isArray(assignment.recipientIds)) return assignment.recipientIds.includes(student.id);
  if (assignment.studentId) return assignment.studentId === student.id;
  return false;
}
function assignmentsForStudent(data, student) {
  return data.assignments.filter((assignment) => assignmentIsForStudent(assignment, student));
}
function completeBookAssignments(data, studentId, bookId) {
  const student = data.users.find((user) => user.id === studentId);
  if (!student) return false;
  let completed = false;
  data.assignments.forEach((assignment) => {
    if (assignment.bookId !== bookId || !assignmentIsForStudent(assignment, student)) return;
    assignment.completedBy = Array.isArray(assignment.completedBy) ? assignment.completedBy : [];
    if (assignment.completedBy.includes(studentId)) return;
    assignment.completedBy.push(studentId);
    assignment.completedAt = assignment.completedAt || {};
    assignment.completedAt[studentId] = Date.now();
    completed = true;
  });
  return completed;
}
function newStudentProfile({ id, name, email, password, age, gender, parentId }) {
  return {
    id, role: "student", name, nameEn: name, email, password, age, gender, isDemo: false,
    ...(parentId ? { parentId } : {}),
    teacherIds: [], completedLevels: [], level: 1, stars: 0, streak: 0,
    books: 0, minutes: 0, readingSeconds: 0, readingHistory: {}, currentBook: "bibo", progress: 0,
    quiz: "pending", quizLevels: [], challengeCompletions: [], encouragements: [], note: ""
  };
}

const ROLE_SCREENS = {
  public: ["home", "about", "login", "signup", "onboarding", "reset-password", "checkout", "privacy", "schools", "help", "teacher-directory", "teacher-profile", "accessibility"],
  student: ["kid", "library", "reader", "quiz", "games", "game", "word-hunt", "word-builder", "avatar-builder", "student-profile", "accessibility"],
  parent: ["parent", "account-profile", "accessibility"],
  teacher: ["teacher", "teacher-students", "teacher-tasks", "account-profile", "classroom", "accessibility"],
  admin: ["admin", "admin-accounts", "admin-content", "admin-subscriptions", "admin-inbox"]
};

function canSee(screen, user) {
  if (ROLE_SCREENS.public.includes(screen)) return true;
  if (!user) return false;
  if (ROLE_SCREENS[user.role]?.includes(screen)) return true;
  return false;
}

function activeTeachers() {
  return db().users.filter((user) => user.role === "teacher" && user.active !== false);
}

function teacherSpecialtyTags(teacher) {
  const values = String(teacher.teacherSpecialties || "").split(",")
    .map((value) => value.trim()).filter(Boolean).slice(0, 8);
  return values.map((value) => `<span class="teacher-specialty">${escapeHtml(value)}</span>`).join("");
}

function teacherPortrait(teacher, className = "") {
  const classAttribute = className ? ` class="${className}"` : "";
  if (teacher.avatar) {
    return `<img${classAttribute} src="${escapeHtml(teacher.avatar)}" alt="${displayName(teacher)}" loading="lazy">`;
  }
  return `<span${classAttribute} aria-hidden="true">${uiIcon("teacher", 42)}</span>`;
}

function dateKey(date) {
  const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return localDate.toISOString().slice(0, 10);
}
function dailyMissionForStudent(date, student) {
  const day = Math.floor(new Date(`${date}T00:00:00`).getTime() / 86400000);
  const savedMission = student.dailyMission?.date === date ? student.dailyMission : null;
  const level = Number(savedMission?.level || student.level) || 1;
  const review = typeof savedMission?.review === "boolean"
    ? savedMission.review : student.quiz === "wrong";
  const currentBand = Math.min(3, Math.floor((level - 1) / 3));
  const band = review ? Math.max(0, currentBand - 1) : currentBand;
  const missions = t().dailyMissions[band];
  const index = Number.isInteger(savedMission?.index)
    ? savedMission.index : ((day % missions.length) + missions.length) % missions.length;
  return { ...missions[index], band, index, level, review };
}
function weekReadingMinutes(student) {
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - index);
    return Number(student.readingHistory?.[dateKey(date)]) || 0;
  }).reduce((total, seconds) => total + seconds, 0) / 60;
}

function readingCircleForStudent(data, student) {
  const teacherIds = Array.isArray(student.teacherIds) ? student.teacherIds : [];
  return data.users.filter((candidate) => {
    if (candidate.role !== "student") return false;
    if (candidate.id === student.id) return true;
    if (teacherIds.length) {
      return Array.isArray(candidate.teacherIds) &&
        candidate.teacherIds.some((teacherId) => teacherIds.includes(teacherId));
    }
    return Boolean(student.parentId && candidate.parentId === student.parentId);
  });
}
let keepFlash = false;
function saveReadingTime(milliseconds) {
  const user = sessionUser();
  const seconds = Math.floor(milliseconds / 1000);
  if (!user || user.role !== "student" || seconds <= 0) return;
  const data = db();
  const student = data.users.find((candidate) => candidate.id === user.id);
  student.readingSeconds = (Number(student.readingSeconds) || 0) + seconds;
  student.minutes = Math.floor(student.readingSeconds / 60);
  student.readingHistory = student.readingHistory || {};
  const todayDate = new Date();
  const today = dateKey(todayDate);
  student.readingHistory[today] = (Number(student.readingHistory[today]) || 0) + seconds;
  if (student.lastReadDate !== today) {
    const yesterdayDate = new Date(todayDate);
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    student.streak = !student.lastReadDate
      ? Math.max(1, Number(student.streak) || 0)
      : student.lastReadDate === dateKey(yesterdayDate)
        ? (Number(student.streak) || 0) + 1 : 1;
    student.lastReadDate = today;
  }
  save(data);
}
function go(screen, extra, options = {}) {
  if (!keepFlash) state.flash = "";
  keepFlash = false;
  const user = sessionUser();
  if (!canSee(screen, user)) {
    if (!user) return go("login");
    state.flash = t().noAccess;
    screen = homeFor(user.role);
  }
  const previousScreen = state.screen;
  if (!options.skipHistory && previousScreen !== screen) {
    state.screenHistory.push(previousScreen);
    if (state.screenHistory.length > 30) state.screenHistory.shift();
  }
  const now = Date.now();
  if (state.screen === "reader" &&
    (screen !== "reader" || (extra && extra.page !== undefined && extra.page !== state.page))) {
    stopReadingRecording();
  }
  if (state.screen === "reader" && state.segStart) state.accMs += now - state.segStart;
  if (state.screen === "reader" && screen !== "reader") {
    saveReadingTime(state.accMs);
    state.accMs = 0;
  }
  state.screen = screen;
  state.segStart = screen === "reader" ? now : null;
  state.now = now;
  if (extra) Object.assign(state, extra);
  if (screen !== "quiz") state.answer = null;
  window.scrollTo(0, 0);
  render();
}

function goBack(fallback) {
  const history = state.screenHistory;
  const previous = history.length ? history.pop() : fallback;
  go(previous || fallback, undefined, { skipHistory: true });
}

function resetLearningGames() {
  state.placed = [null, null, null];
  state.sel = null;
  state.letterGameRewardStatus = "";
  state.wordHuntRound = 0;
  state.wordHuntChoice = null;
  state.wordHuntAnswers = {};
  state.wordHuntRewardStatus = "";
  state.wordBuilderRound = 0;
  state.wordBuilderLetters = [];
  state.wordBuilderHistory = {};
  state.wordBuilderFeedback = "";
  state.wordBuilderRewardStatus = "";
}

function login(email, password) {
  const data = db();
  const user = data.users.find((u) => u.email.toLowerCase() === email.trim().toLowerCase() &&
    u.password === password && u.active !== false);
  if (!user) return false;
  user.lastLoginAt = Date.now();
  save(data);
  setSession(user.id);
  state.screenHistory = [];
  resetLearningGames();
  state.flash = t().welcomeRole;
  keepFlash = true;
  go(homeFor(user.role), undefined, { skipHistory: true });
  return true;
}

function logout() {
  clearPendingReadingRecording();
  setSession(null);
  state.screenHistory = [];
  state.editChildId = null;
  resetLearningGames();
  go("home", undefined, { skipHistory: true });
}

function upsertUser(user) {
  const data = db();
  const i = data.users.findIndex((u) => u.id === user.id);
  if (i >= 0) data.users[i] = user;
  else data.users.push(user);
  save(data);
}

function svg(path, w, h, stroke, fill) {
  return `<svg width="${w || 24}" height="${h || 24}" viewBox="0 0 24 24" aria-hidden="true"><path d="${path}" fill="${fill || "none"}" stroke="${stroke || "#fff"}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
}

function uiIcon(name, size = 26) {
  const paths = {
    bell: `<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z"/><path d="M10 21h4"/><circle cx="12" cy="5" r="1.2"/>`,
    trophy: `<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4ZM7 6H4v2a4 4 0 0 0 4 4M17 6h3v2a4 4 0 0 1-4 4"/>`,
    star: `<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"/>`,
    book: `<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21V5.5ZM4 5v16M8 7h8M8 11h7"/>`,
    medal: `<circle cx="12" cy="8" r="5"/><path d="m8.5 12-1.2 9L12 18l4.7 3-1.2-9M10 8l1.3 1.3L14 7"/>`,
    heart: `<path d="M20.8 8.8c0 4.4-8.8 10-8.8 10S3.2 13.2 3.2 8.8A4.3 4.3 0 0 1 12 6.5a4.3 4.3 0 0 1 8.8 2.3Z"/>`,
    message: `<path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H6l-3 2v-6.5A7.5 7.5 0 1 1 20 11.5Z"/><path d="M8 11h.01M12 11h.01M16 11h.01"/>`,
    family: `<circle cx="9" cy="7" r="3"/><circle cx="17" cy="8" r="2.5"/><path d="M3 20v-1a6 6 0 0 1 12 0v1H3ZM15 15a5 5 0 0 1 6 5h-4"/>`,
    goal: `<path d="M4 20V5m0 1h12l-2 3 2 3H4M8 16h12v4H8z"/>`,
    microphone: `<rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v4M9 22h6"/>`,
    teacher: `<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0M18 4l2 2-2 2M20 6h-5"/>`,
    check: `<path d="m5 12 4 4L19 6"/>`,
    moon: `<path d="M20 15.2A8.5 8.5 0 0 1 8.8 4a8.5 8.5 0 1 0 11.2 11.2Z"/>`,
    sun: `<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>`
  };
  return `<svg class="ui-icon ui-icon-${name}" width="${size}" height="${size}" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths[name] || paths.star}</g></svg>`;
}

function navBtn(key, label, colors, active) {
  const [deep, mid, soft] = colors;
  return `<button class="nav-btn ${active ? "is-active" : ""}" data-go="${key}" style="--nav-deep:${deep};--nav-mid:${mid};--nav-soft:${soft}">${label}</button>`;
}

function setMobileMenuOpen(open, button) {
  const nav = document.getElementById("primary-navigation");
  if (!nav || !button) return;
  nav.classList.toggle("is-open", open);
  button.setAttribute("aria-expanded", String(open));
  button.setAttribute("aria-label", open
    ? (ar() ? "إغلاق القائمة" : "Close menu")
    : (ar() ? "فتح القائمة" : "Open menu"));
}

function notificationItems(user) {
  if (!user) return [];
  const data = db();
  const arMode = ar();

  if (user.role === "student") {
    return (user.encouragements || [])
      .slice()
      .sort((a, b) => Number(b.at) - Number(a.at))
      .slice(0, 8)
      .map((message) => {
        const senderRole = message.senderRole === "teacher"
          ? (arMode ? "المعلم" : "Teacher")
          : message.senderRole === "parent"
            ? (arMode ? "ولي الأمر" : "Parent")
            : (arMode ? "الدعم" : "Support");
        const senderName = String(message.senderName || "").trim();
        return {
          title: arMode ? "رسالة تشجيع جديدة" : "New encouragement",
          sender: senderName ? `${senderRole} · ${senderName}` : senderRole,
          text: message.text,
          time: message.at ? new Date(message.at).toLocaleString(arMode ? "ar-EG" : "en-US", { hour: "2-digit", minute: "2-digit" }) : ""
        };
      });
  }

  if (user.role === "parent") {
    const children = data.users.filter((student) => student.role === "student" &&
      (student.parentId === user.id || user.childIds?.includes(student.id)));
    const items = [];
    children.forEach((child) => {
      const homework = assignmentsForStudent(data, child)
        .filter((assignment) => !(assignment.completedBy || []).includes(child.id))
        .slice(0, 3);
      homework.forEach((assignment) => items.push({
        title: arMode ? `واجب جديد لـ${displayName(child)}` : `New homework for ${displayName(child)}`,
        sender: arMode ? "المعلم" : "Teacher",
        text: findBook(assignment.bookId) ? bookTitle(findBook(assignment.bookId)) : (assignment.title || ""),
        time: assignment.createdAt ? new Date(assignment.createdAt).toLocaleDateString(arMode ? "ar-EG" : "en-US") : ""
      }));
      (child.encouragements || []).slice(0, 2).forEach((message) => items.push({
        title: arMode ? `تحديث لـ${displayName(child)}` : `Update for ${displayName(child)}`,
        sender: message.senderName
          ? `${message.senderRole === "teacher" ? (arMode ? "المعلم" : "Teacher") : (arMode ? "الدعم" : "Support")} · ${message.senderName}`
          : (arMode ? "رسالة تشجيع" : "Encouragement"),
        text: message.text,
        time: message.at ? new Date(message.at).toLocaleTimeString(arMode ? "ar-EG" : "en-US", { hour: "2-digit", minute: "2-digit" }) : ""
      }));
    });
    return items.slice(0, 8);
  }

  if (user.role === "teacher") {
    const students = studentsForTeacher(data, user);
    const items = [];
    data.assignments
      .filter((assignment) => assignment.teacherId === user.id)
      .slice(0, 4)
      .forEach((assignment) => items.push({
        title: arMode ? "تم نشر واجب قراءة" : "Reading assignment published",
        sender: arMode ? `المعلم · ${displayName(user)}` : `Teacher · ${displayName(user)}`,
        text: assignment.title || (findBook(assignment.bookId) ? bookTitle(findBook(assignment.bookId)) : ""),
        time: assignment.createdAt ? new Date(assignment.createdAt).toLocaleDateString(arMode ? "ar-EG" : "en-US") : ""
      }));
    data.recordings
      .filter((recording) => students.some((student) => student.id === recording.studentId))
      .slice(0, 4)
      .forEach((recording) => {
        const student = students.find((candidate) => candidate.id === recording.studentId);
        items.push({
          title: arMode ? "تسجيل قراءة جديد" : "New reading recording",
          sender: student ? `${arMode ? "الطالب" : "Student"} · ${displayName(student)}` : (arMode ? "طالب" : "Student"),
          text: student ? displayName(student) : "",
          time: recording.createdAt ? new Date(recording.createdAt).toLocaleTimeString(arMode ? "ar-EG" : "en-US", { hour: "2-digit", minute: "2-digit" }) : ""
        });
      });
    return items.slice(0, 8);
  }

  if (user.role === "admin") {
    return data.contacts
      .filter((message) => !message.readAt)
      .sort((a, b) => Number(b.at) - Number(a.at))
      .slice(0, 8)
      .map((message) => ({
        title: arMode ? "رسالة دعم جديدة" : "New support message",
        sender: message.name || (message.email || (arMode ? "زائر" : "Visitor")),
        text: message.message || "",
        time: message.at ? new Date(message.at).toLocaleString(arMode ? "ar-EG" : "en-US", { hour: "2-digit", minute: "2-digit" }) : ""
      }));
  }

  return [];
}

function header() {
  const user = sessionUser();
  const tt = t();
  const s = state.screen;
  let items = "";
  const NC = {
    home: ["#1e88d6", "#4fc3f7", "#e3f5fd"],
    "teacher-directory": ["#6b4bbd", "#9575cd", "#f1ebfb"],
    kid: ["#3f9a38", "#6cc551", "#eef9e8"],
    "student-profile": ["#006b70", "#2ec4b6", "#e0f7f5"],
    library: ["#c2185b", "#e91e63", "#fdeef4"],
    games: ["#a86b00", "#ffc107", "#fff6dc"],
    parent: ["#7e57c2", "#9575cd", "#f1ebfb"],
    teacher: ["#d0592a", "#ff8a65", "#fff0ea"],
    "account-profile": ["#006b70", "#2ec4b6", "#e0f7f5"],
    admin: ["#6b4bbd", "#9575cd", "#f1ebfb"],
    "admin-accounts": ["#1e88d6", "#4fc3f7", "#e3f5fd"],
    "admin-content": ["#d63a72", "#f06292", "#fdeef4"],
    "admin-subscriptions": ["#a86b00", "#ffc107", "#fff6dc"],
    "admin-inbox": ["#006b70", "#2ec4b6", "#e0f7f5"],
    "teacher-students": ["#1e88d6", "#4fc3f7", "#e3f5fd"],
    "teacher-tasks": ["#a86b00", "#ffc107", "#fff6dc"],
    about: ["#ad3e64", "#e06a8c", "#fdeef4"]
  };
  if (!user) {
    items += navBtn("home", tt.home, NC.home, s === "home");
    items += navBtn("library", ar() ? "المكتبة" : "Library", NC.library, s === "library");
    items += navBtn("teacher-directory", ar() ? "معلمينا" : "Our teachers", NC["teacher-directory"], s === "teacher-directory");
    items += navBtn("schools", ar() ? "للمدارس" : "For schools", NC.teacher, s === "schools");
    items += navBtn("about", tt.about, NC.about, s === "about");
  } else if (user.role === "student") {
    items += navBtn("kid", tt.kid, NC.kid, s === "kid");
    items += navBtn("library", tt.library, NC.library, s === "library" || s === "reader" || s === "quiz");
    items += navBtn("games", tt.gamesTitle, NC.games, ["games", "game", "word-hunt", "word-builder", "avatar-builder"].includes(s));
    items += navBtn("student-profile", tt.studentProfile, NC["student-profile"], s === "student-profile");
  } else if (user.role === "parent") {
    items += navBtn("parent", tt.parents, NC.parent, s === "parent");
    items += navBtn("account-profile", tt.studentProfile, NC["account-profile"], s === "account-profile");
    items += navBtn("about", tt.about, NC.about, s === "about");
  } else if (user.role === "teacher") {
    items += navBtn("teacher", tt.myClass, NC.teacher, s === "teacher");
    items += navBtn("teacher-students", tt.students, NC["teacher-students"], s === "teacher-students");
    items += navBtn("teacher-tasks", tt.tasks, NC["teacher-tasks"], s === "teacher-tasks");
    items += navBtn("classroom", ar() ? "الفصول" : "Classes", NC.kid, s === "classroom");
    items += navBtn("account-profile", tt.studentProfile, NC["account-profile"], s === "account-profile");
  } else if (user.role === "admin") {
    const newMessageCount = db().contacts.filter((message) => !message.readAt).length;
    items += navBtn("admin", tt.adminDashboard, NC.admin, s === "admin");
    items += navBtn("admin-accounts", tt.adminAccounts, NC["admin-accounts"], s === "admin-accounts");
    items += navBtn("admin-content", tt.adminContent, NC["admin-content"], s === "admin-content");
    items += navBtn("admin-subscriptions", tt.adminSubscriptions, NC["admin-subscriptions"], s === "admin-subscriptions");
    items += navBtn("admin-inbox", `${tt.adminInbox}${newMessageCount ? ` · ${newMessageCount}` : ""}`, NC["admin-inbox"], s === "admin-inbox");
  }

  let actions = `<button class="btn btn-ghost" data-act="lang">${tt.otherLang}</button>
    <button class="theme-toggle-button" type="button" data-act="theme" aria-label="${state.visualMode === "dark" ? (ar() ? "التبديل للوضع المعتاد" : "Switch to standard mode") : (ar() ? "التبديل للوضع الليلي" : "Switch to night mode")}" title="${state.visualMode === "dark" ? (ar() ? "الوضع المعتاد" : "Standard") : (ar() ? "الوضع الليلي" : "Night")}">
      ${uiIcon(state.visualMode === "dark" ? "sun" : "moon", 21)}
    </button>`;
  if (!user) {
    actions += `<button class="btn btn-ghost" data-go="login">${tt.login}</button>`;
    actions += `<button class="btn btn-green" data-go="signup">${tt.startFree}</button>`;
  } else {
    const colors = { student: "#6cc551", parent: "#7e57c2", teacher: "#ff8a65", admin: "#9575cd" };
    const labels = { student: tt.student, parent: tt.parentRole, teacher: tt.teacherRole, admin: tt.adminRole };
    const notifications = notificationItems(user);
    const notificationCount = notifications.length;
    actions += `<div class="notification-wrap">
      <button class="notification-button" type="button" data-act="notifications" aria-label="${ar() ? "الإشعارات" : "Notifications"}">
        ${uiIcon("bell", 22)}
        ${notificationCount ? `<span>${notificationCount}</span>` : ""}
      </button>
      ${state.notificationsOpen ? `<div class="notification-panel">
        <strong>${ar() ? "الإشعارات" : "Notifications"}</strong>
        ${notificationCount
          ? `<div class="notification-list">${notifications.map((item) => `<article class="notification-item">
              <span class="notification-dot"></span>
              <div><strong>${escapeHtml(item.title)}</strong>${item.sender ? `<span class="notification-sender">${escapeHtml(item.sender)}</span>` : ""}<p>${escapeHtml(item.text)}</p>${item.time ? `<time>${escapeHtml(item.time)}</time>` : ""}</div>
            </article>`).join("")}</div>`
          : `<p class="muted">${ar() ? "لا توجد إشعارات جديدة." : "No new notifications."}</p>`}
      </div>` : ""}
    </div>`;
    const userAvatar = user.role === "student" || user.avatar
      ? `<img src="${escapeHtml(user.avatar || "assets/avatar.jpg")}" alt="">`
      : `<span class="user-chip-initial" style="--user-role-color:${colors[user.role]}" aria-hidden="true">${escapeHtml(displayName(user).slice(0, 1))}</span>`;
    actions += `<span class="user-chip" aria-label="${escapeHtml(`${labels[user.role]} · ${displayName(user)}`)}">
      ${userAvatar}<strong>${escapeHtml(displayName(user))}</strong>
    </span>`;
    actions += `<button class="btn btn-muted" data-act="logout">${tt.logout}</button>`;
  }
  return `<header class="header ${user?.role === "admin" ? "admin-header" : ""}"><div class="wrap header-inner">
    <button class="brand" data-go="${user ? homeFor(user.role) : "home"}">
      <img src="assets/logo.jpg" alt="">
      <span class="brand-name"><strong>${tt.brand}</strong><span>${tt.brandSub}</span></span>
    </button>
    <button class="menu-toggle" type="button" data-act="mobile-menu" aria-label="${ar() ? "فتح القائمة" : "Open menu"}" aria-expanded="false" aria-controls="primary-navigation">
      <span class="menu-toggle-lines" aria-hidden="true"><i></i><i></i><i></i></span>
    </button>
    <nav class="nav" id="primary-navigation" aria-label="Main">${items}</nav>
    <div class="header-actions">${actions}</div>
  </div></header>`;
}

function footer() {
  const tt = t();
  return `<footer class="footer"><div class="wrap footer-inner">
    <div style="display:flex;align-items:center;gap:12px">
      <img src="assets/logo.jpg" alt="" style="width:56px;height:56px;border-radius:16px">
      <span style="font-size:22px;font-weight:800;color:#ffd54f">${tt.slogan}</span>
    </div>
    <div>
      <button class="footer-link" data-go="about">${tt.about}</button>
      <button class="footer-link" data-go="about" data-contact="1">${tt.contact}</button>
      <button class="footer-link" data-go="schools">${ar() ? "للمدارس" : "For schools"}</button>
      <button class="footer-link" data-go="privacy">${ar() ? "الخصوصية" : "Privacy"}</button>
      <button class="footer-link" data-go="help">${ar() ? "المساعدة" : "Help"}</button>
      <button class="footer-link" data-go="accessibility">${ar() ? "إتاحة الوصول" : "Accessibility"}</button>
    </div>
    <span class="copy">© موقع درب البيان — جميع الحقوق محفوظة | © Darb Al-Bayan Website — All Rights Reserved</span>
  </div></footer>`;
}

function onboardingView() {
  const arMode = ar();
  const steps = arMode
    ? ["أخبرنا عن الطالب", "اختر اهتمامات القراءة", "حدد هدفه الأسبوعي"]
    : ["Tell us about the learner", "Choose reading interests", "Set a weekly goal"];
  const interests = arMode
    ? [["حكايات", "stories"], ["القرآن", "quran"], ["الأخلاق", "values"], ["الحيوانات", "animals"], ["المغامرات", "adventure"], ["المعلومات", "knowledge"]]
    : [["Stories", "stories"], ["Quran", "quran"], ["Values", "values"], ["Animals", "animals"], ["Adventure", "adventure"], ["Knowledge", "knowledge"]];
  return `<section class="onboarding-page">
    <div class="onboarding-progress">${steps.map((step, i) => `<div class="${i <= state.onboardingStep ? "active" : ""}"><span>${i + 1}</span><strong>${step}</strong></div>`).join("")}</div>
    ${state.onboardingStep === 0 ? `<div class="onboarding-step-card onboarding-age-step">
      <span class="pill">${arMode ? "تجربة مخصصة" : "Personalized setup"}</span>
      <h1>${arMode ? "لنصنع رحلة تناسب طفلك" : "Let’s create the right journey"}</h1>
      <p class="muted">${arMode ? "نستخدم هذه الإجابات لتفضّل الكتب والألعاب المناسبة." : "These answers personalize books and learning games."}</p>
      <div class="onboarding-options">
        <button class="onboarding-option ${state.onboardingAge === 5 ? "selected" : ""}" data-onboarding-age="5"><strong>4–6</strong><span>${arMode ? "البراعم" : "Sprouts"}</span></button>
        <button class="onboarding-option ${state.onboardingAge === 8 ? "selected" : ""}" data-onboarding-age="8"><strong>7–9</strong><span>${arMode ? "الزهور" : "Flowers"}</span></button>
        <button class="onboarding-option ${state.onboardingAge === 11 ? "selected" : ""}" data-onboarding-age="11"><strong>10–12</strong><span>${arMode ? "الفرسان" : "Knights"}</span></button>
      </div>
    </div>` : ""}
    ${state.onboardingStep === 1 ? `<div class="onboarding-step-card">
      <h1>${arMode ? "ما الذي يحب؟" : "What does the learner enjoy?"}</h1>
      <p class="muted">${arMode ? "اختر موضوعًا واحدًا أو أكثر." : "Choose one or more interests."}</p>
      <div class="interest-grid">${interests.map(([label, value]) => `<button class="interest-chip ${state.onboardingInterests.includes(value) ? "selected" : ""}" data-onboarding-interest="${value}">${label}</button>`).join("")}</div>
    </div>` : ""}
    ${state.onboardingStep === 2 ? `<div class="onboarding-step-card">
      <h1>${arMode ? "اختر هدف القراءة" : "Choose a reading goal"}</h1>
      <div class="goal-grid">
        <button class="goal-card ${state.onboardingGoalMins === 15 ? "selected" : ""}" data-onboarding-goal="15"><strong>15</strong><span>${arMode ? "دقيقة يوميًا" : "minutes daily"}</span></button>
        <button class="goal-card ${state.onboardingGoalMins === 30 ? "selected" : ""}" data-onboarding-goal="30"><strong>30</strong><span>${arMode ? "دقيقة يوميًا" : "minutes daily"}</span></button>
        <button class="goal-card ${state.onboardingGoalMins === 45 ? "selected" : ""}" data-onboarding-goal="45"><strong>45</strong><span>${arMode ? "دقيقة يوميًا" : "minutes daily"}</span></button>
      </div>
    </div>` : ""}
    <div class="onboarding-actions">
      ${state.onboardingStep > 0 ? `<button class="btn btn-muted" data-onboarding-back>${arMode ? "السابق" : "Back"}</button>` : ""}
      ${state.onboardingStep < 2 ? `<button class="btn btn-blue" data-onboarding-next>${arMode ? "المتابعة" : "Continue"}</button>` : `<button class="btn btn-green" data-onboarding-finish>${arMode ? "ابدأ رحلتي" : "Start my journey"}</button>`}
    </div>
  </section>`;
}

function classroomView() {
  const arMode = ar();
  const user = sessionUser();
  const data = db();
  const classes = (data.classes || []).filter((item) => item.teacherId === user?.id);
  const students = studentsForTeacher(data, user);
  return `<section class="classroom-page">
    <header class="classroom-heading"><div><span class="pill">${arMode ? "إدارة الفصول" : "Classroom management"}</span><h1>${arMode ? "فصولي" : "My classes"}</h1></div><button class="btn btn-blue" data-act="new-class">${arMode ? "+ فصل جديد" : "+ New class"}</button></header>
    <form class="classroom-create" id="classroom-create-form" hidden>
      <div class="classroom-create-main">
        <label>${arMode ? "اسم الفصل" : "Class name"}<input name="className" value="${escapeHtml(state.classroomDraft)}" placeholder="${arMode ? "مثال: فصل براعم أ" : "Example: Sprouts A"}" required></label>
        <fieldset class="classroom-student-picker">
          <legend>${arMode ? "اختيار الطلاب" : "Choose students"}</legend>
          <label class="classroom-student-search">
            ${arMode ? "بحث بالاسم أو البريد" : "Search by name or email"}
            <input type="search" data-classroom-search placeholder="${arMode ? "اكتب اسم الطالب أو بريده" : "Type a student name or email"}" autocomplete="off">
          </label>
          ${students.length
            ? students.map((student) => `<label class="classroom-student-choice" data-student-search="${escapeHtml(`${displayName(student)} ${student.nameEn || ""} ${student.email || ""}`.toLowerCase())}"><input type="checkbox" name="studentIds" value="${escapeHtml(student.id)}"><span>${escapeHtml(displayName(student))}</span><small>${escapeHtml(student.email)}</small></label>`).join("")
            : `<p class="muted">${arMode ? "لا يوجد طلاب مرتبطون بك بعد." : "No linked students yet."}</p>`}
        </fieldset>
      </div>
      <button class="btn btn-green" type="submit">${arMode ? "إنشاء الفصل" : "Create class"}</button>
    </form>
    ${classes.length ? `<div class="classroom-grid">${classes.map((item) => {
      const assigned = data.assignments.filter((assignment) => assignment.teacherId === user.id &&
        (!item.studentIds?.length || item.studentIds.some((id) => assignment.recipientIds?.includes(id))));
      const classStudents = students.filter((student) => item.studentIds?.includes(student.id));
      return `<article class="card classroom-card">
        <div class="classroom-card-head"><span class="role-tag" style="background:#6cc551">${arMode ? "نشط" : "Active"}</span><strong>${escapeHtml(item.name)}</strong></div>
        <div class="classroom-stats"><span><b>${classStudents.length}</b>${arMode ? "طالبًا" : "students"}</span><span><b>${assigned.length}</b>${arMode ? "واجبات" : "assignments"}</span><span><b>0%</b>${arMode ? "متوسط التقدم" : "avg. progress"}</span></div>
        ${classStudents.length ? `<div class="classroom-members">${classStudents.map((student) => `<span>${escapeHtml(displayName(student))}</span>`).join("")}</div>` : `<p class="muted">${arMode ? "لا يوجد طلاب في هذا الفصل." : "No students in this class."}</p>`}
        ${state.viewClass === item.id
          ? `<form class="classroom-edit" data-edit-class="${escapeHtml(item.id)}">
              <label>${arMode ? "اسم الفصل" : "Class name"}<input name="className" value="${escapeHtml(item.name)}" required></label>
              <fieldset class="classroom-student-picker">
                <legend>${arMode ? "طلاب الفصل" : "Class students"}</legend>
                <label class="classroom-student-search">
                  ${arMode ? "بحث بالاسم أو البريد" : "Search by name or email"}
                  <input type="search" data-classroom-search placeholder="${arMode ? "اكتب اسم الطالب أو بريده" : "Type a student name or email"}" autocomplete="off">
                </label>
                ${students.map((student) => `<label class="classroom-student-choice" data-student-search="${escapeHtml(`${displayName(student)} ${student.nameEn || ""} ${student.email || ""}`.toLowerCase())}"><input type="checkbox" name="studentIds" value="${escapeHtml(student.id)}" ${item.studentIds?.includes(student.id) ? "checked" : ""}><span>${escapeHtml(displayName(student))}</span><small>${escapeHtml(student.email)}</small></label>`).join("")}
              </fieldset>
              <button class="btn btn-green" type="submit">${arMode ? "حفظ الطلاب" : "Save students"}</button>
            </form>`
          : ""}
        ${!state.viewClass || state.viewClass !== item.id
          ? `<div class="classroom-quick-add">
              <label>${arMode ? "إضافة طالب للفصل" : "Add student to class"}
                <input type="search" data-classroom-add-search="${escapeHtml(item.id)}" placeholder="${arMode ? "الاسم أو البريد" : "Name or email"}" autocomplete="off">
              </label>
              <div class="classroom-add-results">
                ${students.filter((student) => !item.studentIds?.includes(student.id)).map((student) =>
                  `<button type="button" class="classroom-add-result" data-add-student-class="${escapeHtml(item.id)}" data-student-id="${escapeHtml(student.id)}" data-student-search="${escapeHtml(`${displayName(student)} ${student.nameEn || ""} ${student.email || ""}`.toLowerCase())}">
                    <span><strong>${escapeHtml(displayName(student))}</strong><small>${escapeHtml(student.email)}</small></span><b>${arMode ? "+ إضافة" : "+ Add"}</b>
                  </button>`).join("") || `<p class="muted">${arMode ? "جميع طلابك مرتبطون بهذا الفصل." : "All your students are already in this class."}</p>`}
              </div>
            </div>`
          : ""}
        <div class="classroom-card-actions">
          <button class="btn btn-ghost" data-edit-class-open="${escapeHtml(item.id)}">${arMode ? "تعديل الفصل" : "Edit class"}</button>
          <button class="btn btn-red" data-delete-class="${escapeHtml(item.id)}">${arMode ? "حذف الفصل" : "Delete class"}</button>
        </div>
      </article>`;
    }).join("")}</div>` : `<div class="card teacher-directory-empty"><strong>${arMode ? "لم تُنشئ فصولًا بعد" : "You haven’t created a class yet"}</strong><span class="muted">${arMode ? "أنشئ فصلًا ثم أضف طلابك من حسابات مرتبطة." : "Create a class, then add linked students."}</span></div>`}
  </section>`;
}

function accessibilityView() {
  const arMode = ar();
  const mode = state.accessibilityMode;
  return `<section class="accessibility-page">
    <header><span class="pill">${arMode ? "إتاحة الوصول" : "Accessibility"}</span><h1>${arMode ? "تفضيلات القراءة والعرض" : "Reading and display preferences"}</h1></header>
    <div class="accessibility-grid">
      <article class="card"><h2>${arMode ? "كثافة الحركة" : "Motion"}</h2><button class="chip ${mode === "standard" ? "on" : ""}" data-accessibility="standard" style="${mode === "standard" ? "background:#29a9e8" : ""}">${arMode ? "قياسي" : "Standard"}</button><button class="chip ${mode === "reduced" ? "on" : ""}" data-accessibility="reduced" style="${mode === "reduced" ? "background:#6cc551" : ""}">${arMode ? "حركة أقل" : "Reduce motion"}</button></article>
      <article class="card"><h2>${arMode ? "الوضع البصري" : "Visual mode"}</h2><button class="chip ${state.visualMode === "dark" ? "on" : ""}" data-visual="dark" style="${state.visualMode === "dark" ? "background:#435174" : ""}">${arMode ? "الوضع الليلي" : "Night mode"}</button><button class="chip ${state.visualMode === "standard" ? "on" : ""}" data-visual="standard" style="${state.visualMode === "standard" ? "background:#29a9e8" : ""}">${arMode ? "الوضع المعتاد" : "Standard"}</button></article>
      <article class="card"><h2>${arMode ? "حجم الخط" : "Text size"}</h2><div class="font-size-switch"><button data-font-size="small" class="${state.fontSize === "small" ? "selected" : ""}">A</button><button data-font-size="standard" class="${state.fontSize === "standard" ? "selected" : ""}">A</button><button data-font-size="large" class="${state.fontSize === "large" ? "selected" : ""}">A</button></div></article>
    </div>
  </section>`;
}

function resetPasswordView() {
  const arMode = ar();
  return `${flashBar()}<section class="auth-public-page">
    <button class="btn btn-ghost" data-go="login">← ${arMode ? "العودة لتسجيل الدخول" : "Back to login"}</button>
    <form class="form-card auth-narrow-card" id="reset-password-form">
      <span class="pill">${arMode ? "استعادة الوصول" : "Account recovery"}</span>
      <h1>${arMode ? "إعادة تعيين كلمة المرور" : "Reset your password"}</h1>
      <p class="muted">${arMode ? "أعد تعيين كلمة مرور حساب موجود على هذا الجهاز." : "Reset the password of an account stored on this device."}</p>
      <label>${arMode ? "البريد الإلكتروني" : "Email"}<input name="email" type="email" dir="ltr" autocomplete="email" required></label>
      <label>${arMode ? "كلمة المرور الجديدة" : "New password"}<input name="newPassword" type="password" minlength="6" autocomplete="new-password" required></label>
      <label>${arMode ? "تأكيد كلمة المرور" : "Confirm password"}<input name="confirmPassword" type="password" minlength="6" autocomplete="new-password" required></label>
      <button class="btn btn-xl btn-blue" type="submit">${arMode ? "حفظ كلمة المرور" : "Save password"}</button>
    </form>
  </section>`;
}

function checkoutView() {
  const arMode = ar();
  const yearly = state.checkoutPlan !== "monthly";
  const user = sessionUser();
  if (state.checkoutBook) {
    const book = findBook(state.checkoutBook);
    if (!user || user.role !== "student" || !book) {
      state.checkoutBook = null;
      return `<section class="checkout-page"><div class="alert alert-info">${arMode ? "سجّل دخول طالب للشراء." : "Sign in as a student to purchase."}</div></section>`;
    }
    if (!user.isDemo) {
      return `${flashBar()}<section class="checkout-page">
        <header class="checkout-heading"><span class="pill">${t().paidContent}</span><h1>${t().purchaseCheckout}</h1><p class="muted">${arMode ? "سيتم تفعيل الدفع عند ربط مزود الدفع." : "Payment will be enabled after connecting a payment provider."}</p></header>
        <div class="card"><strong>${bookTitle(book)}</strong><p class="muted">${book.purchasePrice || 0} ${arMode ? "ر.س" : "SAR"}</p><button class="btn btn-green" data-go="library">${t().library}</button></div>
      </section>`;
    }
    return `${flashBar()}<section class="checkout-page">
      <header class="checkout-heading"><span class="pill">${t().paidContent}</span><h1>${t().purchaseCheckout}</h1><p class="muted">${t().purchaseDemoHint}</p></header>
      <div class="checkout-layout">
        <form class="form-card checkout-form" id="checkout-form">
          <h2>${t().buyBook}</h2>
          <strong>${bookTitle(book)}</strong>
          <label>${arMode ? "الاسم على البطاقة" : "Name on card"}<input name="cardName" autocomplete="cc-name" required></label>
          <label>${arMode ? "رقم البطاقة التجريبية" : "Demo card number"}<input name="cardNumber" inputmode="numeric" autocomplete="off" placeholder="4242 4242 4242 4242" required></label>
          <div class="checkout-row"><label>${arMode ? "انتهاء الصلاحية" : "Expiry"}<input name="expiry" placeholder="MM / YY" required></label><label>CVC<input name="cvc" inputmode="numeric" autocomplete="off" placeholder="123" required></label></div>
          <button class="btn btn-xl btn-buy checkout-buy-btn" type="submit"><strong>${t().buyBook}</strong></button>
        </form>
        <aside class="checkout-summary"><h2>${arMode ? "ملخص الطلب" : "Order summary"}</h2><div><span>${bookTitle(book)}</span><strong>${book.purchasePrice || 0} ${arMode ? "ر.س" : "SAR"}</strong></div></aside>
      </div>
    </section>`;
  }
  if (!user?.isDemo) {
    return `${flashBar()}<section class="checkout-page">
      <header class="checkout-heading"><span class="pill">${arMode ? "الاشتراكات" : "Subscriptions"}</span><h1>${arMode ? "الدفع سيُفعّل عند ربط مزود الدفع" : "Checkout is ready for a payment provider"}</h1><p class="muted">${arMode ? "لن تُخصم أي مبالغ ولن تُنشأ اشتراكات وهمية حتى اكتمال الربط." : "No charges or synthetic subscriptions will be created until provider connection."}</p></header>
      <div class="card"><h2>${arMode ? "حسابك يعمل حاليًا بالخطة المجانية" : "Your account currently uses the free plan"}</h2><p class="muted">${arMode ? "يمكنك الاستمرار في القراءة والألعاب والتجربة الكاملة المتاحة." : "Continue reading, playing games and using all currently available features."}</p><button class="btn btn-green" data-go="${user ? homeFor(user.role) : "signup"}">${arMode ? "متابعة" : "Continue"}</button></div>
    </section>`;
  }
  return `${flashBar()}<section class="checkout-page">
    <header class="checkout-heading">
      <span class="pill">${arMode ? "إتمام الاشتراك" : "Complete your subscription"}</span>
      <h1>${arMode ? "اختر الخطة المناسبة لعائلتك" : "Choose the plan that fits your family"}</h1>
      <p class="muted">${arMode ? "دفع تجريبي — لن يتم خصم أي مبلغ أو ربط بطاقة حقيقية." : "Demo checkout — no charge or real card connection."}</p>
    </header>
    <div class="checkout-layout">
      <form class="form-card checkout-form" id="checkout-form">
        <h2>${arMode ? "بيانات الاشتراك" : "Subscription details"}</h2>
        <div class="checkout-plans">
          <button type="button" class="checkout-plan ${yearly ? "" : "selected"}" data-checkout-plan="monthly">
            <strong>${arMode ? "شهري" : "Monthly"}</strong><span>49 ${arMode ? "ر.س / شهر" : "SAR / month"}</span>
          </button>
          <button type="button" class="checkout-plan ${yearly ? "selected" : ""}" data-checkout-plan="yearly">
            <strong>${arMode ? "سنوي" : "Yearly"}</strong><span>390 ${arMode ? "ر.س / سنة" : "SAR / year"}</span><small>${arMode ? "الأفضل قيمة" : "Better value"}</small>
          </button>
        </div>
        <label>${arMode ? "الاسم على البطاقة" : "Name on card"}<input name="cardName" autocomplete="cc-name" required></label>
        <label>${arMode ? "رقم البطاقة التجريبية" : "Demo card number"}<input name="cardNumber" inputmode="numeric" autocomplete="off" placeholder="4242 4242 4242 4242" required></label>
        <div class="checkout-row">
          <label>${arMode ? "انتهاء الصلاحية" : "Expiry"}<input name="expiry" placeholder="MM / YY" required></label>
          <label>CVC<input name="cvc" inputmode="numeric" autocomplete="off" placeholder="123" required></label>
        </div>
        <label class="consent-row"><input type="checkbox" required><span>${arMode ? "أوافق على شروط الاشتراك وسياسة الخصوصية." : "I agree to the subscription terms and privacy policy."}</span></label>
        <button class="btn btn-xl btn-pink" type="submit">${arMode ? "تأكيد الاشتراك التجريبي" : "Confirm demo subscription"}</button>
      </form>
      <aside class="checkout-summary">
        <h2>${arMode ? "ملخص الطلب" : "Order summary"}</h2>
        <div><span>${yearly ? (arMode ? "الخطة السنوية" : "Yearly plan") : (arMode ? "الخطة الشهرية" : "Monthly plan")}</span><strong>${yearly ? "390" : "49"} ${arMode ? "ر.س" : "SAR"}</strong></div>
        <div><span>${arMode ? "حتى 3 أطفال" : "Up to 3 children"}</span><strong>✓</strong></div>
        <div><span>${arMode ? "كل اللغتين" : "Both languages"}</span><strong>✓</strong></div>
        <div><span>${arMode ? "إلغاء في أي وقت" : "Cancel anytime"}</span><strong>✓</strong></div>
      </aside>
    </div>
  </section>
  <section class="school-cta">
    <div><span class="pill">${ar() ? "للمدارس والمعلمين" : "For schools and teachers"}</span><h2>${ar() ? "اجعل القراءة تجربة للفصل كله" : "Make reading a classroom experience"}</h2><p>${ar() ? "إدارة الفصول والواجبات وتقارير التقدم من مكان واحد." : "Manage classes, assignments and progress reports in one place."}</p></div>
    <button class="btn btn-lg btn-blue" data-go="schools">${ar() ? "استكشف حلول المدارس" : "Explore school solutions"}</button>
  </section>
  <section class="home-faq">
    <div class="section-head"><h2>${ar() ? "أسئلة شائعة" : "Frequently asked questions"}</h2><button class="btn btn-ghost" data-go="help">${ar() ? "المزيد من المساعدة" : "More help"}</button></div>
    <details><summary>${ar() ? "هل يناسب الموقع مستويي؟" : "Does it fit my child’s level?"}</summary><p>${ar() ? "يبدأ جميع الطلاب بالمستوى الأول، ثم يتدرجون حسب التقدم والكتب المكتملة." : "Every student starts at level one and progresses through completed books."}</p></details>
    <details><summary>${ar() ? "هل يمكن للأخوة مشاركة الاشتراك؟" : "Can siblings share a subscription?"}</summary><p>${ar() ? "الخطة العائلية تدعم حتى ثلاثة حسابات للأطفال." : "The family plan supports up to three child accounts."}</p></details>
  </section>`;
}

function privacyView() {
  const arMode = ar();
  return `<section class="policy-page">
    <span class="pill">${arMode ? "الخصوصية والأمان" : "Privacy & safety"}</span>
    <h1>${arMode ? "خصوصية طفلك أساس تجربتنا" : "Your child’s privacy comes first"}</h1>
    <div class="policy-grid">
      <article class="card"><h2>${arMode ? "بيانات أقل" : "Collect less"}</h2><p>${arMode ? "نجمع فقط البيانات اللازمة للتعلّم والمتابعة." : "We collect only the data needed for learning and family progress."}</p></article>
      <article class="card"><h2>${arMode ? "موافقة ولي الأمر" : "Parent consent"}</h2><p>${arMode ? "حساب الطفل مرتبط بوضوح بحساب ولي أمر." : "Every child account is clearly linked to a parent or guardian."}</p></article>
      <article class="card"><h2>${arMode ? "تحكم كامل" : "Clear control"}</h2><p>${arMode ? "يمكن تعديل الحساب وطلب حذف البيانات من خلال الخدمة الكاملة." : "Account updates and data deletion are included in the production service."}</p></article>
      <article class="card"><h2>${arMode ? "تسجيلات آمنة" : "Safer recordings"}</h2><p>${arMode ? "التسجيلات مقيدة بالحسابات المصرح لها فقط." : "Voice recordings remain restricted to authorized family and teacher accounts."}</p></article>
    </div>
  </section>`;
}

function schoolsView() {
  const arMode = ar();
  return `<section class="school-page">
    <header class="school-hero">
      <div><span class="pill">${arMode ? "درب البيان للمدارس" : "Darb Al-Bayan for Schools"}</span><h1>${arMode ? "برنامج قراءة لمعلميك وطلابك" : "A reading program for your teachers and students"}</h1><p>${arMode ? "الفصول، الواجبات، التقارير، وربط المعلمين بمنصة واحدة." : "Classes, assignments, reporting and teacher tools in one workspace."}</p></div>
      <button class="btn btn-lg btn-pink" data-go="signup" data-role="teacher">${arMode ? "ابدأ كمعلم" : "Start as a teacher"}</button>
    </header>
    <div class="school-kpis"><article class="card"><strong>12</strong><span>${arMode ? "مستوى تعليمي" : "learning levels"}</span></article><article class="card"><strong>7</strong><span>${arMode ? "تقارير يومية وأسبوعية" : "daily & weekly reports"}</span></article><article class="card"><strong>2</strong><span>${arMode ? "لغتان في المنصة" : "languages"}</span></article></div>
    <div class="policy-grid">
      <article class="card"><h2>${arMode ? "إدارة الفصول" : "Class management"}</h2><p>${arMode ? "راقب تقدم كل فصل وحدد ما يحتاجه كل طالب." : "Monitor every class and see which students need support."}</p></article>
      <article class="card"><h2>${arMode ? "واجبات قراءة" : "Reading assignments"}</h2><p>${arMode ? "عيّن القصص والألعاب بسرعة وتتبع الإكمال." : "Assign stories and games quickly and track completion."}</p></article>
      <article class="card"><h2>${arMode ? "تقارير صديقة للمدرسة" : "School-ready reports"}</h2><p>${arMode ? "ملخصات واضحة للمعلمين والإدارة وأولياء الأمور." : "Clear summaries for teachers, leaders and families."}</p></article>
      <article class="card"><h2>${arMode ? "تجربة آمنة للأطفال" : "A safe student experience"}</h2><p>${arMode ? "صلاحيات منفصلة ومحتوى مناسب للفئات العمرية." : "Separate permissions and age-appropriate content."}</p></article>
    </div>
  </section>`;
}

function helpView() {
  const arMode = ar();
  const faqs = arMode
    ? [["كيف أنشئ حسابًا لطفلي؟", "اختر ولي الأمر عند التسجيل، ثم أضف طفلك أو اربطه بحساب موجود."], ["هل يمكن للمعلم متابعة الطلاب؟", "نعم، الواجهة المعملية تسهّل اختيار الطلاب والواجبات والتقارير."], ["هل الاشتراك تجريبي؟", "حاليًا الاشتراك والبطاقة تجريبية، ولن يتم خصم مبالغ حقيقية قبل ربط الدفع."]]
    : [["How do I create my child’s account?", "Choose Parent at signup, then add or link your child."], ["Can teachers track students?", "Yes. Teacher tools organize students, assignments and reports."], ["Is checkout real?", "Checkout is currently a demo; no real payments are processed."]];
  return `<section class="help-page">
    <header class="help-heading"><span class="pill">${arMode ? "مركز المساعدة" : "Help center"}</span><h1>${arMode ? "كيف نقدر نساعدك؟" : "How can we help?"}</h1></header>
    <label class="help-search">${arMode ? "ابحث عن إجابة" : "Search for an answer"}<input type="search" placeholder="${arMode ? "مثال: الاشتراك، تسجيل الطالب..." : "Example: subscription, student signup..."}"></label>
    <div class="faq-list">${faqs.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("")}</div>
  </section>`;
}

function flashBar() {
  if (!state.flash) return "";
  return `<div class="alert alert-ok">${state.flash}</div>`;
}

function homeView() {
  const tt = t();
  const stages = STAGE.map((st, si) => {
    const levels = st.L.map((l, li) => {
      const n = si * 3 + li + 1;
      return `<button class="level-row" data-go="library" data-lvl="${n}" style="border-color:${st.c}">
        <span class="level-num" style="background:${st.c}">${n}</span>
        <span style="flex:1;font-size:17px;font-weight:700">${ar() ? l[0] : l[1]}</span>
      </button>`;
    }).join("");
    return `<div class="stage-card" style="background:${st.bg};border:3px solid ${st.c};box-shadow:0 6px 0 ${st.c}">
      <div class="stage-top"><strong>${ar() ? st.ar : st.en}</strong><span class="badge" style="background:${st.c}">${ar() ? "سنّ " : "Ages "}${st.age}</span></div>
      <span style="font-size:15px;font-weight:800">${ar() ? "القراءة اليومية: " + st.mins + " دقيقة" : "Daily reading: " + st.mins + " minutes"}</span>
      ${levels}
    </div>`;
  }).join("");
  const colors = ["#4fc3f7", "#f06292", "#ffc107", "#6cc551"];
  const keys = ["book", "mic", "star", "chart"];
  const feats = tt.feat.map((f, i) => `<div class="card feat">
    <div class="icon-box" style="background:${colors[i]}">${svg(ICONS[keys[i]], 34, 34)}</div>
    <h3>${f[0]}</h3><p>${f[1]}</p>
  </div>`).join("");
  const featuredTeachers = activeTeachers()
    .slice()
    .sort((a, b) => Number(b.teacherExperienceYears || 0) - Number(a.teacherExperienceYears || 0))
    .slice(0, 4);
  const featuredCards = featuredTeachers.map((teacher) => {
    const specialties = teacherSpecialtyTags(teacher);
    const experience = Number(teacher.teacherExperienceYears);
    const searchableText = `${displayName(teacher)} ${String(teacher.teacherSpecialties || "")} ${String(teacher.teacherBio || "")}`.trim().toLowerCase();
    return `<article class="featured-teacher-card" data-teacher-search="${escapeHtml(searchableText)}">
      <div class="featured-teacher-top">
        ${teacherPortrait(teacher, "featured-teacher-portrait")}
        <div class="featured-teacher-name">
          <span class="teacher-directory-status">${tt.teacherRole}</span>
          <h3>${displayName(teacher)}</h3>
        </div>
      </div>
      ${specialties ? `<div class="teacher-specialty-list">${specialties}</div>` : ""}
      ${experience > 0 ? `<span class="featured-teacher-experience">${experience} ${tt.teacherYearsExperience}</span>` : ""}
      <button class="btn featured-teacher-button" data-go="teacher-profile" data-tid="${escapeHtml(teacher.id)}">
        ${tt.teacherProfileOpen}<span aria-hidden="true">›</span>
      </button>
    </article>`;
  }).join("");
  return `${flashBar()}
  <section class="hero">
    <div class="hero-copy">
      <h1 aria-label="${escapeHtml(`${tt.heroTitle1} ${tt.heroTitle2}`)}">
        <span data-typewriter-part aria-hidden="true">${tt.heroTitle1}</span>
        <em data-typewriter-part aria-hidden="true">${tt.heroTitle2}</em>
      </h1>
      <p class="hero-description">${tt.heroText}</p>
      <div class="cta-row">
        <button class="btn btn-lg btn-blue" data-go="signup" data-role="student">${tt.ctaKid}</button>
        <button class="btn btn-lg btn-outline" data-go="signup" data-role="parent">${tt.ctaParent}</button>
        <button class="btn btn-lg btn-muted" data-go="signup" data-role="teacher">${tt.ctaTeacher}</button>
      </div>
      <div class="check-row">${tt.checks.map((c) => `<span class="check">${svg(ICONS.check, 22, 22, "#3fa34d")}${c}</span>`).join("")}</div>
    </div>
    <div class="hero-art">
      <div class="hero-frame"><img src="assets/hero.jpg" alt="${tt.heroAlt}"></div>
      <div class="float-card float-stars bob">${svg(ICONS.star, 28, 28, "#f5a000", "#ffc107")}<span>${tt.floatStars}</span></div>
      <div class="float-card float-ayah bob">${tt.floatAyah}</div>
    </div>
  </section>
  <section class="trust-strip" aria-label="${ar() ? "مميزات درب البيان" : "Darb Al-Bayan benefits"}">
    <div><strong>12</strong><span>${ar() ? "مستوى تعليمي" : "learning levels"}</span></div>
    <div><strong>4</strong><span>${ar() ? "مراحل عمرية" : "age stages"}</span></div>
    <div><strong>2</strong><span>${ar() ? "لغتان للقراءة" : "reading languages"}</span></div>
    <div><strong>24/7</strong><span>${ar() ? "الوصول من أي مكان" : "access anywhere"}</span></div>
  </section>
  <section class="landing-how">
    <div class="section-head"><h2>${ar() ? "رحلة تقرأها بثقة" : "A reading journey you can trust"}</h2></div>
    <div class="landing-how-grid">
      <article class="landing-how-card">
        <span class="landing-step">1</span>
        <div class="icon-box" style="background:#e3f5fd">${svg(ICONS.book,30,30,"#1e88d6")}</div>
        <div><h3>${ar() ? "قصة تناسب مرحلتك" : "A story for your stage"}</h3><p>${ar() ? "نص مشكول واضح، وصوت يساعدك على القراءة والفهم." : "Clear voweled text and audio support reading and comprehension."}</p></div>
      </article>
      <article class="landing-how-card">
        <span class="landing-step">2</span>
        <div class="icon-box" style="background:#eef9e8">${svg(ICONS.mic,30,30,"#3f9a38")}</div>
        <div><h3>${ar() ? "اقرأ وحدّثنا بحب" : "Read and share"}</h3><p>${ar() ? "سجّل قراءتك، واطّلع المعلم وولي الأمر على تقدمك." : "Record reading and let your teacher or parent review your progress."}</p></div>
      </article>
      <article class="landing-how-card">
        <span class="landing-step">3</span>
        <div class="icon-box" style="background:#fff6dc">${svg(ICONS.star,30,30,"#a86b00")}</div>
        <div><h3>${ar() ? "أجب واكسب النجوم" : "Answer and earn stars"}</h3><p>${ar() ? "أسئلة بسيطة ومكافآت تشجعك أن تكمل وتتعلم." : "Simple questions and rewards keep learning positive and steady."}</p></div>
      </article>
    </div>
  </section>
  <section>
    <h2 class="center-title">${tt.levelsTitle}</h2>
    <p class="center-sub" style="margin:12px 0 18px">${tt.levelsSub}</p>
    <div class="grid-4">${stages}</div>
  </section>
  <section class="grid-feat">${feats}</section>
  <section>
    <div class="section-head"><h2>${tt.newBooks}</h2><button class="btn btn-ghost" data-go="login">${tt.seeAll}</button></div>
    <div class="grid-books">${catalogBooks().map((book) => bookCard(book, true)).join("")}</div>
  </section>
  <section class="featured-teachers-section">
    <div class="featured-teachers-heading">
      <div>
        <span class="pill featured-teachers-pill">${tt.teacherProfessionalProfile}</span>
        <h2>${tt.featuredTeachersTitle}</h2>
        <p>${tt.featuredTeachersIntro}</p>
      </div>
      <label class="featured-teacher-search">
        <span>${tt.featuredTeachersSearch}</span>
        <input id="featured-teacher-search" type="search" placeholder="${tt.featuredTeachersSearch}" autocomplete="off">
      </label>
    </div>
    ${featuredTeachers.length
      ? `<div class="featured-teachers-grid">${featuredCards}</div>
         <p class="featured-teacher-search-empty" hidden>${tt.featuredTeachersSearchEmpty}</p>`
      : `<div class="card featured-teachers-empty">${tt.noTeachersAvailable}</div>`}
    <button class="btn btn-pink featured-teachers-view-all" data-go="teacher-directory">${tt.featuredTeachersViewAll}</button>
  </section>
  <section class="landing-audience">
    <article class="landing-audience-card">
      <span class="pill">${ar() ? "للأسر" : "For families"}</span>
      <h2>${ar() ? "تابع طفلك وهو يقرأ بثقة" : "Follow your child’s reading journey"}</h2>
      <p>${ar() ? "أضف الأطفال، شجّعهم بالنجوم والرسائل، وحدد هدف قراءة يناسب حياتكم." : "Add children, encourage them with stars and messages, and set a reading goal that fits your routine."}</p>
      <button class="btn btn-outline" data-go="signup" data-role="parent">${ar() ? "أنشئ حساب الأسرة" : "Create family account"}</button>
    </article>
    <article class="landing-audience-card landing-audience-teacher">
      <span class="pill">${ar() ? "للمعلمين والمدارس" : "For teachers and schools"}</span>
      <h2>${ar() ? "إدارة فصل القراءة من مكان واحد" : "Manage your reading class in one place"}</h2>
      <p>${ar() ? "أنشئ الفصول، اربط الطلاب، عيّن الكتب، وراجع تقدمهم وتسجيلاتهم." : "Create classes, link students, assign books, and review progress and recordings."}</p>
      <button class="btn btn-ghost" data-go="schools">${ar() ? "استكشف حلول المعلمين" : "Explore teacher solutions"}</button>
    </article>
  </section>
  <section class="landing-faq">
    <div class="section-head"><h2>${ar() ? "أسئلة قبل البدء" : "Before you get started"}</h2><button class="btn btn-ghost" data-go="help">${ar() ? "المساعدة" : "Help center"}</button></div>
    <div class="landing-faq-grid">
      <details><summary>${ar() ? "هل يناسب الموقع الأطفال الذين لا يقرأون بعد؟" : "Is it suitable for children who are not reading yet?"}</summary><p>${ar() ? "يبدأ التعلم بالحروف والأصوات والكلمات القصيرة، ويزداد التقدم تدريجيًا." : "Learning begins with letters, sounds and short words, then progresses gradually."}</p></details>
      <details><summary>${ar() ? "هل أحتاج اشتراكًا لكل طفل؟" : "Does every child need a separate subscription?"}</summary><p>${ar() ? "الاشتراك العائلي المصمم لدينا يدعم حتى ثلاثة أطفال." : "The family plan supports up to three children."}</p></details>
      <details><summary>${ar() ? "هل يمكن للمعلم متابعة طلابه؟" : "Can a teacher follow students?"}</summary><p>${ar() ? "نعم، المعلم يربط الطلاب بفصوله ويشاهد واجباتهم وتسجيلاتهم." : "Yes, teachers link students to classes and follow assignments and recordings."}</p></details>
    </div>
  </section>
  <section class="pricing">
    <h2 class="center-title">${tt.pricingTitle}</h2>
    <div class="plans">
      <div class="plan"><span style="font-size:22px;font-weight:800;color:#1e88d6">${tt.planMonthly}</span>
        <span class="plan-price">${tt.priceM}</span><span class="muted">${tt.planMonthlyNote}</span>
        <button class="btn btn-blue" data-go="checkout" data-plan="monthly">${tt.choose}</button></div>
      <div class="plan best"><span class="best-tag">${tt.best}</span>
        <span style="font-size:22px;font-weight:800;color:#d63a72">${tt.planYearly}</span>
        <span class="plan-price">${tt.priceY}</span><span class="muted">${tt.planYearlyNote}</span>
        <button class="btn btn-pink" data-go="checkout" data-plan="yearly">${tt.choose}</button></div>
    </div>
  </section>`;
}

function teacherDirectoryView() {
  const tt = t();
  const teachers = activeTeachers();
  const cards = teachers.map((teacher) => {
    const specialties = teacherSpecialtyTags(teacher);
    const bio = String(teacher.teacherBio || "").trim();
    const experience = Number(teacher.teacherExperienceYears);
    return `<article class="teacher-directory-card">
      <div class="teacher-directory-card-top">
        ${teacherPortrait(teacher, "teacher-directory-portrait")}
        <div class="teacher-directory-name">
          <span class="teacher-directory-status">${tt.teacherRole}</span>
          <h2>${displayName(teacher)}</h2>
          ${experience > 0
            ? `<span class="muted">${experience} ${tt.teacherYearsExperience}</span>` : ""}
        </div>
      </div>
      ${bio
        ? `<p class="teacher-directory-bio">${escapeHtml(bio)}</p>`
        : `<p class="teacher-directory-bio muted">${tt.teacherBioPlaceholder}</p>`}
      ${specialties
        ? `<div class="teacher-specialty-list">${specialties}</div>`
        : `<span class="muted">${tt.teacherSpecialtiesPlaceholder}</span>`}
      <button class="btn teacher-directory-card-button" data-go="teacher-profile" data-tid="${escapeHtml(teacher.id)}">
        ${tt.teacherProfileOpen}<span aria-hidden="true">›</span>
      </button>
    </article>`;
  }).join("");
  return `${flashBar()}<section class="teacher-directory-page">
    <header class="teacher-directory-heading">
      <span class="pill">${tt.teacherProfessionalProfile}</span>
      <h1>${tt.teachersDirectoryTitle}</h1>
      <p class="muted">${tt.teachersDirectoryIntro}</p>
      <span class="teacher-directory-count">${teachers.length} ${tt.teachersDirectoryCount}</span>
    </header>
    ${teachers.length
      ? `<div class="teacher-directory-grid">${cards}</div>`
      : `<div class="card teacher-directory-empty">${tt.noTeachersAvailable}</div>`}
  </section>`;
}

function teacherPublicProfileView() {
  const tt = t();
  const teacher = activeTeachers().find((user) => user.id === state.viewTeacher);
  if (!teacher) return teacherDirectoryView();
  const specialties = teacherSpecialtyTags(teacher);
  const experience = Number(teacher.teacherExperienceYears);
  const profileSections = [
    ["teacherBioLabel", "teacherBio", "teacherBioPlaceholder"],
    ["teacherExperienceLabel", "teacherExperienceYears", "teacherExperiencePlaceholder"],
    ["teacherQualificationsLabel", "teacherQualifications", "teacherQualificationsPlaceholder"],
    ["teacherApproachLabel", "teacherApproach", "teacherApproachPlaceholder"]
  ];
  const detail = (labelKey, property, placeholderKey) => {
    let value = String(teacher[property] || "").trim();
    if (property === "teacherExperienceYears") {
      value = experience > 0 ? `${experience} ${tt.teacherYearsExperience}` : "";
    }
    return `<section class="card teacher-public-detail">
      <h2>${tt[labelKey]}</h2>
      <p class="${value ? "" : "muted"}">${value ? escapeHtml(value) : tt[placeholderKey]}</p>
    </section>`;
  };
  return `${flashBar()}<section class="teacher-public-profile">
    <button class="btn btn-ghost teacher-profile-back" data-go="teacher-directory">← ${tt.teacherProfileBack}</button>
    <header class="teacher-public-hero">
      ${teacherPortrait(teacher, "teacher-public-portrait")}
      <div class="teacher-public-heading">
        <span class="teacher-directory-status">${tt.teacherRole}</span>
        <h1>${displayName(teacher)}</h1>
        <p>${tt.teacherProfessionalProfile}</p>
        ${experience > 0
          ? `<span class="teacher-experience-chip">${experience} ${tt.teacherYearsExperience}</span>` : ""}
      </div>
    </header>
    ${specialties ? `<section class="teacher-public-specialties"><h2>${tt.teacherSpecialtiesLabel}</h2><div class="teacher-specialty-list">${specialties}</div></section>` : ""}
    ${teacher.teacherInstitution ? `<section class="card teacher-public-detail">
      <h2>${ar() ? "المدرسة أو المؤسسة" : "School or institution"}</h2>
      <p>${escapeHtml(teacher.teacherInstitution)}</p>
    </section>` : ""}
    <div class="teacher-public-details">
      ${profileSections.map(([labelKey, property, placeholderKey]) =>
        detail(labelKey, property, placeholderKey)).join("")}
    </div>
    <p class="teacher-profile-disclaimer">${tt.teacherProfileProvidedBy}</p>
  </section>`;
}

function bookCard(b, withBtn) {
  const st = stageOf(b.l);
  const user = sessionUser();
  const subscriptionLocked = bookLockedForUser(b, user);
  const paid = bookAccessMode(b) === "paid";
  const purchased = hasPurchasedBook(user, b);
  const levelLocked = user?.role === "student" && b.l > user.level;
  const locked = subscriptionLocked || levelLocked;
  const lockLabel = paid && !purchased ? `${t().paidContent} · ${b.purchasePrice || 0} ر.س`
    : subscriptionLocked ? t().lockedForSubscription
    : levelLocked ? t().bookLocked
      : b.premium ? t().premiumContent : t().freeLabel;
  return `<button class="book-btn" data-open="${b.id}">
    <div class="cover" style="background:${b.color}">${bookTitle(b)}</div>
    <span style="font-size:18px;font-weight:800;line-height:1.3">${bookTitle(b)}</span>
    <span class="level-chip" style="background:${st.bg};border-color:${st.c}">${lvName(b.l)}</span>
    <span class="level-chip">${lockLabel}</span>
    ${withBtn ? `<span class="btn ${paid && !purchased ? "btn-buy book-buy-action" : locked ? "btn-muted" : "btn-blue"}" style="width:100%">${paid && !purchased
      ? `<strong>${t().buyBook}</strong>`
      : locked ? `<strong>${lockLabel}</strong>` : `<strong>${t().read}</strong>`}</span>` : ""}
  </button>`;
}

function authForms(kind) {
  const tt = t();
  const role = state.signupRole;
  const draft = state.signupDraft || {};
  const fieldValue = (name) => draft[name] ? ` value="${escapeHtml(draft[name])}"` : "";
  const roleCard = (value, label, hint, color) => `<button type="button" class="role-choice ${role === value ? "selected" : ""}" data-role="${value}" style="--role-color:${color}" aria-pressed="${role === value}">
    <strong>${label}</strong><span>${hint}</span>
  </button>`;
  if (kind === "login") {
    return `${flashBar()}<section class="split">
      <div class="side-panel">
        <img src="assets/walk.jpg" alt="">
        <h2>${tt.loginTitle}</h2>
        <p class="muted">${tt.loginSub}</p>
        <div class="demo-box"><strong>${tt.demo}</strong>
          <button type="button" class="demo-account" data-demo-email="sara@bayan.test">${tt.student} · Sara <span>${tt.fillDemo}</span></button>
          <button type="button" class="demo-account" data-demo-email="parent@bayan.test">${tt.parentRole} · Sara’s mom <span>${tt.fillDemo}</span></button>
          <button type="button" class="demo-account" data-demo-email="teacher@bayan.test">${tt.teacherRole} · Ms. Noura <span>${tt.fillDemo}</span></button>
          <button type="button" class="demo-account" data-demo-email="admin@bayan.test">${tt.adminRole} · ${tt.demoAdmin} <span>${tt.fillDemo}</span></button>
        </div>
      </div>
      <form class="form-card" id="login-form">
        <h1>${tt.login}</h1>
        <div id="auth-err"></div>
        <label>${tt.email}<input name="email" type="email" dir="ltr" autocomplete="username" required></label>
        <label>${tt.password}<span class="password-field"><input name="password" type="password" dir="ltr" autocomplete="current-password" required><button type="button" class="password-toggle" data-act="toggle-password">${tt.showPassword}</button></span></label>
        <button type="button" class="btn-text auth-reset-link" data-go="reset-password">${ar() ? "نسيت كلمة المرور؟" : "Forgot password?"}</button>
        <div class="auth-divider"><span>${ar() ? "أو" : "or"}</span></div>
        <button type="button" class="social-login-button social-google" disabled title="${ar() ? "سيتاح بعد ربط مزود الدخول" : "Available after provider connection"}">
          <span class="social-provider-icon google-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.4a4.6 4.6 0 0 1-2 3v2.6h3.3c1.9-1.8 2.9-4.4 2.9-7.5Z"/><path fill="#34A853" d="M12 22c2.7 0 5-.9 6.7-2.3l-3.3-2.6c-.9.6-2.1 1-3.4 1a5.9 5.9 0 0 1-5.5-4.1H3.1v2.7A10 10 0 0 0 12 22Z"/><path fill="#FBBC05" d="M6.5 14a6 6 0 0 1 0-3.9V7.3H3.1A10 10 0 0 0 3.1 17Z"/><path fill="#EA4335" d="M12 6c1.5 0 2.8.5 3.9 1.5l2.9-2.9A9.7 9.7 0 0 0 12 2a10 10 0 0 0-8.9 5.3l3.4 2.8A5.9 5.9 0 0 1 12 6Z"/></svg>
          </span>
          <span class="social-provider-text">${ar() ? "المتابعة باستخدام Google" : "Continue with Google"}</span>
        </button>
        <button type="button" class="social-login-button social-apple" disabled title="${ar() ? "سيتاح بعد ربط مزود الدخول" : "Available after provider connection"}">
          <span class="social-provider-icon apple-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M16.7 12.8c0-2.7 2.2-4 2.3-4.1a5 5 0 0 0-3.9-2.1c-1.6-.2-3.2 1-4 1-.8 0-2.1-1-3.5-1-1.8 0-3.5 1-4.4 2.6-1.9 3.3-.5 8.1 1.3 10.8.9 1.3 2 2.7 3.4 2.6 1.3-.1 1.9-.8 3.5-.8 1.5 0 2.1.8 3.5.8 1.5 0 2.4-1.3 3.3-2.6a11 11 0 0 0 1.5-3.1 4.7 4.7 0 0 1-3-4.1ZM14 4.9A4.6 4.6 0 0 0 15.1 1a4.7 4.7 0 0 0-3.1 1.6A4.4 4.4 0 0 0 10.9 6a3.9 3.9 0 0 0 3.1-1.1Z"/></svg>
          </span>
          <span class="social-provider-text">${ar() ? "المتابعة باستخدام Apple" : "Continue with Apple"}</span>
        </button>
        <button class="btn btn-xl btn-green" type="submit">${tt.login}</button>
        <span class="muted" style="text-align:center">${tt.noAccount} <button type="button" class="btn-text" data-go="signup">${tt.signup}</button></span>
      </form>
    </section>`;
  }
  const extra = role === "teacher"
    ? `<label>${ar() ? "التخصص" : "Specialty"}<input name="teacherSpecialties" maxlength="200"${fieldValue("teacherSpecialties")} required></label>
       <label>${tt.teacherExperienceLabel}<input name="teacherExperienceYears" type="number" min="0" max="60"${fieldValue("teacherExperienceYears")}></label>
       <label>${ar() ? "المدرسة أو المؤسسة (اختياري)" : "School or institution (optional)"}<input name="teacherInstitution" maxlength="120"${fieldValue("teacherInstitution")}></label>`
    : role === "parent"
      ? `<label>${ar() ? "لغة القراءة المفضلة" : "Preferred reading language"}
          <select name="readingLanguage">
            <option value="ar" ${draft.readingLanguage === "ar" ? "selected" : ""}>${ar() ? "العربية" : "Arabic"}</option>
            <option value="en" ${draft.readingLanguage === "en" ? "selected" : ""}>${ar() ? "الإنجليزية" : "English"}</option>
            <option value="both" ${!draft.readingLanguage || draft.readingLanguage === "both" ? "selected" : ""}>${ar() ? "العربية والإنجليزية" : "Arabic and English"}</option>
          </select>
         </label>
         <label>${ar() ? "عدد الأطفال" : "Number of children"}
          <select name="parentChildCount" id="parent-child-count">
            ${[1, 2, 3].map((count) => `<option value="${count}" ${state.parentChildCount === count ? "selected" : ""}>${count} ${count === 1 ? (ar() ? "طفل" : "child") : (ar() ? "أطفال" : "children")}</option>`).join("")}
          </select>
        </label>
        <div class="parent-children-fields">
          ${Array.from({ length: state.parentChildCount }, (_, index) => {
            const n = index + 1;
            return `<fieldset class="parent-child-fieldset">
              <legend>${ar() ? `الطفل ${n}` : `Child ${n}`}</legend>
              <label>${tt.childName}<input name="childName${index}" autocomplete="off"${fieldValue(`childName${index}`)} required></label>
              <label>${tt.email}<input name="childEmail${index}" type="email" dir="ltr" autocomplete="off"${fieldValue(`childEmail${index}`)} required></label>
              <label>${tt.childAge} <span class="field-hint">${tt.ageOptional}</span><input name="childAge${index}" type="number" min="3" max="16"${fieldValue(`childAge${index}`) || ' value="7"'}></label>
            </fieldset>`;
          }).join("")}
        </div>`
      : `      <label>${tt.childAge}<input name="age" type="number" min="3" max="16"${fieldValue("age") || ' value="7"'} required></label>
         <div class="onboarding-note">${tt.studentLevelHint}</div>
         <span>${tt.childBoyGirl}</span>
         <div class="chip-row">
           <button type="button" class="chip ${state.gender === "boy" ? "on" : ""}" data-gender="boy" style="${state.gender === "boy" ? "background:#29a9e8;border-color:#29a9e8;color:#fff" : ""}">${tt.boy}</button>
           <button type="button" class="chip ${state.gender === "girl" ? "on" : ""}" data-gender="girl" style="${state.gender === "girl" ? "background:#f06292;border-color:#f06292;color:#fff" : ""}">${tt.girl}</button>
         </div>`;
  return `${flashBar()}<section class="split signup-page">
    <div class="side-panel">
      <img src="assets/walk.jpg" alt="">
      <h2>${tt.signupSide}</h2>
      ${tt.setupSteps.map((step, index) => `<div class="step"><span class="step-num" style="background:${["#4fc3f7", "#f06292", "#6cc551"][index]}">${index + 1}</span>${step}</div>`).join("")}
    </div>
    <form class="form-card" id="signup-form">
      <h1>${tt.signupTitle}</h1>
      <span style="font-weight:800">${tt.chooseRole}</span>
      <div class="role-picker">
        ${roleCard("parent", tt.parentRole, tt.parentRoleHint, "#9575cd")}
        ${roleCard("teacher", tt.teacherRole, tt.teacherRoleHint, "#ff8a65")}
        ${roleCard("student", tt.student, tt.studentRoleHint, "#6cc551")}
      </div>
      <h2 class="form-section-title">${tt.accountBasics}</h2>
      <div id="auth-err"></div>
      <label>${tt.name}<input name="name" autocomplete="name"${fieldValue("name")} required></label>
      <label>${tt.email}<input name="email" type="email" dir="ltr" autocomplete="email"${fieldValue("email")} required></label>
      <label>${tt.password} <span class="field-hint">${tt.passwordHint}</span><span class="password-field"><input name="password" type="password" dir="ltr" autocomplete="new-password" minlength="6"${fieldValue("password")} required><button type="button" class="password-toggle" data-act="toggle-password">${tt.showPassword}</button></span></label>
      ${extra}
      <button class="btn btn-xl btn-green" type="submit">${tt.createAccount}</button>
      ${role === "student" ? `<button type="button" class="btn btn-ghost" data-go="onboarding">${ar() ? "عايز إعداد شخصي للطفل؟" : "Personalize the learner?"}</button>` : ""}
      <span class="muted" style="text-align:center">${tt.haveAccount} <button type="button" class="btn-text" data-go="login">${tt.login}</button></span>
    </form>
  </section>`;
}

function kidView() {
  const u = sessionUser();
  const tt = t();
  const data = db();
  const homework = assignmentsForStudent(data, u)
    .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
  const today = dateKey(new Date());
  const mission = dailyMissionForStudent(today, u);
  const missionDone = u.dailyMission?.date === today && u.dailyMission.completed === true;
  const missionFeedback = state.missionFeedback?.date === today
    ? state.missionFeedback.message : "";
  const readingCircle = readingCircleForStudent(data, u)
    .map((student) => ({ student, minutes: Math.floor(weekReadingMinutes(student)) }))
    .sort((a, b) => b.minutes - a.minutes || String(a.student.id).localeCompare(String(b.student.id)));
  const readingPosition = readingCircle.findIndex(({ student }) => student.id === u.id) + 1;
  const currentReading = readingCircle[readingPosition - 1];
  const readingRank = currentReading?.minutes > 0
    ? readingCircle.filter((entry) => entry.minutes > currentReading.minutes).length + 1 : 0;
  const leagueVisible = readingCircle.slice(0, 5);
  if (readingPosition > 5) leagueVisible.push(currentReading);
  const leagueRows = leagueVisible.map(({ student, minutes }) => {
    const rank = minutes > 0
      ? readingCircle.filter((entry) => entry.minutes > minutes).length + 1 : 0;
    return `<div class="reading-league-row ${student.id === u.id ? "is-current" : ""}">
      <span class="reading-league-rank">${rank === 1 ? uiIcon("trophy", 20) : rank || "—"}</span>
      <strong>${student.id === u.id ? tt.leagueYou : displayName(student)}${rank === 1 ? ` · ${tt.weeklyChampion}` : ""}</strong>
      <span>${minutes} ${tt.minutes}</span>
    </div>`;
  }).join("");
  const challenges = data.challenges.filter((challenge) =>
    challenge.active &&
    (!Array.isArray(challenge.recipientIds) || challenge.recipientIds.includes(u.id)) &&
    !(u.challengeCompletions || []).includes(challenge.id));
  const challengeMinutes = Math.floor(weekReadingMinutes(u));
  const latestEncouragement = [...(u.encouragements || [])]
    .sort((a, b) => b.at - a.at)[0];
  const earnedBadges = [
    u.books > 0 ? tt.firstBookBadge : null,
    u.stars >= 5 ? tt.fiveStarsBadge : null,
    (u.completedLevels || []).length >= 3 ? tt.threeLevelsBadge : null,
    u.streak >= 7 ? tt.sevenDayBadge : null
  ].filter(Boolean);
  const journeyAvatar = `<img src="${escapeHtml(u.avatar || "assets/avatar.jpg")}" alt="${displayName(u)}">`;
  const book = findBook(u.currentBook) || BOOKS[0];
  const elapsed = Math.floor(((state.accMs || 0) + (state.screen === "reader" && state.segStart ? Math.max(0, Date.now() - state.segStart) : 0)) / 1000);
  const goal = stageOf(u.level).mins * 60;
  const pct = Math.min(100, Math.round(elapsed / goal * 100));
  const lessons = STAGE.flatMap((stage) => stage.L);
  const completedLevels = u.completedLevels || [];
  const journeyLinks = Array.from({ length: lessons.length - 1 }, (_, index) => {
    const fromLevel = index + 1;
    const toLevel = fromLevel + 1;
    const fromX = fromLevel % 2 ? (ar() ? 75 : 25) : (ar() ? 25 : 75);
    const toX = toLevel % 2 ? (ar() ? 75 : 25) : (ar() ? 25 : 75);
    const fromY = 46 + index * 148;
    const toY = fromY + 148;
    const color = toLevel <= u.level ? "#6cc551"
      : fromLevel === u.level ? stageOf(u.level).c : "var(--journey-path-locked, #d9e3ea)";
    const path = `M${fromX} ${fromY} C${fromX} ${fromY + 64} ${toX} ${toY - 64} ${toX} ${toY}`;
    return `<path d="${path}" fill="none" stroke="var(--journey-rope-outline, #fff)" stroke-width="15" stroke-linecap="round"/>
      <path d="${path}" fill="none" stroke="${color}" stroke-width="8" stroke-linecap="round"/>`;
  }).join("");
  const journey = lessons.map((lesson, index) => {
    const level = index + 1;
    const status = completedLevels.includes(level) || level < u.level
      ? "done" : level === u.level ? "now" : "lock";
    return `<div class="node ${status}" data-side="${level % 2 ? "start" : "end"}" data-level="${level}">
      <button class="${status === "now" ? "pulse" : ""}" data-open="${status === "lock" ? "" : book.id}" ${status === "lock" ? "disabled" : ""} aria-label="${tt.level} ${level}">
        ${status === "done" ? svg(ICONS.check, 38, 38) : status === "now" ? level : svg(ICONS.lock, 38, 38)}
      </button>
      <span class="node-label">${level}. ${ar() ? lesson[0] : lesson[1]}</span>
    </div>`;
  }).join("");
  return `${flashBar()}<section class="kid-layout">
    <div class="kid-main">
      <div class="hello">
        ${journeyAvatar}
        <div><h1>${tt.hello} ${displayName(u)}!</h1><span class="muted">${tt.helloSub}</span></div>
      </div>
      <div class="continue">
        <img src="assets/book-continue.jpg" alt="" style="width:110px;border-radius:16px">
        <div style="flex:1 1 220px;display:flex;flex-direction:column;gap:8px">
          <span class="continue-label">${tt.continueReading}</span>
          <span style="font-size:24px;font-weight:800">${bookTitle(book)}</span>
          <div class="bar"><span style="width:${studentProgress(u)}%;background:#6cc551"></span></div>
        </div>
        <button class="btn btn-lg btn-green" data-open="${book.id}">${tt.read}</button>
      </div>
      <div class="card homework-card">
        <strong class="homework-title">${tt.myHomework}</strong>
        ${homework.length ? `<div class="homework-list">${homework.slice(0, 5).map((assignment) => {
          const done = assignment.completedBy?.includes(u.id);
          const assignedBook = findBook(assignment.bookId);
          const lockedByLevel = assignedBook && assignedBook.l > u.level;
          const lockedBySubscription = assignedBook && bookLockedForUser(assignedBook, u, data);
          const locked = lockedByLevel || lockedBySubscription;
          return `<div class="homework-item ${done ? "is-done" : ""}">
            <div><strong>${bookTitle(assignedBook || BOOKS[0])}</strong>
              <span class="muted">${done ? tt.homeworkDone : lockedByLevel ? tt.homeworkLocked : lockedBySubscription ? tt.lockedForSubscription : tt.homeworkPending}</span></div>
            ${done
              ? `<span class="homework-check" aria-label="${tt.homeworkDone}">${svg(ICONS.check, 24, 24)}</span>`
              : `<button class="btn btn-green" data-open="${locked ? "" : assignedBook?.id || ""}" ${locked || !assignedBook ? "disabled" : ""}>${tt.read}</button>`}
          </div>`;
        }).join("")}</div>` : `<span class="muted">${tt.noHomework}</span>`}
      </div>
      <div class="journey">
        <span class="pill" style="margin-bottom:14px">${tt.journeyTitle}</span>
        <strong>${tt.currentLesson}: ${tt.level} ${u.level}</strong>
        <div class="journey-track">
          <svg class="journey-rope" viewBox="0 0 100 ${lessons.length * 148}" preserveAspectRatio="none" aria-hidden="true">${journeyLinks}</svg>
          ${journey}
        </div>
      </div>
    </div>
    <aside class="kid-side">
      <div class="stats">
        <div class="stat" style="border-color:#ffd54f"><b style="color:#f5a000">${u.stars}</b><span>${tt.stars}</span></div>
        <div class="stat" style="border-color:#ff8a65"><b style="color:#e8643a">${u.streak}</b><span>${tt.streak}</span></div>
        <div class="stat" style="border-color:#6cc551"><b style="color:#3f9a38">${u.books}</b><span>${tt.booksRead}</span></div>
      </div>
      <button class="card learning-games-launch" data-go="games">
        <img class="learning-game-icon" src="assets/game-builder.svg" alt="" aria-hidden="true">
        <strong>${tt.gameCardTitle}</strong>
        <span class="muted">${tt.gameCardText}</span>
        <span class="learning-games-launch-items" aria-hidden="true">
          <img src="assets/game-letters.svg" alt=""><img src="assets/game-hunt.svg" alt=""><img src="assets/game-builder.svg" alt="">
        </span>
      </button>
      <div class="card mission-card">
        <strong class="mission-title">${tt.dailyMission}</strong>
        ${mission.review ? `<span class="muted">${tt.missionReviewHint}</span>` : ""}
        <span class="muted">${mission.prompt}</span>
        <div class="mission-options">${mission.options.map((option, index) =>
          `<button class="mission-option" data-mission-answer="${index}" ${missionDone ? "disabled" : ""}>${option}</button>`
        ).join("")}</div>
        <span class="mission-feedback ${missionDone ? "mission-success" : ""}" aria-live="polite">
          ${missionDone ? tt.missionComplete : escapeHtml(missionFeedback)}
        </span>
      </div>
      ${challenges.length ? challenges.map((challenge) => `<div class="card challenge-card">
        <strong class="challenge-title">${tt.classChallenge}</strong>
        <span>${escapeHtml(challenge.title)}</span>
        <span class="muted">${tt.challengeTarget}: ${Math.min(challengeMinutes, challenge.targetMinutes)} / ${challenge.targetMinutes} ${tt.minutes}</span>
        <div class="bar"><span style="width:${Math.min(100, Math.round(challengeMinutes / challenge.targetMinutes * 100))}%;background:#6cc551"></span></div>
        <button class="btn btn-green" data-challenge="${challenge.id}" ${challengeMinutes < challenge.targetMinutes ? "disabled" : ""}>${tt.challengeJoin}</button>
      </div>`).join("") : `<div class="card challenge-card">
        <strong class="challenge-title">${tt.classChallenge}</strong>
        <span class="muted">${tt.noChallenge}</span>
      </div>`}
      <div class="card reading-league">
        <strong>${tt.readingLeague}</strong>
        <span class="muted">${tt.readingLeagueHint}</span>
        <div class="reading-league-goal">
          <span>${tt.readingGoal}: ${Math.min(challengeMinutes, 60)} / 60 ${tt.minutes}</span>
          <div class="bar"><span style="width:${Math.min(100, Math.round(challengeMinutes / 60 * 100))}%;background:#f5a000"></span></div>
        </div>
        <div class="reading-league-list">${leagueRows}</div>
        ${readingCircle.length < 2 ? `<span class="muted">${tt.leagueNoPeers}</span>` : ""}
        <span class="reading-league-your-rank">${readingRank
          ? `${tt.leagueRank}: ${readingRank} / ${readingCircle.length}`
          : tt.leagueStartRanking}</span>
      </div>
      ${latestEncouragement ? `<div class="card cheer-card">
        <strong class="cheer-title">${tt.cheerReceived}</strong>
        <span>${escapeHtml(latestEncouragement.text)}</span>
      </div>` : ""}
      <div class="card badge-card">
        <strong class="badge-title">${tt.badges}</strong>
        ${earnedBadges.length
          ? `<div class="badge-list">${earnedBadges.map((badge) => `<span class="kid-badge">${uiIcon("star", 16)}${badge}</span>`).join("")}</div>`
          : `<span class="muted">${tt.noBadges}</span>`}
      </div>
      <div class="card daily-goal-card">
        <strong class="daily-goal-title">${tt.dailyGoal}</strong>
        <div class="bar" style="height:16px;background:#fdecf3"><span style="width:${pct}%;background:#f06292"></span></div>
        <span class="muted">${Math.floor(elapsed / 60)} / ${stageOf(u.level).mins} ${tt.minutes}</span>
      </div>
      <div class="card dhikr-card">
        <strong class="dhikr-title">${tt.dhikrTitle}</strong>
        <span class="dhikr-text">${tt.dhikr}</span>
      </div>
    </aside>
  </section>`;
}

function studentProfileView() {
  const student = sessionUser();
  const tt = t();
  const recordings = db().recordings.filter((recording) => recording.studentId === student.id)
    .sort((a, b) => (Number(b.createdAt) || 0) - (Number(a.createdAt) || 0));
  const milestones = [25, 50, 100, 200];
  const nextMilestone = milestones.find((milestone) => Number(student.stars) < milestone);
  const badges = [
    student.books > 0 ? tt.firstBookBadge : null,
    student.stars >= 5 ? tt.fiveStarsBadge : null,
    (student.completedLevels || []).length >= 3 ? tt.threeLevelsBadge : null,
    student.streak >= 7 ? tt.sevenDayBadge : null,
    student.stars >= 25 ? `${tt.rewardMilestone} · 25` : null,
    student.stars >= 50 ? `${tt.rewardMilestone} · 50` : null,
    student.stars >= 100 ? `${tt.rewardMilestone} · 100` : null,
    student.stars >= 200 ? `${tt.rewardMilestone} · 200` : null
  ].filter(Boolean);
  const messages = [...(student.encouragements || [])].sort((a, b) => Number(b.at) - Number(a.at));
  const messageCards = messages.map((message) => {
    const senderLabel = message.senderRole === "parent" ? tt.messageFromParent
      : message.senderRole === "teacher" ? tt.messageFromTeacher : tt.messageFromSupporter;
    const sender = message.senderName ? `${senderLabel} · ${escapeHtml(message.senderName)}` : senderLabel;
    const sentAt = Number(message.at) ? new Date(message.at).toLocaleDateString(ar() ? "ar-EG" : "en-US") : "";
    return `<article class="card student-message-card">
      <span class="student-message-icon">${uiIcon("heart", 22)}</span>
      <div><strong>${sender}</strong><p>${escapeHtml(message.text)}</p><span class="muted">${sentAt}</span></div>
    </article>`;
  }).join("");
  const starProgress = nextMilestone
    ? Math.min(100, Math.round(Number(student.stars) / nextMilestone * 100)) : 100;
  const ownedOutfits = new Set(student.ownedOutfits || ["starter"]);
  const outfitCards = OUTFITS.map((outfit) => {
    const owned = ownedOutfits.has(outfit.id);
    const equipped = student.equippedOutfit === outfit.id;
    const action = equipped ? tt.avatarEquipped : owned ? tt.avatarWear : tt.avatarBuy;
    const cost = outfit.price ? `<span class="avatar-star-price">${outfit.price} ${avatarStarIcon()}</span>` : tt.avatarFree;
    return `<article class="student-outfit-card ${equipped ? "is-equipped" : ""}">
      <div class="student-outfit-icon" style="--outfit-color:${outfit.color}">${avatarShopIcon("outfit", outfit)}</div>
      <strong>${ar() ? outfit.ar : outfit.en}</strong>
      <span class="student-outfit-price">${cost}</span>
      <button class="btn ${equipped ? "btn-gold" : "btn-green"}" type="button" data-outfit="${outfit.id}" ${equipped ? "disabled" : ""}>
        ${action}
      </button>
    </article>`;
  }).join("");
  const ownedGlasses = new Set(student.ownedAvatarGlasses || []);
  const glassesCards = AVATAR_GLASSES.map((item) => {
    const owned = ownedGlasses.has(item.id);
    const equipped = student.equippedAvatarGlasses === item.id;
    return `<article class="student-outfit-card ${equipped ? "is-equipped" : ""}">
      <div class="student-outfit-icon" style="--outfit-color:${item.color}">${avatarShopIcon("glasses", item)}</div>
      <strong>${ar() ? item.ar : item.en}</strong>
      <span class="student-outfit-price">${owned ? tt.avatarFree : `<span class="avatar-star-price">${item.price} ${avatarStarIcon()}</span>`}</span>
      <button class="btn ${equipped ? "btn-gold" : "btn-green"}" type="button" data-avatar-glasses="${item.id}" ${equipped ? "disabled" : ""}>
        ${equipped ? tt.avatarEquipped : owned ? tt.avatarWear : tt.avatarBuy}
      </button>
    </article>`;
  }).join("");
  const ownedHats = new Set(student.ownedAvatarHats || []);
  const hatCards = AVATAR_HATS.map((item) => {
    const owned = ownedHats.has(item.id);
    const equipped = student.equippedAvatarHat === item.id;
    return `<article class="student-outfit-card ${equipped ? "is-equipped" : ""}">
      <div class="student-outfit-icon" style="--outfit-color:${item.color}">${avatarShopIcon("hat", item)}</div>
      <strong>${ar() ? item.ar : item.en}</strong>
      <span class="student-outfit-price">${owned ? tt.avatarFree : `<span class="avatar-star-price">${item.price} ${avatarStarIcon()}</span>`}</span>
      <button class="btn ${equipped ? "btn-gold" : "btn-green"}" type="button" data-avatar-hat="${item.id}" ${equipped ? "disabled" : ""}>
        ${equipped ? tt.avatarEquipped : owned ? tt.avatarWear : tt.avatarBuy}
      </button>
    </article>`;
  }).join("");
  const skinSwatches = AVATAR_SKIN_TONES.map((tone) =>
    `<button class="avatar-color-swatch ${student.avatarSkinTone === tone.id ? "is-selected" : ""}" type="button"
      style="--swatch-color:${tone.color}" data-avatar-tone="${tone.id}"
      aria-label="${tt.avatarSkinTone}: ${ar() ? tone.ar : tone.en}" aria-pressed="${student.avatarSkinTone === tone.id}"></button>`
  ).join("");
  const hairSwatches = AVATAR_HAIR_COLORS.map((color) =>
    `<button class="avatar-color-swatch ${student.avatarHairColor === color.id ? "is-selected" : ""}" type="button"
      style="--swatch-color:${color.color}" data-avatar-hair="${color.id}"
      aria-label="${tt.avatarHairColor}: ${ar() ? color.ar : color.en}" aria-pressed="${student.avatarHairColor === color.id}"></button>`
  ).join("");
  const hairStyles = AVATAR_HAIR_STYLES.map((style) =>
    `<button class="avatar-style-choice ${student.avatarHairStyle === style.id ? "is-selected" : ""}" type="button"
      data-avatar-hairstyle="${style.id}" aria-pressed="${student.avatarHairStyle === style.id}">
      ${ar() ? style.ar : style.en}
    </button>`
  ).join("");
  const hijabSwatches = AVATAR_HIJAB_COLORS.map((color) =>
    `<button class="avatar-color-swatch ${student.avatarHijabColor === color.id ? "is-selected" : ""}" type="button"
      style="--swatch-color:${color.color}" data-avatar-hijab="${color.id}"
      aria-label="${tt.avatarHijabColor}: ${ar() ? color.ar : color.en}" aria-pressed="${student.avatarHijabColor === color.id}"></button>`
  ).join("");
  const avatarGender = student.avatarGender || student.gender;
  const genderOptions = [["girl", tt.avatarGirl], ["boy", tt.avatarBoy]].map(([gender, label]) =>
    `<button class="avatar-gender-choice ${avatarGender === gender ? "is-selected" : ""}" type="button"
      data-avatar-gender="${gender}" aria-pressed="${avatarGender === gender}">
      ${studentAvatarMarkup({ ...student, avatarGender: gender }, "avatar-gender-preview")}${label}
    </button>`
  ).join("");
  const isAvatarBuilder = state.screen === "avatar-builder";
  return `${flashBar()}<section class="student-profile ${isAvatarBuilder ? "avatar-builder-view" : ""}">
    ${isAvatarBuilder
      ? `      <header class="avatar-builder-heading"><button class="btn btn-ghost" type="button" data-back="games" aria-label="${tt.gamesBack}">←</button>
          <div><h1>${tt.avatarGameTitle}</h1><p class="muted">${tt.avatarGameDescription}</p></div></header>`
      : `<header class="student-profile-heading">
          <img class="student-profile-avatar" src="${escapeHtml(student.avatar || "assets/avatar.jpg")}" alt="${displayName(student)}">
          <div><h1>${tt.profileTitle}</h1><p class="muted">${tt.profileIntro}</p></div>
        </header>`}
    <div class="grid-feat student-profile-stats">
      <div class="card">${uiIcon("star", 28)}<strong>${Number(student.stars) || 0}</strong><span>${tt.stars}</span></div>
      <div class="card">${uiIcon("book", 28)}<strong>${Number(student.books) || 0}</strong><span>${tt.booksRead}</span></div>
      <div class="card">${uiIcon("medal", 28)}<strong>${badges.length}</strong><span>${tt.badges}</span></div>
    </div>
    <section class="card student-avatar-shop ${isAvatarBuilder ? "" : "hidden"}">
      <div class="student-avatar-preview">
        <h2>${tt.avatarMaker}</h2>
        <p class="muted">${tt.avatarIntro}</p>
        <div class="student-avatar-stage">${studentAvatarMarkup(student)}</div>
        <strong class="student-avatar-wearing">${tt.avatarWearing}: ${[
          ar()
            ? (OUTFITS.find((outfit) => outfit.id === student.equippedOutfit) || OUTFITS[0]).ar
            : (OUTFITS.find((outfit) => outfit.id === student.equippedOutfit) || OUTFITS[0]).en,
          ...(student.equippedAvatarGlasses
            ? [ar() ? AVATAR_GLASSES.find((item) => item.id === student.equippedAvatarGlasses)?.ar : AVATAR_GLASSES.find((item) => item.id === student.equippedAvatarGlasses)?.en] : []),
          ...(student.equippedAvatarHat
            ? [ar() ? AVATAR_HATS.find((item) => item.id === student.equippedAvatarHat)?.ar : AVATAR_HATS.find((item) => item.id === student.equippedAvatarHat)?.en] : [])
        ].filter(Boolean).map(escapeHtml).join(" · ")}</strong>
        <div class="avatar-customization">
          <div class="avatar-choice-group avatar-gender-group"><strong>${tt.avatarGender}</strong><div class="avatar-gender-row">${genderOptions}</div></div>
          <div class="avatar-choice-group"><strong>${tt.avatarSkinTone}</strong><div class="avatar-swatch-row">${skinSwatches}</div></div>
          ${avatarGender === "girl"
            ? `<div class="avatar-choice-group"><strong>${tt.avatarHijabColor}</strong><div class="avatar-swatch-row">${hijabSwatches}</div></div>`
            : `<div class="avatar-choice-group"><strong>${tt.avatarHairColor}</strong><div class="avatar-swatch-row">${hairSwatches}</div></div>
               <div class="avatar-choice-group"><strong>${tt.avatarHairStyle}</strong><div class="avatar-style-row">${hairStyles}</div></div>`}
        </div>
      </div>
      <div class="student-outfit-shop">
        <div class="section-head"><h2>${tt.avatarShop}</h2><span class="student-star-balance">${avatarStarIcon()} ${Number(student.stars) || 0} ${tt.avatarCurrentStars}</span></div>
        <section class="avatar-shop-category"><h3>${tt.avatarOutfits}</h3><div class="student-outfit-grid">${outfitCards}</div></section>
        <section class="avatar-shop-category">
          <div class="avatar-category-heading"><h3>${tt.avatarGlasses}</h3><button class="btn btn-ghost" type="button" data-avatar-clear="glasses">${tt.avatarNoAccessory}</button></div>
          <div class="student-outfit-grid">${glassesCards}</div>
        </section>
        <section class="avatar-shop-category">
          <div class="avatar-category-heading"><h3>${tt.avatarHats}</h3><button class="btn btn-ghost" type="button" data-avatar-clear="hat">${tt.avatarNoAccessory}</button></div>
          <div class="student-outfit-grid">${hatCards}</div>
        </section>
      </div>
    </section>
    ${isAvatarBuilder ? "" : `<div class="student-profile-sections">
      <aside class="student-profile-side">
        <section class="card student-rewards">
          <h2>${tt.myRewards}</h2>
          ${badges.length
            ? `<div class="badge-list">${badges.map((badge) => `<span class="kid-badge">${uiIcon("star", 16)}${escapeHtml(badge)}</span>`).join("")}</div>`
            : `<p class="muted">${tt.noBadges}</p>`}
          ${nextMilestone
            ? `<p class="muted">${tt.nextStarReward} ${nextMilestone} ${tt.stars} · ${Math.max(0, nextMilestone - (Number(student.stars) || 0))} ${tt.starsRemaining}</p>
               <div class="bar student-reward-progress"><span style="width:${starProgress}%;background:#ffc107"></span></div>`
            : `<p class="muted">${tt.allRewardsEarned}</p>`}
        </section>
        <section class="student-messages">
          <div class="section-head"><h2>${tt.encouragementMessages}</h2><span class="level-chip">${messages.length}</span></div>
          ${messageCards || `<div class="card student-message-empty">${uiIcon("message", 36)}<p>${tt.noEncouragementMessages}</p></div>`}
        </section>
        <section class="student-recordings">
          <div class="section-head"><h2>${ar() ? "تسجيلاتي الصوتية" : "My voice recordings"}</h2><span class="level-chip">${recordings.length}</span></div>
          ${recordings.length ? recordings.map((recording) => `<article class="card student-recording-item">
            <div><strong>${bookTitle(findBook(recording.bookId) || BOOKS[0])}</strong>
              <span class="muted">${ar() ? "صفحة" : "Page"} ${Number(recording.page) || 1} · ${escapeHtml(recording.dur || "—")}</span>
              ${recordingAudioPlayer(recording)}</div>
            <button class="btn btn-ghost" type="button" data-delete-recording="${escapeHtml(recording.id)}">
              ${ar() ? "حذف التسجيل" : "Delete recording"}
            </button>
          </article>`).join("") : `<p class="muted">${ar() ? "لا توجد تسجيلات محفوظة بعد." : "No saved recordings yet."}</p>`}
        </section>
      </aside>
    </div>`}
  </section>`;
}

function accountProfileView() {
  const user = sessionUser();
  const data = db();
  const tt = t();
  const isParent = user.role === "parent";
  const students = isParent
    ? data.users.filter((student) => student.role === "student" &&
      (user.childIds?.includes(student.id) || student.parentId === user.id))
    : studentsForTeacher(data, user);
  const recordings = data.recordings.filter((recording) =>
    students.some((student) => student.id === recording.studentId));
  const assignments = isParent ? [] : data.assignments.filter((assignment) =>
    assignment.teacherId === user.id);
  const summary = isParent
    ? [
      ["family", students.length, tt.profileChildrenCount],
      ["goal", Number(user.familyGoalMins) || 60, tt.profileFamilyGoal],
      ["microphone", recordings.length, tt.profileRecordingsCount]
    ]
    : [
      ["teacher", students.length, tt.profileStudentsCount],
      ["book", assignments.length, tt.profileAssignmentsCount],
      ["microphone", recordings.length, tt.profileRecordingsCount]
    ];
  return `${flashBar()}<section class="student-profile account-profile">
    <header class="student-profile-heading">
      <img class="student-profile-avatar" src="${escapeHtml(user.avatar || "assets/logo.jpg")}" alt="${displayName(user)}">
      <div><h1>${tt.accountProfileTitle}</h1><p class="muted">${tt.accountProfileIntro}</p></div>
    </header>
    <div class="grid-feat student-profile-stats">
      ${summary.map(([icon, value, label]) => `<div class="card">
        ${uiIcon(icon, 28)}<strong>${value}</strong><span>${label}</span>
      </div>`).join("")}
    </div>
    <section class="card student-profile-details account-profile-details">
      <h2>${tt.editMyDetails}</h2>
      <form class="student-profile-form" id="account-profile-form">
        <label>${tt.name}<input name="name" maxlength="60" value="${escapeHtml(user.name || "")}" required></label>
        <label>${tt.email}<input name="email" type="email" dir="ltr" value="${escapeHtml(user.email || "")}" ${isParent ? 'readonly aria-readonly="true"' : ""} required>
          <span class="field-hint">${isParent ? tt.profileEmailReadOnlyHint : tt.profileEmailHint}</span></label>
        ${isParent ? `<label>${tt.profileReadingLanguage}
          <select name="readingLanguage">
            <option value="ar" ${user.readingLanguage === "ar" ? "selected" : ""}>${ar() ? "العربية" : "Arabic"}</option>
            <option value="en" ${user.readingLanguage === "en" ? "selected" : ""}>${ar() ? "الإنجليزية" : "English"}</option>
            <option value="both" ${!user.readingLanguage || user.readingLanguage === "both" ? "selected" : ""}>${ar() ? "العربية والإنجليزية" : "Arabic and English"}</option>
          </select></label>` : ""}
        <label>${tt.profilePhoto}<input name="avatar" type="file" accept="image/*">
          <span class="field-hint">${tt.profilePhotoHint}</span></label>
        ${user.role === "teacher" ? `<div class="teacher-profile-editor">
          <p class="teacher-profile-disclaimer">${tt.teacherProfileNotice}</p>
          <label>${tt.teacherBioLabel}<textarea name="teacherBio" maxlength="600" rows="4">${escapeHtml(user.teacherBio || "")}</textarea></label>
          <label>${tt.teacherSpecialtiesLabel}<input name="teacherSpecialties" maxlength="200" value="${escapeHtml(user.teacherSpecialties || "")}">
            <span class="field-hint">${ar() ? "افصل بين التخصصات بفاصلة." : "Separate specialties with commas."}</span></label>
          <label>${tt.teacherExperienceLabel}<input name="teacherExperienceYears" type="number" min="0" max="60" value="${escapeHtml(user.teacherExperienceYears ?? "")}"></label>
          <label>${ar() ? "المدرسة أو المؤسسة" : "School or institution"}<input name="teacherInstitution" maxlength="120" value="${escapeHtml(user.teacherInstitution || "")}"></label>
          <label>${tt.teacherQualificationsLabel}<textarea name="teacherQualifications" maxlength="300" rows="3">${escapeHtml(user.teacherQualifications || "")}</textarea></label>
          <label>${tt.teacherApproachLabel}<textarea name="teacherApproach" maxlength="500" rows="4">${escapeHtml(user.teacherApproach || "")}</textarea></label>
        </div>` : ""}
        <div class="student-profile-password-row">
          <label>${tt.newPasswordOptional}<input name="password" type="password" minlength="6" autocomplete="new-password"></label>
          <button class="btn btn-green" type="submit">${tt.saveChanges}</button>
        </div>
      </form>
    </section>
  </section>`;
}

function libraryView() {
  const tt = t();
  const user = sessionUser();
  const levelFilter = state.lvl;
  const list = catalogBooks().filter((b) =>
    (state.filter === "all" || b.s === state.filter) &&
    (levelFilter === 0 || b.l === levelFilter));
  const pill = (on) => `height:42px;padding:0 14px;border-radius:999px;font-size:16px;font-weight:800;${on ? "border:3px solid #e2457a;background:#f06292;color:#fff" : "border:3px solid #f1e6d2;background:#fff;color:#5d5677"}`;
  const levels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) =>
    `<button style="${pill(levelFilter === n)}" data-lvl="${n}">${n === 0 ? tt.all : n}</button>`).join("");
  const series = [["all", tt.all], ["rabbi", tt.sRabbi], ["adhkar", tt.sAdhkar], ["akhlaq", tt.sAkhlaq]]
    .map(([k, l]) => `<button style="${pill(state.filter === k)}" data-filter="${k}">${l}</button>`).join("");
  return `${flashBar()}<section style="display:flex;flex-direction:column;gap:20px">
    <h1 style="font-size:40px">${tt.library}</h1>
    <div class="chip-row"><span style="font-weight:800;color:#5d5677">${tt.level}:</span>${levels}</div>
    <div class="chip-row"><span style="font-weight:800;color:#5d5677">${tt.series}:</span>${series}</div>
    ${list.length ? `<div class="grid-books grid-books-lg">${list.map((b) => bookCard(b, true)).join("")}</div>` : `<div class="alert alert-info">${tt.comingSoon}</div>`}
  </section>`;
}

function readerView() {
  const tt = t();
  const user = sessionUser();
  const book = findBook(user.currentBook) || BOOKS[0];
  if (bookLockedForUser(book, user)) {
    return `${flashBar()}<section style="display:flex;flex-direction:column;gap:18px">
      <div class="alert alert-info">${bookAccessMode(book) === "paid" ? `${tt.paidContent} · ${book.purchasePrice || 0} ر.س` : tt.lockedForSubscription}</div>
      <button class="btn btn-blue" data-go="library">${tt.library}</button>
    </section>`;
  }
  if (book.l > user.level) {
    return `${flashBar()}<section style="display:flex;flex-direction:column;gap:18px">
      <div class="alert alert-info">${tt.bookLocked}</div>
      <button class="btn btn-blue" data-go="library">${tt.library}</button>
    </section>`;
  }
  const pages = bookPages(book);
  state.page = Math.min(Math.max(0, state.page), pages.length - 1);
  const pg = pages[Math.min(state.page, pages.length - 1)];
  const elapsed = Math.floor(((state.accMs || 0) + (state.segStart ? Date.now() - state.segStart : 0)) / 1000);
  const goal = 15 * 60;
  const pct = Math.min(100, Math.round(elapsed / goal * 100));
  const pad = (n) => (n < 10 ? "0" : "") + n;
  const last = state.page === pages.length - 1;
  const hasUnsentRecording = pendingReadingRecording && !pendingReadingRecording.sent;
  const waveformBars = pendingReadingRecording ? recordingWaveformBars() : "";
  let wordIndex = 0;
  const pageLines = (ar() ? pg.ar : pg.en).map((line) => {
    const tokens = String(line).split(/(\s+)/);
    return `<p>${tokens.map((token) => /\s+/.test(token)
      ? escapeHtml(token)
      : `<span data-reader-word="${wordIndex++}">${escapeHtml(token)}</span>`).join("")}</p>`;
  }).join("");
  return `${flashBar()}<section class="reader">
    <div class="alert alert-info">${tt.protectionNotice}</div>
    <div class="row" style="align-items:center">
      <button class="btn btn-muted" data-go="library">${tt.back}</button>
      <strong style="font-size:26px;flex:1">${bookTitle(book)}</strong>
      <span class="muted">${ar() ? "صفحة " : "Page "}${state.page + 1} / ${pages.length}</span>
    </div>
    <div class="bar"><span style="width:${Math.round((state.page + 1) / pages.length * 100)}%;background:#4fc3f7"></span></div>
    <div class="card" style="border-color:#ffd54f;flex-direction:row;flex-wrap:wrap;align-items:center;gap:14px">
      <div><div style="font-size:14px;font-weight:800;color:#a86b00">${tt.timerTitle}</div>
      <div dir="ltr" style="font-size:28px;font-weight:800">${pad(Math.floor(elapsed / 60))}:${pad(elapsed % 60)} <span class="muted">/ 15:00</span></div></div>
      <div class="bar" style="flex:1 1 180px;background:#fff3c4"><span style="width:${pct}%;background:${pct >= 100 ? "#6cc551" : "#ffb300"}"></span></div>
      ${pct >= 100 ? `<strong style="color:#2f7d2a">${tt.goalDone}</strong>` : ""}
    </div>
    <div class="page-card">
      <img src="${escapeHtml(pg.img || "assets/book-continue.jpg")}" alt="">
      <div class="page-text">${pageLines}</div>
    </div>
    <div class="controls">
      <button class="btn btn-lg btn-muted" data-act="prev">${tt.prev}</button>
      <button class="btn btn-lg btn-gold" data-act="speak">${svg(ICONS.mic, 26, 26, "#6b4600")}${tt.listen}</button>
      ${hasUnsentRecording ? "" : `<button class="btn btn-lg ${state.rec === "rec" ? "btn-red" : "btn-pink"}" data-act="rec" ${["starting", "saving", "sending"].includes(state.rec) ? "disabled" : ""}>${state.rec === "rec" ? `<span class="recording-waveform" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span>` : `<span class="recording-idle-dot" aria-hidden="true"></span>`}${state.rec === "rec" ? tt.recStop : state.rec === "saved" ? tt.recDone : state.rec === "starting" ? tt.recStarting : state.rec === "saving" ? tt.recSaving : state.rec === "sending" ? tt.recSending : tt.recStart}</button>`}
      ${last ? `<button class="btn btn-lg btn-green" data-go="quiz">${tt.toQuiz}</button>` : `<button class="btn btn-lg btn-blue" data-act="next">${tt.next}</button>`}
    </div>
    ${pendingReadingRecording ? `<section class="recording-preview ${pendingReadingRecording.sent ? "is-sent" : ""}" aria-live="polite">
      <div class="recording-preview-heading">
        <span class="recording-preview-icon" aria-hidden="true">${svg(ICONS.mic, 22, 22, "currentColor")}</span>
        <div><strong>${pendingReadingRecording.sent ? tt.recSentTitle : tt.recReviewTitle}</strong><p>${pendingReadingRecording.sent ? tt.recSavedMsg : tt.recReviewHint}</p></div>
        <span class="recording-preview-duration" dir="ltr">${recordingDurationLabel(pendingReadingRecording.duration)}</span>
      </div>
      <div class="recording-audio-player" data-duration="${pendingReadingRecording.duration}">
        <audio class="recording-preview-audio" preload="metadata" src="${escapeHtml(pendingReadingRecording.url)}" aria-hidden="true" tabindex="-1"></audio>
        <button class="recording-play-toggle" type="button" data-recording-toggle aria-label="${tt.recPlay}" aria-pressed="false">${svg(ICONS.play, 22, 22, "currentColor", "currentColor")}</button>
        <div class="recording-waveform-track">
          <div class="recording-waveform-bars" aria-hidden="true">${waveformBars}</div>
          <div class="recording-waveform-bars recording-waveform-bars-played" aria-hidden="true">${waveformBars}</div>
          <input class="recording-waveform-seek" type="range" min="0" max="1000" step="1" value="0" data-recording-seek aria-label="${tt.recSeek}" aria-valuetext="0:00 / ${recordingDurationLabel(pendingReadingRecording.duration)}" disabled>
        </div>
        <div class="recording-player-time" dir="ltr"><span data-recording-current>0:00</span><span aria-hidden="true">/</span><span data-recording-duration>${recordingDurationLabel(pendingReadingRecording.duration)}</span></div>
      </div>
      ${pendingReadingRecording.sent ? "" : `<div class="recording-preview-actions">
        <button class="btn btn-outline" type="button" data-act="retake-recording" ${state.rec === "sending" ? "disabled" : ""}>${tt.recRetake}</button>
        <button class="btn btn-green" type="button" data-act="send-recording" ${state.rec === "sending" ? "disabled" : ""}>${state.rec === "sending" ? tt.recSending : tt.recSend}</button>
      </div>`}
    </section>` : ""}
    <p class="muted">${tt.recordingPermissionHint}</p>
  </section>`;
}

function quizView() {
  const tt = t();
  const currentBook = findBook(sessionUser().currentBook);
  const customQuiz = currentBook?.quiz;
  const correctIndex = customQuiz?.correctIndex ?? 0;
  const question = customQuiz ? (ar() ? customQuiz.questionAr : customQuiz.questionEn) : tt.quizQ;
  const options = customQuiz ? (ar() ? customQuiz.optionsAr : customQuiz.optionsEn)
    : ar() ? ["ثلث القرآن", "نصف القرآن", "ربع القرآن"] : ["One third of the Quran", "Half of the Quran", "A quarter of the Quran"];
  const opts = options.map((label, i) => {
    let cls = "option";
    if (state.answer === i) cls += i === correctIndex ? " right" : " wrong";
    return `<button class="${cls}" data-ans="${i}">${escapeHtml(label)}</button>`;
  }).join("");
  return `<section class="quiz">
    <span class="pill" style="align-self:center;background:#e3f5fd;color:#1e88d6;border:none">${tt.quizTag}</span>
    <h1 style="text-align:center;font-size:32px">${escapeHtml(question)}</h1>
    <div style="display:flex;flex-direction:column;gap:12px">${opts}</div>
    ${state.answer === correctIndex ? `<div class="alert alert-ok" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px"><span>${tt.right}</span><button class="btn btn-green" data-go="library">${ar() ? "إكمال القراءة من المكتبة" : "Continue reading from the library"}</button></div>` : ""}
    ${state.answer !== null && state.answer !== correctIndex ? `<div class="alert alert-err">${tt.wrong}</div>` : ""}
  </section>`;
}

function gameView() {
  const tt = t();
  const GW = ar()
    ? [{ ans: "ش", rest: "ـمس", alt: "شمس" }, { ans: "ك", rest: "ـتاب", alt: "كتاب" }, { ans: "ق", rest: "ـمر", alt: "قمر" }]
    : [{ ans: "S", rest: "un", alt: "sun" }, { ans: "B", rest: "ook", alt: "book" }, { ans: "M", rest: "oon", alt: "moon" }];
  const POOL = ar() ? ["ق", "ب", "ش", "ك"] : ["M", "T", "S", "B"];
  const TC = ["#4fc3f7", "#f06292", "#6cc551", "#ffb300"];
  const cards = GW.map((w, i) => {
    const pl = state.placed[i];
    const ok = pl === w.ans;
    const bad = pl && !ok;
    return `<div class="game-card ${ok ? "is-complete" : bad ? "needs-retry" : ""}">
      <span class="game-card-number">${i + 1}</span>
      <strong class="game-word">${w.alt}</strong>
      <div style="display:flex;align-items:center;gap:2px">
        <button class="slot ${ok ? "is-correct" : bad ? "is-wrong" : ""}" data-slot="${i}" data-drop-kind="letter-slot" data-drop-index="${i}" aria-label="${tt.gameTitle} ${i + 1}">${pl || "?"}</button>
        <span class="game-word-rest">${w.rest}</span>
      </div>
      <span class="game-card-feedback ${ok ? "is-success" : bad ? "is-error" : ""}" aria-live="polite">${ok ? tt.good : bad ? tt.tryAgain : tt.gameSlotHint}</span>
    </div>`;
  }).join("");
  const tiles = POOL.map((ch, i) => `<button class="tile ${state.sel === ch ? "sel" : ""}" data-tile="${ch}" data-pointer-drag="letter" data-drag-value="${ch}" style="--tile-color:${TC[i]}" aria-pressed="${state.sel === ch}">${ch}</button>`).join("");
  const done = GW.every((w, i) => state.placed[i] === w.ans);
  return `${flashBar()}<section class="game">
    <button class="btn btn-ghost learning-game-back" data-back="games" aria-label="${tt.gamesBack}">←</button>
    <header class="learning-game-heading">
      <span class="pill learning-game-pill">${tt.gameTag}</span>
      <h1>${tt.gameTitle}</h1><p class="muted">${tt.gameHelp}</p>
    </header>
    <div class="learning-game-progress">${tt.gameRoundProgress} · ${GW.filter((word, index) => state.placed[index] === word.ans).length} / ${GW.length}
      <div class="bar"><span style="width:${Math.round(GW.filter((word, index) => state.placed[index] === word.ans).length / GW.length * 100)}%;background:#ffc107"></span></div>
    </div>
    <div class="game-grid">${cards}</div>
    <div class="letter-game-controls">
      <strong>${tt.gamePickLetter}</strong>
      <div class="controls">${tiles}</div>
    </div>
    ${state.sel ? `<div class="selected-letter-hint" aria-live="polite">${tt.gameSelectedLetter}: <strong>${escapeHtml(state.sel)}</strong></div>` : ""}
    ${done ? `<div class="learning-game-finish game-celebration"><div class="celebration-stars" aria-hidden="true">⭐ 👏 ⭐</div><img src="assets/game-trophy.svg" alt="" aria-hidden="true"><h2>${tt.gameWin}</h2>
      <div class="game-reward-notice" role="status">${state.letterGameRewardStatus === "awarded"
        ? (ar() ? "وصلت 3 نجوم إلى رصيدك!" : "3 stars were added to your balance!")
        : state.letterGameRewardStatus === "claimed" ? tt.gameRewardAlreadyEarned : ""}</div>
      <div class="row"><button class="btn btn-green" data-act="reset-game">${tt.playAgain}</button><button class="btn btn-ghost game-finish-back" data-back="games" aria-label="${tt.gamesBack}">←</button></div></div>` : ""}
  </section>`;
}

function learningGamesView() {
  const tt = t();
  const games = [
    { id: "game", image: "game-letters", color: "gold", title: tt.letterGameName, description: tt.letterGameDescription, detail: tt.gameHelp },
    { id: "word-hunt", image: "game-hunt", color: "pink", title: tt.wordHuntCardTitle, description: tt.wordHuntCardText, detail: tt.wordHuntHelp },
    { id: "word-builder", image: "game-builder", color: "blue", title: tt.wordBuilderCardTitle, description: tt.wordBuilderCardText, detail: tt.wordBuilderHelp },
    { id: "avatar-builder", image: "game-avatar", color: "teal", title: tt.avatarGameTitle, description: tt.avatarGameDescription, detail: tt.avatarIntro }
  ];
  return `${flashBar()}<section class="learning-games-page">
    <header class="games-page-heading">
      <span class="pill learning-game-pill">${tt.learningGames}</span>
      <h1>${tt.gamesTitle}</h1>
      <p class="muted">${tt.gamesIntro}</p>
      <strong class="games-count">${tt.gamesCount}</strong>
    </header>
    <div class="learning-games-grid">
      ${games.map((game, index) => `<article class="learning-game-tile ${game.color} ${game.id === "avatar-builder" ? "avatar-card" : ""}">
        <div class="learning-game-tile-visual" aria-hidden="true">
          ${game.id === "avatar-builder"
            ? `<div class="game-avatar-portrait">${studentAvatarMarkup(sessionUser(), "game-avatar-art")}</div>`
            : `<img src="assets/${game.image}.svg" alt="" loading="lazy">`}
        </div>
        <div class="learning-game-tile-body">
          <span class="learning-game-number">${tt.gameRoundProgress} ${index + 1}</span>
          <h2>${game.title}</h2>
          <p>${game.description}</p>
          <small>${game.detail}</small>
          <button class="btn ${index === 0 ? "btn-gold" : index === 1 ? "btn-pink" : index === 2 ? "btn-blue" : "btn-green"}" data-go="${game.id}">${index === 3 ? tt.avatarGameTitle : tt.gamesPlay}<span aria-hidden="true"> ›</span></button>
        </div>
      </article>`).join("")}
    </div>
    <button class="btn btn-ghost learning-game-back" data-back="kid">← ${tt.back}</button>
  </section>`;
}

function awardGameStars(gameId, amount) {
  const current = sessionUser();
  const data = db();
  const student = data.users.find((user) => user.id === current?.id && user.role === "student");
  if (!student || current?.role !== "student") {
    state.flash = t().noAccess;
    return "error";
  }
  const today = dateKey(new Date());
  student.gameRewards = student.gameRewards && typeof student.gameRewards === "object"
    ? student.gameRewards : {};
  if (student.gameRewards[gameId] === today) {
    return "claimed";
  }
  student.gameRewards[gameId] = today;
  student.stars = (Number(student.stars) || 0) + amount;
  try {
    save(data);
  } catch {
    state.flash = t().profileSaveError;
    return "error";
  }
  return "awarded";
}

function speakGameMessage(message) {
  if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") return;
  const utterance = new SpeechSynthesisUtterance(message);
  utterance.lang = ar() ? "ar-SA" : "en-US";
  utterance.rate = 0.9;
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

function placeGameLetter(slotIndex, letter) {
  const answers = ar() ? ["ش", "ك", "ق"] : ["S", "B", "M"];
  if (!Number.isInteger(slotIndex) || slotIndex < 0 || slotIndex >= answers.length ||
    state.letterGameRewardStatus) return;
  const placed = state.placed.slice();
  placed[slotIndex] = letter;
  const wasDone = state.placed.every((value, index) => value === answers[index]);
  const done = placed.every((value, index) => value === answers[index]);
  const correct = letter === answers[slotIndex];
  if (!correct) speakGameMessage(ar() ? "أتفهم، أعدها من جديد" : "I understand. Let's try again.");
  else speakGameMessage(ar() ? "أحسنت!" : "Well done!");
  if (done && !wasDone) {
    const current = sessionUser();
    const data = db();
    const user = data.users.find((student) => student.id === current?.id && student.role === "student");
    if (!user) {
      state.flash = t().noAccess;
    } else {
      user.completedLevels = user.completedLevels || [];
      if (!(user.quizLevels || []).includes(user.level)) {
        state.flash = t().finishQuizFirst;
      } else {
        const completedAssignment = completeBookAssignments(data, user.id, user.currentBook);
        const completedLevel = user.level;
        let advancedLevel = false;
        if (findBook(user.currentBook)?.l === completedLevel &&
          !user.completedLevels.includes(completedLevel)) {
          user.completedLevels.push(completedLevel);
          user.stars += 5;
          user.books += 1;
          user.level = Math.min(STAGE.reduce((count, stage) => count + stage.L.length, 0), user.level + 1);
          const nextBook = catalogBooks().find((book) => book.l === user.level);
          if (nextBook) user.currentBook = nextBook.id;
          user.progress = studentProgress(user);
          advancedLevel = true;
        }
        state.flash = completedAssignment ? t().homeworkSaved
          : advancedLevel
            ? user.level === completedLevel ? t().allLevelsDone : t().nextLevel
            : t().readingComplete;
        save(data);
        state.letterGameRewardStatus = awardGameStars("letterGame", 3);
        speakGameMessage(ar() ? "يا بطل، أكملت الكلمات وحصلت على ثلاث نجوم!" : "Amazing! You finished the words and earned three stars!");
      }
    }
  }
  state.placed = placed;
  state.sel = null;
  render();
}

function placeBuilderLetter(slotIndex, letterIndex) {
  const round = WORD_BUILDER_ROUNDS[ar() ? "ar" : "en"][state.wordBuilderRound];
  if (!round || state.wordBuilderFeedback === "right" ||
    !Number.isInteger(slotIndex) || slotIndex < 0 || slotIndex >= round.letters.length ||
    !Number.isInteger(letterIndex) || letterIndex < 0 || letterIndex >= round.letters.length) return;
  const letters = [...state.wordBuilderLetters];
  const previousSlot = letters.indexOf(letterIndex);
  if (previousSlot >= 0) letters.splice(previousSlot, 1);
  letters.splice(Math.min(slotIndex, letters.length), 0, letterIndex);
  state.wordBuilderLetters = letters;
  state.wordBuilderHistory[state.wordBuilderRound] = [...letters];
  state.wordBuilderFeedback = "";
  render();
}

function wirePointerGameDrag() {
  if (document.documentElement.dataset.bayanGamePointerDrag) return;
  document.documentElement.dataset.bayanGamePointerDrag = "true";
  let activeDrag = null;
  const releaseDrag = (source) => {
    source.classList.remove("is-dragging");
    source.style.removeProperty("--drag-x");
    source.style.removeProperty("--drag-y");
  };
  document.addEventListener("pointerdown", (event) => {
    const source = event.target.closest("[data-pointer-drag]");
    if (!source || (event.button !== undefined && event.button !== 0)) return;
    activeDrag = {
      pointerId: event.pointerId,
      source,
      startX: event.clientX,
      startY: event.clientY,
      moved: false
    };
    source.classList.add("is-dragging");
  });
  document.addEventListener("pointermove", (event) => {
    if (!activeDrag || event.pointerId !== activeDrag.pointerId) return;
    if (Math.hypot(event.clientX - activeDrag.startX, event.clientY - activeDrag.startY) > 8) {
      activeDrag.moved = true;
    }
    if (activeDrag.moved) {
      activeDrag.source.style.setProperty("--drag-x", `${event.clientX - activeDrag.startX}px`);
      activeDrag.source.style.setProperty("--drag-y", `${event.clientY - activeDrag.startY}px`);
    }
  });
  document.addEventListener("pointerup", (event) => {
    if (!activeDrag || event.pointerId !== activeDrag.pointerId) return;
    const drag = activeDrag;
    activeDrag = null;
    const target = drag.moved
      ? document.elementFromPoint(event.clientX, event.clientY)?.closest("[data-drop-kind]")
      : null;
    releaseDrag(drag.source);
    if (!drag.moved) return;
    state.lastPointerDragAt = Date.now();
    if (!target) return;
    if (drag.source.dataset.pointerDrag === "letter" && target.dataset.dropKind === "letter-slot") {
      placeGameLetter(Number(target.dataset.dropIndex), drag.source.dataset.dragValue);
    }
    if (drag.source.dataset.pointerDrag === "builder-letter" && target.dataset.dropKind === "builder-slot") {
      placeBuilderLetter(Number(target.dataset.dropIndex), Number(drag.source.dataset.dragValue));
    }
  });
  document.addEventListener("pointercancel", (event) => {
    if (!activeDrag || event.pointerId !== activeDrag.pointerId) return;
    releaseDrag(activeDrag.source);
    activeDrag = null;
  });
}

function wordHuntView() {
  const tt = t();
  const rounds = WORD_HUNT_ROUNDS[ar() ? "ar" : "en"];
  const round = rounds[state.wordHuntRound];
  if (!round) {
    const alreadyRewarded = sessionUser()?.gameRewards?.wordHunt === dateKey(new Date());
    const rewardMessage = state.wordHuntRewardStatus === "awarded" ? tt.wordHuntReward
      : state.wordHuntRewardStatus === "claimed" || alreadyRewarded ? tt.wordHuntRewardClaimed : "";
    return `${flashBar()}<section class="learning-game-page">
      <span class="pill learning-game-pill">${tt.wordHuntTitle}</span>
      <div class="learning-game-finish game-celebration">
        <div class="celebration-stars" aria-hidden="true">⭐ 👏 ⭐</div>
        <img src="assets/game-trophy.svg" alt="" aria-hidden="true"><h1>${tt.wordHuntComplete}</h1>
        ${rewardMessage ? `<div class="game-reward-notice" role="status">${rewardMessage}</div>` : ""}
        <div class="game-earned-points">${state.wordHuntRewardStatus === "awarded" || alreadyRewarded
          ? (ar() ? "⭐ 3 نجوم" : "⭐ 3 stars") : ""}</div>
        <div class="row"><button class="btn btn-green" data-act="restart-word-hunt">${tt.playAgain}</button><button class="btn btn-ghost game-finish-back" data-back="games" aria-label="${tt.gamesBack}">←</button></div>
      </div>
    </section>`;
  }
  const correct = state.wordHuntChoice === round.answer;
  const pictureNames = ar()
    ? { moon: "القمر", sun: "الشمس", book: "الكتاب", flower: "الزهرة", house: "البيت", fish: "السمكة" }
    : { moon: "moon", sun: "sun", book: "book", flower: "flower", house: "house", fish: "fish" };
  const choices = round.choices.map((picture, index) => {
    const chosen = state.wordHuntChoice === index;
    const resultClass = correct && chosen ? "is-correct"
      : chosen ? "is-incorrect" : "";
    return `<button class="word-hunt-choice ${resultClass}" data-hunt-choice="${index}"
      aria-label="${escapeHtml(pictureNames[picture] || picture)}" ${correct ? "disabled" : ""}><img src="assets/game-picture-${picture}.svg" alt="${escapeHtml(pictureNames[picture] || picture)}" loading="lazy"></button>`;
  }).join("");
  return `${flashBar()}<section class="learning-game-page">
    <div class="learning-game-step-nav">
      <button class="game-arrow-button is-back" type="button" data-back="games" aria-label="${tt.gamesBack}">←</button>
      <button class="game-arrow-button" type="button" data-hunt-previous aria-label="${tt.prev}" ${state.wordHuntRound <= 0 ? "disabled" : ""}>←</button>
      <span>${tt.wordHuntRound} ${state.wordHuntRound + 1} / ${rounds.length}</span>
      <button class="game-arrow-button is-next" type="button" data-hunt-next aria-label="${tt.wordHuntNext}" ${correct ? "" : "disabled"}>→</button>
    </div>
    <header class="learning-game-heading">
      <span class="pill learning-game-pill">${tt.wordHuntTitle}</span>
      <h1>${tt.wordHuntTitle}</h1><p class="muted">${tt.wordHuntHelp}</p>
    </header>
    <div class="learning-game-progress">${tt.wordHuntRound} ${state.wordHuntRound + 1} / ${rounds.length}
      <div class="bar"><span style="width:${Math.round((state.wordHuntRound + 1) / rounds.length * 100)}%;background:#f06292"></span></div>
    </div>
    <div class="word-hunt-board">
      <div class="word-hunt-scene">
        <img src="assets/game-hunt-scene.svg" alt="${ar() ? "طفل يصطاد الكلمات من كتاب" : "A child fishing for words from a book"}">
        <span class="word-hunt-word">${escapeHtml(round.word)}</span>
      </div>
      <div class="word-hunt-choices">${choices}</div>
    </div>
    <div class="learning-game-feedback ${correct ? "is-success" : state.wordHuntChoice !== null ? "is-error" : ""}" aria-live="polite">
      ${correct ? `${tt.wordHuntCorrect} 👏 ⭐` : state.wordHuntChoice !== null ? tt.wordHuntWrong : tt.wordHuntHelp}
    </div>
    <div class="learning-game-actions">
      ${correct ? `<button class="btn btn-green" data-hunt-next>${tt.wordHuntNext}</button>` : ""}
    </div>
  </section>`;
}

function wordBuilderView() {
  const tt = t();
  const rounds = WORD_BUILDER_ROUNDS[ar() ? "ar" : "en"];
  const round = rounds[state.wordBuilderRound];
  if (!round) {
    const alreadyRewarded = sessionUser()?.gameRewards?.wordBuilder === dateKey(new Date());
    const rewardMessage = state.wordBuilderRewardStatus === "awarded" ? tt.wordBuilderReward
      : state.wordBuilderRewardStatus === "claimed" || alreadyRewarded ? tt.wordBuilderRewardClaimed : "";
    return `${flashBar()}<section class="learning-game-page">
      <span class="pill learning-game-pill">${tt.wordBuilderTitle}</span>
      <div class="learning-game-finish game-celebration">
        <div class="celebration-stars" aria-hidden="true">⭐ 👏 ⭐</div>
        <img src="assets/game-trophy.svg" alt="" aria-hidden="true"><h1>${tt.wordBuilderComplete}</h1>
        ${rewardMessage ? `<div class="game-reward-notice" role="status">${rewardMessage}</div>` : ""}
        <div class="game-earned-points">${state.wordBuilderRewardStatus === "awarded" || alreadyRewarded
          ? (ar() ? "⭐ 4 نجوم" : "⭐ 4 stars") : ""}</div>
        <div class="row"><button class="btn btn-green" data-act="restart-word-builder">${tt.playAgain}</button><button class="btn btn-ghost game-finish-back" data-back="games" aria-label="${tt.gamesBack}">←</button></div>
      </div>
    </section>`;
  }
  const letters = Array.isArray(state.wordBuilderLetters) ? state.wordBuilderLetters : [];
  const correct = state.wordBuilderFeedback === "right";
  const availableLetters = round.letters.map((letter, index) => {
    const selected = letters.includes(index);
    return `<button class="builder-letter ${selected ? "is-used" : ""}" data-builder-letter="${index}" data-pointer-drag="builder-letter" data-drag-value="${index}"
      ${selected || correct ? "disabled" : ""}>${escapeHtml(letter)}</button>`;
  }).join("");
  const answerSlots = round.letters.map((_, slotIndex) => {
    const letterIndex = letters[slotIndex];
    return letterIndex === undefined
      ? `<span class="builder-slot is-empty" data-drop-kind="builder-slot" data-drop-index="${slotIndex}" aria-label="${ar() ? "مكان حرف" : "Letter slot"}">?</span>`
      : `<button class="builder-slot" data-builder-remove="${slotIndex}" data-drop-kind="builder-slot" data-drop-index="${slotIndex}" ${correct ? "disabled" : ""}>${escapeHtml(round.letters[letterIndex])}</button>`;
  }).join("");
  return `${flashBar()}<section class="learning-game-page">
    <div class="learning-game-step-nav">
      <button class="game-arrow-button is-back" type="button" data-back="games" aria-label="${tt.gamesBack}">←</button>
      <button class="game-arrow-button" type="button" data-builder-previous aria-label="${tt.prev}" ${state.wordBuilderRound <= 0 ? "disabled" : ""}>←</button>
      <span>${tt.gameRoundProgress} ${state.wordBuilderRound + 1} / ${rounds.length}</span>
      <button class="game-arrow-button is-next" type="button" data-builder-next aria-label="${tt.wordHuntNext}" ${correct ? "" : "disabled"}>→</button>
    </div>
    <header class="learning-game-heading">
      <span class="pill learning-game-pill">${tt.wordBuilderTitle}</span>
      <h1>${tt.wordBuilderTitle}</h1><p class="muted">${tt.wordBuilderHelp}</p>
    </header>
    <div class="learning-game-progress">${tt.gameRoundProgress} ${state.wordBuilderRound + 1} / ${rounds.length}
      <div class="bar"><span style="width:${Math.round((state.wordBuilderRound + 1) / rounds.length * 100)}%;background:#29a9e8"></span></div>
    </div>
    <div class="word-builder-board">
      <span class="builder-picture" aria-hidden="true"><img src="assets/game-picture-${round.hint}.svg" alt="" loading="lazy"></span>
      <div class="builder-answer" aria-label="${tt.wordBuilderTitle}">${answerSlots}</div>
      <div class="builder-letters">${availableLetters}</div>
      <div class="learning-game-feedback ${correct ? "is-success" : state.wordBuilderFeedback === "wrong" ? "is-error" : ""}" aria-live="polite">
        ${correct ? tt.wordBuilderCorrect : state.wordBuilderFeedback === "wrong" ? tt.wordBuilderWrong : tt.wordBuilderHelp}
      </div>
      <div class="learning-game-actions">
        ${correct
          ? `<button class="btn btn-green" data-builder-next>${tt.wordHuntNext}</button>`
          : `<button class="btn btn-blue" data-builder-check ${letters.length !== round.letters.length ? "disabled" : ""}>${tt.wordBuilderCheck}</button>
             <button class="btn btn-ghost" data-builder-clear ${letters.length ? "" : "disabled"}>${tt.wordBuilderClear}</button>`}
      </div>
    </div>
  </section>`;
}

function parentView() {
  const user = sessionUser();
  const data = db();
  const tt = t();
  const readingLanguage = user.readingLanguage === "ar" ? (ar() ? "العربية" : "Arabic")
    : user.readingLanguage === "en" ? (ar() ? "الإنجليزية" : "English")
      : (ar() ? "العربية والإنجليزية" : "Arabic and English");
  const kids = data.users.filter((u) => u.role === "student" &&
    (user.childIds?.includes(u.id) || u.parentId === user.id));
  const cols = ["#f06292", "#29a9e8", "#6cc551"];
  const bgs = ["#fdeef4", "#e8f6fd", "#eef9e8"];
  const cards = kids.map((c, i) => {
    const st = stageOf(c.level);
    const childHomework = assignmentsForStudent(data, c);
    const completedHomework = childHomework.filter((assignment) =>
      assignment.completedBy?.includes(c.id)).length;
    return `<div class="card" style="background:${bgs[i % 3]};border-color:${cols[i % 3]}">
      <div style="display:flex;align-items:center;gap:12px">
        <span class="avatar-sm" style="width:54px;height:54px;font-size:26px;background:${cols[i % 3]}">${(ar() ? c.name : c.nameEn)[0]}</span>
        <div><strong style="font-size:24px">${displayName(c)}</strong><div class="muted">${lvName(c.level)} — ${ar() ? st.ar : st.en}</div></div>
      </div>
      <div class="muted">${tt.childCredentials}: <span dir="ltr">${escapeHtml(c.email)}</span>${c.accessPin ? ` · ${escapeHtml(c.accessPin)}` : ""}</div>
      <div class="stats">
        <div><b style="font-size:24px">${c.books}</b><div class="muted">${tt.booksRead}</div></div>
        <div><b style="font-size:24px">${c.minutes}</b><div class="muted">${tt.minutes}</div></div>
        <div><b style="font-size:24px">${c.stars}</b><div class="muted">${tt.stars}</div></div>
      </div>
      <div class="bar"><span style="width:${studentProgress(c)}%;background:${cols[i % 3]}"></span></div>
      <div class="muted">${tt.lastBook}: ${bookTitle(findBook(c.currentBook) || BOOKS[0])}</div>
      <div class="muted">${tt.familyChildWeek}: ${Math.floor(weekReadingMinutes(c))} ${tt.minutes}</div>
      ${childHomework.length ? `<div class="homework-summary">
        <strong>${tt.homeworkSummary}: ${completedHomework} / ${childHomework.length} ${tt.homeworkDone}</strong>
        <span class="muted">${bookTitle(findBook(childHomework[0].bookId) || BOOKS[0])}</span>
      </div>` : ""}
      <button class="btn btn-ghost parent-child-edit-toggle" type="button" data-edit-child="${escapeHtml(c.id)}">
        ${ar() ? "إدارة بيانات الطفل" : "Manage child details"}
      </button>
      ${state.editChildId === c.id ? `<form class="parent-child-edit-form" data-parent-edit-child="${escapeHtml(c.id)}">
        <label>${tt.name}<input name="name" maxlength="60" value="${escapeHtml(c.name || "")}" required></label>
        <label>${tt.email}<input name="email" type="email" dir="ltr" value="${escapeHtml(c.email || "")}" required></label>
        <label>${tt.childAge}<input name="age" type="number" min="3" max="16" value="${escapeHtml(c.age || 7)}" required></label>
        <label>${tt.childBoyGirl}<select name="gender" required>
          <option value="girl" ${c.gender === "girl" ? "selected" : ""}>${tt.girl}</option>
          <option value="boy" ${c.gender === "boy" ? "selected" : ""}>${tt.boy}</option>
        </select></label>
        <label>${ar() ? "لغة القراءة" : "Reading language"}<select name="readingLanguage">
          <option value="ar" ${c.readingLanguage === "ar" ? "selected" : ""}>${ar() ? "العربية" : "Arabic"}</option>
          <option value="en" ${c.readingLanguage === "en" ? "selected" : ""}>${ar() ? "الإنجليزية" : "English"}</option>
          <option value="both" ${!c.readingLanguage || c.readingLanguage === "both" ? "selected" : ""}>${ar() ? "العربية والإنجليزية" : "Arabic and English"}</option>
        </select></label>
        <label>${ar() ? "تغيير رمز الدخول (اختياري)" : "Change sign-in PIN (optional)"}
          <input name="accessPin" type="password" inputmode="numeric" minlength="4" maxlength="8" pattern="[0-9]{4,8}" autocomplete="new-password">
        </label>
        <div class="row"><button class="btn btn-green" type="submit">${tt.saveChanges}</button>
          <button class="btn btn-ghost" type="button" data-cancel-child-edit="">${ar() ? "إلغاء" : "Cancel"}</button></div>
      </form>` : ""}
      ${weekReadingMinutes(c) < 1 ? `<span class="muted">${tt.noReadingYet}</span>` : ""}
      ${c.note ? `<div class="muted">${tt.note}: ${escapeHtml(c.note)}</div>` : ""}
      <strong>${tt.encouragement}</strong>
      <div class="cheer-options">${tt.encouragementOptions.map((message, index) =>
        `<button class="btn btn-ghost" data-cheer="${c.id}" data-message="${index}">${message}</button>`
      ).join("")}</div>
    </div>`;
  }).join("");
  const recs = data.recordings.filter((r) => kids.some((k) => k.id === r.studentId)).map((r) => {
    const st = data.users.find((u) => u.id === r.studentId);
    const when = r.when === "today" ? (ar() ? "اليوم" : "Today") : r.when === "yesterday" ? (ar() ? "أمس" : "Yesterday") : (ar() ? "قبل يومين" : "2 days ago");
    return `<div class="card" style="flex-direction:row;flex-wrap:wrap;align-items:center;gap:14px;padding:10px 14px;border-radius:18px">
      <div style="flex:1 1 200px"><strong>${displayName(st)} — ${bookTitle(findBook(r.bookId))}</strong>
        <div class="muted">${when} · ${r.dur} · ${ar() ? "صفحة" : "page"} ${r.page}</div>${recordingAudioPlayer(r, "parent-recording-audio")}</div>
      <button class="btn btn-ghost" style="height:40px;border-color:#6cc551;color:#3f9a38" data-star="${st.id}">${tt.sendStar}</button>
    </div>`;
  }).join("");
  const COL = ["#4fc3f7", "#f06292", "#ffc107", "#6cc551", "#4fc3f7", "#f06292", "#ffc107"];
  const weekData = Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - 6 + index);
    const key = dateKey(date);
    const seconds = kids.reduce((total, child) =>
      total + (Number(child.readingHistory?.[key]) || 0), 0);
    return {
      label: date.toLocaleDateString(ar() ? "ar-EG" : "en-US", { weekday: "short" }),
      minutes: Math.round(seconds / 60)
    };
  });
  const maxMinutes = Math.max(1, ...weekData.map((day) => day.minutes));
  const familyMinutes = Math.round(kids.reduce((total, child) =>
    total + weekReadingMinutes(child), 0));
  const familyGoal = Number(user.familyGoalMins) || 60;
  const week = weekData.map((day, i) => `<div class="week-day" style="flex:1;display:flex;flex-direction:column;align-items:center;gap:6px;height:100%;justify-content:flex-end">
    <div style="width:100%;max-width:46px;height:${Math.round(day.minutes / maxMinutes * 130)}px;background:${COL[i]};border-radius:12px 12px 6px 6px"></div>
    <span class="muted" style="font-weight:700">${day.label}</span>
  </div>`).join("");
  return `${flashBar()}<section style="display:flex;flex-direction:column;gap:22px">
    <div class="section-head"><h1 style="font-size:40px">${tt.parents}</h1>
      <div class="row">
        <button class="btn btn-pink" data-act="add-child">${tt.addChild}</button>
        <button class="btn btn-ghost" data-act="link-child">${tt.linkChild}</button>
      </div></div>
    ${kids.length ? `<div class="grid-4">${cards}</div>` : `<div class="onboarding-note onboarding-welcome">
      <strong>${tt.parentNextStep}</strong>
      <div class="row"><button class="btn btn-pink" data-act="add-child">${tt.addChild}</button><button class="btn btn-ghost" data-act="link-child">${tt.linkChild}</button></div>
    </div>`}
    <div class="card family-goal-card">
      <strong style="font-size:22px;color:#d63a72">${tt.readingTogether}</strong>
      <span class="muted">${tt.familyGoalHint}</span>
      <span class="muted">${ar() ? "لغة القراءة المفضلة" : "Preferred reading language"}: ${readingLanguage}</span>
      <div class="bar"><span style="width:${Math.min(100, Math.round(familyMinutes / familyGoal * 100))}%;background:#f06292"></span></div>
      <strong>${familyMinutes} / ${familyGoal} ${tt.minutes}</strong>
      <form id="family-goal-form" class="inline-goal-form">
        <label>${tt.readingTogether}
          <select name="goal">
            ${[30, 60, 90, 120].map((minutes) =>
              `<option value="${minutes}" ${familyGoal === minutes ? "selected" : ""}>${minutes} ${tt.minutes}</option>`
            ).join("")}
          </select>
        </label>
        <button class="btn btn-pink" type="submit">${tt.saveGoal}</button>
      </form>
    </div>
    <div class="card" style="border-color:#f8c6d8">
      <strong style="font-size:22px;color:#d63a72">${tt.recordingsTitle}</strong>
      <span class="muted">${tt.recordingsSub}</span>
      ${recs}
    </div>
    <div class="split">
      <div class="card" style="flex:2 1 420px">
        <strong style="font-size:22px">${tt.weekTitle}</strong>
        <div class="week-chart" style="display:flex;align-items:flex-end;gap:12px;height:170px">${week}</div>
      </div>
      <div class="card" style="flex:1 1 280px;border-color:#b3e5fc">
        <strong style="font-size:22px">${tt.subTitle}</strong>
        <span class="muted">${hasActiveSubscription(user, data)
          ? `${user.subscriptionPlan === "monthly" ? tt.monthlyPlan : tt.yearlyPlan} · ${tt.subscriptionActive}`
          : tt.subscriptionInactive}</span>
        <div style="display:flex;justify-content:space-between;align-items:center;font-weight:700">${tt.reminder}
          <button data-act="reminder" style="width:60px;height:34px;border-radius:999px;border:none;padding:3px;display:flex;justify-content:${user.reminder ? "flex-end" : "flex-start"};background:${user.reminder ? "#6cc551" : "#d9d3c7"}"><span style="width:28px;height:28px;border-radius:50%;background:#fff;display:block"></span></button>
        </div>
      </div>
    </div>
    <form class="form-card" id="add-child-form" style="display:none">
      <strong>${tt.addChild}</strong>
      <label>${tt.childName}<input name="childName" required></label>
      <label>${tt.childAge} <span class="field-hint">${tt.ageOptional}</span><input name="age" type="number" min="3" max="16" value="7"></label>
      <div class="onboarding-note">${tt.childLoginHint}</div>
      <button class="btn btn-green" type="submit">${tt.createAccount}</button>
    </form>
    <form class="form-card" id="link-child-form" style="display:none">
      <strong>${tt.linkChild}</strong>
      <p class="muted">${tt.linkChildHint}</p>
      <label>${tt.linkByEmail}<input name="email" type="email" dir="ltr" required></label>
      <button class="btn btn-green" type="submit">${tt.linkChild}</button>
    </form>
  </section>`;
}

function teacherHome() {
  const data = db();
  const tt = t();
  const students = studentsForTeacher(data);
  const user = sessionUser();
  const activeTeacherChallenge = data.challenges
    .filter((challenge) => challenge.active && challenge.teacherId === user.id)
    .sort((a, b) => b.createdAt - a.createdAt)[0];
  const teacherAssignments = data.assignments.filter((assignment) => assignment.teacherId === user.id);
  const avg = students.length
    ? Math.round(students.reduce((total, student) => total + studentProgress(student), 0) / students.length)
    : 0;
  const recs = data.recordings.filter((r) => students.some((s) => s.id === r.studentId));
  const activeChallenge = activeTeacherChallenge;
  const challengeCompletions = activeChallenge
    ? (activeChallenge.completedBy || []).filter((id) => students.some((student) => student.id === id)).length
    : 0;
  const weeklyMinutes = Math.round(students.reduce((total, student) =>
    total + weekReadingMinutes(student), 0));
  return `${flashBar()}<section style="display:flex;flex-direction:column;gap:22px">
    <div class="hello">
      <img src="assets/logo.jpg" alt="" style="width:84px;height:84px;border-radius:20px">
      <div><h1>${tt.teacherHello} ${displayName(user)}</h1>
      <span class="muted">${students.length} ${tt.students}</span></div>
    </div>
    <div class="stats" style="grid-template-columns:repeat(auto-fit,minmax(160px,1fr))">
      <div class="stat" style="border-color:#ff8a65"><b>${students.length}</b><span>${tt.students}</span></div>
      <div class="stat" style="border-color:#4fc3f7"><b>${avg}%</b><span>${tt.classProgress}</span></div>
      <div class="stat" style="border-color:#f06292"><b>${recs.length}</b><span>${tt.pendingRec}</span></div>
      <div class="stat" style="border-color:#ffd54f"><b>${teacherAssignments.length}</b><span>${tt.homework}</span></div>
    </div>
    <div class="split">
      <div class="card class-pulse-card">
        <strong style="font-size:22px;color:#1e88d6">${tt.classPulse}</strong>
        <span>${weeklyMinutes} ${tt.minutes} · ${students.filter((student) => weekReadingMinutes(student) > 0).length} / ${students.length} ${tt.students}</span>
        ${activeChallenge ? `<div class="challenge-summary">
          <strong>${escapeHtml(activeChallenge.title)}</strong>
          <span class="muted">${tt.participation}: ${challengeCompletions} / ${students.length}</span>
          <div class="bar"><span style="width:${students.length ? Math.round(challengeCompletions / students.length * 100) : 0}%;background:#6cc551"></span></div>
        </div>` : `<span class="muted">${tt.noChallenge}</span>`}
      </div>
      <form class="form-card challenge-form" id="challenge-form">
        <strong style="font-size:22px;color:#3f9a38">${tt.classChallenge}</strong>
        <label>${tt.challengeTitle}<input name="title" maxlength="70" required></label>
        <label>${tt.challengeMinutes}
          <select name="minutes">${[5, 10, 15, 20, 30].map((minutes) =>
            `<option value="${minutes}" ${minutes === 10 ? "selected" : ""}>${minutes} ${tt.minutes}</option>`
          ).join("")}</select>
        </label>
        <button class="btn btn-green" type="submit">${tt.publishChallenge}</button>
      </form>
    </div>
    <h2 style="font-size:26px">${tt.learnerSpotlight}</h2>
    <div class="grid-feat">
      ${students.map((s) => `<div class="card">
        <div style="display:flex;gap:10px;align-items:center">
          <span class="avatar-sm" style="background:${s.gender === "girl" ? "#f06292" : "#29a9e8"}">${displayName(s)[0]}</span>
          <div><strong>${displayName(s)}</strong><div class="muted">${lvName(s.level)}</div></div>
        </div>
        <div class="bar"><span style="width:${studentProgress(s)}%;background:#6cc551"></span></div>
        <span class="muted">${tt.lastBook}: ${bookTitle(findBook(s.currentBook) || BOOKS[0])}</span>
        <button class="btn btn-ghost" data-go="teacher-students" data-sid="${s.id}">${tt.view}</button>
      </div>`).join("")}
    </div>
  </section>`;
}

function teacherStudents() {
  const data = db();
  const tt = t();
  const students = studentsForTeacher(data);
  const focus = students.find((s) => s.id === state.viewStudent) || students[0];
  const rows = students.map((s) => `<tr>
    <td><strong>${displayName(s)}</strong><div class="muted">${escapeHtml(s.email)}</div></td>
    <td>${lvName(s.level)}</td>
    <td>${bookTitle(findBook(s.currentBook) || BOOKS[0])}</td>
    <td>${s.quiz === "right" ? (ar() ? "صح" : "Correct") : s.quiz === "wrong" ? (ar() ? "خطأ" : "Retry") : (ar() ? "لم يُجب" : "Pending")}</td>
    <td>${s.stars}</td>
    <td><button class="btn btn-ghost" style="height:36px" data-sid="${s.id}" aria-pressed="${focus?.id === s.id}">${tt.view}</button></td>
  </tr>`).join("");
  const detail = focus ? (() => {
    const assigned = assignmentsForStudent(data, focus)
      .sort((a, b) => (Number(b.createdAt) || 0) - (Number(a.createdAt) || 0));
    const recordings = data.recordings.filter((recording) => recording.studentId === focus.id)
      .sort((a, b) => (Number(b.createdAt) || 0) - (Number(a.createdAt) || 0));
    const completedLevels = [...new Set((focus.completedLevels || []).filter((level) =>
      Number.isInteger(level) && level >= 1 && level <= 12))].sort((a, b) => a - b);
    const quizLevels = [...new Set((focus.quizLevels || []).filter((level) =>
      Number.isInteger(level) && level >= 1 && level <= 12))].sort((a, b) => a - b);
    const today = dateKey(new Date());
    const mission = focus.dailyMission?.date === today ? focus.dailyMission : null;
    const teacherChallenges = data.challenges.filter((challenge) =>
      challenge.teacherId === sessionUser()?.id &&
      (!Array.isArray(challenge.recipientIds) || challenge.recipientIds.includes(focus.id)));
    const finishedChallenges = teacherChallenges.filter((challenge) =>
      (challenge.completedBy || []).includes(focus.id)).length;
    const gameRewardLabels = [
      ["wordHunt", tt.wordHuntTitle],
      ["wordBuilder", tt.wordBuilderTitle]
    ];
    const earnedGameRewards = gameRewardLabels.filter(([gameId]) =>
      focus.gameRewards?.[gameId] === today);
    const history = Array.from({ length: 7 }, (_, index) => {
      const date = new Date();
      date.setDate(date.getDate() - 6 + index);
      const key = dateKey(date);
      return {
        label: date.toLocaleDateString(ar() ? "ar-EG" : "en-US", { weekday: "short", day: "numeric" }),
        minutes: Math.floor((Number(focus.readingHistory?.[key]) || 0) / 60)
      };
    });
    const maxReadingMinutes = Math.max(1, ...history.map((day) => day.minutes));
    const formatDate = (timestamp, fallback = "") => {
      const date = Number(timestamp) ? new Date(Number(timestamp)) : null;
      if (date && Number.isFinite(date.getTime())) {
        return date.toLocaleDateString(ar() ? "ar-EG" : "en-US", { year: "numeric", month: "short", day: "numeric" });
      }
      return fallback;
    };
    const recordingWhen = (recording) => {
      const date = formatDate(recording.createdAt);
      if (date) return date;
      if (recording.when === "today") return tt.recordingDateToday;
      if (recording.when === "yesterday") return tt.recordingDateYesterday;
      if (recording.when === "2days") return ar() ? "قبل يومين" : "2 days ago";
      return tt.recordingDateUnknown;
    };
    const homeworkCards = assigned.length ? assigned.map((assignment) => {
      const completed = (assignment.completedBy || []).includes(focus.id);
      const completedAt = formatDate(assignment.completedAt?.[focus.id]);
      const assignedBook = findBook(assignment.bookId);
      const title = assignment.title ? escapeHtml(assignment.title) : bookTitle(assignedBook || BOOKS[0]);
      return `<article class="teacher-detail-item ${completed ? "is-complete" : "is-pending"}">
        <span class="teacher-detail-status ${completed ? "is-done" : ""}">${completed ? uiIcon("check", 18) : ""}</span>
        <div><strong>${title}</strong><span class="muted">${bookTitle(assignedBook || BOOKS[0])}</span>
          <span class="teacher-status-label">${completed ? tt.homeworkCompletedStatus : tt.homeworkPendingStatus}${completedAt ? ` · ${tt.completedOn} ${completedAt}` : ""}</span>
        </div>
      </article>`;
    }).join("") : `<p class="muted">${tt.noHomework}</p>`;
    const recordingCards = recordings.length ? recordings.slice(0, 20).map((recording) => {
      return `<article class="teacher-detail-item teacher-recording-item">
        <span class="teacher-recording-mark">${uiIcon("microphone", 20)}</span>
        <div><strong>${bookTitle(findBook(recording.bookId) || BOOKS[0])}</strong>
          <span class="muted">${recordingWhen(recording)} · ${tt.recordingPage} ${Number(recording.page) || 1} · ${escapeHtml(recording.dur || "—")}</span>
          ${recordingAudioPlayer(recording)}</div>
        <button class="btn btn-ghost" type="button" data-delete-recording="${escapeHtml(recording.id)}">${ar() ? "حذف التسجيل" : "Delete recording"}</button>
      </article>`;
    }).join("") : `<p class="muted">${tt.noStudentRecordings}</p>`;
    const activityItems = [
      `<article class="teacher-activity-item"><strong>${tt.todayMissionStatus}</strong><span class="${mission?.completed ? "teacher-status-done" : "teacher-status-waiting"}">${mission?.completed ? tt.missionCompletedStatus : tt.missionPendingStatus}</span></article>`,
      `<article class="teacher-activity-item"><strong>${tt.passedLevels}</strong><span>${quizLevels.length ? quizLevels.map(lvName).join(", ") : tt.noTrackedActivity}</span></article>`,
      `<article class="teacher-activity-item"><strong>${tt.quizScore}</strong><span>${focus.quiz === "right" ? (ar() ? "إجابة صحيحة" : "Correct answer") : focus.quiz === "wrong" ? (ar() ? "يحتاج إلى مراجعة" : "Needs review") : (ar() ? "لم يُجب بعد" : "Not answered yet")}</span></article>`,
      `<article class="teacher-activity-item"><strong>${tt.challengesCompleted}</strong><span>${finishedChallenges} / ${teacherChallenges.length}</span></article>`,
      `<article class="teacher-activity-item"><strong>${tt.gameRewardsToday}</strong><span>${earnedGameRewards.length ? earnedGameRewards.map(([, label]) => label).join("، ") : tt.noTrackedActivity}</span></article>`
    ].join("");
    const challengeCards = teacherChallenges.length ? teacherChallenges.map((challenge) => {
      const completed = (challenge.completedBy || []).includes(focus.id);
      return `<article class="teacher-detail-item ${completed ? "is-complete" : "is-pending"}">
        <span class="teacher-detail-status ${completed ? "is-done" : ""}">${completed ? uiIcon("check", 18) : ""}</span>
        <div><strong>${escapeHtml(challenge.title)}</strong><span class="teacher-status-label">${completed ? tt.challengeCompletedStatus : tt.challengePendingStatus}</span></div>
      </article>`;
    }).join("") : `<p class="muted">${tt.noChallenge}</p>`;
    return `<section class="teacher-student-report" aria-labelledby="teacher-student-report-title">
      <header class="teacher-student-report-heading">
        <div><span class="pill">${tt.studentOverview}</span><h2 id="teacher-student-report-title">${displayName(focus)}</h2>
          <p class="muted">${tt.studentOverviewHint}</p><span class="muted">${escapeHtml(focus.email)} · ${lvName(focus.level)}</span></div>
        <div class="teacher-student-report-progress"><strong>${studentProgress(focus)}%</strong><span>${tt.classProgress}</span>
          <div class="bar"><span style="width:${studentProgress(focus)}%;background:#6cc551"></span></div>
        </div>
      </header>
      <div class="grid-feat teacher-student-kpis">
        <div class="card"><strong>${Number(focus.books) || 0}</strong><span>${tt.booksRead}</span></div>
        <div class="card"><strong>${Number(focus.minutes) || 0}</strong><span>${tt.minutes}</span></div>
        <div class="card"><strong>${Math.floor(weekReadingMinutes(focus))}</strong><span>${tt.studentReadingWeek}</span></div>
        <div class="card"><strong>${Number(focus.stars) || 0}</strong><span>${tt.stars}</span></div>
        <div class="card"><strong>${completedLevels.length} / 12</strong><span>${tt.lessonsCompleted}</span></div>
        <div class="card"><strong>${quizLevels.length}</strong><span>${tt.quizzesPassed}</span></div>
      </div>
      <div class="teacher-student-report-grid">
        <section class="card teacher-report-panel">
          <h3>${tt.studentHomework}</h3>
          <div class="teacher-detail-list">${homeworkCards}</div>
        </section>
        <section class="card teacher-report-panel">
          <h3>${tt.studentRecordings}</h3>
          <div class="teacher-detail-list">${recordingCards}</div>
        </section>
        <section class="card teacher-report-panel">
          <h3>${tt.readingActivity}</h3>
          <p class="muted">${tt.currentBookProgress}: ${bookTitle(findBook(focus.currentBook) || BOOKS[0])} · ${Math.max(0, Math.min(100, Number(focus.progress) || 0))}%</p>
          <div class="teacher-reading-history">${history.map((day) => `<div class="teacher-reading-day" title="${day.minutes} ${tt.minutes}">
            <span class="teacher-reading-bar"><i style="height:${day.minutes ? Math.max(8, Math.round(day.minutes / maxReadingMinutes * 100)) : 0}%"></i></span>
            <strong>${day.minutes}</strong><span>${day.label}</span>
          </div>`).join("")}</div>
          <div class="teacher-activity-list">${activityItems}</div>
        </section>
        <section class="card teacher-report-panel">
          <h3>${tt.studentChallenges}</h3>
          <div class="teacher-detail-list">${challengeCards}</div>
          <h3>${tt.note}</h3>
          <label><textarea id="note-box" rows="3">${escapeHtml(focus.note || "")}</textarea></label>
          <button class="btn btn-green" data-act="save-note" data-sid="${focus.id}">${tt.saveNote}</button>
          <h3>${tt.sendCheerMessage}</h3>
          <div class="cheer-options">${tt.encouragementOptions.map((message, index) =>
            `<button class="btn btn-ghost" data-cheer="${focus.id}" data-message="${index}">${message}</button>`
          ).join("")}</div>
        </section>
      </div>
    </section>`;
  })() : "";
  return `${flashBar()}<section style="display:flex;flex-direction:column;gap:18px">
    <div class="section-head teacher-students-heading">
      <h1 style="font-size:36px">${tt.students}</h1>
      <div class="teacher-link-popover">
        <button class="btn btn-blue" type="button" data-act="link-teacher-student">${ar() ? "ربط طالب" : "Link student"}</button>
        <form class="form-card teacher-link-student-form" id="link-teacher-student-form" hidden>
          <div class="teacher-link-intro">
            <strong>${ar() ? "ربط طالب بحساب المعلم" : "Link student to teacher"}</strong>
          </div>
          <label>${ar() ? "البريد الإلكتروني للطالب" : "Student email"}<input name="email" type="email" dir="ltr" autocomplete="email" required></label>
          <button class="btn btn-green" type="submit">${ar() ? "ربط" : "Link"}</button>
        </form>
      </div>
    </div>
    ${focus ? "" : `<div class="alert alert-info">${tt.noRecipients}</div>`}
    ${rows ? `<div class="table-wrap"><table>
      <thead><tr><th>${tt.student}</th><th>${tt.level}</th><th>${tt.lastBook}</th><th>${tt.quizScore}</th><th>${tt.stars}</th><th>${tt.action}</th></tr></thead>
      <tbody>${rows}</tbody>
    </table></div>` : ""}
    ${detail}
  </section>`;
}

function teacherTasks() {
  const data = db();
  const tt = t();
  const students = studentsForTeacher(data);
  const assigns = data.assignments.filter((assignment) => assignment.teacherId === sessionUser()?.id);
  const recs = data.recordings.filter((r) => students.some((s) => s.id === r.studentId));
  return `${flashBar()}<section style="display:flex;flex-direction:column;gap:18px">
    <h1 style="font-size:36px">${tt.homework}</h1>
    <p class="muted">${tt.assignHint}</p>
    <form class="form-card" id="assign-form">
      <label>${tt.library}
        <select name="book">${catalogBooks().map((b) => `<option value="${b.id}" ${state.assignBook === b.id ? "selected" : ""}>${bookTitle(b)}</option>`).join("")}</select>
      </label>
      <label>${tt.students}
        <select name="who">
          <option value="all">${tt.allClass}</option>
          ${students.map((s) => `<option value="${s.id}">${displayName(s)}</option>`).join("")}
        </select>
      </label>
      <button class="btn btn-pink" type="submit">${tt.assign}</button>
    </form>
    <div class="grid-feat">${assigns.map((a) => {
      const recipients = students.filter((student) => assignmentIsForStudent(a, student));
      const completed = recipients.filter((student) => a.completedBy?.includes(student.id)).length;
      const who = recipients.length === students.length ? tt.allClass
        : recipients.length ? recipients.map(displayName).join(", ") : tt.assignedTo;
      return `<div class="card homework-card">
        <strong>${bookTitle(findBook(a.bookId) || BOOKS[0])}</strong>
        <span class="muted">${who}</span>
        <span>${tt.homeworkProgress}: ${completed} / ${recipients.length} ${tt.homeworkDone}</span>
        <div class="bar"><span style="width:${recipients.length ? Math.round(completed / recipients.length * 100) : 0}%;background:#6cc551"></span></div>
      </div>`;
    }).join("")}</div>
    <h2>${tt.recordingsTitle}</h2>
    ${recs.map((r) => {
      const st = data.users.find((u) => u.id === r.studentId);
      return `<div class="card teacher-recording-item" style="flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:space-between">
        <div><strong>${displayName(st)}</strong><div class="muted">${bookTitle(findBook(r.bookId))} · ${r.dur}</div>
          ${recordingAudioPlayer(r)}</div>
         <div class="row"><button class="btn btn-ghost" data-star="${st.id}">${tt.sendStar}</button>
           <button class="btn btn-ghost" type="button" data-delete-recording="${escapeHtml(r.id)}">${ar() ? "حذف التسجيل" : "Delete recording"}</button></div>
      </div>`;
    }).join("")}
  </section>`;
}

function formatCurrency(amount) {
  return new Intl.NumberFormat(ar() ? "ar-SA" : "en-SA", {
    style: "currency", currency: "SAR", maximumFractionDigits: 2
  }).format(Number(amount) || 0);
}

function adminFinanceSummary(data, tt) {
  const payments = (data.payments || []).filter((payment) =>
    Number.isFinite(Number(payment.amount)) && Number(payment.amount) > 0 &&
    /^\d{4}-\d{2}-\d{2}$/.test(payment.paidAt || ""));
  const currentMonth = dateKey(new Date()).slice(0, 7);
  const totalRevenue = payments.reduce((sum, payment) => sum + Number(payment.amount), 0);
  const monthRevenue = payments.filter((payment) => payment.paidAt.slice(0, 7) === currentMonth)
    .reduce((sum, payment) => sum + Number(payment.amount), 0);
  const recentPayments = payments.slice().sort((a, b) =>
    (Number(b.createdAt) || Date.parse(`${b.paidAt}T00:00:00`)) -
    (Number(a.createdAt) || Date.parse(`${a.paidAt}T00:00:00`))).slice(0, 5);
  const paymentRows = recentPayments.map((payment) => {
    const paidDate = new Date(`${payment.paidAt}T00:00:00`);
    const label = payment.userName || payment.userEmail || "";
    return `<div class="admin-recent-row"><span>${escapeHtml(label)} · ${paidDate.toLocaleDateString(ar() ? "ar-EG" : "en-US")}</span><strong>${formatCurrency(payment.amount)}</strong></div>`;
  }).join("");
  return `<div class="card admin-finance-card">
    <strong>${tt.revenueTitle}</strong>
    <div class="grid-feat admin-kpi-grid">
      <div class="card"><strong>${tt.revenueTotal}</strong><b>${formatCurrency(totalRevenue)}</b></div>
      <div class="card"><strong>${tt.revenueThisMonth}</strong><b>${formatCurrency(monthRevenue)}</b></div>
      <div class="card"><strong>${tt.revenuePaymentsCount}</strong><b>${payments.length}</b></div>
    </div>
    <p class="muted">${tt.revenueRecordingNote}</p>
    <strong>${tt.recentPayments}</strong>
    ${paymentRows || `<span class="muted">${tt.noPayments}</span>`}
  </div>`;
}

function adminHome() {
  const data = db();
  const tt = t();
  const users = data.users;
  const students = users.filter((user) => user.role === "student");
  const parents = users.filter((user) => user.role === "parent");
  const teachers = users.filter((user) => user.role === "teacher");
  const suspended = users.filter((user) => user.active === false);
  const unlinked = students.filter((student) => !student.teacherIds?.length);
  const now = Date.now();
  const weekStart = now - 7 * 86400000;
  const monthEnd = now + 30 * 86400000;
  const activeSubscriptions = users.filter((user) =>
    ["parent", "student"].includes(user.role) && user.subscriptionStatus === "active" &&
    hasActiveSubscription(user, data)).length;
  const expiringSubscriptions = users.filter((user) => {
    if (!["parent", "student"].includes(user.role) || subscriptionStatus(user) !== "active" ||
      !user.subscriptionExpiresAt) return false;
    const expires = new Date(`${user.subscriptionExpiresAt}T23:59:59`).getTime();
    return expires <= monthEnd;
  }).length;
  const unreadMessages = data.contacts.filter((message) => !message.readAt).length;
  const activeThisWeek = users.filter((user) => Number(user.lastLoginAt) >= weekStart).length;
  const newThisWeek = users.filter((user) => Number(user.createdAt) >= weekStart).length;
  const weeklyActivity = Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - 6 + index);
    const key = dateKey(date);
    const seconds = students.reduce((total, student) =>
      total + (Number(student.readingHistory?.[key]) || 0), 0);
    const activeCount = students.filter((student) => Number(student.readingHistory?.[key]) > 0).length;
    return {
      label: date.toLocaleDateString(ar() ? "ar-EG" : "en-US", { weekday: "short" }),
      key, minutes: Math.round(seconds / 60), activeCount
    };
  });
  const maxMinutes = Math.max(1, ...weeklyActivity.map((day) => day.minutes));
  const totalWeeklyMinutes = weeklyActivity.reduce((sum, day) => sum + day.minutes, 0);
  const activeWeeklyStudentCount = students.filter((student) =>
    weeklyActivity.some((day) => Number(student.readingHistory?.[day.key]) > 0)).length;
  const roleStats = [
    ["student", students.length, tt.student, "#6cc551"],
    ["parent", parents.length, tt.parentRole, "#9575cd"],
    ["teacher", teachers.length, tt.teacherRole, "#ff8a65"],
    ["admin", users.filter((user) => user.role === "admin").length, tt.adminRole, "#4fc3f7"]
  ];
  const maxRoleCount = Math.max(1, ...roleStats.map(([, count]) => count));
  const contentCount = allBooks().filter((book) => book.active !== false).length;
  const stats = [
    [users.length, tt.totalAccounts, "#4fc3f7"],
    [students.length, tt.totalStudents, "#6cc551"],
    [parents.length, tt.totalParents, "#9575cd"],
    [teachers.length, tt.totalTeachers, "#ff8a65"],
    [activeSubscriptions, tt.adminSubscriptions, "#ffc107"],
    [contentCount, tt.catalog, "#f06292"]
  ];
  const attention = [
    [unlinked.length, tt.unlinkedStudents, "admin-accounts"],
    [suspended.length, tt.suspendedAccounts, "admin-accounts"],
    [expiringSubscriptions, tt.expiringSubscriptions, "admin-subscriptions"],
    [unreadMessages, tt.newMessages, "admin-inbox"]
  ].filter(([count]) => count > 0);
  const activityChart = weeklyActivity.map((day) => `<div class="admin-chart-day">
    <strong>${day.minutes}</strong>
    <div class="admin-chart-track" title="${day.minutes} ${tt.minutes}">
      <span style="height:${Math.max(day.minutes ? 8 : 0, Math.round(day.minutes / maxMinutes * 100))}%;background:#4fc3f7"></span>
    </div>
    <span class="muted">${day.label}</span>
  </div>`).join("");
  const roleChart = roleStats.map(([role, count, label, color]) => `<div class="admin-role-row">
    <span>${label}</span><div class="admin-role-track"><span style="width:${Math.round(count / maxRoleCount * 100)}%;background:${color}"></span></div>
    <strong>${count}</strong>
  </div>`).join("");
  const recentAccounts = users.filter((user) => Number(user.createdAt) > 0)
    .sort((a, b) => b.createdAt - a.createdAt).slice(0, 5);
  return `${flashBar()}<section style="display:flex;flex-direction:column;gap:22px">
    <div class="section-head"><h1 style="font-size:38px">${tt.adminDashboard}</h1></div>
    <div class="alert alert-info">${tt.adminStorageNotice}</div>
    <div class="grid-feat">${stats.map(([value, label, color]) => `<div class="stat" style="border-color:${color}"><b>${value}</b><span>${label}</span></div>`).join("")}</div>
    <div class="grid-feat admin-kpi-grid">
      <div class="card"><strong>${tt.activeThisWeek}</strong><b>${activeThisWeek}</b><span class="muted">${tt.newAccounts}: +${newThisWeek}</span></div>
      <div class="card"><strong>${tt.weeklyReading}</strong><b>${totalWeeklyMinutes}</b><span class="muted">${tt.weeklyActiveStudents}: ${activeWeeklyStudentCount}</span></div>
      <div class="card"><strong>${tt.atRiskAccounts}</strong><b>${unlinked.length + suspended.length + expiringSubscriptions}</b><span class="muted">${tt.contactAdminHint}</span></div>
      <div class="card"><strong>${tt.newMessages}</strong><b>${unreadMessages}</b><button class="btn btn-ghost" data-go="admin-inbox">${tt.adminInbox}</button></div>
    </div>
    ${adminFinanceSummary(data, tt)}
    <details class="admin-disclosure">
      <summary><strong>${tt.showChartsDetails}</strong><span class="muted">${tt.weeklyActivity} · ${tt.accountsByRole}</span></summary>
      <div class="grid-feat">
        <div class="card admin-chart-card"><strong>${tt.weeklyActivity}</strong><div class="admin-week-chart">${activityChart}</div></div>
        <div class="card"><strong>${tt.accountsByRole}</strong><div class="admin-role-chart">${roleChart}</div></div>
      </div>
    </details>
    <details class="admin-disclosure">
      <summary><strong>${tt.showMoreDashboard}</strong><span class="muted">${tt.attentionTitle} · ${tt.recentAccounts}</span></summary>
      <div class="grid-feat">
        <div class="card"><strong>${tt.attentionTitle}</strong>${attention.length
          ? attention.map(([count, label, screen]) => `<button class="admin-attention-row" data-go="${screen}"><span>${label}</span><strong>${count}</strong></button>`).join("")
          : `<span class="muted">${tt.noAttention}</span>`}</div>
        <div class="card"><strong>${tt.recentAccounts}</strong>${recentAccounts.length
          ? recentAccounts.map((user) => `<div class="admin-recent-row"><span>${displayName(user)} · ${escapeHtml(user.email)}</span><span class="muted">${new Date(user.createdAt).toLocaleDateString(ar() ? "ar-EG" : "en-US")}</span></div>`).join("")
          : `<span class="muted">${tt.contactAdminHint}</span>`}</div>
      </div>
    </details>
    <div class="grid-feat">
      <button class="card" data-go="admin-accounts"><strong>${tt.adminAccounts}</strong><span class="muted">${tt.accountList}</span></button>
      <button class="card" data-go="admin-content"><strong>${tt.adminContent}</strong><span class="muted">${tt.catalog}</span></button>
      <button class="card" data-go="admin-subscriptions"><strong>${tt.adminSubscriptions}</strong><span class="muted">${tt.subscriptionsOverview}</span></button>
    </div>
  </section>`;
}

function filteredAdminUsers(data) {
  const search = state.adminAccountQuery.trim().toLocaleLowerCase();
  return data.users.filter((user) => {
    const matchesSearch = !search ||
      user.name.toLocaleLowerCase().includes(search) ||
      (user.nameEn || "").toLocaleLowerCase().includes(search) ||
      user.email.toLocaleLowerCase().includes(search);
    const matchesRole = state.adminAccountRole === "all" || user.role === state.adminAccountRole;
    const matchesStatus = state.adminAccountStatus === "all" ||
      (state.adminAccountStatus === "active" ? user.active !== false : user.active === false);
    const matchesLinked = user.role !== "student" || state.adminAccountLinked === "all" ||
      (state.adminAccountLinked === "linked" ? Boolean(user.parentId || user.teacherIds?.length) :
        state.adminAccountLinked === "unlinked" ? !user.teacherIds?.length : true);
    return matchesSearch && matchesRole && matchesStatus && matchesLinked;
  }).sort((a, b) => a.role.localeCompare(b.role) || a.name.localeCompare(b.name));
}

function adminAccounts() {
  const data = db();
  const tt = t();
  const parents = data.users.filter((user) => user.role === "parent");
  const teachers = data.users.filter((user) => user.role === "teacher");
  const roleOptions = [["student", tt.student], ["parent", tt.parentRole], ["teacher", tt.teacherRole], ["admin", tt.adminRole]];
  const filteredUsers = filteredAdminUsers(data);
  const page = paginate(filteredUsers, state.adminAccountPage);
  state.adminAccountPage = page.currentPage;
  const cards = page.items.map((user) => {
    const isStudent = user.role === "student";
    return `<details class="admin-disclosure admin-record-disclosure">
      <summary><strong>${displayName(user)}</strong><span class="role-tag">${tt[user.role === "admin" ? "adminRole" : user.role === "parent" ? "parentRole" : user.role === "teacher" ? "teacherRole" : "student"]}</span><span class="muted">${escapeHtml(user.email)}</span><span class="admin-disclosure-action">${tt.showAccountDetails}</span></summary>
      <form class="card admin-user-card" data-admin-account="${escapeHtml(user.id)}">
      <div class="admin-field-grid">
        <label>${tt.name}<input name="name" value="${escapeHtml(user.name)}" required></label>
        <label>${tt.email}<input name="email" type="email" dir="ltr" value="${escapeHtml(user.email)}" required></label>
        <label>${tt.role}<select name="role" ${user.id === sessionUser()?.id ? "disabled" : ""}>${roleOptions.map(([value, label]) => `<option value="${value}" ${user.role === value ? "selected" : ""}>${label}</option>`).join("")}</select></label>
        <label>${tt.password}<input name="password" type="password" minlength="4" autocomplete="new-password" placeholder="••••••••"></label>
        <label>${tt.accountStatus}<select name="active" ${user.id === sessionUser()?.id ? "disabled" : ""}>
          <option value="true" ${user.active !== false ? "selected" : ""}>${tt.enabled}</option>
          <option value="false" ${user.active === false ? "selected" : ""}>${tt.disabled}</option>
        </select></label>
        ${isStudent ? `<label>${tt.parentAccount}<input name="parentEmail" type="email" dir="ltr" value="${escapeHtml(parents.find((parent) => parent.id === user.parentId)?.email || "")}" placeholder="${tt.noParent}"><span class="field-hint">${tt.parentEmailHint}</span></label>
        <label class="admin-wide">${tt.teacherAccounts}<input name="teacherEmails" dir="ltr" value="${escapeHtml(teachers.filter((teacher) => user.teacherIds?.includes(teacher.id)).map((teacher) => teacher.email).join(", "))}" placeholder="${tt.noTeachers}"><span class="field-hint">${tt.teacherEmailsHint}</span></label>` : ""}
      </div>
      <div class="row">
        <button class="btn btn-green" type="submit">${tt.saveChanges}</button>
        ${user.id !== sessionUser()?.id &&
          (user.role !== "admin" || data.users.filter((candidate) => candidate.role === "admin").length > 1)
          ? `<button class="btn btn-muted" type="button" data-delete-account="${escapeHtml(user.id)}">${tt.deleteAccount}</button>` : ""}
      </div>
      </form>
    </details>`;
  }).join("");
  return `${flashBar()}<section style="display:flex;flex-direction:column;gap:20px">
    <div class="section-head"><h1 style="font-size:36px">${tt.adminAccounts}</h1></div>
    <div class="alert alert-info">${tt.adminStorageNotice}</div>
    <details class="admin-disclosure">
      <summary><strong>${tt.showCreateAccount}</strong><span class="muted">${tt.accountList}</span></summary>
      <form class="form-card" id="admin-create-account">
      <div class="admin-field-grid">
        <label>${tt.name}<input name="name" required></label>
        <label>${tt.email}<input name="email" type="email" dir="ltr" required></label>
        <label>${tt.password}<input name="password" type="password" minlength="4" required></label>
        <label>${tt.role}<select name="role">${roleOptions.map(([value, label]) => `<option value="${value}">${label}</option>`).join("")}</select></label>
      </div>
      <button class="btn btn-blue" type="submit">${tt.createAccountAdmin}</button>
      </form>
    </details>
    <form class="admin-quick-search" id="admin-account-search">
      <label>${tt.quickSearchAccounts}<input name="query" type="search" value="${escapeHtml(state.adminAccountQuery)}" placeholder="${tt.searchAccounts}"></label>
      <button class="btn btn-blue" type="submit">${tt.applyFilters}</button>
    </form>
    <details class="admin-disclosure">
      <summary><strong>${tt.showAdvancedFilters}</strong><span class="muted">${tt.applyFilters}</span></summary>
      <form class="form-card admin-filter-form" id="admin-account-filters">
      <input name="query" type="hidden" value="${escapeHtml(state.adminAccountQuery)}">
      <label>${tt.role}<select name="role"><option value="all">${tt.filterRole}</option>${roleOptions.map(([value, label]) => `<option value="${value}" ${state.adminAccountRole === value ? "selected" : ""}>${label}</option>`).join("")}</select></label>
      <label>${tt.accountStatus}<select name="status"><option value="all">${tt.filterStatus}</option><option value="active" ${state.adminAccountStatus === "active" ? "selected" : ""}>${tt.enabled}</option><option value="suspended" ${state.adminAccountStatus === "suspended" ? "selected" : ""}>${tt.disabled}</option></select></label>
      <label>${tt.teacherAccounts}<select name="linked"><option value="all">${tt.linkedFilter}</option><option value="linked" ${state.adminAccountLinked === "linked" ? "selected" : ""}>${tt.linkedOnly}</option><option value="unlinked" ${state.adminAccountLinked === "unlinked" ? "selected" : ""}>${tt.unlinkedOnly}</option></select></label>
      <div class="row"><button class="btn btn-blue" type="submit">${tt.applyFilters}</button><button class="btn btn-muted" type="button" data-clear-admin-filters>${tt.clearFilters}</button><button class="btn btn-ghost" type="button" data-export-accounts>${tt.exportCsv}</button></div>
      </form>
    </details>
    <h2>${tt.accountList} (${filteredUsers.length} ${tt.of} ${data.users.length})</h2>
    ${adminPagination(page, "accounts")}
    <div class="admin-account-list">${cards}</div>
    ${filteredUsers.length ? "" : `<div class="card">${tt.noMatchingAccounts}</div>`}
    ${adminPagination(page, "accounts")}
  </section>`;
}

function adminSubscriptions() {
  const data = db();
  const tt = t();
  const search = state.adminSubscriptionQuery.trim().toLocaleLowerCase();
  const accounts = data.users.filter((user) => ["parent", "student"].includes(user.role))
    .filter((user) => {
      const matchesSearch = !search || user.name.toLocaleLowerCase().includes(search) ||
        (user.nameEn || "").toLocaleLowerCase().includes(search) || user.email.toLocaleLowerCase().includes(search);
      return matchesSearch &&
        (state.adminSubscriptionStatus === "all" || subscriptionStatus(user) === state.adminSubscriptionStatus) &&
        (state.adminSubscriptionPlan === "all" || user.subscriptionPlan === state.adminSubscriptionPlan);
    }).sort((a, b) => a.name.localeCompare(b.name));
  const page = paginate(accounts, state.adminSubscriptionPage);
  state.adminSubscriptionPage = page.currentPage;
  const rows = page.items.map((user) => {
    const status = subscriptionStatus(user);
    const effective = user.role === "student" && !hasActiveSubscription(user, data) &&
      user.parentId && hasActiveSubscription(data.users.find((candidate) => candidate.id === user.parentId), data);
    return `<details class="admin-disclosure admin-record-disclosure">
      <summary><strong>${displayName(user)}</strong><span class="muted">${escapeHtml(user.email)}</span><span class="role-tag">${status === "active" ? tt.subscriptionActive : status === "expired" ? tt.subscriptionExpired : tt.subscriptionInactive}</span><span class="admin-disclosure-action">${tt.editSubscription}</span></summary>
      <form class="card admin-subscription-card" data-admin-subscription="${escapeHtml(user.id)}">
      ${effective ? `<span class="level-chip">${tt.subscriptionActive} · ${tt.parentAccount}</span>` : ""}
      <div class="admin-field-grid">
        <label>${tt.subscriptionState}<select name="status">
          <option value="inactive" ${status !== "active" ? "selected" : ""}>${status === "expired" ? tt.subscriptionExpired : tt.subscriptionInactive}</option>
          <option value="active" ${status === "active" ? "selected" : ""}>${tt.subscriptionActive}</option>
        </select></label>
        <label>${tt.subscriptionPlan}<select name="plan">
          <option value="monthly" ${user.subscriptionPlan === "monthly" ? "selected" : ""}>${tt.monthlyPlan}</option>
          <option value="yearly" ${user.subscriptionPlan !== "monthly" ? "selected" : ""}>${tt.yearlyPlan}</option>
        </select></label>
        <label>${tt.subscriptionExpiry}<input name="expiresAt" type="date" value="${escapeHtml(user.subscriptionExpiresAt || "")}"></label>
        <label>${tt.paymentAmount}<input name="paymentAmount" type="number" min="0.01" step="0.01" inputmode="decimal"></label>
        <label>${tt.paymentDate}<input name="paymentDate" type="date" value="${dateKey(new Date())}"></label>
      </div>
      <span class="muted">${tt.paymentAmountHint}</span>
      <button class="btn btn-green" type="submit">${tt.saveSubscription}</button>
      </form>
    </details>`;
  }).join("");
  return `${flashBar()}<section style="display:flex;flex-direction:column;gap:20px">
    <h1 style="font-size:36px">${tt.adminSubscriptions}</h1>
    <div class="alert alert-info">${tt.subscriptionManagedManually} ${tt.paidAccess}</div>
    ${adminFinanceSummary(data, tt)}
    <form class="form-card admin-filter-form" id="admin-subscription-filters">
      <label>${tt.subscriptionSearch}<input name="query" type="search" value="${escapeHtml(state.adminSubscriptionQuery)}" placeholder="${tt.subscriptionSearch}"></label>
      <label>${tt.subscriptionState}<select name="status">
        <option value="all">${tt.filterStatus}</option>
        <option value="active" ${state.adminSubscriptionStatus === "active" ? "selected" : ""}>${tt.subscriptionActive}</option>
        <option value="inactive" ${state.adminSubscriptionStatus === "inactive" ? "selected" : ""}>${tt.subscriptionInactive}</option>
        <option value="expired" ${state.adminSubscriptionStatus === "expired" ? "selected" : ""}>${tt.subscriptionExpired}</option>
      </select></label>
      <label>${tt.subscriptionPlan}<select name="plan">
        <option value="all">${tt.subscriptionPlanFilter}</option>
        <option value="monthly" ${state.adminSubscriptionPlan === "monthly" ? "selected" : ""}>${tt.monthlyPlan}</option>
        <option value="yearly" ${state.adminSubscriptionPlan === "yearly" ? "selected" : ""}>${tt.yearlyPlan}</option>
      </select></label>
      <div class="row"><button class="btn btn-blue" type="submit">${tt.applyFilters}</button><button class="btn btn-muted" type="button" data-clear-admin-subscription-filters>${tt.clearFilters}</button><button class="btn btn-ghost" type="button" data-export-subscriptions>${tt.exportCsv}</button></div>
    </form>
    <h2>${tt.adminSubscriptions} (${accounts.length})</h2>
    ${adminPagination(page, "subscriptions")}
    <div class="admin-account-list">${rows}</div>
    ${accounts.length ? "" : `<div class="card">${tt.noMatchingAccounts}</div>`}
    ${adminPagination(page, "subscriptions")}
  </section>`;
}

function adminInbox() {
  const data = db();
  const tt = t();
  const search = state.adminInboxQuery.trim().toLocaleLowerCase();
  const messages = data.contacts.map((message, index) => ({ ...message, _index: index }))
    .filter((message) => !search ||
    String(message.name || "").toLocaleLowerCase().includes(search) ||
    String(message.email || "").toLocaleLowerCase().includes(search) ||
    String(message.message || "").toLocaleLowerCase().includes(search))
    .filter((message) => state.adminInboxStatus === "all" ||
      (state.adminInboxStatus === "unread" ? !message.readAt : Boolean(message.readAt)))
    .sort((a, b) => Number(b.at || 0) - Number(a.at || 0));
  const page = paginate(messages, state.adminInboxPage);
  state.adminInboxPage = page.currentPage;
  const cards = page.items.map((message, index) => `<article class="card admin-message-card ${message.readAt ? "" : "is-unread"}">
    <div class="section-head"><div><strong>${escapeHtml(message.name || "")}</strong><div class="muted" dir="ltr">${escapeHtml(message.email || "")}</div></div>
      <span class="level-chip">${message.readAt ? new Date(message.readAt).toLocaleDateString(ar() ? "ar-EG" : "en-US") : tt.newMessageLabel}</span></div>
    <p class="admin-message-body">${escapeHtml(message.message || "")}</p>
    ${!message.readAt ? `    <button class="btn btn-ghost" data-read-message="${message._index}">${tt.markRead}</button>` : ""}
  </article>`).join("");
  return `${flashBar()}<section style="display:flex;flex-direction:column;gap:20px">
    <h1 style="font-size:36px">${tt.supportMessages} (${data.contacts.length})</h1>
    <form class="form-card admin-filter-form" id="admin-inbox-filters">
      <label>${tt.searchMessages}<input name="query" type="search" value="${escapeHtml(state.adminInboxQuery)}" placeholder="${tt.searchMessages}"></label>
      <label>${tt.messageStatusFilter}<select name="status">
        <option value="all">${tt.messageStatusFilter}</option>
        <option value="unread" ${state.adminInboxStatus === "unread" ? "selected" : ""}>${tt.unreadMessagesFilter}</option>
        <option value="read" ${state.adminInboxStatus === "read" ? "selected" : ""}>${tt.readMessagesFilter}</option>
      </select></label>
      <div class="row"><button class="btn btn-blue" type="submit">${tt.applyFilters}</button><button class="btn btn-muted" type="button" data-clear-admin-inbox>${tt.clearFilters}</button></div>
    </form>
    <div class="admin-account-list">${cards}</div>
    ${messages.length ? adminPagination(page, "inbox") : `<div class="card">${tt.noMessages}</div>`}
  </section>`;
}

function adminContent() {
  const data = db();
  const tt = t();
  const catalog = allBooks();
  const series = [["rabbi", tt.sRabbi], ["adhkar", tt.sAdhkar], ["akhlaq", tt.sAkhlaq]];
  const search = state.adminContentQuery.trim().toLocaleLowerCase();
  const filteredCatalog = catalog.filter((book) => {
    const text = [book.id, book.ar, book.en].filter(Boolean).join(" ").toLocaleLowerCase();
    const accessMode = bookAccessMode(book);
    return (!search || text.includes(search)) &&
      (state.adminContentLevel === "all" || String(book.l) === state.adminContentLevel) &&
      (state.adminContentSeries === "all" || book.s === state.adminContentSeries) &&
      (state.adminContentAccess === "all" ||
        accessMode === state.adminContentAccess) &&
      (state.adminContentStatus === "all" ||
        (state.adminContentStatus === "active" ? book.active !== false : book.active === false));
  });
  const page = paginate(filteredCatalog, state.adminContentPage);
  state.adminContentPage = page.currentPage;
  const cards = page.items.map((book) => `<div class="card admin-content-card">
    <div class="section-head"><strong style="font-size:20px">${bookTitle(book)}</strong><span>${lvName(book.l)}</span></div>
    <span class="muted">${book.custom ? tt.addStory : tt.catalog}${book.active === false ? ` · ${tt.disabled}` : ""}</span>
    <form class="row" data-content-access="${escapeHtml(book.id)}">
      <label>${tt.contentAccess}<select name="accessMode">
        <option value="free" ${bookAccessMode(book) === "free" ? "selected" : ""}>${tt.freeContent}</option>
        <option value="subscription" ${bookAccessMode(book) === "subscription" ? "selected" : ""}>${tt.premiumContent}</option>
        <option value="paid" ${bookAccessMode(book) === "paid" ? "selected" : ""}>${tt.paidContent}</option>
      </select></label>
      <label class="purchase-price-field" ${bookAccessMode(book) === "paid" ? "" : "hidden"}>${ar() ? "سعر الكتاب" : "Book price"}<span class="price-input"><input name="purchasePrice" type="number" min="1" step="1" value="${book.purchasePrice || 1}" ${bookAccessMode(book) === "paid" ? "required" : ""}><b>${ar() ? "ر.س" : "SAR"}</b></span></label>
      <button class="btn btn-ghost" type="submit">${tt.saveAccess}</button>
    </form>
    ${book.custom ? `<button class="btn ${book.active === false ? "btn-green" : "btn-muted"}" data-toggle-content="${escapeHtml(book.id)}">${book.active === false ? tt.restoreStory : tt.deleteStory}</button>` : ""}
  </div>`).join("");
  return `${flashBar()}<section style="display:flex;flex-direction:column;gap:20px">
    <h1 style="font-size:36px">${tt.adminContent}</h1>
    <div class="alert alert-info">${tt.adminStorageNotice}</div>
    <details class="admin-disclosure">
      <summary><strong>${tt.addStory}</strong><span class="muted">${tt.showContentDetails}</span></summary>
      <form class="form-card" id="admin-story-form">
      <div class="admin-field-grid">
        <label>${tt.storyTitleAr}<input name="titleAr" maxlength="80" required></label>
        <label>${tt.storyTitleEn}<input name="titleEn" maxlength="80" required></label>
        <label>${tt.level}<select name="level">${Array.from({ length: 12 }, (_, index) => `<option value="${index + 1}">${index + 1}</option>`).join("")}</select></label>
        <label>${tt.series}<select name="series">${series.map(([value, label]) => `<option value="${value}">${label}</option>`).join("")}</select></label>
        <div class="access-price-control admin-wide">
          <label>${tt.contentAccess}<select name="accessMode"><option value="free">${tt.freeContent}</option><option value="subscription">${tt.premiumContent}</option><option value="paid">${tt.paidContent}</option></select></label>
          <label class="purchase-price-field" hidden>${ar() ? "سعر الكتاب" : "Book price"}<span class="price-input"><input name="purchasePrice" type="number" min="1" step="1" value="1" required><b>${ar() ? "ر.س" : "SAR"}</b></span></label>
        </div>
        <label class="admin-wide">${tt.storyPagesAr}<textarea name="pagesAr" rows="5" required></textarea><span class="field-hint">${tt.storyPagesHint}</span></label>
        <label class="admin-wide">${tt.storyPagesEn}<textarea name="pagesEn" rows="5" required></textarea></label>
        <label class="admin-wide">${tt.storyQuestionAr}<input name="questionAr" required></label>
        <label class="admin-wide">${tt.storyQuestionEn}<input name="questionEn" required></label>
        <label>${tt.storyOptionsAr}<textarea name="optionsAr" rows="3" required></textarea></label>
        <label>${tt.storyOptionsEn}<textarea name="optionsEn" rows="3" required></textarea></label>
        <label>${tt.storyCorrect}<select name="correctIndex"><option value="0">1</option><option value="1">2</option><option value="2">3</option></select></label>
      </div>
      <button class="btn btn-green" type="submit">${tt.addStory}</button>
      </form>
    </details>
    <form class="form-card admin-filter-form" id="admin-content-filters">
      <label>${tt.searchLibrary}<input name="query" type="search" value="${escapeHtml(state.adminContentQuery)}" placeholder="${tt.searchLibrary}"></label>
      <label>${tt.level}<select name="level"><option value="all">${tt.libraryLevelFilter}</option>${Array.from({ length: 12 }, (_, index) => {
        const level = String(index + 1);
        return `<option value="${level}" ${state.adminContentLevel === level ? "selected" : ""}>${lvName(index + 1)}</option>`;
      }).join("")}</select></label>
      <label>${tt.series}<select name="series"><option value="all">${tt.librarySeriesFilter}</option>${series.map(([value, label]) =>
        `<option value="${value}" ${state.adminContentSeries === value ? "selected" : ""}>${label}</option>`).join("")}</select></label>
      <label>${tt.contentAccess}<select name="access">
        <option value="all">${tt.libraryAccessFilter}</option>
        <option value="free" ${state.adminContentAccess === "free" ? "selected" : ""}>${tt.freeContent}</option>
        <option value="subscription" ${state.adminContentAccess === "subscription" ? "selected" : ""}>${tt.premiumContent}</option>
        <option value="paid" ${state.adminContentAccess === "paid" ? "selected" : ""}>${tt.paidContent}</option>
      </select></label>
      <label>${tt.libraryStatusFilter}<select name="status">
        <option value="all">${tt.libraryStatusFilter}</option>
        <option value="active" ${state.adminContentStatus === "active" ? "selected" : ""}>${tt.enabled}</option>
        <option value="archived" ${state.adminContentStatus === "archived" ? "selected" : ""}>${tt.disabled}</option>
      </select></label>
      <div class="row"><button class="btn btn-blue" type="submit">${tt.applyFilters}</button><button class="btn btn-muted" type="button" data-clear-admin-content>${tt.clearFilters}</button></div>
    </form>
    <h2>${tt.catalog} (${filteredCatalog.length} ${tt.of} ${catalog.length})</h2>
    ${adminPagination(page, "content")}
    <div class="grid-feat">${cards}</div>
    ${filteredCatalog.length ? "" : `<div class="card">${tt.noMatchingContent}</div>`}
    ${adminPagination(page, "content")}
  </section>`;
}

function aboutView() {
  const tt = t();
  const vals = tt.values.map((v, i) => {
    const c = ["#4fc3f7", "#6cc551", "#f5a000", "#f06292"][i];
    const bg = ["#e3f5fd", "#eef9e8", "#fff6dc", "#fdeef4"][i];
    return `<article class="about-value-card" style="--value-color:${c};--value-bg:${bg}">
      <span class="about-value-number">${String(i + 1).padStart(2, "0")}</span>
      <strong>${v[0]}</strong>
      <p>${v[1]}</p>
    </article>`;
  }).join("");
  return `${flashBar()}<section class="about-page">
    <header class="about-hero">
      <div class="about-copy">
        <span class="pill">${ar() ? "رحلتنا" : "Our story"}</span>
        <h1>${tt.aboutTitle}</h1>
        <p>${tt.aboutP1}</p>
        <p>${tt.aboutP2}</p>
      </div>
      <div class="about-art">
        <img src="assets/about.jpg" alt="">
        <span class="about-art-note">${ar() ? "نقرأ معًا… وننمو معًا" : "Read together. Grow together."}</span>
      </div>
    </header>

    <section class="about-values">
      <div class="section-head"><h2>${ar() ? "ما الذي يؤسس رحلتنا؟" : "What shapes our journey?"}</h2></div>
      <div class="about-values-grid">${vals}</div>
    </section>

    <section class="contact-section" id="contact">
      <div class="contact-info">
        <span class="pill">${ar() ? "نحن هنا لمساعدتك" : "We are here to help"}</span>
        <h2>${tt.contactTitle}</h2>
        <p class="muted">${ar() ? "اسألنا عن الاشتراك، إنشاء الحساب، أو استخدام المعلم والطفل." : "Ask us about subscriptions, accounts, or using the student and teacher experience."}</p>
        <div class="contact-details">
          <div class="contact-detail"><span>${svg(ICONS.mail || ICONS.book, 22, 22, "#287c9c")}</span><div><small>${tt.emailLabel}</small><strong dir="ltr">hello@bayan.read</strong></div></div>
          <div class="contact-detail"><span>${svg(ICONS.mic, 22, 22, "#3f9a38")}</span><div><small>${tt.whatsapp}</small><strong dir="ltr">+966 555 000 000</strong></div></div>
          <div class="contact-detail"><span>${svg(ICONS.star, 22, 22, "#a86b00")}</span><div><small>${tt.hours}</small><strong>${tt.hoursText}</strong></div></div>
        </div>
      </div>
      <form class="contact-form" id="contact-form">
        <h3>${ar() ? "أرسل لنا رسالة" : "Send us a message"}</h3>
        <label>${tt.yourName}<input name="name" autocomplete="name" required></label>
        <label>${tt.email}<input name="email" type="email" dir="ltr" autocomplete="email" required></label>
        <label>${tt.message}<textarea name="message" rows="5" required></textarea></label>
        <button class="btn btn-blue" type="submit">${tt.send}</button>
        ${state.contactSent ? `<span class="alert alert-ok">${tt.sentMsg}</span>` : ""}
      </form>
    </section>
  </section>`;
}

function animateTrustStripCounters(strip) {
  strip.querySelectorAll("strong").forEach((counter) => {
    const original = counter.textContent.trim();
    const match = original.match(/^(\d+)(.*)$/);
    if (!match) return;

    const target = Number(match[1]);
    const suffix = match[2];
    const duration = 2200;
    const start = performance.now();
    counter.textContent = `0${suffix}`;

    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      counter.textContent = `${Math.floor(target * progress)}${suffix}`;
      if (progress < 1) requestAnimationFrame(update);
      else counter.textContent = original;
    }

    requestAnimationFrame(update);
  });
}

function initLandingScrollAnimations() {
  const strip = document.querySelector(".main > .trust-strip");
  if (!strip || !("IntersectionObserver" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const siblings = Array.from(strip.parentElement.children);
  const stripIndex = siblings.indexOf(strip);
  const targets = siblings
    .slice(stripIndex)
    .filter((element) => element.tagName === "SECTION");
  const footer = document.querySelector(".footer");
  if (footer) targets.push(footer);

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      if (entry.target === strip) animateTrustStripCounters(strip);
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -32px 0px" });

  targets.forEach((target) => {
    target.classList.add("scroll-reveal");
    observer.observe(target);
  });
}

function initHeroTypingEffect() {
  const heading = document.querySelector(".hero h1");
  const description = document.querySelector(".hero-description");
  if (!heading || !description || typeof requestAnimationFrame !== "function") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const parts = Array.from(heading.querySelectorAll("[data-typewriter-part]"));
  const characters = parts.map((part) => Array.from(part.textContent));
  if (!parts.length || characters.some((text) => !text.length)) return;

  parts.forEach((part) => {
    part.textContent = "";
  });
  parts[0].classList.add("typing-cursor");
  description.classList.add("typewriter-pending");

  let partIndex = 0;
  let characterIndex = 0;
  const delay = document.documentElement.lang === "ar" ? 75 : 55;

  function typeNextCharacter() {
    if (!heading.isConnected) return;
    const part = parts[partIndex];
    const text = characters[partIndex];
    if (characterIndex >= text.length) {
      part.classList.remove("typing-cursor");
      partIndex += 1;
      characterIndex = 0;
      if (partIndex >= parts.length) {
        description.classList.remove("typewriter-pending");
        return;
      }
      parts[partIndex].classList.add("typing-cursor");
      window.setTimeout(typeNextCharacter, 180);
      return;
    }

    const character = text[characterIndex];
    part.textContent += character;
    characterIndex += 1;
    const pause = /[\s،,.…!?؟]/.test(character) ? 150 : delay;
    window.setTimeout(typeNextCharacter, pause);
  }

  window.setTimeout(typeNextCharacter, 180);
}

function render() {
  const user = sessionUser();
  if (!canSee(state.screen, user)) {
    state.screen = user ? homeFor(user.role) : "login";
  }
  const root = document.getElementById("app");
  document.documentElement.lang = state.lang;
  document.documentElement.dir = ar() ? "rtl" : "ltr";
  let main = "";
  switch (state.screen) {
    case "home": main = homeView(); break;
    case "teacher-directory": main = teacherDirectoryView(); break;
    case "teacher-profile": main = teacherPublicProfileView(); break;
    case "login": main = authForms("login"); break;
    case "signup": main = authForms("signup"); break;
    case "onboarding": main = onboardingView(); break;
    case "reset-password": main = resetPasswordView(); break;
    case "checkout": main = checkoutView(); break;
    case "privacy": main = privacyView(); break;
    case "schools": main = schoolsView(); break;
    case "help": main = helpView(); break;
    case "classroom": main = classroomView(); break;
    case "accessibility": main = accessibilityView(); break;
    case "kid": main = kidView(); break;
    case "student-profile": main = studentProfileView(); break;
    case "account-profile": main = accountProfileView(); break;
    case "library": main = libraryView(); break;
    case "reader": main = readerView(); break;
    case "quiz": main = quizView(); break;
    case "games": main = learningGamesView(); break;
    case "game": main = gameView(); break;
    case "word-hunt": main = wordHuntView(); break;
    case "word-builder": main = wordBuilderView(); break;
    case "avatar-builder": main = studentProfileView(); break;
    case "parent": main = parentView(); break;
    case "teacher": main = teacherHome(); break;
    case "teacher-students": main = teacherStudents(); break;
    case "teacher-tasks": main = teacherTasks(); break;
    case "admin": main = adminHome(); break;
    case "admin-accounts": main = adminAccounts(); break;
    case "admin-content": main = adminContent(); break;
    case "admin-subscriptions": main = adminSubscriptions(); break;
    case "admin-inbox": main = adminInbox(); break;
    case "about": main = aboutView(); break;
    default: main = homeView();
  }
  root.innerHTML = `${header()}<main class="main">${main}</main>${footer()}`;
  wirePointerGameDrag();
  if (state.screen === "home") {
    initHeroTypingEffect();
    initLandingScrollAnimations();
  }
  bind();
  void hydrateRecordingAudio();
}

function showErr(msg) {
  const el = document.getElementById("auth-err");
  if (el) el.innerHTML = `<div class="alert alert-err">${msg}</div>`;
}

function openBook(id) {
  const user = sessionUser();
  if (!user || user.role !== "student") {
    go("login");
    return;
  }
  const book = findBook(id);
  if (!book || book.active === false) {
    state.flash = t().bookLocked;
    keepFlash = true;
    go("library");
    return;
  }
  if (bookLockedForUser(book, user)) {
    if (bookAccessMode(book) === "paid") {
      state.checkoutBook = book.id;
      go("checkout");
      return;
    }
    state.flash = t().lockedForSubscription;
    keepFlash = true;
    go("library");
    return;
  }
  if (book.l > user.level) {
    state.flash = t().bookLocked;
    keepFlash = true;
    go("library");
    return;
  }
  user.currentBook = id;
  upsertUser(user);
  go("reader", { page: 0, rec: "idle", accMs: 0 });
}

function bind() {
  bindRecordingPreviewPlayer();
  document.querySelectorAll("select[name='accessMode']").forEach((select) => {
    const syncPriceField = () => {
      const container = select.closest(".access-price-control") || select.closest("form");
      const field = container?.querySelector(".purchase-price-field");
      if (!field) return;
      const paid = select.value === "paid";
      field.hidden = !paid;
      const input = field.querySelector("input[name='purchasePrice']");
      if (input) input.required = paid;
    };
    syncPriceField();
    select.addEventListener("change", () => {
      syncPriceField();
      if (select.value === "paid") {
        select.closest(".access-price-control")?.querySelector("input[name='purchasePrice']")?.focus();
      }
    });
  });
  if (!document.documentElement.dataset.bayanReaderProtection) {
    document.documentElement.dataset.bayanReaderProtection = "true";
    document.addEventListener("contextmenu", (event) => {
      if (state.screen === "reader") event.preventDefault();
    });
    document.addEventListener("keydown", (event) => {
      const key = String(event.key).toLowerCase();
      if (state.screen === "reader" &&
        ((event.ctrlKey && ["s", "p", "u", "c"].includes(key)) || key === "printscreen")) {
        event.preventDefault();
      }
    });
    document.addEventListener("visibilitychange", () => {
      if (state.screen === "reader" && document.hidden) {
        document.body.classList.add("reader-hidden");
      } else {
        document.body.classList.remove("reader-hidden");
      }
    });
  }
  document.querySelectorAll("[data-go]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      if (el.dataset.role) state.signupRole = el.dataset.role;
      if (el.dataset.plan) state.checkoutPlan = el.dataset.plan;
      if (el.dataset.lvl) state.lvl = Number(el.dataset.lvl);
      if (el.dataset.sid) state.viewStudent = el.dataset.sid;
      if (el.dataset.tid) state.viewTeacher = el.dataset.tid;
      go(el.dataset.go);
      if (el.dataset.contact) {
        requestAnimationFrame(() => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    });
  });
  document.querySelectorAll("[data-back]").forEach((el) => {
    el.addEventListener("click", (event) => {
      event.preventDefault();
      goBack(el.dataset.back);
    });
  });
  const featuredTeacherSearch = document.getElementById("featured-teacher-search");
  if (featuredTeacherSearch) {
    featuredTeacherSearch.addEventListener("input", () => {
      const query = featuredTeacherSearch.value.trim().toLowerCase();
      const cards = [...document.querySelectorAll("[data-teacher-search]")];
      let visible = 0;
      cards.forEach((card) => {
        const matches = !query || card.dataset.teacherSearch.includes(query);
        card.hidden = !matches;
        if (matches) visible++;
      });
      const empty = document.querySelector(".featured-teacher-search-empty");
      if (empty) empty.hidden = visible !== 0;
    });
  }
  document.querySelectorAll("[data-act]").forEach((el) => {
    el.addEventListener("click", () => {
      const act = el.dataset.act;
      if (act === "mobile-menu") {
        setMobileMenuOpen(el.getAttribute("aria-expanded") !== "true", el);
      }
      if (act === "lang") {
        state.lang = ar() ? "en" : "ar";
        localStorage.setItem("bayan-lang", state.lang);
        render();
      }
      if (act === "theme") {
        state.visualMode = state.visualMode === "dark" ? "standard" : "dark";
        localStorage.setItem("bayan-visual-mode", state.visualMode);
        document.body.classList.toggle("dark-visual-mode", state.visualMode === "dark");
        render();
      }
      if (act === "notifications") {
        state.notificationsOpen = !state.notificationsOpen;
        render();
      }
      if (act === "logout") logout();
      if (act === "toggle-password") {
        const input = el.closest(".password-field")?.querySelector("input");
        if (input) {
          input.type = input.type === "password" ? "text" : "password";
          el.textContent = input.type === "password" ? t().showPassword : t().hidePassword;
        }
      }
      if (act === "prev") {
        go("reader", { page: Math.max(0, state.page - 1), rec: "idle" });
      }
      if (act === "next") {
        const pages = bookPages(findBook(sessionUser().currentBook));
        go("reader", { page: Math.min(pages.length - 1, state.page + 1), rec: "idle" });
      }
      if (act === "speak") {
        const book = findBook(sessionUser().currentBook);
        const pg = bookPages(book)[state.page];
        const utteranceText = (ar() ? pg.ar : pg.en).join(" ");
        const u = new SpeechSynthesisUtterance(utteranceText);
        u.lang = ar() ? "ar-SA" : "en-US";
        u.rate = 0.85;
        const words = [...document.querySelectorAll("[data-reader-word]")];
        u.onboundary = (event) => {
          if (!Number.isFinite(event.charIndex)) return;
          const index = (utteranceText.slice(0, event.charIndex).match(/\S+/g) || []).length;
          words.forEach((word) => word.classList.toggle("is-speaking", Number(word.dataset.readerWord) === index));
        };
        const clearHighlight = () => words.forEach((word) => word.classList.remove("is-speaking"));
        u.onend = clearHighlight;
        u.onerror = clearHighlight;
        speechSynthesis.cancel();
        speechSynthesis.speak(u);
      }
      if (act === "rec") {
        if (state.rec === "rec") stopReadingRecording();
        else void startReadingRecording();
      }
      if (act === "retake-recording") {
        clearPendingReadingRecording();
        state.rec = "idle";
        void startReadingRecording();
      }
      if (act === "send-recording") void sendReadingRecording();
      if (act === "reset-game") {
        state.placed = [null, null, null];
        state.sel = null;
        state.letterGameRewardStatus = "";
        render();
      }
      if (act === "restart-word-hunt") {
        state.wordHuntRound = 0;
        state.wordHuntChoice = null;
        state.wordHuntAnswers = {};
        state.wordHuntRewardStatus = "";
        render();
      }
      if (act === "restart-word-builder") {
        state.wordBuilderRound = 0;
        state.wordBuilderLetters = [];
        state.wordBuilderHistory = {};
        state.wordBuilderFeedback = "";
        state.wordBuilderRewardStatus = "";
        render();
      }
      if (act === "add-child") {
        const f = document.getElementById("add-child-form");
        if (f) {
          f.style.display = f.style.display === "none" ? "flex" : "none";
          if (f.style.display === "flex") {
            f.scrollIntoView({ behavior: "smooth", block: "center" });
            f.querySelector("input")?.focus({ preventScroll: true });
          }
        }
      }
      if (act === "link-child") {
        const f = document.getElementById("link-child-form");
        if (f) {
          f.style.display = f.style.display === "none" ? "flex" : "none";
          if (f.style.display === "flex") {
            f.scrollIntoView({ behavior: "smooth", block: "center" });
            f.querySelector("input")?.focus({ preventScroll: true });
          }
        }
      }
      if (act === "link-teacher-student") {
        const f = document.getElementById("link-teacher-student-form");
        if (f) {
          f.hidden = !f.hidden;
          if (!f.hidden) {
            f.querySelector("input")?.focus({ preventScroll: true });
          }
        }
      }
      if (act === "reminder") {
        const user = sessionUser();
        user.reminder = !user.reminder;
        upsertUser(user);
        render();
      }
      if (act === "save-note") {
        const data = db();
        const st = data.users.find((u) => u.id === el.dataset.sid);
        const teacher = sessionUser();
        if (!st || teacher?.role !== "teacher" ||
          !studentsForTeacher(data).some((student) => student.id === st.id)) {
          state.flash = t().noAccess;
          render();
          return;
        }
        st.note = document.getElementById("note-box").value;
        save(data);
        state.flash = t().noteSaved;
        render();
      }
    });
  });
  const mobileMenuToggle = document.querySelector(".menu-toggle");
  const primaryNavigation = document.getElementById("primary-navigation");
  [mobileMenuToggle, primaryNavigation].filter(Boolean).forEach((element) => {
    element.addEventListener("keydown", (event) => {
      if (!mobileMenuToggle || event.key !== "Escape" ||
        mobileMenuToggle.getAttribute("aria-expanded") !== "true") return;
      setMobileMenuOpen(false, mobileMenuToggle);
      mobileMenuToggle.focus();
    });
  });
  document.querySelectorAll("[data-avatar-tone], [data-avatar-hair], [data-avatar-hijab], [data-avatar-gender], [data-avatar-hairstyle]").forEach((el) => {
    el.addEventListener("click", () => {
      const current = sessionUser();
      const data = db();
      const student = data.users.find((user) => user.id === current?.id && user.role === "student");
      if (!student || current?.role !== "student") {
        state.flash = t().noAccess;
        render();
        return;
      }
      if (el.dataset.avatarTone && AVATAR_SKIN_TONES.some((tone) => tone.id === el.dataset.avatarTone)) {
        student.avatarSkinTone = el.dataset.avatarTone;
      } else if (el.dataset.avatarHair && AVATAR_HAIR_COLORS.some((color) => color.id === el.dataset.avatarHair)) {
        student.avatarHairColor = el.dataset.avatarHair;
      } else if (el.dataset.avatarHijab && AVATAR_HIJAB_COLORS.some((color) => color.id === el.dataset.avatarHijab)) {
        student.avatarHijabColor = el.dataset.avatarHijab;
      } else if (el.dataset.avatarHairstyle && AVATAR_HAIR_STYLES.some((style) => style.id === el.dataset.avatarHairstyle)) {
        student.avatarHairStyle = el.dataset.avatarHairstyle;
      } else if (["boy", "girl"].includes(el.dataset.avatarGender)) {
        student.avatarGender = el.dataset.avatarGender;
      } else return;
      student.avatarCustomized = true;
      try {
        save(data);
      } catch {
        state.flash = t().profileSaveError;
        render();
        return;
      }
      state.flash = t().avatarChanged;
      render();
    });
  });
  document.querySelectorAll("[data-outfit]").forEach((el) => {
    el.addEventListener("click", () => {
      const current = sessionUser();
      const data = db();
      const student = data.users.find((user) => user.id === current?.id && user.role === "student");
      const outfit = OUTFITS.find((item) => item.id === el.dataset.outfit);
      if (!student || current?.role !== "student" || !outfit) {
        state.flash = t().noAccess;
        render();
        return;
      }
      student.ownedOutfits = Array.isArray(student.ownedOutfits) ? student.ownedOutfits : ["starter"];
      const alreadyOwned = student.ownedOutfits.includes(outfit.id);
      if (!alreadyOwned && (Number(student.stars) || 0) < outfit.price) {
        state.flash = t().avatarNeedStars;
        render();
        return;
      }
      if (!alreadyOwned) {
        student.stars = (Number(student.stars) || 0) - outfit.price;
        student.ownedOutfits.push(outfit.id);
      }
      student.equippedOutfit = outfit.id;
      student.avatarCustomized = true;
      try {
        save(data);
      } catch {
        state.flash = t().profileSaveError;
        render();
        return;
      }
      state.flash = alreadyOwned ? t().avatarChanged : t().avatarPurchased;
      render();
    });
  });
  document.querySelectorAll("[data-avatar-glasses], [data-avatar-hat], [data-avatar-clear]").forEach((el) => {
    el.addEventListener("click", () => {
      const current = sessionUser();
      const data = db();
      const student = data.users.find((user) => user.id === current?.id && user.role === "student");
      const slot = el.dataset.avatarClear || (el.dataset.avatarGlasses ? "glasses" : "hat");
      if (el.dataset.avatarClear) {
        if (!student || current?.role !== "student") {
          state.flash = t().noAccess;
          render();
          return;
        }
        student[slot === "glasses" ? "equippedAvatarGlasses" : "equippedAvatarHat"] = "";
        student.avatarCustomized = true;
        try {
          save(data);
        } catch {
          state.flash = t().profileSaveError;
          render();
          return;
        }
        state.flash = t().avatarChanged;
        render();
        return;
      }
      const itemId = el.dataset.avatarGlasses || el.dataset.avatarHat;
      const item = (slot === "glasses" ? AVATAR_GLASSES : AVATAR_HATS)
        .find((candidate) => candidate.id === itemId);
      if (!student || current?.role !== "student" || !item) {
        state.flash = t().noAccess;
        render();
        return;
      }
      const ownedKey = slot === "glasses" ? "ownedAvatarGlasses" : "ownedAvatarHats";
      const equippedKey = slot === "glasses" ? "equippedAvatarGlasses" : "equippedAvatarHat";
      student[ownedKey] = Array.isArray(student[ownedKey]) ? student[ownedKey] : [];
      const alreadyOwned = student[ownedKey].includes(item.id);
      if (!alreadyOwned && (Number(student.stars) || 0) < item.price) {
        state.flash = t().avatarNeedStars;
        render();
        return;
      }
      if (!alreadyOwned) {
        student.stars = (Number(student.stars) || 0) - item.price;
        student[ownedKey].push(item.id);
      }
      student[equippedKey] = item.id;
      student.avatarCustomized = true;
      try {
        save(data);
      } catch {
        state.flash = t().profileSaveError;
        render();
        return;
      }
      state.flash = alreadyOwned ? t().avatarChanged : t().avatarAccessoryPurchased;
      render();
    });
  });
  document.querySelectorAll("[data-open]").forEach((el) => {
    el.addEventListener("click", () => { if (el.dataset.open) openBook(el.dataset.open); });
  });
  document.querySelectorAll("[data-filter]").forEach((el) => {
    el.addEventListener("click", () => { state.filter = el.dataset.filter; render(); });
  });
  document.querySelectorAll("[data-lvl]").forEach((el) => {
    if (el.dataset.go) return;
    el.addEventListener("click", () => { state.lvl = Number(el.dataset.lvl); render(); });
  });
  document.querySelectorAll("[data-onboarding-age]").forEach((el) => {
    el.addEventListener("click", () => {
      state.onboardingAge = Number(el.dataset.onboardingAge);
      el.closest(".onboarding-options")?.querySelectorAll(".onboarding-option").forEach((item) => item.classList.remove("selected"));
      el.classList.add("selected");
    });
  });
  document.querySelectorAll("[data-onboarding-interest]").forEach((el) => {
    el.addEventListener("click", () => {
      const value = el.dataset.onboardingInterest;
      state.onboardingInterests = state.onboardingInterests.includes(value)
        ? state.onboardingInterests.filter((item) => item !== value)
        : [...state.onboardingInterests, value];
      render();
    });
  });
  document.querySelectorAll("[data-onboarding-next]").forEach((el) => {
    el.addEventListener("click", () => { state.onboardingStep = Math.min(2, state.onboardingStep + 1); render(); });
  });
  document.querySelectorAll("[data-onboarding-back]").forEach((el) => {
    el.addEventListener("click", () => { state.onboardingStep = Math.max(0, state.onboardingStep - 1); render(); });
  });
  document.querySelectorAll("[data-onboarding-finish]").forEach((el) => {
    el.addEventListener("click", () => {
      const current = sessionUser();
      if (current?.role === "student") {
        const data = db();
        const student = data.users.find((user) => user.id === current.id && user.role === "student");
        if (student) {
          student.readingAgeBand = Number(state.onboardingAge) || student.readingAgeBand || 0;
          student.readingInterests = [...state.onboardingInterests];
          student.readingGoalMins = Number(state.onboardingGoalMins) || student.readingGoalMins || 15;
          try {
            save(data);
          } catch {
            state.flash = t().profileSaveError;
            render();
            return;
          }
        }
      }
      state.flash = ar() ? "تم تجهيز رحلة القراءة حسب اهتمامات طفلك." : "Your reading journey is ready.";
      keepFlash = true;
      go(current ? homeFor(current.role) : "signup", undefined, { skipHistory: true });
    });
  });
  document.querySelectorAll("[data-onboarding-goal]").forEach((el) => {
    el.addEventListener("click", () => {
      state.onboardingGoalMins = Number(el.dataset.onboardingGoal);
      el.closest(".goal-grid")?.querySelectorAll(".goal-card").forEach((item) => item.classList.remove("selected"));
      el.classList.add("selected");
    });
  });
  document.querySelectorAll("[data-act=\"new-class\"]").forEach((el) => {
    el.addEventListener("click", () => {
      const form = document.getElementById("classroom-create-form");
      if (form) {
        form.hidden = false;
        form.querySelector("input")?.focus();
      }
    });
  });
  document.querySelectorAll("[data-classroom-search]").forEach((searchInput) => {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.trim().toLowerCase();
      const picker = searchInput.closest(".classroom-student-picker");
      if (!picker) return;
      picker.querySelectorAll("[data-student-search]").forEach((choice) => {
        choice.hidden = Boolean(query) &&
          !choice.dataset.studentSearch.includes(query);
      });
    });
  });
  document.querySelectorAll("[data-classroom-add-search]").forEach((searchInput) => {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.trim().toLowerCase();
      const card = searchInput.closest(".classroom-quick-add");
      if (!card) return;
      card.querySelectorAll("[data-student-search]").forEach((result) => {
        result.hidden = Boolean(query) && !result.dataset.studentSearch.includes(query);
      });
    });
  });
  document.querySelectorAll("[data-add-student-class]").forEach((button) => {
    button.addEventListener("click", () => {
      const teacher = sessionUser();
      const data = db();
      const classItem = data.classes.find((item) =>
        item.id === button.dataset.addStudentClass && item.teacherId === teacher?.id);
      const student = data.users.find((item) =>
        item.id === button.dataset.studentId && item.role === "student");
      if (!classItem || !student || !studentsForTeacher(data, teacher).some((item) => item.id === student.id)) {
        state.flash = t().noAccess;
        render();
        return;
      }
      classItem.studentIds = Array.isArray(classItem.studentIds) ? classItem.studentIds : [];
      if (!classItem.studentIds.includes(student.id)) classItem.studentIds.push(student.id);
      save(data);
      state.flash = ar()
        ? `تمت إضافة ${displayName(student)} إلى الفصل.`
        : `${displayName(student)} was added to the class.`;
      keepFlash = true;
      render();
    });
  });
  document.querySelectorAll("[data-edit-class-open]").forEach((el) => {
    el.addEventListener("click", () => {
      state.viewClass = state.viewClass === el.dataset.editClassOpen ? null : el.dataset.editClassOpen;
      render();
    });
  });
  document.querySelectorAll("[data-edit-class]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const teacher = sessionUser();
      const data = db();
      const classItem = data.classes.find((item) => item.id === form.dataset.editClass &&
        item.teacherId === teacher?.id);
      if (!classItem) {
        state.flash = t().noAccess;
        render();
        return;
      }
      const className = String(new FormData(form).get("className") || "").trim();
      if (!className) {
        state.flash = t().fillErr;
        render();
        return;
      }
      classItem.name = className;
      classItem.studentIds = new FormData(form).getAll("studentIds").map(String);
      save(data);
      state.viewClass = null;
      state.flash = ar() ? "تم تحديث طلاب الفصل." : "Class students updated.";
      keepFlash = true;
      render();
    });
  });
  document.querySelectorAll("[data-delete-class]").forEach((button) => {
    button.addEventListener("click", () => {
      const teacher = sessionUser();
      if (teacher?.role !== "teacher") {
        state.flash = t().noAccess;
        render();
        return;
      }
      const data = db();
      const classItem = data.classes.find((item) =>
        item.id === button.dataset.deleteClass && item.teacherId === teacher.id);
      if (!classItem) return;
      if (!confirm(ar()
        ? `هل تريد حذف فصل «${classItem.name}»؟ لن يُحذف الطلاب من حساباتهم.`
        : `Delete class "${classItem.name}"? Students will not be deleted.`)) return;
      data.classes = data.classes.filter((item) => item.id !== classItem.id);
      save(data);
      if (state.viewClass === classItem.id) state.viewClass = null;
      state.flash = ar() ? "تم حذف الفصل." : "Class deleted.";
      keepFlash = true;
      render();
    });
  });
  const classroomForm = document.getElementById("classroom-create-form");
  if (classroomForm) {
    classroomForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = String(new FormData(classroomForm).get("className") || "").trim();
      const studentIds = new FormData(classroomForm).getAll("studentIds").map(String);
      const teacher = sessionUser();
      if (!name || teacher?.role !== "teacher") {
        state.flash = t().fillErr;
        render();
        return;
      }
      const data = db();
      data.classes = Array.isArray(data.classes) ? data.classes : [];
      data.classes.push({
        id: uid("class"),
        name,
        teacherId: teacher.id,
        studentIds,
        createdAt: Date.now()
      });
      save(data);
      state.classroomDraft = name;
      state.flash = ar() ? "تم إنشاء الفصل ويمكنك الآن إدارة طلابه." : "Class created and ready for students.";
      keepFlash = true;
      render();
    });
  }
  document.querySelectorAll("[data-accessibility]").forEach((el) => {
    el.addEventListener("click", () => {
      state.accessibilityMode = el.dataset.accessibility;
      localStorage.setItem("bayan-accessibility", state.accessibilityMode);
      document.body.classList.toggle("reduce-motion", state.accessibilityMode === "reduced");
      document.body.classList.toggle("dark-visual-mode", state.visualMode === "dark");
      render();
    });
  });
  document.querySelectorAll("[data-visual]").forEach((el) => {
    el.addEventListener("click", () => {
      state.visualMode = el.dataset.visual === "dark" ? "dark" : "standard";
      localStorage.setItem("bayan-visual-mode", state.visualMode);
      document.body.classList.toggle("dark-visual-mode", state.visualMode === "dark");
      render();
    });
  });
  document.querySelectorAll("[data-font-size]").forEach((el) => {
    el.addEventListener("click", () => {
      if (!["small", "standard", "large"].includes(el.dataset.fontSize)) return;
      state.fontSize = el.dataset.fontSize;
      localStorage.setItem("bayan-font-size", state.fontSize);
      document.body.classList.remove("text-small", "text-large");
      if (el.dataset.fontSize === "small") document.body.classList.add("text-small");
      if (el.dataset.fontSize === "large") document.body.classList.add("text-large");
      render();
    });
  });
  document.querySelectorAll("[data-speak-word]").forEach((el) => {
    el.addEventListener("click", () => {
      const utterance = new SpeechSynthesisUtterance(el.dataset.speakWord);
      utterance.lang = ar() ? "ar-SA" : "en-US";
      utterance.rate = 0.8;
      speechSynthesis.cancel();
      speechSynthesis.speak(utterance);
    });
  });
  document.querySelectorAll("[data-role]").forEach((el) => {
    if (el.dataset.go) return;
    el.addEventListener("click", () => {
      state.signupRole = el.dataset.role;
      render();
      document.getElementById("signup-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
      document.querySelector('#signup-form [name="name"]')?.focus({ preventScroll: true });
    });
  });
  const signupDraftForm = document.getElementById("signup-form");
  if (signupDraftForm) {
    signupDraftForm.addEventListener("input", (event) => {
      const input = event.target;
      if (input.name) state.signupDraft[input.name] = input.value;
    });
    signupDraftForm.addEventListener("change", (event) => {
      const input = event.target;
      if (input.name) state.signupDraft[input.name] = input.value;
    });
    const parentChildCount = document.getElementById("parent-child-count");
    if (parentChildCount) {
      parentChildCount.addEventListener("change", () => {
        state.parentChildCount = Math.max(1, Math.min(3, Number(parentChildCount.value) || 1));
        render();
      });
    }
  }
  document.querySelectorAll("[data-gender]").forEach((el) => {
    el.addEventListener("click", () => {
      state.gender = el.dataset.gender;
      render();
      document.querySelector(`[data-gender="${state.gender}"]`)?.focus({ preventScroll: true });
    });
  });
  document.querySelectorAll("[data-ans]").forEach((el) => {
    el.addEventListener("click", () => {
      const i = Number(el.dataset.ans);
      const user = sessionUser();
      const currentBook = findBook(user.currentBook);
      const correctIndex = currentBook?.quiz?.correctIndex ?? 0;
      if (state.answer === correctIndex) return;
      if (i === correctIndex) {
        user.quizLevels = user.quizLevels || [];
        if (!user.quizLevels.includes(user.level)) {
          user.stars += 3;
          user.quizLevels.push(user.level);
        }
        user.quiz = "right";
        upsertUser(user);
      } else {
        user.quiz = "wrong";
        upsertUser(user);
      }
      state.answer = i;
      render();
    });
  });
  document.querySelectorAll("[data-mission-answer]").forEach((el) => {
    el.addEventListener("click", () => {
      const current = sessionUser();
      const data = db();
      const student = data.users.find((user) => user.id === current?.id);
      const today = dateKey(new Date());
      if (!student || student.role !== "student" ||
        (student.dailyMission?.date === today && student.dailyMission.completed)) return;
      const mission = dailyMissionForStudent(today, student);
      if (student.dailyMission?.date !== today) {
        student.dailyMission = {
          date: today, level: mission.level, review: mission.review, band: mission.band,
          index: mission.index, completed: false
        };
      }
      const selected = Number(el.dataset.missionAnswer);
      if (selected === mission.correct) {
        student.dailyMission.completed = true;
        student.stars = (Number(student.stars) || 0) + 2;
        state.missionFeedback = { date: today, message: t().missionComplete };
      } else {
        state.missionFeedback = { date: today, message: t().missionTryAgain };
      }
      save(data);
      render();
    });
  });
  document.querySelectorAll("[data-challenge]").forEach((el) => {
    el.addEventListener("click", () => {
      const current = sessionUser();
      const data = db();
      const student = data.users.find((user) => user.id === current?.id);
      const challenge = data.challenges.find((item) => item.id === el.dataset.challenge);
      if (!student || student.role !== "student" || !challenge?.active) {
        state.flash = t().noAccess;
        render();
        return;
      }
      if (weekReadingMinutes(student) < challenge.targetMinutes) {
        state.flash = t().challengeNeedRead;
        render();
        return;
      }
      student.challengeCompletions = student.challengeCompletions || [];
      challenge.completedBy = challenge.completedBy || [];
      if (student.challengeCompletions.includes(challenge.id)) return;
      student.challengeCompletions.push(challenge.id);
      if (!challenge.completedBy.includes(student.id)) challenge.completedBy.push(student.id);
      student.stars = (Number(student.stars) || 0) + 5;
      save(data);
      state.flash = t().challengeDone;
      render();
    });
  });
  document.querySelectorAll("[data-hunt-choice]").forEach((el) => {
    el.addEventListener("click", () => {
      const rounds = WORD_HUNT_ROUNDS[ar() ? "ar" : "en"];
      const round = rounds[state.wordHuntRound];
      const choice = Number(el.dataset.huntChoice);
      if (!round || state.wordHuntChoice === round.answer ||
        !Number.isInteger(choice) || choice < 0 || choice >= round.choices.length) return;
      state.wordHuntChoice = choice;
      state.wordHuntAnswers[state.wordHuntRound] = choice;
      speakGameMessage(choice === round.answer
        ? (ar() ? "أحسنت! إجابة صحيحة." : "Well done! That's right.")
        : (ar() ? "أتفهم، أعدها من جديد" : "I understand. Let's try again."));
      render();
    });
  });
  document.querySelectorAll("[data-hunt-previous]").forEach((el) => {
    el.addEventListener("click", () => {
      if (state.wordHuntRound <= 0) return;
      state.wordHuntRound -= 1;
      state.wordHuntChoice = state.wordHuntAnswers[state.wordHuntRound] ?? null;
      render();
    });
  });
  document.querySelectorAll("[data-hunt-next]").forEach((el) => {
    el.addEventListener("click", () => {
      const rounds = WORD_HUNT_ROUNDS[ar() ? "ar" : "en"];
      const round = rounds[state.wordHuntRound];
      if (!round || state.wordHuntChoice !== round.answer) return;
      if (state.wordHuntRound + 1 === rounds.length) {
        state.wordHuntRound = rounds.length;
        state.wordHuntRewardStatus = awardGameStars("wordHunt", 3);
      } else {
        state.wordHuntRound += 1;
        state.wordHuntChoice = state.wordHuntAnswers[state.wordHuntRound] ?? null;
      }
      if (state.wordHuntRewardStatus === "awarded") {
        speakGameMessage(ar() ? "يا بطل، اصطدت الكلمات وحصلت على ثلاث نجوم!" : "Amazing! You found every word and earned three stars!");
      }
      render();
    });
  });
  document.querySelectorAll("[data-builder-letter]").forEach((el) => {
    el.addEventListener("click", () => {
      if (Date.now() - (state.lastPointerDragAt || 0) < 500) return;
      const round = WORD_BUILDER_ROUNDS[ar() ? "ar" : "en"][state.wordBuilderRound];
      const index = Number(el.dataset.builderLetter);
      if (!round || state.wordBuilderFeedback === "right" ||
        !Number.isInteger(index) || index < 0 || index >= round.letters.length ||
        state.wordBuilderLetters.includes(index) ||
        state.wordBuilderLetters.length >= round.letters.length) return;
      state.wordBuilderLetters.push(index);
      state.wordBuilderHistory[state.wordBuilderRound] = [...state.wordBuilderLetters];
      state.wordBuilderFeedback = "";
      render();
    });
  });
  document.querySelectorAll("[data-builder-remove]").forEach((el) => {
    el.addEventListener("click", () => {
      const slot = Number(el.dataset.builderRemove);
      if (!Number.isInteger(slot) || slot < 0 || slot >= state.wordBuilderLetters.length) return;
      state.wordBuilderLetters.splice(slot, 1);
      state.wordBuilderHistory[state.wordBuilderRound] = [...state.wordBuilderLetters];
      state.wordBuilderFeedback = "";
      render();
    });
  });
  document.querySelectorAll("[data-builder-clear]").forEach((el) => {
    el.addEventListener("click", () => {
      state.wordBuilderLetters = [];
      state.wordBuilderHistory[state.wordBuilderRound] = [];
      state.wordBuilderFeedback = "";
      render();
    });
  });
  document.querySelectorAll("[data-builder-check]").forEach((el) => {
    el.addEventListener("click", () => {
      const round = WORD_BUILDER_ROUNDS[ar() ? "ar" : "en"][state.wordBuilderRound];
      if (!round || state.wordBuilderLetters.length !== round.letters.length) return;
      const builtWord = state.wordBuilderLetters.map((index) => round.letters[index]).join("");
      state.wordBuilderFeedback = builtWord === round.word ? "right" : "wrong";
      state.wordBuilderHistory[state.wordBuilderRound] = [...state.wordBuilderLetters];
      speakGameMessage(state.wordBuilderFeedback === "right"
        ? (ar() ? "أحسنت! بنيت الكلمة بشكل صحيح." : "Well done! You built the word correctly.")
        : (ar() ? "أتفهم، أعدها من جديد" : "I understand. Let's try again."));
      render();
    });
  });
  document.querySelectorAll("[data-builder-previous]").forEach((el) => {
    el.addEventListener("click", () => {
      if (state.wordBuilderRound <= 0) return;
      state.wordBuilderRound -= 1;
      const round = WORD_BUILDER_ROUNDS[ar() ? "ar" : "en"][state.wordBuilderRound];
      state.wordBuilderLetters = [...(state.wordBuilderHistory[state.wordBuilderRound] || [])];
      const builtWord = state.wordBuilderLetters.map((index) => round.letters[index]).join("");
      state.wordBuilderFeedback = builtWord === round.word ? "right" : "";
      render();
    });
  });
  document.querySelectorAll("[data-builder-next]").forEach((el) => {
    el.addEventListener("click", () => {
      const rounds = WORD_BUILDER_ROUNDS[ar() ? "ar" : "en"];
      if (state.wordBuilderFeedback !== "right" || !rounds[state.wordBuilderRound]) return;
      if (state.wordBuilderRound + 1 === rounds.length) {
        state.wordBuilderRound = rounds.length;
        state.wordBuilderRewardStatus = awardGameStars("wordBuilder", 4);
      } else {
        state.wordBuilderRound += 1;
        state.wordBuilderLetters = [...(state.wordBuilderHistory[state.wordBuilderRound] || [])];
        const nextRound = rounds[state.wordBuilderRound];
        const builtWord = state.wordBuilderLetters.map((index) => nextRound.letters[index]).join("");
        state.wordBuilderFeedback = builtWord === nextRound.word ? "right" : "";
      }
      if (state.wordBuilderRewardStatus === "awarded") {
        speakGameMessage(ar() ? "يا بطل، رتبت الكلمات وحصلت على أربع نجوم!" : "Amazing! You built every word and earned four stars!");
      }
      render();
    });
  });
  document.querySelectorAll("[data-cheer]").forEach((el) => {
    el.addEventListener("click", () => {
      const parent = sessionUser();
      const data = db();
      const student = data.users.find((candidate) =>
        candidate.id === el.dataset.cheer && candidate.role === "student");
      const allowed = parent?.role === "parent" &&
        (student?.parentId === parent.id || parent.childIds?.includes(student?.id));
      const teacher = sessionUser();
      const allowedTeacher = teacher?.role === "teacher" &&
        studentsForTeacher(data, teacher).some((candidate) => candidate.id === student?.id);
      const messageIndex = Number(el.dataset.message);
      const message = t().encouragementOptions[messageIndex];
      if ((!allowed && !allowedTeacher) || !message) {
        state.flash = t().noAccess;
        render();
        return;
      }
      student.encouragements = student.encouragements || [];
      student.encouragements.unshift({
        text: message,
        at: Date.now(),
        senderRole: allowedTeacher ? "teacher" : "parent",
        senderName: allowedTeacher ? teacher.name : parent.name
      });
      student.encouragements = student.encouragements.slice(0, 20);
      save(data);
      state.flash = t().encouragementReceived;
      render();
    });
  });
  document.querySelectorAll("[data-tile]").forEach((el) => {
    el.addEventListener("click", () => {
      if (Date.now() - (state.lastPointerDragAt || 0) < 500) return;
      state.sel = state.sel === el.dataset.tile ? null : el.dataset.tile;
      render();
    });
  });
  document.querySelectorAll("[data-slot]").forEach((el) => {
    el.addEventListener("click", () => {
      if (Date.now() - (state.lastPointerDragAt || 0) < 500) return;
      if (!state.sel) return;
      const i = Number(el.dataset.slot);
      placeGameLetter(i, state.sel);
    });
  });
  document.querySelectorAll("[data-delete-recording]").forEach((el) => {
    el.addEventListener("click", async () => {
      const current = sessionUser();
      const data = db();
      const recording = data.recordings.find((item) => item.id === el.dataset.deleteRecording);
      const allowedStudentIds = current?.role === "student"
        ? [current.id]
        : current?.role === "teacher"
          ? studentsForTeacher(data, current).map((student) => student.id)
          : [];
      if (!recording || !allowedStudentIds.includes(recording.studentId)) {
        state.flash = t().noAccess;
        render();
        return;
      }
      if (!window.confirm(ar() ? "هل تريد حذف هذا التسجيل الصوتي نهائيًا؟" : "Delete this voice recording permanently?")) return;
      el.disabled = true;
      try {
        if (typeof indexedDB !== "undefined") await deleteRecordingAudio(recording.id);
      } catch {
        state.flash = ar()
          ? "تعذر حذف الملف الصوتي من مساحة التخزين."
          : "The audio file could not be removed from storage.";
        render();
        return;
      }
      data.recordings = data.recordings.filter((item) => item.id !== recording.id);
      try {
        save(data);
      } catch {
        state.flash = ar()
          ? "حُذف الملف الصوتي لكن تعذر تحديث قائمة التسجيلات. حدّث الصفحة وحاول مرة أخرى."
          : "The audio file was removed, but the recording list could not be updated. Refresh and retry.";
        render();
        return;
      }
      state.flash = ar() ? "تم حذف التسجيل الصوتي." : "The voice recording was deleted.";
      render();
    });
  });
  document.querySelectorAll("[data-star]").forEach((el) => {
    el.addEventListener("click", () => {
      const data = db();
      const st = data.users.find((u) => u.id === el.dataset.star);
      const current = sessionUser();
      const allowed = current?.role === "parent"
        ? st?.parentId === current.id || current.childIds?.includes(st?.id)
        : current?.role === "teacher" && studentsForTeacher(data).some((student) => student.id === st?.id);
      if (!st || !allowed) {
        state.flash = t().noAccess;
        render();
        return;
      }
      st.stars += 1;
      save(data);
      state.flash = t().starSent;
      render();
    });
  });
  document.querySelectorAll("[data-sid]").forEach((el) => {
    if (el.dataset.go) return;
    el.addEventListener("click", () => { state.viewStudent = el.dataset.sid; render(); });
  });

  const loginForm = document.getElementById("login-form");
  document.querySelectorAll("[data-social]").forEach((el) => {
    el.addEventListener("click", () => {
      const email = document.querySelector('#login-form [name="email"]');
      const password = document.querySelector('#login-form [name="password"]');
      if (email) email.value = el.dataset.social === "google" ? "parent@bayan.test" : "teacher@bayan.test";
      if (password) password.value = "1234";
      state.flash = ar() ? "تم ملء حساب تجريبي؛ اضغط تسجيل الدخول." : "Demo account filled. Click Log in.";
      render();
    });
  });
  document.querySelectorAll("[data-demo-email]").forEach((el) => {
    el.addEventListener("click", () => {
      const email = document.querySelector('#login-form [name="email"]');
      const password = document.querySelector('#login-form [name="password"]');
      if (email && password) {
        email.value = el.dataset.demoEmail;
        password.value = "1234";
        email.focus();
      }
    });
  });
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(loginForm);
      if (!login(fd.get("email"), fd.get("password"))) showErr(t().loginErr);
    });
  }
  const signupForm = document.getElementById("signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(signupForm);
      const email = String(fd.get("email") || "").trim();
      const name = String(fd.get("name") || "").trim();
      const password = String(fd.get("password") || "");
      if (!email || !name || !password) return showErr(t().fillErr);
      const data = db();
      const role = state.signupRole;
      const emails = [email].map((value) => value.toLowerCase());
      if (new Set(emails).size !== emails.length ||
        data.users.some((u) => emails.includes(u.email.toLowerCase()))) return showErr(t().existsErr);
      const id = uid("u");
      const user = { id, role, name, nameEn: name, email, password, active: true, isDemo: false, createdAt: Date.now() };
      if (role === "student") {
        const age = Number(fd.get("age"));
        if (!Number.isInteger(age) || age < 3 || age > 16 || !["boy", "girl"].includes(state.gender)) {
          return showErr(t().profileInvalid);
        }
        Object.assign(user, newStudentProfile({
          id, name, email, password, age, gender: state.gender
        }));
        user.readingAgeBand = Number(state.onboardingAge) || 0;
        user.readingInterests = [...state.onboardingInterests];
        user.readingGoalMins = Number(state.onboardingGoalMins) || 15;
      }
      if (role === "teacher") {
        const specialties = String(fd.get("teacherSpecialties") || "").trim();
        const experience = String(fd.get("teacherExperienceYears") || "").trim();
        const experienceYears = experience ? Number(experience) : "";
        const institution = String(fd.get("teacherInstitution") || "").trim();
        if (!specialties || specialties.length > 200 ||
          (experience && (!Number.isInteger(experienceYears) || experienceYears < 0 || experienceYears > 60)) ||
          institution.length > 120) {
          return showErr(t().profileInvalid);
        }
        user.teacherSpecialties = specialties;
        user.teacherExperienceYears = experienceYears;
        user.teacherInstitution = institution;
      }
      if (role === "parent") {
        user.readingLanguage = String(fd.get("readingLanguage") || "both");
        if (!["ar", "en", "both"].includes(user.readingLanguage)) return showErr(t().profileInvalid);
        user.childIds = [];
        user.reminder = true;
        user.familyGoalMins = 60;

        const childEntries = [];
        for (let index = 0; index < state.parentChildCount; index++) {
          const childName = String(fd.get(`childName${index}`) || "").trim();
          const childEmail = String(fd.get(`childEmail${index}`) || "").trim().toLowerCase();
          const childAge = Number(fd.get(`childAge${index}`) || 7);
          if (!childName || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(childEmail) ||
            !Number.isInteger(childAge) || childAge < 3 || childAge > 16) {
            return showErr(t().profileInvalid);
          }
          childEntries.push({ childName, childEmail, childAge });
        }
        const childEmails = childEntries.map((child) => child.childEmail);
        if (childEmails.includes(email.toLowerCase()) ||
          new Set(childEmails).size !== childEmails.length ||
          data.users.some((account) => childEmails.includes(account.email.toLowerCase()))) {
          return showErr(t().existsErr);
        }

        data.users.push(user);
        const credentials = [];
        childEntries.forEach((child) => {
          const childId = uid("u");
          const pin = String(Math.floor(100000 + Math.random() * 900000));
          const student = newStudentProfile({
            id: childId,
            name: child.childName,
            email: child.childEmail,
            password: pin,
            age: child.childAge,
            gender: null,
            parentId: id
          });
          student.readingLanguage = user.readingLanguage;
          student.createdAt = Date.now();
          student.accessPin = pin;
          user.childIds.push(childId);
          data.users.push(student);
          credentials.push(`${child.childName}: ${child.childEmail} — PIN ${pin}`);
        });
        save(data);
        state.signupDraft = {};
        setSession(id);
        state.flash = ar()
          ? `تم إنشاء الحساب وربط ${credentials.length} ${credentials.length === 1 ? "طفل" : "أطفال"}`
          : `Account created with ${credentials.length} linked ${credentials.length === 1 ? "child" : "children"}`;
        keepFlash = true;
        state.screenHistory = [];
        resetLearningGames();
        go("parent", undefined, { skipHistory: true });
        return;
      }
      data.users.push(user);
      save(data);
      state.signupDraft = {};
      setSession(id);
      state.flash = t().welcomeRole;
      keepFlash = true;
      state.screenHistory = [];
      resetLearningGames();
      go(homeFor(role), undefined, { skipHistory: true });
    });
  }
  document.querySelectorAll("[data-edit-child]").forEach((button) => {
    button.addEventListener("click", () => {
      const current = sessionUser();
      const data = db();
      const parent = data.users.find((user) => user.id === current?.id && user.role === "parent");
      const childId = button.dataset.editChild;
      const child = data.users.find((user) => user.id === childId && user.role === "student");
      if (!parent || !child ||
        !(parent.childIds?.includes(child.id) || child.parentId === parent.id)) {
        state.flash = t().noAccess;
        render();
        return;
      }
      state.editChildId = state.editChildId === childId ? null : childId;
      render();
    });
  });
  document.querySelectorAll("[data-cancel-child-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      state.editChildId = null;
      render();
    });
  });
  document.querySelectorAll("[data-parent-edit-child]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const current = sessionUser();
      const data = db();
      const parent = data.users.find((user) => user.id === current?.id && user.role === "parent");
      const child = data.users.find((user) =>
        user.id === form.dataset.parentEditChild && user.role === "student");
      if (!parent || !child ||
        !(parent.childIds?.includes(child.id) || child.parentId === parent.id)) {
        state.flash = t().noAccess;
        render();
        return;
      }
      const values = new FormData(form);
      const name = String(values.get("name") || "").trim();
      const email = String(values.get("email") || "").trim().toLowerCase();
      const age = Number(values.get("age"));
      const gender = String(values.get("gender") || "");
      const readingLanguage = String(values.get("readingLanguage") || "");
      const accessPin = String(values.get("accessPin") || "").trim();
      const emailInUse = data.users.some((user) =>
        user.id !== child.id && user.email.toLocaleLowerCase() === email);
      if (!name || name.length > 60 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
        emailInUse || !Number.isInteger(age) || age < 3 || age > 16 ||
        !["boy", "girl"].includes(gender) || !["ar", "en", "both"].includes(readingLanguage) ||
        (accessPin && !/^\d{4,8}$/.test(accessPin))) {
        state.flash = t().profileInvalid;
        render();
        return;
      }
      if (!child.nameEn || child.nameEn === child.name) child.nameEn = name;
      child.name = name;
      child.email = email;
      child.age = age;
      child.gender = gender;
      child.readingLanguage = readingLanguage;
      if (accessPin) {
        child.password = accessPin;
        child.accessPin = accessPin;
      }
      try {
        save(data);
      } catch {
        state.flash = t().profileSaveError;
        render();
        return;
      }
      state.editChildId = null;
      state.flash = t().profileSaved;
      render();
    });
  });
  const accountProfileForm = document.getElementById("account-profile-form");
  if (accountProfileForm) {
    const avatarInput = accountProfileForm.elements.namedItem("avatar");
    avatarInput.addEventListener("change", async () => {
      const file = avatarInput.files?.[0];
      if (!file) return;
      if (!file.type.startsWith("image/") || file.size > 8 * 1024 * 1024) {
        state.flash = t().profilePhotoInvalid;
        render();
        return;
      }
      try {
        const preview = await imageDataUrl(file);
        document.querySelector(".account-profile .student-profile-avatar")?.setAttribute("src", preview);
      } catch {
        state.flash = t().profilePhotoError;
        render();
      }
    });
    accountProfileForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const current = sessionUser();
      const data = db();
      const account = data.users.find((user) =>
        user.id === current?.id && ["parent", "teacher"].includes(user.role));
      if (!account || !["parent", "teacher"].includes(current?.role)) {
        state.flash = t().noAccess;
        render();
        return;
      }
      const formData = new FormData(accountProfileForm);
      const name = String(formData.get("name") || "").trim();
      const email = account.role === "parent"
        ? account.email : String(formData.get("email") || "").trim();
      const password = String(formData.get("password") || "");
      const readingLanguage = account.role === "parent"
        ? String(formData.get("readingLanguage") || "") : "";
      const avatarFile = avatarInput.files?.[0];
      const teacherBio = account.role === "teacher" ? String(formData.get("teacherBio") || "").trim() : "";
      const teacherSpecialties = account.role === "teacher" ? String(formData.get("teacherSpecialties") || "").trim() : "";
      const experienceValue = account.role === "teacher"
        ? String(formData.get("teacherExperienceYears") || "").trim() : "";
      const teacherExperienceYears = experienceValue ? Number(experienceValue) : "";
      const teacherQualifications = account.role === "teacher"
        ? String(formData.get("teacherQualifications") || "").trim() : "";
      const teacherApproach = account.role === "teacher" ? String(formData.get("teacherApproach") || "").trim() : "";
      const teacherInstitution = account.role === "teacher"
        ? String(formData.get("teacherInstitution") || "").trim() : "";
      const emailInUse = account.role === "teacher" && data.users.some((user) =>
        user.id !== account.id && user.email.toLocaleLowerCase() === email.toLocaleLowerCase());
      if (!name ||
        (account.role === "teacher" && (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || emailInUse)) ||
        (account.role === "parent" && !["ar", "en", "both"].includes(readingLanguage)) ||
        (password && password.length < 6) ||
        (account.role === "teacher" && (
          teacherBio.length > 600 || teacherSpecialties.length > 200 ||
          (experienceValue && (!Number.isInteger(teacherExperienceYears) || teacherExperienceYears < 0 || teacherExperienceYears > 60)) ||
          teacherQualifications.length > 300 || teacherApproach.length > 500 ||
          teacherInstitution.length > 120
        )) ||
        (avatarFile && (!avatarFile.type.startsWith("image/") || avatarFile.size > 8 * 1024 * 1024))) {
        state.flash = t().profileInvalid;
        render();
        return;
      }
      let avatar;
      try {
        if (avatarFile) avatar = await imageDataUrl(avatarFile);
      } catch {
        state.flash = t().profilePhotoError;
        render();
        return;
      }
      if (!account.nameEn || account.nameEn === account.name) account.nameEn = name;
      account.name = name;
      if (account.role === "teacher") account.email = email;
      if (account.role === "parent") account.readingLanguage = readingLanguage;
      if (password) account.password = password;
      if (avatar) account.avatar = avatar;
      if (account.role === "teacher") {
        account.teacherBio = teacherBio;
        account.teacherSpecialties = teacherSpecialties;
        account.teacherExperienceYears = teacherExperienceYears;
        account.teacherQualifications = teacherQualifications;
        account.teacherApproach = teacherApproach;
        account.teacherInstitution = teacherInstitution;
      }
      try {
        save(data);
      } catch {
        state.flash = t().profileSaveError;
        render();
        return;
      }
      state.flash = t().profileSaved;
      render();
    });
  }
  const accountFilters = document.getElementById("admin-account-filters");
  if (accountFilters) {
    accountFilters.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(accountFilters);
      state.adminAccountQuery = String(formData.get("query") || "");
      state.adminAccountRole = String(formData.get("role") || "all");
      state.adminAccountStatus = String(formData.get("status") || "all");
      state.adminAccountLinked = String(formData.get("linked") || "all");
      state.adminAccountPage = 1;
      render();
    });
  }
  const accountQuickSearch = document.getElementById("admin-account-search");
  if (accountQuickSearch) {
    accountQuickSearch.addEventListener("submit", (event) => {
      event.preventDefault();
      state.adminAccountQuery = String(new FormData(accountQuickSearch).get("query") || "");
      state.adminAccountPage = 1;
      render();
    });
  }
  const subscriptionFilters = document.getElementById("admin-subscription-filters");
  if (subscriptionFilters) {
    subscriptionFilters.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(subscriptionFilters);
      state.adminSubscriptionQuery = String(formData.get("query") || "");
      state.adminSubscriptionStatus = String(formData.get("status") || "all");
      state.adminSubscriptionPlan = String(formData.get("plan") || "all");
      state.adminSubscriptionPage = 1;
      render();
    });
  }
  const contentFilters = document.getElementById("admin-content-filters");
  if (contentFilters) {
    contentFilters.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(contentFilters);
      state.adminContentQuery = String(formData.get("query") || "");
      state.adminContentLevel = String(formData.get("level") || "all");
      state.adminContentSeries = String(formData.get("series") || "all");
      state.adminContentAccess = String(formData.get("access") || "all");
      state.adminContentStatus = String(formData.get("status") || "all");
      state.adminContentPage = 1;
      render();
    });
  }
  const inboxFilters = document.getElementById("admin-inbox-filters");
  if (inboxFilters) {
    inboxFilters.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(inboxFilters);
      state.adminInboxQuery = String(formData.get("query") || "");
      state.adminInboxStatus = String(formData.get("status") || "all");
      state.adminInboxPage = 1;
      render();
    });
  }
  document.querySelectorAll("[data-clear-admin-inbox]").forEach((button) => {
    button.addEventListener("click", () => {
      state.adminInboxQuery = "";
      state.adminInboxStatus = "all";
      state.adminInboxPage = 1;
      render();
    });
  });
  document.querySelectorAll("[data-clear-admin-filters]").forEach((button) => {
    button.addEventListener("click", () => {
      state.adminAccountQuery = "";
      state.adminAccountRole = "all";
      state.adminAccountStatus = "all";
      state.adminAccountLinked = "all";
      state.adminAccountPage = 1;
      render();
    });
  });
  document.querySelectorAll("[data-clear-admin-subscription-filters]").forEach((button) => {
    button.addEventListener("click", () => {
      state.adminSubscriptionQuery = "";
      state.adminSubscriptionStatus = "all";
      state.adminSubscriptionPlan = "all";
      state.adminSubscriptionPage = 1;
      render();
    });
  });
  document.querySelectorAll("[data-clear-admin-content]").forEach((button) => {
    button.addEventListener("click", () => {
      state.adminContentQuery = "";
      state.adminContentLevel = "all";
      state.adminContentSeries = "all";
      state.adminContentAccess = "all";
      state.adminContentStatus = "all";
      state.adminContentPage = 1;
      render();
    });
  });
  document.querySelectorAll("[data-admin-page]").forEach((button) => {
    button.addEventListener("click", () => {
      const page = Math.max(1, Number(button.dataset.page) || 1);
      if (button.dataset.adminPage === "accounts") state.adminAccountPage = page;
      else if (button.dataset.adminPage === "subscriptions") state.adminSubscriptionPage = page;
      else if (button.dataset.adminPage === "inbox") state.adminInboxPage = page;
      else if (button.dataset.adminPage === "content") state.adminContentPage = page;
      render();
    });
  });
  document.querySelectorAll("[data-read-message]").forEach((button) => {
    button.addEventListener("click", () => {
      if (sessionUser()?.role !== "admin") {
        state.flash = t().noAccess;
        render();
        return;
      }
      const data = db();
      const message = data.contacts[Number(button.dataset.readMessage)];
      if (!message) {
        state.flash = t().noAccess;
        render();
        return;
      }
      message.readAt = Date.now();
      save(data);
      state.flash = t().messageRead;
      render();
    });
  });
  document.querySelectorAll("[data-export-accounts], [data-export-subscriptions]").forEach((button) => {
    button.addEventListener("click", () => {
      const admin = sessionUser();
      if (admin?.role !== "admin") {
        state.flash = t().noAccess;
        render();
        return;
      }
      const data = db();
      const isAccounts = button.hasAttribute("data-export-accounts");
      const rows = isAccounts ? filteredAdminUsers(data) : data.users.filter((user) =>
        ["parent", "student"].includes(user.role)).filter((user) => {
          const search = state.adminSubscriptionQuery.trim().toLocaleLowerCase();
          const matchesSearch = !search || user.name.toLocaleLowerCase().includes(search) ||
            (user.nameEn || "").toLocaleLowerCase().includes(search) || user.email.toLocaleLowerCase().includes(search);
          return matchesSearch &&
            (state.adminSubscriptionStatus === "all" || subscriptionStatus(user) === state.adminSubscriptionStatus) &&
            (state.adminSubscriptionPlan === "all" || user.subscriptionPlan === state.adminSubscriptionPlan);
        });
      const headers = isAccounts
        ? [t().name, t().email, t().role, t().accountStatus, t().parentAccount, t().teacherAccounts, t().level]
        : [t().name, t().email, t().role, t().subscriptionState, t().subscriptionPlan, t().subscriptionExpiry];
      const csvRows = rows.map((user) => isAccounts
        ? [user.name, user.email, t()[user.role === "admin" ? "adminRole" : user.role === "parent" ? "parentRole" : user.role === "teacher" ? "teacherRole" : "student"],
          user.active === false ? t().disabled : t().enabled,
          data.users.find((parent) => parent.id === user.parentId)?.email || "",
          data.users.filter((teacher) => user.teacherIds?.includes(teacher.id)).map((teacher) => teacher.email).join(";"),
          user.role === "student" ? user.level : ""]
        : [user.name, user.email, t()[user.role], t()[subscriptionStatus(user) === "active" ? "subscriptionActive" :
          subscriptionStatus(user) === "expired" ? "subscriptionExpired" : "subscriptionInactive"],
        user.subscriptionPlan === "monthly" ? t().monthlyPlan : t().yearlyPlan, user.subscriptionExpiresAt || ""]);
      const csv = `\uFEFF${[headers, ...csvRows].map((row) => row.map(csvCell).join(",")).join("\r\n")}`;
      const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
      const link = document.createElement("a");
      link.href = url;
      link.download = isAccounts ? "bayan-accounts.csv" : "bayan-subscriptions.csv";
      link.click();
      URL.revokeObjectURL(url);
    });
  });
  const adminCreateForm = document.getElementById("admin-create-account");
  if (adminCreateForm) {
    adminCreateForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (sessionUser()?.role !== "admin") {
        state.flash = t().noAccess;
        render();
        return;
      }
      const formData = new FormData(adminCreateForm);
      const name = String(formData.get("name") || "").trim();
      const email = String(formData.get("email") || "").trim().toLowerCase();
      const password = String(formData.get("password") || "");
      const role = String(formData.get("role") || "");
      const data = db();
      if (!name || !email || password.length < 4 ||
        !["student", "parent", "teacher", "admin"].includes(role)) {
        state.flash = t().fillErr;
        render();
        return;
      }
      if (data.users.some((user) => user.email.toLowerCase() === email)) {
        state.flash = t().accountEmailExists;
        render();
        return;
      }
      const id = uid("u");
      const user = { id, role, name, nameEn: name, email, password, active: true, createdAt: Date.now() };
      if (role === "student") {
        Object.assign(user, newStudentProfile({ id, name, email, password, age: 7, gender: null }));
      } else if (role === "parent") {
        user.childIds = [];
        user.reminder = true;
        user.familyGoalMins = 60;
        user.subscriptionStatus = "inactive";
      }
      data.users.push(user);
      save(data);
      state.flash = t().accountCreated;
      render();
    });
  }
  document.querySelectorAll("[data-admin-account]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const admin = sessionUser();
      if (admin?.role !== "admin") {
        state.flash = t().noAccess;
        render();
        return;
      }
      const data = db();
      const user = data.users.find((candidate) => candidate.id === form.dataset.adminAccount);
      if (!user) {
        state.flash = t().noAccess;
        render();
        return;
      }
      const formData = new FormData(form);
      const email = String(formData.get("email") || "").trim().toLowerCase();
      const name = String(formData.get("name") || "").trim();
      const role = String(formData.get("role") || user.role);
      const active = String(formData.get("active") || (user.active === false ? "false" : "true")) === "true";
      const password = String(formData.get("password") || "");
      if (!name || !email || !["student", "parent", "teacher", "admin"].includes(role)) {
        state.flash = t().fillErr;
        render();
        return;
      }
      if (data.users.some((candidate) => candidate.id !== user.id && candidate.email.toLowerCase() === email)) {
        state.flash = t().accountEmailExists;
        render();
        return;
      }
      if (password && password.length < 4) {
        state.flash = t().fillErr;
        render();
        return;
      }
      if (user.id === admin.id && (role !== "admin" || !active)) {
        state.flash = t().cannotDisableSelf;
        render();
        return;
      }
      const previousParentId = user.parentId;
      const previousRole = user.role;
      if (user.role === "student" && role !== "student") {
        data.users.filter((candidate) => candidate.role === "parent").forEach((parent) => {
          parent.childIds = (parent.childIds || []).filter((id) => id !== user.id);
        });
      }
      if (previousRole === "parent" && role !== "parent") {
        data.users.filter((candidate) => candidate.role === "student" && candidate.parentId === user.id)
          .forEach((student) => { delete student.parentId; });
        delete user.childIds;
      }
      if (previousRole === "teacher" && role !== "teacher") {
        data.users.filter((candidate) => candidate.role === "student").forEach((student) => {
          student.teacherIds = (student.teacherIds || []).filter((id) => id !== user.id);
        });
        data.assignments.forEach((assignment) => {
          if (assignment.teacherId === user.id) assignment.teacherId = null;
        });
        data.challenges.forEach((challenge) => {
          if (challenge.teacherId === user.id) challenge.teacherId = null;
        });
      }
      user.name = name;
      user.nameEn = name;
      user.email = email;
      user.role = role;
      user.active = active;
      if (password) user.password = password;
      if (role === "student") {
        const parentEmail = String(formData.get("parentEmail") || "").trim().toLowerCase();
        const parent = parentEmail
          ? data.users.find((candidate) => candidate.email.toLowerCase() === parentEmail && candidate.role === "parent")
          : null;
        const teacherEmails = String(formData.get("teacherEmails") || "").split(/[,;\n]/)
          .map((value) => value.trim().toLowerCase()).filter(Boolean);
        const parentId = parent?.id || "";
        const matchedTeachers = teacherEmails.map((email) =>
          data.users.find((candidate) => candidate.email.toLowerCase() === email && candidate.role === "teacher"));
        if ((parentEmail && !parent) || matchedTeachers.some((teacher) => !teacher)) {
          state.flash = t().invalidLinkedEmail;
          render();
          return;
        }
        if (previousParentId && previousParentId !== parentId) {
          const previousParent = data.users.find((candidate) => candidate.id === previousParentId);
          if (previousParent) previousParent.childIds = (previousParent.childIds || []).filter((id) => id !== user.id);
        }
        if (previousRole !== "student" || !Number.isInteger(user.level)) {
          Object.assign(user, newStudentProfile({
            id: user.id, name, email, password: user.password, age: 7, gender: null, parentId
          }));
        }
        user.parentId = parentId || undefined;
        user.teacherIds = [...new Set(matchedTeachers.map((teacher) => teacher.id))];
        if (parent) {
          parent.childIds = parent.childIds || [];
          if (!parent.childIds.includes(user.id)) parent.childIds.push(user.id);
        }
      } else {
        delete user.parentId;
        delete user.teacherIds;
        if (role === "parent") {
          user.childIds = user.childIds || [];
          user.familyGoalMins = Number(user.familyGoalMins) || 60;
          user.subscriptionStatus = user.subscriptionStatus || "inactive";
        }
      }
      save(data);
      state.flash = t().accountSaved;
      render();
    });
  });
  document.querySelectorAll("[data-delete-account]").forEach((button) => {
    button.addEventListener("click", () => {
      const admin = sessionUser();
      const data = db();
      const user = data.users.find((candidate) => candidate.id === button.dataset.deleteAccount);
      if (admin?.role !== "admin" || !user || user.id === admin.id ||
        (user.role === "admin" && data.users.filter((candidate) => candidate.role === "admin").length <= 1)) {
        state.flash = t().noAccess;
        render();
        return;
      }
      if (!confirm(t().confirmDeleteAccount)) return;
      data.users = data.users.filter((candidate) => candidate.id !== user.id);
      data.users.forEach((candidate) => {
        if (candidate.role === "parent") {
          candidate.childIds = (candidate.childIds || []).filter((id) => id !== user.id);
        }
        if (candidate.role === "student") {
          if (candidate.parentId === user.id) delete candidate.parentId;
          candidate.teacherIds = (candidate.teacherIds || []).filter((id) => id !== user.id);
        }
      });
      data.assignments.forEach((assignment) => {
        assignment.recipientIds = (assignment.recipientIds || []).filter((id) => id !== user.id);
        assignment.completedBy = (assignment.completedBy || []).filter((id) => id !== user.id);
        if (assignment.studentId === user.id) assignment.studentId = null;
        if (assignment.teacherId === user.id) assignment.teacherId = null;
      });
      data.recordings = data.recordings.filter((recording) => recording.studentId !== user.id);
      data.challenges.forEach((challenge) => {
        challenge.recipientIds = (challenge.recipientIds || []).filter((id) => id !== user.id);
        challenge.completedBy = (challenge.completedBy || []).filter((id) => id !== user.id);
        if (challenge.teacherId === user.id) challenge.teacherId = null;
      });
      if (state.viewStudent === user.id) state.viewStudent = null;
      save(data);
      state.flash = t().accountDeleted;
      render();
    });
  });
  document.querySelectorAll("[data-admin-subscription]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (sessionUser()?.role !== "admin") {
        state.flash = t().noAccess;
        render();
        return;
      }
      const data = db();
      const user = data.users.find((candidate) => candidate.id === form.dataset.adminSubscription &&
        ["parent", "student"].includes(candidate.role));
      if (!user) {
        state.flash = t().noAccess;
        render();
        return;
      }
      const formData = new FormData(form);
      const paymentAmountText = String(formData.get("paymentAmount") || "").trim();
      const paymentDate = String(formData.get("paymentDate") || "");
      const paymentAmount = Number(paymentAmountText);
      if (paymentAmountText && (!Number.isFinite(paymentAmount) || paymentAmount <= 0 ||
        !/^\d{4}-\d{2}-\d{2}$/.test(paymentDate) ||
        Number.isNaN(new Date(`${paymentDate}T00:00:00`).getTime()))) {
        state.flash = t().paymentInvalid;
        render();
        return;
      }
      user.subscriptionStatus = String(formData.get("status"));
      user.subscriptionPlan = String(formData.get("plan"));
      user.subscriptionExpiresAt = String(formData.get("expiresAt") || "");
      if (paymentAmountText) {
        data.payments.push({
          id: uid("payment"),
          userId: user.id,
          userName: user.name,
          userEmail: user.email,
          amount: paymentAmount,
          paidAt: paymentDate,
          plan: user.subscriptionPlan,
          createdAt: Date.now()
        });
      }
      save(data);
      state.flash = paymentAmountText ? t().paymentRecorded : t().subscriptionSaved;
      render();
    });
  });
  const adminStoryForm = document.getElementById("admin-story-form");
  if (adminStoryForm) {
    adminStoryForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (sessionUser()?.role !== "admin") {
        state.flash = t().noAccess;
        render();
        return;
      }
      const formData = new FormData(adminStoryForm);
      const splitPages = (value) => String(value || "").trim().split(/\n\s*\n/)
        .map((page) => page.split("\n").map((line) => line.trim()).filter(Boolean))
        .filter((page) => page.length);
      const pagesAr = splitPages(formData.get("pagesAr"));
      const pagesEn = splitPages(formData.get("pagesEn"));
      const optionsAr = String(formData.get("optionsAr") || "").split("\n").map((item) => item.trim()).filter(Boolean);
      const optionsEn = String(formData.get("optionsEn") || "").split("\n").map((item) => item.trim()).filter(Boolean);
      const titleAr = String(formData.get("titleAr") || "").trim();
      const titleEn = String(formData.get("titleEn") || "").trim();
      const questionAr = String(formData.get("questionAr") || "").trim();
      const questionEn = String(formData.get("questionEn") || "").trim();
      const level = Number(formData.get("level"));
      const correctIndex = Number(formData.get("correctIndex"));
      if (!titleAr || !titleEn || !questionAr || !questionEn || pagesAr.length < 1 ||
        pagesAr.length !== pagesEn.length || optionsAr.length !== 3 || optionsEn.length !== 3 ||
        !Number.isInteger(level) || level < 1 || level > 12 || ![0, 1, 2].includes(correctIndex)) {
        state.flash = t().storyInvalid;
        render();
        return;
      }
      const data = db();
      const accessMode = String(formData.get("accessMode") || "free");
      const purchasePrice = Math.max(0, Number(formData.get("purchasePrice")) || 0);
      if (accessMode === "paid" && purchasePrice < 1) {
        state.flash = ar() ? "أدخل سعرًا صحيحًا للكتاب المدفوع." : "Enter a valid price for the paid book.";
        render();
        return;
      }
      data.books.unshift({
        id: uid("book"), custom: true, active: true,
        ar: titleAr, en: titleEn, s: String(formData.get("series")),
        l: level, color: "linear-gradient(160deg,#4fc3f7,#1e88d6)",
        premium: accessMode !== "free",
        accessMode,
        purchasePrice: accessMode === "paid" ? purchasePrice : 0,
        pages: pagesAr.map((page, index) => ({
          img: "assets/book-continue.jpg", ar: page, en: pagesEn[index]
        })),
        quiz: { questionAr, questionEn, optionsAr, optionsEn, correctIndex }
      });
      save(data);
      state.flash = t().storyCreated;
      render();
    });
  }
  document.querySelectorAll("[data-content-access]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (sessionUser()?.role !== "admin") {
        state.flash = t().noAccess;
        render();
        return;
      }
      const data = db();
      const id = form.dataset.contentAccess;
      const formData = new FormData(form);
      const accessMode = String(formData.get("accessMode") || "free");
      const purchasePrice = Math.max(0, Number(formData.get("purchasePrice")) || 0);
      if (accessMode === "paid" && purchasePrice < 1) {
        state.flash = ar() ? "أدخل سعرًا صحيحًا للكتاب المدفوع." : "Enter a valid price for the paid book.";
        render();
        return;
      }
      const premium = accessMode !== "free";
      const customBook = data.books.find((book) => book.id === id);
      if (customBook) {
        customBook.premium = premium;
        customBook.accessMode = accessMode;
        customBook.purchasePrice = accessMode === "paid" ? purchasePrice : 0;
      }
      else if (BOOKS.some((book) => book.id === id)) data.bookAccess[id] = { premium, accessMode, purchasePrice: accessMode === "paid" ? purchasePrice : 0 };
      else {
        state.flash = t().noAccess;
        render();
        return;
      }
      save(data);
      state.flash = t().accessSaved;
      render();
    });
  });
  document.querySelectorAll("[data-toggle-content]").forEach((button) => {
    button.addEventListener("click", () => {
      if (sessionUser()?.role !== "admin") {
        state.flash = t().noAccess;
        render();
        return;
      }
      const data = db();
      const book = data.books.find((candidate) => candidate.id === button.dataset.toggleContent);
      if (!book) {
        state.flash = t().noAccess;
        render();
        return;
      }
      book.active = book.active === false;
      save(data);
      state.flash = book.active ? t().storyCreated : t().storyDeleted;
      render();
    });
  });
  const addChild = document.getElementById("add-child-form");
  if (addChild) {
    addChild.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(addChild);
      const parent = sessionUser();
      const data = db();
      const name = String(fd.get("childName") || "").trim();
      const age = Number(fd.get("age") || 7);
      if (!name) {
        state.flash = t().fillErr;
        render();
        return;
      }
      const id = uid("u");
      const email = `student-${id}@bayan.local`;
      const pin = String(Math.floor(100000 + Math.random() * 900000));
      const child = newStudentProfile({
        id, name, email, password: pin, age, gender: null, parentId: parent.id
      });
      child.createdAt = Date.now();
      child.accessPin = pin;
      data.users.push(child);
      parent.childIds = parent.childIds || [];
      if (!parent.childIds.includes(id)) parent.childIds.push(id);
      const pi = data.users.findIndex((u) => u.id === parent.id);
      data.users[pi] = parent;
      save(data);
      state.flash = `${t().addChildOk} ${t().studentLoginDetails.replace("{email}", escapeHtml(email)).replace("{pin}", pin)}`;
      render();
    });
  }
  const linkTeacherStudent = document.getElementById("link-teacher-student-form");
  if (linkTeacherStudent) {
    linkTeacherStudent.addEventListener("submit", (e) => {
      e.preventDefault();
      const teacher = sessionUser();
      if (teacher?.role !== "teacher") {
        state.flash = t().noAccess;
        render();
        return;
      }
      const email = String(new FormData(linkTeacherStudent).get("email") || "").trim().toLowerCase();
      if (!email) {
        state.flash = t().fillErr;
        render();
        return;
      }
      const data = db();
      const student = data.users.find((account) =>
        account.role === "student" && account.email.toLowerCase() === email);
      if (!student) {
        state.flash = ar() ? "لم يتم العثور على طالب بهذا البريد." : "No student account was found with that email.";
        render();
        return;
      }
      student.teacherIds = Array.isArray(student.teacherIds) ? student.teacherIds : [];
      if (student.teacherIds.includes(teacher.id)) {
        state.flash = ar() ? "هذا الطالب مرتبط بك بالفعل." : "This student is already linked to you.";
        render();
        return;
      }
      student.teacherIds.push(teacher.id);
      save(data);
      state.flash = ar() ? "تم ربط الطالب بحسابك." : "Student linked to your account.";
      keepFlash = true;
      render();
    });
  }
  const linkChild = document.getElementById("link-child-form");
  if (linkChild) {
    linkChild.addEventListener("submit", (e) => {
      e.preventDefault();
      const parent = sessionUser();
      const email = String(new FormData(linkChild).get("email") || "").trim().toLowerCase();
      const data = db();
      const student = data.users.find((u) => u.email.toLowerCase() === email && u.role === "student");
      if (!student) {
        state.flash = t().studentNotFound;
      } else if (student.parentId === parent.id || parent.childIds?.includes(student.id)) {
        state.flash = t().alreadyLinked;
      } else if (student.parentId && student.parentId !== parent.id) {
        state.flash = t().linkedElsewhere;
      } else {
        student.parentId = parent.id;
        parent.childIds = parent.childIds || [];
        if (!parent.childIds.includes(student.id)) parent.childIds.push(student.id);
        const parentIndex = data.users.findIndex((u) => u.id === parent.id);
        data.users[parentIndex] = parent;
        save(data);
        state.flash = t().linkChildOk;
      }
      render();
    });
  }
  const assignForm = document.getElementById("assign-form");
  const familyGoalForm = document.getElementById("family-goal-form");
  if (familyGoalForm) {
    familyGoalForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const parent = sessionUser();
      const goal = Number(new FormData(familyGoalForm).get("goal"));
      if (parent?.role !== "parent" || ![30, 60, 90, 120].includes(goal)) {
        state.flash = t().noAccess;
        render();
        return;
      }
      const data = db();
      const savedParent = data.users.find((user) => user.id === parent.id);
      savedParent.familyGoalMins = goal;
      save(data);
      state.flash = t().goalSaved;
      render();
    });
  }
  const challengeForm = document.getElementById("challenge-form");
  if (challengeForm) {
    challengeForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const teacher = sessionUser();
      const formData = new FormData(challengeForm);
      const title = String(formData.get("title") || "").trim();
      const minutes = Number(formData.get("minutes"));
      if (teacher?.role !== "teacher" || !title || ![5, 10, 15, 20, 30].includes(minutes)) {
        state.flash = t().fillErr;
        render();
        return;
      }
      const data = db();
      const students = studentsForTeacher(data, teacher);
      if (!students.length) {
        state.flash = t().noRecipients;
        render();
        return;
      }
      data.challenges.forEach((challenge) => {
        if (challenge.active && challenge.teacherId === teacher.id) challenge.active = false;
      });
      data.challenges.unshift({
        id: uid("challenge"), teacherId: teacher.id, title, targetMinutes: minutes,
        recipientIds: students.map((student) => student.id),
        createdAt: Date.now(), active: true, completedBy: []
      });
      save(data);
      state.flash = t().challengePublished;
      render();
    });
  }
  if (assignForm) {
    assignForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(assignForm);
      const teacher = sessionUser();
      const data = db();
      const bookId = String(fd.get("book"));
      const who = String(fd.get("who"));
      const students = studentsForTeacher(data);
      const book = findBook(bookId);
      if (!book || book.active === false ||
        (who !== "all" && !students.some((student) => student.id === who))) {
        state.flash = t().noAccess;
        render();
        return;
      }
      const recipients = who === "all" ? students : students.filter((student) => student.id === who);
      if (!recipients.length) {
        state.flash = t().noRecipients;
        render();
        return;
      }
      data.assignments.unshift({
        id: uid("a"), teacherId: teacher.id,
        studentId: who === "all" ? null : who, recipientIds: recipients.map((student) => student.id),
        completedBy: [], createdAt: Date.now(), bookId
      });
      if (who === "all") {
        students.forEach((s) => { if (book.l <= s.level) s.currentBook = bookId; });
      } else {
        const student = students.find((u) => u.id === who);
        if (book.l <= student.level) student.currentBook = bookId;
      }
      save(data);
      state.flash = t().assigned;
      render();
    });
  }
  const resetPasswordForm = document.getElementById("reset-password-form");
  if (resetPasswordForm) {
    resetPasswordForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(resetPasswordForm);
      const email = String(formData.get("email") || "").trim().toLowerCase();
      const password = String(formData.get("newPassword") || "");
      const confirmation = String(formData.get("confirmPassword") || "");
      if (password.length < 6 || password !== confirmation) {
        state.flash = ar() ? "كلمتا المرور غير متطابقتين أو قصيرة جدًا." : "Passwords do not match or are too short.";
        render();
        return;
      }
      const data = db();
      const account = data.users.find((user) => user.email.toLowerCase() === email);
      if (!account) {
        state.flash = ar() ? "لا يوجد حساب بهذا البريد على هذا الجهاز." : "No account with this email exists on this device.";
        render();
        return;
      }
      account.password = password;
      save(data);
      state.flash = ar() ? "تم تحديث كلمة المرور بنجاح." : "Password updated successfully.";
      keepFlash = true;
      go("login");
    });
  }
  document.querySelectorAll("[data-checkout-plan]").forEach((el) => {
    el.addEventListener("click", () => {
      state.checkoutPlan = el.dataset.checkoutPlan;
      render();
    });
  });
  const checkoutForm = document.getElementById("checkout-form");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (state.checkoutBook) {
        const user = sessionUser();
        const book = findBook(state.checkoutBook);
        if (!user || user.role !== "student" || !book) {
          state.flash = t().noAccess;
          render();
          return;
        }
        const data = db();
        const liveUser = data.users.find((candidate) => candidate.id === user.id);
        liveUser.ownedBooks = Array.isArray(liveUser.ownedBooks) ? liveUser.ownedBooks : [];
        if (!liveUser.ownedBooks.includes(book.id)) liveUser.ownedBooks.push(book.id);
        data.payments.push({
          id: uid("purchase"), type: "book", bookId: book.id, userId: user.id,
          amount: book.purchasePrice || 0, when: new Date().toISOString().slice(0, 10),
          createdAt: Date.now()
        });
        save(data);
        state.checkoutBook = null;
        state.flash = t().bookPurchased;
        keepFlash = true;
        openBook(book.id);
        return;
      }
      state.flash = ar() ? "تم تأكيد الاشتراك التجريبي. لن يتم خصم أي مبلغ." : "Demo subscription confirmed. No real payment was made.";
      keepFlash = true;
      go("signup");
    });
  }
  const helpSearch = document.querySelector(".help-search input");
  if (helpSearch) {
    helpSearch.addEventListener("input", () => {
      const query = helpSearch.value.trim().toLowerCase();
      document.querySelectorAll(".faq-list details").forEach((item) => {
        item.hidden = Boolean(query) && !item.textContent.toLowerCase().includes(query);
      });
    });
  }
  const contact = document.getElementById("contact-form");
  if (contact) {
    contact.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = db();
      const fd = new FormData(contact);
      data.contacts.push({ id: uid("message"), name: fd.get("name"), email: fd.get("email"), message: fd.get("message"), at: Date.now() });
      save(data);
      state.contactSent = true;
      render();
    });
  }
}

seed();
const existing = sessionUser();
document.body.classList.toggle("reduce-motion", state.accessibilityMode === "reduced");
document.body.classList.toggle("dark-visual-mode", state.visualMode === "dark");
document.body.classList.toggle("text-small", state.fontSize === "small");
document.body.classList.toggle("text-large", state.fontSize === "large");
if (existing && ["home", "login", "signup"].includes(state.screen)) {
  state.screen = homeFor(existing.role);
}
render();
setInterval(() => {
  if (state.screen === "reader") {
    state.now = Date.now();
    const timer = document.querySelector(".reader .card div[dir='ltr']");
    if (timer) {
      const elapsed = Math.floor(((state.accMs || 0) + (state.segStart ? Date.now() - state.segStart : 0)) / 1000);
      const pad = (n) => (n < 10 ? "0" : "") + n;
      timer.innerHTML = `${pad(Math.floor(elapsed / 60))}:${pad(elapsed % 60)} <span class="muted">/ 15:00</span>`;
    }
  }
}, 1000);
