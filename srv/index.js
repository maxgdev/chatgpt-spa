// import { Configuration, OpenAIApi } from "openai";
require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");
const express = require("express")
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
// app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
const port = 3080
const configuration = new Configuration({
    organization: process.env.OPENAI_ORG_ID,
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

// app.get('/',async (req, res) => {
//     // const { message } = req.body;
//     const message = "Say this is a test"
//     const requestObj = {
//         model: "text-davinci-003",
//         prompt: message,
//         max_tokens: 12,
//         temperature: 0.2,
//     }
//     const response = await openai.createCompletion(requestObj);
//       console.log(requestObj.prompt)
//       console.log(response.data.choices[0].text)
//       console.log(response.data.usage)

//     res.json({
//         data: response.data
//         // data : response.data.choices[0].text
//     })
// })

app.post('/',async (req, res) => {
    const { message } = req.body;
    // const message = "Say this is a test"
    const requestObj = {
        model: "text-davinci-003",
        prompt: message,
        max_tokens: 40,
        temperature: 0.2,
    }
    const response = await openai.createCompletion(requestObj);
      console.log(requestObj.prompt)
      console.log(response.data.choices[0].text)
      console.log(response.data.usage)

    // res.json({
    //     data: response.data
    //     // data : response.data.choices[0].text
    // })
    // console.log("data", data)
    res.status(200).send('POST request was successful!');
})

app.listen(port, ()=> {
    console.log(`ChatGPT App listening on http://localhost:${port}`)
})