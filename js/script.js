const input = document.querySelector('input');
const downloadButton = document.querySelector('button');
const errors = document.querySelector('.errors-section');

downloadButton.addEventListener('click', () => {
    downloadButton.innerHTML = 'Downloading...';
    downloadFile(input.value);
});


//download file
function downloadFile(url) {
    fetch(url).then(res => res.blob())
        .then(blob => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = url.replace(/^.*[\\\/]/, '');
            document.body.appendChild(a);
            a.click();
            a.remove();
            URL.revokeObjectURL(url);
            downloadButton.innerHTML = 'download';
        })
        .catch(err => {
            errors.innerHTML = `
            <div class="alert alert-error shadow-lg">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>${err}</span>
            </div>
          </div>
            `
        });
}