/*
* File: app.js
* Author: Vámosi László Ádám
* Copyright: 2025, Vámosi László Ádám
* Group: Szoft I-N
* Date: 2025-05-29
* GitHub: https://github.com/vamosilaszloadam/
* Licenc: MIT
*/

const tbody=document.querySelector("#tbody");
const url="http://localhost:8000/api/shipments";
var shipmentList=[];

function getShipments(){
    fetch(url)
    .then(response=>response.json())
    .then(result=>{
        console.log(result.data);
        shipmentList=result.data;
        renderTbody();
    });
};

function renderTbody(){
    let rows="";
    for(let shipment of shipmentList){
        rows+=`
            <tr class="miniRow">
                <td class="mini miniId">${shipment.id}</td>
                <td class="mini miniShipmentId">${shipment.shipmentId}</td>
                <td class="mini miniSentDate">${shipment.sentDate}</td>
                <td class="mini miniEndDate">${shipment.endDate}</td>
                <td class="mini miniAddressee">${shipment.addressee}</td>
                <td class="mini miniTargetCity">${shipment.targetCity}</td>
                <td class="mini miniCreatedAt">${shipment.createdAt}</td>
                <td class="mini miniUpdatedAt">${shipment.updatedAt}</td>
            </tr>
        `;
        console.log(shipment);
    }
    tbody.innerHTML=rows;
}

getShipments();