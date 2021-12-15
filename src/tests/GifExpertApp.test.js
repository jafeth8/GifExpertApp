import "@testing-library/jest-dom"
import {shallow} from "enzyme"
import { GifExpertApp } from "../GifExpertApp"

describe('pruebas en <GifExpertApp/>', () => {
    
    

    test('mostrar correctamente el componente', () => {
        const wrapper=shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('AddCategory').exists()).toBe(true);
        //expect(wrapper.find('GridGif').exists()).toBe(true);
    })

    test('debe mostrar una lista de categorias', () => {
        const categories=['One punch man', 'no game no life'];
        const wrapper=shallow(<GifExpertApp defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GridGif').length).toBe(categories.length);
    })
    

  
    
    
})
