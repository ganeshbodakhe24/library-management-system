console.log("reutrn book");

function valid_details(){
    let student_roll_num=document.form.student_roll_num.value;
    if(student_roll_num==""){
        alert("Enter student  roll number");
    }
    let book_num=document.form.book_num.value;
    if(book_num==""){
        alert("Enter book number");
    }
    let book_sub_num=document.form.book_sub_num.value;
    if(book_sub_num==""){
        alert("Enter book sub number");
    }
}