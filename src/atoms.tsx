import { atom, selector } from "recoil";

export const minuteState = atom({
    key: "minutes",
    default: 0,
});

export const hourSelector = selector({
    key: "hours",
    get: ({get}) => {
        const minutes = get(minuteState)
        return minutes/60;
    },
    // hours input이 miuntes atom을 수정하는 역할
    set: ({set},newValue) => {
        const minutes = Number(newValue) * 60;
        set(minuteState, minutes);
    }
});
