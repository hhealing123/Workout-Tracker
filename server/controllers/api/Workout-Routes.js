const router = require('express').Router();
const { Workouts } = require('../../models');
const withAuth = require('../../utils/auth');