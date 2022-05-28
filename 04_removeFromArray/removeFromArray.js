const removeFromArray = function(x,...args) {
    return x.filter(x => !args.includes(x))    
};

// Do not edit below this line
module.exports = removeFromArray;
