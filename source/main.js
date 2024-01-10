//Classe genérica para representar o herói
class hero {
    //Método construtor para obter as propriedades:
    //Nome, idade e tipo(ex: guerreiro, mago, monge, ninja)
    constructor(nameHero, age, type) {
        this.nameHero = nameHero
        this.age = age
        this.type = type
    }

    //Função/método atacar da classe hero
    attack() {
        let power
        if (this.type == "Guerreiro" || this.type == "guerreiro") {
            power = "espada"
        } else if (this.type == "Mago" || this.type == "mago") {
            power = "magia"
        } else if (this.type == "Monge" || this.type == "monge") {
            power = "artes marciais"
        } else if (this.type == "Ninja" || this.type == "ninja") {
            power = "shuriken"
        }
        console.log(`O ${this.type} atacou usando ${power}.`)
    }

    //Função de classificação do inimigo
    enemy() {
        let inimigo
        console.log(`O ${this.type} ${this.nameHero} avistou o inimigo!`)
        if (this.type == "Guerreiro" || this.type == "guerreiro") {
            inimigo = "bárbaro"
        } else if (this.type == "Mago" || this.type == "mago") {
            inimigo = "feiticeiro"
        } else if (this.type == "Monge" || this.type == "monge") {
            inimigo = "guardião"
        } else if (this.type == "Ninja" || this.type == "ninja") {
            inimigo = "assassino sombrio"
        }
        console.log(`Preparando para atacar ${inimigo}...`)
    }

    //Função de ganho de XP do herói
    experience(levelInimigo) {
        let nivel
        let xpGanho
        levelInimigo = levelInimigo
        if (levelInimigo <= 200) {
            nivel = "Amador"
            xpGanho = 50
        } else if((levelInimigo >= 201) && (levelInimigo <= 500)) {
            nivel = "Perito"
            xpGanho = 150
        } else if((levelInimigo >= 501) && (levelInimigo <= 800)) {
            nivel = "Mestre"
            xpGanho = 300
        } else if((levelInimigo >= 801) && (levelInimigo <= 1500)) {
            nivel = "Épico"
            xpGanho = 600
        } else if((levelInimigo > 1500)) {
            nivel = "Lendário"
            xpGanho = 999
        }
        console.log(`Inimigo de nível ${nivel} derrotado... XP ganho: ${xpGanho}`)
    }
}

//Instanciando objetos com seus atributos
let heroi1 = new hero("Ghost", "26", "Guerreiro")
let heroi2 = new hero("CélioJr", "40", "monge")
let heroi3 = new hero("Grego", "35", "mago")
let heroi4 = new hero("Sedoso", "22", "ninja")

//Execução dos métodos
heroi1.enemy()
heroi1.attack()
heroi1.experience(30)
console.log("----")
heroi2.enemy()
heroi2.attack()
heroi2.experience(2000)
console.log("----")
heroi3.enemy()
heroi3.attack()
heroi3.experience(999)
console.log("----")
heroi4.enemy()
heroi4.attack()
heroi4.experience(372)