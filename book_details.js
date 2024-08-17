console.log("book_details");

function book_number_valid(){
    let book_num=document.form.book_num.value;
    if(book_num==""){
        alert(" Enter book number first");
    }
}

function book_name_valid(){
    let book_name=document.form.book_name.value;
    if(book_name==""){
        alert(" Enter book name first");
    }
}
