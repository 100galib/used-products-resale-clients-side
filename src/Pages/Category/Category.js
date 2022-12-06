import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from './Modal';
import SingleCategory from './SingleCategory';

const Category = () => {
    const spCategoryData = useLoaderData();
    const [showModl, setShowModal] = useState(null);
    return (
        <div>
            <div className='flex flex-col justify-center items-center my-9'>
                {
                    spCategoryData.map(singleCat => <SingleCategory key={singleCat._id} alldata={singleCat} setShowModal={setShowModal}></SingleCategory>)
                }
            </div>
            {showModl && <Modal showModl={showModl} setShowModal={setShowModal}></Modal>}
        </div>
    );
};

export default Category;