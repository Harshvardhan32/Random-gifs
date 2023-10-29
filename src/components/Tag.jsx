import React from 'react';
import { useState } from 'react';
import Spinner from './Spinner';
import UseGif from '../hooks/UseGif';

const Tag = () => {

    const [tag, setTag] = useState('');
    const { gif, loading, fetchData } = UseGif(tag);

    return (
        <div className='w-1/2 bg-sky-600 items-center flex flex-col rounded-lg border border-black gap-y-3 py-5'>
            <h1 className='font-bold text-2xl uppercase underline mb-5'>Random {tag} Gif</h1>
            {loading ? <Spinner /> : <img src={gif} alt="gif" width={430} />}
            <div className='w-10/12 mt-5'>
                <input type="text"
                    onChange={(event) => setTag(event.target.value)}
                    value={tag}
                    className='text-2xl text-center font-normal bg-slate-300 w-full px-3 py-2 rounded-lg' />
            </div>
            <button onClick={() => fetchData(tag)}
                className='text-2xl font-semibold bg-slate-300 w-10/12 px-3 py-2 rounded-lg'>
                Generate
            </button>
        </div>
    );
};

export default Tag;