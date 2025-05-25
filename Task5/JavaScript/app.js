// 使用ES6类组织代码
class TaskManager {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || []; // 从本地存储加载任务
        this.taskForm = document.getElementById('taskForm'); // 表单元素
        this.taskList = document.getElementById('taskList'); // 任务列表元素
        this.errorMsg = document.getElementById('errorMsg'); // 错误消息元素
        
        // 初始化事件监听
        this.initEventListeners(); 
        this.renderTasks(); // 渲染任务列表
    }

    // 初始化表单提交事件
    initEventListeners() {
        this.taskForm.addEventListener('submit', (e) => {
            e.preventDefault(); // 阻止表单默认提交行为
            const name = document.getElementById('taskName').value; // 获取任务名称
            const dueDate = document.getElementById('dueDate').value; // 获取截止日期
            this.addTask(name, dueDate); // 添加任务
        });

        // 事件委托处理删除操作
        this.taskList.addEventListener('click', (e) => { 
            if (e.target.classList.contains('delete-btn')) {
                const taskId = e.target.dataset.id; // 获取任务ID
                this.deleteTask(taskId); // 删除任务
            }
        });
    }

    // 添加任务（含验证）
    addTask(name, dueDate) {
        // 使用正则验证日期格式
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // 匹配 YYYY-MM-DD 格式
        if (dueDate && !dateRegex.test(dueDate)) {
            this.showError('日期格式错误，请使用YYYY-MM-DD'); // 显示错误信息
            return; // 阻止添加任务
        }

        const newTask = {
            id: Date.now().toString(), // 使用时间戳作为ID
            name,
            dueDate: dueDate || '未设置'
        };

        this.tasks.push(newTask); // 添加到任务列表
        this.saveToLocalStorage(); // 保存到本地存储
        this.renderTasks(); // 重新渲染任务列表
        this.taskForm.reset(); // 重置表单
        this.errorMsg.textContent = ''; // 清空错误信息
    }

    // 删除任务
    deleteTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId); // 过滤掉指定ID的任务
        this.saveToLocalStorage();
        this.renderTasks();
    }

    // 渲染任务列表
    renderTasks() {
        //对每个任务进行遍历，生成HTML字符串，然后使用join('')方法将它们连接起来。
        this.taskList.innerHTML = this.tasks.map(task => `
            <div class="task-item">
                ${task.name} - 截止: ${task.dueDate} 
                <button class="delete-btn" data-id="${task.id}">删除</button>
            </div>
        `).join('');
    }

    // 保存到本地存储（使用JSON），防止数据丢失
    saveToLocalStorage() {
        try {
            localStorage.setItem('tasks', JSON.stringify(this.tasks)); // 将任务数组转换为JSON字符串并保存
        } catch (e) {
            this.showError('保存数据失败，请检查存储空间');
        }
    }

    // 错误处理
    showError(message) {
        this.errorMsg.textContent = message;
        setTimeout(() => {
            this.errorMsg.textContent = '';
        }, 3000);
    }
}

// 初始化应用
new TaskManager(); 
