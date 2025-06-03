#!bash
# builds the project
ng build --output-path=dist
# host on github pages
npx angular-cli-ghpages -d "dist/browser"