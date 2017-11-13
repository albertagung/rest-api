# rest-api
REST API, documentation with markdown, securing API with JWT

My App Name
Demo app with basic REST API

REST API
List of basic routes:

||______ROUTES_______||_______HTTP_______||______________________________Description________________________||
|| /api/signup       ||       Post       ||  Sign Up with new user info                                     ||
|| /api/signin       ||       POST       ||  Sign In while get an access token while based on credentials   ||
|| /api/users        ||       GET        ||  Get all the users                                              ||
|| /api/users/:id    ||       GET        ||  Get a single users                                             ||
|| /api/users        ||       POST       ||  Create a user                                                  ||
|| /api/users/:id    ||       DELETE     ||  Delete a user                                                  ||
|| /api/users/:id    ||       PUT        ||  Update a user with new info                                    ||

USAGE
with only NPM:
--> npm install
--> npm start
--> npm run dev

ACCESS
accsess the api via http://localhost:3000/api
