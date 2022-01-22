function solve (input) {
    let register = [];

    for (str of input) {
        let [name, level, items] = str.split(' / ');

        items = items ? items.split(', ') : [];
        level = Number(level);

        let obj = {
            name,
            level,
            items,
        }
        
        register.push(obj);
    }
    
    return JSON.stringify(register);
}

solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])