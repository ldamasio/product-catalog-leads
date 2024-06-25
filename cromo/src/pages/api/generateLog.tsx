import { NextApiRequest, NextApiResponse } from 'next';
import generateLog from '@/utils/generateLog';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { message } = req.body;

  if (!message) {
    res.status(400).json({ error: 'Missing message' });
    return;
  }

  try {
    generateLog(message);
    res.status(200).json({ message: 'Log generated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error generating log' });
  }
}
