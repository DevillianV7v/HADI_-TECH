
var opts={
paint:[["Black",'#1a1d24'],["Red",'#d4142c'],["Blue",'#1f55e0'],["Purple",'#8a2be2'],["Gray",'#7a8089']],
amb:[["White",'#f1f4f8'],["Amber",'#ffb347'],["Green",'#4be08f'],["Pink",'#ff5ec8']],
trim:[["Red",'#d4142c'],["Blue",'#2a7bff'],["White",'#e8ecf2'],["Orange",'#ff7a1a']]};
var st={paint:0,amb:0,trim:0,view:"ext"};
var root=document.documentElement.style;
function render(){
 root.setProperty('--paint',opts.paint[st.paint][1]);root.setProperty('--tint',0);document.querySelectorAll('.pi').forEach(function(e,i){e.classList.toggle('on',st.paint===i+1)});document.getElementById('cutimg').style.opacity=st.paint===0?1:0;
 root.setProperty('--amb',opts.amb[st.amb][1]);
 root.setProperty('--trim',opts.trim[st.trim][1]);root.setProperty('--trimop',0);document.querySelectorAll('.li').forEach(function(e,i){e.classList.toggle('on',st.amb===i+1)});document.querySelectorAll('.ti').forEach(function(e,i){e.classList.toggle('on',st.trim===i)});
 ['paint','amb','trim'].forEach(function(k){
  document.querySelectorAll('#g-'+k+' .sw').forEach(function(b,i){b.setAttribute('aria-pressed',i===st[k])});});
 document.querySelectorAll('#g-view button').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.v===st.view)});
 document.getElementById('v-ext').classList.toggle('on',st.view==='ext');
 document.getElementById('v-int').classList.toggle('on',st.view==='int');document.getElementById('grp-amb').hidden=st.view!=='int';document.getElementById('grp-trim').hidden=st.view!=='int';document.getElementById('grp-paint').hidden=st.view==='int';
 var s=opts.paint[st.paint][0]+" paint, "+opts.trim[st.trim][0]+" trim, "+opts.amb[st.amb][0]+" cabin light";
 document.getElementById('sum').textContent="Your Haditech: "+s+".";
 document.getElementById('mail').href="mailto:hello@haditech.example?subject="+encodeURIComponent("Haditech test drive")+"&body="+encodeURIComponent("I would like to test drive: "+s+".");
}
['paint','amb','trim'].forEach(function(k){
 var g=document.getElementById('g-'+k);
 opts[k].forEach(function(o,i){
  var b=document.createElement('button');b.className='sw';b.style.background=o[1];
  b.setAttribute('aria-label',o[0]);b.title=o[0];
  b.onclick=function(){st[k]=i;render()};g.appendChild(b);});});
document.querySelectorAll('#g-view button').forEach(function(b){b.onclick=function(){st.view=b.dataset.v;render()}});
var ci=document.getElementById('cutimg'),tn=document.getElementById('tint');
tn.style.webkitMaskImage=tn.style.maskImage='url('+ci.src+')';tn.style.webkitMaskSize=tn.style.maskSize='contain';tn.style.webkitMaskRepeat=tn.style.maskRepeat='no-repeat';tn.style.webkitMaskPosition=tn.style.maskPosition='center';
document.getElementById('ctacar').src=ci.src;
render();


(function(){
var FR=["frames/frame-001.webp", "frames/frame-002.webp", "frames/frame-003.webp", "frames/frame-004.webp", "frames/frame-005.webp", "frames/frame-006.webp", "frames/frame-007.webp", "frames/frame-008.webp", "frames/frame-009.webp", "frames/frame-010.webp", "frames/frame-011.webp", "frames/frame-012.webp", "frames/frame-013.webp", "frames/frame-014.webp", "frames/frame-015.webp", "frames/frame-016.webp", "frames/frame-017.webp", "frames/frame-018.webp", "frames/frame-019.webp", "frames/frame-020.webp", "frames/frame-021.webp", "frames/frame-022.webp", "frames/frame-023.webp", "frames/frame-024.webp", "frames/frame-025.webp", "frames/frame-026.webp", "frames/frame-027.webp", "frames/frame-028.webp", "frames/frame-029.webp", "frames/frame-030.webp", "frames/frame-031.webp", "frames/frame-032.webp", "frames/frame-033.webp", "frames/frame-034.webp", "frames/frame-035.webp", "frames/frame-036.webp", "frames/frame-037.webp", "frames/frame-038.webp", "frames/frame-039.webp", "frames/frame-040.webp", "frames/frame-041.webp", "frames/frame-042.webp", "frames/frame-043.webp", "frames/frame-044.webp", "frames/frame-045.webp", "frames/frame-046.webp", "frames/frame-047.webp", "frames/frame-048.webp", "frames/frame-049.webp", "frames/frame-050.webp", "frames/frame-051.webp", "frames/frame-052.webp", "frames/frame-053.webp", "frames/frame-054.webp", "frames/frame-055.webp", "frames/frame-056.webp", "frames/frame-057.webp", "frames/frame-058.webp", "frames/frame-059.webp", "frames/frame-060.webp", "frames/frame-061.webp", "frames/frame-062.webp"];
var sc=document.getElementById('scene'),cv=document.getElementById('cv'),cx=cv.getContext('2d'),card=document.getElementById('card'),tt=document.getElementById('tt'),tb=document.getElementById('tb'),bg=document.getElementById('bg'),ring=document.getElementById('ring'),pct=document.getElementById('pct'),t=false,last=-1,N=FR.length;
var im=FR.map(function(u,i){var m=new Image();if(i===0)m.onload=function(){cx.drawImage(m,0,0);last=0};m.src=u;return m});
bg.src=FR[N-1];
function sm(x){x=Math.max(0,Math.min(1,x));return x*x*(3-2*x)}
function cl(x){return Math.max(0,Math.min(1,x))}
function lp(a,b,x){return a+(b-a)*x}
function imm(){var vw=innerWidth,vh=innerHeight,bw=Math.min(vw*.96,vh*.72*1.7333),bh=Math.min(vh*.72,vw*.96/1.7333);return Math.max(vw/bw,vh/bh)*1.04}
function upd(){t=false;
 var r=sc.getBoundingClientRect(),h=sc.offsetHeight-innerHeight,g=cl(-r.top/h),m=cl((g-.15)/.63),
 s0=innerWidth<768?.82:.6,cs,tx,to,off=innerWidth<768?70:60;
 if(g<.15){var x=g/.15;cs=lp(s0,1,1-(1-x)*(1-x));tx=lp(0,off,sm(x));to=1}
 else if(g<.78){var y=(g-.15)/.63;cs=lp(1,imm(),y*y);tx=off;to=1-cl((g-.15)/.22)}
 else{var z=sm((g-.78)/.22);cs=lp(imm(),s0,z);tx=lp(off,0,z);to=z}
 card.style.transform='scale('+cs+')';
 tt.style.transform='translateX('+(-tx)+'vw)';tb.style.transform='translateX('+tx+'vw)';tt.style.opacity=tb.style.opacity=to;
 var i=Math.min(N-1,Math.floor(m*N));
 if(i!==last&&im[i].complete&&im[i].naturalWidth){cx.drawImage(im[i],0,0);last=i}
 bg.style.opacity=sm((m-.8)/.2)*(g<.78?1:1-sm((g-.78)/.22)*.6);
 ring.style.strokeDashoffset=119.4*(1-g);pct.textContent=Math.round(g*100)+'%';
}
function q(){if(!t){t=true;requestAnimationFrame(upd)}}
addEventListener('scroll',q,{passive:true});addEventListener('resize',q);upd();
})();
