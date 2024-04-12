import OpenAI from "openai";
import { OPENAI_KEY_1 } from "./constantApi";
const openai = new OpenAI({
  apiKey: OPENAI_KEY_1,
  dangerouslyAllowBrowser: true, // defaults to process.env["OPENAI_API_KEY"]
});
export default openai;
