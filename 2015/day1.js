module.exports = {
    part1: function(x) {
        let arrInput = x.split("");
        let floor = 0;
        arrInput.forEach(element => {
            if(element==="(") floor++;
            else if(element===")") floor--;
        });
        return floor;
    },
    part2: function(x) {
        let arrInput = x.split("");
        let floor = 0;
        for (let i = 0; i < arrInput.length; i++) {
            const element = arrInput[i];
            if(element==="(") floor++;
            else if(element===")") floor--;
            if(floor === -1) return i+1;
        }
        return 0;
    },
};