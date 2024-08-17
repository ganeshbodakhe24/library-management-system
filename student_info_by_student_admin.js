console.log("student info by studnet admine");
let flag=0;
function valid_details(){
    console.log("hii");
    let student_roll_num=document.form.student_roll_num.value;
    let password=document.form.password.value;
    let reenter_password=document.form.reenter_password.value;
    if(student_roll_num==""|| password==""||reenter_password==""){
        alert("Enter valid details");
        flag=1;
    }
    if(password!=reenter_password){
        alert("Recheck the password ");
        flag=1;
    }
    if(flag==0){
        alert("Details submited")
    }
}