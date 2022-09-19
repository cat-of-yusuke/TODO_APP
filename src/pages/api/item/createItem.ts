import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/prisma";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST":
      createItem(req, res);
      break;
    default:
      return res.status(405).json({ error: "Method not allowed." });
  }
};

const createItem = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, title, dueDate, memo } = req.body;

  try {
    const result = await prisma.item.create({
      data: {
        id: id,
        title: title,
        dueDate: dueDate,
        memo: memo,
        isDone: false,
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
