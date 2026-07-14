/* ===== 텍스토피아 다국어(i18n) 엔진 =====
   - 언어 추가 = 이 파일의 I18N 객체에 새 언어 키 하나 추가 (예: ja, es). 페이지 수정 불필요.
   - 문구는 data-i18n="경로" (textContent), data-i18n-html (innerHTML),
     data-i18n-attr="attr:경로;attr2:경로2" (속성)로 연결.
   - JS에서 문구가 필요하면 window.txT('경로') 사용.
*/
window.I18N = window.I18N || {};

/* -------------------- 한국어 -------------------- */
window.I18N.ko = {
  _label: "한국어",
  common: {
    nav: { world: "세계관", book: "작품", news: "소식", about: "이야기", read: "무료 1화 읽기" },
    bottom: { world: "세계관", book: "작품", read: "무료 1화", quiz: "퀴즈" },
    drawer: {
      brand: "텍스토피아", home: "홈", read: "무료 1화 읽기", quiz: "나의 파트너 옷 찾기",
      world: "세계관 · 대륙 지도", book: "작품 소개", store: "스토어", news: "소식",
      about: "우리 이야기", theme: "화면 모드", terms: "이용약관", privacy: "개인정보처리방침",
      menuOpen: "메뉴 열기", close: "닫기", langLabel: "언어"
    },
    footer: {
      brandDesc: "옷이 살아 숨 쉬는 세계. 버려진 것들의 두 번째 이야기.",
      exploreH: "둘러보기", world: "세계관", read: "무료 1화", quiz: "파트너 옷 찾기", store: "스토어",
      policyH: "약관·정책", terms: "이용약관", privacy: "개인정보처리방침", faq: "자주 묻는 질문",
      biz: "시접출판사(Seam Press)는 오르션(Orsion)의 출판 브랜드입니다 · 상호 오르션 · 대표 권택준 · 사업자등록번호 609-35-66228<br>경기도 화성시 동탄구 동탄감배산로 143, 202동 19층 1901-50호 · 문의 neocomix@neocomix.com · 통신판매업 신고 준비 중",
      bottom: "ⓒ 2026 Orsion. 오늘 당신의 옷은, 행복한가요?"
    },
    news: {
      emailPh: "이메일 주소", subscribe: "구독",
      errFormat: "이메일 형식이 아니에요", already: "이미 함께하고 있어요",
      ok: "실이 이어졌어요. 좋은 소식이 있을 때만, 조심스럽게 찾아갈게요.",
      fail: "실이 잠시 끊겼어요. 잠시 후 다시 시도해 주세요.", done: "완료"
    }
  },
  index: {
    meta: {
      title: "텍스토피아 — 당신의 옷은, 살아있다",
      desc: "옷이 살아 숨 쉬는 세계 텍스토피아. 수선사 강이서의 힐링 판타지, 전 3권 완결. 무료 1화를 지금 읽어보세요."
    },
    hero: {
      act1: "당신의 옷은,", alive: "살아있다", act3: "실 한 가닥이, 세계를 열었다",
      scroll: "SCROLL", skip: "바로 입장 ↓",
      h1: "버려진 옷들의 세계,<br>텍스토피아",
      sub: "그곳에 떨어진 수선사 강이서.<br>바늘 하나로, 세상을 다시 깁기 시작했다.",
      cta: "무료 1화 읽기", mapHint: "🪡 궁금한 땅을 눌러보세요", hrMore: "세계관에서 더 알아보기 →"
    },
    region: { knit: "니트마운틴", denim: "데님캐니언", silk: "실크오션", leather: "레더정글", cotton: "코튼시티", grave: "누더기 묘지" },
    regionDesc: {
      cotton: "대륙의 심장. 무명 원단의 도시, 이서의 수선집 '한 땀'이 있는 곳.",
      knit: "실로 짜인 눈 덮인 봉우리. 운명의 물레방아가 도는 땅.",
      denim: "거칠지만 의리 있는 협곡. 인디고 호수와 데님 부족의 고향.",
      silk: "빛에 따라 색이 바뀌는 바다. 누에고치성이 떠 있는 곳.",
      leather: "질기고 무성한 남쪽 밀림. 무두질 늪을 건너는 자만이 통과한다.",
      grave: "버려진 옷들이 닿는 마지막 땅. 이야기가 시작된 곳."
    },
    books: {
      h2: "전 3권, 완결로 만나는 이야기", sub: "연재 기다림 없이, 처음부터 끝까지.",
      v1t: "수선되지<br>않는 운명", v1n: "1권", v1s: "낯선 세계, 첫 번째 바느질",
      v2t: "아이언 스티치의<br>그림자", v2n: "2권", v2s: "바늘 탑과의 전쟁",
      v3t: "마지막<br>한 땀", v3n: "3권", v3s: "세상에서 가장 큰 수선"
    },
    worldTeaser: { h2: "여기는 텍스토피아 — 옷이 살아 숨 쉬는 대륙", sub: "여섯 개의 땅, 여섯 가지 원단. 궁금한 곳을 눌러보세요.", cta: "대륙 탐험하기 →" },
    match: { tag: "TEXTOPIA MATCH", h2: "텍스토피아에서, 당신의 파트너 옷은?", sub: "여섯 가지 질문이 당신의 원단을 찾아드려요. 1분이면 충분해요.", cta: "운명의 옷 찾기" },
    quotesH: "책 속의 한 땀",
    quotes: [
      ["“옷도 알아요. 누가 자신을 아껴주는지, 누가 자신을 도구로만 보는지.”", "1부에서"],
      ["“괜찮아. 찢어진 곳은 내가 다시 이어줄게. 이건 흉터가 아니라, 숨통을 틔워주는 거야.”", "1부에서"],
      ["“환자를 앞에 두고 도망치는 가게가 어딨어.”", "1부에서"],
      ["“강함은 부드러움을 이길 수 없어요. 특히 패션에서는.”", "3부에서"],
      ["“네 잘못이 아니야. 넌 그저, 조금 서툰 재봉사를 만났을 뿐이야.”", "1부에서"],
      ["비단은 찢어지면 끝이지만, 무명은 기워 입을수록 더 단단해진다.", "3부에서"],
      ["“얼룩은 지워지지 않아요. 하지만 그 얼룩이 바로 우리가 살아있다는 증거죠.”", "3부에서"],
      ["“오늘 당신의 옷은, 행복한가요?”", "마지막 장에서"]
    ],
    story: { h2: "둘이서 출판사를 차렸습니다. AI랑 셋이서요.", sub: "코드를 짜는 사람과 옷을 짓는 사람이 함께 이야기를 짓는 작은 출판사, 시접출판사.", link: "우리 이야기 →" },
    news: { h2: "이야기의 소식을 실어 보낼게요", sub: "출시 소식과 제작 비하인드, 한 달에 몇 번만." }
  }
};

/* -------------------- English -------------------- */
window.I18N.en = {
  _label: "English",
  common: {
    nav: { world: "World", book: "The Books", news: "News", about: "About", read: "Read Chapter 1 — Free" },
    bottom: { world: "World", book: "Books", read: "Free Ch.1", quiz: "Quiz" },
    drawer: {
      brand: "Textopia", home: "Home", read: "Read Chapter 1 — Free", quiz: "Find your partner garment",
      world: "World · Continent Map", book: "About the Books", store: "Store", news: "News",
      about: "Our Story", theme: "Appearance", terms: "Terms of Use", privacy: "Privacy Policy",
      menuOpen: "Open menu", close: "Close", langLabel: "Language"
    },
    footer: {
      brandDesc: "A world where clothes breathe. A second story for the cast-off.",
      exploreH: "Explore", world: "World", read: "Free Chapter 1", quiz: "Find your garment", store: "Store",
      policyH: "Terms & Policies", terms: "Terms of Use", privacy: "Privacy Policy", faq: "FAQ",
      biz: "Seam Press is a publishing brand of Orsion · Orsion · CEO Kwon Taek-jun · Business Reg. No. 609-35-66228<br>#1901-50, 143 Dongtan-gambaesan-ro, Dongtan, Hwaseong, Gyeonggi, Korea · Contact neocomix@neocomix.com · e-commerce registration pending",
      bottom: "© 2026 Orsion. Are your clothes happy today?"
    },
    news: {
      emailPh: "Email address", subscribe: "Subscribe",
      errFormat: "That doesn't look like an email", already: "You're already with us",
      ok: "The thread is tied. We'll only reach out, gently, when there's good news.",
      fail: "The thread slipped for a moment. Please try again shortly.", done: "Done"
    }
  },
  index: {
    meta: {
      title: "Textopia — Your Clothes Are Alive",
      desc: "Textopia — a cozy healing fantasy where clothes live and breathe. Follow Yiseo, a mender who stitches a broken world whole. Read Chapter 1 free."
    },
    hero: {
      act1: "Your clothes are…", alive: "alive.", act3: "A single thread opened a world.",
      scroll: "SCROLL", skip: "Skip intro ↓",
      h1: "A world of cast-off clothes:<br>Textopia",
      sub: "Yiseo, a mender, falls into this world —<br>and with a single needle, begins to stitch it whole again.",
      cta: "Read Chapter 1 — Free", mapHint: "🪡 Tap a land to explore", hrMore: "Learn more in World →"
    },
    region: { knit: "Knit Mountain", denim: "Denim Canyon", silk: "Silk Ocean", leather: "Leather Jungle", cotton: "Cotton City", grave: "Ragged Grave" },
    regionDesc: {
      cotton: "The heart of the continent — a city of plain cotton, home to Yiseo's little shop, 'One Stitch.'",
      knit: "Snow-capped peaks knit from yarn, where the Wheel of Fate turns.",
      denim: "A rugged but loyal canyon — home to Indigo Lake and the Denim tribe.",
      silk: "A sea that shifts color with the light, where the Cocoon Castle floats.",
      leather: "A tough, overgrown southern jungle — only those who cross the Tanning Marsh get through.",
      grave: "The last land where discarded clothes come to rest — and where the story began."
    },
    books: {
      h2: "One complete story, in three volumes", sub: "No waiting on weekly updates — beginning to end.",
      v1t: "A Fate Beyond<br>Mending", v1n: "Book 1", v1s: "A strange world, the first stitch",
      v2t: "Shadow of the<br>Iron Stitch", v2n: "Book 2", v2s: "War with the Needle Tower",
      v3t: "The Last<br>Stitch", v3n: "Book 3", v3s: "The greatest mending of all"
    },
    worldTeaser: { h2: "This is Textopia — a continent where clothes breathe", sub: "Six lands, six fabrics. Tap wherever you're curious.", cta: "Explore the continent →" },
    match: { tag: "TEXTOPIA MATCH", h2: "In Textopia, which garment is your partner?", sub: "Six questions to find your fabric. One minute is all it takes.", cta: "Find your fated garment" },
    quotesH: "A stitch from the pages",
    quotes: [
      ["“Clothes know, too — who cherishes them, and who sees them as nothing but tools.”", "from Book 1"],
      ["“It's okay. I'll mend what's torn. This isn't a scar — it's room to breathe again.”", "from Book 1"],
      ["“What kind of shop turns its back on a patient in need?”", "from Book 1"],
      ["“Strength can never win against softness — least of all in fashion.”", "from Book 3"],
      ["“It wasn't your fault. You just happened to meet a slightly clumsy tailor.”", "from Book 1"],
      ["Silk is finished the moment it tears; cotton only grows stronger the more it's mended.", "from Book 3"],
      ["“The stain won't come out. But that stain is the very proof that we were alive.”", "from Book 3"],
      ["“Are your clothes happy today?”", "from the final chapter"]
    ],
    story: { h2: "Two of us started a publishing house. Three, counting the AI.", sub: "A coder and a clothesmaker, telling stories together — a tiny press called Seam.", link: "Our story →" },
    news: { h2: "We'll send word when there's news", sub: "Launch news and behind-the-scenes — just a few times a month." }
  }
};


/* -------------------- 페이지별 사전 (자동 병합) -------------------- */
Object.assign(window.I18N.ko, {"world": {"meta": {"title": "세계관 — 텍스토피아", "desc": "옷이 살아 숨 쉬는 대륙 텍스토피아. 여섯 개의 땅과 그곳의 주민들을 만나보세요."}, "hero": {"h1": "옷이 살아 숨 쉬는 대륙", "sub": "궁금한 땅을 눌러보세요. 여섯 개의 원단, 여섯 개의 이야기.", "imgAlt": "텍스토피아 대륙 파노라마"}, "map": {"imgAlt": "텍스토피아 대륙 지도", "svgAria": "지역 선택", "hint": "🪡 궁금한 땅을 눌러보세요"}, "panel": {"defaultName": "텍스토피아 대륙", "defaultTag": "한 땀 한 땀 기워진 세계. 지도에서 궁금한 땅을 눌러보세요.", "cta": "이 세계를 1화로 만나기 →"}, "regions": {"cotton": {"name": "코튼시티", "tag": "대륙의 심장. 무명 원단의 도시, 그리고 이서의 수선집 '한 땀'이 있는 곳.", "chips": ["무명·면직물", "바늘 탑", "수선집 한 땀"], "meta": "<b>주민</b> 무명 옷들, 시장 상인들<br><b>명소</b> 바늘 탑, 중앙 시장, 골목 수선집<br><b>한 줄</b> 평범한 천이 가장 오래 견딘다."}, "knit": {"name": "니트마운틴", "tag": "실로 짜인 눈 덮인 봉우리. 풀린 올을 따라가면 운명의 물레방아에 닿는다.", "chips": ["니트·울", "운명의 물레방아", "털실 고개"], "meta": "<b>주민</b> 스웨터 산양들, 뜨개 노인들<br><b>명소</b> 운명의 물레방아, 코바늘 빙벽<br><b>한 줄</b> 풀린 것은 다시 짤 수 있다."}, "denim": {"name": "데님캐니언", "tag": "거칠지만 의리 있는 협곡. 청바지 부족이 인디고 호수를 지킨다.", "chips": ["데님", "인디고 호수", "리벳 바위"], "meta": "<b>주민</b> 데님 부족, 늑대 재킷들<br><b>명소</b> 인디고 호수, 워싱 폭포<br><b>한 줄</b> 낡을수록 멋이 드는 땅."}, "silk": {"name": "실크오션", "tag": "빛에 따라 색이 바뀌는 바다. 그 위에 누에고치성이 떠 있다.", "chips": ["실크·시폰", "누에고치성", "진주 단추 섬"], "meta": "<b>주민</b> 드레스 가문, 나비 스카프들<br><b>명소</b> 누에고치성, 광택의 해협<br><b>한 줄</b> 아름다움은 부드러움에서 온다."}, "leather": {"name": "레더정글", "tag": "질기고 무성한 남쪽 밀림. 무두질 늪을 건너는 자만이 통과한다.", "chips": ["가죽", "무두질 늪", "버클 덩굴"], "meta": "<b>주민</b> 가죽 재킷 맹수들, 부츠 사냥꾼<br><b>명소</b> 무두질 늪, 스터드 절벽<br><b>한 줄</b> 시간이 만드는 가장 단단한 갑옷."}, "grave": {"name": "누더기 묘지", "tag": "버려진 옷들이 닿는 마지막 땅. 이 이야기가 시작된 곳이자, 끝나는 곳.", "chips": ["넝마·누더기", "잊힌 옷들"], "meta": "<b>주민</b> 이름을 잃은 옷들<br><b>명소</b> 단추 비석 언덕<br><b>한 줄</b> 버려졌다고, 끝난 것은 아니다."}}, "dict": {"h2": "가볍게 읽는 용어 사전", "sub": "스포일러 없이, 세계를 이해하는 열쇠만.", "grain": {"term": "결(Grain)", "def": "모든 옷감이 지닌 고유한 흐름. 결을 읽을 수 있는 사람은 옷의 상처와 기억을 본다. 주인공 강이서가 이 세계에서 눈뜬 능력."}, "mender": {"term": "수선사", "def": "옷의 몸이 아니라 마음까지 깁는 사람. 텍스토피아에서 가장 오래된, 그러나 잊혀가던 직업."}, "ironStitch": {"term": "아이언 스티치", "def": "\"완벽한 옷만이 가치 있다\"고 믿는 세력. 규격 밖의 옷들을 '불량'으로 낙인찍는다."}, "needleTower": {"term": "바늘 탑", "def": "코튼시티 중심에 솟은 탑. 대륙의 모든 실이 이곳으로 이어져 있다고 전해진다."}, "wheelOfFate": {"term": "운명의 물레방아", "def": "니트마운틴 깊은 곳에서 돌아가는 거대한 물레. 세계의 실을 잣는 곳."}, "raggedGrave": {"term": "누더기 묘지", "def": "버려진 옷들이 마지막으로 닿는 땅. 그러나 끝이 아니라, 어쩌면 시작."}}, "chars": {"h2": "이 세계의 주민들", "sub": "카드를 뒤집어 보세요. 카드를 뒤집으면 이야기가 이어져요.", "flipAria": "카드 뒤집기", "list": [{"name": "강이서", "role": "수선사", "desc": "서울의 리폼 가게 사장. 실 한 가닥에 이끌려 이 세계로. 옷의 '결'을 읽는다."}, {"name": "카시안", "role": "가죽 기사", "desc": "이서의 곁을 지키는 전직 기사. 가죽 수트 '벨라'와 함께 싸운다."}, {"name": "블루", "role": "데님 늑대", "desc": "이서와 함께 차원을 넘나드는 든든한 데님 동료."}, {"name": "릴리", "role": "시폰 원피스", "desc": "찢어진 상처를 안고 수선집을 찾아온 첫 손님."}, {"name": "바르크", "role": "데님 재킷", "desc": "데님캐니언의 늑대. 무뚝뚝하지만 의리로 기워진 사이."}, {"name": "단추", "role": "단추 요정", "desc": "이서의 첫 친구이자 안내자. 작지만, 가장 단단한 존재."}, {"name": "노아", "role": "견습 재봉사", "desc": "이서의 첫 제자. 서툰 바느질, 진심의 한 땀."}, {"name": "사틴", "role": "드레스 가문", "desc": "실크오션의 귀부인. 광택 아래 감춰진 이야기."}, {"name": "바론", "role": "???", "desc": "바늘 탑의 그림자. 완벽을 말하는 자."}, {"name": "패치 노인", "role": "넝마 현자", "desc": "누더기 묘지의 문지기. 모든 버려진 것들의 이름을 기억한다."}]}}, "book": {"meta": {"title": "작품 소개 — 텍스토피아", "desc": "힐링 판타지 '텍스토피아' 전 3권. 시놉시스, 구매처, 자주 묻는 질문."}, "hero": {"badge": "힐링 판타지 · 전 3권 완결", "title": "텍스토피아", "p1": "서울 골목의 작은 리폼 가게. 재개발 통지서를 받아 든 밤, 수선사 강이서는 실 한 가닥에 이끌려 <b>옷이 살아 숨 쉬는 세계, 텍스토피아</b>에 떨어진다.", "p2": "찢어진 원피스는 상처를 말하고, 낡은 재킷은 주인을 그리워한다. \"완벽한 옷\"만을 강요하는 아이언 스티치의 그림자가 대륙을 덮어갈 때 — 이서는 바늘 하나로, 옷과 사람의 마음을 함께 깁기 시작한다. 버려진 것들에게 두 번째 이름을 지어주는, 다정한 모험.", "buyBtn": "전자책 구매하기"}, "vols": {"h2": "전 3권 구성", "v1": {"title": "수선되지<br>않는 운명", "h3": "1권 (1~2부)", "p": "낯선 세계에 떨어진 이서, 수선집 '한 땀'의 문을 열다. 첫 손님들, 첫 친구들, 그리고 다가오는 그림자."}, "v2": {"title": "아이언 스티치의<br>그림자", "h3": "2권 (3~4부)", "p": "대륙을 조여 오는 '완벽'의 규격. 여섯 땅의 친구들과 함께, 이서는 바늘 탑의 비밀에 다가선다."}, "v3": {"title": "마지막<br>한 땀", "h3": "3권 (5부)", "p": "세상에서 가장 큰 수선이 시작된다. 버려진 모든 것들의 이름을 걸고, 마지막 한 땀."}}, "buy": {"h2": "구매처", "lead": "전자책 출간 준비 중이에요. 오픈 시 뉴스레터로 가장 먼저 알려드릴게요.", "selfStore": "자체 스토어", "selfStoreDesc": "DRM-free EPUB · 가장 저렴 · 작가에게 가장 큰 응원", "storeBtn": "스토어 가기", "yesKyobo": "예스24 · 교보문고", "yesKyoboDesc": "익숙한 서점 앱에서. 오픈 준비 중.", "notifyBtn": "오픈 알림 받기", "ridi": "리디", "ridiDesc": "리디 뷰어로 편하게. 오픈 준비 중.", "alert": "출간 오픈 시 연결됩니다. 뉴스레터를 구독해 주세요!"}, "about": {"h2": "둘이서 출판사를 차렸습니다. AI랑 셋이서요.", "p1": "코드를 짜던 사람(태하)과 옷을 짓던 사람(여름)이 만났습니다. 이야기는 두 사람이 함께 짓습니다 — 한 사람은 글의 뼈대와 시스템을 세우고, 한 사람은 원단의 감각과 그림으로 숨을 불어넣어요. 부족한 손은 AI가 거들죠. 그래서 우리는 작지만, 느리지 않습니다.", "p2": "'시접'은 옷을 완성하기 위해 남겨두는 여유분입니다. 버려지는 천에도, 버려지는 이야기에도 시접이 있다고 믿어서 — 출판사 이름을 그렇게 지었습니다.", "imgAlt": "시접출판사 아틀리에"}, "news": {"h2": "소식", "item1": {"h3": "텍스토피아 전자책, 2026년 여름 출간 예정", "p": "전 3권 동시 완결 출간을 준비하고 있어요. 제작 비하인드는 인스타그램과 뉴스레터에서."}}, "faq": {"h2": "자주 묻는 질문", "q1": "어떤 독자에게 맞는 책인가요?", "a1": "지친 하루 끝에 다정한 세계로 도망치고 싶은 분들께. 잔혹한 전개 없이, 회복과 연결의 이야기가 이어집니다.", "q2": "종이책도 나오나요?", "a2": "전자책을 먼저 출간하고, 반응에 따라 종이책(텀블벅 펀딩)을 준비할 계획이에요.", "q3": "자체 스토어 EPUB은 어떻게 읽나요?", "a3": "구매 후 받은 EPUB 파일을 리디북스 앱, Apple Books, Google Play 북스 등 EPUB 뷰어에서 열면 됩니다. 파일에는 구매자 정보 워터마크가 들어가요.", "q4": "해외 출간 계획이 있나요?", "a4": "일본어·영어 번역을 준비 중입니다. 소식은 뉴스레터로 전해드릴게요."}}, "store": {"meta": {"title": "스토어 — 텍스토피아", "desc": "텍스토피아 전 3권 세트와 낱권을 DRM-free EPUB으로. 구매 즉시 다운로드, 어느 뷰어에서든."}, "h1": "스토어", "sub": "DRM-free EPUB. 구매 즉시 다운로드, 어느 뷰어에서든.", "demoNote": "🧵 지금은 <b>데모 스토어</b>예요. 실제 결제는 이루어지지 않아요 — 정식 오픈 전 미리보기입니다.", "popular": "가장 인기", "set": {"cover": "전 3권<br>세트", "title": "텍스토피아 전 3권 세트", "desc": "완결까지 한 번에. 낱권 대비 25% 할인 + 작가의 말 스페셜 포함.", "priceLabel": "세트가", "buy": "세트 구매하기"}, "vol1": {"cover": "수선되지<br>않는 운명", "name": "1권 (낱권)", "desc": "이야기의 시작. 낯선 세계와 첫 바느질.", "buy": "1권 구매하기"}, "singleLabel": "낱권가", "vol23": {"cover": "이어지는<br>이야기", "name": "2·3권 (낱권)", "desc": "각 4,500원. 1권을 먼저 만나보세요.", "priceEach": "각 4,500원", "buy": "구매하기"}, "guide": {"h2": "구매 안내", "include": "포함 사항", "includeBody": "EPUB 파일(구매자 워터마크 포함), 작가의 말, 무료 업데이트(오탈자 수정판). 세트 구매 시 스페셜 부록.", "download": "다운로드 방법", "downloadBody": "결제 완료 후 이메일로 다운로드 링크가 발송됩니다. 링크는 24시간 내 3회 사용 가능해요. 만료 시 재발급을 요청할 수 있어요.", "refund": "환불 규정", "refundBody": "디지털 상품 특성상 다운로드 이전에는 전액 환불, 다운로드 이후에는 환불이 어려워요. 무료 1화로 충분히 맛보고 결정해 주세요."}}, "quiz": {"meta": {"title": "나의 파트너 옷 찾기 — 텍스토피아", "desc": "텍스토피아 세계에서 당신과 함께할 운명의 옷은? 1분 테스트."}, "questions": [{"q": "지친 하루의 끝, 집에 돌아온 당신이 가장 먼저 하는 일은?", "options": ["포근한 이불 속으로 직행", "오늘 있었던 일을 누군가에게 조곤조곤 얘기", "내일 입을 옷을 미리 정해두기", "갑자기 야식 먹으러 밖으로 출발"]}, {"q": "친구가 울면서 전화를 걸어왔다. 당신의 첫 마디는?", "options": ["괜찮아, 천천히 말해봐.", "어디야? 내가 갈게.", "일단 뭐라도 먹었어?", "상황부터 차분히 정리해 보자."]}, {"q": "옷장을 열었을 때, 당신 손이 가장 자주 가는 옷은?", "options": ["10년을 입어도 질리지 않는 그 옷", "오늘 기분을 살려주는 화려한 한 벌", "몸에 착 붙는 익숙하고 편한 옷", "약간의 각이 살아 있는 단단한 옷"]}, {"q": "낯선 도시로 여행을 왔다. 당신의 스타일은?", "options": ["계획표대로 착착 — 다 돌아본다", "골목에서 우연히 만난 가게에 세 시간", "현지인만 아는 곳으로 무작정", "가장 전망 좋은 카페에서 우아하게"]}, {"q": "누군가 당신을 한 단어로 표현한다면, 가장 기쁠 말은?", "options": ["듬직하다", "다정하다", "감각 있다", "강단 있다"]}, {"q": "텍스토피아에 떨어진 당신, 제일 먼저 가보고 싶은 곳은?", "options": ["실이 노래하는 니트마운틴", "빛으로 반짝이는 실크오션", "거칠고 자유로운 데님캐니언", "오래된 골목의 수선집 한 땀"]}], "results": {"denim": {"name": "데님 재킷 · 블루", "sub": "DENIM — 의리의 파트너", "desc": "낡을수록 멋이 드는 사람. 당신은 한번 곁을 준 사람을 끝까지 지키는 타입이에요. 무뚝뚝해 보여도, 위기의 순간 가장 먼저 달려오는 건 언제나 당신이죠.", "mate": "데님캐니언의 늑대, 블루", "spot": "데님캐니언 · 인디고 호수"}, "chiffon": {"name": "시폰 원피스 · 릴리", "sub": "CHIFFON — 공감의 파트너", "desc": "바람에 흔들리는 대신, 바람의 이야기를 들어주는 사람. 당신의 부드러움은 약함이 아니라 남들이 못 가진 감각이에요.", "mate": "수선집의 첫 손님, 릴리의 원피스", "spot": "코튼시티 · 골목 수선집"}, "knit": {"name": "니트 스웨터", "sub": "KNIT — 온기의 파트너", "desc": "곁에 있으면 겨울도 견딜 만해지는 사람. 당신은 화려하게 빛나기보다, 오래 따뜻하게 남는 쪽을 택하죠. 풀린 것은 다시 짜면 된다는 걸 아는 사람.", "mate": "운명의 물레방아의 털실", "spot": "니트마운틴 · 물레방아"}, "leather": {"name": "가죽 재킷", "sub": "LEATHER — 단단함의 파트너", "desc": "시간이 지날수록 더 멋있어지는 사람. 상처도 흉터도 당신에겐 무늬가 돼요. 세상이 뭐라 해도 자기 결대로 사는 강단이 있죠.", "mate": "레더정글의 방랑 재킷", "spot": "레더정글 · 스터드 절벽"}, "silk": {"name": "실크 스카프", "sub": "SILK — 감각의 파트너", "desc": "빛에 따라 다른 색을 내는 사람. 당신은 아름다움이 사치가 아니라 삶의 태도라는 걸 알아요. 부드러움이 강함을 이긴다는 것도.", "mate": "누에고치성의 스카프", "spot": "실크오션 · 광택의 해협"}, "linen": {"name": "무명 앞치마 · 이서의 것", "sub": "LINEN — 꾸준함의 파트너", "desc": "평범한 천이 가장 오래 견딥니다. 당신은 매일의 한 땀을 쌓아 결국 세상을 깁는 사람. 주인공 이서가 고른 천이 바로 이거예요.", "mate": "수선사 이서의 작업 앞치마", "spot": "코튼시티 · 수선집 한 땀"}}, "ui": {"mateLabel": "운명의 파트너", "spotLabel": "어울리는 땅", "share": "결과 공유하기", "readCta": "이 세계를 1화로 만나기", "retry": "다시 해보기", "shareTitle": "나의 파트너 옷 찾기", "shareLine": "나의 텍스토피아 파트너 옷은 [{name}] — {sub}", "shareHook": "너의 옷도 찾아봐: https://textopia.vercel.app/quiz.html", "copied": "결과가 복사됐어요! 친구에게 붙여넣어 보세요."}}, "404": {"meta": {"title": "페이지를 찾을 수 없어요 — 텍스토피아", "desc": "찾으시는 실은 여기 없지만, 이야기는 여전히 이어지고 있어요."}, "h1": "이 페이지는 올이 풀렸나 봐요", "msg": "찾으시는 실은 여기 없지만, 이야기는 여전히 이어지고 있어요.", "home": "홈으로", "cta": "무료 1화 읽기", "imgAlt": "뜯어진 페이지를 꿰매는 이서"}, "read": {"meta": {"title": "무료 1화 — 텍스토피아", "desc": "텍스토피아 1부 1장 '먼지 쌓인 기억, 말을 거는 옷들'을 무료로 읽어보세요."}, "nav": {"exit": "나가기", "pos": "텍스토피아 · 1부 1장"}, "settings": {"open": "보기 설정", "size": "글자 크기", "sizeS": "작게", "sizeM": "기본", "sizeL": "크게", "sizeXL": "더 크게", "bg": "배경", "light": "밝게", "sepia": "세피아", "dark": "어둡게"}, "end": {"title": "첫 번째 매듭을 지었습니다", "teaserLabel": "2장 미리보기", "next": "다음 이야기 계속 읽기", "world": "세계관 더 둘러보기"}}, "terms": {"meta": {"title": "이용약관 — 텍스토피아", "desc": "오르션(브랜드: 시접출판사)이 운영하는 텍스토피아의 이용약관 — 콘텐츠 열람과 전자책 판매 서비스의 이용 조건을 안내합니다."}, "h1": "이용약관", "updated": "시행일: 2026년 7월 12일 · 오르션(브랜드: 시접출판사)", "s1": {"h": "제1조 (목적)", "body": "이 약관은 오르션(이하 \"회사\")이 운영하는 텍스토피아 웹사이트(이하 \"사이트\")에서 제공하는 콘텐츠 열람 및 전자책 판매 서비스의 이용 조건을 정합니다."}, "s2": {"h": "제2조 (서비스 내용)", "body": "① 소설 「텍스토피아」의 무료 1화 열람, 세계관 정보 제공, 뉴스레터 발송<br>② 전자책(EPUB) 판매 및 다운로드 제공 — 정식 오픈 전까지 결제 기능은 데모로 표시되며 실제 결제가 이루어지지 않습니다."}, "s3": {"h": "제3조 (저작권)", "body": "사이트의 모든 콘텐츠(소설 본문, 세계관, 일러스트, 디자인)의 저작권은 회사에 있습니다. 구매한 전자책은 개인 소장·열람 목적으로만 이용할 수 있으며, 무단 복제·배포·공유 시 저작권법에 따라 책임을 질 수 있습니다. 전자책 파일에는 구매자 식별 워터마크가 포함됩니다."}, "s4": {"h": "제4조 (구매·다운로드·환불)", "body": "① 결제 완료 후 입력한 이메일로 다운로드 링크가 발송됩니다(24시간 내 3회 유효, 만료 시 재발급 가능).<br>② 디지털 콘텐츠 특성상 <b>다운로드 이전에는 전액 환불</b>이 가능하며, 다운로드 이후에는 콘텐츠 하자가 있는 경우를 제외하고 환불이 어렵습니다(전자상거래법 제17조 제2항).<br>③ 파일 하자·누락 시 무상 재제공 또는 전액 환불합니다."}, "s5": {"h": "제5조 (뉴스레터)", "body": "구독은 무료이며 언제든지 해지할 수 있습니다. 회사는 광고성 정보를 보낼 경우 제목에 이를 표시합니다."}, "s6": {"h": "제6조 (면책)", "body": "회사는 천재지변, 클라우드 서비스 장애 등 불가항력으로 인한 서비스 중단에 대해 책임을 지지 않습니다. 다만 유료 구매자의 다운로드 권리는 서비스 복구 후 보장됩니다."}, "s7": {"h": "제7조 (분쟁 해결)", "body": "서비스 이용과 관련한 분쟁은 회사와 이용자가 성실히 협의하여 해결하며, 협의가 어려운 경우 민사소송법상 관할 법원에 제기할 수 있습니다. 문의: <a class=\"stitch-link\" href=\"mailto:neocomix@neocomix.com\">neocomix@neocomix.com</a>"}}, "privacy": {"meta": {"title": "개인정보처리방침 — 텍스토피아", "desc": "오르션(브랜드: 시접출판사)의 텍스토피아 개인정보처리방침. 수집 항목, 이용 목적, 보유 기간, 처리 위탁, 이용자의 권리를 안내합니다."}, "h1": "개인정보처리방침", "updated": "시행일: 2026년 7월 12일 · 오르션(브랜드: 시접출판사)", "s1": {"h": "1. 수집하는 개인정보와 목적", "body": "오르션(이하 \"회사\")은 textopia 웹사이트에서 아래 정보만을 수집합니다.", "list": "① <b>뉴스레터 구독</b>: 이메일 주소 — 출간 소식·제작 비하인드 발송 목적<br>② <b>전자책 구매(오픈 예정)</b>: 이메일 주소, 결제 기록 — 상품 제공(다운로드 링크 발송)·환불 처리 목적<br>③ <b>서비스 개선</b>: 방문·클릭 등 비식별 이용 기록(쿠키 미사용, 개인 식별 불가)"}, "s2": {"h": "2. 보유 및 이용 기간", "body": "뉴스레터 이메일은 <b>구독 해지 시 즉시 파기</b>합니다. 구매 기록은 전자상거래법에 따라 5년간 보관 후 파기합니다."}, "s3": {"h": "3. 처리 위탁 및 보관 장소", "body": "수집된 정보는 회사가 이용하는 클라우드 데이터베이스(Supabase Inc., 서울 리전)에 암호화 연결로 저장됩니다. 회사는 이 외의 제3자에게 개인정보를 제공하거나 판매하지 않습니다."}, "s4": {"h": "4. 이용자의 권리", "body": "이용자는 언제든지 자신의 개인정보에 대한 열람·정정·삭제·처리정지를 요구할 수 있습니다. 뉴스레터는 메일 하단의 수신거부 링크 또는 아래 연락처로 해지할 수 있으며, 지체 없이 처리됩니다."}, "s5": {"h": "5. 개인정보 보호책임자", "body": "성명: 권택준 (대표) · 이메일: <a class=\"stitch-link\" href=\"mailto:neocomix@neocomix.com\">neocomix@neocomix.com</a><br>개인정보 침해 관련 상담: 개인정보침해신고센터(privacy.kisa.or.kr, 국번 없이 118)"}, "s6": {"h": "6. 고지 의무", "body": "본 방침이 변경되는 경우 시행 7일 전 웹사이트 공지사항을 통해 알립니다."}, "footer": {"body": "상호 오르션 · 대표 권택준 · 사업자등록번호 609-35-66228 · 문의 neocomix@neocomix.com<br><a class=\"stitch-link\" href=\"terms.html\">이용약관</a> · <a class=\"stitch-link\" href=\"index.html\">홈으로</a><br>ⓒ 2026 Orsion."}}, "checkout": {"meta": {"title": "주문·결제 — 텍스토피아", "desc": "텍스토피아 전 3권 세트를 DRM-free EPUB으로. 이메일만 입력하면 다운로드 링크를 보내드려요. (데모 결제)"}, "h1": "주문서", "sub": "EPUB 다운로드 링크를 받을 이메일만 있으면 돼요.", "demoNote": "🧵 데모 결제예요. 카드 정보는 입력받지 않고, 실제 결제도 일어나지 않아요.", "steps": {"order": "주문", "pay": "결제", "done": "완료"}, "price": {"disc": "할인", "total": "결제 금액"}, "field": {"emailLabel": "이메일 (다운로드 링크 수신)", "emailPh": "you@example.com", "emailHint": "이메일 형식을 확인해 주세요"}, "agree": {"item1": "디지털 상품 특성(다운로드 후 환불 불가)을 확인했어요. (필수)", "item2": "출간 소식 뉴스레터도 받아볼래요. (선택)"}, "pay": "결제하기 (데모)", "msg": {"paying": "실을 꿰는 중…"}, "items": {"set": ["텍스토피아 전 3권 세트 (EPUB)", "9,900원", "-3,600원", "9,900원"], "vol1": ["텍스토피아 1권 — 수선되지 않는 운명 (EPUB)", "4,500원", "0원", "4,500원"], "vol2": ["텍스토피아 2권 — 아이언 스티치의 그림자 (EPUB)", "4,500원", "0원", "4,500원"]}}, "success": {"meta": {"title": "주문 완료 — 텍스토피아", "desc": "주문이 완료되었어요. 입력하신 이메일로 다운로드 링크를 보내드릴게요. (데모 주문 확인 페이지)"}, "steps": {"order": "주문", "pay": "결제", "done": "완료"}, "h1": "매듭이 지어졌어요", "msg": "입력하신 이메일로 다운로드 링크를 보내드릴게요.<br>(데모라서 실제 메일은 발송되지 않아요.)", "item": {"set": "텍스토피아 전 3권 세트 (EPUB)", "vol1": "텍스토피아 1권 (EPUB)", "vol2": "텍스토피아 2권 (EPUB)"}, "itemNote": "다운로드 링크 유효기간: 발송 후 24시간 / 3회<br>EPUB 뷰어(리디, Apple Books, Play 북스 등)에서 열 수 있어요.", "reread": "기다리는 동안 1화 다시 읽기", "home": "홈으로 돌아가기"}});
Object.assign(window.I18N.en, {"world": {"meta": {"title": "The World — Textopia", "desc": "Textopia, a continent where clothes breathe and live. Meet its six lands and the souls who call them home."}, "hero": {"h1": "A Continent Where Clothes Come Alive", "sub": "Tap a land that calls to you. Six fabrics, six stories.", "imgAlt": "Panorama of the Textopia continent"}, "map": {"imgAlt": "Map of the Textopia continent", "svgAria": "Choose a region", "hint": "🪡 Tap a land that calls to you"}, "panel": {"defaultName": "The Continent of Textopia", "defaultTag": "A world sewn one careful stitch at a time. Tap a land on the map to begin.", "cta": "Meet this world in Chapter 1 →"}, "regions": {"cotton": {"name": "Cotton City", "tag": "The heart of the continent. A city of humble cotton — and home to Yiseo's little mending shop, One Stitch.", "chips": ["Cotton & Muslin", "Needle Tower", "One Stitch shop"], "meta": "<b>Residents</b> Cotton folk, market traders<br><b>Landmarks</b> Needle Tower, the Central Market, back-alley mending shops<br><b>In a line</b> Plain cloth endures the longest."}, "knit": {"name": "Knit Mountain", "tag": "Snow-capped peaks knit from yarn. Follow a loose thread and you'll reach the Wheel of Fate.", "chips": ["Knit & Wool", "Wheel of Fate", "Yarn Pass"], "meta": "<b>Residents</b> Sweater goats, knitting elders<br><b>Landmarks</b> Wheel of Fate, the Crochet Ice Wall<br><b>In a line</b> What unravels can always be knit again."}, "denim": {"name": "Denim Canyon", "tag": "A rugged canyon with a loyal heart. The Denim tribe guards Indigo Lake.", "chips": ["Denim", "Indigo Lake", "Rivet Rocks"], "meta": "<b>Residents</b> The Denim tribe, wolf jackets<br><b>Landmarks</b> Indigo Lake, Washout Falls<br><b>In a line</b> A land that only grows more beautiful with wear."}, "silk": {"name": "Silk Ocean", "tag": "A sea that shifts color with the light. Above it floats Cocoon Castle.", "chips": ["Silk & Chiffon", "Cocoon Castle", "Pearl Button Isle"], "meta": "<b>Residents</b> The Gown houses, butterfly scarves<br><b>Landmarks</b> Cocoon Castle, the Shimmer Strait<br><b>In a line</b> Beauty is born of softness."}, "leather": {"name": "Leather Jungle", "tag": "A tough, tangled jungle in the south. Only those who cross the Tanning Swamp make it through.", "chips": ["Leather", "Tanning Swamp", "Buckle Vines"], "meta": "<b>Residents</b> Leather-jacket beasts, boot hunters<br><b>Landmarks</b> Tanning Swamp, the Stud Cliffs<br><b>In a line</b> The hardest armor is the one time makes."}, "grave": {"name": "Ragged Grave", "tag": "The final land where discarded clothes come to rest. Where this story begins — and ends.", "chips": ["Rags & Tatters", "Forgotten clothes"], "meta": "<b>Residents</b> Clothes that have lost their names<br><b>Landmarks</b> the Hill of Button Graves<br><b>In a line</b> Cast aside is not the same as finished."}}, "dict": {"h2": "A Light Little Glossary", "sub": "No spoilers — just the keys to understanding this world.", "grain": {"term": "Grain", "def": "The unique flow every fabric carries. Those who can read the grain see a garment's wounds and memories — the gift Yiseo awakens to in this world."}, "mender": {"term": "Mender", "def": "One who mends not just a garment's body, but its heart. The oldest craft in Textopia — and one the world had nearly forgotten."}, "ironStitch": {"term": "Iron Stitch", "def": "A faction that believes only flawless clothing has worth, branding anything outside their standard as 'defective.'"}, "needleTower": {"term": "Needle Tower", "def": "The tower rising at the center of Cotton City. Every thread on the continent is said to lead here."}, "wheelOfFate": {"term": "Wheel of Fate", "def": "A great wheel that turns deep within Knit Mountain, spinning the thread of the world."}, "raggedGrave": {"term": "Ragged Grave", "def": "The last land discarded clothes reach. Yet perhaps not an ending — perhaps a beginning."}}, "chars": {"h2": "The Souls of This World", "sub": "Flip a card. Every flip carries the story a little further.", "flipAria": "— tap to flip card", "list": [{"name": "Yiseo", "role": "Mender", "desc": "Owner of a little reform shop in Seoul, drawn into this world by a single thread. She reads the grain of cloth."}, {"name": "Cassian", "role": "Leather Knight", "desc": "A former knight who stays at Yiseo's side, fighting alongside his leather suit, Bella."}, {"name": "Blue", "role": "Denim Wolf", "desc": "A steadfast denim companion who crosses worlds with Yiseo."}, {"name": "Lily", "role": "Chiffon Dress", "desc": "The first customer to visit the mending shop, carrying a torn and tender wound."}, {"name": "Bark", "role": "Denim Jacket", "desc": "A wolf of Denim Canyon. Gruff, but stitched together by loyalty."}, {"name": "Button", "role": "Button Sprite", "desc": "Yiseo's first friend and guide. Small, yet the sturdiest soul of all."}, {"name": "Noa", "role": "Apprentice Tailor", "desc": "Yiseo's first pupil. Clumsy stitches, but every one made with heart."}, {"name": "Satin", "role": "Gown House", "desc": "A noble lady of Silk Ocean. A story hidden beneath the sheen."}, {"name": "Baron", "role": "???", "desc": "The shadow of Needle Tower. The one who preaches perfection."}, {"name": "Old Patch", "role": "Rag Sage", "desc": "The keeper of Ragged Grave, who remembers the name of every discarded thing."}]}}, "book": {"meta": {"title": "The Books — Textopia", "desc": "The complete three-volume healing fantasy 'Textopia.' Synopsis, where to buy, and answers to common questions."}, "hero": {"badge": "Healing Fantasy · Complete Trilogy", "title": "Textopia", "p1": "A tiny alterations shop in a Seoul alley. On the night a redevelopment notice lands in her hands, the mender Yiseo follows a single thread and tumbles into <b>Textopia, a world where clothes breathe and live.</b>", "p2": "A torn dress speaks of its wounds; a worn jacket aches for the one who left it. As the shadow of Iron Stitch — which demands nothing but \"perfect\" clothes — spreads across the land, Yiseo takes up a single needle and begins to mend cloth and heart alike. A gentle adventure that gives discarded things a second name.", "buyBtn": "Buy the ebook"}, "vols": {"h2": "The Complete Trilogy", "v1": {"title": "A Fate That<br>Won't Be Mended", "h3": "Volume 1 (Parts 1–2)", "p": "Fallen into a strange world, Yiseo opens the door of her mending shop, 'One Stitch.' First customers, first friends — and a gathering shadow."}, "v2": {"title": "The Shadow of<br>Iron Stitch", "h3": "Volume 2 (Parts 3–4)", "p": "The rule of 'perfection' tightens around the continent. With friends from the six lands, Yiseo draws closer to the secret of the Needle Tower."}, "v3": {"title": "The Last<br>Stitch", "h3": "Volume 3 (Part 5)", "p": "The greatest mending the world has ever known begins. In the name of every discarded thing — the last stitch."}}, "buy": {"h2": "Where to Buy", "lead": "The ebook is on its way. When it opens, our newsletter readers will be the very first to know.", "selfStore": "Our Own Store", "selfStoreDesc": "DRM-free EPUB · the best price · the biggest cheer for the authors", "storeBtn": "Visit the store", "yesKyobo": "YES24 · Kyobo", "yesKyoboDesc": "In the bookstore apps you already know. Coming soon.", "notifyBtn": "Notify me at launch", "ridi": "RIDI", "ridiDesc": "Read with ease in the RIDI viewer. Coming soon.", "alert": "This will go live when the book launches. Please subscribe to our newsletter!"}, "about": {"h2": "Two of us started a publishing house. Three, if you count the AI.", "p1": "A person who once wrote code (Taeha) met a person who once made clothes (Yeoreum). We build the story together — one lays down its bones and its systems, the other breathes it to life with the feel of fabric and with pictures. When our hands fall short, the AI lends a few more. So we are small, but never slow.", "p2": "A 'seam allowance' is the little extra you leave behind to finish a garment. We believe that even discarded cloth — even discarded stories — carry a seam allowance of their own. That is how our publishing house found its name.", "imgAlt": "The Seam Press atelier"}, "news": {"h2": "News", "item1": {"h3": "The Textopia ebook arrives in summer 2026", "p": "We're preparing to release the complete trilogy all at once. Catch the behind-the-scenes on Instagram and in our newsletter."}}, "faq": {"h2": "Frequently Asked Questions", "q1": "Who is this book for?", "a1": "For anyone who wants to slip away into a gentle world at the end of a tiring day. No cruelty here — only a story of healing and connection.", "q2": "Will there be a print edition?", "a2": "We're releasing the ebook first, and depending on the response, we plan to prepare a print edition through a Tumblbug crowdfunding campaign.", "q3": "How do I read the EPUB from your own store?", "a3": "Just open the EPUB file you receive after purchase in any EPUB reader — the RIDIBOOKS app, Apple Books, Google Play Books, and more. Each file carries a quiet watermark with the buyer's details.", "q4": "Are there plans for overseas editions?", "a4": "Japanese and English translations are in the works. We'll share the news through our newsletter."}}, "store": {"meta": {"title": "Store — Textopia", "desc": "The Textopia Complete 3-Book Set and single volumes as DRM-free EPUB. Download instantly after purchase, read in any viewer."}, "h1": "Store", "sub": "DRM-free EPUB. Download instantly, read in any viewer.", "demoNote": "🧵 This is a <b>demo store</b> for now. No real payments are processed — it's a preview before our official launch.", "popular": "Most Popular", "set": {"cover": "Complete<br>3-Book Set", "title": "Textopia Complete 3-Book Set", "desc": "The whole story, start to finish. 25% off vs. single volumes, plus a special author's note.", "priceLabel": "Set price", "buy": "Buy the Set"}, "vol1": {"cover": "A Fate Beyond<br>Mending", "name": "Book 1 (single volume)", "desc": "Where it all begins — a strange world and the first stitch.", "buy": "Buy Book 1"}, "singleLabel": "Single price", "vol23": {"cover": "The Story<br>Continues", "name": "Books 2 & 3 (single volumes)", "desc": "₩4,500 each. Start with Book 1 first.", "priceEach": "₩4,500 each", "buy": "Buy"}, "guide": {"h2": "Purchase Info", "include": "What's included", "includeBody": "EPUB file (with buyer watermark), author's note, and free updates (typo-corrected editions). A special bonus with the set.", "download": "How to download", "downloadBody": "After payment, a download link is sent to your email. The link can be used up to 3 times within 24 hours. If it expires, you can request a new one.", "refund": "Refund policy", "refundBody": "Because this is a digital product, full refunds are available before download; after download, refunds aren't possible. Try the free Chapter 1 to be sure before you decide."}}, "quiz": {"meta": {"title": "Find Your Partner Garment — Textopia", "desc": "In the world of Textopia, which garment is fated to walk beside you? A one-minute test."}, "questions": [{"q": "At the end of a long, tiring day, the first thing you do when you get home is…", "options": ["Dive straight under the cozy covers", "Gently tell someone all about your day", "Lay out tomorrow's outfit in advance", "Suddenly head out for a midnight snack"]}, {"q": "A friend calls you in tears. Your first words are…", "options": ["It's okay — take your time and tell me.", "Where are you? I'm on my way.", "First things first — have you eaten anything?", "Let's calmly sort out what happened."]}, {"q": "When you open your closet, the piece your hand reaches for most is…", "options": ["The one you've worn ten years and never tire of", "A dazzling outfit that lifts today's mood", "Something familiar and comfy that hugs you close", "A sharp, structured piece with a bit of edge"]}, {"q": "You've arrived in an unfamiliar city. Your travel style is…", "options": ["Right on schedule — you see it all", "Three hours in a shop you stumbled on down an alley", "Straight for the spots only locals know", "Elegantly settled in the café with the best view"]}, {"q": "If someone described you in a single word, the one you'd love most is…", "options": ["Dependable", "Warm-hearted", "Stylish", "Strong-willed"]}, {"q": "You've fallen into Textopia. The first place you want to visit is…", "options": ["Knit Mountain, where the yarn sings", "Silk Ocean, shimmering with light", "Denim Canyon, rugged and free", "'One Stitch,' the old mending shop down the alley"]}], "results": {"denim": {"name": "Denim Jacket · Blue", "sub": "DENIM — The Loyal Partner", "desc": "The kind who only grows more striking with wear. Once you let someone in, you stand by them to the very end. You may seem gruff, but when things fall apart, you're always the first to come running.", "mate": "Blue, the wolf of Denim Canyon", "spot": "Denim Canyon · Indigo Lake"}, "chiffon": {"name": "Chiffon Dress · Lily", "sub": "CHIFFON — The Empathetic Partner", "desc": "Rather than bend in the wind, you listen to the stories the wind carries. Your softness isn't weakness — it's a sense that others simply don't have.", "mate": "Lily's dress, the mending shop's very first guest", "spot": "Cotton City · the alley mending shop"}, "knit": {"name": "Knit Sweater", "sub": "KNIT — The Warmth Partner", "desc": "With you near, even winter feels bearable. You'd rather stay warm for a long while than dazzle for a moment. You're someone who knows that whatever unravels can always be knit anew.", "mate": "The yarn of the Wheel of Fate", "spot": "Knit Mountain · the Waterwheel"}, "leather": {"name": "Leather Jacket", "sub": "LEATHER — The Steadfast Partner", "desc": "The kind who only grows cooler with time. Even wounds and scars become part of your pattern. Whatever the world says, you have the grit to live by your own grain.", "mate": "The wandering jacket of Leather Jungle", "spot": "Leather Jungle · Stud Cliffs"}, "silk": {"name": "Silk Scarf", "sub": "SILK — The Elegant Partner", "desc": "The kind who shows a different color in every light. You know beauty isn't a luxury but a way of living — and that softness wins over strength.", "mate": "The scarf of Cocoon Castle", "spot": "Silk Ocean · the Strait of Sheen"}, "linen": {"name": "Muslin Apron · Yiseo's own", "sub": "LINEN — The Constant Partner", "desc": "The plainest cloth endures the longest. Stitch by daily stitch, you're the one who ends up mending the whole world. This is the very cloth Yiseo, our heroine, chose for herself.", "mate": "Mender Yiseo's work apron", "spot": "Cotton City · the 'One Stitch' shop"}}, "ui": {"mateLabel": "Your fated partner", "spotLabel": "Your land", "share": "Share my result", "readCta": "Meet this world in Chapter 1", "retry": "Try again", "shareTitle": "Find Your Partner Garment", "shareLine": "My Textopia partner garment is [{name}] — {sub}", "shareHook": "Find yours too: https://textopia.vercel.app/quiz.html", "copied": "Result copied! Paste it to send a friend."}}, "404": {"meta": {"title": "Page Not Found — Textopia", "desc": "The thread you're looking for has come loose, but the story is still being woven."}, "h1": "Looks like this page came unravelled", "msg": "The thread you're looking for isn't here, but the story is still being woven.", "home": "Back home", "cta": "Read chapter 1 free", "imgAlt": "Iseo mending a torn page"}, "read": {"meta": {"title": "Read Chapter 1 Free — Textopia", "desc": "Read Chapter 1 of Textopia free — a cozy healing fantasy where Yiseo, a mender, first hears the clothes speak. (Chapter currently in Korean.)"}, "nav": {"exit": "Exit", "pos": "Textopia · Book 1, Ch. 1"}, "settings": {"open": "Reading settings", "size": "Text size", "sizeS": "Small", "sizeM": "Default", "sizeL": "Large", "sizeXL": "Larger", "bg": "Background", "light": "Light", "sepia": "Sepia", "dark": "Dark"}, "end": {"title": "You've tied your first knot", "teaserLabel": "Chapter 2 preview", "next": "Keep reading the next story", "world": "Explore more of the world"}}, "terms": {"meta": {"title": "Terms of Use — Textopia", "desc": "The Terms of Use for Textopia, operated by Orsion (brand: Seam Press) — the conditions for using our content viewing and e-book sales services."}, "h1": "Terms of Use", "updated": "Effective date: July 12, 2026 · Orsion (brand: Seam Press)", "s1": {"h": "Article 1 (Purpose)", "body": "These terms set out the conditions for using the content viewing and e-book sales services provided on the Textopia website (the \"Site\"), operated by Orsion (the \"Company\")."}, "s2": {"h": "Article 2 (Services)", "body": "① Free access to Chapter 1 of the novel \"Textopia,\" world-setting information, and newsletter delivery<br>② Sale and download of e-books (EPUB) — until the official launch, the payment function is shown as a demo and no actual payment is processed."}, "s3": {"h": "Article 3 (Copyright)", "body": "The copyright in all content on the Site (the novel text, world setting, illustrations, and design) belongs to the Company. Purchased e-books may be used only for personal keeping and reading; unauthorized reproduction, distribution, or sharing may incur liability under copyright law. E-book files include a watermark identifying the purchaser."}, "s4": {"h": "Article 4 (Purchase, Download, and Refunds)", "body": "① After payment is completed, a download link is sent to the email address you entered (valid for 3 uses within 24 hours; reissuable after expiry).<br>② Given the nature of digital content, <b>a full refund is available before download</b>, while after download a refund is difficult except where the content is defective (Article 17(2) of the Act on Consumer Protection in Electronic Commerce).<br>③ If a file is defective or missing, we will re-provide it free of charge or issue a full refund."}, "s5": {"h": "Article 5 (Newsletter)", "body": "Subscription is free and can be cancelled at any time. When the Company sends promotional information, it will indicate this in the subject line."}, "s6": {"h": "Article 6 (Disclaimer)", "body": "The Company is not liable for service interruptions caused by force majeure, such as natural disasters or cloud service failures. However, the download rights of paying purchasers are guaranteed once service is restored."}, "s7": {"h": "Article 7 (Dispute Resolution)", "body": "Disputes relating to use of the service shall be resolved through good-faith consultation between the Company and the user; where consultation proves difficult, a claim may be filed with the competent court under the Civil Procedure Act. Contact: <a class=\"stitch-link\" href=\"mailto:neocomix@neocomix.com\">neocomix@neocomix.com</a>"}}, "privacy": {"meta": {"title": "Privacy Policy — Textopia", "desc": "The Textopia Privacy Policy by Orsion (brand: Seam Press). Learn what personal data we collect, why, how long we keep it, our processors, and your rights."}, "h1": "Privacy Policy", "updated": "Effective: July 12, 2026 · Orsion (brand: Seam Press)", "s1": {"h": "1. Personal Data We Collect and Why", "body": "Orsion (\"the Company\") collects only the following information on the Textopia website.", "list": "① <b>Newsletter subscription</b>: email address — to send publication news and behind-the-scenes updates<br>② <b>E-book purchases (coming soon)</b>: email address, payment records — to deliver products (sending download links) and process refunds<br>③ <b>Service improvement</b>: non-identifying usage records such as visits and clicks (no cookies used; individuals cannot be identified)"}, "s2": {"h": "2. Retention and Use Period", "body": "Newsletter email addresses are <b>destroyed immediately upon unsubscription</b>. Purchase records are retained for 5 years in accordance with the Act on Consumer Protection in Electronic Commerce, then destroyed."}, "s3": {"h": "3. Processing Consignment and Storage Location", "body": "Collected information is stored over an encrypted connection in the cloud database used by the Company (Supabase Inc., Seoul region). The Company does not otherwise provide or sell personal data to any third party."}, "s4": {"h": "4. Your Rights", "body": "You may at any time request access to, correction of, deletion of, or suspension of the processing of your personal data. You can unsubscribe from the newsletter via the opt-out link at the bottom of each email or through the contact below, and such requests are handled without delay."}, "s5": {"h": "5. Data Protection Officer", "body": "Name: Kwon Taek-jun (CEO) · Email: <a class=\"stitch-link\" href=\"mailto:neocomix@neocomix.com\">neocomix@neocomix.com</a><br>Privacy infringement inquiries: Korea Internet & Security Agency Privacy Report Center (privacy.kisa.or.kr, dial 118 with no area code)"}, "s6": {"h": "6. Duty of Notice", "body": "If this policy is revised, we will give notice through the website announcements 7 days before it takes effect."}, "footer": {"body": "Orsion · CEO Kwon Taek-jun · Business Reg. No. 609-35-66228 · Contact neocomix@neocomix.com<br><a class=\"stitch-link\" href=\"terms.html\">Terms of Use</a> · <a class=\"stitch-link\" href=\"index.html\">Home</a><br>© 2026 Orsion."}}, "checkout": {"meta": {"title": "Checkout — Textopia", "desc": "Get the complete 3-volume Textopia set as DRM-free EPUB. Just enter your email and we'll send the download link. (Demo checkout — no real payment.)"}, "h1": "Your order", "sub": "All we need is the email where your EPUB download link should go.", "demoNote": "🧵 This is a demo checkout. We don't collect card details, and no real payment is made.", "steps": {"order": "Order", "pay": "Pay", "done": "Done"}, "price": {"disc": "Discount", "total": "Total"}, "field": {"emailLabel": "Email (for your download link)", "emailPh": "you@example.com", "emailHint": "Please check your email format"}, "agree": {"item1": "I understand this is a digital item (no refunds after download). (Required)", "item2": "Send me the newsletter with release news, too. (Optional)"}, "pay": "Pay now (Demo)", "msg": {"paying": "Threading the needle…"}, "items": {"set": ["Textopia — Complete 3-Volume Set (EPUB)", "₩9,900", "-₩3,600", "₩9,900"], "vol1": ["Textopia Vol. 1 — A Fate Beyond Mending (EPUB)", "₩4,500", "₩0", "₩4,500"], "vol2": ["Textopia Vol. 2 — Shadow of the Iron Stitch (EPUB)", "₩4,500", "₩0", "₩4,500"]}}, "success": {"meta": {"title": "Order Complete — Textopia", "desc": "Your order is complete. We'll send the download link to the email you entered. (Demo order confirmation.)"}, "steps": {"order": "Order", "pay": "Payment", "done": "Done"}, "h1": "The knot is tied", "msg": "We'll send your download link to the email you entered.<br>(This is a demo, so no real email is actually sent.)", "item": {"set": "Textopia: Complete 3-Book Set (EPUB)", "vol1": "Textopia Book 1 (EPUB)", "vol2": "Textopia Book 2 (EPUB)"}, "itemNote": "Download link valid for 24 hours / 3 downloads after sending.<br>Opens in any EPUB reader (Ridi, Apple Books, Play Books, and more).", "reread": "Reread Chapter 1 while you wait", "home": "Back to home"}});

/* -------------------- 엔진 -------------------- */
(function(){
  var I18N = window.I18N;
  function detect(){
    try {
      var saved = localStorage.getItem('tx-lang');
      if (saved && I18N[saved]) return saved;
    } catch(e){}
    var navs = navigator.languages || [navigator.language || 'en'];
    for (var i=0;i<navs.length;i++){
      var l = (navs[i]||'').toLowerCase();
      if (l.indexOf('ko') === 0) return 'ko';
      if (l.indexOf('en') === 0) return 'en';
    }
    return I18N.en ? 'en' : 'ko';
  }
  var LANG = detect();
  window.txLang = LANG;

  function pageKey(){
    var p = location.pathname.replace(/\/+$/,'');
    var f = p.substring(p.lastIndexOf('/')+1) || 'index.html';
    return f.replace(/\.html$/,'') || 'index';
  }
  window.txPage = pageKey();

  function resolve(dict, key){
    if (!dict) return undefined;
    var parts = key.split('.'), o = dict;
    for (var i=0;i<parts.length;i++){ if (o == null) return undefined; o = o[parts[i]]; }
    return o;
  }
  function get(key){
    var v = resolve(I18N[LANG], key);
    if (v === undefined || v === null) v = resolve(I18N.ko, key); // 폴백: 한국어
    return v;
  }
  window.txT = get;

  document.documentElement.lang = LANG;

  function applyMeta(){
    var t = get(window.txPage + '.meta.title'); if (t) document.title = t;
    var d = get(window.txPage + '.meta.desc');
    if (d){ var m = document.querySelector('meta[name="description"]'); if (m) m.setAttribute('content', d); }
  }
  function applyDOM(root){
    root = root || document;
    root.querySelectorAll('[data-i18n]').forEach(function(el){ var v=get(el.getAttribute('data-i18n')); if (v!=null && typeof v==='string') el.textContent=v; });
    root.querySelectorAll('[data-i18n-html]').forEach(function(el){ var v=get(el.getAttribute('data-i18n-html')); if (v!=null && typeof v==='string') el.innerHTML=v; });
    root.querySelectorAll('[data-i18n-attr]').forEach(function(el){
      el.getAttribute('data-i18n-attr').split(';').forEach(function(pair){
        var idx = pair.indexOf(':'); if (idx<0) return;
        var attr = pair.slice(0,idx).trim(), key = pair.slice(idx+1).trim();
        var v = get(key); if (v!=null && typeof v==='string') el.setAttribute(attr, v);
      });
    });
  }
  window.txApply = applyDOM;

  function injectStyle(){
    var css = '.lang-switch{position:relative;display:inline-flex}'
      + '.lang-btn{display:inline-flex;align-items:center;gap:6px;height:40px;padding:0 12px;border:1.4px dashed var(--stitch);background:transparent;color:var(--ink);border-radius:20px;cursor:pointer;font-family:var(--font-ui);font-size:13px;font-weight:600}'
      + '.lang-btn:hover{border-style:solid}'
      + '.lang-menu{position:absolute;top:46px;right:0;min-width:132px;background:var(--surface);border:1.5px solid var(--stitch);border-radius:10px;box-shadow:var(--shadow-card);padding:6px;display:none;z-index:90}'
      + '.lang-switch.open .lang-menu{display:block}'
      + '.lang-menu button{display:block;width:100%;text-align:left;background:transparent;border:none;color:var(--ink);font-family:var(--font-ui);font-size:14px;padding:9px 12px;border-radius:7px;cursor:pointer}'
      + '.lang-menu button:hover{background:color-mix(in srgb,var(--stitch) 14%,transparent)}'
      + '.lang-menu button.on{color:var(--primary);font-weight:700}'
      + '.drawer .lang-switch{display:block;margin:6px 0}.drawer .lang-btn{width:100%;justify-content:flex-start}.drawer .lang-menu{position:static;border:none;box-shadow:none;padding:4px 0 0}';
    var s = document.createElement('style'); s.textContent = css; document.head.appendChild(s);
  }
  function buildSwitch(){
    var wrap = document.createElement('div'); wrap.className='lang-switch';
    var btn = document.createElement('button'); btn.type='button'; btn.className='lang-btn';
    btn.setAttribute('aria-label', get('common.drawer.langLabel') || 'Language');
    btn.innerHTML = '<span aria-hidden="true">🌐</span><span>'+(I18N[LANG]._label||LANG)+'</span>';
    var menu = document.createElement('div'); menu.className='lang-menu';
    Object.keys(I18N).forEach(function(code){
      var b = document.createElement('button'); b.type='button'; b.textContent = I18N[code]._label || code;
      if (code===LANG) b.className='on';
      b.addEventListener('click', function(){ try{ localStorage.setItem('tx-lang', code); }catch(e){} location.reload(); });
      menu.appendChild(b);
    });
    btn.addEventListener('click', function(e){ e.stopPropagation(); wrap.classList.toggle('open'); });
    document.addEventListener('click', function(e){ if (!wrap.contains(e.target)) wrap.classList.remove('open'); });
    wrap.appendChild(btn); wrap.appendChild(menu);
    return wrap;
  }
  function injectSwitch(){
    var right = document.querySelector('.gnb-right');
    if (right && !right.querySelector('.lang-switch')) right.insertBefore(buildSwitch(), right.firstChild);
    // 드로어에도 추가 (app.js가 드로어를 만든 뒤)
    var tryDrawer = function(){
      var dr = document.querySelector('.drawer .d-theme');
      if (dr && !document.querySelector('.drawer .lang-switch')) dr.parentNode.insertBefore(buildSwitch(), dr);
    };
    setTimeout(tryDrawer, 0); setTimeout(tryDrawer, 120);
  }

  applyMeta();
  injectStyle();
  if (document.readyState !== 'loading'){ applyDOM(); injectSwitch(); }
  else document.addEventListener('DOMContentLoaded', function(){ applyDOM(); injectSwitch(); });
})();
