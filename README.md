Azure Source Control deployment process would involve below steps

1. Moves content to azure web app
2. Creates default deployment script, if there is no .deployment file in web app root folder
3. Run’s deployment script. In case of a nodejs app it would do `npm install` here

At Step 2, Instead of deployment process creating a default script. We can include custom deployment script and change it’s content to 

1. Install modules listed in  package.json file.
2. Install modules listed in bower.json file
3. Install modules listed in composer.json file
4. Run Gulp Tasks
5. Run Grunt Tasks
6. Unzip files

More Info @ http://techiecouple.azurewebsites.net/azure-custom-deployment/
