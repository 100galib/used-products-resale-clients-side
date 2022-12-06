import React from 'react';

const Blog = () => {
    return (
        <div className='pl-20 grid grid-cols-1 lg:grid-cols-2'>
            <div className="card my-3 card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://images.unsplash.com/photo-1594904351111-a072f80b1a71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                    <p>It is recommended to avoid storing such information in the app’s state to avoid the URL in our app getting out of sync. The URL should be used as the system of record, Read from it as needed for information related to sorting, pagination, etc. Update the URL as required when the settings</p>
                    <p>The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB. These are native browser technologies.</p>
                    <p>The third option is to use store state locally. It is useful when one component needs the state. Examples include a toggle button, a form, etc.</p>
                </div>
            </div>
            <div className="card my-3 card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">How does prototypical inheritance work?</h2>
                    <p>I'll have to respectfully disagree with Ryan about what "prototypal inheritance" means. While it's true that JavaScript is just objects and not classes, I take issue with the word "inheritance" itself, as that name implies (from classical languages) a copy-operation where behavior from the "parent" is duplicated into the "child". This is not at all how JavaScript works.

                    In JavaScript, two objects end up linked to each other (via the technique Ryan showed), and this linkage is through the internal [[Prototype]] chain. As Tim Lind correctly explained in his answer, this linkage via [[Prototype]] is how when you ask for a property or method on an object, if it's not there, the internal [[Get]] lookup operation will traverse the [[Prototype]] chain and try to instead resolve the property/method on the linked object. If not found there, it will keep going up the [[Prototype]] chain until it either satisfies the lookup, or runs out of objects to traverse.

                    When you analyze the mechanism in this way, it's clear that, by default, JavaScript isn't "inheriting" by copying DOWN the chain, but rather delegating UP the chain. It's a completely different mechanism.</p>
                </div>
            </div>
            <div className="card my-3 card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://images.unsplash.com/photo-1600933435972-e4a4a40a4abd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">What is a unit test? Why should we write unit tests?</h2>
                    <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.

                    Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.

                    Unit testing is a component of test-driven development (TDD), a pragmatic methodology that takes a meticulous approach to building a product by means of continual testing and revision. This testing method is also the first level of software testing, which is performed before other testing methods such as integration testing. Unit tests are typically isolated to ensure a unit does not rely on any external code or functions. Testing can be done manually but is often automated.</p>
                </div>
            </div>
            <div className="card my-3 card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://images.unsplash.com/photo-1506526794364-ba711a0d97fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">React vs. Angular vs. Vue?</h2>
                    <p>Angular, developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the original name – AngularJS). Angular 2+ is known as just Angular. Although AngularJS (version 1) still gets updates, we will focus the discussion on Angular.
                    Vue, also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesn’t have the backing of a large company. The most current version is always announced on the official Vue website on their releases page. Contributors for Vue are supported by Patreon. It should be noted that Vue also has its own GitHub repo, and functions using TypeScript.
                    React, developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products (Facebook, Instagram, and WhatsApp). Similar to Vue, the React developers also announce their newest version on the blog section of the React website.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;