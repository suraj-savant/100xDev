import { atom, selector } from "recoil";

export const networkAtom = atom({
    key:"networkAtom",
    default:102
})

export const jobsAtom = atom({
    key:"jobsAtom",
    default:10
})

export const messageAtom = atom({
    key:"messageAtom",
    default:12
})

export const notificationAtom = atom({
    key:"notificationAtom",
    default:8
})

export const totalNotificationSelector = selector({
    key:"totalNotificationSelector",
    get:({get})=>{
        return get(networkAtom) + get(jobsAtom) + get(messageAtom) + get(notificationAtom);
    }
})
