import React from 'react';
import {Virtuoso} from 'react-virtuoso';

function App() {
    const virtuoso = null;

    return (
        <div>
            <Virtuoso
                ref={virtuoso}
                style={{height: "50vh"}}
                item={index => <div>{index}</div>}
                totalCount={50}
            />
        </div>
    );
}

export default App;
