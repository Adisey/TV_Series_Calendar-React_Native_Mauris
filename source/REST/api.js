import { SCHEDULE_URL } from "./";

export const api = {
    async fetchSchedule (showDay, country) {
        const response = await fetch(`${SCHEDULE_URL}?date=${showDay}`, {
            method: "GET",
        });

        if (response.status !== 200) {
            throw new Error("Schedule not loaded");
        }
        const schedule  = await response.json();

        return schedule;
    },
};
