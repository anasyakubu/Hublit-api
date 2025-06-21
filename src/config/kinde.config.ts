import dotenv from "dotenv";

dotenv.config(); // to access all .env files

const APP_URL = process.env.LOCAL_APP_URL;

const Kinde = {
  clientId: process.env.KINDE_CLIENT_ID!,
  domain: process.env.KINDE_DOMAIN!,
  clientSecret: process.env.KINDE_CLIENT_SECRET!,
  redirectUri: APP_URL
}

export default Kinde;