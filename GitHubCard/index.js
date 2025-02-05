import axios from "axios";
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

const deck = document.querySelector(".cards");

function cardMaker({
  avatarUrl,
  name,
  login,
  location,
  url,
  followers,
  following,
  bio,
}) {
  // create the elements
  const card = document.createElement("div");
  const avatar = document.createElement("img");
  const userInfo = document.createElement("div");
  const header = document.createElement("h3");
  const username = document.createElement("p");
  const userLocation = document.createElement("p");
  const profile = document.createElement("p");
  const userUrl = document.createElement("a");
  const userFollowers = document.createElement("p");
  const userFollowing = document.createElement("p");
  const userBio = document.createElement("p");

  // assign context to elements
  avatar.src = avatarUrl;
  header.textContent = name;
  username.textContent = login;
  userLocation.textContent = location;
  profile.textContent = "Profile:";
  userUrl.textContent = url;
  userFollowers.textContent = followers;
  userFollowing.textContent = following;
  userBio.textContent = bio;

  // add class names
  card.classList.add("card");
  userInfo.classList.add("card-info");
  header.classList.add("name");
  username.classList.add("username");

  // create hierarchy
  card.appendChild(avatar);
  card.appendChild(userInfo);
  userInfo.appendChild(header);
  userInfo.appendChild(username);
  userInfo.appendChild(userLocation);
  userInfo.appendChild(profile);
  profile.appendChild(userUrl);
  userInfo.appendChild(userFollowers);
  userInfo.appendChild(userFollowing);
  userInfo.appendChild(userBio);

  console.log(card);
  return card;
}

followersArray.forEach((user) => {
  axios
    .get(`https://api.github.com/users/${user}`)
    .then((response) => {
      deck.appendChild(cardMaker(response.data));
    })
    .catch((error) => {
      console.log("Error:", error);
    });
});

// axios
//   .get("https://api.github.com/users/whitney-higgins")
//   .then((response) => {
//     let card = cardMaker(response.data);
//     deck.appendChild(card);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });
