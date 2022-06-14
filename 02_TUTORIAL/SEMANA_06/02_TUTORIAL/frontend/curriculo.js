    const palavra = event =>{
        const para = document.createElement('p')
        para.innerText = "Funciona!!"
        document.querySelector('#container').appendChild(para);
    }

    function getRobocore () {
        let url = "/robocore";
     
        let xhttp = new XMLHttpRequest(); 
        
        xhttp.onreadystatechange = function(){
           
           let data = JSON.parse(xhttp.responseText); 
           console.log(data[0]);
           
           $("#robocore")[0].innerHTML = ''; 
           
           data.forEach(robocore => {    
              
              
              $("#robocore")[0].innerHTML += `
              <p> Data: ${robocore.data} - Competição: ${robocore.comp} - Colocação: ${robocore.lugar} - Id: ${robocore.id}
                    </p>
                    `  
                  });
               }
               
               
                  xhttp.open("GET", url, false) ; 
               
                  xhttp.send(); 
            }

            function postRobocore(){
                const compInput = document.getElementById("comp").value
                const lugarInput = parseInt(document.getElementById("lugar").value)
                const dataInput = parseInt(document.getElementById("data").value)

                url = "/robocoreinsert"

                $.ajax({
                    type: "POST",
                    url: url,
                    contextType: "aplication/json; charset=utf-8",
                    dataType: "json",
                    data: {
                            comp: compInput,
                            lugar: lugarInput,
                            data: dataInput,
                        }
                });
                getEmpPage();
            }

            function deleteRobocore(){
                const idInput = parseInt(document.getElementById("id").value);
                url = "/robocoredelete";
                $.ajax({
                    type: "DELETE",
                    url: url,
                    contextType: "aplication/json; charset=utf-8",
                    dataType: "json",
                    data: {
                            id: idInput,
                        }
                });
            }

            
            function updateRobocore(){
                const idInput = parseInt(document.getElementById("id2").value);
                const compInput = document.getElementById("comp2").value;
                const lugarInput = parseInt(document.getElementById("lugar2").value);
                const dataInput = parseInt(document.getElementById("data2").value);
                url = "/robocoreupdate";
                $.ajax({
                    type: "PATCH",
                    url: url,
                    contextType: "aplication/json; charset=utf-8",
                    dataType: "json",
                    data: {
                            id: idInput,
                            comp: compInput,
                            lugar: lugarInput,
                            data: dataInput,
                        }
                });
            }



