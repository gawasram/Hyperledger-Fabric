//Create a main function functionOne() and another function functionTwo() inside the first function.
//Create one object under functionOne().
//Now the functionTwo should update the value inside functionOne().
//Print the function.

function functionOne() {
    let obj = {
        name: "Ram Gawas",
        value: "300"
    };

    function functionTwo(newValue) {
        obj.value = newValue;
    }

    return { obj, functionTwo };
}

let { obj, functionTwo } = functionOne();
console.log(obj);
functionTwo("updated value");
console.log(obj);