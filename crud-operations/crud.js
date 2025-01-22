const express = require('express');
const mongoose = require('mongoose');
const { carSchema } = require('../models/Car');
const { render } = require('ejs');

const app = express();
const Car = mongoose.model('Car', carSchema, 'carsMakeModelPriceYear');
const router = express.Router();

router.get('/add-car', (_req, res) => {
    try {
        res.render('addCar', { successMessage: null, errorMessage: null });
    } catch (err) {
        console.error(err)
        res.status(500).send('Error fetching form')
    }

});



router.get('/find-car', (_req, res) => {
    try {
        res.render('findCar', { errorMessage: null, carCount: 0, cars: [] });
    } catch (err) {
        console.error(err)
        res.status(500).send('Error fetching form')
    }

});


router.get('/edit-car/:id', async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) {
            return res.status(404).send('Car not found');
        }
        res.render('editCar', { car, successMessage: null, errorMessage: null });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching form.');
    }
})


router.get('/delete-car', async (_req, res) => {
    try {
        res.render('deleteCar', { successMessage: null, errorMessage: null });
    } catch (err) {
        console.error(err)
        res.status(500).send('Error fetching form')
    }

});
// Route to render all cars
router.get('/view-cars', async (_req, res) => {
    try {
        const cars = await Car.find(); // Fetch all cars
        res.render('viewCars', { cars }); // Render the EJS template
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching car data');
    }
});

module.exports = router;

//CRUD OPERATIONS

//Add car to database
router.post('/add-car', async (req, res) => {
    try {
        const { make, model, price, launch_year } = req.body;

        // Check if a car with the same make, model, and year already exists
        const existingCar = await Car.findOne({ make, model, launch_year });

        if (existingCar) {
            // Duplicate found, render form with error message
            return res.render('addCar', {
                successMessage: null,
                errorMessage: `A car with the make "${make}", model "${model}", and year "${launch_year}" already exists.`
            });
        }

        // If no duplicate, create a new car
        const car = new Car({ make, model, price, launch_year });
        await car.save();

        // Render form with success message
        res.render('addCar', {
            successMessage: 'Car added successfully.',
            errorMessage: null
        });
    } catch (err) {
        console.error(err);
        res.render('addCar', {
            successMessage: null,
            errorMessage: 'Failed to add car. Please try again.'
        });
    }
});



//Find specific car in database
router.post('/find-car', async (req, res) => {
    try {
        const { make, model, launch_year } = req.body;

        //Dynamic query based on submitted fields
        const query = {};
        if (make) query.make = make;
        if (model) query.model = model;
        if (launch_year) query.launch_year = launch_year;

        if (Object.keys(query).length === 0) {
            return res.render('findCar', {
                errorMessage: 'Must select at least 1 filter',
                carCount: 0,
                cars: []
            });
        }
        // Find cars matching query
        const cars = await Car.find(query);

        //No cars found
        if (cars.length === 0) {
            return res.render('findCar', {
                errorMessage: 'No cars found',
                carCount: null,
                cars: []
            });
        }

        //Cars found
        res.render('findCar', {
            errorMessage: null,
            carCount: cars.length,
            cars
        });
    } catch (err) {
        console.error(err);
        res.status(500).render('findCar', {
            errorMessage: 'Error occured while searching for cars.',
            carCount: null,
            cars: []
        });
    }

});


//Edit car in database
router.post('/edit-car/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { make, model, price, launch_year } = req.body;


        const updatedCar = await Car.findByIdAndUpdate(id, { make, model, price, launch_year }, { new: true });

        if (!updatedCar) {
            return res.status(404).render('editCar', {
                car: {
                    _id: id, make, model, price, launch_year
                },
                successMessage: null,
                errorMessage: 'Car not found. Could not update.'
            })
        };


        res.render('editCar', {
            car: updatedCar,
            successMessage: 'Car updated successfully.',
            errorMessage: null,
        })

    }
    catch (err) {
        console.error(err);
        res.status(500).render('editCar', {
            car: { _id: req.params.id, ...req.body },
            successMessage: null,
            errorMessage: 'Error updating car. Please try again.',
        });
    }
});


//Delete car from database
router.post('/delete-car', async (req, res) => {
    try {
        const { make, model, launch_year } = req.body;
        const deletedCar = await Car.findOneAndDelete({ make, model, launch_year });
        if (!deletedCar) {
            return res.status(404).render('deleteCar', {
                successMessage: null,
                errorMessage: 'Car not found in database.',
            });
        }

        res.render('deleteCar', {
            successMessage: 'Car removed from database successfully.',
            errorMessage: null,
        });

    } catch (err) {
        console.error(err);
        res.status(500).render('deleteCar', {
            successMessage: null,
            errorMessage: 'Error deleting car.',
        });
    }
});

