// Variables 
let userName = document.getElementById('name');
let userPhone = document.getElementById('phone');
let loginBtn = document.getElementById('login');
let userDeatils = document.createElement('section');
userDeatils.setAttribute('class', 'w-80 text-white rounded text-center')
let val = localStorage.getItem('Name');
let userNavigation = document.querySelector('.hiUser');

if(val == null) {
    // val = 'user';
}
else {
    val = localStorage.getItem('Name');
    userCreated();
}
// Function work when a user is created


// Adding click functionality when the user clicks on loginBtn
loginBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let userValue = userName.value;
    localStorage.setItem('Name', userValue);
    userCreated();
    location.reload();
})


// Used to create a HTML element when the user is created
function userCreated() {
    let userHtml = `Hi, ${val}, Welcome to Social Store. Here we are for you to provide best services.`
    userDeatils.innerHTML = userHtml
    userNavigation.appendChild(userDeatils)
}


