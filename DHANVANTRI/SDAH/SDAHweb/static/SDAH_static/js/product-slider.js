var span = document.getElementsByClassName("product-carousel-btn");
var cardItem = document.querySelectorAll(".card-item");
var l = 0;
console.log(cardItem);
console.log(span)
span[1].onclick = () => {
    l++;
    for (var i of cardItem) {
        if (l == 0) { i.style.left = "0px";}
        if (l == 1) { i.style.left = "-340px"; } 
        if (l == 2) { 
            document.getElementById('bts').style.display = "none";
            i.style.left = "-680px"; }
        if (l == 2) { 
            document.getElementById('link-btn').style.display = "block";
            document.getElementById('link-btn').onclick = function () {
                location.href = 'product.html';
            };
            }
    }
}
span[0].onclick = () => {
    l--;
    for (var i of cardItem) {
        if (l == 0) { i.style.left = "-20px"; }
        if (l == 1) { 
            document.getElementById('link-btn').style.display = "none";
            document.getElementById('bts').style.display = "block";
            i.style.left = "-350px"; }
        if (l == 2) { i.style.left = "-680px"; }
        if (l < 0) { l = 0 }
        }
}

// 2 product-slider
// var spanTwo = document.getElementsByClassName("product-carousel-btn-two");
// var cardItemTwo = document.querySelectorAll(".card-item-two");
// var p = 0;
// spanTwo[1].onclick = () => {
//     p++;
//     for (var j of cardItemTwo) {
//         if (p == 0) { j.style.left = "0px";}
//         if (p == 1) { j.style.left = "-340px"; } 
//         if (p == 2) { 
//             document.getElementById('bts-two').style.display = "none";
//             j.style.left = "-680px"; }
//         if (p == 2) { 
//             document.getElementById('link-btn-two').style.display = "block";
//             document.getElementById('link-btn-two').onclick = function () {
//                 location.href = "produtcs.html"
//             };
//             }
//     }
// }
// spanTwo[0].onclick = () => {
//     p--;
//     for (var j of cardItemTwo) {
//         if (p == 0) { j.style.left = "-20px"; }
//         if (p == 1) { 
//             document.getElementById('link-btn-two').style.display = "none";
//             document.getElementById('bts-two').style.display = "block";
//             j.style.left = "-350px"; }
//         if (p == 2) { j.style.left = "-680px"; }
//         if (p < 0) { p = 0 }
//         }
// }
// 2 product-slider end


// 3 product-slider 
// var spanThree = document.getElementsByClassName("product-carousel-btn-three");
// var cardItemThree = document.querySelectorAll(".card-item-three");
// var q = 0;
// spanThree[1].onclick = () => {
//     q++;
//     for (var k of cardItemThree) {
//         if (q == 0) { k.style.left = "0px";}
//         if (q == 1) { k.style.left = "-340px"; } 
//         if (q == 2) { 
//             document.getElementById('bts-three').style.display = "none";
//             k.style.left = "-680px"; }
//         if (q == 2) { 
//             document.getElementById('link-btn-three').style.display = "block";
//             document.getElementById('link-btn-three').onclick = function () {
//                 location.href = "produtcs.html"
//             };
//             }
//     }
// }
// spanThree[0].onclick = () => {
//     q--;
//     for (var k of cardItemThree) {
//         if (q == 0) { k.style.left = "-20px"; }
//         if (q == 1) { 
//             document.getElementById('link-btn-three').style.display = "none";
//             document.getElementById('bts-three').style.display = "block";
//             k.style.left = "-350px"; }
//         if (q == 2) { k.style.left = "-680px"; }
//         if (q < 0) { q = 0 }
//         }
// }
// 3 product-slider end


// 4 product-slider
// var span = document.getElementsByClassName("product-carousel-btn");
// var cardItem = document.querySelectorAll(".card-item");
// var l = 0;
// span[1].onclick = () => {
//     l++;
//     for (var i of cardItem) {
//         if (l == 0) { i.style.left = "0px";}
//         if (l == 1) { i.style.left = "-340px"; } 
//         if (l == 2) { 
//             document.getElementById('bts').style.display = "none";
//             i.style.left = "-680px"; }
//         if (l == 2) { 
//             document.getElementById('link-btn').style.display = "block";
//             document.getElementById('link-btn').onclick = function () {
//                 location.href = "produtcs.html"
//             };
//             }
//     }
// }
// span[0].onclick = () => {
//     l--;
//     for (var i of cardItem) {
//         if (l == 0) { i.style.left = "-20px"; }
//         if (l == 1) { 
//             document.getElementById('link-btn').style.display = "none";
//             document.getElementById('bts').style.display = "block";
//             i.style.left = "-350px"; }
//         if (l == 2) { i.style.left = "-680px"; }
//         if (l < 0) { l = 0 }
//         }
// }

// 4 product-slider end

// resp for productslider for mobile
document.addEventListener('DOMContentLoaded', init);

function init(){
    let query = window.matchMedia("(max-width: 480px)");
    if(query.matches){ 
        // 1 product slider
        var span = document.getElementsByClassName("product-carousel-btn");
        var cardItem = document.querySelectorAll(".card-item");
        var l = 0;
        span[1].onclick = () => {
            l++;
            for (var i of cardItem) {
                if (l == 0) { i.style.left = "0px";}
                if (l == 1) { i.style.left = "-133.58px"; } 
                if (l == 2) { 
                    document.getElementById('bts').style.display = "none";
                    i.style.left = "-283.16px"; }
                if (l == 2) { 
                    document.getElementById('link-btn').style.display = "block";
                    document.getElementById('link-btn').onclick = function () {
                        location.href = "product.html";
                    };
                    }
            }
        }
        span[0].onclick = () => {
            l--;
            for (var i of cardItem) {
                if (l == 0) { i.style.left = "15px"; }
                if (l == 1) { 
                    document.getElementById('link-btn').style.display = "none";
                    document.getElementById('bts').style.display = "block";
                    i.style.left = "-133.58px"; }
                if (l == 2) { i.style.left = "-283.16px"; }
                if (l < 0) { l = 0 }
            }
        }
        // 1 product slider end

        
        // 2 product-slider
        var spanTwo = document.getElementsByClassName("product-carousel-btn-two");
        var cardItemTwo = document.querySelectorAll(".card-item-two");
        var p = 0;
        spanTwo[1].onclick = () => {
            p++;
            for (var j of cardItemTwo) {
                if (p == 0) { j.style.left = "0px";}
                if (p == 1) { j.style.left = "-133.58px"; } 
                if (p == 2) { 
                    document.getElementById('bts-two').style.display = "none";
                    j.style.left = "-283.16px"; }
                if (p == 2) { 
                    document.getElementById('link-btn-two').style.display = "block";
                    document.getElementById('link-btn-two').onclick = function () {
                        location.href = "produtcs.html"
                    };
                    }
            }
        }
        spanTwo[0].onclick = () => {
            p--;
            for (var j of cardItemTwo) {
                if (p == 0) { j.style.left = "15px"; }
                if (p == 1) { 
                    document.getElementById('link-btn-two').style.display = "none";
                    document.getElementById('bts-two').style.display = "block";
                    j.style.left = "-133.58px"; }
                if (p == 2) { j.style.left = "-283.16px"; }
                if (p < 0) { p = 0 }
                }
        }
        // 2 product-slider end

        
        // 3 product-slider 
        var spanThree = document.getElementsByClassName("product-carousel-btn-three");
        var cardItemThree = document.querySelectorAll(".card-item-three");
        var q = 0;
        spanThree[1].onclick = () => {
            q++;
            for (var k of cardItemThree) {
                if (q == 0) { k.style.left = "0px";}
                if (q == 1) { k.style.left = "-133.58px"; } 
                if (q == 2) { 
                    document.getElementById('bts-three').style.display = "none";
                    k.style.left = "-283.16px"; }
                if (q == 2) { 
                    document.getElementById('link-btn-three').style.display = "block";
                    document.getElementById('link-btn-three').onclick = function () {
                        location.href = "produtcs.html"
                    };
                    }
            }
        }
        spanThree[0].onclick = () => {
            q--;
            for (var k of cardItemThree) {
                if (q == 0) { k.style.left = "15px"; }
                if (q == 1) { 
                    document.getElementById('link-btn-three').style.display = "none";
                    document.getElementById('bts-three').style.display = "block";
                    k.style.left = "-133.58px"; }
                if (q == 2) { k.style.left = "-283.16px"; }
                if (q < 0) { q = 0 }
                }
        }
        // 3 product-slider end
    }
     
}

// product slider for mobile end

//product slider for tablet
document.addEventListener('DOMContentLoaded', initTwo);

function initTwo(){
    let query = window.matchMedia('(min-width: 481px) and (max-width: 768px)');
    if(query.matches){ 
        // 1 product slider
        var tab = document.getElementsByClassName("product-carousel-btn");
        var cardItemtab = document.querySelectorAll(".card-item");
        let l = 0;
        tab[1].onclick = () => {
            l++;
            for (let i of cardItemtab) {
                if (l == 0) { i.style.left = "0px";}
                if (l == 1) { i.style.left = "-172px"; } 
                if (l == 2) { 
                    document.getElementById('bts').style.display = "none";
                    i.style.left = "-358px"; }
                if (l == 2) { 
                    document.getElementById('link-btn').style.display = "block";
                    document.getElementById('link-btn').onclick = function () {
                        location.href = "product.html";
                    };
                    }
            }
        }
        tab[0].onclick = () => {
            l--;
            for (let i of cardItemtab) {
                if (l == 0) { i.style.left = "15px"; }
                if (l == 1) { 
                    document.getElementById('link-btn').style.display = "none";
                    document.getElementById('bts').style.display = "block";
                    i.style.left = "-172px"; }
                if (l == 2) { i.style.left = "-358px"; }
                if (l < 0) { l = 0 }
            }
        }
        // 1 product slider end

        
        // 2 product-slider
        var tabTwo = document.getElementsByClassName("product-carousel-btn-two");
        var cardItemTwoTab = document.querySelectorAll(".card-item-two");
        let p = 0;
        tabTwo[1].onclick = () => {
            p++;
            for (let j of cardItemTwoTab) {
                if (p == 0) { j.style.left = "0px";}
                if (p == 1) { j.style.left = "-172px"; } 
                if (p == 2) { 
                    document.getElementById('bts-two').style.display = "none";
                    j.style.left = "-358px"; }
                if (p == 2) { 
                    document.getElementById('link-btn-two').style.display = "block";
                    document.getElementById('link-btn-two').onclick = function () {
                        location.href = "produtcs.html"
                    };
                    }
            }
        }
        tabTwo[0].onclick = () => {
            p--;
            for (let j of cardItemTwoTab) {
                if (p == 0) { j.style.left = "15px"; }
                if (p == 1) { 
                    document.getElementById('link-btn-two').style.display = "none";
                    document.getElementById('bts-two').style.display = "block";
                    j.style.left = "-172px"; }
                if (p == 2) { j.style.left = "-358px"; }
                if (p < 0) { p = 0 }
                }
        }
        // 2 product-slider end

        
        // 3 product-slider 
        var tabThree = document.getElementsByClassName("product-carousel-btn-three");
        var cardItemThreeTab = document.querySelectorAll(".card-item-three");
        let q = 0;
        tabThree[1].onclick = () => {
            q++;
            for (let k of cardItemThreeTab) {
                if (q == 0) { k.style.left = "0px";}
                if (q == 1) { k.style.left = "-172px"; } 
                if (q == 2) { 
                    document.getElementById('bts-three').style.display = "none";
                    k.style.left = "-358px"; }
                if (q == 2) { 
                    document.getElementById('link-btn-three').style.display = "block";
                    document.getElementById('link-btn-three').onclick = function () {
                        location.href = "produtcs.html"
                    };
                    }
            }
        }
        tabThree[0].onclick = () => {
            q--;
            for (let k of cardItemThreeTab) {
                if (q == 0) { k.style.left = "15px"; }
                if (q == 1) { 
                    document.getElementById('link-btn-three').style.display = "none";
                    document.getElementById('bts-three').style.display = "block";
                    k.style.left = "-172px"; }
                if (q == 2) { k.style.left = "-358px"; }
                if (q < 0) { q = 0 }
                }
        }
        // 3 product-slider end
    }
     
}
//product slider for tablet end