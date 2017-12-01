module.exports = {
    part1: function(x) {
        var arrX = x.split("");
        var total = 0;
        arrX.forEach(function callback(currentValue, index, array){
            var y = parseInt(currentValue);
            var nextIndex = index + 1;
            var z = parseInt((nextIndex < array.length) ? array[nextIndex] : array[0]);
            // console.log("current:", y);
            // console.log("next:", z);
            if(y === z) total = total + y;
            // console.log("total:", total);
        });
        return total;
    },
    part2: function(x) {
        var arrX = x.split("");
        var total = 0;
        arrX.forEach(function callback(currentValue, index, array){
            var y = parseInt(currentValue);
            var nextIndex = index + (array.length/2);
            if(nextIndex>=array.length) nextIndex = nextIndex-array.length;
            var z = parseInt(array[nextIndex]);
            // console.log("current:", y);
            // console.log("next:", z);
            if(y === z) total = total + y;
            // console.log("total:", total);
        }); 
        return total;
    },
};



