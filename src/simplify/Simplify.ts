import { InferenceModel, createCompletionGenerator } from "gpt4all";
import fs from "node:fs";
import Utils from "../Utils.js";
import path from "node:path";

const Simplify = {
    async run(model:InferenceModel) {
        try {
            const filePath = path.resolve("./src/simplify/Code.js.txt");
            const fileContent = fs.readFileSync(filePath).toString();
            const gen = await createCompletionGenerator(
                model,
                "Please simplify the following JavaScript:\n" + fileContent,
                {}
            );

            await Utils.printGenerator(gen);

            model.dispose();
        } catch(e) {
            console.error(e);
        }

    }
}

export default Simplify;