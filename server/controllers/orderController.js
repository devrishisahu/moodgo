import Coupon from "../models/CouponModel.js";
import Event from "../models/eventModel.js";
import Order from "../models/orderModel.js";

const getTickets = async (req, res) => {
  const myTickets = await Order.find({ user: req.user._id })
    .populate("user")
    .populate("event");

  if (!myTickets) {
    res.status(404);
    throw new Error("Tickets Not Booked Yet...");
  }
  res.status(200).json(myTickets);
};

const getTicket = async (req, res) => {
  const myTicket = await Order.findById(req.params.tid)
    .populate("user")
    .populate("event");

  if (!myTicket) {
    res.status(404);
    throw new Error("Ticket Not Found...");
  }
  res.status(200).json(myTicket);
};

const bookTicket = async (req, res) => {
  let userId = req.user._id;

  const { numberOfSeats, couponCode } = req.body;

  if (!numberOfSeats) {
    res.status(409);
    throw new Error("Kindly Select Atleast 1 seat to proceed ");
  }

  //Check if events exists
  const eventId = req.params.eid;

  const event = await Event.findById(eventId);

  if (!event) {
    res.status(404);
    throw new Error("Event not Found");
  }

  //Check if seats available

  if (numberOfSeats > 5) {
    res.status(409);
    throw new Error("only 5 seats Allowed per User");
  }

  if (event.totalSeats < numberOfSeats) {
    res.status(400);
    throw new Error("Seats not Available");
  }

  //   check if user have already booked 5 seats

  const allPreviousOrders = await Order.find({ event: event._id });

  // Filter my Orders By Event
  const myOrders = allPreviousOrders.filter(
    (order) => order.user.toString() === userId.toString(),
  );

  // calculate Total Seats Booked

  let myExistingBookedSeats = myOrders.reduce((acc, order) => acc + order.seats, 0);

 if(myExistingBookedSeats >= 5){
  res.status(400)
  throw new Error("Limit Exceeded...")
 }

  //Check if request is coming with Coupon

  let couponExists;
  if (couponCode) {
    couponExists = await Coupon.findOne({ couponCode });

    // if Coupon is valid
    if (!couponExists) {
      res.status(404);
      throw new Error("Invalid Coupon code...");
    }
  }

  let order = await Order.create({
    user: req.user.id,
    event: eventId,
    seats: numberOfSeats,
    status: "confirmed",
    isDiscounted: couponCode ? true : false,
    billedAmount: couponCode
      ?( event.ticketPrice -
        (event.ticketPrice * couponExists.couponDiscount) / 100) * numberOfSeats
      : event.ticketPrice * numberOfSeats,
  });

  if (!order) {
    res.status(409);
    throw new Error("Order Not Accepted");
  }
  res.status(200).json(order);

  res.send("Ticket booked");
};

const cancelTicket = async (req, res) => {
  res.send("Ticket Cancelled !.");
};

const orderController = { bookTicket, cancelTicket, getTickets, getTicket };

export default orderController;
