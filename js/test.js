let watches = {
  products: [
    {
      name: "Freemium",
      description: "Plan info <ul><li>Free voting</li> <li>$1 per song</li></ul> ",
      img: "photo-1569926426428-471bfd09906a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80",
    },
    {
      name: "JukeboxHero",
      description: "Plan info <ul><li>Priority voting</li><li>$5 a month</li><li>$50 a year</li></ul>",
      img: "photo-1550871645-95ffeae86cb8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80",
    },
    {
      name: "Vendor",
      description:
        " Plan Info <ul> <li>Now free to try in Logan, UT</li><li>Pricing varies on location</li></ul> ",
      img: "photo-1548696060-8fae845c6452?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80",
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
