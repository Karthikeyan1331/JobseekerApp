import React, { useState } from 'react'
import {
    Checkbox, FormControlLabel, Slider
    , Select, MenuItem, FormControl,
    InputLabel, TextField, Box, Grid
} from '@mui/material';
const Filter = () => {
    const [selectedValue, setSelectedValue] = useState('1');
    const [value, setValue] = useState([0, 300000]); // Initial range from 0 to 300k
    const [checked, setChecked] = useState({
        fullTime: false,
        partTime: false,
        internship: false,
        freelance: false,
        onSite: false,
        hybrid: false,
        remote: false,
    });

    const handleChangeCheckbox = (event) => {
        setChecked({
            ...checked,
            [event.target.name]: event.target.checked,
        });
    };
    const handleChangeRange = (event, newValue) => {
        setValue(newValue);
    };
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleInputChange = (index, event) => {
        const newValue = [...value];
        newValue[index] = Number(event.target.value);
        setValue(newValue);
    };
    return (
        <div className="w-full flex justify-center">
            <div className="w-full border rounded-md shadow-md">
                <div className="flex px-4 py-2">
                    <div className="font-bold text-[20px]">Filter</div>
                    <div className="ml-auto mt-1 text-red-600 text-[15px]">Clear all</div>
                </div>
                <hr />
                <div className='my-4'>
                    <div className='font-bold ml-3'>Date Post</div>
                    <div className="flex justify-center items-center mt-3 ">
                        <FormControl className="w-[90%] h-10 px-2">
                            <InputLabel id="select-label">Select an Option</InputLabel>
                            <Select
                                labelId="select-label"
                                id="select"
                                value={selectedValue}
                                onChange={handleChange}
                                label="Select an Option"
                                className="h-full"
                                MenuProps={{
                                    PaperProps: {
                                        style: {
                                            maxHeight: 200, // Adjust the height of the dropdown menu if needed
                                        },
                                    },
                                }}
                            >
                                <MenuItem value="1">Anytime</MenuItem>
                                <MenuItem value="2">Last 24 hours</MenuItem>
                                <MenuItem value="3">A week ago</MenuItem>
                                <MenuItem value="4">A month ago</MenuItem>
                                <MenuItem value="5">Several months ago</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <hr />
                <div className='my-3 flex flex-col items-center'>
                    <div className="w-full ml-6 flex justify-start mb-3">
                        <div className="font-bold text-left">
                            Job Type
                        </div>
                    </div>

                    <Box className="w-full ml-6">
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={checked.fullTime}
                                            onChange={handleChangeCheckbox}
                                            name="fullTime"
                                            color="primary"
                                        />
                                    }
                                    label="Full time"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={checked.partTime}
                                            onChange={handleChangeCheckbox}
                                            name="partTime"
                                            color="primary"
                                        />
                                    }
                                    label="Part time"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={checked.internship}
                                            onChange={handleChangeCheckbox}
                                            name="internship"
                                            color="primary"
                                        />
                                    }
                                    label="Internship"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={checked.freelance}
                                            onChange={handleChangeCheckbox}
                                            name="freelance"
                                            color="primary"
                                        />
                                    }
                                    label="Freelance"
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </div>
                <hr />
                <div className="my-3 flex flex-col items-center">
                    <div className="w-full ml-6 flex justify-start mb-3">
                        <div className="font-bold text-left">
                            Range Salary
                        </div>
                    </div>

                    <Box className="w-[90%]">
                        <Slider
                            value={value}
                            onChange={handleChangeRange}
                            valueLabelDisplay="auto"
                            min={0}
                            max={300000}
                            step={1}
                            aria-labelledby="range-slider"
                            getAriaValueText={(value) => `${value / 1000}k`} // Format value as k
                        />

                        <div className="flex justify-between px-1 mt-2">
                            <TextField
                                value={value[0]}
                                className='w-[35%]'
                                onChange={(event) => handleInputChange(0, event)}
                                type="number"
                                inputProps={{ min: 0, max: 300000 }}
                                variant="outlined"
                                size="small"
                            />
                            <TextField
                                value={value[1]}
                                className='w-[35%]'
                                onChange={(event) => handleInputChange(1, event)}
                                type="number"
                                inputProps={{ min: 0, max: 300000 }}
                                variant="outlined"
                                size="small"
                            />
                        </div>
                    </Box>
                </div>
                <hr />
                <div className='my-3 flex flex-col items-center'>
                    <div className="w-full ml-6 flex justify-start mb-3">
                        <div className="font-bold text-left">
                            On-site/remote
                        </div>
                    </div>

                    <Box className="w-full ml-6">
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={checked.onSite}
                                            onChange={handleChangeCheckbox}
                                            name="onSite"
                                            color="primary"
                                        />
                                    }
                                    label="On-site"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={checked.hybrid}
                                            onChange={handleChangeCheckbox}
                                            name="hybrid"
                                            color="primary"
                                        />
                                    }
                                    label="Hybrid"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={checked.remote}
                                            onChange={handleChangeCheckbox}
                                            name="remote"
                                            color="primary"
                                        />
                                    }
                                    label="Remote"
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default Filter