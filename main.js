name_of_the_student_array =[];   
function submit(){
    var  display_student_array=[];
    for(var j = 1; j<=6; j++){
        var name_of_the_student = document.getElementById("i_"+j).value;
        console.log(name_of_the_student);
        name_of_the_student_array.push(name_of_the_student);
        
    }
    console.log(name_of_the_student_array);
    var add_input_values=name_of_the_student_array.join(" ");
console.log(add_input_values);
document.getElementById("display").innerHTML=add_input_values;
}