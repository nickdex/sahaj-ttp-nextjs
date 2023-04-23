import createClient from 'edgedb'
import { NextApiRequest, NextApiResponse } from 'next'

export const client = createClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
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
    res.status(200).json(participants)
  } else {
    const result = await client.execute(
      `insert Participant { full_name := <str>$full_name, teacher := <str>$teacher, email := <str>$email, gender := <Gender>$gender}`,
      req.body
    )

    res.status(201).json(result)
  }
}
