# Sending emails with gmail and nodemailer made simple
### minecraftub

## What is minecraftub_email_sender?
minecraftub_email_sender is a utility I have written to make sending emails with gmail and nodemailer easy.

## How do I use minecraftub_email_sender?
 - First make sure you have a google account with which you want to send emails with code
 - Log into that google account
 - Go to `https://console.cloud.google.com/`
 - Click `select project`
 - Click `new project`
 - In Project name put in the name you want
 - Click `Create`
 - Follow the rest on `https://docs.emailengine.app/setting-up-gmail-oauth2-for-imap-api/?utm_source=nodemailer&utm_campaign=nodemailer&utm_medium=oauth-link`
 - Once you have created your OAuth Client ID download the Id and the secret and replace `auth/credentials.json` with the file you downloaded
 - run `npx run reAuth`