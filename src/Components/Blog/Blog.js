import React from 'react';

const Blog = () => {
    return (
        <div>
            <h3 className='text-xl mt-3'>
                Question-01: What is Context API?
            </h3>
            <h5 className='font-bold'>Answer:</h5>
            <p>
                Context API is a way to essentially create global variables that can be passed around in a React app. This is the alternative to “prop drilling”, or passing props from grandparent to parent to child, and so on.
                Context provides a way to pass data through the component tree without having to pass props down manually at every level.
                The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.
                For a more in-depth definition, it provides a way for us to make particular data available to all components throughout the component tree no matter how deeply nested that component may be.
                To create a context, you need to use React.createContext which creates a context object and initializes a value with it that you passed as an argument.
                In short Context API provides a way to make specific data available to the deeply nested level to all components that are part of same component tree.
            </p>

            <h3 className='text-xl mt-3'> Question-02: What is Semantic Tag?</h3>
            <h5 className='font-bold'>Answer:</h5>

            <p>
                Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. Semantic element clearly describes its meaning to both the browser and the developer.
                Elements such as <span className='font-bold'>header</span>, <span className='font-bold'>footer</span>, <span className='font-bold'>article</span> are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.
                For example, <span> p</span> tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them.
                On the flip side, tags such as b and i are not semantic. They define only how the text should look (bold or italic), and don't provide any additional meaning to the markup.
                Other elements like div and span are called non-semantic elements because they do not clearly define their meaning.They can be used anywhere and for any purpose.
                <h2>Few example of Semantic Tag in HTML5: article, section, main, nav, table, details, header, footer etc.</h2>
                
            </p>

        </div>
    );
};

export default Blog;