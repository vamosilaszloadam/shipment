const tbody=document.querySelector("#tbody");
const url="http://localhost:8000/api/shipments";
var shipmentList=[];

function getShipments(){
    fetch(url)
    .then(response=>response.json())
    .then(result=>{
        console.log(result.data);
        shipmentList=result.data;
    });
};

getShipments();