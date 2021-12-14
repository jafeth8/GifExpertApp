import "@testing-library/jest-dom"
import {shallow} from "enzyme"
import { AddCategory } from "../../components/AddCategory";
describe('pruebas en componente AddCategory.js', () => {

    //const funcion=()=> {}
    const setCategories=jest.fn();

    let wrapper =shallow(<AddCategory setcategories={setCategories}/>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper =shallow(<AddCategory setcategories={setCategories}/>);
    })

    test('mostrar correctamente AddCategory', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe cambiar la caja de texto', () => {
        const input=wrapper.find('input');
        const value="parametro"
        input.simulate('change',{target:{value:value}});
    })
    
    test('no debe postear la informacion con submit', () => {
        const formulario=wrapper.find('form');
        formulario.simulate('submit',{preventDefault:()=>{}});
        expect(setCategories).not.toHaveBeenCalled();
    })
    
    test('debe de llamar al setCategories y limpiar la caja de texto', () => {
        const value="animeflv";

        const input=wrapper.find('input');
        input.simulate('change',{target:{value}});

        wrapper.find('form').simulate('submit',{preventDefault:()=>{}});

        expect(setCategories).toHaveBeenCalled();
        
        expect(input.prop('value')).toBe('');

    })
    
    
})
