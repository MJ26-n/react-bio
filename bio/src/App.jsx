import "./App.css";
function Introduction (props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.bio}.</p>
    </div>
  );
}

function Skills (props) {
  return(
    <div>
      <h2>{props.title}</h2>
      <p>{props.skills}</p>
    </div>
  )
}

function Contact (props) {
return(
  <div>
    <h2>My contact information</h2>
    <p>Phone: {props.phone}</p>
  </div>
)

}
function App() {
  const name = "Joy";
  return(
    <div>
      <h1>My Bio Page</h1>
<Introduction
name="Joy"
bio="I am learning React"
/>

<Introduction
name="Mutia"
bio="I enjoy learning React"
/>

<h2>My Skills</h2>
<Skills
title="Frontend Skills"
skills="HTML,Javascript,CSS"
/>
<Skills
    
      title="Other skills that I am learning"
      skills="Git,firebase"
 />
<Contact
phone="+254792627098"
/>
    </div>

  );
}

export default App;