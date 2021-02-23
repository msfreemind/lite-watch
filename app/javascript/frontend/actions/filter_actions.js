import { fetchVideos } from "./video_actions";

export const CHANGE_FILTER = "CHANGE_FILTER";

// sync action creators

export const changeFilter = (filter, value) => ({
  type: CHANGE_FILTER,
  filter,
  value
});

// async action creators

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return fetchVideos(getState().ui.filters)(dispatch);
};