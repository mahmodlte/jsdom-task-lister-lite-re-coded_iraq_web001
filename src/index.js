document.addEventListener("DOMContentLoaded", () => {
  // your code here
<<<<<<< HEAD
  const form = document.getElementById("create-task-form");
  form.addEventListener('submit', function(e){
    e.preventDefault();
    let taskValue = document.getElementById("new-task-description").value;
    const listUl = document.getElementById("tasks");
    const listItem = document.createElement('li');
    listUl.appendChild(listItem);
    console.log(`This is task ${taskValue}`)
    listItem.innerText = taskValue;
   
    
   
 
=======
  const taskValue = document.getElementById("new-task-description").value;
  const form = document.getElementById("create-task-form");
  const listUl = document.getElementById("tasks");
  const listItem = document.createElement("li");
  form.addEventListener('submit', function(e){
   e.preventDefault();
   listItem.innerText = taskValue;
   listUl.appendChild(listItem);
   
>>>>>>> ba408a461d6b350ba8a14da9ff47f962a41ff8af
  });
});
