import {
  handleForceCloseIfAny,
  promptDirOrFile,
  promptFunctionName,
  promptsUseIndexPattern,
} from "../../../utils/prompters";
import { generateMiddleware } from "./generator";

const CONTEXT = "Middleware";

export const promptGenerateMiddleware = async () => {
  try {
    const useIndex = await promptsUseIndexPattern();
    const adapterName = await promptFunctionName(CONTEXT);
    const adapterFile = await promptDirOrFile(CONTEXT, useIndex);

    generateMiddleware(adapterFile, adapterName, useIndex);
  } catch (error) {
    handleForceCloseIfAny(error);
  }
};