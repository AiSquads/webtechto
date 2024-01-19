const db = require('../database/database')
const express = require('express')
const bp = require('body-parser')
const nodemailer = require('nodemailer')
const dbb = require('mongoose')
const { default: mongoose } = require('mongoose')
const dbs = mongoose.connection;
const app = express();
app.use(bp.urlencoded({ extended: false }));

app.use(bp.json())


exports.index = async (req, res) => {
    res.render('index.ejs', { title: 'Tectovia' })
};

exports.contact = async (req, res) => {
    res.render('contact.ejs', { title: 'Contact' })
};

exports.about_us = async (req, res) => {
    res.render('about_us.ejs', { title: 'About' })
};

exports.sign_in = async (req, res) => {
    res.render('sign_in.ejs', { title: 'Sign In' })
};

exports.sign_up = async (req, res) => {
    res.render('sign_up.ejs', { title: 'Sign Up' })
};
exports.workshop = async (req, res) => {
    res.render('workshop.ejs', { title: 'Workshop' })
};

// Nodemailer feedback Section
exports.feedback = async(req, res) => {
  const { name, email, message } = req.body;
  var maildbs = {
    Name: name,
    From: email,
    Message: message
  }
  
    // Create a Nodemailer transporter using SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'collegematterzz@gmail.com',
        pass: 'qrpu cxhe ulpn pnjh',
      },
    });
   
    // Email content
  const mailOptions = {
    from: email,
    to: 'collegematterzz@gmail.com', // Change this to your email address
    subject: 'Feedback',

    text: `Name: ${name}\nFrom: ${email}\nMessage: ${message}`,
  };
  console.log(mailOptions);
  dbs.collection('Feedback').insertOne(maildbs)
    .catch((err) => {
    alert('Resend the mail please')
  })
    .then(() => console.log("sent to collection"));
  
  
  
  
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error:', error.message);
        res.status(500).send('Internal Server Error');
      } else {
        console.log('Email sent:', info.response);
        console.log('email send Successfull')
        //res.render('contact.ejs',{ title: 'Contact' })
        res.render('contact',{ title: 'Contact' })
      }
    });
    

  };
  