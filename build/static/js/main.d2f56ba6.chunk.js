(this["webpackJsonprest-countries-api"]=this["webpackJsonprest-countries-api"]||[]).push([[0],{11:function(e,t,n){"use strict";n.d(t,"e",(function(){return s})),n.d(t,"c",(function(){return r})),n.d(t,"f",(function(){return i})),n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return l}));var c=n(0),s=(n(1),function(e){var t=e.width;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512",style:{width:t,color:"grey"},children:[Object(c.jsx)("title",{children:"Search"}),Object(c.jsx)("path",{d:"M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z",fill:"none",stroke:"currentColor",strokeMiterlimit:"10",strokeWidth:"32"}),Object(c.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"32",d:"M338.29 338.29L448 448"})]})})}),r=function(e){var t=e.width;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512",style:{width:t},children:[Object(c.jsx)("title",{children:"Moon"}),Object(c.jsx)("path",{className:"transition duration-300 hover:fill-current",d:"M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLineJoin:"round",strokeWidth:"32"})]})})},i=function(e){var t=e.width;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512",style:{width:t},children:[Object(c.jsx)("title",{children:"Sunny"}),Object(c.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"32",d:"M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"}),Object(c.jsx)("circle",{className:"transition duration-300 hover:fill-current",cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"32"})]})})},a=function(e){var t=e.width;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"ionicon hover:fill-current",viewBox:"0 0 512 512",style:{width:t},children:[Object(c.jsx)("title",{children:"Chevron Down"}),Object(c.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"M112 184l144 144 144-144"})]})})},o=function(e){var t=e.width;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512",style:{width:t},children:[Object(c.jsx)("title",{children:"More"}),Object(c.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M256 112v288M400 256H112"}),"/>"]})})},l=function(e){var t=e.width;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512",style:{width:t},children:[Object(c.jsx)("title",{children:"Arrow Back"}),Object(c.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"M244 400L100 256l144-144M120 256h292"})]})})}},28:function(e,t,n){"use strict";var c=n(0),s=n(9),r=n(1),i=function(e){var t=e.width,n=e.height;return Object(c.jsx)("div",{className:"".concat(t," ").concat(n," bg-gray-300 border-gray-200 animate-pulse")})};t.a=function(e){var t=e.src,n=e.alt,a=e.placeholderWidth,o=e.placeholderHeight,l=e.imageHeight,d=e.additionalUtilities,j=Object(r.useState)(!0),h=Object(s.a)(j,2),u=h[0],b=h[1];return Object(c.jsxs)(c.Fragment,{children:[u&&Object(c.jsx)(i,{width:a,height:o}),Object(c.jsx)("img",{onLoad:function(){return b(!1)},src:t,alt:n,className:"w-full ".concat(l||"h-full"," ").concat(d),style:{display:"".concat(u?"none":"inline")}})]})}},32:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var c=n(0),s=n(9),r=n(1),i=n(12),a=n(3),o=n(11),l=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],i=t[1];return Object(c.jsxs)("div",{className:"flex flex-row py-8 px-12 w-full justify-between shadow-md bg-white dark:bg-darkBlue items-center transition duration-500",children:[Object(c.jsx)("h1",{className:"font-bold text-md mr-4",children:"Where in the world?"}),Object(c.jsxs)("button",{className:"flex flex-row items-center focus:outline-none",onClick:function(){i(!n);var e=document.querySelector(".global-container");e.classList.contains("dark")?e.classList.remove("dark"):e.classList.add("dark")},children:[Object(c.jsx)("div",{className:"mr-2",children:n?Object(c.jsx)(o.c,{width:"2rem"}):Object(c.jsx)(o.f,{width:"2rem"})}),Object(c.jsx)("p",{children:"Dark Mode"})]})]})},d=n(14),j=n.n(d),h=n(28),u=function(e){var t=e.countryName;console.log(t);var a=Object(r.useContext)(f).find((function(e){return e.name===t})),d=Object(r.useState)(a),u=Object(s.a)(d,2),b=u[0],m=u[1],x=n(59).countries;return Object(r.useEffect)((function(){b||j.a.get("https://restcountries.eu/rest/v2/name/".concat(t)).then((function(e){m(e.data[0])})).catch((function(e){return console.log(e)}))}),[]),b?Object(c.jsxs)("div",{className:"transition-all duration-300 flex-col min-h-screen dark:bg-veryDarkBlueBg",children:[Object(c.jsx)(l,{}),Object(c.jsxs)("div",{className:"flex flex-col mx-8 md:mx-16",children:[Object(c.jsx)("div",{className:"flex mt-10 mb-20",children:Object(c.jsx)(i.b,{to:"/",children:Object(c.jsxs)("button",{className:"flex flex-row items-center justify-center px-10 shadow-md py-2 transition duration-200 rounded focus:outline-none focus:ring-2 bg-white hover:bg-gray-200 dark:bg-darkBlue dark:hover:bg-gray-600",children:[Object(c.jsx)("div",{children:Object(c.jsx)(o.b,{width:"1rem"})}),Object(c.jsx)("p",{className:"ml-2",children:"Back"})]})})}),Object(c.jsxs)("main",{className:"flex flex-col md:flex-row sm:gap-20 mb-32",children:[Object(c.jsx)("div",{className:"max-w-xl",children:Object(c.jsx)(h.a,{src:b.flag,alt:"".concat(b.name," flag")})}),Object(c.jsxs)("div",{className:"flex-col",children:[Object(c.jsx)("div",{children:Object(c.jsx)("h2",{className:"text-2xl font-bold mt-7 mb-4",children:b.name})}),Object(c.jsxs)("ul",{className:"flex flex-col md:flex-row md:gap-20 items-baseline",children:[Object(c.jsxs)("div",{className:"flex flex-col gap-2 text-sm",children:[Object(c.jsxs)("li",{className:"font-semibold",children:["Native Name:"," ",Object(c.jsx)("span",{className:"font-normal",children:"".concat(b.nativeName)})]}),Object(c.jsxs)("li",{className:"font-semibold",children:["Population:"," ",Object(c.jsx)("span",{className:"font-normal",children:"".concat(b.population)})]}),Object(c.jsxs)("li",{className:"font-semibold",children:["Region:"," ",Object(c.jsx)("span",{className:"font-normal",children:"".concat(b.region)})]}),Object(c.jsxs)("li",{className:"font-semibold",children:["Sub Region:"," ",Object(c.jsx)("span",{className:"font-normal",children:"".concat(b.subregion)})]}),Object(c.jsxs)("li",{className:"font-semibold",children:["Capital:"," ",Object(c.jsx)("span",{className:"font-normal",children:"".concat(b.capital)})]})]}),Object(c.jsxs)("div",{className:"flex flex-col text-sm mt-8 gap-2",children:[Object(c.jsxs)("li",{className:"font-semibold",children:["Top Level Domain:"," ",Object(c.jsx)("span",{className:"font-normal",children:"".concat(b.topLevelDomain[0])})]}),Object(c.jsxs)("li",{className:"font-semibold",children:["Currencies:"," ",b.currencies.map((function(e){return Object(c.jsx)("span",{className:"font-normal",children:"".concat(e.name," ")},e.name)}))]}),Object(c.jsxs)("li",{className:"font-semibold",children:["Languages:"," ",b.languages.map((function(e){return Object(c.jsx)("span",{className:"font-normal",children:"".concat(e.name," ")},e.name)}))]})]})]}),Object(c.jsxs)("div",{className:"mt-8",children:[Object(c.jsx)("p",{className:"font-semibold mb-8",children:"Border Countries: "}),Object(c.jsx)("div",{className:"flex flex-row gap-4 flex-wrap",children:b.borders.length>0?b.borders.map((function(e){var t=x[e];return t?Object(c.jsx)(i.b,{to:"".concat(t.name),children:Object(c.jsx)("button",{className:"transition duration-200 px-8 py-1 rounded shadow dark:bg-darkBlue focus:outline-none focus:ring-2 hover:bg-gray-200 dark:hover:bg-gray-600",children:t.name},"from ".concat(b.name," to ").concat(t.name))}):null})):Object(c.jsx)("p",{children:"This country does not have borders"})})]})]})]})]})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(l,{}),Object(c.jsx)("div",{className:"min-h-screen bg-veryLightGrey dark:bg-veryDarkBlueBg"})]})},b=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,73))})),m=function(e){var t=e.size;return Object(c.jsx)("div",{className:"flex items-center justify-center p-20",children:Object(c.jsx)("div",{className:"animate-spin rounded-full border-t-4 ".concat(t)})})},x=function(e){var t=e.allCountries;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(l,{}),Object(c.jsx)(r.Suspense,{fallback:Object(c.jsx)(m,{size:"h-20 w-20"}),children:Object(c.jsx)(b,{allCountries:t})})]})},f=(n(71),n(72),Object(r.createContext)());t.b=function(e){var t=Object(r.useState)(),n=Object(s.a)(t,2),o=n[0],l=n[1];return Object(r.useEffect)((function(){j.a.get("https://restcountries.eu/rest/v2/all").then((function(e){l(e.data)})).catch((function(e){return console.log(e)}))}),[]),console.log(o),Object(c.jsx)(i.a,{children:Object(c.jsx)(f.Provider,{value:o,children:Object(c.jsx)("div",{className:"global-container",children:Object(c.jsx)("div",{className:"dark:text-white transition duration-500",children:Object(c.jsxs)(a.c,{children:[Object(c.jsx)(a.a,{exact:!0,path:"/",children:Object(c.jsx)(x,{allCountries:o})}),o&&o.map((function(e){return Object(c.jsx)(a.a,{path:"/".concat(e.name),children:Object(c.jsx)(u,{countryName:e.name})},e.name)})),Object(c.jsx)(a.a,{path:"*",children:Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"This route does not match with anything"})})})]})})})})})}},35:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),r=n.n(s),i=n(33),a=n.n(i),o=n(32);a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(o.b,{})}),document.getElementById("root"))},71:function(e,t,n){},72:function(e,t,n){}},[[35,1,2]]]);
//# sourceMappingURL=main.d2f56ba6.chunk.js.map