
import './App.css'
import './components/Card'
import Card from './components/Card'

//importing images
import Ahnaf_profile from './assets/Ahnaf.jpeg'
import Ahnaf_background from './assets/AhnafBackground.jpeg';

import Anushil_profile from './assets/anushil.jpeg'
import Anushil_background from './assets/AnushilBackground.jpeg'

import James_profile from './assets/James.jpeg'
import James_background from './assets/JamesBackground.jpeg'

import p1 from './assets/profile1.jpg'
import p2 from './assets/profile2.jpeg'
import p3 from './assets/profile3.jpg'
import p4 from './assets/profile4.jpg'
import p5 from './assets/profile5.jpg'
import p6 from './assets/profile6.jpg'
import p7 from './assets/profile7.jpg'



function App() {


  return (

   
    <div>
      
      <div id="title"> <h2>Share Your Profile With Recruiters!</h2> </div>
      <div className="card-container">
      <Card backgroundImage={Ahnaf_background} profile_picture={Ahnaf_profile} name="Ahnaf Talukder" course="Web Development" role="Codepath student" goal='"Willing to work in fast-paced environment."' />
      <Card backgroundImage={Anushil_background} profile_picture={Anushil_profile} name="Anushil Adhikari" course="IOS Development" role="Codepath student" goal='"Looking for a prompt-engineering position."'/>
      <Card backgroundImage={James_background} profile_picture={James_profile} name="James Ngyuen" course="IOS Development" role="Codepath student" goal='"Intersted in Machine Learning."'/>
   
      
      <Card
      backgroundImage={p1}
      profile_picture={p1}
      name="John Smith"
      course="Data Science"
      role="Graduate Student"
      goal="Passionate about AI and machine learning."
     />

<Card
  backgroundImage={p3}
  profile_picture={p3}
  name="Maria Rodriguez"
  course="Digital Marketing"
  role="Marketing Specialist"
  goal="Looking to enhance brand presence online."
/>

<Card
  backgroundImage={p2}
  profile_picture={p2}
  name="David Johnson"
  course="Graphic Design"
  role="Freelance Designer"
  goal="Creating stunning visuals for clients."
/>

<Card
  backgroundImage={p6}
  profile_picture={p6}
  name="Sarah Davis"
  course="Mobile App Development"
  role="App Developer"
  goal="Building innovative mobile applications."
/>

<Card
  backgroundImage={p5}
  profile_picture={p5}
  name="Bryan Wilson"
  course="Business Administration"
  role="Entrepreneur"
  goal="Launching a successful startup."
/>

<Card
  backgroundImage={p4}
  profile_picture={p4}
  name="Chris Taylor"
  course="Cybersecurity"
  role="Security Analyst"
  goal="Protecting organizations from cyber threats."
/>

<Card
  backgroundImage={p7}
  profile_picture={p7}
  name="Jake Turner"
  course="Data Analytics"
  role="Data Analyst"
  goal="Analyzing data to drive business decisions."
/>

</div>
    </div>
    
    
  )
}

export default App
