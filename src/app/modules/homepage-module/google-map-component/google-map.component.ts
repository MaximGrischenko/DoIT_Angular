import { Component, OnInit, NgZone, ViewChild } from "@angular/core";

declare const google: any;

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css'],
})

export class GoogleMapComponent implements OnInit {
  @ViewChild('googleMaps') googleMaps;
  services = ['airport', 'bank', 'bus_station', 'cafe', 'car_wash', 'doctor',
             'gas_station', 'hospital', 'library', 'movie_theater', 'museum', 'park', 'parking',
             'pharmacy', 'police', 'post_office', 'restaurant', 'store', 'subway_station',
             'supermarket', 'train_station'];
  currentLocation: any;
  selectedLocation: any;
  title: string = '';
  counter: number = 0;
  map: any;
  infoWindow: any;
  service: any;
  selectedService: string = '';
  isOptionsShown: boolean = false;
  isPopupHidden: boolean = true;
  isMarkersShown: boolean = false;
  pixel: {
    x: number;
    y: number;
  };

  constructor(private zone: NgZone){}

  ngOnInit() {
    this.map = new google.maps.Map(this.googleMaps.nativeElement, {
      zoom: 12
    });

    this.infoWindow = new google.maps.InfoWindow();
    this.service = new google.maps.places.PlacesService(this.map);

    /* NOT WORK https://developers.google.com/maps/documentation/javascript/importing_data

// Create a <script> tag and set the USGS URL as the source.
let script = document.createElement('script');
// This example uses a local copy of the GeoJSON stored at
// http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
document.getElementsByTagName('head')[0].appendChild(script);
  window.eqfeed_callback = function(results) {
    for (let i = 0; i < results.features.length; i++) {
      let coords = results.features[i].geometry.coordinates;
      let latLng = new google.maps.LatLng(coords[1], coords[0]);
      let marker = new google.maps.Marker({
      position: latLng,
      map: this.map
    });
  }
};

*/
    google.maps.event.addListener(this.map, 'click', (e) => this.zone.run(() => this.updateLocation(e)));
    google.maps.event.addListener(this.map, 'center_changed', () => this.zone.run(() => this.hidePopupHandler()));
    this.initPosition();
  }

  onShowOptions() {
    this.isOptionsShown = !this.isOptionsShown;
  }

  onSelectOption(service) {
    this.selectedService = service;
    this.getCurrentPosition();
    this.service.nearbySearch({
      location: this.currentLocation,
      radius: 500,
      type: service
    }, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          this.createMarker(results[i]);
        }
      }
    });
  }

  onConfirm() {
    this.counter++;
    switch (this.counter) {
      case 1: {
        break;
      }
      case 2: {
        if(this.title) {
          const marker = new google.maps.Marker({
            position: this.selectedLocation,
            map: this.map,
            title: this.title
          });

          this.isPopupHidden = true;
          this.counter = 0;
          this.title = '';
        }
        break;
      }
    }
  }

  onReject() {
    this.isPopupHidden = true;
    this.counter = 0;
  }

  hidePopupHandler() {
    this.isPopupHidden = true;
    this.counter = 0;
    this.isOptionsShown = false;
  }

  getCurrentPosition() {
    this.initPosition();
  }

  toogleMarkers() {
    this.isMarkersShown = !this.isMarkersShown;
    if(this.isMarkersShown) {
      this.showSavedMarkers();
    } else {
    }
  }

  showSavedMarkers() {
  }

  saveMarkers() {
  }

  private createMarker(place) {
    const placeLoc = place.geometry.location;
    const marker = new google.maps.Marker({
      map: this.map,
      position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', () => this.zone.run(() => {
      this.infoWindow.setContent(place.name);
      this.infoWindow.open(this.map, marker);
    }))
  }

  private initPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.showPosition(position);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
      const position = {
        coords: {
          latitude: 46.47747,
          longitude: 30.73262
        }
      };
      this.showPosition(position);
    }
  }

  showPosition(position) {
    this.currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    this.map.panTo(this.currentLocation);

    const marker = new google.maps.Marker({
      position: this.currentLocation,
      map: this.map,
      title: 'Current Location'
    });
  }

  private updateLocation(event) {
    this.selectedLocation = event.latLng;
    this.pixel = event.pixel;
    this.isPopupHidden = false;
    this.counter = 0;
    this.isOptionsShown = false;
  }
}
