document.addEventListener("DOMContentLoaded", function () {
    const path = window.location.pathname;
    const depth = path.split('/').length - 2;
    let relativePath = '';
    for (let i = 0; i < depth; i++) {
      relativePath += '../';
    }
  
    const footerPath = relativePath + 'components/footer.html';
  
    fetch(footerPath)
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
      })
      .catch(error => console.error('failed', error));
  });
  