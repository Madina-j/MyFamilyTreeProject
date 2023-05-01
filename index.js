// window.localStorage.setItem("madina", "is the best student");
// window.localStorage.getItem('madina')

let people = []; // Array for all Persons
let rootPerson = undefined; // the person
let children = []; // children array
let siblings = []; // siblings array
let parents = []; // parents array
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
  ////////////clear CardInfo///////
  const cardsInfo = document.getElementById("cards");
  cardsInfo.textContent = "";
  for (i = 0; i < people.length; i++) {
    const ul = document.querySelector("#cards");

    //Adding elements

    const li = document.createElement("div");
    li.innerHTML = generatePersonCard(people[i]);
    ul.appendChild(li);
  }
});
////////////Aside card generator for Person///////////
const generatePersonCard = (person) => `
    <div class="asideCard">
      <h2>Person</h2>
      <div>
      <h3 >First name: ${person.name}</h3>
      <h3 >Last name: ${person.lastname}</h3>
      <h3 >DoB: ${person.dOB}</h3>
      <br>
      </div>
    </div>`;
/////////Aside card generator for Child/////////
const generateChildCard = (person) => `
    <div class="asideCard">
      <h2>Child:</h2>
      <div>
      <h3 >First name: ${person.name}</h3>
      <h3 >Last name: ${person.lastname}</h3>
      <h3 >DoB: ${person.dOB}</h3>
      <br>
      </div>
    </div>`;
///////Aside card generator for Sibling//////
const generateSiblingCard = (person) => `
    <div class="asideCard">
      <h2>Sibling:</h2>
      <div>
      <h3 >First name: ${person.name}</h3>
      <h3 >Last name: ${person.lastname}</h3>
      <h3 >DoB: ${person.dOB}</h3>
      <br>
      </div>
    </div>`;
///////Aside card generator for Parent//////
const generateParentCard = (person) => `
<div class="asideCard">
  <h2>Parent:</h2>
  <div>
  <h3 >First name: ${person.name}</h3>
  <h3 >Last name: ${person.lastname}</h3>
  <h3 >DoB: ${person.dOB}</h3>
  <br>
  </div>
</div>`;

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
// const hideFormAfterSubmit = document.getElementById(
//   "button-submit-${personId}"
// );
// hideFormAfterSubmit.addEventListener("click", (e) => {
//   e.preventDefault();
//   hideFormAfterSubmit.style.display = "none";
// });

///////////////////// Child Form/////////////////////////////////////////
buttonAddChild.addEventListener("click", () => {
  const childId = Math.random() * 1000;
  const markup = generateFormTemplate(childId, "Child Form");

  childFormContainer.innerHTML = markup;

  const x = document.getElementById(`button-submit-${childId}`);
  x.addEventListener("click", (e) => {
    e.preventDefault();
    //////////////////////////////
    const name = document.getElementById(`input-firstname-${childId}`).value;
    const lastname = document.getElementById(`input-lastname-${childId}`).value;
    const dOB = document.getElementById(`input-dob-${childId}`).value;

    const person = new Person(name, lastname, dOB);

    children.push(person);
    rootPerson = person;

    console.log(people);
    ////////////clear CardInfo///////
    const cardsInfo = document.getElementById("childCards");
    cardsInfo.textContent = "";
    for (i = 0; i < children.length; i++) {
      const ul = document.querySelector("#childCards");

      //Adding elements

      const li = document.createElement("div");
      li.innerHTML = generateChildCard(children[i]);
      ul.appendChild(li);
    }
    ////////////////////////////
  });
  //////////Hide Form//////
  // const hideFormAfterSubmit = document.getElementById("childForm");
  // hideFormAfterSubmit.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   hideFormAfterSubmit.style.display = "none";
  // });
});

///////////////////////Sibling Form/////////////////////////////////////

buttonAddSibling.addEventListener("click", () => {
  const siblingId = Math.random() * 1000;
  const markup = generateFormTemplate(siblingId, "Sibling Form");

  siblingFormContainer.innerHTML = markup;
  const x = document.getElementById(`button-submit-${siblingId}`);
  x.addEventListener("click", (e) => {
    e.preventDefault();
    //////////////////////////////
    const name = document.getElementById(`input-firstname-${siblingId}`).value;
    const lastname = document.getElementById(
      `input-lastname-${siblingId}`
    ).value;
    const dOB = document.getElementById(`input-dob-${siblingId}`).value;

    const person = new Person(name, lastname, dOB);

    siblings.push(person);
    rootPerson = person;

    console.log(people);
    ////////////clear CardInfo///////
    const cardsInfo = document.getElementById("siblingCards");
    cardsInfo.textContent = "";
    for (i = 0; i < siblings.length; i++) {
      const ul = document.querySelector("#siblingCards");

      //Adding elements

      const li = document.createElement("div");
      li.innerHTML = generateSiblingCard(siblings[i]);
      ul.appendChild(li);
      // /////style////
      // div.classList.add("styleElementInForm");
      // document.main.appendChild(div);
      // .styleElementInForm{
      //   border: 1px solid black;
      // }

      // document
      //   .querySelector("#childForm")
      //   .addEventListener("click", function (e) {
      //     const target = e.target;
      //     if (target.matches("div")) {
      //       target.style.backgroundColor = "lightgrey";
      //     }
      //   });
    }
  });
});

///////////////////////Parent Form////////////////////////////////////

buttonAddParent.addEventListener("click", () => {
  const parentId = Math.random() * 1000;
  const markup = generateFormTemplate(parentId, "Parent Form");

  parentFormContainer.innerHTML = markup;
  const x = document.getElementById(`button-submit-${parentId}`);
  x.addEventListener("click", (e) => {
    e.preventDefault();
    //////////////////////////////
    const name = document.getElementById(`input-firstname-${parentId}`).value;
    const lastname = document.getElementById(
      `input-lastname-${parentId}`
    ).value;
    const dOB = document.getElementById(`input-dob-${parentId}`).value;

    const person = new Person(name, lastname, dOB);

    parents.push(person);
    rootPerson = person;

    console.log(people);
    ////////////clear CardInfo///////
    const cardsInfo = document.getElementById("parentCard");
    cardsInfo.textContent = "";
    for (i = 0; i < parents.length; i++) {
      const ul = document.querySelector("#parentCard");

      //Adding elements

      const li = document.createElement("div");
      li.innerHTML = generateParentCard(parents[i]);
      ul.appendChild(li);
    }
  });
});
//////////////////////////////////////////////////////////////////////////////
