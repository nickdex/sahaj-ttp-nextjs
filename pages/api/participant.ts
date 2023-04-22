import createClient from 'edgedb';
import { NextApiRequest, NextApiResponse } from 'next';

export const client = createClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const participants = await client.query(
        `select Participant {
            full_name,
            age,
            id,
            teacher,
            avatar_url,
            email,
            gender,
        };`
    )
    res.status(200).json(participants);
}