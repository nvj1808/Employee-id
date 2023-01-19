function addemployee(){
    // access values of employee table
empname=ename.value
empid=eid.value
desig=des.value
sala=sal.value
experi=expe.value


if(empid in localStorage)
{
    alert("employee already present")
}
else{

employee={"employee_name":empname,"empid":empid,"des":desig,"sal":sala,"expe":experi}


localStorage.setItem(employee.empid,JSON.stringify(employee))

alert('employee added successfully')

window.location="homepage.html"

}
}
function displaydata(){
    eid=s1.value
    if(eid in localStorage){
   emp=JSON.parse(localStorage.getItem(eid))
   console.log(emp);
   result.innerHTML=`
   <p>employee name :<strong class="text-info"> ${emp.employee_name}<strong></p>
   <p>employee name :<strong class="text-info"> ${emp.empid}<strong></p>
   <p>employee name :<strong class="text-info"> ${emp.des}<strong></p>
   <p>employee name :<strong class="text-info"> ${emp.sal}<strong></p>
   <p>employee name :<strong class="text-info"> ${emp.expe}<strong></p>
   `
}
else{
alert("employee not present in database")
result.innerHTML=""
}
}