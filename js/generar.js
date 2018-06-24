var canvas1=document.getElementById('canvas1')
var ctx1=canvas1.getContext('2d')
var canvas2=document.getElementById('canvas2')
var ctx2=canvas2.getContext('2d')

function gene(){
nombrec=document.getElementById('nombrecomp').value
nombrec2=document.getElementById('nombrecomp2').value
cargotb=document.getElementById('cargotrab').value
cargotb2=document.getElementById('cargotrab2').value
ungest=document.getElementById('unigest').value
ungest2=document.getElementById('unigest2').value
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

ctx1.clearRect(0,0,412,652)

youfbg=document.getElementById('uploadFBg')
ctx1.drawImage(youfbg,0,0,412,652)

youphot=document.getElementById('uploadPF')
ctx1.drawImage(youphot,86,136,240,260)

ctx1.font='bold 24px Arial'
ctx1.fillStyle='#1b5322'
ctx1.textAlign='center'
ctx1.fillText(nombrec,206,420)

ctx1.font='bold 24px Arial'
ctx1.fillStyle='#1b5322'
ctx1.textAlign='center'
ctx1.fillText(nombrec2,206,440)

ctx1.font='22px Arial'
ctx1.fillStyle='#1b5322'
ctx1.textAlign='center'
ctx1.fillText(cargotb,206,460)

ctx1.font='22px Arial'
ctx1.fillStyle='#1b5322'
ctx1.textAlign='center'
ctx1.fillText(cargotb2,206,480)

ctx1.font='bold 22px Arial'
ctx1.fillStyle='#1b5322'
ctx1.textAlign='center'
ctx1.fillText(ungest,206,505)

ctx1.font='bold 22px Arial'
ctx1.fillStyle='#1b5322'
ctx1.textAlign='center'
ctx1.fillText(ungest2,206,525)

ctx1.font='18px Arial'
ctx1.fillStyle='#1b5322'
ctx1.textAlign='start'
ctx1.fillText('Cedula: '+ idcd,15,545)

ctx1.font='18px Arial'
ctx1.fillStyle='#1b5322'
ctx1.textAlign='start'
ctx1.fillText('S. Social: '+ segsc,210,545)

ctx1.font='18px Arial'
ctx1.fillStyle='#1b5322'
ctx1.textAlign='start'
ctx1.fillText('No. Empleado: '+ empno,15,560)

ctx1.font='18px Arial'
ctx1.fillStyle='#1b5322'
ctx1.textAlign='start'
ctx1.fillText('Tipaje: '+ tipsa,210,560)

init()

savepdf()
}

function init(){
canvas2=document.getElementById('canvas2')
ctx2=canvas2.getContext('2d')
ctx2.mozImageSmoothingEnabled = false;
ctx2.webkitImageSmoothingEnabled = false;
ctx2.msImageSmoothingEnabled = false;
ctx2.imageSmoothingEnabled = false;

ctx2.clearRect(0,0,412,652)

youbbg=document.getElementById('uploadBBg')
ctx2.drawImage(youbbg,0,0,412,652)
}

init()

function first(){
window.location.reload(true);
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