let button = document.querySelector('input[type="submit"]');
button.addEventListener('click', loadNames);


function loadNames(e) {
    e.preventDefault();
    // grab UI input
    let country = document.querySelector('#country').value;
    let gender = document.querySelector('#genre').value;
    let number = document.querySelector('#quantity').value;
    let div = document.querySelector('#result');
    div.innerHTML = '';
    // get api response
    let xhr = new XMLHttpRequest();
    
    let url = 'http://uinames.com/api/?';
    if(country !== ''){
        url += `region=${country}&`;
    }
    if(gender !== ''){
        url += `gender=${gender}&`;
    }
    if(number !== ''){
        url += `amount=${number}&`;
    }
    xhr.open('GET', url , true);

    xhr.onload = function () {
        let response = JSON.parse(xhr.responseText);
        let output = '';
        response.forEach(function(current){
            output += `<p>${current.name} ${current.surname}</p>`;
        });
        div.innerHTML = output;

    }

    xhr.send();
}