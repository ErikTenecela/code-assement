# code-assement
<h1>Routes)</h1>
<p>The application currently is not fully finished due to some family issues, but what is done is the create,read, and delete routes. (Ex: 
GET: /api/students, POST: /api/students, DELETE: /api/students/:id)
Futhermore, the data is being store in MongoDB also more in the backend I added some authentication the routes as follows GET: /api/users
POST: /api/users the two are the register and sign in page. It's also being protected in such in middleware auth protects the routes say
in such case a user doesn't have the token it would say token denied no authorization (401) the routes for protected are in implmented 
(GET: /api/auth/users) same with functionality if a user doesn't have a token they can't use the application (GET: /api/auth/students, 
POST: /api/auth/students, DELETE: /api/auth/student) these are the routes used with express, node js, and MongoDB.
All the routes were being tested on POSTMAN I used to test each route I was hitting this will tell you if your code is actually working 
or not.</p>

<br />

<h1>Instruction </h1>

<h4>To start it Type: Npm start </h4>
<p>Some short comings was the authentication which took most of my time also just setting up the redux is always time consunming. 
The redux store also holds the students functionality so I wouldn't had to deal with prop drilling an alternative would of been Context-api
this react component uses class components instead of hooks which in my opinion is a more cleaner version (hooks) I although am still learning
it but it is something I would've implement. I used axios to hit the routes in the backend and also added a proxy instead of typing the 
localhost port to make more cleaner. I left some comments on the backend routes to see what each route does.
</p> 

<h1> Reource </h1>
<ul> 
<li><a href="https://jwt.io/">JSONWEBTOKEN </a></li>
<li><a href="https://www.postman.com/">Postman </a></li>
<li><a href="https://redux.js.org/">Redux</a>
<li><a href="http://expressjs.com/">Express </a>
<li><a href="https://www.mongodb.com/">MongoDb</a>
</ul>
