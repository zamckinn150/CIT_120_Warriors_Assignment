var wrapperEle = document.body.querySelector(".wrapper");

var warriors = [
  {
    name:"Bob",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Jerry",
    damage:1,
    health:12,
    warrior:true
  },
  {
    name:"Mavis",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Morty",
    damage:4,
    health:10,
    warrior:true
  },
  {
    name:"Shorty",
    damage:10,
    health:3,
    warrior:false
  },
  {
    name:"Porty",
    damage:1,
    health:14,
    warrior:true
  },{
    name:"Perry",
    damage:2,
    health:9,
    warrior:true
  },
  {
    name:"Larry",
    damage:2,
    health:17,
    warrior:false
  }
]

for(var i=0; i<warriors.length; i++){
  if(warriors[i].warrior){
     if(warriors[i].damage>=2){
       if(warriors[i].health>=10){
 var personEle = document.createElement("div");
 if(warriors[i].name.includes("a")){
 personEle.style.color="red";
 }
 var color = warriors.includes("a");
 var color = name.fontcolor("red");
  personEle.innerHTML = warriors[i].name;
  wrapperEle.appendChild(personEle);
  }
  }
  }
}