/* ===== 텍스토피아 공용 스크립트 ===== */
window.TX_SUPABASE = {
  url: 'https://hoqbklxewyziancqpdwv.supabase.co',
  key: 'sb_publishable_Nctbwra5wJWT9J1JeSt_WA_6kEd2y6e'
};
window.TX_WEB3_KEY = '05136de2-e511-4a03-a64b-a7f26f05d6a9'; // web3forms 공개 키(문의 폼·챗봇 공용) · hello@textopia.world
(function(){
  // ----- 테마 -----
  var saved = localStorage.getItem('tx-theme');
  var sysDark = matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.dataset.theme = saved || (sysDark ? 'dark' : 'light');
  window.toggleTheme = function(){
    var next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('tx-theme', next);
    document.querySelectorAll('.theme-toggle').forEach(function(b){ b.textContent = next === 'dark' ? '☀' : '☾'; });
  };
  addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.theme-toggle').forEach(function(b){
      b.textContent = document.documentElement.dataset.theme === 'dark' ? '☀' : '☾';
      b.addEventListener('click', window.toggleTheme);
    });
    var nav = document.querySelector('.bottom-nav');
    if (nav){
      if (!nav.querySelector('a[href="imagebook.html"]')){
        var _ib=document.createElement('a'); _ib.href='imagebook.html';
        _ib.innerHTML='<span class="ico">🖼️</span><span>'+((window.txT&&window.txT('common.nav.imagebook'))||'아트북')+'</span>';
        var _cta=nav.querySelector('.cta');
        if(_cta&&_cta.nextSibling){ nav.insertBefore(_ib,_cta.nextSibling); } else { nav.appendChild(_ib); }
      }
      // 옷의 기억(이서의 리딩) — 히어로 기능, 무료1화 바로 옆에 노출
      if (!nav.querySelector('a[href="reading.html"]')){
        var _rd=document.createElement('a'); _rd.href='reading.html';
        _rd.innerHTML='<span class="ico">🧶</span><span style="white-space:nowrap">'+((window.txT&&window.txT('common.nav.reading'))||'옷의 기억')+'</span>';
        if(location.pathname.replace(/^\//,'').indexOf('reading')===0) _rd.className='active';
        var _cta2=nav.querySelector('.cta');
        if(_cta2&&_cta2.nextSibling){ nav.insertBefore(_rd,_cta2.nextSibling); } else { nav.appendChild(_rd); }
      }
      var last = scrollY;
      addEventListener('scroll', function(){
        nav.classList.toggle('hide', scrollY > last && scrollY > 140);
        last = scrollY;
      }, {passive:true});
    }
    var io = new IntersectionObserver(function(es){ es.forEach(function(e){
      if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    }); }, {threshold:.12});
    document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });

    // ----- 푸터 '둘러보기' 열을 위계 순서로 재구성 (전 페이지 공용) -----
    var exH = document.querySelector('footer [data-i18n="common.footer.exploreH"]');
    if (exH && exH.parentNode && !exH.parentNode.dataset.txRebuilt){
      var pdiv = exH.parentNode; pdiv.dataset.txRebuilt = '1';
      var _lang = (''+(window.txLang||document.documentElement.lang||'ko')).slice(0,2);
      if (['ko','en','ja','zh','es'].indexOf(_lang) < 0) _lang = 'en';
      while (exH.nextSibling) pdiv.removeChild(exH.nextSibling);   // 기존 링크 정리
      var FI = [
        ['read.html',    {ko:'무료 1화',en:'Free Chapter 1',ja:'無料1話',zh:'免费第1话',es:'Cap. 1 gratis'}],
        ['reading.html', {ko:'옷의 기억 · 리딩',en:'Memories in Cloth',ja:'服の記憶 · リーディング',zh:'衣物的记忆',es:'Recuerdos en la tela'}],
        ['wall.html',    {ko:'기억의 벽',en:'Wall of Memories',ja:'記憶の壁',zh:'记忆之墙',es:'Muro de recuerdos'}],
        ['room.html',    {ko:'이서의 방',en:'Iseo’s Atelier',ja:'イソの部屋',zh:'李绪的房间',es:'El taller de Iseo'}],
        ['world.html',   {ko:'세계관',en:'The World',ja:'世界観',zh:'世界观',es:'El mundo'}],
        ['manifesto.html',{ko:'옷의 기억을 잇다 · 약속',en:'Our Promise',ja:'服の記憶をつなぐ · 約束',zh:'延续衣物的记忆 · 承诺',es:'Nuestra promesa'}],
        ['store.html',   {ko:'스토어',en:'Store',ja:'ストア',zh:'商店',es:'Tienda'}]
      ];
      FI.forEach(function(it){ pdiv.appendChild(document.createElement('br')); var a=document.createElement('a'); a.className='stitch-link'; a.href=it[0]; a.textContent=(it[1][_lang]||it[1].en); pdiv.appendChild(a); });
    }
  });

  // ----- 이벤트 로깅 -----
  window.txEvent = function(type, meta){
    try{
      console.log('[tx-event]', type, meta||{});
      if (window.TX_SUPABASE){
        fetch(window.TX_SUPABASE.url + '/rest/v1/textopia_events', {
          method:'POST',
          headers:{'Content-Type':'application/json','apikey':window.TX_SUPABASE.key,'Authorization':'Bearer '+window.TX_SUPABASE.key,'Prefer':'return=minimal'},
          body: JSON.stringify({type:type, meta:meta||{}, path:location.pathname})
        }).catch(function(){});
      }
    }catch(e){}
  };

  // ----- 뉴스레터 구독 -----
  window.txSubscribe = function(form){
    var T = window.txT || function(){ return null; };
    function t(key, ko){ var v = T(key); return (v==null) ? ko : v; }
    var input = form.querySelector('input[type=email]');
    var msg = form.querySelector('.form-msg');
    var email = (input.value||'').trim();
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){
      msg.textContent = t('common.news.errFormat','이메일 형식이 아니에요'); msg.className = 'form-msg err'; return false;
    }
    var subLabel = t('common.news.subscribe','구독');
    var btn = form.querySelector('button');
    btn.disabled = true; btn.textContent = '…';
    fetch(window.TX_SUPABASE.url + '/rest/v1/textopia_subscribers', {
      method:'POST',
      headers:{'Content-Type':'application/json','apikey':window.TX_SUPABASE.key,'Authorization':'Bearer '+window.TX_SUPABASE.key,'Prefer':'return=minimal'},
      body: JSON.stringify({email:email})
    }).then(function(r){
      if (r.status === 409){ msg.textContent = t('common.news.already','이미 함께하고 있어요'); msg.className='form-msg ok'; btn.textContent=subLabel; btn.disabled=false; return; }
      if (!r.ok && r.status !== 201) throw new Error('req');
      window.txEvent('sub_pending', {});
      msg.textContent = t('common.news.ok','실이 이어졌어요. 좋은 소식이 있을 때만, 조심스럽게 찾아갈게요.');
      msg.className = 'form-msg ok';
      input.value=''; btn.textContent = t('common.news.done','완료');
    }).catch(function(e){
      msg.textContent = t('common.news.fail','실이 잠시 끊겼어요. 잠시 후 다시 시도해 주세요.'); msg.className='form-msg err';
      btn.textContent=subLabel; btn.disabled=false;
    });
    return false;
  };
})();

/* ----- 햄버거 드로어 (전 페이지 공용 주입) ----- */
(function(){
  addEventListener('DOMContentLoaded', function(){
    var right = document.querySelector('.gnb-right');
    if (!right || document.querySelector('.drawer')) return;
    var T = window.txT || function(k){ return null; };
    function t(key, ko){ var v = T(key); return (v==null) ? ko : v; }
    var btn = document.createElement('button');
    btn.className = 'menu-btn'; btn.setAttribute('aria-label', t('common.drawer.menuOpen','메뉴 열기'));
    btn.innerHTML = '<i></i><i></i><i></i>';
    right.appendChild(btn);
    var ovl = document.createElement('div'); ovl.className = 'drawer-ovl';
    var dr = document.createElement('nav'); dr.className = 'drawer';
    var dl=((window.txLang||document.documentElement.lang||'ko')+'').slice(0,2); if(['ko','en','ja','zh','es'].indexOf(dl)<0) dl='en';
    function sl(m){ return '<div class="d-sec" style="padding:20px 20px 2px;font-size:10.5px;letter-spacing:.16em;font-weight:800;text-transform:uppercase;color:var(--ink-soft,#9a8f86);opacity:.72">'+(m[dl]||m.en)+'</div>'; }
    function L(m){ return m[dl]||m.en; }
    var authed=false; try{ for(var _i=0;_i<localStorage.length;_i++){ var _k=localStorage.key(_i); if(/^sb-.*-auth-token$/.test(_k)&&localStorage.getItem(_k)){ authed=true; break; } } }catch(e){}
    var mfLabel={ko:'옷의 기억을 잇다 · 약속',en:'Our Promise',ja:'服の記憶をつなぐ · 約束',zh:'延续衣物的记忆 · 承诺',es:'Nuestra promesa'};
    dr.innerHTML = '<div class="d-head"><b>'+t('common.drawer.brand','텍스토피아')+'</b><button class="d-close" aria-label="'+t('common.drawer.close','닫기')+'">✕</button></div>'
      + '<a class="d-link" href="index.html">'+t('common.drawer.home','홈')+'</a>'
      + sl({ko:'읽기',en:'Read',ja:'読む',zh:'阅读',es:'Leer'})
      + '<a class="d-link hot" href="read.html">'+t('common.drawer.read','무료 1화 읽기')+'</a>'
      + '<a class="d-link" href="book.html">'+t('common.drawer.book','작품 소개')+'</a>'
      + '<a class="d-link" href="store.html">'+t('common.drawer.store','스토어')+'</a>'
      + sl({ko:'경험',en:'Experience',ja:'体験',zh:'体验',es:'Experiencia'})
      + '<a class="d-link hot" href="reading.html">'+L({ko:'옷의 기억 · 이서의 리딩',en:'Memories in Cloth · Reading',ja:'服の記憶 · イソのリーディング',zh:'衣物的记忆 · 解读',es:'Recuerdos en la tela'})+'<span class="d-badge">NEW</span></a>'
      + '<a class="d-link" href="wall.html">'+L({ko:'기억의 벽',en:'Wall of Memories',ja:'記憶の壁',zh:'记忆之墙',es:'Muro de recuerdos'})+'</a>'
      + '<a class="d-link" href="room.html">'+L({ko:'이서의 방 둘러보기',en:'Iseo’s Atelier',ja:'イソの部屋をめぐる',zh:'游览李绪的房间',es:'El taller de Iseo'})+'</a>'
      + '<a class="d-link hot" href="quiz.html">'+t('common.drawer.quiz','나의 파트너 옷 찾기')+'</a>'
      + sl({ko:'세계와 브랜드',en:'World & Brand',ja:'世界とブランド',zh:'世界与品牌',es:'Mundo y marca'})
      + '<a class="d-link" href="world.html">'+t('common.drawer.world','세계관 · 대륙 지도')+'</a>'
      + '<a class="d-link" href="imagebook.html">'+L({ko:'아트북',en:'Art Book',ja:'アートブック',zh:'画册',es:'Libro de arte'})+'</a>'
      + '<a class="d-link" href="manifesto.html">'+(mfLabel[dl]||mfLabel.en)+'</a>'
      + '<a class="d-link" href="book.html#about">'+t('common.drawer.about','우리 이야기')+'</a>'
      + '<a class="d-link" href="book.html#news">'+L({ko:'소식',en:'News',ja:'お知らせ',zh:'消息',es:'Novedades'})+'</a>'
      + sl({ko:'스튜디오',en:'Studio',ja:'スタジオ',zh:'工作室',es:'Estudio'})
      + '<a class="d-link" href="studio.html">'+L({ko:'회사 소개',en:'About',ja:'会社紹介',zh:'关于',es:'Nosotros'})+'</a>'
      + '<a class="d-link" href="brand.html">'+L({ko:'브랜드',en:'Brand',ja:'ブランド',zh:'品牌',es:'Marca'})+'</a>'
      + '<a class="d-link" href="press.html">'+L({ko:'프레스',en:'Press',ja:'プレス',zh:'新闻',es:'Prensa'})+'</a>'
      + '<a class="d-link" href="contact.html">'+L({ko:'문의',en:'Contact',ja:'お問い合わせ',zh:'联系我们',es:'Contacto'})+'</a>'
      + sl({ko:'계정',en:'Account',ja:'アカウント',zh:'账户',es:'Cuenta'})
      + (authed ? '<a class="d-link" href="welcome.html">'+t('common.drawer.mythread','나의 실 · 프로필')+'</a>'
                : '<a class="d-link hot" href="login.html">'+(function(){var m={ko:'관문 · 로그인',en:'Enter · Sign in',ja:'関門 · ログイン',zh:'入口 · 登录',es:'Entrar · Acceder'};return m[dl]||m.en;})()+'</a>')
      + '<div class="d-theme"><span>'+t('common.drawer.theme','화면 모드')+'</span><button class="theme-toggle" aria-label="테마 전환" style="display:block">☾</button></div>'
      + '<div class="d-legal"><a class="stitch-link" href="terms.html">'+t('common.drawer.terms','이용약관')+'</a> · <a class="stitch-link" href="privacy.html">'+t('common.drawer.privacy','개인정보처리방침')+'</a></div>';
    document.body.appendChild(ovl); document.body.appendChild(dr);
    function open(){ document.body.classList.add('drawer-open'); }
    function close(){ document.body.classList.remove('drawer-open'); }
    btn.addEventListener('click', open);
    ovl.addEventListener('click', close);
    dr.querySelector('.d-close').addEventListener('click', close);
    var tt = dr.querySelector('.theme-toggle');
    tt.textContent = document.documentElement.dataset.theme === 'dark' ? '☀' : '☾';
    tt.addEventListener('click', window.toggleTheme);
  });
})();

/* ----- '블루' 안내 위젯 로더 (전 페이지 공용) ----- */
(function(){
  if (window.__blueChatLoaded) return;
  var s = document.createElement('script');
  s.src = 'assets/blue-chat.js?v=1'; s.defer = true;
  document.head.appendChild(s);
})();
