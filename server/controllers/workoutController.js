const { Workout } = require('../models');

module.exports = {
    getWorkouts(req, res) {
        Workout.find()
            .then((workouts) => res.json(workouts))
            .catch((err) => res.status(500).json(err));
    },
    getSingleWorkouts(req, res) {
        Workout.findOne({ _id: req.params.workoutId })
            .then((workout) =>
                !workout
                    ? res.status(404).json({ message: 'No workout with that ID' })
                    : res.json(workout)
            )
            .catch((err) => res.status(500).json(err));
    },
    // createApplication(req, res) {
    //     Application.create(req.body)
    //         .then((application) => {
    //             return User.findOneAndUpdate(
    //                 { _id: req.body.userId },
    //                 { $addToSet: { applications: application._id } },
    //                 { new: true }
    //             );
    //         })
    //         .then((user) =>
    //             !user
    //                 ? res.status(404).json({
    //                     message: 'Application created, but found no user with that ID',
    //                 })
    //                 : res.json('Created the application 🎉')
    //         )
    //         .catch((err) => {
    //             console.log(err);
    //             res.status(500).json(err);
    //         });
    // },
    deleteWorkout(req, res) {
        Workout.findOneAndRemove({ _id: req.params.workoutId })
            .then((workout) =>
                !workout
                    ? res.status(404).json({ message: 'No workout with this id!' })
                    : User.findOneAndUpdate(
                        { Workout: req.params.workoutId },
                        { $pull: { workouts: req.params.workoutId } },
                        { new: true }
                    )
            )
            .then((user) =>
                !user
                    ? res.status(404).json({
                        message: 'Workout created but no user with this id!',
                    })
                    : res.json({ message: 'Workout successfully deleted!' })
            )
            .catch((err) => res.status(500).json(err));
    },
}