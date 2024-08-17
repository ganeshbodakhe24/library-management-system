console.log("index page");
function valid_admin_login(){
    
    let admin_id=document.form.admin_id.value;
  if(admin_id==""){
    alert("Admin Id is required");
  }
  let admin_password=document.form.admin_password.value;
  if(admin_password==""){
    alert("Admin password is required");
  }
}
function valid_student_login(){
   
    let admin_id=document.form.admin_id.value;
  if(admin_id==""){
    alert("Student roll numbder is   required");
  }
  let admin_password=document.form.admin_password.value;
  if(admin_password==""){
    alert("Student password  is required");
  }
}

