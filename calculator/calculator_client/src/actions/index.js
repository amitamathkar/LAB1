import axios from "axios";
export function setFirstNumber(num) {
    return {
        type : "FIRST",
        payload:num
    }
}
export function setSecondNumber(num) {
    return {
        type : "SECOND",
        payload:num
    }
}

export function calculate(num1,num2,operation) {
    return function(dispatch){
        axios.get("http://localhost:5001/api/"+operation,{
            params:{num1,num2}
        })
        .then(function(response){
            console.log("response: "+response);
            dispatch({type : "CALC", payload:response.data.sum})})
        .catch(function(err){
            console.log(err);
        });
        
        
    }
}