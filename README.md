# Memories Backend Setup

In this backend setup the backend has been built using Node JS and Express JS. MongoDB database has been used for express js to interact with it. User Authentication has been performed and routing has been set by giving particular api endpoints.

## Cloning:
<ul>
  <li>Go to https://github.com/raveesh-gowda/memories-backend</li>
  <li>Copy the backend url from code dropdown and paste it on the visual studio code terminal and hit enter.</li>
  <li>After the completion of the cloning install the packages by running the command `npm install`. All the necessary packages will be installed.</li>
  <li>Then start the backend by entering `node app.js` in the terminal</li>
</ul>

## API Testing Using Postman:

### For User Authentication:
1, When user details were passed as raw json data in the postman the recieved response included encrypted user password as shown below. POST HTTP method to be used.
![registerUser](https://user-images.githubusercontent.com/103234442/168008366-7e2279fe-cb72-4b4a-8301-1795cec46ef4.PNG)

2, After registration logging of user api was tested, the returned response was a cryptographic algorithm which is nothing but JWT(JSON Web Token).
![loginUser](https://user-images.githubusercontent.com/103234442/168008708-42c0e3b4-c8b5-48d1-9406-0f86240978d3.PNG)

3, In order to get the account information of a user use GET HTTP method pass JWT as Authorization Token value in the postman and returned reponse will be same as below.
![getUser](https://user-images.githubusercontent.com/103234442/168009260-6a469220-e4bb-428f-b17d-be91d496734c.PNG)

### Testing for Posts API Endpoints
NOTE - **Pass Authorization token value**

1, Initial GET HTTP method for the posts, it returns empty array.
![firstGetPosts](https://user-images.githubusercontent.com/103234442/168013759-b02e67c7-3760-4f9d-97a7-621510575005.PNG)

2, Creation of post using POST method, The returned response will have unique id for this particular post.
![postPosts](https://user-images.githubusercontent.com/103234442/168013992-e658e540-ccea-427f-8acc-e3d8687d52f6.PNG)

3, The below image is for getting the post using the post id as the api end point.
![getPostId](https://user-images.githubusercontent.com/103234442/168014137-de30fcbc-27a0-45fd-820e-d82a98cf8f80.PNG)

4, The updation of the post is done by PUT method and the response recieved will be updated post data.
![putPost](https://user-images.githubusercontent.com/103234442/168014272-cad8a7c6-83ef-4bf6-87db-0b8f8ba9f1cc.PNG)

5, Finally the deletion of the post which is done using DELETE method. The response recieved will the whole post which is deleted.
![deletePost](https://user-images.githubusercontent.com/103234442/168014486-55a9c483-c3aa-44cd-ac9b-3d57ede82ce2.PNG)

## Packages Used:

1, <a href="https://nodemon.io/" target="_blank"> Nodemon </a> - Nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

2, <a href="https://expressjs.com/" target="_blank"> Express </a> - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

3, <a href="https://mongoosejs.com/" target="_blank"> Mongoose </a> - Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.

4, <a href="https://www.npmjs.com/package/validator" target="_blank"> Validator </a> - A package used to check whether the email id provided by the user is valid or in valid. Example: validator.isEmail('foo@bar.com') returns true.

5, <a href="https://www.npmjs.com/package/bcryptjs" target="_blank"> Bcryptjs </a> - This module enables storing of passwords as hashed passwords instead of plaintext.

6, <a href="https://www.npmjs.com/package/jsonwebtoken" target="_blank"> JSON WEB TOKEN </a> - JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims.

7, <a href="https://www.npmjs.com/package/jsonwebtoken" target="_blank"> CORS </a> - Cross-Origin Resource Sharing (CORS). It allows you to make requests from one website to another website in the browser, which is normally prohibited by another browser policy called the Same-Origin Policy (SOP).
