(this.webpackJsonpwordsearch=this.webpackJsonpwordsearch||[]).push([[0],{12:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(6),i=c.n(r),a=(c(12),c(5)),j=c.n(a),l=c(7),o=c(2),d=c(3),h=c(0),b=function(){return Object(h.jsx)("div",{className:"loader"})},u=function(){var e=Object(n.useState)("dictionary"),t=Object(o.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)([]),i=Object(o.a)(r,2),a=i[0],u=i[1],O=Object(n.useState)(!0),x=Object(o.a)(O,2),m=x[0],p=x[1],f=Object(n.useState)(null),v=Object(o.a)(f,2),g=v[0],w=v[1],y=Object(n.useRef)(),N=function(){var e=Object(l.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.dictionaryapi.dev/api/v2/entries/en_US/".concat(c));case 3:if((t=e.sent).ok){e.next=6;break}throw Error("Sorry pal, we couldn't find definitions for the word you were looking for.");case 6:return e.next=8,t.json();case 8:n=e.sent,u(n),p(!1),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),w(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){N()}),[]),g?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{children:g}),Object(h.jsx)("button",{className:"error",onClick:function(){return window.location.reload()},children:"Refresh Page"})]}):m?Object(h.jsx)(b,{}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("section",{className:"heading",children:[Object(h.jsxs)("header",{children:[Object(h.jsx)("h1",{className:"title",children:"WordSearch"}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p(!0),N()},children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"search",children:"Search"}),Object(h.jsx)("input",{type:"search",name:"search",id:"search",placeholder:"Search words in english",value:c,onChange:function(e){return s(e.target.value)}})]}),Object(h.jsx)("button",{type:"submit",children:Object(h.jsx)(d.c,{})})]})]}),Object(h.jsx)("article",{children:Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"word",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:a[0].word}),Object(h.jsxs)("p",{className:"phonics",children:["/",a[0].phonetic,"/"]})]}),Object(h.jsx)("div",{className:"play-audio",children:Object(h.jsx)("button",{onClick:function(){y.current.play()},children:Object(h.jsx)(d.d,{})})})]}),a[0].origin?Object(h.jsxs)("div",{className:"details",children:[Object(h.jsx)("h2",{children:"Origin:"}),Object(h.jsx)("p",{children:a[0].origin})]}):""]})})]}),Object(h.jsxs)("article",{className:"meaning-section",children:[Object(h.jsx)("h2",{children:"Meaning"}),Object(h.jsx)("ul",{className:"meaning",children:a[0].meanings.map((function(e,t){return Object(h.jsxs)("li",{children:[Object(h.jsx)("h2",{children:e.partOfSpeech}),e.definitions.map((function(e,t){return Object(h.jsxs)("div",{className:"meaning-details",children:[Object(h.jsx)("p",{className:"definition",children:e.definition}),e.example?Object(h.jsx)("p",{className:"example",children:e.example}):"",e.synonyms&&Object(h.jsxs)("div",{className:"opposite",children:[Object(h.jsx)("h3",{children:"Synonmys"}),Object(h.jsx)("div",{children:e.synonyms.map((function(e,t){if(!(t>=5))return Object(h.jsx)("p",{children:e},t)}))})]})]},t)}))]},t)}))})]}),Object(h.jsxs)("footer",{children:[Object(h.jsxs)("p",{children:["created by Williams Samuel"," ",Object(h.jsx)("a",{href:"https://twitter.com/williams_codes",target:"_blank",children:Object(h.jsx)(d.b,{})})]}),Object(h.jsx)("a",{href:"https://github.com/williamssam/wordsearch",target:"_blank",className:"github-link",children:Object(h.jsx)(d.a,{})})]}),a[0].phonetics.map((function(e,t){return Object(h.jsxs)("audio",{src:"http:".concat(e.audio),ref:y,children:["Your browser does not support the",Object(h.jsx)("code",{children:"audio"})," element."]},t)}))]})};var O=function(){return Object(h.jsx)("div",{className:"container",children:Object(h.jsx)(u,{})})};i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.87993d26.chunk.js.map