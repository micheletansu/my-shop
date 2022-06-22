const express = require('express');
const router = express.Router();
const desc = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make...`;
const data = [
    {
        title: 'Busta', desc, price: 4.01, star: true, leaf: false,
    },
    {
        title: 'Foglio', desc, price: 2.15, star: false, leaf: true,
    },
    {
        title: 'Biglietto', desc, price: 1.99, star: true, leaf: true,
    },
    {
        title: 'Carta di credito', desc, price: 5.00, star: true, leaf: true,
    },
    {
        title: 'Carta di debito', desc, price: 1.00, star: false, leaf: false,
    },
    {
        title: 'Protezione', desc, price: 20.00, star: false, leaf: false,
    },
]

router.get('/', (req, res) => res.json(data));

module.exports = router;