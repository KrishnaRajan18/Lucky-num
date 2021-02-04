### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?
     - REST stands for Representational State Transfer and it is an architectural style that defines constraints that are intended to optimize a web service's performance, scalability, and modifiability.A RESTful route is a route that provides mapping between HTTP verbs (get, post, put, delete, patch) to controller CRUD actions (create, read, update, delete). Instead of relying solely on the URL to indicate what site to visit, a RESTful route also depends on the HTTP verb and the URL

- What is a resource?
  - The fundamental concept in any RESTful API is the resource. A resource is an object with a type, associated data, relationships to other resources, and a set of methods that operate on it. It is similar to an object instance in an object-oriented programming language, with the important difference that only a few standard methods are defined for the resource (corresponding to the standard HTTP GET, POST, PUT and DELETE methods), while an object instance typically has many methods.

- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?

   -  A post request is made each time a user revisit the route or refreshes the page which would rersult in creating a new user ech time.
- What does idempotent mean? Which HTTP verbs are idempotent?
   - An HTTP method is idempotent if an identical request can be made once or several times in a row with the same effect while leaving the server in the same state. In other words, an idempotent method should not have any side-effects (except for keeping statistics). Implemented correctly, the GET, HEAD, PUT, and DELETE methods are idempotent, but not the POST method.

- What is the difference between PUT and PATCH?
   - PUT and PATCH are the HTTP verbs for updating resources. PUT is used for updating the entire resource; if the resource doesn't exist yet, PUT will create it, and if the resource does already exist, PUT will overwrite whatever is already there. Because of this, you need to send all of the necessary information for the resource; if you only send the information for one attribute, it will overwrite the resource to only have that attribute. PATCH, on the other hand, is used to make a partial update to a resource that already exists, so if you send the information for one attribute, only that attribute will be updated and the rest of the resource will remain unchanged.
- What is one way encryption?
   - One-way encryption or one-way hash function is a function that turns a set of characters into a hashed set of new characters, designed in a manner that is hard to reverse the process.Two exactly similar values should have the same output.

- What is the purpose of a `salt` when hashing a password?
   -  A cryptographic salt is made up of random bits added to each password instance before its hashing. Salts create unique passwords even in the instance of two users choosing the same passwords

- What is the purpose of the Bcrypt module?
   -  The bcrypt hashing function allows us to build a password security platform that scales with computation power and always hashes every password with a salt.It is a password hashing algorithm that allows you to choose how many rounds of encryption should be ran to encrypt passwords.

- What is the difference between authorization and authentication?
  -  Authentication and authorization might sound similar, but they are distinct security processes in the world of identity and access management (IAM). Authentication confirms that users are who they say they are. Authorization gives those users permission to access a resource.