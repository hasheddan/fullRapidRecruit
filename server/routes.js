const router = require('express').Router();
const requestHandler = require('./requests/request-handler.js');
const authFuncs = require('./auth/auth-functions.js');

/*
	LOGIN ROUTES
*/
router.post('/register', authFuncs.loginRedirect, requestHandler.register);
router.post('/login', authFuncs.loginRedirect, requestHandler.login);
router.get('/logout', authFuncs.loginRequired, requestHandler.logout);

/*
	ORGANIZATION ROUTES
*/
router.get('/organizations', authFuncs.loginRequired, requestHandler.getOrganizations);

/*
	MEMBERS ROUTES
*/
router.get('/members', authFuncs.loginRequired, requestHandler.getMembers);

/*
	LISTS ROUTES
*/
router.get('/lists', authFuncs.loginRequired, requestHandler.getLists);

/*
	EVENTS ROUTES
*/
router.get('/events', authFuncs.loginRequired, requestHandler.getEvents);

/*
	RECRUITS ROUTES
*/
router.get('/recruits', authFuncs.loginRequired, requestHandler.getRecruits);

/*
	INTERACTIONS ROUTES
*/
router.get('/interactions', authFuncs.loginRequired, requestHandler.getInteractions);

/*
	INTERACTIONS_RECORDS ROUTES
*/
router.get('/interactions_records', authFuncs.loginRequired, requestHandler.getInteractionsRecords);

/*
	SIGN_IN ROUTES
*/
router.get('/sign_in', authFuncs.loginRequired, requestHandler.getSignIn);

/*
	VOTES ROUTES
*/
router.get('/votes', authFuncs.loginRequired, requestHandler.getVotes);

/*
	VOTES_RECORDS ROUTES
*/
router.get('/vote_records', authFuncs.loginRequired, requestHandler.getVoteRecords);

/*
	SHARE ROUTES
*/
router.get('/share', authFuncs.loginRequired, requestHandler.getShare);

module.exports = router;