
const searchname= document.getElementById("btnsearch");
searchname.addEventListener("click", () =>{
     
     const namesearch=document.getElementById("searchtitle").value;


     fetch('http://www.omdbapi.com/?apikey=c8905c71' +'&s='+namesearch)

     .then(resp => resp.json() )
     .then(data => {
          console.log(data);
          let showmovie=document.getElementById("root");

          const listmovie=data.Search.map (element => {(
             console.log(element.Title)); 

             return   `<div class="style-card">
                           <img src="${element.Poster}">  
                           <h1> Titulo: ${element.Title}</h1>
                           <h3> Year: ${element.Year}</h3>
                        </div> ` 
            }).join() ;
          
            showmovie.innerHTML=listmovie;


})

});

