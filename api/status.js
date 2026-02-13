export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://status.cafe/users/d3ofi/status.json"
    );

    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "failed to fetch status" });
  }
}
