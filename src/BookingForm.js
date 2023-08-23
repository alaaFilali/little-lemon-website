import React, { useState } from 'react';
// import { fetchAPI, submitAPI } from './api';

function BookingForm({ availableTimes, onAddBooking, dispatch,  }) {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [selectedOccasion, setSelectedOccasion] = useState('Birthday');
    const [error, setError] = useState('');


    const handleDateChange = async (event) => {
        setError('');
        const newSelectedDate = event.target.value;
        setSelectedDate(newSelectedDate);

        try {
            const times = await window.fetchAPI(newSelectedDate);
            dispatch({ type: 'UPDATE_TIMES', payload: { selectedDate: newSelectedDate, times } });
        } catch (error) {
            console.error('Error fetching available times:', error);
        }
        
    };

    const handleTimeChange = (event) => {
        setError('');
        setSelectedTime(event.target.value);
    };

    const handleGuestsChange = (event) => {
        const newGuests = parseInt(event.target.value);
        setNumberOfGuests(newGuests);
    };

    const handleOccasionChange = (event) => {
        setError('');
        setSelectedOccasion(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate fields
        if (!selectedDate || !selectedTime || !availableTimes.includes(selectedTime) || !selectedOccasion) {
            setError('Please fill in all fields.');
            return;
        }

        // Validate date
        if (!selectedDate) {
            setError('Please select a date.');
            return;
        }

        // Validate time
        if (!selectedTime || !availableTimes.includes(selectedTime)) {
            setError('Please select a valid time.');
            return;
        }

        const newBooking = {
            date: selectedDate,
            time: selectedTime,
            guests: numberOfGuests,
            occasion: selectedOccasion,
        };
        onAddBooking(newBooking); // Call the prop function to add the booking
    };

    return (
        <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={selectedDate} onChange={handleDateChange} />

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={selectedTime} onChange={handleTimeChange}>
                {availableTimes.map((time) => (
                    <option key={time}>{time}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={numberOfGuests}
                onChange={handleGuestsChange}
                required
            />

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={selectedOccasion} onChange={handleOccasionChange} required>
                <option value="">Select an occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <div className="error-message">{error}</div>
        
            <button type="submit" disabled={error !== ''}>Make Your reservation</button>
        </form>
    );
}

export default BookingForm;
