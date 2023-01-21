let eliminados=[];
let tbody=document.getElementById("tbody");
const insertar=()=>$.get("https://jsonplaceholder.typicode.com/photos", (e) => {
    console.log(eliminados);
e.forEach(element => {
    if(eliminados.indexOf(element.id)<0){
     let tr=document.createElement("tr");
     let td1=document.createElement("td");
     td1.className="td";
     let td2=document.createElement("td");
     td2.className="td";
     let td3=document.createElement("td");
     td3.className="td";
     let td4=document.createElement("td");
    let img=document.createElement("img");
    img.src=element.thumbnailUrl;
    /************************ */
    //<button type="button" class="btn btn-danger">Danger</button>
     let boton=document.createElement("button");
     boton.className="btn btn-danger";
     boton.innerHTML="Eliminar";

     boton.addEventListener("click",()=>{
        tbody.innerHTML="";
       eliminados.push(element.id);
       insertar();
     });

     let td5=document.createElement("td");
     td5.className="td";
     td5.appendChild(boton);

     td1.innerHTML=element.albumId;
     td2.innerHTML=element.id;
     td3.innerHTML=element.title;
     td4.appendChild(img);
     tr.appendChild(td1);
     tr.appendChild(td2);
     tr.appendChild(td3);
     tr.appendChild(td4);
     tr.appendChild(td5);
     tbody.appendChild(tr);
    }
     
});

});
insertar();

