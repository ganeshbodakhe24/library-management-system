console.log("this is the student from");
let flag = 0;

function valid_form() {


   //to check valid  first last and middle name;
   let first_name = document.form.first_name.value;
   let last_name = document.form.last_name.value;
   let middle_name = document.form.middle_name.value;
   let date_of_birth=document.form.date_of_birth.value;

   if (first_name == "" || last_name == "" || middle_name == "" ||date_of_birth=="") {
      alert("Enter Proper Personal details");
      flag = 1;
      
   }

   //to check valid mobile number
   let student_phone_num = document.form.student_phone_num.value;

   if (student_phone_num.length < 10 || student_phone_num.length > 10 || student_phone_num == "") {
      alert("Phone number should be 10 digits");
      flag = 1;
     
   }

   //enter valid email
   let email = document.form.email.value;

   let position_of_at = email.indexOf("@");
   let position_of_dot = email.indexOf(".");
   console.log(position_of_dot);

   if (position_of_at == -1 || position_of_dot == 1 || email == "" ) {
      alert("Enter valid email");
      flag = 1;
     
   }

   //valid address details 
   let district = document.form.district.value;
    let village = document.form.village1.value;
   let city = document.form.city.value;
   let pincode = document.form.pincode.value;

        if (district == "" || village == "" || city == "" || pincode == "" || pincode.length < 6 || pincode.length > 6) {
         alert("Please enter proper address details");
         flag = 1;
      }

      //valid student details
   let student_roll_number=document.form.student_roll_number.value;
   let student_branch=document.form.student_branch.value;
   let admission_year=document.form.admission_year.value;
   
   if(student_roll_number=""||student_roll_number.length<8||student_roll_number.length>8  ||student_branch==""||admission_year=="" || admission_year<2015 ){
      alert("Please entter proper education details");
      flag=1;
   }
   

}
