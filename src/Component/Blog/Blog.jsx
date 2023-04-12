import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='blog'>
            <h1 className='blog-t'>Question & Ans</h1>
            <div>
                <div className='q1'>
                    <h3>1. When we use context API?</h3>
                    <p>Ans: The Context API is a feature in React a popular JavaScript library for building user interfaces, that allows you to share data across components without passing it explicitly through props. It is typically used in scenarios where data needs to be shared across multiple components at different levels of the component tree.</p>
                </div>
                <div className='q2'>
                    <h3>2. What is custom hook?</h3>
                    <p>Ans: Custom hooks allow you to abstract complex logic or state management from individual components and encapsulate it in a separate function, which can then be used in multiple components. Custom hooks are useful for extracting common functionality, such as data fetching, form handling, authentication, and other types of state management, into reusable hooks that can be easily consumed by different components without repeating the same logic in multiple places. </p>
                </div>
                <div className='q3'>
                    <h3>3. What is uses of useRef?</h3>
                    <p>Ans: useRef is a hook provided by React that allows you to create a mutable reference to a value or an element in a React component. It is commonly used for accessing and manipulating DOM elements directly, as well as for storing and accessing mutable values that persist across renders.</p>
                </div>
                <div className='q4'>
                    <h3>4. What is uses of useMemo?</h3> 
                    <p>Ans: useMemo is a hook provided by React that allows you to memoize the result of a computation and return the memoized result when the dependencies of that computation have not changed. This can help optimize performance in certain scenarios by preventing unnecessary computations and re-renders.</p>              
                 </div>
            </div>
        </div>

    );
};

export default Blog;