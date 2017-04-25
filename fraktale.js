/**
 * Created by deleviretta on 23.05.16.
 */


var id;
var okno;

function paprocBarnsleyaAnimacja() {
    pustyCanvas();
    var x = 0;
    var y = 0;
    var rand;
    var constant = 40;
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var iteracja = document.getElementById("add").elements[0].value;
    var wielkoscPunktow = document.getElementById("add").elements[1].value;
    var powiekszenieX = document.getElementById("add").elements[2].value;
    var powiekszenieY = document.getElementById("add").elements[3].value;
    var counter = 0;
    var colors = ["rgba(255,255,255,1)", "rgba(253,253,52,0.6)", "rgba(0,171,56,0.7)", "rgba(168,210,110,0.7)", "rgba(246,243,27,0.6)", "rgba(138,215,39,0.7)", "rgba(243,205,8,0.5)", "rgba(150,204,104,0.4)", "rgba(137,230,101,0.5)", "rgba(246,243,27,0.5)", "rgba(255,255,255,0.8)"];
    var colorIndex;
    id = setInterval(frame, 0.1);

    function frame() {
        if (counter == iteracja) {
            clearInterval(id);
        }
        else {
            rand =  Math.floor(Math.random() * 100);
            if(rand <= 1){
                x = 0;
                y = (0.16 * y);
            }
            else if(rand > 1 &&  rand <= 86){
                x = (0.85 * x + 0.04 * y);
                y = ((-0.04 * x) + 0.85 * y + 1.6);
            }
            else if(rand > 86 && rand <= 93){
                x = (0.2 * x - 0.26 * y);
                y = (0.23 * x + 0.22 * y + 1.6);
            }
            else if(rand >= 93){
                x = (-0.15 * x + 0.28 * y);
                y = (0.26 * x + 0.24 * y + 0.44);
            }
            colorIndex = Math.floor(Math.random() * colors.length);
            ctx.fillStyle = String(colors[colorIndex]);
            ctx.fillRect(100 + (x * powiekszenieX * constant + 200), 450 - (y * powiekszenieY * constant), wielkoscPunktow, wielkoscPunktow);
            ctx.stroke();
            counter += 1;
        }
    }
}
function paprocBarnsleya(){
    var x=0;
    var y=0;
    var rand;
    var constant = 40;
    var colorIndex;
    var iteracja = document.getElementById("add").elements[0].value;
    var wielkoscPunktow = document.getElementById("add").elements[1].value;
    var powiekszenieX = document.getElementById("add").elements[2].value;
    var powiekszenieY = document.getElementById("add").elements[3].value;
    var colors = ["rgba(255,255,255,1)", "rgba(253,253,52,0.6)", "rgba(0,171,56,0.7)", "rgba(168,210,110,0.7)", "rgba(246,243,27,0.6)", "rgba(138,215,39,0.7)", "rgba(243,205,8,0.5)", "rgba(150,204,104,0.4)", "rgba(137,230,101,0.5)", "rgba(246,243,27,0.5)", "rgba(255,255,255,0.8)"];
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    for (var i =0; i<iteracja; i++) {
        rand =  Math.floor(Math.random() * 100);
        if(rand <= 1){
            x = 0;
            y = (0.16 * y);
        }
        else if(rand > 1 &&  rand <= 86){
            x = (0.85 * x + 0.04 * y);
            y = ((-0.04 * x) + 0.85 * y + 1.6);
        }
        else if(rand > 86 && rand <= 93){
            x = (0.2 * x - 0.26 * y);
            y = (0.23 * x + 0.22 * y + 1.6);
        }
        else if(rand >= 93){
            x = (-0.15 * x + 0.28 * y);
            y = (0.26 * x + 0.24 * y + 0.44);
        }
        colorIndex = Math.floor(Math.random()*colors.length);
        ctx.fillStyle =  String(colors[colorIndex]);
        ctx.fillRect(100 + (x * powiekszenieX * constant + 200), 450 - (y* powiekszenieY * constant), wielkoscPunktow, wielkoscPunktow);
        ctx.stroke();

    }
}


function printingForm() {
    var form1  = "<h2>Paproć Barnsleya</h2>";
    form1    += "<p class='text'>Fraktal przypominający występujący w naturze liść paproci. Do jego tworzenia korzystamy z";
    form1    += " systemu funckcji iterowanych, który pozwala na tworzenie fraktali samopodobnych.</p>";
    form1    += "<p class='text'> Funkcja generująca liść wzraz z prawdopodobieństwem:</p>";
    form1    += "<p class='funkcja'>f<sub>1</sub>(x,y) = (0.85x + 0.04y, -0.04x + 0.85y + 1.6) &emsp; &emsp; p=85</p>";
    form1    += "<p class='funkcja'>f<sub>2</sub>(x,y) = (-0.15x + 0.28y, 0.26x + 0.24y + 0.44) &emsp; &emsp; p=7</p>";
    form1    += "<p class='funkcja'>f<sub>3</sub>(x,y) = (0.20x - 0.26y, 0.23x + 0.22y + 1.6) &emsp; &emsp; p=7</p>";
    form1    += "<p class='funkcja'>f<sub>4</sub>(x,y) = (0, 0.16y) &emsp; &emsp; p=1</p>";
    form1    += "<form name='add' id='add'>" ;
    form1    += "<p><span class='formTitle'>Liczba iteracji</span><input type='text' name='iteracje' value='10000'></p>";
    form1    += "<p><span class='formTitle'>Wielkość punktów</span><input type='text' name='punkt' value='2'></p>";
    form1    += "<p><span class='formTitle'>Powiększenie X</span><input type='text' name='x' value='3' ></p>";
    form1    += "<p><span class='formTitle'>Powiększenie Y</span><input type='text' name='y' value='1' ></p>";
    form1    += "<p><input type='button' value='Animacja' onclick='paprocBarnsleyaAnimacja()' >";
    form1    += "<input type='button' value='Rysuj' onclick='paprocBarnsleya()' >";
    form1    += "<input type='button' id='stop' value='Wyczyść płótno' onclick='pustyCanvas()' ></p>";
    form1    += "</form>";
    form1    += "<canvas id='canvas' width='700' height='500'></canvas>";
    document.getElementById('content').innerHTML = form1;
}


function printingInfo(){
    var info = "<h2>Fraktale</h2>";
    info     += "<p class='text'>Mówiąc naprościej fraktale są to obiekty geometryczne, składające się z pomniejszonych kopii ";
    info     += "samych siebie. Można je dostrzec w otaczającej nas przyrodzie, ale są również dziełem człowieka.";
    info     += "pojęcie fraktalu zostało wprowadzone przez Benoîto Mandelbrota w latach 70. XX wieku, gdy odkrył on";
    info     += "zbiór Mandelbrota. Jest to zatem stosunkowo nowa dziedzina jednak już wcześniej znano zbiory spełniające";
    info     += "właściwości fraktali, traktowano je jednak jako kontrprzykłady pewnych twiedzeń.</p>";
    info     += "<p class='text'>Badaczami fraktali byli: Georg Cantor, Giuseppe Peano, Wacław Sierpiński, Paul Lévy oraz Donald Knuth.</p>";
    info     += "<h2>System funkcji iterowanych</h2>";
    info     += "<p class='text'>Zbiór funkcji za pomocą, których konstruuje się fraktale. IFS(ang. iterated function system) ";
    info     += "został opisany w 1981 roku przez Johna Hutchinsona, spopularyzował je  Micheal Barnsley. Algorytmem";
    info     += "korzystającym z IFS jest gra w chaos, która to dla aktualnego punktu wybiera losowo funkcję ze zbioru,";
    info     += "a następnie z pomocą tej funkcji obliczamy nowy punkt. Całość powtarza się n-krotnie.</p>";
    info     += "<h2>Trójkąt Sierpińskiego</h2>";
    info     += "<p class='text'>Jeden z najprostszych fraktali. Przepis na jego konstrukcję podał Wacław Sierpiński w 1915r. -  ";
    info     += "zanim zaczęto mówić o pojęciu fraktali. Obiekt ten buduje się na trójkącie równobocznym, w którym łączy się";
    info     += "środki boków dzieląc go w ten sposób na cztery mniejsze trójkąty. Środkowy trójkąt usuwa się, a operację ";
    info     += "łączenia wraz z usunięciem powtarza się do pozostałych trójkątów. Fraktal ten można również utworzyć ";
    info     += "poprzez kolorowanie na czarno nieparzystych liczb trójkąta Pascala. Innym sposobem stworzenia tego fraktalu";
    info     += "jest algorytm gry w chaos.</p> ";
    info     += "<img src='img/gif07.gif' alt='Trójkąt Sierpińskiego' class='gif'/>";
    info     += "<h2>Smok Heighwaya</h2>";
    info     += "<p class='text'>Fraktal nazywany również smokiem Hartera-Heighwaya lub smokiem z Parku Jurajskiego";
    info     += "badany przez Heighwaya, Bruce’a Banksa i Williama Hartera z NASA. Spolaryzowany w latach 70. XX wieku";
    info     += 'za sprawą książki Martina Gardnera - "Gry Matematyczne". Fraktal ten pojawił się również w powieści ';
    info     += "Michaela Crichtona Jurassic Park. IFS dla tego fraktalu przybiera postać:</p>";
    info     += "<p class='funkcja'>f<sub>1</sub>(x,y) = (0.824074x + 0.281428y - 1.882290, -0.212346x + 0.864198y - 0.110607) &emsp; &emsp; p=78.7473</p>";
    info     += "<p class='funkcja'>f<sub>2</sub>(x,y) = (0.088272x + 0.520988y + 0.785360, -0.463889x - 0.377778y + 8.095795) &emsp; &emsp; p=21.2527</p>";
    info     += "<img src='img/Dragon_curve_animation.gif' alt='Smok' class='gif'/>";
    info     += "<h2>Żuk Mandelbrota</h2>";
    info     += "<p class='text'> Inaczej zbiór Mandelbrota, jest to podzbiór płaszczyzny zespolonej. ";
    info     += "Jej brzeg tworzy omawiany w tym paragrafie fraktal. Nazwany tak na część odkrywcy i badacza fraktali";
    info     += "Benoita Mandelbrota. Pierwsze obrazy zbioru opublikowano w 1980 roku. Mandelbrot prowadził badania przy";
    info     += "użyciu komputera</p>";
    info     += "<img src='img/800px-Mandelset_hires.png' alt='Zbiór Mandelbrota'/>";
    document.getElementById('content').innerHTML = info;
}

function printingDokumentacja(){
    var info = "<h2>Dokumentacja</h2>";
    info     += "Do wyświetlania strony użyto języka HTML, CSSów oraz javascriptu wraz z innerhtml. Na stronie startowej" +
        "(która włącza się również po kliknięciu w nagłówek) oraz w zakładce „Ogólnie o fraktalach” znajdują się ogólne " +
        "wiadomości o fraktalach. Pod przyciskiem „Paproć Barnsleya” znajduje się krótki opis fraktalu wraz z animacją " +
        "obsługiwaną przez formularz. Za pomocą pól formularza można zmieniać wygląd animacji i rysunku:" +
        "<p>- liczba iteracji – ilość obiegu pętli rysującej kropki</p>" +
        "<p>- wielkość punktów – wielkość kropek rysowanych przez algorytm, w przypadku przybliżania, " +
        "wówczas lepiej dobrać wielkość mniejszą od 1</p>" +
        "<p>- powiększenie X i Y – powiększenie rysowanego fraktalu na osi X lub Y</p>" +
        "<p>Przyciski:</p>" +
        "<p>- animacja – animacja powstawania paproci</p>"+
        "<p>- rysuj – rysowanie całego gotowego fraktalu</p>"+
        "<p>- wyczyść płótno – czyści canvas i przygotowuje do ponownego rysowania.</p>"
        "<p>W zakładce „Dywan sierpińskiego” oprócz krótkiej informacji o fraktalu znajduje się przycisk za pomocą którego" +
        " możemy wyrysować dywan o głębokości nie większej niż 6. Wpisanie większych liczb powoduje wygenerowanie fraktalu" +
        " dla maksymalnej ilości rekurencji."+
        "<p>Tło strony pochodzi z witryny: subtlepatterns.com. Do generowania animacji i grafik wykorzystano canvas oraz " +
        "grafikę 2d. Niestandardowe czcionki użyte w projekcie są czcionkami google dostępnymi w internecie.</p>"
    document.getElementById('content').innerHTML = info;
    
}

function pustyCanvas(){
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    clearInterval(id);
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function glowna(){
    var info = "<h3> Witaj na stronie poświęconej fraktalom!</h3>";
    info     += "<iframe id='filmik' width='560' height='315' src='https://www.youtube.com/embed/XwWyTts06tU' frameborder='0' allowfullscreen></iframe>";
    document.getElementById('content').innerHTML = info;
}

function printingDywan(){
    var form1  = "<h2>Dywan Sierpińskiego</h2>";
    form1    += "<p class='text'>Fraktal otrzymany przez podział kwadratu na 9(3 kolumny i 3 rzędy) mniejszych części a następnie";
    form1    += " usunięcie środkowego kwadratu i ponowne rekurencyjne wywołanie całej procedury dla powstałych mniejszych";
    form1    += "kwadratów. Trójwymiarowym odpowiednkiem dywanu jest kostka Mengera.</p>";
    form1    += "<p class='text'>Fraktal swoją nazwę przyjął od nazwiska polskiego matematyka Wacława Sierpińskiego, który";
    form1    += "opisał dywan w 1916 roku. Istnieje";
    form1    += " jeszcze jeden fraktal, który związany jest z nazwiskiem uczonego - trójkąt Sierpińskiego. Matematyk oprócz";
    form1    += "prac nad zbiorami zajmował się również teorią liczb, analizą matematyczną, teorią miary i kategorii.</p>";
    form1    += "<p class='text'>Ciekawą własnością dywanu jest to, iż jego pole powierzchni jest zerowe.";
    form1    += "<p><span class='formTitle'>Ilość zagłębień(maksymalna ilość rysowań to 6)</span><input type='text' name='depth' id='depth' value='4' ></p>";
    form1    += "<input type='button' value='Rysuj' onclick='Sierpinski()'>";
    form1    += "<canvas id='myCanvas' width='600' height='600'></canvas>";
    document.getElementById('content').innerHTML = form1;
}


function Sierpinski() {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    okno = context;
    var maxDepth = 6;
    var depth = document.getElementById("depth").value;
    context.clearRect(0, 0, width, height);
    
    context.fillStyle = "#ffffff";

    context.fillRect(0, 0, width, width);

    context.fillStyle = "#000000";
    if (depth > maxDepth) {
        depth = maxDepth;
    }
    removeCenterSquare(0, 0, width, depth);

}

function drawSquare(x, y, size) {
    okno.fillRect(x, y, size, size);
}

function removeCenterSquare(x, y, size, depth) {
    if (depth > 0) {
        var z = size/3;
        drawSquare(x+z, y+z, z);

        if (depth > 1) {
            for (var i = 0; i < 3; ++i) {
                for (var j = 0; j < 3; ++j) {
                    if (i !== 1 || j !== 1) {
                        removeCenterSquare(x + i*z, y + j*z, z, depth - 1);
                    }
                }
            }
        }
    }
}
