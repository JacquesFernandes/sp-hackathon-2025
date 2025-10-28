import {BaseFacade} from "@/lib/facade/base";
import {AiClientFacade} from "@/lib/facade/ai-client/ai-client-facade";
import {MockClientFacade} from "@/lib/facade/mock-client/mock-client-facade";

export const buildFacade = (): BaseFacade => {
  if (process.env.APP_ENV === 'prod' && process.env.INVOCATION_ENDPOINT !== undefined) {
    return new AiClientFacade(process.env.INVOCATION_ENDPOINT);
  }

  return new MockClientFacade();
}