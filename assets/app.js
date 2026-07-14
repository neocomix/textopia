/* ===== 텍스토피아 공용 스크립트 ===== */
window.TX_SUPABASE = {
  url: 'https://hoqbklxewyziancqpdwv.supabase.co',
  key: 'sb_publishable_Nctbwra5wJWT9J1JeSt_WA_6kEd2y6e'
};
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
    dr.innerHTML = '<div class="d-head"><b>'+t('common.drawer.brand','텍스토피아')+'</b><button class="d-close" aria-label="'+t('common.drawer.close','닫기')+'">✕</button></div>'
      + '<a class="d-link" href="index.html">'+t('common.drawer.home','홈')+'</a>'
      + '<a class="d-link hot" href="read.html">'+t('common.drawer.read','무료 1화 읽기')+'</a>'
      + '<a class="d-link hot" href="quiz.html">'+t('common.drawer.quiz','나의 파트너 옷 찾기')+'<span class="d-badge">NEW</span></a>'
      + '<a class="d-link" href="world.html">'+t('common.drawer.world','세계관 · 대륙 지도')+'</a>'
      + '<a class="d-link" href="book.html">'+t('common.drawer.book','작품 소개')+'</a>'
      + '<a class="d-link" href="store.html">'+t('common.drawer.store','스토어')+'</a>'
      + '<a class="d-link" href="book.html#news">'+t('common.drawer.news','소식')+'</a>'
      + '<a class="d-link" href="book.html#about">'+t('common.drawer.about','우리 이야기')+'</a>'
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
