let elemek = document.getElementsByClassName("receptek")[0];

export function egyReceptMegjelenit(recept) {
  elemek.innerHTML += `<div>
                        <img src="${recept.kep}" alt="peta kedvenc kajája">
                        <p class="ido"> ${recept.ido} </p> <p class="nehezseg">${recept.nehezseg} </p> 
                        <h3><a href="#">${recept.nev}</a></h3>
                        <p>${recept.kaloria}</p>
                        <button class="adat">Adatok</button>
                    </div>`;
}

export function receptekMegjelenit(lista) {
  for (let index = 0; index < lista.length; index++) {
    const element = lista[index];
    egyReceptMegjelenit(lista[index]);
  }
}


