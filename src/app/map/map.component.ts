     import { Component, OnInit,NgModule } from '@angular/core';
     import Map from 'ol/Map.js';
     import View from 'ol/View.js';
     import ImageLayer from 'ol/layer/Image.js';
     import Projection from 'ol/proj/Projection.js';
     import { getCenter } from 'ol/extent.js'; 
     import Static from 'ol/source/ImageStatic.js';
    

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var extent = [0, 0, 1024, 968];
    var projection = new Projection({
      // code: 'xkcd-image',
      // units: 'pixels',
      extent: [0, 0, 1024, 968],
    });
    
    let images=['DJI_0040.JPG','DJI_0041.JPG','DJI_0042.JPG','DJI_0043.JPG'];
  //let images= ["https://s3aws.blob.core.windows.net/uploads/dev-site/19/DJI_0040.JPG","https://s3aws.blob.core.windows.net/uploads/dev-site/19/DJI_0041.JPG","https://s3aws.blob.core.windows.net/uploads/dev-site/19/DJI_0042.JPG","https://s3aws.blob.core.windows.net/uploads/dev-site/19/DJI_0040.JPG"]
  
  
  for(let image in images) 
  {
  var map = new Map({
      layers: [
        new ImageLayer({
          source: new Static ({        
            url:  `https://s3aws.blob.core.windows.net/uploads/dev-site/19/${images[image]}`,
            imageExtent:[0, 0, 1024, 968],
            projection:projection
          })
        })
      ],
      target: 'map',
      view: new View({
        projection: projection,
        center: getCenter(extent),
        zoom: 2,
        maxZoom: 8
      })
    });

  }
  {
    for(let image in images) 
  {
  var map = new Map({
      layers: [
        new ImageLayer({
          source: new Static ({        
            url:  `https://s3aws.blob.core.windows.net/uploads/dev-site/19/${images[image]}`,
            imageExtent:[0, 0, 1024, 968],
            projection:projection
          })
        })
      ],
      target: 'map',
      view: new View({
        projection: projection,
        center: getCenter(extent),
        zoom: 2,
        maxZoom: 8
      })
    });

  }
  }

  }
}