// const square = function(x) {
//     return x * x
// }
// const square = (x) => {
//     return x * x
// }
// console.log(square(3))

const event = {
    name: 'Birthday Party',
    guestList:['Vivica', 'Adriann', 'Bre'],
    //arrow functions arent well suited for methods so use standard function
    printGuestList() {

        console.log('Guest list for' + this.name)
       
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending' + this.name)
        })
    }
}
event.printGuestList()