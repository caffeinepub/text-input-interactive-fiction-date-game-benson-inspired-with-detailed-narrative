import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Tone {
    isAnnoyed: boolean;
    isWarm: boolean;
    isRuleFocused: boolean;
}
export interface Response {
    text: string;
    actualTone: Tone;
}
export interface Request {
    text: string;
    intendedTone: Tone;
}
export interface backendInterface {
    askCharacter(request: Request): Promise<Response>;
    clearHistory(): Promise<void>;
    getHistory(): Promise<Array<Response>>;
}
