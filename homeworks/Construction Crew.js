function solve(obj) {

    if(obj.dizziness == true) {
        obj.levelOfHydrated = (obj.weight * 0.1) * obj.experience;
    }
    return obj;
}

solve({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true });