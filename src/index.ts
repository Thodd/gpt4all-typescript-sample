import { loadModel, createCompletionGenerator, ChatSession, createCompletion } from "gpt4all";
import Chat from "./chat/Chat";
import Models from "./Models";
import Simplify from "./simplify/Simplify";



(async () => {

    const modelConfig = Models.HERMES;

    const model = await loadModel(modelConfig.name,{
        verbose: true, // logs loaded model configuration
        //device: "gpu", // defaults to 'cpu'
        nCtx: 2048, // the maximum sessions context window size.
    });

    try {
        const chat = new Chat(model, modelConfig.sysPrompt);
        await chat.start();
		//await Simplify.run(model);
    } catch(e) {
        model.dispose();
    }

})();