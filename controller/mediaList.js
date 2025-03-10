import client from "../prismaClient.js";

export default async function getAarmy(req, res) {
  const { skip, take } = req.body;
  const list = await client.qwer_videos.findMany({
    skip: skip,
    take: take,
  });
  console.log(list);
  return res.json(list);
}

export async function geOriginal(req, res) {
  const list = await client.qwer_videos.findMany();
  console.log(list);
}
