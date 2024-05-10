function Condition(n, m){
    if(n < m)
        return "lesser";
    else if(n > m)
        return "greater";
    else
        return "equal";
}

const result = Condition(4,5);
console.log("Result is : ",result);

