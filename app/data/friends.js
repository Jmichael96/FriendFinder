// var friendData = [
//     {
//         name: 'Jeffrey',
//         photoURL: 'https://www.pexels.com/photo/beard-hipster-man-outdoors-6969/',
//         scores: '1,2,3,4,1,3,1,2,5,1',
//     },
//     {
//         name: 'Sophie',
//         photoURL: 'https://www.pexels.com/photo/woman-smiling-beautiful-portrait-39547/',
//         scores: '1,2,3,4,5,2,1,4,5,5',
//     },
//     {
//         name: 'Jen',
//         photoURL: 'https://www.pexels.com/photo/sunny-photography-portrait-bokeh-59552/',
//         scores: '5,3,2,5,3,2,1,2,3,1',
//     },
//     {
//         name: 'Jake',
//         photoURL: 'https://www.pexels.com/photo/man-young-happy-smiling-91227/',
//         scores: '4,5,4,3,2,3,4,5,2,4',
//     },
//     {
//         name: 'Bruce',
//         photo: 'https://www.pexels.com/photo/woman-smiling-beautiful-portrait-39547/',
//         scores: '3,4,3,4,5,2,1,3,4,2',
//     },
//     {
//         name: 'Brit',
//         photo: 'https://www.pexels.com/photo/beautiful-dress-fashion-forest-7051/',
//         scores: '4,3,5,2,1,2,3,4,1,5',
//     },
//     {
//         name: 'Chris',
//         photo: 'https://www.pexels.com/photo/man-person-portrait-autumn-16622/',
//         scores: '1,1,1,2,3,5,4,3,2,5',
//     },


// ];

// module.exports = friendData;

let analyzeFriendList = function(array) {
    let match = {};
    let friendsList = array;
    let arrayLength = friendsList.length
    let currLowScore = 100;

    for (let i = 0; i < arrayLength - 1; i++) {
        let totalDifference = _arrayDifference(friendsList[i].scores, friendsList[arrayLength - 1].scores);
        if (totalDifference < currLowScore) {
            currLowScore = totalDifference;
            match = {
                name: friendsList[i].name,
                photo: friendsList[i].photo
            }
        }
    }
    return (match);
}

let _arrayDifference = function(array1, array2) {
    let resultArray = [];
    let totalDifference = 0;

    for (let i = 0; i < 5; i++) {
        resultArray.push(Math.abs(array1[i] - array2[i]))
    }

    totalDifference = resultArray.reduce(function(a, b) {
        return a + b
    });

    return totalDifference;
}

module.exports = analyzeFriendList;