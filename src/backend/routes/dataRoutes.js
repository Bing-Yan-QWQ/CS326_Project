const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/data', async (req, res) => {
  try {
    const response = await db.post(req.body);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/data/:id', async (req, res) => {
  try {
    const doc = await db.get(req.params.id);
    res.status(200).json(doc);
  } catch (error) {
    res.status(404).json({ error: 'Not Found' });
  }
});


router.put('/data/:id', async (req, res) => {
  try {
    const doc = await db.get(req.params.id);
    const updatedDoc = { ...doc, ...req.body };
    const response = await db.put(updatedDoc);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.delete('/data/:id', async (req, res) => {
  try {
    const doc = await db.get(req.params.id);
    const response = await db.remove(doc);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
