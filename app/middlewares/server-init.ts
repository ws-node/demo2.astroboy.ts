import { serverInit, IMiddlewaresScope, injectScope } from "@exoskeleton/core";
async function DI_INIT({ ctx: context, next }) {
    try {
        return await serverInit(context, next);
    }
    catch (error) {
        console.log("DI UNHANDLED ERROR : ");
        console.log(error);
    }
}
export = (options: any = {}, app: any) => async (ctx: any, next: any) => {
    return await DI_INIT(({ ctx, options, app, next } as any));
};
