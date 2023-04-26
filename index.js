document.getElementById("form").addEventListener("click", function (event) {
  event.preventDefault();
});

// window.localStorage.setItem("madina", "is the best student");
// window.localStorage.getItem('madina')

let people = []; // Array for all Persons
let rootPerson = undefined; // the person
//
class Person {
  constructor(name, lastname, dOB) {
    this.id = Math.random() * 1000; // uniq ID generator for every person

    this.name = name;
    this.lastname = lastname;
    this.dOB = dOB;
    this.parents = [];
    this.siblings = [];
    this.children = [];
    this.elements = null;
  }

  createParent(name, lastname, dOB) {
    const newParent = new Person(name, lastname, dOB);
    newChild.connectWithChild(this);
    this.parents.push(newParent);
  }
  createSibling(name, lastname, dOB) {
    const newSibling = new Person(name, lastname, dOB);
    newSibling.connectWithSibling(this);
    this.siblings.push(newSibling);
  }
  createChild(name, lastname, dOB) {
    const newChild = new Person(name, lastname, dOB);
    newChild.connectWithParent(this);
    this.children.push(newChild);
  }
  connectWithParent(parent) {
    this.parents.push(parent);
  }
  connectWithChild(child) {
    this.child.push(child);
  }
  connectWithSibling(sibling) {
    this.sibling.push(sibling);
  }
}

const submitButton = document.querySelector(".submit"); // Person's data submit
const buttonAddChild = document.querySelector(".addChild");
const buttonAddParent = document.querySelector(".addParent");
const buttonAddSibling = document.querySelector(".addSibling");

const childFormContainer = document.getElementById("childForm");
const siblingFormContainer = document.getElementById("siblingForm");
const parentFormContainer = document.getElementById("parentForm");
////////////////////////////////////////////////////////////////////////////

const personForm = document.getElementById("personForm");
personForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("first-name").value;
  const lastname = document.getElementById("last-name").value;
  const dOB = document.getElementById("dob").value;

  const person = new Person(name, lastname, dOB);

  people.push(person);
  rootPerson = person;

  console.log(people);
});

// submitForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   rootPerson.createChild();
//   const name = document.getElementById("first-name").value;
//   const lastname = document.getElementById("last-name").value;
//   const dOB = document.getElementById("dob").value;
//   people.push(new Person(name, lastname, dOB));
//   console.log(people);
// });

/////////// Form for rest of people/////////////////////////////////////
const generateFormTemplate = (personId, title = "Form") => `
<div class="theForm">
    <h2>${title}</h2>
    <form id="theForm-${personId}">
        <label for="formName">First name:</label><br>
        <input id="input-firstname-${personId}" /><br>
        <label for="formLastName">Last name:</label><br>
        <input type="text" id="input-lastname-${personId}" /><br>
        <label for="formDob">Date of birth:</label><br>
        <input type="text" id="input-dob-${personId}" /><br><br>

        <button id="button-submit-${personId}">Submit</button>
    </form>
</div>`;
///////////////////// Child Form/////////////////////////////////////////
buttonAddChild.addEventListener("click", () => {
  const childId = Math.random() * 1000;
  const markup = generateFormTemplate(childId, "Child Form");

  childFormContainer.innerHTML = markup;
});
//   const submitFormButton = document.getElementById(`button-submit-${childId}`);
// const submitForm = document.getElementById(`theForm-${childId}`);
// submitForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   rootPerson.createChild();
//   const name = document.getElementById("first-name").value;
//   const lastname = document.getElementById("last-name").value;
//   const dOB = document.getElementById("dob").value;
//   people.push(new Person(name, lastname, dOB));
//   console.log(people);
// });

//   submitFormButton.addEventListener("click", () => {
//     rootPerson.addChild();
//     people.push(new Person(name, lastname, dOB));
//     console.log(people);
//   });

///////////////////////Sibling Form/////////////////////////////////////

buttonAddSibling.addEventListener("click", () => {
  const siblingId = Math.random() * 1000;
  const markup = generateFormTemplate(siblingId, "Sibling Form");

  siblingFormContainer.innerHTML = markup;

  // const submitFormButton = document.getElementById(
  //   `button-submit-${siblingId}`
  // );

  //   submitFormButton.addEventListener("click", () => {
  //     rootPerson.addSibling();
  //     people.push(new Person(name, lastname, dOB));
  //     console.log(people);
  //   });
});

///////////////////////Parent Form////////////////////////////////////

buttonAddParent.addEventListener("click", () => {
  const parentId = Math.random() * 1000;
  const markup = generateFormTemplate(parentId, "Parent Form");

  parentFormContainer.innerHTML = markup;

  const submitFormButton = document.getElementById(`button-submit-${parentId}`);

  //   submitFormButton.addEventListener("click", () => {
  //     rootPerson.addparent();
  //     people.push(new Person(name, lastname, dOB));
  //     console.log(people);
  //   });
});
/////////////////////////////////////////////////////////////////////////////////////
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
