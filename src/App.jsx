import { useState } from 'react';

function App() {

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    subjects: [],
    preview: '',
    about: {
      experience: '',
      certificates: '',
      teachingMethodology: ''
    },
    education: {
      school: '',
      year: '',
      description: ''  
    },
    certificates: [],
    photo: null,
    video: '',
    pricing: null
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    // submit form
  }

  switch(step) {

    case 1:
      return <SubjectStep 
        formData={formData}
        onNext={() => setStep(2)}
      />
    
    case 2:
      return <PreviewStep 
        formData={formData}
        handleChange={handleChange}
        onNext={() => setStep(3)}
      />

    case 3:
      return <AboutStep
        formData={formData}
        handleChange={handleChange}
        onNext={() => setStep(4)}  
      />
    
    // additional cases

    case 7:
      return <ConfirmStep
        formData={formData}
        onSubmit={handleSubmit}
      />
    
    default:

      return <div>Invalid step <button onClick={()=>setStep(1)}>Initial</button></div>
  }

}

// SubjectStep
const SubjectStep = ({formData, onNext}) => {

  // const handleSelect = subject => {
  //   const subjects = [...formData.subjects, subject];
  //   setFormData({...formData, subjects});
  // }

  return (
    <div>
      <h1>Select Subjects</h1>

      {/* checkboxes for subjects */}

      <button onClick={onNext}>Next</button>
    </div>
  )
}
// AboutStep
const AboutStep = ({formData, handleChange, onNext}) => {

  return (
    <div>
      <h2>About You</h2>
      
      <h3>Experience</h3>
      <textarea
        name="about.experience"
        value={formData.about.experience}
        onChange={handleChange}
      />

      <h3>Certificates</h3>
      <textarea
        name="about.certificates"
        value={formData.about.certificates}  
        onChange={handleChange}
      />

      <h3>Teaching Methodology</h3>
      <textarea
        name="about.teachingMethodology"
        value={formData.about.teachingMethodology}
        onChange={handleChange}  
      />
      
      <button onClick={onNext}>
        Next
      </button>

    </div>
  );
}

// PreviewStep
const PreviewStep = ({formData, handleChange, onNext}) => {
  
  return (
    <div>
      <h1>Preview</h1>

      <textarea
        name="preview"
        value={formData.preview}
        onChange={handleChange}
        maxLength={20}
      />

      <button onClick={onNext}>Next</button>
    </div>
  )
}

// additional step components

export default App;