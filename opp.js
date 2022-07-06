var abroadProgram = [
  {
    id: 1,
    image:
      "https://s.abcnews.com/images/US/ucla-campus-gty-jc-200421_hpMain_2_16x9_992.jpg",
    heading: "Colleges Abroad",
    link: "hello",
  },
  {
    id: 2,
    image:
      "https://www.nwmissouri.edu/media/news/2020/04/images/200424SafestCollegeCampusmap.jpg",
    heading: "Countries",
    link: "hello1",
  },
  {
    id: 3,
    image:
      "https://cdn.unischolarz.com/blog/wp-content/uploads/2021/03/15164311/sch.jpg",
    heading: "Scholarships",
    link: "hello3",
  },
  {
    id: 4,
    image:
      "https://yt3.ggpht.com/ytc/AKedOLTHh6PM-4-qTnoMXd3M6cTOx52vTcRVZG8ndunMTA=s900-c-k-c0x00ffffff-no-rj",
    heading: "Application Process",
    link: "hello4",
  },
];

var grid = document.querySelector(".grid");
var lines = "";

function line(image, desc_heading, desc_link) {
  return ` <div class="col1">
          <img id="img_style" src="${image}" alt="" />
          <h3 class="desc_heading">${desc_heading}</h3>

          <h5 class="desc_footer"><a href="">Click to know more</a></h5>
        </div>`;
}

for (var i = 0; i < abroadProgram.length; i++) {
  var head = line(
    abroadProgram[i].image,
    abroadProgram[i].heading,
    abroadProgram[i].link
  );
  lines += head;
}

grid.innerHTML = lines;
