let total = 0;
let items = 0;

function increment(amount){
    items++;
    total = amount + total;
    console.log('items: '+items +' total: '+total);
    document.getElementById('item_number').innerText = "Number of Items: "+items;
    document.getElementById('total_amount').innerText = "Total: M"+total+".00";
}

let clicks = 1;
function show_check(){
    clicks += 1;
    console.log(clicks);
    let check_menu = document.getElementById('check_menu');
    clicks % 2 === 0? check_menu.classList.remove('hide') : check_menu.classList.add('hide');
}
function check_out(){
    alert("Successfully paid M"+total+".00 for "+items+" item(s).")
    total = 0;
    items = 0;
    document.getElementById('item_number').innerText = "Number of Items: "+items;
    document.getElementById('total_amount').innerText = "Total: M"+total+".00";
}

function scroll_right(){
    requestAnimationFrame(
        function(){
            let store = document.getElementById('store_scroll');
            let offset = store.offsetLeft;
            store.scrollLeft = offset + 1030;
            console.log('fd');
        }, 10000
    );
    
}


function scroll_left(){
    let store = document.getElementById('store_scroll');
    let offset = store.offsetLeft;
    store.scrollLeft = offset - 1030;
}