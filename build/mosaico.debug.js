(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Mosaico = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
function log(){}function info(){console.log.apply(console,arguments)}function warn(){console.log.apply(console,arguments)}function error(){console.warn.apply(console,arguments)}function time(o){times[o]=Date.now()}function timeEnd(o){var e=times[o];if(!e)throw new Error("No such label: "+o);var n=Date.now()-e;console.log(o+": "+n+"ms")}function trace(){var o=new Error;o.name="Trace",o.message=util.format.apply(null,arguments),console.error(o.stack)}function dir(o){console.log(util.inspect(o)+"\n")}function assert(o){if(!o){var e=slice.call(arguments,1);assert.ok(!1,util.format.apply(null,e))}}var util=require("util"),assert=require("assert"),slice=Array.prototype.slice,console,times={};console="undefined"!=typeof global&&global.console?global.console:"undefined"!=typeof window&&window.console?window.console:{};for(var functions=[[log,"log"],[info,"info"],[warn,"warn"],[error,"error"],[time,"time"],[timeEnd,"timeEnd"],[trace,"trace"],[dir,"dir"],[assert,"assert"]],i=0;i<functions.length;i++){var tuple=functions[i],f=tuple[0],name=tuple[1];console[name]||(console[name]=f)}module.exports=console;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"assert":21,"util":26}],2:[function(require,module,exports){
!function(t,e){var i=0,o=window.navigator.userAgent,s=o.indexOf("MSIE ")>0,f=s?"-ie":"",n=!s&&(/mozilla/.test(o.toLowerCase())&&!/webkit/.test(o.toLowerCase())),c=[],a=["ffffff","000000","eeece1","1f497d","4f81bd","c0504d","9bbb59","8064a2","4bacc6","f79646"],r=["f2f2f2","7f7f7f","ddd9c3","c6d9f0","dbe5f1","f2dcdb","ebf1dd","e5e0ec","dbeef3","fdeada","d8d8d8","595959","c4bd97","8db3e2","b8cce4","e5b9b7","d7e3bc","ccc1d9","b7dde8","fbd5b5","bfbfbf","3f3f3f","938953","548dd4","95b3d7","d99694","c3d69b","b2a2c7","92cddc","fac08f","a5a5a5","262626","494429","17365d","366092","953734","76923c","5f497a","31859b","e36c09","7f7f7f","0c0c0c","1d1b10","0f243e","244061","632423","4f6128","3f3151","205867","974806"],l=["c00000","ff0000","ffc000","ffff00","92d050","00b050","00b0f0","0070c0","002060","7030a0"],h=[["003366","336699","3366cc","003399","000099","0000cc","000066"],["006666","006699","0099cc","0066cc","0033cc","0000ff","3333ff","333399"],["669999","009999","33cccc","00ccff","0099ff","0066ff","3366ff","3333cc","666699"],["339966","00cc99","00ffcc","00ffff","33ccff","3399ff","6699ff","6666ff","6600ff","6600cc"],["339933","00cc66","00ff99","66ffcc","66ffff","66ccff","99ccff","9999ff","9966ff","9933ff","9900ff"],["006600","00cc00","00ff00","66ff99","99ffcc","ccffff","ccccff","cc99ff","cc66ff","cc33ff","cc00ff","9900cc"],["003300","009933","33cc33","66ff66","99ff99","ccffcc","ffffff","ffccff","ff99ff","ff66ff","ff00ff","cc00cc","660066"],["333300","009900","66ff33","99ff66","ccff99","ffffcc","ffcccc","ff99cc","ff66cc","ff33cc","cc0099","993399"],["336600","669900","99ff33","ccff66","ffff99","ffcc99","ff9999","ff6699","ff3399","cc3399","990099"],["666633","99cc00","ccff33","ffff66","ffcc66","ff9966","ff6666","ff0066","d60094","993366"],["a58800","cccc00","ffff00","ffcc00","ff9933","ff6600","ff0033","cc0066","660033"],["996633","cc9900","ff9900","cc6600","ff3300","ff0000","cc0000","990033"],["663300","996600","cc3300","993300","990000","800000","993333"]],d="#0000ffff",p=function(t){var e=t.toString(16);return 1==e.length&&(e="0"+e),e},v=function(t){return p(Number(t))},u=function(t){var e=p(t);return e+e+e},_=function(t){if(t.length>10){var e=1+t.indexOf("("),i=t.indexOf(")"),o=t.substring(e,i).split(",");return["#",v(o[0]),v(o[1]),v(o[2])].join("")}return t};t.widget("evol.colorpicker",{version:"3.2.1",options:{color:null,showOn:"both",hideButton:!1,displayIndicator:!0,transparentColor:!1,history:!0,defaultPalette:"theme",strings:"Theme Colors,Standard Colors,Web Colors,Theme Colors,Back to Palette,History,No history yet."},_active:!1,_create:function(){var e=this;switch(this._paletteIdx="theme"==this.options.defaultPalette?1:2,this._id="evo-cp"+i++,this._enabled=!0,this.options.showOn=this.options.hideButton?"focus":this.options.showOn,this.element.get(0).tagName){case"INPUT":var o=this.options.color,c=this.element,a=("focus"===this.options.showOn?"":"evo-pointer ")+"evo-colorind"+(n?"-ff":f)+(this.options.hideButton?" evo-hidden-button":""),r="";if(this._isPopup=!0,this._palette=null,null!==o)c.val(o);else{var l=c.val();""!==l&&(o=this.options.color=l)}o===d?a+=" evo-transparent":r=null!==o?"background-color:"+o:"",c.addClass("colorPicker "+this._id).wrap('<div style="width:'+(this.options.hideButton?this.element.width():this.element.width()+32)+"px;"+(s?"margin-bottom:-21px;":"")+(n?"padding:1px 0;":"")+'"></div>').after('<div class="'+a+'" style="'+r+'"></div>').on("keyup onpaste",function(i){var o=t(this).val();o!=e.options.color&&e._setValue(o,!0)});var h=this.options.showOn;("both"===h||"focus"===h)&&c.on("focus",function(){e.showPalette()}),("both"===h||"button"===h)&&c.next().on("click",function(t){return t.stopPropagation(),e.showPalette(),!1});break;default:this._isPopup=!1,this._palette=this.element.html(this._paletteHTML()).attr("aria-haspopup","true"),this._bindColors()}if(this.options.history&&(o&&this._add2History(o),this.options.initialHistory)){var p=this.options.initialHistory;for(var v in p)this._add2History(p[v])}},_paletteHTML:function(){var t=this._paletteIdx=Math.abs(this._paletteIdx),e=this.options,i=e.strings.split(","),o='<div class="evo-pop'+f+' ui-widget ui-widget-content ui-corner-all"'+(this._isPopup?' style="position:absolute"':"")+"><span>"+this["_paletteHTML"+t]()+'</span><div class="evo-more"><a href="javascript:void(0)">'+i[1+t]+"</a>";return e.history&&(o+='<a href="javascript:void(0)" class="evo-hist">'+i[5]+"</a>"),o+="</div>",e.displayIndicator&&(o+=this._colorIndHTML(this.options.color)+this._colorIndHTML("")),o+="</div>"},_colorIndHTML:function(t){var e=s?"evo-colorbox-ie ":"",i="";return t?t===d?e+="evo-transparent":i="background-color:"+t:i="display:none",'<div class="evo-color" style="float:left"><div style="'+i+'" class="'+e+'"></div><span>'+(t?t:"")+"</span></div>"},_paletteHTML1:function(){for(var t=this.options,e=t.strings.split(","),i='<td style="background-color:#',o=s?'"><div style="width:2px;"></div></td>':'"><span/></td>',n='<tr><th colspan="10" class="ui-widget-content">',c='<table class="evo-palette'+f+'">'+n+e[0]+"</th></tr><tr>",h=0;10>h;h++)c+=i+a[h]+o;for(c+="</tr>",s||(c+='<tr><th colspan="10"></th></tr>'),c+='<tr class="top">',h=0;10>h;h++)c+=i+r[h]+o;for(var d=1;4>d;d++)for(c+='</tr><tr class="in">',h=0;10>h;h++)c+=i+r[10*d+h]+o;for(c+='</tr><tr class="bottom">',h=40;50>h;h++)c+=i+r[h]+o;for(c+="</tr>"+n,t.transparentColor&&(c+='<div class="evo-transparent evo-tr-box"></div>'),c+=e[1]+"</th></tr><tr>",h=0;10>h;h++)c+=i+l[h]+o;return c+="</tr></table>"},_paletteHTML2:function(){for(var t,e,i='<td style="background-color:#',o=s?'"><div style="width:5px;"></div></td>':'"><span/></td>',n='<table class="evo-palette2'+f+'"><tr>',c="</tr></table>",a='<div class="evo-palcenter">',r=0,l=h.length;l>r;r++){a+=n;var d=h[r];for(t=0,e=d.length;e>t;t++)a+=i+d[t]+o;a+=c}a+='<div class="evo-sep"/>';var p="";for(a+=n,t=255;t>10;t-=10)a+=i+u(t)+o,t-=10,p+=i+u(t)+o;return a+=c+n+p+c+"</div>"},_switchPalette:function(e){if(this._enabled){var i,o,s,f=this.options.strings.split(",");if(t(e).hasClass("evo-hist")){var n=['<table class="evo-palette"><tr><th class="ui-widget-content">',f[5],"</th></tr></tr></table>",'<div class="evo-cHist">'];if(0===c.length)n.push("<p>&nbsp;",f[6],"</p>");else for(var a=c.length-1;a>-1;a--)9===c[a].length?n.push('<div class="evo-transparent"></div>'):n.push('<div style="background-color:',c[a],'"></div>');n.push("</div>"),i=-this._paletteIdx,o=n.join(""),s=f[4]}else this._paletteIdx<0?(i=-this._paletteIdx,this._palette.find(".evo-hist").show()):i=2==this._paletteIdx?1:2,o=this["_paletteHTML"+i](),s=f[i+1],this._paletteIdx=i;this._paletteIdx=i;var r=this._palette.find(".evo-more").prev().html(o).end().children().eq(0).html(s);0>i&&r.next().hide()}},_downOrUpPositioning:function(){for(var t=this.element,e=0;null!==t&&100>e;){if("visible"!=t.css("overflow")){var i=this._palette.offset().top+this._palette.height(),o=t.offset().top+t.height(),s=this._palette.offset().top-this._palette.height()-this.element.outerHeight(),f=t.offset().top,n=i>o&&s>f;n?this._palette.css({bottom:this.element.outerHeight()+"px"}):this._palette.css({bottom:"auto"});break}if("HTML"==t[0].tagName)break;t=t.offsetParent(),e++}},showPalette:function(){if(this._enabled&&(this._active=!0,t(".colorPicker").not("."+this._id).colorpicker("hidePalette"),null===this._palette)){this._palette=this.element.next().after(this._paletteHTML()).next().on("click",function(t){return t.stopPropagation(),!1}),this._bindColors();var e=this;this._isPopup&&(this._downOrUpPositioning(),t(document.body).on("click."+e._id,function(t){t.target!=e.element.get(0)&&e.hidePalette()}).on("keyup."+e._id,function(t){27===t.keyCode&&e.hidePalette()}))}return this},hidePalette:function(){if(this._isPopup&&this._palette){t(document.body).off("click."+this._id);var e=this;this._palette.off("mouseover click","td,.evo-transparent").fadeOut(function(){e._palette.remove(),e._palette=e._cTxt=null}).find(".evo-more a").off("click")}return this},_bindColors:function(){var e=this,i=this.options,o=this._palette.find("div.evo-color"),s=i.history?"td,.evo-cHist>div":"td";i.transparentColor&&(s+=",.evo-transparent"),this._cTxt1=o.eq(0).children().eq(0),this._cTxt2=o.eq(1).children().eq(0),this._palette.on("click",s,function(i){if(e._enabled){var o=t(this);e._setValue(o.hasClass("evo-transparent")?d:_(o.attr("style").substring(17))),e._active=!1}}).on("mouseover",s,function(i){if(e._enabled){var o=t(this),s=o.hasClass("evo-transparent")?d:_(o.attr("style").substring(17));e.options.displayIndicator&&e._setColorInd(s,2),e._active&&e.element.trigger("mouseover.color",s)}}).find(".evo-more a").on("click",function(){e._switchPalette(this)})},val:function(t){return"undefined"==typeof t?this.options.color:(this._setValue(t),this)},_setValue:function(t,e){t=t.replace(/ /g,""),this.options.color=t,this._isPopup?(e||this.hidePalette(),this._setBoxColor(this.element.val(t).next(),t)):this._setColorInd(t,1),this.options.history&&this._paletteIdx>0&&this._add2History(t),this.element.trigger("change.color",t)},_setColorInd:function(t,e){var i=this["_cTxt"+e];this._setBoxColor(i,t),i.next().html(t)},_setBoxColor:function(t,e){e===d?t.addClass("evo-transparent").removeAttr("style"):t.removeClass("evo-transparent").attr("style","background-color:"+e)},_setOption:function(t,e){"color"==t?this._setValue(e,!0):this.options[t]=e},_add2History:function(t){for(var e=c.length,i=0;e>i;i++)if(t==c[i])return;e>27&&c.shift(),c.push(t)},clear:function(){this.hidePalette().val("")},enable:function(){var t=this.element;return this._isPopup?t.removeAttr("disabled"):t.css({opacity:"1","pointer-events":"auto"}),"focus"!==this.options.showOn&&this.element.next().addClass("evo-pointer"),t.removeAttr("aria-disabled"),this._enabled=!0,this},disable:function(){var t=this.element;return this._isPopup?t.attr("disabled","disabled"):(this.hidePalette(),t.css({opacity:"0.3","pointer-events":"none"})),"focus"!==this.options.showOn&&this.element.next().removeClass("evo-pointer"),t.attr("aria-disabled","true"),this._enabled=!1,this},isDisabled:function(){return!this._enabled},destroy:function(){t(document.body).off("click."+this._id),this._palette&&(this._palette.off("mouseover click","td,.evo-cHist>div,.evo-transparent").find(".evo-more a").off("click"),this._isPopup&&this._palette.remove(),this._palette=this._cTxt=null),this._isPopup&&this.element.next().off("click").remove().end().off("focus").unwrap(),this.element.removeClass("colorPicker "+this.id).empty(),t.Widget.prototype.destroy.call(this)}})}(jQuery);

},{}],3:[function(require,module,exports){
!function(e){"use strict";var r="Compound",t="Identifier",n="MemberExpression",o="Literal",a="ThisExpression",i="CallExpression",u="UnaryExpression",s="BinaryExpression",p="LogicalExpression",f="ConditionalExpression",c="ArrayExpression",l=46,d=44,h=39,v=34,x=40,y=41,m=91,b=93,g=63,E=59,w=58,C=function(e,r){var t=new Error(e+" at character "+r);throw t.index=r,t.description=e,t},U=!0,k={"-":U,"!":U,"~":U,"+":U},O={"||":1,"&&":2,"|":3,"^":4,"&":5,"==":6,"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":10,"/":10,"%":10},j=function(e){var r,t=0;for(var n in e)(r=n.length)>t&&e.hasOwnProperty(n)&&(t=r);return t},P=j(k),S=j(O),L={true:!0,false:!1,null:null},A="this",B=function(e){return O[e]||0},M=function(e,r,t){var n="||"===e||"&&"===e?p:s;return{type:n,operator:e,left:r,right:t}},q=function(e){return e>=48&&e<=57},J=function(e){return 36===e||95===e||e>=65&&e<=90||e>=97&&e<=122||e>=128&&!O[String.fromCharCode(e)]},F=function(e){return 36===e||95===e||e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||e>=128&&!O[String.fromCharCode(e)]},I=function(e){for(var s,p,U=0,j=e.charAt,I=e.charCodeAt,T=function(r){return j.call(e,r)},V=function(r){return I.call(e,r)},z=e.length,D=function(){for(var e=V(U);32===e||9===e;)e=V(++U)},G=function(){var e,r,t=K();return D(),V(U)!==g?t:(U++,e=G(),e||C("Expected expression",U),D(),V(U)===w?(U++,r=G(),r||C("Expected expression",U),{type:f,test:t,consequent:e,alternate:r}):void C("Expected :",U))},H=function(){D();for(var r=e.substr(U,S),t=r.length;t>0;){if(O.hasOwnProperty(r))return U+=t,r;r=r.substr(0,--t)}return!1},K=function(){var e,r,t,n,o,a,i,u;if(a=N(),r=H(),!r)return a;for(o={value:r,prec:B(r)},i=N(),i||C("Expected expression after "+r,U),n=[a,o,i];(r=H())&&(t=B(r),0!==t);){for(o={value:r,prec:t};n.length>2&&t<=n[n.length-2].prec;)i=n.pop(),r=n.pop().value,a=n.pop(),e=M(r,a,i),n.push(e);e=N(),e||C("Expected expression after "+r,U),n.push(o,e)}for(u=n.length-1,e=n[u];u>1;)e=M(n[u-1].value,n[u-2],e),u-=2;return e},N=function(){var r,t,n;if(D(),r=V(U),q(r)||r===l)return Q();if(r===h||r===v)return R();if(J(r)||r===x)return Y();if(r===m)return $();for(t=e.substr(U,P),n=t.length;n>0;){if(k.hasOwnProperty(t))return U+=n,{type:u,operator:t,argument:N(),prefix:!0};t=t.substr(0,--n)}return!1},Q=function(){for(var e,r,t="";q(V(U));)t+=T(U++);if(V(U)===l)for(t+=T(U++);q(V(U));)t+=T(U++);if(e=T(U),"e"===e||"E"===e){for(t+=T(U++),e=T(U),"+"!==e&&"-"!==e||(t+=T(U++));q(V(U));)t+=T(U++);q(V(U-1))||C("Expected exponent ("+t+T(U)+")",U)}return r=V(U),J(r)?C("Variable names cannot start with a number ("+t+T(U)+")",U):r===l&&C("Unexpected period",U),{type:o,value:parseFloat(t),raw:t}},R=function(){for(var e,r="",t=T(U++),n=!1;U<z;){if(e=T(U++),e===t){n=!0;break}if("\\"===e)switch(e=T(U++)){case"n":r+="\n";break;case"r":r+="\r";break;case"t":r+="\t";break;case"b":r+="\b";break;case"f":r+="\f";break;case"v":r+="\v";break;default:r+="\\"+e}else r+=e}return n||C('Unclosed quote after "'+r+'"',U),{type:o,value:r,raw:t+r+t}},W=function(){var r,n=V(U),i=U;for(J(n)?U++:C("Unexpected "+T(U),U);U<z&&(n=V(U),F(n));)U++;return r=e.slice(i,U),L.hasOwnProperty(r)?{type:o,value:L[r],raw:r}:r===A?{type:a}:{type:t,name:r}},X=function(e){for(var t,n,o=[],a=!1;U<z;){if(D(),t=V(U),t===e){a=!0,U++;break}t===d?U++:(n=G(),n&&n.type!==r||C("Expected comma",U),o.push(n))}return a||C("Expected "+String.fromCharCode(e),U),o},Y=function(){var e,r;for(e=V(U),r=e===x?Z():W(),D(),e=V(U);e===l||e===m||e===x;)U++,e===l?(D(),r={type:n,computed:!1,object:r,property:W()}):e===m?(r={type:n,computed:!0,object:r,property:G()},D(),e=V(U),e!==b&&C("Unclosed [",U),U++):e===x&&(r={type:i,arguments:X(y),callee:r}),D(),e=V(U);return r},Z=function(){U++;var e=G();return D(),V(U)===y?(U++,e):void C("Unclosed (",U)},$=function(){return U++,{type:c,elements:X(b)}},_=[];U<z;)s=V(U),s===E||s===d?U++:(p=G())?_.push(p):U<z&&C('Unexpected "'+T(U)+'"',U);return 1===_.length?_[0]:{type:r,body:_}};if(I.version="<%= version %>",I.toString=function(){return"JavaScript Expression Parser (JSEP) v"+I.version},I.addUnaryOp=function(e){return P=Math.max(e.length,P),k[e]=U,this},I.addBinaryOp=function(e,r){return S=Math.max(e.length,S),O[e]=r,this},I.addLiteral=function(e,r){return L[e]=r,this},I.removeUnaryOp=function(e){return delete k[e],e.length===P&&(P=j(k)),this},I.removeBinaryOp=function(e){return delete O[e],e.length===S&&(S=j(O)),this},I.removeLiteral=function(e){return delete L[e],this},"undefined"==typeof exports){var T=e.jsep;e.jsep=I,I.noConflict=function(){return e.jsep===I&&(e.jsep=T),I}}else"undefined"!=typeof module&&module.exports?exports=module.exports=I:exports.parse=I}(this);

},{}],4:[function(require,module,exports){
"use strict";var utils=require("./utils");module.exports=function(e){function t(t,s,o){function i(r){for(var s=r[0],i=r[1],l=new utils.Selector(s),u=l.parsed(),p=n(u),f=0;f<u.length;++f){var c=u[f];if(c.pseudos)for(var m=0;m<c.pseudos.length;++m){var y=c.pseudos[m];if(e.ignoredPseudos.indexOf(y.name)>=0)return}}if(p){var h=u[u.length-1],g=h.pseudos;h.pseudos=a(h.pseudos),s=u.toString(),h.pseudos=g}var P;try{P=t(s)}catch(e){return}P.each(function(){function r(t,r){for(var s=0,a=t.length;s<a;s++)if("property"==t[s].type){var i=t[s].name,l=t[s].value,u=null!==t[s].value.match(/!important$/);u&&!o.preserveImportant&&(l=l.replace(/\s*!important$/,""));var p=[t[s].position.start.line,t[s].position.start.col],f=new utils.Property(i,l,r,u?2:0,p),c=n.styleProps[i];e.excludedProperties.indexOf(i)<0&&(c&&c.compare(f)===f||!c)&&(c&&c.selector!==r?delete n.styleProps[i]:c&&(f.nextProp=c),n.styleProps[i]=f)}}var n=this;if(!(n.name&&e.nonVisualElements.indexOf(n.name.toUpperCase())>=0)){if(p){var s="pseudo"+p,a=n[s];a||(a=n[s]=t("<span />").get(0),a.pseudoElementType=p,a.pseudoElementParent=n,n[s]=a),n=a}if(!n.styleProps){if(n.styleProps={},t(n).attr(v)){var u="* { "+t(n).attr(v)+" } ";r(utils.parseCSS(u)[0][1],new utils.Selector("<style>",!0))}d.push(n)}r(i,l)}})}function l(e){var r=(Object.keys(e.styleProps).length,[]);Object.keys(e.styleProps).forEach(function(t){for(var n=e.styleProps[t];"undefined"!=typeof n;)r.push(n),n=n.nextProp}),r.sort(function(e,t){return e.compareFunc(t)});var n=r.filter(function(e){return"content"!==e.prop}).map(function(e){return e.prop+": "+e.value.replace(/["]/g,"'")+";"}).join(" ");n&&t(e).attr(v,n)}function u(e){if(e.pseudoElementType&&e.styleProps.content){var n=r(e.styleProps.content.value);n.img?(e.name="img",t(e).attr("src",n.img)):t(e).text(n);var s=e.pseudoElementParent;"before"===e.pseudoElementType?t(s).prepend(e):t(s).append(e)}}function p(r,n){if(r.name){var s=r.name.toUpperCase();if(e[n+"Elements"].indexOf(s)>-1)for(var a in r.styleProps)if(r.styleProps[a].prop===n){if(r.styleProps[a].value.match(/px/)){var o=r.styleProps[a].value.replace("px","");return void t(r).attr(n,o)}if(e.tableElements.indexOf(s)>-1&&r.styleProps[a].value.match(/\%/))return void t(r).attr(n,r.styleProps[a].value)}}}function f(r){if(r.name){var n=r.name.toUpperCase(),s=Object.keys(e.styleToAttribute);if(e.tableElements.indexOf(n)>-1)for(var a in r.styleProps)s.indexOf(r.styleProps[a].prop)>-1&&t(r).attr(e.styleToAttribute[r.styleProps[a].prop],r.styleProps[a].value)}}o=o||{};var c=utils.parseCSS(s),d=[],v="style";if(o.styleAttributeName&&(v=o.styleAttributeName),c.forEach(i),d.forEach(l),o.inlinePseudoElements&&d.forEach(u),o.applyWidthAttributes&&d.forEach(function(e){p(e,"width")}),o.applyHeightAttributes&&d.forEach(function(e){p(e,"height")}),o.applyAttributesTableElements&&d.forEach(f),o.insertPreservedExtraCss&&o.extraCss){var m=utils.getPreservedText(o.extraCss,{mediaQueries:o.preserveMediaQueries,fontFaces:o.preserveFontFaces});if(m){var y=null;o.insertPreservedExtraCss!==!0?y=t(o.insertPreservedExtraCss):(y=t("head"),y.length||(y=t("body")),y.length||(y=t.root())),y.first().append("<style>"+m+"</style>")}}}function r(e){if("none"===e||"normal"===e)return"";var t=e.match(/^\s*url\s*\(\s*(.*?)\s*\)\s*$/i);if(t){var r=t[1].replace(/^['"]|['"]$/g,"");return{img:r}}return e=e.slice(1,e.length-1),e=e.replace(/\\/g,"")}function n(e){if(0!==e.length){var t=e[e.length-1].pseudos;if(t)for(var r=0;r<t.length;r++)if(s(t[r]))return t[r].name}}function s(e){return"before"===e.name||"after"===e.name}function a(e){return e.filter(function(e){return!s(e)})}function o(e,r){r=utils.getDefaultOptions(r);var n=l(e,r);return n+="\n"+r.extraCss,t(e,n,r),e}function i(e,t){var r,n,s,a=[],o=e("style");return o.each(function(){if(s=this,r=s.childNodes,1===r.length){if(n=r[0].data,t.applyStyleTags&&void 0===e(s).attr("data-embed")&&a.push(n),t.removeStyleTags&&void 0===e(s).attr("data-embed")){var o=utils.getPreservedText(s.childNodes[0].nodeValue,{mediaQueries:t.preserveMediaQueries,fontFaces:t.preserveFontFaces});o?s.childNodes[0].nodeValue=o:e(s).remove()}e(s).removeAttr("data-embed")}}),a}function l(e,t){var r=i(e,t),n=r.join("\n");return n}return e.ignoredPseudos=["hover","active","focus","visited","link"],e.widthElements=["TABLE","TD","IMG"],e.heightElements=["TABLE","TD","IMG"],e.tableElements=["TABLE","TD","TH","TR","TD","CAPTION","COLGROUP","COL","THEAD","TBODY","TFOOT"],e.nonVisualElements=["HEAD","TITLE","BASE","LINK","STYLE","META","SCRIPT","NOSCRIPT"],e.styleToAttribute={"background-color":"bgcolor","background-image":"background","text-align":"align","vertical-align":"valign"},e.excludedProperties=[],e.juiceDocument=o,e.inlineDocument=t,e};

},{"./utils":7}],5:[function(require,module,exports){
"use strict";function Property(t,r,i,p,o){this.prop=t,this.value=r,this.selector=i,this.priority=p||0,this.additionalPriority=o||[]}module.exports=exports=Property;var utils=require("./utils");Property.prototype.compareFunc=function(t){var r=[];r.push.apply(r,this.selector.specificity()),r.push.apply(r,this.additionalPriority),r[0]+=this.priority;var i=[];return i.push.apply(i,t.selector.specificity()),i.push.apply(i,t.additionalPriority),i[0]+=t.priority,utils.compareFunc(r,i)},Property.prototype.compare=function(t){var r=this.compareFunc(t);return 1===r?this:t},Property.prototype.toString=function(){return this.prop+": "+this.value.replace(/['"]+/g,"")+";"};

},{"./utils":7}],6:[function(require,module,exports){
"use strict";function Selector(t,e){this.text=t,this.spec=void 0,this.styleAttribute=e||!1}function parse(t){try{return parser(t)[0]}catch(t){return[]}}var parser=require("./..\\..\\slick\\parser");module.exports=exports=Selector,Selector.prototype.parsed=function(){return this.tokens||(this.tokens=parse(this.text)),this.tokens},Selector.prototype.specificity=function(){function t(r,s){for(var i=s||parse(r),n=[e?1:0,0,0,0],o=[],a=0;a<i.length;a++){var c=i[a],h=c.pseudos;if(c.id&&n[1]++,c.attributes&&(n[2]+=c.attributes.length),c.classList&&(n[2]+=c.classList.length),c.tag&&"*"!==c.tag&&n[3]++,h){n[3]+=h.length;for(var p=0;p<h.length;p++)"not"===h[p].name&&(o.push(h[p].value),n[3]--)}}for(var u=o.length;u--;)for(var l=t(o[u]),f=4;f--;)n[f]+=l[f];return n}var e=this.styleAttribute;return this.spec||(this.spec=t(this.text,this.parsed())),this.spec};

},{"./..\\..\\slick\\parser":17}],7:[function(require,module,exports){
"use strict";var mensch=require("./..\\..\\mensch\\index.js"),own={}.hasOwnProperty,os=require("os"),Selector=require("./selector"),Property=require("./property");exports.Selector=Selector,exports.Property=Property,exports.extract=function(e){for(var t=0,r=[],s="",n=0,o=e.length;n<o;n++){var p=e.charAt(n);t?("]"!==p&&")"!==p||t--,s+=p):","===p?(r.push(s),s=""):("["!==p&&"("!==p||t++,(s.length||","!==p&&"\n"!==p&&" "!==p)&&(s+=p))}return s.length&&r.push(s),r},exports.parseCSS=function(e){for(var t=mensch.parse(e,{position:!0,comments:!0}),r="undefined"!=typeof t.stylesheet&&t.stylesheet.rules?t.stylesheet.rules:[],s=[],n=0,o=r.length;n<o;n++)if("rule"==r[n].type)for(var p=r[n],l=p.selectors,i=0,u=l.length;i<u;i++)s.push([l[i],p.declarations]);return s},exports.getPreservedText=function(e,t){for(var r=mensch.parse(e,{position:!0,comments:!0}),s="undefined"!=typeof r.stylesheet&&r.stylesheet.rules?r.stylesheet.rules:[],n=[],o=null,p=s.length-1;p>=0;p--)(t.fontFaces&&"font-face"===s[p].type||t.mediaQueries&&"media"===s[p].type)&&n.push(mensch.stringify({stylesheet:{rules:[s[p]]}},{comments:!1,indentation:"  "})),o=s[p].position.start;return 0!==n.length&&os.EOL+n.join(os.EOL)+os.EOL},exports.normalizeLineEndings=function(e){return e.replace(/\r\n/g,"\n").replace(/\n/g,"\r\n")},exports.compareFunc=function(e,t){for(var r=Math.min(e.length,t.length),s=0;s<r;s++)if(e[s]!==t[s])return e[s]>t[s]?1:-1;return e.length-t.length},exports.compare=function(e,t){return 1==exports.compareFunc(e,t)?e:t},exports.extend=function(e,t){for(var r in t)own.call(t,r)&&(e[r]=t[r]);return e},exports.getDefaultOptions=function(e){var t=exports.extend({extraCss:"",insertPreservedExtraCss:!0,applyStyleTags:!0,removeStyleTags:!0,preserveMediaQueries:!0,preserveFontFaces:!0,applyWidthAttributes:!0,applyHeightAttributes:!0,applyAttributesTableElements:!0,url:""},e);return t.webResources=t.webResources||{},t};

},{"./..\\..\\mensch\\index.js":12,"./property":5,"./selector":6,"os":22}],8:[function(require,module,exports){
(function (global){
!function(e){if("function"==typeof define&&define.amd)define(["knockout","jquery","jquery-ui/sortable","jquery-ui/draggable"],e);else if("function"==typeof require&&"object"==typeof exports&&"object"==typeof module){var t=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),n=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);(typeof window !== "undefined" ? window['jQuery']['ui']['sortable'] : typeof global !== "undefined" ? global['jQuery']['ui']['sortable'] : null),(typeof window !== "undefined" ? window['jQuery']['ui']['draggable'] : typeof global !== "undefined" ? global['jQuery']['ui']['draggable'] : null),e(t,n)}else e(window.ko,window.jQuery)}(function(e,t){var n="ko_sortItem",o="ko_sourceIndex",a="ko_sortList",i="ko_parentList",r="ko_dragItem",s=e.utils.unwrapObservable,l=e.utils.domData.get,d=e.utils.domData.set,c=t.ui&&t.ui.version,u=c&&c.indexOf("1.6.")&&c.indexOf("1.7.")&&(c.indexOf("1.8.")||"1.8.24"===c),p=function(t,o){e.utils.arrayForEach(t,function(e){1===e.nodeType&&(d(e,n,o),d(e,i,l(e.parentNode,a)))})},f=function(t,n){var o,a={},i=s(t())||{};return i.data?(a[n]=i.data,a.name=i.template):a[n]=t(),e.utils.arrayForEach(["afterAdd","afterRender","as","beforeRemove","includeDestroyed","templateEngine","templateOptions","nodes"],function(t){i.hasOwnProperty(t)?a[t]=i[t]:e.bindingHandlers.sortable.hasOwnProperty(t)&&(a[t]=e.bindingHandlers.sortable[t])}),"foreach"===n&&(a.afterRender?(o=a.afterRender,a.afterRender=function(e,t){p.call(t,e,t),o.call(t,e,t)}):a.afterRender=p),a},b=function(e,t){var n=s(t);if(n)for(var o=0;e>o;o++)n[o]&&s(n[o]._destroy)&&e++;return e},g=function(n,o){var a,i;o?(i=document.getElementById(o),i&&(a=new e.templateSources.domElement(i),a.text(t.trim(a.text())))):t(n).contents().each(function(){this&&1!==this.nodeType&&n.removeChild(this)})};e.bindingHandlers.sortable={init:function(c,p,m,v,h){var y,D,C=t(c),x=s(p())||{},w=f(p,"foreach"),H={};g(c,w.name),t.extend(!0,H,e.bindingHandlers.sortable),x.options&&H.options&&(e.utils.extend(H.options,x.options),delete x.options),e.utils.extend(H,x),H.connectClass&&(e.isObservable(H.allowDrop)||"function"==typeof H.allowDrop)?e.computed({read:function(){var t=s(H.allowDrop),n="function"==typeof t?t.call(this,w.foreach):t;e.utils.toggleDomNodeCssClass(c,H.connectClass,n)},disposeWhenNodeIsRemoved:c},this):e.utils.toggleDomNodeCssClass(c,H.connectClass,H.allowDrop),e.bindingHandlers.template.init(c,function(){return w},m,v,h),y=H.options.start,D=H.options.update,H.options.helper||(H.options.helper=function(e,n){return n.is("tr")&&n.children().each(function(){t(this).width(t(this).width())}),n});var k=setTimeout(function(){var p,f=H.options.receive;C.sortable(e.utils.extend(H.options,{start:function(t,n){var a=n.item[0];d(a,o,e.utils.arrayIndexOf(n.item.parent().children(),a)),n.item.find("input:focus").change(),y&&y.apply(this,arguments)},receive:function(e,t){"function"==typeof f&&f.call(this,e,t),p=l(t.item[0],r),p&&(p.clone&&(p=p.clone()),H.dragged&&(p=H.dragged.call(this,p,e,t)||p))},update:function(r,c){var f,g,m,v,h,y=c.item[0],C=c.item.parent()[0],x=l(y,n)||p;if(x||t(y).remove(),p=null,x&&this===C||!u&&t.contains(this,C)){if(f=l(y,i),m=l(y,o),g=l(y.parentNode,a),v=e.utils.arrayIndexOf(c.item.parent().children(),y),w.includeDestroyed||(m=b(m,f),v=b(v,g)),(H.beforeMove||H.afterMove)&&(h={item:x,sourceParent:f,sourceParentNode:f&&c.sender||y.parentNode,sourceIndex:m,targetParent:g,targetIndex:v,cancelDrop:!1},H.beforeMove&&H.beforeMove.call(this,h,r,c)),f?t(f===g?this:c.sender||this).sortable("cancel"):t(y).remove(),h&&h.cancelDrop)return;if(H.hasOwnProperty("strategyMove")&&H.strategyMove!==!1){if(v>=0)if(f)if(f!==g)f.splice(m,1),g.splice(v,0,x),d(y,n,null),c.item.remove();else{var k=s(f);f.valueWillMutate&&f.valueWillMutate(),k.splice(m,1),k.splice(v,0,x),f.valueHasMutated&&f.valueHasMutated()}else g.splice(v,0,x),d(y,n,null),c.item.remove()}else v>=0&&(f&&(f.splice(m,1),e.processAllDeferredBindingUpdates&&e.processAllDeferredBindingUpdates(),e.options&&e.options.deferUpdates&&e.tasks.runEarly()),g.splice(v,0,x)),d(y,n,null);e.processAllDeferredBindingUpdates&&e.processAllDeferredBindingUpdates(),H.afterMove&&H.afterMove.call(this,h,r,c)}D&&D.apply(this,arguments)},connectWith:!!H.connectClass&&"."+H.connectClass})),void 0!==H.isEnabled&&e.computed({read:function(){C.sortable(s(H.isEnabled)?"enable":"disable")},disposeWhenNodeIsRemoved:c})},0);return e.utils.domNodeDisposal.addDisposeCallback(c,function(){(C.data("ui-sortable")||C.data("sortable"))&&C.sortable("destroy"),e.utils.toggleDomNodeCssClass(c,H.connectClass,!1),clearTimeout(k)}),{controlsDescendantBindings:!0}},update:function(t,n,o,i,r){var s=f(n,"foreach");d(t,a,s.foreach),e.bindingHandlers.template.update(t,function(){return s},o,i,r)},connectClass:"ko_container",allowDrop:!0,afterMove:null,beforeMove:null,options:{}},e.bindingHandlers.draggable={init:function(n,o,a,i,l){var c=s(o())||{},u=c.options||{},p=e.utils.extend({},e.bindingHandlers.draggable.options),b=f(o,"data"),g=c.connectClass||e.bindingHandlers.draggable.connectClass,m=void 0!==c.isEnabled?c.isEnabled:e.bindingHandlers.draggable.isEnabled;return c="data"in c?c.data:c,d(n,r,c),e.utils.extend(p,u),p.connectToSortable=!!g&&"."+g,t(n).draggable(p),void 0!==m&&e.computed({read:function(){t(n).draggable(s(m)?"enable":"disable")},disposeWhenNodeIsRemoved:n}),e.utils.domNodeDisposal.addDisposeCallback(n,function(){t(n).draggable("destroy")}),e.bindingHandlers.template.init(n,function(){return b},a,i,l)},update:function(t,n,o,a,i){var r=f(n,"data");return e.bindingHandlers.template.update(t,function(){return r},o,a,i)},connectClass:e.bindingHandlers.sortable.connectClass,options:{helper:"clone"}}});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],9:[function(require,module,exports){
(function (global){
!function(e){"function"==typeof require&&"object"==typeof exports&&"object"==typeof module?module.exports=e((typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),require("./..\\knockoutjs-reactor\\src\\knockout.reactor.js")):"function"==typeof define&&define.amd?define(["knockout","knockoutjs-reactor","exports"],e):e(ko,ko.watch)}(function(e,n){var t=function(t,o){var i,d=e.observableArray(),r=e.observableArray(),u=0,l=1,c=2,f=u,a=0,s=1,m=2,p=3,g=a,b={levels:100,undoLabel:"undo (#COUNT#)",redoLabel:"redo (#COUNT#)"};o="object"==typeof o?e.utils.extend(b,o):b;var v=function(e){f==l?y(e,r):f==c?y(e,d):f==u&&(y(e,d),r.removeAll())},h=function(e,n){return"undefined"!=typeof e.mergedAction?e.mergedAction(n):null},y=function(e,n){if(n().length>0){var t=h(n()[n().length-1],e);if(null!==t)return void(n()[n().length-1]=t)}n().length>=o.levels&&n.shift(),i=n,n.push(e)},A=function(n,t,o){return{name:e.computed(function(){return e.utils.unwrapObservable(n).replace(/#COUNT#/,o().length)}),enabled:e.computed(function(){return 0!==o().length}),execute:function(){var e=o.pop();if(e){var n=f;f=t;var d=g;g=p,e(),k(i),g=d,f=n}return!0}}},k=function(e){if("undefined"==typeof e)throw"Unexpected operation: stack cleaner called with undefined stack";e().length>0&&"undefined"!=typeof e()[e().length-1].mergedAction&&delete e()[e().length-1].mergedAction},M=function(e,n){var t=function(e,n){e(),n()}.bind(void 0,e,n);return"undefined"!=typeof e.mergedAction&&(t.mergedAction=e.mergedAction),t},x=function(e,n,t){if("undefined"!=typeof n)e(n);else{if(!t)throw"Unexpected condition: no item and no child.oldValues!";if("deleted"==t.status)e.splice(t.index,0,t.value);else{if("added"!=t.status)throw"Unsupproted item.status: "+t.status;e.splice(t.index,1)}}},U=function(e,n,t,o,i){return e.bind(void 0,t,o,i)},j=U,w=function(e,n,t){var o="undefined"!=typeof n.oldValues?n.oldValues[0]:void 0,i=j(x,e,n,o,t);g!=s&&(g==p?"undefined"!=typeof i&&(i.mergedAction=function(e){return"undefined"!=typeof e.mergeMe&&e.mergeMe?M(e,this):null},i.mergeMe=!0):"undefined"!=typeof i&&(n.oldValues&&g==m&&(i.mergedAction=function(e,n,t){return"object"==typeof t.mergeableAction&&e==t.mergeableAction.child?this:null}.bind(i,n,t),i.mergeableAction={child:n,item:t}),t&&"deleted"==t.status&&(i.mergedAction=function(e,n,t){return"object"==typeof t.mergeableMove&&n.value==t.mergeableMove.item.value?M(t,this):(console.log("UR","not mergeable",typeof t.mergeableMove),null)}.bind(i,n,t)),t&&"added"==t.status&&(i.mergeableMove={child:n,item:t})),"undefined"!=typeof i&&v(i))},C={depth:-1,oldValues:1,mutable:!0,tagFields:!0},O={},V="function"==typeof n?n:e.watch,L=V(t,C,w,O);return{push:v,undoCommand:A(o.undoLabel,l,d),redoCommand:A(o.redoLabel,c,r),reset:function(){d.removeAll(),r.removeAll()},setModeOnce:function(){g=m,k(d)},setModeMerge:function(){g=p,k(d)},setModeNormal:function(){g=a,k(d)},setModeIgnore:function(){g=s,k(d)},setUndoActionMaker:function(e){j=e},dispose:function(){L.dispose()}}};return t});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./..\\knockoutjs-reactor\\src\\knockout.reactor.js":11}],10:[function(require,module,exports){
(function (global){
!function(r){"function"==typeof require&&"object"==typeof exports&&"object"==typeof module?r((typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),exports):"function"==typeof define&&define.amd?define(["knockout","exports"],r):r(ko,ko.wrap={})}(function(r,t){function n(r){var t=typeof r;return"object"===t&&(r?r.constructor==Date?t="date":"[object Array]"==Object.prototype.toString.call(r)&&(t="array"):t="null"),t}function e(t){var n={};for(var e in t){var o=t[e];r.isComputed(o)||(n[e]=u(o))}return n}function o(r){var t=[];if(!r||0==r.length)return t;for(var n=0,e=r.length;n<e;++n)t.push(u(r[n]));return t}function u(t){var a=r.isObservable(t);if(a){var f=t();return u(f)}return"array"==n(t)?o(t):"object"==n(t)?e(t):t}function a(){v=[{obj:null,wrapped:null,lvl:""}]}function f(t,n,e){for(var o=0;o<v.length;++o)if(v[o].obj===t)return v[o].wrapped;var u={};for(var a in t){var f=t[a];v.push({obj:t,wrapped:u,lvl:c()+"/"+a}),u[a]=l(f,n,e),v.pop()}return n&&n[c()]&&(u=n[c()](u)),p()&&r.track(u),e?r.observable(u):u}function i(t,n,e){var o=r.observableArray();if(!t||0==t.length)return o;for(var u=0,a=t.length;u<a;++u)o.push(l(t[u],n,e));return o}function c(){return v[v.length-1].lvl}function l(t,e,o){if("array"==n(t))return i(t,e,o);if("object"==n(t))return f(t,e,o);if(p()||"function"==typeof t)return t;var u=r.observable();return u(t),u}function p(){return null!=r.track}t.fromJS=function(r,t,n){return a(),l(r,t,n)},t.updateFromJS=function(t,n,e,o){return a(),t(r.utils.unwrapObservable(l(n,e,o)))},t.fromJSON=function(n,e,o){var u=r.utils.parseJson(n);return arguments[0]=u,t.fromJS.apply(this,e,o)},t.toJS=function(r){return u(r)},t.toJSON=function(n){var e=t.toJS(n);return r.utils.stringifyJson(e)};var v});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],11:[function(require,module,exports){
(function (global){
!function(e){"function"==typeof require&&"object"==typeof exports&&"object"==typeof module?e((typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null)):"function"==typeof define&&define.amd?define(["knockout"],e):e(window.ko)}(function(e){e.subscribable.fn.watch=function(t,a,n,o){var r=typeof t;return"boolean"===r||"undefined"===r?e.watch(this,{enabled:t!==!1}):"function"!==r||e.isSubscribable(t)?e.watch(t,a,n,o||this):e.watch(this,a||{},t,o||this),this},e.watch=function(t,a,n,o){function r(l,f,u,s,b,h){if(l&&0!==a.depth&&(a.depth===-1||u.length<(a.depth||1))){if(a.watchedOnly&&!l.watchable&&l!=t)return;if(a.enabled!==!1&&a.enabled!==!0||(l.watchable=a.enabled),l.watchable===!1)return;a.seal===!0&&(l.watchable=!1);var d=typeof l;if("object"===d||"function"===d){if(l._watcher===o)return;if(a.hide&&e.utils.arrayIndexOf(a.hide,l)>-1)return;var p=[].concat(u,f&&f!==t?f:[]);if("function"!==d){if("[object Object]"===Object.prototype.toString.call(l))e.utils.objectForEach(l,function(t,n){if(n=a.getter?a.getter.call(o,p,l,t):n){if(a.wrap){var i=Object.prototype.toString.call(n);"[object Function]"!==i&&"[object Object]"!==i&&(a.beforeWrap&&a.beforeWrap.call(o,p,l,n)===!1||(n=l[t]="[object Array]"===i?e.observableArray(n):e.observable(n)))}a.unloop&&(n._watcher=s?void 0:o);var c=r(n,b?null:l,p,s,null,t);a.tagFields&&void 0===n._fieldName&&(c||"parentsOnly"!==a.tagFields&&"function"==typeof n||"object"==typeof n)&&(n._fieldName=t)}});else if(a.hideArrays!==!0)for(var v=0;v<l.length;v++)r(l[v],b?null:l,p,s);return!0}if("function"==typeof l.notifySubscribers&&n){if(a.enabled===!0&&l.watchable===!1)return;if(s||!a.beforeWatch||a.beforeWatch.call(o,p,l,h)!==!1){var y="function"==typeof l.pop;if(s?i(l):c(l,y,p,b),y)return r(l(),b?null:l,p,s,!0),!0;if(a.hideWrappedValues!==!0)return r(l(),b?null:l,p,s,!0)}}}}}function i(e){var t=e[l];if(!t)throw"Subscriptions field (."+l+") not defined for observable child "+(e._fieldName||"");if(t.change)for(var n=t.change.length-1;n>=0;n--)t.change[n]._watcher===o&&t.change[n].dispose();if(t.beforeChange&&(a.mutable||a.oldValues>0))for(var n=t.beforeChange.length-1;n>=0;n--)t.beforeChange[n]._watcher===o&&t.beforeChange[n].dispose();if(t.arrayChange)for(var n=t.arrayChange.length-1;n>=0;n--)t.arrayChange[n]._watcher===o&&t.arrayChange[n].dispose()}function c(t,i,c,l){i?t.subscribe(function(a){e.utils.arrayForEach(a,function(e){var a=n.call(o,c,t,e);void 0!==a&&o(a),e.moved||setTimeout(function(){r(e.value,l?null:t,c,"deleted"===e.status)},0)})},void 0,"arrayChange")._watcher=o:(t.subscribe(function(){if(t.watchable!==!1){var e=n.call(o,c,t);void 0!==e&&o(e),a.mutable&&"object"==typeof t()&&r(t(),l?null:t,c)}},null,"change")._watcher=o,(a.oldValues>0||a.mutable)&&(t.subscribe(function(e){if(a.oldValues>0){var n=t.oldValues?t.oldValues:t.oldValues=[];for(n.unshift(e);n.length>a.oldValues;)n.pop()}a.mutable&&"object"==typeof e&&r(e,l?null:t,c,!1,!0)},null,"beforeChange")._watcher=o))}"function"==typeof a&&(o=o||n,n=a,a={}),o=o||this;var l;switch("function"==typeof e.subscription||e.version){case!0:l="_subscriptions";break;case"3.0.0":l="F";break;case"3.1.0":l="H";break;case"3.2.0":l="M";break;case"3.3.0":l="G";break;case"3.4.0":l="K";break;case"3.4.1":l="K";break;default:throw"Unsupported Knockout version. Only v3.0.0 to v3.4.1 are supported when minified. Current version is "+e.version}return"function"!=typeof t||e.isSubscribable(t)?(r(t,null,[]),{dispose:function(){r(t,null,[],!0)}}):e.computed(t,n,a)}});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],12:[function(require,module,exports){
module.exports={lex:require("./lib/lexer"),parse:require("./lib/parser"),stringify:require("./lib/stringify")};

},{"./lib/lexer":14,"./lib/parser":15,"./lib/stringify":16}],13:[function(require,module,exports){
(function (process){
function debug(e){return _debug.bind(null,e)}function _debug(e){var n=[].slice.call(arguments,1);n.unshift("["+e+"]"),process.stderr.write(n.join(" ")+"\n")}exports=module.exports=debug;

}).call(this,require('_process'))

},{"_process":23}],14:[function(require,module,exports){
function lex(e){function a(){return i(),e[p]}function r(e){return e?y[y.length-1-e]:w}function s(a){var r=p+1;return a===e.slice(r,r+a.length)}function t(a){var r=e.slice(p).indexOf(a);return r>0&&r}function c(e){return e===n(1)}function n(a){return e[p+(a||1)]}function l(){var e=y.pop();return w=y[y.length-1],e}function o(e){return w=e,y.push(w),y.length}function u(e){var a=w;return y[y.length-1]=w=e,a}function i(a){if(1==(a||1))"\n"==e[p]?(h++,k=1):k++,p++;else{var r=e.slice(p,p+a).split("\n");r.length>1&&(h+=r.length-1,k=1),k+=r[r.length-1].length,p+=a}}function b(){x.end={line:h,col:k},DEBUG&&debug("addToken:",JSON.stringify(x,null,2)),E.push(x),v="",x={}}function f(e){x={type:e,start:{line:h,col:k}}}var m,g,v="",k=0,p=-1,d=0,h=1,w="before-selector",y=[w],x={},E=[],D=["media","keyframes",{name:"-webkit-keyframes",type:"keyframes",prefix:"-webkit-"},{name:"-moz-keyframes",type:"keyframes",prefix:"-moz-"},{name:"-ms-keyframes",type:"keyframes",prefix:"-ms-"},{name:"-o-keyframes",type:"keyframes",prefix:"-o-"},"font-face",{name:"import",state:"before-at-value"},{name:"charset",state:"before-at-value"},"supports","viewport",{name:"namespace",state:"before-at-value"},"document",{name:"-moz-document",type:"document",prefix:"-moz-"},"page"];for(TIMER&&(m=Date.now());g=a();)switch(DEBUG&&debug(g,r()),g){case" ":switch(r()){case"selector":case"value":case"value-paren":case"at-group":case"at-value":case"comment":case"double-string":case"single-string":v+=g}break;case"\n":case"\t":case"\r":case"\f":switch(r()){case"value":case"value-paren":case"at-group":case"comment":case"single-string":case"double-string":case"selector":v+=g;break;case"at-value":"\n"===g&&(x.value=v.trim(),b(),l())}break;case":":switch(r()){case"name":x.name=v.trim(),v="",u("before-value");break;case"before-selector":v+=g,f("selector"),o("selector");break;case"before-value":u("value"),v+=g;break;default:v+=g}break;case";":switch(r()){case"name":case"before-value":case"value":v.trim().length>0&&(x.value=v.trim(),b()),u("before-name");break;case"value-paren":v+=g;break;case"at-value":x.value=v.trim(),b(),l();break;case"before-name":break;default:v+=g}break;case"{":switch(r()){case"selector":if("\\"===n(-1)){v+=g;break}x.text=v.trim(),b(),u("before-name"),d+=1;break;case"at-group":switch(x.name=v.trim(),x.type){case"font-face":case"viewport":case"page":o("before-name");break;default:o("before-selector")}b(),d+=1;break;case"name":case"at-rule":x.name=v.trim(),b(),o("before-name"),d+=1;break;case"comment":case"double-string":case"single-string":v+=g;break;case"before-value":u("value"),v+=g}break;case"}":switch(r()){case"before-name":case"name":case"before-value":case"value":v&&(x.value=v.trim()),x.name&&x.value&&b(),f("end"),b(),l(),"at-group"===r()&&(f("at-group-end"),b(),l()),d>0&&(d-=1);break;case"at-group":case"before-selector":case"selector":if("\\"===n(-1)){v+=g;break}d>0&&"at-group"===r(1)&&(f("at-group-end"),b()),d>1&&l(),d>0&&(d-=1);break;case"double-string":case"single-string":case"comment":v+=g}break;case'"':case"'":switch(r()){case"double-string":'"'===g&&"\\"!==n(-1)&&l();break;case"single-string":"'"===g&&"\\"!==n(-1)&&l();break;case"before-at-value":u("at-value"),o('"'===g?"double-string":"single-string");break;case"before-value":u("value"),o('"'===g?"double-string":"single-string");break;case"comment":break;default:"\\"!==n(-1)&&o('"'===g?"double-string":"single-string")}v+=g;break;case"/":switch(r()){case"comment":case"double-string":case"single-string":v+=g;break;case"before-value":case"selector":case"name":case"value":if(c("*")){var z=t("*/");z&&i(z+1)}else"before-value"==r()&&u("value"),v+=g;break;default:c("*")?(f("comment"),o("comment"),i()):v+=g}break;case"*":switch(r()){case"comment":c("/")?(x.text=v,i(),b(),l()):v+=g;break;case"before-selector":v+=g,f("selector"),o("selector");break;case"before-value":u("value"),v+=g;break;default:v+=g}break;case"@":switch(r()){case"comment":case"double-string":case"single-string":v+=g;break;case"before-value":u("value"),v+=g;break;default:for(var T,B,G=!1,I=0,M=D.length;!G&&I<M;++I)B=D[I],T=B.name||B,s(T)&&(G=!0,f(T),o(B.state||"at-group"),i(T.length),B.prefix&&(x.prefix=B.prefix),B.type&&(x.type=B.type));G||(v+=g)}break;case"(":switch(r()){case"value":o("value-paren");break;case"before-value":u("value")}v+=g;break;case")":switch(r()){case"value-paren":l();break;case"before-value":u("value")}v+=g;break;default:switch(r()){case"before-selector":f("selector"),o("selector");break;case"before-name":f("property"),u("name");break;case"before-value":u("value");break;case"before-at-value":u("at-value")}v+=g}return TIMER&&debug("ran in",Date.now()-m+"ms"),E}var DEBUG=!1,TIMER=!1,debug=require("./debug")("lex");exports=module.exports=lex;

},{"./debug":13}],15:[function(require,module,exports){
function parse(e,r){var t;r||(r={}),_comments=!!r.comments,_position=!!r.position,_depth=0,_tokens=Array.isArray(e)?e.slice():lex(e);var s,n,a=[];for(TIMER&&(t=Date.now());n=next();)s=parseToken(n),s&&a.push(s);return TIMER&&debug("ran in",Date.now()-t+"ms"),{type:"stylesheet",stylesheet:{rules:a}}}function astNode(e,r){r||(r={});for(var t,s=["type","name","value"],n={},a=0;a<s.length;++a)t=s[a],e[t]&&(n[t]=r[t]||e[t]);for(s=Object.keys(r),a=0;a<s.length;++a)t=s[a],n[t]||(n[t]=r[t]);return _position&&(n.position={start:e.start,end:e.end}),DEBUG&&debug("astNode:",JSON.stringify(n,null,2)),n}function next(){var e=_tokens.shift();return DEBUG&&debug("next:",JSON.stringify(e,null,2)),e}function parseAtGroup(e){_depth+=1;var r={};switch(e.type){case"font-face":case"viewport":r.declarations=parseDeclarations();break;case"page":r.prefix=e.prefix,r.declarations=parseDeclarations();break;default:r.prefix=e.prefix,r.rules=parseRules()}return astNode(e,r)}function parseAtImport(e){return astNode(e)}function parseCharset(e){return astNode(e)}function parseComment(e){return astNode(e,{text:e.text})}function parseNamespace(e){return astNode(e)}function parseProperty(e){return astNode(e)}function parseSelector(e){function r(e){return e.trim()}return astNode(e,{type:"rule",selectors:e.text.split(",").map(r),declarations:parseDeclarations(e)})}function parseToken(e){switch(e.type){case"property":return parseProperty(e);case"selector":return parseSelector(e);case"at-group-end":return void(_depth-=1);case"media":case"keyframes":return parseAtGroup(e);case"comment":if(_comments)return parseComment(e);break;case"charset":return parseCharset(e);case"import":return parseAtImport(e);case"namespace":return parseNamespace(e);case"font-face":case"supports":case"viewport":case"document":case"page":return parseAtGroup(e)}DEBUG&&debug("parseToken: unexpected token:",JSON.stringify(e))}function parseTokensWhile(e){for(var r,t,s=[];(t=next())&&e&&e(t);)r=parseToken(t),r&&s.push(r);return t&&"end"!==t.type&&_tokens.unshift(t),s}function parseDeclarations(){return parseTokensWhile(function(e){return"property"===e.type||"comment"===e.type})}function parseRules(){return parseTokensWhile(function(){return _depth})}var DEBUG=!1,TIMER=!1,debug=require("./debug")("parse"),lex=require("./lexer");exports=module.exports=parse;var _comments,_depth,_position,_tokens;

},{"./debug":13,"./lexer":14}],16:[function(require,module,exports){
function stringify(e,n){var t;n||(n={}),_indentation=n.indentation||"",_compress=!!n.compress,_comments=!!n.comments,_compress?_n=_s="":(_n="\n",_s=" "),TIMER&&(t=Date.now());var r=reduce(e.stylesheet.rules,stringifyNode).join("\n").trim();return TIMER&&debug("ran in",Date.now()-t+"ms"),r}function indent(e){return this.level||(this.level=1),e?void(this.level+=e):_compress?"":Array(this.level).join(_indentation||"")}function stringifyAtRule(e){return"@"+e.type+" "+e.value+";"+_n}function stringifyAtGroup(e){var n="",t=e.prefix||"";e.name&&(n=" "+e.name);var r="page"!==e.type;return"@"+t+e.type+n+_s+stringifyBlock(e,r)+_n}function stringifyComment(e){return _comments?"/*"+(e.text||"")+"*/"+_n:""}function stringifyRule(e){var n;return e.selectors?n=e.selectors.join(","+_n):(n="@"+e.type,n+=e.name?" "+e.name:""),indent()+n+_s+stringifyBlock(e)+_n}function reduce(e,n){return e.reduce(function(e,t){var r="comment"===t.type?stringifyComment(t):n(t);return r&&e.push(r),e},[])}function stringifyBlock(e,n){var t=e.declarations,r=stringifyDeclaration;return e.rules&&(t=e.rules,r=stringifyRule),t=stringifyChildren(t,r),t&&(t=_n+t+(n?"":_n)),"{"+t+indent()+"}"}function stringifyChildren(e,n){if(!e)return"";indent(1);var t=reduce(e,n);return indent(-1),t.length?t.join(_n):""}function stringifyDeclaration(e){return"property"===e.type?stringifyProperty(e):void(DEBUG&&debug("stringifyDeclaration: unexpected node:",JSON.stringify(e)))}function stringifyNode(e){switch(e.type){case"rule":return stringifyRule(e);case"media":case"keyframes":return stringifyAtGroup(e);case"comment":return stringifyComment(e);case"import":case"charset":case"namespace":return stringifyAtRule(e);case"font-face":case"supports":case"viewport":case"document":case"page":return stringifyAtGroup(e)}DEBUG&&debug("stringifyNode: unexpected node: "+JSON.stringify(e))}function stringifyProperty(e){var n=e.name?e.name+":"+_s:"";return indent()+n+e.value+";"}var DEBUG=!1,TIMER=!1,debug=require("./debug")("stringify"),_comments,_compress,_indentation,_n,_s;exports=module.exports=stringify;

},{"./debug":13}],17:[function(require,module,exports){
"use strict";var escapeRe=/([-.*+?^${}()|[\]\/\\])/g,unescapeRe=/\\/g,escape=function(e){return(e+"").replace(escapeRe,"\\$1")},unescape=function(e){return(e+"").replace(unescapeRe,"")},slickRe=RegExp("^(?:\\s*(,)\\s*|\\s*(<combinator>+)\\s*|(\\s+)|(<unicode>+|\\*)|\\#(<unicode>+)|\\.(<unicode>+)|\\[\\s*(<unicode1>+)(?:\\s*([*^$!~|]?=)(?:\\s*(?:([\"']?)(.*?)\\9)))?\\s*\\](?!\\])|(:+)(<unicode>+)(?:\\((?:(?:([\"'])([^\\13]*)\\13)|((?:\\([^)]+\\)|[^()]*)+))\\))?)".replace(/<combinator>/,"["+escape(">+~`!@$%^&={}\\;</")+"]").replace(/<unicode>/g,"(?:[\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])").replace(/<unicode1>/g,"(?:[:\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])")),Part=function(e){this.combinator=e||" ",this.tag="*"};Part.prototype.toString=function(){if(!this.raw){var e,s,t="";if(t+=this.tag||"*",this.id&&(t+="#"+this.id),this.classes&&(t+="."+this.classList.join(".")),this.attributes)for(e=0;s=this.attributes[e++];)t+="["+s.name+(s.operator?s.operator+'"'+s.value+'"':"")+"]";if(this.pseudos)for(e=0;s=this.pseudos[e++];)t+=":"+s.name,s.value&&(t+="("+s.value+")");this.raw=t}return this.raw};var Expression=function(){this.length=0};Expression.prototype.toString=function(){if(!this.raw){for(var e,s="",t=0;e=this[t++];)1!==t&&(s+=" ")," "!==e.combinator&&(s+=e.combinator+" "),s+=e;this.raw=s}return this.raw};var replacer=function(e,s,t,a,r,i,n,c,u,o,p,l,h,f,g,d){var v,w;if((s||!this.length)&&(v=this[this.length++]=new Expression,s))return"";if(v||(v=this[this.length-1]),(t||a||!v.length)&&(w=v[v.length++]=new Part(t)),w||(w=v[v.length-1]),r)w.tag=unescape(r);else if(i)w.id=unescape(i);else if(n){var m=unescape(n),b=w.classes||(w.classes={});if(!b[m]){b[m]=escape(n);var x=w.classList||(w.classList=[]);x.push(m),x.sort()}}else h?(d=d||g,(w.pseudos||(w.pseudos=[])).push({type:1==l.length?"class":"element",name:unescape(h),escapedName:escape(h),value:d?unescape(d):null,escapedValue:d?escape(d):null})):c&&(p=p?escape(p):null,(w.attributes||(w.attributes=[])).push({operator:u,name:unescape(c),escapedName:escape(c),value:p?unescape(p):null,escapedValue:p?escape(p):null}));return""},Expressions=function(e){this.length=0;for(var s,t=this,a=e;e;){if(s=e.replace(slickRe,function(){return replacer.apply(t,arguments)}),s===e)throw new Error(a+" is an invalid expression");e=s}};Expressions.prototype.toString=function(){if(!this.raw){for(var e,s=[],t=0;e=this[t++];)s.push(e);this.raw=s.join(", ")}return this.raw};var cache={},parse=function(e){return null==e?null:(e=(""+e).replace(/^\s+|\s+$/g,""),cache[e]||(cache[e]=new Expressions(e)))};module.exports=parse;

},{}],18:[function(require,module,exports){
!function(t){function e(t,n){if(t=t?t:"",n=n||{},t instanceof e)return t;if(!(this instanceof e))return new e(t,n);var a=r(t);this._originalInput=t,this._r=a.r,this._g=a.g,this._b=a.b,this._a=a.a,this._roundA=$(100*this._a)/100,this._format=n.format||a.format,this._gradientType=n.gradientType,this._r<1&&(this._r=$(this._r)),this._g<1&&(this._g=$(this._g)),this._b<1&&(this._b=$(this._b)),this._ok=a.ok,this._tc_id=P++}function r(t){var e={r:0,g:0,b:0},r=1,a=null,s=null,f=null,h=!1,l=!1;return"string"==typeof t&&(t=E(t)),"object"==typeof t&&(z(t.r)&&z(t.g)&&z(t.b)?(e=n(t.r,t.g,t.b),h=!0,l="%"===String(t.r).substr(-1)?"prgb":"rgb"):z(t.h)&&z(t.s)&&z(t.v)?(a=I(t.s),s=I(t.v),e=o(t.h,a,s),h=!0,l="hsv"):z(t.h)&&z(t.s)&&z(t.l)&&(a=I(t.s),f=I(t.l),e=i(t.h,a,f),h=!0,l="hsl"),t.hasOwnProperty("a")&&(r=t.a)),r=S(r),{ok:h,format:t.format||l,r:D(255,U(e.r,0)),g:D(255,U(e.g,0)),b:D(255,U(e.b,0)),a:r}}function n(t,e,r){return{r:255*H(t,255),g:255*H(e,255),b:255*H(r,255)}}function a(t,e,r){t=H(t,255),e=H(e,255),r=H(r,255);var n,a,i=U(t,e,r),s=D(t,e,r),o=(i+s)/2;if(i==s)n=a=0;else{var f=i-s;switch(a=o>.5?f/(2-i-s):f/(i+s),i){case t:n=(e-r)/f+(e<r?6:0);break;case e:n=(r-t)/f+2;break;case r:n=(t-e)/f+4}n/=6}return{h:n,s:a,l:o}}function i(t,e,r){function n(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+6*(e-t)*r:r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t}var a,i,s;if(t=H(t,360),e=H(e,100),r=H(r,100),0===e)a=i=s=r;else{var o=r<.5?r*(1+e):r+e-r*e,f=2*r-o;a=n(f,o,t+1/3),i=n(f,o,t),s=n(f,o,t-1/3)}return{r:255*a,g:255*i,b:255*s}}function s(t,e,r){t=H(t,255),e=H(e,255),r=H(r,255);var n,a,i=U(t,e,r),s=D(t,e,r),o=i,f=i-s;if(a=0===i?0:f/i,i==s)n=0;else{switch(i){case t:n=(e-r)/f+(e<r?6:0);break;case e:n=(r-t)/f+2;break;case r:n=(t-e)/f+4}n/=6}return{h:n,s:a,v:o}}function o(e,r,n){e=6*H(e,360),r=H(r,100),n=H(n,100);var a=t.floor(e),i=e-a,s=n*(1-r),o=n*(1-i*r),f=n*(1-(1-i)*r),h=a%6,l=[n,o,s,s,f,n][h],u=[f,n,n,o,s,s][h],c=[s,s,f,n,n,o][h];return{r:255*l,g:255*u,b:255*c}}function f(t,e,r,n){var a=[M($(t).toString(16)),M($(e).toString(16)),M($(r).toString(16))];return n&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function h(t,e,r,n,a){var i=[M($(t).toString(16)),M($(e).toString(16)),M($(r).toString(16)),M(L(n))];return a&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function l(t,e,r,n){var a=[M(L(n)),M($(t).toString(16)),M($(e).toString(16)),M($(r).toString(16))];return a.join("")}function u(t,r){r=0===r?0:r||10;var n=e(t).toHsl();return n.s-=r/100,n.s=R(n.s),e(n)}function c(t,r){r=0===r?0:r||10;var n=e(t).toHsl();return n.s+=r/100,n.s=R(n.s),e(n)}function g(t){return e(t).desaturate(100)}function b(t,r){r=0===r?0:r||10;var n=e(t).toHsl();return n.l+=r/100,n.l=R(n.l),e(n)}function d(t,r){r=0===r?0:r||10;var n=e(t).toRgb();return n.r=U(0,D(255,n.r-$(255*-(r/100)))),n.g=U(0,D(255,n.g-$(255*-(r/100)))),n.b=U(0,D(255,n.b-$(255*-(r/100)))),e(n)}function _(t,r){r=0===r?0:r||10;var n=e(t).toHsl();return n.l-=r/100,n.l=R(n.l),e(n)}function p(t,r){var n=e(t).toHsl(),a=(n.h+r)%360;return n.h=a<0?360+a:a,e(n)}function m(t){var r=e(t).toHsl();return r.h=(r.h+180)%360,e(r)}function v(t){var r=e(t).toHsl(),n=r.h;return[e(t),e({h:(n+120)%360,s:r.s,l:r.l}),e({h:(n+240)%360,s:r.s,l:r.l})]}function y(t){var r=e(t).toHsl(),n=r.h;return[e(t),e({h:(n+90)%360,s:r.s,l:r.l}),e({h:(n+180)%360,s:r.s,l:r.l}),e({h:(n+270)%360,s:r.s,l:r.l})]}function A(t){var r=e(t).toHsl(),n=r.h;return[e(t),e({h:(n+72)%360,s:r.s,l:r.l}),e({h:(n+216)%360,s:r.s,l:r.l})]}function x(t,r,n){r=r||6,n=n||30;var a=e(t).toHsl(),i=360/n,s=[e(t)];for(a.h=(a.h-(i*r>>1)+720)%360;--r;)a.h=(a.h+i)%360,s.push(e(a));return s}function k(t,r){r=r||6;for(var n=e(t).toHsv(),a=n.h,i=n.s,s=n.v,o=[],f=1/r;r--;)o.push(e({h:a,s:i,v:s})),s=(s+f)%1;return o}function w(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[t[r]]=r);return e}function S(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function H(e,r){C(e)&&(e="100%");var n=q(e);return e=D(r,U(0,parseFloat(e))),n&&(e=parseInt(e*r,10)/100),t.abs(e-r)<1e-6?1:e%r/parseFloat(r)}function R(t){return D(1,U(0,t))}function F(t){return parseInt(t,16)}function C(t){return"string"==typeof t&&t.indexOf(".")!=-1&&1===parseFloat(t)}function q(t){return"string"==typeof t&&t.indexOf("%")!=-1}function M(t){return 1==t.length?"0"+t:""+t}function I(t){return t<=1&&(t=100*t+"%"),t}function L(e){return t.round(255*parseFloat(e)).toString(16)}function N(t){return F(t)/255}function z(t){return!!X.CSS_UNIT.exec(t)}function E(t){t=t.replace(j,"").replace(O,"").toLowerCase();var e=!1;if(G[t])t=G[t],e=!0;else if("transparent"==t)return{r:0,g:0,b:0,a:0,format:"name"};var r;return(r=X.rgb.exec(t))?{r:r[1],g:r[2],b:r[3]}:(r=X.rgba.exec(t))?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=X.hsl.exec(t))?{h:r[1],s:r[2],l:r[3]}:(r=X.hsla.exec(t))?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=X.hsv.exec(t))?{h:r[1],s:r[2],v:r[3]}:(r=X.hsva.exec(t))?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=X.hex8.exec(t))?{r:F(r[1]),g:F(r[2]),b:F(r[3]),a:N(r[4]),format:e?"name":"hex8"}:(r=X.hex6.exec(t))?{r:F(r[1]),g:F(r[2]),b:F(r[3]),format:e?"name":"hex"}:(r=X.hex4.exec(t))?{r:F(r[1]+""+r[1]),g:F(r[2]+""+r[2]),b:F(r[3]+""+r[3]),a:N(r[4]+""+r[4]),format:e?"name":"hex8"}:!!(r=X.hex3.exec(t))&&{r:F(r[1]+""+r[1]),g:F(r[2]+""+r[2]),b:F(r[3]+""+r[3]),format:e?"name":"hex"}}function T(t){var e,r;return t=t||{level:"AA",size:"small"},e=(t.level||"AA").toUpperCase(),r=(t.size||"small").toLowerCase(),"AA"!==e&&"AAA"!==e&&(e="AA"),"small"!==r&&"large"!==r&&(r="small"),{level:e,size:r}}var j=/^\s+/,O=/\s+$/,P=0,$=t.round,D=t.min,U=t.max,B=t.random;e.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},getLuminance:function(){var e,r,n,a,i,s,o=this.toRgb();return e=o.r/255,r=o.g/255,n=o.b/255,a=e<=.03928?e/12.92:t.pow((e+.055)/1.055,2.4),i=r<=.03928?r/12.92:t.pow((r+.055)/1.055,2.4),s=n<=.03928?n/12.92:t.pow((n+.055)/1.055,2.4),.2126*a+.7152*i+.0722*s},setAlpha:function(t){return this._a=S(t),this._roundA=$(100*this._a)/100,this},toHsv:function(){var t=s(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=s(this._r,this._g,this._b),e=$(360*t.h),r=$(100*t.s),n=$(100*t.v);return 1==this._a?"hsv("+e+", "+r+"%, "+n+"%)":"hsva("+e+", "+r+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var t=a(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=a(this._r,this._g,this._b),e=$(360*t.h),r=$(100*t.s),n=$(100*t.l);return 1==this._a?"hsl("+e+", "+r+"%, "+n+"%)":"hsla("+e+", "+r+"%, "+n+"%, "+this._roundA+")"},toHex:function(t){return f(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return h(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:$(this._r),g:$(this._g),b:$(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+$(this._r)+", "+$(this._g)+", "+$(this._b)+")":"rgba("+$(this._r)+", "+$(this._g)+", "+$(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:$(100*H(this._r,255))+"%",g:$(100*H(this._g,255))+"%",b:$(100*H(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+$(100*H(this._r,255))+"%, "+$(100*H(this._g,255))+"%, "+$(100*H(this._b,255))+"%)":"rgba("+$(100*H(this._r,255))+"%, "+$(100*H(this._g,255))+"%, "+$(100*H(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(V[f(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var r="#"+l(this._r,this._g,this._b,this._a),n=r,a=this._gradientType?"GradientType = 1, ":"";if(t){var i=e(t);n="#"+l(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+a+"startColorstr="+r+",endColorstr="+n+")"},toString:function(t){var e=!!t;t=t||this._format;var r=!1,n=this._a<1&&this._a>=0,a=!e&&n&&("hex"===t||"hex6"===t||"hex3"===t||"hex4"===t||"hex8"===t||"name"===t);return a?"name"===t&&0===this._a?this.toName():this.toRgbString():("rgb"===t&&(r=this.toRgbString()),"prgb"===t&&(r=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(r=this.toHexString()),"hex3"===t&&(r=this.toHexString(!0)),"hex4"===t&&(r=this.toHex8String(!0)),"hex8"===t&&(r=this.toHex8String()),"name"===t&&(r=this.toName()),"hsl"===t&&(r=this.toHslString()),"hsv"===t&&(r=this.toHsvString()),r||this.toHexString())},clone:function(){return e(this.toString())},_applyModification:function(t,e){var r=t.apply(null,[this].concat([].slice.call(e)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(b,arguments)},brighten:function(){return this._applyModification(d,arguments)},darken:function(){return this._applyModification(_,arguments)},desaturate:function(){return this._applyModification(u,arguments)},saturate:function(){return this._applyModification(c,arguments)},greyscale:function(){return this._applyModification(g,arguments)},spin:function(){return this._applyModification(p,arguments)},_applyCombination:function(t,e){return t.apply(null,[this].concat([].slice.call(e)))},analogous:function(){return this._applyCombination(x,arguments)},complement:function(){return this._applyCombination(m,arguments)},monochromatic:function(){return this._applyCombination(k,arguments)},splitcomplement:function(){return this._applyCombination(A,arguments)},triad:function(){return this._applyCombination(v,arguments)},tetrad:function(){return this._applyCombination(y,arguments)}},e.fromRatio=function(t,r){if("object"==typeof t){var n={};for(var a in t)t.hasOwnProperty(a)&&("a"===a?n[a]=t[a]:n[a]=I(t[a]));t=n}return e(t,r)},e.equals=function(t,r){return!(!t||!r)&&e(t).toRgbString()==e(r).toRgbString()},e.random=function(){return e.fromRatio({r:B(),g:B(),b:B()})},e.mix=function(t,r,n){n=0===n?0:n||50;var a=e(t).toRgb(),i=e(r).toRgb(),s=n/100,o={r:(i.r-a.r)*s+a.r,g:(i.g-a.g)*s+a.g,b:(i.b-a.b)*s+a.b,a:(i.a-a.a)*s+a.a};return e(o)},e.readability=function(r,n){var a=e(r),i=e(n);return(t.max(a.getLuminance(),i.getLuminance())+.05)/(t.min(a.getLuminance(),i.getLuminance())+.05)},e.isReadable=function(t,r,n){var a,i,s=e.readability(t,r);switch(i=!1,a=T(n),a.level+a.size){case"AAsmall":case"AAAlarge":i=s>=4.5;break;case"AAlarge":i=s>=3;break;case"AAAsmall":i=s>=7}return i},e.mostReadable=function(t,r,n){var a,i,s,o,f=null,h=0;n=n||{},i=n.includeFallbackColors,s=n.level,o=n.size;for(var l=0;l<r.length;l++)a=e.readability(t,r[l]),a>h&&(h=a,f=e(r[l]));return e.isReadable(t,f,{level:s,size:o})||!i?f:(n.includeFallbackColors=!1,e.mostReadable(t,["#fff","#000"],n))};var G=e.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},V=e.hexNames=w(G),X=function(){var t="[-\\+]?\\d+%?",e="[-\\+]?\\d*\\.\\d+%?",r="(?:"+e+")|(?:"+t+")",n="[\\s|\\(]+("+r+")[,|\\s]+("+r+")[,|\\s]+("+r+")\\s*\\)?",a="[\\s|\\(]+("+r+")[,|\\s]+("+r+")[,|\\s]+("+r+")[,|\\s]+("+r+")\\s*\\)?";return{CSS_UNIT:new RegExp(r),rgb:new RegExp("rgb"+n),rgba:new RegExp("rgba"+a),hsl:new RegExp("hsl"+n),hsla:new RegExp("hsla"+a),hsv:new RegExp("hsv"+n),hsva:new RegExp("hsva"+a),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();"undefined"!=typeof module&&module.exports?module.exports=e:"function"==typeof define&&define.amd?define(function(){return e}):window.tinycolor=e}(Math);

},{}],19:[function(require,module,exports){
(function (global){
!function(e){e(["jquery"],function(e){return function(){function t(e,t,n){return g({type:O.error,iconClass:m().iconClasses.error,message:e,optionsOverride:n,title:t})}function n(t,n){return t||(t=m()),v=e("#"+t.containerId),v.length?v:(n&&(v=d(t)),v)}function o(e,t,n){return g({type:O.info,iconClass:m().iconClasses.info,message:e,optionsOverride:n,title:t})}function s(e){C=e}function i(e,t,n){return g({type:O.success,iconClass:m().iconClasses.success,message:e,optionsOverride:n,title:t})}function a(e,t,n){return g({type:O.warning,iconClass:m().iconClasses.warning,message:e,optionsOverride:n,title:t})}function r(e,t){var o=m();v||n(o),u(e,o,t)||l(o)}function c(t){var o=m();return v||n(o),t&&0===e(":focus",t).length?void h(t):void(v.children().length&&v.remove())}function l(t){for(var n=v.children(),o=n.length-1;o>=0;o--)u(e(n[o]),t)}function u(t,n,o){var s=!(!o||!o.force)&&o.force;return!(!t||!s&&0!==e(":focus",t).length)&&(t[n.hideMethod]({duration:n.hideDuration,easing:n.hideEasing,complete:function(){h(t)}}),!0)}function d(t){return v=e("<div/>").attr("id",t.containerId).addClass(t.positionClass),v.appendTo(e(t.target)),v}function p(){return{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,closeMethod:!1,closeDuration:!1,closeEasing:!1,closeOnHover:!0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",escapeHtml:!1,target:"body",closeHtml:'<button type="button">&times;</button>',closeClass:"toast-close-button",newestOnTop:!0,preventDuplicates:!1,progressBar:!1,progressClass:"toast-progress",rtl:!1}}function f(e){C&&C(e)}function g(t){function o(e){return null==e&&(e=""),e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function s(){c(),u(),d(),p(),g(),C(),l(),i()}function i(){var e="";switch(t.iconClass){case"toast-success":case"toast-info":e="polite";break;default:e="assertive"}I.attr("aria-live",e)}function a(){E.closeOnHover&&I.hover(H,D),!E.onclick&&E.tapToDismiss&&I.click(b),E.closeButton&&j&&j.click(function(e){e.stopPropagation?e.stopPropagation():void 0!==e.cancelBubble&&e.cancelBubble!==!0&&(e.cancelBubble=!0),E.onCloseClick&&E.onCloseClick(e),b(!0)}),E.onclick&&I.click(function(e){E.onclick(e),b()})}function r(){I.hide(),I[E.showMethod]({duration:E.showDuration,easing:E.showEasing,complete:E.onShown}),E.timeOut>0&&(k=setTimeout(b,E.timeOut),F.maxHideTime=parseFloat(E.timeOut),F.hideEta=(new Date).getTime()+F.maxHideTime,E.progressBar&&(F.intervalId=setInterval(x,10)))}function c(){t.iconClass&&I.addClass(E.toastClass).addClass(y)}function l(){E.newestOnTop?v.prepend(I):v.append(I)}function u(){if(t.title){var e=t.title;E.escapeHtml&&(e=o(t.title)),M.append(e).addClass(E.titleClass),I.append(M)}}function d(){if(t.message){var e=t.message;E.escapeHtml&&(e=o(t.message)),B.append(e).addClass(E.messageClass),I.append(B)}}function p(){E.closeButton&&(j.addClass(E.closeClass).attr("role","button"),I.prepend(j))}function g(){E.progressBar&&(q.addClass(E.progressClass),I.prepend(q))}function C(){E.rtl&&I.addClass("rtl")}function O(e,t){if(e.preventDuplicates){if(t.message===w)return!0;w=t.message}return!1}function b(t){var n=t&&E.closeMethod!==!1?E.closeMethod:E.hideMethod,o=t&&E.closeDuration!==!1?E.closeDuration:E.hideDuration,s=t&&E.closeEasing!==!1?E.closeEasing:E.hideEasing;if(!e(":focus",I).length||t)return clearTimeout(F.intervalId),I[n]({duration:o,easing:s,complete:function(){h(I),clearTimeout(k),E.onHidden&&"hidden"!==P.state&&E.onHidden(),P.state="hidden",P.endTime=new Date,f(P)}})}function D(){(E.timeOut>0||E.extendedTimeOut>0)&&(k=setTimeout(b,E.extendedTimeOut),F.maxHideTime=parseFloat(E.extendedTimeOut),F.hideEta=(new Date).getTime()+F.maxHideTime)}function H(){clearTimeout(k),F.hideEta=0,I.stop(!0,!0)[E.showMethod]({duration:E.showDuration,easing:E.showEasing})}function x(){var e=(F.hideEta-(new Date).getTime())/F.maxHideTime*100;q.width(e+"%")}var E=m(),y=t.iconClass||E.iconClass;if("undefined"!=typeof t.optionsOverride&&(E=e.extend(E,t.optionsOverride),y=t.optionsOverride.iconClass||y),!O(E,t)){T++,v=n(E,!0);var k=null,I=e("<div/>"),M=e("<div/>"),B=e("<div/>"),q=e("<div/>"),j=e(E.closeHtml),F={intervalId:null,hideEta:null,maxHideTime:null},P={toastId:T,state:"visible",startTime:new Date,options:E,map:t};return s(),r(),a(),f(P),E.debug&&console&&console.log(P),I}}function m(){return e.extend({},p(),b.options)}function h(e){v||(v=n()),e.is(":visible")||(e.remove(),e=null,0===v.children().length&&(v.remove(),w=void 0))}var v,C,w,T=0,O={error:"error",info:"info",success:"success",warning:"warning"},b={clear:r,remove:c,error:t,getContainer:n,info:o,options:{},subscribe:s,success:i,version:"2.1.3",warning:a};return b}()})}("function"==typeof define&&define.amd?define:function(e,t){"undefined"!=typeof module&&module.exports?module.exports=t((typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null)):window.toastr=t(window.jQuery)});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],20:[function(require,module,exports){
var templateSystem=require("../src/js/bindings/choose-template.js");document.addEventListener("DOMContentLoaded",function(t){templateSystem.addTemplate("array","<!-- ko foreach: $data --><!-- ko block: $data --><!-- /ko --><!-- /ko -->"),templateSystem.addTemplate("block-show","<!-- ko block: $data, scrollIntoView: $root.selectedBlock() === $data --><!-- /ko -->"),templateSystem.addTemplate("block-wysiwyg",'<div class="editable block" data-drop-content="Drop here" data-bind="attr: { \'data-drop-content\': $root.t(\'Drop here\') }, click: function(obj, evt) { $root.selectBlock(obj); return true }, clickBubble: false, css: { selected: $root.selectedBlock() === $data }, scrollIntoView: $root.selectedBlock() === $data">  <div class="mo-blockselectionhelper"></div>  <div class="tools" data-bind="tooltips: {}">    <!-- ko if: typeof $index != \'undefined\' -->    <div title="Drag this handle to move the block" data-bind="attr: { title: $root.t(\'Drag this handle to move the block\') }" class="tool handle"><i class="fa fa-fw fa-sort"></i></div>    <!-- ko if: $index() > 0 -->    <div title="Move this block upside" data-bind="attr: { title: $root.t(\'Move this block upside\') }" class="tool moveup"><i class="fa fa-fw fa-sort-asc" data-bind=\'click: $root.moveBlock.bind($element, $index, $parent, true)\'></i></div>    <!-- /ko -->    <!-- ko if: $index() < $parent.blocks().length -1 -->    <div title="Move this block downside" data-bind="attr: { title: $root.t(\'Move this block downside\') }" class="tool movedown"><i class="fa fa-fw fa-sort-desc" data-bind=\'click: $root.moveBlock.bind($element, $index, $parent, false)\'></i></div>    <!-- /ko -->    <div title="Delete block" class="tool delete" data-bind="attr: { title: $root.t(\'Delete block\') }, click: $root.removeBlock.bind($element, $rawData, $parent)"><i class="fa fa-fw fa-trash-o"></i></div>    <div title="Duplicate block" class="tool clone" data-bind="attr: { title: $root.t(\'Duplicate block\') }, click: $root.duplicateBlock.bind($element, $index, $parent)"><i class="fa fa-fw fa-files-o"></i></div>    <!-- /ko -->    <!-- ko if: typeof $data._nextVariant != \'undefined\' --><div title="Switch block variant" class="tool variant" data-bind="attr: { title: $root.t(\'Switch block variant\') }, click: $data._nextVariant"><i class="fa fa-fw fa-magic"></i></div><!-- /ko -->  </div>  <!-- ko block: $data --><!-- /ko --></div>'),templateSystem.addTemplate("blocks-show","<!-- ko template: { name: 'block-show', foreach: blocks } --><!-- /ko -->"),templateSystem.addTemplate("blocks-wysiwyg","<div class=\"sortable-blocks-edit\" data-drop-content=\"Drop here\" data-empty-content=\"Drop here blocks from the Blocks tab\" data-bind=\"attr: { 'data-drop-content': $root.t('Drop here'), 'data-empty-content': $root.t('Drop here blocks from the &quot;Blocks&quot; tab') }, css: { 'empty': ko.utils.unwrapObservable(blocks).length == 0 }, extsortable: { connectClass: 'sortable-blocks-edit', template: 'block-wysiwyg', data: blocks, dragging: $root.dragging, beforeMove: $root.startMultiple, afterMove: $root.stopMultiple, options: { handle: '.handle', placeholder: $root.placeholderHelper } }\"></div>"),templateSystem.addTemplate("customstyle",'<div class="customStyleHelp" data-bind="html: $root.t(\'Customized block.<ul><li>In this status changes to properties will be specific to the current block (instead of being global to all blocks in the same section)</li><li>A <span class=&quot;customStyled&quot;><span>&quot;small cube&quot; </span></span> icon beside the property will mark the customization. By clicking this icon the property value will be reverted to the value defined for the section.</li></ul>\')">Customized block.<ul><li>In this status changes to properties will be specific to the current block (instead of being global to all blocks in the same section)</li><li>A <span class="customStyled"><span>"small cube" </span></span> icon beside the property will mark the customization. By clicking this icon the property value will be reverted to the value defined for the section.</li></ul></div>'),templateSystem.addTemplate("empty",""),templateSystem.addTemplate("error",'[<div style="background-color: #fff0f0" data-bind="text: ko.toJS($data)"></div>]'),templateSystem.addTemplate("gallery-images",'<div data-bind="foreach: items.currentPageData">  <div class="draggable-item" data-bind="if: typeof thumbnailUrl != \'undefined\'">    <div class="draggable image" data-bind="click: $root.addImage, extdraggable: { data: $data, dropContainer: \'#main-wysiwyg-area\', dragging: $root.draggingImage, \'options\': { \'appendTo\': \'#page\' } }, style: { backgroundImage: \'url(\\\'\' + thumbnailUrl + \'\\\')\' }">      <img title="Drag this image and drop it on any template image placeholder" style="display: block;" data-bind="tooltips: {}, attr: { src: thumbnailUrl, \'title\': $root.t(\'Drag this image and drop it on any template image placeholder\') }"/>    </div>  </div></div><!-- ko if: items.pageCount() > 1 --><div class="galleryPager" data-bind="buttonset: {}">  <a href="javascript:void(0)" data-bind="click: items.moveFirst, button: { disabled: items.currentPage() == 1, icons: { primary: \'fa fa-fast-backward\' }, text: false }">First</a>  <a href="javascript:void(0)" data-bind="click: items.movePrevious, button: { disabled: items.currentPage() == 1, icons: { primary: \'fa fa-backward\' }, text: false }">Previous</a>  <span data-bind="button: { disabled: true, text: true, label: \' \'+items.currentPage()+\' di \'+items.pageCount()+\' \' }"> X di Y </span>  <a href="javascript:void(0)" data-bind="click: items.moveNext, button: { disabled: items.currentPage() == items.pageCount(), icons: { primary: \'fa fa-forward\' }, text: false }">Next</a>  <a href="javascript:void(0)" data-bind="click: items.moveLast, button: { disabled: items.currentPage() == items.pageCount(), icons: { primary: \'fa fa-fast-forward\' }, text: false }">Last</a></div><!-- /ko -->'),templateSystem.addTemplate("img-wysiwyg",'<table tabfocus="0" cellspacing="0" cellpadding="0" data-drop-content="Drop here" data-bind="style: _stylebind, click: function(obj, evt) { $root.selectItem(_item, _data); return true; }, clickBubble: false, fudroppable: { activeClass: \'ui-state-highlight\', hoverClass: \'ui-state-draghover\' }, droppable: { options: { accept: \'.image\', activeClass: \'ui-state-highlight\', hoverClass: \'ui-state-draghover\' }, data: _src, dragged: $root.fileToImage }, css: { selecteditem: $root.isSelectedItem(_item) }, scrollIntoView: $root.isSelectedItem(_item), attr: { \'data-drop-content\': $root.t(\'Drop here\'), width: _width, height: _height, align: _align }"  class="img-wysiwyg selectable-img" style="display: table;"><tr><td class="uploadzone">  <div class="mo-imgselectionhelper"></div>  <div class="mo-uploadzone"></div>  <div class="img-size" data-bind="text: _size">size</div>  <div class="midtools" data-bind="tooltips: {}">    <!-- ko if: _src() != \'\' -->    <div title="Remove image" class="tool delete" data-bind="attr: { title: $root.t(\'Remove image\') }, click: _src.bind(_src, \'\'), clickBubble: false"><i class="fa fa-fw fa-trash-o"></i></div>    <!-- ko if: typeof $root.editImage !== \'undefined\' -->    <div title="Open the image editing tool" class="tool edit" data-bind="attr: { title: $root.t(\'Open the image editing tool\') }, click: $root.editImage.bind($element, _src), clickBubble: false"><i class="fa fa-fw fa-pencil"></i></div>    <!-- /ko -->    <!-- /ko -->    <!-- ko if: _src() == \'\' -->    <div title="Upload a new image" data-bind="attr: { title: $root.t(\'Upload a new image\') }" class="tool upload" style="position: relative; overflow: hidden;"><i class="fa fa-fw fa-upload"></i>      <input class="fileupload nofile" type="file" name="files[]" data-bind="fileupload: { data: _src, onerror: $root.notifier.error, onfile: $root.loadImage, canvasPreview: true }" style="z-index: 20; position: absolute; top: 0; left: 0; right: 0; bottom: 0; min-width: 100%; min-height: 100%; font-size: 999px; text-align: right; filter: alpha(opacity=0); opacity: 0; outline: none; cursor: inherit; display: block">    </div>    <!-- /ko -->  </div>  <!-- ko template: _template --><!-- /ko -->  <!-- ko if: _src() == \'\' -->    <!--    <img style="display: block;" class="imgplaceholder" width="200" src="" alt="Insert an image here" data-bind="wysiwygSrc: { src: _src.preloaded, placeholder: _placeholdersrc, width: _width, height: _height, method: _method }" />    -->    <span class="fileuploadtext" style="text-align: center; display: -ms-flexbox; display: flex; align-items: center; flex-align: center; justify-content: center; padding: 1em; position: absolute; top: 0; left: 0; right: 0; bottom: 0;"><span class="textMiddle" style=" text-shadow: 1px 1px 0 #FFFFFF, 0 0 10px #FFFFFF; font-weight: bold;" data-bind="text: $root.t(\'Drop an image here\')">Drop an image here</span></span>  <!-- /ko -->  <!-- ko if: _src() != \'\' -->  <!--    <img style="display: block;" width="200" src="" data-bind="preloader: _src, wysiwygSrc: { src: _src.preloaded, placeholder: _placeholdersrc, width: _width, height: _height, method: _method }" />    -->  <!-- /ko -->  <!-- pulsante per la cancellazione -->  <div title="Drop an image here or click the upload button" data-bind="attr: { title: $root.t(\'Drop an image here or click the upload button\') }, tooltips: {}" class="workzone" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; overflow: hidden;">    <!-- ko if: _src.preloaded && _src() != _src.preloaded() -->PRELOADING....<!-- /ko -->    <!-- ko if: _src() != \'\' -->      <input class="fileupload withfile" type="file" name="files[]" data-bind="fileupload: { data: _src, onerror: $root.notifier.error, onfile: $root.galleryRecent.unshift.bind($root.galleryRecent), canvasPreview: true }" style="z-index: -20; position: absolute; top: 0; left: 0; right: 0; bottom: 0; min-width: 100%; min-height: 100%; font-zie: 999px; text-align: right; filter: alpha(opacity=0); opacity: 0; outline: none; cursor: inherit; display: block">    <!-- /ko -->    <div class="progress" style="opacity: .5; width: 80%; margin-left: 10%; position: absolute; bottom: 30%; height: 20px; border: 2px solid black;">      <div class="progress-bar progress-bar-success" style="height: 20px; background-color: black; "></div>    </div>  </div></table>'),templateSystem.addTemplate("main",'<div id="page" style="display: none;" data-bind="visible: true, css: { withToolbox: $root.showToolbox, withPreviewFrame: showPreviewFrame }">  <div id="main-edit-area" data-bind="click: function(obj, evt) { $root.selectBlock(null); return true; }, clickBubble: false">    <!-- ko withProperties: { templateMode: \'wysiwyg\', templateModeFallback: \'show\' } -->    <div id="main-wysiwyg-area" data-bind="wysiwygScrollfix: true, scrollable: true, fudroppable: { active: draggingImage }, css: { isdragging: dragging, isdraggingimg: draggingImage }, block: content"></div>    <!-- /ko -->  </div>  <div id="toolbar" class="mo" data-bind="tooltips: {}">    <!-- ko if: typeof $root.undo != \'undefined\' -->    <span data-bind="buttonset: { }" class="leftButtons">    <a title="Undo last operation" href="javascript:void(0)" data-bind="attr: { title: $root.t(\'Undo last operation\') }, click: $root.undo.execute, clickBubble: false, button: { disabled: !$root.undo.enabled(), icons: { primary: \'fa fa-reply\' }, label: $root.undo.name, text: true }">UNDO</a>    <a title="Redo last operation" href="javascript:void(0)" data-bind="attr: { title: $root.t(\'Redo last operation\') }, click: $root.redo.execute, clickBubble: false, button: { disabled: !$root.redo.enabled(), icons: { primary: \'fa fa-share\' }, label: $root.redo.name, text: true }">REDO</a>    </span>    <!-- ko if: $root.debug -->    <a href="javascript:void(0)" data-bind="click: $root.undoReset, clickBubble: false, button: { disabled: !$root.undo.enabled() && !$root.redo.enabled(), label: \'reset\', text: true }">RESET</a>    <!-- /ko -->    <!-- /ko -->    <span>    <input id="showGallery" type="checkbox" data-bind="checked: $root.showGallery, button: { refreshOn: $root.showGallery,     icons: { primary: \'fa fa-fw fa-picture-o\', secondary: null }, text: true, label: $root.t(\'Gallery\') }"><label title="Show image gallery" for="showGallery" data-bind="attr: { title: $root.t(\'Show image gallery\') }">show gallery</label></input>    </span>    <input id="previewFrameToggle" type="checkbox" data-bind="checked: $root.showPreviewFrame, button: { refreshOn: $root.showPreviewFrame, icons: { primary: \'fa fa-fw fa-tablet\', secondary: null }, text: false, label: $root.t(\'Preview\') }"><label title="Show live preview" for="previewFrameToggle" data-bind="attr: { title: $root.t(\'Show live preview\') }">PREVIEW</label></input>    <!-- ko if: $root.debug -->    <a href="javascript:void(0)" data-bind="click: $root.export, clickBubble: false, button: { label: \'export\', text: true }">EXPORT</a>    <input type="checkbox" data-bind="checked: $root.debug" /> debug    <a href="javascript:void(0)" data-bind="click: $root.loadDefaultBlocks, clickBubble: false, button: { icons: { primary: \'fa fa-fw fa-upload\' }, label: \'Default\', text: true }">LOAD BLOCKS</a>    [<a id="subscriptionsCount" href="javascript:viewModel.loopSubscriptionsCount()">subs</a>]    <!-- /ko -->    <span data-bind="visible: false">    <input type="checkbox" data-bind="checked: $root.showToolbox" /> toolbox    </span>    <div class="rightButtons">    <!-- ko if: typeof $root.save !== \'undefined\' -->    <a title="Save template" href="javascript:void(0)" data-bind="attr: { title: $root.t(\'Save template\') }, click: $root.save.execute, clickBubble: false, button: { disabled: !$root.save.enabled(), icons: { primary: \'fa fa-fw fa-cloud-upload\' }, label: $root.t($root.save.name), text: true }">SALVA</a>    <!-- /ko -->    <!-- ko if: typeof $root.test !== \'undefined\' -->    <a title="Show preview and send test" href="javascript:void(0)" data-bind="attr: { title: $root.t(\'Show preview and send test\') }, click: $root.test.execute, clickBubble: false, button: { disabled: !$root.test.enabled(), icons: { primary: \'fa fa-fw fa-paper-plane\' }, label: $root.t($root.test.name), text: true }">TEST</a>    <!-- /ko -->    <!-- ko if: typeof $root.download !== \'undefined\' -->    <form id="downloadForm" action="#" method="POST">    <input type="hidden" name="action" value="download" />    <input type="hidden" name="filename" value="email.html" />    <input type="hidden" name="html" id="downloadHtmlTextarea" />    <a title="Download template" href="javascript:void(0)" data-bind="attr: { title: $root.t(\'Download template\') }, click: $root.download.execute, clickBubble: false, button: { disabled: !$root.download.enabled(), icons: { primary: \'fa fa-fw fa-download\' }, label: $root.t($root.download.name), text: true }">DOWNLOAD</a>    </form>    <!-- /ko -->    </div>  </div>  <!-- ko if: $root.showToolbox -->  <div id="main-toolbox" class="mo" data-bind="scrollable: true, withProperties: { templateMode: \'edit\' }">    <div data-bind="template: { name: \'toolbox\' }"></div>  </div>  <!-- /ko -->    <div id="main-preview" class="mo" data-bind="scrollable: true, if: $root.showPreviewFrame">    <div id="preview-toolbar">      <div data-bind="visible: $root.showPreviewFrame, buttonset: { }" style="display: inline-block">        <input id="previewLarge" type="radio" name="previewMode" value="large" data-bind="checked: $root.previewMode, button: { text: false, label: \'large\', icons: { primary: \'fa fa-fw fa-desktop\' } }" />        <label for="previewLarge" title="Large screen" data-bind="attr: { title: $root.t(\'Large screen\') }">Large screen</label>        <input id="previewDesktop" type="radio" name="previewMode" value="desktop" data-bind="checked: $root.previewMode, button: { text: false, label: \'desktop\', icons: { primary: \'fa fa-fw fa-tablet\' } }" />        <label for="previewDesktop" title="Tablet" data-bind="attr: { title: $root.t(\'Tablet\') }">Tablet</label>        <input id="previewMobile" type="radio" name="previewMode" value="mobile" data-bind="checked: $root.previewMode, button: { text: false, label: \'mobile\', icons: { primary: \'fa fa-fw fa-mobile\' } }" />        <label for="previewMobile" title="Smartphone" data-bind="attr: { title: $root.t(\'Smartphone\') }">Smartphone</label>      </div>    </div>    <div id="frame-container" data-bind="css: { desktop: $root.previewMode() == \'desktop\', mobile: $root.previewMode() == \'mobile\', large: $root.previewMode() == \'large\' }">      <iframe data-bind="bindIframe: $data"></iframe>    </div>  </div>  <div class="mo" id="mo-body"></div>  <!-- TODO REMOVE ME  <div id="incompatible-browser" title="Unsupported browser" style="display: none" data-bind="attr: { title: $root.t(\'Usupported browser\') }, html: \'<p>Your browser is not supported.</p><p>Use a different browser or try updaring your browser.</p><p>Supported browsers: <ul><li>Internet Explorer &gt;= 10</li><li>Google Chrome &gt;= 30</li><li>Apple Safari &gt;= 5</li><li>Mozilla Firefix &gt;= 20</li></ul></p>\'">    Unsupported browser  </div>  -->  <div id="incompatible-template" title="Saved model is obsolete" style="display: none" data-bind="attr: { title: $root.t(\'Saved model is obsolete\') }, html: $root.t(\'<p>The saved model has been created with a previous, non completely compatible version, of the template</p><p>Some content or style in the model <b>COULD BE LOST</b> if you will <b>save</b></p><p>Contact us for more informations!</p>\')">    Incompatible template  </div>  <div id="fake-image-editor" title="Fake image editor" style="display: none" data-bind="attr: { title: $root.t(\'Fake image editor\') }, html: $root.t(\'<p>Fake image editor</p>\')">    <p>Fake image editor</p>  </div></div><!-- ko if: $root.logoPath --><div id="loading" class="loading" style="display: block; width: 300px; text-align: center; height: 32px; position: absolute; top:0; bottom: 0; left: 0; right: 0;  margin: auto;" data-bind="attr: { style: \'position: absolute; top: 5px; left: 6px; z-index: 150;\'}, css: { loading: false }">  <a href="/" data-bind="attr: { href: $root.logoUrl, alt: $root.logoAlt }"><img data-bind="attr: { src: $root.logoPath }" width="32" height="32" alt="mosaico" border="0" /></a>  <div style="opacity: 0" data-bind="visible: false">Oppps... !!</div></div><!-- /ko -->'),templateSystem.addTemplate("toolbox",'<div id="tooltabs" class="tabs_horizontal button_color" data-bind="tabs: { active: $root.selectedTool }">  <ul>    <li data-bind="tooltips: {}"><a title="Blocks ready to be added to the template" data-local="true" href="#toolblocks" data-bind="attr: { title: $root.t(\'Blocks ready to be added to the template\') }"><i class="fa fa-fw fa-cubes"></i> <span data-bind="html: $root.t(\'Blocks\')">Blocks</span></a></li>    <li data-bind="tooltips: {}"><a title="Edit content options" href="#toolcontents" data-local="true" data-bind="attr: { title: $root.t(\'Edit content options\') }"><i class="fa fa-fw fa-pencil"></i> <span data-bind="html: $root.t(\'Content\')">Content</span></a></li>    <li data-bind="tooltips: {}"><a title="Edit style options" href="#toolstyles" data-local="true" data-bind="attr: { title: $root.t(\'Edit style options\') }"><i class="fa fa-fw fa-paint-brush"></i> <span data-bind="html: $root.t(\'Style\')">Style</span></a></li>  </ul>  <div id="toolblocks" data-bind="scrollable: true">    <div class="block-list" data-bind="foreach: blockDefs" style="text-align: center">      <div class="draggable-item" data-bind="withProperties: { templateMode: \'show\' }">        <div class="block" data-bind="extdraggable: { connectClass: \'sortable-blocks-edit\', data: $data, dropContainer: \'#main-wysiwyg-area\', dragging: $root.dragging, \'options\': { handle: \'.handle\', distance: 10, \'appendTo\': \'#page\' } }, click: $root.addBlock" style="position: relative;">          <div title="Click or drag to add this block to the template" class="handle" data-bind="attr: { title: $root.t(\'Click or drag to add this block to the template\') }, tooltips: {}"></div>          <img data-bind="attr: { alt: $root.t(\'Block __name__\', { name: ko.utils.unwrapObservable(type) }), src: $root.templatePath(\'edres/\'+ko.utils.unwrapObservable(type)+\'.png\') }" alt="Block __name__" />        </div>        <a href="javascript:void(0)" class="addblockbutton" data-bind="click: $root.addBlock, button: { label: $root.t(\'Add\') }">Add</a>      </div>    </div>  </div>  <div id="toolcontents" data-bind="scrollable: true">    <!-- ko if: $root.selectedBlock() !== null -->    <div data-bind="block: $root.selectedBlock"></div>    <!-- /ko -->    <!-- ko if: $root.selectedBlock() == null -->    <div class="noSelectedBlock" data-bind="text: $root.t(\'By clicking on message parts you will select a block and content options, if any, will show here\')">By clicking on message parts you will select a block and content options, if any, will show here</div>    <!-- /ko -->    <!-- ko block: content --><!-- /ko -->  </div>    <div id="toolstyles" data-bind="scrollable: true, withProperties: { templateMode: \'styler\' }">    <!-- ko if: typeof $root.content().theme === \'undefined\' || typeof $root.content().theme().scheme === \'undefined\' || $root.content().theme().scheme() === \'custom\' -->      <!-- ko if: $root.selectedBlock() !== null -->      <div data-bind="block: $root.selectedBlock, css: { workLocal: $root.selectedBlock().customStyle, workGlobal: typeof $root.selectedBlock().customStyle === \'undefined\' || !$root.selectedBlock().customStyle() }"></div>      <!-- /ko -->      <!-- ko if: $root.selectedBlock() == null -->      <div class="noSelectedBlock" data-bind="text: $root.t(\'By clicking on message parts you will select a block and style options, if available, will show here\')">By clicking on message parts you will select a block and style options, if available, will show here</div>      <!-- /ko -->      <div class="workGlobalContent">      <!-- ko block: content --><!-- /ko -->      </div>    <!-- /ko -->  </div></div>        <div id="toolimages" class="slidebar" data-bind="scrollable: true, css: { hidden: $root.showGallery() === false }">  <div class="close" data-bind="click: $root.showGallery.bind($element, false);">X</div>  <span class="pane-title" data-bind="text: $root.t(\'Gallery:\')">Gallery:</span>  <div data-drop-content="Drop here" class="img-dropzone pane uploadzone" data-bind="attr: { \'data-drop-content\': $root.t(\'Drop here\') }, fudroppable: { activeClass: \'ui-state-highlight\', hoverClass: \'ui-state-draghover\' }">  <div class="mo-uploadzone" style="position: relative; padding: 2em; border: 2px dotted #808080">     <input class="fileupload" type="file" multiple name="files[]" data-bind="fileupload: { onerror: $root.notifier.error, onfile: $root.loadImage }" style="z-index: 10; position: absolute; top: 0; left: 0; right: 0; bottom: 0; min-width: 100%; min-height: 100%; font-zie: 999px; text-align: right; filter: alpha(opacity=0); opacity: 0; outline: none; cursor: inherit; display: block">     <span data-bind="text: $root.t(\'Click or drag files here\')">Click or drag files here</span>     <div class="workzone" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; overflow: hidden;">       <div class="progress" style="opacity: .5; width: 80%; margin-left: 10%; position: absolute; bottom: 30%; height: 20px; border: 2px solid black;">         <div class="progress-bar progress-bar-success" style="height: 20px; background-color: black; "></div>       </div>     </div>  </div>  </div>  <!-- ko if: $root.showGallery() -->  <div id="toolimagestab" class="tabs_horizontal" data-bind="tabs: { active: $root.selectedImageTab }">    <ul>      <li data-bind="tooltips: {}"><a title="Session images" data-local="true" href="#toolimagesrecent" data-bind="attr: { title: $root.t(\'Session images\') }, text: $root.t(\'Recents\')">Recents</a></li>      <li data-bind="tooltips: {}"><a title="Remote gallery" data-local="true" href="#toolimagesgallery" data-bind="attr: { title: $root.t(\'Remote gallery\') }, text: $root.t(\'Gallery\')">Gallery</a></li>    </ul>    <div id="toolimagesrecent">      <!-- ko if: galleryRecent().length == 0 --><div class="galleryEmpty" data-bind="text: $root.t(\'No images uploaded, yet\')">No images uploaded, yet</div><!-- /ko -->      <!-- ko template: {name: \'gallery-images\', data: { items: galleryRecent } } --># recent gallery #<!-- /ko -->    </div>    <div id="toolimagesgallery" style="text-align: center">    <!-- ko if: $root.galleryLoaded() === false --><a class="loadbutton" title="Show images from the gallery" href="javascript:void(0)" data-bind="attr: { title: $root.t(\'Show images from the gallery\') }, click: $root.loadGallery, button: { disabled: $root.galleryLoaded, icons: { primary: \'fa fa-fw fa-picture-o\' }, label: $root.galleryLoaded() == \'loading\' ? $root.t(\'Loading...\') : $root.t(\'Load gallery\'), text: true }"># load gally #</a><!-- /ko -->    <!-- ko if: $root.galleryLoaded() === \'loading\' --><div class="galleryEmpty" data-bind="text: $root.t(\'Loading gallery...\')">Loading gallery...</div><!-- /ko -->    <!-- ko if: $root.galleryLoaded() === 0 --><div class="galleryEmpty" data-bind="text: $root.t(\'The gallery is empty\')">The gallery is empty</div><!-- /ko -->    <!-- ko template: {name: \'gallery-images\', data: { items: galleryRemote } } --># remote gallery #<!-- /ko -->    </div>  </div>  <!-- /ko --></div><div id="tooldebug" class="slidebar" data-bind="css: { hidden: $root.debug() === false }">  <div class="close" data-bind="click: $root.debug.bind($element, false);">X</div>    <!-- ko if: $root.debug -->  Content:  <pre data-bind=\'text: ko.toJSON(content, null, 2)\' style="overflow: auto; height: 20%"></pre>  BlockDefs:  <pre data-bind=\'text: ko.toJSON(blockDefs, null, 2)\' style="overflow: auto; height: 20%"></pre>  <!-- /ko -->  <a href="javascript:void(0)" data-bind="click: $root.exportHTMLtoTextarea.bind($element, \'#outputhtml\'); clickBubble: false, button: { text: true, label:\'Generate\' }">Output</a>  <a href="javascript:void(0)" data-bind="click: $root.exportJSONtoTextarea.bind($element, \'#outputhtml\'); clickBubble: false, button: { text: true, label:\'Export\' }">Export</a>  <a href="javascript:void(0)" data-bind="click: $root.importJSONfromTextarea.bind($element, \'#outputhtml\'); clickBubble: false, button: { text: true, label:\'Import\' }">Import</a>  <textarea id="outputhtml" rows="10" style="width: 100%;"></textarea></div><div id="tooltheme" class="ui-widget slidebar" data-bind="css: { hidden: $root.showTheme() === false }">  <div class="close" data-bind="click: $root.showTheme.bind($element, false);">X</div>    <!-- ko withProperties: { templateMode: \'styler\' } -->    <!-- ko if: $root.showTheme -->      <!-- ko block: $root.content().theme --><!-- /ko -->    <!-- /ko -->  <!-- /ko --></div>')});

},{"../src/js/bindings/choose-template.js":30}],21:[function(require,module,exports){
// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

// when used in node, this will actually load the util module we depend on
// versus loading the builtin util module as happens otherwise
// this is a bug in node module loading as far as I am concerned
var util = require('util/');

var pSlice = Array.prototype.slice;
var hasOwn = Object.prototype.hasOwnProperty;

// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  }
  else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = stackStartFunction.name;
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function replacer(key, value) {
  if (util.isUndefined(value)) {
    return '' + value;
  }
  if (util.isNumber(value) && !isFinite(value)) {
    return value.toString();
  }
  if (util.isFunction(value) || util.isRegExp(value)) {
    return value.toString();
  }
  return value;
}

function truncate(s, n) {
  if (util.isString(s)) {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}

function getMessage(self) {
  return truncate(JSON.stringify(self.actual, replacer), 128) + ' ' +
         self.operator + ' ' +
         truncate(JSON.stringify(self.expected, replacer), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

function _deepEqual(actual, expected) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (util.isBuffer(actual) && util.isBuffer(expected)) {
    if (actual.length != expected.length) return false;

    for (var i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) return false;
    }

    return true;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!util.isObject(actual) && !util.isObject(expected)) {
    return actual == expected;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b) {
  if (util.isNullOrUndefined(a) || util.isNullOrUndefined(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b)) {
    return a === b;
  }
  var aIsArgs = isArguments(a),
      bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b);
  }
  var ka = objectKeys(a),
      kb = objectKeys(b),
      key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key])) return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  } else if (actual instanceof expected) {
    return true;
  } else if (expected.call({}, actual) === true) {
    return true;
  }

  return false;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (util.isString(expected)) {
    message = expected;
    expected = null;
  }

  try {
    block();
  } catch (e) {
    actual = e;
  }

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  if (!shouldThrow && expectedException(actual, expected)) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws.apply(this, [true].concat(pSlice.call(arguments)));
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/message) {
  _throws.apply(this, [false].concat(pSlice.call(arguments)));
};

assert.ifError = function(err) { if (err) {throw err;}};

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

},{"util/":26}],22:[function(require,module,exports){
exports.endianness = function () { return 'LE' };

exports.hostname = function () {
    if (typeof location !== 'undefined') {
        return location.hostname
    }
    else return '';
};

exports.loadavg = function () { return [] };

exports.uptime = function () { return 0 };

exports.freemem = function () {
    return Number.MAX_VALUE;
};

exports.totalmem = function () {
    return Number.MAX_VALUE;
};

exports.cpus = function () { return [] };

exports.type = function () { return 'Browser' };

exports.release = function () {
    if (typeof navigator !== 'undefined') {
        return navigator.appVersion;
    }
    return '';
};

exports.networkInterfaces
= exports.getNetworkInterfaces
= function () { return {} };

exports.arch = function () { return 'javascript' };

exports.platform = function () { return 'browser' };

exports.tmpdir = exports.tmpDir = function () {
    return '/tmp';
};

exports.EOL = '\n';

},{}],23:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],24:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],25:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],26:[function(require,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./support/isBuffer":25,"_process":23,"inherits":24}],27:[function(require,module,exports){
(function (global){
"use strict";function _canonicalize(e){var i=global.document.createElement("div");return i.innerHTML="<a></a>",i.firstChild.href=e,i.innerHTML=i.innerHTML,i.firstChild.href}var templateLoader=require("./template-loader.js"),console=require("./..\\..\\bower_components\\console-browserify\\index.js"),ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),$=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);require("./ko-bindings.js");var performanceAwareCaller=require("./timed-call.js").timedCall,addUndoStackExtensionMaker=require("./undomanager/undomain.js"),colorPlugin=require("./ext/color.js"),inlinerPlugin=require("./ext/inliner.js"),localStorageLoader=require("./ext/localstorage.js");if("undefined"==typeof ko)throw"Cannot find knockout.js library!";if("undefined"==typeof $)throw"Cannot find jquery library!";var applyBindingOptions=function(e,i){i.bindingHandlers.wysiwygSrc.convertedUrl=function(i,n,t,o){var a=e.imgProcessorBackend?e.imgProcessorBackend:"./upload",r=a.match(/^(https?:\/\/[^\/]*\/).*$/),l=i.match(/^(https?:\/\/[^\/]*\/).*$/);if(null===r||null!==l&&r[1]==l[1]){var d=a.indexOf("?")==-1?"?":"&";return a+d+"src="+encodeURIComponent(i)+"&method="+encodeURIComponent(n)+"&params="+encodeURIComponent(t+","+o)}return console.log("Cannot apply backend image resizing to non-local resources ",i,n,t,o,r,l),i+"?method="+n+"&width="+t+(null!==o?"&height="+o:"")},i.bindingHandlers.wysiwygSrc.placeholderUrl=function(i,n,t){return e.imgProcessorBackend+"?method=placeholder&params="+i+encodeURIComponent(",")+n},e&&e.tinymceConfig&&(i.bindingHandlers.wysiwyg.standardOptions=e.tinymceConfig),e&&e.tinymceConfigFull&&(i.bindingHandlers.wysiwyg.fullOptions=e.tinymceConfigFull)},start=function(e,i,n,t,o){templateLoader.fixPageEvents();var a=function(i){var n={messages:{unknownError:i.t("Unknown error"),uploadedBytes:i.t("Uploaded bytes exceed file size"),maxNumberOfFiles:i.t("Maximum number of files exceeded"),acceptFileTypes:i.t("File type not allowed"),maxFileSize:i.t("File is too large"),minFileSize:i.t("File is too small"),post_max_size:i.t("The uploaded file exceeds the post_max_size directive in php.ini"),max_file_size:i.t("File is too big"),min_file_size:i.t("File is too small"),accept_file_types:i.t("Filetype not allowed"),max_number_of_files:i.t("Maximum number of files exceeded"),max_width:i.t("Image exceeds maximum width"),min_width:i.t("Image requires a minimum width"),max_height:i.t("Image exceeds maximum height"),min_height:i.t("Image requires a minimum height"),abort:i.t("File upload aborted"),image_resize:i.t("Failed to resize image"),generic:i.t("Unexpected upload error")}};e&&e.fileuploadConfig&&(n=$.extend(!0,n,e.fileuploadConfig)),ko.bindingHandlers.fileupload.extendOptions=n},r=function(i){e&&e.strings&&(i.t=function(n,t){var o=e.strings[n];return"undefined"==typeof o&&(console.warn("Missing translation string for",n,": using default string"),o=n),i.tt(o,t)})},l=[r,addUndoStackExtensionMaker(performanceAwareCaller),colorPlugin,inlinerPlugin];if("undefined"!=typeof o)for(var d=0;d<o.length;d++)l.push(o[d]);l.push(a);var s=e.fileuploadConfig?e.fileuploadConfig.url:"/upload/";applyBindingOptions(e,ko),$("<!-- ko template: 'main' --><!-- /ko -->").appendTo(global.document.body),"undefined"==typeof i&&"undefined"!=typeof n&&(i=n.template),templateLoader.load(performanceAwareCaller,i,n,t,l,s)},initFromLocalStorage=function(e,i,n){try{var t=localStorageLoader(i,e.emailProcessorBackend),o="undefined"!=typeof n?n:[];o.push(t.extension);var a=_canonicalize(t.metadata.template);start(e,a,t.metadata,t.model,o)}catch(e){console.error("TODO not found ",i,e)}},init=function(e,i){var n=global.location.hash?global.location.href.split("#")[1]:void 0;if(e&&(e.template||e.data))if(e.data){var t=JSON.parse(e.data);start(e,void 0,t.metadata,t.content,i)}else start(e,e.template,void 0,void 0,i);else if(n&&7==n.length)initFromLocalStorage(e,n,i);else{if(!n)return!1;start(e,_canonicalize(n),void 0,void 0,i)}return!0};module.exports={isCompatible:templateLoader.isCompatible,init:init,start:start};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./..\\..\\bower_components\\console-browserify\\index.js":1,"./ext/color.js":59,"./ext/inliner.js":60,"./ext/localstorage.js":61,"./ko-bindings.js":62,"./template-loader.js":63,"./timed-call.js":64,"./undomanager/undomain.js":65}],28:[function(require,module,exports){
(function (global){
"use strict";var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),console=require("./..\\..\\..\\bower_components\\console-browserify\\index.js"),addScriptTemplate=function(t,e,n){var o=t.createElement("script");return o.setAttribute("type","text/html"),o.setAttribute("id",e),o.text=n,t.body.appendChild(o),o};ko.bindingHandlers.bindIframe={tpl:'<!DOCTYPE html>\r\n<html>\r\n<head>\r\n</head>\r\n<body><div data-bind="block: content"></div></body>\r\n</html>\r\n',init:function(t,e){function n(n){try{var o=t.contentDocument;o.open(),o.write(ko.bindingHandlers.bindIframe.tpl),o.close();try{var r=o.body;if(r){for(var i=t.contentWindow.parent.document.getElementsByTagName("script"),a=0;a<i.length;a++)"text/html"==i[a].getAttribute("type")&&i[a].getAttribute("id")&&addScriptTemplate(o,i[a].getAttribute("id"),i[a].innerHTML);var d=o.getElementsByTagName("HTML");ko.utils.domNodeDisposal.addDisposeCallback(t,function(){ko.cleanNode(d[0]||r)}),ko.applyBindings(e(),d[0]||r)}else console.log("no iframedoc",n)}catch(t){throw console.log("error reading iframe.body",t,n),t}}catch(t){throw console.log("error reading iframe contentDocument",t,n),t}}n("first call")}};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./..\\..\\..\\bower_components\\console-browserify\\index.js":1}],29:[function(require,module,exports){
(function (global){
"use strict";var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),console=require("./..\\..\\..\\bower_components\\console-browserify\\index.js");ko.bindingHandlers.withProperties={init:function(e,n,t,o,a){var l=a.createChildContext(a.$rawData,null,function(e){ko.utils.extend(e,n())});return ko.applyBindingsToDescendants(l,e),{controlsDescendantBindings:!0}}},ko.virtualElements.allowedBindings.withProperties=!0,ko.bindingHandlers.log={init:function(e,n,t,o,a){console.log("log",n())}},ko.bindingHandlers.block={templateExists:function(e){var n=global.document.getElementById(e);return!!n},_chooseTemplate:function(e,n,t,o){var a=n+"-"+t;if(ko.bindingHandlers.block.templateExists(a))return a;if("undefined"!=typeof o&&null!==o)return ko.bindingHandlers.block._chooseTemplate(e,n,o);var l=e?"array":"object-"+t;if(ko.bindingHandlers.block.templateExists(l))return l;throw"cannot find template for "+a+"/"+l},_displayMode:function(e,n){var t="undefined"!=typeof e.type?ko.utils.unwrapObservable(e.type):"notablock-"+typeof e,o="undefined"!=typeof e.splice,a=n.templateMode?n.templateMode:"show";return ko.bindingHandlers.block._chooseTemplate(o,t,a,n.templateModeFallback)},_makeTemplateValueAccessor:function(e,n){return function(){var t,o,a=e(),l=ko.utils.peekObservable(a);if(!l||"object"!=typeof l.data&&"function"!=typeof l.data)t=a;else if(t=l.data,"undefined"!=typeof l.template){var i=ko.utils.unwrapObservable(l.template),r=n.templateMode?n.templateMode:"show";o=ko.bindingHandlers.block._chooseTemplate(!1,i,r,n.templateModeFallback)}var d=ko.utils.unwrapObservable(t);if(ko.isObservable(d)&&console.log("doubleObservable",d),"undefined"==typeof o)if(void 0===t)o="empty";else try{o=ko.bindingHandlers.block._displayMode(d,n)}catch(e){throw console.log(e,d,n.$data,n.templateMode),e}return{name:o,data:t,templateEngine:ko.nativeTemplateEngine.instance}}},init:function(e,n,t,o,a){"undefined"==typeof n()&&console.log("found a null block: check ending commas in arrays defs in IE");var l=ko.bindingHandlers.block._makeTemplateValueAccessor(n,a);return ko.bindingHandlers.template.init(e,l)},update:function(e,n,t,o,a){var l=ko.bindingHandlers.block._makeTemplateValueAccessor(n,a);return ko.bindingHandlers.template.update(e,l,t,o,a)}},ko.expressionRewriting.bindingRewriteValidators.block=!1,ko.virtualElements.allowedBindings.block=!0;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./..\\..\\..\\bower_components\\console-browserify\\index.js":1}],30:[function(require,module,exports){
"use strict";module.exports=require("./string-template.js");

},{"./string-template.js":44}],31:[function(require,module,exports){
(function (global){
"use strict";require("./..\\..\\..\\bower_components\\evol-colorpicker\\js\\evol.colorpicker.min.js");var $=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),kojqui=(typeof window !== "undefined" ? window['kojqui'] : typeof global !== "undefined" ? global['kojqui'] : null),ColorPicker=function(){kojqui.BindingHandler.call(this,"colorpicker")};ColorPicker.prototype=kojqui.utils.createObject(kojqui.BindingHandler.prototype),ColorPicker.prototype.constructor=ColorPicker,ColorPicker.prototype.init=function(o,r,e){var i=r(),n=i.color,t=ko.computed({read:n,write:n,disposeWhenNodeIsRemoved:o}),c=function(){return t};ko.bindingHandlers.value.init(o,c,e);var u=function(o,r){"undefined"!=typeof r&&t(r)};$(o).on("change.color",u),ko.computed({read:function(){var r={color:ko.utils.unwrapObservable(t),showOn:"button"};for(var e in i)"color"!==e&&i.hasOwnProperty(e)&&(r[e]=ko.utils.unwrapObservable(i[e]));$(o).colorpicker(r)},disposeWhenNodeIsRemoved:o}),ko.utils.domNodeDisposal.addDisposeCallback(o,function(){$(o).off("change.color",u),$(o).colorpicker("destroy")})},kojqui.utils.register(ColorPicker);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./..\\..\\..\\bower_components\\evol-colorpicker\\js\\evol.colorpicker.min.js":2}],32:[function(require,module,exports){
(function (global){
"use strict";var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);ko.bindingHandlers.cssText={update:function(e,t,n){var r=ko.utils.unwrapObservable(t());try{e.innerText=r}catch(t){e.styleSheet||(e.innerHTML="a{}"),e.styleSheet.cssText=r}}};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],33:[function(require,module,exports){
(function (global){
"use strict";var $=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);!function(e){e(ko,$)}(function(e,t){var o="ko_sortItem",n="ko_dragItem",a=(e.utils.unwrapObservable,e.utils.domData.get);e.utils.domData.set;e.bindingHandlers.droppable={init:function(d,i,l,r,s){var u,p=t(d),b=e.utils.unwrapObservable(i())||{},c={};t.extend(!0,c,e.bindingHandlers.droppable),b.data?(b.options&&c.options&&(e.utils.extend(c.options,b.options),delete b.options),e.utils.extend(c,b)):c.data=b,u=c.options.drop,p.droppable(e.utils.extend(c.options,{drop:function(e,t){var d=t.draggable[0],i=a(d,o)||a(d,n);i&&(i.clone&&(i=i.clone()),c.dragged&&(i=c.dragged.call(this,i,e,t)||i),c.data&&c.data(i)),u&&u.apply(this,arguments)}})),void 0!==c.isEnabled&&e.computed({read:function(){p.droppable(e.utils.unwrapObservable(c.isEnabled)?"enable":"disable")},disposeWhenNodeIsRemoved:d})},update:function(e,t,o,n,a){},targetIndex:null,afterMove:null,beforeMove:null,options:{}}});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],34:[function(require,module,exports){
(function (global){
"use strict";var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),$=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),console=require("./..\\..\\..\\bower_components\\console-browserify\\index.js");ko.bindingHandlers.focusable={focus:function(){},blur:function(){},init:function(o){ko.utils.domNodeDisposal.addDisposeCallback(o,function(){$(o).off("focusin",ko.bindingHandlers.focusable.focus),$(o).off("focusout",ko.bindingHandlers.focusable.blur)}),$(o).on("focusin",ko.bindingHandlers.focusable.focus),$(o).on("focusout",ko.bindingHandlers.focusable.blur)}},ko.bindingHandlers.scrollable={scroll:function(){},init:function(o){ko.utils.domNodeDisposal.addDisposeCallback(o,function(){$(o).off("scroll",ko.bindingHandlers.scrollable.scroll)}),$(o).on("scroll",ko.bindingHandlers.scrollable.scroll)}};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./..\\..\\..\\bower_components\\console-browserify\\index.js":1}],35:[function(require,module,exports){
(function (global){
"use strict";var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);ko.extenders.paging=function(e,t){var n=ko.observable(t||10),r=ko.observable(1);return e.pageSize=ko.computed({read:n,write:function(e){n(e>0?e:10)}}),e.currentPage=ko.computed({read:r,write:function(t){r(t>e.pageCount()?e.pageCount():t<=0?1:t)}}),e.pageCount=ko.computed(function(){return Math.ceil(e().length/e.pageSize())||1}),e.currentPageData=ko.computed(function(){var t=n(),o=r(),u=t*(o-1),a=t*o;return e().slice(u,a)}),e.moveFirst=function(){e.currentPage(1)},e.movePrevious=function(){e.currentPage(e.currentPage()-1)},e.moveNext=function(){e.currentPage(e.currentPage()+1)},e.moveLast=function(){e.currentPage(e.pageCount())},e};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],36:[function(require,module,exports){
(function (global){
"use strict";var $=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),sortable=(typeof window !== "undefined" ? window['jQuery']['ui']['sortable'] : typeof global !== "undefined" ? global['jQuery']['ui']['sortable'] : null),draggable=(typeof window !== "undefined" ? window['jQuery']['ui']['draggable'] : typeof global !== "undefined" ? global['jQuery']['ui']['draggable'] : null),console=require("./..\\..\\..\\bower_components\\console-browserify\\index.js");if(require("./..\\..\\..\\bower_components\\knockout-sortable\\build\\knockout-sortable.min.js"),"undefined"==typeof sortable)throw"Cannot find jquery-ui sortable widget dependency!";if("undefined"==typeof draggable)throw"Cannot find jquery-ui sortable widget dependency!";var isDraggingHelper=function(e,n){e()?n.type==e()+"stop"&&e(!1):"dragstart"!=n.type&&"sortstart"!=n.type||e(n.type.substring(0,4))},makeExtendedValueAccessor=function(e){return function(){var n=e();ko.utils.peekObservable(n);ko.utils.unwrapObservable(n),"undefined"==n.options&&(n.options={});var r=n.options.start;n.options.start=function(e,t){if("undefined"!=typeof n.dragging&&ko.isWritableObservable(n.dragging)&&isDraggingHelper(n.dragging,e),"undefined"!=typeof n.dropContainer&&(n.scrollInterval=global.setInterval(function(){var e=$(n.dropContainer).scrollTop();$(n.dropContainer).scrollTop(e+n.adding)},20)),"undefined"!=typeof r)return r(e,t)};var t=n.options.stop;n.options.stop=function(e,r){if("undefined"!=typeof n.dragging&&ko.isWritableObservable(n.dragging)&&isDraggingHelper(n.dragging,e),"undefined"!=typeof n.dropContainer&&global.clearInterval(n.scrollInterval),"undefined"!=typeof t)return t(e,r)};var i=n.options.drag;return n.options.drag=function(e,r){if("undefined"!=typeof n.dropContainer){var t=e.pageY-$(n.dropContainer).offset().top,o=t-$(n.dropContainer).height();t<-20?n.adding=-20:t<0?n.adding=-10:t<10?n.adding=-5:o>20?n.adding=20:o>0?n.adding=10:o>-10?n.adding=5:n.adding=0}if("undefined"!=typeof i)return i(e,r)},n}};ko.bindingHandlers.extsortable={init:function(e,n,r,t,i){return ko.bindingHandlers.sortable.init(e,makeExtendedValueAccessor(n),r,t,i)},update:function(e,n,r,t,i){return ko.bindingHandlers.sortable.update(e,makeExtendedValueAccessor(n),r,t,i)}},ko.bindingHandlers.extdraggable={init:function(e,n,r,t,i){return ko.bindingHandlers.draggable.init(e,makeExtendedValueAccessor(n),r,t,i)},update:function(e,n,r,t,i){return ko.bindingHandlers.draggable.update(e,makeExtendedValueAccessor(n),r,t,i)}};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./..\\..\\..\\bower_components\\console-browserify\\index.js":1,"./..\\..\\..\\bower_components\\knockout-sortable\\build\\knockout-sortable.min.js":8}],37:[function(require,module,exports){
(function (global){
"use strict";var $=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),console=require("./..\\..\\..\\bower_components\\console-browserify\\index.js");ko.bindingHandlers.preloader={init:function(e,i){var o=i();if("undefined"==typeof o.preloaded){o.preloaded=ko.observable("");var r=function(e){if(e!=o.preloaded())if(""!==e){var i=new Image;i.onload=function(){o.preloaded(e)},i.onerror=function(){o.preloaded(e)},i.src=e}else o.preloaded(e)};o.subscribe(r),r(o())}}},ko.bindingHandlers.advattr={init:function(e,i,o,r,l){var a=ko.utils.unwrapObservable(i()||{});ko.utils.objectForEach(a,function(i,o){var r=e.getAttribute(i);if(ko.isWriteableObservable(o)){var l=o();l!=r&&(o(r),null!==l&&console.log("AdvAttr found a value different from the default",i,l,r))}})},update:function(e,i,o){var r=ko.utils.unwrapObservable(i())||{};ko.utils.objectForEach(r,function(i,o){o=ko.utils.unwrapObservable(o);var r=o===!1||null===o||void 0===o;r?e.removeAttribute(i):e.setAttribute(i,o.toString())})}},ko.bindingHandlers.advstyle={init:function(e,i,o,r,l){var a=ko.utils.unwrapObservable(i()||{});ko.utils.objectForEach(a,function(i,o){var r;if(i.match(/Px$/)?(i=i.substr(0,i.length-2),r=e.style[i],r.match(/px$/)?r=r.replace(/px$/,""):console.log("AdvStyle binding found an unexpected default value",i,r,e)):r=e.style[i],ko.isWriteableObservable(o)){var l=o();l!=r&&(o(r),null!==l&&console.log("AdvStyle found a value different from the default",i,l,r))}})},update:function(e,i){var o=ko.utils.unwrapObservable(i()||{});ko.utils.objectForEach(o,function(i,o){o=ko.utils.unwrapObservable(o),null!==o&&"undefined"!=typeof o&&o!==!1||(o=""),i.match(/Px$/)&&(i=i.substr(0,i.length-2),o+="px"),e.style[i]=o})}},ko.bindingHandlers.domlog={init:function(e,i){console.log("initialized",e),ko.utils.domNodeDisposal.addDisposeCallback(e,function(){console.log("disposed",e)})}},ko.bindingHandlers.fudroppable={init:function(e,i){var o=i()||{},r={},l=function(e,i,o,r,l,a){e[i]?global.clearTimeout(e[i]):("undefined"!=typeof r&&o.classList.add(r),ko.isWriteableObservable(l)&&!l()&&l(!0));var t=function(){e[i]=null,"undefined"!=typeof r&&o.classList.remove(r),ko.isWriteableObservable(l)&&l()&&l(!1)};"dragleave"==a.type?t():e[i]=global.setTimeout(t,500)};(o.active||o.activeClass)&&ko.utils.registerEventHandler(global,"dragover",l.bind(void 0,r,"activeTimeout",e,o.activeClass,o.active)),o.hoverClass&&ko.utils.registerEventHandler(e,"dragover dragenter dragleave",l.bind(void 0,r,"hoverTimeout",e,o.hoverClass,void 0))}},ko.bindingHandlers.fileupload={extendOptions:{},remoteFilePreprocessor:function(e){return e},init:function(e,i){ko.utils.domNodeDisposal.addDisposeCallback(e,function(){$(e).fileupload("destroy")}),global.webkitURL?$(e).attr("title"," "):$(e).attr("title","")},update:function(e,i){var o=i()||{},r=$(e),l=r.parents(".uploadzone"),a=o.data;o.data=void 0;var t=o.canvasPreview;ko.utils.extend(o,{url:"/upload/",dataType:"json",dropZone:l.find(".mo-uploadzone")[0],autoUpload:!0,acceptFileTypes:/(\.|\/)(gif|jpe?g|png)$/i,maxFileSize:1048576,disableImageResize:/Android(?!.*Chrome)|Opera/.test(global.navigator.userAgent),previewMaxWidth:200,previewMaxHeight:200,previewCrop:!1,replaceFileInput:!1,messages:{unknownError:"Unknown error",uploadedBytes:"Uploaded bytes exceed file size",maxNumberOfFiles:"Maximum number of files exceeded",acceptFileTypes:"File type not allowed",maxFileSize:"File is too large",minFileSize:"File is too small",post_max_size:"The uploaded file exceeds the post_max_size directive in php.ini",max_file_size:"File is too big",min_file_size:"File is too small",accept_file_types:"Filetype not allowed",max_number_of_files:"Maximum number of files exceeded",max_width:"Image exceeds maximum width",min_width:"Image requires a minimum width",max_height:"Image exceeds maximum height",min_height:"Image requires a minimum height",abort:"File upload aborted",image_resize:"Failed to resize image",generic:"Unexpected upload error"}}),ko.utils.extend(o,ko.bindingHandlers.fileupload.extendOptions);var n=0,s="",d=function(){0===--n&&(a&&a(s),s="",t&&(l.find("img").show(),l.find("canvas").remove()),l.removeClass("uploading"),l.find(".progress-bar").css("width",0))},u=function(e){if("object"==typeof o.messages&&null!==o.messages){var i=e.match(/^([^ ]+)(.*)$/);if(i&&"undefined"!=typeof o.messages[i[1]])return o.messages[i[1]]+i[2]}return e};r.fileupload(o);for(var f=["fileuploadadd","fileuploadprocessalways","fileuploadprogressall","fileuploaddone","fileuploadfail"],p=function(e,i){if("fileuploadadd"==e.type&&n++,"fileuploadfail"==e.type&&(console.log("fileuploadfail",e,i),o.onerror&&(""===i.errorThrown&&"error"==i.textStatus?o.onerror(u("generic")):o.onerror(u("generic ("+i.errorThrown+")"))),d()),"fileuploaddone"==e.type)if("undefined"!=typeof i.result.files[0].url){if(o.onfile)for(var r=0;r<i.result.files.length;r++)i.result.files[r]=ko.bindingHandlers.fileupload.remoteFilePreprocessor(i.result.files[r]),o.onfile(i.result.files[r]);if(""===s&&(s=i.result.files[0].url),t){var a=new Image;a.onload=d,a.onerror=d,a.src=i.result.files[0].url}else d()}else"undefined"!=typeof i.result.files[0].error?(console.log("remote error",e,i),o.onerror&&o.onerror(u(i.result.files[0].error)),d()):(console.log("unexpected error",e,i),o.onerror&&o.onerror(u("generic (Unexpected Error retrieving uploaded file)")),d());if("fileuploadprocessalways"==e.type){var f=i.index,p=i.files[f];if(p.preview&&0===f&&0===l.find("canvas").length){if(t){var c=$(p.preview).css("width","100%");l.find("img").hide(),l.prepend(c)}l.addClass("uploading"),l.find(".progress-bar").css("width",0)}p.error&&(o.onerror&&o.onerror(u(p.error)),d())}if("fileuploadprogressall"==e.type){var v=parseInt(i.loaded/i.total*100,10);l.find(".progress-bar").css("width",v+"%")}},c=f.length-1;c>=0;c--){var v=f[c];r.on(v,p)}$.support.fileInput||r.prop("disabled",!0).parent().addClass("disabled")}};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./..\\..\\..\\bower_components\\console-browserify\\index.js":1}],38:[function(require,module,exports){
(function (global){
"use strict";var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),console=require("./..\\..\\..\\bower_components\\console-browserify\\index.js");ko.bindingHandlers.ifSubs={cloneNodes:function(e,o){for(var n=0,i=e.length,t=[];n<i;n++){var r=e[n].cloneNode(!0);t.push(o?ko.cleanNode(r):r)}return t},init:function(e,o,n,i,t){var r,s,u=o();return"undefined"==typeof u.data.subsCount&&ko.extenders.subscriptionsCount(u.data),ko.computed(function(){var n,i,p,d=ko.utils.unwrapObservable(o().data.subsCount),b=!s;p=-("undefined"!=typeof o().gutter?o().gutter:1),n=d+(r?p:0)>=ko.utils.unwrapObservable(u.threshold),"undefined"!=typeof o().not&&o().not&&(n=!n),i=b||n!==r,i&&(b&&ko.computedContext.getDependenciesCount()&&(s=ko.bindingHandlers.ifSubs.cloneNodes(ko.virtualElements.childNodes(e),!0)),n?(b||ko.virtualElements.setDomNodeChildren(e,ko.bindingHandlers.ifSubs.cloneNodes(s)),ko.applyBindingsToDescendants(t,e)):ko.virtualElements.emptyNode(e),r=n)},null,{disposeWhenNodeIsRemoved:e}),{controlsDescendantBindings:!0}}},ko.virtualElements.allowedBindings.ifSubs=!0;var beforeSubscriptionProp,afterSubscriptionProp;if("function"==typeof ko.subscription&&"undefined"!=typeof ko.isWritableObservable)beforeSubscriptionProp="beforeSubscriptionAdd",afterSubscriptionProp="afterSubscriptionRemove";else if("3.2.0"==ko.version)beforeSubscriptionProp="va",afterSubscriptionProp="nb";else if("3.3.0"==ko.version)beforeSubscriptionProp="ja",afterSubscriptionProp="ua";else if("3.4.0"==ko.version)beforeSubscriptionProp="sa",afterSubscriptionProp="Ia";else{if("3.4.1"!=ko.version)throw"Unsupported minimized Knockout version "+ko.version+" (supported DEBUG or minimized 3.2.0 ... 3.4.1)";beforeSubscriptionProp="sa",afterSubscriptionProp="Ia"}ko.extenders.subscriptionsCount=function(e,o,n){if("undefined"==typeof e.subsCount){e.subsCount=ko.observable(e.getSubscriptionsCount()).extend({notify:"always"});var i=e[beforeSubscriptionProp],t=e[afterSubscriptionProp];e[beforeSubscriptionProp]=function(t){i&&i.call(e,t);var r=e.getSubscriptionsCount()+1;"undefined"!=typeof o&&r!=o&&"undefined"!=typeof n&&r!=n||e.subsCount(r)},e[afterSubscriptionProp]=function(i){t&&t.call(e,i);var r=e.getSubscriptionsCount();"undefined"!=typeof o&&r!=o&&"undefined"!=typeof n&&r!=n||e.subsCount(r)}}else console.log("already applied subscriptionCount to observable");return null};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./..\\..\\..\\bower_components\\console-browserify\\index.js":1}],39:[function(require,module,exports){
(function (global){
"use strict";var $=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),spinner=(typeof window !== "undefined" ? window['jQuery']['ui']['spinner'] : typeof global !== "undefined" ? global['jQuery']['ui']['spinner'] : null),console=require("./..\\..\\..\\bower_components\\console-browserify\\index.js");if("undefined"==typeof spinner)throw"Cannot find jquery-ui spinner widget dependency!";$.widget("ui.spinner",spinner,{_adjustValue:function(e){var n=(this._super(e),this.options);return e=parseFloat(e.toFixed(this._precision())),null!==n.max&&e>n.max?n.max:null!==n.min&&e<n.min?n.min:e}});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./..\\..\\..\\bower_components\\console-browserify\\index.js":1}],40:[function(require,module,exports){
(function (global){
"use strict";var $=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),console=require("./..\\..\\..\\bower_components\\console-browserify\\index.js"),tabs=(typeof window !== "undefined" ? window['jQuery']['ui']['tabs'] : typeof global !== "undefined" ? global['jQuery']['ui']['tabs'] : null);if("undefined"==typeof tabs)throw"Cannot find jquery-ui tabs widget dependency!";$.widget("ui.tabs",tabs,{_isLocal:function(e){return"true"==e.getAttribute("data-local")||this._superApply(arguments)}});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./..\\..\\..\\bower_components\\console-browserify\\index.js":1}],41:[function(require,module,exports){
(function (global){
"use strict";function pushTemplate(e,t){var n=global.document.createElement("script");n.setAttribute("type","text/html"),n.setAttribute("id",e),n.text=t,global.document.body.appendChild(n)}function removeTemplate(e){var t=global.document.getElementById(e);t&&t.parentNode.removeChild(t)}function init(){}function getTemplateContent(e){var t=global.document.getElementById(e);return t?t.innerHTML:void 0}module.exports={init:init,addTemplate:pushTemplate,removeTemplate:removeTemplate,getTemplateContent:getTemplateContent};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],42:[function(require,module,exports){
(function (global){
"use strict";var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),$=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),console=require("./..\\..\\..\\bower_components\\console-browserify\\index.js"),tinymce=(typeof window !== "undefined" ? window['tinymce'] : typeof global !== "undefined" ? global['tinymce'] : null),timeout,render=function(){timeout=void 0,"undefined"!=typeof tinymce.activeEditor&&null!==tinymce.activeEditor&&"undefined"!=typeof tinymce.activeEditor.theme&&null!==tinymce.activeEditor.theme&&"undefined"!=typeof tinymce.activeEditor.theme.panel&&null!==tinymce.activeEditor.theme.panel&&"undefined"!=typeof tinymce.activeEditor.theme.panel.visible&&(("undefined"!=typeof tinymce.activeEditor.theme.panel._visible&&tinymce.activeEditor.theme.panel._visible&&tinymce.activeEditor.theme.panel._fixed||"undefined"!=typeof tinymce.activeEditor.theme.panel.state&&tinymce.activeEditor.theme.panel.state.get("visible")&&tinymce.activeEditor.theme.panel.state.get("fixed"))&&tinymce.activeEditor.theme.panel.fixed(!1),tinymce.activeEditor.nodeChanged(),tinymce.activeEditor.theme.panel.visible(!0),tinymce.activeEditor.theme.panel.layoutRect().y<=40&&tinymce.activeEditor.theme.panel.moveBy(0,40-tinymce.activeEditor.theme.panel.layoutRect().y))};ko.bindingHandlers.wysiwygScrollfix={scroll:function(e){timeout&&global.clearTimeout(timeout),timeout=global.setTimeout(render,50)},init:function(e){ko.utils.domNodeDisposal.addDisposeCallback(e,function(){$(e).off("scroll",ko.bindingHandlers.wysiwygScrollfix.scroll)}),$(e).on("scroll",ko.bindingHandlers.wysiwygScrollfix.scroll)}};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./..\\..\\..\\bower_components\\console-browserify\\index.js":1}],43:[function(require,module,exports){
(function (global){
"use strict";var $=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),console=require("./..\\..\\..\\bower_components\\console-browserify\\index.js"),_scrollIntoView=function(o,e,l,n){var r=l.scrollTop(),t=r-n-(e?20:-20),i="undefined"!=typeof l[0].nodeType;if(i){var s={scrollTop:""+Math.round(t)+"px"},c=Math.round(Math.abs(t-r));l.stop().animate(s,c)}else l.scrollTop(t)};ko.bindingHandlers.scrollIntoView={update:function(o,e,l,n,r){var t=ko.utils.unwrapObservable(e());if(t)try{for(;8===o.nodeType;)o=o.nextSibling;if(8!==o.nodeType){var i,s=$(o).scrollParent(),c=!1;9==s[0].nodeType?(s=$(s[0].defaultView),i=0,c=!0):i=s.offset().top;var a=s.height(),p=s.scrollTop(),u=i+a,d=$(o),f=d.offset().top;c&&(f-=p);var w=d.height(),v=f+w;f>i&&f+w<u||(w<a?(f<i&&_scrollIntoView(o,!0,s,i-f),v>u&&_scrollIntoView(o,!1,s,u-v)):(f<i&&v<u&&_scrollIntoView(o,!1,s,u-v),f>i&&v>u&&_scrollIntoView(o,!0,s,i-f)))}}catch(o){console.log("TODO exception scrolling into view",o)}}},ko.virtualElements.allowedBindings.scrollIntoView=!0;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./..\\..\\..\\bower_components\\console-browserify\\index.js":1}],44:[function(require,module,exports){
(function (global){
"use strict";function createStringTemplateEngine(e){var t=e.makeTemplateSource;return e.makeTemplateSource=function(e){return"undefined"!=typeof templates[e]?new ko.templateSources.stringTemplate(e,templates[e]):t(e)},e}function pushTemplate(e,t){templates[e]=t}function removeTemplate(e){"undefined"!=typeof templates[e]?templates[e]=void 0:origTemplateSystem.removeTemplate(e)}function init(){ko.setTemplateEngine(createStringTemplateEngine(new ko.nativeTemplateEngine))}function getTemplateContent(e){return"undefined"!=typeof templates[e]?templates[e]:origTemplateSystem.getTemplateContent(e)}var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),origTemplateSystem=require("./script-template.js"),templates={};ko.templateSources.stringTemplate=function(e,t){this.templateName=e,this.template=t,this._data={}},ko.utils.extend(ko.templateSources.stringTemplate.prototype,{data:function(e,t){return 1===arguments.length?this._data[e]:void(this._data[e]=t)},text:function(e){return 0===arguments.length?this.template:void(this.template=e)}}),module.exports={init:init,addTemplate:pushTemplate,removeTemplate:removeTemplate,getTemplateContent:getTemplateContent};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./script-template.js":41}],45:[function(require,module,exports){
(function (global){
"use strict";var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),$=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),kojqui=(typeof window !== "undefined" ? window['kojqui'] : typeof global !== "undefined" ? global['kojqui'] : null),console=require("./..\\..\\..\\bower_components\\console-browserify\\index.js"),extendValueAccessor=function(e,n){return function(){return ko.utils.extend(n,e()),n}},options={show:{delay:500},track:!0,items:'[title][title!=""][title!=" "]'};ko.bindingHandlers.tooltips={init:function(e,n,t,o,i){if("undefined"!=typeof $.fn.tooltip&&"undefined"!=typeof ko.bindingHandlers.tooltip)return ko.bindingHandlers.tooltip.init(e,extendValueAccessor(n,options),t,o,i)},update:function(e,n,t,o,i){if("undefined"!=typeof $.fn.tooltip&&"undefined"!=typeof ko.bindingHandlers.tooltip)return ko.bindingHandlers.tooltip.update(e,extendValueAccessor(n,options),t,o,i)}};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./..\\..\\..\\bower_components\\console-browserify\\index.js":1}],46:[function(require,module,exports){
(function (global){
"use strict";var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),console=require("./..\\..\\..\\bower_components\\console-browserify\\index.js");ko.bindingHandlers.validatedValue={init:function(e,n,i){var t=n;if("undefined"!=typeof e.pattern){var a=new RegExp("^(?:"+e.pattern+")$"),o=ko.computed({read:function(){var i=ko.utils.unwrapObservable(n()),t=null===i||""===i||a.test(i);return t?e.classList.remove("invalid"):e.classList.add("invalid"),i},write:ko.isWriteableObservable(n())&&function(i){ko.selectExtensions.writeValue(e,i);var t=ko.selectExtensions.readValue(e);n()(t)},disposeWhenNodeIsRemoved:e});t=function(){return o}}ko.bindingHandlers.value.init(e,t,i)}},ko.expressionRewriting._twoWayBindings.validatedValue=!0;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./..\\..\\..\\bower_components\\console-browserify\\index.js":1}],47:[function(require,module,exports){
(function (global){
"use strict";var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),console=require("./..\\..\\..\\bower_components\\console-browserify\\index.js");ko.bindingHandlers.uniqueId={currentIndex:0,init:function(e,n){var t=ko.utils.unwrapObservable(n())||{};if(""===t.id()){var i,l,r;r="ko_"+("undefined"!=typeof t.type?ko.utils.unwrapObservable(t.type):"block");do i=r+"_"+ ++ko.bindingHandlers.uniqueId.currentIndex,l=global.document.getElementById(i);while(l);t.id(i)}}},ko.virtualElements.allowedBindings.uniqueId=!0,ko.bindingHandlers.virtualAttr={update:function(e,n){8!==e.nodeType&&ko.bindingHandlers.attr.update(e,n)}},ko.virtualElements.allowedBindings.virtualAttr=!0,ko.bindingHandlers.virtualAttrStyle={update:function(e,n,t,i,l){if(8!==e.nodeType){var r="undefined"==typeof l.templateMode||"wysiwyg"!=l.templateMode,d=["style"];r&&d.push("replacedstyle");for(var o=ko.utils.unwrapObservable(n()),a=0;a<d.length;a++){var u=d[a],s=o===!1||null===o||void 0===o;s?e.removeAttribute(u):e.setAttribute(u,o.toString())}}}},ko.virtualElements.allowedBindings.virtualAttrStyle=!0,ko.bindingHandlers.virtualStyle={update:function(e,n){8!==e.nodeType&&ko.bindingHandlers.style.update(e,n)}},ko.virtualElements.allowedBindings.virtualStyle=!0,ko.bindingHandlers.virtualHtml={init:ko.bindingHandlers.html.init,update:function(e,n){if(8===e.nodeType){var t=ko.utils.unwrapObservable(n());if(ko.virtualElements.emptyNode(e),null!==t&&void 0!==t){"string"!=typeof t&&(t=t.toString());var i=ko.utils.parseHtmlFragment(t);if(i)for(var l=e.nextSibling,r=0,d=i.length;r<d;r++)l.parentNode.insertBefore(i[r],l)}}else ko.bindingHandlers.html.update(e,n);return{controlsDescendantBindings:!0}}},ko.virtualElements.allowedBindings.virtualHtml=!0;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./..\\..\\..\\bower_components\\console-browserify\\index.js":1}],48:[function(require,module,exports){
(function (global){
"use strict";var tinymce=(typeof window !== "undefined" ? window['tinymce'] : typeof global !== "undefined" ? global['tinymce'] : null),$=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),console=require("./..\\..\\..\\bower_components\\console-browserify\\index.js");require("./eventable.js"),ko.bindingHandlers.wysiwygOrHtml={init:function(e,t,n,i,o){var r="undefined"==typeof o.templateMode||"wysiwyg"!=o.templateMode;return r?ko.bindingHandlers.virtualHtml.init():ko.bindingHandlers.wysiwyg.init(e,t,n,i,o)},update:function(e,t,n,i,o){var r="undefined"==typeof o.templateMode||"wysiwyg"!=o.templateMode;if(r)return ko.bindingHandlers.virtualHtml.update(e,t,n,i,o)}},ko.virtualElements.allowedBindings.wysiwygOrHtml=!0,ko.bindingHandlers.wysiwygHref={init:function(e,t,n,i,o){if(8!==e.nodeType){var r=(t(),"undefined"==typeof o.templateMode||"wysiwyg"!=o.templateMode);if(r)e.setAttribute("target","_new");else{var l=n();"undefined"!=typeof l.wysiwygOrHtml?e.setAttribute("href","javascript:void(0)"):(e.removeAttribute("href"),e.setAttribute("disabledhref","#"))}}},update:function(e,t,n,i,o){if(8!==e.nodeType){var r="undefined"==typeof o.templateMode||"wysiwyg"!=o.templateMode,l=ko.utils.unwrapObservable(t());r&&(l===!1||null===l||void 0===l?e.removeAttribute("href"):e.setAttribute("href",l.toString()))}}},ko.virtualElements.allowedBindings.wysiwygHref=!0,ko.bindingHandlers.wysiwygSrc={convertedUrl:function(e,t,n,i){var o=e+"?method="+t+"&width="+n+(null!==i?"&height="+i:"");return console.log("basic converterUrl",o),o},placeholderUrl:function(e,t,n){},update:function(e,t,n,i,o){var r=ko.utils.unwrapObservable(t()),l=ko.utils.unwrapObservable(r.src),a=ko.utils.unwrapObservable(r.placeholder),s=ko.utils.unwrapObservable(r.width),d=ko.utils.unwrapObservable(r.height);if(l===!1||null===l||void 0===l||""===l)"object"==typeof a&&null!==a?e.setAttribute("src",ko.bindingHandlers.wysiwygSrc.placeholderUrl(a.width,a.height,a.text)):e.removeAttribute("src");else{var u=ko.utils.unwrapObservable(r.method);u||(u=s>0&&d>0?"cover":"resize");var g=ko.bindingHandlers.wysiwygSrc.convertedUrl(l.toString(),u,s,d);e.setAttribute("src",g)}"undefined"!=typeof s&&null!==s?e.setAttribute("width",s):e.removeAttribute("width"),"undefined"!=typeof d&&null!==d?e.setAttribute("height",d):e.removeAttribute("height")}},ko.bindingHandlers.wysiwygId={init:function(e,t,n,i,o){var r="undefined"==typeof o.templateMode||"wysiwyg"!=o.templateMode;r||e.setAttribute("id",ko.utils.unwrapObservable(t()))},update:function(e,t,n,i,o){var r="undefined"==typeof o.templateMode||"wysiwyg"!=o.templateMode;r||e.setAttribute("id",ko.utils.unwrapObservable(t()))}},ko.virtualElements.allowedBindings.wysiwygId=!0,ko.bindingHandlers.wysiwygClick={init:function(e,t,n,i,o){var r="undefined"==typeof o.templateMode||"wysiwyg"!=o.templateMode;r||ko.bindingHandlers.click.init(e,t,n,i,o)}},ko.virtualElements.allowedBindings.wysiwygClick=!0,ko.bindingHandlers.wysiwygCss={update:function(e,t,n,i,o){var r="undefined"==typeof o.templateMode||"wysiwyg"!=o.templateMode;r||ko.bindingHandlers.css.update(e,t,n,i,o)}},ko.virtualElements.allowedBindings.wysiwygCss=!0,ko.bindingHandlers.wysiwygImg={makeTemplateValueAccessor:function(e,t){return function(){var n="undefined"!=typeof t.templateMode&&"wysiwyg"==t.templateMode,i=e(),o=ko.utils.peekObservable(i);return ko.utils.unwrapObservable(i),{name:n?o._editTemplate:o._template,templateEngine:ko.nativeTemplateEngine.instance}}},init:function(e,t,n,i,o){return ko.bindingHandlers.template.init(e,ko.bindingHandlers.wysiwygImg.makeTemplateValueAccessor(t,o))},update:function(e,t,n,i,o){return o=o.extend(t()),ko.bindingHandlers.template.update(e,ko.bindingHandlers.wysiwygImg.makeTemplateValueAccessor(t,o),n,i,o)}},ko.virtualElements.allowedBindings.wysiwygImg=!0,ko.bindingHandlers.wysiwyg={currentIndex:0,standardOptions:{},fullOptions:{toolbar1:"bold italic forecolor backcolor hr styleselect removeformat | link unlink | pastetext code",plugins:["link hr paste lists textcolor code"]},init:function(e,t,n,i,o){ko.bindingHandlers.focusable.init(e),ko.utils.domNodeDisposal.addDisposeCallback(e,function(){tinymce.remove("#"+e.getAttribute("id"))});var r=t();if(!ko.isObservable(r))throw"Wysiwyg binding called with non observable";if(8===e.nodeType)throw"Wysiwyg binding called on virtual node, ignoring...."+e.innerHTML;var l=e.getAttribute("id");l||(l="wysiwyg_"+ ++ko.bindingHandlers.wysiwyg.currentIndex,e.setAttribute("id",l));var a,s="DIV"==e.tagName||"TD"==e.tagName,d=!1,u=!1,g={selector:"#"+l,inline:!0,hidden_input:!1,plugins:["paste"],toolbar1:"bold italic",toolbar2:"",preview_styles:!1,paste_as_text:!0,language:"en",schema:"html5",extended_valid_elements:"strong/b,em/i,*[*]",menubar:!1,skin:"gray-flat",setup:function(e){e.on("change redo undo",function(){d||(u=!0,r(e.getContent({format:"raw"})),u=!1)}),e.on("focus",function(){e.nodeChanged(),e.getElement().click()}),e.on("BeforeSetContent",function(e){e.initial&&(e.format="raw")}),a=e}};return ko.utils.extend(g,ko.bindingHandlers.wysiwyg.standardOptions),s&&ko.utils.extend(g,ko.bindingHandlers.wysiwyg.fullOptions),global.setTimeout(function(){tinymce.init(g)}),ko.computed(function(){var n=ko.utils.unwrapObservable(t());if(!u){try{d=!0,"undefined"!=typeof a?a.setContent(n,{format:"raw"}):ko.utils.setHtml(e,n)}catch(e){console.log("TODO exception setting content to editable element",typeof a,e)}d=!1}},null,{disposeWhenNodeIsRemoved:e}),{controlsDescendantBindings:!0}}};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./..\\..\\..\\bower_components\\console-browserify\\index.js":1,"./eventable.js":34}],49:[function(require,module,exports){
"use strict";var console=require("./..\\..\\..\\bower_components\\console-browserify\\index.js"),checkModel=function(e,o,t,n,l){var f,i,p,r=0;if("undefined"==typeof l&&(l=!1),"undefined"!=typeof o&&"function"==typeof o.splice)for(f={},i=0;i<o.length;i++)f[o[i].type]=o[i];else f=o;for(var a in e)if(e.hasOwnProperty(a))if(p="undefined"!=typeof n?n+"."+a:a,t.hasOwnProperty(a))if(typeof t[a]!=typeof e[a])null!==t[a]&&null!==e[a]&&("string"==typeof t[a]?String(e[a])!=e[a]&&(console.log("TODO Different type 1 ",p,typeof t[a],typeof e[a],t[a],e[a]),r=Math.max(r,2)):"number"==typeof t[a]?Number(e[a])!=e[a]&&(console.log("TODO Different type 2 ",p,typeof t[a],typeof e[a],t[a],e[a]),r=Math.max(r,2)):(console.log("TODO Different type 3 ",p,typeof t[a],typeof e[a],t[a],e[a]),r=Math.max(r,2)));else if("object"==typeof e[a])if(null!==e[a])if("undefined"!=typeof e[a].splice){if(e[a].length>0)if(t[a].length>0){var c=0;for(i=0;i<t[a].length;i++)if("string"==typeof t[a][i].type){for(;c<e[a].length&&e[a][c].type!==t[a][i].type;)console.log("ignoring ",p,e[a][c].type," block type in reference not found in model"),c++;if(c>=e[a].length){console.log("WARN cannot find ",p,t[a][i].type," block in reference"),r=Math.max(r,2);break}r=Math.max(r,checkModel(e[a][c],void 0,t[a][i],p+"["+i+"."+t[a][i].type+"]"))}}else for(i=0;i<e[a].length;i++)"string"!=typeof e[a][i].type?(console.log("TODO found an object with no type",p,e[a][i]),r=Math.max(r,2)):f.hasOwnProperty(e[a][i].type)?r=Math.max(r,checkModel(f[e[a][i].type],f,e[a][i],p+"["+i+"."+e[a][i].type+"]")):(console.warn("TODO the model uses a block type not defined by the template. REMOVING IT!!",p,e[a][i]),e[a].splice(i,1),i--,r=Math.max(r,2))}else null===t[a]?l?(console.log("WARN Null object in model ",p,"instead of",e[a],"deleting it"),r=Math.max(r,2),delete e[a]):(console.log("INFO Null object in model ",p,"instead of",e[a],"cloning it from the reference"),r=Math.max(r,1),t[a]=e[a]):r=Math.max(r,checkModel(e[a],f,t[a],p,l));else null!==t[a]&&(console.log("TODO Null in reference but not null in model",p,t[a]),r=Math.max(r,2));else"string"!=typeof e[a]&&"boolean"!=typeof e[a]&&"number"!=typeof e[a]&&(console.log("TODO unsupported type",p,typeof e[a]),r=Math.max(r,2));else l?(console.warn("WARN Property ",p,"found in model is not defined by template: removing it!"),r=Math.max(r,2),delete e[a]):(console.log("INFO Property ",p,"missing in model, cloning from reference!"),r=Math.max(r,1),t[a]=e[a]);return l||(r=Math.max(r,checkModel(t,o,e,"undefined"!=typeof n?n+"!R":"!R",!0))),r};module.exports=checkModel;

},{"./..\\..\\..\\bower_components\\console-browserify\\index.js":1}],50:[function(require,module,exports){
"use strict";var converterUtils=require("./utils.js"),cssParse=require("./..\\..\\..\\bower_components\\mensch\\lib\\parser.js"),console=require("./..\\..\\..\\bower_components\\console-browserify\\index.js"),domutils=require("./domutils.js"),_declarationValueLookup=function(e,t,r){for(var n=e.length-1;n>=0;n--)if("property"==e[n].type&&e[n].name==t)return _declarationValueUrlPrefixer(e[n].value,r);return null},_propToCamelCase=function(e){return e.replace(/-([a-z])/g,function(e,t,r,n){return t.toUpperCase()})},_declarationValueUrlPrefixer=function(e,t){if(e.match(/url\(.*\)/)){var r=e.replace(/(url\()([^\)]*)(\))/g,function(e,r,n,l){var i=n.trim(),o=n.trim().charAt(0);"'"==o||'"'==o?i=i.substr(1,i.length-2):o="";var a=t(i);return null!==a?r+o+a+o+l:e});return r}return e},elaborateDeclarations=function(e,t,r,n,l,i,o){var a="object"==typeof i&&null!==i?i:{},u=null,d=0;if("undefined"==typeof t){var f=cssParse("#{\n"+e+"}",{comments:!0,position:!0});t=f.stylesheet.rules[0].declarations,d=1}for(var s=t.length-1;s>=0;s--)if("property"==t[s].type)if(o===!0&&"display"==t[s].name&&"none"==t[s].value)null===u&&(u=e),u=converterUtils.removeStyle(u,t[s].position.start,t[s].position.end,d,0,0,"");else{var v=t[s].name.match(/^-ko-(bind-|attr-)?([a-z0-9-]*?)(-if|-ifnot)?$/);if(null!==v){null===u&&"undefined"!=typeof e&&(u=e);var c,p,y,m="attr-"==v[1],h="bind-"==v[1],b=v[2],S="-if"==v[3]||"-ifnot"==v[3];if(S){c=t[s].name.substr(0,t[s].name.length-v[3].length);var g=_declarationValueLookup(t,c,r);if(null===g)throw"Unable to find declaration "+c+" for "+t[s].name}else{if((m||h)&&"undefined"==typeof l&&"undefined"!=typeof e)throw"Attributes and bind declarations are only allowed in inline styles!";var w,U=!0;if(m?(y=domutils.getAttribute(l,b),U=!1,w="virtualAttr"):h?(w=null,"text"==b?"undefined"!=typeof l?y=domutils.getInnerText(l):U=!1:"html"==b&&"undefined"!=typeof l?y=domutils.getInnerHtml(l):U=!1):(U="undefined"!=typeof e,U&&(y=_declarationValueLookup(t,b,r)),w="virtualStyle"),U&&null===y)throw console.error("Cannot find default value for",t[s].name,t),"Cannot find default value for "+t[s].name+": "+t[s].value+" in "+l+" ("+typeof e+"/"+b+")";var _=y,A=_propToCamelCase(b);try{p=converterUtils.expressionBinding(t[s].value,n,_)}catch(e){throw console.error("Model ensure path failed",e.stack,"name",t[s].name,"value",t[s].value,"default",y,"element",l),e}null!==w&&"undefined"==typeof a[w]&&(a[w]={}),"virtualAttr"==w&&"href"==A&&(w=null,A="wysiwygHref","undefined"!=typeof l&&null!==l&&domutils.removeAttribute(l,"href"));var k=_declarationValueLookup(t,t[s].name+"-if",r),x=!1;if(null===k)k=_declarationValueLookup(t,t[s].name+"-ifnot",r),x=!0;else if(null!==_declarationValueLookup(t,t[s].name+"-ifnot",r))throw"Unexpected error: cannot use both -if and -ifnot property conditions";if(null!==k)try{var C=converterUtils.conditionBinding(k,n);p=(x?"!":"")+"("+C+") ? "+p+" : null"}catch(e){throw console.error("Unable to deal with -ko style binding condition",k,t[s].name),e}null!==w?a[w][A]=p:a[A]=p}if(null!==u)try{if("undefined"!=typeof l&&null!==l)u=converterUtils.removeStyle(u,t[s].position.start,t[s].position.end,d,0,0,"");else{var V="";S||(V=b+": <!-- ko text: "+p+" -->"+y+"<!-- /ko -->"),u=converterUtils.removeStyle(u,t[s].position.start,t[s].position.end,d,0,0,V)}}catch(e){throw console.warn("Remove style failed",e,"name",t[s]),e}}else{var P=_declarationValueUrlPrefixer(t[s].value,r);if(P!=t[s].value&&(null===u&&"undefined"!=typeof e&&(u=e),null!==u))try{u=converterUtils.removeStyle(u,t[s].position.start,t[s].position.end,d,0,0,t[s].name+": "+P)}catch(e){throw console.log("Remove style failed replacing url",e,"name",t[s]),e}var j=_propToCamelCase(t[s].name),z="virtualAttrStyle",L="undefined"!=typeof a.virtualStyle?a.virtualStyle[j]:void 0,q=" ";"undefined"==typeof a[z]&&(a[z]="''",q=""),"undefined"!=typeof L?(a[z]="'"+t[s].name+": '+("+L+")+';"+q+"'+"+a[z],delete a.virtualStyle[j]):a[z]="'"+t[s].name+": "+converterUtils.addSlashes(P)+";"+q+"'+"+a[z]}}if("undefined"!=typeof l&&null!==l){for(var T in a.virtualStyle)if(a.virtualStyle.hasOwnProperty(T))throw console.log("Unexpected virtualStyle binding after conversion to virtualAttr.style",T,a.virtualStyle[T],e),"Unexpected virtualStyle binding after conversion to virtualAttr.style for "+T;delete a.virtualStyle;var O=domutils.getAttribute(l,"data-bind"),B=(null!==O?O+", ":"")+_bindingSerializer(a);domutils.setAttribute(l,"data-bind",B)}if("undefined"==typeof e){var D=!1;for(var H in a.virtualStyle)if(a.virtualStyle.hasOwnProperty(H)){D=!0;break}if(D){if("undefined"!=typeof a.virtualAttrStyle){var I=a.virtualAttrStyle;delete a.virtualAttrStyle,a.virtualAttrStyle=I}}else delete a.virtualStyle;return _bindingSerializer(a)}return u},_bindingSerializer=function(e){var t=[];for(var r in e)e.hasOwnProperty(r)&&("object"==typeof e[r]?t.push(r+": { "+_bindingSerializer(e[r])+" }"):t.push(r+": "+e[r]));return t.reverse().join(", ")};module.exports=elaborateDeclarations;

},{"./..\\..\\..\\bower_components\\console-browserify\\index.js":1,"./..\\..\\..\\bower_components\\mensch\\lib\\parser.js":15,"./domutils.js":51,"./utils.js":57}],51:[function(require,module,exports){
(function (global){
"use strict";function _extend(e,t){if(t)for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}var $=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),objExtend=function(e,t){return"function"==typeof $.extend?$.extend(!0,e,t):_extend(e,JSON.parse(JSON.stringify(t)))},getAttribute=function(e,t){var n=$(e).attr(t);return"undefined"==typeof n&&(n=null),n},setAttribute=function(e,t,n){$(e).attr(t,n)},removeAttribute=function(e,t){$(e).removeAttr(t)},getInnerText=function(e){return $(e).text()},getInnerHtml=function(e){return $(e).html()},getLowerTagName=function(e){return""===e.tagName&&"string"==typeof e.name?e.name.toLowerCase():""!==e.tagName?e.tagName.toLowerCase():$(e).prop("tagName").toLowerCase()},setContent=function(e,t){$(e).html(t)},replaceHtml=function(e,t){$(e).replaceWith(t)},removeElements=function(e,t){t&&"undefined"!=typeof e.detach&&e.detach(),e.remove()};module.exports={getAttribute:getAttribute,setAttribute:setAttribute,removeAttribute:removeAttribute,getInnerText:getInnerText,getInnerHtml:getInnerHtml,getLowerTagName:getLowerTagName,setContent:setContent,replaceHtml:replaceHtml,removeElements:removeElements,objExtend:objExtend};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],52:[function(require,module,exports){
"use strict";var console=require("./..\\..\\..\\bower_components\\console-browserify\\index.js"),elaborateDeclarations=require("./declarations.js"),utils=require("./utils.js"),modelDef=require("./model.js"),_getOptionsObject=function(e){for(var t=e.split("|"),o={},n=0;n<t.length;n++){var i=t[n].split("=");o[i[0]]=i.length>1?i[1]:i[0]}return o},_filterProps=function(e,t,o){var n=[];for(var i in e)if(!i.match(/^customStyle$/)&&!i.match(/^_/)&&e.hasOwnProperty(i)){var l=null!==e[i]&&"undefined"!=typeof e[i]._category&&"style"==e[i]._category;if("id"==i||"type"==i||i.match(/Blocks$/));else if("styler"==t)(l||o>0)&&n.push(i);else if("edit"==t){var a=null!==e[i]&&"undefined"!=typeof e[i]._category&&"content"==e[i]._category&&("undefined"==typeof e[i]._context||"block"!=e[i]._context);a&&n.push(i)}else"undefined"==typeof t&&n.push(i)}return n},_propInput=function(e,t,o,n,i){var l,a="";if(null!==e&&"undefined"!=typeof e._widget&&(l=e._widget),"undefined"==typeof l)throw"Unknown data type for "+t;var d="focusable: true";if("edit"==n&&(d+=", event: { focus: function(ui, event) { $($element).click(); } } "),a+='<label class="data-'+l+'"'+("boolean"==l?" data-bind=\"event: { mousedown: function(ui, evt) { if (evt.button == 0) { var input = $($element).find('input'); var ch = input.prop('checked'); setTimeout(function() { input.click(); input.prop('checked', !ch); input.trigger('change'); }, 0); } } }, click: function(ui, evt) { evt.preventDefault(); }, clickBubble: false\"":"")+">","undefined"!=typeof i&&"undefined"!=typeof i[l]){var s=i[l],p={};if("undefined"!=typeof s.parameters)for(var r in s.parameters)s.parameters.hasOwnProperty(r)&&"undefined"!=typeof e["_"+r]&&(p[r]=e["_"+r]);a+=s.html(o,d,p)}else if("boolean"==l)a+='<input type="checkbox" value="nothing" data-bind="checked: '+o+", "+d+'" />',a+='<span class="checkbox-replacer" ></span>';else if("color"==l)a+='<input size="7" type="text" data-bind="colorpicker: { color: '+o+", strings: $root.t('Theme Colors,Standard Colors,Web Colors,Theme Colors,Back to Palette,History,No history yet.') }, , "+d+'" />';else if("select"==l){if("undefined"!=typeof e._options){var u=_getOptionsObject(e._options);a+='<select data-bind="value: '+o+", "+d+'">';for(var f in u)u.hasOwnProperty(f)&&(a+='<option value="'+f+"\" data-bind=\"text: $root.ut('template', '"+utils.addSlashes(u[f])+"')\">"+u[f]+"</option>");a+="</select>"}}else if("font"==l)a+='<select type="text" data-bind="value: '+o+", "+d+'">',a+='<optgroup label="Sans-Serif Fonts">',a+='<option value="Arial,Helvetica,sans-serif">Arial</option>',a+="<option value=\"'Comic Sans MS',cursive,sans-serif\">Comic Sans MS</option>",a+='<option value="Impact,Charcoal,sans-serif">Impact</option>',a+="<option value=\"'Trebuchet MS',Helvetica,sans-serif\">Trebuchet MS</option>",a+='<option value="Verdana,Geneva,sans-serif">Verdana</option>',a+="</optgroup>",a+='<optgroup label="Serif Fonts">',a+='<option value="Georgia,serif">Georgia</option>',a+="<option value=\"'Times New Roman',Times,serif\">Times New Roman</option>",a+="</optgroup>",a+='<optgroup label="Monospace Fonts">',a+="<option value=\"'Courier New',Courier,monospace\">Courier New</option>",a+="</optgroup>",a+="</select>";else if("url"==l)a+='<div class="ui-textbutton">',a+='<input class="ui-textbutton-input" size="7" type="url" pattern="(mailto:.+@.+|https?://.+\\..+|\\[.*\\].*)" value="nothing" data-bind="css: { withButton: typeof $root.linkDialog !== \'undefined\' }, validatedValue: '+o+", "+d+'" />',a+="<a class=\"ui-textbutton-button\" data-bind=\"visible: typeof $root.linkDialog !== 'undefined', click: typeof $root.linkDialog !== 'undefined' ? $root.linkDialog.bind($element.previousSibling) : false, button: { icons: { primary: 'fa fa-fw fa-ellipsis-h' }, label: 'Opzioni', text: false }\">Opzioni</a>",a+="</div>";else if("integer"==l){var c=0,v=1e3;null!==e&&"undefined"!=typeof e._max&&(v=e._max),null!==e&&"undefined"!=typeof e._min&&(c=e._min);var b=v-c>=100?10:1,y=5*b;a+='<input class="number-spinner" size="7" step="'+b+'" type="number" value="-1" data-bind="spinner: { min: '+c+", max: "+v+", page: "+y+", value: "+o+" }, valueUpdate: ['change', 'spin'], "+d+'" />'}else a+='<input size="7" type="text" value="nothing" data-bind="value: '+o+", "+d+'" />';return a+="</label>"},_getGlobalStyleProp=function(e,t,o,n){var i;return"object"==typeof t&&null!==t&&"undefined"==typeof t._widget||"undefined"!=typeof o&&"undefined"!=typeof n&&n.length>0&&"object"==typeof e&&"undefined"!=typeof e[n]&&(i=e[n]),i},_propEditor=function(e,t,o,n,i,l,a,d,s,p,r,u,f,c,v){if("undefined"==typeof s&&(s=0),"undefined"!=typeof a&&"object"==typeof n&&null!==n&&"undefined"==typeof n._usecount)return console.log("TODO EDITOR ignoring",l,"property because it is not used by the template","prop:",a,"type:",d,"level:",s,e._templateName),"";var b,y="undefined"!=typeof u?a+"._defaultComputed":a,h="",m=y,g=1,_=1;if("object"==typeof n&&null!==n&&"undefined"==typeof n._widget||"undefined"==typeof u&&(g+=1),"undefined"==typeof u&&"undefined"!=typeof p&&(_+=p),"undefined"!=typeof a&&f&&(h+="<!-- ko ifSubs: { data: "+m+", threshold: "+_+", gutter: "+g+" } -->"),"undefined"==typeof a||null!==n&&"undefined"!=typeof n._name||console.log("TODO WARN Missing label for property ",a),"undefined"==typeof a&&null!==n&&"undefined"==typeof n._name&&console.log("TODO WARN Missing label for object ",n.type),"object"==typeof n&&null!==n&&"undefined"==typeof n._widget){var k=_filterProps(n,d,s),S="styler"==d&&null!==n&&"undefined"!=typeof n.customStyle&&"undefined"!=typeof u,w="",$="";"undefined"!=typeof a&&"edit"==d&&(w=", click: function(obj, evt) { $root.selectItem("+a+", $data); return false }, clickBubble: false, css: { selecteditem: $root.isSelectedItem("+a+") }, scrollIntoView: $root.isSelectedItem("+a+"), ",$+=" selectable"),S&&($+=" supportsCustomStyles"),h+='<div class="objEdit level'+s+$+'" data-bind="tooltips: {}'+w+'">';var D=null!==n&&"undefined"!=typeof n._name?n._name:"undefined"!=typeof a?"["+a+"]":"";if(S){var j="Stile";"undefined"!=typeof i&&null!==i&&"undefined"!=typeof i._name?j=i._name:console.log("TODO missing label for theme section ",a,null!==n?n.type:"-"),D="<span class=\"blockSelectionMethod\" data-bind=\"text: customStyle() ? $root.ut('template', '"+utils.addSlashes(D)+"') : $root.ut('template', '"+utils.addSlashes(j)+"')\">Block</span>"}else D="<span data-bind=\"text: $root.ut('template', '"+utils.addSlashes(D)+"')\">"+D+"</span>";if(b=null!==n&&"undefined"!=typeof n._help?' title="'+utils.addSlashes(n._help)+"\" data-bind=\"attr: { title: $root.ut('template', '"+utils.addSlashes(n._help)+"') }\"":"",h+="<span"+b+' class="objLabel level'+s+'">'+D+"</span>","edit"==d&&"undefined"!=typeof n._blockDescription&&(h+="<div class=\"blockDescription\" data-bind=\"html: $root.ut('template', '"+utils.addSlashes(n._blockDescription)+"')\">"+n._blockDescription+"</div>"),S&&(h+='<label class="data-boolean blockCheck" data-bind="tooltips: { }">',h+='<input type="checkbox" value="nothing" data-bind="focusable: true, checked: customStyle" />',h+='<span title="Switch between global and block level styles editing" data-bind="attr: { title: $root.t(\'Switch between global and block level styles editing\') }" class="checkbox-replacer checkbox-replacer-onoff"></span>',h+="</label>",h+="<!-- ko template: { name: 'customstyle', if: customStyle } --><!-- /ko -->"),"undefined"!=typeof a&&(h+="<!-- ko with: "+a+" -->",1==s&&"undefined"!=typeof a&&"undefined"!=typeof n._previewBindings&&"undefined"!=typeof e)){"undefined"!=typeof c&&(h+='<!-- ko with: $root.content() --><div class="objPreview" data-bind="'+c+'"></div><!-- /ko -->'),"undefined"!=typeof v&&(h+='<!-- ko with: $parent --><div class="objPreview" data-bind="'+v+'"></div><!-- /ko -->');var x=elaborateDeclarations(void 0,n._previewBindings,o,e.bind(this,l+"."));h+='<div class="objPreview"><div class="objPreviewInner" data-bind="'+x+'"></div></div>'}var B;0===s&&"undefined"!=typeof n._previewBindings&&(B=elaborateDeclarations(void 0,n._previewBindings,o,e.bind(this,l.length>0?l+".":"")));var E,O,T,C,I=h.length;for(E=0;E<k.length;E++)O=l.length>0?l+"."+k[E]:k[E],"object"==typeof n[k[E]]&&null!==n[k[E]]&&"undefined"==typeof n[k[E]]._widget||(C=void 0,0===s&&"theme"==k[E]?h+=_propEditor(e,t,o,n[k[E]],T,O,k[E],d,0,p,void 0,void 0,f,c):(C=_getGlobalStyleProp(r,n[k[E]],k[E],O),h+=_propEditor(e,t,o,n[k[E]],T,O,k[E],d,s+1,p,r,C,f,c,B)));for(E=0;E<k.length;E++)O=l.length>0?l+"."+k[E]:k[E],"object"==typeof n[k[E]]&&null!==n[k[E]]&&"undefined"==typeof n[k[E]]._widget&&(C=void 0,0===s&&"theme"==k[E]?h+=_propEditor(e,t,o,n[k[E]],T,O,k[E],d,0,p,void 0,void 0,f,c):(C=_getGlobalStyleProp(r,n[k[E]],k[E],O),h+=_propEditor(e,t,o,n[k[E]],T,O,k[E],d,s+1,p,r,C,f,c,B)));var P=h.length-I;if(0===P){if("object"==typeof n&&null!==n&&"template"==n._context)return"";h+='<div class="objEmpty" data-bind="html: $root.t(\'Selected element has no editable properties\')">Selected element has no editable properties</div>'}"undefined"!=typeof a&&(h+="<!-- /ko -->"),h+="</div>"}else{var N=!0;if("undefined"==typeof r&&(N=!1),null===n||"object"!=typeof n||"undefined"!=typeof n._widget){var M=[];"undefined"!=typeof u&&M.push("css: { notnull: "+a+"() !== null }"),b=null!==n&&"undefined"!=typeof n._help?' title="'+utils.addSlashes(n._help)+"\" data-bind=\"attr: { title: $root.ut('template', '"+utils.addSlashes(n._help)+"') }\"":"",b.length>0&&M.push("tooltips: {}");var G=M.length>0?'data-bind="'+utils.addSlashes(M.join())+'"':"";h+='<div class="propEditor '+(N?"checkboxes":"")+'"'+G+">";var z=null!==n&&"undefined"!=typeof n._name?n._name:"undefined"!=typeof a?"["+a+"]":"";z="<span data-bind=\"text: $root.ut('template', '"+utils.addSlashes(z)+"')\">"+z+"</span>",h+="<span"+b+' class="propLabel">'+z+"</span>",h+='<div class="propInput '+("undefined"!=typeof r?"local":"")+'" data-bind="css: { default: '+a+'() === null }">',h+=_propInput(n,a,y,d,t),h+="</div>","undefined"!=typeof u&&(h+='<div class="propInput global" data-bind="css: { overridden: '+a+'() !== null }">',h+=_propInput(n,a,u,d,t),h+="</div>",N&&(h+='<div class="propCheck"><label data-bind="tooltips: {}"><input type="checkbox" data-bind="focusable: true, click: function(evt, obj) { $root.localGlobalSwitch('+a+", "+u+"); return true; }, checked: "+a+'() !== null">',h+='<span class="checkbox-replacer" data-bind="css: { checked: '+a+"() !== null }, attr: { title: $root.t('This style is specific for this block: click here to remove the custom style and revert to the theme value') }\"></span>",h+="</label></div>")),h+="</div>"}else h+=null===n||"object"!=typeof n?'<div class="propEditor unknown">[A|'+a+"|"+typeof n+"]</div>":'<div class="propEditor unknown">[B|'+a+"|"+typeof n+"]</div>"}return"undefined"!=typeof a&&f&&(h+="<!-- /ko -->",h+="<!-- ko ifSubs: { not: true, data: "+m+", threshold: "+_+", gutter: 0 } -->",h+='<span class="label notused">('+a+")</span>",h+="<!-- /ko -->"),h},createBlockEditor=function(e,t,o,n,i,l,a,d,s,p,r,u){"undefined"==typeof r&&(r=!0);var f,c=modelDef.getDef(e,l),v=modelDef.getDef(e,i);"undefined"!=typeof v._previewBindings&&"thaeme"!=l&&"styler"==a&&(f=elaborateDeclarations(void 0,v._previewBindings,n,modelDef.getBindValue.bind(void 0,e,o,i,i,"")));var b,y="undefined"!=typeof p&&p?e[l]._globalStyles:void 0,h="undefined"!=typeof p&&p?e[l]._globalStyle:void 0;if("undefined"!=typeof h){var m=modelDef.getDef(e,"theme");b=m[h.replace(/^(\$theme|_theme_)\./,"")]}var g=modelDef.getBindValue.bind(void 0,e,o,i,l);g._templateName=l;var _='<div class="editor">';_+='<div class="blockType'+("undefined"!=typeof y?" withdefaults":"")+'">'+c.type+"</div>";var k=_propEditor(g,t,n,c,b,"",void 0,a,u,s,y,h,r,f);k.length>0&&(_+=k),_+="</div>",d(_,l,a)},createBlockEditors=function(e,t,o,n,i,l,a,d){createBlockEditor(e,t,o,n,i,l,"edit",a,d),createBlockEditor(e,t,o,n,i,l,"styler",a,d,!0)},generateEditors=function(e,t,o,n,i){var l,a=e._defs,d=e.templateName,s=e._blocks,p=[];for(l=0;l<s.length;l++)"undefined"!=typeof s[l].container&&p.push(modelDef.generateModel(a,s[l].block)),createBlockEditors(a,t,void 0,o,s[l].root,s[l].block,n,i);return"undefined"!=typeof a.theme&&createBlockEditor(a,t,void 0,o,d,"theme","styler",n,void 0,!1,!1,-1),p};module.exports=generateEditors;

},{"./..\\..\\..\\bower_components\\console-browserify\\index.js":1,"./declarations.js":50,"./model.js":54,"./utils.js":57}],53:[function(require,module,exports){
"use strict";var modelDef=require("./model.js"),wrappedResultModel=function(e){var r=e._defs,t=e.templateName,l=modelDef.getDef(r,t),a=modelDef.generateResultModel(e),o=require("./wrapper.js"),d=o(a,l,r);return d},translateTemplate=function(){var e=require("./parser.js");return e.apply(e,arguments)},generateEditors=function(){var e=require("./editor.js");return e.apply(e,arguments)},checkModel=function(){var e=require("./checkmodel.js");return e.apply(e,arguments)};module.exports={translateTemplate:translateTemplate,wrappedResultModel:wrappedResultModel,generateResultModel:modelDef.generateResultModel,generateEditors:generateEditors,checkModel:checkModel};

},{"./checkmodel.js":49,"./editor.js":52,"./model.js":54,"./parser.js":55,"./wrapper.js":58}],54:[function(require,module,exports){
"use strict";var objExtend=require("./domutils.js").objExtend,console=require("./..\\..\\..\\bower_components\\console-browserify\\index.js"),_valueSet=function(e,t,n,o){var l=n.indexOf(".");if(l==-1)if("undefined"==typeof t[n])console.log("Undefined prop "+n+" while setting value "+o+" in model._valueSet");else if(null===t[n])"object"==typeof o&&null!==o&&"undefined"==typeof o.push&&console.log("nullpropobjectvalue",n,o),t[n]=o;else if("object"==typeof t[n]&&"function"==typeof t[n].push){var r;if("string"==typeof o){var f=o.match(/^\[(.*)\]$/);if(null===f)throw"Unexpected default value for array property "+n+": "+o;r=f[1].split(",")}else{if("object"!=typeof o||"undefined"==typeof o.push)throw"Unexpected default value for array property "+n+": "+o+" typeof "+typeof o;r=o}for(var d=[],i=0;i<r.length;i++)"@"==r[i].substr(0,1)?d.push(_generateModel(e,r[i].substr(1))):r[i].length>0&&d.push(r[i]);t[n]=d}else"string"==typeof t[n]||"boolean"==typeof t[n]?t[n]=o:"object"==typeof t[n]&&null!==t[n]&&"undefined"!=typeof t[n]._widget?("object"==typeof o&&null!==o&&console.log("objectvalue",n,t[n]._widget,o),t[n]=o):console.log("setting",typeof t[n],t[n],n,o);else{var a=n.substr(0,l);_valueSet(e,t[a],n.substr(l+1),o)}},_modelCreateOrUpdateBlockDef=function(e,t,n,o){if("undefined"!=typeof e[t]&&e[t]._initialized&&!e[t]._writeable)throw console.log("_modelCreateOrUpdateBlockDef",e,t,n,o),"Trying to alter non writeable model: "+t+" / "+n;if("undefined"==typeof e[t]&&(e[t]={_writeable:!0},"undefined"==typeof o&&(o={}),"undefined"==typeof o.category&&"undefined"==typeof e[t]._category&&(t.match(/(^t|.T)heme$/)||t.match(/(^s|.S)tyle$/)||t.match(/(^c|.C)olor$/)||t.match(/(^r|.R)adius$/)?o.category="style":o.category="content")),"undefined"!=typeof o){if("undefined"!=typeof o.name&&(e[t]._name=o.name),"undefined"!=typeof o.themeOverride&&(e[t]._themeOverride=o.themeOverride),"undefined"!=typeof o.globalStyle){e[t]._globalStyle=o.globalStyle;var l=o.globalStyle.replace(/^(\$theme|_theme_)\./,""),r=l.indexOf("."),f=r!=-1?l.substr(0,r):l;_modelCreateOrUpdateBlockDef(e,"theme",f),("undefined"==typeof e[t]._themeOverride||e[t]._themeOverride)&&_modelCreateOrUpdateBlockDef(e,t,"customStyle=false")}"undefined"!=typeof o.contextName&&(e[t]._context=o.contextName,"block"==o.contextName&&"undefined"==typeof e[t]._globalStyle&&(e[t]._globalStyle="_theme_.bodyTheme",_modelCreateOrUpdateBlockDef(e,"theme","bodyTheme"),("undefined"==typeof e[t]._themeOverride||e[t]._themeOverride)&&_modelCreateOrUpdateBlockDef(e,t,"customStyle=false"))),"undefined"!=typeof o.extend&&(e[t].type=o.extend)}for(var d in o)o.hasOwnProperty(d)&&"undefined"!=typeof o[d]&&["name","extend","contextName","globalStyle","themeOverride"].indexOf(d)==-1&&(e[t]["_"+d]=o[d]);"undefined"!=typeof n&&n.length>0&&(e[t]._props="undefined"!=typeof e[t]._props&&e[t]._props.length>0?e[t]._props+" "+n:n)},_removePrefix=function(e){var t=e.match(/^[^A-Z]+([A-Z])(.*)$/);return null!==t?t[1].toLowerCase()+t[2]:null},_generateModelFromDef=function(e,t){var n={};for(var o in e)if(!o.match(/^_.*/)&&e.hasOwnProperty(o)){var l=e[o];if("object"==typeof l&&null!==l&&"undefined"!=typeof l._complex&&l._complex)n[o]=_generateModelFromDef(l,t);else if("type"==o)n[o]=l;else{if("object"!=typeof l)throw console.error("Unexpected model def",o,l,e),"Unexpected model def ["+o+"]="+l;n[o]=null}}if("undefined"!=typeof e._defaultValues){var r=e._defaultValues;for(var f in r)r.hasOwnProperty(f)&&_valueSet(t,n,f,r[f])}return n},_generateModel=function(e,t){var n=_getModelDef(e,t,!1,!0);return _generateModelFromDef(n,e)},_getDef=function(e,t){return _getModelDef(e,t,!1,!0)},_getModelDef=function(e,t,n,o){if("undefined"==typeof e[t]){if(t.indexOf(" ")!=-1)return null;var l=_removePrefix(t);return null!==l?_getModelDef(e,l,n,o):null}var r=e[t];if("object"!=typeof r)throw"Block definition must be an object: found "+r+" for "+t;if("undefined"==typeof r._initialized){if("undefined"==typeof r.type&&(t.indexOf(" ")==-1?r.type=t:r.type=t.substr(t.indexOf(" ")+1)),r.type!=t&&"undefined"==typeof r._widget){var f=_getModelDef(e,r.type,!0),d=objExtend(f,r);r=d,e[t]=r}else"undefined"==typeof r._widget&&"undefined"==typeof r._props&&"undefined"==typeof r._complex;r._writeable=!0,r._initialized=!0}if("undefined"!=typeof r._props){var i=r._props;if(i=i.split(" "),i.length>0&&"undefined"==typeof r._writeable)throw console.error("Altering a non writable object ",t,i,r),"Altering a non writable object: "+t+" def: "+i;"undefined"==typeof r._processedDefs&&(r._processedDefs={}),"undefined"==typeof r._globalStyles&&(r._globalStyles={}),"undefined"==typeof r._defaultValues&&(r._defaultValues={});for(var a=0;a<i.length;a++){var u=i[a];if(0!==u.length){var s=u,p=null,y=u.match(/^([^=\[\]]+)(\[\])?(=?)(.*)$/);if(null!==y&&(u=y[1],"[]"==y[2]&&("undefined"==typeof r[u]&&(r[u]=[]),p=[]),"="==y[3]&&(p=u.match(/(^v|V)isible$/)?"true"==String(y[4]).toLowerCase():u.match(/^customStyle$/)?"true"==String(y[4]).toLowerCase():y[4])),null!==p&&"undefined"==typeof r._defaultValues[u]&&(r._defaultValues[u]=p),"undefined"==typeof r[u]){var c=_getModelDef(e,t+" "+u,!0);null===c&&(c=_getModelDef(e,u,!0)),r[u]=c}r._processedDefs[u]=s,r._complex=!0}}delete r._props}if(n){r._writeable=!1;var _=objExtend({},r);return _}if(o)return r._writeable=!1,r;if("undefined"==typeof r._writeable||r._writeable===!1)throw"Retrieving non writeable object definition: "+t;return r},_increaseUseCount=function(e,t){if(e){if("undefined"==typeof t._usecount)throw console.error("ERROR trying to bind an unused property while readonly",t),"ERROR trying to bind an unused property"}else"undefined"==typeof t._usecount&&(t._usecount=0),t._usecount++},ensureGlobalStyle=function(e,t,n,o,l,r,f,d){var i=n(r,f,d);if("undefined"==typeof e[o]._globalStyles[l]){if(t)throw"Cannot find _globalStyle for "+l+" in "+o+"!";(l.indexOf(".")!=-1||"object"==typeof e[o][l]&&"undefined"!=typeof e[o][l]._widget)&&(e[o]._globalStyles[l]=i)}else if(e[o]._globalStyles[l]!=i)throw"Unexpected conflicting globalStyle [2] for "+o+"/"+l+": old="+e[o]._globalStyles[l]+" new="+i},modelEnsurePathAndGetBindValue=function(e,t,n,o,l,r,f,d,i,a){var u,s,p;if("$"==f.substr(0,1)){console.warn("DEPRECATED $ in bindingProvider: ",f,l);var y=f.indexOf(".");if(y==-1)throw"Unexpected fullPath: "+f+"/"+r+"/"+l+"/"+d+"/"+i;if(u=f.substr(1,y-1),p=f.substr(y+1),"theme"!=u)throw"Unexpected $ sequence: "+u+" in "+f;var c=p.indexOf(".");u=p.substr(0,c),p=p.substr(c+1),s="$root.content().theme()."+u+"()."+p.replace(new RegExp("\\.","g"),"().")}else if("#"==f.substr(0,1))console.warn("DEPRECATED # in bindingProvider: ",f,l),u=o,p=f.substr(1),s="$root.content()."+p.replace(new RegExp("\\.","g"),"().");else if("_theme_."==f.substr(0,8)){var _=f.indexOf(".",8);u=f.substr(8,_-8),p=f.substr(_+1),s="$root.content().theme()."+u+"()."+p.replace(new RegExp("\\.","g"),"().")}else"_root_."==f.substr(0,7)?(u=o,p=f.substr(7),s="$root.content()."+p.replace(new RegExp("\\.","g"),"().")):(u=l,p=r+f,s=f.replace(new RegExp("\\.","g"),"()."));if("undefined"==typeof t[u])throw"Cannot find model def for ["+u+"]";var g=p.indexOf("."),b=g==-1?p:p.substr(0,g);if(u.indexOf("-")!=-1)throw console.error("ERROR cannot use - for block names",u),"ERROR unexpected char in block name: "+u;if(b.indexOf("-")!=-1)throw console.error("ERROR cannot use - for property names",b),"ERROR unexpected char in property name: "+u;if(e)return"undefined"!=typeof t[u]._globalStyle&&"undefined"!=typeof t[u][b]&&"style"==t[u][b]._category&&(s+="._defaultComputed"),s;var h;if(e){if("undefined"!=typeof d)throw"Cannot use defaultValue in readonly mode!";if(i)throw"Cannot use overrideDefault in readonly mode for "+u+"/"+p+"/"+i+"!";if("undefined"!=typeof a)throw"Cannot set category for "+u+"/"+p+"/"+a+" in readonly mode!";h=_getModelDef(t,u,!1,!0)}else t[u]._writeable===!1&&console.log("TODO debug use cases for this condition",u,p),h=_getModelDef(t,u,t[u]._writeable===!1);if(null===h)throw"Unexpected model for ["+u+"]";if("undefined"==typeof h[b]){if(e)throw"Cannot find path "+b+" for "+u+"!";_modelCreateOrUpdateBlockDef(t,u,b),h=_getModelDef(t,u,!1)}"undefined"!=typeof t[u]._globalStyle&&"undefined"!=typeof t[u][b]&&null!==t[u][b]&&"style"==t[u][b]._category&&(s+="._defaultComputed");var m=h;try{if(_increaseUseCount(e,m),g!=-1){var w=p;do{var v=w.substr(0,g);if("undefined"==typeof m[v])throw"Found an unexpected prop "+v+" for model "+u+" for "+p;m=m[v],_increaseUseCount(e,m),w=w.substr(g+1),g=w.indexOf(".")}while(g!=-1);if("undefined"==typeof m[w]||null===m[w])throw"Found an unexpected path termination "+w+" for model "+u+" for "+p;m=m[w]}else m=m[p];if("undefined"==typeof m||null===m)throw"Unexpected null model for "+u+"/"+r+"/"+f;"undefined"!=typeof a&&(m._category=a),_increaseUseCount(e,m)}catch(e){throw console.error("TODO ERROR Property lookup exception",e,u,p,l,f,t),e}if("undefined"!=typeof t[u]._globalStyle&&"object"==typeof t[u][b]&&null!==t[u][b]&&"undefined"!=typeof t[u][b]._category&&"style"==t[u][b]._category){var x=modelEnsurePathAndGetBindValue.bind(void 0,e,t,n,o,l,""),O=p.indexOf(".")!=-1?p.substr(p.indexOf(".")):"";if(O.indexOf(".",1)!=-1)throw"TODO unsupported object nesting! "+p;var D=t[u]._globalStyle+"."+b;"object"==typeof t[u][b]&&null!==t[u][b]&&"undefined"!=typeof t[u][b]._globalStyle&&(D=t[u][b]._globalStyle),ensureGlobalStyle(t,e,x,u,b,D,void 0,!1);var S=D+O;if("undefined"==typeof d&&null!==t[u]._defaultValues[p]&&(d=t[u]._defaultValues[p]),ensureGlobalStyle(t,e,x,u,p,S,d,i),"undefined"!=typeof d){if(e)throw console.error("Cannot set a new theme default value",S.substr(7),d,"while in readonly mode"),"Cannot set a new theme default value ("+d+") for "+S.substr(7)+" while in readonly mode!";n("default",S.substr(7),d)}d=null}if("undefined"!=typeof d)if("undefined"==typeof t[u]._defaultValues[p]||"undefined"!=typeof i&&i){if(e)throw"Cannot set new _defaultValues [1] for "+p+" in "+u+"!";t[u]._defaultValues[p]=d}else if(null===d){if(e&&null!==t[u]._defaultValues[p])throw"Cannot set new _defaultValues [2] for "+p+" in "+u+"!";t[u]._defaultValues[p]=null}else if(t[u]._defaultValues[p]!=d)throw console.error("TODO error!!! Trying to set a new default value for "+u+" "+p+" while it already exists (current: "+t[u]._defaultValues[p]+", new: "+d+")"),"Trying to set a new default value for "+u+" "+p+" while it already exists (current: "+t[u].defaultValues[p]+", new: "+d+")";return s},generateResultModel=function(e){var t=e._defs,n=e.templateName,o=_generateModel(t,n);return"undefined"!=typeof t.theme&&(o.theme=_generateModel(t,"theme")),o};module.exports={ensurePathAndGetBindValue:modelEnsurePathAndGetBindValue.bind(void 0,!1),getBindValue:modelEnsurePathAndGetBindValue.bind(void 0,!0),generateModel:_generateModel,generateResultModel:generateResultModel,getDef:_getDef,createOrUpdateBlockDef:_modelCreateOrUpdateBlockDef};

},{"./..\\..\\..\\bower_components\\console-browserify\\index.js":1,"./domutils.js":51}],55:[function(require,module,exports){
(function (global){
"use strict";function conditional_replace(t){return t.replace(/<!--\[if ([^\]]*)\]>((?:(?!--)[\s\S])*?)<!\[endif\]-->/g,function(t,e,o){var a="<!-- cc:start -->";a+=o.replace(/<([A-Za-z:]+)/g,"<!-- cc:bo:$1 --><cc").replace(/<\/([A-Za-z:]+)>/g,"<!-- cc:bc:$1 --></cc><!-- cc:ac:$1 -->").replace(/\/>/g,"/><!-- cc:sc -->"),a+="<!-- cc:end -->";var i='<replacedcc condition="'+e+'" style="display: none">';return i+=$("<div>").append($(a)).html().replace(/^<!-- cc:start -->/,"").replace(/<!-- cc:end -->$/,""),i+="</replacedcc>"})}var $=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),console=require("./..\\..\\..\\bower_components\\console-browserify\\index.js"),converterUtils=require("./utils.js"),elaborateDeclarations=require("./declarations.js"),processStylesheetRules=require("./stylesheet.js"),modelDef=require("./model.js"),domutils=require("./domutils.js"),wrapElementWithCondition=function(t,e,o){var a=domutils.getAttribute(e,t);try{var i=converterUtils.conditionBinding(a,o);$(e).before("<!-- ko if: "+i+" -->"),$(e).after("<!-- /ko -->"),domutils.removeAttribute(e,t)}catch(o){throw console.warn("Model ensure path failed in if/variant",e,a,t),o}},replacedAttributes=function(t,e){domutils.setAttribute(t,e,domutils.getAttribute(t,"replaced"+e))},processStyle=function(t,e,o,a){var i,r=domutils.getAttribute(t,"replacedstyle"),l=null;a&&(i={uniqueId:"$data",attr:{id:"id"}});var d=null!==domutils.getAttribute(t,"data-ko-display");l=elaborateDeclarations(r,void 0,e,o,t,i,d),null===l?l=r:domutils.removeAttribute(t,"replacedstyle"),null!==l&&(l.trim().length>0?domutils.setAttribute(t,"style",l):domutils.removeAttribute(t,"style"))},_fixRelativePath=function(t,e,o,a){var i=domutils.getAttribute(a,t),r=e(i);null!==r&&domutils.setAttribute(a,t,r)},processBlock=function(t,e,o,a,i,r,l,d,s,n){try{var u;if("block"==r)u=domutils.getAttribute(t,"data-ko-block"),domutils.removeAttribute(t,"data-ko-block");else{if("template"!=r)throw"Unexpected context name while processing block: "+r;u=l}$("[data-ko-remove]",t).remove();for(var c=$("[data-ko-block]",t).replaceWith("<replacedblock>"),m=["href","src","data-ko-placeholder-src","background"],p=0;p<m.length;p++){var h=_fixRelativePath.bind(void 0,m[p],i);$("["+m[p]+"]",t).each(h)}var b=domutils.getAttribute(t,"data-ko-properties");null===b&&(b=""),$("[data-ko-properties]",t).each(function(t,e){b.length>0&&(b+=" "),b+=domutils.getAttribute(e,"data-ko-properties"),domutils.removeAttribute(e,"data-ko-properties")}),modelDef.createOrUpdateBlockDef(e,u,b,{contextName:r});var f=modelDef.ensurePathAndGetBindValue.bind(void 0,e,o,l,u,"");"block"==r&&f("id",""),$("style",t).each(function(t,a){var r=domutils.getInnerHtml(a),d=modelDef.createOrUpdateBlockDef.bind(void 0,e),s=modelDef.ensurePathAndGetBindValue.bind(void 0,e,o,l),c=processStylesheetRules(r,void 0,s,d,o,i,l,u);if(c!=r)if(""!==c.trim()){var m=n(c);domutils.setAttribute(a,"data-bind","template: { name: '"+m+"' }"),domutils.setContent(a,"")}else domutils.removeElements($(a))}),processStyle(t,i,f,s);for(var v=["data-ko-display","data-ko-editable","data-ko-wrap","href"],k=0;k<v.length;k++){var g=domutils.getAttribute(t,v[k]);if(g)throw console.warn("ERROR: Unsupported "+v[k]+" used together with data-ko-block",t),"ERROR: Unsupported "+v[k]+" used together with data-ko-block"}return $("[data-ko-link]",t).each(function(t,e){var o=domutils.getAttribute(e,"data-ko-link"),a=domutils.getAttribute(e,"replacedstyle");"undefined"!=typeof a&&null!==a||(a=""),a=""!==a?"-ko-attr-href: @"+o+"; "+a:"-ko-attr-href: @"+o,domutils.setAttribute(e,"replacedstyle",a),domutils.setAttribute(e,"data-ko-wrap",o),domutils.removeAttribute(e,"data-ko-link")}),$("[replacedstyle]",t).each(function(t,e){processStyle(e,i,f,!1)}),$("[replacedhttp-equiv]",t).each(function(t,e){replacedAttributes(e,"http-equiv")}),$("[data-ko-display]",t).each(function(t,e){wrapElementWithCondition("data-ko-display",e,f)}),$("[data-ko-editable]",t).each(function(t,e){var o,a,i,r,l,d,s=domutils.getAttribute(e,"data-ko-editable");if(s.lastIndexOf(".")>0){var u=s.substr(0,s.lastIndexOf("."));l=f(u)}else l=f(s);if(d="wysiwygClick: function(obj, evt) { $root.selectItem("+l+", $data); return false }, clickBubble: false, wysiwygCss: { selecteditem: $root.isSelectedItem("+l+") }, scrollIntoView: $root.isSelectedItem("+l+")","img"!=domutils.getLowerTagName(e)){a=domutils.getInnerHtml(e);var c=f(s,a,!0,"wysiwyg");if(o="",domutils.getAttribute(e,"id")||(o+="wysiwygId: id()+'_"+s.replace(".","_")+"', "),"undefined"!=typeof d&&(o+=d+", "),o+="wysiwygOrHtml: "+c,"td"==domutils.getLowerTagName(e)){var m=$('<div data-ko-wrap="false" style="width: 100%; height: 100%"></div>')[0];domutils.setAttribute(m,"data-bind",o);var p=domutils.getInnerHtml($("<div></div>").append(m));domutils.setContent(e,p)}else i=domutils.getAttribute(e,"data-bind"),r=(null!==i?i+", ":"")+o,domutils.setAttribute(e,"data-bind",r),domutils.setContent(e,"");domutils.removeAttribute(e,"data-ko-editable")}else{var h=domutils.getAttribute(e,"width");if(""===h&&(h=null),null===h)throw console.error("ERROR: data-ko-editable images must declare a WIDTH attribute!",e),"ERROR: data-ko-editable images must declare a WIDTH attribute!";var b=domutils.getAttribute(e,"height");""===b&&(b=null);var v=domutils.getAttribute(e,"align");i=domutils.getAttribute(e,"data-bind");var k=i&&i.match(/virtualAttr: {[^}]* height: ([^,}]*)[,}]/);k&&(b=k[1]);var g=i&&i.match(/virtualAttr: {[^}]* width: ([^,}]*)[,}]/);g&&(h=g[1]);var w;a=domutils.getAttribute(e,"data-ko-placeholder-src");var y="";a?y=domutils.getAttribute(e,"src"):a=domutils.getAttribute(e,"src");var A;h&&b?A=h+"+'x'+"+b:b?h||(A="'h'+"+b+"+''"):A="'w'+"+h+"+''";var _,D=b||domutils.getAttribute(e,"data-ko-placeholder-height"),R=h||domutils.getAttribute(e,"data-ko-placeholder-width");if(domutils.removeAttribute(e,"src"),domutils.removeAttribute(e,"data-ko-editable"),domutils.removeAttribute(e,"data-ko-placeholder-height"),domutils.removeAttribute(e,"data-ko-placeholder-width"),domutils.removeAttribute(e,"data-ko-placeholder-src"),a&&(_="{ width: "+R+", height: "+D+", text: "+A+"}"),!R||!D)throw console.error("IMG data-ko-editable must declare width and height attributes, or their placeholder counterparts data-ko-placeholder-width/data-ko-placeholder-height",e),"ERROR: IMG data-ko-editable MUST declare width and height attributes, or their placeholder counterparts data-ko-placeholder-width/data-ko-placeholder-height";var B=f(s,y,!1,"wysiwyg");o="wysiwygSrc: { width: "+h+", height: "+b+", src: "+B+", placeholder: "+_+" }",r=(null!==i?i+", ":"")+o,domutils.setAttribute(e,"data-bind",r);var I=n(e),O="{ width: "+h;"left"==v?O+=", float: 'left'":"right"==v?O+=", float: 'right'":"center"==v?console.log("non so cosa fa align=center su una img e quindi non so come simularne l'editing"):"top"==v?O+=", verticalAlign: 'top'":"middle"==v?O+=", verticalAlign: 'middle'":"bottom"==v&&(O+=", verticalAlign: 'bottom'"),O+="}",$(e).before("<!-- ko wysiwygImg: { _data: $data, _item: "+l+", _template: '"+I+"', _editTemplate: 'img-wysiwyg', _src: "+B+", _width: "+h+", _height: "+b+", _align: "+(null===v?void 0:"'"+v+"'")+", _size: "+A+", _method: "+w+", _placeholdersrc: "+_+", _stylebind: "+O+" } -->"),$(e).after("<!-- /ko -->")}}),$("[href]",t).each(function(t,e){var o=domutils.getAttribute(e,"href"),a="wysiwygHref: '"+converterUtils.addSlashes(o)+"'",i=domutils.getAttribute(e,"data-bind"),r=(null!==i?i+", ":"")+a;domutils.setAttribute(e,"data-bind",r)}),$("replacedblock",t).each(function(t,r){var s=c[t],m=processBlock(s,e,o,a,i,"block",u,d,!0,n),p=modelDef.ensurePathAndGetBindValue(e,o,l,u,"",m);$(r).before("<!-- ko block: { data: "+converterUtils.addSlashes(p)+", template: 'block' } -->"),$(r).after("<!-- /ko -->"),$(r).remove()}),$($("[data-ko-wrap]",t).get().reverse(),t).each(function(t,e){var o=domutils.getAttribute(e,"data-ko-wrap");if("undefined"==typeof o||""===o||"true"===o)throw"Unsupported empty value for data-ko-wrap: use false value if you want to always remove the tag";var a,i,r=converterUtils.conditionBinding(o,f),l=domutils.getAttribute(e,"data-bind");if(""!==l&&null!==l&&l.match(/(block|wysiwygOrHtml):/)){var d="<!-- ko "+l+" -->"+domutils.getInnerHtml(e)+"<!-- /ko -->";a=n(d),domutils.removeAttribute(e,"data-ko-wrap"),i=n(e),domutils.replaceHtml(e,"<!-- ko template: /* special */ (typeof templateMode != 'undefined' && templateMode == 'wysiwyg') || "+r+" ? '"+i+"' : '"+a+"' --><!-- /ko -->")}else a=n(domutils.getInnerHtml(e)),domutils.removeAttribute(e,"data-ko-wrap"),domutils.setContent(e,"<!-- ko template: '"+a+"' --><!-- /ko -->"),i=n(e),domutils.replaceHtml(e,"<!-- ko template: (typeof templateMode != 'undefined' && templateMode == 'wysiwyg') || "+r+" ? '"+i+"' : '"+a+"' --><!-- /ko -->")}),n(t,u,"show"),a(l,u,r,d),u}catch(e){throw console.error("Exception while parsing the template",e,t),e}},translateTemplate=function(t,e,o,a){var i={},r=conditional_replace(e.replace(/(<[^>]+\s)(style|http-equiv)(="[^"]*"[^>]*>)/gi,function(t,e,o,a){return e+"replaced"+o+a})),l=$(r),d=l[0],s=[],n=function(t,e,o,a){s.push({root:t,block:e,context:o,container:a})},u=function(t,e,o){if("undefined"==typeof i.themes&&(i.themes={}),"undefined"==typeof i.themes[t]&&(i.themes[t]={}),"undefined"==typeof i.themes[t][e]||null===i.themes[t][e])i.themes[t][e]=o;else if("undefined"!=typeof o&&null!==o){var a=i.themes[t][e];a!=o&&console.log("Error setting a new default for property "+e+" in theme "+t+". old:"+a+" new:"+o+"!")}},c=$("[data-ko-container]",l),m={};c.each(function(t,e){var o=domutils.getAttribute(e,"data-ko-container")+"Blocks";domutils.removeAttribute(e,"data-ko-container"),domutils.setAttribute(e,"data-bind","block: "+o);var a=$("> [data-ko-block]",e);domutils.removeElements(a,!0),m[o]=a}),modelDef.createOrUpdateBlockDef(i,"id"),modelDef.createOrUpdateBlockDef(i,"bodyTheme"),modelDef.createOrUpdateBlockDef(i,"blocks","blocks[]"),modelDef.createOrUpdateBlockDef(i,"text"),processBlock(d,i,u,n,o,"template",t,void 0,!1,a);var p=function(e,r,l){processBlock(l,i,u,n,o,"block",t,e,!0,a)};for(var h in m)if(m.hasOwnProperty(h)){var b=m[h],f=h;modelDef.ensurePathAndGetBindValue(i,u,t,t,"",f+".blocks","[]"),b.each(p.bind(void 0,f))}var v={_defs:i,templateName:t,_blocks:s};return"undefined"!=typeof i[t]._version&&(v.version=i[t]._version),v};module.exports=translateTemplate;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./..\\..\\..\\bower_components\\console-browserify\\index.js":1,"./declarations.js":50,"./domutils.js":51,"./model.js":54,"./stylesheet.js":56,"./utils.js":57}],56:[function(require,module,exports){
"use strict";var cssParse=require("./..\\..\\..\\bower_components\\mensch\\lib\\parser.js"),console=require("./..\\..\\..\\bower_components\\console-browserify\\index.js"),converterUtils=require("./utils.js"),elaborateDeclarations=require("./declarations.js"),_processStyleSheetRules_processBlockDef=function(e,t){for(var o,s,r,l=0;l<t.length;l++)if("rule"==t[l].type){for(var n=t[l].selectors,a=!1,i=!1,c=0;c<n.length;c++)n[c].match(/:preview$/)?i=!0:a=!0;if(i&&a)throw console.log("cannot mix selectors type (:preview and declarations) in @supports -ko-blockdefs ",n),"Cannot mix selectors type (:preview and declarations) in @supports -ko-blockdefs";if(!i&&!a)throw console.log("cannot find known selectors in @supports -ko-blockdefs ",n),"Cannot find known selectors in @supports -ko-blockdefs";if(a){o="",s={},r=t[l].declarations;for(var p=0;p<r.length;p++)"property"==r[p].type&&("label"==r[p].name?s.name=r[p].value:"context"==r[p].name?s.contextName=r[p].value:"properties"==r[p].name?o=r[p].value:"theme"==r[p].name?s.globalStyle="_theme_."+r[p].value:"themeOverride"==r[p].name?s.themeOverride="true"==String(r[p].value).toLowerCase():s[r[p].name]=r[p].value);for(var u=0;u<n.length;u++)e(n[u],o,s)}if(i)for(var d=0;d<n.length;d++){var f=n[d].substr(0,n[d].indexOf(":")),v=t[l].declarations;e(f,void 0,{previewBindings:v})}}},processStylesheetRules=function(e,t,o,s,r,l,n,a){var i=e,c=null;if("undefined"==typeof t){var p=cssParse(e,{comments:!0,position:!0});if("stylesheet"!=p.type||"undefined"==typeof p.stylesheet)throw console.log("unable to process styleSheet",p),"Unable to parse stylesheet";t=p.stylesheet.rules}for(var u,d=t.length-1;d>=0;d--){if("supports"==t[d].type&&"-ko-blockdefs"==t[d].name)_processStyleSheetRules_processBlockDef(s,t[d].rules),i=converterUtils.removeStyle(i,t[d].position.start,c,0,0,0,"");else if("media"==t[d].type||"supports"==t[d].type)i=processStylesheetRules(i,t[d].rules,o,s,r,l,n,a);else if("comment"==t[d].type);else if("rule"==t[d].type){for(var f=t[d].selectors,v="",y=null,h=0;h<f.length;h++){v.length>0&&(v+=", ");var m=f[h].match(/\[data-ko-block=([^ ]*)\]/);if(null!==m){if(null!==y&&y!=m[1])throw"Found multiple block-match attribute selectors: cannot translate it ("+y+" vs "+m[1]+")";y=m[1]}v+="<!-- ko text: templateMode =='wysiwyg' ? '#main-wysiwyg-area ' : '' --><!-- /ko -->"+f[h]}if(y){var k="<!-- ko foreach: $root.findObjectsOfType($data, '"+y+"') -->",g="<!-- /ko -->",b=c,w=" ";t[d].declarations.length>0&&(t[d].declarations[0].position.start.line!=t[d].position.end.line&&(w="\n"+new Array(t[d].position.start.col).join(" ")),b=t[d].declarations[t[d].declarations.length-1].position.end),null===b?i+=w+g:i=b==c?converterUtils.removeStyle(i,b,c,0,0,0,w+g):converterUtils.removeStyle(i,b,c,0,0,0,w+"}"+w+g),v=k+w+v.replace(new RegExp("\\[data-ko-block="+y+"\\]","g"),"<!-- ko text: '#'+id() -->"+y+"<!-- /ko -->"),s(y,"",{contextName:"block"})}var S=y?y:a;u=o.bind(this,S,"");var x=elaborateDeclarations(i,t[d].declarations,l,u);null!==x&&(i=x),i=converterUtils.removeStyle(i,t[d].position.start,t[d].position.end,0,0,0,v)}else console.log("Unknown rule type",t[d].type,"while parsing <style> rules");c=t[d].position.start}return i};module.exports=processStylesheetRules;

},{"./..\\..\\..\\bower_components\\console-browserify\\index.js":1,"./..\\..\\..\\bower_components\\mensch\\lib\\parser.js":15,"./declarations.js":50,"./utils.js":57}],57:[function(require,module,exports){
"use strict";var console=require("./..\\..\\..\\bower_components\\console-browserify\\index.js"),jsep=require("./..\\..\\..\\bower_components\\jsep\\src\\jsep.js");jsep.addBinaryOp("or",1),jsep.addBinaryOp("and",2),jsep.addBinaryOp("eq",6),jsep.addBinaryOp("neq",6),jsep.addBinaryOp("lt",7),jsep.addBinaryOp("lte",7),jsep.addBinaryOp("gt",7),jsep.addBinaryOp("gte",7);var addSlashes=function(e){return e.replace(/[\\"']/g,"\\$&").replace(/\u0000/g,"\\0")},removeStyle=function(e,r,n,t,o,a,i){for(var s=e.split("\n"),p=o,u=a,l=1+t;l<r.line;l++)p+=s[l-1-t].length+1;if(p+=r.col,null!==n){for(var d=1+t;d<n.line;d++)u+=s[d-1-t].length+1;u+=n.col}else u+=e.length+1;var c=e.substr(0,p-1)+i+e.substr(u-1);return c},expressionGenerator=function(e,r,n){function t(e){switch(e){case"or":return"||";case"and":return"&&";case"lt":return"<";case"lte":return"<=";case"gt":return">";case"gte":return">=";case"eq":return"==";case"neq":return"!=";default:return e}}function o(e,r,n,a){if("undefined"==typeof n&&(n=!0),"undefined"!=typeof a&&"Identifier"!==e.type&&"MemberExpression"!==e.type&&console.log("Cannot apply default value to variable when using expressions"),"BinaryExpression"===e.type||"LogicalExpression"===e.type)return"("+o(e.left,r,n)+" "+t(e.operator)+" "+o(e.right,r,n)+")";if("CallExpression"===e.type){var i=e.arguments.map(function(e){return o(e,r,n)});return o(e.callee,r,n)+"("+i.join(", ")+")"}if("UnaryExpression"===e.type)return e.operator+o(e.argument,r,n);if("MemberExpression"==e.type&&e.computed)throw"Unexpected computed member expression";if("MemberExpression"!=e.type||e.computed){if("Literal"===e.type)return e.raw;if("Identifier"===e.type){var s=e.name;return n?r(s,a)+"()":s}if("ConditionalExpression"===e.type)return"("+o(e.test,r,n)+" ? "+o(e.consequent,r,n)+" : "+o(e.alternate,r,n)+")";throw"Compound"===e.type?"Syntax error in expression: operator expected after "+o(e.body[0],r,!1):"Found an unsupported expression type: "+e.type}var p=o(e.object,r,!1)+"."+o(e.property,r,!1);return n&&"Math"!==e.object.name&&"Color"!==e.object.name?r(p,a)+"()":p}return o(e,r,void 0,n)},expressionBinding=function(e,r,n){var t;if("undefined"!=typeof n&&null!==n){var o=e.trim().replace(/@\[([^\]]+)\]|@([a-zA-Z0-9\._]+)\b/g,"###var###");if(o=o.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),"###var###"==o)t=[null,n];else if(o="^"+o.replace(/###var###/g,"(.+)")+"$",t=n.trim().match(new RegExp(o)),!t)throw console.log("Cannot find matches",t,"for",n,e,o,e),"Cannot find default value for "+e+" in "+n}try{var a=0,i="'"+e.replace(/@\[([^\]]+)\]|@([a-zA-Z0-9\._]+)\b|(')/g,function(e,n,o,i){if(i)return"\\"+i;a++;var s,p=n||o;if(t&&("undefined"!=typeof t[a]?s=t[a].trim():console.log("ABZZZ Cannot find default value for",p,"in",t,"as",a)),n){var u=jsep(n),l=expressionGenerator(u,r,s);return"'+"+l+"+'"}return"'+"+r(p,s)+"()+'"})+"'";return i=i.replace(/(^|[^\\])''\+/g,"$1").replace(/\+''/g,""),0===a&&"false"!==i&&"true"!==i&&console.error("Unexpected expression with no valid @variable references",e),i}catch(r){throw"Exception parsing expression "+e+" "+r}},conditionBinding=function(e,r){var n=jsep(e),t=expressionGenerator(n,r);return t};module.exports={addSlashes:addSlashes,removeStyle:removeStyle,conditionBinding:conditionBinding,expressionBinding:expressionBinding};

},{"./..\\..\\..\\bower_components\\console-browserify\\index.js":1,"./..\\..\\..\\bower_components\\jsep\\src\\jsep.js":3}],58:[function(require,module,exports){
(function (global){
"use strict";var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),kowrap=require("./..\\..\\..\\bower_components\\knockout.wrap\\knockout.wrap.js"),console=require("./..\\..\\..\\bower_components\\console-browserify\\index.js"),_getOptionsObject=function(e){for(var t=e.split("|"),n={},o=0;o<t.length;o++){var r=t[o].split("=");n[r[0]]=r.length>1?r[1]:r[0]}return n},_makeComputed=function(e,t,n,o,r,i){var a=ko.computed({read:function(){var n=e();if(null===n){var a=ko.utils.unwrapObservable(o);return"undefined"==typeof a||"custom"==a?ko.utils.unwrapObservable(t):i[a][r]}return n},write:function(a){var l,u=ko.utils.unwrapObservable(o);if(l="undefined"==typeof u||"custom"==u?ko.utils.peekObservable(t):i[u][r],n)e(a==l?null:a);else{var s=ko.utils.peekObservable(e);a==l&&null===s||e(a)}}});return a},_nextVariantFunction=function(e,t,n){for(var o,r=e.utils.unwrapObservable(t),i=0;i<n.length&&(o=e.utils.peekObservable(n[i]),o!=r);i++);i==n.length&&(console.warn("Didn't find a variant!",t,r,n),i=n.length-1);var a=i+1;a==n.length&&(a=0);var l=e.utils.peekObservable(n[a]);t(l)},_getVariants=function(e){var t,n=e._variant;if("object"!=typeof e[n]||"undefined"==typeof e[n]._widget||"string"!=typeof e[n]._options&&"boolean"!==e[n]._widget)throw console.error("Unexpected variant declaration",n,e[n]),"Unexpected variant declaration: cannot find property "+n+" or its _options string and it is not a boolean";return t="string"==typeof e[n]._options?Object.keys(_getOptionsObject(e[n]._options)):[!0,!1]},_makeComputedFunction=function(e,t,n,o,r,i,a){if("undefined"==typeof e){if("undefined"==typeof o.utils.unwrapObservable(a).type)throw console.log("TODO ERROR Found a non-typed def ",e,a),"Found a non-typed def "+e;var l=o.utils.unwrapObservable(o.utils.unwrapObservable(a).type);e=t[l],"object"!=typeof e&&console.log("TODO ERROR Found a non-object def ",e,"for",l)}"undefined"==typeof r&&"undefined"!=typeof i&&i&&(r=a);var u="$root.content().",s=e._globalStyles;if("undefined"!=typeof s)for(var p in s)if(s.hasOwnProperty(p)){var b,c,f,d="$root.content().theme().scheme";if(s[p].substr(0,u.length)!=u)throw"UNEXPECTED globalStyle path ("+s[p]+") outside selfPath ("+u+")";f=s[p].substr(u.length),c=r,d.substr(0,u.length)==u?b=d.substr(u.length):(console.log("IS THIS CORRECT?",d,u),b=d);for(var v=c,h=f.split("()."),_="",k=!0,g=0;g<h.length;g++)c=o.utils.unwrapObservable(c)[h[g]],k?"theme"==h[g]&&(k=!1):(_.length>0&&(_+="."),_+=h[g]);for(var m=b.split("()."),w=0;w<m.length;w++)v=o.utils.unwrapObservable(v)[m[w]];for(var O=!0,y=p.split("."),R=a,S=0;S<y.length;S++)R=o.utils.unwrapObservable(R)[y[S]];if(!o.isObservable(R))throw"Unexpected non observable target "+p+"/"+_;R._defaultComputed=_makeComputed(R,c,O,v,_,n)}if("undefined"!=typeof e._variant){for(var F=e._variant.split("."),C=a,x=o.utils.unwrapObservable(a),P=0;P<F.length;P++)C=o.utils.unwrapObservable(C)[F[P]];if("undefined"!=typeof C._defaultComputed&&(console.log("Found variant on a style property: beware variants should be only used on content properties because they don't match the theme fallback behaviour",e._variant),C=C._defaultComputed),"undefined"==typeof C)throw console.log("ERROR looking for variant target",e._variant,a),"ERROR looking for variant target "+e._variant;x._nextVariant=_nextVariantFunction.bind(C,o,C,_getVariants(e))}for(var j in e)if(e.hasOwnProperty(j)){var B=e[j];if("object"==typeof B&&null!==B&&"undefined"!=typeof B._context&&"block"==B._context){var E=r[j](),I=_makeComputedFunction(t[j],t,n,o,r,i,E);a[j](I)}else if("object"==typeof B&&null!==B&&"blocks"==B.type){for(var T,D,J,V=r[j](),A=V.blocks(),U=0;U<A.length;U++)T=o.utils.unwrapObservable(A[U]),D=o.utils.unwrapObservable(T.type),J=_makeComputedFunction(t[D],t,n,o,r,i,T),A[U](J);var W=V.blocks;_augmentBlocksObservable(W,_blockInstrumentFunction.bind(V,void 0,t,n,o,void 0,r,i)),r[j]._wrap=_makeBlocksWrap.bind(r[j],W._instrumentBlock),r[j]._unwrap=_unwrap.bind(r[j])}}return a},_augmentBlocksObservable=function(e,t){e._instrumentBlock=t,"undefined"==typeof e.origPush&&(e.origPush=e.push,e.push=_makePush.bind(e),e.origSplice=e.splice,e.splice=_makeSplice.bind(e))},_makeBlocksWrap=function(e,t){var n=ko.toJS(t),o=n.blocks;n.blocks=[];var r=kowrap.fromJS(n,void 0,!0)();_augmentBlocksObservable(r.blocks,e);for(var i=0;i<o.length;i++){var a=ko.toJS(o[i]);a.id="block_"+i,r.blocks.push(a)}this(r)},_makePush=function(){if(arguments.length>1)throw"Array push with multiple arguments not implemented";if(arguments.length>0&&ko.isObservable(arguments[0])&&("function"==typeof arguments[0]._unwrap?arguments[0]=arguments[0]._unwrap():console.log("WARN: pushing observable with no _unwrap function (TODO remove me, expected condition)")),ko.isObservable(arguments[0]))return this.origPush.apply(this,arguments);var e=this._instrumentBlock(arguments[0]);return this.origPush.apply(this,[e])},_makeSplice=function(){if(arguments.length>3)throw"Array splice with multiple objects not implemented";if(arguments.length>2&&ko.isObservable(arguments[2])&&("function"==typeof arguments[2]._unwrap?arguments[2]=arguments[2]._unwrap():console.log("WARN: splicing observable with no _unwrap function (TODO remove me, expected condition)")),arguments.length>2&&!ko.isObservable(arguments[2])){var e=this._instrumentBlock(arguments[2]);return this.origSplice.apply(this,[arguments[0],arguments[1],e])}return this.origSplice.apply(this,arguments)},_blockInstrumentFunction=function(e,t,n,o,r,i,a,l){"undefined"==typeof r&&(r=l);var u;u={"":_makeComputedFunction.bind(r,e,t,n,o,i,a)};var s=kowrap.fromJS(r,u,!0);return s._unwrap=_unwrap.bind(s),s},_wrap=function(e,t){var n=ko.utils.unwrapObservable(e(ko,t,void 0,!0));this(n)},_unwrap=function(){return ko.toJS(this)},_modelInstrument=function(e,t,n){var o=_blockInstrumentFunction.bind(void 0,t,n,n.themes),r=o(ko,e,void 0,!0);return r._wrap=_wrap.bind(r,o),r._unwrap=_unwrap.bind(r),r};module.exports=_modelInstrument;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./..\\..\\..\\bower_components\\console-browserify\\index.js":1,"./..\\..\\..\\bower_components\\knockout.wrap\\knockout.wrap.js":10}],59:[function(require,module,exports){
(function (global){
function Color(t){this.getBrightness=function(n){return t(n).getBrightness()},this.isLight=function(n){return t(n).isLight()},this.isDark=function(n){return t(n).isDark()},this.getLuminance=function(n){return t(n).getLuminance()},this.lighten=function(n,i){return t(n).lighten(i).toHexString()},this.brighten=function(n,i){return t(n).brighten(i).toHexString()},this.darken=function(n,i){return t(n).darken(i).toHexString()},this.desaturate=function(n,i){return t(n).desaturate(i).toHexString()},this.saturate=function(n,i){return t(n).saturate(i).toHexString()},this.greyscale=function(n){return t(n).greyscale().toHexString()},this.spin=function(n,i){return t(n).spin(i).toHexString()},this.complement=function(n){return t(n).complement().toHexString()},this.mix=t.mix,this.readability=t.readability,this.isReadable=t.isReadable,this.mostReadable=t.mostReadable}var tinycolor=require("./..\\..\\..\\bower_components\\tinycolor\\tinycolor.js"),colorPlugin=function(t){global.Color=new Color(tinycolor)};module.exports=colorPlugin;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./..\\..\\..\\bower_components\\tinycolor\\tinycolor.js":18}],60:[function(require,module,exports){
(function (global){
"use strict";var console=require("./..\\..\\..\\bower_components\\console-browserify\\index.js"),$=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),inlineDocument=require("./..\\..\\..\\bower_components\\juice\\lib\\inline")({}).inlineDocument,inlinerPlugin=function(e){e.inline=function(e){$("[style]:not([replacedstyle])",e).each(function(e,n){var t=$(n);t.attr("replacedstyle",t.attr("style"))});var n=[];$('style[data-inline="true"]',e).each(function(e,t){var i=$(t).html();i=i.replace(/<!-- ko ((?!--).)*? -->/g,""),i=i.replace(/<!-- \/ko -->/g,""),n.push(i),$(t).removeAttr("data-inline")});var t=n.join("\n"),i=function(n,t){return"undefined"==typeof t&&(t=e),$(n,t)};i.root=function(){return $(":root",e)},inlineDocument(i,t,{styleAttributeName:"replacedstyle"})}};module.exports=inlinerPlugin;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./..\\..\\..\\bower_components\\console-browserify\\index.js":1,"./..\\..\\..\\bower_components\\juice\\lib\\inline":4}],61:[function(require,module,exports){
(function (global){
"use strict";var console=require("./..\\..\\..\\bower_components\\console-browserify\\index.js"),ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),$=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),lsLoader=function(e,t){var a=global.localStorage.getItem("metadata-"+e);if(null!==a){var o,l=global.localStorage.getItem("template-"+e);null!==l&&(o=JSON.parse(l));var n=JSON.parse(a);return{metadata:n,model:o,extension:lsCommandPluginFactory(n,t)}}throw"Cannot find stored data for "+e},lsCommandPluginFactory=function(e,t){var a=function(e,a,o){var l={name:"Save",enabled:ko.observable(!0)};l.execute=function(){l.enabled(!1),o.metadata.changed=Date.now(),"undefined"==typeof o.metadata.key&&(console.warn("Unable to find ket in metadata object...",o.metadata),o.metadata.key=e),global.localStorage.setItem("metadata-"+e,o.exportMetadata()),global.localStorage.setItem("template-"+e,o.exportJSON()),l.enabled(!0)};var n={name:"Test",enabled:ko.observable(!0)},r={name:"Download",enabled:ko.observable(!0)};n.execute=function(){n.enabled(!1);var l=global.localStorage.getItem("testemail");if(null!==l&&"null"!=l||(l=o.t("Insert here the recipient email address")),l=global.prompt(o.t("Test email address"),l),l.match(/@/)){global.localStorage.setItem("testemail",l),console.log("TODO testing...",l);var r=t?t:"/dl/",d=$.post(r,{action:"email",rcpt:l,subject:"[test] "+e+" - "+a,html:o.exportHTML()},null,"html");d.fail(function(){console.log("fail",arguments),o.notifier.error(o.t("Unexpected error talking to server: contact us!"))}),d.success(function(){console.log("success",arguments),o.notifier.success(o.t("Test email sent..."))}),d.always(function(){n.enabled(!0)})}else global.alert(o.t("Invalid email address")),n.enabled(!0)},r.execute=function(){r.enabled(!1),o.notifier.info(o.t("Downloading...")),o.exportHTMLtoTextarea("#downloadHtmlTextarea");var e=t?t:"/dl/";global.document.getElementById("downloadForm").setAttribute("action",e),global.document.getElementById("downloadForm").submit(),r.enabled(!0)},o.save=l,o.test=n,o.download=r}.bind(void 0,e.key,e.name);return a};module.exports=lsLoader;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./..\\..\\..\\bower_components\\console-browserify\\index.js":1}],62:[function(require,module,exports){
"use strict";require("./..\\..\\bower_components\\knockout-sortable\\build\\knockout-sortable.min.js"),require("./bindings/jqueryui-spinner.js"),require("./bindings/jqueryui-tabs.js"),require("./bindings/colorpicker.js"),require("./bindings/blocks.js"),require("./bindings/csstext.js"),require("./bindings/bind-iframe.js"),require("./bindings/droppable.js"),require("./bindings/fileupload.js"),require("./bindings/virtuals.js"),require("./bindings/wysiwygs.js"),require("./bindings/scrollfix.js"),require("./bindings/if-subs.js"),require("./bindings/extsortables.js"),require("./bindings/eventable.js"),require("./bindings/tooltips.js"),require("./bindings/extender-pagination.js"),require("./bindings/validated-value.js"),require("./bindings/scrollintoview.js");

},{"./..\\..\\bower_components\\knockout-sortable\\build\\knockout-sortable.min.js":8,"./bindings/bind-iframe.js":28,"./bindings/blocks.js":29,"./bindings/colorpicker.js":31,"./bindings/csstext.js":32,"./bindings/droppable.js":33,"./bindings/eventable.js":34,"./bindings/extender-pagination.js":35,"./bindings/extsortables.js":36,"./bindings/fileupload.js":37,"./bindings/if-subs.js":38,"./bindings/jqueryui-spinner.js":39,"./bindings/jqueryui-tabs.js":40,"./bindings/scrollfix.js":42,"./bindings/scrollintoview.js":43,"./bindings/tooltips.js":45,"./bindings/validated-value.js":46,"./bindings/virtuals.js":47,"./bindings/wysiwygs.js":48}],63:[function(require,module,exports){
(function (global){
"use strict";function _viewModelPluginInstance(e){var t;return{viewModel:function(n){t=e(n)},init:function(){"undefined"!=typeof t&&"undefined"!=typeof t.init&&t.init()},dispose:function(){"undefined"!=typeof t&&"undefined"!=typeof t.dispose&&t.dispose()}}}var $=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),kojqui=(typeof window !== "undefined" ? window['kojqui'] : typeof global !== "undefined" ? global['kojqui'] : null),templateConverter=require("./converter/main.js"),console=require("./..\\..\\bower_components\\console-browserify\\index.js"),initializeViewmodel=require("./viewmodel.js"),templateSystem=require("./bindings/choose-template.js"),pluginsCall=function(e,t,n,o){var a,i,r,d,l;l=[],"undefined"!=typeof o&&o?(a=e.length-1,i=0,r=-1):(a=0,i=e.length-1,r=1);for(var s=a;s!=i+r;s+=r)"undefined"!=typeof e[s][t]&&(d=e[s][t].apply(e[s],n),"undefined"!=typeof d&&l.push(d));return l},origDisposeCallback=ko.utils.domNodeDisposal.addDisposeCallback;ko.utils.domNodeDisposal.addDisposeCallback=function(e,t){var n=function(e){try{t(e)}catch(e){console.warn("Caught unexpected dispose callback exception",e)}};origDisposeCallback(e,n)};var bindingPluginMaker=function(e){return{viewModel:function(t){try{e("applyBindings",ko.applyBindings.bind(void 0,t))}catch(e){throw console.warn(e,e.stack),e}},dispose:function(){try{e("unapplyBindings",ko.cleanNode.bind(this,global.document.body))}catch(e){throw console.warn(e,e.stack),e}}}},templateCreator=function(e,t,n,o){var a=n;for("undefined"!=typeof n&&"undefined"!=typeof o&&("object"==typeof t&&"replacedhtml"==t.tagName.toLowerCase()||(a+="-"+o));"undefined"==typeof a||null===a||e.exists(a);)a="anonymous-"+Math.floor(1e5*Math.random()+1);if("object"==typeof t&&"replacedhtml"==t.tagName.toLowerCase()){var i=$(t),r=$("replacedhead",i),d=$("replacedbody",i);e.adder(a+"-head",r.html()||""),e.adder(a+"-show",d.html()||""),e.adder(a+"-preview",i.html()),e.adder(a+"-wysiwyg",i.html()),r.children().detach(),r.html("<!-- ko block: content --><!-- /ko -->"),r.before("<!-- ko withProperties: { templateMode: 'head' } -->"),r.after("<!-- /ko -->"),d.html("<!-- ko block: content --><!-- /ko -->"),e.adder(a+"-iframe",i[0].outerHTML)}else"object"==typeof t?e.adder(a,t.outerHTML):e.adder(a,t);return a},_templateUrlConverter=function(e,t){return t.match(/^[^\/]*:/)||t.match(/^\//)||t.match(/^\[/)||t.match(/^#?$/)?null:e+t},templateLoader=function(e,t,n,o,a,i){var r="string"==typeof t?t:n.template,d="./",l=r.lastIndexOf("/");l!=-1&&(d=r.substr(0,l+1));var s,c=_templateUrlConverter.bind(void 0,d);s="undefined"==typeof n?{template:r,name:"No name",created:Date.now()}:n,$.get(r,function(t){var n=templateCompiler(e,c,"template",t,o,s,a,i);n.init()})},templateCompiler=function(e,t,n,o,a,i,r,d){var l=o.match(/^([\S\s]*)([<]html[^>]*>[\S\s]*<\/html>)([\S\s]*)$/i);if(null===l)throw"Unable to find <html> opening and closing tags in the template";var s=l[1],c={"<html":0,"<head":0,"<body":0,"</html":0,"</body":0,"</head":0},u=l[2].replace(/(<\/?)(html|head|body)([^>]*>)/gi,function(e,t,n,o){return c[(t+n).toLowerCase()]+=1,t+"replaced"+n+o});for(var p in c)if(c.hasOwnProperty(p)&&1!=c[p]){if(0===c[p])throw"ERROR: missing mandatory element "+p+">";if(c[p]>1)throw"ERROR: multiple element "+p+"> occourences are not supported (found "+c[p]+" occourences)"}var m=l[3],f=[],h="+$root.contentListeners()",b=[];if("undefined"!=typeof r)for(var g=0;g<r.length;g++)"function"==typeof r[g]?b.push(_viewModelPluginInstance(r[g])):b.push(r[g]);var v=[],y={adder:function(e,t){if("string"!=typeof t)throw"Template system: cannot create new template "+e;var n=t.match(/(data)?-ko-[^ =:]*/g);n&&console.error("ERROR: found unexpected -ko- attribute in compiled template",e,", you probably mispelled it:",n),templateSystem.addTemplate(e,t),v.push(e)},exists:function(e){var t=templateSystem.getTemplateContent(e);return"undefined"!=typeof t},dispose:function(){for(var e=v.length-1;e>=0;e--)templateSystem.removeTemplate(v[e])}};ko.bindingHandlers.block.templateExists=y.exists;for(var k=templateCreator.bind(void 0,y),w=e("translateTemplate",templateConverter.translateTemplate.bind(void 0,n,u,t,k)),C=e("generateModel",templateConverter.wrappedResultModel.bind(void 0,w)),S={},E=pluginsCall(b,"widget",[$,ko,kojqui]),M=0;M<E.length;M++)S[E[M].widget]=E[M];f.push.apply(f,e("generateEditors",templateConverter.generateEditors.bind(void 0,w,S,t,k,h)));var x=!1;if("undefined"!=typeof a&&null!==a){var T;T="string"==typeof a?ko.utils.parseJson(a):a;var L=e("checkModel",templateConverter.checkModel.bind(void 0,C._unwrap(),f,T));2==L&&(console.error("Trying to compile an incompatible template version!",C._unwrap(),f,T),x=!0);try{C._wrap(T)}catch(e){console.error("Unable to inject model content!",e),x=!0}}var I=s+templateSystem.getTemplateContent(n+"-iframe").replace(/(<\/?)replaced(html|head|body)([^>]*>)/gi,function(e,t,n,o){return t+n+o})+m,D=ko.bindingHandlers.bindIframe.tpl;ko.bindingHandlers.bindIframe.tpl=I;var B={dispose:function(){ko.bindingHandlers.bindIframe.tpl=D}};b.push(B),b.push(y);var P=e("initializeViewmodel",initializeViewmodel.bind(this,C,f,t,d));P.metadata=i;var R="0.16.0";return"undefined"!=typeof P.metadata.editorversion&&P.metadata.editorversion!==R&&console.warn("The model being loaded has been created with an older editor version",P.metadata.editorversion,"vs",R),P.metadata.editorversion=R,"undefined"!=typeof w.version&&("undefined"!=typeof P.metadata.templateversion&&P.metadata.templateversion!==w.version&&console.error("The model being loaded has been created with a different template version",w.version,"vs",P.metadata.templateversion),P.metadata.templateversion=w.version),templateSystem.init(),b.push(bindingPluginMaker(e)),pluginsCall(b,"viewModel",[P]),x&&$("#incompatible-template").dialog({modal:!0,appendTo:"#mo-body",buttons:{Ok:function(){$(this).dialog("close")}}}),{model:P,init:function(){pluginsCall(b,"init",void 0,!0)},dispose:function(){pluginsCall(b,"dispose",void 0,!0)}}},checkFeature=function(e,t){if(!t())throw console.warn("Missing feature",e),"Missing feature "+e},isCompatible=function(){try{return checkFeature("matchMedia",function(){return"undefined"!=typeof global.matchMedia}),checkFeature("XMLHttpRequest 2",function(){return"XMLHttpRequest"in global&&"withCredentials"in new global.XMLHttpRequest}),checkFeature("ES5 strict",function(){return function(){return"undefined"==typeof this}()}),checkFeature("CSS borderRadius",function(){return"undefined"!=typeof global.document.body.style.borderRadius}),checkFeature("CSS boxShadow",function(){return"undefined"!=typeof global.document.body.style.boxShadow}),checkFeature("CSS boxSizing",function(){return"undefined"!=typeof global.document.body.style.boxSizing}),checkFeature("CSS backgroundSize",function(){return"undefined"!=typeof global.document.body.style.backgroundSize}),checkFeature("CSS backgroundOrigin",function(){return"undefined"!=typeof global.document.body.style.backgroundOrigin}),checkBadBrowserExtensions(),!0}catch(e){return!1}},checkBadBrowserExtensions=function(){var e="checkbadbrowsersframe",t=ko.bindingHandlers.bindIframe.tpl;ko.bindingHandlers.bindIframe.tpl='<!DOCTYPE html>\r\n<html>\r\n<head><title>A</title>\r\n</head>\r\n<body><p style="color: blue" align="right" data-bind="style: { color: \'red\' }">B</p><div data-bind="text: content"></div></body>\r\n</html>\r\n',$("body").append('<iframe id="'+e+'" data-bind="bindIframe: $data"></iframe>');var n=global.document.getElementById(e);ko.applyBindings({content:"dummy content"},n);var o=n.contentWindow.document.doctype,a="<!DOCTYPE "+o.name+(o.publicId?' PUBLIC "'+o.publicId+'"':"")+(!o.publicId&&o.systemId?" SYSTEM":"")+(o.systemId?' "'+o.systemId+'"':"")+">",i=a+"\n"+n.contentWindow.document.documentElement.outerHTML;ko.cleanNode(n),ko.removeNode(n),ko.bindingHandlers.bindIframe.tpl=t;var r='<!DOCTYPE html>\n<html><head><title>A</title>\n</head>\n<body><p align="right" style="color: red;" data-bind="style: { color: \'red\' }">B</p><div data-bind="text: content">dummy content</div>\n\n</body></html>',d='<!DOCTYPE html>\n<html><head><title>A</title>\n</head>\n<body><p style="color: red;" data-bind="style: { color: \'red\' }" align="right">B</p><div data-bind="text: content">dummy content</div>\n\n</body></html>',l='<!DOCTYPE html>\n<html><head><title>A</title>\n</head>\n<body><p style="color: red;" align="right" data-bind="style: { color: \'red\' }">B</p><div data-bind="text: content">dummy content</div>\n\n</body></html>';if(r!==i&&d!==i&&l!==i)throw console.info("BadBrowser.FrameContentCheck",i.length,r.length,d.length,l.length,i==r,i==d,i==l),console.info(i),"Unexpected frame content. Misbehaving browser: "+i.length+"/"+r.length+"/"+d.length+"/"+l.length},fixPageEvents=function(){global.addEventListener&&(global.addEventListener("drag",function(e){e=e||global.event,e.preventDefault()},!1),global.addEventListener("dragstart",function(e){e=e||global.event,e.preventDefault()},!1),global.addEventListener("dragover",function(e){e=e||global.event,e.preventDefault()},!1),global.addEventListener("drop",function(e){e=e||global.event,e.preventDefault()},!1),global.document.body.addEventListener("drop",function(e){e.preventDefault()},!1)),global.document.ondragstart&&(global.document.ondragstart=function(){return!1})};module.exports={compile:templateCompiler,load:templateLoader,isCompatible:isCompatible,fixPageEvents:fixPageEvents};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./..\\..\\bower_components\\console-browserify\\index.js":1,"./bindings/choose-template.js":30,"./converter/main.js":53,"./viewmodel.js":67}],64:[function(require,module,exports){
"use strict";var console=require("./..\\..\\bower_components\\console-browserify\\index.js"),_call=function(e){return e()},logs=[],_timedCall=function(e,o){var l,t=(new Date).getTime();"object"==typeof console&&console.time&&console.time(e),l=_call(o),"object"==typeof console&&console.time&&console.timeEnd(e);var n=(new Date).getTime()-t;return"object"!=typeof console||console.time||console.log(e,"took",n,"ms"),logs.push({name:e,time:n}),logs.length>100&&logs.unshift(),l};module.exports={timedCall:_timedCall,logs:logs};

},{"./..\\..\\bower_components\\console-browserify\\index.js":1}],65:[function(require,module,exports){
(function (global){
"use strict";var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),undoManager=require("./..\\..\\..\\bower_components\\knockout-undomanager\\knockout-undomanager.js"),undoserializer=require("./undoserializer.js"),addUndoStackExtensionMaker=function(e){return function(n){n.contentListeners(n.contentListeners()+2);var o=undoManager(n.content,{levels:100,undoLabel:ko.computed(function(){return n.t("Undo (#COUNT#)")}),redoLabel:ko.computed(function(){return n.t("Redo")})});return n.undo=o.undoCommand,n.undo.execute=e.bind(n,"undo",n.undo.execute),n.redo=o.redoCommand,n.redo.execute=e.bind(n,"redo",n.redo.execute),n.undoReset=e.bind(n,"undoReset",o.reset),n.setUndoModeMerge=o.setModeMerge,n.setUndoModeOnce=o.setModeOnce,o.setModeIgnore(),o.setUndoActionMaker(undoserializer.makeUndoAction.bind(void 0,n.content)),undoserializer.watchEnabled(!0),{pause:function(){o.setModeIgnore()},run:function(){o.setModeOnce()},init:function(){o.setModeOnce()},dispose:function(){n.contentListeners(n.contentListeners()-2),undoserializer.watchEnabled(!1),o.dispose()}}}};module.exports=addUndoStackExtensionMaker;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./..\\..\\..\\bower_components\\knockout-undomanager\\knockout-undomanager.js":9,"./undoserializer.js":66}],66:[function(require,module,exports){
(function (global){
"use strict";var ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),console=require("./..\\..\\..\\bower_components\\console-browserify\\index.js"),_reference=function(e,n){for(var t,r,o=0,a=e;o<n.length;)switch(n.charAt(o)){case"(":")"==n.charAt(o+1)&&(a=a()),o+=2;break;case"[":r=n.indexOf("]",o),a=a[n.substring(o+1,r)],o=r+1;break;case".":t=n.indexOf("(",o),t==-1&&(t=n.length),r=n.indexOf("[",o),r==-1&&(r=n.length),r=Math.min(t,r),a=a[n.substring(o+1,r)],o=r}return a},_getPath=function(e,n){for(var t,r="",o=0;o<=e.length;o++)if(t=o<e.length?e[o]:n,ko.isObservable(t)&&(r+="()"),"undefined"!=typeof t._fieldName)r+="."+t._fieldName;else{if(!(o>0&&"function"==typeof e[o-1].pop))throw console.error("Unexpected parent with no _fieldName and no parent array",o,e),"Unexpected parent with no _fieldName and no parent array";var a=ko.isObservable(e[o-1])?ko.utils.peekObservable(e[o-1]):e[o-1],i=ko.utils.arrayIndexOf(a,t);if(i==-1)throw console.error("Unexpected object not found in parent array",a,t,o,e.length,ko.toJS(a),ko.utils.unwrapObservable(t)),"Unexpected object not found in parent array";r+="["+i+"]"}return r},makeDereferencedUndoAction=function(e,n,t,r,o){var a=_reference(n,t);e(a,r,o)},listener,_setListener=function(e){listener=e},makeUndoActionDereferenced=function(e,n,t,r,o,a){try{var i=_getPath(t,r);if("object"!=typeof o&&"function"!=typeof o||(o=ko.toJS(o)),"undefined"!=typeof a&&("object"==typeof a.value||"function"==typeof a.value)){var c=ko.toJS(a);a=c}if("undefined"!=typeof listener)try{listener(i,r,o,a)}catch(e){console.log("Undoserializer ignoring exception in listener callback")}return makeDereferencedUndoAction.bind(void 0,n,e,i,o,a)}catch(e){console.error("Exception processing undo",e,t,r,a)}},watchEnabled,_watchEnabled=function(e){return"undefined"==typeof e?watchEnabled:void(watchEnabled=e)};module.exports={dereference:_getPath,reference:_reference,makeUndoAction:makeUndoActionDereferenced,setListener:_setListener,watchEnabled:_watchEnabled};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./..\\..\\..\\bower_components\\console-browserify\\index.js":1}],67:[function(require,module,exports){
(function (global){
"use strict";function initializeEditor(e,o,t,n){function r(e){return e.replace(/<replacedcc[^>]* condition="([^"]*)"[^>]*>([\s\S]*?)<\/replacedcc>/g,function(e,o,t){var n="<!--[if "+o.replace(/&amp;/,"&")+"]>";return n+=t.replace(/<!-- cc:bc:([A-Za-z:]*) -->(<\/cc>)?<!-- cc:ac:\1 -->/g,"</$1>").replace(/><\/cc><!-- cc:sc -->/g,"/>").replace(/<!-- cc:bo:([A-Za-z:]*) --><cc/g,"<$1").replace(/^.*<!-- cc:start -->/,"").replace(/<!-- cc:end -->.*$/,""),n+="<![endif]-->"})}var l={galleryRecent:ko.observableArray([]).extend({paging:16}),galleryRemote:ko.observableArray([]).extend({paging:16}),selectedBlock:ko.observable(null),selectedItem:ko.observable(null),selectedTool:ko.observable(0),selectedImageTab:ko.observable(0),dragging:ko.observable(!1),draggingImage:ko.observable(!1),galleryLoaded:ko.observable(!1),showPreviewFrame:ko.observable(!1),previewMode:ko.observable("mobile"),showToolbox:ko.observable(!0),showTheme:ko.observable(!1),showGallery:ko.observable(!1),debug:ko.observable(!1),contentListeners:ko.observable(0),logoPath:"dist/img/mosaico32.png",logoUrl:".",logoAlt:"mosaico"};return l.content=e,l.blockDefs=o,l.notifier=toastr,l.tt=function(e,o){if("undefined"!=typeof o)for(var t in o)o.hasOwnProperty(t)&&(e=e.replace(new RegExp("__"+t+"__","g"),o[t]));return e},l.t=l.tt,l.ut=function(e,o){return o},l.templatePath=t,l.remoteUrlProcessor=function(e){return e},l.remoteFileProcessor=function(e){return"undefined"!=typeof e.url&&(e.url=l.remoteUrlProcessor(e.url)),"undefined"!=typeof e.thumbnailUrl&&(e.thumbnailUrl=l.remoteUrlProcessor(e.thumbnailUrl)),e},l.loadGallery=function(){l.galleryLoaded("loading");var e=n?n:"/upload/";$.getJSON(e,function(e){for(var o=0;o<e.files.length;o++)e.files[o]=l.remoteFileProcessor(e.files[o]);l.galleryLoaded(e.files.length),l.galleryRemote(e.files.reverse())}).fail(function(){l.galleryLoaded(!1),l.notifier.error(l.t("Unexpected error listing files"))})},l.fileToImage=function(e,o,t){return e.url},l.removeBlock=function(e,o){ko.utils.unwrapObservable(l.selectedBlock)==ko.utils.unwrapObservable(e)&&l.selectBlock(null,!0);var t=o.blocks.remove(e);return l.notifier.info(l.t("Block removed: use undo button to restore it...")),t},l.duplicateBlock=function(e,o){var t=ko.utils.unwrapObservable(e),n=ko.toJS(ko.utils.unwrapObservable(o.blocks)[t]);"undefined"!=typeof n.id&&(n.id=""),o.blocks.splice(t+1,0,n)},l.moveBlock=function(e,o,t){var n=ko.utils.unwrapObservable(e),r=ko.utils.unwrapObservable(o.blocks);if(t&&n>0||!t&&n<r.length-1){var a=n+(t?-1:1),c=r[a];l.startMultiple(),o.blocks.splice(a,1),o.blocks.splice(n,0,c),l.stopMultiple()}},l.loadDefaultBlocks=function(){var e=ko.toJS(l.content().mainBlocks);e.blocks=[];for(var o=ko.utils.unwrapObservable(l.blockDefs),t=0;t<o.length;t++){var n=ko.toJS(o[t]);n.id="block_"+t,e.blocks.push(n)}performanceAwareCaller("setMainBlocks",l.content().mainBlocks._wrap.bind(l.content().mainBlocks,e))},l.addImage=function(e){var o=$("#main-wysiwyg-area .selectable-img.selecteditem");return 1==o.length&&"object"==typeof e&&"undefined"!=typeof e.url&&(ko.contextFor(o[0])._src(e.url),!0)},l.addBlock=function(e,o){var t,n=l.selectedBlock();if(null!==n)for(var r=l.content().mainBlocks().blocks().length-1;r>=0;r--)if(l.content().mainBlocks().blocks()[r]()==n){t=r;break}var a;"undefined"!=typeof t?(a=t+1,l.content().mainBlocks().blocks.splice(a,0,e),l.notifier.info(l.t("New block added after the selected one (__pos__)",{pos:a}))):(l.content().mainBlocks().blocks.push(e),a=l.content().mainBlocks().blocks().length-1,l.notifier.info(l.t("New block added at the model bottom (__pos__)",{pos:a})));var c=l.content().mainBlocks().blocks()[a]();return l.selectBlock(c,!0),!1},l.findObjectsOfType=function(e,o){var t=[],n=ko.utils.unwrapObservable(e);for(var r in n)if(n.hasOwnProperty(r)){var l=ko.utils.unwrapObservable(n[r]);if(r.match(/Blocks$/))for(var a=ko.utils.unwrapObservable(l.blocks),c=0;c<a.length;c++){var i=ko.utils.unwrapObservable(a[c]);null!==o&&ko.utils.unwrapObservable(i.type)!=o||t.push(i)}else"object"==typeof l&&null!==l&&(null!==o&&ko.utils.unwrapObservable(l.type)!=o||t.push(l))}return t},l.placeholderHelper={element:function(e){return $(e[0].outerHTML).removeClass("ui-draggable").addClass("sortable-placeholder").css("display","block").css("position","relative").css("width","100%").css("height","auto").css("opacity",".8")[0]},update:function(e,o){}},l.startMultiple=function(){"undefined"!=typeof l.setUndoModeMerge&&l.setUndoModeMerge()},l.stopMultiple=function(){"undefined"!=typeof l.setUndoModeOnce&&l.setUndoModeOnce()},l.localGlobalSwitch=function(e,o){var t=e();return e(null===t?o():null),!1},l.selectItem=function(e,o,t){var n=ko.utils.peekObservable(e);return"undefined"!=typeof t&&l.selectBlock(t,!1,!0),n!=o&&(e(o),null!==o&&0===l.selectedTool()&&l.selectedTool(1)),!1}.bind(l,l.selectedItem),l.isSelectedItem=function(e){return l.selectedItem()==e},l.selectBlock=function(e,o,t,n){var r=ko.utils.peekObservable(e);n||l.selectItem(null),r!=o&&(e(o),l.showGallery(!1),null===o||t||0!==l.selectedTool()||l.selectedTool(1))}.bind(l,l.selectedBlock),l.countSubscriptions=function(e,o){var t=0;for(var n in e)if(e.hasOwnProperty(n)){var r=e[n];if(ko.isObservable(r)&&("undefined"!=typeof r._defaultComputed&&("undefined"!=typeof o&&console.log(o+"/"+n+"/_",r._defaultComputed.getSubscriptionsCount()),t+=r._defaultComputed.getSubscriptionsCount()),"undefined"!=typeof o&&console.log(o+"/"+n+"/-",r.getSubscriptionsCount()),t+=r.getSubscriptionsCount(),r=ko.utils.unwrapObservable(r)),"object"==typeof r&&null!==r){var a=l.countSubscriptions(r,"undefined"!=typeof o?o+"/"+n+"@":void 0);"undefined"!=typeof o&&console.log(o+"/"+n+"@",a),t+=a}}return t},l.loopSubscriptionsCount=function(){var e=l.countSubscriptions(l.content());global.document.getElementById("subscriptionsCount").innerHTML=e,global.setTimeout(l.loopSubscriptionsCount,1e3)},l.export=function(){var e=performanceAwareCaller("exportHTML",l.exportHTML);return e},l.exportHTML=function(){var e="exportframe";$("body").append('<iframe id="'+e+'" data-bind="bindIframe: $data"></iframe>');var o=global.document.getElementById(e);ko.applyBindings(l,o),ko.cleanNode(o),l.inline&&l.inline(o.contentWindow.document);var t=o.contentWindow.document.doctype,n="<!DOCTYPE "+t.name+(t.publicId?' PUBLIC "'+t.publicId+'"':"")+(!t.publicId&&t.systemId?" SYSTEM":"")+(t.systemId?' "'+t.systemId+'"':"")+">",a=n+"\n"+o.contentWindow.document.documentElement.outerHTML;ko.removeNode(o),a=a.replace(/<script ([^>]* )?type="text\/html"[^>]*>[\s\S]*?<\/script>/gm,""),a=a.replace(/<!-- ko ((?!--).)*? -->/g,""),a=a.replace(/<!-- \/ko -->/g,""),a=a.replace(/ data-bind="[^"]*"/gm,""),a=a.replace(/ data-mce-(href|src|style)="[^"]*"/gm,""),a=a.replace(/ style="[^"]*"([^>]*) replaced(style="[^"]*")/gm,"$1 $2"),a=a.replace(/ replaced(style="[^"]*")([^>]*) style="[^"]*"/gm," $1$2"),a=a.replace(/ replaced(style="[^"]*")/gm," $1"),a=a.replace(/ http-equiv="[^"]*"([^>]*) replaced(http-equiv="[^"]*")/gm,"$1 $2"),a=a.replace(/ replaced(http-equiv="[^"]*")([^>]*) http-equiv="[^"]*"/gm," $1$2"),a=a.replace(/ replaced(http-equiv="[^"]*")/gm," $1"),a=r(a);var c=a.match(/ data-[^ =]+(="[^"]+")? /)||a.match(/ replaced([^= ]*=)/);return c&&console.warn("Output HTML contains unexpected data- attributes or replaced attributes",c),a},l.exportHTMLtoTextarea=function(e){$(e).val(l.exportHTML())},l.exportJSONtoTextarea=function(e){$(e).val(l.exportJSON())},l.importJSONfromTextarea=function(e){l.importJSON($(e).val())},l.exportMetadata=function(){var e=ko.toJSON(l.metadata);return e},l.exportJSON=function(){var e=ko.toJSON(l.content);return e},l.exportJS=function(){return ko.toJS(l.content)},l.importJSON=function(e){var o=ko.utils.parseJson(e);l.content._wrap(o)},l.exportTheme=function(){var e={},o=l.content().theme(),t=function(e,o,n){for(var r in n)if(n.hasOwnProperty(r)){var l=ko.utils.unwrapObservable(n[r]);null!==l&&"object"==typeof l?t(r+".",o,l):o[e+r]=l}};t("",e,o);var n="";for(var r in e)e.hasOwnProperty(r)&&"type"!=r&&(n+=r+": "+e[r]+";\n");return n},l.loadImage=function(e){l.galleryRecent.unshift(e),l.selectedImageTab(0)},l.dialog=function(e,o){$(e).dialog(o)},l.log=function(e,o){},l.selectedImageTab.subscribe(function(e){1==e&&l.galleryLoaded()===!1&&l.loadGallery()},l,"change"),l}var $=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),ko=(typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),console=require("./..\\..\\bower_components\\console-browserify\\index.js"),performanceAwareCaller=require("./timed-call.js").timedCall,toastr=require("./..\\..\\bower_components\\toastr\\toastr.js");toastr.options={closeButton:!1,debug:!1,positionClass:"toast-bottom-full-width",target:"#mo-body",onclick:null,showDuration:"300",hideDuration:"1000",timeOut:"5000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"},module.exports=initializeEditor;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./..\\..\\bower_components\\console-browserify\\index.js":1,"./..\\..\\bower_components\\toastr\\toastr.js":19,"./timed-call.js":64}]},{},[27,20])(27)
});