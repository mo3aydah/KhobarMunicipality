var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var imageWidth = 1080;
var imageHeight = 1920;

var imageObj = new Image(imageWidth,imageHeight);

imageObj.onload = function()
{
    context.drawImage(imageObj, 0, 0);
}

function DownloadCanvasAsImage(){
    let imageName = "moa3aydah.png";
    let downloadLink = document.createElement('a');
    downloadLink.setAttribute('download', imageName);
    let canvas = document.getElementById('myCanvas');
    canvas.toBlob(function(blob) {
    let url = URL.createObjectURL(blob);
    downloadLink.setAttribute('href', url);
    downloadLink.click();
    });
}

imageObj.src = "assets/images/eid-card.png"; 

var downloadCardButton = document.getElementById('downloadCard');
downloadCardButton.addEventListener('click', function(e){
    // clear canvas from text and draw image Regards,
    context.clearRect(0, 0, imageWidth, imageHeight);
    context.drawImage(imageObj, 0, 0);

    var text = document.getElementById('name').value;

    // custom font
    context.textAlign = 'center';
    context.font = "40pt GESS";

    // text color
    context.fillStyle = '#FFFFFF';

    // center and make text
    textWidth = (imageWidth - imageWidth / 1.94)
    textHeight = (imageHeight - 470)
    
    context.fillText(text, textWidth, textHeight);

    e.preventDefault();
    document.getElementById('name').value = "";

    // download the image
    DownloadCanvasAsImage();
});


