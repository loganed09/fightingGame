class Fighter {
    constructor(name, type) {
        this._name = name;
        this._type = type;
        this._HP = 100;
        this._isKnockedOut = false;
    }

    get name() {
        return this._name;
    }

    get type() {
        return this._type;
    }

    get HP() {
        return this._HP;
    }

    get isKnockedOut() {
        return this._isKnockedOut;
    }

    toggleKnockOut() {
        this._isKnockedOut = !this._isKnockedOut;
    }


    attack(target, dmgDone) {
        let totalDmg = Math.floor(dmgDone);
        let targetHealth = target._HP - totalDmg;
        if(targetHealth <= 0) {
            target.toggleKnockOut();
            target._HP = 0;
            console.log(`${this._name} hit ${target._name} for ${totalDmg}. ${target._name} has ${target._HP} HP left.`);
            console.log(`Oh no! ${target._name} is knocked out!`);
         }else {
            target._HP = targetHealth;
            console.log(`${this._name} hit ${target._name} for ${totalDmg}. ${target._name} has ${targetHealth} HP left.`);
         }
    }



    heal(healingDone){
        let healed = Math.floor(healingDone);
        let totalHealth = this._HP + healed;
        if (totalHealth >= 100){
            this._HP = 100;
            console.log(`You healed for ${healed}. Giving ${this._name} ${this._HP} HP. You overhealed for ${totalHealth - 100}.`);
        }else {
            this._HP += healed;
            console.log(`You healed for ${healed}. Giving ${this._name} ${this._HP} HP.`);
        }
        
    }

    revive(){
        if(this._HP > 0) {
            console.log('You are already alive!');
        }else {
            this.toggleKnockOut();
            this._HP = 20;
            console.log(`${this._name} is now alive with ${this._HP}HP.`);
        }
    }
}


class FireType extends Fighter {
    
}

const Charizard = new Fighter('Charizard', 'Fire');
const Squirtle = new Fighter('Squirtle', 'Water');
const Geodude = new Fighter('Geodude', 'Rock');
const Weedle = new Fighter('Weedle', 'Grass');
const Pikachu = new Fighter('Pikachu', 'Electric')
const bugchu = new Fighter('Bugchu', 'Bug');







console.log(Charizard, Squirtle, Geodude, Weedle, Pikachu);



Charizard.attack(Squirtle, 30);
Squirtle.attack(Charizard, 30);
Pikachu.attack(Charizard, 50);
bugchu.attack(Charizard, 30); 




