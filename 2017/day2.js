var day2 = {
    part1: function(spreadsheet) {
        var rows = spreadsheet.split('\n');
        var checksum = 0;
        rows.forEach(function(item, i, arr) {
            var row = item.split(" ");
            var diff = getHighLowDiff(row);
            checksum += diff;
        });
        return checksum;
    },
    part2: function(spreadsheet) {
        var rows = spreadsheet.split('\n');
        var checksum = 0;
        rows.forEach(function(item, i, arr) {
            var row = item.split(" ");
            var diff = getDivisible(row);
            checksum += diff;
        });
        return checksum;
    }
};

function getHighLowDiff(arr) {
    arr = arr.map(function(x) {
        return parseInt(x);
    });
    var max = arr.reduce(function(a, b) {
        return Math.max(a, b);
    }); 
    var min = arr.reduce(function(a, b) {
        return Math.min(a, b);
    });
    return max - min;
}

function getDivisible(rows) {
    let result = 0;
    for (let i = 0; i < rows.length; i++) {
        for (let j = i+1; j < rows.length; j++) {
            const x = parseInt(rows[i]);
            const y = parseInt(rows[j]);
            if (x % y === 0) result += x/y;
            else if (y % x === 0) result += y/x;
        }
    }
    return result;
}

module.exports = day2;



