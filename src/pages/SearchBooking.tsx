// import { FormEvent, useState, useEffect } from "react";
// import { styles } from "../constants/styles";
// import { useTheme } from "../context/ThemeContext";
// import { TBooking, TEvent } from "../types";
// import { searchBooking, editBooking, getEvents } from "../services/index";

// export default function SearchBooking() {
//     const { theme } = useTheme();
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState<string | null>(null);
//     const [booking, setBooking] = useState<TBooking | null>(null);
//     const [isEditing, setIsEditing] = useState(false);
//     const [editForm, setEditForm] = useState<Partial<TBooking>>({});
//     const [events, setEvents] = useState<TEvent[]>([]);

//     useEffect(() => {
//         getEvents().then(setEvents);
//     }, []);

//     const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         setIsLoading(true);
//         setError(null);
//         setBooking(null);

//         try {
//             const form = e.currentTarget;
//             const formData = new FormData(form);
//             const email = formData.get('email') as string;

//             const result = await searchBooking(email);
//             setBooking(result);
//         } catch (err) {
//             setError(err instanceof Error ? err.message : 'Booking not found');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const handleEdit = async (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         setIsLoading(true);
//         setError(null);

//         try {
//             if (!booking?.id) throw new Error('No booking to edit');
//             await editBooking(booking.id, editForm);
//             const updatedBooking = await searchBooking(editForm.email || booking.email);
//             setBooking(updatedBooking);
//             setIsEditing(false);
//         } catch (err) {
//             setError(err instanceof Error ? err.message : 'Failed to update booking');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div className={`${styles.padding} ${theme.background} ${styles.booking.container}`}>
//             <h1 className={`${theme.text} ${styles.booking.h1}`}>
//                 Search Your Booking
//             </h1>
            
//             <form onSubmit={handleSubmit} className={`${styles.booking.form}`}>
//                 <div className={`${styles.booking.formHolder}`}>
//                     <input 
//                         type="email" 
//                         name="email" 
//                         placeholder="Enter your email" 
//                         required
//                         className={styles.booking.input}
//                     />
//                 </div>
//                 <div className={styles.booking.buttonHolder}>
//                     {error && (
//                         <div className="text-red-500 text-center p-4">
//                             {error}
//                         </div>
//                     )}
//                     <button 
//                         type="submit" 
//                         className={`${theme.button.primary}`}
//                         disabled={isLoading}
//                     >
//                         {isLoading ? 'Searching...' : 'Search'}
//                     </button>
//                 </div>
//             </form>

//             {booking && !isEditing && (
//                 <div className={`${styles.booking.resultHolder} ${theme.background}`}>
//                     <h2 className={`${theme.text} text-xl font-bold mb-4`}>Booking Details</h2>
//                     <div className={`${theme.text} space-y-2`}>
//                         <p>Event: {booking.eventTitle}</p>
//                         <p>Name: {booking.name}</p>
//                         <p>Email: {booking.email}</p>
//                         <p>Phone: {booking.phone}</p>
//                         <button 
//                             onClick={() => {
//                                 setIsEditing(true);
//                                 setEditForm(booking);
//                             }}
//                             className={theme.button.secondary}
//                         >
//                             Edit Booking
//                         </button>
//                     </div>
//                 </div>
//             )}

//             {isEditing && booking && (
//                 <form onSubmit={handleEdit} className={`${styles.booking.form}`}>
//                     <div className={`${styles.booking.formHolder}`}>
//                         <input 
//                             type="text"
//                             value={editForm.name || ''}
//                             onChange={e => setEditForm({...editForm, name: e.target.value})}
//                             placeholder="Name"
//                             className={styles.booking.input}
//                         />
//                         <input 
//                             type="email"
//                             value={editForm.email || ''}
//                             onChange={e => setEditForm({...editForm, email: e.target.value})}
//                             placeholder="Email"
//                             className={styles.booking.input}
//                         />
//                         <input 
//                             type="tel"
//                             value={editForm.phone || ''}
//                             onChange={e => setEditForm({...editForm, phone: e.target.value})}
//                             placeholder="Phone"
//                             className={styles.booking.input}
//                         />
//                         <select
//                             value={editForm.eventId || ''}
//                             onChange={e => setEditForm({
//                                 ...editForm, 
//                                 eventId: e.target.value,
//                                 eventTitle: events.find(event => event.id === e.target.value)?.title || ''
//                             })}
//                             className={`${styles.booking.input} cursor-pointer`}
//                         >
//                             <option value="">Select Event</option>
//                             {events.map(event => (
//                                 <option key={event.id} value={event.id}>
//                                     {event.title} - {new Date(event.date).toLocaleDateString()}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>
//                     <div className={styles.booking.buttonHolder}>
//                         <button 
//                             type="submit" 
//                             className={theme.button.primary}
//                             disabled={isLoading}
//                         >
//                             {isLoading ? 'Updating...' : 'Update Booking'}
//                         </button>
//                         <button 
//                             type="button"
//                             onClick={() => setIsEditing(false)}
//                             className={theme.button.secondary}
//                         >
//                             Cancel
//                         </button>
//                     </div>
//                 </form>
//             )}
//         </div>
//     );
// } 