import './mylabel.css';

export interface MyLabelProps{
    /**
     * El nombre de label que vas a usar
    */
    label:string;
    /**
     * El tamaño que vas a usar en el label
    */
    size:'normal' | 'h1' | 'h2' | 'h3';
    /**
     * El color de la letra
    */
    fontColor?:string;
    /**
     * La capitalizacion del label
    */
    allCaps?:boolean;
    /**
     * El color del label
    */
    color?:'primary' | 'secondary' | 'tertiary'
    /**
     * El color del fondo
    */
    backgroundColor?:string;

}

export const MyLabel = ({
    label='no label',
    size='normal',
    allCaps=false,
    color='primary',
    fontColor,
    backgroundColor='transparent'
    }:MyLabelProps) => {
    return (
        <span className={`label ${size} text-${color} ${allCaps && 'capitalize' }`} style={{color:fontColor,backgroundColor}} >
            {allCaps? label.toLocaleUpperCase(): label}
        </span>
    )
}

export default MyLabel;