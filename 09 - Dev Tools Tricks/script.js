/**
 * Created by mhan on 5/4/17.
 */

const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

const green = document.querySelector('.green');
green.addEventListener("click", makeGreen);
// Regular
console.log("hey!");
// Interpolated
// Styled
// warning!
console.warn("warn");
// Error :|
console.error("error! fuck!!");
// Info
console.info("info for info")
// Testing
console.assert(1 === 2, "wrong assert!")
// clearing
setTimeout(console.log('ping'), 3000);
console.clear()
// Viewing DOM Elements
// Grouping together
// counting
// timing
console.time("fetching data");
fetch("https://api.github.com/users/MrHanachoo")
    .then(data => data.json())
    .then(data => {
        console.timeEnd("fetching dataa");
        console.log(data);
    });

console.table(dogs);