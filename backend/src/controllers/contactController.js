const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

const submitContact = async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Save to DB if possible
    try {
      const contact = new Contact({ name, email, message: `Subject: ${subject}\n\n${message}` });
      await contact.save();
    } catch (dbError) {
      console.log('DB save failed, proceeding with email:', dbError.message);
    }

    // Send email immediately
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: email,
      to: 'heritagetohealth1@zohomail.com',
      subject: `Contact Form: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
        <p><strong>Location:</strong> Arusha, Tanzania</p>
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Thank you for contacting us! We will get back to you soon.' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, message: 'Failed to submit contact form' });
  }
};

const submitPartnership = async (req, res) => {
  const { name, email, organization, partnershipType, message } = req.body;

  try {
    // Save to DB if possible
    try {
      const contact = new Contact({
        name,
        email,
        message: `Partnership Interest:\nOrganization: ${organization}\nType: ${partnershipType}\n\n${message}`
      });
      await contact.save();
    } catch (dbError) {
      console.log('DB save failed, proceeding with email:', dbError.message);
    }

    // Send email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: email,
      to: 'heritagetohealth1@zohomail.com',
      subject: 'New Partnership Interest Submission',
      html: `
        <h3>New Partnership Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Partnership Type:</strong> ${partnershipType}</p>
        <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Thank you for your partnership interest! We will contact you soon.' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, message: 'Failed to submit partnership form' });
  }
};

module.exports = { submitContact, submitPartnership };
