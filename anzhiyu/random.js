var posts=["posts/46175.html","posts/29897.html","posts/36729.html","posts/21458.html","posts/79216.html","posts/14171.html","posts/63649.html","posts/47412.html","posts/64665.html","posts/45101.html","posts/31657.html","posts/60191.html","posts/8736.html","posts/41513.html","posts/10729.html","posts/39978.html","posts/7648.html","posts/22192.html","posts/9104.html","posts/91123.html","posts/7498.html","posts/36922.html","posts/18029.html","posts/13214.html","posts/24974.html","posts/57159.html","posts/1.html","posts/1303.html","posts/36838.html","posts/35829.html","posts/17306.html","posts/55208.html","posts/38001.html","posts/27484.html"];function toRandomPost(){
    window.location.href='/'+posts[Math.floor(Math.random() * posts.length)];
  };var friend_link_list=[{"name":"MasoFod","link":"https://masofod.github.io/","avatar":"https://masofod.github.io/favicon.ico","descr":"思考与想象。"},{"name":"茂茂物语","link":"https://notes.fe-mm.com/","avatar":"https://notes.fe-mm.com/favicon.ico","descr":"茂茂的成长之路，包含前端常用知识、源码阅读笔记、各种奇淫技巧、日常提效工具等"},{"name":"XINGJI","link":"https://vite.xingji.fun","avatar":"https://i.p-i.vip/47/20240920-66ed7b168c38c.jpg","descr":"迄今所有人生都大写着失败，但不妨碍我继续向前✨"},{"name":"iFluxArt","link":"https://iflux.art","avatar":"https://iflux.art/favicon.ico","descr":"斐启智境 · 流韵新生"},{"name":"微光zc的网络小窝","link":"https://wzcwzc10.github.io/","avatar":"https://wzcwzc10.github.io/img/jufufu-ht.gif","descr":"世界全剧终，欢迎来到my blog！"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };