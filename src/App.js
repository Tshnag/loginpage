import './App.css';
import Resume from './components/Resume';
import Name from './components/Name';
import Interests from './components/Interests';
import Hline from './components/Hline';
import Skills from './components/Skills.js';
import Education from './components/Education.js';
import Experience from './components/Experience.js';
import Extracurriculars from './components/Extracurriculars.js';
import resumeObj from "./datas/data.js"
// import Border from "./components/Border.js"
// import Child from "./components/Child.js"
import List from "./components/List.js"
import items from "./datas/assignment3data.js"
import Themebutton from './components/Themebutton.js';



function App() {

  let blank1 = 0, blank2, blank3, blank4, blank5;

  // console.log(resumeObj.skills.Array)

  // let btn = <Themebutton
  //   btnname="Test"
  //   btntype="btn-dark"
  // ></Themebutton>

  let styleTheme=undefined;

  // btn.addEventListener("click", function(){
  //   console.log("darker executed")
  //       styleTheme = "darker" 
  // })
  



  if (resumeObj.interest[0] === undefined) {

    blank1 = <div className="">blank</div>
  }
  else {
    blank1 = <Interests
      interest1={resumeObj.interest[0].i1}
      interest2={resumeObj.interest[0].i2}
    />
  }


  if (resumeObj.skills[0] === undefined) {
    blank2 = <div className="blank">blank</div>
    styleTheme = "darker"
  }
  else {
    blank2 = <Skills
      skill1={resumeObj.skills[0]}
      skill2={resumeObj.skills[1]}
      skill3={resumeObj.skills[2]}
    />
  }


  if (resumeObj.education[0] === undefined) {
    blank3 = <div className="blank">blank</div>
  }
  else {
    blank3 = <Education
      edu1={resumeObj.education[0].edu1}
      edu2={resumeObj.education[1].edu2}
    />
  }

  if (resumeObj.experience[0] === undefined) {
    blank4 = <div className="blank">blank</div>
  }
  else {
    blank4 = <Experience
      company={resumeObj.experience[0].company}
      year={resumeObj.experience[0].year}
      role={resumeObj.experience[0].role}
    />
  }

  if (resumeObj.extracurriculars[0] === undefined) {
    blank5 = <div className="blank">blank</div>
  }
  else {
    blank5 = <Extracurriculars
      extra={resumeObj.extracurriculars}
    />
  }




  return (
    <div className={`App ${styleTheme}`}>

      <Resume />
      <Name />
      <Hline />

      {blank1}
      {blank2}
      {blank3}
      {blank4}
      {blank5}

      {/* <Border>
        <Child />
      </Border> */}

      <List
        layout="decimal"
        itemList={items}
      />
      <List
        layout="uroman"
        itemList={items}
      />


      <Themebutton
        btnname="Light"
        btntype="btn-light"
      ></Themebutton>
      <Themebutton
        btnname="Dark"
        btntype="btn-dark"
      ></Themebutton>

    </div>
  );
}

export default App;
