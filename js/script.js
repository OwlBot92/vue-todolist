var app = new Vue({
    el: "#root",
    data: {
        inputFilter: "",
        /* la chiave da popolare col testo inserito dall'utente */
        testo: "",
        /* contenuto di default della lista */
        ulContent: [
            {
                liTxt: "Strutturare file HTML",
                visible: true
            },
            {
                liTxt: "Stilizzare tramite CSS",
                visible: true
            },
            {
                liTxt: "Aggiungere funzionalità JS",
                visible: true
            }
        ]
    },

    /* funzionalità della todo */
    methods:{
        /* permette di aggiungere alla todo */
        addTodo(){
            if (this.testo.length) {
                this.ulContent.push({
                    liTxt: this.testo,
                    visible: true
                });
                this.testo = "";
            }
        },

        /* rimuove un elemento cliccando sulla X */
        removeTodo(i){
            this.ulContent.splice(i, 1);
        },

        filterTodos(){
            for (const obj of this.ulContent) {
                let lowerTxt = obj.liTxt.toLowerCase();
                let lowerInput = this.inputFilter.toLowerCase();
                (lowerTxt.includes(lowerInput)) ? obj.visible = true : obj.visible = false;
            }
        }
    }

})