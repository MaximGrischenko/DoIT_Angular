import {Component, OnInit, EventEmitter} from "@angular/core";

declare const google: any;

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css'],
})

export class GoogleMapComponent implements OnInit {
  ODESSA = {lat: 46.47747, lng: 30.73262};
  map: any;
  marker: any;

  ngOnInit() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: this.ODESSA,
      zoom: 10
    });
    this.marker = new google.maps.Marker({
      title: 'We are here',
      position: this.ODESSA,
      map: this.map
    });
    this.map.addListener('click', function(event, map) {
      console.log(event.latLng, map);
     // this.addMarker(event.LatLng);
    });
  }

  addMarker(location) {
    console.log(location);
    this.marker = new google.maps.Marker({
      position: location,
      map: this.map
    });
  }
}
