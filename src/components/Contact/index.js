import { useForm } from "react-cool-form";
import Grid from '@material-ui/core/Grid';

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

  return (
    <div className='info-section' id='contact'>
    <Grid container spacing={6}>
        <Grid item xs={12} sm={6}> 
        <img src="img/contact.svg"/>
        </Grid>
        <Grid item xs={12} sm={6} >
            <h2 className="title-section conth">Get In Touch</h2>
            <form ref={form} noValidate className="form-f">
            <Field className="form-field"
                label="Username"
                id="username"
                name="username"
                // Support built-in validation
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
                label="Password"
                id="password"
                name="password"
                type="password"
                required
                minLength={8}
                error={errors.password}
            />
            <input class="submit-contact" type="submit" className="form-field" />
            </form>
        </Grid>
    </Grid>
    
    </div>
  );
}

export default Contact;