# Coingroup Hazelcast Library

Con este repositorio se tiene una librería con funciones de CRUD para utilizarlo en otros proyectos relacionados. Se utiliza con datos en formato JSON.

## Instalación
```
npm install git+https://github.com/Mariosor12/Coingroup-hazelcast-library#main
```
## Importación de librería

import {*nombre*} from 'Coingroup-hazelcast-library'

## Contenido Librería

Se tienen 5 funciones que obtienen los diferentes niveles del JSON , en este caso se hizo énfasis en la temporalidad y su OHLC. A continuación se colocan las 5 funciones:

- GetLastDataCandle: TRAE EL ÚLTIMO DATO DE LA TEMPORALIDAD DE LA VELA SELECCIONADA
- GetOneDataCandle: TRAE EL DATO QUE DESEE DE LA TEMPORALIDAD DE LA VELA SELECCIONADA
- GetDataAttrCandle: TRAE EL DATO ESPECÍFICO QUE DESEE DE LA TEMPORALIDAD DE LA VELA SELECCIONADA
- GetLastDataAttrCandle: TRAE EL DATO ESPECÍFICO DE LA ÚLTIMA VELA QUE DESEE DE LA TEMPORALIDAD
- GetThreeLastDataCandle: TRAE LOS ÚLTIMOS 3 DATOS DE LA TEMPORALIDAD DE LA VELA SELECCIONADA
