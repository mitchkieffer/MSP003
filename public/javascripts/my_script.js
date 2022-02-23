let Zoo = new Object();
let listBox = document.getElementById("animalsList");
let animalName = document.getElementById("animalName");
let animalType = document.getElementById("animalType");
let animalAge = document.getElementById("animalAge");
let animalGender = document.getElementById("animalGender");
let animalWeight = document.getElementById("animalWeight");
let animalIsPreg = document.getElementById("animalIsPreg");
let form = document.getElementById("animalForm");
let text = form.querySelectorAll("input[type='text']");
let newAnimalList;

//const makeAsyncHttpRequest = (method, url, data) => {
//    const xhr = new XMLHttpRequest();
 //   xhr.open('GET', '/animal');
//
//    xhr.responseType = 'json';
//
 //   xhr.onload = () => {
 //       const data = xhr.response;
 //       console.log(data);
 //   }
//
 //   xhr.send();
//}
//
//makeAsyncHttpRequest("GET", "/test", "getAnimals.js");


fetch('http://zooproject.azurewebsites.net/animal/animals')
  .then(response => response.json())
  .then(data => APItoArray(data));

    function APItoArray(animal){
        Zoo.Animalss = animal;
        console.log(Zoo.Animalss);
        newAnimalList = Zoo.Animalss
        populateZooFields();
        populateAnimals(Zoo.Animalss);
        populateAnimalListBox(Zoo.Animalss);
    }

document.getElementById("editAnimal").addEventListener('click', editAnimal);
document.getElementById("addAnimal").addEventListener('click', addAnimal);
document.getElementById("removeAnimal").addEventListener('click', removeAnimal);

Zoo.name = "A2 Zoo";
Zoo.capacity = 100;
Zoo.numberOfGuests = 0;
Zoo.numberOfAnimals = 100;

function populateZooFields(){
   document.getElementById('name').innerHTML = Zoo.name;
   document.getElementById("capacity").innerHTML = Zoo.capacity;
   document.getElementById("numberOfGuests").innerHTML = Zoo.numberOfGuests;
   document.getElementById("numberOfAnimals").innerHTML = Zoo.Animalss.length;
   let button = document.createElement('button');
}

function populateAnimals(animal){
    let table = document.getElementById("animalTable");

    let row =  table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);

    // Add some text to the new cells:
    cell1.innerHTML = "Name:";
    cell2.innerHTML = "Type:";
    cell3.innerHTML = "Age:";
    cell4.innerHTML = "Gender:";
    cell5.innerHTML = "Weight:";
    cell6.innerHTML = "IsPregnant?";
    cell7.innerHTML = "Make Pregnant";

    for(i = 0; i < animal.length; i++){
        let rowtest = table.insertRow(i+1);
        let cell1test = rowtest.insertCell(0);
        let cell2test = rowtest.insertCell(1);
        let cell3test = rowtest.insertCell(2);
        let cell4test = rowtest.insertCell(3);
        let cell5test = rowtest.insertCell(4);
        let cell6test = rowtest.insertCell(5);
        let cell7test = rowtest.insertCell(6);

        cell1test.innerHTML = animal[i].name;
        cell2test.innerHTML = animal[i].type;
        cell3test.innerHTML = animal[i].age;
        cell4test.innerHTML = animal[i].gender;
        cell5test.innerHTML = animal[i].weight;
        cell6test.innerHTML = "<input type='checkbox' id='checkedId1' disabled>"
        cell7test.innerHTML = "<button id='makePregnant'>MakePregnant</button>";

        document.getElementById("makePregnant").addEventListener('click', function(){
            makePregnant(Zoo.Animalss[i]);
        });
    }
}

function addGuest(){
    let guestList = document.getElementsByName("inputGuests");
    guestList = parseInt(guestList[0].value);


    if (isNaN(guestList) === false){
        if (guestList <= Zoo.capacity - Zoo.numberOfGuests){
            Zoo.numberOfGuests += parseInt(guestList);
            populateZooFields();
        }
        else if (guestList >= (Zoo.capacity - Zoo.numberOfGuests) && Zoo.numberOfGuests != Zoo.capacity){
            let openSpaces = Zoo.capacity - Zoo.numberOfGuests;
            Zoo.numberOfGuests += parseInt(openSpaces);
            console.log(`"${guestList - openSpaces} guests not admitted."`);
            populateZooFields();
            
        }

        if (Zoo.numberOfGuests === Zoo.capacity){
            alert("The Zoo is Full!");
        }
    }

}

function populateAnimalListBox(animal){
    for (i = listBox.length; i > 0; i--){
        listBox.options[i] = null;
    }
    animal.forEach(animal => {
        let element = document.createElement("option");
        let animalName = document.createTextNode(animal.name);
        element.appendChild(animalName);
        listBox.appendChild(element);
    });
}

function populateAnimalForm(){
    Zoo.Animalss.forEach(animal => {
        if (listBox.value === animal.name){
            animalName.value = animal.name;
            animalType.value = animal.type;
            animalAge.value = animal.age;
            animalGender.value = animal.gender;
            animalWeight.value = animal.weight;
            animalIsPreg.value = animal.isPregnant;
        }
    });
}

function editAnimal(){
    Zoo.Animalss.forEach(animal => {
        if (listBox.value === animal.name){
            animal.name = animalName.value;
            animal.type = animalType.value;
            animal.age = animalAge.value;
            animal.gender = animalGender.value;
            animal.weight = animalWeight.value;
            animal.isPregnant = animalIsPreg.value;
        }
    });

    if (text[0].value != "" && text[1].value != "" && text[2].value != "" && 
    text[3].value != "" && text[4].value != "" && text[5].value != ""){
        populateAnimalListBox(newAnimalList);
    }
    else{
        alert("Please fill out all of the fields.");
    }
}

function addAnimal(){

    console.log(newAnimalList);

     let createdAnimal =
         [  animalName.value,
            animalType.value,
            animalAge.value,
            animalGender.value,
            animalWeight.value,
            animalIsPreg.value];

    if (text[0].value != "" && text[1].value != "" && text[2].value != "" && 
    text[3].value != "" && text[4].value != "" && text[5].value != ""){
        newAnimalList.animals.push({"name":animalName.value, "type":animalType.value, "age":animalAge.value, "gender":animalGender.value, "weight":animalWeight.value, "isPregnant":animalIsPreg.value});
        populateAnimalListBox(newAnimalList);
        let table = document.getElementById("animalTable");
        let tbody = table.getElementsByTagName('tbody');
        table.removeChild(tbody[0]);
    
        populateAnimals(newAnimalList);
        Zoo.numberOfAnimals += 1;
    }
    else{
        alert("Please fill out all of the fields.");
    }

    populateZooFields();
}

function removeAnimal(){
    animals = newAnimalList;
    animals.forEach(animal =>{
        if (listBox.value === animal.name){
            let number = animals.indexOf(animal);
                animals.splice(number, 1);
                Zoo.numberOfAnimals--;
                populateZooFields();
        }
    });

    populateAnimalListBox(animals);
}

function makePregnant(mother){
    if (mother.gender === "Female"){
        let checkbox = document.getElementById("checkedId1");

        checkbox.checked = true;
        
    }
    else{
        alert("Animal is not a female.");
    }
}


