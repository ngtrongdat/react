/*
 *
 * HorsePage actions
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_HORSE_LIST,
  LOAD_HORSE_LIST_SUCCESS
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getHorsesList() {
  return {
    type: LOAD_HORSE_LIST
  };
}

export function getHorsesListSuccess(horsesList) {
  return {
    type: LOAD_HORSE_LIST_SUCCESS,
    horsesList
  };
}