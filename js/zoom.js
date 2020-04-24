$(document).ready(function () {
  var modal = $("#modal");
  var img = $("img[id^=zoomed-img]");
  var modalImg = $("#modal-img");
  var captionText = $("caption");
  var span = $("#close-modal");

  img.click(function() {
    modal.show()
    modalImg.attr("src", this.src);
    // captionText.innerHTML = this.alt;
  })

  modal.click(function() {
    modal.hide()
  })

  span.click(function() {
    modal.hide()
  })
})