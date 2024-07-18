 function showMainMenu() {
            document.getElementById('main-menu').style.display = 'block';
            document.getElementById('sub-menu').style.display = 'none';
        }

        function viewExistingList() {
            document.getElementById('main-menu').style.display = 'none';
            document.getElementById('sub-menu').style.display = 'block';
            document.getElementById('view-list-menu').style.display = 'block';
            document.getElementById('new-list-menu').style.display = 'none';
        }

        function createNewList() {
            document.getElementById('main-menu').style.display = 'none';
            document.getElementById('sub-menu').style.display = 'block';
            document.getElementById('view-list-menu').style.display = 'none';
            document.getElementById('new-list-menu').style.display = 'block';
        }

        function exitApp() {
            document.getElementById('output').innerText = 'Thank you for using our App!';
        }

        function goBack() {
            showMainMenu();
        }

        function showList() {
            let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            let output = '<ul>';
            tasks.forEach(task => {
                output += `<li>Task: ${task.activity} - Urgency: ${task.importance} - Due by: ${task.dueDate}</li>`;
            });
            output += '</ul>';
            document.getElementById('output').innerHTML = output;
        }

        function addItem() {
            let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            let activity = prompt("Please enter a task to accomplish:");
            let dueDate = prompt("Please enter the day the task is due:");
            let importance = prompt("Please enter a number from 1 to 10 for importance of the task:");
            if (activity && dueDate && importance) {
                tasks.push({ activity, dueDate, importance });
                localStorage.setItem('tasks', JSON.stringify(tasks));
                showList();
            }
        }

        function createList() {
            let tasks = [];
            while (true) {
                let activity = prompt("Please enter a task to accomplish or -1 to exit:");
                if (activity === '-1') break;
                let dueDate = prompt("Please enter the day the task is due:");
                let importance = prompt("Please enter a number from 1 to 10 for importance of the task:");
                if (activity && dueDate && importance) {
                    tasks.push({ activity, dueDate, importance });
                } else {
                    break;
                }
            }
            localStorage.setItem('tasks', JSON.stringify(tasks));
            showList();
        }