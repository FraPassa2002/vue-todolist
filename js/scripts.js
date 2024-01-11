// Estraggo la funzione createApp dall'ogetto Vue
const { createApp } = Vue;

// Creo l'istanza di Vue da montare in pagina
createApp({
    data() {
        return {
            newTodo: '',

            todos: [
                {
                    text: 'Mangiare',
                    done: true,
                },
                {
                    text: 'Dormire',
                    done: false,
                },
                {
                    text: 'Respirare',
                    done: true,
                },
                
            ],
        }
    },
    
    methods: {
        pressedKeyboard() {
            console.log(this.newTodo);
        },

        addTodo() {
            if (this.newTodo.trim().length > 0) {
                const newTodoObj = {
                    text: this.newTodo.trim(),
                    done: false,
                };

                this.todos.push(newTodoObj);

                this.newTodo = '';
            }
        },

        removeTodo(i) {
            this.todos.splice(i, 1);
        },

        invertDone(i) {
            this.todos[i].done = !this.todos[i].done;
        }
        
    }
    
// Monto l'istanza di Vue in pagina
}).mount('#app');

