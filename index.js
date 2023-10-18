// API - Restaurant waitlist

// 1. Add party - add a party with a name and number of people to the waitlist
// 2. Remove party - remove a name from the waitlist
// 3. Find party - given a table size (1, 2, 4, ..etc) find the party that was there first that can fit at the table

const allParties = [
    {
        name: 'Tatty',
        amount: 5,
    },
    {
        name: 'Andrew',
        amount: 3,
    },
    {
        name: 'Ola',
        amount: 4,
    },
];

function addParty(allParties, name, amountOfPeople) {
    const party = {
        name: name,
        amount: amountOfPeople
    }
    allParties.push(party)
    return allParties;
}
console.log(addParty(allParties, 'Tiana', 4))

function removeParty(allParties, name) {
    allParties.forEach((el, index) => {
        if(el.name === name) {
            allParties.splice(index, 1)
        }
    })
    return allParties
}
console.log(removeParty(allParties, 'Dreyz'))

function findParty(allParties, tableSeats) {
    let partyToAssign = '';
    allParties.forEach((el, index) => {
        if (el.amount <= tableSeats) {
            partyToAssign = el.name
        }
    })
    return partyToAssign;
}
console.log(findParty(allParties, 3))
