import React from 'react';
import backpack from "../Pages/backpack";
import home from "../Pages/Home";
import one from "../Pages/One";
import snakefish from "../Pages/snakefish";

export const routes = [
    {path: '/backpack', component: backpack, exact: true},
    {path: '/', component: home, exact: true},
    {path: '/one', component: one, exact: true},
    {path: '/snakefish', component: snakefish, exact: true},
]