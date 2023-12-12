import { useRef, useState } from 'react';
import './search.css';

export const Search = ({ targets = [], setselectedImage }) => {
    const input = useRef(null)
    const [isFocused, setIsFocused] = useState(false);
    const [targetsFinded, setTargetsFinded] = useState([]);
    const [formState, setFormState] = useState({
        search: ''
    });

    const { search } = formState;

    const handleChangeInput = ({ target }) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value 
        });

        if (value.length > 0) {
            const regEx = new RegExp(value.toLowerCase());
            const tg = targets.filter(x => regEx.test(x.name.toLowerCase()));
            console.log(tg)
            setTargetsFinded(tg);
        }
    }

    const handleClickSelectTarget = ({ target }) => {
        const id = target.dataset.idTarget;
        setselectedImage(targets.find(x => x.id == id))
    }

    return (
        <div className="container relative">
            <input 
                ref={input}
                type="text"
                name='search'
                value={search}
                placeholder="Buscar..."
                onChange={handleChangeInput}
                onClick={(e) => {console.log(input)}}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setTimeout(() => {setIsFocused(false)}, 300)}
            />
            <div className="search"></div>
            {search.length > 0 && isFocused && (
                <div 
                    className='absolute top-[75px] z-10 rounded-lg bg-slate-500 w-full'
                    onClick={handleClickSelectTarget}
                >
                    {targetsFinded.map(x => (
                        <div key={x.id} data-id-target={x.id} className='hover:bg-slate-400 w-full h-full cursor-pointer'>
                            <div data-id-target={x.id} className='flex w-full h-full'>
                                <img data-id-target={x.id} className='' width='35px' height='20px' src={`/${x.id}.jpg`} alt="" />
                                <p data-id-target={x.id} className='p-3'>{x.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
