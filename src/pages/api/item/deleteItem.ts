import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/prisma";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST":
      removeItem(req, res);
      break;
    default:
      return res.status(405).json({ error: "Method not allowed." });
  }
};

const removeItem = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.body;
  console.log("id: " + id);
  try {
    await prisma.item.delete({
      where: {
        id: id,
      },
    });

    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(403).json({ ok: false, err: "Error has occcured" });
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
};

export default handler;