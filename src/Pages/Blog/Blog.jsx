import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto p-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>

      <div className="flex flex-wrap -mx-4">
        <div className="w-full p-4">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">
                What is an access token and refresh token ?
              </h2>
              <p className="text-gray-700 mb-4">
                An access token and refresh token are commonly use in
                authentication system. The access token is a short-live token
                that is used to authenticate API request . It typically included
                in the request header. The refresh token is a long-lived token
                that is used to obtain new access tokens when the current one
                expires. It is securely stored on the client-side and sent to
                the server when needed.
              </p>
              <a
                href="#"
                className="text-yellow-500 hover:text-yellow-500 font-medium"
              >
                Read more
              </a>
            </div>
          </div>
        </div>

        <div className="w-full p-4">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">
                Compare SQL and NoSQL databases
              </h2>
              <p className="text-gray-700 mb-4">
                SQL is Structured Query Language and NoSQL is Not Only SQL are
                two types of databases with different approaches. SQL databases
                are based on the relational model and use structured schemas,
                while NoSQL databases are non-relational and have flexible
                schemas. SQL databases are suitable for complex queries and
                transactions, whereas NoSQL databases are better for handling
                large amounts of unstructured or semi-structured data.
              </p>
              <a
                href="#"
                className="text-yellow-500 hover:text-blue-700 font-medium"
              >
                Read more
              </a>
            </div>
          </div>
        </div>

        <div className="w-full p-4">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">What is Express.js?</h2>
              <p className="text-gray-700 mb-4">
                Express.js is a popular web application framework for Node.js.
                It provides a simple and flexible foundation for building web
                applications and APIs. Express.js helps with handling HTTP
                requests, routing, middleware, and various other features that
                simplify server-side development.
              </p>
              <a
                href="#"
                className="text-yellow-500 hover:text-blue-700 font-medium"
              >
                Read more
              </a>
            </div>
          </div>
        </div>

        <div className="w-full p-4">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">What is Nest.js?</h2>
              <p className="text-gray-700 mb-4">
                Nest.js is a progressive Node.js framework for building
                efficient, reliable, and scalable server-side applications. It
                uses modern JavaScript/TypeScript features and follows the
                architectural patterns of Angular. Nest.js provides a modular
                and testable structure, dependency injection, and many other
                features that make application development easier and more
                organized.
              </p>
              <a
                href="#"
                className="text-yellow-500 hover:text-blue-700 font-medium"
              >
                Read more
              </a>
            </div>
          </div>
        </div>

        <div className="w-full p-4">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">
                What is MongoDB aggregate?
              </h2>
              <p className="text-gray-700 mb-4">
                MongoDB aggregate function is used for data aggregation
                operations. It allows you to perform complex queries and
                transformations on your data. With aggregate, you can group
                documents, calculate aggregations, filter results, and more. It
                provides a flexible and powerful way to process and analyze data
                within MongoDB.
              </p>
              <a
                href="#"
                className="text-yellow-500 hover:text-blue-700 font-medium"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
