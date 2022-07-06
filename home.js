//View all popular categories

const button = document.querySelector(".view-all");
const button1 = document.querySelector(".view-all1");

function toggler() {
  var toggle = document.querySelector(".product");
  toggle.classList.toggle("opacity");
}

function colleges() {
  var toggler = document.querySelector(".products");
  toggler.classList.toggle("opacity1");
}

//hamburger menu media query navbar
const bar = document.querySelector("#bar");
const close = document.querySelector("#close");
const nav = document.querySelector("#navbar");
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("loading");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("loading");
  });
}

//feature section in home page
var ourFeatures = [
  {
    id: 2,
    img: "https://img.icons8.com/office/100/000000/chat.png",
    head: "24X7 Service",
  },
  {
    id: 2,
    img: "https://img.icons8.com/color/100/000000/computer-support.png",
    head: "Admission Applications",
  },
  {
    id: 3,
    img: "https://img.icons8.com/bubbles/100/000000/list.png",
    head: "List of Schools/Colleges",
  },
  {
    id: 4,
    img: "https://img.icons8.com/external-flat-02-chattapat-/100/000000/external-college-back-to-school-flat-02-chattapat-.png",
    head: "College Review",
  },
  {
    id: 5,
    img: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/100/000000/external-college-american-football-flaticons-lineal-color-flat-icons.png",
    head: "College Comparisons",
  },
  {
    id: 6,
    img: "https://img.icons8.com/external-phatplus-lineal-color-phatplus/100/000000/external-world-aerospace-phatplus-lineal-color-phatplus.png",
    head: "Worldwide",
  },
];

var homeFeature = document.querySelector("#feature");
var lines = "";

function line(fe_image, fe_head) {
  return `<div class="fe-box">
        <img src="${fe_image}" />
        <h6>${fe_head}</h6>
      </div>`;
}

for (var i = 0; i < ourFeatures.length; i++) {
  var fe_loop = line(ourFeatures[i].img, ourFeatures[i].head);
  lines += fe_loop;
}

homeFeature.innerHTML = lines;

//Indian Colleges in the home section
var Indiancolleges = [
  {
    id: 1,
    img: "https://img.icons8.com/bubbles/100/000000/kolkata.png",
    city: "Kolkata",
  },
  {
    id: 2,
    img: "https://img.icons8.com/bubbles/100/000000/new-delhi.png",
    city: "Delhi",
  },
  {
    id: 1,
    img: "https://img.icons8.com/bubbles/100/000000/chennai.png",
    city: "Chennai",
  },
  {
    id: 1,
    img: "https://img.icons8.com/bubbles/100/000000/mumbai.png",
    city: "Mumbai",
  },
  {
    id: 1,
    img: "https://img.icons8.com/external-sbts2018-flat-sbts2018/100/000000/external-hyderabad-charminar-monuments-sbts2018-flat-sbts2018.png",
    city: "Hydrabad",
  },
];

var popularColleges = document.querySelector("#india-colleges");
var indiaLines = "";

function india(in_img, in_city) {
  return `<div class="pro">
          <img src="${in_img}" />
          <div class="des">
            <h5>${in_city}</h5>
          </div>
        </div>`;
}

for (var j = 0; j < Indiancolleges.length; j++) {
  var indiaLine = india(Indiancolleges[j].img, Indiancolleges[j].city);
  indiaLines += indiaLine;
}

popularColleges.innerHTML = indiaLines;

//Colleges abroad section in home page

var CollegesAbroad = [
  {
    id: 1,
    img: "https://img.icons8.com/office/100/000000/usa.png",
    city: "USA",
  },
  {
    id: 2,
    img: "https://img.icons8.com/office/100/000000/germany.png",
    city: "Germany",
  },
  {
    id: 3,
    img: "https://img.icons8.com/office/100/000000/italy.png",
    city: "Italy",
  },
  {
    id: 4,
    img: "https://img.icons8.com/office/100/000000/canada.png",
    city: "Canada",
  },
  {
    id: 1,
    img: "https://img.icons8.com/office/100/000000/ireland.png",
    city: "Ireland",
  },
];

var popularColleges1 = document.querySelector("#colleges-abroad");
var abroadLines = "";

function abroad(in_img, in_city) {
  return `<div class="pro">
          <img src="${in_img}" />
          <div class="des">
            <h5>${in_city}</h5>
          </div>
        </div>`;
}

for (var k = 0; k < Indiancolleges.length; k++) {
  var abroadLine = abroad(CollegesAbroad[k].img, CollegesAbroad[k].city);
  abroadLines += abroadLine;
}

popularColleges1.innerHTML = abroadLines;

//popular categories section

var Categories = [
  {
    id: 1,
    img: "https://img.icons8.com/doodle/100/000000/media.png",
    title: "Media",
  },
  {
    id: 2,
    img: "https://img.icons8.com/office/100/000000/equity-security.png",
    title: "Buisness",
  },
  {
    id: 3,
    img: "https://img.icons8.com/office/100/000000/manager.png",
    title: "HR",
  },
  {
    id: 4,
    img: "https://img.icons8.com/external-victoruler-linear-colour-victoruler/100/000000/external-doctor-medical-staff-characters-victoruler-linear-colour-victoruler-3.png",
    title: "Medical",
  },
  {
    id: 1,
    img: "https://img.icons8.com/color/100/000000/engineer.png",
    title: "Engineering",
  },
];
var popularCategories = document.querySelector("#popular-categories");
var popCat = "";

function category(image, title) {
  return `   <div class="pro" id="pro">
          <img src="${image}" />
          <div class="des">
            <h5>${title}</h5>
          </div>
        </div>`;
}

for (var l = 0; l < Indiancolleges.length; l++) {
  var popularCat = category(Categories[l].img, Categories[l].title);
  popCat += popularCat;
}

popularCategories.innerHTML = popCat;

//view all popular categories
var viewAllCategories = [
  {
    id: 1,
    img: "https://img.icons8.com/office/100/000000/money-bag-euro.png",
    title: "Financce",
  },
  {
    id: 2,
    img: "https://img.icons8.com/office/100/000000/ingredients-list.png",
    title: "Content-writing",
  },
  {
    id: 3,
    img: "https://img.icons8.com/office/100/000000/system-information.png",
    title: "Information Technology",
  },
  {
    id: 4,
    img: "https://img.icons8.com/office/100/000000/adobe-indesign.png",
    title: "Graphic Designer",
  },
  {
    id: 1,
    img: "https://img.icons8.com/office/100/000000/data-encryption.png",
    title: "Data Science",
  },
];
var viewCategories = document.querySelector("#view-all-categories");
var viewpopCat = "";

function viewAllcategory(image, title) {
  return `   <div class="pro" id="pro">
          <img src="${image}" />
          <div class="des">
            <h5>${title}</h5>
          </div>
        </div>`;
}

for (var m = 0; m < viewAllCategories.length; m++) {
  var viewCat = viewAllcategory(
    viewAllCategories[m].img,
    viewAllCategories[m].title
  );
  viewpopCat += viewCat;
}

viewCategories.innerHTML = viewpopCat;

//features college section in home page

var feCollege = [
  {
    id: 1,
    img: "https://cdn.britannica.com/69/141169-050-CD5892EB/Baker-Library-Harvard-Business-School-Boston-University.jpg",
    title: "Harvard University",
  },
  {
    id: 2,
    img: "https://news.stanford.edu/wp-content/uploads/2020/08/20200713_Stanford_empty_campus-32-scaled.jpg",
    title: "Stanford University",
  },
  {
    id: 3,
    img: "https://indiaeducationdiary.in/wp-content/uploads/2020/08/vlcsnap-2020-08-17-13h19m10s372.jpg",
    title: "University of Toronto",
  },
  {
    id: 4,
    img: "https://assets.telegraphindia.com/telegraph/2021/Feb/1612984933_nit-durgapur.jpg",
    title: "NIT Durgapur",
  },
  {
    id: 1,
    img: "https://bsmedia.business-standard.com/_media/bs/img/article/2020-04/01/full/1585722527-5871.png",
    title: "IIT Guwahati",
  },
];
var featuredCollege = document.querySelector("#fe-college");
var feclg = "";

function featuredcollege(image, title) {
  return `   <div class="pro">
          <img
            class="pro1"
            src="${image}"
          />
          <div class="des">
            <h5>${title}</h5>
          </div>
        </div>`;
}

for (var n = 0; n < feCollege.length; n++) {
  var viewCat = featuredcollege(feCollege[n].img, feCollege[n].title);
  feclg += viewCat;
}

featuredCollege.innerHTML = feclg;

//view all college section in home page

var viewfeCollege = [
  {
    id: 1,
    img: "https://www.mbarendezvous.com/images/top-stories-img/bannerimage_1518439506.jpg",
    title: "Manav Rachna International Institute of research and Studies",
  },
  {
    id: 2,
    img: "https://images.collegedunia.com/public/college_data/images/appImage/14751_RAIT.jpg?mode=stretch",
    title: "Ramrao Adik Institute of Technology",
  },
  {
    id: 3,
    img: "https://images.shiksha.com/mediadata/images/articles/1584528545phpdljDz1.jpeg",
    title: "Vellore Institute of Technology",
  },
];

var viewCollege = document.querySelector("#view-all-college");
var viewpopColl = "";

function viewAllCollege(image, title) {
  return ` <div class="pro">
          <img
            class="pro1"
            src="${image}"
          />
          <div class="des">
            <h5>
              ${title}
            </h5>
          </div>
        </div>`;
}

for (var o = 0; o < viewfeCollege.length; o++) {
  var viewCat = viewAllCollege(viewfeCollege[o].img, viewfeCollege[o].title);
  viewpopColl += viewCat;
}

viewCollege.innerHTML = viewpopColl;


