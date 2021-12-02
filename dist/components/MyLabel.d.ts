/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * El nombre de label que vas a usar
    */
    label: string;
    /**
     * El tamaño que vas a usar en el label
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * El color de la letra
    */
    fontColor?: string;
    /**
     * La capitalizacion del label
    */
    allCaps?: boolean;
    /**
     * El color del label
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * El color del fondo
    */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
