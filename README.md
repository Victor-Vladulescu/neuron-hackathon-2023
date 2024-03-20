## Context behind repository
This repository contains team Neuron's project submitted to [Hack4Arad](https://hack4arad.uav.ro/), the 2nd edition hackathon event organized by Aurel Vlaicu University in December 2023.  
The project is a prototype for a Public Transport Tracking app, which would have two types of users:

1. **Passengers**  
   Anyone would be able to view the live map through their browsers, or by downloading the mobile app. Passengers would be able to create an account and buy tickets for buses and trams. 

2. **Tram / Bus drivers**   
   Drivers would download the mobile application and send their device's geolocation to the server via their internet connection. The location of their phone would coincide with the location of their vehicle.

## Proof of running instance and app download
Here is a link to the website passengers could use:  
https://uav-easy-exams.xyz/

We have hosted our web server and API on a Linode instance and it is not certain that it will still be available in the future. We've repurposed an old domain for this, that's why it references exams instead of public transport. 

The mobile app isn't signed and it isn't on any mobile app store. Here's a video recording of it in action:  
https://www.youtube.com/watch?v=Iq6bZaiueJA

You can either download the **driver_app.apk** file from the repository, or use Apache Cordova to build the app yourself.

## Technologies Used
* The API is written in Python using the [Flask](https://flask.palletsprojects.com/en/3.0.x/) framework. 
* Our choice for a database was [PostgreSQL](https://www.postgresql.org/).
* For the web app we used HTML, CSS, JavaScript and the [Leaflet](https://leafletjs.com/) library for interactive maps.
* The mobile app was created through [Apache Cordova](https://cordova.apache.org/), by converting a modified version of the web app.


## Folder Structure
* backend - where the Python code for the API resides, with an SQL folder containing queries to recreate the database tables
* browser - contains:
  * the passengers app (user-app) which is used by the web server
  * the drivers app (vatman-app) which is then copied into the **mobile** folder due to Apache Cordova not being compatible with the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) addon in VSCode
* mobile - this folder contains the Apache Cordova project which can be transformed from a web app to an Android APK file with a single command in the terminal
