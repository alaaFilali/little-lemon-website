import React, { useState, useReducer, useEffect } from 'react';
import Nav from "./Nav"
import { useNavigate } from 'react-router-dom';
import Footer from "./Footer"
import BookingForm from "./BookingForm"
import BookingViewer from "./BookingViewer";


// Reducer function
const availableTimesReducer = (state, action) => {
    switch (action.type) {
        case 'INITIALIZE_TIMES':
            return action.payload; // Set available times based on the API response
        case 'UPDATE_TIMES':
            const updatedAvailableTimes = calculateUpdatedAvailableTimes(action.payload.selectedDate);
            return updatedAvailableTimes;
        default:
            return state;
    }
};

const calculateUpdatedAvailableTimes = async (selectedDate) => {
    try {
        const times = await window.fetchAPI(selectedDate);
        return times;
    } catch (error) {
        console.error('Error fetching available times:', error);
        return [];
    }
};

// Initializer function
const initializeTimesGlop = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];


function BookingPage() {
    const [bookings, setBookings] = useState([]);
    const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);
    const history = useNavigate();

    const addBooking = (booking) => {
        setBookings([...bookings, booking]);
    };

    useEffect(() => {
        async function initializeTimes() {
            try {
                const today = new Date();
                const times = await window.fetchAPI(today);
                dispatch({ type: 'INITIALIZE_TIMES', payload: times });
            } catch (error) {
                console.error('Error fetching available times:', error);
                dispatch({ type: 'INITIALIZE_TIMES', payload: initializeTimesGlop })
            }
        }

        initializeTimes();
    }, []);

    const submitForm = async (formData) => {
        try {
            const isSubmitted = await window.submitAPI(formData);
            if (isSubmitted) {
                history.push('/confirmed'); // Navigate to booking confirmed page
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return <>
        <Nav />
        <BookingForm
            availableTimes={availableTimes}
            onAddBooking={addBooking}
            dispatch={dispatch}
            submitForm={submitForm}
        />
        <BookingViewer bookings={bookings} />

        <Footer />
    </>
}

export default BookingPage;