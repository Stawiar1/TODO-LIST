//stworzenie zmiennych globalnych 
let $todoInput;   //input
let $alertInfo; //info o zadaniach 
let $addBtn; //przycisk Add
let $ulList //lista zadań 
let $newTask //nowo dodane LI , nowe zadanie

let $popup; //pobrany popup
let $popupInfo; // alert w popup'ie przy próbie dodania pustego tekstu
let $editedTodo; //edytowany todo
let $popupInput; // tekst wrzucany w inputa w popup'ie 
let $addPopupBtn; // Przycisk zatwierdzenia w popup'ie
let $closeTodoBtn; // przyisk zamyakania popup'a 

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

    //pobranie elementów popup'a 
    $popup = document.querySelector('.popup')
    $popupInfo = document.querySelector('.popupInfo')
    $popupInput = document.querySelector('.popupInput')
    $addPopupBtn = document.querySelector('.accept')
    $closeTodoBtn = document.querySelector('.cancel')
};


//nasłuchiwanie 
const prepareDOMEvents = () => {

    $addBtn.addEventListener('click' , addNewTask); //nasłuchwanie na dodanie nowego zadania
    $ulList.addEventListener('click' , checkClick); //nasłuchiwanie na click -> funkcja checkClick
    $closeTodoBtn.addEventListener('click' , closePopup); //Zamknięcie popup'a przy edycji zadania

};


//dodawanie nowego zadania
const addNewTask = () => {
    if ($todoInput.value !== ''){
        $newTask = document.createElement('li') //stworzenie nowego elementu listy
        $newTask.innerText = $todoInput.value; //przechwycenie wartośći z inputa
        $ulList.appendChild($newTask) //Dodanie nowego elementu do listy
        $todoInput.value = ''; //wyzerowanie inputa
        $alertInfo.innerText = 'Dodano nowe zadanie!'
        createToolsArea(); //Wywołanie funkcji odpowiadającej za dodanie elementów modyfikujących zadanie
    }else {
        $alertInfo.innerText = 'Wpisz poprawnie treść zadania!' //zabezpieczenie przed dodaniem pustego zadania
    }
}

//dodanie elementów modyfikacji zadania 
const createToolsArea = () => {
    const toolsPanel = document.createElement('div')
    toolsPanel.classList.add('tools')
    $newTask.appendChild(toolsPanel)

    const completeBtn = document.createElement('button')
    completeBtn.classList.add('complete')
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';

    const editBtn = document.createElement('button')
    editBtn.classList.add('edit')
    editBtn.innerText = 'EDIT'

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

    toolsPanel.appendChild(completeBtn);
    toolsPanel.appendChild(editBtn);
    toolsPanel.appendChild(deleteBtn);
}

const checkClick = (event) => {

    //Sprawdzenie czy kliknięty element ma klasę complete
    //closest - ikonka fa-check nie zawiera klasy complete! (najbliższy element)
    if(event.target.closest('button').classList.contains('complete')){
        event.target.closest('li').classList.toggle('completed'); // wyszarzenie , zmniejszenie i przekreślenie zadania
        event.target.closest('button').classList.toggle('completed') //wyszarzenie przycisku "wykonane"

    }else if (event.target.closest('button').className === 'edit') {
        editTask();
    }else if (event.target.closest('button').className === 'delete'){

    }
}

const editTask = () => {
    $popup.style.display = 'flex';
}
const closePopup = () => {
    $popup.style.display = 'none';
}




document.addEventListener('DOMContentLoaded' , main) //Po wczytaniu struktury HTML otworzy się tylko funkcja main 