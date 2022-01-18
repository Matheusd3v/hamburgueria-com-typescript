import { ButtonProps } from '../../Types'
import { BtnDefault } from './style'

const ButtonDefault = ({children, functionName, mediumSize = false, greyColor = false}: ButtonProps) => {
    return (
        <BtnDefault 
            onClick={functionName} 
            sizeFont={mediumSize}
            gray={greyColor}
        >
            {children}
        </BtnDefault>
    )
}

export default ButtonDefault
