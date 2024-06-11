const express = require("express");
const Event = require("./models/Event");
const Booking = require('./models/Booking')
const path = require("path");
const methodOverride = require('method-override')
const app = express();
const wrapAsync = require('./wrapAsync')
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/EventManagement").then(() => {
  console.log("Connected to DB");
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/events", wrapAsync(async (req, res) => {
  const events = await Event.find({});
  res.render("all", { events });
}));

app.get("/events/new", (req, res) => {
  res.render("new");
});

app.post("/events", wrapAsync(async (req, res) => {
  const { name, date, time, venue, availableTickets } = req.body;
  const newEvent = new Event({
    name: name,
    date: date,
    time: time,
    venue: venue,
    availableTickets: availableTickets,
  });
  await newEvent.save();
  res.redirect("/events");
}));

app.get("/events/:id", wrapAsync(async (req, res) => {
  const { id } = req.params;
  const event = await Event.findById(id);
  res.render("show", { event });
}));

app.delete('/events/:id',wrapAsync(async (req,res)=>{
    const {id} = req.params;
    await Event.findByIdAndDelete(id);
    res.redirect('/events')
}))

app.get('/events/:id/book',wrapAsync(async(req,res)=>{
const eventId = req.params.id;
const event = await Event.findById(eventId);
res.render('book' , {event})

}))

app.post('/events/:id/book',wrapAsync(async(req,res)=>{
   const eventId = req.params.id;
   const event = await Event.findById(eventId);
   const name = event.name
   const {tickets} = req.body;
   res.send(`Successfully booked ${tickets} for event ${name}`)
    
    }))


app.listen(3000, () => {
  console.log("Server on 3000");
});
