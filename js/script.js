const input = document.querySelector('input');
const downloadButton = document.querySelector('button');

downloadButton.addEventListener('click', () => {
    if(checkFile(input.value)){
        downloadFile(input.value);
    }
});


//download file
function downloadFile(url){
    fetch(url).then(res => res.blob())
    .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'file.txt';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    })
}

//check if file exists
function checkFile(url){
    var isvalid = false;
    fetch(url).then(res => {
        if(res.ok && url != ''){
            alert('File exists');
            isvalid = true;
        }else{
            alert('file does not exist');
            isvalid = false;
        }
    })
}