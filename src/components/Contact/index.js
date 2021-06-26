import { useForm } from "react-cool-form";
import Grid from '@material-ui/core/Grid';
import React from 'react';
import emailjs from 'emailjs-com';

const Field = ({ label, id, error, ...rest }) => (
  <div className='div-P'>
    <label htmlFor={id}>{label}</label>
    <input id={id} {...rest} />
    {error && <p className="form-p">{error}</p>}
  </div>
);

function Contact() {
  const { form, use } = useForm({
    // (Strongly advise) Provide the default values just like we use React state
    defaultValues: { username: "", email: "", password: "" },
    // The event only triggered when the form is valid
    onSubmit: (values) => alert(JSON.stringify(values, undefined, 2))
  });
  // We can enable the "errorWithTouched" option to filter the error of an un-blurred field
  // Which helps the user focus on typing without being annoyed by the error message
  const errors = use("errors", { errorWithTouched: true });

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_yxj24zi', 'template_kmmt06h', e.target, 'user_CRd20x0pFCUsDeI6n0iwQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }


  return (
    <div className='info-section' id='contact'>
    <Grid container spacing={6}>
        <Grid item xs={12} sm={6}> 
        <img src="img/contact.svg"/>
        </Grid>
        <Grid item xs={12} sm={6} >
            <h2 className="title-section conth">Get In Touch</h2>
            <form className="form-f" onSubmit={sendEmail}>
            <Field className="form-field"
                label="Name"
                id="username"
                name="username"
                required
                error={errors.username}
            />
            <Field className="form-field"
                label="Email"
                id="email"
                name="email"
                type="email"
                required
                error={errors.email}
            />
            <Field className="form-field"
                label="Subject"
                id="subject"
                name="subject"
                type="subject"
                required
            />
            <Field className="form-field"
                label="Message"
                id="message"
                name="message"
                type="textarea"
                required
            />
            <input class="submit-contact" type="submit" className="form-field" />
            </form>
        </Grid>
    </Grid>
    
    </div>
  );
}

export default Contact;