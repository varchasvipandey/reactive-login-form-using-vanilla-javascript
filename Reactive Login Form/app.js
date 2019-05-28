function animatedForm(){
    const arrows = document.querySelectorAll(".fa-arrow-down");

    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            //Check form validation
            if(input.type === "text" && validateUser(input)){
                nextFormField(parent, nextForm);
            }else if(input.type === "email" && validateEmail(input)){
                nextFormField(parent, nextForm);
            }else if(input.type === "password" && validateUser(input)){
                nextFormField(parent, nextForm);    //we used validateUser because its all about checking the number of tcharacters in the field and we already have a function to perform that check
            }else{
                parent.style.animation = "shake 0.5s ease";
            }
            //remove animation
            parent.addEventListener("animationend", () => {
                parent.style.animation = "";
            });
        });
    });
}

function validateUser(user){
    if(user.value.length < 6){
        error("rgb(189,87,87)");
    }else{
        error("rgb(87,189,130)");
        return true;
    }
}

function validateEmail(email){
    //following is a RegEx code for email validation
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //This is the RegEx code which is gonna check if it has all the stuff that a email needs
    //below used test function is gonna test the RegEx validation of the input email value
    if(validation.test(email.value)){
        error("rgb(87,189,130)");
        return true;
    }else{
        error("rgb(189,87,87)");
    }
}

function nextFormField(parent, nextForm){
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

function error(color){
    document.body.style.backgroundColor = color;
}

animatedForm();