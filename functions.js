

// var task = `<div class="task">
//                     <div class="check-desc">
//                         <div class="checkbox-wrapper-31">
//                             <input type="checkbox">
//                             <svg viewBox="0 0 35.6 35.6">
//                               <circle class="background" cx="17.8" cy="17.8" r="17.8"></circle>
//                               <circle class="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
//                               <polyline class="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
//                             </svg>
//                         </div> 
//                         <input type="text" id="task" name="task" class="description">
//                     </div>
//                     <button class="delete" onclick="">Delete task</button>
//                 </div>`;


function addTask() {
    const desc_content = document.querySelector("#task-description").value;
    const empty = "";

    if (empty !== desc_content) {
        const node = document.createElement("li");
        var description = "<p class='task-description'>" + desc_content + "</p>";
        var task = "<div class='task'> <div class='check-desc'> <div class='checkbox-wrapper-31'> <input type='checkbox' onclick='check_task(this)'> <svg viewBox='0 0 35.6 35.6'> <circle class='background' cx='17.8' cy='17.8' r='17.8'></circle> <circle class='stroke'cx='17.8' cy='17.8' r='14.37'></circle><polyline class='check' points='11.78 18.12 15.55 22.23 25.17 12.87'></polyline></svg></div> " + description + "</div> <button class='delete' onclick='removeTask(this)'>Delete task</button></div>";
        node.innerHTML = task;
        document.querySelector(".tasks-list").appendChild(node);
        document.querySelector("#task-description").value = "";
    }
}

function check_task(element) {
    var checkmark = element;
    var desc_content = element.parentNode.nextElementSibling;
    console.log(this);
    if (checkmark.checked) {
        desc_content.classList.add("completed");
    } else {
        desc_content.classList.remove("completed");
    }
}






function removeTask(element) {
    element.parentNode.parentNode.remove();
}