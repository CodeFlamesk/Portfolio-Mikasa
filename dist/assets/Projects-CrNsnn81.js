import{r as o,g as l,j as e,L as r,A as s}from"./index-Cx5R-m3f.js";import{M as a}from"./Menu-IV5GfGYK.js";const n="/projectImg/narutoBackground.webp",c="/assets/naruto-8B5fVI1n.mp3",x=()=>(o.useEffect(()=>{const t=l.timeline({defaults:{duration:1,ease:"power2.inOut"}});t.from(".right-anim",{x:"150vh"},0),t.from(".left-anim",{x:"-200vh"},0),t.from(".top-anim",{y:"-100vh"},0),t.from(".secondleft-anim",{x:"-200vh",delay:.3},0),t.from(".thirdleft-anim",{x:"-200vh",delay:.5},0)},[]),e.jsxs("div",{className:"w-full min-h-screen relative flex justify-center px-10 pb-10",children:[e.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-cover bg-center",style:{backgroundImage:`url(${n})`,backgroundRepeat:"repeat",filter:"blur(4px)"}}),e.jsx("div",{className:"fixed top-0 right-0 z-40 right-anim",children:e.jsx(a,{colorIcon:"stroke-brownl",colorMenu:"bg-brownl border-2 border-brownl",activeProject:"border-none bg-opacity-30 bg-dark text-brownl cursor-default"})}),e.jsxs("div",{className:"flex  flex-col z-10 items-center select-none ",children:[e.jsx("p",{className:"njfonts text-white text-[32px] h-850:pt-[20px] md:text-[64px] pt-[40px] md:pt-[110px] top-anim",children:"Front-end"}),e.jsxs("div",{className:"grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-[102px] h-850:pt-0 pt-4",children:[e.jsx("div",{className:"thirdleft-anim order-3 sm:order-1 hover:rotate",children:e.jsxs(r,{to:"/home/projectscard?category=landing",className:"flex flex-col relative rounded-[20px] items-center ",children:[e.jsx("img",{src:"/projectImg/naruto.webp",alt:"naruto",draggable:"false"}),e.jsx("p",{className:"absolute text-white njfonts text-xl md:text-2xl lg:text-[32px] bottom-[20px]",children:"Landing Page"})]})}),e.jsx("div",{className:"secondleft-anim order-2 hover:rotate",children:e.jsxs(r,{to:"/home/projectscard?category=multi",className:"flex flex-col relative rounded-[20px] items-center",children:[e.jsx("img",{src:"/projectImg/saski.webp",alt:"saski",draggable:"false"}),e.jsx("p",{className:"absolute text-white njfonts text-xl md:text-2xl lg:text-[32px] bottom-[20px]",children:"Multi-Page"})]})}),e.jsx("div",{className:"left-anim order-1 sm:order-3 hover:rotate",children:e.jsxs(r,{to:"/home/projectscard?category=all",className:"flex flex-col relative rounded-[20px] items-center",children:[e.jsx("img",{src:"/projectImg/all.webp",alt:"all",draggable:"false"}),e.jsx("p",{className:"absolute text-white njfonts text-xl md:text-2xl lg:text-[32px] bottom-[20px]",children:"All"})]})})]})]}),e.jsx("div",{className:" fixed bottom-3 right-6 z-40 ",children:e.jsx(s,{audio:c,borderColor:"border-brown-dark",iconColor:"#FEDA7A",styleInput:"bg-brownl accent-brownl hover:bg-brownl  hover:shadow-[inset_0_1px_10px_#BE9965] ",styleBgInput:"bg-brown-dark"})})]}));export{x as default};