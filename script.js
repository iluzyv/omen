const omens=[
["✶","THE LIGHT","You noticed it. That is enough."],
["◌","THE OPENING","Not every threshold asks to be crossed."],
["⌁","THE CURRENT","Some directions are felt before they are understood."],
["☼","THE RETURN","What disappears is not always gone."],
["⋆","THE DISTANCE","Wonder begins where certainty ends."],
["❋","THE BLOOM","Leave a little room for the unnamed."]
];
let n=0;
document.querySelector("#reveal").onclick=()=>{n=(n+1)%omens.length;const o=omens[n];document.querySelector("#omenSymbol").textContent=o[0];document.querySelector("#omenTitle").textContent=o[1];document.querySelector("#omenText").textContent=o[2];document.querySelector("#omenNo").textContent=String(n+1).padStart(2,"0")};
const field=document.querySelector("#field"), glow=document.querySelector("#glow"), star=document.querySelector("#star");
field.onmousemove=e=>{const r=field.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;glow.style.left=x+"px";glow.style.top=y+"px";star.style.transform=`translate(${(x-r.width/2)*.025}px,${(y-r.height/2)*.025}px)`};
document.querySelector("#portal").onclick=e=>e.currentTarget.classList.toggle("active");
document.querySelector("#copy").onclick=()=>{document.querySelector("#copyStatus").textContent="the artifact has not appeared yet."};