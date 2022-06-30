export function obtenerLocalizacion(callback: Function) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const latitud = position.coords.latitude;
      const longitud = position.coords.longitude;
      callback(latitud, longitud);
    },
    (error) => {
      console.log(error);
    }
  );
}

//   const mostrarPosicion = (position) => {
//     x.innerHTML = `Latitud: ${position.coords.latitude}'<br>Longitud: ${position.coords.longitude}`;
//     console.log(`${position.coords.latitude}, ${position.coords.longitude}`);
//   }
//   const mostrarError = error => {
//     switch(error.code) {
//       case error.PERMISSION_DENIED:
//         x.innerHTML = 'El usuario ha denegado la petición de geolocalización';
//         break;
//       case error.POSITION_UNAVAILABLE:
//         x.innerHTML = 'Información de la ubicación no disponible';
//         break;
//       case error.TIMEOUT:
//         x.innerHTML = 'El tiempo previsto para obtener la geolocalización ha expirado';
//         break;
//       case error.UNKNOWN_ERROR:
//         x.innerHTML = 'Error desconocido';
//         break;
//     }
//   }
