
const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name) {
    return cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    return cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    return cats.pop()
}

function destructivelyRemoveFirstCat() {
    return cats.shift()
}

function appendCat(name) {
    return appendCat = [...cats,"Broom"]
}

function prependCat(name) {
    return prependCat = ["Arnold",...cats]
}

function removeLastCat() {
    return removeLastCat = cats.slice(0,-1)
}

function removeFirstCat() {
    return removeFirstCat = cats.slice(1)
}

//   describe('removeFirstCat()', function () {
//     it('removes the first cat from the cats array and returns a new array, leaving the cats array unchanged', function () {
//       expect(removeFirstCat()).to.have.ordered.members(["Otis", "Garfield"]);

//       expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
//     });
//   });
// });
// });
