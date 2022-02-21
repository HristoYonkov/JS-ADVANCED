function solve() {
    let budget = document.getElementById('sum');

    let hireWorkerBtn = document.getElementById('add-worker').addEventListener('click', function(e) {
        e.preventDefault();
        let firstNameEl = document.getElementById('fname');
        let lastNameEl = document.getElementById('lname');
        let emailEl = document.getElementById('email');
        let dateOfBirthEl = document.getElementById('birth');
        let positionEl = document.getElementById('position');
        let salaryEl = document.getElementById('salary');

        if(firstNameEl.value !== '' && lastNameEl.value !== '' && emailEl.value !== ''
        && dateOfBirthEl.value !== '' && positionEl.value !== '' && salaryEl.value !== '') {
            let trEl = document.createElement('tr');

            let  tdName = document.createElement('td');
            tdName.textContent = firstNameEl.value;
            trEl.appendChild(tdName);
            
            let  tdLastName = document.createElement('td');
            tdLastName.textContent = lastNameEl.value;
            trEl.appendChild(tdLastName);
            
            let  tdEmail = document.createElement('td');
            tdEmail.textContent = emailEl.value;
            trEl.appendChild(tdEmail);
            
            let  tdDate = document.createElement('td');
            tdDate.textContent = dateOfBirthEl.value;
            trEl.appendChild(tdDate);
            
            let  tdPosition = document.createElement('td');
            tdPosition.textContent = positionEl.value;
            trEl.appendChild(tdPosition);
            
            let  tdSalary = document.createElement('td');
            tdSalary.textContent = salaryEl.value;
            trEl.appendChild(tdSalary);

            let tdButtons = document.createElement('td');

            let firedBtn = document.createElement('button');
            firedBtn.textContent = 'Fired';
            firedBtn.setAttribute('class','fired');
            firedBtn.addEventListener('click', function(e){
                let salary = e.currentTarget.parentElement.parentElement.getElementsByTagName('td')[5].textContent
                
                let numberSal = Number(salary);
                let currentBdg = Number(budget.textContent);
                currentBdg -= numberSal;
                budget.textContent = currentBdg.toFixed(2);
                let tR = e.currentTarget.parentElement.parentElement;
                tR.remove();
            })
            
            
            let editBtn = document.createElement('button')
            editBtn.textContent = 'Edit';
            editBtn.setAttribute('class','edit');
            editBtn.addEventListener('click', function(e){
                let name = e.currentTarget.parentElement.parentElement.getElementsByTagName('td')[0].textContent
                let lastname = e.currentTarget.parentElement.parentElement.getElementsByTagName('td')[1].textContent
                let email = e.currentTarget.parentElement.parentElement.getElementsByTagName('td')[2].textContent
                let date = e.currentTarget.parentElement.parentElement.getElementsByTagName('td')[3].textContent
                let position = e.currentTarget.parentElement.parentElement.getElementsByTagName('td')[4].textContent
                let salary = e.currentTarget.parentElement.parentElement.getElementsByTagName('td')[5].textContent
                
                let numberSal = Number(salary);
                let currentBdg = Number(budget.textContent);
                currentBdg -= numberSal;
                budget.textContent = currentBdg.toFixed(2);

                let firstNameEl = document.getElementById('fname').value = name;
                let lastNameEl = document.getElementById('lname').value = lastname;
                let emailEl = document.getElementById('email').value = email;
                let dateOfBirthEl = document.getElementById('birth').value = date;
                let positionEl = document.getElementById('position').value = position;
                let salaryEl = document.getElementById('salary').value = salary;

                let tR = e.currentTarget.parentElement.parentElement;
                tR.remove();

            });
            tdButtons.appendChild(firedBtn)
            tdButtons.appendChild(editBtn)
            
            trEl.appendChild(tdButtons)
            document.getElementById('tbody').appendChild(trEl);
            
            if(budget.textContent === '0.00') {
                budget.textContent = Number(salaryEl.value).toFixed(2);
            } else {
                let currentBudg = Number(budget.textContent);
                currentBudg += Number(salaryEl.value)
                budget.textContent = currentBudg.toFixed(2);
            }
            
            firstNameEl.value = '';
            lastNameEl.value ='';
            emailEl.value = '';
            dateOfBirthEl.value = ''
            positionEl.value = ''
            salaryEl.value ='';
        }

    });

}

solve();