(function(){
  var html=document.documentElement;
  html.classList.add('js');
  function ready(fn){document.readyState!=='loading'?fn():document.addEventListener('DOMContentLoaded',fn)}
  ready(function(){
    var header=document.getElementById('mgHeader'),drawer=document.getElementById('mgDrawer');
    var burger=document.querySelector('.mg-burger'),top=document.querySelector('.mg-quick__top');
    var forceSolid=header&&header.hasAttribute('data-solid');
    function onScroll(){
      var y=window.scrollY||window.pageYOffset;
      if(header)header.classList.toggle('is-solid',forceSolid||y>20);
      if(top)top.classList.toggle('is-show',y>600);
    }
    onScroll();window.addEventListener('scroll',onScroll,{passive:true});
    if(burger)burger.addEventListener('click',function(){
      var open=!drawer.classList.contains('is-open');
      drawer.classList.toggle('is-open',open);header.classList.toggle('is-open',open);
      document.body.classList.toggle('mg-lock',open);
      burger.setAttribute('aria-expanded',open);burger.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기');
    });
    document.querySelectorAll('.mg-drawer__list>li>button').forEach(function(b){
      b.addEventListener('click',function(){b.parentNode.classList.toggle('is-open')});
    });
    if(top)top.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});

    // 나타나는 효과
    var els=document.querySelectorAll('.rv');
    if('IntersectionObserver' in window){
      var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px',threshold:.08});
      els.forEach(function(el){io.observe(el)});
    }else els.forEach(function(el){el.classList.add('is-in')});

    // 첫 화면 슬라이드
    var hero=document.querySelector('.mg-hero');
    if(hero){
      var slides=hero.querySelectorAll('.mg-hero__slide'),items=hero.querySelectorAll('.mg-hero__item'),bars=hero.querySelectorAll('.mg-hero__bars button'),num=hero.querySelector('.mg-hero__num b');
      var cur=0,timer;
      function go(n){
        cur=(n+slides.length)%slides.length;
        [slides,items,bars].forEach(function(list){list.forEach(function(el,i){el.classList.toggle('is-on',i===cur)})});
        bars.forEach(function(b){var c=b.cloneNode(true);b.parentNode.replaceChild(c,b)});
        bars=hero.querySelectorAll('.mg-hero__bars button');
        bars.forEach(function(b,i){b.classList.toggle('is-on',i===cur);b.onclick=function(){go(i);restart()}});
        if(num)num.textContent='0'+(cur+1);
      }
      function restart(){clearInterval(timer);timer=setInterval(function(){go(cur+1)},6500)}
      go(0);restart();
    }
  });
})();
