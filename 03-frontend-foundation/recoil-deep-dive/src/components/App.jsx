import React from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import { jobsAtom, messageAtom, networkAtom, notificationAtom, totalNotificationSelector } from "../store/atoms/atoms";

export default function App() {

    return (
        <RecoilRoot>
            <MyApp />
        </RecoilRoot>
    )
}

function MyApp() {
    const networkNotificationCount = useRecoilValue(networkAtom);
    const jobsNotificationCount = useRecoilValue(jobsAtom);
    const messageNotificationCount = useRecoilValue(messageAtom);
    const notifiacationCount = useRecoilValue(notificationAtom);

    const totalNotificationCount = useRecoilValue(totalNotificationSelector);
    return (
        <>
            <button>Home</button>

            <button>MyNetwork({(networkNotificationCount > 99) ? "99+" : networkNotificationCount})</button>
            <button>Jobs({jobsNotificationCount})</button>
            <button>Messaging({messageNotificationCount})</button>
            <button>Notification({notifiacationCount})</button>

            <button>Me({totalNotificationCount})</button>
        </>
    )
}

