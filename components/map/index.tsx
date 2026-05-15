"use client"
import { YMaps, Map, Placemark } from '@mr-igorinni/react-yandex-maps-fork';
import { FC } from 'react';
import s from './styles.module.css'

type Coordinates = [number, number];

export interface Point {
  coordinates: Coordinates;
}

interface YandexMapProps {
  center: Coordinates;
  zoom: number;
  points: Point[];
}

export const YandexMap:FC<YandexMapProps> = ({ center, zoom, points }) => {
  return (
    <YMaps>
      <Map
        defaultState={{ center, zoom }}
        className={s.map}
      >
        {points.map((point, idx) => (
          <Placemark
            key={idx}
            geometry={point.coordinates}
          />
        ))}
      </Map>
    </YMaps>
  );
}