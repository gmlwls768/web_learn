// DEFINE YOUR FUNCTION BELOW:
let Days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];
function returnDay(num){
    if(num>7 || num<1) return null;
    else{
        return Days[num-1]
    }
}