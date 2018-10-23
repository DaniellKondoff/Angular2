import { Course } from "src/app/models/course.model";
import * as CourseActions from '../actions/courses.actions';

const initState: Course[]=[
    {name:'Anuglar Redux', url:'http://test.bg'}
]
export function coursesReducer(state: Course[], action : CourseActions.ActionTypes) {

    switch(action.type) {
        case CourseActions.ADD_COURSE:
            return addCourse(state, action.payload)
        case CourseActions.REMOVE_COURSE:
            return [];
        default:
            return state;
    }
}

function addCourse (state: Course[], course) {
    return [...state, course];
}