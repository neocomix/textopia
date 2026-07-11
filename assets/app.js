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
    var input = form.querySelector('input[type=email]');
    var msg = form.querySelector('.form-msg');
    var email = (input.value||'').trim();
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){
      msg.textContent = '이메일 형식이 아니에요'; msg.className = 'form-msg err'; return false;
    }
    var btn = form.querySelector('button');
    btn.disabled = true; btn.textContent = '…';
    fetch(window.TX_SUPABASE.url + '/rest/v1/textopia_subscribers', {
      method:'POST',
      headers:{'Content-Type':'application/json','apikey':window.TX_SUPABASE.key,'Authorization':'Bearer '+window.TX_SUPABASE.key,'Prefer':'return=minimal'},
      body: JSON.stringify({email:email})
    }).then(function(r){
      if (r.status === 409){ msg.textContent = '이미 함께하고 있어요'; msg.className='form-msg ok'; btn.textContent='구독'; btn.disabled=false; return; }
      if (!r.ok && r.status !== 201) throw new Error('req');
      window.txEvent('sub_pending', {});
      msg.textContent = '실이 이어졌어요. 좋은 소식이 있을 때만, 조심스럽게 찾아갈게요.';
      msg.className = 'form-msg ok';
      input.value=''; btn.textContent='완료';
    }).catch(function(e){
      msg.textContent = '실이 잠시 끊겼어요. 잠시 후 다시 시도해 주세요.'; msg.className='form-msg err';
      btn.textContent='구독'; btn.disabled=false;
    });
    return false;
  };
})();
