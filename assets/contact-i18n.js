/* ===== 텍스토피아 · 문의 페이지 다국어(contact-i18n.js) =====
   i18n.js 다음에 로드. window.I18N[lang].contact 에 문구를 얹는다.
   페이지의 data-i18n="contact.*" 로 연결. */
(function () {
  window.I18N = window.I18N || {};
  var C = {
    ko: {
      meta: {
        title: '문의하기 — 텍스토피아 · 오르션',
        desc: '텍스토피아 IP 협업·라이선스·브랜드 콜라보 문의. 웹툰·영상화·굿즈·글로벌 출간 제안을 기다립니다.'
      },
      nav: '문의',
      hero: {
        kicker: 'GET IN TOUCH',
        title: '함께 이야기를 짓고 싶다면',
        sub: '협업 · 라이선스 · 브랜드 콜라보 · 글로벌 출간.\n어떤 이야기든, 편하게 남겨 주세요. 사람이 직접 읽고 답장합니다.'
      },
      cards: {
        c1t: '웹툰 · 영상화', c1d: '완결 원고·설정집·캐릭터·지도 기반 2차 저작.',
        c2t: '브랜드 콜라보', c2d: '업사이클·패션·리빙·ESG 브랜드 굿즈·캠페인.',
        c3t: 'IP 라이선스 · 굿즈', c3d: '캐릭터·세계관 활용 라이선싱과 굿즈 소싱.',
        c4t: '글로벌 출간', c4d: 'AI 번역 초벌 기반 다국어 전자책 동시 확장.'
      },
      form: {
        h2: '문의 남기기',
        name: '이름 / 회사',
        namePh: '홍길동 · (주)회사명',
        email: '이메일',
        emailPh: 'you@company.com',
        type: '문의 유형',
        topics: ['협업 · 라이선스', '웹툰 · 영상화', '브랜드 콜라보', '글로벌 출간', '기타 문의'],
        msg: '문의 내용',
        msgPh: '어떤 이야기를 함께 짓고 싶으신가요? 편하게 적어 주세요.',
        send: '문의 보내기',
        sending: '보내는 중…',
        note: '보내주신 내용은 hello@textopia.world 로 전달됩니다. 답장은 사람이 직접 씁니다.',
        or: '또는 바로 메일 보내기'
      },
      ok: {
        h2: '실이 이어졌어요.',
        body: '문의가 접수됐습니다. 사람이 직접 읽고, 보내주신 언어로 답장 드릴게요.',
        again: '문의 하나 더 남기기'
      },
      err: {
        name: '이름을 알려 주세요.',
        email: '이메일 형식이 올바르지 않아요.',
        msg: '문의 내용을 적어 주세요.',
        fail: '실이 잠시 엉켰어요. 잠시 후 다시 시도해 주세요.'
      }
    },
    en: {
      meta: {
        title: 'Contact — Textopia · Aurcean',
        desc: 'Partner with the Textopia IP. Webtoon & screen adaptation, brand collabs, licensing, global publishing — we’d love to hear from you.'
      },
      nav: 'Contact',
      hero: {
        kicker: 'GET IN TOUCH',
        title: 'Let’s build a story together',
        sub: 'Collaboration · licensing · brand collabs · global publishing.\nWhatever the idea, drop us a line. A real person reads and replies.'
      },
      cards: {
        c1t: 'Webtoon & Screen', c1d: 'Adaptations from the finished manuscript, lore, characters and map.',
        c2t: 'Brand Collabs', c2d: 'Goods & campaigns with upcycle, fashion, living and ESG brands.',
        c3t: 'IP Licensing & Goods', c3d: 'Licensing the characters and world, plus goods sourcing.',
        c4t: 'Global Publishing', c4d: 'Simultaneous multilingual e-book expansion on AI-drafted translation.'
      },
      form: {
        h2: 'Send us a message',
        name: 'Name / Company',
        namePh: 'Your name · Company',
        email: 'Email',
        emailPh: 'you@company.com',
        type: 'Inquiry type',
        topics: ['Collaboration & licensing', 'Webtoon & screen', 'Brand collab', 'Global publishing', 'Other'],
        msg: 'Your message',
        msgPh: 'What kind of story would you like to build with us?',
        send: 'Send message',
        sending: 'Sending…',
        note: 'Your message goes to hello@textopia.world. A real person writes back.',
        or: 'Or email us directly'
      },
      ok: {
        h2: 'The thread is tied.',
        body: 'We’ve got your message. A real person will read it and reply in your language.',
        again: 'Send another message'
      },
      err: {
        name: 'Please tell us your name.',
        email: 'That doesn’t look like a valid email.',
        msg: 'Please write your message.',
        fail: 'The thread tangled for a moment. Please try again shortly.'
      }
    },
    ja: {
      meta: {
        title: 'お問い合わせ — テクストピア · オルシオン',
        desc: 'テクストピアIPのコラボ・ライセンス・ブランド協業のお問い合わせ。ウェブトゥーン・映像化・グッズ・グローバル出版のご提案をお待ちしています。'
      },
      nav: 'お問い合わせ',
      hero: {
        kicker: 'GET IN TOUCH',
        title: '一緒に物語を編みたいなら',
        sub: 'コラボ・ライセンス・ブランド協業・グローバル出版。\nどんなお話でも、気軽にお寄せください。人が直接読んで返信します。'
      },
      cards: {
        c1t: 'ウェブトゥーン・映像化', c1d: '完結原稿・設定資料・キャラクター・地図をもとにした二次創作。',
        c2t: 'ブランド協業', c2d: 'アップサイクル・ファッション・リビング・ESGブランドのグッズ・キャンペーン。',
        c3t: 'IPライセンス・グッズ', c3d: 'キャラクター・世界観のライセンスとグッズソーシング。',
        c4t: 'グローバル出版', c4d: 'AI翻訳の下訳をもとにした多言語電子書籍の同時展開。'
      },
      form: {
        h2: 'メッセージを送る',
        name: 'お名前 / 会社',
        namePh: 'お名前 · 会社名',
        email: 'メール',
        emailPh: 'you@company.com',
        type: 'お問い合わせ種別',
        topics: ['コラボ・ライセンス', 'ウェブトゥーン・映像化', 'ブランド協業', 'グローバル出版', 'その他'],
        msg: 'お問い合わせ内容',
        msgPh: 'どんな物語を一緒に編みたいですか? お気軽にどうぞ。',
        send: '送信する',
        sending: '送信中…',
        note: 'いただいた内容は hello@textopia.world に届きます。返信は人が直接書きます。',
        or: 'または直接メールする'
      },
      ok: {
        h2: '糸がつながりました。',
        body: 'お問い合わせを受け取りました。人が直接読み、いただいた言語で返信します。',
        again: 'もう一件送る'
      },
      err: {
        name: 'お名前を教えてください。',
        email: 'メール形式が正しくありません。',
        msg: 'お問い合わせ内容を書いてください。',
        fail: '糸が少し絡まりました。しばらくして再度お試しください。'
      }
    },
    zh: {
      meta: {
        title: '联系我们 — TEXTOPIA · Aurcean',
        desc: 'TEXTOPIA IP 合作、授权与品牌联名咨询。欢迎洽谈网漫、影视化、周边与全球出版提案。'
      },
      nav: '联系我们',
      hero: {
        kicker: 'GET IN TOUCH',
        title: '若想一起编织故事',
        sub: '合作 · 授权 · 品牌联名 · 全球出版。\n无论什么想法，都欢迎留言。会有真人亲自阅读并回复。'
      },
      cards: {
        c1t: '网漫 · 影视化', c1d: '基于完结原稿、设定集、角色与地图的二次创作。',
        c2t: '品牌联名', c2d: '与环保再造、时尚、家居、ESG 品牌的周边与活动。',
        c3t: 'IP 授权 · 周边', c3d: '角色与世界观授权，以及周边开发。',
        c4t: '全球出版', c4d: '基于 AI 初译的多语电子书同步拓展。'
      },
      form: {
        h2: '给我们留言',
        name: '姓名 / 公司',
        namePh: '您的姓名 · 公司',
        email: '邮箱',
        emailPh: 'you@company.com',
        type: '咨询类型',
        topics: ['合作 · 授权', '网漫 · 影视化', '品牌联名', '全球出版', '其他'],
        msg: '咨询内容',
        msgPh: '想和我们一起编织怎样的故事? 尽管写下来吧。',
        send: '发送',
        sending: '发送中…',
        note: '您的留言将发送至 hello@textopia.world。回复由真人亲自撰写。',
        or: '或直接发邮件给我们'
      },
      ok: {
        h2: '线，接上了。',
        body: '已收到您的咨询。会有真人亲自阅读，并用您留言的语言回复。',
        again: '再留一条'
      },
      err: {
        name: '请告诉我们您的名字。',
        email: '邮箱格式不正确。',
        msg: '请写下咨询内容。',
        fail: '线暂时缠住了，请稍后再试。'
      }
    },
    es: {
      meta: {
        title: 'Contacto — Textopia · Aurcean',
        desc: 'Colabora con la IP de Textopia. Webtoon y adaptación a pantalla, colaboraciones de marca, licencias y publicación global — escríbenos.'
      },
      nav: 'Contacto',
      hero: {
        kicker: 'GET IN TOUCH',
        title: 'Si quieres tejer una historia con nosotros',
        sub: 'Colaboración · licencias · colaboraciones de marca · publicación global.\nSea cual sea la idea, escríbenos. Una persona real lee y responde.'
      },
      cards: {
        c1t: 'Webtoon y pantalla', c1d: 'Adaptaciones a partir del manuscrito, la guía y los personajes.',
        c2t: 'Colaboraciones de marca', c2d: 'Productos y campañas con marcas de upcycling, moda, hogar y ESG.',
        c3t: 'Licencias de IP y productos', c3d: 'Licencia de personajes y mundo, y desarrollo de productos.',
        c4t: 'Publicación global', c4d: 'Expansión simultánea del e-book multilingüe con traducción asistida por IA.'
      },
      form: {
        h2: 'Envíanos un mensaje',
        name: 'Nombre / Empresa',
        namePh: 'Tu nombre · Empresa',
        email: 'Correo',
        emailPh: 'tu@empresa.com',
        type: 'Tipo de consulta',
        topics: ['Colaboración y licencias', 'Webtoon y pantalla', 'Colaboración de marca', 'Publicación global', 'Otro'],
        msg: 'Tu mensaje',
        msgPh: '¿Qué tipo de historia te gustaría tejer con nosotros?',
        send: 'Enviar mensaje',
        sending: 'Enviando…',
        note: 'Tu mensaje llega a hello@textopia.world. Una persona real te responde.',
        or: 'O escríbenos directamente'
      },
      ok: {
        h2: 'El hilo quedó atado.',
        body: 'Recibimos tu mensaje. Una persona real lo leerá y responderá en tu idioma.',
        again: 'Enviar otro mensaje'
      },
      err: {
        name: 'Dinos tu nombre, por favor.',
        email: 'Eso no parece un correo válido.',
        msg: 'Escribe tu mensaje, por favor.',
        fail: 'El hilo se enredó un momento. Inténtalo de nuevo en un rato.'
      }
    }
  };
  for (var k in C) {
    if (!window.I18N[k]) window.I18N[k] = {};
    window.I18N[k].contact = C[k];
  }
})();
