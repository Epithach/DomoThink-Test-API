/**
 * index.js
 * Defines all the API routes.
 *
 */

import express from 'express';
import login from './login';
import users from './users';
import devices from './devices';
import directives from './directives';
import plugins from './plugins';
import store from './store';
// import box from './box';

const routes = express.Router(); // eslint-disable-line new-cap

// Login routes. Everyone can access this route
routes.post('/login', login.login);
routes.post('/create_account', users.createAccount);
routes.post('/logout', login.logout);

// Devices routes.
routes.get('/devices', devices.get);
routes.post('/devices', devices.post);
routes.put('/devices', devices.put);
routes.delete('/devices/:id', devices.delete);

// Directives routes.
routes.get('/directives', directives.get);
routes.post('/directives', directives.post);
routes.put('/directives', directives.put);
routes.delete('/directives/:id', directives.delete);

// Plugins routes.
routes.get('/plugins', plugins.get);
routes.post('/plugins/install', plugins.install);
routes.delete('/plugins/uninstall', plugins.uninstall);

// Store routes.
routes.get('/store', store.get);

// User management routes
routes.get('/user', users.getAllUsers);
routes.get('/user/:id', users.getUser);
routes.post('/user', users.createUser);
routes.put('/user', users.updateUser);
routes.delete('/user/:id', users.deleteUser);
routes.post('/user/change_password', users.changePassword);

// Plugins management routes
// Box management routes
// Store management routes

export default routes;
