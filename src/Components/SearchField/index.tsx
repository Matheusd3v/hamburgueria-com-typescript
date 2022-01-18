
import { InputAdornment } from '@material-ui/core'
import { InputFilter } from './style'
import search from '../../Assets/searchBtn.svg'
import { AiOutlineCloseCircle } from "react-icons/ai";
import { SearchProps } from '../../Types';
import { useContext } from 'react';
import { ProductsContext } from '../../Providers/Products';

const SearchField = ({active = false, callback}: SearchProps) => {
    const { setSearchProducts } = useContext(ProductsContext)

    return (
        <>
            <InputFilter
                    placeholder="Digitar Pesquisa"
                    variant="outlined"
                    size="small"
                    onChange={(e) => setSearchProducts(e.target.value)}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                <img className='filterImg' src={search} alt='filter'/>
                                {active && <button 
                                    onClick={callback}
                                    className='closeInput'
                                    >
                                    <AiOutlineCloseCircle/>
                                </button>}
                            </InputAdornment>
                            
                        ),
                    }}
                />
        </>
    )
}

export default SearchField
