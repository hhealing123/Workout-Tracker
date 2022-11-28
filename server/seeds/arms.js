const { Workouts } = require('../models');

const exerciseData = [
  {
    workout_name: "Concentration Curl",
    muscles_worked: "arms",
    equipments: "bench and dumbbell",
    description: "Also known as dumbbell concentration curls, are a variation on traditional biceps curls.",
  },
  {
    workout_name: "Hammer Curl",
    muscles_worked: "arms",
    equipments: "dumbbell",
    description: "Also known as the dumbbell hammer curl or the neutral grip dumbbell curl, is a strength training exercise that targets your biceps and forearms.",
  },
  {
    workout_name: "Overhead Tricep Extension",
    muscles_worked: "arms",
    equipments: "dumbbell or cable",
    description: "Also known as a dumbbell tricep extension, is an isolation exercise that targets your triceps muscles.",
  },
  {
    workout_name: "Skull Crushers",
    muscles_worked: "arms",
    equipments: "dumbbell and bench",
    description: "Also known as a lying triceps extension, is an isolation exercise focused on your triceps muscles.",
  },
  {
    workout_name: "Tricep Dips",
    muscles_worked: "arms",
    equipments: "dip station or bench",
    description: "Are a bodyweight exercise designed to build strength in your arms, shoulders, and chest. They are also known as bench dips.",
  },
  {
    workout_name: "Bench Press",
    muscles_worked: "chest",
    equipments: "chest machine or dumbbell and bench or barbell",
    description: "Also known as a barbell bench press or a flat bench press, is a weight-training exercise that activates muscles throughout your upper body.",
  },
  {
    workout_name: "Chest Fly",
    muscles_worked: "chest",
    equipments: "cable or dumbbell and bench",
    description: "Primarily works the pectoralis major muscles to move the arms horizontally forward.",
  },
  {
    workout_name: "Push-ups",
    muscles_worked: "chest",
    equipments: "bodyweight",
    description: "Are a compound exercise that works muscle groups throughout your entire body.",
  },
  {
    workout_name: "Incline Press",
    muscles_worked: "chest",
    equipments: "dumbbell and bench or barbell",
    description: "Also known as the incline barbell bench press and the incline chest press, is a chest workout that activates muscles throughout your upper body.",
  },
  {
    workout_name: "Decline Press",
    muscles_worked: "chest",
    equipments: "dumbbell and bench or barbell",
    description: "Also known as the decline chest press and the decline barbell bench press, is a powerlifting exercise that targets your lower pectoral muscles.",
  },
  {
    workout_name: "Squats",
    muscles_worked: "legs",
    equipments: "rack and barbell",
    description: "A strength exercise in which the trainee lowers their hips from a standing position and then stands back up.",
  },
  {
    workout_name: "Deadlift",
    muscles_worked: "legs",
    equipments: "rack and barbell",
    description: "Is a strength training exercise characterized by lifting a barbell with a hip hinge movement pattern.",
  },
  {
    workout_name: "Lunges",
    muscles_worked: "legs",
    equipments: "dumbbell or bodyweight",
    description: "Is a bodyweight exercise that works multiple muscle groups throughout your lower body, including your hamstrings, quadriceps, glutes, hip flexors, and calves.",
  },
  {
    workout_name: "Hamstring Curls",
    muscles_worked: "legs",
    equipments: "leg curl machine",
    description: "Also known as leg curls, are isolation exercises that target the hamstring muscles on the backs of your legs.",
  },
  {
    workout_name: "Leg Extensions",
    muscles_worked: "legs",
    equipments: "leg extension machine",
    description: "Also known as a knee extension, is an isolation exercise focused on the quadriceps, which are made up of four specific muscles on the front of your thigh—the rectus femoris, vastus lateralis, vastus medialis, and vastus intermedius.",
  },
  {
    workout_name: "Pull-Ups",
    muscles_worked: "back",
    equipments: "Pull-Up bar",
    description: "Is an upper-body exercise that involves hanging from a pull-up bar by your hands with your palms facing away from you, and lifting your entire body up with your arm and back muscles until your chest touches the bar.",
  },
  {
    workout_name: "Pull-Down",
    muscles_worked: "back",
    equipments: "pull-down machine",
    description: "Works the back muscles and is performed at a workstation with adjustable resistance, usually plates.",
  },
  {
    workout_name: "Bent-over Row",
    muscles_worked: "back",
    equipments: "barbell",
    description: "Also known as the barbell row and the barbell bent-over row, is a compound exercise that activates muscles throughout your upper and lower body.",
  },
  {
    workout_name: "Upright Row",
    muscles_worked: "back",
    equipments: "cable or barbell or dumbbell",
    description: "Performed by holding a weight with an overhand grip and lifting it straight up to the collarbone.",
  },
  {
    workout_name: "Back Extension",
    muscles_worked: "back",
    equipments: "back extension machine or bodyweight",
    description: "Also known as the hyperextension, is an isolation exercise that targets muscles in your back. ",
  },
  {
    workout_name: "Bicycle Crunch",
    muscles_worked: "core",
    equipments: "body weight",
    description: "With your hands behind your head, lift your shoulder blades off the mat. Raise your knees to a 90-degree angle and alternate extending your legs as if pedaling a bike.",
  },
  {
    workout_name: "Leg Raises",
    muscles_worked: "core",
    equipments: "body weight",
    description: "Also known as the straight leg raise or the lying leg raise, is a bodyweight exercise that targets your abdominal muscles, particularly the lower abs. ",
  },
  {
    workout_name: "Oblique Crunch",
    muscles_worked: "core",
    equipments: "body weight",
    description: "Is a bodyweight exercise that targets your core muscles; specifically the obliques on the sides of your abdomen.",
  },
  {
    workout_name: "Reverse Crunch",
    muscles_worked: "core",
    equipments: "body weight",
    description: "Is a core exercise performed by lying face-up and raising your hips and lower back with your abdominal muscles in a controlled manner.",
  },
  {
    workout_name: "Russian Twist",
    muscles_worked: "core",
    equipments: "body weight",
    description: "Is a core exercise that works your abdominal muscles, especially your transverse abdominis as well as your internal and external obliques.",
  },
];

const seedExcersies = () => Workouts.bulkCreate(exerciseData);

module.exports = seedExcersies;