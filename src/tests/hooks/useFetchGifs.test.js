import { useFetchGifs } from "../../hooks/useFetchGifs";
import {renderHook} from "@testing-library/react-hooks"
describe('pruebas en el custom hook UseFetchGifs', () => {
    
    test('debe de retornar el estado inicial', async () => {
        //const {data:images,loading}=useFetchGifs("no game no life");
        //console.log(images,loading);
        //const resp=renderHook(()=>useFetchGifs("no game no life"));
        //console.log(resp);
        
        const {result,waitForNextUpdate}=renderHook(()=>useFetchGifs("no game no life"));
        const {data,loading}=result.current;

        await waitForNextUpdate();

        //console.log(data,loading);

        expect(data).toEqual([]);
        expect(loading).toBe(true);
        
    })

    test('debe de retornar un arreglo de imagenes y el loading en false', async () => {
        const {result,waitForNextUpdate}=renderHook(()=>useFetchGifs("no game no life"));
        await waitForNextUpdate();
        const {data,loading}=result.current;
        //console.log(data,loading);

        expect(data.length).toBe(10);
        expect(loading).toBe(false)
    })
    
})
