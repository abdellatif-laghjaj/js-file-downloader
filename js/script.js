const input = document.querySelector('input');
const downloadButton = document.querySelector('button');

downloadButton.addEventListener('click', () => {
    if(checkFile(input.value !== '')){
        downloadFile(input.value);
    }else{
        alert('Please enter a link');
    }
});


//download file
function downloadFile(url){
    fetch(url).then(res => {
        if(res.ok){
            res.blob()
        }else{
            alert('file does not exist');
        }
    })
    .then(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'myFile';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    })
}