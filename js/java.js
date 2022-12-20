$('.slider-principal').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1, 
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000

});

function login() 
{
var nomeCerto = document.getElementById("nome_cad").value;
var senhaCerto = document.getElementById("senha_cad").value;
var nomeDigitado = document.getElementById("nome_login").value;
var senhaDigitado = document.getElementById("senha_login").value;

    if(nomeCerto==nomeDigitado&&senhaCerto==senhaDigitado)
        {
            window.location.replace("index.html");
        }
}

function economia()
{
    var x1 = document.getElementById("cx1").value;
    var x2 = document.getElementById("cx2").value;
    var total = parseFloat (x1) * parseFloat (x2);
    var formula = (95/100) * total;
    var total1 = total - formula;
    var total2 = total1 * 12;
    var total3 = total1 * 60;

    document.write("Sua conta de energia passará a ser de: R$",total1,"</br>");
    document.write("Levando em consideração uma economia de 95%, você irá poupar um valor de: R$",formula,"</br>");
    document.write("Em 1 ano o valor poupado será de: R$",total2,"</br>");
    document.write("Em 5 ano o valor poupado será de: R$",total3,"</br>");
}

function jogar(){
    document.getElementById("jogo").style.display = "block";
    document.getElementById("inicio").style.display = "none";
}

function color1()
{
    document.getElementById("1").style.backgroundColor = '#7ceea2';
    document.getElementById("2").style.backgroundColor = '#7ceea2';
    document.getElementById("3").style.backgroundColor = '#7ceea2';
    document.getElementById("4").style.backgroundColor = '#7ceea2';
    document.getElementById("5").style.backgroundColor = '#7ceea2';
    document.getElementById("6").style.backgroundColor = '#7ceea2';
}

function color2(){
    document.getElementById("7").style.backgroundColor = '#7ceea2';
    document.getElementById("8").style.backgroundColor = '#7ceea2';
    document.getElementById("9").style.backgroundColor = '#7ceea2';
    document.getElementById("10").style.backgroundColor = '#7ceea2';
    document.getElementById("11").style.backgroundColor = '#7ceea2';
    document.getElementById("12").style.backgroundColor = '#7ceea2';
    document.getElementById("13").style.backgroundColor = '#7ceea2';
    document.getElementById("14").style.backgroundColor = '#7ceea2';
    document.getElementById("15").style.backgroundColor = '#7ceea2';
    document.getElementById("16").style.backgroundColor = '#7ceea2';
    document.getElementById("17").style.backgroundColor = '#7ceea2';
    document.getElementById("18").style.backgroundColor = '#7ceea2';
    document.getElementById("19").style.backgroundColor = '#7ceea2';
    document.getElementById("20").style.backgroundColor = '#7ceea2';
    document.getElementById("21").style.backgroundColor = '#7ceea2';
    document.getElementById("22").style.backgroundColor = '#7ceea2';
}    

function color3(){
    document.getElementById("23").style.backgroundColor = '#7ceea2';
    document.getElementById("24").style.backgroundColor = '#7ceea2';
    document.getElementById("25").style.backgroundColor = '#7ceea2';
    document.getElementById("26").style.backgroundColor = '#7ceea2';
    document.getElementById("27").style.backgroundColor = '#7ceea2';
    document.getElementById("28").style.backgroundColor = '#7ceea2';
    document.getElementById("29").style.backgroundColor = '#7ceea2';
    document.getElementById("30").style.backgroundColor = '#7ceea2';
    document.getElementById("31").style.backgroundColor = '#7ceea2';
}

function color4(){
    document.getElementById("32").style.backgroundColor = '#7ceea2';
    document.getElementById("33").style.backgroundColor = '#7ceea2';
    document.getElementById("34").style.backgroundColor = '#7ceea2';
    document.getElementById("35").style.backgroundColor = '#7ceea2';
    document.getElementById("36").style.backgroundColor = '#7ceea2';
    document.getElementById("37").style.backgroundColor = '#7ceea2';
    document.getElementById("38").style.backgroundColor = '#7ceea2';
    document.getElementById("39").style.backgroundColor = '#7ceea2';
}

function color5(){
    document.getElementById("40").style.backgroundColor = '#7ceea2';
    document.getElementById("41").style.backgroundColor = '#7ceea2';
    document.getElementById("42").style.backgroundColor = '#7ceea2';
    document.getElementById("43").style.backgroundColor = '#7ceea2';
    document.getElementById("44").style.backgroundColor = '#7ceea2';
    document.getElementById("45").style.backgroundColor = '#7ceea2';
}

function color6(){
    document.getElementById("46").style.backgroundColor = '#7ceea2';
    document.getElementById("47").style.backgroundColor = '#7ceea2';
    document.getElementById("48").style.backgroundColor = '#7ceea2';
    document.getElementById("49").style.backgroundColor = '#7ceea2';
    document.getElementById("50").style.backgroundColor = '#7ceea2';
    document.getElementById("51").style.backgroundColor = '#7ceea2';
}

function color7(){
    document.getElementById("52").style.backgroundColor = '#7ceea2';
    document.getElementById("53").style.backgroundColor = '#7ceea2';
    document.getElementById("54").style.backgroundColor = '#7ceea2';
    document.getElementById("55").style.backgroundColor = '#7ceea2';
    document.getElementById("56").style.backgroundColor = '#7ceea2';
    document.getElementById("57").style.backgroundColor = '#7ceea2';
    document.getElementById("58").style.backgroundColor = '#7ceea2';
    document.getElementById("59").style.backgroundColor = '#7ceea2';
}

function color8(){
    document.getElementById("60").style.backgroundColor = '#7ceea2';
    document.getElementById("61").style.backgroundColor = '#7ceea2';
    document.getElementById("62").style.backgroundColor = '#7ceea2';
}