import appReducer from './modules/app';
import alertsReducer from './modules/alerts';
import categoriesReducer from './modules/categories';
import formsReducer from './modules/forms';
import modalFormReducer from './modules/modalForm';
import meReducer from './modules/me';
import searchReducer from './modules/search';
import spaceReducer from './modules/space';
import submissionsReducer from './modules/submissions';
import submissionReducer from './modules/submission';
import submissionCountsReducer from './modules/submissionCounts';
import systemErrorReducer from './modules/systemError';

export default {
  app: appReducer,
  alerts: alertsReducer,
  categories: categoriesReducer,
  forms: formsReducer,
  modalForm: modalFormReducer,
  me: meReducer,
  search: searchReducer,
  space: spaceReducer,
  submissions: submissionsReducer,
  submission: submissionReducer,
  submissionCounts: submissionCountsReducer,
  systemError: systemErrorReducer,
};
