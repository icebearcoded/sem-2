var math = parseFloat(prompt("Enter your Mathematics marks: "));
var cs = parseFloat(prompt("Enter your Computer Science marks: "));
var physics = parseFloat(prompt("Enter your Physics marks: "));
var urdu = parseFloat(prompt("Enter your Urdu marks: "));
var eng = parseFloat(prompt("Enter your English marks: "));

var obtained = math + cs + physics + urdu + eng;
var total = 500;
var percentage = (obtained * 100) / total;

if (math && cs && physics && urdu && eng) {

    if (math <= 100 && cs <= 100 && physics <= 100 && urdu <= 100 && eng <= 100) {
        if (percentage >= 80 && percentage <= 100) {
            document.getElementById('heading').innerHTML+=`<h1>Your percentage is: ${percentage}%<h1>`;
            document.getElementById('heading').innerHTML += `<h1>Your Grade is A1<h1>`   
            document.getElementById('heading2').innerHTML+=`<h2>Your Mathematics marks are: ${math}<h2>`;
            document.getElementById('heading2').innerHTML+=`<h2>Your Computer Science marks are: ${cs}<h2>`;
            document.getElementById('heading2').innerHTML+=`<h2>Your Physics marks are: ${physics}<h2>`;
            document.getElementById('heading2').innerHTML+=`<h2>Your Urdu marks are: ${urdu}<h2>`;
            document.getElementById('heading2').innerHTML+=`<h2>Your English marks are: ${eng}<h2>`;
            document.getElementById('heading2').innerHTML+=`<h2>Your Total marks are: ${obtained}/500<h2>`;
            

        } else if (percentage >= 70 && percentage <= 79.9) {
            document.getElementById('heading').innerHTML+=`<h1>Your percentage is: ${percentage}%<h1>`;
            document.getElementById('heading').innerHTML += `<h1>Your Grade is A<h1>`        
            document.getElementById('heading2').innerHTML+=`<h2>Your Mathematics marks are: ${math}<h2>`;
            document.getElementById('heading2').innerHTML+=`<h2>Your Computer Science marks are: ${cs}<h2>`;
            document.getElementById('heading2').innerHTML+=`<h2>Your Physics marks are: ${physics}<h2>`;
            document.getElementById('heading2').innerHTML+=`<h2>Your Urdu marks are: ${urdu}<h2>`;
            document.getElementById('heading2').innerHTML+=`<h2>Your English marks are: ${eng}<h2>`;
            document.getElementById('heading2').innerHTML+=`<h2>Your Total marks are: ${obtained}/500<h2>`;
        } else if (percentage >= 60 && percentage <= 69.9) {
            document.getElementById('heading').innerHTML+=`<h1>Your percentage is: ${percentage}%<h1>`;
            document.getElementById('heading').innerHTML += `<h1>Your Grade is B<h1>`
            document.getElementById('heading2').innerHTML+=`<h2>Your Mathematics marks are: ${math}<h2>`;
            document.getElementById('heading2').innerHTML+=`<h2>Your Computer Science marks are: ${cs}<h2>`;
            document.getElementById('heading2').innerHTML+=`<h2>Your Physics marks are: ${physics}<h2>`;
            document.getElementById('heading2').innerHTML+=`<h2>Your Urdu marks are: ${urdu}<h2>`;
            document.getElementById('heading2').innerHTML+=`<h2>Your English marks are: ${eng}<h2>`;
            document.getElementById('heading2').innerHTML+=`<h2>Your Total marks are: ${obtained}/500<h2>`;
        } else if (percentage >= 50 && percentage <= 59.9) {
            document.getElementById('heading').innerHTML+=`<h1>Your percentage is: ${percentage}%<h1>`;
            document.getElementById('heading').innerHTML += `<h1>Your Grade is C<h1>`
            document.getElementById('heading2').innerHTML+=`<h2>Your Mathematics marks are: ${math}<h2>`;
            document.getElementById('heading2').innerHTML+=`<h2>Your Computer Science marks are: ${cs}<h2>`;
            document.getElementById('heading2').innerHTML+=`<h2>Your Physics marks are: ${physics}<h2>`;
            document.getElementById('heading2').innerHTML+=`<h2>Your Urdu marks are: ${urdu}<h2>`;
            document.getElementById('heading2').innerHTML+=`<h2>Your English marks are: ${eng}<h2>`;
            document.getElementById('heading2').innerHTML+=`<h2>Your Total marks are: ${obtained}/500<h2>`;
        } else if (percentage >= 40 && percentage <= 49.9) {
            document.getElementById('heading').innerHTML+=`<h1>Your percentage is: ${percentage}%<h1>`;
            document.getElementById('heading').innerHTML += `<h1>Your Grade is D<h1>`
            document.getElementById('heading2').innerHTML+=`<h2>Your Mathematics marks are: ${math}<h2>`;
            document.getElementById('heading2').innerHTML+=`<h2>Your Computer Science marks are: ${cs}<h2>`;
            document.getElementById('heading2').innerHTML+=`<h2>Your Physics marks are: ${physics}<h2>`;
            document.getElementById('heading2').innerHTML+=`<h2>Your Urdu marks are: ${urdu}<h2>`;
            document.getElementById('heading2').innerHTML+=`<h2>Your English marks are: ${eng}<h2>`;
            document.getElementById('heading2').innerHTML+=`<h2>Your Total marks are: ${obtained}/500<h2>`;
        } else {
            document.getElementById('heading').innerHTML += `<h1>You have failed.<h1>`
        }

    } else {
        alert("Please enter valid marks. Try again");
    }
} else {
    alert("Please don't leave any field null");
}