import React from 'react';

import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import 'ol/ol.css';
import { get as getProjection } from 'ol/proj';
import OSM from 'ol/source/OSM';

import s from './s.module.scss';
export const MapView = () => {
  React.useEffect(() => {
    const raster = new TileLayer({
      source: new OSM(),
    });

    const extent = getProjection('EPSG:3857')!.getExtent().slice();
    extent[0] += extent[0];
    extent[2] += extent[2];

    const map = new Map({
      target: 'map',
      layers: [raster],
      view: new View({
        center: [11000000, 8600000],
        zoom: 3,
        extent,
      }),
    });

    return () => {
      map.setTarget(undefined);
    };
  }, []);

  return (
    <div className={s.mapContainer}>
      <div id="map" className={s.map} />
    </div>
  );
};
