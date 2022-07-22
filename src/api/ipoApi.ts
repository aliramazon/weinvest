class FinnhubAPI {
    async fetchIPOCalendar(from: string, to: string) {
        try {
            const response = await fetch(
                `https://finnhub.io/api/v1/calendar/ipo?from=${from}&to=${to}&token=${process.env.REACT_APP_FINNHUB_API_KEY}`
            );
            const data = await response.json();

            return data;
        } catch (error) {
            throw error;
        }
    }
}

export { FinnhubAPI };
