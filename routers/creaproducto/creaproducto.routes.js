const express = require('express');
const path = require('path');
const res = require('express/lib/response');

const { productos } = require('../../data/data')

const router = express.Router();

// Rutas
router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'));
});

module.exports = router; 