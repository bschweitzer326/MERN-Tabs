import React, { useState } from 'react';

const Tab = () => {

    const [content, setContent] = useState("");

    const contentInfo1 = () => {
        setContent("This is tab 1 content.");
    }

    const contentInfo2 = () => {
        setContent("This is tab 2 content.");
    }

    const contentInfo3 = () => {
        setContent("This is tab 3 content.");
    }

    return (
    <div className="container">

        <div>
            <button onClick={contentInfo1} className="btn btn-dark">Tab 1</button>
            <button onClick={contentInfo2} className="btn btn-danger">Tab 2</button>
            <button onClick={contentInfo3} className="btn btn-success">Tab 3</button>
        </div>
            
        <div>
            <p className="box">{content}</p>
        </div>

    </div>
    )

}

export default Tab;