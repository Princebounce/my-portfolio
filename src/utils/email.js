import emailjs from '@emailjs/browser';

const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    await emailjs.send(
      'service_yuusnh8',
      'template_n14eu5i',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'layomide81@gmail.com'
      },
      '8qk7hth9wEwhikysT'
    );
    
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  } catch (error) {
    alert('Failed to send message. Please try again.');
  }
};
