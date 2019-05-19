"use strict"
const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]


//const listOfPlayers = []
const blueTeam = []
const redTeam = []

class Player {
  constructor(name, age, skillSet, placeBorn){
    this.name = name;
    this.age = age;
    this.skillSet = skillSet;
    this.placeBorn = placeBorn;
    }

  }  
      const listPeopleChoices = () => {
      const listElement = document.getElementById('people')
      arrOfPeople.map(person => {
        const li = document.createElement("li")
        const button = document.createElement("button")
         button.innerHTML = "Make Player"
        button.addEventListener('click', function() {
          makePlayer(person.id)
        });
        li.appendChild(button)
        li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
        listElement.append(li)
      })
    }
    
    
class DodgeBallPlayer extends Player {
  constructor(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience,name, age, skillSet, placeBorn){
    super(age, skillSet, placeBorn, name)
    this.canThrowBall = canThrowBall;
    this.canDodgeBall = canDodgeBall;
    this.hasPaid = hasPaid;
    this.isHealthy = isHealthy;
    this.yearsExperience = yearsExperience;
    this.name = name;
    this.age = age;
    this.skillSet = skillSet;
    this.placeBorn = placeBorn;
  }
}
//to make a list of people that can play dogdeball 
const filterPlayer =(id)=>{ 
  arrOfPeople.filter(player => player.id === id);
  console.log('yes');
}
 const makePlayer = (id) => {
  const dplay=arrOfPeople.filter(player => player.id === id);
  const listElement = document.getElementById("players");
  const li = document.createElement("li");
  const rb = document.createElement("button");
  rb.innerHTML = "Red Team";
  rb.addEventListener('click', function() {
    redTeammate(dplay)
  } );
  const bb = document.createElement("button");
  bb.innerHTML = "Blue Team";
  bb.addEventListener('click', function() {
    blueTeammate(dplay)
  });
  li.appendChild(rb);
  li.appendChild(bb);
  li.appendChild(document.createTextNode(dplay[0].name));
  listElement.append(li);
 
}
const blueTeammate = (bplayer) =>{
  const listElement = document.getElementById("blue"); 
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(bplayer[0].name));
  listElement.append(li);
}
const redTeammate = (rplayer) =>{
  const listElement = document.getElementById("red"); 
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(rplayer[0].name));
  listElement.append(li);
}