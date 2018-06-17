var canvas1=document.getElementById('canvas1')
var ctx1=canvas1.getContext('2d')
var canvas2=document.getElementById('canvas2')
var ctx2=canvas2.getContext('2d')

function gene(){
nombrec=document.getElementById('nombrecomp').value
cargotb=document.getElementById('cargotrab').value
ungest=document.getElementById('unigest').value
idcd=document.getElementById('idced').value
segsc=document.getElementById('segsoc').value
empno=document.getElementById('emplno').value
tipsa=document.getElementById('tipsang').value

canvas1=document.getElementById('canvas1')
ctx1=canvas1.getContext('2d')
ctx1.mozImageSmoothingEnabled = false;
ctx1.webkitImageSmoothingEnabled = false;
ctx1.msImageSmoothingEnabled = false;
ctx1.imageSmoothingEnabled = false;

ctx1.clearRect(0,0,206,326)

youfbg=document.getElementById('uploadFBg')
ctx1.drawImage(youfbg,0,0,206,326)

youphot=document.getElementById('uploadPF')
ctx1.drawImage(youphot,43,68,120,130)

ctx1.font='bold 15px Arial'
ctx1.fillStyle='#ffffff'
ctx1.textAlign='center'
ctx1.fillText(nombrec,103,213)

ctx1.font='13px Arial'
ctx1.fillStyle='#ffffff'
ctx1.textAlign='center'
ctx1.fillText(cargotb,103,233)

ctx1.font='13px Arial'
ctx1.fillStyle='#ffffff'
ctx1.textAlign='center'
ctx1.fillText(ungest,103,253)

ctx1.font='9px Arial'
ctx1.fillStyle='#ffffff'
ctx1.textAlign='start'
ctx1.fillText('Cedula: '+ idcd,10,268)

ctx1.font='9px Arial'
ctx1.fillStyle='#ffffff'
ctx1.textAlign='start'
ctx1.fillText('S. Social: '+ segsc,103,268)

ctx1.font='9px Arial'
ctx1.fillStyle='#ffffff'
ctx1.textAlign='start'
ctx1.fillText('No. Empleado: '+ empno,10,278)

ctx1.font='9px Arial'
ctx1.fillStyle='#ffffff'
ctx1.textAlign='start'
ctx1.fillText('Tipaje: '+ tipsa,103,278)

init()
}

function init(){
canvas2=document.getElementById('canvas2')
ctx2=canvas2.getContext('2d')
ctx2.mozImageSmoothingEnabled = false;
ctx2.webkitImageSmoothingEnabled = false;
ctx2.msImageSmoothingEnabled = false;
ctx2.imageSmoothingEnabled = false;

ctx2.clearRect(0,0,206,326)

youbbg=document.getElementById('uploadBBg')
ctx2.drawImage(youbbg,0,0,206,326)
}

init()

function first(){
ctx1.clearRect(0,0,206,326)
ctx2.clearRect(0,0,206,326)
ctx1.font='20px Arial'
ctx1.fillStyle='#ffffff'
ctx1.textAlign ='center'
ctx1.fillText('Completar Datos',103,160)
}

first()

function PreviewPF() {
        var prr = new FileReader();
        prr.readAsDataURL(document.getElementById("imagepicf").files[0]);

        prr.onload = function (ev) {
            document.getElementById("uploadPF").src = ev.target.result;
        };
    };

function PreviewFBg() {
        var prr = new FileReader();
        prr.readAsDataURL(document.getElementById("imagefbg").files[0]);

        prr.onload = function (ev) {
            document.getElementById("uploadFBg").src = ev.target.result;
        };
    };

function PreviewBBg() {
        var prr = new FileReader();
        prr.readAsDataURL(document.getElementById("imagebbg").files[0]);

        prr.onload = function (ev) {
            document.getElementById("uploadBBg").src = ev.target.result;
        };
    };

function rese(){
first()
}

function savepdf(){
var frontal=canvas1.toDataURL('image/png',1.0);
var posterior=canvas2.toDataURL('image/png',1.0);
var doc=new jsPDF('p','mm',[86,54]);

doc.addImage(frontal,'PNG',0,0,54,86);
doc.addPage();
doc.addImage(posterior,'PNG',0,0,54,86);

doc.save('carnet.pdf')
}