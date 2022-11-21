const hours = [ 6, 9, 7, 8, 6, 6, 8, 5, 9, 8, 7, 6, 7, 7, 8, 6, 9 ]
const grumpyHours = []
const happyHours = []

for (const hour of hours) {
    if (hour === 6) {
        grumpyHours.push(hour)
    } else if (hour === 9){
        happyHours.push(hour)
    } else if (hour === 7){
        happyHours.push(hour)
    } else if (hour === 8) {
        happyHours.push(hour)
    } else if (hour === 5){
        grumpyHours.push(hour)
    }
}

console.log(`I have had this many happy days ${happyHours.length}. This is how many grumpy days I have obtained: ${grumpyHours.length}.`)