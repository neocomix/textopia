/* ===== 텍스토피아 · '블루' 안내 위젯 (blue-chat.js) =====
   규칙기반 컨시어지 챗봇. 사이트 i18n(window.txLang)에 자동으로 맞춰 5개 언어 응대.
   - 기능 투어(오피스·세계관·무료1화·이미지북·퀴즈·스토어)
   - 회사소개서 언어별 다운로드
   - 문의 폼 → Web3Forms → hello@textopia.world(Gmail)
   붙이는 법: 각 페이지 </body> 앞에 <script src="assets/blue-chat.js?v=1" defer></script>
============================================================ */
(function () {
  'use strict';
  if (window.__blueChatLoaded) return; window.__blueChatLoaded = true;

  /* ⚠️ Web3Forms 액세스 키는 assets/app.js 의 window.TX_WEB3_KEY 한 곳에서만 관리한다.
     (문의 폼·챗봇 공용) — web3forms.com 에서 hello@textopia.world 로 무료 발급 후 app.js 에 넣으면 됨. */
  function web3key() { return window.TX_WEB3_KEY || 'YOUR_WEB3FORMS_ACCESS_KEY'; }

  var PDF = {
    ko: 'assets/company/TEXTOPIA_Company_Profile_KO.pdf',
    en: 'assets/company/TEXTOPIA_Company_Profile_EN.pdf',
    ja: 'assets/company/TEXTOPIA_Company_Profile_JA.pdf',
    zh: 'assets/company/TEXTOPIA_Company_Profile_ZH.pdf',
    es: 'assets/company/TEXTOPIA_Company_Profile_ES.pdf'
  };
  var LANG_NAMES = { ko: '한국어', en: 'English', ja: '日本語', zh: '中文', es: 'Español' };

  function lang() {
    var l = window.txLang;
    if (!l) { try { l = localStorage.getItem('tx-lang'); } catch (e) {} }
    if (!l) l = (document.documentElement.lang || 'ko').slice(0, 2);
    return T[l] ? l : 'ko';
  }

  /* ---------- 블루 대사 (5개 언어) ---------- */
  var T = {
    ko: {
      title: '블루', status: '텍스토피아 안내',
      nudge: '…왔어? 뭐 찾는 거 있으면 말해.',
      hello: '난 블루. 텍스토피아 안내 담당이야. 뭘 도와줄까?',
      again: '또 필요한 거 있어?',
      m_tour: '구경시켜줄까', m_company: '회사소개서 받기', m_inquiry: '문의하기',
      back: '← 처음으로',
      tourIntro: '…심심해? 재밌는 거 보여줄게.',
      t_office: '🏢 AI 직원들 일하는 거 보기', t_world: '🗺️ 세계관 지도 탐험',
      t_read: '📖 무료 1화 읽기', t_image: '🖼️ 이미지북',
      t_quiz: '🧵 나의 원단 찾기', t_store: '🛒 스토어',
      officeLine: '우리 사무실, 사람은 둘뿐인데 AI 직원들이 밤새 일해. 구경해볼래?',
      go: '열기 →',
      companyIntro: '회사소개서, 어느 언어로 줄까?',
      companyServe: '여기. …도움 됐으면 됐고.',
      inquiryIntro: '궁금한 거 있으면 여기 남겨. 답장은 사람이 직접 써서 보낼 거야.',
      fName: '이름', fEmail: '이메일', fMsg: '문의 내용',
      fSend: '보내기', fSending: '보내는 중…',
      fSent: '접수됐어. 답장은 사람이 직접 써서 보낼 거야.',
      fErr: '…실이 잠깐 엉켰어. 잠시 후 다시 시도해줘.',
      eName: '이름을 알려줘', eEmail: '이메일 형식이 아닌데?', eMsg: '내용을 적어줘',
      greet: '어, 왔어. 반갑다. 뭐 찾는 거 있어?', thanks: '뭘 이런 걸로. …또 필요한 거 있으면 말해.', fallback: '난 정해진 것만 안내해. 아래에서 골라봐.',
      open: '블루에게 물어보기', close: '닫기'
    },
    en: {
      title: 'Blue', status: 'Textopia guide',
      nudge: '…oh, you’re here. Say the word if you need something.',
      hello: 'I’m Blue. I handle the tour around Textopia. What do you need?',
      again: 'Need anything else?',
      m_tour: 'Show me around', m_company: 'Get the company profile', m_inquiry: 'Contact us',
      back: '← Back',
      tourIntro: '…bored? Let me show you something.',
      t_office: '🏢 Watch the AI staff at work', t_world: '🗺️ Explore the world map',
      t_read: '📖 Read episode 1 (free)', t_image: '🖼️ Image book',
      t_quiz: '🧵 Find your fabric', t_store: '🛒 Store',
      officeLine: 'Only two humans run our studio — the AI staff work through the night. Wanna peek?',
      go: 'Open →',
      companyIntro: 'The company profile — which language?',
      companyServe: 'Here. …hope it helps, or whatever.',
      inquiryIntro: 'Leave your question here. A real person will write you back.',
      fName: 'Name', fEmail: 'Email', fMsg: 'Your message',
      fSend: 'Send', fSending: 'Sending…',
      fSent: 'Got it. A real person will write back to you soon.',
      fErr: '…the thread tangled for a sec. Try again shortly.',
      eName: 'Tell me your name', eEmail: 'That’s not an email', eMsg: 'Write something',
      greet: 'Oh, hey. Good to see you. Looking for something?', thanks: 'Don’t mention it. …Ask if you need anything else.', fallback: 'I only guide set things. Pick from below.',
      open: 'Ask Blue', close: 'Close'
    },
    ja: {
      title: 'ブルー', status: 'テクストピア案内',
      nudge: '…来たの? 何か探してるなら言って。',
      hello: 'おれはブルー。テクストピアの案内担当だ。何を手伝おうか?',
      again: 'ほかに必要なものは?',
      m_tour: '案内してやろうか', m_company: '会社紹介をもらう', m_inquiry: 'お問い合わせ',
      back: '← 最初に戻る',
      tourIntro: '…退屈? 面白いもの見せてやる。',
      t_office: '🏢 AI社員が働くところを見る', t_world: '🗺️ 世界観マップを探検',
      t_read: '📖 第1話を無料で読む', t_image: '🖼️ イメージブック',
      t_quiz: '🧵 自分の生地さがし', t_store: '🛒 ストア',
      officeLine: 'うちの事務所、人間は二人だけ。AI社員が夜通し働いてるんだ。見てみるか?',
      go: '開く →',
      companyIntro: '会社紹介、どの言語がいい?',
      companyServe: 'ほら。…役に立てば、それでいい。',
      inquiryIntro: '気になることはここに残して。返事は人が直接書いて送るよ。',
      fName: 'お名前', fEmail: 'メール', fMsg: 'お問い合わせ内容',
      fSend: '送信', fSending: '送信中…',
      fSent: '受け取った。返事は人が直接書いて送るからな。',
      fErr: '…糸が少し絡まった。少し経ってからもう一度。',
      eName: '名前を教えて', eEmail: 'メール形式じゃないな', eMsg: '内容を書いて',
      greet: 'お、来たな。よく来た。何か探してるのか?', thanks: 'これくらい何てことない。…また必要なら言えよ。', fallback: 'おれは決まった案内しかできない。下から選んで。',
      open: 'ブルーに聞く', close: '閉じる'
    },
    zh: {
      title: '布鲁', status: 'TEXTOPIA 向导',
      nudge: '…来了? 要找什么就说一声。',
      hello: '我是布鲁，负责TEXTOPIA的向导。需要帮什么?',
      again: '还需要别的吗?',
      m_tour: '带你逛逛', m_company: '领取公司简介', m_inquiry: '联系我们',
      back: '← 回到开始',
      tourIntro: '…无聊吗? 给你看点有意思的。',
      t_office: '🏢 看AI员工在干活', t_world: '🗺️ 探索世界观地图',
      t_read: '📖 免费读第1话', t_image: '🖼️ 图像书',
      t_quiz: '🧵 寻找你的布料', t_store: '🛒 商店',
      officeLine: '我们工作室只有两个人，AI员工却在通宵干活。要不要看看?',
      go: '打开 →',
      companyIntro: '公司简介，要哪种语言?',
      companyServe: '给你。…有用就行。',
      inquiryIntro: '有想问的就留在这儿。回复会由真人亲自写好发给你。',
      fName: '姓名', fEmail: '邮箱', fMsg: '咨询内容',
      fSend: '发送', fSending: '发送中…',
      fSent: '收到了。回复会由真人亲自写好发给你。',
      fErr: '…线暂时缠住了，稍后再试。',
      eName: '告诉我名字', eEmail: '这不是邮箱格式', eMsg: '写点内容吧',
      greet: '哦，来了。欢迎。找什么吗?', thanks: '这点小事。…还需要什么就说。', fallback: '我只能做固定的引导，从下面选吧。',
      open: '问问布鲁', close: '关闭'
    },
    es: {
      title: 'Blue', status: 'Guía de Textopia',
      nudge: '…ah, estás aquí. Dime si buscas algo.',
      hello: 'Soy Blue, llevo la guía de Textopia. ¿Qué necesitas?',
      again: '¿Algo más?',
      m_tour: 'Enséñame el sitio', m_company: 'Perfil de empresa', m_inquiry: 'Contacto',
      back: '← Volver',
      tourIntro: '…¿aburrida? Te enseño algo.',
      t_office: '🏢 Ver al equipo de IA trabajando', t_world: '🗺️ Explorar el mapa del mundo',
      t_read: '📖 Leer el cap. 1 (gratis)', t_image: '🖼️ Libro ilustrado',
      t_quiz: '🧵 Encuentra tu tela', t_store: '🛒 Tienda',
      officeLine: 'Nuestro estudio lo llevan dos personas; el equipo de IA trabaja de noche. ¿Le echas un vistazo?',
      go: 'Abrir →',
      companyIntro: 'El perfil de empresa, ¿en qué idioma?',
      companyServe: 'Aquí. …espero que sirva, o lo que sea.',
      inquiryIntro: 'Deja aquí tu consulta. Una persona real te responderá.',
      fName: 'Nombre', fEmail: 'Correo', fMsg: 'Tu mensaje',
      fSend: 'Enviar', fSending: 'Enviando…',
      fSent: 'Recibido. Una persona real te responderá pronto.',
      fErr: '…el hilo se enredó un momento. Inténtalo en un rato.',
      eName: 'Dime tu nombre', eEmail: 'Eso no es un correo', eMsg: 'Escribe algo',
      greet: 'Ah, hola. Me alegra verte. ¿Buscas algo?', thanks: 'No es nada. …Dime si necesitas algo más.', fallback: 'Solo guío cosas fijas. Elige abajo.',
      open: 'Pregúntale a Blue', close: 'Cerrar'
    }
  };

  var TOUR = [
    { k: 't_office', href: 'office/', blank: true, line: 'officeLine' },
    { k: 't_world', href: 'world.html' },
    { k: 't_read', href: 'read.html' },
    { k: 't_image', href: 'imagebook.html' },
    { k: 't_quiz', href: 'quiz.html' },
    { k: 't_store', href: 'store.html' }
  ];

  /* ---------- 스타일 (사이트 CSS 변수 사용 + 폴백) ---------- */
  var CSS = '\
  .bchat-fab{position:fixed;right:22px;bottom:22px;z-index:1000;width:60px;height:60px;border-radius:50%;\
    border:2px dashed var(--stitch,#9A7B4F);background:var(--surface,#FBF6EC);box-shadow:0 10px 26px rgba(40,35,25,.28);\
    cursor:pointer;padding:3px;transition:transform .18s ease}\
  .bchat-fab:hover{transform:translateY(-2px) scale(1.03)}\
  .bchat-fab img{width:100%;height:100%;border-radius:50%;object-fit:cover;display:block}\
  .bchat-fab .dot{position:absolute;top:2px;right:2px;width:13px;height:13px;border-radius:50%;background:var(--accent,#C05F7F);border:2px solid var(--surface,#FBF6EC)}\
  @media(max-width:767px){.bchat-fab{bottom:84px;right:16px;width:54px;height:54px}}\
  .bchat-nudge{position:fixed;right:92px;bottom:34px;z-index:1000;max-width:230px;background:var(--surface,#FBF6EC);\
    color:var(--ink,#2E2B24);border:1.5px solid var(--stitch,#9A7B4F);border-radius:14px 14px 4px 14px;padding:11px 14px;\
    font-family:var(--font-ui,sans-serif);font-size:13.5px;line-height:1.5;box-shadow:0 10px 24px rgba(40,35,25,.2);\
    opacity:0;transform:translateY(6px);transition:opacity .3s,transform .3s;pointer-events:none}\
  .bchat-nudge.in{opacity:1;transform:none}\
  @media(max-width:767px){.bchat-nudge{bottom:96px;right:76px;max-width:200px}}\
  .bchat-panel{position:fixed;right:22px;bottom:94px;z-index:1001;width:360px;max-width:calc(100vw - 32px);height:520px;\
    max-height:calc(100vh - 130px);display:flex;flex-direction:column;background:var(--surface,#FBF6EC);\
    border:1.5px solid var(--stitch,#9A7B4F);border-radius:18px;box-shadow:0 20px 60px rgba(40,35,25,.32);overflow:hidden;\
    opacity:0;transform:translateY(10px) scale(.98);transition:opacity .2s,transform .2s;pointer-events:none;\
    font-family:var(--font-ui,-apple-system,sans-serif)}\
  .bchat-panel.open{opacity:1;transform:none;pointer-events:auto}\
  @media(max-width:767px){.bchat-panel{right:12px;left:12px;bottom:82px;width:auto;height:calc(100vh - 150px)}}\
  .bchat-head{display:flex;align-items:center;gap:11px;padding:13px 15px;border-bottom:1.5px dashed var(--stitch,#9A7B4F);flex:none}\
  .bchat-head img{width:38px;height:38px;border-radius:50%;object-fit:cover;border:1.5px solid var(--stitch,#9A7B4F)}\
  .bchat-head .nm{font-family:var(--font-display,serif);font-weight:700;font-size:16px;color:var(--ink,#2E2B24);line-height:1.1}\
  .bchat-head .st{font-size:11.5px;color:var(--ink-soft,#6E6759);margin-top:1px}\
  .bchat-head .x{margin-left:auto;background:transparent;border:none;font-size:20px;color:var(--ink-soft,#6E6759);cursor:pointer;line-height:1;padding:4px 6px}\
  .bchat-body{flex:1;overflow-y:auto;padding:16px 15px 10px;display:flex;flex-direction:column;gap:10px;background:\
    linear-gradient(180deg,color-mix(in srgb,var(--stitch,#9A7B4F) 6%,transparent),transparent 120px)}\
  .bchat-row{display:flex;gap:8px;align-items:flex-end}\
  .bchat-row img{width:26px;height:26px;border-radius:50%;object-fit:cover;flex:none}\
  .bchat-bubble{background:var(--paper,#fff);color:var(--ink,#2E2B24);border:1.4px solid var(--line,#E4D8C4);\
    border-radius:14px 14px 14px 4px;padding:10px 13px;font-size:13.5px;line-height:1.6;max-width:80%;white-space:pre-wrap}\
  .bchat-row.me{justify-content:flex-end}\
  .bchat-bubble.me{background:var(--accent,#C05F7F);color:#fff;border-color:var(--accent,#C05F7F);border-radius:14px 14px 4px 14px}\
  .bchat-qr{display:flex;flex-wrap:wrap;gap:7px;margin:2px 0 6px 34px}\
  .bchat-qr button,.bchat-qr a{display:inline-block;background:var(--surface,#FBF6EC);color:var(--accent,#C05F7F);\
    border:1.4px dashed var(--accent,#C05F7F);border-radius:18px;padding:8px 14px;font-size:13px;font-weight:600;\
    font-family:inherit;cursor:pointer;text-decoration:none;transition:background .15s}\
  .bchat-qr button:hover,.bchat-qr a:hover{background:color-mix(in srgb,var(--accent,#C05F7F) 12%,transparent);border-style:solid}\
  .bchat-form{margin:2px 0 6px 34px;display:flex;flex-direction:column;gap:8px;max-width:86%}\
  .bchat-form input,.bchat-form textarea{width:100%;background:var(--paper,#fff);border:1.4px solid var(--line,#E4D8C4);\
    border-radius:10px;padding:9px 11px;font-family:inherit;font-size:13.5px;color:var(--ink,#2E2B24)}\
  .bchat-form textarea{min-height:74px;resize:vertical}\
  .bchat-form .send{background:var(--accent,#C05F7F);color:#fff;border:none;border-radius:20px;padding:10px;font-weight:700;\
    font-size:13.5px;font-family:inherit;cursor:pointer}\
  .bchat-form .send:disabled{opacity:.6;cursor:default}\
  .bchat-form .fmsg{font-size:12px;color:#C0392B;min-height:15px}\
  .bchat-hp{position:absolute;left:-9999px;opacity:0}\
  ';

  var av = 'assets/img/char-blue.webp';
  var root, panel, body, fab, nudge, opened = false;

  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function esc(s){ return String(s).replace(/[&<>"]/g, function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];}); }
  function scrollDown(){ body.scrollTop = body.scrollHeight; }

  function say(text) {
    var row = el('div', 'bchat-row');
    row.appendChild(el('img')).src = av;
    row.appendChild(el('div', 'bchat-bubble', esc(text)));
    body.appendChild(row); scrollDown();
  }
  function me(text) {
    var row = el('div', 'bchat-row me');
    row.appendChild(el('div', 'bchat-bubble me', esc(text)));
    body.appendChild(row); scrollDown();
  }
  function quick(items) { // items: [{label, on}] or {label, href, blank}
    var wrap = el('div', 'bchat-qr');
    items.forEach(function (it) {
      var b;
      if (it.href) { b = el('a', null, esc(it.label)); b.href = it.href; if (it.blank) b.target = '_blank'; if (it.on) b.addEventListener('click', it.on); }
      else { b = el('button', null, esc(it.label)); b.type = 'button'; b.addEventListener('click', it.on); }
      wrap.appendChild(b);
    });
    body.appendChild(wrap); scrollDown();
  }

  function reset(){ body.innerHTML = ''; }

  function mainMenu(greet) {
    var t = T[lang()];
    say(greet || t.hello);
    quick([
      { label: t.m_tour, on: tourMenu },
      { label: t.m_company, on: companyMenu },
      { label: t.m_inquiry, on: inquiry }
    ]);
  }

  function tourMenu() {
    var t = T[lang()];
    say(t.tourIntro);
    var items = TOUR.map(function (x) {
      if (x.line) { // 오피스: 클릭하면 블루가 한마디 + 열기 링크
        return { label: t[x.k], on: function () {
          window.txEvent && window.txEvent('blue_tour', { to: x.k });
          say(t[x.line]);
          quick([{ label: t.go, href: x.href, blank: true },
                 { label: t.back, on: function(){ reset(); mainMenu(t.again); } }]);
        } };
      }
      return { label: t[x.k], href: x.href, blank: x.blank,
        on: function () { window.txEvent && window.txEvent('blue_tour', { to: x.k }); } };
    });
    items.push({ label: t.back, on: function(){ reset(); mainMenu(t.again); } });
    quick(items);
  }

  function companyMenu() {
    var t = T[lang()];
    say(t.companyIntro);
    var items = Object.keys(PDF).map(function (code) {
      return {
        label: LANG_NAMES[code], href: PDF[code], blank: true,
        on: function () { window.txEvent && window.txEvent('blue_company', { lang: code }); setTimeout(function(){ say(t.companyServe); }, 200); }
      };
    });
    items.push({ label: t.back, on: function(){ reset(); mainMenu(t.again); } });
    quick(items);
  }

  function inquiry() {
    var t = T[lang()];
    say(t.inquiryIntro);
    var f = el('form', 'bchat-form');
    f.innerHTML =
      '<input name="name" placeholder="' + esc(t.fName) + '" autocomplete="name">' +
      '<input name="email" type="email" placeholder="' + esc(t.fEmail) + '" autocomplete="email">' +
      '<textarea name="message" placeholder="' + esc(t.fMsg) + '"></textarea>' +
      '<input class="bchat-hp" name="botcheck" tabindex="-1" autocomplete="off">' +
      '<div class="fmsg"></div>' +
      '<button class="send" type="submit">' + esc(t.fSend) + '</button>';
    body.appendChild(f); scrollDown();
    f.addEventListener('submit', function (e) { e.preventDefault(); submitInquiry(f); });
  }

  function submitInquiry(f) {
    var t = T[lang()];
    var name = f.name.value.trim(), email = f.email.value.trim(), msg = f.message.value.trim();
    var fmsg = f.querySelector('.fmsg'), btn = f.querySelector('.send');
    if (f.botcheck.value) return; // honeypot
    if (!name) { fmsg.textContent = t.eName; return; }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { fmsg.textContent = t.eEmail; return; }
    if (!msg) { fmsg.textContent = t.eMsg; return; }
    fmsg.textContent = ''; btn.disabled = true; btn.textContent = t.fSending;
    var L = lang();
    var payload = {
      access_key: web3key(),
      subject: '[문의/Inquiry] ' + name + ' · ' + L.toUpperCase(),
      from_name: 'TEXTOPIA 문의폼',
      name: name, email: email, message: msg,
      language: L, language_name: LANG_NAMES[L] || L,
      page: location.pathname, site: location.host
    };
    fetch('https://api.web3forms.com/submit', {
      method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload)
    }).then(function (r) { return r.json(); }).then(function (d) {
      if (d && d.success) {
        window.txEvent && window.txEvent('blue_inquiry', { lang: L });
        f.parentNode.removeChild(f); say(t.fSent);
        quick([{ label: t.back, on: function(){ reset(); mainMenu(t.again); } }]);
      } else { throw new Error('fail'); }
    }).catch(function () {
      fmsg.textContent = t.fErr; btn.disabled = false; btn.textContent = t.fSend;
    });
  }

  /* 자유 입력(키워드 매칭) — 하단 입력창 */
  function quickMenu() {
    var t = T[lang()];
    quick([
      { label: t.m_tour, on: tourMenu },
      { label: t.m_company, on: companyMenu },
      { label: t.m_inquiry, on: inquiry }
    ]);
  }
  function keyword(text) {
    var t = T[lang()], s = text.toLowerCase();
    if (/소개서|회사|company|profile|perfil|会社|简介|紹介/.test(s)) return companyMenu();
    if (/문의|contact|메일|mail|问|問|inquir|consulta/.test(s)) return inquiry();
    if (/구경|둘러|tour|기능|feature|office|직원|逛|見|案内|恐/.test(s)) return tourMenu();
    if (/고마|감사|thank|thx|ありがと|感謝|谢谢|謝謝|gracias/.test(s)) { say(t.thanks); return quickMenu(); }
    if (/안녕|하이|헬로|반가|하잉|여보세요|\bhi\b|\bhey\b|hello|こんにち|おはよ|こんばん|やあ|你好|您好|哈囉|hola|buenas|buenos/.test(s)) { say(t.greet); return quickMenu(); }
    say(t.fallback);
    quickMenu();
  }

  function build() {
    root = el('div'); document.body.appendChild(root);
    var st = el('style'); st.textContent = CSS; document.head.appendChild(st);

    fab = el('button', 'bchat-fab');
    fab.setAttribute('aria-label', T[lang()].open);
    fab.innerHTML = '<img src="' + av + '" alt="Blue"><span class="dot"></span>';
    root.appendChild(fab);

    panel = el('div', 'bchat-panel');
    var head = el('div', 'bchat-head');
    head.innerHTML = '<img src="' + av + '" alt="Blue"><div><div class="nm"></div><div class="st"></div></div>' +
      '<button class="x" aria-label="' + esc(T[lang()].close) + '">✕</button>';
    panel.appendChild(head);
    body = el('div', 'bchat-body');
    panel.appendChild(body);
    root.appendChild(panel);

    head.querySelector('.nm').textContent = T[lang()].title;
    head.querySelector('.st').textContent = T[lang()].status;
    head.querySelector('.x').addEventListener('click', close);

    // 하단 자유입력
    var inp = el('form', 'bchat-form'); inp.style.margin = '0'; inp.style.padding = '10px 12px';
    inp.style.borderTop = '1.5px dashed var(--stitch,#9A7B4F)'; inp.style.maxWidth = 'none'; inp.style.flex = 'none';
    inp.innerHTML = '<div style="display:flex;gap:8px"><input name="q" placeholder="…" style="flex:1" aria-label="message">' +
      '<button class="send" type="submit" style="border-radius:10px;padding:9px 14px">↵</button></div>';
    inp.addEventListener('submit', function (e) { e.preventDefault(); var v = inp.q.value.trim(); if (!v) return; me(v); inp.q.value = ''; keyword(v); });
    panel.appendChild(inp);

    fab.addEventListener('click', function () { opened ? close() : open(); });

    // 최초 방문 넛지 (1회)
    var seen; try { seen = localStorage.getItem('tx-blue-nudge'); } catch (e) {}
    if (!seen) {
      nudge = el('div', 'bchat-nudge', esc(T[lang()].nudge));
      root.appendChild(nudge);
      setTimeout(function () { nudge && nudge.classList.add('in'); }, 3500);
      setTimeout(function () { if (nudge) { nudge.classList.remove('in'); setTimeout(function(){ nudge && nudge.remove(); }, 400); } }, 12000);
      try { localStorage.setItem('tx-blue-nudge', '1'); } catch (e) {}
    }
  }

  function open() {
    opened = true; panel.classList.add('open');
    if (nudge) { nudge.classList.remove('in'); }
    if (!body.childNodes.length) mainMenu();
    window.txEvent && window.txEvent('blue_open', {});
  }
  function close() { opened = false; panel.classList.remove('open'); }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();
})();
