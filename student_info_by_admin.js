console.log("studentv info by admin");
let flag=0;
function valid_student_roll_number(){
    console.log("hi");
    let student_roll_num=document.form.student_roll_num.value;
    if(student_roll_num==""||student_roll_num.length>8|| student_roll_num.length<8){
        alert("Enter valid roll number")
        flag=1;
    }
    if(flag==0){
        alert(" Sending request");
    }
}