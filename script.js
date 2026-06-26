const translations = {
  zh: {
    eyebrow: '“孤步雨中，永世獨行”',
    heroTitle: '在神聖勃然起敬國擔任臨時行政',
    intro: '雙手萬能/硬爆，唯一真理',
    interest: '興趣：研讀五代史',
    motto: '一句簡短介紹：雙手萬能/硬爆，唯一真理',
    ctaPrimary: '聯絡我',
    ctaSecondary: '看更多',
    portraitLabel: '虛擬名片',
    statusLabel: '狀態',
    statusValue: '夜航中，正在追捕靈感',
    locationLabel: '位置',
    locationValue: '東京、上海與銀河的交界',
    aboutTitle: '關於 雨獨',
    aboutText: 'YD 是一個光線過度敏感的虛構人物，擅長把混沌轉成設計語言，睡前會翻閱五代史，醒來則把歷史裡的陰影變成視覺系彩蛋。',
    fact1: '喜歡在凌晨四點觀察城市天際線，認為霓虹是最誠實的歷史書。',
    fact2: '會把每一次失眠都當成一場小型宇宙實驗，並把結果藏進作品裡。',
    fact3: '相信所有真正的傳奇都要先經過一點點不合時宜的炫耀。',
    skillsTitle: '技能與癖好',
    momentTitle: '神秘時刻',
    momentText: '',
    showcaseEyebrow: '一場關於未來與回憶的演出',
    showcaseTitle: '這裡是一個由像素、光與假資料組成的星球',
    cardOneTitle: '霓虹都市',
    cardOneText: '這裡像是未來的遺囑，總在黑夜裡發出最耀眼的聲音。',
    cardTwoTitle: '數位神殿',
    cardTwoText: '每一條光線都像一場精心設計的秘密，好像在等待某個名字。',
    cardThreeTitle: '深夜工作台',
    cardThreeText: 'YD 經常在這裡把靈感按成一個個可被收藏的彈跳字樣。',
    contactTitle: '聯絡我',
    contactLocation: '座標：夜色與電流的交界',
    contactNote: '備註：若你也相信故事會自己發光，請隨時聯絡。'
  },
  en: {
    eyebrow: 'A new digital myth is unfolding',
    heroTitle: 'is a fictional icon who turns dreams and shadows into light',
    intro: 'I am your daddy',
    interest: 'Interest: studying the Five Dynasties history',
    motto: 'Tagline: I am your daddy',
    ctaPrimary: 'Contact me',
    ctaSecondary: 'See more',
    portraitLabel: 'Virtual business card',
    statusLabel: 'Status',
    statusValue: 'Cruising at night, chasing inspiration',
    locationLabel: 'Location',
    locationValue: 'The border between Tokyo, Shanghai, and the galaxy',
    aboutTitle: 'About YD',
    aboutText: 'YD is a fictional character with a hypersensitive relationship to light, turning chaos into design language and turning the shadows of history into visual Easter eggs.',
    fact1: 'Loves watching the skyline at 4 a.m., believing neon is the most honest history book.',
    fact2: 'Treats every insomnia episode as a tiny cosmic experiment and hides the results inside the work.',
    fact3: 'Believes every real legend needs a little untimely flamboyance.',
    skillsTitle: 'Skills & quirks',
    momentTitle: 'A mysterious moment',
    momentText: 'When the moon drifts just a little, YD whispers: “Every story deserves its own laser edge.”',
    showcaseEyebrow: 'A performance about the future and memory',
    showcaseTitle: 'This is a planet made of pixels, light, and fake data',
    cardOneTitle: 'Neon city',
    cardOneText: 'It feels like a futuristic will, glowing brightest in the dark.',
    cardTwoTitle: 'Digital shrine',
    cardTwoText: 'Every beam of light feels like a carefully hidden secret waiting for a name.',
    cardThreeTitle: 'Midnight desk',
    cardThreeText: 'YD often turns inspiration into bouncy little fragments here, ready to be collected.',
    contactTitle: 'Contact me',
    contactLocation: 'Coordinates: where night meets electric current',
    contactNote: 'Note: if you also believe stories can glow on their own, reach out anytime.'
  }
};

const langButtons = document.querySelectorAll('.lang-toggle');
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

function setLanguage(lang) {
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-Hant';
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.getAttribute('data-i18n');
    if (translations[lang][key]) {
      node.textContent = translations[lang][key];
    }
  });
  langButtons.forEach((button) => button.classList.toggle('active', button.dataset.lang === lang));
  localStorage.setItem('yd-lang', lang);
}

function setTheme(theme) {
  document.body.classList.toggle('light', theme === 'light');
  themeToggle.textContent = theme === 'light' ? '☾' : '☀︎';
  localStorage.setItem('yd-theme', theme);
}

langButtons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

themeToggle.addEventListener('click', () => {
  const nextTheme = document.body.classList.contains('light') ? 'dark' : 'light';
  setTheme(nextTheme);
});

const savedLang = localStorage.getItem('yd-lang') || 'zh';
const savedTheme = localStorage.getItem('yd-theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

setLanguage(savedLang);
setTheme(savedTheme);

if (window.gsap) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from('.hero-copy > *', { opacity: 0, y: 48, duration: 1, stagger: 0.16, ease: 'power3.out' });
  gsap.from('.hero-visual', { opacity: 0, scale: 0.92, duration: 1.1, delay: 0.15, ease: 'power3.out' });
  gsap.to('.orb', { x: 'random(-24, 24)', y: 'random(-20, 20)', duration: 7, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  gsap.utils.toArray('.reveal').forEach((el) => {
    gsap.fromTo(el, { opacity: 0, y: 30 }, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%' }
    });
  });
}

root.style.setProperty('--transition-time', '0.4s');
