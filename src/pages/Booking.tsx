import { FormEvent } from "react";
import { styles } from "../constants/styles";
import { useTheme } from "../context/ThemeContext";
import { useParams } from "react-router";
import { upcomingEvents } from "../constants";
import CalendarScene from '../components/CalendarScene';
import Swal from 'sweetalert2';

export default function Booking() {
    const { eventId } = useParams();
    const event = upcomingEvents.find(e => e.id === eventId);
    const { theme } = useTheme();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try {
            const form = e.currentTarget;
            const formData = new FormData(form);
            const data = {
                eventId,
                eventTitle: event?.title,
                ...Object.fromEntries(formData)
            };

            // Show loading alert
            Swal.fire({
                title: 'Processing...',
                text: 'Creating your booking',
                icon: 'info',
                allowOutsideClick: false,
                showConfirmButton: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            console.log('Booking submitted:', data);
            
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Show success alert
            await Swal.fire({
                title: 'Success!',
                text: 'Your booking has been confirmed',
                icon: 'success',
                confirmButtonText: 'Great!',
                confirmButtonColor: '#9B2242',
            });

            form.reset();
        } catch (error) {
            console.error('Booking error:', error);
            
            // Show error alert
            await Swal.fire({
                title: 'Oops...',
                text: error instanceof Error ? error.message : 'Something went wrong',
                icon: 'error',
                confirmButtonText: 'Try Again',
                confirmButtonColor: '#9B2242',
            });
        }
    };

    if (!event) return <div>Event not found</div>;

    return (
        <div className={`${styles.padding} ${theme.background} ${styles.booking.container}`}>
            <CalendarScene />
            <h1 className={`${theme.text} ${styles.booking.h1}`}>
                Book Event: {event.title}
            </h1>
            <div className={`${theme.text}  ${styles.booking.eventHolder} w-full`}>
                <div className={styles.booking.imageHolder}>
                    <img src={event.imageUrl} alt={event.title} className={styles.booking.image} />
                </div>
                <div className={`${styles.booking.pHolder} ${theme.background}`}>
                <p>Date: {event.date.toLocaleDateString()}</p>
                <p>Time: {event.startTime} - {event.endTime}</p>
                <p>Location: {event.location}</p>
                <p>Price: ${event.price}</p>
                </div>
            </div>
            
            <form onSubmit={handleSubmit} className={`${styles.booking.form}`}>
                <div className={`${styles.booking.formHolder} `}>
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
