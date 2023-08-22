
function BookingViewer({ bookings }) {
    return (
        <div>
            <h2>Available Bookings</h2>
            <ul>
                {bookings.map((booking, index) => (
                    <li key={index}>
                        <strong>Date:</strong> {booking.date}<br />
                        <strong>Time:</strong> {booking.time}<br />
                        <strong>Guests:</strong> {booking.guests}<br />
                        <strong>Occasion:</strong> {booking.occasion}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookingViewer;