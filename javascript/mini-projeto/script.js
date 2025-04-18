function openModal() {
    overlay.classList.add("active");
    createTask.classList.add("active");
}

function closeModal() {
    overlay.classList.remove("active");
    createTask.classList.remove("active");
}

function searchForTasks() {
    fetch("http://localhost:3000/tasks")
        .then(res => res.json())
        .then(res => {
            addTasks(res);
        })
}

searchForTasks();

function addTasks(tasksList) {
    if (tasksList.length > 0) {
        tasksListUl.innerHTML = ""
        tasksList.map(task => {
            tasksListUl.innerHTML += `
                <li>
                    <h5>${task.title}</h5>
                    <p>${task.description}</p>
                    <div class="actions">
                        <box-icon name='trash-alt' size="sm" onclick="deleteTask(${task.id})"></box-icon>
                    </div>
                </li>
            `;
        })
    }
}

function newTask() {
    event.preventDefault();

    let task = {
        title: title.value,
        description: description.value
    }

    fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(task)
    })
        .then(res => res.json())
        .then(res => {
            closeModal();
            searchForTasks();

            let form = document.querySelector("#createTask form")
            form.reset();
        })
}

function deleteTask(idTask) {
    fetch(`http://localhost:3000/tasks/${idTask}`, {
        method: "DELETE",
    })
        .then(res => res.json())
        .then(res => {
            alert("Task deleted with sucess!");
            searchForTasks();
        })
}

function searchTask() {
    let lis = document.querySelectorAll("ul li");

    if (quest.value.length > 0) {
        lis.forEach(li => {
            if (!li.children[0].innerText.includes(quest.value)) {
                li.classList.add('hidden');
            } else {
                li.classList.remove('hidden');
            }
        })
    } else {
        lis.forEach(li => {
            li.classList.remove('hidden');
        })
    }
}