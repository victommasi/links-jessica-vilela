(function(){
  $('#submit-form').click((e) => {
    const email = $('#input-email').val();
    const name = $('#input-name').val();
    let regex = new RegExp(/^[a-z0-9\.\-\_]+@[a-z0-9]+[-]*[a-z0-9]*\.[a-z]+(\.[a-z]+)?$/gm);

    if (regex.test(email)) {
      $(e.target).text("Carregando...").attr("disabled", true)
      $.ajax({
        url: 'https://us-central1-links-1c9cc.cloudfunctions.net/addLead',
        dataType: 'json',
        contentType: "application/json",
        type: 'POST',
        data: JSON.stringify({ name, email }),
        success: downloadFile,
      });
    } else {  
      $('#alert-validation').fadeIn()
    } 

  })

  const downloadFile = () => {
    $('#modalEbook').modal('hide');
    var file_path = 'files/receitas_lanches_sobremesas_jessica_vilela.pdf';
    var a = document.createElement('a');
    a.href = file_path;
    a.download = file_path.substr(file_path.lastIndexOf('/') + 1);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  $('#modalEbook').on('hide.bs.modal', () => {
    $('#alert-validation').fadeOut()
    $('#submit-form').text("Download").attr("disabled", false)
    $('#input-email').val('')
    $('#input-name').val('')
  })
}());