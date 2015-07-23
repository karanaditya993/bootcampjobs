window.Modernizr=function(e,t,n){function i(e){y.cssText=e}function r(e,t){return typeof e===t}function o(e,t){return!!~(""+e).indexOf(t)}function a(e,t){for(var i in e){var r=e[i];if(!o(r,"-")&&y[r]!==n)return"pfx"==t?r:!0}return!1}function s(e,t,i){for(var o in e){var a=t[e[o]];if(a!==n)return i===!1?e[o]:r(a,"function")?a.bind(i||t):a}return!1}function l(e,t,n){var i=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+x.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?a(o,t):(o=(e+" "+C.join(i+" ")+i).split(" "),s(o,t,n))}var c,u,d,h="2.8.3",p={},f=!0,g=t.documentElement,m="modernizr",v=t.createElement(m),y=v.style,b={}.toString,_=" -webkit- -moz- -o- -ms- ".split(" "),w="Webkit Moz O ms",x=w.split(" "),C=w.toLowerCase().split(" "),S={svg:"http://www.w3.org/2000/svg"},T={},E=[],k=E.slice,D=function(e,n,i,r){var o,a,s,l,c=t.createElement("div"),u=t.body,d=u||t.createElement("body");if(parseInt(i,10))for(;i--;)s=t.createElement("div"),s.id=r?r[i]:m+(i+1),c.appendChild(s);return o=["&#173;",'<style id="s',m,'">',e,"</style>"].join(""),c.id=m,(u?c:d).innerHTML+=o,d.appendChild(c),u||(d.style.background="",d.style.overflow="hidden",l=g.style.overflow,g.style.overflow="hidden",g.appendChild(d)),a=n(c,e),u?c.parentNode.removeChild(c):(d.parentNode.removeChild(d),g.style.overflow=l),!!a},A=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var i;return D("@media "+t+" { #"+m+" { position: absolute; } }",function(t){i="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),i},I=function(){function e(e,o){o=o||t.createElement(i[e]||"div"),e="on"+e;var a=e in o;return a||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),a=r(o[e],"function"),r(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,a}var i={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),N={}.hasOwnProperty;d=r(N,"undefined")||r(N.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(e,t){return N.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=k.call(arguments,1),i=function(){if(this instanceof i){var r=function(){};r.prototype=t.prototype;var o=new r,a=t.apply(o,n.concat(k.call(arguments)));return Object(a)===a?a:o}return t.apply(e,n.concat(k.call(arguments)))};return i}),T.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:D(["@media (",_.join("touch-enabled),("),m,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},T.csstransforms=function(){return!!l("transform")},T.csstransitions=function(){return l("transition")},T.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(b.call(t.createElementNS(S.svg,"animate")))};for(var R in T)d(T,R)&&(u=R.toLowerCase(),p[u]=T[R](),E.push((p[u]?"":"no-")+u));return p.addTest=function(e,t){if("object"==typeof e)for(var i in e)d(e,i)&&p.addTest(i,e[i]);else{if(e=e.toLowerCase(),p[e]!==n)return p;t="function"==typeof t?t():t,"undefined"!=typeof f&&f&&(g.className+=" "+(t?"":"no-")+e),p[e]=t}return p},i(""),v=c=null,p._version=h,p._prefixes=_,p._domPrefixes=C,p._cssomPrefixes=x,p.mq=A,p.hasEvent=I,p.testProp=function(e){return a([e])},p.testAllProps=l,p.testStyles=D,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+E.join(" "):""),p}(this,this.document),Modernizr.addTest("overflowscrolling",function(){return Modernizr.testAllProps("overflowScrolling")}),Modernizr.addTest("filereader",function(){return!!(window.File&&window.FileList&&window.FileReader)}),function(e){function t(){if(!e.facybox.settings.inited){e.facybox.settings.inited=!0,e(document).trigger("init.facybox"),i();var t=e.facybox.settings.imageTypes.join("|");e.facybox.settings.imageTypesRegexp=new RegExp(".("+t+")","i"),e("body").append(e.facybox.html());var r=e("#facybox");if(e.browser.msie){if(e(".n, .s, .w, .e, .nw, .ne, .sw, .se",r).fixPNG(),parseInt(e.browser.version)<=6){var o="<style type='text/css' media='screen'>* html #facybox_overlay { position: absolute; height: expression(document.body.scrollHeight > document.body.offsetHeight ? document.body.scrollHeight : document.body.offsetHeight + 'px');}</style>";e("head").append(o),e(".close",r).fixPNG(),e(".close",r).css({right:"15px"})}e(".w, .e",r).css({width:"13px","font-size":"0"}).text("&nbsp;")}e.facybox.settings.noAutoload||n(),e("#facybox").delegate(".close","click",e.facybox.close),e("#facybox").delegate(".close-facybox","click",e.facybox.close)}}function n(){e("#facybox").find(".n, .close , .s, .w, .e, .nw, ne, sw, se").each(function(){if("none"!==e(this).css("background-image")){var t=new Image;t.src=e(this).css("background-image").replace(/^url\(\"?/,"").replace(/\"?\)$/,"")}})}function i(){var t=e.facybox.settings;t.imageTypes=t.image_types||t.imageTypes,t.facyboxHtml=t.facybox_html||t.facyboxHtml}function r(t){if(t.match(/#/)){var n=window.location.href.split("#")[0],i=t.replace(n,"");if("#"==i)return;e.facybox.reveal(e(i),e(i).parent())}else t.match(e.facybox.settings.imageTypesRegexp)?a(t):s(t)}function o(t,n){function i(e){r=(r+e+t.length)%t.length,a(t[r]),s.find(".counter").html(r+1+" / "+t.length)}var r=e.inArray(n||0,t);-1==r&&(r=0);var o=e("#facybox div.footer");o.append(e('<div class="navigation"><a class="prev"/><a class="next"/><div class="counter"></div></div>'));var s=e("#facybox .navigation");e(document).bind("afterClose.facybox",function(){s.remove()}),i(0),e(".prev",s).click(function(){i(-1)}),e(".next",s).click(function(){i(1)}),e(document).bind("keydown.facybox",function(e){39==e.keyCode&&i(1),37==e.keyCode&&i(-1)})}function a(t){var n=e("#facybox");e("#facybox .content").empty(),e.facybox.loading();var i=new Image;i.onload=function(){e.facybox.reveal('<div class="image"><img src="'+i.src+'" /></div>',e.facybox.content_klass);var t=e("div.footer",n),r=e("div.content",n),o=e("div.navigation",n),a=e("a.next",n),s=e("a.prev",n),l=e("div.counter",n),c=[r.width(),r.height()];t.width(c[0]).height(c[1]),o.width(c[0]).height(c[1]),a.width(parseInt(c[0]/2)).height(c[1]).css({left:c[0]/2}),s.width(c[0]/2).height(c[1]),l.width(parseInt(n.width()-26)).css({opacity:.5,"-moz-border-radius":"8px","-webkit-border-radius":"8px"})},i.src=t}function s(t){e.ajax({type:"GET",url:t,complete:function(n){content_type=n.getResponseHeader("Content-Type"),jQuery.inArray(content_type,e.facybox.settings.imageMimeTypes)>=0?(a(t),e.facybox.centralize()):e.facybox.reveal(n.responseText)}})}function l(){return 0==e.facybox.settings.overlay||null===e.facybox.settings.opacity}function c(){l()||(0==e("#facybox_overlay").length&&e("body").append('<div id="facybox_overlay" class="facybox_hide"></div>'),e("#facybox_overlay").hasClass("facybox_overlayBG")||e("#facybox_overlay").hide().addClass("facybox_overlayBG").css("opacity",e.facybox.settings.opacity).fadeIn(200),e.facybox.settings.modal||e("#facybox_overlay").click(function(){e(document).trigger("close.facybox")}))}function u(t){return l()?void("function"==typeof t&&t()):void e("#facybox_overlay").fadeOut(200,function(){e("#facybox_overlay").removeClass("facybox_overlayBG").addClass("facybox_hide"),"function"==typeof t&&t()})}e.fn.fixPNG=function(){return this.each(function(){var t=e(this).css("backgroundImage");t.match(/^url\(["']?(.*\.png)["']?\)$/i)&&(t=RegExp.$1,e(this).css({backgroundImage:"none",filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod="+("no-repeat"==e(this).css("backgroundRepeat")?"crop":"scale")+", src='"+t+"')"}).each(function(){var t=e(this).css("position");"absolute"!=t&&"relative"!=t&&e(this).css("position","relative")}))})},e.facybox=function(t,n){e.facybox.loading(),e.facybox.content_klass=n,t.ajax?s(t.ajax):t.image?a(t.image):t.images?o(t.images,t.initial):t.div?r(t.div):e.isFunction(t)?t.call(e):e.facybox.reveal(t)},e.extend(e.facybox,{settings:{opacity:.3,overlay:!0,modal:!1,imageTypes:["png","jpg","jpeg","gif"],imageMimeTypes:["image/jpeg","image/png","image/gif"]},html:function(){return'		<div id="facybox" style="display:none;"> 			<div class="popup"> 				<table> 					<tbody> 						<tr> 							<td class="nw"/><td class="n" /><td class="ne"/> 						</tr> 						<tr> 							<td class="loading_body"> 						</tr> 						<tr> 							<td class="w" /> 							<td class="body"> 							<div class="footer"> </div> 							<div class="content"> 							</div> 						</td> 							<td class="e"/> 						</tr> 						<tr> 							<td class="sw"/><td class="s"/><td class="se"/> 						</tr> 					</tbody> 				</table> 			</div> 		</div> 		<div class="loading"></div> 	'},loading:function(){t(),e(".loading",e("#facybox"))[0]||(c(),e.facybox.wait(),e.facybox.settings.modal||e(document).bind("keydown.facybox",function(t){27==t.keyCode&&e.facybox.close()}),e(document).trigger("loading.facybox"))},wait:function(){var t=e("#facybox");e(".content",t).empty(),e(".loading_body",t).children().hide().end().append('<div class="loading"></div>'),t.fadeIn("fast"),e.facybox.centralize(),e(document).trigger("reveal.facybox").trigger("afterReveal.facybox")},centralize:function(){var t,n=e("#facybox"),i=e.facybox.getViewport(),r=parseInt(n.height());if(t=window._mediaDependency.isHandheld()?0:parseInt(i[0])/2-parseInt(n.find("table").width())/2,i[1]>r){var o=i[3]+(i[1]-r)/2;n.css({left:t,top:o})}else{var o=i[3]+i[1]/10;n.css({left:t,top:o})}},getViewport:function(){return[e(window).width(),e(window).height(),e(window).scrollLeft(),e(window).scrollTop()]},reveal:function(t,n){"undefined"!=typeof n&&(e.facybox.$revealed_div_parent=n),e(document).trigger("beforeReveal.facybox");var i=e("#facybox");e(".content",i).attr("class",(e.facybox.content_klass||"")+" content").html("").append(t).children().show(),e(".loading",i).remove();var r=e(".body",i);r.children().fadeIn("fast"),e.facybox.centralize(),e(document).trigger("reveal.facybox").trigger("afterReveal.facybox")},close:function(){return e(document).trigger("close.facybox"),!1}}),e.fn.facybox=function(n){var i=e(this);return i[0]?(n&&e.extend(e.facybox.settings,n),e.facybox.settings.noAutoload||t(),i.bind("click.facybox",function(){e.facybox.loading();var t=this.rel.match(/facybox\[?\.(\w+)\]?/);return e.facybox.content_klass=t?t[1]:"",r(this.href),!1}),i):i},e(document).bind("close.facybox",function(){e(document).unbind("keydown.facybox");var t=e("#facybox");void 0!=e.facybox.$revealed_div_parent&&(e.facybox.$revealed_div_parent.append(e(".content",t).children()),e.facybox.$revealed_div_parent=void 0),e.browser.msie?(e("#facybox").hide(),u(function(){e("#facybox .loading").remove(),e(document).trigger("afterClose.facybox")})):e("#facybox").fadeOut("fast",function(){e("#facybox .content").removeClass().addClass("content"),u(function(){e("#facybox .loading").remove(),e(document).trigger("afterClose.facybox")})})})}(jQuery);var JSON;JSON||(JSON={}),function(){"use strict";function f(e){return 10>e?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,i,r,o,a,s=gap,l=t[e];switch(l&&"object"==typeof l&&"function"==typeof l.toJSON&&(l=l.toJSON(e)),"function"==typeof rep&&(l=rep.call(t,e,l)),typeof l){case"string":return quote(l);case"number":return isFinite(l)?String(l):"null";case"boolean":case"null":return String(l);case"object":if(!l)return"null";if(gap+=indent,a=[],"[object Array]"===Object.prototype.toString.apply(l)){for(o=l.length,n=0;o>n;n+=1)a[n]=str(n,l)||"null";return r=0===a.length?"[]":gap?"[\n"+gap+a.join(",\n"+gap)+"\n"+s+"]":"["+a.join(",")+"]",gap=s,r}if(rep&&"object"==typeof rep)for(o=rep.length,n=0;o>n;n+=1)"string"==typeof rep[n]&&(i=rep[n],r=str(i,l),r&&a.push(quote(i)+(gap?": ":":")+r));else for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(r=str(i,l),r&&a.push(quote(i)+(gap?": ":":")+r));return r=0===a.length?"{}":gap?"{\n"+gap+a.join(",\n"+gap)+"\n"+s+"}":"{"+a.join(",")+"}",gap=s,r}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof JSON.stringify&&(JSON.stringify=function(e,t,n){var i;if(gap="",indent="","number"==typeof n)for(i=0;n>i;i+=1)indent+=" ";else"string"==typeof n&&(indent=n);if(rep=t,t&&"function"!=typeof t&&("object"!=typeof t||"number"!=typeof t.length))throw new Error("JSON.stringify");return str("",{"":e})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(e,t){var n,i,r=e[t];if(r&&"object"==typeof r)for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(i=walk(r,n),void 0!==i?r[n]=i:delete r[n]);return reviver.call(e,t,r)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),jQuery.parseQuery=function(e,t){var n="string"==typeof e?e:window.location.search,i={f:function(e){return unescape(e).replace(/\+/g," ")}},t="object"==typeof e&&"undefined"==typeof t?e:t,i=jQuery.extend({},i,t),r={};return jQuery.each(n.match(/^\??(.*)$/)[1].split("&"),function(e,t){t=t.split("="),t[1]=i.f(t[1]),r[t[0]]=r[t[0]]?r[t[0]]instanceof Array?(r[t[0]].push(t[1]),r[t[0]]):[r[t[0]],t[1]]:t[1]}),r},function(){var e,t,n,i,r,o,a,s,l,c,u,d,h,p,f,g,m,v;try{if(null==window.Modernizr)throw new Error("Modernizr must be loaded");if(null!=window._mediaDependency)throw new Error("Media object already defined");if(h=function(e){var t,n,i,r,o;for(r=e+"=",o=document.cookie.split(";"),n=0,i=o.length;i>n;n++){for(t=o[n];" "===t.charAt(0);)t=t.substring(1,t.length);if(0===t.indexOf(r))return t.substring(r.length,t.length)}return null},s=h("force_desktop"),document.documentElement.className=document.documentElement.className+(" "+(s?"force-desktop":"no-force-desktop")),d={SMALL:["only screen and (max-width: 480px)","only screen and (-webkit-device-pixel-ratio:0.75)","only all and (max-device-width: 960px) and (-webkit-min-device-pixel-ratio: 1.5)","only all and (max-device-width: 960px) and (-o-min-device-pixel-ratio: 3/2)","only all and (max-device-width: 960px) and (min--moz-device-pixel-ratio: 1.5)","only all and (max-device-width: 960px) and (min-device-pixel-ratio: 1.5)","only handheld"]},n={LARGE:"ml",MEDIUM:"mm",SMALL:"ms"},e=window.navigator.userAgent.match(/iPad/i)||s?["LARGE"]:["LARGE","SMALL"],document.documentElement.className.match(/(^|\s)responsive(\s|$)/)){if(2!==(null!=(p=window._mediaBreakpoints)?p.length:void 0))throw new Error("Cannot parse breakpoints");f=function(){var e,n,i,r;for(i=window._mediaBreakpoints,r=[],e=0,n=i.length;n>e;e++)t=i[e],r.push(parseInt(t));return r}(),m=f[0],u=f[1],d={LARGE:["only all and (min-width: "+(u+1)+"px)"],MEDIUM:["only all and (min-width: "+(m+1)+"px) and (max-width: "+u+"px)"],SMALL:["only all and (max-width: "+m+"px)"]},s||(e=["LARGE","MEDIUM","SMALL"])}for(o=function(){var t,i,r,o,a,s,l,c;for(t=0,r=e.length;r>t;t++)if(c=e[t],null!=d[c])for(l=d[c],i=0,o=l.length;o>i;i++){s=l[i],a=!1;try{a=window.Modernizr.mq(s)}catch(u){}if(a)return n[c]}return n.LARGE},r=null,l=0,c=e.length;c>l;l++)v=e[l],i=n[v],document.documentElement.className.match(RegExp("(^|\\s)"+i+"(\\s|$)"))&&(r=i);window._mediaDependency={isHandheld:function(){return r===n.SMALL},isTablet:function(){return r===n.MEDIUM},isDesktop:function(){return r===n.LARGE},detect:function(){var t,i,a,s,l;if(l=r,r=o(),l!==r){for(document.documentElement.className=document.documentElement.className.replace(RegExp("(^|\\s)"+l+"(\\s|$)"),"$1$2").replace(/(^\s+|\s+$)/g,""),t=0,a=e.length;a>t;t++)v=e[t],n[v]!==l&&(document.documentElement.className=document.documentElement.className.replace(RegExp("(^|\\s)no-"+n[v]+"(\\s|$)"),"$1$2").replace(/(^\s+|\s+$)/g,""));for(document.documentElement.className=document.documentElement.className+(" "+r),i=0,s=e.length;s>i;i++)v=e[i],n[v]!==r&&(document.documentElement.className=document.documentElement.className+(" no-"+n[v]));return!0}return!1}},window._mediaDependency.detect()}catch(y){a=y,window[(null!=(g=window._rollbarConfig)?g.globalAlias:void 0)||"Rollbar"].error(a,"Error initializing media dependency")}}.call(this),function(e,t){e.rails!==t&&e.error("jquery-ujs has already been loaded!");var n,i=e(document);e.rails=n={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",buttonClickSelector:"button[data-remote]:not(form button), button[data-confirm]:not(form button)",inputChangeSelector:"select[data-remote], input[data-remote], textarea[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",disableSelector:"input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",enableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",requiredInputSelector:"input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",fileInputSelector:"input[type=file]",linkDisableSelector:"a[data-disable-with], a[data-disable]",buttonDisableSelector:"button[data-remote][data-disable-with], button[data-remote][data-disable]",CSRFProtection:function(t){var n=e('meta[name="csrf-token"]').attr("content");n&&t.setRequestHeader("X-CSRF-Token",n)},refreshCSRFTokens:function(){var t=e("meta[name=csrf-token]").attr("content"),n=e("meta[name=csrf-param]").attr("content");e('form input[name="'+n+'"]').val(t)},fire:function(t,n,i){var r=e.Event(n);return t.trigger(r,i),r.result!==!1},confirm:function(e){return confirm(e)},ajax:function(t){return e.ajax(t)},href:function(e){return e.attr("href")},handleRemote:function(i){var r,o,a,s,l,c,u,d;if(n.fire(i,"ajax:before")){if(s=i.data("cross-domain"),l=s===t?null:s,c=i.data("with-credentials")||null,u=i.data("type")||e.ajaxSettings&&e.ajaxSettings.dataType,i.is("form")){r=i.attr("method"),o=i.attr("action"),a=i.serializeArray();var h=i.data("ujs:submit-button");h&&(a.push(h),i.data("ujs:submit-button",null))}else i.is(n.inputChangeSelector)?(r=i.data("method"),o=i.data("url"),a=i.serialize(),i.data("params")&&(a=a+"&"+i.data("params"))):i.is(n.buttonClickSelector)?(r=i.data("method")||"get",o=i.data("url"),a=i.serialize(),i.data("params")&&(a=a+"&"+i.data("params"))):(r=i.data("method"),o=n.href(i),a=i.data("params")||null);return d={type:r||"GET",data:a,dataType:u,beforeSend:function(e,r){return r.dataType===t&&e.setRequestHeader("accept","*/*;q=0.5, "+r.accepts.script),n.fire(i,"ajax:beforeSend",[e,r])?void i.trigger("ajax:send",e):!1},success:function(e,t,n){i.trigger("ajax:success",[e,t,n])},complete:function(e,t){i.trigger("ajax:complete",[e,t])},error:function(e,t,n){i.trigger("ajax:error",[e,t,n])},crossDomain:l},c&&(d.xhrFields={withCredentials:c}),o&&(d.url=o),n.ajax(d)}return!1},handleMethod:function(i){var r=n.href(i),o=i.data("method"),a=i.attr("target"),s=e("meta[name=csrf-token]").attr("content"),l=e("meta[name=csrf-param]").attr("content"),c=e('<form method="post" action="'+r+'"></form>'),u='<input name="_method" value="'+o+'" type="hidden" />';l!==t&&s!==t&&(u+='<input name="'+l+'" value="'+s+'" type="hidden" />'),a&&c.attr("target",a),c.hide().append(u).appendTo("body"),c.submit()},formElements:function(t,n){return t.is("form")?e(t[0].elements).filter(n):t.find(n)},disableFormElements:function(t){n.formElements(t,n.disableSelector).each(function(){n.disableFormElement(e(this))})},disableFormElement:function(e){var n,i;n=e.is("button")?"html":"val",i=e.data("disable-with"),e.data("ujs:enable-with",e[n]()),i!==t&&e[n](i),e.prop("disabled",!0)},enableFormElements:function(t){n.formElements(t,n.enableSelector).each(function(){n.enableFormElement(e(this))})},enableFormElement:function(e){var t=e.is("button")?"html":"val";e.data("ujs:enable-with")&&e[t](e.data("ujs:enable-with")),e.prop("disabled",!1)},allowAction:function(e){var t,i=e.data("confirm"),r=!1;return i?(n.fire(e,"confirm")&&(r=n.confirm(i),t=n.fire(e,"confirm:complete",[r])),r&&t):!0},blankInputs:function(t,n,i){var r,o,a=e(),s=n||"input,textarea",l=t.find(s);return l.each(function(){if(r=e(this),o=r.is("input[type=checkbox],input[type=radio]")?r.is(":checked"):r.val(),!o==!i){if(r.is("input[type=radio]")&&l.filter('input[type=radio]:checked[name="'+r.attr("name")+'"]').length)return!0;a=a.add(r)}}),a.length?a:!1},nonBlankInputs:function(e,t){return n.blankInputs(e,t,!0)},stopEverything:function(t){return e(t.target).trigger("ujs:everythingStopped"),t.stopImmediatePropagation(),!1},disableElement:function(e){var i=e.data("disable-with");e.data("ujs:enable-with",e.html()),i!==t&&e.html(i),e.bind("click.railsDisable",function(e){return n.stopEverything(e)})},enableElement:function(e){e.data("ujs:enable-with")!==t&&(e.html(e.data("ujs:enable-with")),e.removeData("ujs:enable-with")),e.unbind("click.railsDisable")}},n.fire(i,"rails:attachBindings")&&(e.ajaxPrefilter(function(e,t,i){e.crossDomain||n.CSRFProtection(i)}),i.delegate(n.linkDisableSelector,"ajax:complete",function(){n.enableElement(e(this))}),i.delegate(n.buttonDisableSelector,"ajax:complete",function(){n.enableFormElement(e(this))}),i.delegate(n.linkClickSelector,"click.rails",function(i){var r=e(this),o=r.data("method"),a=r.data("params"),s=i.metaKey||i.ctrlKey;if(!n.allowAction(r))return n.stopEverything(i);if(!s&&r.is(n.linkDisableSelector)&&n.disableElement(r),r.data("remote")!==t){if(s&&(!o||"GET"===o)&&!a)return!0;var l=n.handleRemote(r);return l===!1?n.enableElement(r):l.error(function(){n.enableElement(r)}),!1}return r.data("method")?(n.handleMethod(r),!1):void 0}),i.delegate(n.buttonClickSelector,"click.rails",function(t){var i=e(this);if(!n.allowAction(i))return n.stopEverything(t);i.is(n.buttonDisableSelector)&&n.disableFormElement(i);var r=n.handleRemote(i);return r===!1?n.enableFormElement(i):r.error(function(){n.enableFormElement(i)}),!1}),i.delegate(n.inputChangeSelector,"change.rails",function(t){var i=e(this);return n.allowAction(i)?(n.handleRemote(i),!1):n.stopEverything(t)}),i.delegate(n.formSubmitSelector,"submit.rails",function(i){var r,o,a=e(this),s=a.data("remote")!==t;if(!n.allowAction(a))return n.stopEverything(i);if(a.attr("novalidate")==t&&(r=n.blankInputs(a,n.requiredInputSelector),r&&n.fire(a,"ajax:aborted:required",[r])))return n.stopEverything(i);if(s){if(o=n.nonBlankInputs(a,n.fileInputSelector)){setTimeout(function(){n.disableFormElements(a)},13);var l=n.fire(a,"ajax:aborted:file",[o]);return l||setTimeout(function(){n.enableFormElements(a)},13),l}return n.handleRemote(a),!1}setTimeout(function(){n.disableFormElements(a)},13)}),i.delegate(n.formInputClickSelector,"click.rails",function(t){var i=e(this);if(!n.allowAction(i))return n.stopEverything(t);var r=i.attr("name"),o=r?{name:r,value:i.val()}:null;i.closest("form").data("ujs:submit-button",o)}),i.delegate(n.formSubmitSelector,"ajax:send.rails",function(t){this==t.target&&n.disableFormElements(e(this))}),i.delegate(n.formSubmitSelector,"ajax:complete.rails",function(t){this==t.target&&n.enableFormElements(e(this))}),e(function(){n.refreshCSRFTokens()}))}(jQuery),function(){}.call(this);