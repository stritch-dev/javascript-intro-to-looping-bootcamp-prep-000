

function forLoop(array){
   for(var i=0; i<25;i++){
    array.push("I am ${i} strange loop${i === 0 ? '' : 's'}.");
   }
   return array;
}

function whileLoop(n){
  while(n-1>=0){
   console.log(n);
   n--;
  }
  return "done";
}
function doWhileLoop(array){
  while(maybeTrue() && array.length>0){
    array.pop();
  }
  return array;
}


function maybeTrue() {
  return Math.random() >= 0.5
}
