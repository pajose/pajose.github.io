(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Dtc0:function(e,t,a){"use strict";a.r(t);var n=a("mwIZ"),l=a.n(n),r=a("q1tI"),s=a.n(r),i=a("eNIv"),m=a("6uTu"),c=a("STHm");var o=e=>{let{about:t}=e;return s.a.createElement(c.a,{title:"About Me"},s.a.createElement("div",{className:"mb-6"},s.a.createElement("p",null,t)))},d=a("Wbzz"),p=a("hbLQ");var u=e=>{let{posts:t}=e;return s.a.createElement(c.a,{title:"Latest Posts"},t.map(e=>s.a.createElement(p.a,{key:e.node.fields.slug,name:e.node.frontmatter.title,description:e.node.frontmatter.description,link:e.node.fields.slug,internal:!0})),t.length>=5&&s.a.createElement(d.Link,{className:"text-gray-500 text-sm hover:text-black",to:"/blog"},"View all posts →"))};var E=e=>{let{experience:t}=e;return t.length?s.a.createElement(c.a,{title:"Experience"},t.map(e=>s.a.createElement(p.a,{key:e.name,name:e.name,description:e.description,link:e.link}))):null};var k=e=>{let{projects:t}=e;return t.length?s.a.createElement(c.a,{title:"Projects"},t.map(e=>s.a.createElement(p.a,{key:e.name,name:e.name,description:e.description,link:e.link}))):null};var g=e=>{let{skills:t}=e;return s.a.createElement(c.a,{title:"Skills"},t.map(e=>s.a.createElement(p.a,{key:e.name,name:e.name,description:e.description})))},h=a("ivnd");t.default=e=>{let{data:t}=e;const a=l()(t,"site.siteMetadata.about",!1),n=l()(t,"site.siteMetadata.projects",!1),r=t.allMarkdownRemark.edges,c=l()(t,"site.siteMetadata.experience",!1),d=l()(t,"site.siteMetadata.skills",!1),p=!r||!r.length;return s.a.createElement(m.a,null,s.a.createElement(h.a,null),s.a.createElement(i.a,{metadata:t.site.siteMetadata,noBlog:p}),a&&s.a.createElement(o,{about:a}),n&&n.length&&s.a.createElement(k,{projects:n}),!p&&s.a.createElement(u,{posts:r}),c&&c.length&&s.a.createElement(E,{experience:c}),d&&d.length&&s.a.createElement(g,{skills:d}))}},STHm:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n);const r="block pt-12 md:flex",s="pb-6 md:w-full md:max-w-150 md:p-0",i="font-xs font-light tracking-widest text-sm text-gray-600 leading-normal uppercase",m="flex-none text-lg text-gray-600 font-light md:flex-1 md:pl-20";t.a=e=>{let{title:t,children:a}=e;return l.a.createElement("div",{className:r},l.a.createElement("div",{className:s},l.a.createElement("h2",{className:i},t)),l.a.createElement("div",{className:m},a))}},hbLQ:function(e,t,a){"use strict";var n=a("Wbzz"),l=a("q1tI"),r=a.n(l);const s="mb-6",i="font-semibold text-gray-900 pb-1",m="text-md text-gray-600 font-light";t.a=e=>{let t,{name:a,description:l,link:c=!1,internal:o=!1}=e;return t=o?r.a.createElement(n.Link,{to:c},a):r.a.createElement("a",{href:c},a),r.a.createElement("div",{className:s},r.a.createElement("h3",{className:`${i} ${c?"hover:underline hover:text-black":""}`},c?t:a),r.a.createElement("p",{className:m},l))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-0994618e0c432217ba7c.js.map