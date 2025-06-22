import dotenv from "dotenv";
const { setupKinde, protectRoute, getUser, GrantType } = require("@kinde-oss/kinde-node-express");


dotenv.config(); // to access all .env files

const APP_URL = process.env.LOCAL_APP_URL;

const Kinde = {
  clientId: process.env.KINDE_CLIENT_ID,
  issuerBaseUrl: "https://hublit.kinde.com",
  siteUrl: "http://localhost:5173",
  secret: process.env.KINDE_CLIENT_SECRET,
  redirectUrl: "http://localhost:5173",
  scope: "openid profile email",
  grantType: GrantType.AUTHORIZATION_CODE, //or CLIENT_CREDENTIALS or PKCE
  unAuthorisedUrl: "http://localhost:5173/unauthorised",
  postLogoutRedirectUrl: "http://localhost:5173/kinde_callback"
}

export default Kinde;
