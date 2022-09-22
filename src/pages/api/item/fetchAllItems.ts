import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/prisma";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      fetchAllItems(req, res);
      break;
    default:
      return res.status(405).json({ error: "Method not allowed." });
  }
};

const fetchAllItems: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const items = await prisma.item.findMany();
    return res.status(200).json({ items });
  } catch (error) {
    res.status(403).json({ ok: false, err: "Error has occcured" });
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
};
export default handler;
