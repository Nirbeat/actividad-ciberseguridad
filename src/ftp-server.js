// import FtpServer from "ftp-srv";

// // Levanta el servidor en el puerto 21
// export const ftpServer = new FtpServer({
//   url: 'ftp://0.0.0.0:21',
//   anonymous: false
// });

// ftpServer.on('login', ({username, password}, resolve, reject) => {
//   if (username === 'cad' && password === '261') {
//     // Carpeta limitada para este usuario
//     resolve({root: './mensajes bonitos'});
//   } else {
//     reject(new Error('Credenciales inválidas'));
//   }
// });

// ftpServer.listen()
//   .then(() => console.log('Servidor FTP corriendo en puerto 21'));