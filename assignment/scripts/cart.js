console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket =[];
const maxItems = 5;

function addItem(item){
  if(isFull()){
    return false;
  } else {
    basket.push(item)
    return true;
  }
}

 function listItems(){
   for(let i = 0; i<basket.length; i++){
     console.log(basket[i])
   }
 }

function empty(){
  basket = [];
}

function isFull(){
  if(basket.length<maxItems){
    return false;
  } else return true;
}

function removeItem(item){
const i = basket.indexOf(item)
if (i > 0){
    return basket.splice(i, 1);
  } else {
    console.log('item does not exist')
    return null;
  }
}




// testing
addItem('shirt')
addItem('pants')
addItem('jacket')
addItem('lotion')
addItem('snack')
addItem('socks')
listItems()
removeItem('pants')
removeItem('shoes')


console.log(`basket is ${basket}`)
empty()
console.log(`basket is ${basket}`)
