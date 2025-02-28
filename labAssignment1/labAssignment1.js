const MOUNTAINS = [
 {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
 {name: "Everest", height: 8848, place: "Nepal"},
 {name: "Mount Fuji", height: 3776, place: "Japan"},
 {name: "Vaalserberg", height: 323, place: "Netherlands"},
 {name: "Denali", height: 6168, place: "United States"},
 {name: "Popocatepetl", height: 5465, place: "Mexico"},
 {name: "Mont Blanc", height: 4808, place: "Italy/France"}
 ];
 const table=document.createElement('table');
 table.style.border="2px solid black";
 const heading=["Name","Height","Place"];
 let headRow=document.createElement('tr');
 heading.map((value)=>{
  let newEle=document.createElement('th');
  newEle.innerHTML = `${value}`;
  headRow.appendChild(newEle);
 });
 table.appendChild(headRow);
 MOUNTAINS.map(({name,height,place}) => {
   let row = document.createElement('tr');
   let data = [];
   for (let i = 0; i < 3; i++) {
     data[i] = document.createElement('td');data[i].style.border = "2px solid black";data[i].style.width="100px";data[i].style.height="40px";data[i].style.textAlign="center"}
   data[0].innerHTML = `${name}`;
   data[1].innerHTML = `${height}`;
   data[2].innerHTML = `${place}`;
   data[1].style.textAlign="right";
   for (let i = 0; i < 3; i++) row.appendChild(data[i]);
   table.appendChild(row);
 });
const div = document.getElementById('mountains');
div.style.height=window.screen.height
div.appendChild(table);
document.body.style.display="flex";
document.body.style.justifyContent="center";
document.body.style.alignItems="center"
document.body.style.marginTop="100px"