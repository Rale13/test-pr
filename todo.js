document.getElementById("addTaskButton").addEventListener("click", function() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if(taskValue) {
        const li = document.createElement('li');
        li.textContent = taskValue;

        li.addEventListener('click', function() {
            li.classList.toggle('done');
        })

        document.getElementById('taskList').appendChild(li);
        taskInput.value = ""; //clear input after adding task
    }
})