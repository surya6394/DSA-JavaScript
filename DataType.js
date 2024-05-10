// Given DataType, helps devs to finding the size of the data type

function DataType(str){
    switch(str){
        case "Character":
            return 1;
        case "Integer":
            return 4;
        case "Long":
            return 8;
        case "Float":
            return 4;
        case "Double":
            return 8;
        default:
            return -1;
    }
}

const str = "Double";
const output = DataType(str);
console.log(`The size of ${str} is ${output} Byte.`);