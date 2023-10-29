import Spinner from './Spinner';
import UseGif from '../hooks/UseGif';

const Random = () => {

    const { gif, loading, fetchData } = UseGif();

    return (
        <div className='w-1/2 h-fit bg-green-600 items-center flex flex-col rounded-lg border border-black gap-y-5 py-5'>
            <h1 className='font-bold text-2xl uppercase underline mb-5'>A Random Gif</h1>
            {loading ? <Spinner /> : <img src={gif} alt='gif' width={430} />}
            <button onClick={() => fetchData()}
                className='text-2xl font-semibold bg-slate-300 w-10/12 px-3 py-2 rounded-lg mt-5' >
                Generate
            </button>
        </div>
    );
};

export default Random;