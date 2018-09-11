
// Set the configuration for your app
// TODO: Replace with your project's config object

// Get a reference to the database service
var database = firebase.database();

var blogs = [];
//submit
//document.getElementById("text-body").onclick = function

var post = firebase.database().ref('users/');

post.on('value', function(snapshot) {
  //console.log(snapshot.val());
  removePosts()
  if(snapshot.val()){
  Object.values(snapshot.val()).forEach(blogPost)
 }
});

var title = document.getElementById('post-title');

var body = document.getElementById('post-body');

//create userId



//writeUserData
function writeData() {
  firebase.database().ref('users/').push({
    title: document.getElementById('text-title').value,
    body: document.getElementById('text-body').value
  });
}

//readUserData
function blogPost(post) {


 var placeholder = document.getElementById('placeholder');
 
 var newTitle = document.createElement('h2');

   newTitle.appendChild(document.createTextNode(post.title));

 var newBody = document.createElement('p');

   newBody.append(document.createTextNode(post.body));
 
 var editBtn = document.createElement('button');

 var eText = document.createTextNode('edit');

 editBtn.appendChild(eText);
 editBtn.setAttribute('id', 'edit-button');
 editBtn.addEventListener("click", function(){console.log("this is the edit button for: ", post.title)});


 var deleteBtn = document.createElement('button');

 var dText = document.createTextNode('delete');

 deleteBtn.appendChild(dText);
 deleteBtn.setAttribute('id', 'delete-button');
 deleteBtn.addEventListener("click", function(){console.log("this is the delete button for:", post.title)})

   placeholder.append(newTitle);
   placeholder.append(newBody);
   placeholder.append(editBtn)
   placeholder.append(deleteBtn) 
}


//helper function of readUserData
function removePosts() {
  var myNode = document.getElementById("placeholder");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild)
  }
}


//Delete Posts
function deletePost() {
}



