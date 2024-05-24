let total = prompt('How many km are left to go?');

// Your code below:
// total = parseInt(total);
let checkDistance = (distance) =>{
    if(distance>100){
        return "We still have a bit of driving left to go";
    }else if(distance>50 && distance<=100){
        return "We'll be there in 5 minutes";
    }else{
        return "I'm parking. I'll see you right now";
    }
}

console.log(checkDistance(total))