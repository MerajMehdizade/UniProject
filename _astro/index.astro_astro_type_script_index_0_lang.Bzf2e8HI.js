document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("mobile-menu"),e=document.getElementById("overlay"),n=document.querySelector(".menu-mobile");function o(){t.classList.remove("translate-x-full"),e.classList.remove("hidden"),e.classList.add("opacity-100")}function s(){t.classList.add("translate-x-full"),e.classList.add("hidden"),e.classList.remove("opacity-100")}n.addEventListener("click",o),e.addEventListener("click",s)});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".quantity-container").forEach(t=>{const e=t.querySelector("input[type='number']"),n=t.querySelector("button[data-action='increment']"),o=t.querySelector("button[data-action='decrement']");n.addEventListener("click",function(){let s=parseInt(e.value,10);e.value=s+1}),o.addEventListener("click",function(){let s=parseInt(e.value,10);s>1&&(e.value=s-1)})})});if(document.getElementById("mobile-filter")){let o=function(){t.classList.remove("translate-y-full")},s=function(){t.classList.add("translate-y-full")};var b=o,B=s;const t=document.getElementById("mobile-filter"),e=document.querySelector(".filter-mobile"),n=document.getElementById("closeFilter");e.addEventListener("click",o),n.addEventListener("click",s)}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".menu-toggle").forEach(e=>{e.addEventListener("click",function(){const n=this.nextElementSibling,o=this.querySelector("img");n.classList.contains("hidden")?(n.classList.remove("hidden"),o.classList.add("rotate-180")):(n.classList.add("hidden"),o.classList.remove("rotate-180"))})})});window.addEventListener("scroll",function(){if(document.getElementById("btn-back-to-top")){let t=document.getElementById("btn-back-to-top");window.scrollY>200?t.style.display="flex":t.style.display="none"}});document.getElementById("btn-back-to-top")&&document.getElementById("btn-back-to-top").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});document.getElementById("btn-back-to-top")&&(document.getElementById("btn-back-to-top").style.display="none");const i=[...document.querySelectorAll("input.code-input")];i&&i.forEach((t,e)=>{t.addEventListener("keydown",n=>{n.keyCode===8&&n.target.value===""&&i[Math.max(0,e-1)].focus()}),t.addEventListener("input",n=>{const[o,...s]=n.target.value;n.target.value=o??"";const u=e===i.length-1;o!==void 0&&!u&&(i[e+1].focus(),i[e+1].value=s.join(""),i[e+1].dispatchEvent(new Event("input")))})});const v={electronics:["فرز الماسی مانی","فرز الماسی مانی","فرز الماسی مانی","فرز الماسی مانی","فرز الماسی مانی","فرز الماسی مانی","فرز الماسی مانی","فرز الماسی مانی"],clothing:["فرز الماسی مانی","فرز الماسی مانی"],books:["فرز الماسی مانی","فرز الماسی مانی","فرز الماسی مانی","فرز الماسی مانی","فرز الماسی مانی","فرز الماسی مانی"],sports:["فرز الماسی مانی","فرز الماسی مانی","فرز الماسی مانی","فرز الماسی مانی","فرز الماسی مانی","فرز الماسی مانی"],beauty:["فرز الماسی مانی","فرز الماسی مانی","فرز الماسی مانی","فرز الماسی مانی","فرز الماسی مانی","فرز الماسی مانی"]},g=document.getElementById("productList"),m=document.querySelectorAll(".category-btn");m.forEach(t=>{t.addEventListener("click",()=>{const e=t.dataset.category,n=v[e]||[];g.innerHTML=n.map(o=>`<div class="card swiper-slide bg-white border border-zinc-200 rounded-2xl p-2 md:p-3 text-sm hover:shadow-custom transition-shadow">
      <a href="" class="text-zinc-800">
        <img class="rounded-xl mb-3" src="./assets/image/products/1.webp">
      </a>
      <p class="text-zinc-400 text-xs">
        Lap Top Lenovo Laser 107W
      </p>
      <a href="" class="text-zinc-800 text-xs md:text-sm h-8 lg:h-10 line-clamp-2 mt-2">
        لپ تاپ لنوو تک رنگ مدل Laser 107W اصلی
      </a>
      <div class="flex items-center justify-between mt-4">
        <div class="flex gap-1.5">
          <div class="size-4 bg-zinc-800 rounded-full"></div>
          <div class="size-4 bg-zinc-500 rounded-full"></div>
          <div class="size-4 bg-zinc-300 rounded-full"></div>
        </div>
        <div class="flex items-start gap-x-1 text-xs text-zinc-500">
          <span>
            <span>
              (72)
            </span>
            <span>
              4.4
            </span>
          </span>
          <svg class="fill-primary-500" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#f9bc00" viewBox="0 0 256 256"><path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path></svg>
        </div>
      </div>
      <div class="flex items-center justify-end border-t border-dashed border-zinc-300 mt-4 pt-2">
        <div class="text-zinc-800 flex items-center gap-x-1 justify-end font-yekanBakhBold text-lg">
          1,270,000
          <img class="size-4" src="./assets/image/icons/toman.png" alt="">
        </div>
      </div>
    </div>`).join(""),m.forEach(o=>o.classList.remove("bg-zinc-100","text-primary-500")),t.classList.add("bg-zinc-100","text-primary-500")})});m[0]&&m[0].click();const c=document.getElementById("mainImage"),l=document.getElementById("zoomBox"),r=document.getElementById("zoomLens");function L(){return window.innerWidth<=768}c&&c.addEventListener("mousemove",function(t){if(L())return;const{left:e,top:n,width:o,height:s}=c.getBoundingClientRect(),u=t.clientX-e,p=t.clientY-n,a=80,f=Math.max(0,Math.min(u-a/2,o-a)),y=Math.max(0,Math.min(p-a/2,s-a));r.style.left=`${f}px`,r.style.top=`${y}px`;const d=2;l.style.backgroundImage=`url(${c.src})`,l.style.backgroundSize=`${o*d}px ${s*d}px`,l.style.backgroundPosition=`-${f*d}px -${y*d}px`,r.classList.remove("hidden"),l.classList.remove("hidden")});c&&c.addEventListener("mouseleave",function(){r.classList.add("hidden"),l.classList.add("hidden")});let h=document.querySelectorAll("#shop-price-slider"),x=document.querySelectorAll("#shop-price-slider-min"),E=document.querySelectorAll("#shop-price-slider-max");h.forEach(t=>{noUiSlider.create(t,{cssPrefix:"range-slider-",start:[0,1e8],direction:"rtl",margin:1,connect:!0,range:{min:0,max:1e7},format:{to:function(e){return e.toLocaleString("en-US",{style:"decimal",maximumFractionDigits:0})},from:function(e){return parseFloat(e.replace(/,/g,""))}}}),t.noUiSlider.on("update",function(e,n){n?E.forEach(o=>{o.innerHTML=e[n]}):x.forEach(o=>{o.innerHTML=e[n]})})});document.querySelectorAll(".open-modal").forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("data-modal"),n=document.getElementById(e),o=n.querySelector(".modal-box");n.classList.remove("hidden"),setTimeout(()=>{n.classList.add("opacity-100"),o.classList.remove("opacity-0","scale-90")},10)})});document.querySelectorAll(".close-modal").forEach(t=>{t.addEventListener("click",()=>{const e=t.closest(".modal"),n=e.querySelector(".modal-box");e.classList.remove("opacity-100"),n.classList.add("opacity-0","scale-90"),setTimeout(()=>e.classList.add("hidden"),300)})});document.querySelectorAll(".modal").forEach(t=>{t.addEventListener("click",e=>{if(e.target===t){const n=t.querySelector(".modal-box");t.classList.remove("opacity-100"),n.classList.add("opacity-0","scale-90"),setTimeout(()=>t.classList.add("hidden"),300)}})});window.onload=function(){alert(`📌 نکات گزارش‌ها:

در 24 مهر: گزارش اول - تکمیل کردن header
در 28 مهر: گزارش دوم - اضافه کردن footer و sliderSwiper`)};
