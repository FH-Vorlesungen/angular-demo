import {OAuth2Server} from 'oauth2-mock-server';

const server = new OAuth2Server();

// Generate a new RSA key and add it to the keystore
server.issuer.keys.generate('RS256').then((issuer: any) => {
  console.log(issuer)
// Start the server
  server.start(8081, 'localhost').then((start: any) => {
    console.log(start)
    console.log('Issuer URL:', server.issuer.url);
  });
});
