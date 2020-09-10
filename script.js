var wrapperEle = document.body.querySelector(".wrapper");
var animals = ["dog", "fish", "cat", "shark", "cat", "dog"];

for(var i=0; i<animals.length; i++){
  createTable(animals[i]); 
}

function createTable(str){
  var ele = document.createElement("div");
  if(str==="cat"){
    ele.innerHTML="I am a cat";
  }else if(str==="dog"){
    ele.innerHTML="borf borf";    
  }else{
    ele.innerHTML="I'm an animal"
  }
  
  wrapperEle.appendChild(ele);
}