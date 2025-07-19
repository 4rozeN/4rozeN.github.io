function copyURL(){navigator.clipboard.writeText(location.href).then(()=>alert("已复制链接"))}function copyText(t){navigator.clipboard.writeText(t).then(()=>alert("已复制文本"))}function toggleTheme(){var t=document.documentElement,e=t.getAttribute("data-theme");t.setAttribute("data-theme","dark"===e?"light":"dark")}function toggleZhConvert(){"undefined"!=typeof ZhConverter&&ZhConverter.convert()}function scrollToComment(){var t=document.querySelector("#twikoo, #giscus, #waline");t&&t.scrollIntoView({behavior:"smooth"})}function goRandomPost(){var t=[...document.querySelectorAll("a[href*='/posts/']")];t.length&&(t=t[Math.floor(Math.random()*t.length)],window.location.href=t.href)}document.addEventListener("DOMContentLoaded",()=>{let r=document.createElement("div");r.id="custom-context-menu",r.className="custom-context-menu",r.innerHTML=`
    <div class="top-actions">
      <div title="返回上一页"><i class="fas fa-arrow-left"></i></div>
      <div title="前往下一页"><i class="fas fa-arrow-right"></i></div>
      <div title="刷新页面"><i class="fas fa-rotate"></i></div>
      <div title="返回顶部"><i class="fas fa-arrow-up"></i></div>
    </div>
    <div class="bottom-actions" id="context-menu-dynamic"></div>
  `,document.body.appendChild(r),document.addEventListener("contextmenu",a=>{a.preventDefault();var d=document.getElementById("context-menu-dynamic"),t=location.pathname.includes("/posts/")||document.querySelector(".post-body"),l=window.getSelection().toString().trim();d.innerHTML="",l&&(d.innerHTML+=`
        <div onclick="copyText('${l}')">
          <i class="fas fa-copy"></i> 复制选中文本
        </div>`),d.innerHTML+=`
      <div onclick="copyURL()"><i class="fas fa-link"></i> 复制地址</div>
      <div onclick="${t?"scrollToComment()":"goRandomPost()"}">
        <i class="${t?"fas fa-comments":"fas fa-dice"}"></i> ${t?"查看评论":"随便逛逛"}
      </div>
      <div onclick="toggleTheme()"><i class="fas fa-moon"></i> 切换主题</div>
      ${t?'<div onclick="toggleZhConvert()"><i class="fas fa-language"></i> 简繁转换</div>':""}
    `,document.querySelector(".top-actions div:nth-child(1)").onclick=()=>history.back(),document.querySelector(".top-actions div:nth-child(2)").onclick=()=>history.forward(),document.querySelector(".top-actions div:nth-child(3)").onclick=()=>location.reload(),document.querySelector(".top-actions div:nth-child(4)").onclick=()=>window.scrollTo({top:0,behavior:"smooth"});{l=a.pageX,d=a.pageY;let t=r.offsetWidth,e=r.offsetHeight,o=window.innerWidth,i=window.innerHeight,n=l,c=d;l+t>o&&(n=o-t-10),d+e>i&&(c=i-e-10),r.style.left=n+"px",r.style.top=c+"px",r.style.display="block"}}),document.addEventListener("click",()=>{r.style.display="none"})});