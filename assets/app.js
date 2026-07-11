/* ===== 텍스토피아 공용 스크립트 ===== */
window.TX_SUPABASE = {
  url: 'https://hoqbklxewyziancqpdwv.supabase.co',
  key: 'sb_publishable_Nctbwra5wJWT9J1JeSt_WA_6kEd2y6e'
};
(function(){
  // ----- 테마 -----
  const saved = localStorage.getItem('tx-theme');
  const sysDark = matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (sysDark ? 'dark' : 'light');
  document.documentElement.dataset.theme = theme;
  window.toggleTheme = function(){
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('tx-theme', next);
    document.querySelectorAll('.theme-toggle').forEach(b => b.textContent = next === 'dark' ? '☀' : '☾');
  };
  addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.theme-toggle').forEach(b => {
      b.textContent = document.documentElement.dataset.theme === 'dark' ? '☀' : '☾';
      b.addEventListener('click', window.toggleTheme);
    });
    // 하단 바: 스크롤 다운 숨김 / 업 표시
    const nav = document.querySelector('.bottom-nav');
    if (nav){
      let last = scrollY;
      addEventListener('scroll', () => {
        nav.classList.toggle('hide', scrollY > last && scrollY > 140);
        last = scrollY;
      }, {passive:true});
    }
    // 등장 애니
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    }), {threshold:.12});
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  });

  // ----- 이벤트 로깅 (v0: 콘솔 + Supabase 연동 시 전송) -----
  window.txEvent = function(type, meta){
    const payload = {type, meta: meta||{}, path: location.pathname, ts: Date.now()};
    console.log('[tx-event]', payload);
    if (window.TX_SUPABASE){
      fetch(window.TX_SUPABASE.url + '/rest/v1/textopia_events', {
        method:'POST',
        headers:{'Content-Type':'application/json','apikey':window.TX_SUPABASE.key,'Authorization':'Bearer '+window.TX_SUPABASE.key,'Prefer':'return=minimal'},
        body: JSON.stringify({type, meta: payload.meta, path: payload.path})
      }).catch(()=>{});
    }
  };

  // ----- 뉴스레터 구독 -----
  window.txSubscribe = async function(form){
    const input = form.querySelector('input[type=email]');
    const msg = form.querySelector('.form-msg');
    const email = (input.value||'').trim();
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){
      msg.textContent = '이메일 형식이 아니에요'; msg.className = 'form-msg err'; return false;
    }
    const btn = form.querySelector('button');
    btn.disabled = true; btn.textContent = '…';
    try{
      if (window.TX_SUPABASE){
        const r = await fetch(window.TX_SUPABASE.url + '/rest/v1/textopia_subscribers', {
          method:'POST',
          headers:{'Content-Type':'application/json','apikey':window.TX_SUPABASE.key,'Authorization':'Bearer '+window.TX_SUPABASE.key,'Prefer':'return=minimal'},
          body: JSON.stringify({email})
        });
        if (r.status === 409){ msg.textContent = '이미 함께하고 있어요'; msg.className='form-msg ok'; btn.textContent='구독'; btn.disabled=false; return false; }
        if (!r.ok && r.status !== 201) throw new Error('req');
      }
      window.txEvent('sub_pending', {});
      msg.textContent = '실이 이어졌어요. 좋은 소식이 있을 때만, 조심스럽게 찾아갈게요.';
      msg.className = 'form-msg ok';
      input.value=''; btn.textContent='완료';
    }catch(e){
      msg.textContent = '실이 잠시 끊겼어요. 잠시 