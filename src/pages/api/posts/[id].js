export default async function handler(req, res) {
  const postId = req.query.id;
  const response = await fetch(
    `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Posts`,
    {
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
      },
    },
  );
  const { records } = await response.json();

  const posts = records.map((record) => {
    return {
      id: record.id,
      ...record.fields,
    };
  });

  const filtered = posts.filter((post) => post.id === postId);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `{id} is not found` });
  }
}
