(window.webpackJsonpbookfinder=window.webpackJsonpbookfinder||[]).push([[0],{136:function(e,t,o){e.exports=o(299)},141:function(e,t,o){},142:function(e,t,o){},299:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),l=o(25),i=o.n(l),r=(o(141),o(31)),c=(o(142),o(306));function s(e){var t=Object(n.useState)(""),o=Object(r.a)(t,2),l=o[0],i=o[1];return a.a.createElement("div",{style:{marginTop:"5%"}},a.a.createElement("h1",{style:{color:"#a1a1a1"}}," Book Finder "),a.a.createElement("input",{onChange:function(e){!function(e){var t=e.target.value;i(t)}(e)},type:"text",style:{width:"300px",height:"35px"}}),a.a.createElement(c.a,{color:"teal",onClick:function(t){e.getBooks(l)}},"Search"))}function u(e){console.log(e.bookInfo);return a.a.createElement("div",{style:{background:"yellow",position:"relative",marginBottom:"20%"}},a.a.createElement("div",{style:{fontFamily:"Roboto",background:"white",width:"400px",height:"300px",boxShadow:"10px 10px 5px grey"}},a.a.createElement("div",{style:{position:"absolute",display:"flex",top:"-40px"}},a.a.createElement("div",{style:{}},a.a.createElement("img",{src:e.bookInfo.volumeInfo.imageLinks?e.bookInfo.volumeInfo.imageLinks.smallThumbnail:"https://other-projects-fsxl.s3.us-east-2.amazonaws.com/book-cover-placeholder.png",alt:""})),a.a.createElement("div",{style:{paddingTop:"80px",textAlign:"initial",paddingLeft:"5%",color:"#a1a1a1",paddingRight:"5px",textOverflow:"ellipsis"}},a.a.createElement("h3",{style:{color:"#979797",textOverflow:"ellipsis"}},e.bookInfo.volumeInfo.title,e.bookInfo.volumeInfo.subtitle?": "+e.bookInfo.volumeInfo.subtitle:null),e.bookInfo.volumeInfo.authors?"By ".concat(e.bookInfo.volumeInfo.authors[0]," "):null,a.a.createElement("br",null),e.bookInfo.volumeInfo.publisher?"Published By: ".concat(e.bookInfo.volumeInfo.publisher):null,a.a.createElement("div",{style:{marginTop:"3%"}},a.a.createElement(c.a,{onClick:function(){var t;t=e.bookInfo.volumeInfo.canonicalVolumeLink,window.open(t,"_blank")},color:"teal"},"See this book"))))))}function m(e){return a.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"auto auto",marginTop:"6%",textAlign:"center",justifyItems:"center",paddingLeft:"15%",paddingRight:"15%"}},e.books.map((function(e,t){return a.a.createElement(u,{key:t,bookInfo:e})})))}var p=o(126),f=o.n(p),d=o(127),b=o.n(d),g=o(307),h=o(32),v=function(){return a.a.createElement(g.a,{icon:!0},a.a.createElement(h.a,{name:"search"}),"We don't have any books matching your search.")};var k=function(e){var t=Object(n.useState)([]),o=Object(r.a)(t,2),l=o[0],i=o[1],c=Object(n.useState)(!1),u=Object(r.a)(c,2),p=u[0],d=u[1],g=Object(n.useState)(!0),h=Object(r.a)(g,2),k=h[0],y=h[1];return a.a.createElement("div",{className:"App"},a.a.createElement(s,{getBooks:function(e){d(!0),k||y(!0),f.a.get("https://www.googleapis.com/books/v1/volumes?q="+e).then((function(e){0===e.data.totalItems?(d(!1),i([]),y(!1)):(i(e.data.items),d(!1),k||y(!0))})).catch((function(e){console.log("this is the err",e)}))}}),p?a.a.createElement("div",{style:{paddingTop:"5%"}},a.a.createElement(b.a,{type:"Oval",color:"#009C95",height:100,width:100,timeout:3e3})):null,k?null:v(),!p&&l.length?a.a.createElement(m,{books:l}):null)};i.a.render(a.a.createElement(k,null),document.getElementById("root"))}},[[136,1,2]]]);
//# sourceMappingURL=main.238df23a.chunk.js.map