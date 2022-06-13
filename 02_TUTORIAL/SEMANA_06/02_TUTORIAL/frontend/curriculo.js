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