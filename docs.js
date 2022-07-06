let school = document.querySelector("#school");
let bachelor = document.querySelector("#bachelor");
let masters = document.querySelector("#masters");
let phd = document.querySelector("#phd");

let fillup = document.querySelector(".fillup");
let para = document.querySelector(".para");
school.addEventListener("change", () => {
  para.innerHTML = schoolStudent();
  fillup.innerHTML = "";
});

bachelor.addEventListener("change", () => {
  para.innerHTML = bachelorStudent();
  fillup.innerHTML = "";
  $(".subject_preference").selectpicker();
  $(".multi_select").selectpicker();
  $(".selectpicker").selectpicker();
});

masters.addEventListener("change", () => {
  para.innerHTML = mastersStudent();
  fillup.innerHTML = "";
  $(".subject_preference").selectpicker();
  $(".multi_select").selectpicker();
  $(".selectpicker").selectpicker();
});

phd.addEventListener("change", () => {
  para.innerHTML = phdStudent();
  fillup.innerHTML = "";
  $(".subject_preference").selectpicker();
  $(".multi_select").selectpicker();
  $(".selectpicker").selectpicker();
});

//onchange function if selected class 8 in school

function uptoClassEight() {
  let uptoEight = `<h3 style="margin-top:20px;">Registrartion Form for Upto Class 8</h3>
              <form action="contact.html">
              <!--Current class-->
              <label for="class">Current class<span id="required">*</span></label>
              <select required id="class" class="custom-select custom-select-sm">
                <option value="">Select Current Class</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>

              <br />
              <!--Olympaids/Compitions participated in-->
              <label for="class" style="margin-top: 10px"
                >Olympaids/Talent Search participated in<span id="required">*</span></label
              >

              <div class="multi_select_box" id="multi_select_subject">
                <select required
                  style="max-height: 100px; overflow: scroll"
                  data-live-search="true"
                  class="subject_preference w-100"
                  name=""
                  id=""
                  multiple
                >
                  <option value="">Maths</option>
                  <option value="">Physics</option>
                  <option value="">Chemistry</option>
                  <option value="">Biology</option>
                  <option value="">Artificial Intelligence</option>
                  <option value="">Maths</option>
                  <option value="">Physics</option>
                  <option value="">Chemistry</option>
                  <option value="">Biology</option>
                  <option value="">Artificial Intelligence</option>
                  <option value="">Maths</option>
                  <option value="">Physics</option>
                  <option value="">Chemistry</option>
                  <option value="">Biology</option>
                  <option value="">Artificial Intelligence</option>
                  <option value="">Maths</option>
                  <option value="">Physics</option>
                  <option value="">Chemistry</option>
                  <option value="">Biology</option>
                  <option value="">Artificial Intelligence</option>
                  <option value="">Maths</option>
                  <option value="">Physics</option>
                  <option value="">Chemistry</option>
                  <option value="">Biology</option>
                  <option value="">Artificial Intelligence</option>
                  <option value="">Maths</option>
                  <option value="">Physics</option>
                  <option value="">Chemistry</option>
                  <option value="">Biology</option>
                  <option value="">Artificial Intelligence</option>
                  <option value="">Maths</option>
                  <option value="">Physics</option>
                  <option value="">Chemistry</option>
                  <option value="">Biology</option>
                  <option value="">Artificial Intelligence</option>
                  <option value="">Maths</option>
                  <option value="">Physics</option>
                  <option value="">Chemistry</option>
                  <option value="">Biology</option>
                  <option value="">Artificial Intelligence</option>
                </select>
              </div>

              <!--School Board-->
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputCity">School Board<span id="required">*</span></label>
                  <select required id="inputState" class="form-control">
                    <option value="">Choose...</option>
                    <option value="1">State Board</option>
                    <option value="2">ICSE</option>
                    <option value="3">CBSE</option>
                  </select>
                </div>
                <!--Subject preference-->
                <div class="form-group col-md-6">
                  <label for="inputCity">Subject Preference<span id="required">*</span></label>

                  <div class="multi_select_box">
                    <select required
                      data-live-search="true"
                      class="subject_preference w-100"
                      name=""
                      id=""
                      multiple
                    >
                      <option value="">Maths</option>
                      <option value="">Physics</option>
                      <option value="">Chemistry</option>
                      <option value="">Biology</option>
                      <option value="">Artificial Intelligence</option>
                      <option value="">Maths</option>
                      <option value="">Physics</option>
                      <option value="">Chemistry</option>
                      <option value="">Biology</option>
                      <option value="">Artificial Intelligence</option>
                    </select>
                  </div>
                </div>
              </div>
              <!--Olympaid interested in-->
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputCity">Olympaids/TSE interested in<span id="required">*</span></label>
                  <div class="multi_select_box" id="multi_select_subject">
                    <select required
                      data-live-search="true"
                      class="subject_preference w-100"
                      name=""
                      id=""
                      multiple
                    >
                      <option value="">
                        International Science Olympiad (ISO)
                      </option>
                      <option value="">
                        International Maths Olympiad (IMO)
                      </option>
                      <option value="">
                        English International Olympiad (EIO)y
                      </option>
                      <option value="">
                        General Knowledge International Olympiad (GKIO)
                      </option>
                      <option value="">
                        International Computer Olympiad (ICO)
                      </option>
                    </select>
                  </div>
                </div>
                 <!--Internships interested in-->
                <div class="form-group col-md-6">
                  <label for="inputCity">Internships interested in<span id="required">*</span></label>

                  <div class="multi_select_box" id="multi_select_subject">
                    <select required
                      class="multi_select w-100"
                      data-live-search="true"
                      name=""
                      id="select"
                      multiple
                    >
                      <option value="">Computer Vision</option>
                      <option value="">Artificial Inetlligence</option>
                      <option value="">Graphics</option>
                      <option value="">Deep Learning</option>
                      <option value="">Web Development</option>
                    </select>
                  </div>
                </div>
                  <div class="form-group col-md-6">
                  <label for="inputCity">Languages known<span id="required">*</span></label>
                  <div class="multi_select_box" id="multi_select_subject">
                    <select required
                      data-live-search="true"
                      class="subject_preference w-100"
                      name=""
                      id=""
                      multiple
                    >
                      <option value="">English</option>
                      <option value="">Bengali</option>
                      <option value="">Hindi</option>
                      <option value="">Gujrati</option>
                      <option value="">French</option>
                    </select>
                  </div>
                </div>
              </div>


              <div class="form-group">
                <div class="form-check">
                  <input required
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label" for="gridCheck">
                    I have correctly read the above fields and filled them up
                  </label>
                   <p>Please tick the checkbox and fill the above fields to proceed further or go back to your previous form</p>
                </div>
              </div>
               <a type="button" class="btn btn-primary" href='/student.html'>Back</a>
                <button type="submit" class="btn btn-primary">Next</button>
            </form>`;
  return uptoEight;
}

//onchange function if selected class 9-10 in school
function classTen() {
  let classten = `<h3 style="margin-top:20px;">Registration form from class 9-10</h3>
    <form action="oppurtunities.html">
                <!--Current class-->
                <label for="class">Current class</label>
                <select
                  required
                  id="class"
                  class="custom-select custom-select-sm"
                >
                  <option value="">Select Current Class</option>
                  <option value="6">9</option>
                  <option value="7">10</option>

                </select>

                <br />
                <!--Olympaids/Compitions participated in-->
                <label for="class" style="margin-top: 10px"
                  >Olympaids/Talent Search participated in</label
                >

                <div class="multi_select_box" id="multi_select_subject">
                  <select required
                    style="max-height: 100px; overflow: scroll"
                    data-live-search="true"
                    class="subject_preference w-100"
                    name=""
                    id=""
                    multiple
                  >
                    <option value="">Maths</option>
                    <option value="">Physics</option>
                    <option value="">Chemistry</option>
                    <option value="">Biology</option>
                    <option value="">Artificial Intelligence</option>
                    <option value="">Maths</option>
                    <option value="">Physics</option>
                    <option value="">Chemistry</option>
                    <option value="">Biology</option>
                    <option value="">Artificial Intelligence</option>
                    <option value="">Maths</option>
                    <option value="">Physics</option>
                    <option value="">Chemistry</option>
                    <option value="">Biology</option>
                    <option value="">Artificial Intelligence</option>
                    <option value="">Maths</option>
                    <option value="">Physics</option>
                    <option value="">Chemistry</option>
                    <option value="">Biology</option>
                    <option value="">Artificial Intelligence</option>
                    <option value="">Maths</option>
                    <option value="">Physics</option>
                    <option value="">Chemistry</option>
                    <option value="">Biology</option>
                    <option value="">Artificial Intelligence</option>
                    <option value="">Maths</option>
                    <option value="">Physics</option>
                    <option value="">Chemistry</option>
                    <option value="">Biology</option>
                    <option value="">Artificial Intelligence</option>
                    <option value="">Maths</option>
                    <option value="">Physics</option>
                    <option value="">Chemistry</option>
                    <option value="">Biology</option>
                    <option value="">Artificial Intelligence</option>
                    <option value="">Maths</option>
                    <option value="">Physics</option>
                    <option value="">Chemistry</option>
                    <option value="">Biology</option>
                    <option value="">Artificial Intelligence</option>
                  </select>
                </div>

                <!--School Board-->
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputCity">School Board</label>
                    <select required id="inputState" class="form-control">
                      <option value="">Choose...</option>
                      <option value="1">State Board</option>
                      <option value="2">ICSE</option>
                      <option value="3">CBSE</option>
                    </select>
                  </div>
                  <!--Subject preference-->
                  <div class="form-group col-md-6">
                    <label for="inputCity">Subject Preference</label>

                    <div class="multi_select_box">
                      <select required
                        data-live-search="true"
                        class="subject_preference w-100"
                        name=""
                        id=""
                        multiple
                      >
                        <option value="">Maths</option>
                        <option value="">Physics</option>
                        <option value="">Chemistry</option>
                        <option value="">Biology</option>
                        <option value="">Artificial Intelligence</option>
                        <option value="">Maths</option>
                        <option value="">Physics</option>
                        <option value="">Chemistry</option>
                        <option value="">Biology</option>
                        <option value="">Artificial Intelligence</option>
                      </select>
                    </div>
                  </div>
                </div>
                <!--Olympaid interested in-->
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputCity">Olympaids/TSE interested in</label>
                    <div class="multi_select_box" id="multi_select_subject">
                      <select required
                        data-live-search="true"
                        class="subject_preference w-100"
                        name=""
                        id=""
                        multiple
                      >
                      <option value="">
                          NA
                        </option>
                        <option value="">
                          International Science Olympiad (ISO)
                        </option>
                        <option value="">
                          International Maths Olympiad (IMO)
                        </option>
                        <option value="">
                          English International Olympiad (EIO)y
                        </option>
                        <option value="">
                          General Knowledge International Olympiad (GKIO)
                        </option>
                        <option value="">
                          International Computer Olympiad (ICO)
                        </option>
                      </select>
                    </div>
                  </div>
                  <!--Internships interested in-->
                  <div class="form-group col-md-6">
                    <label for="inputCity">Internships interested in</label>

                    <div class="multi_select_box" id="multi_select_subject">
                      <select required
                        class="multi_select w-100"
                        data-live-search="true"
                        name=""
                        id="select"
                        multiple
                      >
                        <option value="">Computer Vision</option>
                        <option value="">Artificial Inetlligence</option>
                        <option value="">Graphics</option>
                        <option value="">Deep Learning</option>
                        <option value="">Web Development</option>
                      </select>
                    </div>
                  </div>
                  <!--Languages known-->
                  <div class="form-group col-md-6">
                    <label for="inputCity">Languages known</label>
                    <div class="multi_select_box" id="multi_select_subject">
                      <select required
                        data-live-search="true"
                        class="subject_preference w-100"
                        name=""
                        id=""
                        multiple
                      >
                        <option value="">English</option>
                        <option value="">Bengali</option>
                        <option value="">Hindi</option>
                        <option value="">Gujrati</option>
                        <option value="">French</option>
                      </select>
                    </div>
                  </div>
                  <!--Current stream-->
                  <div class="form-group col-md-6">
                    <label for="inputCity">Current Stream</label>
                    <select required id="inputState" class="form-control">
                      <option value="">Choose...</option>
                      <option value="1">Science</option>
                      <option value="2">Commerce</option>
                      <option value="3">Humanities</option>
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <div class="form-check">
                    <input required
                      class="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label class="form-check-label" for="gridCheck">
                      I have correctly read the above fields and filled them up
                    </label>
                     <p>Please tick the checkbox and fill the above fields to proceed further or go back to your previous form</p>
                  </div>
                </div>
                 <a type="button" class="btn btn-primary" href='/student.html'>Back</a>
                <button type="submit" class="btn btn-primary">Next</button>
              </form>`;
  return classten;
}
//onchange function if selected class 11-12 in school
function classtwelve() {
  let classeleven = `<h3 style="margin-top:20px;">Registration form from class 11-12</h3>
    <form action="oppurtunities.html">
                <!--Current class-->
                <label for="class">Current class</label>
                <select
                  required
                  id="class"
                  class="custom-select custom-select-sm"
                >
                  <option value="">Select Current Class</option>
                  <option value="6">11</option>
                  <option value="7">12</option>

                </select>

                <br />
                <!--Olympaids/Compitions participated in-->
                <label for="class" style="margin-top: 10px"
                  >Olympaids/Talent Search participated in</label
                >

                <div class="multi_select_box" id="multi_select_subject">
                  <select required
                    style="max-height: 100px; overflow: scroll"
                    data-live-search="true"
                    class="subject_preference w-100"
                    name=""
                    id=""
                    multiple
                  >
                    <option value="">Maths</option>
                    <option value="">Physics</option>
                    <option value="">Chemistry</option>
                    <option value="">Biology</option>
                    <option value="">Artificial Intelligence</option>
                    <option value="">Maths</option>
                    <option value="">Physics</option>
                    <option value="">Chemistry</option>
                    <option value="">Biology</option>
                    <option value="">Artificial Intelligence</option>
                    <option value="">Maths</option>
                    <option value="">Physics</option>
                    <option value="">Chemistry</option>
                    <option value="">Biology</option>
                    <option value="">Artificial Intelligence</option>
                    <option value="">Maths</option>
                    <option value="">Physics</option>
                    <option value="">Chemistry</option>
                    <option value="">Biology</option>
                    <option value="">Artificial Intelligence</option>
                    <option value="">Maths</option>
                    <option value="">Physics</option>
                    <option value="">Chemistry</option>
                    <option value="">Biology</option>
                    <option value="">Artificial Intelligence</option>
                    <option value="">Maths</option>
                    <option value="">Physics</option>
                    <option value="">Chemistry</option>
                    <option value="">Biology</option>
                    <option value="">Artificial Intelligence</option>
                    <option value="">Maths</option>
                    <option value="">Physics</option>
                    <option value="">Chemistry</option>
                    <option value="">Biology</option>
                    <option value="">Artificial Intelligence</option>
                    <option value="">Maths</option>
                    <option value="">Physics</option>
                    <option value="">Chemistry</option>
                    <option value="">Biology</option>
                    <option value="">Artificial Intelligence</option>
                  </select>
                </div>

                <!--School Board-->
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputCity">School Board</label>
                    <select required id="inputState" class="form-control">
                      <option value="">Choose...</option>
                      <option value="1">State Board</option>
                      <option value="2">ICSE</option>
                      <option value="3">CBSE</option>
                    </select>
                  </div>
                  <!--Subject preference-->
                  <div class="form-group col-md-6">
                    <label for="inputCity">Subject Preference</label>

                    <div class="multi_select_box">
                      <select required
                        data-live-search="true"
                        class="subject_preference w-100"
                        name=""
                        id=""
                        multiple
                      >
                        <option value="">Maths</option>
                        <option value="">Physics</option>
                        <option value="">Chemistry</option>
                        <option value="">Biology</option>
                        <option value="">Artificial Intelligence</option>
                        <option value="">Maths</option>
                        <option value="">Physics</option>
                        <option value="">Chemistry</option>
                        <option value="">Biology</option>
                        <option value="">Artificial Intelligence</option>
                      </select>
                    </div>
                  </div>
                </div>
                <!--Olympaid interested in-->
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputCity">Olympaids/TSE interested in</label>
                    <div class="multi_select_box" id="multi_select_subject">
                      <select required
                        data-live-search="true"
                        class="subject_preference w-100"
                        name=""
                        id=""
                        multiple
                      >
                        <option value="">
                          International Science Olympiad (ISO)
                        </option>
                        <option value="">
                          International Maths Olympiad (IMO)
                        </option>
                        <option value="">
                          English International Olympiad (EIO)y
                        </option>
                        <option value="">
                          General Knowledge International Olympiad (GKIO)
                        </option>
                        <option value="">
                          International Computer Olympiad (ICO)
                        </option>
                      </select>
                    </div>
                  </div>
                  <!--Internships interested in-->
                  <div class="form-group col-md-6">
                    <label for="inputCity">Internships interested in</label>

                    <div class="multi_select_box" id="multi_select_subject">
                      <select required
                        class="multi_select w-100"
                        data-live-search="true"
                        name=""
                        id="select"
                        multiple
                      >
                        <option value="">Computer Vision</option>
                        <option value="">Artificial Inetlligence</option>
                        <option value="">Graphics</option>
                        <option value="">Deep Learning</option>
                        <option value="">Web Development</option>
                      </select>
                    </div>
                  </div>
                  <!--Languages known-->
                  <div class="form-group col-md-6">
                    <label for="inputCity">Languages known</label>
                    <div class="multi_select_box" id="multi_select_subject">
                      <select required
                        data-live-search="true"
                        class="subject_preference w-100"
                        name=""
                        id=""
                        multiple
                      >
                        <option value="">English</option>
                        <option value="">Bengali</option>
                        <option value="">Hindi</option>
                        <option value="">Gujrati</option>
                        <option value="">French</option>
                      </select>
                    </div>
                  </div>
                   <!--Future Degree-->
                  <div class="form-group col-md-6">
                    <label for="inputCity">Future Degree</label>
                    <div class="multi_select_box" id="multi_select_subject">
                      <select
                        data-live-search="true"
                        class="subject_preference w-100"
                        name="" required
                        id=""
                        multiple
                      >
                        <option value="">BTech</option>
                        <option value="">BBA</option>
                        <option value="">MBBS</option>
                        <option value="">Physics Hons</option>
                        <option value="">Chemistry Hons</option>
                      </select>
                    </div>
                  </div>
                  <!--Current stream-->
                  <div class="form-group col-md-6">
                    <label for="inputCity">Current Stream</label>
                    <select required id="inputState" class="form-control">
                      <option value="">Choose...</option>
                      <option value="1">Science</option>
                      <option value="2">Commerce</option>
                      <option value="3">Humanities</option>
                    </select>
                  </div>
                   <!--Yearly Budget-->
                  <div class="form-group col-md-6">
                    <label for="inputCity">Yearly Budget</label>
                    <select required id="inputState" class="form-control">
                      <option value="">Choose...</option>
                      <option value="1">50k-60k</option>
                      <option value="2">60k-70k</option>
                      <option value="3">70k-80k</option>
                    </select>
                  </div>
                </div>
                  <!--Add fields-->
                <div class="form-group" id="new-link">
                  <label for="">Proficiency exams</label>
                  <p>Click on add field to add the profiency exams</p>
                  <!--add fields dynamically-->
                </div>
                <p id="addnew">
                  <a type="button" class="btn btn-outline-dark" href="javascript:new_link()">Add New </a>
                </p>
                   <!--Add fields demo-->
                <div class="form-group" id="new-linkx">
                  <label for="">Preferred location</label>
                  <p>Click on add field to add the preferred location of study</p>
                  <!--add fields dynamically-->
                </div>
                <p id="addnewx">
                  <a
                    type="button"
                    class="btn btn-outline-dark"
                    href="javascript:new_linkx()"
                    >Add New
                  </a>
                </p>

                <div class="form-group">
                  <div class="form-check">
                    <input required
                      class="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label class="form-check-label" for="gridCheck">
                      I have correctly read the above fields and filled them up
                    </label>
                     <p>Please tick the checkbox and fill the above fields to proceed further or go back to your previous form</p>
                  </div>
                </div>
               <a type="button" class="btn btn-primary" href='/student.html'>Back</a>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>`;
  return classeleven;
}

//if selected upto class 8
function classEight() {
  fillup.innerHTML = uptoClassEight();

  $(".subject_preference").selectpicker();
  $(".multi_select").selectpicker();
}

//if selected class 9-10
function classNine() {
  fillup.innerHTML = classTen();

  $(".subject_preference").selectpicker();
  $(".multi_select").selectpicker();
}

//if selected class 11-12
function eleven() {
  fillup.innerHTML = classtwelve();
  $(".subject_preference").selectpicker();
  $(".multi_select").selectpicker();
}

//if selected school in the form
function schoolStudent() {
  const valueOfVariable = `<div class="range">
              <input
                type="radio"
                id="eight"
                name="VII"
                value="50"
                onchange="classEight()"
                required
              />
              <label style="padding-right: 10px" for="eight">Upto class 8</label>
              <input
                type="radio"
                id="ten"
                name="VII"
                value="50"
                onchange="classNine()"
                required
              />
              <label style="padding-right: 10px" for="ten">Class 9-10</label>

              <input type="radio" id="twelve" name="VII" value="50"
              onchange="eleven()"
              required />
              <label style="padding-right: 10px" for="twelve">Class 11-12</label>


            </div>
            `;

  return valueOfVariable;
}

//if selected bachelors
function bachelorStudent() {
  let bachelor = `<h3 style="margin-top:20px;">Registrartion Form for Bachelor STudents</h3>
              <form action="contact.html">
              <!--Current year of study-->
              <label for="class">Current year of study</label>
              <select required id="class" class="custom-select custom-select-sm">
                <option value="">Select Current Class</option>

                  <option value="6">First Year</option>
                  <option value="7">Second Year</option>
                  <option value="8">Third Year</option>
                  <option value="8">Fourth Year</option>
              </select>

              <br />



              <div style="margin-top:20px" class="form-row">
                     <!--Stream/Course-->
                  <div class="form-group col-md-6">
                    <label for="inputCity">Stream/Course</label>
                    <select required id="inputState" class="form-control">
                      <option value="">Choose...</option>
                      <option value="1">Computer Science Enginneering</option>
                      <option value="2">Electrical Engineering</option>
                      <option value="3">
                        Electronic and Communication Engineering
                      </option>
                    </select>
                  </div>
                  <!--Current CGPA-->
                  <div class="form-group col-md-6">
                    <label for="inputCity">Current CGPA</label>
                    <select required id="inputState" class="form-control">
                      <option value="">Choose...</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="3">4</option>
                      <option value="3">5</option>
                      <option value="3">6</option>
                      <option value="3">7</option>
                      <option value="3">8</option>
                      <option value="3">9</option>
                      <option value="3">10</option>
                    </select>
                  </div>

              </div>
              <!--Interested Programs-->
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputCity">Interested Programs</label>
                  <div class="multi_select_box" id="multi_select_subject">
                    <select required
                      data-live-search="true"
                      class="subject_preference w-100"
                      name=""
                      id=""
                      multiple
                    >
                      <option value="">
                        International Science Olympiad (ISO)
                      </option>
                      <option value="">Artificial Intelligence</option>
                      <option value="">Maths</option>
                      <option value="">Physics</option>
                      <option value="">Chemistry</option>
                      <option value="">Biology</option>
                      <option value="">Artificial Intelligence</option>
                      <option value="">Maths</option>
                      <option value="">Physics</option>
                      <option value="">Chemistry</option>
                      <option value="">Biology</option>
                      <option value="">Artificial Intelligence</option>
                      <option value="">Maths</option>
                      <option value="">Physics</option>
                      <option value="">Chemistry</option>
                      <option value="">Biology</option>
                      <option value="">Artificial Intelligence</option>
                      <option value="">
                        International Maths Olympiad (IMO)
                      </option>
                      <option value="">
                        English International Olympiad (EIO)y
                      </option>
                      <option value="">
                        General Knowledge International Olympiad (GKIO)
                      </option>
                      <option value="">
                        International Computer Olympiad (ICO)
                      </option>
                    </select>
                  </div>
                </div>
                  <!--Current College-->
                 <div class="form-group col-md-6">
                  <label for="inputCity">Current College</label>
                  <select required data-live-search="true" id="inputState" class="form-control selectpicker">
                    <option value="">Choose...</option>
                    <option value="1">UEM</option>
                    <option value="2">IEM</option>
                    <option value="3">IIT Mumbai</option>
                     <option value="1">UEM</option>
                    <option value="2">IEM</option>
                     <option value="1">UEM</option>
                    <option value="2">IEM</option>
                     <option value="1">UEM</option>
                    <option value="2">IEM</option>
                    <option value="3">IIT Mumbai</option>
                    <option value="3">IIT Mumbai</option>
                    <option value="3">IIT Mumbai</option>
                    <option value="3">IIT Mumbai</option>
                    <option value="3">IIT Mumbai</option>
                    <option value="3">IIT Mumbai</option>
                    <option value="3">IIT Mumbai</option>
                  </select>
                </div>


                  <div class="form-group col-md-6">
                    <label for="future2">Course</label>
                    <select id="future-slct2" class="form-control">
                      <option value="">Choose...</option>
                    </select>
                  </div>

                <!--Languages Known-->
                  <div class="form-group col-md-6">
                  <label for="inputCity">Languages known</label>
                  <div class="multi_select_box" id="multi_select_subject">
                    <select required
                      data-live-search="true"
                      class="subject_preference w-100"
                      name=""
                      id=""
                      multiple
                    >
                      <option value="">English</option>
                      <option value="">Bengali</option>
                      <option value="">Hindi</option>
                      <option value="">Gujrati</option>
                      <option value="">French</option>
                    </select>
                  </div>
                </div>
                  <!--Add resume-->
                <div  class="form-group col-md-6">
                   <label for="myfile">Upload your resume</label>
                  <input style="margin-top:10px;" required type="file" id="myfile" name="myfile"><br>
                </div>
              </div>
                <!--Add fields for future aspirations-->
                <div class="form-group" id="new-link-degree">
                  <label for="">Future Aspirations</label>
                  <!--add fields dynamically-->
                </div>
                <p id="addnewy">
                  <a
                    type="button"
                    class="btn btn-outline-dark"
                    href="javascript:new_link_degree()"
                    >Add New
                  </a>
                </p>
                  <!--Add fields-->
                <div class="form-group" id="new-link">
                  <label for="">Proficiency exams</label>
                  <p>Click on add field to add the profiency exams</p>
                  <!--add fields dynamically-->
                </div>
                <p id="addnew">
                  <a type="button" class="btn btn-outline-dark" href="javascript:new_link()">Add New </a>
                </p>
                <!--Add fields preferred location-->
                <div class="form-group" id="new-linkx">
                  <label for="">Preferred location</label>
                  <!--add fields dynamically-->
                </div>
                <p id="addnewx">
                  <a
                    type="button"
                    class="btn btn-outline-dark"
                    href="javascript:new_linkx()"
                    >Add New
                  </a>
                </p>


              <div class="form-group">
                <div class="form-check">
                  <input required
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label" for="gridCheck">
                    I have correctly read the above fields and filled them up
                  </label>
                </div>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>`;

  return bachelor;
}

// function bachelor() {
//   fillup.innerHTML = bachelorStudent();
//   $(".subject_preference").selectpicker();
//   $(".multi_select").selectpicker();
// }

//if selected masters
function mastersStudent() {
  let masters = `<h3 style="margin-top:20px;">Registrartion Form for Masters Students</h3>
              <form action="contact.html">
              <!--Current year of study-->
              <label for="class"><strong>Current year of study</strong></label>
              <select required id="class" class="custom-select custom-select-sm">
                <option value="">Select Current Class</option>

                  <option value="1">First Year</option>
                  <option value="2">Second Year</option>

              </select>

              <br />



              <div style="margin-top:20px" class="form-row">
                     <!--Stream/Course-->
                  <div class="form-group col-md-6">
                    <label for="inputCity"><strong>Stream/Course</strong></label>
                    <select required id="inputState" class="form-control">
                      <option value="">Choose...</option>
                      <option value="1">Computer Science Enginneering</option>
                      <option value="2">Electrical Engineering</option>
                      <option value="3">
                        Electronic and Communication Engineering
                      </option>
                    </select>
                  </div>
                  <!--Current CGPA-->
                  <div class="form-group col-md-6">
                    <label for="inputCity"><strong>Current CGPA</strong></label>
                    <select required id="inputState" class="form-control">
                      <option value="">Choose...</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="3">4</option>
                      <option value="3">5</option>
                      <option value="3">6</option>
                      <option value="3">7</option>
                      <option value="3">8</option>
                      <option value="3">9</option>
                      <option value="3">10</option>
                    </select>
                  </div>

              </div>
              <!--Interested Programs-->
              <div class="form-row">



                  <!--Current College-->
                 <div class="form-group col-md-6">
                  <label for="inputCity"><strong>Current college</strong></label>
                  <select required data-live-search="true" id="inputState" class="form-control selectpicker">
                    <option value="">Choose...</option>
                    <option value="1">UEM</option>
                    <option value="2">IEM</option>
                    <option value="3">IIT Mumbai</option>
                     <option value="1">UEM</option>
                    <option value="2">IEM</option>
                     <option value="1">UEM</option>
                    <option value="2">IEM</option>
                     <option value="1">UEM</option>
                    <option value="2">IEM</option>
                    <option value="3">IIT Mumbai</option>
                    <option value="3">IIT Mumbai</option>
                    <option value="3">IIT Mumbai</option>
                    <option value="3">IIT Mumbai</option>
                    <option value="3">IIT Mumbai</option>
                    <option value="3">IIT Mumbai</option>
                    <option value="3">IIT Mumbai</option>
                  </select>
                </div>

                <!--Languages Known-->
                  <div class="form-group col-md-6">
                  <label for="inputCity"><strong>Languages known</strong></label>
                  <div class="multi_select_box" id="multi_select_subject">
                    <select required
                      data-live-search="true"
                      class="subject_preference w-100"
                      name=""
                      id=""
                      multiple
                    >
                      <option value="">English</option>
                      <option value="">Bengali</option>
                      <option value="">Hindi</option>
                      <option value="">Gujrati</option>
                      <option value="">French</option>
                    </select>
                  </div>
                </div>


              </div>
                <!--bachelor's degree-->
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="degree1"><strong>Bachelor's Degree 1</strong></label>
                    <select
                      data-live-search="true"
                      id="slct1"
                      class="form-control selectpicker"
                      onchange="populate('slct1','slct2')"
                    >
                      <option value="">Choose...</option>
                      <option value="btech">BTech</option>
                      <option value="bba">BBA</option>
                      <option value="honours">Honours</option>
                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="degree2"><strong>Bachelor's Degree Course</strong></label>
                    <select id="slct2" class="form-control">
                      <option value="">Choose...</option>
                    </select>
                  </div>
                </div>
                    <!--Future degree-->
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="future1"><strong>Future Degree</strong> </label>
                    <select
                      data-live-search="true"
                      id="future-slct1"
                      class="form-control selectpicker"
                      onchange="populateFuture('future-slct1','future-slct2')"
                    >
                      <option value="">Choose...</option>
                      <option value="phd">PhD</option>
                      <option value="course">Short course</option>
                      <option value="job">Job</option>
                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="future2"><strong>Future Course</strong></label>
                    <select id="future-slct2" class="form-control">
                      <option value="">Choose...</option>
                    </select>
                  </div>
                </div>
                <div class="form-row">

                      <!--Add resume-->
                    <div  class="form-group col-md-6">
                   <label for="myfile"><strong>Upload your resume</strong></label>
                  <input style="margin-top:10px;" required type="file" id="myfile" name="myfile"><br>

                  </div>
                </div>
                  <!--Add fields-->
                <div class="form-group" id="new-link">
                  <label for=""><strong>Proficiency exams</strong></label>
                  <p>Click on add field to add the profiency exams</p>
                  <!--add fields dynamically-->
                </div>
                <p id="addnew">
                  <a type="button" class="btn btn-outline-dark" href="javascript:new_link()">Add New </a>
                </p>
                <!--Add fields preferred location-->
                <div class="form-group" id="new-linkx">
                  <label for=""><strong>Preferred location</strong></label>
                  <!--add fields dynamically-->
                </div>
                <p id="addnewx">
                  <a
                    type="button"
                    class="btn btn-outline-dark"
                    href="javascript:new_linkx()"
                    >Add New
                  </a>
                </p>


              <div class="form-group">
                <div class="form-check">
                  <input required
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />

                  <label class="form-check-label" for="gridCheck">
                    I have correctly read the above fields and filled them up
                  </label>
                  <p>Please tick the checkbox and fill the above fields to proceed further or go back to your previous form</p>
                </div>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>`;

  return masters;
}

//if selected PhD
function phdStudent() {
  let phd = `<h3 style="margin-top:20px;">Registrartion Form for PhD Students</h3>
              <form action="contact.html">
              <!--Current year of study-->
              <label for="class"><strong>Current year of study</strong></label>
              <select required id="class" class="custom-select custom-select-sm">
                <option value="">Select Current Class</option>

                  <option value="1">First Year</option>
                  <option value="2">Second Year</option>
                  <option value="3">Third Year</option>
                  <option value="4">Fourth Year</option>
                  <option value="5">Fifth Year</option>

              </select>

              <br />



              <div style="margin-top:20px" class="form-row">
                     <!--Stream/Course-->
                  <div class="form-group col-md-6">
                    <label for="inputCity"><strong>Stream/Course</strong></label>
                    <select required id="inputState" class="form-control">
                      <option value="">Choose...</option>
                      <option value="1">Computer Science Enginneering</option>
                      <option value="2">Electrical Engineering</option>
                      <option value="3">
                        Electronic and Communication Engineering
                      </option>
                    </select>
                  </div>
                  <!--Current CGPA-->
                  <div class="form-group col-md-6">
                    <label for="inputCity"><strong>Current CGPA</strong></label>
                    <select required id="inputState" class="form-control">
                      <option value="">Choose...</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="3">4</option>
                      <option value="3">5</option>
                      <option value="3">6</option>
                      <option value="3">7</option>
                      <option value="3">8</option>
                      <option value="3">9</option>
                      <option value="3">10</option>
                    </select>
                  </div>

              </div>
              <!--Interested Programs-->
              <div class="form-row">



                  <!--Current College-->
                 <div class="form-group col-md-6">
                  <label for="inputCity"><strong>Current college</strong></label>
                  <select required data-live-search="true" id="inputState" class="form-control selectpicker">
                    <option value="">Choose...</option>
                    <option value="1">UEM</option>
                    <option value="2">IEM</option>
                    <option value="3">IIT Mumbai</option>
                     <option value="1">UEM</option>
                    <option value="2">IEM</option>
                     <option value="1">UEM</option>
                    <option value="2">IEM</option>
                     <option value="1">UEM</option>
                    <option value="2">IEM</option>
                    <option value="3">IIT Mumbai</option>
                    <option value="3">IIT Mumbai</option>
                    <option value="3">IIT Mumbai</option>
                    <option value="3">IIT Mumbai</option>
                    <option value="3">IIT Mumbai</option>
                    <option value="3">IIT Mumbai</option>
                    <option value="3">IIT Mumbai</option>
                  </select>
                </div>

                <!--Languages Known-->
                  <div class="form-group col-md-6">
                  <label for="inputCity"><strong>Languages known</strong></label>
                  <div class="multi_select_box" id="multi_select_subject">
                    <select required
                      data-live-search="true"
                      class="subject_preference w-100"
                      name=""
                      id=""
                      multiple
                    >
                      <option value="">English</option>
                      <option value="">Bengali</option>
                      <option value="">Hindi</option>
                      <option value="">Gujrati</option>
                      <option value="">French</option>
                    </select>
                  </div>
                </div>


              </div>
                <!--bachelor's degree-->
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="degree1"><strong>Bachelor's Degree 1</strong></label>
                    <select
                      data-live-search="true"
                      id="slct1"
                      class="form-control selectpicker"
                      onchange="populate('slct1','slct2')"
                    >
                      <option value="">Choose...</option>
                      <option value="btech">BTech</option>
                      <option value="bba">BBA</option>
                      <option value="honours">Honours</option>
                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="degree2"><strong>Bachelor's Degree Course</strong></label>
                    <select id="slct2" class="form-control">
                      <option value="">Choose...</option>
                    </select>
                  </div>
                </div>
                    <!--Future degree-->
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="future1"><strong>Future Degree</strong> </label>
                    <select
                      data-live-search="true"
                      id="future-slct1"
                      class="form-control selectpicker"
                      onchange="populateFuture('future-slct1','future-slct2')"
                    >
                      <option value="">Choose...</option>
                      <option value="phd">PhD</option>
                      <option value="course">Short course</option>
                      <option value="job">Job</option>
                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="future2"><strong>Future Course</strong></label>
                    <select id="future-slct2" class="form-control">
                      <option value="">Choose...</option>
                    </select>
                  </div>
                </div>
                <div class="form-row">

                      <!--Add resume-->
                    <div  class="form-group col-md-6">
                   <label for="myfile"><strong>Upload your resume</strong></label>
                  <input style="margin-top:10px;" required type="file" id="myfile" name="myfile"><br>

                  </div>
                </div>
                  <!--Add fields-->
                <div class="form-group" id="new-link">
                  <label for=""><strong>Proficiency exams</strong></label>
                  <p>Click on add field to add the profiency exams</p>
                  <!--add fields dynamically-->
                </div>
                <p id="addnew">
                  <a type="button" class="btn btn-outline-dark" href="javascript:new_link()">Add New </a>
                </p>
                <!--Add fields preferred location-->
                <div class="form-group" id="new-linkx">
                  <label for=""><strong>Preferred location</strong></label>
                  <!--add fields dynamically-->
                </div>
                <p id="addnewx">
                  <a
                    type="button"
                    class="btn btn-outline-dark"
                    href="javascript:new_linkx()"
                    >Add New
                  </a>
                </p>


              <div class="form-group">
                <div class="form-check">
                  <input required
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />

                  <label class="form-check-label" for="gridCheck">
                    I have correctly read the above fields and filled them up
                  </label>
                  <p>Please tick the checkbox and fill the above fields to proceed further or go back to your previous form</p>
                </div>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>`;

  return phd;
}

//dropdown menu to select multiple tasks
// $(document).ready(function () {
//   // $(".multi_Select").select2();
// });

// //dropdown of subject preference
// $(document).ready(function () {});

//add fields dynamically

var ct = 0;

function template(ref) {
  var template_test =
    `<div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputCity">Profiency Exam</label>
                    <select required id="meal` +
    ref +
    `" onChange="changecat(this.value, ` +
    ref +
    `);" class="form-control" >
                      <option value="">Choose...</option>
                      <option value="A">JEE Mains</option>
                      <option value="B">JEE Advanced</option>
                      <option value="C">NEET</option>
                      <option value="D">CAT</option>
                      <option value="E">MAT</option>
                      <option value="F">SAT</option>
                      <option value="G">TOEFL</option>
                      <option value="H">IELTS</option>
                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputCity">Profiency exam Marks</label>
                    <select required id="category` +
    ref +
    `" class="form-control">
                      <option value="">Choose...</option>

                    </select>
                  </div>
                </div>`;

  return template_test;
}

function new_link() {
  ct++;
  var div1 = document.createElement("div");
  div1.id = ct;
  // link to delete extended form elements
  var delLink =
    '<div style=""><a type="button" class="btn btn-dark" href="javascript:delIt(' +
    ct +
    ')">Delete</a></div>';
  div1.innerHTML = template(ct) + delLink;
  document.getElementById("new-link").appendChild(div1);
}
// function to delete the newly added set of elements
function delIt(eleId) {
  d = document;
  var ele = d.getElementById(eleId);
  var parentEle = d.getElementById("new-link");
  parentEle.removeChild(ele);
}

var mealsByCategory = {
  A: [
    "0-10",
    "11-20",
    "21-30",
    "31-40",
    "41-50",
    "51-60",
    "61-70",
    "71-80",
    "81-90",
    "91-100",
  ],
  B: [
    "0-10",
    "11-20",
    "21-30",
    "31-40",
    "41-50",
    "51-60",
    "61-70",
    "71-80",
    "81-90",
    "91-100",
  ],
  C: [
    "0.1-1.0",
    "1.1-2.0",
    "2.1-3.0",
    "3.1-4.0",
    "4.1-5.0",
    "5.1-6.0",
    "6.1-7.0",
    "7.1-8.0",
    "8.1-9.0",
    "9.1-10",
  ],
  D: [
    "0-10",
    "11-20",
    "21-30",
    "31-40",
    "41-50",
    "51-60",
    "61-70",
    "71-80",
    "81-90",
    "91-100",
  ],
  E: [
    "0-10",
    "11-20",
    "21-30",
    "31-40",
    "41-50",
    "51-60",
    "61-70",
    "71-80",
    "81-90",
    "91-100",
  ],
  F: [
    "0-10",
    "11-20",
    "21-30",
    "31-40",
    "41-50",
    "51-60",
    "61-70",
    "71-80",
    "81-90",
    "91-100",
  ],
  G: [
    "0-10",
    "11-20",
    "21-30",
    "31-40",
    "41-50",
    "51-60",
    "61-70",
    "71-80",
    "81-90",
    "91-100",
    "101-110",
    "111-120",
  ],
  H: [
    "0.1-1.0",
    "1.1-2.0",
    "2.1-3.0",
    "3.1-4.0",
    "4.1-5.0",
    "5.1-6.0",
    "6.1-7.0",
    "7.1-8.0",
    "8.1-9.0",
    "9.1-10",
  ],
};

function changecat(value, eleID) {
  if (value.length == 0)
    document.getElementById("category" + eleID).innerHTML = "<option></option>";
  else {
    var catOptions = "";
    for (categoryId in mealsByCategory[value]) {
      catOptions +=
        "<option>" + mealsByCategory[value][categoryId] + "</option>";
    }
    document.getElementById("category" + eleID).innerHTML = catOptions;
  }
}

//bachelor's degree list
function populate(s1, s2) {
  var s1 = document.getElementById(s1);
  var s2 = document.getElementById(s2);

  s2.innerHTML = "";

  if (s1.value == "btech") {
    var optionArray = [
      "Computer Engineering|CE",
      "Mechanical Engineering|ME",
      "Chemical Engineering|ChE",
    ];
  } else if (s1.value == "bba") {
    var optionArray = ["a", "b", "c"];
  } else if (s1.value == "honours") {
    var optionArray = ["m", "n", "o"];
  }
  for (var option in optionArray) {
    var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[1];
    newOption.innerHTML = pair[0];
    s2.options.add(newOption);
  }
}
//future degree list in bachelors form
function populateFuture(s1, s2) {
  var s1 = document.getElementById(s1);
  var s2 = document.getElementById(s2);

  s2.innerHTML = "";

  if (s1.value == "mtech") {
    var optionArray = [
      "Computer Engineering|CE",
      "Mechanical Engineering|ME",
      "Chemical Engineering|ChE",
    ];
  } else if (s1.value == "mba") {
    var optionArray = ["a", "b", "c"];
  } else if (s1.value == "masters") {
    var optionArray = ["m", "n", "o"];
  } else if (s1.value == "phd") {
    var optionArray = [
      "Humanities",
      "Economics",
      "Geography",
      "Social Work",
      "Chemistry",
      "Clinical Research",
      "Arts",
      "Science",
      "Bioscience",
      "Bioinformatics",
      "Social Sciences",
      "English",
      "Public & Economic Policy",
      "Life Science",
      "Psychology",
      "International Relations & Politics",
      "Physiology",
      "Public Ploicy",
      "Literature",
      "Biotechnology",
      "Maths & Computer Sciences",
      "EVS & ENgineering",
      "Applied Chemistry",
      "Applied Sciences",
      "Zoology",
      "Physics",
      "basic Sciences",
      "Mathematics",
      "Botany",
      "Commerce Management",
      "Accounting & Finance",
      "Engineering",
      "Genetic engineering",
      "Civil Engineering",
      "Program in Quantitative Techniques",
      "Engineering and Technology",
      "Electronics & Communication Engineering",
    ];
  } else if (s1.value == "job") {
    var optionArray = [
      "backend developer",
      "frontend developer",
      "content writing",
    ];
  } else if (s1.value == "course") {
    var optionArray = ["cryptocurrency", "mern stack", "computer vision"];
  }
  for (var option in optionArray) {
    var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[1];
    newOption.innerHTML = pair[0];
    s2.options.add(newOption);
  }
}

//add fields dynamically for future aspirations

var ctDegree = 0;

function templateDegree(refDegree) {
  var template_testDegree =
    `<div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputCity">Future Aspiration</label>
                    <select required id="degree` +
    refDegree +
    `" onChange="changecatDegree(this.value, ` +
    refDegree +
    `);" class="form-control" >
                      <option value="">Choose...</option>
                      <option value="mtech">Mtech</option>
                      <option value="mba">MBA</option>
                      <option value="gen">General Masters</option>
                      <option value="job">Job</option>

                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputCity">Course</label>
                    <select multiple data-selected-text-format="count > 3"  data-live-search="true" required id="categoryDegree` +
    refDegree +
    `" class="form-control degreeChoice">
                      <option value="">Choose...</option>

                    </select>
                  </div>
                </div>`;

  return template_testDegree;
}

function new_link_degree() {
  ct++;
  var div1 = document.createElement("div");
  div1.id = ct;
  // link to delete extended form elements
  var delLink =
    '<div style=""><a type="button" class="btn btn-dark" href="javascript:delItDegree(' +
    ct +
    ')">Delete</a></div>';
  div1.innerHTML = templateDegree(ct) + delLink;
  document.getElementById("new-link-degree").appendChild(div1);
  $(".degreeChoice").selectpicker("refresh");
}
// function to delete the newly added set of elements
function delItDegree(eleId) {
  d = document;
  var ele = d.getElementById(eleId);
  var parentEle = d.getElementById("new-link-degree");
  parentEle.removeChild(ele);
}

var degreeByCategoryy = {
  mtech: [
    "Computer Engineering",
    "Mechanical Engineering",
    "Chemical Engineering",
    "Electrical Engineering",
  ],
  mba: ["A", "B", "C"],
  gen: ["physics", "chemistry", "maths"],
  job: ["IT Services", "consultant", "content writer", "developer"],
};

function changecatDegree(value, eleID) {
  if (value.length == 0)
    document.getElementById("categoryDegree" + eleID).innerHTML =
      "<option></option>";
  else {
    var catOptions = "";
    for (categoryId in degreeByCategoryy[value]) {
      catOptions +=
        "<option>" + degreeByCategoryy[value][categoryId] + "</option>";
    }
    document.getElementById("categoryDegree" + eleID).innerHTML = catOptions;
    $(".degreeChoice").selectpicker("refresh");
  }
}

//preferred location
var ctx = 0;

function templatex(refx) {
  var template_testx =
    `<div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputCity">Continent</label>
                    <select required id="mealx` +
    refx +
    `" onChange="changecatx(this.value, ` +
    refx +
    `);" class="form-control" >
                      <option value="">Choose...</option>
                    <optgroup label="Continent">

                      <option value="Africa">Africa</option>
                      <option value="Asia">Asia</option>
                      <option value="Europe">Europe</option>
                      <option value="NA">North America</option>
                      <option value="OA">Oceania and Australia</option>
                      <option value="SA">South America</option>

                    </optgroup>
                        <optgroup label="Country Territories">
                      <option value="TAfrica">Territories of Africa</option>

                      <option value="TEurope">Territories of Europe</option>
                      <option value="TNA">Territories of North America</option>
                      <option value="TOA">Territories of Oceania and Australia   </option>
                      <option value="TSA">Territories of South Amerca</option>
                      <option value="TA">Territories of South Antarctica</option>
                    </optgroup>
                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputCity">Country</label>
                    <select multiple data-selected-text-format="count > 3" data-actions-box="true" data-live-search="true" required id="categoryx` +
    refx +
    `" class="form-control loc">
                      <option value="">Choose...</option>

                    </select>
                  </div>
                </div>`;

  return template_testx;
}

function new_linkx() {
  ct++;
  var div1 = document.createElement("div");
  div1.id = ct;
  // link to delete extended form elements
  var delLink =
    '<div style=""><a type="button" class="btn btn-dark" href="javascript:delItx(' +
    ct +
    ')">Delete</a></div>';
  div1.innerHTML = templatex(ct) + delLink;
  document.getElementById("new-linkx").appendChild(div1);
  $(".loc").selectpicker("refresh");
}
// function to delete the newly added set of elements
function delItx(eleId) {
  d = document;
  var ele = d.getElementById(eleId);
  var parentEle = d.getElementById("new-linkx");
  parentEle.removeChild(ele);
}

var mealsByCategoryx = {
  Africa: [
    "Algeria",
    "Angola",
    "Benin",
    "Botswana",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde/Cape Verde",
    "Cameroon",
    "Central African Republic",
    "Chad",
    "Comoros",
    "Congo/Republic of the Congo",
    "Democratic Republic of the Congo",
    "Djibouti",
    "Egypt (transcontinental)",
    "Equatorial Guinea",
    "Eritrea",
    "Eswatini (formerly Swaziland)",
    "Ethiopia",
    "Gabon",
    "Gambia",
    "Ghana",
    "Guinea",
    "Guinea-Bissau",
    "Ivory Coast/Republic of Côte d'Ivoire",
    "Kenya",
    "Lesotho",
    "Liberia",
    "Libya",
    "Madagascar",
    "Malawi",
    "Mali",
    "Mauritania",
    "Mauritius",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Niger",
    "Nigeria",
    "Rwanda",
    "Sao Tome and Principe",
    "Senegal",
    "Seychelles",
    "Sierra Leone",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Sudan",
    "Tanzania",
    "Togo",
    "Tunisia",
    "Uganda",
    "Zambia",
    "Zimbabwe",
  ],
  Asia: [
    "Afghanistan",
    "Armenia (transcontinental)",
    "Azerbaijan (transcontinental)",
    "Bahrain",
    "Bangladesh",
    "Bhutan",
    "British Indian Ocean Territory (UK territory)",
    "Brunei",
    "Cambodia",
    " China",
    " Cyprus (transcontinental)",
    "Egypt (transcontinental)",
    "Georgia (transcontinental)",
    "Hong Kong (China)",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Israel (U.N. member)",
    "Japan",
    "Jordan",
    "Kazakhstan (transcontinental)",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Lebanon",
    "Macau (China)",
    "Malaysia",
    "Maldives",
    " Mongolia",
    "Myanmar (formerly Burma)",
    "Nepal",
    " North Korea",
    "Oman",
    "Pakistan",
    "Palestine (limited recognition)",
    "Philippines",
    "Qatar",
    "Russia (transcontinental)",
    "Saudi Arabia",
    "Singapore",
    "South Korea (Republic of Korea)",
    "Sri Lanka",
    "Syria",
    "Taiwan (limited recognition)",
    "Tajikistan",
    "Thailand",
    "Timor-Leste/East Timor",
    "Turkey (transcontinental)",
    "Turkmenistan",
    "United Arab Emirates",
    "Uzbekistan",
    "Vietnam",
    "Yemen",
  ],
  Europe: [
    "Albania",
    "Andorra",
    "Armenia (transcontinental)",
    "Austria",
    "Azerbaijan (transcontinental)",
    "Belarus",
    "Belgium",
    "Bosnia and Herzegovina",
    "Bulgaria",
    "Croatia",
    "Cyprus (generally considered European)",
    "Czechia/Czech Republic",
    "Denmark",
    "Estonia",
    "Finland",
    "France",
    "Georgia (transcontinental)",
    "Germany",
    "Greece",
    "Hungary",
    "Iceland",
    "Ireland",
    "Italy",
    "Kazakhstan (transcontinental)",
    "Latvia",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Malta",
    "Moldova",
    "Monaco",
    "Montenegro",
    "Netherlands",
    "North Macedonia",
    "Norway",
    "Poland",
    "Portugal",
    "Romania",
    "Russia (transcontinental)",
    "San Marino",
    "Serbia",
    "Slovakia",
    "Slovenia",
    "Spain",
    "Sweden",
    "Switzerland",
    "Turkey (transcontinental)",

    "Ukraine",
    "United Kingdom",
    "Vatican City (Holy See)",
  ],
  NA: [
    "Antigua and Barbuda",
    "Bahamas",
    "Barbados",
    "Belize",
    "Canada",
    "Costa Rica",
    "Cuba",
    "Dominica",
    "Dominican Republic",
    "El Salvador",
    "Grenada",
    "Guatemala",
    "Haiti",
    "Honduras",
    "Jamaica",
    "Mexico",
    "Nicaragua",
    "Panama",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Trinidad and Tobago",
    "United States of America",
  ],
  OA: [
    "Australia",
    "Fiji",
    "Kiribati",
    "Marshall Islands",
    "Micronesia",
    "Nauru",
    "New Zealand",
    "Palau",
    "Papua New Guinea",
    "Samoa",
    "Solomon Islands",
    "Tonga",
    "Tuvalu",
    "Vanuatu",
  ],
  SA: [
    "Argentina",
    "Bolivia",
    "Brazil",
    "Chile",
    "Colombia",
    "Ecuador",
    "Guyana",
    "Paraguay",
    "Peru",
    "Suriname",
    "Uruguay",
    "Venezuela",
  ],
  TAfrica: [
    "Canary Islands (Spain)",
    "Ceuta (Spain)",
    "French Southern and Antarctic Lands",
    "Madeira (Portugal)",
    "Mayotte (France)",
    "Melilla (Spain)",
    "Pelagie Islands (Italy)",
    "Plazas de Soberania (Spain)",
    "Reunion (France)",

    "Socotra Archipelago (Yemen)",
  ],
  TEurope: [
    "Åland (Finland)",
    "Channel Islands (UK)",
    "Faroe Islands (Denmark)",
    "Gibraltar (UK)",
    "Guernsey",
    "Isle of Man",
    "Jersey",
    "Kosovo",
    "Northern Cyprus",
    "Northern Ireland (UK)",
    "Svalbard (Norway)",
  ],
  TNA: [
    "Anguilla (UK)",
    "Aruba (Netherlands)",
    "Bermuda (UK)",
    "Bonaire (Netherlands)",
    "British Virgin Islands (UK)",
    "Cayman Islands (UK)",
    "Clipperton Island (France)",
    "Curaçao (Netherlands)",
    "Greenland (Denmark)",
    "Guadeloupe (France)",
    "Martinique (France)",
    "Montserrat (UK)",
    "Navassa Island (USA)",
    "Puerto Rico (USA)",
    "Saba (Netherlands)",
    "Saint Barthélemy (France)",
    "Saint Martin (France)",
    "Saint Pierre and Miquelon (France)",
    "Sint Eustatius (Netherlands)",
    "Sint Maarten (Netherlands)",
    "Turks and Caicos (UK)",
    "US Virgin Islands (USA)",
  ],
  TOA: [
    "American Samoa (US)",
    "Ashmore and Cartier Islands (Australia)",
    "Baker Island (US)",
    "Cook Islands (New Zealand)",
    "Coral Sea Islands (Australia)",
    "Easter Island (Chile)",
    "French Polynesia (France)",
    "Galapagos Islands (Ecuador)",
    "Guam (US)",
    "Howland Island (US)",
    "Jarvis Island (US)",
    "Johnston Atoll (US)",
    "Kingman Reef (US)",
    "Midway Atoll (US)",
    "New Caledonia (France)",
    "Niue (New Zealand)",
    "Norfolk Island (Australia)",
    "Northern Mariana Islands (US)",
    "Palmyra Atoll (US)",
    "Papua (Indonesia)",
    "Pitcairn Islands (UK)",
    "San Andrés and Providencia (Colombia)",
    "Tokelau (New Zealand)",
    "Wake Island (US)",
    "Wallis and Futuna (France)",
    "West Papua (Indonesia)",
  ],
  TSA: [
    "Bouvet Island (Norway)",
    "Falkland Islands (UK)",
    "French Guinea (France)",
    "Nueva Esparta (Venezuela)",
  ],
  TA: [
    "Adélie Land (France)",
    "Argentine Antarctica (Argentina)",
    "Australian Antarctic Territory (Australia)",
    "British Antarctic Territory (UK)",
    "Chilean Antarctic Territory (Chile)",
    "Peter I Island (Norway)",
    "Queen Maud Land (Norway)",
    "Ross Dependency (New Zealand)",
  ],
};

function changecatx(value, eleID) {
  if (value.length == 0)
    document.getElementById("categoryx" + eleID).innerHTML =
      "<option></option>";
  else {
    var catOptions = "";
    for (categoryId in mealsByCategoryx[value]) {
      catOptions +=
        "<option>" + mealsByCategoryx[value][categoryId] + "</option>";
    }
    document.getElementById("categoryx" + eleID).innerHTML = catOptions;
    $(".loc").selectpicker("refresh");
  }
}

//location in form

let auth_token;

$(document).ready(function () {
  $(".multi_select ").selectpicker();
  $(".subject_preference").selectpicker();
  $(".preferred_loc").selectpicker();

  $.ajax({
    type: "get",
    url: "https://www.universal-tutorial.com/api/getaccesstoken",
    success: function (data) {
      auth_token = data.auth_token;
      getCountry(data.auth_token);
      // console.log(data);
    },
    error: function (error) {
      console.log(error);
    },
    headers: {
      Accept: "application/json",
      "api-token":
        "mkdEa0R9MmjCdOGY0EmfEiD13Dggn2_L8DK4QXls_FEdG3eTBpkN9gCZJ9CynokHfHc",
      "user-email": "dtithi54@gmail.com",
    },
  });
  $("#country-list").change(function () {
    getState();
  });
  $("#state").change(function () {
    getCity();
  });
});

function getCountry(auth_token) {
  var city = $("#city");
  var strc = `<option value="">City</option>`;
  city.html(strc);
  var state = $("#state");
  var strs = `<option value="">State</option>`;
  state.html(strs);
  $.ajax({
    type: "get",
    url: "https://www.universal-tutorial.com/api/countries/",
    success: function (data) {
      var country = $("#country-list");
      var str = `<option value="">Country</option>`;
      data.map((item, index) => {
        str += `<option value="${item.country_name}">${item.country_name}</option>`;
      });
      country.html(str);
      // $("#country-list").selectpicker();
    },
    error: function (error) {
      console.log(error);
    },
    headers: {
      Authorization: "Bearer " + auth_token,
      Accept: "application/json",
    },
  });
}
function getState() {
  let country_name = $("#country-list").val();

  var city = $("#city");
  var strc = `<option value="">City</option>`;
  city.html(strc);
  $.ajax({
    type: "get",
    url: "https://www.universal-tutorial.com/api/states/" + country_name,
    success: function (data) {
      var state = $("#state");
      var str = `<option value="">State</option>`;
      data.map((item, index) => {
        str += `<option value="${item.state_name}">${item.state_name}</option>`;
      });
      state.html(str);
      // $("#state").selectpicker();

      // getCity(auth_token);
    },
    error: function (error) {
      console.log(error);
    },
    headers: {
      Authorization: "Bearer " + auth_token,
      Accept: "application/json",
    },
  });
}
function getCity() {
  let state_name = $("#state").val();
  $.ajax({
    type: "get",
    url: "https://www.universal-tutorial.com/api/cities/" + state_name,
    success: function (data) {
      var city = $("#city");
      var str = `<option value="">City</option>`;
      data.map((item, index) => {
        str += `<option value="${item.city_name}">${item.city_name}</option>`;
      });
      city.html(str);
      // $("#city").selectpicker();
      console.log("ajax");
    },
    error: function (error) {
      console.log(error);
    },
    headers: {
      Authorization: "Bearer " + auth_token,
      Accept: "application/json",
    },
  });
}

//preferred location
