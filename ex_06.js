function getBasketContent(aaa){
    let fruits = [
    "strawberry",
    "strawberry",
    "strawberry", 
    "apple-1",
    "apple-1",
    "lime",
    "lime" ,
    "peach" ,
    "pear",
    "pear"]
    if (aaa>fruits.length){
    console.log ("Too many fruit(s)selected")
    return
    }
    else 
    console.log (aaa + " fruit+(s) selected ")
    return fruits.splice (0, aaa)
    }
    
    let fruits = getBasketContent(50)
    showMyBasket(fruits)
