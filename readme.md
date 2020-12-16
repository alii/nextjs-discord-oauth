# `next-discord-oauth`

### A simple guide to deploy Next.js with Discord OAuth to Vercel

## Setting up

1. Ensure you have `git`, `yarn`, `npm` & `node` installed
2. If you do not already have Vercel CLI, run `yarn global add vercel` (or, if using `npm`, you can run `npm i -g vercel`).
3. If you are not already logged in, run `vercel login` and finish that process.
4. Finally, fork this project and clone it with `git clone <github url of fork>`

## Discord Credentials

1. First things first, we will need some special keys from Discord. Head to [discord.com/developers](https://discord.com/developers/applications) and hit "New Application" in the top right.
2. Secondly, open the new application and copy the "Client ID" and "Client Secret" – we will need these later so keep them safe. It is important not to share the Client Secret with anybody, too.
3. Third, during development, you will need to make a file called `.env`. In here we will securely store our sensitive information in a manner that won't be commited (meaning _pushed_ to Git for all eyes to see).
4. In this file, you need to add the Client ID and Client Secret. Optionally, you can add the APP URI and JWT Secret but these are not important for development. You will get a warning in the console, though, if you do not change these values. The reason behind that is so that you do not forget to change them in production.
   1. The file should look something like this
   ```
   CLIENT_ID=999999999999999999
   CLIENT_SECRET=yDzjb6CEC7mfhCCGQmr8fKtxw_as9CG4
   ```
   2. If you want to rid of the error messages, you can add `JWT_SECRET` (which can be anything in **development** – this does matter in production, however) & `APP_URI` (which in most occasions should be `http://localhost:3000` unless you know what you are doing).

## Production Environment

1. Next up, head to [vercel.com](https://vercel.com/) and hit "Import Project"
2. Select "Import Git Repository"
3. Enter the URL of your fork, and hit continue
   1. We now need to set up your `.env` file, but on the production vercel deployment side.
4. When it loads, click on "Environment Variables" and one by one, add `CLIENT_ID`, `CLIENT_SECRET`, etc...
