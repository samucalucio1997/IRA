

var id = document.getElementById('prin');
// console.log(eClientes);
function api(){
    fetch('https://api.thecatapi.com/v1/images/search?limit=10').then(
        n => v = n.json())
        .then(data => {
            data.map(el => {
                id.innerHTML += `
                  <td>${el.id}</td>
                  <td> <img src="${el.url}" width="${el.width}" height="${el.height}"/> </td>
                 `
                // console.log(el['width'])
            })
        }
            ).catch(e => console.log(e));
}
api();