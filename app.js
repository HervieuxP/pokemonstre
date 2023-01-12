const app = Vue.createApp({
    data() {
        return {
            viePlayer: 100,
            vieEnnemy: 100,
            turn : 0,
            winner :'',
            gifUrl: 'https://tenor.com/fr/view/shiny-squirtle-squirtle-pokemon-water-type-cute-gif-16669747',
            randomDmgPlayer:"",
            randomDmgEnnemy:"",
            randomDmgAtkSpe:"",
            randomsoin:"",
            mesData:[],
            mesDataennemy:[],
            soins:[]
        };
        
    },
    methods: {

        openLink(url) {
            window.open(url, '_blank');
            this.viePlayer=0;

          },

        attack() {
            this.randomDmgPlayer= (Math.floor(Math.random() * 10) + 10);
            this.vieEnnemy -= this.randomDmgPlayer
            this.turn++
            this.mesData.push(this.randomDmgPlayer)
        },

        contreAttack() {
            this.randomDmgEnnemy =(Math.floor(Math.random() * 11) + 15),
            this.viePlayer -= this.randomDmgEnnemy;
            this.mesDataennemy.push(this.randomDmgEnnemy);
        },

        speAttack() {
            if(this.turn%3==0 && this.turn != 0 ) {
                this.randomDmgAtkSpe=(Math.floor(Math.random() * 12) + 20);
                this.vieEnnemy -= this.randomDmgAtkSpe;
                this.turn++;
                this.mesData.push(this.randomDmgAtkSpe);
            }
        },

        soin() {
            this.randomsoin= (Math.floor(Math.random() * 15) + 20)
            this.viePlayer += this.randomsoin
            this.turn++;
            this.soins.push(this.randomsoin)
        }

    },
    watch: {
        viePlayer (value) {
            if(value >= 100) {
                this.viePlayer = 100;
            }
            else if(value <= 0 && this.vieEnnemy > 0) {
                this.viePlayer = 0;
                this.winner = "Defeat"
            }
            else if(value <= 0 && this.vieEnnemy <= 0) {
                this.viePlayer = 0;
                this.vieEnnemy = 0;
                this.winner = "Draw"    
        }
        else if(value > 0 && this.vieEnnemy <= 0) {
                this.vieEnnemy = 0;
                this.winner = "Victory"    
        }
    },
    winner (value){
        if(value != "" ) {
            this.viePlayer = 100;
            this.vieEnnemy = 100;
            this.turn = 0;
        }

    },

    turn (value) {
        if(value === 1) {
            this.winner = "";
        }
    },


 }   });
    app.mount('#monApp');