"use strict";(self.webpackChunksfti_manual=self.webpackChunksfti_manual||[]).push([[2413],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return r?a.createElement(g,o(o({ref:t},u),{},{components:r})):a.createElement(g,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4272:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const i={sidebar_position:6,custom_edit_url:null},o="Equipos de Emergencia",l={unversionedId:"HEMTIE/equipos-emergencia",id:"HEMTIE/equipos-emergencia",title:"Equipos de Emergencia",description:"El m\xf3dulo HEMTIE, equipos de emergencia gestiona:",source:"@site/docs/07-HEMTIE/06-equipos-emergencia.md",sourceDirName:"07-HEMTIE",slug:"/HEMTIE/equipos-emergencia",permalink:"/en/HEMTIE/equipos-emergencia",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Listado de Transporte",permalink:"/en/HEMTIE/transportes/listado"},next:{title:"Comit\xe9s",permalink:"/en/category/comit\xe9s"}},c={},s=[{value:"\xbfC\xf3mo agregar componentes?",id:"c\xf3mo-agregar-componentes",level:3},{value:"\xbfC\xf3mo dar de baja un equipo de emergencia?",id:"c\xf3mo-dar-de-baja-un-equipo-de-emergencia",level:3},{value:"\xbfC\xf3mo agregar una mantenci\xf3n al equipo de emergencia?",id:"c\xf3mo-agregar-una-mantenci\xf3n-al-equipo-de-emergencia",level:3},{value:"\xbfC\xf3mo aplicar una auditoria?",id:"c\xf3mo-aplicar-una-auditoria",level:3}],u={toc:s};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"equipos-de-emergencia"},"Equipos de Emergencia"),(0,n.kt)("p",null,"El m\xf3dulo HEMTIE, equipos de emergencia gestiona: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Extintores, "),(0,n.kt)("li",{parentName:"ul"},"Rociador de incendios, "),(0,n.kt)("li",{parentName:"ul"},"Central de incendios, "),(0,n.kt)("li",{parentName:"ul"},"Detectores, "),(0,n.kt)("li",{parentName:"ul"},"Red seca, "),(0,n.kt)("li",{parentName:"ul"},"Red h\xfameda, "),(0,n.kt)("li",{parentName:"ul"},"Pulsador de emergencia, "),(0,n.kt)("li",{parentName:"ul"},"Sistema de supresi\xf3n de incendios, "),(0,n.kt)("li",{parentName:"ul"},"Desfibrilador externo (DEA), "),(0,n.kt)("li",{parentName:"ul"},"Luz de emergencia"),(0,n.kt)("li",{parentName:"ul"},"Botiqu\xedn\nPermite tambi\xe9n asociar cada uno de estos elementos a un centro de costo, sub\xe1rea de trabajo y lugar. ")),(0,n.kt)("div",{align:"center"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"Men\xfa SFTI Pro \u2192 HEMTIE \u2192 Equipos de emergencia\n"))),(0,n.kt)("p",null,"Al ingresar el sistema mostrar\xe1 todos los equipos que se gestionan:"),(0,n.kt)("div",{align:"center"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"extintor",src:r(29473).Z,width:"866",height:"538"}))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Agregar"),": Podr\xe1 agregar el equipo que requiera.")),(0,n.kt)("div",{class:"video-responsive"},(0,n.kt)("iframe",{src:"https://www.youtube.com/embed/ANURSrH8eMs/?rel=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Ver"),": Podr\xe1 visualizar los datos agregados.")),(0,n.kt)("div",{align:"center"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Ver",src:r(91744).Z,width:"769",height:"630"}))),(0,n.kt)("div",{class:"video-responsive"},(0,n.kt)("iframe",{src:"https://www.youtube.com/embed/CLcJKE_sjKA/?rel=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})),(0,n.kt)("h3",{id:"c\xf3mo-agregar-componentes"},"\xbfC\xf3mo agregar componentes?"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Componentes"),": Podr\xe1 agregar componentes anexos necesarios del equipo de emergencia."),(0,n.kt)("div",{align:"center"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Componente",src:r(48245).Z,width:"768",height:"262"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Editar"),": Podr\xe1 editar el registro de componente.")),(0,n.kt)("h3",{id:"c\xf3mo-dar-de-baja-un-equipo-de-emergencia"},"\xbfC\xf3mo dar de baja un equipo de emergencia?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Dar de baja"),": Podr\xe1 dejar inactivo el componente.")),(0,n.kt)("div",{class:"video-responsive"},(0,n.kt)("iframe",{src:"https://www.youtube.com/embed/tXPa2sCa4R8/?rel=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})),(0,n.kt)("h3",{id:"c\xf3mo-agregar-una-mantenci\xf3n-al-equipo-de-emergencia"},"\xbfC\xf3mo agregar una mantenci\xf3n al equipo de emergencia?"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Mantenciones"),": Podr\xe1 agregar mantenciones al equipo."),(0,n.kt)("div",{align:"center"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"mantenciones",src:r(67639).Z,width:"924",height:"271"}))),(0,n.kt)("div",{class:"video-responsive"},(0,n.kt)("iframe",{src:"https://www.youtube.com/embed/tz3pqFOg6Lk/?rel=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})),(0,n.kt)("h3",{id:"c\xf3mo-aplicar-una-auditoria"},"\xbfC\xf3mo aplicar una auditoria?"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Auditorias realizadas"),": Podr\xe1 aplicar una auditoria, la auditoria tiene que ser espec\xedfica a la categor\xeda equipo de emergencia."),(0,n.kt)("div",{align:"center"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Auditoria",src:r(16955).Z,width:"921",height:"328"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Ver"),": Podr\xe1 visualizar la auditoria realizada.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Gr\xe1ficos"),": Podr\xe1 visualizar los gr\xe1ficos relacionados con la auditoria."))),(0,n.kt)("div",{class:"video-responsive"},(0,n.kt)("iframe",{src:"https://www.youtube.com/embed/vxODNLsFqGQ/?rel=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})))}p.isMDXComponent=!0},29473:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/2023-09-01_13-49-61e0cb7f328a1e20fa1554767bbdf9df.png"},91744:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/2023-09-01_13-56-2e7b752e1c421b882b639a0d5018ad08.png"},48245:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/2023-09-01_14-00-66025852bfd76ff26a265b8a69cc8e33.png"},67639:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/2023-09-01_14-12-6b49ccc1868cd1974e5768f94ed32d5d.png"},16955:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/2023-09-04_09-51-014b53e6b04041eba022f866b55c5d24.png"}}]);