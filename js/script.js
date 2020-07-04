(function(){
  $('#submit-email').click((e) => {
    const email = $('#input-email').val();
    let regex = new RegExp(/^[a-z0-9\.\-\_]+@[a-z0-9]+[-]*[a-z0-9]*\.[a-z]+(\.[a-z]+)?$/gm);

    if (regex.test(email)) {
      $('#modalEbook').modal('hide');
      $('#ebook-download-target').click();
      downloadFile()
    } else {  
      $('#alert-validation').fadeIn()
    } 

  })

  const downloadFile = () => {
    var file_path = 'images/ebook-2.png';
    var a = document.createElement('a');
    a.href = file_path;
    a.download = file_path.substr(file_path.lastIndexOf('/') + 1);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  $('#modalEbook').on('hide.bs.modal', () => {
    $('#alert-validation').fadeOut()
    $('#input-email').val('')
  })
}());