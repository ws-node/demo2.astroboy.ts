import { serverInit } from "@exoskeleton/core";

export default async function DI_INIT({ ctx: context, next }) {
  try {
    return await serverInit(context, next);
  } catch (error) {
    console.log("DI UNHANDLED ERROR : ");
    console.log(error);
  }
}
