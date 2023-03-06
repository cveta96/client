import React from 'react';

import { useRef, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

import { Spinner } from '../../components';

import { useNewItemMutation } from '../../api/itemApiSlice';
import { selectCurrentToken } from '../../slices/authSlice';
import { useSelector } from 'react-redux';

const NewItem = () => {
  const itemRef = useRef();
  const errRef = useRef();
  const [name, setName] = useState('');
  const [description, setDesc] = useState('');
  const [price, setPrice] = useState(0);
  const [errMsg, setErrMsg] = useState('');

  const user = jwt_decode(useSelector(selectCurrentToken));
  const userId = user.user.id;

  const [newItem, { isLoading }] = useNewItemMutation();

  useEffect(() => {
    itemRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [name, description, price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const item = await newItem({ userId, name, description, price });
      console.log(item);
    } catch (err) {
      console.log(err);
    }
  };

  const handledNameInput = (e) => setName(e.target.value);
  const handleDescriptionInput = (e) => setDesc(e.target.value);
  const handlePriceInput = (e) => setPrice(e.target.value);

  const content = isLoading ? (
    <Spinner />
  ) : (
    <section>
      <div className='relative flex flex-col justify-center min-h-screen overflow-hidden'>
        <div className='te w-full p-6 m-auto bg-main-bg rounded-md shadow-xl lg:max-w-xl'>
          <h1 className='text-3xl font-semibold text-center text-purple-700 uppercase'>
            Create new item
          </h1>

          <span ref={errRef} className='text-red-500'>
            {errMsg}
          </span>

          <form className='mt-6' onSubmit={handleSubmit}>
            <div className='mb-2'>
              <label
                htmlFor='name'
                className='block text-sm font-semibold text-gray-800'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                ref={itemRef}
                value={name}
                onChange={handledNameInput}
                autoComplete='off'
                required
                className='block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
              />
            </div>
            <div className='mb-2'>
              <label
                htmlFor='description'
                className='block text-sm font-semibold text-gray-800'
              >
                Description
              </label>
              <input
                type='text'
                id='description'
                onChange={handleDescriptionInput}
                value={description}
                required
                className='block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
              />
            </div>
            <div className='mb-2'>
              <label
                htmlFor='price'
                className='block text-sm font-semibold text-gray-800'
              >
                Price
              </label>
              <input
                type='number'
                id='price'
                onChange={handlePriceInput}
                value={price}
                required
                className='block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
              />
            </div>
            <div className='mt-6'>
              <button className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600'>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );

  return content;
};

export default NewItem;
