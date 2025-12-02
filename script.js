// const firstinput= document.querySelector(".input-first");
// const lastinput= document.querySelector(".input-last");
// const select= document.querySelector("select");
// const num= document.querySelector(".input-num");
// const button= document.querySelector("button");
// const scoreboard=document.querySelector(".scoreboard")

// let array = [];
// let count = 0;

// button.addEventListener('click',(e)=>{
//   e.preventDefault();

//   const fullName = `${firstinput.value} ${lastinput.value}`;
//   const countryValue = select.value;
//   const scoreValue = Number(num.value);

//   const player = {
//     id: ++count,
//     name: fullName,
//     country: countryValue,
//     score: scoreValue,
//   };

//   array.push(player)

//   short()
//   final()

//   firstinput.value = "";
//   lastinput.value = "";
//   select.value = "placeholder";
//   num.value = "";
// });

// function short() {
//   array.sort((a, b) => b.score - a.score);
// }

// function final() {
//   scoreboard.innerHTML = "";}

//   arr.forEach((player) => {
//     const name=document.createElement("span");
//     name.textContent=player.name;
//     const country=document.createElement("span");
//     country.textContent=player.country;

//     const score=document.createElement("span");
//     score.textContent=player.score;


//     const deleted=document.createElement("button");
//     deleted.textContent="delete";


//     const plus=document.createElement("button");
//     plus.textContent="+5";
    
//     const minus=document.createElement("button");
//     minus.textContent="- 5";


//     const scorecard=document.createElement("p");
//     scorecard.classList.add("displayscore");
//     scorecard.append(name,country,score,deleted,plus,minus);

//     deleted.addEventListener("click",function(){
//       arr=arr.filter((p)=>p.id!== player.id)
//       final();

//     });
 
//     plus.addEventListener("click",function(){
//       player.score+=5;
//       short();
//       final();
//     })
//     minus.addEventListener("click",function(){
//       player.score=Math.max(0, player.score-5);
//       short();
//       final();
//     })

//     scoreboard.append(scorecard);

//   });




const firstinput= document.querySelector(".input-first");
const lastinput= document.querySelector(".input-last");
const select= document.querySelector("select");
const num= document.querySelector(".input-num");
const button= document.querySelector("button");
const scoreboard=document.querySelector(".scoreboard");

let array = [];
let count = 0;

button.addEventListener('click',(e)=>{
  e.preventDefault();

  const fullName = `${firstinput.value} ${lastinput.value}`;
  const countryValue = select.value;
  const scoreValue = Number(num.value);

  const player = {
    id: ++count,
    name: fullName,
    country: countryValue,
    score: scoreValue,
  };

  array.push(player);

  short();
  final();

  firstinput.value = "";
  lastinput.value = "";
  select.value = "placeholder";
  num.value = "";
});

function short() {
  array.sort((a, b) => b.score - a.score); 
}

function final() {
  scoreboard.innerHTML = "";

  array.forEach((player) => {
    const name=document.createElement("span");
    name.textContent=player.name;

    const country=document.createElement("span");
    country.textContent=player.country;

    const score=document.createElement("span");
    score.textContent=player.score;

    const deleted=document.createElement("button");
    deleted.textContent="delete";

    const plus=document.createElement("button");
    plus.textContent="+5";
    
    const minus=document.createElement("button");
    minus.textContent="-5";

    const scorecard=document.createElement("p");
    scorecard.classList.add("displayscore");
    scorecard.append(name,country,score,deleted,plus,minus);

    deleted.addEventListener("click",function(){
      array = array.filter((p)=>p.id!== player.id);
      short();
      final();
    });

    plus.addEventListener("click",function(){
      player.score += 5;
      short();
      final();
    });

    minus.addEventListener("click",function(){
      player.score = Math.max(0, player.score-5);
      short();
      final();
    });

    scoreboard.append(scorecard);
  });
}


