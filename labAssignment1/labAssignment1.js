const MOUNTAINS = [
 {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
 {name: "Everest", height: 8848, place: "Nepal"},
 {name: "Mount Fuji", height: 3776, place: "Japan"},
 {name: "Vaalserberg", height: 323, place: "Netherlands"},
 {name: "Denali", height: 6168, place: "United States"},
 {name: "Popocatepetl", height: 5465, place: "Mexico"},
 {name: "Mont Blanc", height: 4808, place: "Italy/France"}
 ];
 document.addEventListener('DOMContentLoaded',()=>{
  const div=document.getElementById('mountains');
    div.innerHTML=MOUNTAINS.map((object)=>{
      return `
        <tr>
    <td>${object.name}</td>
    <td>${object.place}</td>
    <td>${object.height}</td>
        </tr>
      `
    }).join(``)
 })