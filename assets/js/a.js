!function(){function e(t){for(var a=t.childNodes,d=0;d<a.length;d++)e(a[d]);if(t.tagName===n){var o=document.createElement(n);t.getAttribute(r)&&o.setAttribute(r,t.getAttribute(r)),o.text=t.text,t.parentNode.insertBefore(o,t),t.parentNode.removeChild(t)}}var t="";if(t){var n="SCRIPT",r="src",a=document.createDocumentFragment(),d=document.createElement("I");a.appendChild(d),d.innerHTML='<em style="display:none;">&nbsp;</em>'+t,e(d),document.body.appendChild(a)}}();