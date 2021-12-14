import "@testing-library/jest-dom"
import {shallow} from 'enzyme'
import { GridGif } from "../../components/GridGif";

import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock('../../hooks/useFetchGifs')


const category ="kira"

describe('pruebas en <GridGif/>', () => {

    test('debe mostrar el componente correctamente', () => {
        useFetchGifs.mockReturnValue({
            data:[],
            loading:true
        })

        const wrapper=shallow(<GridGif category={category}/>);
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de cargarse los <GifGridItem/> cuando se cargan imagenes useFetchGifs', () => {
        
        const gifs=[
            {id:"Abc",title:"Cualquiera",url:"https://localhost/cualquiera.jpg"},
            {id:"Abcd",title:"Cualquiera",url:"https://localhost/cualquiera.jpg"}
        ]

        useFetchGifs.mockReturnValue({   
            data:gifs,
            loading:false
        })
        const wrapper=shallow(<GridGif category={category}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
    
    
})

