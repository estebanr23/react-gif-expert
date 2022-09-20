import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        // console.log(target.value);
        setInputValue( target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if(inputValue.trim().length <= 1) return; // Si no se cumple no se ejecuta el resto del codigo

        // setCategories(categories => [ inputValue, ...categories ]); // envio un callback

        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit ={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
        
    )
}

// Al hacer un cambio en el input de dispara el evento, se lo envia a la funcion OnInputChange
// la funcion lo recibe y muestra las propiedades del evento, interesa la propiedad target
// La forma resumida cuando se toma un evento y se lo envia a la funcion es la de arriba, 
// event es enviado implicitamente al llamar a onInputChange, esta lo desestructura al recibirlo.
/* export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange = (event) => {
        console.log(event);
        setInputValue( event.target.value );
    }

    return (
        <input
            type="text"
            placeholder="Buscar Gifs"
            value={ inputValue }
            onChange={ (event) => onInputChange(event) }
        />
    )
} */