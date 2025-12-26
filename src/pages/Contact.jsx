import "./Contact.css";

const Contact = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault(); // stop page reload

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    console.log(data);

    // optional: reset form
    event.target.reset();
  };

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <form onSubmit={handleFormSubmit} className="contact-form">
        <input
          type="text"
          className="form-control"
          required
          autoComplete="off"
          placeholder="Enter your name"
          name="username"
        />

        <input
          type="email"
          className="form-control"
          required
          autoComplete="off"
          placeholder="Enter your email"
          name="email"
        />

        <textarea
          className="form-control"
          name="message"
          rows={6}
          placeholder="Enter your message"
          required
        />

        <button type="submit" className="btn-submit">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
