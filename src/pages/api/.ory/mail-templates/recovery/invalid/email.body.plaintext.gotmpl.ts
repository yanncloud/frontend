import { NextApiRequest, NextApiResponse } from 'next'

const template = `👋 Hi,

you (or someone else) entered this email address when trying to recover access to an account.

However, this email address is not on our database of registered users and therefore the attempt has failed.

If this was you, check if you signed up using a different address.

If this was not you, please ignore this email.`

export default function de(_req: NextApiRequest, res: NextApiResponse) {
  res.send(template)
}
