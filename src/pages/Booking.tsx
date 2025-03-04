import { FormEvent } from "react";
import { styles } from "../constants/styles";
import { useTheme } from "../context/ThemeContext";
import { useParams } from "react-router";
import { upcomingEvents } from "../constants";
import CalendarScene from '../components/CalendarScene';

export default function Booking() {
    const { eventId } = useParams();
    const event = upcomingEvents.find(e => e.id === eventId);
    const { theme } = useTheme();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        

        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = {
            eventId,
            eventTitle: event?.title,
            ...Object.fromEntries(formData)
        };
        console.log('Booking submitted:', data);
        form.reset();
    };

    if (!event) return <div>Event not found</div>;

    return (
        <div className={`${styles.padding} ${theme.background}`}>
            <CalendarScene />
            <h1 className={`${theme.text} text-2xl font-bold mb-4`}>
                Book Event: {event.title}
            </h1>
            <div className={`${theme.text} mb-6`}>
                <p>Date: {event.date.toLocaleDateString()}</p>
                <p>Time: {event.startTime} - {event.endTime}</p>
                <p>Location: {event.location}</p>
                <p>Price: ${event.price}</p>
            </div>
            
            <form onSubmit={handleSubmit} className={styles.booking.form}>
                <div className={styles.booking.formHolder}>
                    <input 
                        type="text" 
                        name="firstName" 
                        placeholder="First Name" 
                        required
                        className={styles.booking.input}
                    />
                    <input 
                        type="text" 
                        name="lastName" 
                        placeholder="Last Name" 
                        required
                        className={styles.booking.input}
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        required
                        className={styles.booking.input}
                    />
                    <input 
                        type="tel" 
                        name="phone" 
                        placeholder="Phone Number" 
                        required
                        className={styles.booking.input}
                    />
                </div>
                <div className={styles.booking.buttonHolder}>
                <button 
                    type="submit" 
                    className={`${theme.button.primary} `}
                >
                    Book Now
                </button>
                </div>
            </form>
        </div>
    );
}
