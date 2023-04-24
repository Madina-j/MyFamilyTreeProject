document.getElementById("form").addEventListener("click", function (event) {
  event.preventDefault();
});

// window.localStorage.setItem("madina", "is the best student");
// window.localStorage.getItem('madina')

let people = [];

class Person {
  constructor(name, lastname, dOB) {
    this.name = name;
    this.lastname = lastname;
    this.dOB = dOB;
    this.parents = [];
    this.sibilings = [];
    this.children = [];
  }

  addParents(name, lastname, dOB) {
    const newParent = new Person();
    this.parents.push(newParent);
  }
  addSibilings(name, lastname, dOB) {
    const newSibiling = new Person();
    this.sibilings.push(newSibiling);
  }
  addChild(name, lastname, dOB) {
    const newChild = new Person();
    this.children.push(newChild);
  }
}

people.push(new Person("Madina", "Dzhetegenova", 09051985));

// // in some function

// people.forEach((person) => {
//   // put some HTML on the page
//     let familyTree = document.getElementById('family-tree')
//     familyTree.innerHTML = `
//             <div class="person">
//                 <h3>first name, lastname</h3>
//                 <div>DOB</div>
//             </div>`
//     // maybe better to createElement and append child because we have event listeners
// });

console.log(people);
