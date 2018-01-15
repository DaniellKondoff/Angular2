import { IAppState } from './IAppState';
import { FILTER_COURSES } from './actions'
import { filterCourses } from './index';

const courses =  [
    {id:1, name: 'First COurse', topic: 'first Topic'},
    {id:2, name: 'Second COurse', topic: 'Second Topic'},
    {id:3, name: 'Third COurse', topic: 'Third Topic'}
];

const initialState : IAppState = {
   courses: courses,
   filteredCourses: courses
}

function filterCoursesFunc(state, action){
    return Object.assign({}, state, {
        filteredCourses: state.courses.filter(c => {
            return c.name.toLowerCase()
                .indexOf(action.searchText.toLowerCase()) > -1
        })
    })
}

export function reducer(state = initialState, action){
    switch(action.type){
        case FILTER_COURSES:
           return filterCoursesFunc(state, action);
        default: 
            return state;
    }
}