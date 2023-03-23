// import { setTimeout } from "timers";
import { DataBase } from "./firebase.js";


var database = new DataBase();


// let asignatures = new Promise((resolve, reject) => {
database.getAsignatures("ICCI", "Malla-2019", "Semestre-7", setTable);

function setTable() {

    let table = document.querySelector("#table");

    let innerHTML = `
            <tr>
                <th>Asignatura</th>
                <th>Id</th>
                <th>Minutos</th>
                <th>Profesor</th>
                <th>Sala</th>
                <th>Grupo</th>
            </tr>`;

    for (let key in database.data) {
        // table.appendChild("");
        let asignature = database.data[key];
        let groups = "";
        for (let key in asignature["Grupos"]) {
            groups += `${key} `;
        }
        // groups.trim();
        // console.log(asignature["Grupos"]);
        innerHTML += `
            <tr>
                <td>${key}</td>
                <td>${asignature["Id"]}</td>
                <td>${asignature["Minutos"]}</td>
                <td>${asignature["Profesor"]}</td>
                <td>${asignature["Sala"]}</td>
                <td>${groups}</td>
            </tr>`;
        // console.log(database.data[key]);
    }

    table.innerHTML = innerHTML;

    // console.log(database.data);

}
    // console.log(database.data);
    // while (database == undefined) {

    // }
    // console.log(data == undefined);
    // while (data == undefined) {

    // }

    // setTimeout(() => { resolve(database.data) }, 1000);


// });
// asignatures.then((value) => { console.log(value); });
// console.log(asignatures);
// console.log('here');
// async function setData() {
    // console.log(asignatures);
    // asignatures.then((value) => { console.log(value) });
    // return asignatures;
    // let asignatures = database.getAsignatures("ICCI", "Malla-2019", "Semestre-7");
// }
// setData();
// asignatures.then((value) => { console.log(value); });
// console.log(setData());