var canvas1=document.getElementById('canvas1')
var ctx1=canvas1.getContext('2d')
var canvas2=document.getElementById('canvas2')
var ctx2=canvas2.getContext('2d')

function gene(){
nombrec=document.getElementById('nombrecomp').value
cargotb=document.getElementById('cargotrab').value
ungest=document.getElementById('unigest').value
idnum=document.getElementById('idnumb').value

canvas1=document.getElementById('canvas1')
ctx1=canvas1.getContext('2d')
ctx1.clearRect(0,0,206,326)

youfbg=document.getElementById('uploadFBg')
ctx1.drawImage(youfbg,0,0,206,326)

youphot=document.getElementById('uploadPreview')
ctx1.drawImage(youphot,63,65,80,80)

ctx1.font='bold 13px Noto Sans'
ctx1.fillStyle='#ffffff'
ctx1.textAlign='center'
ctx1.fillText(nombrec,103,210)

ctx1.font='11px Noto Sans'
ctx1.fillStyle='#ffffff'
ctx1.textAlign='center'
ctx1.fillText(cargotb,103,225)

ctx1.font='11px Noto Sans'
ctx1.fillStyle='#ffffff'
ctx1.textAlign='center'
ctx1.fillText(ungest,103,240)

init()
}

function init(){
canvas2=document.getElementById('canvas2')
ctx2=canvas2.getContext('2d')
ctx2.clearRect(0,0,206,326)
youbbg=document.getElementById('uploadBBg')
ctx2.drawImage(youbbg,0,0,206,326)

ctx2.font='14px Noto Sans'
ctx2.fillStyle='#ffffff'
ctx2.textAlign='center'
ctx2.fillText('IDENTIFICACION',103,220)

ctx2.font='20px Noto Sans'
ctx2.fillStyle='#ffffff'
ctx2.textAlign='center'
ctx2.fillText(idnum,103,240)
}

init()

function first(){
ctx1.clearRect(0,0,206,326)
ctx2.clearRect(0,0,206,326)
ctx1.font='20px Noto Sans'
ctx1.fillStyle='#ffffff'
ctx1.textAlign ='center'
ctx1.fillText('Completar Datos',103,160)
}

first()

function PreviewImage() {
        var prr = new FileReader();
        prr.readAsDataURL(document.getElementById("imagefile").files[0]);

        prr.onload = function (ev) {
            document.getElementById("uploadPreview").src = ev.target.result;
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
doc.addImage(frontal,'png',0,0);
doc.addPage();
doc.addImage(posterior,'png',0,0);

doc.save('carnet_usuario.pdf')
}