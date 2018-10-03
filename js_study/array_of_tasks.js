/** 
* @typedef {Object} Task
* @property {string} name 
* @property {string} url
* @property {string} status
*/

/**
 * @typedef {HTMLElement} TableElement
 */


/**
* @param {Array<Task>} array_of_tasks 
* @param {TableElement} table_of_tasks
**/

function fillTable_1(array_of_tasks, table_of_tasks) {
    const array_of_rows = table_of_tasks.children;
    for (let i = 0; i < array_of_rows.length; i++){
          const array_of_cells = array_of_rows[i].children;
          
          const numberCell = array_of_cells[0];
          numberCell.textContent = i + 1;
        
          const nameCell =  array_of_cells[1];
          /** @type {HTMLAnchorElement} */
          const hRefElement = nameCell.firstChild;
          const task = array_of_tasks[i];
          hRefElement.textContent = task.name;
          hRefElement.href = task.url;  //href = гипперссылка(атрибут (свойство) объекта)

          const statusCell = array_of_cells[2];
          statusCell.textContent = task.status;
    }
}

/**
* @param {Array<Task>} array_of_tasks 
* @param {TableElement} table_of_tasks
**/

function fillTable_2(array_of_tasks, table_of_tasks) {
    for (let i = 0; i < array_of_tasks.length; i++){
        const task = array_of_tasks[i];

        const rowElement = document.createElement('tr'); // создаем элемент, в аргументе - тег элемента
        table_of_tasks.appendChild(rowElement); // помещаем в родительский элемент

        const numberCell = document.createElement('td');
        numberCell.textContent = i + 1;
        rowElement.appendChild(numberCell);
        

        const nameCell = document.createElement('td');
        const hRefElement = document.createElement('a');
        hRefElement.textContent = task.name;
        hRefElement.href = task.url;
        nameCell.appendChild(hRefElement);
        rowElement.appendChild(nameCell);

        const statusCell = document.createElement('td');
        statusCell.textContent = task.status;
        rowElement.appendChild(statusCell);


    }
}

function main() {
    
    const task_1 = {
        name: 'Задание 1',
        url: 'classbook_tasks/main_page.html',
        status: 'Неопределен'
    
    }
    
    const task_2 = {
        name: 'Задание 2',
        url: 'taskks_past/t_1.html',
        status: 'Неопределен'
    
    }

    const array_of_tasks = [task_1, task_2];
    const table_of_tasks_1 = document.getElementById("table_of_tasks_1");  //ctrl + клик -  переход к определению 
    fillTable_1(array_of_tasks, table_of_tasks_1);

    const table_of_tasks_2 = document.getElementById("table_of_tasks_2");
    fillTable_2(array_of_tasks, table_of_tasks_2);
}
main();

//create fill_Table_3 using innerHTML instead of using createElement (with google)