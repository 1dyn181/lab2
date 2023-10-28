let cart = document.getElementById('cart'),
    btn = document.getElementById('kor'),
    x = document.getElementById('x');
    btn.onclick = function() {
    cart.style.display = "block";
}         

    x.onclick = function() {
    cart.style.display = "none";
}

    var additem = 0;
    function addcart(item, itemprice, itemcount) {
    additem += itemprice;
    itemcount += 1;
    var name = item.innerHTML;
    var selectedItem = document.createElement('div');
    var sel = document.createElement('div');
    sel.innerHTML = name;
    let title = document.getElementById('title');
    document.getElementById('total').innerHTML = additem;
    selectedItem.style.marginTop = "10px";
    selectedItem.append(sel);
    title.append(selectedItem);
}

var result = location.search.substring(1);
    if (result !== '') {
        const out = document.querySelector('.glavtext2');
        out.textContent = result;
    }
