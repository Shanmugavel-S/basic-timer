var counter=5

var timeEle=document.getElementById('time');

var countM=60
var minElem=document.getElementById('min')
var t;
function startA(){
startF()


  timeEle.innerText=4;

function  startF(){
  

  countM=countM-1
  if(countM>=10){
  minElem.textContent=countM
  }
  else{
    minElem.textContent='0'+countM;
  }
  if(countM==0)
  {
    countM=60
    counter=counter-1;
    timeEle.textContent=counter
  }
  if(counter>=0){
  t=setTimeout(startF,1000)
 
  }
  else{
    timeEle.textContent=0;
  }
}
}
function resetF(){
  
  timeEle.innerText=5
  minElem.textContent='00'
  counter=5
  countM=60
  clearTimeout(t)
}
function stopF(){
  clearTimeout(t)
}