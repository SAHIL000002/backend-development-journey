// REAL TIME SEARCH FILTER

const users = [
  {
    name: "emma Watson",
    image: "https://i.pravatar.cc/600?img=32",
    bio: "Frontend developer who loves creating beautiful and interactive web experiences."
  },
  {
    name: "emam Carter",
    image: "https://i.pravatar.cc/600?img=12",
    bio: "Passionate photographer and travel enthusiast exploring the world one city at a time."
  },
  {
    name: "sophia Miller",
    image: "https://i.pravatar.cc/600?img=47",
    bio: "UI/UX designer focused on clean interfaces and delightful user experiences."
  },
  {
    name: "noah Johnson",
    image: "https://i.pravatar.cc/600?img=68",
    bio: "Full-stack developer who enjoys building scalable web applications."
  },
  {
    name: "olivia Brown",
    image: "https://i.pravatar.cc/600?img=25",
    bio: "Content creator, coffee lover, and always looking for the next adventure."
  },
  {
    name: "james Wilson",
    image: "https://i.pravatar.cc/600?img=59",
    bio: "Software engineer passionate about JavaScript, React, and open-source projects."
  },
  {
    name: "ava Davis",
    image: "https://i.pravatar.cc/600?img=41",
    bio: "Digital artist who enjoys blending creativity with modern technology."
  }
];

function showUsers(arr) {
  arr.forEach(function (user) {
    const card = document.createElement("div");
    card.classList.add("card");

    const bgImg = document.createElement("img");
    bgImg.src = user.image;
    bgImg.classList.add("bg-img");


    const blurredLayer = document.createElement("div");
    blurredLayer.style.backgroundImage = `url(${user.image})`;
    blurredLayer.classList.add("blurred-layer");

    const content = document.createElement("div");
    content.classList.add("content");

    const heading = document.createElement("h3");
    heading.textContent = user.name;

    const paragraph = document.createElement("p");
    paragraph.textContent = user.bio;

    // Append elements
    content.appendChild(heading);
    content.appendChild(paragraph);

    card.appendChild(bgImg);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    // Add the card to the page
    document.querySelector(".cards").appendChild(card);
    // Or append it to a container:
    // document.querySelector(".container").appendChild(card);
  });
}
showUsers(users);

let input = document.querySelector(".inp");
input.addEventListener("input", function () {
  let newUser = users.filter(function (user) {
    return user.name.startsWith(input.value);
  })

  
  document.querySelector(".cards").innerHTML="";
  showUsers(newUser);

})



// sare users show karaana
// fiter krna hr baar input krne per
// show krna filtered users