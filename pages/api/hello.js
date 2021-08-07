// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
/* eslint no-use-before-define: 0 */  // --> OFF
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
