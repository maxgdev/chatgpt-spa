// import { Configuration, OpenAIApi } from "openai";
require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: process.env.OPENAI_ORG_ID,
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

const callAPI = async () => {
    const requestObj = {
        model: "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
    }
    const response = await openai.createCompletion(requestObj);
      console.log(requestObj.prompt)
      console.log(response.data.choices[0].text)
      console.log(response.data.usage)
}
callAPI()