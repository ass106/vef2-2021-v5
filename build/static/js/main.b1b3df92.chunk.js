(this["webpackJsonpvef2-2021-v5-synilausn"]=this["webpackJsonpvef2-2021-v5-synilausn"]||[]).push([[0],{12:function(e,t,n){e.exports={layout:"Layout_layout__BL6qA",layout__header:"Layout_layout__header__6RpdC",layout__main:"Layout_layout__main__fqRzr",footer:"Layout_footer__mZIMT"}},13:function(e,t,n){e.exports={layout:"News_layout__2rgvF",layout__header:"News_layout__header__28viq",layout__main:"News_layout__main__16XrF",category:"News_category__oD4XG",articles:"News_articles__1QmJv",navlink:"News_navlink__ypf01"}},14:function(e,t,n){e.exports={layout:"NewsList_layout__3ThI2",layout__header:"NewsList_layout__header__1qAqA",layout__main:"NewsList_layout__main__1Mo4-",categories:"NewsList_categories__Qjsnt",articles:"NewsList_articles__3kisT",news:"NewsList_news__2HglW",navlink:"NewsList_navlink__13mT9"}},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(21),s=n.n(r),i=n(6),l=n(2),o=n(12),u=n.n(o),j=n(1);function h(e){var t=e.title,n=e.children;return Object(j.jsxs)("div",{className:u.a.layout,children:[Object(j.jsx)("header",{className:u.a.layout__header,children:Object(j.jsx)("h1",{children:t})}),Object(j.jsx)("main",{className:u.a.layout__main,children:n}),Object(j.jsx)("hr",{}),Object(j.jsx)("footer",{children:Object(j.jsxs)("div",{className:u.a.footer,children:[Object(j.jsx)(i.b,{to:"/",children:"Heim"}),Object(j.jsxs)("span",{children:["Fr\xe9ttir fr\xe1 ",Object(j.jsx)("a",{href:"https://www.ruv.is/rss",children:"RSS"})," \xfej\xf3nustu ",Object(j.jsx)("a",{href:"https://www.ruv.is/",children:"R\xdaV"}),"."]})]})})]})}var _=n(10),b=n.n(_),d=n(15),O=n(8),x=n(13),f=n.n(x),p="http://localhost:5000";function v(e){var t=e.articleId,n=e.total,a=Object(c.useState)(!1),r=Object(O.a)(a,2),s=r[0],l=r[1],o=Object(c.useState)(null),u=Object(O.a)(o,2),h=u[0],_=u[1],x=Object(c.useState)(!1),v=Object(O.a)(x,2),y=v[0],m=v[1];return Object(c.useEffect)((function(){function e(){return(e=Object(d.a)(b.a.mark((function e(){var n,c,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),_(null),c="".concat(p,"/").concat(t),e.prev=3,e.next=6,fetch(c);case 6:if((a=e.sent).ok){e.next=9;break}throw new Error("result not ok");case 9:return e.next=11,a.json();case 11:n=e.sent,e.next=18;break;case 14:return e.prev=14,e.t0=e.catch(3),_("Gat ekki s\xf3tt flokk."),e.abrupt("return");case 18:return e.prev=18,l(!1),e.finish(18);case 21:m(n);case 22:case"end":return e.stop()}}),e,null,[[3,14,18,21]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),h?Object(j.jsxs)("p",{children:["Villa kom upp: ",h]}):s?Object(j.jsx)("p",{children:"S\xe6ki g\xf6gn..."}):(console.log(n?f.a.category:null),Object(j.jsxs)("div",{className:n?null:f.a.category,children:[Object(j.jsxs)("div",{className:n?null:f.a.articles,children:[y&&Object(j.jsx)("h2",{children:y.title}),y&&y.items.slice(0,n).map((function(e,t){return Object(j.jsx)("p",{children:Object(j.jsx)("a",{href:e.link,children:e.title})},t)}))]}),!n&&Object(j.jsx)(i.b,{className:f.a.navlink,to:"/",children:"Til baka"})]}))}var y=n(14),m=n.n(y),k="http://localhost:5000";function w(){var e=Object(c.useState)(!1),t=Object(O.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),s=Object(O.a)(r,2),l=s[0],o=s[1],u=Object(c.useState)(!1),h=Object(O.a)(u,2),_=h[0],x=h[1];Object(c.useEffect)((function(){function e(){return(e=Object(d.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),o(null),e.prev=2,e.next=5,fetch(k);case 5:if((n=e.sent).ok){e.next=8;break}throw new Error("result not ok");case 8:return e.next=10,n.json();case 10:t=e.sent,e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(2),o("Gat ekki s\xf3tt fr\xe9ttir"),e.abrupt("return");case 17:return e.prev=17,a(!1),e.finish(17);case 20:x(t);case 21:case"end":return e.stop()}}),e,null,[[2,13,17,20]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);for(var f=[],p=0;p<_.length;p+=1){var y={id:_[p].id,title:_[p].title,url:_[p].url};f.push(y)}return l?(console.log(f),Object(j.jsxs)("p",{children:["Villa kom upp: ",l]})):n?Object(j.jsx)("p",{children:"S\xe6ki g\xf6gn..."}):Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:m.a.articles,children:_&&f.map((function(e,t){return Object(j.jsxs)("div",{className:m.a.categories,children:[Object(j.jsx)("div",{className:m.a.news,children:Object(j.jsx)(v,{articleId:e.id,total:5})}),Object(j.jsx)("p",{children:Object(j.jsx)(i.b,{className:m.a.navlink,to:"/frett/".concat(e.id),children:"Allar fr\xe9ttir"})})]},t)}))})})}function N(){return Object(j.jsx)(w,{})}function g(){var e=Object(l.f)().id;return Object(j.jsx)("div",{children:Object(j.jsx)(v,{articleId:e})})}function L(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"404 fannst ekki"}),Object(j.jsx)(i.b,{to:"/",children:"Heim"})]})}function S(){return Object(j.jsx)(h,{title:"R\xdaV Fr\xe9ttir",children:Object(j.jsx)("section",{children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{exact:!0,path:"/",component:N}),Object(j.jsx)(l.a,{path:"/frett/:id",component:g}),Object(j.jsx)(l.a,{component:L})]})})})}n(34);s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(i.a,{children:Object(j.jsx)(S,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.b1b3df92.chunk.js.map