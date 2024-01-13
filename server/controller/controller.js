const db = require('../database/database')
const express = require('express')
const bp = require('body-parser')

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
    res.render('workshop.ejs', { title: 'workshop' })
};