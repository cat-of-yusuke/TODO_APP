import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import prisma from "./../../../../prisma/prisma";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST":
      changeDoneStatus(req, res);
      break;
    default:
      return res.status(405).json({ error: "Method not allowed." });
  }
};

type DataType = {
  id: string;
  isDone: boolean;
};
interface ReqType extends NextApiRequest {
  body: DataType;
}

const changeDoneStatus: NextApiHandler = async (
  req: ReqType,
  res: NextApiResponse
) => {
  const { id, isDone } = req.body;
  try {
    await prisma.item.update({
      where: {
        id: id,
      },
      data: {
        isDone: isDone,
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
