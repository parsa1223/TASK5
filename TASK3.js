let result =[];
function convertDate(ex){
let d =new Date(ex);
result.push(d.getMonth()+1);
result.push(d.getDate());
result.push(d.getFullYear())
return result;
}