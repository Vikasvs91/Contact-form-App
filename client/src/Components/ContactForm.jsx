import React, {useState} from "react";
import '../App.css';

function ContactForm(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [responseMessage, setResponseMessage] = useState('');
    
    //Validate form fields
    const validate = () => {
        let tempErrors = {};
        if (!formData.name.trim()) tempErrors.name = "Name is required.";
        if (!formData.email){
            tempErrors.email = "Email is required.";
        }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)){
            tempErrors.email = "Email is not Valid.";
        }
        if (!formData.message.trim()) tempErrors.message = "Message is reqiured.";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    //Handle input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setErrors({
            ...errors,
            [e.target.name]: ""
        });
    };

    
    //Handle form submission
    const handleSubmit =  (e) => {
        e.preventDefault();

        if (!validate()) return;

        //Save data to localStorage
        localStorage.setItem('formData', JSON.stringify(formData));

        setResponseMessage('Form Submitted Successfully!');
        setFormData({name: '', email: '', message: ''});
       
    };

    return(
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h2>Contact Us</h2>
          
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                {errors.name && <p className="error">{errors.name}</p>}
  
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                {errors.email && <p className="error">{errors.email}</p>}
  
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                {errors.message && <p className="error">{errors.message}</p>}
  
                <button type="submit">Submit</button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
}

export default ContactForm;