function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      //   TODO:
      let inputText = document.querySelector('#inputs textarea').value;

      let parsed = JSON.parse(inputText);

      let restaurantList = {};

      for(element of parsed) {
         let tokens = element.split(' - ');
         let restaurantName = tokens[0];
         let workersArr = tokens[1].split(', ');
         let avgSalary = 0;

         if(!restaurantList[restaurantName]) {
            restaurantList[restaurantName] = {avgSalary, count:0, workers: []}
         }

         for(worker of workersArr) {
            let info = worker.split(' ');
            let workerName = info[0];
            let salary = Number(info[1]);
            let obj = {workerName,salary}
            restaurantList[restaurantName].workers.push(obj);
            restaurantList[restaurantName].avgSalary += salary;
            restaurantList[restaurantName].count++;
         }
      }

      let sortedRestaurants = Object.keys(restaurantList)
      .sort((a, b) => restaurantList[b].avgSalary / restaurantList[b].count - restaurantList[a].avgSalary / restaurantList[a].count);

      let bestRestaurant = `${sortedRestaurants[0]}`;
      let avgSalary = restaurantList[bestRestaurant].avgSalary / restaurantList[bestRestaurant].count;

      let workersSorted = restaurantList[bestRestaurant].workers.sort((a, b) => b.salary - a.salary);

      let bestSalary = workersSorted[0].salary

      let outputRestaurant = document.querySelector('#bestRestaurant p');
      outputRestaurant.textContent = `Name: ${bestRestaurant} Average Salary: ${avgSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;
      
      let workersInfoStr = ``;

      for (wkInfo of workersSorted) {
         let str = `Name: ${wkInfo.workerName} With Salary: ${wkInfo.salary} `;
         workersInfoStr += str;
      }

      let outputWorkers = document.querySelector('#workers p');
      outputWorkers.textContent = workersInfoStr;

   }
}