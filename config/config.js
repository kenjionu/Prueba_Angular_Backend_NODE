/*puerto*/
process.env.PORT = process.env.PORT || 3000;


/*Entorno*/
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


/*bases de datos*/
let urlDB = "";

if (process.env.NODE_ENV === 'dev') {
    urlDB = "mongodb://localhost:27017/mediumNodeLogin";
} else {
    urlDB = "here write the mongo connection with mongo atlas and      other type of connection mode"
};
process.env.URLDB = urlDB;

/*Vencimiento del token*/
process.env.CADUCIDAD_TOKEN = '48h';

/*seed de autentificación*/
process.env.SEED_AUTENTICACION = process.env.SEED_AUTENTICACION ||  'este-es-el-seed-desarrollo';