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
              <p> ${robocore.data} - ${robocore.comp} - ${robocore.lugar}
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

                // urla = "/robocoreinsert"

                $.ajax({
                    type: "POST",
                    url: "http://localhost:3061/robocoreinsert",
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




