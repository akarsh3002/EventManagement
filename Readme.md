Task: Event Booking System with Node.js
Objective: Create a backend application for managing events and bookings. The system should allow
users to view events, book tickets, and handle event-related functionalities.
Requirements:
Event Management:
Implement endpoints to retrieve a list of events with details such as event name, date, time, venue,
available tickets, etc.
Include an endpoint to fetch details of a specific event by its ID.
Booking Functionality:
Develop APIs for booking tickets for an event. This should handle reservations, update available
ticket counts, and prevent overbooking.
Ensure proper validation to prevent booking more tickets than available or booking without required
information.
User Authentication (Bonus):
Implement basic authentication for users to track bookings by specific users. This could involve using
tokens or session management.
Persistence:
Use a simple database (e.g., MongoDB with Mongoose) to persist event and booking data.
Ensure that booking information is stored securely and can be retrieved accurately.
Error Handling:
Implement robust error handling for various scenarios (e.g., invalid requests, insufficient tickets,
database errors).
Code Quality:
Write clean, modular, and maintainable code following best practices for Node.js development.
Use appropriate middleware for routing, validation, and error handling.
Submission:
Fork a repository and create your solution in a new branch.
Provide clear documentation on how to run the application locally and any setup instructions.
Evaluation Criteria:
Functionality: Does the backend meet the outlined requirements, including event management,
booking, and authentication (if implemented)?
Code Quality: Is the backend code well-structured, readable, and maintainable? Does it adhere to
Node.js best practices?
Error Handling: How effectively are errors managed and communicated to clients?

Persistence: Is event and booking data persisted securely and efficiently?
Bonus Features: Were any bonus features (e.g., authentication) implemented, and how effectively?
Time Limit: 2 to 3 hours