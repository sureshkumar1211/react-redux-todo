//IMPORT PACKAGE MODULE
import React, { Fragment } from 'react';

//IMPORT PROJECT MODULE
import TodoCard from '../TodoCard';
import Header from '../Header';

const layout = () => (
    <Fragment>
        <Header />
        <TodoCard />
    </Fragment>
);

export default layout;