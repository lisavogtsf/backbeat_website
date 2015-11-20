#Backbeat Networks new website mockup

A project to update the Backbeat Networks website in keeping with the provided specs and infographics.

To view the website, download all files locally.
Using Terminal, go to the directory where you put all the files and type:
`python -mSimpleHTTPServer`  
Open your browser and go to this URL:
`http://localhost:8000/app/` 
OR 
`http://localhost:8000/app/#/` if you have any trouble


##Locations of text and data
About page:

* The company description which appears on about.html (company) is stored on the about.html template under id="company-text"
* COMPANY and INDIVIDUALS captions for the sidebar images are written into the about.html template
* "Please Choose" text is written on the about.html template
* Individuals names and haikus are stored in assets/individuals.json with their portraits in assets/, indexed by lower-case name/id. (ABOUT_btn_sm_john_on.png, ABOUT_btn_sm_john_off.png, ABOUT_port_john.png)

Contact page:

* postcard front taglines are image files in assets (contact_tagline_1.png), with text versions of the taglines stored in the controllers.js file under ContactCtrl to create a text alt atribute and allow randomization.
* postcard back closings are also image files in assets (contact_closing_1.png), which also have text versions in the controllers.js file under ContactCtrl.
* at the moment data written on the postcard for Backbeat is stored in the $scope.postcard object in the ContactCtrl in controllers.js

All pages:

* the text that goes in the title tab is stored in the 
controllers.js file, in the TitleCtrl
* code for the shared social media menu is there too

##Angular Seed
This mockup is based on the Angular seed project, available at [https://github.com/angular/angular-seed](https://github.com/angular/angular-seed)

* The mockup site does not use Bower or Node
* It requires a server of some kind, a python simple server will suffice, with directions above. 

---

Lisa Vogt

lisa@backbeat.net

2014
