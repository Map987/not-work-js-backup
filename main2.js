// @namespace greasyfork

// @name B站番剧解锁

// @version 0.1.23

// @description 解除哔哩哔哩番剧的大会员和港澳台在线观看限制 油管和B站视频下载

// @match *://*.bilibili.com/*

// @match *://*.biligame.com/*

// @match *://*.youtube.com/*

// @exclude *://message.bilibili.com/*

// @connect bilibili.com

// @connect 121.5.226.51

// @connect 127.0.0.1

// @grant GM_addStyle

// @grant GM_info

// @grant GM_cookie

// @grant GM_download

// @grant GM_getValue

// @grant GM_setValue

// @grant GM_setClipboard

// @grant GM_xmlhttpRequest

// @run-at document-start

// ==/UserScript==

void function() {

  function zset() {

    if (u.zdom(), document.querySelector(&quot;#zyset&quot;)) ipod.aria2 &amp;&amp; u.zform(&quot;#zyset input&quot;, ipod.aria2), document.querySelector(&quot;#zyset&quot;).setAttribute(&quot;style&quot;, &quot;display: flex&quot;); else {

      let str;

      switch (u.zhost()) {

       case &quot;baidu.com&quot;:

        str = &#x27;&lt;div class=&quot;tamper&quot; id=&quot;zyset&quot;&gt;&lt;div&gt;&lt;form&gt;&lt;div&gt;&lt;label&gt;\u8282\u70b9\u9009\u62e9&lt;/label&gt;&lt;input name=&quot;host&quot; type=&quot;radio&quot; value=&quot;1&quot;&gt;&lt;label&gt;\u81ea\u52a8\u9002\u5e94 &amp;nbsp; &lt;/label&gt;&lt;input name=&quot;host&quot; type=&quot;radio&quot; value=&quot;2&quot;&gt;&lt;label&gt;\u9655\u897f\u8054\u901a &amp;nbsp; &lt;/label&gt;&lt;input name=&quot;host&quot; type=&quot;radio&quot; value=&quot;3&quot;&gt;&lt;label&gt;\u4e91\u5357\u8054\u901a &amp;nbsp; &lt;/label&gt;&lt;input name=&quot;host&quot; type=&quot;radio&quot; value=&quot;4&quot;&gt;&lt;label&gt;\u6e56\u5357\u7535\u4fe1&lt;/label&gt;&lt;/div&gt;&lt;div&gt;&lt;input name=&quot;idm&quot; type=&quot;checkbox&quot; value=&quot;1&quot;&gt;&lt;label&gt;\u4ec5\u63d0\u53d6\u4e0b\u8f7d\u5730\u5740 \u53ef\u7c98\u8d34\u5230&lt;span style=&quot;margin:0 2px;font-family:Tahoma&quot;&gt;IDM&lt;/span&gt;\u4e2d\u4f7f\u7528 &amp;nbsp; &lt;span name=&quot;cpua&quot;&gt;\u590d\u5236UA&lt;/span&gt;&lt;/label&gt;&lt;/div&gt;&lt;div&gt;&lt;label&gt;\u8bbe\u7f6e aria2 jsonrpc&lt;/label&gt;&lt;input name=&quot;jsonrpc&quot; type=&quot;text&quot;&gt;&lt;/div&gt;&lt;div&gt;&lt;label&gt;\u8bbe\u7f6e aria2 \u8bbf\u95ee\u53e3\u4ee4&lt;/label&gt;&lt;input name=&quot;token&quot; type=&quot;password&quot; placeholder=&quot;\u6ca1\u6709\u53e3\u4ee4\u5219\u4e0d\u8981\u586b\u5199&quot;&gt;&lt;/div&gt;&lt;div&gt;&lt;label&gt;\u8bbe\u7f6e\u4e0b\u8f7d\u4fdd\u5b58\u8def\u5f84&lt;/label&gt;&lt;input name=&quot;dir&quot; type=&quot;text&quot;&gt;&lt;div class=&quot;summary&quot;&gt; \u8bf7\u4f7f\u7528\u5de6\u659c\u6760\u4f5c\u4e3a\u5206\u9694\u7b26&lt;/div&gt;&lt;/div&gt;&lt;div class=&quot;btn-group&quot;&gt;&lt;button type=&quot;button&quot;&gt;&lt;i class=&quot;ion-close&quot;&gt;&lt;/i&gt; \u53d6\u6d88&lt;/button&gt;&lt;button type=&quot;submit&quot;&gt;&lt;i class=&quot;ion-checkmark&quot;&gt;&lt;/i&gt; \u786e\u5b9a&lt;/button&gt;&lt;/div&gt;&lt;/form&gt;&lt;/div&gt;&lt;/div&gt;&#x27;;

        break;

       case &quot;youtube.com&quot;:

        str = &#x27;&lt;div class=&quot;tamper&quot; id=&quot;zyset&quot;&gt;&lt;div&gt;&lt;form&gt;&lt;div&gt;&lt;input name=&quot;mode&quot; type=&quot;checkbox&quot; value=&quot;1&quot;&gt;&lt;label&gt;\u4f7f\u7528\u6d4f\u89c8\u5668\u76f4\u63a5\u4e0b\u8f7d\u800c\u975eAria2&lt;/label&gt;&lt;div class=&quot;summary&quot;&gt;\u4e0d\u77e5\u9053\u5982\u4f55\u8bbe\u7f6e\u4ee3\u7406\u670d\u52a1\u5668\u8bf7\u52fe\u9009\u6d4f\u89c8\u5668\u4e0b\u8f7d&lt;br&gt;\u662f\u540e\u53f0\u4e0b\u8f7d\u65e0\u4ea4\u4e92\u63d0\u793a\u6ce8\u610f\u52ff\u91cd\u590d\u4e0b\u8f7d&lt;/div&gt;&lt;/div&gt;&lt;div&gt;&lt;label&gt;\u8bbe\u7f6e aria2 jsonrpc&lt;/label&gt;&lt;input name=&quot;jsonrpc&quot; type=&quot;text&quot;&gt;&lt;/div&gt;&lt;div&gt;&lt;label&gt;\u8bbe\u7f6e aria2 \u8bbf\u95ee\u53e3\u4ee4&lt;/label&gt;&lt;input name=&quot;token&quot; type=&quot;password&quot; placeholder=&quot;\u6ca1\u6709\u53e3\u4ee4\u5219\u4e0d\u8981\u586b\u5199&quot;&gt;&lt;/div&gt;&lt;div&gt;&lt;label&gt;\u8bbe\u7f6e\u4ee3\u7406\u670d\u52a1\u5668&lt;/label&gt;&lt;input name=&quot;proxy&quot; type=&quot;text&quot; placeholder=&quot;\u4e0d\u4f7f\u7528\u4ee3\u7406\u5219\u7559\u7a7a&quot;&gt;&lt;div class=&quot;summary&quot;&gt;\u4e0d\u9700\u8981\u901a\u8fc7\u4ee3\u7406\u670d\u52a1\u5668\u4e0b\u8f7d\u5219\u5c06\u6b64\u8bbe\u7f6e\u6e05\u7a7a&lt;/div&gt;&lt;/div&gt;&lt;div&gt;&lt;label&gt;\u8bbe\u7f6e\u4e0b\u8f7d\u4fdd\u5b58\u8def\u5f84&lt;/label&gt;&lt;input name=&quot;dir&quot; type=&quot;text&quot;&gt;&lt;/div&gt;&lt;div class=&quot;btn-group&quot;&gt;&lt;button type=&quot;button&quot;&gt;&lt;i class=&quot;ion-close&quot;&gt;&lt;/i&gt; \u53d6\u6d88&lt;/button&gt;&lt;button type=&quot;submit&quot;&gt;&lt;i class=&quot;ion-checkmark&quot;&gt;&lt;/i&gt; \u786e\u5b9a&lt;/button&gt;&lt;/div&gt;&lt;/form&gt;&lt;/div&gt;&lt;/div&gt;&#x27;;

        break;

       default:

        str = &#x27;&lt;div class=&quot;tamper&quot; id=&quot;zyset&quot;&gt;&lt;div&gt;&lt;form&gt;&lt;div&gt;&lt;label&gt;\u8bbe\u7f6e aria2 jsonrpc&lt;/label&gt;&lt;input name=&quot;jsonrpc&quot; type=&quot;text&quot;&gt;&lt;/div&gt;&lt;div&gt;&lt;label&gt;\u8bbe\u7f6e aria2 \u8bbf\u95ee\u53e3\u4ee4&lt;/label&gt;&lt;input name=&quot;token&quot; type=&quot;password&quot; placeholder=&quot;\u6ca1\u6709\u53e3\u4ee4\u5219\u4e0d\u8981\u586b\u5199&quot;&gt;&lt;/div&gt;&lt;div&gt;&lt;label&gt;\u8bbe\u7f6e\u4e0b\u8f7d\u4fdd\u5b58\u8def\u5f84&lt;/label&gt;&lt;input name=&quot;dir&quot; type=&quot;text&quot;&gt;&lt;/div&gt;&lt;div class=&quot;btn-group&quot;&gt;&lt;button type=&quot;button&quot;&gt;&lt;i class=&quot;ion-close&quot;&gt;&lt;/i&gt; \u53d6\u6d88&lt;/button&gt;&lt;button type=&quot;submit&quot;&gt;&lt;i class=&quot;ion-checkmark&quot;&gt;&lt;/i&gt; \u786e\u5b9a&lt;/button&gt;&lt;/div&gt;&lt;/form&gt;&lt;/div&gt;&lt;/div&gt;&#x27;;

      }

      document.body.insertAdjacentHTML(&quot;beforeend&quot;, str), ipod.aria2 &amp;&amp; u.zform(&quot;#zyset input&quot;, ipod.aria2);

      let dom = document.querySelector(&quot;span[name=cpua]&quot;);

      dom &amp;&amp; dom.addEventListener(&quot;click&quot;, () =&gt; {

        u.zdom(), GM_xmlhttpRequest({

          url: `${ipod.home}/baiduyun/ua.txt`,

          method: &quot;GET&quot;,

          responseType: &quot;text&quot;,

          onload(r) {

            console.log(&quot;ua = %s&quot;, r.response), GM_setClipboard(r.response, &quot;text&quot;);

          }

        });

      }), document.querySelector(&quot;#zyset&quot;).setAttribute(&quot;style&quot;, &quot;display:flex&quot;), document.querySelector(&quot;#zyset button[type=button]&quot;).addEventListener(&quot;click&quot;, () =&gt; {

        u.zdom(), document.querySelector(&quot;#zyset&quot;).removeAttribute(&quot;style&quot;);

      }), document.querySelector(&quot;#zyset form&quot;).addEventListener(&quot;submit&quot;, () =&gt; {

        let dom = u.zdom(), d = new FormData(dom);

        ipod.aria2 = Object.assign({}, ipod.defaults, Object.fromEntries(d.entries())), u.save(&quot;aria2&quot;, ipod.aria2), document.querySelector(&quot;#zyset&quot;).setAttribute(&quot;style&quot;, &quot;display:none&quot;);

      });

    }

  }

  function zproxy() {

    let xhr2 = unsafeWindow.XMLHttpRequest, ajax2 = (url, cookie = 0) =&gt; {

      let xhr = new xhr2();

      return xhr.open(&quot;GET&quot;, url, false), xhr.withCredentials = cookie, xhr.send(), xhr.responseText;

    };

    unsafeWindow.XMLHttpRequest = new Proxy(XMLHttpRequest, {

      construct(target) {

        let pod = {};

        return new Proxy(new target(), {

          set: (target, prop, value) =&gt; (target[prop] = value, true),

          get(target, prop) {

            if (pod.hasOwnProperty(prop)) return pod[prop];

            let value = target[prop];

            if (&quot;function&quot; == typeof value) {

              let bc = value;

              value = function() {

                if (&quot;open&quot; == prop) pod.method = arguments[0], pod.url = arguments[1]; else if (&quot;send&quot; == prop) if (pod.url.includes(&quot;/info?mid=11783021&amp;&quot;)) pod.responseText = &#x27;{&quot;code&quot;:0,&quot;message&quot;:&quot;0&quot;,&quot;ttl&quot;:1,&quot;data&quot;:{&quot;mid&quot;:11783021,&quot;name&quot;:&quot;\u54d4\u54e9\u54d4\u54e9\u756a\u5267\u51fa\u5dee&quot;,&quot;sex&quot;:&quot;\u4fdd\u5bc6&quot;,&quot;face&quot;:&quot;http://i2.hdslb.com/bfs/face/9f10323503739e676857f06f5e4f5eb323e9f3f2.jpg&quot;,&quot;sign&quot;:&quot;&quot;,&quot;rank&quot;:10000,&quot;level&quot;:6,&quot;jointime&quot;:0,&quot;moral&quot;:0,&quot;silence&quot;:0,&quot;birthday&quot;:&quot;&quot;,&quot;coins&quot;:0,&quot;fans_badge&quot;:false,&quot;fans_medal&quot;:{&quot;show&quot;:false,&quot;wear&quot;:false,&quot;medal&quot;:null},&quot;official&quot;:{&quot;role&quot;:3,&quot;title&quot;:&quot;\u54d4\u54e9\u54d4\u54e9\u756a\u5267\u51fa\u5dee \u5b98\u65b9\u8d26\u53f7&quot;,&quot;desc&quot;:&quot;&quot;,&quot;type&quot;:1},&quot;vip&quot;:{&quot;type&quot;:0,&quot;status&quot;:0,&quot;du6e_date&quot;:0,&quot;vip_pay_type&quot;:0,&quot;theme_type&quot;:0,&quot;label&quot;:{&quot;path&quot;:&quot;&quot;,&quot;text&quot;:&quot;&quot;,&quot;label_theme&quot;:&quot;&quot;,&quot;text_color&quot;:&quot;&quot;,&quot;bg_style&quot;:0,&quot;bg_color&quot;:&quot;&quot;,&quot;border_color&quot;:&quot;&quot;},&quot;avatar_subscript&quot;:0,&quot;nickname_color&quot;:&quot;&quot;,&quot;role&quot;:0,&quot;avatar_subscript_url&quot;:&quot;&quot;},&quot;pendant&quot;:{&quot;pid&quot;:0,&quot;name&quot;:&quot;&quot;,&quot;image&quot;:&quot;&quot;,&quot;expire&quot;:0,&quot;image_enhance&quot;:&quot;&quot;,&quot;image_enhance_frame&quot;:&quot;&quot;},&quot;nameplate&quot;:{&quot;nid&quot;:0,&quot;name&quot;:&quot;&quot;,&quot;image&quot;:&quot;&quot;,&quot;image_small&quot;:&quot;&quot;,&quot;level&quot;:&quot;&quot;,&quot;condition&quot;:&quot;&quot;},&quot;user_honour_info&quot;:{&quot;mid&quot;:0,&quot;colour&quot;:null,&quot;tags&quot;:null},&quot;is_followed&quot;:false,&quot;top_photo&quot;:&quot;http://i1.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png&quot;,&quot;theme&quot;:{},&quot;sys_notice&quot;:{},&quot;live_room&quot;:{&quot;roomStatus&quot;:0}}}&#x27;; else if (pod.url.includes(&quot;/game/comment/user/my_comment&quot;)) pod.responseText = &#x27;{&quot;code&quot;:-703,&quot;message&quot;:&quot;\u6570\u636e\u4e3a\u7a7a&quot;,&quot;request_id&quot;:&quot;20c36cc00e7a11ec84a2b6c4aae96307&quot;,&quot;ts&quot;:1630867824012}&#x27;; else if (pod.url.includes(&quot;/pc/game/user/space/comment_list&quot;)) pod.responseText = &#x27;{&quot;code&quot;:0,&quot;message&quot;:&quot;\u6210\u529f&quot;,&quot;request_id&quot;:&quot;64b686e00e7c11ec9f779a4ceb236e23&quot;,&quot;ts&quot;:0,&quot;data&quot;:[]}&#x27;; else if (pod.url.includes(&quot;/pgc/player/web/playurl?&quot;)) {

                  let url = pod.url.startsWith(&quot;//&quot;) ? location.protocol + pod.url : pod.url, s = ajax2(url, 1), d = JSON.parse(s);

                  0 == d.code &amp;&amp; 0 == d.result.is_preview || ipod.pay ? pod.responseText = s : (s = url.substring(url.indexOf(&quot;?&quot;) + 1), s = ajax2(url = `${ipod.home}/ajax?act=bvlink&amp;${s}&amp;version=${ipod.version}&amp;sign=${ipod.sign}`), 0 == (d = JSON.parse(s)).code &amp;&amp; (pod.responseText = 86 == ipod.zone.country_code &amp;&amp; u.now() &gt; ipod.dtpub ? s.replace(/\/\/.+?\//g, &quot;//&quot; + ipod.aria2.cdn + &quot;/&quot;) : s));

                } else if (pod.url.includes(&quot;/pgc/view/web/season?&quot;)) {

                  let id = u.strcut(location.pathname, &quot;/play/ep&quot;), url = pod.url.startsWith(&quot;//&quot;) ? location.protocol + pod.url : pod.url, d = JSON.parse(ajax2(url, 1));

                  0 == d.code &amp;&amp; (ipod.pay = 0, d.result.hasOwnProperty(&quot;payment&quot;) &amp;&amp; (0 == Number.parseFloat(d.result.payment.price) || (ipod.pay = 1)), d.result.episodes.forEach(t =&gt; {

                    t.status = 2, t.rights.area_limit = 0, t.badge = &quot;&quot;, t.badge_type = 0, t.id == id &amp;&amp; (ipod.dtpub = t.pub_time + 9e4);

                  })), pod.responseText = JSON.stringify(d);

                } else if (pod.url.includes(&quot;/pgc/view/web/season/user/status&quot;)) {

                  let url = pod.url.startsWith(&quot;//&quot;) ? location.protocol + pod.url : pod.url, d = JSON.parse(ajax2(url, 1));

                  0 == d.code &amp;&amp; (d.result.area_limit = 0, d.result.ban_area_show = 0, d.result.vip_info.due_date = ipod.dtvip, d.result.vip_info.status = 1, d.result.vip_info.type = 1), pod.responseText = JSON.stringify(d);

                }

                return bc.apply(target, arguments);

              };

            }

            return value;

          }

        });

      }

    });

  }

  var ipod = {}, u = {

    now: () =&gt; Math.ceil(Date.now() / 1e3),

    uid: () =&gt; Date.now().toString(36).toUpperCase(),

    zhost: () =&gt; location.hostname.split(&quot;.&quot;).slice(-2).join(&quot;.&quot;),

    rand: max =&gt; Math.floor(1e6 * Math.random()) % max,

    urlfix: str =&gt; str.startsWith(&quot;http&quot;) ? str : str.startsWith(&quot;//&quot;) ? location.protocol + str : str.startsWith(&quot;/&quot;) ? location.origin + str : location.origin + &quot;/&quot; + str,

    usp: str =&gt; Object.fromEntries(new URLSearchParams(str).entries()),

    unique: arr =&gt; arr.fliter((t, i, d) =&gt; d.indexOf(t) == i),

    cclean: arr =&gt; Object.entries(Object.fromEntries(arr.map(t =&gt; [t.name, t.value]))).map(t =&gt; t.join(&quot;=&quot;)),

    serialize: obj =&gt; u.vobj(obj) ? Object.entries(obj).map(t =&gt; t[0] + &quot;=&quot; + encodeURIComponent(t[1])).join(&quot;&amp;&quot;) : &quot;&quot;,

    vfunc: fn =&gt; &quot;[object Function]&quot; == Object.prototype.toString.call(fn),

    vnum: num =&gt; &quot;[object Number]&quot; == Object.prototype.toString.call(num),

    vobj: obj =&gt; &quot;[object Object]&quot; == Object.prototype.toString.call(obj),

    vstr: str =&gt; &quot;[object String]&quot; == Object.prototype.toString.call(str),

    xpath: str =&gt; document.evaluate(str, document).iterateNext(),

    pwd(bit = 4) {

      let i, arr = [], str = &quot;abcdefghijklmnopqrstuvwxyz23456789ABCDEFGHKLMNPSTVWXY&quot;, len = str.length;

      for (i = 0; bit &gt; i; i++) arr.push(str.charAt(u.rand(len)));

      return arr.join(&quot;&quot;);

    },

    zdom(child = 0) {

      let e = window.event;

      return e.preventDefault(), e.stopPropagation(), child ? e.target : e.currentTarget;

    },

    zero(num, bit = 3) {

      let s, i = +num;

      return (s = isNaN(i) ? &quot;0&quot; : &quot;&quot; + i).padStart(bit, &quot;0&quot;);

    },

    fsize(num, pos = 0) {

      let s, t = +num;

      if (0 == t) s = &quot;&quot;; else {

        let i = 0, arr = [&quot;B&quot;, &quot;KB&quot;, &quot;MB&quot;, &quot;GB&quot;, &quot;TB&quot;, &quot;PB&quot;];

        while (t &gt; 1024) i++, t = Math.ceil(t / 1024);

        s = (t = Math.round(num / Math.pow(1024, i))) + arr[i + pos];

      }

      return s;

    },

    urlopen(url, w = 1) {

      let dom = document.createElement(&quot;a&quot;);

      dom.setAttribute(&quot;href&quot;, url), 1 == w &amp;&amp; dom.setAttribute(&quot;target&quot;, &quot;_blank&quot;), dom.click();

    },

    aria2(list) {

      let arr = [], pod = {

        id: u.uid(),

        method: &quot;system.multicall&quot;,

        params: []

      };

      list.forEach(t =&gt; {

        Object.keys(t).forEach(p =&gt; {

          u.vnum(t[p]) &amp;&amp; (t[p] = &quot;&quot; + t[p]);

        });

        let o = {

          methodName: &quot;aria2.addUri&quot;,

          params: []

        };

        ipod.aria2.token &amp;&amp; o.params.push(&quot;token:&quot; + ipod.aria2.token), o.params.push(t.url), t.hasOwnProperty(&quot;split&quot;) || (t.split = &quot;&quot; + t.url.length), t.hasOwnProperty(&quot;extype&quot;) &amp;&amp; (t.out = pod.id + t.extype), o.params.push(t), arr.push(o);

      }), pod.params.push(arr), GM_xmlhttpRequest({

        url: ipod.aria2.jsonrpc,

        method: &quot;POST&quot;,

        responseType: &quot;json&quot;,

        data: JSON.stringify(pod),

        onerror() {

          alert(&quot;\u8bf7\u68c0\u67e5Motrix\u662f\u5426\u8fd0\u884c\u4ee5\u53ca\u8bbe\u7f6e\u91cc\u586b\u5199\u7684jsonrpc\u662f\u5426\u6b63\u786e&quot;);

        }

      });

    },

    zform(str, obj) {

      document.querySelectorAll(str).forEach(t =&gt; {

        let s = t.getAttribute(&quot;name&quot;);

        if (obj.hasOwnProperty(s)) switch (t.getAttribute(&quot;type&quot;)) {

         case &quot;radio&quot;:

          obj[s] == t.value &amp;&amp; (t.checked = true);

          break;

         case &quot;checkbox&quot;:

          obj[s] &amp;&amp; (t.checked = true);

          break;

         default:

          t.value = obj[s];

        }

      });

    },

    cpdom(node) {

      let dom = null;

      return node instanceof HTMLElement &amp;&amp; (dom = node.cloneNode(true), node.after(dom), node.remove()), dom;

    },

    load(name, val) {

      name += &quot;.&quot; + u.zhost();

      let s = GM_getValue(name);

      return s ? JSON.parse(s) : val;

    },

    save(name, data) {

      name += &quot;.&quot; + u.zhost(), GM_setValue(name, JSON.stringify(data));

    },

    strcut(str, x, y) {

      let a, b, s = &quot;&quot;;

      return str &amp;&amp; x &amp;&amp; str.includes(x) &amp;&amp; (a = str.indexOf(x) + x.length, y ? -1 == (b = str.indexOf(y, a)) &amp;&amp; (b = str.length) : b = str.length, s = str.substring(a, b)), s;

    },

    str2obj(str) {

      let o = null;

      return u.vstr(str) &amp;&amp; str.length &amp;&amp; (o = str.includes(&#x27;&quot;&#x27;) ? JSON.parse(str) : JSON.parse(str.replaceAll(/&#x27;/g, &#x27;&quot;&#x27;))), o;

    },

    sprintf(str) {

      let i, regx, s = u.vstr(str) ? str : &quot;&quot;;

      if (s.length) for (i = arguments.length - 1; i &gt; 0; i--) regx = RegExp(&quot;%&quot; + i, &quot;g&quot;), s = s.replaceAll(regx, arguments[i]);

      return s;

    },

    download(str) {

      if (str) {

        let o = str.startsWith(&quot;magnet:&quot;) ? {

          url: []

        } : {

          url: [],

          &quot;use-header&quot;: &quot;true&quot;,

          &quot;min-split-size&quot;: &quot;1M&quot;,

          split: &quot;8&quot;

        };

        Object.assign(o, ipod.aria2), str = str.startsWith(&quot;magnet:&quot;) ? u.magnet(str) : str.startsWith(&quot;http&quot;) ? str : str.startsWith(&quot;//&quot;) ? location.protocol + str : str.startsWith(&quot;/&quot;) ? location.origin + str : location.origin + &quot;/&quot; + str, o.url.push(str), u.aria2([o]);

      }

    },

    magnet(str) {

      let i = str.indexOf(&quot;&amp;&quot;);

      return -1 == i ? str : str.substring(0, i);

    },

    namefix(str) {

      let i, arr = [&#x27;&quot;&#x27;, &quot;&#x27;&quot;, &quot;*&quot;, &quot;:&quot;, &quot;&lt;&quot;, &quot;&gt;&quot;, &quot;?&quot;, &quot;|&quot;];

      for (i = 0; arr.length &gt; i; i++) str = str.replaceAll(arr[i], &quot;&quot;);

      return str.replaceAll(&quot;\\&quot;, &quot;/&quot;).replaceAll(&quot;//&quot;, &quot;/&quot;);

    },

    tpl(str, data) {

      const jstpl = (html, obj) =&gt; html.replaceAll(/\[(\w{1,16})\]/g, (mat, k) =&gt; obj.hasOwnProperty(k) ? obj[k] : &quot;[&quot; + k + &quot;]&quot;);

      return (Array.isArray(data) ? data : [data]).map(t =&gt; jstpl(str, t)).join(&quot;&quot;);

    },

    history(str) {

      const origin = history[str];

      return function() {

        let e = new Event(str);

        return e.arguments = arguments, window.dispatchEvent(e), origin.apply(this, arguments);

      };

    },

    jsload(url, name) {

      let dom = document.createElement(&quot;script&quot;);

      dom.src = u.urlfix(url), name &amp;&amp; dom.setAttribute(&quot;name&quot;, name), dom.setAttribute(&quot;async&quot;, &quot;true&quot;), dom.setAttribute(&quot;crossorigin&quot;, &quot;anonymous&quot;), document.head.appendChild(dom);

    },

    swClassName(str) {

      if (str &amp;&amp; u.vstr(str)) {

        let arr = Array.from(ipod.checkbox.classList);

        arr.includes(str) ? arr = arr.filter(t =&gt; t != str) : arr.push(&quot;on&quot;), ipod.checkbox.className = arr.join(&quot; &quot;);

      }

    }

  };

  if (ipod.version = GM_info.script.version, ipod.cookie = &quot;&quot;, ipod.idle = 1, ipod.now = u.now(), GM_addStyle(String.raw`@font-face{font-family:&quot;Ionicons&quot;;src:url(&quot;https://cdn.bootcss.com/ionicons/4.5.6/fonts/ionicons.eot?v=4.5.5#iefix&quot;) format(&quot;embedded-opentype&quot;),url(&quot;https://cdn.bootcss.com/ionicons/4.5.6/fonts/ionicons.woff2?v=4.5.5&quot;) format(&quot;woff2&quot;),url(&quot;https://cdn.bootcss.com/ionicons/4.5.6/fonts/ionicons.woff?v=4.5.5&quot;) format(&quot;woff&quot;),url(&quot;https://cdn.bootcss.com/ionicons/4.5.6/fonts/ionicons.ttf?v=4.5.5&quot;) format(&quot;truetype&quot;),url(&quot;https://cdn.bootcss.com/ionicons/4.5.6/fonts/ionicons.svg?v=4.5.5#Ionicons&quot;) format(&quot;svg&quot;);font-weight:normal;font-style:normal}i[class|=ion]{display:inline-block;font-family:&quot;Ionicons&quot;;font-size:120%;font-style:normal;font-variant:normal;font-weight:normal;line-height:1;text-rendering:auto;text-transform:none;vertical-align:text-bottom;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}.ion-android:before{content:&quot;\f225&quot;}.ion-angular:before{content:&quot;\f227&quot;}.ion-apple:before{content:&quot;\f229&quot;}.ion-bitbucket:before{content:&quot;\f193&quot;}.ion-bitcoin:before{content:&quot;\f22b&quot;}.ion-buffer:before{content:&quot;\f22d&quot;}.ion-chrome:before{content:&quot;\f22f&quot;}.ion-closed-captioning:before{content:&quot;\f105&quot;}.ion-codepen:before{content:&quot;\f230&quot;}.ion-css3:before{content:&quot;\f231&quot;}.ion-designernews:before{content:&quot;\f232&quot;}.ion-dribbble:before{content:&quot;\f233&quot;}.ion-dropbox:before{content:&quot;\f234&quot;}.ion-euro:before{content:&quot;\f235&quot;}.ion-facebook:before{content:&quot;\f236&quot;}.ion-flickr:before{content:&quot;\f107&quot;}.ion-foursquare:before{content:&quot;\f237&quot;}.ion-freebsd-devil:before{content:&quot;\f238&quot;}.ion-game-controller-a:before{content:&quot;\f13b&quot;}.ion-game-controller-b:before{content:&quot;\f181&quot;}.ion-github:before{content:&quot;\f239&quot;}.ion-google:before{content:&quot;\f23a&quot;}.ion-googleplus:before{content:&quot;\f23b&quot;}.ion-hackernews:before{content:&quot;\f23c&quot;}.ion-html5:before{content:&quot;\f23d&quot;}.ion-instagram:before{content:&quot;\f23e&quot;}.ion-ionic:before{content:&quot;\f150&quot;}.ion-ionitron:before{content:&quot;\f151&quot;}.ion-javascript:before{content:&quot;\f23f&quot;}.ion-linkedin:before{content:&quot;\f240&quot;}.ion-markdown:before{content:&quot;\f241&quot;}.ion-model-s:before{content:&quot;\f153&quot;}.ion-no-smoking:before{content:&quot;\f109&quot;}.ion-nodejs:before{content:&quot;\f242&quot;}.ion-npm:before{content:&quot;\f195&quot;}.ion-octocat:before{content:&quot;\f243&quot;}.ion-pinterest:before{content:&quot;\f244&quot;}.ion-playstation:before{content:&quot;\f245&quot;}.ion-polymer:before{content:&quot;\f15e&quot;}.ion-python:before{content:&quot;\f246&quot;}.ion-reddit:before{content:&quot;\f247&quot;}.ion-rss:before{content:&quot;\f248&quot;}.ion-sass:before{content:&quot;\f249&quot;}.ion-skype:before{content:&quot;\f24a&quot;}.ion-slack:before{content:&quot;\f10b&quot;}.ion-snapchat:before{content:&quot;\f24b&quot;}.ion-steam:before{content:&quot;\f24c&quot;}.ion-tumblr:before{content:&quot;\f24d&quot;}.ion-tux:before{content:&quot;\f2ae&quot;}.ion-twitch:before{content:&quot;\f2af&quot;}.ion-twitter:before{content:&quot;\f2b0&quot;}.ion-usd:before{content:&quot;\f2b1&quot;}.ion-vimeo:before{content:&quot;\f2c4&quot;}.ion-vk:before{content:&quot;\f10d&quot;}.ion-whatsapp:before{content:&quot;\f2c5&quot;}.ion-windows:before{content:&quot;\f32f&quot;}.ion-wordpress:before{content:&quot;\f330&quot;}.ion-xbox:before{content:&quot;\f34c&quot;}.ion-xing:before{content:&quot;\f10f&quot;}.ion-yahoo:before{content:&quot;\f34d&quot;}.ion-yen:before{content:&quot;\f34e&quot;}.ion-youtube:before{content:&quot;\f34f&quot;}.ion-add:before{content:&quot;\f273&quot;}.ion-add-circle:before{content:&quot;\f272&quot;}.ion-add-circle-outline:before{content:&quot;\f158&quot;}.ion-airplane:before{content:&quot;\f15a&quot;}.ion-alarm:before{content:&quot;\f274&quot;}.ion-albums:before{content:&quot;\f275&quot;}.ion-alert:before{content:&quot;\f276&quot;}.ion-american-football:before{content:&quot;\f277&quot;}.ion-analytics:before{content:&quot;\f278&quot;}.ion-aperture:before{content:&quot;\f279&quot;}.ion-apps:before{content:&quot;\f27a&quot;}.ion-appstore:before{content:&quot;\f27b&quot;}.ion-archive:before{content:&quot;\f27c&quot;}.ion-arrow-back:before{content:&quot;\f27d&quot;}.ion-arrow-down:before{content:&quot;\f27e&quot;}.ion-arrow-dropdown:before{content:&quot;\f280&quot;}.ion-arrow-dropdown-circle:before{content:&quot;\f27f&quot;}.ion-arrow-dropleft:before{content:&quot;\f282&quot;}.ion-arrow-dropleft-circle:before{content:&quot;\f281&quot;}.ion-arrow-dropright:before{content:&quot;\f284&quot;}.ion-arrow-dropright-circle:before{content:&quot;\f283&quot;}.ion-arrow-dropup:before{content:&quot;\f286&quot;}.ion-arrow-dropup-circle:before{content:&quot;\f285&quot;}.ion-arrow-forward:before{content:&quot;\f287&quot;}.ion-arrow-round-back:before{content:&quot;\f288&quot;}.ion-arrow-round-down:before{content:&quot;\f289&quot;}.ion-arrow-round-forward:before{content:&quot;\f28a&quot;}.ion-arrow-round-up:before{content:&quot;\f28b&quot;}.ion-arrow-up:before{content:&quot;\f28c&quot;}.ion-at:before{content:&quot;\f28d&quot;}.ion-attach:before{content:&quot;\f28e&quot;}.ion-backspace:before{content:&quot;\f28f&quot;}.ion-barcode:before{content:&quot;\f290&quot;}.ion-baseball:before{content:&quot;\f291&quot;}.ion-basket:before{content:&quot;\f292&quot;}.ion-basketball:before{content:&quot;\f293&quot;}.ion-battery-charging:before{content:&quot;\f294&quot;}.ion-battery-dead:before{content:&quot;\f295&quot;}.ion-battery-full:before{content:&quot;\f296&quot;}.ion-beaker:before{content:&quot;\f297&quot;}.ion-bed:before{content:&quot;\f160&quot;}.ion-beer:before{content:&quot;\f298&quot;}.ion-bicycle:before{content:&quot;\f299&quot;}.ion-bluetooth:before{content:&quot;\f29a&quot;}.ion-boat:before{content:&quot;\f29b&quot;}.ion-body:before{content:&quot;\f29c&quot;}.ion-bonfire:before{content:&quot;\f29d&quot;}.ion-book:before{content:&quot;\f29e&quot;}.ion-bookmark:before{content:&quot;\f29f&quot;}.ion-bookmarks:before{content:&quot;\f2a0&quot;}.ion-bowtie:before{content:&quot;\f2a1&quot;}.ion-briefcase:before{content:&quot;\f2a2&quot;}.ion-browsers:before{content:&quot;\f2a3&quot;}.ion-brush:before{content:&quot;\f2a4&quot;}.ion-bug:before{content:&quot;\f2a5&quot;}.ion-build:before{content:&quot;\f2a6&quot;}.ion-bulb:before{content:&quot;\f2a7&quot;}.ion-bus:before{content:&quot;\f2a8&quot;}.ion-business:before{content:&quot;\f1a4&quot;}.ion-cafe:before{content:&quot;\f2a9&quot;}.ion-calculator:before{content:&quot;\f2aa&quot;}.ion-calendar:before{content:&quot;\f2ab&quot;}.ion-call:before{content:&quot;\f2ac&quot;}.ion-camera:before{content:&quot;\f2ad&quot;}.ion-car:before{content:&quot;\f2b2&quot;}.ion-card:before{content:&quot;\f2b3&quot;}.ion-cart:before{content:&quot;\f2b4&quot;}.ion-cash:before{content:&quot;\f2b5&quot;}.ion-cellular:before{content:&quot;\f164&quot;}.ion-chatboxes:before{content:&quot;\f2b6&quot;}.ion-chatbubbles:before{content:&quot;\f2b7&quot;}.ion-checkbox:before{content:&quot;\f2b9&quot;}.ion-checkbox-outline:before{content:&quot;\f2b8&quot;}.ion-checkmark:before{content:&quot;\f2bc&quot;}.ion-checkmark-circle:before{content:&quot;\f2bb&quot;}.ion-checkmark-circle-outline:before{content:&quot;\f2ba&quot;}.ion-clipboard:before{content:&quot;\f2bd&quot;}.ion-clock:before{content:&quot;\f2be&quot;}.ion-close:before{content:&quot;\f2c0&quot;}.ion-close-circle:before{content:&quot;\f2bf&quot;}.ion-close-circle-outline:before{content:&quot;\f166&quot;}.ion-cloud:before{content:&quot;\f2c9&quot;}.ion-cloud-circle:before{content:&quot;\f2c2&quot;}.ion-cloud-done:before{content:&quot;\f2c3&quot;}.ion-cloud-download:before{content:&quot;\f2c6&quot;}.ion-cloud-outline:before{content:&quot;\f2c7&quot;}.ion-cloud-upload:before{content:&quot;\f2c8&quot;}.ion-cloudy:before{content:&quot;\f2cb&quot;}.ion-cloudy-night:before{content:&quot;\f2ca&quot;}.ion-code:before{content:&quot;\f2ce&quot;}.ion-code-download:before{content:&quot;\f2cc&quot;}.ion-code-working:before{content:&quot;\f2cd&quot;}.ion-cog:before{content:&quot;\f2cf&quot;}.ion-color-fill:before{content:&quot;\f2d0&quot;}.ion-color-filter:before{content:&quot;\f2d1&quot;}.ion-color-palette:before{content:&quot;\f2d2&quot;}.ion-color-wand:before{content:&quot;\f2d3&quot;}.ion-compass:before{content:&quot;\f2d4&quot;}.ion-construct:before{content:&quot;\f2d5&quot;}.ion-contact:before{content:&quot;\f2d6&quot;}.ion-contacts:before{content:&quot;\f2d7&quot;}.ion-contract:before{content:&quot;\f2d8&quot;}.ion-contrast:before{content:&quot;\f2d9&quot;}.ion-copy:before{content:&quot;\f2da&quot;}.ion-create:before{content:&quot;\f2db&quot;}.ion-crop:before{content:&quot;\f2dc&quot;}.ion-cube:before{content:&quot;\f2dd&quot;}.ion-cut:before{content:&quot;\f2de&quot;}.ion-desktop:before{content:&quot;\f2df&quot;}.ion-disc:before{content:&quot;\f2e0&quot;}.ion-document:before{content:&quot;\f2e1&quot;}.ion-done-all:before{content:&quot;\f2e2&quot;}.ion-download:before{content:&quot;\f2e3&quot;}.ion-easel:before{content:&quot;\f2e4&quot;}.ion-egg:before{content:&quot;\f2e5&quot;}.ion-exit:before{content:&quot;\f2e6&quot;}.ion-expand:before{content:&quot;\f2e7&quot;}.ion-eye:before{content:&quot;\f2e9&quot;}.ion-eye-off:before{content:&quot;\f2e8&quot;}.ion-fastforward:before{content:&quot;\f2ea&quot;}.ion-female:before{content:&quot;\f2eb&quot;}.ion-filing:before{content:&quot;\f2ec&quot;}.ion-film:before{content:&quot;\f2ed&quot;}.ion-finger-print:before{content:&quot;\f2ee&quot;}.ion-fitness:before{content:&quot;\f1ac&quot;}.ion-flag:before{content:&quot;\f2ef&quot;}.ion-flame:before{content:&quot;\f2f0&quot;}.ion-flash:before{content:&quot;\f17e&quot;}.ion-flash-off:before{content:&quot;\f12f&quot;}.ion-flashlight:before{content:&quot;\f16b&quot;}.ion-flask:before{content:&quot;\f2f2&quot;}.ion-flower:before{content:&quot;\f2f3&quot;}.ion-folder:before{content:&quot;\f2f5&quot;}.ion-folder-open:before{content:&quot;\f2f4&quot;}.ion-football:before{content:&quot;\f2f6&quot;}.ion-funnel:before{content:&quot;\f2f7&quot;}.ion-gift:before{content:&quot;\f199&quot;}.ion-git-branch:before{content:&quot;\f2fa&quot;}.ion-git-commit:before{content:&quot;\f2fb&quot;}.ion-git-compare:before{content:&quot;\f2fc&quot;}.ion-git-merge:before{content:&quot;\f2fd&quot;}.ion-git-network:before{content:&quot;\f2fe&quot;}.ion-git-pull-request:before{content:&quot;\f2ff&quot;}.ion-glasses:before{content:&quot;\f300&quot;}.ion-globe:before{content:&quot;\f301&quot;}.ion-grid:before{content:&quot;\f302&quot;}.ion-hammer:before{content:&quot;\f303&quot;}.ion-hand:before{content:&quot;\f304&quot;}.ion-happy:before{content:&quot;\f305&quot;}.ion-headset:before{content:&quot;\f306&quot;}.ion-heart:before{content:&quot;\f308&quot;}.ion-heart-dislike:before{content:&quot;\f167&quot;}.ion-heart-empty:before{content:&quot;\f1a1&quot;}.ion-heart-half:before{content:&quot;\f1a2&quot;}.ion-help:before{content:&quot;\f30b&quot;}.ion-help-buoy:before{content:&quot;\f309&quot;}.ion-help-circle:before{content:&quot;\f30a&quot;}.ion-help-circle-outline:before{content:&quot;\f16d&quot;}.ion-home:before{content:&quot;\f30c&quot;}.ion-hourglass:before{content:&quot;\f111&quot;}.ion-ice-cream:before{content:&quot;\f30d&quot;}.ion-image:before{content:&quot;\f30e&quot;}.ion-images:before{content:&quot;\f30f&quot;}.ion-infinite:before{content:&quot;\f310&quot;}.ion-information:before{content:&quot;\f312&quot;}.ion-information-circle:before{content:&quot;\f311&quot;}.ion-information-circle-outline:before{content:&quot;\f16f&quot;}.ion-jet:before{content:&quot;\f315&quot;}.ion-journal:before{content:&quot;\f18d&quot;}.ion-key:before{content:&quot;\f316&quot;}.ion-keypad:before{content:&quot;\f317&quot;}.ion-laptop:before{content:&quot;\f318&quot;}.ion-leaf:before{content:&quot;\f319&quot;}.ion-link:before{content:&quot;\f22e&quot;}.ion-list:before{content:&quot;\f31b&quot;}.ion-list-box:before{content:&quot;\f31a&quot;}.ion-locate:before{content:&quot;\f31c&quot;}.ion-lock:before{content:&quot;\f31d&quot;}.ion-log-in:before{content:&quot;\f31e&quot;}.ion-log-out:before{content:&quot;\f31f&quot;}.ion-magnet:before{content:&quot;\f320&quot;}.ion-mail:before{content:&quot;\f322&quot;}.ion-mail-open:before{content:&quot;\f321&quot;}.ion-mail-unread:before{content:&quot;\f172&quot;}.ion-male:before{content:&quot;\f323&quot;}.ion-man:before{content:&quot;\f324&quot;}.ion-map:before{content:&quot;\f325&quot;}.ion-medal:before{content:&quot;\f326&quot;}.ion-medical:before{content:&quot;\f327&quot;}.ion-medkit:before{content:&quot;\f328&quot;}.ion-megaphone:before{content:&quot;\f329&quot;}.ion-menu:before{content:&quot;\f32a&quot;}.ion-mic:before{content:&quot;\f32c&quot;}.ion-mic-off:before{content:&quot;\f32b&quot;}.ion-microphone:before{content:&quot;\f32d&quot;}.ion-moon:before{content:&quot;\f32e&quot;}.ion-more:before{content:&quot;\f1c9&quot;}.ion-move:before{content:&quot;\f331&quot;}.ion-musical-note:before{content:&quot;\f332&quot;}.ion-musical-notes:before{content:&quot;\f333&quot;}.ion-navigate:before{content:&quot;\f334&quot;}.ion-notifications:before{content:&quot;\f338&quot;}.ion-notifications-off:before{content:&quot;\f336&quot;}.ion-notifications-outline:before{content:&quot;\f337&quot;}.ion-nuclear:before{content:&quot;\f339&quot;}.ion-nutrition:before{content:&quot;\f33a&quot;}.ion-open:before{content:&quot;\f33b&quot;}.ion-options:before{content:&quot;\f33c&quot;}.ion-outlet:before{content:&quot;\f33d&quot;}.ion-paper:before{content:&quot;\f33f&quot;}.ion-paper-plane:before{content:&quot;\f33e&quot;}.ion-partly-sunny:before{content:&quot;\f340&quot;}.ion-pause:before{content:&quot;\f341&quot;}.ion-paw:before{content:&quot;\f342&quot;}.ion-people:before{content:&quot;\f343&quot;}.ion-person:before{content:&quot;\f345&quot;}.ion-person-add:before{content:&quot;\f344&quot;}.ion-phone-landscape:before{content:&quot;\f346&quot;}.ion-phone-portrait:before{content:&quot;\f347&quot;}.ion-photos:before{content:&quot;\f348&quot;}.ion-pie:before{content:&quot;\f349&quot;}.ion-pin:before{content:&quot;\f34a&quot;}.ion-pint:before{content:&quot;\f34b&quot;}.ion-pizza:before{content:&quot;\f354&quot;}.ion-planet:before{content:&quot;\f356&quot;}.ion-play:before{content:&quot;\f357&quot;}.ion-play-circle:before{content:&quot;\f174&quot;}.ion-podium:before{content:&quot;\f358&quot;}.ion-power:before{content:&quot;\f359&quot;}.ion-pricetag:before{content:&quot;\f35a&quot;}.ion-pricetags:before{content:&quot;\f35b&quot;}.ion-print:before{content:&quot;\f35c&quot;}.ion-pulse:before{content:&quot;\f35d&quot;}.ion-qr-scanner:before{content:&quot;\f35e&quot;}.ion-quote:before{content:&quot;\f35f&quot;}.ion-radio:before{content:&quot;\f362&quot;}.ion-radio-button-off:before{content:&quot;\f360&quot;}.ion-radio-button-on:before{content:&quot;\f361&quot;}.ion-rainy:before{content:&quot;\f363&quot;}.ion-recording:before{content:&quot;\f364&quot;}.ion-redo:before{content:&quot;\f365&quot;}.ion-refresh:before{content:&quot;\f366&quot;}.ion-refresh-circle:before{content:&quot;\f228&quot;}.ion-remove:before{content:&quot;\f368&quot;}.ion-remove-circle:before{content:&quot;\f367&quot;}.ion-remove-circle-outline:before{content:&quot;\f176&quot;}.ion-reorder:before{content:&quot;\f369&quot;}.ion-repeat:before{content:&quot;\f36a&quot;}.ion-resize:before{content:&quot;\f36b&quot;}.ion-restaurant:before{content:&quot;\f36c&quot;}.ion-return-left:before{content:&quot;\f36d&quot;}.ion-return-right:before{content:&quot;\f36e&quot;}.ion-reverse-camera:before{content:&quot;\f36f&quot;}.ion-rewind:before{content:&quot;\f370&quot;}.ion-ribbon:before{content:&quot;\f371&quot;}.ion-rocket:before{content:&quot;\f179&quot;}.ion-rose:before{content:&quot;\f372&quot;}.ion-sad:before{content:&quot;\f373&quot;}.ion-save:before{content:&quot;\f1a9&quot;}.ion-school:before{content:&quot;\f374&quot;}.ion-search:before{content:&quot;\f375&quot;}.ion-send:before{content:&quot;\f376&quot;}.ion-settings:before{content:&quot;\f377&quot;}.ion-share:before{content:&quot;\f379&quot;}.ion-share-alt:before{content:&quot;\f378&quot;}.ion-shirt:before{content:&quot;\f37a&quot;}.ion-shuffle:before{content:&quot;\f37b&quot;}.ion-skip-backward:before{content:&quot;\f37c&quot;}.ion-skip-forward:before{content:&quot;\f37d&quot;}.ion-snow:before{content:&quot;\f37e&quot;}.ion-speedometer:before{content:&quot;\f37f&quot;}.ion-square:before{content:&quot;\f381&quot;}.ion-square-outline:before{content:&quot;\f380&quot;}.ion-star:before{content:&quot;\f384&quot;}.ion-star-half:before{content:&quot;\f382&quot;}.ion-star-outline:before{content:&quot;\f383&quot;}.ion-stats:before{content:&quot;\f385&quot;}.ion-stopwatch:before{content:&quot;\f386&quot;}.ion-subway:before{content:&quot;\f387&quot;}.ion-sunny:before{content:&quot;\f388&quot;}.ion-swap:before{content:&quot;\f389&quot;}.ion-switch:before{content:&quot;\f38a&quot;}.ion-sync:before{content:&quot;\f38b&quot;}.ion-tablet-landscape:before{content:&quot;\f38c&quot;}.ion-tablet-portrait:before{content:&quot;\f38d&quot;}.ion-tennisball:before{content:&quot;\f38e&quot;}.ion-text:before{content:&quot;\f38f&quot;}.ion-thermometer:before{content:&quot;\f390&quot;}.ion-thumbs-down:before{content:&quot;\f391&quot;}.ion-thumbs-up:before{content:&quot;\f392&quot;}.ion-thunderstorm:before{content:&quot;\f393&quot;}.ion-time:before{content:&quot;\f394&quot;}.ion-timer:before{content:&quot;\f395&quot;}.ion-today:before{content:&quot;\f17d&quot;}.ion-train:before{content:&quot;\f396&quot;}.ion-transgender:before{content:&quot;\f397&quot;}.ion-trash:before{content:&quot;\f398&quot;}.ion-trending-down:before{content:&quot;\f399&quot;}.ion-trending-up:before{content:&quot;\f39a&quot;}.ion-trophy:before{content:&quot;\f39b&quot;}.ion-tv:before{content:&quot;\f17f&quot;}.ion-umbrella:before{content:&quot;\f39c&quot;}.ion-undo:before{content:&quot;\f39d&quot;}.ion-unlock:before{content:&quot;\f39e&quot;}.ion-videocam:before{content:&quot;\f39f&quot;}.ion-volume-high:before{content:&quot;\f123&quot;}.ion-volume-low:before{content:&quot;\f131&quot;}.ion-volume-mute:before{content:&quot;\f3a1&quot;}.ion-volume-off:before{content:&quot;\f3a2&quot;}.ion-walk:before{content:&quot;\f3a4&quot;}.ion-wallet:before{content:&quot;\f18f&quot;}.ion-warning:before{content:&quot;\f3a5&quot;}.ion-watch:before{content:&quot;\f3a6&quot;}.ion-water:before{content:&quot;\f3a7&quot;}.ion-wifi:before{content:&quot;\f3a8&quot;}.ion-wine:before{content:&quot;\f3a9&quot;}.ion-woman:before{content:&quot;\f3aa&quot;}#zym{position:absolute;top:62px;right:15px;background-color:rgba(255,255,255,0.9);box-sizing:border-box;width:400px;font-size:13px}#zym&gt;div{margin:0 15px 15px 15px}#zym&gt;div:first-child{margin-top:15px}#zym&gt;div[name=&quot;path&quot;]&gt;span{cursor:default}#zym&gt;div[name=&quot;path&quot;]&gt;span:not(:first-child):before{padding:0 8px;font-family:&quot;Ionicons&quot;;content:&quot;\f284&quot;;color:#09f}#zym&gt;div[name=&quot;full&quot;]{margin:0;padding:0}#zym&gt;div&gt;table{width:100%}#zym&gt;div&gt;table&gt;tbody&gt;tr{border-top:1px solid #bdf}#zym&gt;div&gt;table&gt;tbody&gt;tr:last-child{border-bottom:1px solid #bdf}#zym&gt;div&gt;table&gt;tbody&gt;tr.on{color:#000;background-color:#cbedff}#zym&gt;div&gt;table&gt;tbody&gt;tr.on&gt;td:nth-child(1){color:#09f}#zym&gt;div&gt;table&gt;tbody&gt;tr.on&gt;td:nth-child(1):before{content:&quot;\f2b8&quot;}#zym&gt;div&gt;table&gt;tbody&gt;tr&gt;td{cursor:default;line-height:40px}#zym&gt;div&gt;table&gt;tbody&gt;tr&gt;td:nth-child(1){text-align:left;padding-left:12px;color:#999;font-family:&quot;Ionicons&quot;;font-size:120%}#zym&gt;div&gt;table&gt;tbody&gt;tr&gt;td:nth-child(1):before{content:&quot;\f380&quot;}#zym&gt;div&gt;table&gt;tbody&gt;tr&gt;td:nth-child(2){overflow:hidden;white-space:nowrap;text-overflow:&quot;&quot;;word-wrap:normal;max-width:292px}#zym&gt;div&gt;table&gt;tbody&gt;tr&gt;td:nth-child(2)&gt;input{background-color:transparent;border:none;outline:none;width:100%}#zym&gt;div&gt;table&gt;tbody&gt;tr&gt;td:nth-child(3){text-align:right;padding-right:12px}div.tamper{align-items:center;background-color:rgba(0,0,0,0.7);box-sizing:border-box;cursor:default;display:none;font-size:14px !important;height:100%;justify-content:center;left:0;position:fixed;top:0;text-align:left;width:100%;z-index:999999}div.tamper&gt;div{background-color:white;box-sizing:border-box;padding:1em;width:360px}div.tamper&gt;div.w2{padding:0;width:720px}div.tamper&gt;div.w2&gt;div{padding:10px 20px}div.tamper&gt;div.w2&gt;ul{margin:0;padding:0;display:flex;flex-wrap:wrap;justify-content:center;list-style-type:none;list-style-position:inside}div.tamper&gt;div.w2&gt;ul[id=&quot;vlist&quot;]{height:460px;scrollbar-width:none}div.tamper&gt;div.w2&gt;ul[id=&quot;vlist&quot;]::-webkit-scrollbar{display:none}div.tamper&gt;div.w2&gt;ul[id=&quot;vlist&quot;]&gt;li{width:160px;margin:0px;padding:0px 8px 16px 8px}div.tamper&gt;div.w2&gt;ul[id=&quot;vlist&quot;]&gt;li img.pic{display:block;width:160px;height:100px;margin-bottom:5px}div.tamper&gt;div.w2&gt;ul[id=&quot;vlist&quot;]&gt;li div.title{white-space:normal;line-height:1.25;display:-webkit-box;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical}div.tamper a{color:#333 !important;text-decoration:none}div.tamper h1{font-size:1.8rem;font-weight:400;margin:10px 0 20px 0;text-align:center}div.tamper form{display:block}div.tamper form&gt;div{padding:0.5em 0}div.tamper form&gt;div&gt;div{margin:0.5em 0}div.tamper form&gt;div&gt;div:last-child{margin-bottom:0}div.tamper form label{color:#000}div.tamper form label:first-child{display:block;margin-bottom:0.5em}div.tamper form label:first-child:before{content:&quot;\00bb&quot;;margin:0 0.25em}div.tamper form label:not(:first-child){display:inline}div.tamper form input{box-shadow:none;color:#000}div.tamper form input[type=&quot;text&quot;]{background-color:#fff;border:1px solid #ddd;box-sizing:border-box;display:block;font-size:1em;padding:0.5em;width:100%}div.tamper form input[type=&quot;text&quot;]:focus{border:1px solid #59c1f0}div.tamper form input[type=&quot;password&quot;]{background-color:#fff;border:1px solid #ddd;box-sizing:border-box;display:block;font-size:1em;padding:0.5em;width:100%}div.tamper form input[type=&quot;quot;password&quot;]:focus{border:1px solid #59c1f0}div.tamper form input[type=&quot;radio&quot;],div.tamper form input[type=&quot;checkbox&quot;]{display:inline-block !important;height:1em;margin-right:0.25em;width:1em}div.tamper form input[type=&quot;checkbox&quot;]{-webkit-appearance:checkbox !important}div.tamper form input[type=&quot;radio&quot;]{-webkit-appearance:radio !important}div.tamper ul{margin:0;padding:0;list-style-type:none;list-style-position:inside;max-height:500px;overflow-y:auto;scrollbar-width:none}div.tamper ul&gt;li{box-sizing:content-box;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0.25em 0;cursor:default}div.tamper ul&gt;li.on{color:#f45a8d}div.summary{color:#666}div.btn-group{box-sizing:border-box;display:inline-flex}div.btn-group.full{display:flex}div.btn-group.outline&gt;button{background-color:#fff;border:1px solid #ccc;color:#000}div.btn-group.outline&gt;button:hover{color:#ffffff;background-color:#000;border-color:#000}div.btn-group.outline&gt;button:not(:first-child){border-left:none}div.btn-group&gt;button{background-color:#666;border-radius:0;border:none;color:#fff;display:inline-block;flex:1 1 auto;margin:0;outline:none;padding:0.5em 1.25em;position:relative;font-size:inherit}div.btn-group&gt;button:hover{background-color:#000}div.btn-group&gt;button:first-child{border-bottom-left-radius:0.25rem;border-top-left-radius:0.25rem}div.btn-group&gt;button:last-child{border-bottom-right-radius:0.25rem;border-top-right-radius:0.25rem}.mt1{margin-top:10px !important}@keyframes spinner{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.spinner{animation-name:spinner;animation-duration:2400ms;animation-timing-function:linear;animation-iteration-count:infinite}`), location.hostname.includes(&quot;bilibili.com&quot;)) if (GM_addStyle(String.raw`html,div.list-wrapper,div.section-ep-wrapper{scrollbar-width:thin}div.list-wrapper:-webkit-scrollbar,div.section-ep-wrapper:-webkit-scrollbar{display:none}`), ipod.defaults = {

    token: &quot;&quot;,

    jsonrpc: &quot;http://127.0.0.1:16800/jsonrpc&quot;,

    dir: &quot;D:/HD2A&quot;,

    cdn: &quot;upos-sz-mirrorks3.bilivideo.com&quot;,

    coin: 0,

    follow: 0

  }, ipod.aria2 = u.load(&quot;aria2&quot;, ipod.defaults), ipod.aria2.hasOwnProperty(&quot;cdn&quot;) || (ipod.aria2.cdn = &quot;upos-sz-mirrorks3.bilivideo.com&quot;, u.save(&quot;aria2&quot;, ipod.aria2)), ipod.home = &quot;https://121.5.226.51/bz&quot;, ipod.dtvip = 1e3 * (ipod.now + 9e4), ipod.dtpub = 0, ipod.latest = u.load(&quot;latest&quot;, 0), ipod.bzui = u.load(&quot;bzui&quot;), ipod.sign = btoa(JSON.stringify(ipod.bzui)), ipod.zone = u.load(&quot;zone&quot;), ipod.mid = document.cookie.includes(&quot;DedeUserID&quot;) ? Number.parseInt(u.strcut(document.cookie, &quot;DedeUserID=&quot;, &quot;;&quot;)) : 0, ipod.mid ? (setTimeout(() =&gt; {

    document.querySelector(&quot;div.logout&quot;) &amp;&amp; u.cpdom(document.querySelector(&quot;div.logout &gt; span&quot;)).addEventListener(&quot;click&quot;, () =&gt; {

      u.zdom(), GM_cookie.list({}, r =&gt; {

        r.forEach(t =&gt; {

          GM_cookie.delete(t);

        });

      }), location.href = &quot;https://passport.bilibili.com/login&quot;;

    });

  }, 3e3), (null == ipod.bzui || ipod.mid != ipod.bzui.mid || ipod.now &gt; ipod.latest) &amp;&amp; (ipod.latest = ipod.now + 9e4, u.save(&quot;latest&quot;, ipod.latest), GM_cookie.list({}, r =&gt; {

    let arr = Array.isArray(r) &amp;&amp; r.length ? u.cclean(r) : [];

    arr.length ? (arr.sort(), ipod.cookie = arr.join(&quot;;&quot;)) : setTimeout(() =&gt; {

      console.log(&quot;\u67e5\u8be2\u4e0d\u5230\u8d26\u53f7cookie\u4fe1\u606f&quot;);

    }, 5e3);

  }), fetch(&quot;https://api.bilibili.com/x/web-interface/nav&quot;, {

    method: &quot;GET&quot;,

    mode: &quot;cors&quot;,

    credentials: &quot;include&quot;

  }).then(r =&gt; r.json()).then(d =&gt; {

    ipod.bzui = 0 == d.code ? {

      mid: d.data.mid,

      level: d.data.level_info.current_level,

      vip: d.data.vipStatus,

      csrf: u.strcut(document.cookie, &quot;bili_jct=&quot;, &quot;;&quot;),

      cookie: ipod.cookie

    } : null, null == ipod.bzui ? setTimeout(() =&gt; {

      console.clear(), console.log(&quot;\u67e5\u8be2\u4e0d\u5230\u8d26\u53f7\u57fa\u672c\u4fe1\u606f&quot;);

    }, 2e3) : (ipod.sign = btoa(JSON.stringify(ipod.bzui)), u.save(&quot;bzui&quot;, ipod.bzui));

  }), fetch(&quot;https://api.bilibili.com/x/web-interface/zone&quot;, {

    method: &quot;GET&quot;,

    mode: &quot;cors&quot;,

    credentials: &quot;omit&quot;

  }).then(r =&gt; r.json()).then(d =&gt; {

    0 == d.code &amp;&amp; (ipod.zone = d.data, u.save(&quot;zone&quot;, ipod.zone));

  }))) : location.href = &quot;https://passport.bilibili.com/ajax/miniLogin/minilogin&quot;, &quot;space.bilibili.com&quot; == location.hostname) {

    function urlplayer() {

      let dom = u.zdom(1).closest(&quot;a&quot;);

      if (ipod.idle) if (dom.getAttribute(&quot;href&quot;).includes(&quot;/video/BV&quot;)) {

        ipod.idle = 0;

        let bvid = u.strcut(dom.getAttribute(&quot;href&quot;), &quot;/video/&quot;);

        GM_xmlhttpRequest({

          url: `${ipod.home}/ajax?act=bangumi&amp;bvid=${bvid}&amp;version=${ipod.version}&amp;sign=${ipod.sign}`,

          method: &quot;GET&quot;,

          responseType: &quot;json&quot;,

          onload(r) {

            ipod.idle = 1;

            let d = r.response;

            switch (d.code) {

             case 0:

              location.href = &quot;https://www.bilibili.com/bangumi/play/ep&quot; + d.message;

              break;

             case 999:

              u.urlopen(d.message);

              break;

             default:

              alert(d.message);

            }

          }

        });

      } else location.href = dom.getAttribute(&quot;href&quot;);

    }

    function vbangumi() {

      ipod.task = setInterval(() =&gt; {

        if (document.querySelector(&quot;#app&quot;)) {

          clearInterval(ipod.task);

          let dom = document.querySelector(&quot;div.video&gt;div.content&quot;);

          dom &amp;&amp; dom.addEventListener(&quot;click&quot;, urlplayer), (dom = document.querySelector(&quot;#submit-video-list&quot;)) &amp;&amp; dom.addEventListener(&quot;click&quot;, urlplayer), (dom = document.querySelector(&quot;div.col-1&quot;)) &amp;&amp; dom.addEventListener(&quot;click&quot;, urlplayer);

        }

      }, 1e3);

    }

    &quot;11783021&quot; == u.strcut(location.pathname, &quot;/&quot;, &quot;/&quot;) &amp;&amp; (history.pushState = u.history(&quot;pushState&quot;), unsafeWindow.addEventListener(&quot;pushState&quot;, vbangumi), history.replaceState = u.history(&quot;replaceState&quot;), unsafeWindow.addEventListener(&quot;replaceState&quot;, vbangumi), vbangumi(), zproxy());

  } else if (&quot;www.bilibili.com&quot; == location.hostname) {

    function dp(name, hook) {

      let tmp;

      Object.defineProperty(unsafeWindow, name, {

        configurable: true,

        enumerable: true,

        get: () =&gt; tmp,

        set(val) {

          tmp = hook.call(null, val);

        }

      });

    }

    function dphook(obj) {

      return obj.initEpList &amp;&amp; obj.initEpList.forEach(t =&gt; {

        t.epStatus = 2, t.status = 2, t.rights.allow_dm = 0, t.rights.allow_limit = 0;

      }), obj.epList &amp;&amp; obj.epList.forEach(t =&gt; {

        t.epStatus = 2, t.status = 2, t.rights.allow_dm = 0, t.rights.allow_limit = 0;

      }), obj.epInfo &amp;&amp; (obj.epInfo.epStatus = 2, obj.epInfo.status = 2, obj.epInfo.rights.allow_dm = 0, obj.epInfo.rights.area_limit = 0), obj.mediaInfo &amp;&amp; (obj.mediaInfo.episodes &amp;&amp; obj.mediaInfo.episodes.forEach(t =&gt; {

        t.epStatus = 2, t.status = 2, t.rights.allow_dm = 0, t.rights.allow_limit = 0;

      }), obj.mediaInfo.rigths &amp;&amp; (obj.mediaInfo.rights.allowBp = false, obj.mediaInfo.rights.allowBpRank = false, obj.mediaInfo.rights.appOnly = false, obj.mediaInfo.rights.area_limit = 0, obj.mediaInfo.rights.canWatch = true), obj.mediaInfo.user_status &amp;&amp; (obj.mediaInfo.user_status.area_limit = 0, obj.mediaInfo.user_status.ban_area_show = 0, obj.mediaInfo.user_status.sponsor = 0)), obj;

    }

    function dvideo(arr) {

      arr.forEach(t =&gt; {

        GM_xmlhttpRequest({

          url: `${ipod.home}/ajax?act=bvlink2&amp;bvid=${t.bvid}&amp;cid=${t.cid}&amp;sign=${ipod.sign}`,

          method: &quot;GET&quot;,

          responseType: &quot;json&quot;,

          onload(r) {

            ipod.idx++, 0 == r.response.code &amp;&amp; ipod.list.push({

              &quot;use-header&quot;: &quot;true&quot;,

              header: ipod.header,

              split: &quot;16&quot;,

              dir: ipod.aria2.dir,

              out: t.out,

              url: [r.response.data.durl[0].url]

            }), ipod.idx == ipod.len &amp;&amp; (ipod.idle = 1, document.querySelector(&quot;#zydl &gt; i&quot;).removeAttribute(&quot;style&quot;), u.aria2(ipod.list));

          }

        });

      });

    }

    function bvlist(str) {

      let dom = document.querySelector(&quot;#zylist&quot;);

      dom ? (dom.querySelector(&quot;div &gt; ul&quot;).innerHTML = str, dom.setAttribute(&quot;style&quot;, &quot;display: flex&quot;)) : (document.body.insertAdjacentHTML(&quot;beforeend&quot;, `&lt;div id=&quot;zylist&quot; class=&quot;tamper&quot;&gt;&lt;div&gt;&lt;div class=&quot;btn-group full&quot;&gt;&lt;button name=&quot;cancel&quot;&gt; \u53d6\u6d88 &lt;/button&gt;&lt;button name=&quot;all&quot;&gt; \u5168\u9009 &lt;/button&gt;&lt;button name=&quot;invert&quot;&gt; \u53cd\u9009 &lt;/button&gt;&lt;button name=&quot;download&quot;&gt;&lt;i class=&quot;ion-download&quot;&gt;&lt;/i&gt; \u4e0b\u8f7d &lt;/button&gt;&lt;/div&gt;&lt;ul class=&quot;mt1&quot;&gt;${str}&lt;/ul&gt;&lt;/div&gt;&lt;/div&gt;`), document.querySelector(&quot;#zylist &gt; div &gt; ul&quot;).addEventListener(&quot;click&quot;, () =&gt; {

        let dom = u.zdom(1);

        dom.className = &quot;on&quot; == dom.className ? &quot;&quot; : &quot;on&quot;;

      }), document.querySelector(&quot;#zylist &gt; div &gt; div.btn-group&quot;).addEventListener(&quot;click&quot;, () =&gt; {

        switch (u.zdom(1).getAttribute(&quot;name&quot;)) {

         case &quot;cancel&quot;:

          document.querySelector(&quot;#zylist&quot;).setAttribute(&quot;style&quot;, &quot;display: none&quot;), document.querySelector(&quot;#zydl &gt; i&quot;).removeAttribute(&quot;style&quot;);

          break;

         case &quot;all&quot;:

          document.querySelectorAll(&quot;#zylist &gt; div &gt; ul &gt; li&quot;).forEach(t =&gt; {

            t.className = &quot;on&quot;;

          });

          break;

         case &quot;invert&quot;:

          document.querySelectorAll(&quot;#zylist &gt; div &gt; ul &gt; li&quot;).forEach(t =&gt; {

            t.className = &quot;on&quot; == t.className ? &quot;&quot; : &quot;on&quot;;

          });

          break;

         default:

          let arr = [], list = [];

          document.querySelector(&quot;#zylist&quot;).setAttribute(&quot;style&quot;, &quot;display: none&quot;), document.querySelectorAll(&quot;#zylist &gt; div &gt; ul &gt; li&quot;).forEach(t =&gt; {

            &quot;on&quot; == t.className &amp;&amp; arr.push(Number.parseInt(t.getAttribute(&quot;name&quot;)));

          }), ipod.len = arr.length, &quot;video&quot; == ipod.vt &amp;&amp; (ipod.vi.videoData.pages.forEach(t =&gt; {

            arr.includes(t.cid) &amp;&amp; list.push({

              bvid: ipod.bvid,

              cid: t.cid,

              out: ipod.bvid + &quot;/&quot; + u.namefix(t.part.replaceAll(&quot;/&quot;, &quot; &quot;).replaceAll(/\s+/g, &quot; &quot;)) + &quot;.flv&quot;

            });

          }), dvideo(list)), &quot;anime&quot; == ipod.vt &amp;&amp; (ipod.vi.epList.forEach(t =&gt; {

            arr.includes(t.cid) &amp;&amp; list.push({

              bvid: t.bvid,

              cid: t.cid,

              out: ipod.title + &quot;/&quot; + (t.longTitle ? u.zero(t.title, 3) + &quot; &quot; + u.namefix(t.longTitle.replaceAll(&quot;/&quot;, &quot; &quot;).replaceAll(/\s+/g, &quot; &quot;)) : t.titleFormat) + &quot;.flv&quot;

            });

          }), dvideo(list));

        }

      }), document.querySelector(&quot;#zylist&quot;).setAttribute(&quot;style&quot;, &quot;display: flex&quot;));

    }

    function bvdl() {

      ipod.idle &amp;&amp; (u.zdom(), document.querySelector(&quot;#zydl &gt; i&quot;).setAttribute(&quot;style&quot;, &quot;color: #fb7299&quot;), ipod.header = [&quot;User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36&quot;, &quot;Referer: &quot; + location.href], ipod.list = [], ipod.idx = 0, ipod.vi = unsafeWindow.__INITIAL_STATE__, ipod.vi.hasOwnProperty(&quot;videoData&quot;) &amp;&amp; (ipod.vt = &quot;video&quot;, ipod.bvid = ipod.vi.bvid, ipod.len = ipod.vi.videoData.pages.length, ipod.len &gt; 1 ? bvlist(ipod.vi.videoData.pages.map(t =&gt; `&lt;li name=&quot;${t.cid}&quot;&gt;${t.part}&lt;/li&gt;`).join(&quot;&quot;)) : dvideo(ipod.vi.videoData.pages.map(t =&gt; ({

        bvid: ipod.bvid,

        cid: t.cid,

        out: ipod.bvid + &quot;.flv&quot;

      })))), ipod.vi.hasOwnProperty(&quot;mediaInfo&quot;) &amp;&amp; (ipod.vt = &quot;anime&quot;, ipod.title = u.namefix(ipod.vi.mediaInfo.title.replaceAll(&quot;/&quot;, &quot; &quot;).replaceAll(/\s+/g, &quot; &quot;)), ipod.len = ipod.vi.epList.length, ipod.len &gt; 1 ? bvlist(ipod.vi.epList.map(t =&gt; {

        let s = t.longTitle ? u.zero(t.title, 3) + &quot; &quot; + t.longTitle : t.titleFormat;

        return `&lt;li name=&quot;${t.cid}&quot;&gt;${s}&lt;/li&gt;`;

      }).join(&quot;&quot;)) : dvideo(ipod.vi.epList.map(t =&gt; ({

        bvid: t.bvid,

        cid: t.cid,

        out: ipod.title + &quot;/&quot; + u.namefix(t.titleFormat.replaceAll(&quot;/&quot;, &quot; &quot;).replaceAll(/\s+/g, &quot; &quot;)) + &quot;.flv&quot;

      })))));

    }

    if (location.pathname.startsWith(&quot;/video&quot;)) {

      let bvid = location.pathname.substring(7, 19);

      fetch(`https://api.bilibili.com/x/web-interface/view?bvid=${bvid}`).then(r =&gt; r.json()).then(d =&gt; {

        switch (d.code) {

         case -404:

          GM_xmlhttpRequest({

            url: `${ipod.home}/ajax?act=bangumi&amp;version=${ipod.version}&amp;sign=${ipod.sign}&amp;bvid=${bvid}`,

            method: &quot;GET&quot;,

            responseType: &quot;json&quot;,

            onload(r) {

              console.log(&quot;r = %o&quot;, r);

              let d = r.response;

              switch (console.log(&quot;d = %o&quot;, d), d.code) {

               case 0:

                location.href = &quot;https://www.bilibili.com/bangumi/play/ep&quot; + d.message;

                break;

               case 999:

                u.urlopen(d.message);

                break;

               default:

                alert(d.message);

              }

            }

          });

          break;

         default:

          ipod.task = setInterval(() =&gt; {

            document.querySelector(&quot;#app&quot;).hasAttribute(&quot;data-server-rendered&quot;) || (clearInterval(ipod.task), ipod.mid &amp;&amp; setTimeout(() =&gt; {

              document.querySelector(&quot;#zydl&quot;) || (document.querySelector(&quot;#arc_toolbar_report &gt; div.ops&quot;).insertAdjacentHTML(&quot;beforeend&quot;, &#x27;&lt;span id=&quot;zydl&quot; title=&quot;\u4e0b\u8f7d&quot; style=&quot;margin-left: 30px&quot;&gt;&lt;i class=&quot;van-icon-download&quot;&gt;&lt;/i&gt;\u4e0b\u8f7d&lt;/span&gt;&#x27;), document.querySelector(&quot;#zydl&quot;).addEventListener(&quot;click&quot;, bvdl), document.querySelector(&quot;#zydl&quot;).addEventListener(&quot;contextmenu&quot;, zset));

            }, 3e3));

          }, 3e3);

        }

      });

    }

    if (location.pathname.startsWith(&quot;/bangumi&quot;)) {

      function initbangumi() {

        let bvi = unsafeWindow.__INITIAL_STATE__;

        void 0 === bvi ? dp(&quot;__INITIAL_STATE__&quot;, dphook) : bvi = dphook(bvi);

      }

      history.pushState = u.history(&quot;pushState&quot;), unsafeWindow.addEventListener(&quot;pushState&quot;, initbangumi), history.replaceState = u.history(&quot;replaceState&quot;), unsafeWindow.addEventListener(&quot;replaceState&quot;, initbangumi), document.addEventListener(&quot;DOMContentLoaded&quot;, () =&gt; {

        if (null == document.querySelector(&quot;#app&quot;)) {

          let s = u.strcut(location.pathname, &quot;/play/&quot;), id = +s.match(/^(ep|ss)(\d+)/)[2], url = &quot;https://bangumi.bilibili.com/view/web_api/season?&quot; + (s.startsWith(&quot;ep&quot;) ? &quot;ep_id=&quot; : &quot;season_id=&quot;) + id;

          fetch(url).then(r =&gt; r.json()).then(d =&gt; {

            if (0 == d.code) {

              let ep = s.startsWith(&quot;ep&quot;) ? d.result.episodes.find(t =&gt; t.ep_id == id) : d.result.episodes[0], eplist = JSON.stringify(d.result.episodes.map((t, idx) =&gt; (/^\d+(\.\d+)?$/.exec(t.index) ? t.titleFormat = &quot;\u7b2c&quot; + t.index + &quot;\u8bdd &quot; + t.index_title : (t.titleFormat = t.index, t.index_title = t.index), t.loaded = true, t.epStatus = t.episode_status, t.sectionType = 0, t.id = +t.ep_id, t.i = idx, t.link = &quot;https://www.bilibili.com/bangumi/play/ep&quot; + t.ep_id, t.title = t.index, t.rights = {

                allow_demand: 0,

                allow_dm: 0,

                allow_download: 0,

                area_limit: 0

              }, t))), obj = {

                id: ep.ep_id,

                aid: ep.aid,

                cid: ep.cid,

                bvid: ep.bvid,

                title: ep.index,

                titleFormat: titleForma = ep.index_title ? ep.index_title : &quot;\u7b2c&quot; + ep.index + &quot;\u8bdd&quot;,

                htmlTitle: d.result.title,

                mediaInfoId: d.result.media_id,

                mediaInfoTitle: d.result.title,

                evaluate: d.result.evaluate.replace(/\n/g, &quot;\\\n&quot;).replace(/&quot;/g, &#x27;\\&quot;&#x27;).replace(/\r/g, &quot;\\\r&quot;).replace(/\t/g, &quot;\\\t&quot;).replace(/\b/g, &quot;\\\b&quot;).replace(/\f/g, &quot;\\\f&quot;),

                cover: d.result.cover,

                episodes: eplist,

                ssId: d.result.season_id,

                appOnly: false

              }, doc = String.raw`&lt;!DOCTYPE html&gt;&lt;html&gt;&lt;head&gt;&lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;&lt;meta name=&quot;referrer&quot; content=&quot;no-referrer-when-downgrade&quot;&gt;&lt;link rel=&quot;dns-prefetch&quot; href=&quot;//s1.hdslb.com&quot;&gt;&lt;link rel=&quot;dns-prefetch&quot; href=&quot;//s2.hdslb.com&quot;&gt;&lt;link rel=&quot;dns-prefetch&quot; href=&quot;//s3.hdslb.com&quot;&gt;&lt;link rel=&quot;dns-prefetch&quot; href=&quot;//i0.hdslb.com&quot;&gt;&lt;link rel=&quot;dns-prefetch&quot; href=&quot;//i1.hdslb.com&quot;&gt;&lt;link rel=&quot;dns-prefetch&quot; href=&quot;//i2.hdslb.com&quot;&gt;&lt;link rel=&quot;dns-prefetch&quot; href=&quot;//static.hdslb.com&quot;&gt;&lt;title&gt;哔哩哔哩番剧&lt;/title&gt;&lt;meta name=&quot;description&quot; content=&quot;哔哩哔哩番剧&quot;&gt;&lt;meta name=&quot;keywords&quot; content=&quot;哔哩哔哩番剧&quot;&gt;&lt;meta name=&quot;author&quot; content=&quot;哔哩哔哩番剧&quot;&gt;&lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;&lt;meta property=&quot;og:title&quot; content=&quot;哔哩哔哩番剧&quot;&gt;&lt;meta property=&quot;og:type&quot; content=&quot;video.anime&quot;&gt;&lt;meta property=&quot;og:url&quot; content=&quot;https://www.bilibili.com/bangumi/play/ss33577/&quot;&gt;&lt;meta property=&quot;og:image&quot; content=&quot;https://i0.hdslb.com/bfs/archive/65dc2aa1781fbb507dbb7faef1d0a6169162ffed.jpg&quot;&gt;&lt;meta name=&quot;spm_prefix&quot; content=&quot;666.25&quot;&gt;&lt;link rel=&quot;shortcut icon&quot; href=&quot;//static.hdslb.com/images/favicon.ico&quot;&gt;&lt;link rel=&quot;stylesheet&quot; href=&quot;//s1.hdslb.com/bfs/static/pgcv/css/video.1.d78d6e85da752e622f857a963ae79be916fe4c01.css&quot;&gt;&lt;link rel=&quot;stylesheet&quot; href=&quot;//s1.hdslb.com/bfs/static/pgcv/css/video.0.d78d6e85da752e622f857a963ae79be916fe4c01.css&quot;&gt;&lt;script type=&quot;text/javascript&quot; src=&quot;//s1.hdslb.com/bfs/static/player/main/video.70db8af8.js?v=20210111&quot;&gt;&lt;/script&gt;&lt;script type=&quot;application/ld+json&quot;&gt;{&quot;@context&quot;:&quot;https://schema.org&quot;,&quot;@type&quot;:&quot;ItemList&quot;,itemListElement:[{&quot;@type&quot;:&quot;VideoObject&quot;,position:1,name:&quot;\u54d4\u54e9\u54d4\u54e9\u756a\u5267&quot;,url:&quot;https://www.bilibili.com/bangumi/play/ss33577/&quot;,description:&quot;\u54d4\u54e9\u54d4\u54e9\u756a\u5267&quot;,thumbnailUrl:[&quot;https://i0.hdslb.com/bfs/archive/65dc2aa1781fbb507dbb7faef1d0a6169162ffed.jpg&quot;],uploadDate:&quot;2006-04-06T11:26:00.000Z&quot;,interactionStatistic:{&quot;@type&quot;:&quot;InteractionCounter&quot;,interactionType:{&quot;@type&quot;:&quot;http://schema.org/WatchAction&quot;},userInteractionCount:&quot;786346&quot;}}]}&lt;/script&gt;&lt;style type=&quot;text/css&quot;&gt;@font-face{font-family:&quot;Ionicons&quot;;src:url(&quot;https://cdn.bootcss.com/ionicons/4.5.6/fonts/ionicons.eot?v=4.5.5#iefix&quot;) format(&quot;embedded-opentype&quot;),url(&quot;https://cdn.bootcss.com/ionicons/4.5.6/fonts/ionicons.woff2?v=4.5.5&quot;) format(&quot;woff2&quot;),url(&quot;https://cdn.bootcss.com/ionicons/4.5.6/fonts/ionicons.woff?v=4.5.5&quot;) format(&quot;woff&quot;),url(&quot;https://cdn.bootcss.com/ionicons/4.5.6/fonts/ionicons.ttf?v=4.5.5&quot;) format(&quot;truetype&quot;),url(&quot;https://cdn.bootcss.com/ionicons/4.5.6/fonts/ionicons.svg?v=4.5.5#Ionicons&quot;) format(&quot;svg&quot;);font-weight:normal;font-style:normal}i[class|=ion]{display:inline-block;font-family:&quot;Ionicons&quot;;font-size:120%;font-style:normal;font-variant:normal;font-weight:normal;line-height:1;text-rendering:auto;text-transform:none;vertical-align:text-bottom;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}.ion-android:before{content:&quot;\f225&quot;}.ion-angular:before{content:&quot;\f227&quot;}.ion-apple:before{content:&quot;\f229&quot;}.ion-bitbucket:before{content:&quot;\f193&quot;}.ion-bitcoin:before{content:&quot;\f22b&quot;}.ion-buffer:before{content:&quot;\f22d&quot;}.ion-chrome:before{content:&quot;\f22f&quot;}.ion-closed-captioning:before{content:&quot;\f105&quot;}.ion-codepen:before{content:&quot;\f230&quot;}.ion-css3:before{content:&quot;\f231&quot;}.ion-designernews:before{content:&quot;\f232&quot;}.ion-dribbble:before{content:&quot;\f233&quot;}.ion-dropbox:before{content:&quot;\f234&quot;}.ion-euro:before{content:&quot;\f235&quot;}.ion-facebook:before{content:&quot;\f236&quot;}.ion-flickr:before{content:&quot;\f107&quot;}.ion-foursquare:before{content:&quot;\f237&quot;}.ion-freebsd-devil:before{content:&quot;\f238&quot;}.ion-game-controller-a:before{content:&quot;\f13b&quot;}.ion-game-controller-b:before{content:&quot;\f181&quot;}.ion-github:before{content:&quot;\f239&quot;}.ion-google:before{content:&quot;\f23a&quot;}.ion-googleplus:before{content:&quot;\f23b&quot;}.ion-hackernews:before{content:&quot;\f23c&quot;}.ion-html5:before{content:&quot;\f23d&quot;}.ion-instagram:before{content:&quot;\f23e&quot;}.ion-ionic:before{content:&quot;\f150&quot;}.ion-ionitron:before{content:&quot;\f151&quot;}.ion-javascript:before{content:&quot;\f23f&quot;}.ion-linkedin:before{content:&quot;\f240&quot;}.ion-markdown:before{content:&quot;\f241&quot;}.ion-model-s:before{content:&quot;\f153&quot;}.ion-no-smoking:before{content:&quot;\f109&quot;}.ion-nodejs:before{content:&quot;\f242&quot;}.ion-npm:before{content:&quot;\f195&quot;}.ion-octocat:before{content:&quot;\f243&quot;}.ion-pinterest:before{content:&quot;\f244&quot;}.ion-playstation:before{content:&quot;\f245&quot;}.ion-polymer:before{content:&quot;\f15e&quot;}.ion-python:before{content:&quot;\f246&quot;}.ion-reddit:before{content:&quot;\f247&quot;}.ion-rss:before{content:&quot;\f248&quot;}.ion-sass:before{content:&quot;\f249&quot;}.ion-skype:before{content:&quot;\f24a&quot;}.ion-slack:before{content:&quot;\f10b&quot;}.ion-snapchat:before{content:&quot;\f24b&quot;}.ion-steam:before{content:&quot;\f24c&quot;}.ion-tumblr:before{content:&quot;\f24d&quot;}.ion-tux:before{content:&quot;\f2ae&quot;}.ion-twitch:before{content:&quot;\f2af&quot;}.ion-twitter:before{content:&quot;\f2b0&quot;}.ion-usd:before{content:&quot;\f2b1&quot;}.ion-vimeo:before{content:&quot;\f2c4&quot;}.ion-vk:before{content:&quot;\f10d&quot;}.ion-whatsapp:before{content:&quot;\f2c5&quot;}.ion-windows:before{content:&quot;\f32f&quot;}.ion-wordpress:before{content:&quot;\f330&quot;}.ion-xbox:before{content:&quot;\f34c&quot;}.ion-xing:before{content:&quot;\f10f&quot;}.ion-yahoo:before{content:&quot;\f34d&quot;}.ion-yen:before{content:&quot;\f34e&quot;}.ion-youtube:before{content:&quot;\f34f&quot;}.ion-add:before{content:&quot;\f273&quot;}.ion-add-circle:before{content:&quot;\f272&quot;}.ion-add-circle-outline:before{content:&quot;\f158&quot;}.ion-airplane:before{content:&quot;\f15a&quot;}.ion-alarm:before{content:&quot;\f274&quot;}.ion-albums:before{content:&quot;\f275&quot;}.ion-alert:before{content:&quot;\f276&quot;}.ion-american-football:before{content:&quot;\f277&quot;}.ion-analytics:before{content:&quot;\f278&quot;}.ion-aperture:before{content:&quot;\f279&quot;}.ion-apps:before{content:&quot;\f27a&quot;}.ion-appstore:before{content:&quot;\f27b&quot;}.ion-archive:before{content:&quot;\f27c&quot;}.ion-arrow-back:before{content:&quot;\f27d&quot;}.ion-arrow-down:before{content:&quot;\f27e&quot;}.ion-arrow-dropdown:before{content:&quot;\f280&quot;}.ion-arrow-dropdown-circle:before{content:&quot;\f27f&quot;}.ion-arrow-dropleft:before{content:&quot;\f282&quot;}.ion-arrow-dropleft-circle:before{content:&quot;\f281&quot;}.ion-arrow-dropright:before{content:&quot;\f284&quot;}.ion-arrow-dropright-circle:before{content:&quot;\f283&quot;}.ion-arrow-dropup:before{content:&quot;\f286&quot;}.ion-arrow-dropup-circle:before{content:&quot;\f285&quot;}.ion-arrow-forward:before{content:&quot;\f287&quot;}.ion-arrow-round-back:before{content:&quot;\f288&quot;}.ion-arrow-round-down:before{content:&quot;\f289&quot;}.ion-arrow-round-forward:before{content:&quot;\f28a&quot;}.ion-arrow-round-up:before{content:&quot;\f28b&quot;}.ion-arrow-up:before{content:&quot;\f28c&quot;}.ion-at:before{content:&quot;\f28d&quot;}.ion-attach:before{content:&quot;\f28e&quot;}.ion-backspace:before{content:&quot;\f28f&quot;}.ion-barcode:before{content:&quot;\f290&quot;}.ion-baseball:before{content:&quot;\f291&quot;}.ion-basket:before{content:&quot;\f292&quot;}.ion-basketball:before{content:&quot;\f293&quot;}.ion-battery-charging:before{content:&quot;\f294&quot;}.ion-battery-dead:before{content:&quot;\f295&quot;}.ion-battery-full:before{content:&quot;\f296&quot;}.ion-beaker:before{content:&quot;\f297&quot;}.ion-bed:before{content:&quot;\f160&quot;}.ion-beer:before{content:&quot;\f298&quot;}.ion-bicycle:before{content:&quot;\f299&quot;}.ion-bluetooth:before{content:&quot;\f29a&quot;}.ion-boat:before{content:&quot;\f29b&quot;}.ion-body:before{content:&quot;\f29c&quot;}.ion-bonfire:before{content:&quot;\f29d&quot;}.ion-book:before{content:&quot;\f29e&quot;}.ion-bookmark:before{content:&quot;\f29f&quot;}.ion-bookmarks:before{content:&quot;\f2a0&quot;}.ion-bowtie:before{content:&quot;\f2a1&quot;}.ion-briefcase:before{content:&quot;\f2a2&quot;}.ion-browsers:before{content:&quot;\f2a3&quot;}.ion-brush:before{content:&quot;\f2a4&quot;}.ion-bug:before{content:&quot;\f2a5&quot;}.ion-build:before{content:&quot;\f2a6&quot;}.ion-bulb:before{content:&quot;\f2a7&quot;}.ion-bus:before{content:&quot;\f2a8&quot;}.ion-business:before{content:&quot;\f1a4&quot;}.ion-cafe:before{content:&quot;\f2a9&quot;}.ion-calculator:before{content:&quot;\f2aa&quot;}.ion-calendar:before{content:&quot;\f2ab&quot;}.ion-call:before{content:&quot;\f2ac&quot;}.ion-camera:before{content:&quot;\f2ad&quot;}.ion-car:before{content:&quot;\f2b2&quot;}.ion-card:before{content:&quot;\f2b3&quot;}.ion-cart:before{content:&quot;\f2b4&quot;}.ion-cash:before{content:&quot;\f2b5&quot;}.ion-cellular:before{content:&quot;\f164&quot;}.ion-chatboxes:before{content:&quot;\f2b6&quot;}.ion-chatbubbles:before{content:&quot;\f2b7&quot;}.ion-checkbox:before{content:&quot;\f2b9&quot;}.ion-checkbox-outline:before{content:&quot;\f2b8&quot;}.ion-checkmark:before{content:&quot;\f2bc&quot;}.ion-checkmark-circle:before{content:&quot;\f2bb&quot;}.ion-checkmark-circle-outline:before{content:&quot;\f2ba&quot;}.ion-clipboard:before{content:&quot;\f2bd&quot;}.ion-clock:before{content:&quot;\f2be&quot;}.ion-close:before{content:&quot;\f2c0&quot;}.ion-close-circle:before{content:&quot;\f2bf&quot;}.ion-close-circle-outline:before{content:&quot;\f166&quot;}.ion-cloud:before{content:&quot;\f2c9&quot;}.ion-cloud-circle:before{content:&quot;\f2c2&quot;}.ion-cloud-done:before{content:&quot;\f2c3&quot;}.ion-cloud-download:before{content:&quot;\f2c6&quot;}.ion-cloud-outline:before{content:&quot;\f2c7&quot;}.ion-cloud-upload:before{content:&quot;\f2c8&quot;}.ion-cloudy:before{content:&quot;\f2cb&quot;}.ion-cloudy-night:before{content:&quot;\f2ca&quot;}.ion-code:before{content:&quot;\f2ce&quot;}.ion-code-download:before{content:&quot;\f2cc&quot;}.ion-code-working:before{content:&quot;\f2cd&quot;}.ion-cog:before{content:&quot;\f2cf&quot;}.ion-color-fill:before{content:&quot;\f2d0&quot;}.ion-color-filter:before{content:&quot;\f2d1&quot;}.ion-color-palette:before{content:&quot;\f2d2&quot;}.ion-color-wand:before{content:&quot;\f2d3&quot;}.ion-compass:before{content:&quot;\f2d4&quot;}.ion-construct:before{content:&quot;\f2d5&quot;}.ion-contact:before{content:&quot;\f2d6&quot;}.ion-contacts:before{content:&quot;\f2d7&quot;}.ion-contract:before{content:&quot;\f2d8&quot;}.ion-contrast:before{content:&quot;\f2d9&quot;}.ion-copy:before{content:&quot;\f2da&quot;}.ion-create:before{content:&quot;\f2db&quot;}.ion-crop:before{content:&quot;\f2dc&quot;}.ion-cube:before{content:&quot;\f2dd&quot;}.ion-cut:before{content:&quot;\f2de&quot;}.ion-desktop:before{content:&quot;\f2df&quot;}.ion-disc:before{content:&quot;\f2e0&quot;}.ion-document:before{content:&quot;\f2e1&quot;}.ion-done-all:before{content:&quot;\f2e2&quot;}.ion-download:before{content:&quot;\f2e3&quot;}.ion-easel:before{content:&quot;\f2e4&quot;}.ion-egg:before{content:&quot;\f2e5&quot;}.ion-exit:before{content:&quot;\f2e6&quot;}.ion-expand:before{content:&quot;\f2e7&quot;}.ion-eye:before{content:&quot;\f2e9&quot;}.ion-eye-off:before{content:&quot;\f2e8&quot;}.ion-fastforward:before{content:&quot;\f2ea&quot;}.ion-female:before{content:&quot;\f2eb&quot;}.ion-filing:before{content:&quot;\f2ec&quot;}.ion-film:before{content:&quot;\f2ed&quot;}.ion-finger-print:before{content:&quot;\f2ee&quot;}.ion-fitness:before{content:&quot;\f1ac&quot;}.ion-flag:before{content:&quot;\f2ef&quot;}.ion-flame:before{content:&quot;\f2f0&quot;}.ion-flash:before{content:&quot;\f17e&quot;}.ion-flash-off:before{content:&quot;\f12f&quot;}.ion-flashlight:before{content:&quot;\f16b&quot;}.ion-flask:before{content:&quot;\f2f2&quot;}.ion-flower:before{content:&quot;\f2f3&quot;}.ion-folder:before{content:&quot;\f2f5&quot;}.ion-folder-open:before{content:&quot;\f2f4&quot;}.ion-football:before{content:&quot;\f2f6&quot;}.ion-funnel:before{content:&quot;\f2f7&quot;}.ion-gift:before{content:&quot;\f199&quot;}.ion-git-branch:before{content:&quot;\f2fa&quot;}.ion-git-commit:before{content:&quot;\f2fb&quot;}.ion-git-compare:before{content:&quot;\f2fc&quot;}.ion-git-merge:before{content:&quot;\f2fd&quot;}.ion-git-network:before{content:&quot;\f2fe&quot;}.ion-git-pull-request:before{content:&quot;\f2ff&quot;}.ion-glasses:before{content:&quot;\f300&quot;}.ion-globe:before{content:&quot;\f301&quot;}.ion-grid:before{content:&quot;\f302&quot;}.ion-hammer:before{content:&quot;\f303&quot;}.ion-hand:before{content:&quot;\f304&quot;}.ion-happy:before{content:&quot;\f305&quot;}.ion-headset:before{content:&quot;\f306&quot;}.ion-heart:before{content:&quot;\f308&quot;}.ion-heart-dislike:before{content:&quot;\f167&quot;}.ion-heart-empty:before{content:&quot;\f1a1&quot;}.ion-heart-half:before{content:&quot;\f1a2&quot;}.ion-help:before{content:&quot;\f30b&quot;}.ion-help-buoy:before{content:&quot;\f309&quot;}.ion-help-circle:before{content:&quot;\f30a&quot;}.ion-help-circle-outline:before{content:&quot;\f16d&quot;}.ion-home:before{content:&quot;\f30c&quot;}.ion-hourglass:before{content:&quot;\f111&quot;}.ion-ice-cream:before{content:&quot;\f30d&quot;}.ion-image:before{content:&quot;\f30e&quot;}.ion-images:before{content:&quot;\f30f&quot;}.ion-infinite:before{content:&quot;\f310&quot;}.ion-information:before{content:&quot;\f312&quot;}.ion-information-circle:before{content:&quot;\f311&quot;}.ion-information-circle-outline:before{content:&quot;\f16f&quot;}.ion-jet:before{content:&quot;\f315&quot;}.ion-journal:before{content:&quot;\f18d&quot;}.ion-key:before{content:&quot;\f316&quot;}.ion-keypad:before{content:&quot;\f317&quot;}.ion-laptop:before{content:&quot;\f318&quot;}.ion-leaf:before{content:&quot;\f319&quot;}.ion-link:before{content:&quot;\f22e&quot;}.ion-list:before{content:&quot;\f31b&quot;}.ion-list-box:before{content:&quot;\f31a&quot;}.ion-locate:before{content:&quot;\f31c&quot;}.ion-lock:before{content:&quot;\f31d&quot;}.ion-log-in:before{content:&quot;\f31e&quot;}.ion-log-out:before{content:&quot;\f31f&quot;}.ion-magnet:before{content:&quot;\f320&quot;}.ion-mail:before{content:&quot;\f322&quot;}.ion-mail-open:before{content:&quot;\f321&quot;}.ion-mail-unread:before{content:&quot;\f172&quot;}.ion-male:before{content:&quot;\f323&quot;}.ion-man:before{content:&quot;\f324&quot;}.ion-map:before{content:&quot;\f325&quot;}.ion-medal:before{content:&quot;\f326&quot;}.ion-medical:before{content:&quot;\f327&quot;}.ion-medkit:before{content:&quot;\f328&quot;}.ion-megaphone:before{content:&quot;\f329&quot;}.ion-menu:before{content:&quot;\f32a&quot;}.ion-mic:before{content:&quot;\f32c&quot;}.ion-mic-off:before{content:&quot;\f32b&quot;}.ion-microphone:before{content:&quot;\f32d&quot;}.ion-moon:before{content:&quot;\f32e&quot;}.ion-more:before{content:&quot;\f1c9&quot;}.ion-move:before{content:&quot;\f331&quot;}.ion-musical-note:before{content:&quot;\f332&quot;}.ion-musical-notes:before{content:&quot;\f333&quot;}.ion-navigate:before{content:&quot;\f334&quot;}.ion-notifications:before{content:&quot;\f338&quot;}.ion-notifications-off:before{content:&quot;\f336&quot;}.ion-notifications-outline:before{content:&quot;\f337&quot;}.ion-nuclear:before{content:&quot;\f339&quot;}.ion-nutrition:before{content:&quot;\f33a&quot;}.ion-open:before{content:&quot;\f33b&quot;}.ion-options:before{content:&quot;\f33c&quot;}.ion-outlet:before{content:&quot;\f33d&quot;}.ion-paper:before{content:&quot;\f33f&quot;}.ion-paper-plane:before{content:&quot;\f33e&quot;}.ion-partly-sunny:before{content:&quot;\f340&quot;}.ion-pause:before{content:&quot;\f341&quot;}.ion-paw:before{content:&quot;\f342&quot;}.ion-people:before{content:&quot;\f343&quot;}.ion-person:before{content:&quot;\f345&quot;}.ion-person-add:before{content:&quot;\f344&quot;}.ion-phone-landscape:before{content:&quot;\f346&quot;}.ion-phone-portrait:before{content:&quot;\f347&quot;}.ion-photos:before{content:&quot;\f348&quot;}.ion-pie:before{content:&quot;\f349&quot;}.ion-pin:before{content:&quot;\f34a&quot;}.ion-pint:before{content:&quot;\f34b&quot;}.ion-pizza:before{content:&quot;\f354&quot;}.ion-planet:before{content:&quot;\f356&quot;}.ion-play:before{content:&quot;\f357&quot;}.ion-play-circle:before{content:&quot;\f174&quot;}.ion-podium:before{content:&quot;\f358&quot;}.ion-power:before{content:&quot;\f359&quot;}.ion-pricetag:before{content:&quot;\f35a&quot;}.ion-pricetags:before{content:&quot;\f35b&quot;}.ion-print:before{content:&quot;\f35c&quot;}.ion-pulse:before{content:&quot;\f35d&quot;}.ion-qr-scanner:before{content:&quot;\f35e&quot;}.ion-quote:before{content:&quot;\f35f&quot;}.ion-radio:before{content:&quot;\f362&quot;}.ion-radio-button-off:before{content:&quot;\f360&quot;}.ion-radio-button-on:before{content:&quot;\f361&quot;}.ion-rainy:before{content:&quot;\f363&quot;}.ion-recording:before{content:&quot;\f364&quot;}.ion-redo:before{content:&quot;\f365&quot;}.ion-refresh:before{content:&quot;\f366&quot;}.ion-refresh-circle:before{content:&quot;\f228&quot;}.ion-remove:before{content:&quot;\f368&quot;}.ion-remove-circle:before{content:&quot;\f367&quot;}.ion-remove-circle-outline:before{content:&quot;\f176&quot;}.ion-reorder:before{content:&quot;\f369&quot;}.ion-repeat:before{content:&quot;\f36a&quot;}.ion-resize:before{content:&quot;\f36b&quot;}.ion-restaurant:before{content:&quot;\f36c&quot;}.ion-return-left:before{content:&quot;\f36d&quot;}.ion-return-right:before{content:&quot;\f36e&quot;}.ion-reverse-camera:before{content:&quot;\f36f&quot;}.ion-rewind:before{content:&quot;\f370&quot;}.ion-ribbon:before{content:&quot;\f371&quot;}.ion-rocket:before{content:&quot;\f179&quot;}.ion-rose:before{content:&quot;\f372&quot;}.ion-sad:before{content:&quot;\f373&quot;}.ion-save:before{content:&quot;\f1a9&quot;}.ion-school:before{content:&quot;\f374&quot;}.ion-search:before{content:&quot;\f375&quot;}.ion-send:before{content:&quot;\f376&quot;}.ion-settings:before{content:&quot;\f377&quot;}.ion-share:before{content:&quot;\f379&quot;}.ion-share-alt:before{content:&quot;\f378&quot;}.ion-shirt:before{content:&quot;\f37a&quot;}.ion-shuffle:before{content:&quot;\f37b&quot;}.ion-skip-backward:before{content:&quot;\f37c&quot;}.ion-skip-forward:before{content:&quot;\f37d&quot;}.ion-snow:before{content:&quot;\f37e&quot;}.ion-speedometer:before{content:&quot;\f37f&quot;}.ion-square:before{content:&quot;\f381&quot;}.ion-square-outline:before{content:&quot;\f380&quot;}.ion-star:before{content:&quot;\f384&quot;}.ion-star-half:before{content:&quot;\f382&quot;}.ion-star-outline:before{content:&quot;\f383&quot;}.ion-stats:before{content:&quot;\f385&quot;}.ion-stopwatch:before{content:&quot;\f386&quot;}.ion-subway:before{content:&quot;\f387&quot;}.ion-sunny:before{content:&quot;\f388&quot;}.ion-swap:before{content:&quot;\f389&quot;}.ion-switch:before{content:&quot;\f38a&quot;}.ion-sync:before{content:&quot;\f38b&quot;}.ion-tablet-landscape:before{content:&quot;\f38c&quot;}.ion-tablet-portrait:before{content:&quot;\f38d&quot;}.ion-tennisball:before{content:&quot;\f38e&quot;}.ion-text:before{content:&quot;\f38f&quot;}.ion-thermometer:before{content:&quot;\f390&quot;}.ion-thumbs-down:before{content:&quot;\f391&quot;}.ion-thumbs-up:before{content:&quot;\f392&quot;}.ion-thunderstorm:before{content:&quot;\f393&quot;}.ion-time:before{content:&quot;\f394&quot;}.ion-timer:before{content:&quot;\f395&quot;}.ion-today:before{content:&quot;\f17d&quot;}.ion-train:before{content:&quot;\f396&quot;}.ion-transgender:before{content:&quot;\f397&quot;}.ion-trash:before{content:&quot;\f398&quot;}.ion-trending-down:before{content:&quot;\f399&quot;}.ion-trending-up:before{content:&quot;\f39a&quot;}.ion-trophy:before{content:&quot;\f39b&quot;}.ion-tv:before{content:&quot;\f17f&quot;}.ion-umbrella:before{content:&quot;\f39c&quot;}.ion-undo:before{content:&quot;\f39d&quot;}.ion-unlock:before{content:&quot;\f39e&quot;}.ion-videocam:before{content:&quot;\f39f&quot;}.ion-volume-high:before{content:&quot;\f123&quot;}.ion-volume-low:before{content:&quot;\f131&quot;}.ion-volume-mute:before{content:&quot;\f3a1&quot;}.ion-volume-off:before{content:&quot;\f3a2&quot;}.ion-walk:before{content:&quot;\f3a4&quot;}.ion-wallet:before{content:&quot;\f18f&quot;}.ion-warning:before{content:&quot;\f3a5&quot;}.ion-watch:before{content:&quot;\f3a6&quot;}.ion-water:before{content:&quot;\f3a7&quot;}.ion-wifi:before{content:&quot;\f3a8&quot;}.ion-wine:before{content:&quot;\f3a9&quot;}.ion-woman:before{content:&quot;\f3aa&quot;}div.tamper{align-items:center;background-color:rgba(0,0,0,0.7);box-sizing:border-box;cursor:default;display:none;font-size:14px !important;height:100%;justify-content:center;left:0;position:fixed;top:0;text-align:left;width:100%;z-index:999999}div.tamper&gt;div{background-color:white;box-sizing:border-box;padding:1em;width:360px}div.tamper&gt;div.w2{padding:0;width:720px}div.tamper&gt;div.w2&gt;div{padding:10px 20px}div.tamper&gt;div.w2&gt;ul{margin:0;padding:0;display:flex;flex-wrap:wrap;justify-content:center;list-style-type:none;list-style-position:inside}div.tamper&gt;div.w2&gt;ul[id=vlist]{height:468px;scrollbar-width:none}div.tamper&gt;div.w2&gt;ul[id=vlist]&gt;li{width:160px;margin:0px;padding:0px 8px 16px 8px}div.tamper&gt;div.w2&gt;ul[id=vlist]&gt;li img.pic{display:block;width:160px;height:100px;margin-bottom:5px}div.tamper&gt;div.w2&gt;ul[id=vlist]&gt;li div.title{white-space:normal;line-height:1.25;display:-webkit-box;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical}div.tamper a{color:#333 !important;text-decoration:none}div.tamper h1{font-size:1.8rem;font-weight:400;margin:10px 0 20px 0;text-align:center}div.tamper form{display:block}div.tamper form&gt;div{padding:0.5em 0}div.tamper form&gt;div&gt;div{margin:0.5em 0}div.tamper form&gt;div&gt;div:last-child{margin-bottom:0}div.tamper form label{color:#000}div.tamper form label:first-child{display:block;margin-bottom:0.5em}div.tamper form label:first-child:before{content:&quot;\00bb&quot;;margin:0 0.25em}div.tamper form label:not(:first-child){display:inline}div.tamper form input{box-shadow:none;color:#000}div.tamper form input[type=&quot;text&quot;]{background-color:#fff;border:1px solid #ddd;box-sizing:border-box;display:block;font-size:1em;padding:0.5em;width:100%}div.tamper form input[type=&quot;text&quot;]:focus{border:1px solid #59c1f0}div.tamper form input[type=&quot;password&quot;]{background-color:#fff;border:1px solid #ddd;box-sizing:border-box;display:block;font-size:1em;padding:0.5em;width:100%}div.tamper form input[type=&quot;password&quot;]:focus{border:1px solid #59c1f0}div.tamper form input[type=&quot;radio&quot;],div.tamper form input[type=&quot;checkbox&quot;]{display:inline-block !important;height:1em;margin-right:0.25em;vertical-align:text-bottom;width:1em}div.tamper form input[type=&quot;checkbox&quot;]{-webkit-appearance:checkbox !important}div.tamper form input[type=&quot;radio&quot;]{-webkit-appearance:radio !important}div.tamper ul{margin:0;padding:0;list-style-type:none;list-style-position:inside;max-height:500px;overflow-y:auto;scrollbar-width:none}div.tamper ul&gt;li{box-sizing:content-box;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0.25em 0;cursor:default}div.tamper ul&gt;li.on{color:#f45a8d}div.summary{color:#666}div.btn-group{box-sizing:border-box;display:inline-flex}div.btn-group.full{display:flex}div.btn-group.outline&gt;button{background-color:#fff;border:1px solid #ccc;color:#000}div.btn-group.outline&gt;button:hover{color:#ffffff;background-color:#000;border-color:#000}div.btn-group.outline&gt;button:not(:first-child){border-left:none}div.btn-group&gt;button{background-color:#666;border-radius:0;border:none;color:#fff;display:inline-block;flex:1 1 auto;margin:0;outline:none;padding:0.5em 1.25em;position:relative;font-size:inherit}div.btn-group&gt;button:hover{background-color:#000}div.btn-group&gt;button:first-child{border-bottom-left-radius:0.25rem;border-top-left-radius:0.25rem}div.btn-group&gt;button:last-child{border-bottom-right-radius:0.25rem;border-top-right-radius:0.25rem}.mt1{margin-top:10px !important}@keyframes spinner{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.spinner{animation-name:spinner;animation-duration:2400ms;animation-timing-function:linear;animation-iteration-count:infinite}html,div.list-wrapper,div.section-ep-wrapper{scrollbar-width:thin}div.list-wrapper:-webkit-scrollbar,div.section-ep-wrapper:-webkit-scrollbar{display:none}&lt;/style&gt;&lt;/head&gt;&lt;body class=&quot;&quot; style=&quot;opacity:0&quot;&gt;&lt;script type=&quot;text/javascript&quot;&gt;window.bid=13,window.spmReportData={},window.reportConfig={sample:1,scrollTracker:true,msgObjects:&quot;spmReportData&quot;,errorTracker:true,hasAbtest:true,abtestPlatform:4};&lt;/script&gt;&lt;script type=&quot;text/javascript&quot; src=&quot;//s1.hdslb.com/bfs/seed/log/report/log-reporter.js&quot; crossorigin&gt;&lt;/script&gt;&lt;div id=&quot;biliMainHeader&quot; style=&quot;height:56px&quot;&gt;&lt;/div&gt;&lt;div id=&quot;app&quot; data-server-rendered=&quot;true&quot; class=&quot;main-container clearfix&quot;&gt;&lt;div class=&quot;plp-l&quot;&gt;&lt;div id=&quot;player_module&quot; class=&quot;player-module&quot;&gt;&lt;div id=&quot;bilibili-player&quot; class=&quot;stardust-player report-wrap-module player-container&quot;&gt;&lt;/div&gt; &lt;div class=&quot;player-tool-bar&quot;&gt;&lt;/div&gt; &lt;div id=&quot;player_mask_module&quot; class=&quot;player-mask report-wrap-module&quot; style=&quot;display:none;&quot;&gt;&lt;!----&gt; &lt;!----&gt; &lt;!----&gt; &lt;!----&gt; &lt;!----&gt; &lt;!----&gt; &lt;!----&gt; &lt;div class=&quot;bar-wrapper&quot;&gt;&lt;div class=&quot;left-bar&quot;&gt;&lt;/div&gt;&lt;div class=&quot;right-bar&quot;&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt; &lt;div class=&quot;media-wrapper&quot;&gt;&lt;h1 title=&quot;哔哩哔哩番剧&quot;&gt;哔哩哔哩番剧&lt;/h1&gt; &lt;div id=&quot;toolbar_module&quot; class=&quot;tool-bar clearfix report-wrap-module report-scroll-module&quot;&gt;&lt;div class=&quot;like-info&quot;&gt;&lt;i class=&quot;iconfont icon-like&quot;&gt;&lt;/i&gt;&lt;span&gt;点赞&lt;/span&gt; &lt;div id=&quot;sanlin&quot;&gt;&lt;/div&gt; &lt;!----&gt; &lt;!----&gt; &lt;!----&gt;&lt;/div&gt; &lt;div class=&quot;coin-info&quot;&gt;&lt;i class=&quot;iconfont icon-coins&quot;&gt;&lt;/i&gt;&lt;span&gt;--&lt;/span&gt;&lt;/div&gt; &lt;div class=&quot;share-info&quot;&gt;&lt;i class=&quot;iconfont icon-share&quot;&gt;&lt;/i&gt;&lt;span&gt;分享&lt;/span&gt; &lt;!----&gt;&lt;/div&gt; &lt;div class=&quot;mobile-info&quot;&gt;&lt;i class=&quot;iconfont icon-mobile-full&quot;&gt;&lt;/i&gt;&lt;span&gt;用手机观看&lt;/span&gt; &lt;!----&gt;&lt;/div&gt; &lt;!----&gt;&lt;/div&gt; &lt;div id=&quot;media_module&quot; class=&quot;media-info clearfix report-wrap-module&quot;&gt;&lt;a href=&quot;//www.bilibili.com/bangumi/media/md___mediaInfoId___/&quot; target=&quot;_blank&quot; class=&quot;media-cover&quot;&gt;&lt;!----&gt;&lt;/a&gt; &lt;div class=&quot;media-right&quot;&gt;&lt;a href=&quot;//www.bilibili.com/bangumi/media/md28229002/&quot; target=&quot;_blank&quot; title=&quot;哔哩哔哩番剧&quot; class=&quot;media-title&quot;&gt;哔哩哔哩番剧&lt;/a&gt; &lt;div class=&quot;media-count&quot;&gt;--&amp;nbsp;&amp;nbsp;·&amp;nbsp;&amp;nbsp;--&amp;nbsp;&amp;nbsp;·&amp;nbsp;&amp;nbsp;--&lt;/div&gt; &lt;div class=&quot;pub-wrapper clearfix&quot;&gt;&lt;a href=&quot;//www.bilibili.com/anime/&quot; target=&quot;_blank&quot; class=&quot;home-link&quot;&gt;番剧&lt;/a&gt; &lt;span class=&quot;pub-info&quot;&gt;连载中&lt;/span&gt; &lt;!----&gt; &lt;!----&gt;&lt;/div&gt; &lt;a href=&quot;//www.bilibili.com/bangumi/media/md28229002/&quot; target=&quot;_blank&quot; class=&quot;media-desc webkit-ellipsis&quot;&gt;&lt;span class=&quot;absolute&quot;&gt;哔哩哔哩番剧&lt;/span&gt;&lt;span&gt;哔哩哔哩番剧&lt;/span&gt;&lt;i style=&quot;display:none;&quot;&gt;展开&lt;/i&gt;&lt;/a&gt; &lt;div class=&quot;media-rating&quot;&gt;&lt;h4 class=&quot;score&quot;&gt;9.7&lt;/h4&gt; &lt;p&gt;1368人评分&lt;/p&gt;&lt;/div&gt; &lt;div class=&quot;media-tool-bar clearfix&quot;&gt;&lt;div report-id=&quot;click_review_publish&quot; class=&quot;btn-rating&quot;&gt;&lt;ul class=&quot;star-wrapper clearfix&quot;&gt;&lt;li&gt;&lt;i class=&quot;iconfont icon-star-empty&quot;&gt;&lt;/i&gt; &lt;!----&gt;&lt;/li&gt;&lt;li&gt;&lt;i class=&quot;iconfont icon-star-empty&quot;&gt;&lt;/i&gt; &lt;!----&gt;&lt;/li&gt;&lt;li&gt;&lt;i class=&quot;iconfont icon-star-empty&quot;&gt;&lt;/i&gt; &lt;!----&gt;&lt;/li&gt;&lt;li&gt;&lt;i class=&quot;iconfont icon-star-empty&quot;&gt;&lt;/i&gt; &lt;!----&gt;&lt;/li&gt;&lt;li&gt;&lt;i class=&quot;iconfont icon-star-empty&quot;&gt;&lt;/i&gt; &lt;!----&gt;&lt;/li&gt;&lt;/ul&gt;&lt;span&gt;点评&lt;/span&gt;&lt;/div&gt; &lt;div report-id=&quot;click_follow&quot; class=&quot;btn-follow&quot;&gt;&lt;i class=&quot;iconfont icon-follow&quot;&gt;&lt;/i&gt;&lt;span&gt;追番&lt;/span&gt; &lt;div class=&quot;bangumi-options clearfix&quot;&gt;&lt;ul class=&quot;opt-list&quot;&gt;&lt;li&gt;标记为 想看&lt;/li&gt; &lt;li&gt;标记为 在看&lt;/li&gt; &lt;li&gt;标记为 已看&lt;/li&gt; &lt;li&gt;取消追番&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt; &lt;div id=&quot;review_module&quot; class=&quot;review-module report-wrap-module report-scroll-module&quot;&gt;&lt;div class=&quot;module-title clearfix&quot;&gt;&lt;h4&gt;点评&lt;/h4&gt; &lt;a href=&quot;//www.bilibili.com/bangumi/media/md28229002/&quot; target=&quot;_blank&quot; class=&quot;more-link&quot;&gt;查看全部&lt;/a&gt;&lt;/div&gt; &lt;div class=&quot;review-list&quot;&gt;&lt;div class=&quot;review-item&quot;&gt;&lt;div class=&quot;review-empty pre-mask&quot;&gt;&lt;/div&gt; &lt;!----&gt;&lt;/div&gt;&lt;div class=&quot;review-item&quot;&gt;&lt;div class=&quot;review-empty pre-mask&quot;&gt;&lt;/div&gt; &lt;!----&gt;&lt;/div&gt;&lt;div class=&quot;review-item&quot;&gt;&lt;div class=&quot;review-empty pre-mask&quot;&gt;&lt;/div&gt; &lt;!----&gt;&lt;/div&gt; &lt;!----&gt;&lt;/div&gt;&lt;/div&gt; &lt;!----&gt; &lt;div id=&quot;comment_module&quot; class=&quot;comment-wrapper common report-wrap-module report-scroll-module&quot; style=&quot;display:;&quot;&gt;&lt;div class=&quot;b-head&quot;&gt;&lt;span class=&quot;results&quot;&gt;&lt;/span&gt;&lt;span&gt;评论&lt;/span&gt;&lt;/div&gt; &lt;div class=&quot;comm&quot;&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt; &lt;div class=&quot;plp-r&quot;&gt;&lt;div id=&quot;paybar_module&quot; class=&quot;pay-bar report-wrap-module pre-mask&quot; style=&quot;display:none;&quot;&gt;&lt;!----&gt; &lt;!----&gt; &lt;!----&gt; &lt;!----&gt; &lt;!----&gt; &lt;!----&gt;&lt;/div&gt; &lt;div id=&quot;danmukuBox&quot; class=&quot;danmaku-box&quot; style=&quot;display:;&quot;&gt;&lt;div class=&quot;danmaku-wrap&quot;&gt;&lt;/div&gt;&lt;/div&gt; &lt;div id=&quot;eplist_module&quot; class=&quot;ep-list-wrapper report-wrap-module&quot;&gt;&lt;div class=&quot;list-title clearfix&quot;&gt;&lt;h4 title=&quot;选集&quot;&gt;选集&lt;/h4&gt; &lt;span class=&quot;mode-change&quot; style=&quot;position:relative&quot;&gt;&lt;i report-id=&quot;click_ep_switch&quot; class=&quot;iconfont icon-ep-list-simple&quot;&gt;&lt;/i&gt; &lt;!----&gt;&lt;/span&gt; &lt;!----&gt; &lt;span class=&quot;ep-list-progress&quot;&gt;1/220&lt;/span&gt;&lt;/div&gt; &lt;div class=&quot;list-wrapper simple&quot; style=&quot;display:none;&quot;&gt;&lt;ul class=&quot;clearfix&quot; style=&quot;height:50px;&quot;&gt;&lt;/ul&gt;&lt;/div&gt;&lt;/div&gt;  &lt;div class=&quot;omit-hint&quot; style=&quot;display:none;&quot;&gt;部分集数受地区限制不予展示&lt;/div&gt; &lt;!----&gt; &lt;div id=&quot;recom_module&quot; class=&quot;recom-wrapper report-wrap-module report-scroll-module&quot;&gt;&lt;div class=&quot;recom-title&quot;&gt;相关推荐&lt;/div&gt; &lt;div class=&quot;recom-list&quot;&gt;&lt;div class=&quot;recom-item clearfix&quot;&gt;&lt;div class=&quot;cover-wrapper pre-mask&quot;&gt;&lt;/div&gt; &lt;!----&gt; &lt;div class=&quot;info-wrapper&quot;&gt;&lt;div class=&quot;video-title pre-mask&quot;&gt;&lt;/div&gt; &lt;div class=&quot;video-subtitle pre-mask&quot;&gt;&lt;/div&gt; &lt;div class=&quot;video-count pre-mask&quot;&gt;&lt;/div&gt;&lt;/div&gt; &lt;!----&gt;&lt;/div&gt;&lt;div class=&quot;recom-item clearfix&quot;&gt;&lt;div class=&quot;cover-wrapper pre-mask&quot;&gt;&lt;/div&gt; &lt;!----&gt; &lt;div class=&quot;info-wrapper&quot;&gt;&lt;div class=&quot;video-title pre-mask&quot;&gt;&lt;/div&gt; &lt;div class=&quot;video-subtitle pre-mask&quot;&gt;&lt;/div&gt; &lt;div class=&quot;video-count pre-mask&quot;&gt;&lt;/div&gt;&lt;/div&gt; &lt;!----&gt;&lt;/div&gt;&lt;div class=&quot;recom-item clearfix&quot;&gt;&lt;div class=&quot;cover-wrapper pre-mask&quot;&gt;&lt;/div&gt; &lt;!----&gt; &lt;div class=&quot;info-wrapper&quot;&gt;&lt;div class=&quot;video-title pre-mask&quot;&gt;&lt;/div&gt; &lt;div class=&quot;video-subtitle pre-mask&quot;&gt;&lt;/div&gt; &lt;div class=&quot;video-count pre-mask&quot;&gt;&lt;/div&gt;&lt;/div&gt; &lt;!----&gt;&lt;/div&gt;&lt;div class=&quot;recom-item clearfix&quot;&gt;&lt;div class=&quot;cover-wrapper pre-mask&quot;&gt;&lt;/div&gt; &lt;!----&gt; &lt;div class=&quot;info-wrapper&quot;&gt;&lt;div class=&quot;video-title pre-mask&quot;&gt;&lt;/div&gt; &lt;div class=&quot;video-subtitle pre-mask&quot;&gt;&lt;/div&gt; &lt;div class=&quot;video-count pre-mask&quot;&gt;&lt;/div&gt;&lt;/div&gt; &lt;!----&gt;&lt;/div&gt;&lt;div class=&quot;recom-item clearfix&quot;&gt;&lt;div class=&quot;cover-wrapper pre-mask&quot;&gt;&lt;/div&gt; &lt;!----&gt; &lt;div class=&quot;info-wrapper&quot;&gt;&lt;div class=&quot;video-title pre-mask&quot;&gt;&lt;/div&gt; &lt;div class=&quot;video-subtitle pre-mask&quot;&gt;&lt;/div&gt; &lt;div class=&quot;video-count pre-mask&quot;&gt;&lt;/div&gt;&lt;/div&gt; &lt;!----&gt;&lt;/div&gt;&lt;/div&gt; &lt;!----&gt;&lt;/div&gt;&lt;/div&gt; &lt;div class=&quot;nav-tools&quot; style=&quot;display:none;&quot;&gt;&lt;div title=&quot;返回顶部&quot; class=&quot;tool-item backup iconfont icon-up&quot;&gt;&lt;/div&gt; &lt;!----&gt; &lt;a title=&quot;帮助反馈&quot; href=&quot;//www.bilibili.com/blackboard/help.html#常见问题自救方法?id=c9954d53034d43d796465e24eb792593&quot; target=&quot;_blank&quot;&gt;&lt;div class=&quot;tool-item help iconfont icon-customer-serv&quot;&gt;&lt;/div&gt;&lt;/a&gt;&lt;/div&gt; &lt;!----&gt; &lt;!----&gt; &lt;!----&gt; &lt;!----&gt; &lt;!----&gt; &lt;!----&gt; &lt;!----&gt; &lt;!----&gt; &lt;!----&gt; &lt;!----&gt;&lt;/div&gt;&lt;script&gt;const vipExpire=Date.now()+9e7;window.__PGC_USERSTATE__={area_limit:1,ban_area_show:1,follow:0,follow_status:2,login:1,pay:0,pay_pack_paid:0,sponsor:0,vip_info:{due_date:vipExpire,status:1,type:2}},window.__BILI_CONFIG__={show_bv:true};&lt;/script&gt;&lt;script&gt;window.__INITIAL_STATE__={&quot;loginInfo&quot;:{},&quot;isLogin&quot;:false,&quot;couponSelected&quot;:null,&quot;payGlobal&quot;:null,&quot;loaded&quot;:true,&quot;ver&quot;:{},&quot;ssr&quot;:{},&quot;h1Title&quot;:&quot;哔哩哔哩番剧&quot;,&quot;mediaInfo&quot;:{&quot;stat&quot;:{&quot;coins&quot;:3444,&quot;danmakus&quot;:8325,&quot;favorites&quot;:75951,&quot;likes&quot;:0,&quot;reply&quot;:2614,&quot;share&quot;:515,&quot;views&quot;:786346},&quot;id&quot;:___mediaInfoId___,&quot;ssId&quot;:___ssId___,&quot;title&quot;:&quot;___mediaInfoTitle___&quot;,&quot;jpTitle&quot;:&quot;&quot;,&quot;series&quot;:&quot;哔哩哔哩番剧&quot;,&quot;alias&quot;:&quot;&quot;,&quot;evaluate&quot;:&quot;___evaluate___&quot;,&quot;ssType&quot;:1,&quot;ssTypeFormat&quot;:{&quot;name&quot;:&quot;番剧&quot;,&quot;homeLink&quot;:&quot;\u002F\u002Fwww.bilibili.com\u002Fanime\u002F&quot;},&quot;status&quot;:2,&quot;multiMode&quot;:true,&quot;forceWide&quot;:false,&quot;specialCover&quot;:&quot;&quot;,&quot;squareCover&quot;:&quot;\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fbangumi\u002Fimage\u002Ff22bfaf955d4938d426029582fdd2303e6844a09.png&quot;,&quot;cover&quot;:&quot;___cover___&quot;,&quot;playerRecord&quot;:&quot;&quot;,&quot;rights&quot;:{&quot;allowBp&quot;:false,&quot;allowBpRank&quot;:false,&quot;allowReview&quot;:true,&quot;isPreview&quot;:false,&quot;appOnly&quot;:___appOnly___,&quot;limitNotFound&quot;:false,&quot;isCoverShow&quot;:false,&quot;canWatch&quot;:true},&quot;pub&quot;:{&quot;time&quot;:&quot;2006-04-06 19:26:00&quot;,&quot;timeShow&quot;:&quot;2006年04月06日19:26&quot;,&quot;isStart&quot;:true,&quot;isFinish&quot;:false,&quot;unknow&quot;:false},&quot;upInfo&quot;:{&quot;mid&quot;:-1,&quot;avatar&quot;:&quot;&quot;,&quot;name&quot;:&quot;&quot;,&quot;isAnnualVip&quot;:false,&quot;pendantId&quot;:-1,&quot;pendantName&quot;:&quot;&quot;,&quot;pendantImage&quot;:&quot;&quot;},&quot;rating&quot;:{&quot;score&quot;:9.7,&quot;count&quot;:1368},&quot;newestEp&quot;:{&quot;id&quot;:331925,&quot;desc&quot;:&quot;连载中&quot;,&quot;isNew&quot;:false},&quot;payMent&quot;:{&quot;tip&quot;:&quot;&quot;,&quot;promotion&quot;:&quot;&quot;,&quot;vipProm&quot;:&quot;&quot;,&quot;vipFirstProm&quot;:&quot;&quot;,&quot;discount&quot;:1,&quot;vipDiscount&quot;:1,&quot;sixType&quot;:{&quot;allowTicket&quot;:false,&quot;allowTimeLimit&quot;:false,&quot;allowDiscount&quot;:false,&quot;allowVipDiscount&quot;:false}},&quot;payPack&quot;:{&quot;title&quot;:&quot;&quot;,&quot;appNoPayText&quot;:&quot;&quot;,&quot;appPayText&quot;:&quot;&quot;,&quot;url&quot;:&quot;&quot;},&quot;activity&quot;:{&quot;id&quot;:0,&quot;title&quot;:&quot;&quot;,&quot;pendantOpsImg&quot;:&quot;&quot;,&quot;pendantOpsLink&quot;:&quot;&quot;},&quot;count&quot;:{&quot;coins&quot;:0,&quot;danmus&quot;:0,&quot;follows&quot;:0,&quot;views&quot;:0,&quot;likes&quot;:0},&quot;pgcType&quot;:&quot;anime&quot;,&quot;epSpMode&quot;:true,&quot;newEpSpMode&quot;:false,&quot;mainSecTitle&quot;:&quot;选集&quot;,&quot;premiereInfo&quot;:{},&quot;sectionBottomDesc&quot;:&quot;&quot;},&quot;epList&quot;:___episodes___,&quot;epInfo&quot;:{&quot;loaded&quot;:true,&quot;id&quot;:___id___,&quot;badge&quot;:&quot;&quot;,&quot;badgeType&quot;:0,&quot;badgeColor&quot;:&quot;#999999&quot;,&quot;epStatus&quot;:2,&quot;aid&quot;:___aid___,&quot;bvid&quot;:&quot;___bvid___&quot;,&quot;cid&quot;:___cid___,&quot;from&quot;:&quot;bangumi&quot;,&quot;cover&quot;:&quot;\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Farchive\u002F65dc2aa1781fbb507dbb7faef1d0a6169162ffed.jpg&quot;,&quot;title&quot;:&quot;___title___&quot;,&quot;titleFormat&quot;:&quot;___titleFormat___&quot;,&quot;vid&quot;:&quot;&quot;,&quot;longTitle&quot;:&quot;&quot;,&quot;hasNext&quot;:true,&quot;i&quot;:0,&quot;sectionType&quot;:0,&quot;releaseDate&quot;:&quot;&quot;,&quot;skip&quot;:{},&quot;hasSkip&quot;:false,&quot;rights&quot;:{&quot;allow_demand&quot;:0,&quot;allow_dm&quot;:0,&quot;allow_download&quot;:0,&quot;area_limit&quot;:1},&quot;stat&quot;:{}},&quot;sections&quot;:[],&quot;orderSections&quot;:[],&quot;ssList&quot;:[{&quot;id&quot;:33577,&quot;title&quot;:&quot;TV&quot;,&quot;type&quot;:1,&quot;pgcType&quot;:&quot;anime&quot;,&quot;cover&quot;:&quot;\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fbangumi\u002Fimage\u002Fed473b3c6ccc653074e66a3f586bb960c25a9707.png&quot;,&quot;epCover&quot;:&quot;\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Farchive\u002F5dae515b205b46feb2f69c0f2f79f95c1ca234d8.png&quot;,&quot;desc&quot;:&quot;更新至第2话&quot;,&quot;badge&quot;:&quot;&quot;,&quot;badgeType&quot;:0,&quot;badgeColor&quot;:&quot;#FB7299&quot;,&quot;views&quot;:786346,&quot;follows&quot;:75946}],&quot;userState&quot;:{&quot;loaded&quot;:false,&quot;vipInfo&quot;:{},&quot;history&quot;:{}},&quot;ssPayMent&quot;:{},&quot;epPayMent&quot;:null,&quot;player&quot;:{&quot;loaded&quot;:false,&quot;miniOn&quot;:false,&quot;limitType&quot;:0},&quot;sponsor&quot;:{&quot;allReady&quot;:false,&quot;allState&quot;:0,&quot;allRank&quot;:[],&quot;allMine&quot;:null,&quot;allCount&quot;:0,&quot;weekReady&quot;:false,&quot;weekState&quot;:0,&quot;weekRank&quot;:[],&quot;weekMine&quot;:null,&quot;weekCount&quot;:0},&quot;ssRecom&quot;:{&quot;status&quot;:&quot;loading&quot;,&quot;data&quot;:[]},&quot;showBv&quot;:false,&quot;interact&quot;:{&quot;shown&quot;:false,&quot;btnText&quot;:&quot;&quot;,&quot;callback&quot;:null},&quot;nextEp&quot;:null,&quot;playerEpList&quot;:{&quot;code&quot;:0,&quot;message&quot;:&quot;&quot;,&quot;result&quot;:{&quot;main_section&quot;:{&quot;episodes&quot;:[]}}},&quot;isOriginal&quot;:false,&quot;premiereCountDown&quot;:&quot;&quot;,&quot;premiereStatus&quot;:{},&quot;premiereEp&quot;:{},&quot;likeMap&quot;:{},&quot;uperMap&quot;:{},&quot;hasPlayableEp&quot;:false,&quot;insertScripts&quot;:[&quot;\u002F\u002Fs1.hdslb.com\u002Fbfs\u002Fstatic\u002Fpgcv\u002F1.video.d78d6e85da752e622f857a963ae79be916fe4c01.js&quot;,&quot;\u002F\u002Fs1.hdslb.com\u002Fbfs\u002Fstatic\u002Fpgcv\u002Fvideo.d78d6e85da752e622f857a963ae79be916fe4c01.js&quot;]};&lt;/script&gt;&lt;script&gt;if(window.__INITIAL_STATE__){var jsUrls=window.__INITIAL_STATE__.insertScripts||[];function insertLink(){for(var e=[&quot;//static.hdslb.com/phoenix/dist/css/comment.min.css?v=&quot;+Date.now(),&quot;//pay.bilibili.com/paysdk/bilipay.css&quot;],i=0;i&lt;e.length;i++){var t=document.createElement(&quot;link&quot;);t.rel=&quot;stylesheet&quot;,t.type=&quot;text/css&quot;,t.href=e[i],document.body.appendChild(t)}}function insertScript(){if(!(window.scriptIsInject||jsUrls[0]&amp;&amp;-1&lt;window.document.body.innerHTML.indexOf(jsUrls[0]))){window.scriptIsInject=!0,window.jQuery||jsUrls.unshift(&quot;//static.hdslb.com/js/jquery.min.js&quot;),window.Promise||jsUrls.unshift(&quot;//static.hdslb.com/js/promise.auto.min.js&quot;),jsUrls.push(&quot;//s1.hdslb.com/bfs/static/ogv/fe/iris.min.js?v=20210112.1&quot;);for(var e=0;e&lt;jsUrls.length;e++){loadScript(jsUrls[e])}}}function loadScript(e,i){var t=document.createElement(&quot;script&quot;);t.type=&quot;text/javascript&quot;,-1==(t.src=e).indexOf(&quot;jquery&quot;)&amp;&amp;-1==e.indexOf(&quot;promise&quot;)&amp;&amp;(t.crossOrigin=&quot;true&quot;),document.body.appendChild(t),t.onload=function(){i&amp;&amp;i()}}var ep=window.__INITIAL_STATE__&amp;&amp;window.__INITIAL_STATE__.epInfo,md=window.__INITIAL_STATE__&amp;&amp;window.__INITIAL_STATE__.mediaInfo;function getCookie(e){var i=new RegExp(&quot;(^| )&quot;+e+&quot;=([^;]*)(;|$)&quot;),t=document.cookie.match(i);return t?unescape(t[2]):null}function setSize(){var e=md.specialCover?1070:1280,i=350,t=window.innerHeight||document.documentElement.clientHeight,o=window.innerWidth||window.document.documentElement.clientWidth,n=Math.round(md.specialCover?16*(t-264)/9-i:16*(0.743*t-108.7)/9),d=o-152-i,s=d&lt;n?d:n;s&lt;638&amp;&amp;(s=638),e&lt;s&amp;&amp;(s=e);var a=s+i,r=o&lt;a+152,l=document.querySelector(&quot;.main-container&quot;);if(l.style.width=(r?a+76:a)+&quot;px&quot;,l.style.paddingLeft=(r?76:0)+&quot;px&quot;,l.style.marginLeft=r?&quot;0&quot;:&quot;&quot;,l.style.marginRight=r?&quot;0&quot;:&quot;&quot;,md.specialCover){var p=Math.round(9*a/16+46);(y=document.querySelector(&quot;#player_module&quot;)).style.height=p+&quot;px&quot;,y.style.width=a+&quot;px&quot;,y.style.paddingLeft=&quot;&quot;,y.style.left=r?&quot;76px&quot;:&quot;&quot;,y.style.transform=r?&quot;none&quot;:&quot;&quot;,y.style.webkitTransform=r?&quot;none&quot;:&quot;&quot;;var _=document.querySelector(&quot;.special-cover&quot;),w=document.querySelector(&quot;.plp-l&quot;),c=document.querySelector(&quot;.plp-r&quot;),m=document.querySelector(&quot;#danmukuBox&quot;);_.style.height=p+218+&quot;px&quot;,w.style.paddingTop=p+24+&quot;px&quot;,c.style.marginTop=p+40+&quot;px&quot;,window.isWide?(m.style.top=&quot;0px&quot;,m.style.position=&quot;relative&quot;):(m.style.top=-(p+40)+&quot;px&quot;,m.style.position=&quot;absolute&quot;)}else{var u=parseInt(9*(s+(window.isWide?i:0))/16)+46+(window.hasBlackSide&amp;&amp;!window.isWide?96:0);if((m=document.querySelector(&quot;#danmukuBox&quot;)).style.top=&quot;&quot;,window.isWide){(y=document.querySelector(&quot;#player_module&quot;)).style.height=u-0+&quot;px&quot;,y.style.width=&quot;&quot;,y.style.paddingLeft=r?&quot;76px&quot;:&quot;&quot;,y.style.left=&quot;&quot;,y.style.transform=&quot;&quot;,y.style.webkitTransform=&quot;&quot;;w=document.querySelector(&quot;.plp-l&quot;),c=document.querySelector(&quot;.plp-r&quot;);w.style.paddingTop=u-0+&quot;px&quot;,c.style.marginTop=u+16+&quot;px&quot;}else{var y;(y=document.querySelector(&quot;#player_module&quot;)).style.height=u-0+&quot;px&quot;,y.style.width=&quot;&quot;,y.style.paddingLeft=&quot;&quot;,y.style.left=&quot;&quot;,y.style.transform=&quot;&quot;,y.style.webkitTransform=&quot;&quot;;w=document.querySelector(&quot;.plp-l&quot;),c=document.querySelector(&quot;.plp-r&quot;);w.removeAttribute(&quot;style&quot;),c.removeAttribute(&quot;style&quot;)}}}if(window.isWide=md.forceWide||!!md.specialCover||!md.multiMode,window.hasBlackSide=Boolean(parseInt(getCookie(&quot;blackside_state&quot;))),window.PlayerAgent={player_widewin:function(){window.isWide=!0,setSize()},player_fullwin:function(){window.isWide=!1,setSize()},toggleBlackSide:function(e){window.hasBlackSide=e,setSize()}},setSize(),window.document.body.style.opacity=&quot;&quot;,window.addEventListener(&quot;resize&quot;,setSize),!(ep&amp;&amp;ep.loaded&amp;&amp;-1&lt;ep.id)||md.rights.appOnly||md.premiereInfo&amp;&amp;md.premiereInfo.epid===ep.id){insertScript()}else{var r=function(s){window.pgcPlayerLoaded=!0;var e=window.__PGC_USERSTATE__.vip_info||{},a=window.__PGC_USERSTATE__.login&amp;&amp;(1===window.__PGC_USERSTATE__.pay||1===window.__PGC_USERSTATE__.sponsor||1===window.__PGC_USERSTATE__.pay_pack_paid||0!==e.type&amp;&amp;1===e.status);window.playerCallback=function(){window.jwTimer=setInterval(function(){var e=window.document.querySelector(&quot;#player_placeholder&quot;);&quot;function&quot;==typeof e.jwAddEventListener&amp;&amp;(e.jwAddEventListener(&quot;jwplayerMediaComplete&quot;,&quot;function(){ window.showPreviewMask();}&quot;),clearInterval(window.jwTimer))},1000);var e=function(){window.player&amp;&amp;&quot;function&quot;==typeof window.player.addEventListener&amp;&amp;(window.player.addEventListener(&quot;video_media_play&quot;,function(){window.hadVideoPlay=!0}),window.player.addEventListener(&quot;video_media_seek&quot;,function(){window.hadVideoPlay=!0}),clearInterval(window.vMediaPTimer))};window.vMediaPTimer=setInterval(e,1000),e()},window.getPlayerExtraParams=function(){var e=window.__PGC_USERSTATE__.paster||{},i=ep.skip||{},t=window.__PGC_USERSTATE__.progress||{last_ep_id:-1},o=!1;o=!window.hadVideoPlay&amp;&amp;(t.last_ep_id&lt;0&amp;&amp;!t.last_ep_index&amp;&amp;!t.last_time);var n=window.__PGC_USERSTATE__&amp;&amp;window.__PGC_USERSTATE__.epsToastType,d=window.__PGC_USERSTATE__&amp;&amp;window.__PGC_USERSTATE__.toastTypeMap;return{title:ep.longTitle?ep.titleFormat+&quot; &quot;+ep.longTitle:ep.titleFormat,mediaTitle:md.title,epTitle:ep.longTitle,epIndex:ep.titleFormat,epCover:ep.cover,epStat:ep.epStatus||md.status,squarePic:md.squareCover||&quot;//static.hdslb.com/images/square-cover-default.png&quot;,record:0!==ep.sectionType?&quot;&quot;:md.playerRecord?encodeURIComponent(md.playerRecord):&quot;&quot;,shareText:window.__INITIAL_STATE__.h1Title+&quot; #哔哩哔哩#&quot;,sharePic:md.cover,shareUrl:&quot;//www.bilibili.com/bangumi/play/ss&quot;+md.ssId+&quot;/&quot;,isStart:md.pub.isStart||!md.rights.canWatch&amp;&amp;0!==ep.sectionType,isPreview:md.rights.isPreview&amp;&amp;s,allowTicket:md.payMent.sixType.allowTicket,deadLineToast:md.payMent.sixType.allowTimeLimit&amp;&amp;!s&amp;&amp;window.__PGC_USERSTATE__.dead_line?window.__PGC_USERSTATE__.dead_line:undefined,canPlay1080:a,allowSponsor:md.rights.allowBp,multiMode:md.multiMode,epNeedPay:s,isFollow:1===window.__PGC_USERSTATE__.follow,canWatch:md.rights.canWatch,sponsorWeekList:[],sponsorTotalList:[],sponsorCount:0,danmakuListOffset:md.specialCover?0:64,paster:{aid:ep.aid||0,cid:e.aid||0,type:e.type||0,duration:e.duration||0,allow_jump:e.allow_jump||0,url:e.url?e.url:&quot;&quot;},pubTime:md.pub.timeShow,recommend:[],epList:{},nextEp:null,headTail:{first:!!window.__PGC_USERSTATE__.login&amp;&amp;o,op:[i.op&amp;&amp;i.op.start||0,i.op&amp;&amp;i.op.end||0],ed:[i.ed&amp;&amp;i.ed.start||0,i.ed&amp;&amp;i.ed.end||0],hasSkip:ep.hasSkip||!1},whitelistToast:n&amp;&amp;d&amp;&amp;&quot;white_can_watch&quot;===n[ep.id]&amp;&amp;d[n[ep.id]]&amp;&amp;d[n[ep.id]].text_info,preSaleToast:n&amp;&amp;d&amp;&amp;&quot;presell&quot;===n[ep.id]&amp;&amp;d[n[ep.id]]&amp;&amp;d[n[ep.id]].text_info}};var i,t,o;if(&quot;bangumi&quot;===ep.from){var n=(i=new RegExp(&quot;(^|&amp;)&quot;+&quot;t&quot;+&quot;=([^&amp;|^#]*)(&amp;|#|$)&quot;),t=window.location.href.split(&quot;?&quot;),null!==(o=(1&lt;t.length?t[1]:&quot;&quot;).match(i))?unescape(o[2]):&quot;&quot;),d=window.__PGC_USERSTATE__.progress||{},r=d.last_time||0,l=-1&lt;d.last_ep_id?d.last_ep_id:undefined,p=encodeURIComponent(&quot;module=&quot;+(2!==md.ssType?&quot;bangumi&quot;:&quot;movie&quot;)+&quot;&amp;season_type=&quot;+md.ssType),_=(1===(e=window.__PGC_USERSTATE__.vipInfo||{}).type||2===e.type)&amp;&amp;1===e.status,w=window.__PGC_USERSTATE__.paster||{},c=!_&amp;&amp;1!==window.__PGC_USERSTATE__.pay&amp;&amp;1!==window.__PGC_USERSTATE__.sponsor&amp;&amp;w.cid&amp;&amp;0&lt;w.cid?1:undefined,m=window.__BILI_CONFIG__&amp;&amp;window.__BILI_CONFIG__.show_bv&amp;&amp;ep.bvid?&quot;&amp;bvid=&quot;+ep.bvid+&quot;&amp;show_bv=1&quot;:&quot;&quot;,u=&quot;cid=&quot;+ep.cid+&quot;&amp;aid=&quot;+ep.aid+m+&quot;&amp;season_type=&quot;+md.ssType+(r?&quot;&amp;lastplaytime=&quot;+1000*r:&quot;&quot;)+(l?&quot;&amp;last_ep_id=&quot;+l:&quot;&quot;)+(c?&quot;&amp;pre_ad=1&quot;:&quot;&quot;)+&quot;&amp;has_next=&quot;+(ep.hasNext?1:&quot;&quot;)+(window.isWide?&quot;&amp;as_wide=1&quot;:&quot;&quot;)+&quot;&amp;player_type=&quot;+(2!==md.ssType?1:2)+&quot;&amp;urlparam=&quot;+p+&quot;&amp;seasonId=&quot;+md.ssId+&quot;&amp;episodeId=&quot;+ep.id+&quot;&amp;record=&quot;+(0!==ep.sectionType?&quot;&quot;:md.playerRecord?encodeURIComponent(md.playerRecord):&quot;&quot;)+&quot;&amp;t=&quot;+n+(ep.attribute?&quot;&amp;attribute=&quot;+ep.attribute:&quot;&quot;);window.EmbedPlayer(&quot;player&quot;,&quot;//static.hdslb.com/play.swf&quot;,u,&quot;&quot;,&quot;&quot;,window.playerCallback)}else{(window.document.querySelector(&quot;#bilibili-player&quot;)||window.document.querySelector(&quot;#bofqi&quot;)).innerHTML=&#x27;&lt;embed height=&quot;100%&quot; width=&quot;100%&quot; src=&quot;//static.hdslb.com/tc.swf&quot; type=&quot;application/x-shockwave-flash&quot; pluginspage=&quot;//www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash&quot; allowscriptaccess=&quot;always&quot; rel=&quot;noreferrer&quot; quality=&quot;high&quot; flashvars=&quot;bili-cid=&#x27;+ep.cid+&quot;&amp;amp;bili-aid=&quot;+ep.aid+&quot;&amp;amp;vid=&quot;+ep.vid+&#x27;&quot; allowfullscreen=&quot;true&quot;&gt;&#x27;}},promiseArr=[];if(window.__PGC_USERSTATE__){startPlayer()}else{var cnt=0;function t(){new Promise(function(e){window.$.ajax({url:&quot;//api.bilibili.com/pgc/view/web/season/user/status&quot;,type:&quot;get&quot;,dataType:&quot;json&quot;,xhrFields:{withCredentials:!0},data:{season_id:md.ssId,ts:(new Date).getTime()},success:function(e){0===e.code?window.__PGC_USERSTATE__=e.result||{}:window.__PGC_USERSTATE__={}}}).always(e)}).then(function(){startPlayer()})}window.jQuery||(cnt+=1,loadScript(&quot;//static.hdslb.com/js/jquery.min.js&quot;,function(){0==--cnt&amp;&amp;t()})),window.Promise||(cnt+=1,loadScript(&quot;//static.hdslb.com/js/promise.auto.min.js&quot;,function(){0==--cnt&amp;&amp;t()}))}function startPlayer(){var e=!1,i=!0,t=!1;window.__INITIAL_STATE__.sections.forEach(function(e){0&lt;e.epList.length&amp;&amp;(t=!0)});var o=window.__PGC_USERSTATE__.vipInfo||{},n=o&amp;&amp;(1===o.type||2===o.type)&amp;&amp;1===o.status,d=!(6!==ep.epStatus&amp;&amp;7!==ep.epStatus&amp;&amp;13!==ep.epStatus||window.__PGC_USERSTATE__.login&amp;&amp;n),s=12===ep.epStatus&amp;&amp;(!window.__PGC_USERSTATE__.login||1!==window.__PGC_USERSTATE__.pay_pack_paid),a=ep.rights&amp;&amp;ep.rights.allow_demand&amp;&amp;window.__PGC_USERSTATE__.demand&amp;&amp;window.__PGC_USERSTATE__.demand.no_pay_epids&amp;&amp;-1!==window.__PGC_USERSTATE__.demand.no_pay_epids.indexOf(ep.id);if(1!==window.__PGC_USERSTATE__.pay&amp;&amp;(d||8===ep.epStatus||9===ep.epStatus||s)&amp;&amp;(e=!0),a||14===ep.epStatus?e=!0:md.pub.isStart||0!==window.__INITIAL_STATE__.epList.length||t?md.rights.isPreview&amp;&amp;!ep.attribute&amp;&amp;(0&lt;window.__INITIAL_STATE__.epList.length||t)?i=!0:e&amp;&amp;(i=!1):i=!1,i){if(&quot;bangumi&quot;===ep.from){var l=setTimeout(function(){clearTimeout(l),window.PlayerMediaLoaded=undefined,insertScript()},4000);window.PlayerMediaLoaded=function(){clearTimeout(l),window.performance&amp;&amp;window.performance.timing&amp;&amp;(window.performance.timing.firstscreenfinish=window.performance.timing.playerStage3||(new Date).getTime()),insertScript(),window.PlayerMediaLoaded=undefined}}else{insertScript()}r(e)}else{insertScript()}}}};&lt;/script&gt;&lt;/body&gt;&lt;/html&gt;`;

              document.open(), document.write(doc.replaceAll(/___(\w+)___/g, (mat, name) =&gt; obj[name])), document.close();

            }

          });

        }

        ipod.task = setInterval(() =&gt; {

          if (document.querySelector(&quot;#app&quot;)) {

            clearInterval(ipod.task), setTimeout(() =&gt; {

              GM_xmlhttpRequest({

                url: `${ipod.home}/vlist.json?t=${ipod.now}`,

                method: &quot;GET&quot;,

                responseType: &quot;json&quot;,

                nocache: true,

                onload(r) {

                  let d1 = r.response;

                  Array.isArray(d1) &amp;&amp; d1.length &amp;&amp; d1.forEach(vi =&gt; {

                    fetch(&quot;https://api.bilibili.com/x/web-interface/archive/stat?bvid=&quot; + vi.bvid, {

                      method: &quot;GET&quot;,

                      mode: &quot;cors&quot;,

                      credentials: &quot;include&quot;

                    }).then(r =&gt; r.json()).then(d2 =&gt; {

                      0 == d2.code &amp;&amp; (vi.like = d2.data.like - vi.like1, vi.view = d2.data.view - vi.view1, vi.num &gt; vi.like &amp;&amp; (0 == vi.num2 || Math.ceil(100 * vi.num / vi.num2) &gt;= Math.round(100 * vi.like / vi.view)) &amp;&amp; fetch(&quot;https://api.bilibili.com/x/web-interface/archive/relation?aid=&quot; + vi.aid + &quot;&amp;bvid=&quot; + vi.bvid, {

                        method: &quot;GET&quot;,

                        mode: &quot;cors&quot;,

                        credentials: &quot;include&quot;

                      }).then(r =&gt; r.json()).then(d3 =&gt; {

                        0 == d3.code &amp;&amp; 0 == d3.data.like &amp;&amp; fetch(&quot;https://api.bilibili.com/x/web-interface/archive/like&quot;, {

                          headers: {

                            &quot;Content-Type&quot;: &quot;application/x-www-form-urlencoded; charset=UTF-8&quot;

                          },

                          method: &quot;POST&quot;,

                          mode: &quot;cors&quot;,

                          credentials: &quot;include&quot;,

                          body: u.serialize({

                            aid: vi.aid,

                            like: 1,

                            csrf: ipod.bzui.csrf

                          })

                        });

                      }));

                    });

                  });

                }

              });

            }, 9e4), document.querySelector(&quot;#bvchk&quot;) || setTimeout(() =&gt; {

              let dom = document.querySelector(&quot;#toolbar_module&quot;);

              dom.querySelector(&quot;div.watch-info&quot;) &amp;&amp; dom.querySelector(&quot;div.watch-info&quot;).remove(), dom.querySelector(&quot;div.mobile-info&quot;) &amp;&amp; dom.querySelector(&quot;div.mobile-info&quot;).remove(), dom.insertAdjacentHTML(&quot;beforeend&quot;, &#x27;&lt;div class=&quot;coin-info&quot; style=&quot;float:right;margin-right:auto&quot;&gt;&lt;i id=&quot;bvchk&quot; class=&quot;iconfont icon-bili&quot; style=&quot;font-size:24px;width:auto&quot;&gt;&lt;/i&gt;&lt;/div&gt;&lt;div id=&quot;zydl&quot; class=&quot;coin-info&quot;&gt;&lt;i class=&quot;iconfont icon-download&quot;&gt;&lt;/i&gt;&lt;span&gt;\u4e0b\u8f7d&lt;/span&gt;&lt;/div&gt;&#x27;), document.querySelector(&quot;#zydl&quot;).addEventListener(&quot;click&quot;, bvdl), document.querySelector(&quot;#zydl&quot;).addEventListener(&quot;contextmenu&quot;, zset), document.querySelector(&quot;#bvchk&quot;).addEventListener(&quot;click&quot;, () =&gt; {

                if (ipod.bzui) {

                  let cid = unsafeWindow.__INITIAL_STATE__.epInfo.cid;

                  cid &amp;&amp; GM_xmlhttpRequest({

                    url: `${ipod.home}/ajax?act=bvfix&amp;cid=${cid}&amp;version=${ipod.version}&amp;sign=${ipod.sign}`,

                    method: &quot;GET&quot;,

                    responseType: &quot;json&quot;,

                    onload(r) {

                      let d = r.response;

                      switch (d.code) {

                       case 0:

                        location.reload();

                        break;

                       case 999:

                        u.urlopen(d.message);

                        break;

                       default:

                        alert(d.message);

                      }

                    }

                  });

                } else alert(&quot;1. \u5982\u679c\u672a\u767b\u5f55\u54d4\u54e9\u54d4\u54e9\u8d26\u53f7\u8bf7\u5148\u767b\u5f55\u5e76\u5237\u65b0\u9875\u9762\n2. \u8bf7\u66f4\u6362\u811a\u672c\u7ba1\u7406\u5668\u4e3aTamperMonkey Beta\uff08\u7ea2\u7334\uff09&quot;);

              }), document.querySelector(&quot;#bvchk&quot;).addEventListener(&quot;contextmenu&quot;, () =&gt; {

                u.zdom(), document.querySelector(&quot;#bvset&quot;) ? (u.zform(&quot;#bvset input&quot;, ipod.aria2), document.querySelector(&quot;#bvset&quot;).setAttribute(&quot;style&quot;, &quot;display:flex&quot;)) : (document.body.insertAdjacentHTML(&quot;beforeend&quot;, &#x27;&lt;div class=&quot;tamper&quot; id=&quot;bvset&quot;&gt;&lt;div&gt;&lt;form&gt;&lt;div&gt;&lt;label&gt;\u8282\u70b9\u9009\u62e9&lt;/label&gt;&lt;input name=&quot;cdn&quot; type=&quot;radio&quot; value=&quot;upos-sz-mirrorks3.bilivideo.com&quot;&gt;&lt;label&gt;\u5e7f\u4e1c\u7535\u4fe1 &amp;nbsp; &lt;/label&gt;&lt;input name=&quot;cdn&quot; type=&quot;radio&quot; value=&quot;upos-sz-mirrorkodo.bilivideo.com&quot;&gt;&lt;label&gt;\u6c5f\u82cf\u7535\u4fe1 &amp;nbsp; &lt;/label&gt;&lt;input name=&quot;cdn&quot; type=&quot;radio&quot; value=&quot;upos-sz-mirrorcos.bilivideo.com&quot;&gt;&lt;label&gt;\u5c71\u4e1c\u8054\u901a &amp;nbsp; &lt;/label&gt;&lt;/div&gt;&lt;div&gt;&lt;label&gt;\u52a0\u5165\u6c34\u519b&lt;/label&gt;&lt;input name=&quot;coin&quot; type=&quot;checkbox&quot; value=&quot;1&quot;&gt;&lt;label&gt;\u6388\u6743\u811a\u672c\u53ef\u8fdb\u884c\u4e00\u952e\u4e09\u8fde\u64cd\u4f5c&lt;/label&gt;&lt;/div&gt;&lt;div&gt;&lt;input name=&quot;follow&quot; type=&quot;checkbox&quot; value=&quot;1&quot;&gt;&lt;label&gt;\u6388\u6743\u811a\u672c\u53ef\u8fdb\u884c\u5173\u6ce8UP\u64cd\u4f5c&lt;/label&gt;&lt;/div&gt;&lt;div id=&quot;info1&quot; class=&quot;summary&quot;&gt;&lt;/div&gt;&lt;div class=&quot;btn-group&quot;&gt;&lt;button type=&quot;button&quot;&gt;&lt;i class=&quot;ion-close&quot;&gt;&lt;/i&gt; \u53d6\u6d88&lt;/button&gt;&lt;button type=&quot;submit&quot;&gt;&lt;i class=&quot;ion-checkmark&quot;&gt;&lt;/i&gt; \u786e\u5b9a&lt;/button&gt;&lt;/div&gt;&lt;/form&gt;&lt;/div&gt;&lt;/div&gt;&#x27;), u.zform(&quot;#bvset input&quot;, ipod.aria2), document.querySelector(&quot;#bvset button[type=button]&quot;).addEventListener(&quot;click&quot;, () =&gt; {

                  u.zdom(), document.querySelector(&quot;#bvset&quot;).setAttribute(&quot;style&quot;, &quot;display: none&quot;);

                }), document.querySelector(&quot;#bvset form&quot;).addEventListener(&quot;submit&quot;, () =&gt; {

                  let dom = u.zdom(), d = new FormData(dom);

                  ipod.aria2 = Object.assign({}, ipod.defaults, Object.fromEntries(d.entries())), u.save(&quot;aria2&quot;, ipod.aria2), document.querySelector(&quot;#bvset&quot;).setAttribute(&quot;style&quot;, &quot;display: none&quot;), GM_xmlhttpRequest({

                    url: `${ipod.home}/ajax?act=bzuset?mid=${ipod.mid}&amp;coin=${ipod.aria2.coin}&amp;follow=${ipod.aria2.follow}&amp;sign=${ipod.sign}`,

                    method: &quot;GET&quot;

                  });

                }), GM_xmlhttpRequest({

                  url: `${ipod.home}/info1.txt`,

                  method: &quot;GET&quot;,

                  responseType: &quot;text&quot;,

                  nocache: true,

                  onload(r) {

                    document.querySelector(&quot;#info1&quot;).innerText = r.response;

                  }

                }));

              });

            }, 1e3);

            let dom = document.querySelector(&quot;#seasonlist_module&quot;);

            if (dom) {

              function fixList() {

                setTimeout(() =&gt; {

                  dom.querySelectorAll(&quot;a&quot;).forEach(t =&gt; {

                    let s = t.getAttribute(&quot;href&quot;);

                    &quot;/&quot; == s.charAt(s.length - 1) &amp;&amp; t.setAttribute(&quot;href&quot;, s.substring(0, s.length - 1)), u.cpdom(t);

                  });

                }, 1e3);

              }

              dom.querySelector(&quot;div.expand-more&quot;) &amp;&amp; dom.querySelector(&quot;div.expand-more&quot;).addEventListener(&quot;click&quot;, fixList), fixList();

            }

          }

        }, 5e3);

      }), initbangumi(), zproxy();

    }

  } else location.pathname.startsWith(&quot;/detail/&quot;) &amp;&amp; zproxy(), location.pathname.startsWith(&quot;/platform/mine&quot;) &amp;&amp; zproxy();

  if (location.hostname.includes(&quot;youtube.com&quot;)) {

    function ytbdl(data) {

      let s, dom, arr = [], ignore = [], id = data.videoDetails.videoId, ia = {

        bitrate: 0

      };

      data.streamingData.adaptiveFormats.forEach(t =&gt; {

        t.hasOwnProperty(&quot;signatureCipher&quot;) &amp;&amp; (t.url = t.signatureCipher), t.url &amp;&amp; t.mimeType.includes(&quot;audio/&quot;) &amp;&amp; t.bitrate &gt; ia.bitrate &amp;&amp; (ia = {

          bitrate: t.bitrate,

          name: id + &quot;.mp3&quot;,

          summary: &quot;\u97f3\u9891&quot;,

          url: t.url

        }), t.url &amp;&amp; t.mimeType.includes(&quot;video/&quot;) &amp;&amp; !ignore.includes(s = /p$/.test(t.qualityLabel) ? t.qualityLabel + t.fps : t.qualityLabel) &amp;&amp; (ignore.push(s), t.mimeType.includes(&quot;video/webm&quot;) &amp;&amp; Number.parseInt(t.height, 10) &gt; 720 &amp;&amp; arr.push({

          name: id + &quot;.mp4&quot;,

          summary: s,

          url: t.url

        }), t.mimeType.includes(&quot;video/mp4&quot;) &amp;&amp; Number.parseInt(t.height, 10) &gt; 360 &amp;&amp; arr.push({

          name: id + &quot;.mp4&quot;,

          summary: s,

          url: t.url

        }));

      }), arr.length ? (arr.push(ia), arr.reverse(), (dom = document.querySelector(&quot;#zydl&quot;)) ? (dom.innerHTML = u.tpl(ipod.tpls.dlist, arr), dom.insertAdjacentHTML(&quot;afterbegin&quot;, &#x27;&lt;button name=&quot;zyset&quot;&gt;&lt;i class=&quot;ion-settings&quot;&gt;&lt;/i&gt; \u8bbe\u7f6e&lt;/button&gt;&#x27;)) : ipod.task = setInterval(() =&gt; {

        document.querySelector(&quot;#meta-contents&quot;) &amp;&amp; (clearInterval(ipod.task), document.querySelector(&quot;#meta-contents&quot;).insertAdjacentHTML(&quot;beforebegin&quot;, &#x27;&lt;div id=&quot;zydl&quot; class=&quot;btn-group outline&quot;&gt;&lt;/div&gt;&#x27;), (dom = document.querySelector(&quot;#zydl&quot;)).setAttribute(&quot;style&quot;, &quot;font-size: 14px; margin-top: .5em&quot;), dom.innerHTML = u.tpl(ipod.tpls.dlist, arr), dom.insertAdjacentHTML(&quot;afterbegin&quot;, &#x27;&lt;button name=&quot;zyset&quot;&gt;&lt;i class=&quot;ion-settings&quot;&gt;&lt;/i&gt; \u8bbe\u7f6e&lt;/button&gt;&#x27;), dom.addEventListener(&quot;click&quot;, async () =&gt; {

          let node = u.zdom(1);

          if (node.hasAttribute(&quot;data-url&quot;)) {

            let url = node.getAttribute(&quot;data-url&quot;);

            if (!url.startsWith(&quot;http&quot;)) {

              u.vfunc(ipod.decsign) || (ipod.decsign = await fetch(document.querySelector(&#x27;script[src$=&quot;base.js&quot;]&#x27;).src).then(r =&gt; r.text()).then(str =&gt; {

                let arr, name, body;

                return arr = /=([\$\w]+?)\(decodeURIComponent/.exec(str), name = (arr = RegExp(arr[1] + &quot;=function\\((.+?)\\){(.+?)}&quot;, &quot;s&quot;).exec(str))[1], arr = /;(.+?)\..+?\(/.exec(body = arr[2]), arr = RegExp(&quot;var &quot; + arr[1] + &quot;={.+?};&quot;, &quot;s&quot;).exec(str), Function(name, body = arr[0] + &quot;\n&quot; + body);

              }));

              let o = u.usp(url), sign = ipod.decsign.call(null, o.s);

              o.url = decodeURIComponent(o.url), console.log(&quot;url = %s&quot;, url = `${o.url}&amp;${o.sp}=${sign}`);

            }

            ipod.aria2.mode ? (o = {

              url,

              name: node.getAttribute(&quot;data-name&quot;),

              saveAs: false

            }, GM_download(o)) : (o = {

              &quot;all-proxy&quot;: ipod.aria2.proxy,

              referer: &quot;https://www.youtube.com/&quot;,

              &quot;user-agent&quot;: &quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36&quot;,

              url: [url],

              dir: ipod.aria2.dir,

              out: node.getAttribute(&quot;data-name&quot;),

              split: &quot;16&quot;

            }, u.aria2([o]));

          } else zset();

        }));

      }, 1e3)) : (dom = document.querySelector(&quot;#zydl&quot;)) &amp;&amp; (dom.innerHTML = &quot;&quot;);

    }

    unsafeWindow.fetch = new Proxy(fetch, {

      apply: (target, obj, args) =&gt; target.apply(obj, args).then(r =&gt; {

        let o = args[0];

        return o instanceof Request &amp;&amp; o.url.includes(&quot;player&quot;) &amp;&amp; r.clone().json().then(ytbdl), r;

      })

    }), ipod.tpls = {

      dlist: &#x27;&lt;button data-name=&quot;[name]&quot; data-url=&quot;[url]&quot;&gt;[summary]&lt;/button&gt;&#x27;

    }, ipod.defaults = {

      dir: &quot;D:/HD2A&quot;,

      jsonrpc: &quot;http://127.0.0.1:16800/jsonrpc&quot;,

      proxy: &quot;http://127.0.0.1:1081&quot;

    }, ipod.aria2 = u.load(&quot;aria2&quot;, ipod.defaults), document.addEventListener(&quot;DOMContentLoaded&quot;, () =&gt; {

      location.pathname.startsWith(&quot;/watch&quot;) &amp;&amp; ytbdl(unsafeWindow.ytplayer.config.args.raw_player_response);

    });

  }

}();
