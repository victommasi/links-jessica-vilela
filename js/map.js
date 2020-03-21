function brownieChicMap() {
  var coco = {lat: -3.756944, lng: -38.482891};

  var lojas = [
    ['Bondi Beach', -3.741147, -38.471755],
    ['Coogee Beach', -3.784980, -38.480496]
  ];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: coco
  });

  setMarkers(map);

  function setMarkers(map) {
    lojas.forEach(lojaParams => {
      var marker = new google.maps.Marker({
        position: {lat: lojaParams[1], lng: lojaParams[2]},
        map: map,
        title: lojaParams[0]
      });
    })
  }
}