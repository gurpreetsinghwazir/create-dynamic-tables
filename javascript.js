document.addEventListener("DOMContentLoaded", function() {
    // Your JavaScript code here

const newDiv = document.createElement("div");
newDiv.className = "firstable";
document.body.appendChild(newDiv)

{/* <table>
<thead>
<tr> </tr>
<thead>
        <th> 
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        
        </th>
        <th></th>
        <th></th>
        <th></th>
        <td>
            <tr></tr>
        </td>

    </table> */}

let tableJS = document.createElement("table");
tableJS.className = "tableTop";

 // let tableHead = document.createElement("thead"); // old way of create table head

const header = tableJS.createTHead();
c 

let arr = ["column1","column2","column3","column4","column5"]

arr.forEach((headtext, index) => {
    const cell = row.insertCell(index);
    cell.innerHTML = headtext;
    newDiv.append(tableJS);

})


function addRow(datarray){
    let tableBody = (tableJS.getElementsByTagName("tbody")[0] || tableJS.createTBody())

    let newRow = tableBody.insertRow();
    
    datarray.forEach((headtext, index) => {
        const cell = newRow.insertCell(index);
        cell.innerHTML = headtext;


    }) 

}

addRow(["Data1","Data2,","Data3,","Data4,","Data5,"])
addRow(["Value1","Value2","Value3","Value4","Value5"])
addRow(["info1","info2","info3","info4","info5"])


























});