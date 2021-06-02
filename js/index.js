var slider = document.getElementById("myrange");
var check = document.getElementById("check");

slider.addEventListener("input", function(){
    var x = ((slider.value-1)/4)*100; //to calculate the percentage
    var color = 'linear-gradient(90deg, hsl(174, 77%, 80%)' + x + '%, hsl(224, 65%, 95%)' + x + '%)';
    slider.style.background = color;
    traerDatos();
})

check.addEventListener("change", traerDatos);

function traerDatos(){
    var xhttp = new XMLHttpRequest();

    xhttp.open('GET', './js/plans.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            var datos =  JSON.parse(this.responseText);
            var numberpage =  document.getElementById("number__pageviews");

            if(check.checked){
                numberpage.innerHTML =  datos[slider.value - 1].pageviews;
                month__price.innerHTML ="$" + parseInt(datos[slider.value - 1].permonth,10)*0.75 + ".00";
            }
            else{
                numberpage.innerHTML =  datos[slider.value - 1].pageviews;
                month__price.innerHTML ="$" + datos[slider.value - 1].permonth + ".00";
            }
        }
    }
}