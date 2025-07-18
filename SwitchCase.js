function SwitchCase(choice, arr){
    switch(choice){
        case 1:
            return Math.PI * arr[0] * arr[0];
        case 2:
            return Math.PI * arr[0] * arr[1];
    }
}

let arr = [5 , 3];
const area = SwitchCase(2 , arr);
console.log("Area = ",area);