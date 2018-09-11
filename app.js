
// Set the configuration for your app
// TODO: Replace with your project's config object

// Get a reference to the database service
var database = firebase.database();

var blogs = [];

var post = firebase.database().ref('users/');
//console.log(post.key)

//database method which fetches data on update
post.on('value', function(snapshot) {
  //console.log(snapshot.val());
  removePosts()
  if(snapshot.val()){
  Object.values(snapshot.val()).forEach(blogPost)
 }
});

var title = document.getElementById('post-title');

var body = document.getElementById('post-body');

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
  editBtn.addEventListener("click", function(){editPost(post)});

  var deleteBtn = document.createElement('button');

  var dText = document.createTextNode('delete');

  deleteBtn.appendChild(dText);
  deleteBtn.setAttribute('id', 'delete-button');
  deleteBtn.addEventListener("click", function(){deletePost(post)})// not working

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
function deletePost(post) {
  //firebase.database().ref('users/').update(title, body);
  console.log(post)
  console.log("delete function press successful on ", post.title, "and body ", post.body)

}


function editPost(post) {
  console.log(post)
  console.log("edit function press successful on ", post.title, "and body ", post.body)
}

// function writeNewPost(uid, username, picture, title, body) {
//   // A post entry.
//   var postData = {
//     author: username,
//     uid: uid,
//     body: body,
//     title: title,
//     starCount: 0,
//     authorPic: picture
//   };

//   // Get a key for a new Post.
//   var newPostKey = firebase.database().ref().child('posts').push().key;

//   // Write the new post's data simultaneously in the posts list and the user's post list.
//   var updates = {};
//   updates['/posts/' + newPostKey] = postData;
//   updates['/user-posts/' + uid + '/' + newPostKey] = postData;

//   return firebase.database().ref().update(updates);
// }

