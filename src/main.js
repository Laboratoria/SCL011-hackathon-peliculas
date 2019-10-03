//Muestra las peliculas  mas populares del 2019
fetch('https://api.themoviedb.org/3/discover/movie?api_key=71949b65aff64acdb6a0fce55fb7fb1d&sort_by=popularity.desc&page=1&primary_release_date.gte=2019-01-01')

.then(resp => resp.json() )
.then(data => {
    // console.log(data);
      
     let showmovie=document.getElementById("root");

      const listmovie2=data.results.map(element =>{

            return   `<div class="style-card">
                          <img src= "${'https://image.tmdb.org/t/p/w500'+element.poster_path}">  
                          <h1> ${element.title}</h1>
                          <h3>Year: ${element.release_date}</h3>
                          <h4> Reseña: ${element.overview}</h4>
                       </div>` 
           }).join('');
         
           showmovie.innerHTML=listmovie2;
      })

//Boton buscar peliculas por nombre
const searchname= document.getElementById("btnsearch");
searchname.addEventListener("click", () =>{
   
     //Valor del input con nombre de la pelicula
     const namesearch=document.getElementById("searchtitle").value;

      //Traer los datos de la Api
     fetch('http://www.omdbapi.com/?apikey=c8905c71' +'&s='+namesearch)

     .then(resp => resp.json() )
     .then(data => {
          //console.log(data);
          let showmovie=document.getElementById("root");
           //Recorre el array y muestra los elementos en pantalla 
          const listmovie=data.Search.map (element => {
              
             return   `<div class="style-card">
                           <img src="${element.Poster}">  
                           <h1> Titulo: ${element.Title}</h1>
                           <h3> Year: ${element.Year}</h3>
                        </div>` 
            }).join('');
          
            showmovie.innerHTML=listmovie;
})

});

//Filtrado  de peliculas por Genero desde select
document.getElementById("filtersgenres").addEventListener("change", moviegenres);

function moviegenres(){
   
   const filtergenres =document.getElementById("filtersgenres").value;

fetch('https://api.themoviedb.org/3/discover/movie?api_key=71949b65aff64acdb6a0fce55fb7fb1d&with_genres='+filtergenres)

.then(resp => resp.json() )
.then(data => {
     console.log(data);
      
     let showmovie=document.getElementById("root");

      const listmoviefilter=data.results.map(element =>{
   
            return   `<div class="style-card">
                          <img src= "${'https://image.tmdb.org/t/p/w500'+element.poster_path}">  
                          <h1> ${element.title}</h1>
                          <h3>Year: ${element.release_date}</h3>
                          <h4> Reseña: ${element.overview}</h4>
                       </div>` 
           }).join('');
         
           showmovie.innerHTML=listmoviefilter;
      })
   }
const returnhome= document.getElementById("return");
returnhome.addEventListener('click',()=>{

    location.reload();

});
