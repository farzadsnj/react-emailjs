import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="container">
        <form id="contact" action="" method="post">
          <h3>Colorlib Contact Form</h3>
          <h4>Contact us for custom quote</h4>

          <input
            placeholder="Your name"
            type="text"
            tabindex="1"
            required
            autofocus
          />
          <input
            placeholder="Your Email Address"
            type="email"
            tabindex="2"
            required
          />

          <input
            placeholder="Your Phone Number (optional)"
            type="tel"
            tabindex="3"
            required
          />

          <input
            placeholder="Your Web Site (optional)"
            type="url"
            tabindex="4"
            required
          />

          <textarea
            placeholder="Type your message here...."
            tabindex="5"
            required
          ></textarea>

          <button
            name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"
          >
            Submit
          </button>
          <p class="copyright">
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
