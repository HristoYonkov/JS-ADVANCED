class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;

        this.priceForTheCamp = {
            child: 150,
            student: 300,
            collegian: 500,
        }
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        money = Number(money);
        let idx = this.listOfParticipants.findIndex(x => x.name === name);
        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error('Unsuccessful registration at the camp.');
        }
        if (idx !== - 1) {
            return `The ${name} is already registered at the camp.`
        } else if (money < this.priceForTheCamp[condition]) {
            return 'The money is not enough to pay the stay at the camp.'
        } else {
            let obj = {
                name,
                condition,
                power: 100,
                wins: 0,
            }
            this.listOfParticipants.push(obj);
            return `The ${name} was successfully registered.`
        }
    };

    unregisterParticipant(name) {
        let idx = this.listOfParticipants.findIndex(x => x.name === name);
        if (idx == - 1) {
            throw new Error(`The ${name} is not registered in the camp.`)
        } else {
            this.listOfParticipants.splice(idx, 1);
            return `The ${name} removed successfully.`

        }
    };

    timeToPlay(typeOfGame, participant1, participant2) {
        let firstIndex = this.listOfParticipants.findIndex(x => x.name === participant1);
        let secondIndex = this.listOfParticipants.findIndex(x => x.name === participant2);
        if (typeOfGame == 'WaterBalloonFights') {
            if (firstIndex == - 1 || secondIndex == -1) {
                throw new Error('Invalid entered name/s.')
            } else if (this.listOfParticipants[firstIndex].condition !== this.listOfParticipants[secondIndex].condition) {
                throw new Error('Choose players with equal condition.')
            }
            if (this.listOfParticipants[firstIndex].power > this.listOfParticipants[secondIndex].power) {
                this.listOfParticipants[firstIndex].wins++;
                return `The ${participant1} is winner in the game ${typeOfGame}.`
            } else if (this.listOfParticipants[firstIndex].power < this.listOfParticipants[secondIndex].power) {
                this.listOfParticipants[secondIndex].wins++;
                return `The ${participant2} is winner in the game ${typeOfGame}.`
            } else {
                return 'There is no winner.'
            }
        } else if (typeOfGame == 'Battleship') {
            let idx = this.listOfParticipants.findIndex(x => x.name === participant1);
            if (idx == - 1) {
                throw new Error('Invalid entered name/s.')
            }else{
                this.listOfParticipants[idx].power += 20
                return `The ${participant1} successfully completed the game ${typeOfGame}.`;
            }

        }
    }

    toString() {
        let sorted = this.listOfParticipants.sort((a, b) => b.wins - a.wins)
        let result = [];
        let str = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`
        result.push(str)
        sorted.forEach(x =>
            result.push(`${x.name} - ${x.condition} - ${x.power} - ${x.wins}`)
        )
        return result.join('\n')
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.unregisterParticipant("Petar"));
console.log(summerCamp.unregisterParticipant("Petar Petarson"));




