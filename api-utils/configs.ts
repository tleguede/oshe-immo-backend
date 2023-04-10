import * as fb from 'firebase-admin' ;
// import serviceAccount from './oshe-2c590-firebase-adminsdk-kpzkq-1e177ab329.json';
import cors from 'cors';

export const corsHandler = cors({ origin: true })
var admin;
try {
   admin = fb.initializeApp({
    // @ts-ignore
    credential: fb.credential.cert({
       // @ts-ignore
      "type": "service_account",
      "project_id": "oshe-2c590",
      "private_key_id": "1e177ab3297c9e14a98ec46d4fe8f7ef23662d43",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC6IM2SVDpBr6KN\n1C22JaEfhp3hZjoTaHGMMGwe47OGBviG4OSzsIlaNe+8ggo1GX6uN28zE85VouI0\n1RX2c6IC/PSpXTnutSwwbBXcTSMKUm0uf/X3bJLHNYBU6Nc1BBR4cvWpPkrXgDgE\n6diCvt4MoOvpd31/xmT1Ik/i5TfyaE7oIk03L4mYgC+bLmIXapmWddIJ7WrTxmOR\n5nKohn/EjicwGsbSGQ5h8AnMtA3EOP8C6jkN2tEbP0YatlrgWQOVGsJYB3TcgXow\nf0/hwvgHDZvUcykdv7yfDvoqNqUjflZqsIWMud0s9BF2FtfsxilwW8Gtkg/MMmJs\n1DdUJp2RAgMBAAECggEAN9KRxRLE3CF4f9AEm64CemmN3WWjAmIfN/vn2YXSOF7L\n1+wIO4o1T5yAl8lqlU1drJOMosWMayusa0sDSMSacQn7uPXwY5Lru2QXVFjAKx7Y\nhwsysm/aP6vgntasgMaF+zADVKyNlr9qTbLy0Be9kg0LZByFw7Y1Xj3ZtsOneWhi\nOpPQ+IAwyg20mL0ny2Oek2a89pM9HyFFnp9Ogd8vrOPM76YYybA0hIzCvs1gNSQE\nYYjxbTLaaIpBkOHqEfRfr/bQH/VCXcGlmAzXxqfVHkNEW9GWQWf/kg7F400d7PLy\n14QBNw0j2Sa1k5ewuiCxAlCGJYTerFNcgmweRg8TjwKBgQD5DG/t7i41s+b+IoJw\nVgwyQPpAouGAYVQfrRc5DcqAHcLCfssIsAeDXJzf/ViUc2YXU/FmQLBv7NOS3G/7\nz7fTr2jWVdABt8JTkFmqNncGjl+kNnryk5XP7LNiSU4HUMfmgHV/Ynen5WN+KPIx\njocHs6gcGuFPowKXs9dxh3SzTwKBgQC/UsVwcMyJSHgaWphcoEMSkJBD8v2RImMY\nWSgqpMYL2rdj5GzTr0Wk7e30LMeEZ94UYeIXBxFxb+YA/y2/22mzmFLqJ9oZntmI\nnJXx/5G7CpsWPiFyeKfezIuWtJSKmSqNSrXcNNfBRJaC86zrX51/ddD6ZLvbnsN1\nISKIwI7pHwKBgQCXMgjFzuK48aYbxQGhh2vSGoaTNQ9n7C6xKFk/5vJ4QxkZEPbc\nKFn3UwNeLKVZQpHJOcoFBOLYoFN2BmPp4Ro95nDkJqaoVFIifzEgV/58uXSw8e5E\nVHsQByiEU/KOGGmzs2sh0brI8EctsVgP4/JwJ464uUzuFw2c4a67GrwrmwKBgQCz\nzEB6E7dUCIO+GId4/K8rwimhgbij7RH9bsQdly37M/cGbEONh/jGL0dhIbf6iXYd\n54MGqwDMfyFCrIy88aDbQ3ogTYVccHj0Nlt/yfKVOTlX5Nmf7x2rdsRzw46Y1ao0\nkBJqOErOePuNYxyNMhUcFIdo2MPmd8Qtzg7bP0LOdwKBgQDicJApDkM3tdSvw4TO\ndY9Gln1vKZNlSGOWSjYl8fO/MLT1pf6pZpkn7bz1KpcVoHRuf4AQcl+MPQxKJaQG\nIQBRdDRnQSSMM6KgYNPeLGMrgfGTxeAKzrX9wi51u1FW8WZSY95MsDVoVmi7BgLu\ntwTJniSOY+rHK4GMBudzXtaAxw==\n-----END PRIVATE KEY-----\n",
      "client_email": "firebase-adminsdk-kpzkq@oshe-2c590.iam.gserviceaccount.com",
      "client_id": "106693485037775189511",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://oauth2.googleapis.com/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-kpzkq%40oshe-2c590.iam.gserviceaccount.com"
    })
  });
  
} catch (error) {
  console.log(error);
}

export const auth = admin.auth();
export const firestore = admin.firestore();
export const messaging = admin.messaging();

export const userCollection = firestore.collection('users');
export const notificationCollection = firestore.collection('notifications');
export const referenceCollection = firestore.collection('references');
export const userIndexCollection = firestore.collection('user_indexes');