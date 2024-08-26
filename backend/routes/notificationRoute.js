const express = require('express');
const Notification = require('../models/notificationModel');
const router = express.Router();

// Get all notifications for admin
router.get('/getNotifications', async (req, res) => {
  try {
    const notifications = await Notification.find({ userId: req.user._id });
    res.status(200).json({ notifications });
  } catch (error) {  
    res.status(500).json({ error: 'Failed to fetch notifications' });
  }
});

// Create a new notification
router.post('/createNotification', async (req, res) => {
  const { message, userId } = req.body;
  try {
    const newNotification = new Notification({
      message,
      userId,
    });
    await newNotification.save();
    res.status(201).json({ message: 'Notification created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create notification' });
  }
});

// Mark a notification as read
router.put('/markNotificationAsRead/:id', async (req, res) => {
  try {
    await Notification.findByIdAndUpdate(req.params.id, { isRead: true });
    res.status(200).json({ message: 'Notification marked as read' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to mark notification as read' });
  }
});

module.exports = router;
