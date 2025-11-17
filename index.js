const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.static(__dirname));

app.post('/count-vowels-consonants', (req, res) => {
    const { text } = req.body;

    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    let consonantCount = 0;

    for (let char of text) {
        if (/[a-zA-Z]/.test(char)) {
            if (vowels.includes(char)) {
                vowelCount++;
            } else {
                consonantCount++;
            }
        }
    }

    res.json({
        vowels: vowelCount,
        consonants: consonantCount,
        total: vowelCount + consonantCount
    });
});

app.post('/calculate-bmi', (req, res) => {
    const { weight, feet, inches } = req.body;

    const totalInches = (feet * 12) + inches;

    const bmi = (weight / (totalInches * totalInches)) * 703;

    res.json({
        bmi: bmi.toFixed(2)
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
