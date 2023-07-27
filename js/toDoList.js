function addtask(){
    const tbody = document.querySelector('tbody');
    const newTaskName = document.getElementById('taskName').value;
    //adicionando uma nova linha ao tbody
    const newTask = document.createElement('tr');
    
    //adicionando o td do nome da task e tbm adicionando o nome
    const tdTaskName = document.createElement('td');
    tdTaskName.textContent = newTaskName;
    
    //adicionanod o td data de criação e tbm a data
    const tdTaskDateOfCriation = document.createElement('td');
    //depoois retorno aqui pra alterar manipular a string da data 
    let date = new Date;
    const dateCreateTask = date.toLocaleString();
    tdTaskDateOfCriation.textContent = dateCreateTask; 


    //adicionando os status da tarefa(select)
    const tdTaskStatus = document.createElement('td');
    const selectButton = document.createElement('select');
    const optionPendente = document.createElement('option');
    const optionEmAndamento = document.createElement('option');
    const optionConcluida = document.createElement('option');
    optionPendente.textContent = 'pendente';
    optionEmAndamento.textContent = 'Em andamento';
    optionConcluida.textContent = 'Concluida';
    //adicionando status ao select
    selectButton.appendChild(optionPendente);
    selectButton.appendChild(optionEmAndamento);
    selectButton.appendChild(optionConcluida);
    tdTaskStatus.appendChild(selectButton);

    //criando as ferramentas de deletar e editar
    const tdTaskTools = document.createElement('td');
    const spanDelete = document.createElement('span');
    const spanEdit = document.createElement('span');
    //adicionando eventos aos spans
    spanDelete.setAttribute('onclick', 'deleteTask(event)')
    //adicionando estilizações aos spans
    spanDelete.classList.add('material-symbols-outlined');
    spanDelete.textContent = 'delete';
    spanDelete.setAttribute('id', 'deleteTask');
    spanEdit.classList.add('material-symbols-outlined');
    spanEdit.setAttribute('onclick','editTask(event)')
    spanEdit.textContent = 'edit';
    spanEdit.setAttribute('id', 'editTask');
    tdTaskTools.appendChild(spanDelete);
    tdTaskTools.appendChild(spanEdit);

    //adicionando todos os td's ao tr
    newTask.appendChild(tdTaskName);
    newTask.appendChild(tdTaskDateOfCriation);
    newTask.appendChild(tdTaskStatus);
    newTask.appendChild(tdTaskTools);

    //adicionando elementos ao body

    tbody.appendChild(newTask);
    newTask.setAttribute('id','')
}

function deleteTask(event){
    const taskToRemove = event.target;
    taskToRemove.parentNode.parentNode.remove();
}

function editTask(event){
    function setNewTaskName(inputNewTaskName, tdTaskName){ 
        const newName = inputNewTaskName.value;
        tdTaskName.textContent = newName;
    }
    //pegando o nome atual caso o usuario decida nao alterar
    // const currentName = tdTaskName.textContent;

    const taskToEdit = event.currentTarget;
    const trTaskToEdit = taskToEdit.parentNode.parentNode;
    const tdTaskName = trTaskToEdit.firstElementChild;
    tdTaskName.textContent = '';

    //criando input para novo nome e estilizando ele
    const submitNewName = document.createElement('button');
    submitNewName.textContent = '+';
    submitNewName.style.width = '10px';
    const inputNewTaskName = document.createElement('input');
    inputNewTaskName.type = 'text';
    inputNewTaskName.style.width = '75px';
    inputNewTaskName.style.outline = 'none';
    
    //adicionando input a tabela para que o usuario altere o nome da task
    tdTaskName.textContent = '';
    tdTaskName.appendChild(inputNewTaskName);
    tdTaskName.appendChild(submitNewName)
    submitNewName.addEventListener('click',function(){
        setNewTaskName(inputNewTaskName, tdTaskName);

        //limpando os elementos de edição 
        inputNewTaskName.remove();
        submitNewName.remove() 
    })
}
