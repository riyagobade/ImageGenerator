import * as dotenv from "dotenv";
import axios from "axios";
import { createError } from "../error.js";

dotenv.config();

export const generateImage = async (req, res, next) => {
  try {
    const { prompt } = req.body;

    const response = await axios.post(
      `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/ai/run/@cf/black-forest-labs/flux-1-schnell`,
      {
        prompt,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    return res.status(200).json({
      photo: response.data.result.image,
    });

  } catch (error) {
    console.log(
      error.response?.data || error.message
    );

    next(
      createError(
        error.response?.status || 500,
        error.response?.data?.errors?.[0]?.message ||
          error.message
      )
    );
  }
};