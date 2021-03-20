const router = require('express').Router();

const { budget } = require('../../data/budget');

router.get('/budget', (req, res) => {
    let results = budget;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

router.get('/budget/:id', (req, res) => {
    const reulst = findById(req.params.id, budget);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

router.post('/budget', (req, res) => {
    req.body.id = budget.length.toString();
if (!validateBudget(req.body)) {
    res.status(400).send("The budget is not properly formatted");
    } else {
        const budget = createNewbudget(req.body, budget);
        res.json(budget);
    }
});
module.exports = router;