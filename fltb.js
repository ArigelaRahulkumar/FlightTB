// Function to handle form submission for login
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    // Make API request to login endpoint with email and password
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
      // Handle response data
      if (data.success) {
        // Redirect the user to the dashboard or homepage
        window.location.href = '/dashboard';
      } else {
        // Display an error message
        const errorMessage = document.getElementById('loginErrorMessage');
        errorMessage.textContent = data.message;
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  
  // Function to handle form submission for signup
  function handleSignup(event) {
    event.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
  
    // Make API request to signup endpoint with name, email, and password
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    })
    .then(response => response.json())
    .then(data => {
      // Handle response data
      if (data.success) {
        // Redirect the user to the dashboard or homepage
        window.location.href = '/dashboard';
      } else {
        // Display an error message
        const errorMessage = document.getElementById('signupErrorMessage');
        errorMessage.textContent = data.message;
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  
  // Add event listeners to the forms
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', handleLogin);
  
  const signupForm = document.getElementById('signupForm');
  signupForm.addEventListener('submit', handleSignup);
  const mongoose = require('mongoose');

  // Connect to MongoDB
  mongoose.connect('mongodb://localhost/flight-booking', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));
    const { Schema, model } = require('mongoose');

    // Define the Flight schema
    const flightSchema = new Schema({
      flightNumber: {
        type: String,
        required: true,
        unique: true,
      },
      departure: {
        type: Date,
        required: true,
      },
      // Add other flight properties as needed
    });
    
    // Create the Flight model
    const Flight = model('Flight', flightSchema);
    const newFlight = new Flight({
        flightNumber: 'FL123',
        departure: new Date('2023-07-10T10:00:00Z'),
        // Set other flight properties
      });
      
      newFlight.save()
        .then((flight) => {
          console.log('Flight created:', flight);
        })
        .catch((err) => {
          console.error('Error creating flight:', err);
        });
// Find flights based on criteria
Flight.find({ departure: { $gt: new Date() } })
  .then((flights) => {
    console.log('Flights:', flights);
  })
  .catch((err) => {
    console.error('Error finding flights:', err);
  });

// Find a flight by flight number
Flight.findOne({ flightNumber: 'FL123' })
  .then((flight) => {
    console.log('Flight:', flight);
  })
  .catch((err) => {
    console.error('Error finding flight:', err);
  });
         // Find flights based on criteria
Flight.find({ departure: { $gt: new Date() } })
.then((flights) => {
  console.log('Flights:', flights);
})
.catch((err) => {
  console.error('Error finding flights:', err);
});

// Find a flight by flight number
Flight.findOne({ flightNumber: 'FL123' })
.then((flight) => {
  console.log('Flight:', flight);
})
.catch((err) => {
  console.error('Error finding flight:', err);
});
Flight.findOneAndUpdate(
    { flightNumber: 'FL123' },
    { departure: new Date('2023-07-10T12:00:00Z') },
    { new: true }
  )
    .then((flight) => {
      console.log('Updated flight:', flight);
    })
    .catch((err) => {
      console.error('Error updating flight:', err);
    });
    Flight.findOneAndDelete({ flightNumber: 'FL123' })
    .then(() => {
      console.log('Flight deleted');
    })
    .catch((err) => {
      console.error('Error deleting flight:', err);
    });
    const express = require('express');
    const app = express();
    const port = 3000; // Set the desired port number
    
    // Middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    
    // Routes
    app.get('/', (req, res) => {
      res.send('Flight Ticket Booking App');
    });
    
    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
// User Authentication Routes
app.post('/api/login', loginHandler);
app.post('/api/signup', signupHandler);

// Flight Management Routes
app.post('/api/flights', addFlightHandler);
app.delete('/api/flights/:flightId', removeFlightHandler);
// Login Handler
function loginHandler(req, res) {
    // Extract request data
    const { email, password } = req.body;
  
    // Perform login logic
    // Example: Check user credentials, generate session, etc.
  
    // Return response
    res.json({ success: true, message: 'Login successful' });
  }
  
  // Signup Handler
  function signupHandler(req, res) {
    // Extract request data
    const { name, email, password } = req.body;
  
    // Perform signup logic
    // Example: Create user account, store data, etc.
  
    // Return response
    res.json({ success: true, message: 'Signup successful' });
  }
  
  // Add Flight Handler
  function addFlightHandler(req, res) {
    // Extract request data
    const { flightNumber, departure } = req.body;
  
    // Perform flight addition logic
    // Example: Create flight record, store data, etc.
  
    // Return response
    res.json({ success: true, message: 'Flight added successfully' });
  }
  
  // Remove Flight Handler
  function removeFlightHandler(req, res) {
    // Extract flight ID from request parameters
    const flightId = req.params.flightId;
  
    // Perform flight removal logic
    // Example: Find flight by ID, delete record, etc.
  
    // Return response
    res.json({ success: true, message: 'Flight removed successfully' });
  }
             