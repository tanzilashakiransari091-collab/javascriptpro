function submitData(){

    var userName = document.getElementById('name').value;
    var fatherName = document.getElementById('fatherName').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('no').value;

    document.write('Name: ' + userName + '<br>');
    document.write('Father Name: ' + fatherName + '<br>');
    document.write('Email: ' + email + '<br>');
    document.write('Number: ' + number + '<br>');
}

function toggleText(){

    var remaining = document.getElementById("remaining");
    var link = document.getElementById("link");

    if(remaining.style.display === "none" || remaining.style.display === ""){
        remaining.style.display = "inline";
        link.textContent = "See less";
    }
    else{
        remaining.style.display = "none";
        link.textContent = "See more";
    }
}