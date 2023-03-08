import { ref,Ref ,reactive,computed} from 'vue'
import { defineStore } from 'pinia'// 某个模块的状态函数化
import { nanoid } from 'nanoid'
//  告别类式编程  函数式
type Todo = { id: string; text: string; isComplete:boolean;} //自定义类型
const lskey = '_v_todos';//常量

export const useTodoStore =  defineStore('todos',() => {
    // 后面每一项都是ref的todo数组，后面要用ref() 包着[]）
    // 泛型
    const todos:Ref<Todo[]> = ref([]) //没有定义里面每一项的类型定义，下面添加属性值会报错
    // 5%
    const addTodo = (text:string) =>{
        todos.value = [
            //响应式修改todos的值，展开数组
            ...todos.value,
            {
                id:nanoid(), //生成唯一id
                isComplete:false, //未完成
                text // 文本的内容
            }
        ]
        updateLocalStorage()
    }
    const updateLocalStorage = () =>{
        localStorage.setItem(lskey,JSON.stringify(todos.value))
    }

    const initFromLocalStorage = () =>{
        const lstodos = localStorage.getItem(lskey)

        if(lstodos === null){
            todos.value = []
        }else{
            todos.value = JSON.parse(lstodos)
        }
    }

    const completedTodos = computed(() => {
     return   todos.value.filter(todo => todo.isComplete === true)
})
    const incompletedTodos = computed(() => 
        todos.value.filter(todo => todo.isComplete !== true)
    )
    
    const toggleTodo = (id:string) =>{
        //todos 更新 响应式的直接改变本身
        todos.value.forEach(todo => {
            //遍历一下
            if (todo.id === id) todo.isComplete = !todo.isComplete
        }) //引用式
        //
        updateLocalStorage();
    }
    const clearCompletedTodos = () => {
        todos.value = todos.value.filter( todo => todo.isComplete === false) //清除
        updateLocalStorage();
        
    }
    const deleteTodo = (id:string) =>{
        todos.value = todos.value.filter(todo => todo.id !==id)
        updateLocalStorage();//当前todos存进去
    }
    return{
        todos,
        addTodo,
        initFromLocalStorage,
        completedTodos,
        incompletedTodos,
        toggleTodo,
        clearCompletedTodos,
        deleteTodo
    }
}) //还要给他传参数{} ,多种语法形式