function HashStudentNumber(studentnum,tabelsize){
    //simple hash function modulas
    return studentnum % tabelsize;

}
//store studentnum in array
let StudentsNumbers =[1234567,9876342,9876541];
let tabelsize =StudentsNumbers.length;
let hashtabel=new Array(tabelsize);
for(let i=0;i<StudentsNumbers.length;i++){
    //call hash function
    let index=HashStudentNumber(StudentsNumbers[i],tabelsize);
    //to store number in index after hashing the number
    hashtabel[index]=StudentsNumbers[i];
}
//test
let indexAccsess=HashStudentNumber(9876541,tabelsize);
console.log("accsess student number",indexAccsess,hashtabel[indexAccsess]);