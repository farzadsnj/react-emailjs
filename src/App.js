import "./App.css";
import emailjs from 'emailjs-com';
import {useState} from 'react'

function App() {

  const [toName, settoName] = useState('')
  const [formEmail, setformEmail] = useState('')
  const [message, setmessage] = useState('')

  const onSubmit = () => {
    const templateParams = {
      to_name: toName,
      from_name: formEmail,
      message: message
  };

    emailjs.send('service_1yajczk','template_ge24plk', templateParams, 'kYaUFSIdwBA3MStoB')
	.then((response) => {
	   console.log('SUCCESS!', response.status, response.text);
	}, (err) => {
	   console.log('FAILED...', err);
	});
  }

  return (
    <div className="App">
      <div className="container">
        <form id="contact">
          <h3>Colorlib Contact Form</h3>
          <h4>Contact us for custom quote</h4>

          <input
            placeholder="Your name"
            type="text"
            required
            onChange={(e)=> settoName(e.target.value)}
          />
          <input
            placeholder="Your Email Address"
            type="email"
            required
            onChange={e=> setformEmail(e.target.value)}
          />

          <textarea
            placeholder="Type your message here...."
            required
            onChange={e=> setmessage(e.target.value)}
          ></textarea>

          <button
            name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"
            onClick={onSubmit}
          >
            Submit
          </button>
          <p className="copyright">
            Designed by{"Farzad Sanjarani"}
            {/* <a href="https://colorlib.com" target="_blank" title="Colorlib"> */}
              Colorlib
            {/* </a> */}
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;
