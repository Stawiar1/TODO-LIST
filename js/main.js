//stworzenie zmiennych globalnych 
let $todoInput;   //input
let $alertInfo; //info o zadaniach 
let $addBtn; //przycisk Add
let $ulList //lista zadań 
let $newTask //nowo dodane LI , nowe zadanie

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
}

//pobieranie elementów
const prepareDOMElements = () => {
    $todoInput = document.querySelector('.todoInput')
    $alertInfo = document.querySelector('.alertInfo')
    $addBtn = document.querySelector('.addBtn')
    $ulList = document.querySelector('.todoList ul')
};


//nasłuchiwanie 
const prepareDOMEvents = () => {

    $addBtn.addEventListener('click' , addNewTask)

};


//dodawanie nowego zadania
const addNewTask = () => {
    if ($todoInput.value !== ''){
        $newTask = document.createElement('li') //stworzenie nowego elementu listy
        $newTask.innerText = $todoInput.value; //przechwycenie wartośći z inputa
        $ulList.appendChild($newTask) //Dodanie nowego elementu do listy
        $todoInput.value = ''; //wyzerowanie inputa
        $alertInfo.innerText = 'Dodano nowe zadanie!'
    }else {
        $alertInfo.innerText = 'Wpisz poprawnie treść zadania!' //zabezpieczenie przed dodaniem pustego zadania
    }
}





document.addEventListener('DOMContentLoaded' , main) //Po wczytaniu struktury HTML otworzy się tylko funkcja main 




