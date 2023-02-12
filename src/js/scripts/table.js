function Table() {
  let table = document.createElement('table')
  let thead = document.createElement('thead')
  let tbody = document.createElement('tbody')
  let tr = document.createElement('tr')
  table.append(thead)
  table.append(tbody)
  thead.append(tr)
  document.querySelector('.price-service_element')
  if (window.innerWidth >= '768') {
    for (let i = 0; i < 3; i++) {
      let th = document.createElement('th')
      tr.append(th)
    }
    for (
      let i = 0;
      i < document.querySelectorAll('.price-service_element div').length;
      i
    ) {
      tbody.append(document.querySelectorAll('.price-service_element div')[i])
      let trBody = document.createElement('tr')
      tbody.append(trBody)
    }
    while (document.querySelector('.price-service').firstChild) {
      document
        .querySelector('.price-service')
        .removeChild(document.querySelector('.price-service').firstChild)
    }
    document.querySelector('.price-service').prepend(table)
    // add data and change in thead
    for (let i = 0; i < tr.children.length; i++) {
      tr.children[i].append(tbody.children[0].children[0])
      tbody.children[1].append(tbody.children[0].children[0])
      tr.children[i].children[0].outerHTML =
        tr.children[i].children[0].innerHTML
      tbody.children[1].outerHTML = tbody.children[1].outerHTML.replaceAll(
        'p',
        'th'
      )
    }
    // add data and change in tbody
    for (let i = 2; i < tbody.children.length; i = i + 2) {
      for (let j = 1; j < tbody.children[i].children.length; j = j + 1) {
        tbody.children[i + 1].append(tbody.children[i].children[j])
        tbody.children[i + 1].outerHTML = tbody.children[
          i + 1
        ].outerHTML.replaceAll('p', 'th')
      }
    }

    for (let i = 0; i < tbody.children.length; i = i + 1) {
      tbody.removeChild(tbody.children[i])
    }
  }
}
// window.addEventListener('load', Table, { once: true });

// window.addEventListener('resize', function(){
//     if(!document.body.contains(this.document.querySelector("table"))&&window.innerWidth >= '768'){
//         Table();
//     }
//   });
