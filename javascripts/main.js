var Browser=(function(){var H=navigator.userAgent,F=0,E=0,I=0,D=0,A=0,_=0,C=0,B;if(H.indexOf("Chrome")>-1&&/Chrome\/(\d+(\.d+)?)/.test(H))C=RegExp.$1;if(H.indexOf("Safari")>-1&&/Version\/(\d+(\.\d+)?)/.test(H))F=RegExp.$1;if(window.opera&&/Opera(\s|\/)(\d+(\.\d+)?)/.test(H))I=RegExp.$2;if(H.indexOf("Gecko")>-1&&H.indexOf("KHTML")==-1&&/rv\:(\d+(\.\d+)?)/.test(H))A=RegExp.$1;if(/MSIE (\d+(\.\d+)?)/.test(H))D=RegExp.$1;if(/Firefox(\s|\/)(\d+(\.\d+)?)/.test(H))_=RegExp.$2;if(H.indexOf("KHTML")>-1&&/AppleWebKit\/([^\s]*)/.test(H))E=RegExp.$1;try{B=!!external.max_version}catch($){}function G(){var _=false;if(navigator.plugins)for(var B=0;B<navigator.plugins.length;B++)if(navigator.plugins[B].name.toLowerCase().indexOf("shockwave flash")>=0)_=true;if(!_){try{var $=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if($)_=true}catch(A){_=false}}return _}return({isStrict:document.compatMode=="CSS1Compat",isChrome:C,isSafari:F,isWebkit:E,isOpera:I,isGecko:A,isIE:D,isFF:_,isMaxthon:B,isFlash:G(),isCookie:(navigator.cookieEnabled)?true:false})})(),on=function($,B,D){var _=[],B=B.replace(/^on/,"").toLowerCase();_.push($);for(var C=3,A=arguments.length;C<A;C++)_.push(arguments[C]);if($.attachEvent){$[B+D]=function(){D.apply(window.event,_)};$.attachEvent("on"+B,$[B+D])}else{$[B+D]=function($){D.apply($,_)};$.addEventListener(B,$[B+D],false)}};function G($){return document.getElementById($)}function C($){return document.createElement($)}function morePopup(_,A){var _=_||window.event,B=_.target||_.srcElement,C=G("hao_more_event"),$=G("hao_more_popup");switch(A){case"down":if($.style.display=="")$.style.display="none";else $.style.display="";if(_.stopPropagation)_.stopPropagation();else _.cancelBubble=true;break;case"over":break;case"out":break;case"click":setTimeout(function(){if($.style.display=="")$.style.display="none"},200);break}}on(document.body,"mousedown",morePopup,"click");var DynamicForm=(function(){function B($){for(var A=0,_=$.length;A<_;A++)document.f.removeChild($[A]);return[]}var H={},A=[],_=null,F=[];function D(_){var B=C("input"),A=C("input"),$=C("input");B.type=A.type=$.type="hidden";B.name="oq",A.name="rsp",$.name="f";B.value="1";A.value=_-1;if(document.f.action=="http://zhidao.baidu.com/q")$.value="sug";else $.value="3";F.push(B);F.push(A);F.push($);document.f.appendChild(B);document.f.appendChild(A);document.f.appendChild($)}function $(){if(DynamicForm.sugCurIndex!=null)D(DynamicForm.sugCurIndex);if(DynamicForm.sugCurIndex==null&&F.length!=0)F=B(F);var $=G("kww").value;if(A[0])A[0].value=$;document.f.submit();DynamicForm.sugCurIndex=null;F=B(F)}function E(I,J,$){var J=J,F=cache.set("CURRENT_TAB_SCOURCE",J),E=Config.FormConfig;G("kww").value="";G("kww").focus();function D(){var $=G("hao_img_logo");$.href=E[J].url;$.childNodes[0].src=E[J].imgLogo;$.childNodes[0].alt=E[J].imgAlt}function K(){if(H.key)H.key.className="";else G("wegTab").className="";I.className="cur";H.key=I}function C(){var $=document.f;$.action=E[J].action;if(A.length!=0)A=B(A);for(var C in E[J].params){var _=Ci(C,E[J].params[C]);A.push(_);$.appendChild(_)}}function _(){var $=G("hao_search_content");$.innerHTML=E[J].content}if(!$)K();C();D();_()}return{tab:E,submit:$,sugCurIndex:_}})()
