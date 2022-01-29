function generateReport() {
    let checkBoxElements = document.querySelectorAll('thead tr th input');
    let output = [];

    for (i = 0; i < checkBoxElements.length; i++) {

        if (checkBoxElements[i].checked) {
            let info = document.querySelectorAll('thead tr th')[i].textContent
            .toLowerCase().trim();
            let tBodyElements = document.querySelectorAll('tbody tr');
            
            for(k = 0; k < tBodyElements.length; k++) {
                if(output.length !== tBodyElements.length) {
                    let infoValue = tBodyElements[k].children[i].textContent;
                    let obj = {
                        [info]: infoValue,
                    };
                    output.push(obj);

                } else {
                    let info = document.querySelectorAll('thead tr th')[i].textContent
                    .toLowerCase().trim();
                    let infoValue = tBodyElements[k].children[i].textContent;
                    output[k][info]=infoValue;
                }
            }
        }
    }
    
    document.getElementById('output').value = JSON.stringify(output, null, 2);
}