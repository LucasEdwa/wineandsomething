import { upcomingEvents } from "../constants";
import { useTheme } from "../context/ThemeContext";
import { styles } from "../constants/styles";
import { Link } from "react-router";
import { TEvent } from "../types";

export default function EventsHolder() {
    const { theme } = useTheme();
    
    return (
        <>
        <div className={`${styles.padding} ${theme.background}`}>
            <h1 className={`${theme.text} ${styles.events.title}`}>Upcoming Events</h1>
            <div className={`${styles.events.container}`}>
                {upcomingEvents.map((event: TEvent) => (
                    <Link key={event.id} to={`/booking/${event.id}`}>
                        <div className={`${styles.events.holder} ${theme.text}`}>
                            <h2 className={`${styles.events.title}`}>{event.title}</h2>
                            <p className={`${styles.events.p}`}>{event.description}</p>
                            <div className={`${styles.events.pHolder}`}>
                                <p className={`${styles.events.p}`}>
                                    <span>📅</span> {event.date.toLocaleDateString()}
                                </p>
                                <p className={`${styles.events.p}`}>
                                    <span>⏰</span> {event.startTime} - {event.endTime}
                                </p>
                                <p className={`${styles.events.p}`}>
                                    <span>📍</span> {event.location}
                                </p>
                                <p className={`${styles.events.p}`}>
                                    <span>👥</span> {event.currentAttendees}/{event.capacity}
                                </p>
                                <p className={`${styles.events.p}`}>
                                    <span>💰</span> ${event.price}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
        </>
    );
}
