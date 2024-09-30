export default async function handler(req, res) {
  const response = await fetch('YOUR_CLOUD_FUNCTION_URL');
  const data = await response.json();
  res.status(200).json(data);
}
