console.log("register book");
let flag=0;
function valid_form1(){
    let book_name=document.form1.book_name.value;
    let book_num=document.form1.book_num.value;
   let reendered_book_number=document.form1.reendered_book_number.value;
   let publisher_name=document.form1.publisher_name.value;
   let publisher_addr=document.form1.publisher_addr.value;
   let book_price=document.form1.book_price.value;
   let subject_of_book=document.form1.subject_of_book.value;
    let publication_date=document.form1.publication_date.value;
   if(publication_date==""||book_name==""||book_num==""|| reendered_book_number==""||publisher_addr==""||publisher_name==""||book_price=="" ||subject_of_book==""){
        alert("Enter valid book details");
        flag=1
   }
   if(book_num!=reendered_book_number){
    alert("Recheck book number");
   }
}

function valid_form2(){
    let book_number2=document.form2.book_number2.value;
    let reendered_Book_Number2=document.form2.reendered_Book_Number2.value;
    let book_copy_number=document.form2.book_copy_number.value;
    let book_sub_number=document.form2.book_sub_number.value;
    console.log("hi");
    if(book_number2==""|| reendered_Book_Number2==""||book_copy_number==""||book_sub_number==""){
        alert("Enter valid book details");
    }
    if(book_number2!=reendered_Book_Number2){
        alert("Recheck book number");
    }
}