require('dotenv').config();
const express = require('express');
const { Configuration, OpenAIAPI, OpenAI } = require("openai");
const cors = require("cors");

const app = express();
const port = 3000;

const openai = new OpenAI({
  apiKey: "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",
});
//const openai = new OpenAIAPI(configuration);

app.use(express.json());
app.use(cors());

app.post("/chat", async(req, res) => {
  const { message } = req.body;

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{role: "system", content:"I'm a cool assistant"}, {role: "user", content: message}],
  });

  const reply = completion.choices[0].message.content;

  res.json({ reply });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

