let you_sc=0;
let comp_sc=0;

const options= document.querySelectorAll(".option");
const msg=document.querySelector("#msg");
const msg2=document.querySelector(".msg");
const youSC=document.querySelector("#you_sc");
const compSC=document.querySelector("#comp_sc");


const genComp_opt = () => {
const options=["rock","paper","scissor"];
const Idx =Math.floor(Math.random() * 3);
return options[Idx];
};
const game = (u_opt) =>{
const comp_opt= genComp_opt();
if(u_opt === comp_opt){
msg.innerText="Draw.Play again.";
msg2.style.backgroundColor=" blanchedalmond";
}else if(u_opt === "rock"){ 
    comp_opt === "paper" ? (msg.innerText=`Bot chose ${comp_opt}.Bot won.`,comp_sc++,compSC.innerText=`${comp_sc}`,msg2.style.backgroundColor="red") : (msg.innerText=`Bot chose ${comp_opt}.User won `,you_sc++,youSC.innerText=`${you_sc}`,msg2.style.backgroundColor="green");
}else if(u_opt === "paper"){
     comp_opt === "scissor" ? (msg.innerText=`Bot chose ${comp_opt}.Bot won.`,comp_sc++,compSC.innerText=`${comp_sc}`,msg2.style.backgroundColor="red") : (msg.innerText=`Bot chose ${comp_opt}.User won `,you_sc++,youSC.innerText=`${you_sc}`,msg2.style.backgroundColor="green");
}else if(u_opt === "scissor"){
    comp_opt === "rock" ? (msg.innerText=`Bot chose ${comp_opt}.Bot won.`,comp_sc++,compSC.innerText=`${comp_sc}`,msg2.style.backgroundColor="red") : (msg.innerText=`Bot chose ${comp_opt}.User won `,you_sc++,youSC.innerText=`${you_sc}`,msg2.style.backgroundColor="green");
}

};

options.forEach((option) => {
option.addEventListener("click", () => {
const u_opt= option.getAttribute("id");
game(u_opt);
});
});
