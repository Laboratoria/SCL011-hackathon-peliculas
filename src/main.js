
const searchname= document.getElementById("btnsearch");
searchname.addEventListener("click", () =>{
     
     const namesearch=document.getElementById("searchtitle").value;


     fetch('http://www.omdbapi.com/?apikey=c8905c71' +'&s='+namesearch)

     .then(resp => resp.json() )
     .then(data => {
          console.log(data);

       for(let i=0; i<data.lenght; i++)
       {
          let showmovie=document.getElementById("root");

          let cont=document.createElement("div");

          let imagenmovie= document.createElement("img");
          imagenmovie.src=data[i].Poster;

          let titlemovie=document.createElement("h1");
          titlemovie.textContent=data[i].Title;


          showmovie.appendChild(cont);
          cont.appendChild(img);
          cont.appendChild(titlemovie);

          showmovie.innerHTML;

       }   
})

});

