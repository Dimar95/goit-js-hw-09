const t={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]"),body:document.querySelector("body")};timerId=null,t.start.addEventListener("click",(()=>(t.start.setAttribute("disabled","disabled"),void(timerId=setInterval((()=>t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`),1e3))))),t.stop.addEventListener("click",(()=>(clearInterval(timerId),void t.start.removeAttribute("disabled","disabled"))));
//# sourceMappingURL=01-color-switcher.0f6bf515.js.map