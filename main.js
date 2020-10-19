let b = document.createElement("button");
b.setAttribute("id","cargastarwarsBtn");
b.innerHTML = "damestars";

document.getElementsByTagName("body")[0].appendChild(b);


document
.getElementById("cargastarwarsBtn")
.addEventListener("click", () => {
    fetch("https://nominatim.openstreetmap.org/details.php?osmtype=W&osmid=290885123&class=building&addressdetails=1&hierarchy=0&group_hierarchy=1&polygon_geojson=1&format=json")
    .then(resp => resp.json())
    .then(data => {
       // console.log(data);
        let d = document.createElement("div");
        d.className = "   starwars";
        d.innerText = data.category;
        document.getElementsByTagName("body")[0].appendChild(d);
        
        data.map(item => document.write(item.name));
      })
      .catch(() => console.log("La URL está mal"));
  });

  /*

let b = document.createElement("button");
b.setAttribute("id","cargastarwarsBtn");
b.innerHTML = "damestars";

document

.getElementsByTagName("body")[0].appendChild(b);
.getElementsByTagName("body")[0].appendChild(d);

let d = document.createElement("div");
d.id = "idstarwars";

*/