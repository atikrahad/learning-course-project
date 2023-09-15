
# AR Learning Platform.

This project was created by (react + tailwind + vite).

## This project's 3 features:

- 9 Programming-related courses.
- 2 Types of cards (course details cards and a selected card).
- Can select a course by course duration time in the selected card.


## How I managed state in my project.

For this project, I used a 2-time useState hook. First used receiving API data from useEffenct hook. It received data as an array in setCurses function. And used this data using useState's first value courses. Second used for onClick handle. After clicking the course data added in useState's function setSelectcourse as an array. Also used this data using useState's first value selectcourse.
