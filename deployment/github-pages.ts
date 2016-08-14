/*
	To deploy to github-pages with CLI:
	
	(Don't forget to set evnironment.production = true)
	Navigate to the project folder of the project and run the following command:
		
		git add -A .
		git commit 'ready for deployment'
		ng github-pages:deploy
	
	Go to https://github.com/settings/tokens and generate a new token
		- set a token description i.e. 'deploy'
		- check public_repo
		- generate token
		- copy token and paste to console
		- sign in and authorize account
*/

/*
	How to deploy to github-pages without the CLI:

	Create new repository called: <github_username>.github.io/<path-you-want-to-access-the-page-at>

	Copy the link to the repository

	In the master branch (root path) of the project, run:

		ng build -prod
	
	Remove the /dist line from the .gitignore file
		
		git add -A .
		git commit -m 'ready for deployment'
		
	To make sure you don't have any remote repository setup in the folder, run:

		git remote remove origin
		git remote

	To add a new remote, use the link we copied previously and do the following:

		git remote add origin https://github.com/<username>.github.io.git
	
	To push a subtree to this remote origin, run:

		git subtree push --prefix dist origin master
		
*/