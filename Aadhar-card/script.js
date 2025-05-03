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
    let newAdharNum = `${adharArr[0]}${adharArr[1]}${adharArr[2]}${adharArr[3]} ${adharArr[4]}${adharArr[5]}${adharArr[6]}${adharArr[7]} ${adharArr[8]}${adharArr[9]}${adharArr[10]}${adharArr[11]}`;
    
    

    // Validate the input values
    // if (firstNameValue === "" || lastNameValue === "" || fatherNameInputValue === "" || dobInputValue === "" || genderInputValue === "" || adharNumInputValue === "") {
    //     alert("Please fill in all fields.");
    //     return;
    // }
    // if (adharNumberValue.length !== 12) {
    //     alert("Adhar number must be 12 digits long.");
    //     return;
    // }

    //Card generation logic
    const profileImage = document.querySelector("#profile_img");
    const name = document.querySelector("#name");
    const fatherName = document.querySelector("#fatherName");
    const dob = document.querySelector("#dob");
    const adharNumber = document.querySelector("#adharNum");
    const gender = document.querySelector("#gender");

    name.innerText = `${firstNameValue} ${lastNameValue}`;
    fatherName.innerText = `${fatherNameInputValue}`;
    dob.innerText = `${dobInputValue}`;
    adharNumber.innerText = `${newAdharNum}`;
    gender.innerText = `${genderInputValue}`;
    profileImage.src = URL.createObjectURL(imageInput.files[0]);

})

