"use server";

import { db } from "@/db";
import {
  CaseColor,
  CaseFinish,
  CaseMaterial,
  PhoneModel,
} from "@prisma/client";

export type SaveConfigArgs = {
  color: CaseColor;
  material: CaseMaterial;
  model: PhoneModel;
  finish: CaseFinish;
  configId: string;
};

export const saveConfig = async ({
  color,
  material,
  model,
  finish,
  configId,
}: SaveConfigArgs) => {
  await db.configuration.update({
    where: { id: configId },
    data: { color, material, model, finish },
  });
};
