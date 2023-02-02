const express = require('express');
const { getAsync } = require('../redis');
const {TODO_COUNT} = require("../util/const");
const router = express.Router();

/* GET statistics listing. */
router.get('/', async (_, res) => {
    let todoCount = await getAsync(TODO_COUNT);
    if (!todoCount) {
        todoCount = 0;
    }
    res.send({ 'added_todos': Number(todoCount) });
});

module.exports = router;