let bodyElement = document.querySelector('body')
​
let Fernando = {
    name: "fernando",
    children: [
     {
            name: "Yolanda",
            children: [
                {
                    name:"Jerry",
                    children: [
                        {
                            name: "Sasha",
                            children: [
                                {
                                    name: "yogi",
                                    children: []
                                }
                            ]
                        },
                        {
                            name: "Beth",
                            children: [
                                {
                                    name: "Simon",
                                    children: []
                                },
                                {
                                    name: "Seth",
                                    children: [
                                        {
                                            name: "Seth JR",
                                            children: []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
     {
            name: "Mike",
            children: [
                {
                    name:"Jerry",
                    children: [
                        {
                            name: "Sasha",
                            children: [
                                {
                                    name: "yogi",
                                    children: []
                                }
                            ]
                        },
                        {
                            name: "Beth",
                            children: [
                                {
                                    name: "Simon",
                                    children: []
                                },
                                {
                                    name: "Seth",
                                    children: [
                                        {
                                            name: "Seth JR",
                                            children: []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
​
    ]
}
​
const displayPerson = (person, htmlParent, indexParam) => {
    // display person on page under parent (parent's parent sibling for new line)
    if (!htmlParent) {
        // display on body new line
        htmlParent = document.createElement('div')
        htmlParent.classList.add('person-container');
        let nameDiv = document.createElement('div');
        nameDiv.textContent = person.name;
        let childrenContainer = document.createElement('div')
        childrenContainer.classList.add("children")
​
        htmlParent.appendChild(nameDiv)
        htmlParent.appendChild(childrenContainer)
        bodyElement.appendChild(htmlParent)
        // ` <div class="person-container>
        //     <div>Mike</div>
        //     <div class="children"></div>
        // </div>`
        // `
        //     <div class="person-container>
        //         <div>Mike</div>
        //         <div class="children">
        //             <div class="person-container>
        //                 <div>Jerry</div>
        //                 <div class="children">
        //                     <div class="person-container>
        //                         <div>Sasha</div>
        //                         <div class="children">
        //                             <div class="person-container>
        //                                 <div>Yogi</div>
        //                                 <div class="children"></div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div class="person-container>
        //                         <div>Beth</div>
        //                         <div class="children">
        //                             <div class="person-container>
        //                                 <div>Simon</div>
        //                                 <div class="children"></div>
        //                             </div>
        //                             <div class="person-container>
        //                                 <div>Seth</div>
        //                                 <div class="children"></div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>  
        //         </div>
        //     </div>
        // `
    } else {
        let personContainer = document.createElement('div')
        personContainer.classList.add('person-container')
        let nameDiv = document.createElement('div');
        nameDiv.textContent = person.name;
        let childrenContainer = document.createElement('div')
        childrenContainer.classList.add("children")
        personContainer.appendChild(nameDiv)
        personContainer.appendChild(childrenContainer)
        htmlParent.appendChild(personContainer)
    }
​
    if (person.children?.length <= 0){
        return
    } else {
    // loop through children and display them
        person.children.forEach((child,index) => {
            console.log(child, htmlParent);
            let finalParent = 
            htmlParent.children[indexParam]?.children[1] ? 
            htmlParent.children[indexParam]?.children[1] : 
            htmlParent.children[1];
​
            displayPerson(child, finalParent, index); 
        })
    }
}
displayPerson(Fernando);
​
​