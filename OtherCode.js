//Reduced Dmg Elses
else if(this._type === 'Fire' && (target._type === 'Water' || target._type === 'Rock' || target._type === 'Ground')){
    let reducedDmg = .2*totalDmg;
    totalDmg = totalDmg - reducedDmg;
    target._HP -= totalDmg;
    console.log(`${this._name} hit ${target._name} for ${totalDmg}. ${target._name} has ${target._HP} HP left. Due to type constraints, ${this._name} has done ${reducedDmg} less damage.`);
 } else if(this._type === 'Water' && (target._type === 'Electric' || target._type === 'Grass')){
    let reducedDmg = .2*totalDmg;
    totalDmg = totalDmg - reducedDmg;
    target._HP -= totalDmg;
    console.log(`${this._name} hit ${target._name} for ${totalDmg}. ${target._name} has ${target._HP} HP left. Due to type constraints, ${this._name} has done ${reducedDmg} less damage.`);
 } else if(this._type === 'Electric' && target._type === 'Ground'){
    let reducedDmg = .2*totalDmg;
    totalDmg = totalDmg - reducedDmg;
    target._HP -= totalDmg;
    console.log(`${this._name} hit ${target._name} for ${totalDmg}. ${target._name} has ${target._HP} HP left. Due to type constraints, ${this._name} has done ${reducedDmg} less damage.`);
 } else if(this._type === 'Grass' && (target._type === 'Bug' || target._type === 'Fire' || target._type === 'Flying' || target._type === 'Ice' || target._type === 'Poison')){
    let reducedDmg = .2*totalDmg;
    totalDmg = totalDmg - reducedDmg;
    target._HP -= totalDmg;
    console.log(`${this._name} hit ${target._name} for ${totalDmg}. ${target._name} has ${target._HP} HP left. Due to type constraints, ${this._name} has done ${reducedDmg} less damage.`);
 } //Additonal Dmg Elses
 else if(this._type === 'Fire' && (target._type === 'Bug' || target._type === 'Grass' || target._type === 'Ice' || target._type === 'Steel')){
     let additionalDmg = .2*totalDmg;
     totalDmg = totalDmg + additionalDmg;
     target._HP -= totalDmg;
     console.log(`${this._name} hit ${target._name} for ${totalDmg}. ${target._name} has ${target._HP} HP left. Amazing! ${this._name} has done ${additionalDmg} more damage.`);
 } else if(this._type === 'Electric' && (target._type === 'Flying' || target._type === 'Water')){
    let additionalDmg = .2*totalDmg;
    totalDmg = totalDmg + additionalDmg;
    target._HP -= totalDmg;
    console.log(`${this._name} hit ${target._name} for ${totalDmg}. ${target._name} has ${target._HP} HP left. Amazing! ${this._name} has done ${additionalDmg} more damage.`);
} else if(this._type === 'Grass' && (target._type === 'Water' || target._type === 'Ground' || target._type === 'Rock')){
    let additionalDmg = .2*totalDmg;
    totalDmg = totalDmg + additionalDmg;
    target._HP -= totalDmg;
    console.log(`${this._name} hit ${target._name} for ${totalDmg}. ${target._name} has ${target._HP} HP left. Amazing! ${this._name} has done ${additionalDmg} more damage.`);
} else if(this._type === 'Water' && (target._type === 'Fire' || target._type === 'Ground' || target._type === 'Rock')){
    let additionalDmg = .2*totalDmg;
    totalDmg = totalDmg + additionalDmg;
    target._HP -= totalDmg;
    console.log(`${this._name} hit ${target._name} for ${totalDmg}. ${target._name} has ${target._HP} HP left. Amazing! ${this._name} has done ${additionalDmg} more damage.`);
}else if(this._type === 'Bug' && (target._type === 'Grass' || target._type === 'Dark' || target._type === 'Psychic')){
    let additionalDmg = .2*totalDmg;
    totalDmg = totalDmg + additionalDmg;
    target._HP -= totalDmg;
    console.log(`${this._name} hit ${target._name} for ${totalDmg}. ${target._name} has ${target._HP} HP left. Amazing! ${this._name} has done ${additionalDmg} more damage.`);
}
 else {
     target._HP -= totalDmg;
     console.log(`${this._name} hit ${target._name} for ${totalDmg}. ${target._name} has ${target._HP} HP left.`);
}