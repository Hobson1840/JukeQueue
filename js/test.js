let watches = {
  products: [
    {
      name: "Freemium",
      description: "Free info",
      img: "photo-1550534791-2677533605ab?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "JukeboxHero",
      description: "Hero info",
      img: "photo-1563861826100-9cb868fdbe1c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    },
    {
      name: "Vendor",
      description:
        "Vendor info",
      img: "photo-1575203091586-611fe505bb0e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    }
  ],
  count: 8,
  pageNum: 2
};
const lis = watches.products.map(function (watch) {
  return ` <div class="col-lg-4 col-md-6 col-mb-4">
          <div class="card h-100">
            <img src="https://images.unsplash.com/${watch.img}" class="card-img-top" alt="bootstraplogo">
            <div class="card-body">
              <h5 class="card-title">${watch.name}</h5>
              <p class="card-text">${watch.description}</p>
              <a href="https://images.unsplash.com/${watch.img}" class="btn btn-primary">View Plan</a>
            </div>
          </div>
        </div>`}).join("\n\t")
// The ‘\n’ and ‘\t’ are escape sequences. The first creates a newline the second creates a tab.
const mydiv = document.createElement("div");
mydiv.innerHTML = `\n\t${lis}\n`;

document.getElementById("displaywatchesdiv").innerHTML = "";
document.getElementById("displaywatchesdiv").innerHTML = mydiv.innerHTML;
