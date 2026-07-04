function getUsers(){
    fetch("https://randomuser.me/api/?results=5")
  .then(function (rawdata) {
    return rawdata.json();
  })
  .then(function (data) {
    document.querySelector(".users").innerHTML  = "";
    data.results.forEach(function (user) {
      const card = document.createElement("div");
      card.className =
        "bg-white rounded-2xl shadow-lg w-64 p-6 flex flex-col items-center gap-4";

      const img = document.createElement("img");
      img.src = user.picture.medium;
      img.alt = "Profile";
      img.className = "w-24 h-24 rounded-full object-cover";

      const name = document.createElement("h2");
      name.className = "text-lg font-bold text-gray-800";
      name.textContent = user.name.first + " " + user.name.last;

      const age = document.createElement("p");
      age.className = "text-sm text-gray-500";
      age.textContent = `age : ${user.dob.age}`;

      const email = document.createElement("p");
      email.className = "text-sm text-gray-500";
      email.textContent = user.email;

      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(age);
      card.appendChild(email);

      document.querySelector(".card").appendChild(card);
    });
  });

}

getUsers();

document.querySelector("#reloadBtn").addEventListener("click", function () {
    getUsers();
})