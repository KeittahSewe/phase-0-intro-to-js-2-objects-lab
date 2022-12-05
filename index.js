const employee = {
    name: "Sewe", 
    streetAddress: "Kungu",
};

function updateEmployeeWithKeyAndValue(obj, key, value){
    return{
        ...obj,
        [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key){
    const deletedEmployee = {...obj};
    delete deletedEmployee[key];
    return deletedEmployee; 
}

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;
}
