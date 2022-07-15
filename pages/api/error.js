export default function handler(req, res) {
  console.error("You are not an authorized user")
  res.status(403).json({ error: 'You are not an authorized user' })
}
