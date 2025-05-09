const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const fatherNameInput = document.getElementById("father_name");
const dobInput = document.getElementById("dob");
const adharNumInput = document.getElementById("adhar_num_input");
const genderInput = document.getElementById("gender_input");
const imageInput = document.getElementById("image_input");
const submitButton = document.getElementById("submit_btn");


submitButton.addEventListener("click", () =>{
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const fatherNameInputValue = fatherNameInput.value;
    const dobInputValue = dobInput.value;
    const genderInputValue = genderInput.value;
    const adharNumInputValue = adharNumInput.value;


    const adharArr = adharNumInputValue;
    const adharslice1 = adharArr.slice(0, 4);
    const adharslice2 = adharArr.slice(4, 8);
    const adharslice3 = adharArr.slice(8, 12);
    const space = " ";
    const newAdharNum = adharslice1 + space + adharslice2 + space + adharslice3;

    const profileImage = document.querySelector("#profile_img");
    
    //Validation logic
    if (firstNameValue !="" && lastNameValue != "" && fatherNameInputValue != "" && dobInputValue != "" && genderInputValue != "" && adharNumInputValue != "" && imageInput.files.length > 0) {
     
        //Card generation logic
     const name = document.querySelector("#name");
     const fatherName = document.querySelector("#fatherName");
     const dob = document.querySelector("#dob");
     const adharNumber = document.querySelector("#adharNum");
     const gender = document.getElementById("gender");
 
     if (adharNumInputValue.length != 12){
        alert("Adhar number should be 12 digits long");
        
        return;
     }

    name.innerText = `${firstNameValue} ${lastNameValue}`;
    fatherName.innerText = `${fatherNameInputValue}`;
    dob.innerText = `${dobInputValue}`;
    adharNumber.innerText = `${newAdharNum}`;
    gender.innerText = genderInput.options[genderInput.selectedIndex].text;
    profileImage.src = URL.createObjectURL(imageInput.files[0]);
    }else{
        alert("Please fill all the fields");
        return;
    }

})   

