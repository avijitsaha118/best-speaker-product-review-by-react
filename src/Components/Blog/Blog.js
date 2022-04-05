import React from 'react';

const Blog = () => {
    return (
        <div>
            <h3 className='text-xl mt-3'>
                Question-01: What is Context API?
            </h3>
            <h5 className='font-bold'>Answer:</h5>
            <p>
                Context provides a way to pass data through the component tree without having to pass props down manually at every level.”
                The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.
                For a more in-depth definition, it provides a way for us to make particular data available to all components throughout the component tree no matter how deeply nested that component may be.
            </p>

            <h3 className='text-xl mt-3'> Question-02: What is Semantic Tag?</h3>
            <h5 className='font-bold'>Answer:</h5>
             
            <p>
            Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. <br/>
Elements such as <header/>, <footer/> and <article/> are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.
For example, a <p/> tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them.

On the flip side of this equation, tags such as <b/> and <i/> are not semantic. They define only how the text should look (bold or italic), and don't provide any additional meaning to the markup.

            </p>

        </div>
    );
};

export default Blog;