import React from 'react'

const ContactPage = () => {

  const handleFormSubmit = (formData) => {
    // console.log(formData.entries());
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <div className='section-contact'>
      <h2 className='container-title'>Feel free to contact us!</h2>
      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            className='form-control'
            required
            autoComplete='off'
            name='username'
            placeholder='Enter your name' />

          <input
            type="email"
            className='form-control'
            required
            autoComplete='off'
            name='email'
            placeholder='Enter your email' />

          <input
            type="text"
            className='form-control'
            required
            autoComplete='off'
            name='subject'
            placeholder='Enter your message title' />

          <textarea
            rows={10}
            className='form-control'
            required
            autoComplete='off'
            name='message'
            placeholder='Enter your message' />

          <button type='submit' value='send'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
