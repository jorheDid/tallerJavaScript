let contenido = []


function agregarNuevo() {
   let Codigo = document.getElementById('code').value;
   let Nombre = document.getElementById('nombre').value;
   let des = document.getElementById('descripcion').value;
   let fecha = document.getElementById('fecha').value;
   let tip = document.getElementById('tipo').value;
 
   contenido.push({Codigo, Nombre, des, fecha, tip})
   console.log(contenido);
   hacerTabla();
}

function hacerTabla() {

   tabla = `<thead>
   <tr>
   <th>Código proyecto</th>
   <th>Nombre proyecto</th>
   <th>Descripción</th>
   <th>Fecha inicio</th>
   <th>Tipo</th></tr>
   </thead>
   <tbody>`
      contenido.forEach(ele=>{
         tabla += `<tr>
         <td>${ele.Codigo}</td>
         <td>${ele.Nombre}</td>
         <td>${ele.des}</td>
         <td>${ele.fecha}</td>
         <td>${ele.tip}</td></tr>`
      })
      tabla += `</tbody>`

document.getElementById("contenido").innerHTML = tabla;
   
}
