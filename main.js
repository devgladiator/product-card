var Two = document.getElementById('two');
Two.addEventListener('click', function(){
    Two.style = `transform: rotate(-45deg) translateY(-20px);
    transition: all 0.2s;`

    var One = document.getElementById('one');
    One.style = `top: -10px;
    left: -10px;
    width: 150px;
    height: 150px;
    transition: all 0.4s ease-in-out;
    transition-delay:0.2s;`

    var Three = document.getElementById('three');
    Three.style = `opacity: 1;
    transition: all 0.2s;
    transition-delay:0.6s;`

    var ProductBlock = document.getElementById('product-block');
    ProductBlock.style= `opacity:1;
    transition: all 0.5s;
    transition-delay:0.4s;`
})
