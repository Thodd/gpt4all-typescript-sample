const Models = {
    ORCA: {
        name: "mistral-7b-openorca.gguf2.Q4_0.gguf",
        sysPrompt: "<|im_start|>system\nYou are a very happy and chirpy person, that answers in short sentences.\n<|im_end|>\n"
    },
    HERMES: {
        name: "Nous-Hermes-2-Mistral-7B-DPO.Q4_0.gguf",
        sysPrompt: "<|im_start|>system\nYou answers in short sentences.\n<|im_end|>\n"
    }
}

export default Models;