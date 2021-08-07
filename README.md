NO LONGER SUPPORTED, sorry to dissapoint but the whole project was closed by me and is no longer supported. 
If you would like to clone and make this project live again then be sure to message me somehow, because I still should have a backup of the database that was used along with this project.

# inbundle.games
Check if game has ever been bundled (at humblebundle.com). With database with over 500 bundles and 4700 games for PCs, consoles and mobile phones this task is super easy and fast. 

## 🐞 Hey I found a bug!
Details about a game are wrong? Or maybe you're 100% sure that this game was bundled at somepoint but this site says otherwise? You can report this bugs and others here: [report new bug](https://github.com/datguysheepy/inbundle.games/issues/new).

## ⚙️ Technical side
**Frontend:** Created with React, hosted on Github Pages.
**Backend:** Built with Node.js and with PostgreSQL database - with everything hosted on Heroku.

## 🤝 Contribution:
### To work on inbundle.games locally you need to do couple of things:
**For frontend:**
* run `npm start` in root directory of project.
* now you can go to [http://localhost:3000](http://localhost:3000) to view it in the browser.
* and if you want to use this project as a template for your own thing, please change 'User-Agent' in every fetch that points to RAWG API to your own project name.

**For backend:**
* Create your own PostgreSQL database and import couple of things listed below.
* in terminal, where's backend stored:\
`export DB_USER=[database user]`\
`export DB_PWD=[password to database]`\
`export DB_HOST=[host, if local then localhost]`\
`export DB_NAME=[name of database]`
* and finally run `npm start` in backend folder.
* You can if it works by going to [http://localhost:8888/api/v1](http://localhost:8888/api/v1).
If "welcome to API! :)" is displayed then everything is as it should be.

## 📝 License 
inbundle.games is an open-source project licensed under the [MIT License](https://github.com/datguysheepy/inbundle.games/blob/master/LICENSE).
