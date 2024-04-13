folllowing library will be required-express.js (npm install express)

the schema that i have used is -
"id":integer 
"createdby":"string"
"date":"string"
"title":date
"body":"string"

overview of api:
1) GET: fetches all blog data and returns it to client
2)GET(blogs/:id) : fetches blog for given id , then returns the blog data corresponding to it
3)POST: creates a new blog from the request, and returns id
4) PUT: overrides all the content for the given id (for selective overriding we can use PATCH) by taking id and updating the blog. Returns success message
5) DELETE : takes id and deletes the entire blog corresponding to it. Returns success message.

In the code, I have used hashmap instead of database as code pushed to github can be tested by anyone as DB connection is not required and it is good for basic demonstrations.
