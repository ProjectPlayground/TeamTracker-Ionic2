import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';

// GoogleMapsMarker
import { GoogleMap, GoogleMapsEvent, GoogleMapsLatLng, GoogleMapsMarkerOptions } from 'ionic-native';

@Component({
  selector: 'map-page',
  templateUrl: 'map.html'
})
export class PageMap {

  map: GoogleMap;
  markers: GoogleMapsMarkerOptions[];
  params1: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
    platform.ready().then(() => {
      this.loadMap();
    });

    // Set the members from the params
    this.params1 = this.navParams.get('members');
  }

  ionViewDidEnter() {

    this.params1 = this.navParams.get('members');


    // Add the marker after entering the view
    for (var index = 0; index < this.params1.length; index++) {

      let member = this.params1[index];
      this.addMarker(member);

    }
  }

  ionViewDidLeave() {
    // Clear the map after leaving the view.
    this.map.clear();
  }

  addMarker(member) {
    // let img = new Image();

    // img.src=;

    let markerOptions: GoogleMapsMarkerOptions = {
      position: new GoogleMapsLatLng(member.location.lat, member.location.lon),
      title: member.name,
      icon: { url: 'assets/icon/green.png' },
      snippet: 'Snippet :O'
    };

    this.map.addMarker(markerOptions);
  }
  loadMap() {

    let location = new GoogleMapsLatLng(42.6857, 23.3197);

    this.map = new GoogleMap('map', {
      'backgroundColor': 'white',
      'controls': {
        'compass': true,
        'myLocationButton': true,
        'indoorPicker': true,
        'zoom': true
      },
      'gestures': {
        'scroll': true,
        'tilt': true,
        'rotate': true,
        'zoom': true
      },
      'camera': {
        'latLng': location,
        'tilt': 30,
        'zoom': 8,
        'bearing': 50
      }
    });


    // this.markers = [];

    // for (let index = 0; index < 10; index++) {

    //   let markerOptions: GoogleMapsMarkerOptions = {
    //     position: new GoogleMapsLatLng(42.6857 + Math.random(), 23.3197 + Math.random()),
    //     title: `Task #${index}`
    //   };

    //   this.markers.push(markerOptions)

    // }




    this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {


      // for (let index = 0; index < this.markers.length; index++) {
      //   let currentMarker = this.markers[index];
      //   this.map.addMarker(currentMarker)
      //     .then((marker: GoogleMapsMarker) => {
      //       marker.showInfoWindow();
      //       marker.addEventListener(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      //         // alert(`Marker with index : ${index} clicked`);

      //       });
      //     });
      // }


      console.log('Map is ready!');
    });

  }
}