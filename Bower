Bower

package manager based on nodejs

pre-requisites
	http://nodejs.org/download/
	for windows additionally need http://msysgit.github.io/
		while installation of msysgit select "Run Git from the Windows Command Prompt" on "Adjusting your Path environment" screen

install bower using npm [node-package-manager] globally using -g
	npm install bower -g

from the project directory install/uninstall client side lib
	bower install lodash
	bower uninstall lodash

install specific version of library [library#version_number]
	boser install lodash#2.2.1
bower info lodash [to check different version of lodash]

updating install packages
	bower update [updates all installed packages]
	bower install lodash [to update specific package]

bower list [to see list of install packages]

bower search lodash [search bower directory, aslo can search @bower.io/search]


bower init [to create bower.json file]


to set custom location for bower packages
	create a .bowerrc file [content of the file is in JSON format specifying intallation directory instead of the usual "bower_components" directory]
	{
		"directory" : "js/lib"
	}

bower install package_name --save
	will install package and add it as bower.json dependency
bower install package_name --save--dev
	will install package and add it as bower.json dev dependency
 
 bower unisntall also works the same way as above

bower cache list [list cached packages]
bower cache clean

bower install package_name --o [install cached package]

bower install "local_path/url" [to install files/packages locally/web]

bower install io_=lodash [creates a folder io_ with lodash package installed]

bower help <command>

bower lookup package [to see package url]

bower prune [uninstalled dependency that are installed but are not in bower.json]

bower install package_name -j > output.json
	to output json from the install command for logging purpose


package create
	create bower.json file using init
	create script file ex rotate.js

	adding package to github
		create repo on github

	git inti
	touch README.md
	touch .gitignore

	go to .gitignore file and add ".idea" line
	go to README.md and add simple text content

	git commit -m "checkin description"
	git remote add origin "repo_url"
	git push -u origin master

	bower work of tag , each tag you create is a release for bower
	git tag "text" [use version number as in bower.json]
	git push --tags

	register with bower
	bower register "package_name" "url" [ex: git//github.com/username/reponame.git]

	to cnsume the above create bower package
	create .bowerrc file
	bower install "package_name"

	you can update the package and push changes to git repo
	but these changes would only be availble with a "push --tags"
	and to get the latest package the project has to "bower update"











