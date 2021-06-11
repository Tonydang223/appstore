import React, { useContext } from "react";
// import "./Contact.scss";
import Fade from "react-reveal/Fade";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import ContactField from "./ContactField";
import ContactInputField from "./ContactInputField";
import { ContactContext } from "../../contexts/ContactContext";
import "../Contact/Contact.scss";
const Contact = () => {
  const { addContact } = useContext(ContactContext);
  const validate = Yup.object({
    fullName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Required"),
    phone: Yup.string()
      .matches(
        /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
        "Phone is invalid"
      )
      .required("Required"),
    message: Yup.string()
      .max(35, "Must be 35 characters or less")
      .required("Required"),
  });
  return (
    <>
      <Fade left cascade={true}>
        <Formik
          initialValues={{ fullName: "", email: "", phone: "", message: "" }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log(values);
            addContact(values);
            resetForm();
          }}
          validationSchema={validate}
        >
          {(formikProps) => {
            return (
              <section className="contact">
                <ContactField
                  className="contact__content"
                  title="Contact Us"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore molestiae magnam quaerat, in dolore eveniet
                    distinctio quos ea accusamus rerum?"
                />
                <div className="contact__container">
                  <div className="contact__container--info">
                    <div className="contact__info--box">
                      <ContactField
                        className="icon"
                        src="https://img.icons8.com/ios-glyphs/30/000000/address.png"
                        alt="address"
                      />

                      <ContactField
                        className="text"
                        content="Address"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quam, numquam."
                      />
                    </div>
                    <div className="contact__info--box">
                      <ContactField
                        className="icon"
                        src="https://img.icons8.com/metro/26/000000/phone.png"
                        alt="phone"
                      />

                      <ContactField
                        className="text"
                        content="Phone"
                        description="0941275946"
                      />
                    </div>
                    <div className="contact__info--box">
                      <ContactField
                        className="icon"
                        src="https://img.icons8.com/windows/50/000000/email-open.png"
                        alt="email"
                      />
                      <ContactField
                        className="text"
                        content="Email"
                        description="mytoandn@gmail.com"
                      />
                    </div>
                  </div>
                  <div className="contact__container--contactForm">
                    <Form>
                      <h2>Send Message</h2>
                      <ContactInputField
                        className="inputBox"
                        span="Full Name"
                        type="text"
                        name="fullName"
                      />

                      <ContactInputField
                        className="inputBox"
                        span="Email"
                        type="text"
                        name="email"
                      />
                      <ContactInputField
                        className="inputBox"
                        span="Phone"
                        type="text"
                        name="phone"
                      />
                      <ContactInputField
                        className="inputBox"
                        span="Type Your Message...."
                        type="text"
                        name="message"
                      />
                      <button type="submit">Send</button>
                    </Form>
                  </div>
                </div>
              </section>
            );
          }}
        </Formik>
      </Fade>
    </>
  );
};

export default Contact;
