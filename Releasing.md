## Releasing NPM Version

1 You will need to have an npm user account to release the package
1 Ensure that the package.json contains the correct version number
1 Ensure all changes merged and tested on `master`
1 Tag the build on `git tag -a vx.x.x -m "release note"` 
1 Push tag to GitHub `git push origin --tags`
1 `npm publish .`
1 Increase the version for development and commit the changes
