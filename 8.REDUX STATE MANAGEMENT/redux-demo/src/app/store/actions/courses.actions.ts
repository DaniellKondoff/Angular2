import { Action } from "@ngrx/store";
import { Course } from "../../models/course.model"
import { type } from "os";

export const ADD_COURSE = '[COURSE] Add';
export const REMOVE_COURSE = '[COURSE] Remove';

export class AddCourse implements Action{
    readonly type: string = ADD_COURSE;

    constructor(public payload: Course){

    }
}

export class RemoveCourse implements Action {
    readonly type: string = REMOVE_COURSE;

    constructor(public payload: number){

    }
}

export type ActionTypes = AddCourse | RemoveCourse;