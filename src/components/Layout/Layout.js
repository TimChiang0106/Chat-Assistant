import React, { Fragment } from 'react';

import Header from '../UI/Header/Header';
import Chat from '../sections/chat/Chat';

const Layout = () => {

 return (
     // eslint-disable-next-line react/style-prop-object
     <div className='T4LgNb'>
         <div className='kFwPee'>
             <div className='df2HU Qoys2e'>
             <Fragment>
                  <Header />
                  <main>
                    <Chat />
                  </main>
             </Fragment>
            </div>
         </div>
     </div>



  );
};

export default Layout;
