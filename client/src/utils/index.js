import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompt){
    const random = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[random];

    if(randomPrompt === prompt) return getRandomPrompt(prompt);

    return randomPrompt;
}