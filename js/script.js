const input = document.querySelector('input');
const downloadButton = document.querySelector('button');

downloadButton.addEventListener('click', () => {
        if(input.value){
            downloadFile(input.value);
        }else{
            alert('Please enter a valid URL');
        }
});


//download file
function downloadFile(url){
    fetch(url).then(res => res.blob())
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