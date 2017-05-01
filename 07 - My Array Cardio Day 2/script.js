/**
 * Created by mhan on 5/1/17.
 */

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const  isAdult = people.some(function (person) {
    const currentYear = (new Date()).getFullYear();
    if ((currentYear - person.year) >= 19) {
        return true;
    }
});
console.log({isAdult});
// OR
const  isAdult2 = people.some(person => {
    const currentYear = (new Date()).getFullYear();
    return (currentYear - person.year) >=19
});
console.log({isAdult2});
// OR
const  isAdult3 = people.some(person => ((new Date()).getFullYear() - person.year) >=19);
console.log({isAdult3});


// Array.prototype.every() // is everyone 19 or older?
const allAdult = people.every(function (person) {
    const currentYear = (new Date()).getFullYear();
    if ((currentYear - person.year) >= 19) {
        return true;

    }
});
console.log({allAdult});
// OR
const allAdult1 = people.every(person => {
    const currentYear = (new Date()).getFullYear();
    return (currentYear - person.year) >= 19
    });
console.log({allAdult1});
// OR
const allAdult2 = people.every(person => ((new Date()).getFullYear() - person.year) >= 19);
console.log({allAdult2});


// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const  comment = comments.find(function (comment) {
    if(comment.id === 823423) {
        return true;
    }
});
console.log({comment});
// OR
const comment1 = comments.find(comment => comment.id === 823423);
console.log({comment1});
// OR
const comment2 = comments.find(comment => {
    if(comment.id === 823423) return true;
});
console.log({comment2});


// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const index = comments.findIndex(comment => comment.id === 2039842);
console.log(index);
console.table(comments);
// comments.splice(index, index);
// console.table(comments);
// OR create a new array
const newComments = [
        ...comments.slice(0, index),
        ...comments.slice(index+1)
];
console.table(newComments);