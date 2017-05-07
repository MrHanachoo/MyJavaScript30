/**
 * Created by mhan on 5/7/17.
 */


const checkboxs = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkboxs);

let lastChecked;

function handleCheckbox(e) {
    let inBetween = false;
    if(e.shiftKey && this.checked){
        checkboxs.forEach(checkbox => {
            console.log(checkbox);
            if(checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log("checking in between !!")
            }
            if(inBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
}

checkboxs.forEach(checkbox => checkbox.addEventListener('click', handleCheckbox))