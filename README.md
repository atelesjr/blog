# blog
A simple  React-Native blog (Hooks)

To install dependencies: npm i 


To start development: npm start
*** Windows10 - there's is an issue running expo-cli wiht NODE > 10.12v. This is the workaround:

\node_modules\metro-config\src\defaults\blacklist.js

This variable...

var sharedBlacklist = [
  /node_modules[/\\]react[/\\]dist[/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];

change to:

var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];


Hope it works like worked for me :)