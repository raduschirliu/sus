# sus
[![Netlify Status](https://api.netlify.com/api/v1/badges/2d7c9e4c-a103-4f81-bc7b-5cbd043da59c/deploy-status)](https://rs-sus.netlify.app/)  
Simple URL Shortner client built using React, Typescript, and MaterialUI.  
Demo can be found [here](https://rs-sus.netlify.app/).  

## Requirements
- NodeJS
- Depends on [the sus-server application](https://github.com/raduschirliu/sus-server)

## Running
To run the server, the following environment variables need to be set first:
```bash
REACT_APP_API_URL=https://xxxxxx
```
These can also be loaded from a `.env` file placed in the root directory.  

The client can then be started in development mode by running:
```bash
npm install
npm run start
```