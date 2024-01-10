const db = require('../database/database')
const express = require('express')
const bp = require('body-parser')

const app = express();
app.use(bp.urlencoded({ extended: false }));

app.use(bp.json())

exports.home = async (req, res) => {
    res.render('index')
}