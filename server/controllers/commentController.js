import Comment from "../models/commentModel.js";
import Event from "../models/eventModel.js";

const getComments = async (req, res) => {
  const eventId = req.params.eid;

  const comments = await Comment.find({ event: eventId })
    .populate("user")
    .populate("event");

  if (!comments) {
    res.status(404);
    throw new Error("No Comments Yet!");
  }
  res.status(200).json(comments);
};

const addComment = async (req, res) => {
  const { text, rating } = req.body;

  if (!text || !rating) {
    res.status(404);
    throw new Error("Please Fill All The Details!");
  }

  const eventId = req.params.eid;
  const userId = req.user._id;

  const event = await Event.findById( eventId );

  if (!event) {
    res.status(404);
    throw new Error("Event Not Found!");
  }

  const newComment = await Comment.create({
    user: userId,
    event: eventId,
    text: text,
    rating: rating,
  });

  if (!newComment) {
    res.status(409);
    throw new Error("Comment not Created!");
  }
  res.status(200).json(newComment);
};

const commentController = { getComments, addComment };

export default commentController;
