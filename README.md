# Train-Time

## Overview

This web application leverages the Firebase web development platform to collect and present train arrival and departure data. The application retrieves and manipulates this information using the javascript librayr, Moment.js. This web application provides up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.

## Specifications

When adding trains, administrators should be able to submit the following:
* Train Name
* Destination 
* First Train Time -- in military time
* Frequency -- in minutes

This application should calculate when the next train will arrive relative to the current time. Users from many different machines must be able to view the same train times. 

## Additional Specifications
* Update your "minutes to arrival" and "next train time" text once every minute. 
* Add update and remove buttons for each train. Let the user edit the row's elements-- allow them to change a train's Name, Destination and Arrival Time (and then, by relation, minutes to arrival).
* Make it so only users who log into the site with their Google or GitHub accounts can use your site. 