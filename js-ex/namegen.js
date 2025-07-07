/* Create a business name generator by combining list of adjectives and shop name and another word
Adjectives:
Crazy 
Amazing
Fire 
Shop Name:
Engine
Foods
Garments
Another Word:
Bros
Limited
Hub
No using arrays
*/
function getAdj(a){
    if (a == 0) {
        return "Crazy";
    } else if (a == 1) {
        return "Amazing";
    } else if (a == 2) {
        return "Fire";
    } else {
        return "";
    }
}
function getShop(a){
    if (a == 0) {
        return "Engine";
    } else if (a == 1) {
        return "Foods";
    } else if (a == 2) {
        return "Garments";
    } else {
        return "";
    }
}
function getAnother(a){
    if (a == 0) {
        return "Bros";
    } else if (a == 1) {
        return "Limited";
    } else if (a == 2) {
        return "Hub";
    } else {
        return "";
    }
}
function generateName(adjIndex, shopIndex, anotherIndex){
    if(Math.random()<=0.33)
        adjIndex = 0;
    else if(Math.random()<=0.66)
        adjIndex = 1;
    else
        adjIndex = 2;
    if(Math.random()<=0.33)
        shopIndex = 0;
    else if(Math.random()<=0.66)
        shopIndex = 1;
    else
        shopIndex = 2;
    if(Math.random()<=0.33)
        anotherIndex = 0;
    else if(Math.random()<=0.66)
        anotherIndex = 1;
    else
        anotherIndex = 2;
    var adjective = getAdj(adjIndex);
    var shopName = getShop(shopIndex);
    var anotherWord = getAnother(anotherIndex);
    
    return adjective + " " + shopName + " " + anotherWord;

}

console.log(generateName());

