import express from "express";
import * as dotenv from "dotenv";
import { OpenAI } from "openai";
import axios from 'axios';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ message: 'Prompt is required' });
    }

    // Try OpenAI first
    try {
      const aiResponse = await openai.images.generate({
        prompt,
        n: 1,
        size: '1024x1024',
        response_format: 'b64_json',
      });

      const image = aiResponse.data[0].b64_json;
      return res.status(200).json({ photo: image });
    } catch (openaiError) {
      console.error("OpenAI API error:", openaiError);
      // If OpenAI fails, use placeholder service
      const placeholderUrl = `https://via.placeholder.com/1024x1024.png?text=${encodeURIComponent(prompt)}`;
      const placeholderResponse = await axios.get(placeholderUrl, { responseType: 'arraybuffer' });
      const base64Image = Buffer.from(placeholderResponse.data, 'binary').toString('base64');
      return res.status(200).json({ photo: base64Image });
    }
  } catch (error) {
    console.error("Error in DALL-E route:", error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
});

export default router;