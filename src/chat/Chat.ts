import { createCompletionGenerator, ChatSession, InferenceModel } from "gpt4all";
import Utils from "../Utils.js";

async function nextPrompt(chat:ChatSession) {

    const msg:string = await Utils.promptUser();

    if (msg !== "exit") {
        const gen = createCompletionGenerator(
            chat,
            msg,
            {}
        );

        await Utils.printGenerator(gen);

        await nextPrompt(chat);
    } else {
        throw new Error("exit");
    }
}

class Chat {
    #model:InferenceModel;
    #sysPrompt:string;

    constructor(model:InferenceModel, sysPrompt:string) {
        this.#model = model;
        this.#sysPrompt = sysPrompt;
    }

    async start() {
        // initialize a chat session on the model. a model instance can have only one chat session at a time.
        const chat = await this.#model.createChatSession({
            temperature: 0.8,
            systemPrompt: this.#sysPrompt
        });

        try {
            await nextPrompt(chat);
        } catch(e) {
            throw e;
        }
    }
}

export default Chat;