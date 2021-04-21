var app = new Vue({
    el: "#root",
    data: {

        /* la chiave da popolare col testo inserito dall'utente */
        testo: "",
        /* contenuto di default della lista */
        ulContent: [
            "Struttura file HTML",
            "Style nel file CSS",
            "Aggiungere funzionalità in JS"
        ]
    },

    /* funzionalità della todo */
    methods:{
        /* permette di aggiungere alla todo */
        addTodo(){
            if (this.testo.length) {
                this.ulContent.push(this.testo);
                this.testo = "";
            }
        },

        /* rimuove un elemento cliccando sulla X */
        removeTodo(i){
            this.ulContent.splice(i, 1);
        }
    }

})