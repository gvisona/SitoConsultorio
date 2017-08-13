function init_map() {
    var myOptions = { zoom: 15, center: new google.maps.LatLng(45.6473287, 11.298686599999996), mapTypeId: google.maps.MapTypeId.ROADMAP };
    map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
    marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(
            45.6473287,
            11.298686599999996
        )
    });
    infowindow = new google.maps.InfoWindow({
        content: "<strong>Consultorio La Famiglia</strong><br>via Galliano 10, Valdagno<br>"
    });
    google.maps.event.addListener(
        marker,
        "click",
        function() {
            infowindow.open(map, marker);
        }
    );
    infowindow.open(map, marker);
}
google.maps.event.addDomListener(window, "load", init_map);